// components/product-modal/product-modal.ts
import { setmealDish } from "../../services/index";
import { CATEGORY_TYPE } from "../../utils/index"
import { ProductModalParams, ProductModalData, ProductModalMethods, CategoryType, DishVO, Setmeal } from "../../../typings/types/index"

Component<ProductModalData, ProductModalParams, ProductModalMethods>({

  /**
   * 组件的属性列表
   */
  properties: {
    record: null,
    type: null,
  },

  /**
   * 组件的初始数据
   */
  data: {
    CATEGORY_TYPE,
    setmealDishes: [],
  },

  observers: {
    "record, type": function(record: DishVO | Setmeal | null, type: CategoryType) {
        if(!record || type === CATEGORY_TYPE.DISH) return;
        setmealDish({ id:record.id }).then(res => {
            this.setData({setmealDishes: res.data})
        })
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleCloseWrapper(){
        this.triggerEvent("close");
    },

    noop(){},
  }
})