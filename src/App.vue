<script setup lang="ts">
import Showcase from './components/Showcase.vue'
import Cart from './components/Cart.vue'

</script>

<template>
  <div class="container">
    <div class="container__grid">
      <Showcase />
      <Cart />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 15px;
}

.container__grid {
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 15px;
}

@media (max-width: 768px) {
  .container__grid {
    grid-template-columns: 1fr;
  }
}
</style>
