import { AddressBook, AddressItem, AddressLabel, Category, DishVO, Gender, Setmeal } from "./common";

export type DatasetEvent<T> = WechatMiniprogram.BaseEvent & {
    currentTarget: {
        dataset: T
    }
}

export interface AddressPageData {
    showSkeleton: boolean
    addressList: AddressBook[]
}

export interface AddressPageMethods {
    handleRefresh: () => void
    handleSetDefault: (e: DatasetEvent<{record: AddressBook}>) => void
    handleEditAddress: (e: DatasetEvent<{id: number}>) => void
    handleAddAddress: () => void
    noop: () => void
}

export interface EditAddressPageData {
    type: "ADD" | "EDIT"
    id: number | null,
    ADDRESS_LIST: AddressItem[]
    ADDRESS_LABEL_LIST: AddressLabel[]
    initConsignee: string
    initSex: Gender | null
    initPhone: string
    initAddress: string
    initDetail: string
    selectLabel: AddressLabel | null
    selectAddress: {label: string, value: string}[]
    cascaderVisible: boolean
    cascaderNote: string
}

export interface EditAddressPageMethods {
    showCascader: () => void
    onChange: (e: DatasetEvent) => void
    handleClickLabel: (e: DatasetEvent<{label: AddressLabel}>) => void
    handleSave: (e: WechatMiniprogram.FormSubmit) => void
    handleDelete: () => void
}

export interface IndexPageDishVOItem extends DishVO{
    key: string;
}

export interface IndexPageSetmealItem extends Setmeal{
    key: string;
}

export interface IndexPageData {
    categoryList: Category[];
    productList: (IndexPageDishVOItem | IndexPageSetmealItem)[];
    selectCategory: Category | null;
    currentProduct: DishVO | Setmeal | null;
    productModalOpen: boolean;
}

export interface IndexPageMethods {
    handleChangeCategory: (e: DatasetEvent<{category: Category}>) => void;
    handleOpenProductModal: (e: DatasetEvent<{record: DishVO | Setmeal}>) => void
    handleCloseProductModal: () => void;
    handleNavigateUserCenter: () => void;
}

export interface UserCenterPageData {

}

export interface UserCenterPageMethods {
    handleNavigateToAddress: () => void;
}