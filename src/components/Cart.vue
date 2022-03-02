<script setup lang="ts">
import { computed, watch } from 'vue'
import { useCartStore } from '../stores/cart'
import CurrencyUtils from '../utils/currency'

import Card from './Card.vue'

const cartStore = useCartStore()

const cardTitle = computed(() => {
  let title = 'Cart'
  if (cartStore.itemsCount) title += ` (${ cartStore.itemsCount })`
  return title
})

watch(() => cartStore.items, items => {
  console.log('Calculando frete...')
}, { deep: true })
</script>

<template>
  <Card :title="cardTitle">
    <div class="cart" v-if="cartStore.itemsCount">
      <div
        class="cart__item"
        v-for="item in cartStore.items"
        :key="item.id"
        @click="() => cartStore.removeItem(item)"
      >
        <div>{{ item.name }}</div>
        <div>{{ CurrencyUtils.format(item.price, 'USD') }}</div>
      </div>
      <div class="cart__footer">
        <div class="cart__footer-item">
          <span>Total:</span>
          <span>{{ CurrencyUtils.format(cartStore.total, 'USD') }}</span>
        </div>
      </div>
    </div>
    <div class="cart__message" v-else>Cart is empty</div>
  </Card>
</template>

<style scoped>
.cart {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.cart__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  border-radius: 3px;
  background-color: #eee;
  padding: 15px;
  box-sizing: border-box;
  cursor: pointer;
}

.cart__message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
}

.cart__footer {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.cart__footer-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 15px;
  box-sizing: border-box;
}
</style>
