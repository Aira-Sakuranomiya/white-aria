<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content'

definePageMeta({
  layout: {
    props: {
      cornerIcon: 'mdi:document',
    },
  },
})

useHead(
  {
    title: 'Blog',

    htmlAttrs: {
      lang: 'zh-CN',
    },
  },
)
const query: QueryBuilderParams = { path: '/posts', sort: [{ date: -1 }] }
</script>

<template>
  <div class="page-container">
    <div class="content">
      <SectionTitle icon="mdi:arrow-right-thick">
        BLOG
      </SectionTitle>

      <div class="list-container">
        <ContentList v-slot="{ list }" :query="query" path="/posts">
          <NuxtLink v-for="article in list" :key="article._path" :to="`/blog/${article.slug}`">
            <BlogCard :title="article.title" :date="article.date" :description="article.description" />
          </NuxtLink>
        </ContentList>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
}

.content {
  max-width: 960px;
}

.section-title {
  margin: 3rem 0;
  animation: intro 800ms cubic-bezier(0.1, 0.9, 0.2, 1) backwards;
}

.list-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

@keyframes intro {
  from {
    transform: translateY(50vh);
    opacity: 0;
  }
}

a {
  width: 100%;
  $length: 20;
  animation: intro cubic-bezier(0.1, 0.9, 0.2, 1) backwards;
  animation-duration: (800ms + 50ms * $length);
  animation-delay: (50ms * $length);
  max-width: 960px;

  @for $i from 1 through $length {
    &:nth-child(#{$i}) {
      animation-duration: (800ms + 50ms * $i);
      animation-delay: (50ms * $i);
    }
  }
}
</style>
