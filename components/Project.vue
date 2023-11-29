<script setup lang="ts">
	const props = defineProps<{
		href: string;
		name: string;
		icon: string;
	}>();
</script>

<template>
	<a :href="href" target="_blank" :name="name">
		<NuxtIcon :name="icon" class="icon" filled />
	</a>
</template>

<style scoped lang="scss">
	a {
		color: var(--accent-500);
		transition: 0.2s;

		&:hover {
			transform: scale(1.1);
		}
	}

	.icon {
		display: block;
		font-size: unset;

		&:deep(svg) {
			width: auto;
			height: auto;
		}
	}
</style>
