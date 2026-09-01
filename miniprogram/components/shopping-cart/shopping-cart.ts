import { IAppOption } from "../../../typings";
import { shoppingCartAdd, shoppingCartClean, shoppingCartList, shoppingCartSub, shopStatus } from "../../services/index";
import { cartStore, MESSAGE, STATUS } from "../../utils/index";

// components/shopping-cart.ts
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
    STATUS,
    modalOpen: false,
    cartData: [],
    totalPrice: "",
    status: 0,
  },

  unsubscribe: null as (() => void) | null,

  /**
   * 组件的方法列表
   */
  methods: {
    handleUpdate(){
        if(!cartStore.getState().needRefresh) return;
        cartStore.setState({needRefresh: false });
        shoppingCartList().then(res => {
            cartStore.setState({ cartData: res.data });
            let price = 0;
            res.data.forEach(item => {
                price += item.amount * item.number;
            })
            if(price == 0) this.setData({ cartData: res.data, totalPrice: "" });
            else {
                this.setData({ cartData: res.data, totalPrice: price.toFixed(2) });
            }
        })
    },

    handleOpenModal(){
        this.setData({ modalOpen: true });
    },

    handleCloseModal(){
        this.setData({ modalOpen: false });
    },

    handleClean(){
        wx.showLoading({title: MESSAGE.DELETE_LOADING})
        shoppingCartClean().then(()=>{
            cartStore.setState({ needRefresh: true });
            wx.hideLoading();
            wx.showToast({title: MESSAGE.DELETE_SUCCESS})
        }).catch(()=>{
            wx.hideLoading();
            wx.showToast({title: MESSAGE.DELETE_ERROR})
        })
    },

    handleAddProduct(e){
        const record = e.target.dataset.record
        if(record.dishId){
            shoppingCartAdd({ dishId: record.dishId, dishFlavor: record.dishFlavor || undefined}).then(() => {
                wx.showToast({title: MESSAGE.ADD_SUCCESS, icon: "success"})
                cartStore.setState({needRefresh: true});
            }).catch(() => {
                wx.showToast({title: MESSAGE.ADD_ERROR, icon: "error"})
            })
        } else {
            shoppingCartAdd({ setmealId: record.setmealId }).then(() => {
                wx.showToast({title: MESSAGE.ADD_SUCCESS, icon: "success"})
                cartStore.setState({needRefresh: true});
            }).catch(() => {
                wx.showToast({title: MESSAGE.ADD_ERROR, icon: "error"})
            })
        }
    },

    handleReduceProduct(e){
        const record = e.target.dataset.record
        if(record.dishId){
            shoppingCartSub({ dishId: record.dishId, dishFlavor: record.dishFlavor || undefined}).then(() => {
                wx.showToast({title: MESSAGE.DELETE_SUCCESS, icon: "success"})
                cartStore.setState({needRefresh: true});
            }).catch(() => {
                wx.showToast({title: MESSAGE.DELETE_ERROR, icon: "error"})
            })
        } else {
            shoppingCartSub({ setmealId: record.setmealId }).then(() => {
                wx.showToast({title: MESSAGE.DELETE_SUCCESS, icon: "success"})
                cartStore.setState({needRefresh: true});
            }).catch(() => {
                wx.showToast({title: MESSAGE.DELETE_ERROR, icon: "error"})
            })
        }
    },

    handlePay(){
        wx.navigateTo({ url: "/pages/orderPay/orderPay" });
    }
  },

  pageLifetimes: {
    show(){
        cartStore.setState({ needRefresh: true })
        shopStatus().then(res => {
            const app = getApp<IAppOption>();
            this.setData({ status: res.data })
            app.globalData.status = res.data
        })
        this.handleUpdate()
        this.unsubscribe = cartStore.subscribe(() => {
          this.handleUpdate()
        })
    },

    hide(){
        this.unsubscribe?.();
        this.unsubscribe = null;
    }
  }
})