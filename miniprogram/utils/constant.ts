export const BASE_URL = "http://localhost:8080"

export const MESSAGE = {
    LOGIN_ERROR: "登录失败",
    LOGIN_LOADING: "登录中",
    LOGIN_SUCCESS: "登录成功",
    COMMON_LOADING: "加载中",
    ADD_SUCCESS: "添加成功",
    ADD_LOADING: "添加中",
    ADD_ERROR: "添加失败",
    DELETE_SUCCESS: "删除成功",
    DELETE_LOADING: "删除中",
    DELETE_ERROR: "删除失败",
    UPDATE_SUCCESS: "修改成功",
    UPDATE_LOADING: "修改中",
    UPDATE_ERROR: "修改失败",
    CART_ADD_FAILED_WITH_NO_SELECT: "请选择所有规格",
    LACK_DEFAULT_ADDRESS: "缺少地址"
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

export const ADDRESS_LIST = [
    {
      value: "1",
      label: "广东省",
      children: [
        {
          value: "101",
          label: "深圳市",
          children: [
                { value: "1001", label: "南山区" },
                { value: "1002", label: "福田区" },
          ],
        },
        {
            value: "102",
            label: "广州市",
            children: [
                { value: "1003", label: "天河区" },
                { value: "1004", label: "越秀区" },
          ],
        },
      ],
    },
    {
      value: "2",
      label: "江苏省",
      children: [
        {
        value: "201",
          label: "南京市",
          children: [
            { value: "2001", label: "鼓楼区" },
            { value: "2002", label: "玄武区" },
          ],
        },
      ],
    },
  ];

export const ADDRESS_TYPE = {
    DEFAULT: 1,
    NOT_DEFAULT: 0,
}

export const SHOP_INFO = {
    NAME: "XXXXX",
    DETAIL: "简介XXXXXXXXXXXXXXX",
    ADDRESS: "地址XXXXXXXXXXXXXXX",
    PACK_AMOUNT: 1,
    DELIVERY_AMOUNT: 6
}

export const DELIVERY_STATUS = {
    IMMEDIATELY: 1,
    SELECT: 0
}

export const TABLEWARE_STATUS = {
    SELECT: 0,
    BYDISH: 1
}

export const PAY_METHOD = {
    WECHAT: 1,
    ALIPAY: 2,
}

export const ORDER_STATUS = {
    PENDING_PAYMENT: 1,
    TO_BE_CONFIRMED: 2,
    CONFIRMED: 3,
    DELIVERY_IN_PROGRESS: 4,
    COMPLETED: 5,
    CANCELLED: 6
}

export const ADDRESS_LABEL_LIST = Object.values(ADDRESS_LABEL)