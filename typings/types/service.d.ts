import { Gender } from "."
import { AddressType, Category, DeliveryStatus, DishVO, OrderDetail, Orders, OrderStatus, Setmeal, SetmealDishVO } from "./common"

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

export interface PageResult<T = unknown> {
	total: number;
	records: T[];
}

export interface AddressBookAddParams {
    id?: number;
    userId?: number;
    consignee?: string;
    sex: Gender;
    phone: string;
    provinceCode?: string;
    provinceName?: string;
    cityCode?: string;
    cityName?: string;
    districtCode?: string;
    districtName?: string;
    detail: string;
    label?: string;
    isDefault?: AddressType;
}

export interface AddressBookSetDefaultParams {
    id: number
}

export interface AddressBookIdParams {
    id: number
}

export interface AddressBookDeleteParams {
    id: number
}

export interface AddressBookUpdateParams {
    id: number;
    userId?: number;
    consignee?: string;
    sex: Gender;
    phone: string;
    provinceCode?: string;
    provinceName?: string;
    cityCode?: string;
    cityName?: string;
    districtCode?: string;
    districtName?: string;
    detail: string;
    label?: string;
    isDefault?: AddressType;
}

export interface CategoryListParams {
    type?: number
}

export type CategoryListResponse = Category[]

export interface OrderSubmitParams {
    addressBookId: number;
    amount: number;
    deliveryStatus: DeliveryStatus;
    estimatedDeliveryTime: string;
    packAmount: number;
    payMethod: number;
    remark: string;
    tablewareNumber: number;
    tablewareStatus: number;
}

export interface OrderSubmitResponse {
    id: number;
    orderAmount: number;
    orderNumber: string;
    orderTime: string;
}

export interface OrderHistoryParams {
    page: number;
    pageSize: number;
    status?: OrderStatus
}

export interface OrderIdParams {
    id: number
}


export interface OrderVO extends Orders{
    orderDetailList: OrderDetail[]
}

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

export interface ShoppingCartAddParams {
    dishFlavor?: string,
    dishId?: number,
    setmealId?: number
}

export interface ShoppingCartSubParams {
    dishFlavor?: string,
    dishId?: number,
    setmealId?: number
}

export interface UserLoginResponse {
    id: number;
    openid: string;
    token: string;
}