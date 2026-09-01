import { IAppOption } from "../typings"
import { STATUS } from "./utils/index"

// app.ts
App<IAppOption>({
  globalData: {
    status: STATUS.DISABLED,
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
})