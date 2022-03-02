
<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  title: String,
  loading?: Boolean,
}>()
</script>

<template>
  <div class="card">
    <h1 class="card__title" v-if="!loading">{{ title }}</h1>
    <div class="card__body">
      <slot v-if="!loading"></slot>
      <div class="card__loader" v-else>Loading...</div>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 5px;
  min-height: 250px;
}

.card__title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: #42b983;
}

.card__body {
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
}

.card__loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  font-weight: bold;
  color: #42b983;
}
</style>