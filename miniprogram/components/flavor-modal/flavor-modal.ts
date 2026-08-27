import { shoppingCartAdd } from "../../services/index";
import { cartStore, MESSAGE } from "../../utils/index";

// components/flavor-modal/flavor-modal.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    record: null,
  },

  /**
   * 组件的初始数据
   */
  data: {
    flavorsList: [],
    selectFlavor:[],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    noop(){},

    handleClose(){
        this.triggerEvent("close")
    },

    handleSelect(e){
        const newData = [...this.data.selectFlavor];
        newData[e.target.dataset.i] = e.target.dataset.j;
        this.setData({ selectFlavor: newData })
        console.log(newData)
    },

    handleAdd(){
        if(this.data.selectFlavor.includes(undefined)) {
            wx.showToast({title: MESSAGE.CART_ADD_FAILED_WITH_NO_SELECT})
            return;
        }
        const flavors = this.data.flavorsList.map((item, index) => item.value[this.data.selectFlavor[index]])
        shoppingCartAdd({ dishId: this.properties.record.id, dishFlavor: flavors.join(",")}).then(() => {
            cartStore.setState({ needRefresh: true});
            wx.showToast({title: MESSAGE.ADD_SUCCESS});
            this.triggerEvent("close");
        })
    }
  },

  lifetimes: {
    attached(){
        const list = this.properties.record.flavors.map(flavor => {
            return {
                ...flavor,
                value: JSON.parse(flavor.value)
            }
        })
        this.setData({flavorsList: list, selectFlavor: Array.from({ length: list.length })})
    }
  }
})