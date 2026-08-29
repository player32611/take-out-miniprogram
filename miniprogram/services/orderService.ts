import type { Response, OrderSubmitParams, OrderSubmitResponse, OrderHistoryParams, OrderIdParams, PageResult, OrderVO } from "../../typings/types"
import { get, post } from "./request"

export const orderSubmit = (params: OrderSubmitParams): Promise<Response<OrderSubmitResponse>> => {
    return post<OrderSubmitResponse, OrderSubmitParams>({ url: "/user/order/submit", params})
}

export const orderHistory = (params: OrderHistoryParams): Promise<Response<PageResult<OrderVO>>> => {
    return get<PageResult<OrderVO>, OrderHistoryParams>({ url: "/user/order/historyOrders", params})
}

export const orderId = (params: OrderIdParams): Promise<Response<OrderVO>> => {
    return get<OrderVO, OrderIdParams>({ url: `/user/order/orderDetail/${params.id}`})
}