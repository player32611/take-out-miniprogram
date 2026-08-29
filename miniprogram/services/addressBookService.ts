import { del, get, post, put } from "./request"
import type { AddressBook, AddressBookAddParams, AddressBookSetDefaultParams, AddressBookIdParams, AddressBookDeleteParams, AddressBookUpdateParams, Response } from "../../typings/types"

export const addressBookAdd = (params: AddressBookAddParams): Promise<Response<void>> => {
    return post<void, AddressBookAddParams>({url: "/user/addressBook", params })
}

export const addressBookList = (): Promise<Response<AddressBook[]>> => {
    return get<AddressBook[], void>({ url: "/user/addressBook/list"});
}

export const addressBookSetDefault = (params: AddressBookSetDefaultParams): Promise<Response<void>> => {
    return put<void, AddressBookSetDefaultParams>({ url: "/user/addressBook/default", params })
}

export const addressBookId = (params: AddressBookIdParams): Promise<Response<AddressBook>> => {
    return get<AddressBook, AddressBookIdParams>({ url: `/user/addressBook/${params.id}`})
}

export const addressBookDelete = (params: AddressBookDeleteParams): Promise<Response<void>> => {
    return del<void, AddressBookDeleteParams>({ url: `/user/addressBook?id=${params.id}` })
}

export const addressBookUpdate = (params: AddressBookUpdateParams): Promise<Response<void>> => {
    return put<void, AddressBookUpdateParams>({ url: "/user/addressBook", params})
}

export const addressBookGetDefault = (): Promise<Response<AddressBook>> => {
    return get<AddressBook, void>({ url: "/user/addressBook/default"})
}