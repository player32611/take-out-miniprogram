import { post } from "./request"
import type { Response, UserLoginParams, UserLoginResponse } from "../../typings/types"

export const userLogin = (
  params: UserLoginParams
): Promise<Response<UserLoginResponse>> => {
  return post<UserLoginResponse, UserLoginParams>({
    url: '/user/user/login',
    params,
  })
}