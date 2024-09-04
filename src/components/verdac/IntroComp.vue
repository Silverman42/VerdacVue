<script lang="ts">
import AppCard from '../AppCard.vue'

export default {
  name: 'IntroComp',
  props: {
    msg: {
      type: String,
      default: ''
    },
    userData: {
      type: Object,
      default: () => ({
        firstName: 'John',
        lastName: 'Doe',
        age: 0
      })
    }
  },
  data() {
    return {
      message: 'Hello world',
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  computed: {
    doubleCount() {
      return this.count * 2
    }
  },
  components: {
    AppCard
  },
  watch: {
    count: function (newValue, prevValue) {
      console.log(newValue, prevValue)
      newValue === 5 && alert('count is 5')
    }
  }
}
</script>

<template>
  <div>
    <button @click="increment">Count is: {{ count }}</button>
    {{ doubleCount }}

    <app-card v-if="count === 3"></app-card>
    <!-- <hello-world></hello-world> -->
  </div>
</template>

<style scoped></style>
