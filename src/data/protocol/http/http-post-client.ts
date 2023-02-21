import { HttpResponse } from '.'

interface Options {
  hasFormData?: boolean
}

export type HttpPostParams<T> = {
  url: string
  body?: T
  options?: Options
}

export interface HttpPostClient<T, R> {
  post: (params: HttpPostParams<T>) => Promise<HttpResponse<R>>
}
