import { Category, CategoryType, DishVO, Setmeal } from "./common";

export type DatasetEvent<T> = WechatMiniprogram.BaseEvent & {
    currentTarget: {
        dataset: T
    }
}

export interface IndexPageData {
    categoryList: Category[];
    productList: (DishVO | Setmeal)[];
    selectCategory: Category | null;
    currentProduct: DishVO | Setmeal | null;
    productModalOpen: boolean;
    flavorsModalOpen: boolean;
}

export interface IndexPageMethods {
    handleChangeCategory: (e: DatasetEvent<{category: Category}>) => void;
    handleOpenProductModal: (e: DatasetEvent<{record: DishVO | Setmeal}>) => void
    handleCloseProductModal: () => void;
    handleAddProduct: (e: DatasetEvent<{id: number, flavors?: string}>) => void;
}