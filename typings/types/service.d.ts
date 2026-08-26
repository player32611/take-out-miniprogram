import { Category, DishVO, Setmeal, SetmealDishVO } from "./common"

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

export interface CategoryListParams {
    type?: number
}

export type CategoryListResponse = Category[]

export interface UserLoginParams {
    code: string
}

export interface DishListParams {
    categoryId: number;
}

export type DishListResponse = DishVO[]

export interface SetmealListParams {
    categoryId: number;
}

export type SetmealListResponse = Setmeal[]

export interface SetmealDishParams {
    id: number;
}

export type SetmealDishResponse = SetmealDishVO[]

export interface UserLoginResponse {
    id: number;
    openid: string;
    token: string;
}