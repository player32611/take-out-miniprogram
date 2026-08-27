export const BASE_URL = "http://localhost:8080"

export const MESSAGE = {
    LOGIN_ERROR: "登录失败",
    LOGIN_LOADING: "登录中",
    LOGIN_SUCCESS: "登录成功",
    COMMON_LOADING: "加载中",
    ADD_SUCCESS: "添加成功",
    ADD_ERROR: "添加失败",
    DELETE_SUCCESS: "删除成功",
    DELETE_LOADING: "删除中",
    DELETE_ERROR: "删除失败",
    CART_ADD_FAILED_WITH_NO_SELECT: "请选择所有规格"
}

export const STATUS = {
	ENABLED: 1,
	DISABLED: 0,
} as const;

export const GENDER = {
	MALE: "男",
	FEMALE: "女",
} as const;

export const CATEGORY_TYPE = {
	DISH: 1,
	SETMEAL: 2,
} as const;

export const ADDRESS_LABEL = {
    COMPANY: "公司",
    HOME: "家",
    SCHOOL: "学校"
} as const;

export const ADDRESS_TYPE = {
    DEFAULT: 1,
    NOT_DEFAULT: 0,
}

export const SHOP_INFO = {
    NAME: "XXXXX",
    DETAIL: "简介XXXXXXXXXXXXXXX",
    ADDRESS: "地址XXXXXXXXXXXXXXX",
}

export const ADDRESS_LABEL_LIST = Object.values(ADDRESS_LABEL)