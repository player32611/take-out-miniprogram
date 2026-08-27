import { AddressLabel, Category, DishVO, Setmeal } from "./common";

export type DatasetEvent<T> = WechatMiniprogram.BaseEvent & {
    currentTarget: {
        dataset: T
    }
}

export interface AddressPageData {
    
}

export interface AddressPageParams {
    handleAddAddress: () => void
}

export interface EditAddressPageData {
    ADDRESS_LABEL_LIST: AddressLabel[]
    selectLabel: AddressLabel | null
}

export interface EditAddressPageParams {
    handleClickLabel: (e: DatasetEvent<{label: AddressLabel}>) => void
    handleSave: (e: WechatMiniprogram.FormSubmit) => void
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