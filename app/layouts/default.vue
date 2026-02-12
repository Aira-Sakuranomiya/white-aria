<template>
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
</style>
