// components/shop-detail/shop-detail.ts
import { IAppOption } from "../../../typings"
import { shopStatus } from "../../services/shopService"
import { SHOP_INFO, STATUS } from "../../utils/index"

Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    SHOP_INFO,
    STATUS,
    status: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handlePhone(){
        console.log("phone")
    }
  },

  pageLifetimes: {
    show(){
        shopStatus().then(res => {
            const app = getApp<IAppOption>();
            this.setData({ status: res.data })
            app.globalData.status = res.data;
        })
    }
  }
})