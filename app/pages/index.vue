<script setup lang="ts">
useHead({ title: 'Home' })

const secret = 'hentai'
let index = 0

function onKeydown(e: KeyboardEvent) {
  if (e.key.length !== 1)
    return

  if (e.key.toLowerCase() === secret[index]) {
    index++

    if (index === secret.length) {
      index = 0
      triggerEasterEgg()
    }
  }
  else {
    index = 0
  }
}

function triggerEasterEgg() {
  window.open('https://x.com/otono_rinne', '_blank')
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div class="page-container">
    <HomeHeader />
    <HomeProjects />
  </div>
</template>

<style scoped lang="scss">
.page-container {
  > *:nth-child(1) {
    height: 100dvh;
  }
}
</style>
