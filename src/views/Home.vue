<script setup>
import { ref, onMounted } from 'vue'

let city = ref('Amsterdam')
const weather = ref(null)
const loading = ref(true)

const KEY = import.meta.env.VITE_API_KEY

const fetchWeather = async () => {
  loading.value = true
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${KEY}`,
    )
    const data = await response.json()
    weather.value = data
  } catch (err) {
    console.error('Fout bij ophalen weer:', err)
  } finally {
    loading.value = false
  }
}

onMounted(fetchWeather)
</script>

<template>
  <main>
    <h1>Weer in {{ city }}</h1>

    <input type="text" v-model="city" @change="fetchWeather" />

    <div v-if="loading">Laden...</div>

    <div v-else-if="weather?.weather && weather?.main">
      <p>{{ weather.weather[0].description }}</p>
      <p>Temp: {{ weather.main.temp }}°C</p>
    </div>

    <div v-else>
      <p>Fout bij ophalen van weerdata 😓</p>
    </div>
  </main>
</template>
