import { HistoryOrderPageData, HistoryOrderPageMethods } from "../../../typings/types";
import { orderHistory } from "../../services/index";
import { ORDER_STATUS } from "../../utils/index"

// pages/historyOrder/historyOrder.ts
Page<HistoryOrderPageData, HistoryOrderPageMethods>({

  /**
   * 页面的初始数据
   */
  data: {
    ORDER_STATUS,
    orderList: [],
    selectStatus: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    orderHistory({ page: 1, pageSize: 10 }).then(res => {
        this.setData({ orderList: res.data.records })
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
    if (this.data.selectStatus === 0){
        orderHistory({ page: 1, pageSize: 10 }).then(res => {
            this.setData({ orderList: res.data.records })
        }).finally(() => {
            wx.stopPullDownRefresh()
        })
    } else {
        orderHistory({ page: 1, pageSize: 10, status: this.data.selectStatus }).then(res => {
            this.setData({ orderList: res.data.records })
        }).finally(() => {
            wx.stopPullDownRefresh()
        })
    }
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

  handleChangeTabs(e){
    const status = Number(e.detail.value)
    this.setData({ selectStatus: status })
    if(status === 0){
        orderHistory({ page: 1, pageSize: 10 }).then(res => {
            this.setData({ orderList: res.data.records })
        })
    } else {
        orderHistory({ page: 1, pageSize: 10, status }).then(res => {
            this.setData({ orderList: res.data.records })
        })
    }
  },

  handleCheckOrder(e){
    wx.navigateTo({ url: `/pages/orderDetail/orderDetail?id=${e.currentTarget.dataset.id}`})
  }
})