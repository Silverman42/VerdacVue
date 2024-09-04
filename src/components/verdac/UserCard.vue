<script setup lang="ts">
interface ISchoolInfo {
  courseCount: number
  cgpa: number
  courseAdvicer: string
}
withDefaults(
  defineProps<{
    firstName?: string
    lastName?: string
    age?: number
    schoolInfo?: ISchoolInfo
  }>(),
  {
    age: 0,
    lastName: 'Doe',
    firstName: 'John',
    //For Default Arrays and Objects
    schoolInfo: () => {
      return {
        courseCount: 0,
        cgpa: 0,
        courseAdvicer: 'James Smith'
      }
    }
  }
)
</script>
<template>
  <div>First Name : {{ firstName }}</div>
  <div>Last Name : {{ lastName }}</div>
  <div>Age : {{ age }}</div>

  <h5>Course Information</h5>
  <ul>
    <li>Course Count : {{ schoolInfo.courseCount }}</li>
    <li>CGPA : {{ schoolInfo.cgpa }}</li>
    <li>Course Advicer : {{ schoolInfo.courseAdvicer }}</li>
  </ul>
</template>
