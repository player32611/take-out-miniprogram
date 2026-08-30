import { shoppingCartAdd, shoppingCartSub } from "../../services/index"
import { cartStore, CATEGORY_TYPE, MESSAGE } from "../../utils/index";

// components/product-count-controller/product-count-controller.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    record: null,
    category: null,
  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 0,
    flavorOpen: false,
  },

  unsubscribe: null as (() => void) | null,

  /**
   * 组件的方法列表
   */
  methods: {
    handleUpdate(){
        let number = 0
        if(this.properties.category.type === CATEGORY_TYPE.DISH){
            cartStore.getState().cartData.filter(cartItem => cartItem.dishId === this.properties.record?.id).forEach(item => {
                number += item.number;
            });
        } else if(this.properties.category.type === CATEGORY_TYPE.SETMEAL){
            cartStore.getState().cartData.filter(cartItem => cartItem.setmealId === this.properties.record?.id).forEach(item => {
                number += item.number;
            });
        }
        this.setData({ count: number })
    },

    handleAddProduct(){
        const id = this.properties.record.id;
        const type = this.data.category.type;
        if(type === CATEGORY_TYPE.DISH){
            shoppingCartAdd({ dishId: id }).then(() => {
                cartStore.setState({ needRefresh: true })
                wx.showToast({title: MESSAGE.ADD_SUCCESS, icon: "success"})
            }).catch(()=>{
                wx.showToast({title: MESSAGE.ADD_ERROR, icon: "error"})
            })
        } else if (type === CATEGORY_TYPE.SETMEAL) {
            shoppingCartAdd({ setmealId: id }).then(() => {
                cartStore.setState({needRefresh: true})
                wx.showToast({title: MESSAGE.ADD_SUCCESS, icon: "success"})
            }).catch(()=>{
                wx.showToast({title: MESSAGE.ADD_ERROR, icon: "error"})
            })
        }
    },

    handleReduceProduct(){
        const id = this.properties.record.id;
        const type = this.data.category.type;
        if(type === CATEGORY_TYPE.DISH){
            shoppingCartSub({ dishId: id }).then(() => {
                cartStore.setState({needRefresh: true})
                wx.showToast({title: MESSAGE.DELETE_SUCCESS, icon: "success"})
            }).catch(()=>{
                wx.showToast({title: MESSAGE.DELETE_ERROR, icon: "error"})
            })
        } else if (type === CATEGORY_TYPE.SETMEAL) {
            shoppingCartSub({ setmealId: id }).then(() => {
                cartStore.setState({needRefresh: true})
                wx.showToast({title: MESSAGE.DELETE_SUCCESS, icon: "success"})
            }).catch(()=>{
                wx.showToast({title: MESSAGE.DELETE_ERROR, icon: "error"})
            })
        }
    },

    handleSelectOpen(){
        this.triggerEvent("open")
        this.setData({ flavorOpen: true })
    },

    handleSelectClose(){
        this.setData({ flavorOpen: false })
    }
  },

  lifetimes: {
    attached(){
        this.handleUpdate()
        this.unsubscribe = cartStore.subscribe(() => {
          this.handleUpdate()
        })
    },
    detached() {
        this.unsubscribe?.();
        this.unsubscribe = null;
    }
  }
})