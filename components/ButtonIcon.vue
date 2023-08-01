<script setup lang="ts">
	const props = defineProps<{
		name: string;
	}>();
</script>

<template>
	<div class="button-icon">
		<svg-icon :name="name" class="icon" />
	</div>
</template>

<style scoped lang="scss">
	.button-icon {
		display: flex;
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
		width: 48px;
		height: 48px;
		overflow: hidden;
		border-radius: 100%;
		cursor: pointer;
		transition: background-color 0.2s;

		.icon {
			width: 36px;
			height: 36px;
		}

		&:hover {
			background-color: var(--hover-overlay);
		}
	}
</style>
