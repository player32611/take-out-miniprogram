import { CartState, Listener } from "../../typings/types/index"

const state: CartState = {
    needRefresh: true,
    cartData: []
}

const listeners = new Set<Listener<CartState>>()

export const cartStore = {
  getState() {
    return state
  },

  setState(partial: Partial<CartState>) {
    Object.assign(state, partial)

    listeners.forEach(listener => {
      listener(state)
    })
  },

  subscribe(listener: Listener<CartState>) {
    listeners.add(listener)

    // 返回取消监听函数
    return () => {
      listeners.delete(listener)
    }
  }
}