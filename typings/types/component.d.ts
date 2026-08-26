import { DishVO, Setmeal, SetmealDishVO } from "./common";

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