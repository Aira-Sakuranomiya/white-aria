<script setup lang="ts">
const props = defineProps<{
  loading: boolean
  duration: number
}>()
</script>

<template>
  <Transition>
    <div v-if="loading" class="dx-transition-side">
      <div>
        <svg class="mosaik mosaik-1" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="21" width="1" height="1" />
          <rect x="4" y="20" width="1" height="1" />
          <rect x="5" y="19" width="1" height="1" />
          <rect x="6" y="20" width="1" height="1" />
          <rect x="7" y="21" width="1" height="1" />
          <rect x="7" y="19" width="1" height="1" />
          <rect y="23" width="1" height="1" />
          <rect x="6" y="17" width="1" height="1" />
          <rect x="7" y="16" width="1" height="1" />
          <rect x="12" y="12" width="1" height="1" />
          <rect x="19" y="5" width="1" height="1" />
          <rect x="20" y="4" width="1" height="1" />
          <rect x="21" y="3" width="1" height="1" />
          <rect x="22" y="1" width="1" height="1" />
          <rect x="23" y="3" width="1" height="1" />
          <rect x="23" width="1" height="1" />
        </svg>
        <div class="rectangle rectangle-1" />
      </div>
      <div>
        <svg class="mosaik mosaik-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="12" width="1" height="1" />
          <rect x="6" y="11" width="1" height="1" />
          <rect x="7" y="10" width="1" height="1" />
          <rect x="8" y="11" width="1" height="1" />
          <rect x="9" y="10" width="1" height="1" />
          <rect x="10" y="8" width="1" height="1" />
          <rect x="11" y="7" width="1" height="1" />
          <rect x="13" y="6" width="1" height="1" />
          <rect x="13" y="4" width="1" height="1" />
          <rect x="16" y="3" width="1" height="1" />
          <rect x="17" y="2" width="1" height="1" />
          <rect x="18" y="1" width="1" height="1" />
          <rect x="17" width="1" height="1" />
          <rect x="12" y="5" width="1" height="1" />
          <rect x="9" y="12" width="1" height="1" />
          <rect x="16" y="1" width="1" height="1" />
        </svg>
        <div class="rectangle rectangle-2" />
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
$base: 85.5;
$color-1: var(--dx-color-side-1);
$color-2: var(--dx-color-side-2);
$duration: calc(var(--dx-transition-duration) - 100ms);

.dx-transition-side {
  position: absolute;

  &.v-enter-from,
  &.v-leave-to {
    > *:nth-child(1) {
      translate: min(-42vw, -42vh) min(-42vw, -42vh);
    }

    > *:nth-child(2) {
      translate: min(-22vw, -22vh) min(-22vw, -22vh);
    }
  }

  &.v-enter-active,
  &.v-enter-active > * {
    transition: all $duration cubic-bezier(0.3, 0, 0, 1);
  }

  &.v-leave-active,
  &.v-leave-active > * {
    transition: all $duration cubic-bezier(1, -0.5, 1, 1);
  }
}

.rectangle {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-60%) translateX(-60%) rotate(-45deg);

  &.rectangle-1 {
    $offset: 25.5;
    background-color: $color-1;
    width: min(#{$base + $offset}vw, #{$base + $offset}vh);
    height: min(#{$base + $offset}vw, #{$base + $offset}vh);
  }

  &.rectangle-2 {
    background-color: $color-2;
    width: min(100vw, 100vh);
    height: min(#{$base}vw, #{$base}vh);
  }
}

.mosaik {
  position: absolute;

  &.mosaik-1 {
    $offset: 27.5;
    left: max(-2vw, -2vh);
    width: min(#{$base - $offset}vw, #{$base - $offset}vh);
    color: $color-1;
  }

  &.mosaik-2 {
    $offset: 27;
    left: max(-2vw, -2vh);
    width: min(#{$base - $offset}vw, #{$base - $offset}vh);
    color: $color-2;
  }
}
</style>
