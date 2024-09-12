<script lang="ts" setup>
import { ref } from 'vue'

const payload = ref({
  firstName: '',
  lastName: '',
  age: 0
})

const selectedMeals = ref([])

const submitFormData = (e: Event) => {
  const target = e.target as HTMLFormElement

  //   payload.value.firstName = target.elements[0].value as string
  //   payload.value.lastName = target.elements[1].value as string
  //   payload.value.age = target.elements[2].value as number
}
</script>
<template>
  <div>
    <h1>Form</h1>

    <form action="">
      <input type="text" v-model="payload.firstName" placeholder="Enter your first name" />
      <input type="text" v-model="payload.lastName" placeholder="Enter your last name" />
      <input type="number" v-model="payload.age" placeholder="Enter your age" />

      <div>
        <p>Select Meals</p>

        <input
          type="checkbox"
          id="breakfast"
          name="breakfast"
          value="Breakfast"
          v-model="selectedMeals"
        />
        <label for="breakfast">Breakfast</label>
        <br />
        <input type="checkbox" id="lunch" name="lunch" value="Lunch" v-model="selectedMeals" />
        <label for="lunch">Lunch</label>
        <br />
        <input type="checkbox" id="dinner" name="dinner" value="Dinner" v-model="selectedMeals" />
        <label for="dinner">Dinner</label>
      </div>
      <button>Submit</button>
    </form>

    <ul>
      <li>First name: {{ payload.firstName }}</li>
      <li>Last name: {{ payload.lastName }}</li>
      <li>Age: {{ payload.age }}</li>
    </ul>

    <p>List of meals for {{ payload.firstName }}</p>
    <ul>
      <li v-for="(meal, index) in selectedMeals" :key="index">
        {{ meal }}
      </li>
    </ul>
    <ul></ul>
  </div>
</template>
