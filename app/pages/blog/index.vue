<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content';

useHead({ title: "Blog" });
const query: QueryBuilderParams = { path: '/posts', sort: [{ date: -1 }] };
</script>

<template>
	<div class="page-container">
		<h2>+ Blog +</h2>
		<div class="list-container">
			<ContentList :query="query" path="/posts" v-slot="{ list }">
				<NuxtLink :to="`/blog/${article.slug}`" v-for="article in list" :key="article._path">
					<BlogCard :title="article.title" :date="article.date" :description="article.description" />
				</NuxtLink>
			</ContentList>
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

h2 {
	color: var(--accent-500);
	font-size: 1.5rem;
	text-align: center;
	margin: 3rem 0;
	animation: intro 800ms cubic-bezier(0.1, 0.9, 0.2, 1) backwards;

	@include dark {
		@include small-text-shadow;
	}
}

.list-container {
	display: flex;
	flex-direction: column;
	gap: 2rem;
	max-width: 960px;
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
