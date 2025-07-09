<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/tutorial">Tutorial</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>
