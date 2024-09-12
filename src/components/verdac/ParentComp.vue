<script lang="ts" setup>
import { ref } from 'vue'

const listOfNames = ref(['John', 'Doe', 'Jane', 'Doe'])
const prefix = ref('Hello')
const suffix = ref('Amber')

const changeSuffix = () => {
  const index = Math.floor(Math.random() * (listOfNames.value.length - 1))
  suffix.value = listOfNames.value[index]
}
</script>
<template>
  <div>
    <header>
      <h1>Logo</h1>

      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <button @click="changeSuffix">Change about heading</button>
          </li>
        </ul>
      </nav>
    </header>

    <slot>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id obcaecati ipsum repellendus
        dicta labore delectus doloremque nisi porro quaerat animi magni rerum, vel repudiandae
        commodi aliquam, harum reprehenderit ex explicabo?
      </p>
    </slot>

    <slot name="about" :suffix="suffix" :prefix="prefix"></slot>
    <slot name="contactus"></slot>

    <footer>
      <h1>Footer</h1>

      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </footer>
  </div>
</template>
