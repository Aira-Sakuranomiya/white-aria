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
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 20%);
  border-radius: 0.5rem;
  background-color: var(--card);

  &:hover {
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 10%);
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
