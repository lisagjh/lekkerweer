<script setup>
import { ref } from 'vue'

const message = ref('')
</script>

<template>
  <div class="wrapper-comp">
    <div>
      <h2>Typing Text</h2>
      <p>
        In Vue, mustaches are only used for text interpolation. To bind an attribute to a dynamic
        value, we use the v-bind directive:
      </p>
      <br />

      <pre><code>&lt;div v-bind:id="dynamicId"&gt;&lt;/div&gt;</code></pre>

      <br />
      <p>
        The part after the colon (:id) is the "argument" of the directive. Here, the element's id
        attribute will be synced with the dynamicId property from the component's state. Because
        v-bind is used so frequently, it has a dedicated shorthand syntax: template
      </p>

      <br />

      <pre><code>&lt;div :id="dynamicId"&gt;&lt;/div&gt;</code></pre>
    </div>

    <hr />

    <div>
      <p>
        <code>v-model</code> can be used on a component to implement a two-way binding.

        <br />
        <br />

        <code>v-model</code> creates a link between the input element <code>value</code> attribute
        and a data value in the Vue instance. When you change the input, the data updates and when
        the data changes, the input updates as well

        <br />

        so <code>v-model</code> uses two way binding that let's you read and update the value.
      </p>

      <br />
      <input v-model="message" placeholder="Type here" />
      <p>{{ message ? message : 'your text will appear here!' }}</p>
    </div>

    <div class="sources">
      <ol>
        <li><a href="https://vuejs.org/guide/components/v-model.html">Vue Docs - v-model</a></li>
        <li><a href="https://www.w3schools.com/vue/vue_v-model.php">W3Schools - vue v-model</a></li>
      </ol>
    </div>
  </div>
</template>

<style scoped>
input {
  max-width: 25rem;
}
</style>
