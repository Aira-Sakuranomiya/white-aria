<script setup lang="ts">
const scrolled = ref(false)

function checkScroll() {
  scrolled.value = window.scrollY > 10
}

onMounted(() => {
  checkScroll()
  window.addEventListener('scroll', () => {
    checkScroll()
  })
})

const route = useRoute()
const navigationBgStyle = ref('acrylic')
const navigationFgColor = ref('pink')
const hideLogo = ref(false)

const routeNavigationBgStyle = computed(() => route.meta.navigationBgStyle)
const routeNavigationFgColor = computed(() => route.meta.navigationFgColor)
const routeHideLogo = computed(() => route.meta.hideLogo)

navigationBgStyle.value = routeNavigationBgStyle.value
navigationFgColor.value = routeNavigationFgColor.value
hideLogo.value = routeHideLogo.value

watch(routeNavigationBgStyle, (value) => {
  navigationBgStyle.value = value
})

watch(routeNavigationFgColor, (value) => {
  navigationFgColor.value = value
})

watch(routeHideLogo, (value) => {
  hideLogo.value = value
})
</script>

<template>
  <div
    class="navigation" :class="{
      'progressive': navigationBgStyle === 'progressive',
      'font-white': navigationFgColor === 'white',
      'scrolled': scrolled,
    }"
  >
    <div class="bg" />

    <div class="left">
      <Transition name="logo">
        <NuxtLink v-if="!hideLogo" to="/">
          <span class="material-icons">local_cafe</span>
          <span class="site-name">AIRA CAFÉ</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd" clip-rule="evenodd"
              d="M19.1803 4.6723L6.43807 12.6737L4.81968 10.0964L17.5619 2.09503L19.1803 4.6723Z"
              fill="var(--nav-left-color)"
            />
            <path
              fill-rule="evenodd" clip-rule="evenodd"
              d="M19.1803 13.9036L6.43807 21.905L4.81968 19.3277L17.5619 11.3263L19.1803 13.9036Z"
              fill="var(--nav-left-color)"
            />
          </svg>
        </NuxtLink>
      </Transition>
    </div>

    <div class="right">
      <NuxtLink to="/profile">
        <span class="material-icons">person</span>
        Profile
      </NuxtLink>
      <NuxtLink to="/blog">
        <span class="material-icons">article</span>
        Blog
      </NuxtLink>
      <NuxtLink to="/links">
        <span class="material-icons">link</span>
        Links
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
$lr-padding: 1rem;

.logo-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.logo-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.logo-enter-active,
.logo-leave-active {
  transition: all 800ms cubic-bezier(0.75, 0, 0, 1);
}

.navigation {
  --nav-left-color: var(--accent-500);
  --nav-right-color: var(--neutral);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  // box-shadow: 0 0 1.5rem 0 rgb(var(--accent-500-rgb) / 30%);
  transition: box-shadow 200ms;

  &.font-white {
    --nav-left-color: white;
    --nav-right-color: white;
  }

  &.transparent {
    .bg {
      display: none;
    }
  }

  &.scrolled {
    box-shadow: 0 0 24px rgb(var(--accent-500-rgb) / 30%);
    background-color: var(--main-bg);
  }

  .progressive .bg {
    mask-image: linear-gradient(black 60%, transparent);
    position: absolute;
    right: 0;
    left: 0;
    z-index: -1;
    height: 5rem;
    backdrop-filter: blur(20px);
  }

  .site-name {
    @include title-font;
    font-weight: 600;
    font-size: 1.5rem;

    @include phone {
      display: none;
    }
  }

  .left {
    height: 100%;
    overflow: hidden;

    a {
      display: flex;
      flex-shrink: 0;
      gap: 0.25rem;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 0 $lr-padding;
      color: var(--nav-left-color);
    }
  }

  .right {
    @include title-font;
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: 0.25rem;

    a {
      position: relative;
      display: flex;
      gap: 0.25rem;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 0 0.75rem;
      overflow: hidden;
      color: var(--nav-right-color);
      font-weight: 600;
      text-decoration: none;
      transition: color 0.6s;

      &::before {
        position: absolute;
        top: 0;
        z-index: -1;
        display: block;
        width: 0;
        height: 0.1875rem;
        background-color: var(--accent-500);
        border-radius: 0 0 9999rem 9999rem;
        transition: width 0.6s;
        content: '';
      }

      &.router-link-active {
        color: var(--accent-500);

        &::before {
          width: 1.5rem;
        }
      }
    }
  }
}
</style>
