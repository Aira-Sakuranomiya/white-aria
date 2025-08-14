<script setup lang="ts">
const { slug } = useRoute().params

definePageMeta({
  hideLogo: true,
})
</script>

<template>
  <div class="page-wrapper">
    <div class="page-appbar">
      <NuxtLink to="/blog" class="back">
        <span class="material-icons">arrow_back</span>
      </NuxtLink>
    </div>
    <article>
      <ContentDoc v-slot="{ doc }" :path="`/posts/${slug}`">
        <div class="title-block">
          <h2 class="title">
            {{ doc.title }}
          </h2>
          <div class="date">
            <span class="material-icons">calendar_today</span>
            <p>{{ doc.date }}</p>
          </div>
        </div>
        <ContentRenderer class="content-renderer" :value="doc" />
      </ContentDoc>
    </article>
  </div>
</template>

<style scoped lang="scss">
@keyframes back-in {
  from {
    transform: translateY(100%);
  }
}

.page-wrapper {
  width: 100%;

  .page-appbar {
    height: 3rem;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 101;
    overflow: hidden;

    > .back {
      height: 100%;
      display: flex;
      align-items: center;
      gap: 0.25rem;
      padding: 0 1rem;
      color: var(--neutral);
      animation: back-in 800ms cubic-bezier(0.75, 0, 0, 1) backwards;
      transition: color 0.2s;

      &:hover {
        color: var(--accent-500);
      }
    }
  }
}

article {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@keyframes title-intro {
  from {
    transform: translateY(100vh);
  }
}

@keyframes scale {
  from {
    transform: scale(0);
  }
}

.title-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: var(--accent-500);
  padding: 6rem 0 4rem;

  > .title {
    font-size: 1.5rem;
    animation: title-intro 600ms cubic-bezier(0.1, 0.9, 0.2, 1) backwards;
  }

  > .date {
    animation: title-intro 600ms 30ms cubic-bezier(0.1, 0.9, 0.2, 1) backwards;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: var(--neutral);
    opacity: 0.8;
    margin-top: 1rem;
    font-size: 0.875rem;

    .material-icons {
      font-size: 1rem;
    }
  }
}

@keyframes intro {
  from {
    transform: translateY(80vh);
  }
}

.content-renderer {
  animation: intro 800ms 100ms cubic-bezier(0.1, 0.9, 0.2, 1) backwards;
  line-height: 1.5rem;
  width: 100%;
  max-width: 960px;
  padding: 0 1rem 6rem;
  color: var(--text);
}
</style>

<style lang="scss">
.content-renderer {
  > * {
    margin: 1rem 0;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2em;
  }

  a {
    color: var(--accent-500);
  }
}
</style>
