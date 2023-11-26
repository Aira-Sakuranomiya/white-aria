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
		border-radius: 100%;
		cursor: pointer;
		transition: 0.2s;

		.icon {
			width: 30px;
			height: 30px;

			@include dark {
				filter: drop-shadow(0 0.05em 0.8em var(--accent-500));
			}
		}

		&:hover {
			transform: scale(1.25);
		}
	}
</style>
