// pages/editAddress/editAddress.ts
import Dialog from 'tdesign-miniprogram/dialog';
import { ADDRESS_LABEL_LIST, ADDRESS_LIST, MESSAGE } from "../../utils/index"
import { EditAddressPageData, EditAddressPageMethods, Gender } from "../../../typings/types"
import { addressBookAdd, addressBookDelete, addressBookId, addressBookUpdate } from "../../services/index";

Page<EditAddressPageData, EditAddressPageMethods>({

  /**
   * 页面的初始数据
   */
  data: {
    type: "ADD",
    id: null,
    ADDRESS_LIST,
    ADDRESS_LABEL_LIST,
    initConsignee: "",
    initSex: null,
    initPhone: "",
    initAddress: "",
    initDetail: "",
    selectAddress: Array.from({ length: 3 }),
    selectLabel: null,
    cascaderVisible: false,
    cascaderNote: "请选择地址",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const type = options.type as "ADD" | "EDIT";
    const id = options.id ? Number(options.id) : undefined;
    if(type && id) {
        this.setData({ type, id })
        addressBookId({id: id}).then(res => {
            this.setData({ 
                initConsignee:res.data.consignee,
                initSex: res.data.sex,
                initPhone: res.data.phone,
                initAddress: res.data.districtCode,
                initDetail: res.data.detail,
                selectAddress: [
                    {
                        value: res.data.provinceCode,
                        label: res.data.provinceName
                    },
                    {
                        value: res.data.cityCode,
                        label: res.data.cityName
                    },
                    {
                        value: res.data.districtCode,
                        label: res.data.districtName
                    },
                ],
                selectLabel: res.data.label,
                cascaderNote: `${res.data.provinceName}/${res.data.cityName}/${res.data.districtName}`
            })
        })
    }
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

  showCascader() {
    this.setData({ cascaderVisible: true });
  },

  onChange(e) {
    const { selectedOptions } = e.detail;

    this.setData({
      selectAddress: selectedOptions,
      cascaderNote: selectedOptions.map((item) => item.label).join('/'),
    });
  },

  handleClickLabel(e) {
    if(this.data.selectLabel === e.currentTarget.dataset.label) this.setData({ selectLabel: null})
    else this.setData({ selectLabel: e.currentTarget.dataset.label})
  },

  handleSave(e) {
    const formData = e.detail.value
    const consignee : string = formData.consignee || undefined
    const sex: Gender = formData.sex || undefined
    const phone: string = formData.phone || undefined
    const provinceCode = this.data.selectAddress[0]?.value || undefined
    const provinceName = this.data.selectAddress[0]?.label || undefined
    const cityCode= this.data.selectAddress[1]?.value || undefined
    const cityName = this.data.selectAddress[1]?.label || undefined
    const districtCode = this.data.selectAddress[2]?.value || undefined
    const districtName = this.data.selectAddress[2]?.label || undefined
    const detail: string = formData.detail || undefined
    const label = this.data.selectLabel || undefined
    if(!consignee || !sex || !phone || !detail) {
        wx.showToast({ title: "请补全信息", icon: "error"})
        return;
    }

    if(this.data.id){
        wx.showLoading({ title: MESSAGE.UPDATE_LOADING })
        addressBookUpdate({
            id: this.data.id, consignee, sex, phone, provinceCode, provinceName, cityCode, cityName, districtCode, districtName, detail, label
        }).then(() => {
            wx.hideLoading();
            wx.navigateBack();
        }).catch(() => {
            wx.hideLoading();
            wx.showToast({ title: MESSAGE.UPDATE_ERROR , icon: "error"})
        })
    } else {
        wx.showLoading({ title: MESSAGE.ADD_LOADING })
        addressBookAdd({
            consignee, sex, phone, provinceCode, provinceName, cityCode, cityName, districtCode, districtName, detail, label
        }).then(() => {
            wx.hideLoading();
            wx.navigateBack();
        }).catch(() => {
            wx.hideLoading();
            wx.showToast({ title: MESSAGE.ADD_ERROR , icon: "error"})
        })
    }
  },

  handleDelete() {
    const dialogConfig = {
        context: this,
        title: '删除地址',
        closeOnOverlayClick: true,
        content: '是否确定删除该地址？',
        confirmBtn: { content: '确认', theme: 'danger' },
        cancelBtn: '取消',
      };

      Dialog.confirm(dialogConfig)
        .then(() => {
            if(!this.data.id) return;
            addressBookDelete({ id: this.data.id }).then(() => {
                wx.navigateBack()
            })
        })
        .catch(() => {});
  }
})