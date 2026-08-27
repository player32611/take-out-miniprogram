// index.ts
import { IndexPageData, IndexPageMethods } from "../../../typings/types/index"
import { categoryList, dishList, setmealList } from "../../services/index"
import { CATEGORY_TYPE, MESSAGE, STATUS } from "../../utils/index";

Page<IndexPageData, IndexPageMethods>({
    data: {
        categoryList: [],
        productList: [],
        selectCategory: null,
        currentProduct: null,
        productModalOpen: false,
    },

    onLoad(){
        wx.showLoading({title: MESSAGE.COMMON_LOADING });
        categoryList({}).then(res => {
            const data = res.data.filter(record => record.status === STATUS.ENABLED)
            const first = data[0] || null;
            this.setData({
                categoryList: data,
                selectCategory: first,
            })
            if(!first) return;
            dishList({categoryId: first.id}).then(res => {
                this.setData({
                    productList: res.data.filter(record => record.status === STATUS.ENABLED).map(item => (
                        {...item, key: `${item.id}-${item.categoryId}`}
                    ))
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
        this.setData({ selectCategory: select });
        if(select.type === CATEGORY_TYPE.DISH){
            dishList({categoryId: select.id}).then(res => {
                this.setData({
                    productList: res.data.filter(record => record.status === STATUS.ENABLED).map(item => (
                        {...item, key: `${item.id}-${item.categoryId}`}
                    ))
                })
            }).finally(() => {
                wx.hideLoading();
            })
        } else if(select.type === CATEGORY_TYPE.SETMEAL){
            setmealList({categoryId: select.id}).then(res => {
                this.setData({
                    productList: res.data.filter(record => record.status === STATUS.ENABLED).map(item => (
                        {...item, key: `${item.id}-${item.categoryId}`}
                    ))
                })
            }).finally(() => {
                wx.hideLoading();
            })
        }

    },

    handleOpenProductModal(e){
        this.setData({ currentProduct: e.currentTarget.dataset.record, productModalOpen: true });
    },

    handleCloseProductModal(){
        this.setData({ productModalOpen: false })
    },

    handleNavigateUserCenter(){
        wx.navigateTo({url: "/pages/userCenter/userCenter"})
    }
})
