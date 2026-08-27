// components/product-modal/product-modal.ts
import { setmealDish } from "../../services/index";
import { CATEGORY_TYPE } from "../../utils/index"
import { ProductModalParams, ProductModalData, ProductModalMethods, Category, DishVO, Setmeal } from "../../../typings/types/index"

Component<ProductModalData, ProductModalParams, ProductModalMethods>({

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
    setmealDishes: [],
  },

  observers: {
    "record, category": function(record: DishVO | Setmeal | null, category: Category) {

        if(!record || category.type === CATEGORY_TYPE.DISH) return;
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