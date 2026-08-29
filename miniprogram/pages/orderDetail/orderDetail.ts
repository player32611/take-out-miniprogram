import { OrderDetailPageData, OrderDetailPageMethods } from "../../../typings/types"
import { orderId } from "../../services/index"
import { SHOP_INFO, PAY_METHOD, TABLEWARE_STATUS } from "../../utils/index"

// pages/orderDetail/orderDetail.ts
Page<OrderDetailPageData, OrderDetailPageMethods>({

  /**
   * 页面的初始数据
   */
  data: {
    SHOP_INFO,
    PAY_METHOD,
    TABLEWARE_STATUS,
    order: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    orderId({id: options.id}).then(res => {
        console.log(res.data)
        this.setData({ order: {
            ...res.data,
            consignee: res.data.consignee[0] + "*".repeat(res.data.consignee.length - 1),
            phone: res.data.phone.replace(/^(.{3}).*(.{4})$/, "$1****$2"),
     } })
    })
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

  handlePhone() {
    console.log("联系商家")
  }
})