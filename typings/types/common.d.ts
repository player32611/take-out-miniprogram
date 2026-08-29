import { CATEGORY_TYPE, STATUS, GENDER, ADDRESS_LABEL, ADDRESS_TYPE, ADDRESS_LIST, SHOP_INFO, DELIVERY_STATUS, ORDER_STATUS } from "../../miniprogram/utils/index";

export interface AddressBook {
    id: number;
    userId: number;
    consignee: string;
    sex: Gender;
    phone: string;
    provinceCode: string;
    provinceName: string;
    cityCode: string;
    cityName: string;
    districtCode: string;
    districtName: string;
    detail: string;
    label: AddressLabel;
    isDefault: AddressType;
}

export interface Category {
	id: number;
	type: CategoryType;
	name: string;
	sort: number;
	status: Status;
	createTime: string;
	updateTime: string;
	createUser: number;
	updateUser: number;
}

export interface Dish {
	id: number;
	name: string;
	categoryId: number;
	price: number;
	image: string;
	description: string;
	status: Status;
	createTime: string;
	updateTime: string;
	createUser: number;
	updateUser: number;
}

export interface DishVO {
	id: number;
	name: string;
	categoryId: number;
	categoryName: string;
	price: number;
	image: string;
	description: string;
	status: Status;
	updateTime: string;
	flavors: DishFlavor[];
}

export interface DishFlavor {
	id: number;
	dishId: number;
	name: string;
	value: string;
}

export interface Employee {
	id: number;
	username: string;
	name: string;
	password: string;
	phone: string;
	sex: string;
	idNumber: string;
	status: Status;
	createTime: string;
	updateTime: string;
	createUser: number;
	updateUser: number;
}

export interface Setmeal {
	id: number;
	name: string;
	categoryId: number;
	price: number;
	image: string;
	description: string;
	status: Status;
	createTime: string;
	updateTime: string;
	createUser: number;
	updateUser: number;
}

export interface SetmealDish {
	id: number;
	setmealId: number;
	dishId: number;
	name: string;
	price: number;
	copies: number;
}

export interface SetmealDishVO {
    name: string;
    image: string;
	copies: number;
    description: string;
}

export interface ShoppingCart {
    id: number;
    name: string;
    image: string;
    userId: number;
    dishId: number | null;
    setmealId: number | null;
    dishFlavor: string | null;
    number: number;
    amount: number;
    createTime: number;
}

export interface Orders {
      /** 主键 ID */
  id: number;
  /** 订单编号 */
  number: string;
  /** 状态 */
  status: number;
  /** 用户 ID */
  userId: number;
  /** 地址簿 ID */
  addressBookId: number;
  /** 下单时间 (图中为 string) */
  orderTime: string;
  /** 结账时间 (图中为 string) */
  checkoutTime: string;
  /** 支付方式 */
  payMethod: number;
  /** 支付状态 */
  payStatus: number;
  /** 金额 */
  amount: number;
  /** 备注 */
  remark: string;
  /** 用户名 (图中允许为 null) */
  userName: string | null;
  /** 手机号 */
  phone: string;
  /** 地址 */
  address: string;
  /** 收货人 */
  consignee: string;
  /** 取消原因 (允许为 null) */
  cancelReason: string | null;
  /** 拒绝原因 (允许为 null) */
  rejectionReason: string | null;
  /** 取消时间 (图中显示 null，允许为 null) */
  cancelTime: string | null;
  /** 预计送达时间 (图中为 string) */
  estimatedDeliveryTime: string;
  /** 配送状态 */
  deliveryStatus: number;
  /** 送达时间 (图中显示 null，允许为 null) */
  deliveryTime: string | null;
  /** 打包数量 */
  packAmount: number;
  /** 餐具数量 */
  tablewareNumber: number;
  /** 餐具状态 */
  tablewareStatus: number;
}

export interface OrderDetail {
    id: number;
    name: string;
    orderId: number;
    dishId: number;
    setmealId: number;
    dishFlavor: string | null;
    number: number;
    amount: number;
    image: string;
}

export type Status = (typeof STATUS)[keyof typeof STATUS];

export type CategoryType = (typeof CATEGORY_TYPE)[keyof typeof CATEGORY_TYPE];

export type Gender = (typeof GENDER)[keyof typeof GENDER];

export type AddressLabel = (typeof ADDRESS_LABEL)[keyof typeof ADDRESS_LABEL];

export type AddressType = (typeof ADDRESS_TYPE)[keyof typeof ADDRESS_TYPE];

export type AddressItem = (typeof ADDRESS_LIST)[keyof typeof ADDRESS_LIST];

export type ShopInfo = (typeof SHOP_INFO)[keyof typeof SHOP_INFO];

export type DeliveryStatus = (typeof DELIVERY_STATUS)[keyof typeof DELIVERY_STATUS];

export type OrderStatus = (typeof ORDER_STATUS)[keyof typeof ORDER_STATUS];
