<script lang="ts" setup>
import { ref, computed, watch, onMounted } from 'vue'
import UserCard from './UserCard.vue'

const count = ref(3) //state
const doubleCount = () => (count.value = count.value * 2)
const trippleCount = computed(() => count.value * 3)

watch(count, (newValue, prevValue) => {
  console.log(`The new count is ${newValue}`)
  console.log(`The previous count is ${prevValue}`)
})

// Component Props
// Event Bus
</script>
<template>
  <div>
    <h1>Composition</h1>

    <button @click="doubleCount">Double count is: {{ count }}</button>
    <p>The tripple count is {{ trippleCount }}</p>

    <UserCard :age="count"></UserCard>
  </div>
</template>
