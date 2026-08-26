import { get } from "./request"
import type { Response, DishListParams, DishListResponse } from "../../typings/types"

export const dishList = (
  params: DishListParams
): Promise<Response<DishListResponse>> => {
  return get<DishListResponse, DishListParams>({
    url: '/user/dish/list',
    params,
  })
}