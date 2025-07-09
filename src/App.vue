<script setup>
  import Computed from './components/Computed.vue'
  import Conditional from './components/Conditional.vue'
  import Count from './components/Count.vue'
  import Todo from './components/Todo.vue'
  import TypingText from './components/TypingText.vue'
  import Lifecycle from './components/Lifecycle.vue'
import Watchers from './components/Watchers.vue'
</script>

<template>
  <main>
    <div class="wrapper">
      <Count />
      <TypingText />
      <Conditional />
      <Todo />
      <Computed />
      <Lifecycle />
      <Watchers />
    </div>
  </main>
</template>
