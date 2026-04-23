<script setup lang="ts">
defineProps<{
  icon: string
}>()
</script>

<template>
  <div class="section-title">
    <span aria-hidden="true">// AIRA SAKURANOMIYA</span>
    <h2>
      <div v-if="icon" class="icon-block" aria-hidden="true">
        <NuxtIcon :name="icon" class="icon" />
      </div>
      <slot />
    </h2>
  </div>
</template>

<style scoped lang="scss">
.section-title {
  display: flex;
  flex-direction: column;
  font-family: var(--branding-font);
}

.icon-block {
  background-color: var(--accent-500);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px;
  padding-left: 1.5rem;
  font-size: 16px;
}

span {
  font-size: 6px;
  font-weight: 600;
  color: var(--neutral);
}

h2 {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: var(--accent-500);
}
</style>
