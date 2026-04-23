<script setup lang="ts">
defineProps<{
  href: string
  name: string
  icon: string
}>()
</script>

<template>
  <a :href="href" target="_blank" :name="name">
    <Transition>
      <NuxtIcon :name="icon" class="icon" />
    </Transition>
  </a>
</template>

<style scoped lang="scss">
a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  transition: 0.2s;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  background-color: var(--card);

  &:hover {
    background-color: var(--hover-bg);
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.15);
    transform: translateY(-0.5rem);
  }
}

.icon {
  display: block;
  font-size: unset;
  width: auto;
  height: 100%;
  height: 3rem;
}
</style>
