import { ShoppingCart } from ".";

export type Listener<T> = (state: T) => void

export interface CartState {
    needRefresh: boolean,
    cartData: ShoppingCart[]
}