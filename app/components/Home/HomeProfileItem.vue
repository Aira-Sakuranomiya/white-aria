<script setup lang="ts">
defineProps<{
  icon: string
}>()
</script>

<template>
  <div class="home-profile-item">
    <div class="icon-wrapper">
      <NuxtIcon :name="icon" />
    </div>
    <span><slot /></span>
  </div>
</template>

<style scoped lang="scss">
.home-profile-item {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  background-color: var(--neutral-secondary);
  color: var(--text);
  animation: 0.6s cubic-bezier(0.1, 0.9, 0.2, 1) backwards list-item-intro;
  border-radius: 2px;
  overflow: hidden;
}

.icon-wrapper {
  display: flex;
  background-color: var(--text);
  color: var(--main-bg);
  font-size: 20px;
  padding: 4px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
</style>
