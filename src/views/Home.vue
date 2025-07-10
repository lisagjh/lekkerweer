<script setup>
import { ref, onMounted } from 'vue'

let city = ref('Amsterdam')
const weather = ref(null)
const loading = ref(true)
const cityError = ref(null)

const KEY = import.meta.env.VITE_API_KEY

const fetchWeather = async () => {
  cityError.value = null
  if (!city.value) {
    cityError.value = 'Voer een plaats in om het weer te zien.'
    return
  }

  loading.value = true
  weather.value = null

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${KEY}`,
    )

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Onbekende fout')
    }

    weather.value = data
  } catch (err) {
    console.error('Fout bij ophalen weer:', err.message)
    weather.value = { error: err.message }
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

    <p v-if="cityError" style="color: red">‼️ {{ cityError }}</p>

    <div v-if="loading">Laden...</div>

    <div v-else-if="weather?.weather && weather?.main">
      <p>{{ weather.weather[0].description }}</p>
      <p>Temp: {{ weather.main.temp }}°C</p>
    </div>

    <div v-else-if="weather?.error">
      <p style="color: red">‼️ {{ weather.error }}</p>
    </div>

    <div v-else-if="!city">
      <p>Voer een plaats in om het weer te zien.</p>
    </div>

    <div v-else>
      <p>Onbekende fout bij ophalen van weerdata 😓</p>
    </div>
  </main>
</template>
