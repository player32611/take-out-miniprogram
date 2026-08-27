import { post } from "./request"
import type { AddressBookAddParams, Response } from "../../typings/types"

export const addressBookAdd = (params: AddressBookAddParams): Promise<Response<void>> => {
    return post<void, AddressBookAddParams>({url: "/user/addressBook", params })
}