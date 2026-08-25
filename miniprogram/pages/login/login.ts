import { userLogin } from "../../services/index"
import { MESSAGE } from "../../utils/index"

// pages/login/login.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  login() {
    wx.showLoading({title: MESSAGE.LOGIN_LOADING})
    wx.login({
      success: (res) => {
        if (res.code) {
            userLogin({code: res.code}).then(response => {
                const token = response.data.token;
                wx.setStorageSync("token", token)
                wx.hideLoading();
                wx.showToast({title: MESSAGE.LOGIN_SUCCESS});
                setTimeout(()=>{
                    wx.navigateTo({url: "/pages/index/index"})
                }, 1000)
            }).catch(()=>{
                wx.hideLoading();
                wx.showToast({title: MESSAGE.LOGIN_ERROR, icon: "error"});
            });
        }
      },
      fail: () => {
        wx.hideLoading();
        wx.showToast({title: MESSAGE.LOGIN_ERROR, icon: "error"});
      }
    })
  }
})