<script setup>
import Header from './components/Header.vue'
import { provide, ref, watch } from 'vue'
const isDark = ref(false)
provide('isDark', isDark)

// Watch for dark mode change and toggle class
watch(isDark, (val) => {
  document.documentElement.classList.toggle('dark', val)
})
</script>

<template>
  <div id="app">
    <button @click="isDark = !isDark" class="btn btn-sm btn-dark m-3 position-absolute end-0 top-0">
      {{ isDark ? '☀️ Light' : '🌙 Dark' }}
    </button>

    <Header />
    <router-view />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em var(--highlight-color));
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em var(--highlight-color));
}
</style>
