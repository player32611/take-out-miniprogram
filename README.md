# take-out-miniprogram

外卖管理系统微信小程序端（C 端用户），用户可以通过小程序浏览菜品/套餐、加入购物车、下单支付、查看历史订单等。

## 技术栈

- **框架**: 微信小程序原生框架（TypeScript + Sass）
- **UI 组件库**: TDesign Miniprogram 1.16
- **语言**: TypeScript（严格模式）
- **渲染引擎**: Skyline（glass-easel 组件框架）
- **构建工具**: 微信开发者工具（内置 TypeScript/Sass 编译）

## 项目结构

```
take-out-miniprogram/
├── project.config.json              # 项目配置文件（appid: wxc2d8239866abe07a）
├── tsconfig.json                    # TypeScript 配置
├── typings/                         # 类型定义
│   ├── index.d.ts                   # 全局类型（IAppOption）
│   └── types/
│       ├── index.d.ts               # 类型导出入口
│       ├── common.d.ts              # 通用业务模型（AddressBook, Category, Dish, Orders, Setmeal 等）
│       ├── component.d.ts           # 组件 Props/Data/Methods 类型
│       ├── page.d.ts                # 页面 Data/Methods 类型
│       ├── service.d.ts             # 请求/响应参数类型
│       ├── utils.d.ts               # 工具类型
│       └── wx/                      # 微信 API 类型补全
└── miniprogram/                     # 小程序源码
    ├── app.json                     # 小程序配置（10 个页面、自定义导航栏、Skyline 渲染）
    ├── app.ts                       # 应用入口（globalData 存储店铺状态）
    ├── app.scss                     # 全局样式
    ├── pages/                       # 页面
    │   ├── index/                   # 首页（菜品/套餐浏览与选购）
    │   ├── login/                   # 微信授权登录
    │   ├── userCenter/              # 个人中心
    │   ├── address/                 # 地址管理列表
    │   ├── editAddress/             # 新增/编辑地址
    │   ├── orderPay/                # 订单确认页
    │   ├── pay/                     # 支付页
    │   ├── paySuccess/              # 支付成功页
    │   ├── historyOrder/            # 历史订单列表
    │   └── orderDetail/             # 订单详情
    ├── components/                  # 自定义组件
    │   ├── shopping-cart/           # 购物车栏（底部悬浮 + 购物车弹窗）
    │   ├── shop-detail/             # 店铺信息（名称、状态、公告）
    │   ├── product-modal/           # 商品详情弹窗
    │   ├── product-count-controller/# 商品数量加减控制器
    │   ├── flavor-modal/            # 口味选择弹窗
    │   └── navigation-bar/          # 自定义导航栏
    ├── services/                    # API 服务层
    │   ├── request.ts               # HTTP 请求封装（wx.request + 401 自动跳转登录）
    │   ├── userService.ts           # 用户登录 API
    │   ├── categoryService.ts       # 分类列表 API
    │   ├── dishService.ts           # 菜品列表 API
    │   ├── setmealService.ts        # 套餐列表/套餐菜品 API
    │   ├── shoppingCartService.ts   # 购物车 API（增删查清）
    │   ├── orderService.ts          # 订单 API（下单/历史/详情/支付/取消/再来一单/催单）
    │   ├── addressBookService.ts    # 地址簿 API（增删改查/设置默认）
    │   └── shopService.ts           # 店铺状态 API
    ├── utils/                       # 工具库
    │   ├── constant.ts              # 常量（API 地址、状态枚举、订单状态、店铺信息等）
    │   ├── util.ts                  # 时间格式化工具
    │   └── cartStore.ts             # 购物车状态管理（发布订阅模式）
    └── styles/                      # 静态资源
        └── icon/                    # SVG 图标
```

## 页面功能

| 页面 | 路径 | 功能说明 |
|------|------|----------|
| **首页** | `pages/index` | 分类切换、菜品/套餐列表浏览、商品详情弹窗、加入购物车、数量加减 |
| **登录** | `pages/login` | 微信静默授权登录，获取 token 并存储 |
| **个人中心** | `pages/userCenter` | 导航到地址管理、历史订单 |
| **地址管理** | `pages/address` | 地址列表、设置默认地址、新增/编辑地址入口 |
| **编辑地址** | `pages/editAddress` | 新增/编辑收货地址（级联选择省市区、标签选择） |
| **订单确认** | `pages/orderPay` | 购物车商品确认、选择地址、备注、餐具数量、去支付 |
| **支付** | `pages/pay` | 模拟支付流程 |
| **支付成功** | `pages/paySuccess` | 支付成功提示，可查看订单或返回首页 |
| **历史订单** | `pages/historyOrder` | 按状态筛选、查看详情、再来一单、催单、去支付 |
| **订单详情** | `pages/orderDetail` | 订单信息、商品列表、取消订单、催单、再来一单 |

## 组件说明

| 组件 | 功能 |
|------|------|
| **shopping-cart** | 底部购物车栏 + 购物车弹窗列表。显示总价、商品增删、清空、去结算。店铺打烊时显示遮罩 |
| **shop-detail** | 店铺头部信息（名称、简介、地址、配送费）和营业状态 |
| **product-modal** | 商品详情弹窗，套餐时展示包含的菜品列表 |
| **product-count-controller** | 商品列表中的数量加减按钮，联动购物车状态 |
| **flavor-modal** | 口味选择弹窗（甜味、温度、忌口、辣度），选择后加入购物车 |
| **navigation-bar** | 自定义顶部导航栏 |

## 核心设计

### 请求封装

在 `services/request.ts` 中统一封装 `wx.request`：
- 自动从 `wx.getStorageSync("authorization")` 读取 token，注入请求头 `Authorization`
- 401 响应自动清除 token 并跳转登录页
- 统一解析 `Response` 格式，非 200 code 自动弹 Toast 提示

### 购物车状态管理

使用发布订阅模式实现购物车状态同步（`utils/cartStore.ts`）：
- 购物车数据变更通过 `cartStore.setState()` 触发通知
- 多个组件（shopping-cart、product-count-controller）通过 `cartStore.subscribe()` 订阅更新
- 设置 `needRefresh` 标志位避免重复请求

### 口味选择流程

菜品支持多规格口味选择（甜味、温度、忌口、辣度）：
- 点击商品 `+` 按钮，若菜品有口味配置则弹出 `flavor-modal`
- 用户选择全部口味规格后才能加入购物车
- 口味信息以逗号拼接的字符串传递给后端

### 店铺状态控制

- 通过 `shopStatus` API 获取店铺营业状态
- 状态存储在 `app.globalData.status` 和局部组件 data 中
- 打烊时购物车栏显示遮罩，禁止下单

### 登录流程

- 微信静默登录，调用 `wx.login()` 获取 code
- 调用后端 `/user/user/login` 换取 token
- token 存入 `wx.setStorageSync("authorization", token)`

## 快速开始

### 环境要求

- 微信开发者工具（稳定版）
- Node.js（用于安装依赖）

### 安装依赖

```bash
cd miniprogram
npm install
```

### 配置

修改 `miniprogram/utils/constant.ts` 中的 API 地址：

```typescript
export const BASE_URL = "http://localhost:8080"
```

### 运行

1. 用微信开发者工具打开项目根目录
2. 在工具中设置 `appid: wxc2d8239866abe07a`（或替换为你的 appid）
3. 点击"编译"或"预览"

## 数据流

```
用户操作 → 组件事件 → Service API → 后端接口
                          ↓
                    cartStore.setState()
                          ↓
                    subscribe 组件更新 UI
```

## 后端 API 依赖

该小程序依赖 [take-out-backend](https://github.com/player32611/take-out-backend) 后端服务，接口路径以 `/user/` 为前缀：

- `/user/user/login` — 微信登录
- `/user/category/list` — 分类列表
- `/user/dish/list` — 菜品列表（Redis 缓存）
- `/user/setmeal/list` — 套餐列表（Redis 缓存）
- `/user/setmeal/dish/{id}` — 套餐菜品列表
- `/user/shoppingCart/*` — 购物车接口
- `/user/order/*` — 订单接口
- `/user/addressBook/*` — 地址簿接口
- `/user/shop/status` — 店铺营业状态