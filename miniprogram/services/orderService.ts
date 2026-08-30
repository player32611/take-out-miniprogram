import type { Response, OrderSubmitParams, OrderSubmitResponse, OrderHistoryParams, OrderIdParams, OrderPayParams, OrderPayResponse, OrderCancelParams, OrderRepetitionParams, PageResult, OrderVO } from "../../typings/types"
import { get, post, put } from "./request"

export const orderSubmit = (params: OrderSubmitParams): Promise<Response<OrderSubmitResponse>> => {
    return post<OrderSubmitResponse, OrderSubmitParams>({ url: "/user/order/submit", params})
}

export const orderHistory = (params: OrderHistoryParams): Promise<Response<PageResult<OrderVO>>> => {
    return get<PageResult<OrderVO>, OrderHistoryParams>({ url: "/user/order/historyOrders", params})
}

export const orderId = (params: OrderIdParams): Promise<Response<OrderVO>> => {
    return get<OrderVO, OrderIdParams>({ url: `/user/order/orderDetail/${params.id}`})
}

export const orderPay = (params: OrderPayParams): Promise<Response<OrderPayResponse>> => {
    return put<OrderPayResponse, OrderPayParams>({ url: "/user/order/payment", params})
}

export const orderCancel = (params: OrderCancelParams): Promise<Response<void>> => {
    return put<void, OrderCancelParams>({ url: `/user/order/cancel/${params.id}` })
}

export const orderRepetition = (params: OrderRepetitionParams): Promise<Response<void>> => {
    return post<void, OrderRepetitionParams>({ url: `/user/order/repetition/${params.id}`})
}