<script setup lang="ts">
import { onMounted, computed } from 'vue'

import { useShowcaseStore } from '../stores/showcase'
import { useCartStore } from '../stores/cart'
import * as storeService from '../services/store'

import Card from './Card.vue'

import type { Product } from '../types'

const showcaseStore = useShowcaseStore()
const cartStore = useCartStore()

const cartItemsIds = computed(() => cartStore.items.map(item => item.id));

function handleClickItem(item: Product) {
  if (checkItemInCart(item)) {
    cartStore.removeItem(item)
    return;
  }

  cartStore.addItem(item)
}

function checkItemInCart(item: Product) {
  return cartItemsIds.value.includes(item.id)
}

onMounted(async () => {
  showcaseStore.changeLoading(true)
  const showcaseResponse = await storeService.getShowcase()
  showcaseStore.changeName(showcaseResponse.name)
  showcaseStore.changeItems(showcaseResponse.items)
  showcaseStore.changeLoading(false)
})
</script>

<template>
  <Card
    :title="`${ showcaseStore.name } (${ showcaseStore.itemsCount })`"
    :loading="showcaseStore.isLoading"
  >
    <div class="showcase">
      <div
        class="item"
        :class="{'item--selected': checkItemInCart(item)}"
        v-for="item in showcaseStore.items"
        :key="item.id"
        @click="() => handleClickItem(item)"
      >{{ item.name }}</div>
    </div>
  </Card>
</template>

<style scoped>
.showcase {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.item {
  width: 100%;
  aspect-ratio: 1/1;
  background-color: #eee;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px solid transparent;
  box-sizing: border-box;
  transition: all 0.15s ease-in-out;
  user-select: none;
}

.item.item--selected {
  background-color: #42b983;
  color: #fff;
}

.item:not(.item--selected):hover {
  border-color: #42b983;
}
</style>
