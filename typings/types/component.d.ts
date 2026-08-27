import { Category, DishVO, Setmeal, SetmealDishVO } from "./common";

export interface CartBarParams {

}

export interface CartBarData {
    modalOpen: boolean,
    cartData: []
    totalPrice: number,
}

export interface CartBarMethods {
    handleUpdate: () => void;
    handleOpenModal: () => void;
    handleCloseModal: () => void;
    handleClean: () => void;
}

export interface ProductCountControllerParams {
    record: DishVO | Setmeal | null,
    category: Category,
}

export interface ProductCountControllerData {
    count: number;
}

export interface ProductCountControllerMethods {
    handleUpdate: () => void;
    handleAddProduct: () => void;
    handleReduceProduct: () => void;
}

export interface ProductModalParams {
    record: DishVO | Setmeal | null,
    handleClose: () => void;
}

export interface ProductModalData {
    setmealDishes: SetmealDishVO[];
}

export interface ProductModalMethods {
    handleCloseWrapper: () => void;
    noop: () => void
}