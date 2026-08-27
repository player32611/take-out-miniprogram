import { CATEGORY_TYPE, STATUS, GENDER } from "../../miniprogram/utils/index";

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

export type Status = (typeof STATUS)[keyof typeof STATUS];

export type CategoryType = (typeof CATEGORY_TYPE)[keyof typeof CATEGORY_TYPE];

export type Gender = (typeof GENDER)[keyof typeof GENDER];
