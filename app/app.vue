<script setup lang="ts">
useHead({
  titleTemplate: '%s - AIRA',
  htmlAttrs: {
    lang: 'en',
  },
})
</script>

<template>
  <div>
    <div class="decoration-stripes" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
:root {
  --accent-300: #ffdfe7;
  --accent-500: #f06e8e;
  --accent-500-rgb: 240 110 142;
  --card: white;
  --hover-bg: var(--card);
  --main-bg: white;
  --neutral: #797173;
  --neutral-secondary: #ececec;
  --text: #212121;
  --branding-font: Montserrat, -apple-system, BlinkMacSystemFont, system-ui, sans-serif;

  @include dark {
    --hover-bg: rgb(56 56 56);
    --neutral-secondary: rgb(48 48 48);
    --card: rgb(48 48 48);
    --main-bg: #212121;
    --neutral: #e5e4e4;
    --text: white;
  }

  background-color: var(--main-bg);
  background-image:
    linear-gradient(to right, rgba(127, 127, 127, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(127, 127, 127, 0.05) 1px, transparent 1px);
  background-size: 120px 120px;
  background-attachment: fixed;

  text-autospace: normal;
}

*,
::before,
::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: 'liga';
}

body {
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Roboto Flex', Roboto, Inter, 'Segoe UI Variable Display', 'Segoe UI', Ubuntu,
    Cantarell, 'Noto Sans CJK SC', 'Noto Sans SC', 'Source Han Sans CN', 'Microsoft YaHei UI', 'Microsoft YaHei',
    system-ui, sans-serif;
  -webkit-tap-highlight-color: transparent;
  // accent-color: var(--accent-500);
}

@media (prefers-reduced-motion: reduce) {
  *,
  ::before,
  ::after {
    transition-duration: 0s !important;
    animation-duration: 0s !important;
  }
}

// reset
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--branding-font);
}

a {
  text-decoration: none;
}

.nav-bg {
  position: sticky;
  width: 100%;
  height: 3rem;
  background-color: var(--accent-500);
  box-shadow: 0 0 1.5rem 0 rgb(var(--accent-500-rgb) / 30%);
}

// .page-enter-active {
// 	transition: all 0.6s cubic-bezier(0.1, 0.9, 0.2, 1);
// }

.page-leave-active {
  transition: all 0.2s cubic-bezier(0.95, 0.05, 0.795, 0.035);
}

// .page-enter-from {
// 	transform: translateY(8rem);
// 	opacity: 0;
// }

.page-leave-to {
  transform: translateY(-4rem);
  opacity: 0;
}

pre {
  overflow: auto;
  font-size: 12px;
  line-height: 1.25rem;
  background-color: var(--neutral-secondary);
  padding: 1rem;
  border-radius: 8px;
}

code:not(pre > code) {
  background-color: var(--neutral-secondary);
  font-size: 12px;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  white-space: nowrap;
}

hr {
  height: 1px;
  color: var(--neutral-secondary);
  background-color: currentColor;
  border: 0;
  font-size: 0;
  width: 100%;
}
</style>

<style scoped lang="scss">
.decoration-stripes {
  z-index: -1;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 32.8125rem;
  background-image: linear-gradient(
    -45deg,
    transparent,
    transparent 13.9512529279%,
    black 0,
    black 36.0487470721%,
    transparent 0,
    transparent 63.9512529279%,
    black 0,
    black 86.0487470721%,
    transparent 0,
    transparent
  );
  background-size: 0.5rem 0.5rem;
  background-repeat: repeat;
  mask-image: linear-gradient(0deg, rgb(0, 0, 0) 0, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0));
  opacity: 0.02;
}
</style>
