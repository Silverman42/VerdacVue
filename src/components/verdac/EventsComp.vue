<script setup lang="ts">
import { ref } from 'vue'
// Event handling with Native Elements
// Event handling with Custom Elements (Components)

const eventTrigger = defineEmits(['throw', 'kick']) //Define event bus
const sayHurray = (event: Event) => {
  const element = event.target as HTMLButtonElement

  eventTrigger('kick', element)
}

const count = ref(0)
</script>

<template>
  <div>
    <button @click="sayHurray($event)">Trigger events {{ count }}</button>
    <form action=""></form>
  </div>
</template>
