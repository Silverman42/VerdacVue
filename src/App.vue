<script setup lang="ts">
import IntroComp from './components/verdac/IntroComp.vue'
import Compositon from './components/verdac/CompositionComp.vue'
import EventComp from './components/verdac/EventsComp.vue'
import ParentComp from './components/verdac/ParentComp.vue'
import FormComp from './components/verdac/FormComp.vue'
import UsersComp from './components/verdac/UsersComp.vue'

const sayHurray = (event: Event) => {
  // count.value += 5
  console.log(event)
}
</script>

<template>
  <!-- <IntroComp />
  <Compositon></Compositon>
  <EventComp @kick="sayHurray($event)"></EventComp> -->
  <!-- <ParentComp>
    <section>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quos magnam at vitae consectetur
      minus explicabo et illo dolores magni eligendi est iste error mollitia, perspiciatis quaerat,
      nihil sint? Est.
    </section>
    <section>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quos magnam at vitae consectetur
      minus explicabo et illo dolores magni eligendi est iste error mollitia, perspiciatis quaerat,
      nihil sint? Est.
    </section>
    <section>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quos magnam at vitae consectetur
      minus explicabo et illo dolores magni eligendi est iste error mollitia, perspiciatis quaerat,
      nihil sint? Est.
    </section>

    <template #about="props">
      <h1>{{ props.prefix }} About {{ props.suffix }}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis illum modi expedita
        explicabo eum quaerat officiis fugit dolor sint, voluptatibus nihil facilis minus delectus
        eveniet odio cum ipsum ad. Ducimus?
      </p>
    </template>
  </ParentComp> -->
  <!-- <FormComp> </FormComp> -->
  <UsersComp></UsersComp>
</template>

<style></style>
