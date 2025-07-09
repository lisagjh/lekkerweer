<script setup>
import { ref, watch } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)

// watch works directly on a ref
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.includes('?')) {
    loading.value = true
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    } finally {
      loading.value = false
    }
  }
})
</script>

<template>
  <div class="wrapper-comp">
    <div class="top">
      <h2>Watchers</h2>

      <p>
        Computed properties allow us to declaratively compute derived values. However, there are
        cases where we need to perform "side effects" in reaction to state changes - for example,
        mutating the DOM, or changing another piece of state based on the result of an async
        operation.
        <br />
        <br />
        We can use the watch function to trigger a callback whenever a piece of reactive state
        changes.
      </p>
    </div>
    <div class="example">
      <p>Ask a yes/no question:</p>
      <input v-model="question" :disabled="loading" />

      <p>{{ answer }}</p>
    </div>

    <div>
      <p>
        Here we used <code>v-model</code> to bind the input to the question ref. The paragraph
        element has the answer in double curly braces. The watcher watches if the question get's
        updated, which is done by typing in the input element. Once the input value contains a
        question mark, the watcher will be triggered, and the answer will be updated.
      </p>
    </div>

    <div class="sources">
      <ol>
        <li><a href="https://vuejs.org/guide/essentials/watchers.html">Vue Docs - Watchers</a></li>
      </ol>
    </div>
  </div>
</template>

<style scoped>
.example {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #d0f8e0;
  padding: 0.5rem;
  border-radius: 0.5rem;

  & input {
    min-height: 2rem;
    max-width: 80%;
  }
}
</style>
