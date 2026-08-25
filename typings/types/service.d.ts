export interface Response<T = unknown> {
	code: number;
	data: T;
	msg: string;
}

export interface RequestOptions<T = unknown> {
    url: string
    params?: T
    header?: Record<string, string>
    timeout?: number
}
  
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export interface UserLoginParams {
    code: string
}

export interface UserLoginData {
    id: number;
    openid: string;
    token: string;
}