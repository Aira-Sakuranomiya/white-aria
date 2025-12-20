<script setup lang="ts">
const nuxtApp = useNuxtApp()
const loading = ref(true)
const allowTransitions = ref(false)
nuxtApp.hook('page:loading:end', () => {
  loading.value = false
  setTimeout(() => {
    allowTransitions.value = true
  }, 800)
})
</script>

<template>
  <Navigation />
  <div class="layout-slot-wrapper" :class="{ remove: !allowTransitions }">
    <slot />
  </div>
  <DXTransition :loading :duration="500" :delay="20" />
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

.dx-transition {
  --dx-color-center: #ffc3d4;
  --dx-color-items-1: #79fff8;
  --dx-color-items-2: #fed821;
  --dx-color-items-3: white;
  --dx-color-items-4: #d2f1ff;
  --dx-color-bg: #f06e8e;
  --dx-color-side-1: #f3bfcc;
  --dx-color-side-2: #ffffff;
}
</style>
