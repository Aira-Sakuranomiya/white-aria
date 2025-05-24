<script setup lang="ts">
const props = defineProps<{
	href: string;
	name: string;
	icon: string;
}>();

const colored = ref(false);
</script>

<template>
	<a :href="href" target="_blank" :name="name">
		<Transition>
			<NuxtIcon :name="icon" class="icon" filled />
		</Transition>
	</a>
</template>

<style scoped lang="scss">
a {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 4rem;
	color: var(--neutral);
	transition: 0.2s;

	&:hover {
		transform: scale(1.1);
	}
}

.icon {
	display: block;
	font-size: unset;

	&:deep(svg) {
		width: 100%;
		height: auto;
	}
}
</style>
