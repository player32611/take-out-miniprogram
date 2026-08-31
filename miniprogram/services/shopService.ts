import { get } from "./request"
import type { Response, Status } from "../../typings/types"

export const shopStatus = (): Promise<Response<Status>> => {
    return get<Status, void>({  url: '/user/shop/status'})
}