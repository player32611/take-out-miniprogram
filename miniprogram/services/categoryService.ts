import { get } from "./request"
import type { Response, CategoryListParams, CategoryListResponse } from "../../typings/types"

export const categoryList = (
  params: CategoryListParams
): Promise<Response<CategoryListResponse>> => {
  return get<CategoryListResponse, CategoryListParams>({
    url: '/user/category/list',
    params,
  })
}