<script setup>
import { ref, computed } from 'vue'

let id = 0

const newTodo = ref('')
const hideCompleted = ref(false)
const todos = ref([
  { id: id++, text: 'Learn HTML', done: true },
  { id: id++, text: 'Learn JavaScript', done: true },
  { id: id++, text: 'Learn Vue', done: false },
])

const filteredTodos = computed(() => {
  return hideCompleted.value ? todos.value.filter((t) => !t.done) : todos.value
})

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false })
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<template>
  <div class="wrapper-comp">
    <div class="top">
      <h2>Computed Property</h2>
      <p>
        In Vue we can use a computed property to calculate a value based on other reactive data.
        <br />
        <br />
        Introducing <code>computed()</code>. We can create a computed ref that computes its
        <code>.value</code> based on other reactive data sources.
        <br />
        <br />
        
      </p>
    </div>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" required placeholder="new todo" />
      <button>Add Todo</button>
    </form>
    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="removeTodo(todo)">X</button>
      </li>
    </ul>
    <button @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? 'Show all' : 'Hide completed' }}
    </button>
  </div>
</template>

<style>
.done {
  text-decoration: line-through;
}

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
