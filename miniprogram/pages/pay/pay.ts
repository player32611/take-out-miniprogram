import type { PayPageData, PayPageMethods } from "../../../typings/types";
import { orderPay } from "../../services/index";
import { PAY_METHOD, SHOP_INFO } from "../../utils/index"

// pages/pay/pay.ts
Page<PayPageData, PayPageMethods>({

  /**
   * 页面的初始数据
   */
  data: {
    SHOP_INFO,
    orderId: null,
    orderAmount: null,
    orderNumber: "",
    orderTime: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const [datePart, timePart] = options.time.split(" ")
    const [year, month, day] = datePart.split("-").map(Number)
    const [hour, minute, second] = timePart.split(":").map(Number)

    const date = new Date(year, month - 1, day, hour, minute, second)
    
    this.setData({ orderId: options.id, orderAmount: options.amount, orderNumber: options.number, orderTime: options.time })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  handlePay() {
    orderPay({orderNumber: this.data.orderNumber, payMethod: PAY_METHOD.WECHAT }).then(() => {
        wx.redirectTo({ url: "/pages/paySuccess/paySuccess" })
    })
    // wx.requestPayment()
  }
})