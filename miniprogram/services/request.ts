import { BASE_URL } from "../utils/constant"
import type { Response, RequestOptions, HttpMethod } from "../../typings/types/service"

export function request<TRequest, TResponse>(
  method: HttpMethod,
  options: RequestOptions<TRequest>
): Promise<Response<TResponse>> {
  return new Promise((resolve, reject) => {
    const authorization = wx.getStorageSync("authorization")

    const header: Record<string, string> = {
        'Content-Type': 'application/json',
        ...options.header
      }
  
    if (authorization) {
        header['Authorization'] = authorization;
    }

    wx.request<Response<TResponse>>({
        url: BASE_URL + options.url,
        method,
        data: options.params,
        header,
        timeout: options.timeout,

        success(res) {
            if (res.statusCode === 401) {
                wx.removeStorageSync('authorization')

                wx.showToast({
                    title: '登录已过期',
                    icon: 'none'
                })
                setTimeout(()=>{
                    wx.hideToast();
                    wx.navigateTo({url: "/pages/login/login"});
                }, 1000)

                reject(new Error('登录已过期'))
                return
            }

            if (res.statusCode >= 200 && res.statusCode < 300) {
                const result = res.data

                if (result.code === 200) {
                    resolve(result)
                } else {
                    wx.showToast({
                        title: result.msg || '请求失败',
                        icon: 'none'
                    })
                    reject(new Error(result.msg))
                }
                return
            }
            reject(new Error(`HTTP ${res.statusCode}`))
        },

        fail(err) {
            console.error('网络请求失败：', err)
            wx.showToast({
                title: '网络异常',
                icon: 'none'
            })
            reject(err)
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