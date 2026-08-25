import { BASE_URL } from "../utils/constant"
import type { Response, RequestOptions, HttpMethod } from "../../typings/types/service"

export function request<TRequest, TResponse>(
  method: HttpMethod,
  options: RequestOptions<TRequest>
): Promise<Response<TResponse>> {
  return new Promise((resolve, reject) => {
    wx.request<Response<TResponse>>({
      url: BASE_URL + options.url,
      method,
      data: options.params,
      header: {
        'Content-Type': 'application/json',
        ...options.header
      },
      timeout: options.timeout,

      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data)
        } else {
          reject({
            statusCode: res.statusCode,
            data: res.data
          })
        }
      },

      fail(error) {
        reject(error)
      }
    })
  })
}

export const get = <TResponse, TRequest = undefined>(
    options: RequestOptions<TRequest>
): Promise<Response<TResponse>> => {
    return request<TRequest, TResponse>('GET', options)
}
  
export const post = <TResponse, TRequest = undefined>(
    options: RequestOptions<TRequest>
): Promise<Response<TResponse>> => {
    return request<TRequest, TResponse>('POST', options)
}
  
export const put = <TResponse, TRequest = undefined>(
    options: RequestOptions<TRequest>
): Promise<Response<TResponse>> => {
    return request<TRequest, TResponse>('PUT', options)
}
  
export const del = <TResponse, TRequest = undefined>(
    options: RequestOptions<TRequest>
  ): Promise<Response<TResponse>> => {
    return request<TRequest, TResponse>('DELETE', options)
}