<script setup lang="ts">
const props = defineProps<{
	name: string;
	avatar: string;
	to: string;
	description?: string;
}>();
</script>

<template>
	<NuxtLink :to class="friend-link">
		<div class="inner">
			<NuxtImg :src="avatar" :alt="name" class="avatar" />
			<div class="texts">
				<span class="name">{{ name }}</span>
				<span v-if="description" class="description">{{ description }}</span>
			</div>
		</div>
	</NuxtLink>
</template>

<style scoped lang="scss">
.inner {
	display: flex;
	align-items: center;
	padding: 1rem;
	border-radius: 0.5rem;
	transition: 0.2s;
	color: var(--text);

	.friend-link:hover & {
		transform: translateY(-0.25rem);
		box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 10%);
		color: var(--accent-500);
		background-color: var(--card);
	}
}

.avatar {
	width: 3rem;
	height: 3rem;
	border-radius: 100%;
	object-fit: cover;

	@include phone {
		width: 2rem;
		height: 2rem;
	}
}

.texts {
	display: flex;
	flex-direction: column;
	gap: 0.125rem;

	> * {
		padding-left: 1rem;

		@include phone {
			padding-left: 0.5rem;
		}
	}
}

.description {
	color: var(--neutral);
	font-size: 0.75rem;
}
</style>
