// pages/orderPay/orderPay.ts
import { OrderPayPageData, OrderPayPageMethods } from "../../../typings/types";
import { addressBookGetDefault, orderSubmit, shoppingCartList } from "../../services/index"
import { cartStore, DELIVERY_STATUS, formatRequestTime, MESSAGE, PAY_METHOD, SHOP_INFO, TABLEWARE_STATUS } from "../../utils/index"

Page<OrderPayPageData, OrderPayPageMethods>({

  /**
   * 页面的初始数据
   */
  data: {
    SHOP_INFO,
    defaultAddress: null,
    defaultDeliveryStatus: DELIVERY_STATUS.IMMEDIATELY,
    defaultCart: [],
    defaultRemark: "无接触配送",
    defaultTablewareNumber: 1,
    totalPack: 0,
    totalAmount: 0,
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
    cartStore.setState({ needRefresh: true })
    shoppingCartList().then(res => {
        if(res.data.length === 0) {
            wx.redirectTo({url: "/pages/index/index" })
        }
        let total = SHOP_INFO.DELIVERY_AMOUNT;
        let pack = 0;
        res.data.forEach(item => {
            total += item.amount * item.number
            pack += SHOP_INFO.PACK_AMOUNT * item.number
        })
        this.setData({ defaultCart: res.data, totalPack: pack, totalAmount: total + pack })
    })
    addressBookGetDefault().then(res => {
        this.setData({ defaultAddress: res.data})
    })
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

  handleSetAddress() {
    wx.navigateTo({ url: "/pages/address/address" })
  },

  handlePay(){
    if(!this.data.defaultAddress) {
        wx.showToast({ title: MESSAGE.LACK_DEFAULT_ADDRESS, icon: "error"})
        return;
    }
    orderSubmit({
        addressBookId: this.data.defaultAddress.id,
        amount: this.data.totalAmount,
        deliveryStatus: this.data.defaultDeliveryStatus,
        estimatedDeliveryTime: formatRequestTime(new Date(Date.now() + 30 * 60 * 1000)),
        packAmount: SHOP_INFO.PACK_AMOUNT,
        payMethod: PAY_METHOD.WECHAT,
        remark: this.data.defaultRemark,
        tablewareNumber: this.data.defaultTablewareNumber,
        tablewareStatus: TABLEWARE_STATUS.BYDISH
     }).then(res => {
        wx.redirectTo({ url: `/pages/pay/pay?id=${res.data.id}&amount=${res.data.orderAmount}&number=${res.data.orderNumber}&time=${res.data.orderTime}` })
    })
  }
})