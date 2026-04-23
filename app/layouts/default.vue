<script setup lang="ts">
const props = defineProps<{
  cornerIcon?: string
}>()
</script>

<template>
  <Transition appear>
    <CornerIcon v-if="props.cornerIcon" :key="props.cornerIcon" :name="props.cornerIcon" />
  </Transition>
  <Navigation />
  <div class="layout-slot-wrapper">
    <slot />
  </div>
</template>

<style scoped lang="scss">
::slotted {
  padding-top: 3rem;
}

.layout-slot-wrapper.remove {
  *,
  *::before,
  *::after {
    display: none;
  }
}

.corner-icon {
  &.v-enter-from,
  &.v-leave-to {
    opacity: 0;
  }

  &.v-enter-from {
    scale: 0;
  }

  &.v-leave-to {
    scale: 2;
  }

  &.v-enter-active,
  &.v-leave-active {
    transition: 0.5s cubic-bezier(0.75, 0, 0, 1);
  }
}
</style>
