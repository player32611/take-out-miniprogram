import { post } from "./request"
import type { Response, UserLoginParams, UserLoginData } from "../../typings/types"

export const userLogin = (
  params: UserLoginParams
): Promise<Response<UserLoginData>> => {
  return post<UserLoginData, UserLoginParams>({
    url: '/user/user/login',
    params,
  })
}