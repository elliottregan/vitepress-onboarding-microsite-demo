<script setup>
import { ref } from 'vue';
import { useData } from 'vitepress';

const count = ref(0);
const { isDark } = useData();
</script>

<template>
  <div class="counter-container" :class="{ dark: isDark }">
    <span class="counter">{{ count }}</span>
    <button class="increment" @click="count++">Increment</button>
    <button class="reset" @click="count = 0">Reset</button>
  </div>
</template>

<style scoped>
:root {
  /* Light theme colors */
  --counter-bg: #f3f4f6;
  --counter-text: #1f2937;
  --button-bg: #4f46e5;
  --button-hover: #4338ca;
  --button-text: white;

  /* Dark theme colors */
  --counter-bg-dark: #1f2937;
  --counter-text-dark: #f9fafb;
  --button-bg-dark: #6366f1;
  --button-hover-dark: #818cf8;
  --button-text-dark: white;
}

.counter-container {
  display: flex;
  align-items: center;
  gap: 0.625em;
  margin: 1.25em 0;
  padding: 0.9375em;
  border-radius: 0.375em;
  background-color: var(--counter-bg);
  color: var(--counter-text);
  transition: background-color 0.2s, color 0.2s;
}

.counter {
  font-size: 1.5em;
  font-weight: bold;
  min-width: 2.5em;
  text-align: center;
  color: var(--counter-text);
  transition: color 0.2s;
}

button {
  border: none;
  padding: 0.5em 0.75em;
  border-radius: 0.25em;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.2s;
}

button.increment,
button.reset {
  background-color: var(--button-bg);
  color: var(--button-text);
}

button.increment:hover,
button.reset:hover {
  background-color: var(--button-hover);
}

/* Dark mode styles */
.counter-container.dark {
  background-color: var(--counter-bg-dark);
  color: var(--counter-text-dark);
}

.counter-container.dark .counter {
  color: var(--counter-text-dark);
}

.counter-container.dark button.increment,
.counter-container.dark button.reset {
  background-color: var(--button-bg-dark);
  color: var(--button-text-dark);
}

.counter-container.dark button.increment:hover,
.counter-container.dark button.reset:hover {
  background-color: var(--button-hover-dark);
}
</style>
