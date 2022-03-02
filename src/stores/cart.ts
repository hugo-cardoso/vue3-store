import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Product } from '../types'

type CartState = {
  items: Product[];
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  } as CartState),
  getters: {
    total: (state) => state.items.reduce((acc, item) => acc + item.price, 0),
    itemsCount: (state) => state.items.length,
  },
  actions: {
    addItem(item: Product) {
      const hasItemInCart = this.items.some(cartItem => cartItem.id === item.id)
      if (!hasItemInCart) this.items.push(item)
    },
    removeItem(item: Product) {
      this.items = this.items.filter(i => i.id !== item.id)
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
}