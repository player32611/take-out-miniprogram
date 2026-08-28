import { AddressPageData, AddressPageMethods } from "../../../typings/types";
import { addressBookList, addressBookSetDefault } from "../../services/index";
import { MESSAGE } from "../../utils/index";

// pages/address/address.ts
Page<AddressPageData, AddressPageMethods>({

  /**
   * 页面的初始数据
   */
  data: {
    showSkeleton: true,
    addressList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

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
    this.handleRefresh();
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

  handleRefresh() {
    addressBookList().then(res => {
        this.setData({ addressList: res.data });
    }).finally(() => {
        this.setData({ showSkeleton: false})
    })
  },

  handleSetDefault(e) {
    const record = e.currentTarget.dataset.record
    if(record.isDefault) return;
    wx.showLoading({ title: MESSAGE.UPDATE_LOADING })
    addressBookSetDefault({ id: record.id }).then(() => {
        wx.hideLoading();
        wx.showToast({ title: MESSAGE.UPDATE_SUCCESS, icon: "success"})
        this.handleRefresh();
    }).catch(() => {
        wx.hideLoading();
        wx.showToast({ title: MESSAGE.UPDATE_ERROR, icon: "error"})
    })
  },

  handleEditAddress(e) {
    wx.navigateTo({ url: `/pages/editAddress/editAddress?type=EDIT&id=${e.currentTarget.dataset.id}` })
  },

  handleAddAddress() {
    wx.navigateTo({ url: "/pages/editAddress/editAddress?type=ADD" })
  },

  noop(){}
})