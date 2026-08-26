// index.ts
import { IndexPageData, IndexPageMethods } from "../../../typings/types/index"
import { categoryList, dishList, setmealList } from "../../services/index"
import { CATEGORY_TYPE, MESSAGE } from "../../utils/index";

Page<IndexPageData, IndexPageMethods>({
    data: {
        categoryList: [],
        productList: [],
        selectCategory: null,
        currentProduct: null,
        productModalOpen: false,
        flavorsModalOpen: false,
    },

    onLoad(){
        wx.showLoading({title: MESSAGE.COMMON_LOADING });
        categoryList({}).then(res => {
            const first = res.data[0] || null;
            this.setData({
                categoryList: res.data,
                selectCategory: first,
            })
            if(!first) return;
            dishList({categoryId: first.id}).then(res => {
                this.setData({
                    productList: res.data
                })
            })
        }).finally(() => {
            wx.hideLoading()
        })
    },

    handleChangeCategory(e){
        const select = e.currentTarget.dataset.category;
        if(select.id === this.data.selectCategory?.id) return;
        wx.showLoading({title: MESSAGE.COMMON_LOADING });
        this.setData({ selectCategory: select});
        if(select.type === CATEGORY_TYPE.DISH){
            dishList({categoryId: select.id}).then(res => {
                this.setData({
                    productList: res.data
                })
            }).finally(() => {
                wx.hideLoading();
            })
        } else if(select.type === CATEGORY_TYPE.SETMEAL){
            setmealList({categoryId: select.id}).then(res => {
                this.setData({
                    productList: res.data
                })
            }).finally(() => {
                wx.hideLoading();
            })
        }

    },

    handleOpenProductModal(e){
        console.log("handleCheckProduct", e.currentTarget.dataset)
        this.setData({ currentProduct: e.currentTarget.dataset.record, productModalOpen: true });
    },

    handleCloseProductModal(){
        this.setData({ productModalOpen: false })
    },

    handleAddProduct(e){
        console.log("handleAddProduct", e.currentTarget.dataset)
        if(e.currentTarget.dataset.flavors){
            this.setData({ flavorsModalOpen: true });
        }
    },
})
