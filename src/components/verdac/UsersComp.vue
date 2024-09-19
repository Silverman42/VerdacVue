<script setup lang="ts">
import { RegisteredUsersDTO } from '../../utils/DTO/users'
import type { IUserDTO } from '../../utils/DTO/users'

import { ref, onMounted } from 'vue'

const users = ref<IUserDTO[]>([])

onMounted(() => {
  users.value = RegisteredUsersDTO()
})
</script>
<template>
  <div>
    <ul v-for="(user, index) in users" :key="index" style="margin-bottom: 2rem">
      <li>Name : {{ user.name }}</li>
      <li>Email : {{ user.email }}</li>
      <li>
        Address : {{ user.address_suite }}, {{ user.address_street }}, {{ user.address_city }},
        {{ user.address_zipcode }}
      </li>
      <li>Phone : {{ user.phone }}</li>
      <li>Website : {{ user.website }}</li>
    </ul>
  </div>
</template>
