import axios, { AxiosResponse } from 'axios'

const axiosClient = axios.create({
  baseURL: process.env.API_BASE_URL,
})

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

const axiosConfig = async (): Promise<any> => {
  const token = await AuthUtil.getToken()

  if (!token) {
    return {}
  }

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

export class AxiosHttpClient
  implements HttpPostClient<any, any>, HttpGetClient<any>
{
  async post(params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    let httpResponse: AxiosResponse<any>
    try {
      const config = await axiosConfig()
      httpResponse = await axiosClient.post(params.url, params.body, config)
    } catch (error) {
      httpResponse = error.response
    }
    return {
      body: httpResponse.data,
      statusCode: httpResponse.status,
    }
  }

  async get(params: HttpGetParams): Promise<HttpResponse<any>> {
    let httpResponse: AxiosResponse<any>
    try {
      const config = await axiosConfig()
      httpResponse = await axiosClient.get(params.url, config)
    } catch (error) {
      httpResponse = error.response
    }
    return {
      body: httpResponse.data,
      statusCode: httpResponse.status,
    }
  }
}
