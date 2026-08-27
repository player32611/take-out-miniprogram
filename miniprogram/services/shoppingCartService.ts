import { del, get, post } from "./request"
import type { Response, ShoppingCart, ShoppingCartAddParams, ShoppingCartSubParams } from "../../typings/types"

export const shoppingCartList = () => {
    return get<ShoppingCart[], void>({ url: "/user/shoppingCart/list" })
}

export const shoppingCartAdd = (
  params: ShoppingCartAddParams
): Promise<Response<void>> => {
  return post<void, ShoppingCartAddParams>({
    url: '/user/shoppingCart/add',
    params,
  })
}

export const shoppingCartClean = () => {
    return del<void, void>({
        url: "/user/shoppingCart/clean"
    })
}

export const shoppingCartSub = (
    params: ShoppingCartSubParams
  ): Promise<Response<void>> => {
    return post<void, ShoppingCartSubParams>({
      url: '/user/shoppingCart/sub',
      params,
    })
  }
  