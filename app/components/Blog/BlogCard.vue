<script setup lang="ts">
defineProps<{
  title?: string
  date: string
  description?: string
}>()
</script>

<template>
  <div class="blog-card">
    <h2 v-if="title">
      {{ title }}
    </h2>
    <p class="description">
      {{ description }}
    </p>
    <div class="info">
      <div>
        <div class="info-item">
          <p>// {{ date }}</p>
        </div>
      </div>
      <NuxtIcon name="mdi:arrow-right" class="enter" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.blog-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  color: var(--text);
  background-color: var(--card);
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 10%);
    transform: translateY(-0.5rem);

    .enter {
      color: var(--accent-500);
    }
  }

  h2 {
    margin: 0;
    font-size: 1.25rem;
    color: var(--accent-500);
  }

  p {
    display: flex;
    flex-direction: column;
    font-size: 0.875rem;
  }

  .description {
    margin-top: 1rem;
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
    color: var(--neutral);

    .info-item {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    .enter {
      font-size: 1.5rem;
      transition: color 0.2s;
    }
  }
}
</style>
