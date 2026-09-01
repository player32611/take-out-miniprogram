

import { Status } from "./types";

export interface IAppOption {
  globalData: {
    status: Status
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}