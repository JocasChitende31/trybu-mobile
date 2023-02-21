import axios, { AxiosResponse } from 'axios'

type AxiosClientProps = {
  hasFormData?: boolean
  token: string
}

const axiosClient = ({ token, hasFormData }: AxiosClientProps) => {
  console.log('hasFormData', hasFormData)

  return axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
      'Content-Type': hasFormData ? 'multipart/form-data' : 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
}

import {
  HttpPostClient,
  HttpPostParams,
  HttpResponse,
} from '../../../data/protocol/http'
import {
  HttpGetClient,
  HttpGetParams,
} from '../../../data/protocol/http/http-get-client'
import { AuthUtil } from '../../../services/auth-util'

const getToken = async (): Promise<any> => {
  return await AuthUtil.getToken()
}

export class AxiosHttpClient
  implements HttpPostClient<any, any>, HttpGetClient<any>
{
  async post(params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    let httpResponse: AxiosResponse<any>
    try {
      const hasFormData = params?.options?.hasFormData
      const token = await getToken()
      httpResponse = await axiosClient({ token, hasFormData }).post(
        params.url,
        params.body
      )
    } catch (error) {
      httpResponse = error?.response ?? {
        data: error,
        statusCode: 500,
      }
    }
    return {
      body: httpResponse.data,
      statusCode: httpResponse.status,
    }
  }

  async get(params: HttpGetParams): Promise<HttpResponse<any>> {
    let httpResponse: AxiosResponse<any>
    try {
      const token = await getToken()
      httpResponse = await axiosClient({ token }).get(params.url)
    } catch (error) {
      httpResponse = error.response
    }
    return {
      body: httpResponse.data,
      statusCode: httpResponse.status,
    }
  }
}
