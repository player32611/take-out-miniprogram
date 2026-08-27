// pages/editAddress/editAddress.ts
import { ADDRESS_LABEL_LIST } from "../../utils/index"
import { EditAddressPageData, EditAddressPageParams } from "../../../typings/types"

Page<EditAddressPageData, EditAddressPageParams>({

  /**
   * 页面的初始数据
   */
  data: {
    ADDRESS_LABEL_LIST,
    selectLabel: null,
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

  handleClickLabel(e) {
    console.log(e.currentTarget.dataset.label)
    if(this.data.selectLabel === e.currentTarget.dataset.label) this.setData({ selectLabel: null})
    else this.setData({ selectLabel: e.currentTarget.dataset.label})
  },

  handleSave(e) {
    const formData = e.detail.value
    console.log(formData.consignee, formData.sex, formData.phone, formData.address, this.data.selectLabel)
  }
})