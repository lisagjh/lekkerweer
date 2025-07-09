<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'

const pElementRef = ref(null)

onMounted(() => {
  // component is now mounted.
  console.log('MOUNTED')
  pElementRef.value.textContent = 'Hello World!'
})
</script>

<template>
  <div class="wrapper-comp">
    <div class="top">
      <h2>Lifecycle and template refs</h2>
      <p>
        The <code>onMounted</code> lifecycle hook is used to run code when the component is mounted.

        <br />
        <br />

        Here I made a template ref to the <code>p</code> element. This <code>ref</code>'s initial
        value is <code>null</code>. The content of the <code>p</code> element is 'Goodbye'.
        <code>onMounted</code> changes the content to 'Hello World!' When the component get's
        mounted.
      </p>
    </div>

    <p ref="pElementRef">Goodbye</p>
  </div>
</template>
