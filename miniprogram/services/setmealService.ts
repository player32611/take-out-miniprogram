import { get } from "./request"
import type { Response, SetmealListParams, SetmealListResponse, SetmealDishParams, SetmealDishResponse } from "../../typings/types"

export const setmealList = (
  params: SetmealListParams
): Promise<Response<SetmealListResponse>> => {
  return get<SetmealListResponse, SetmealListParams>({
    url: '/user/setmeal/list',
    params,
  })
}

export const setmealDish = (
    params: SetmealDishParams
  ): Promise<Response<SetmealDishResponse>> => {
    return get<SetmealDishResponse, SetmealDishParams>({
      url: `/user/setmeal/dish/${params.id}`
    })
}
  