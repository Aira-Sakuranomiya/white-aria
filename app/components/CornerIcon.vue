<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <NuxtIcon :name class="corner-icon" />
</template>

<style scoped lang="scss">
.corner-icon {
  position: fixed;
  z-index: -1;
  font-size: 10rem;
  color: var(--text);
  bottom: -1.5rem;
  right: -1.5rem;
  opacity: 0.07;
}
</style>
