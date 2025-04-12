<!-- .vitepress/components/DiagramRenderer.vue -->
<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  data: { type: String, required: true },
  type: { type: String, default: 'flowchart' },
});

const diagramRef = ref(null);
const isLoading = ref(true);
const hasError = ref(false);
const errorMessage = ref('');

onMounted(async () => {
  if (typeof window !== 'undefined') {
    try {
      // Dynamically import mermaid
      const mermaid = await import('mermaid');
      await mermaid.default.initialize({
        startOnLoad: false,
        theme: 'default',
        securityLevel: 'loose',
      });

      const { svg } = await mermaid.default.render(
        `diagram-${Date.now()}`,
        props.data
      );

      if (diagramRef.value) {
        diagramRef.value.innerHTML = svg;
      } else {
        throw new Error('no diagramRef');
      }
      console.log('mermdaid', diagramRef);

      isLoading.value = false;
    } catch (error) {
      console.error('Failed to render diagram:', error);
      hasError.value = true;
      errorMessage.value = error.message;
      isLoading.value = false;
    }
  }
});
</script>

<template>
  <div class="diagram-wrapper">
    <div v-if="isLoading" class="diagram-loading">
      <div class="loading-spinner"></div>
      <p>Rendering diagram...</p>
    </div>

    <div v-else-if="hasError" class="diagram-error">
      <h4>Failed to render diagram</h4>
      <pre>{{ errorMessage }}</pre>
      <div class="diagram-code">
        <h5>Diagram Code:</h5>
        <pre>{{ data }}</pre>
      </div>
    </div>

    <div ref="diagramRef" class="diagram-container"></div>
  </div>
</template>

<style scoped>
.diagram-wrapper {
  margin: 20px 0;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
}

.diagram-container {
  background-color: #f9fafb;
  padding: 16px;
  overflow: auto;
  display: flex;
  align-content: center;
  justify-content: center;
}

.diagram-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background-color: #f9fafb;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #e5e7eb;
  border-top: 4px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 16px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.diagram-error {
  padding: 16px;
  background-color: #fee2e2;
  color: #b91c1c;
}

.diagram-error h4 {
  margin-top: 0;
  margin-bottom: 8px;
}

.diagram-error pre {
  background-color: rgba(0, 0, 0, 0.05);
  padding: 8px;
  border-radius: 4px;
  white-space: pre-wrap;
  margin: 8px 0;
}

.diagram-code {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.diagram-code h5 {
  margin-top: 0;
  margin-bottom: 8px;
}
</style>
