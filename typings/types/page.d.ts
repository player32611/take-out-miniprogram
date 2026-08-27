import { Category, DishVO, Setmeal } from "./common";

export type DatasetEvent<T> = WechatMiniprogram.BaseEvent & {
    currentTarget: {
        dataset: T
    }
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
    // handleAddProduct: (e: DatasetEvent<{id: number, flavors?: string}>) => void;
}