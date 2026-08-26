export const BASE_URL = "http://localhost:8080"
export const MESSAGE = {
    LOGIN_ERROR: "登录失败",
    LOGIN_LOADING: "登录中",
    LOGIN_SUCCESS: "登录成功",
    COMMON_LOADING: "加载中"
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