<!-- .vitepress/components/CodeTabs.vue -->
<script setup>
import { ref, computed } from 'vue';
import { useData } from 'vitepress';

const props = defineProps({
  labels: { type: Array, required: true },
});

const activeTab = ref(0);
const { isDark } = useData();
</script>

<template>
  <div class="tabs" :class="{ dark: isDark }">
    <div class="tabs-header">
      <button
        v-for="(label, i) in labels"
        :key="i"
        :class="{ active: activeTab === i }"
        @click="activeTab = i"
      >
        {{ label }}
      </button>
    </div>
    <div class="tabs-body">
      <div
        v-for="(_, i) in labels"
        :key="i"
        :class="{ 'tab-content': true, active: activeTab === i }"
      >
        <slot :name="`tab-${i}`"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Light mode (default) styles */
.tabs {
  margin: 20px 0;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  background-color: #ffffff;
}

.tabs-header {
  display: flex;
  border-bottom: 1px solid #e5e7eb;
}

.tabs-header button {
  padding: 10px 16px;
  background: none;
  border: none;
  border-right: 1px solid #e5e7eb;
  cursor: pointer;
  color: #374151;
  transition: background-color 0.2s, color 0.2s;
}

.tabs-header button.active {
  background-color: #f9fafb;
  font-weight: bold;
  color: #111827;
}

.tabs-header button:hover:not(.active) {
  background-color: #f3f4f6;
}

.tab-content {
  display: none;
  padding: 16px;
  color: #1f2937;
}

.tab-content.active {
  display: block;
}

/* Dark mode styles */
.tabs.dark {
  border-color: #374151;
  background-color: #1f2937;
}

.tabs.dark .tabs-header {
  border-bottom-color: #374151;
}

.tabs.dark .tabs-header button {
  border-right-color: #374151;
  color: #e5e7eb;
}

.tabs.dark .tabs-header button.active {
  background-color: #111827;
  color: #ffffff;
}

.tabs.dark .tabs-header button:hover:not(.active) {
  background-color: #283548;
}

.tabs.dark .tab-content {
  color: #d1d5db;
}
</style>
