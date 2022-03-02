import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Product } from '../types'

type ShowcaseState = {
  name: string;
  items: Product[];
  isLoading: boolean;
}

export const useShowcaseStore = defineStore('showcase', {
  state: () => ({
    name: '',
    items: [],
    isLoading: true
  } as ShowcaseState),
  getters: {
    itemsCount: (state) => state.items.length,
  },
  actions: {
    changeName(name: string) {
      this.name = name
    },
    changeLoading(status: boolean) {
      this.isLoading = status
    },
    changeItems(items: Product[]) {
      this.items = items
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useShowcaseStore, import.meta.hot))
}