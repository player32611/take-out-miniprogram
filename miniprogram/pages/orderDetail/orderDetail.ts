import Dialog from 'tdesign-miniprogram/dialog';
import type { OrderDetailPageData, OrderDetailPageMethods } from "../../../typings/types"
import { orderCancel, orderId, orderRepetition, orderReminder } from "../../services/index"
import { SHOP_INFO, PAY_METHOD, TABLEWARE_STATUS, ORDER_STATUS, MESSAGE } from "../../utils/index"

// pages/orderDetail/orderDetail.ts
Page<OrderDetailPageData, OrderDetailPageMethods>({

  /**
   * 页面的初始数据
   */
  data: {
    SHOP_INFO,
    PAY_METHOD,
    TABLEWARE_STATUS,
    ORDER_STATUS,
    order: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    orderId({id: options.id}).then(res => {
        this.setData({ order: {
            ...res.data,
            consignee: res.data.consignee[0] + "*".repeat(res.data.consignee.length - 1),
            phone: res.data.phone.replace(/^(.{3}).*(.{4})$/, "$1****$2"),
        }})
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
    this.handleRefresh();
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

  handleRefresh() {
    orderId({id: this.data.order?.id}).then(res => {
        wx.stopPullDownRefresh();
        this.setData({ order: {
            ...res.data,
            consignee: res.data.consignee[0] + "*".repeat(res.data.consignee.length - 1),
            phone: res.data.phone.replace(/^(.{3}).*(.{4})$/, "$1****$2"),
        }})
    })
  },

  handlePhone() {
    console.log("联系商家")
  },

  handleCancel() {
    Dialog.confirm({
        context: this,
        title: '取消订单',
        closeOnOverlayClick: true,
        content: '确定要取消该订单吗?',
        confirmBtn: { content: '确定', theme: 'danger' },
        cancelBtn: '取消',
    })
    .then(() => {
        if(!this.data.order?.id) return;
        wx.showLoading({ title: MESSAGE.DELETE_LOADING})
        orderCancel({id: this.data.order?.id}).then(() => {
            wx.hideLoading();
            wx.showToast({ title: MESSAGE.CANCEL_SUCCESS, icon: "success"})
            this.handleRefresh();
        }).catch(() => {
            wx.hideLoading();
            wx.showToast({ title: MESSAGE.CANCEL_ERROR, icon: "error"})
        })
    })
    .catch(() => {});
  },

  handleRepeatOrder(){
    if(!this.data.order?.id) return;
    orderRepetition({id: this.data.order.id}).then(() => {
        wx.navigateTo({ url: "/pages/index/index" })
    })
  },

  handlePay(){
    if(!this.data.order?.id) return;
    wx.navigateTo({ url: `/pages/pay/pay?id=${this.data.order.id}` })
  },

  handleReminder(){
    if(!this.data.order?.id) return;
    orderReminder({id: this.data.order.id}).then(() => {
        wx.showToast({ title: "已催单" , icon: "success"})
    })
  }
})