<script setup>
import { ref } from 'vue'

const awesome = ref(false)
</script>

<template>
  <div class="wrapper-comp">
    <h2><code>v-if</code> - Conditional Rendering</h2>
    <button @click="awesome = !awesome">awesome?</button>
    <h1 v-if="awesome">Vue is awesome!</h1>

    <div class="sources">
        <ol>
            <li><a href="https://vuejs.org/guide/essentials/conditional.html">Vue Docs - Conditional Rendering</a></li>
        </ol>
    </div>
  </div>
</template>
