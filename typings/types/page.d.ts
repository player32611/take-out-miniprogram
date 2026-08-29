import { OrderVO } from ".";
import { AddressBook, AddressItem, AddressLabel, Category, DeliveryStatus, DishVO, Gender, OrderStatus, Setmeal, ShoppingCart } from "./common";

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

export interface HistoryOrderPageData {
    orderList: OrderVO[]
    ORDER_STATUS: Object
    selectStatus: OrderStatus
}

export interface HistoryOrderPageMethods {
    handleRefresh: () => void
    handleChangeTabs: (e) => void
    handleCheckOrder: (e: DatasetEvent<{id: number}>) => void
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

export interface OrderDetailPageData {
    SHOP_INFO: Object,
    PAY_METHOD: Object,
    TABLEWARE_STATUS: Object,
    ORDER_STATUS: Object,
    order: OrderVO | null
}

export interface OrderDetailPageMethods {
    handleRefresh: () => void
    handlePhone: () => void
    handleCancel: () => void
}

export interface OrderPayPageData {
    SHOP_INFO: Object,
    defaultAddress: AddressBook | null
    defaultDeliveryStatus: DeliveryStatus
    defaultCart: ShoppingCart[]
    defaultRemark: string;
    defaultTablewareNumber: number,
    totalPack: number,
    totalAmount: number
}

export interface OrderPayPageMethods {
    handleSetAddress: () => void;
    handlePay: () => void;
}

export interface PayPageData {
    SHOP_INFO: Object;
    orderId: number | null;
    orderAmount: number | null;
    orderNumber: string;
    orderTime: string;
}

export interface PayPageMethods {
    handlePay: () => void;
}

export interface PaySuccessPageData {

}

export interface PaySuccessPageMethods {
    handleBack: () => void;
    handleCheck: () => void;
}

export interface UserCenterPageData {

}

export interface UserCenterPageMethods {
    handleNavigateToAddress: () => void;
    handleNavigateToHistory: () => void;
}