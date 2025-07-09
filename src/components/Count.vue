<script setup>
import { ref, watch } from 'vue'
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  console.log('Component Count mounted')
})

onUnmounted(() => {
  console.log('Component Count unmounted')
})

const count = ref(0)

watch(count, (newValue, oldValue) => {
  console.log(`Count changed from ${oldValue} to ${newValue}`)
})
</script>

<template>
  <div class="wrapper-comp">
    <p>Count: {{ count }}</p>
    <div class="buttons">
      <button @click="count++">Increment</button>
      <button @click="count = 0">Reset</button>
    </div>
  </div>
</template>

<style scoped>
.buttons {
  display: flex;
  gap: 1rem;
  width: 100%;

  & button {
    width: 100%;
  }
}
</style>
