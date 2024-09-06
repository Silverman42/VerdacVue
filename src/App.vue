<script setup lang="ts">
import IntroComp from './components/verdac/IntroComp.vue'
import Compositon from './components/verdac/CompositionComp.vue'
import EventComp from './components/verdac/EventsComp.vue'

const sayHurray = (event: Event) => {
  // count.value += 5
  console.log(event)
}
</script>

<template>
  <IntroComp />
  <Compositon></Compositon>
  <EventComp @kick="sayHurray($event)"></EventComp>
</template>

<style></style>
