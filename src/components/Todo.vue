<script setup>
import { ref } from 'vue'

// give each todo a unique id
let id = 0

const newTodo = ref('')
const todos = ref([
  { id: id++, text: 'Learn HTML' },
  { id: id++, text: 'Learn JavaScript' },
  { id: id++, text: 'Learn Vue' },
])

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value })
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<template>
  <div class="wrapper-comp">
    <div class="top">
      <h2><code>v-for</code> - List Rendering</h2>
      <p>
        We can use the <code>v-for</code> directive to render a list of elements based on a source
        array:
      </p>
    </div>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" required placeholder="new todo" />
      <button>Add Todo</button>
    </form>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
        <button @click="removeTodo(todo)">x</button>
      </li>
    </ul>

    <div class="sources">
      <ol>
        <li>
          <a href="https://vuejs.org/guide/essentials/list.html">Vue Docs - List Rendering</a>
        </li>
      </ol>
    </div>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: row;
  width: 100%;

  & input {
    width: 100%;
    border: 1px solid grey;
    border-radius: 0.5rem 0 0 0.5rem;
    height: 2.5rem;
    padding: 0.55rem;
  }

  & button {
    min-width: 5rem;
    border-radius: 0 0.5rem 0.5rem 0;
  }
}

ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style-type: none;
  padding: 0.5rem;
}

ul li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #e9f5ee;
  padding: 0.5rem;
  border-radius: 0.5rem;

  & button {
    height: 1.5rem;
    width: 1.5rem;
  }
}
</style>
