<script setup lang="ts">

</script>

<template>
	<div class="navigation">
		<span class="site-name">AIRA HOME</span>
	</div>
</template>

<style scoped lang="scss">
	.navigation {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 3rem;
		height: 100%;
		background-color: white;
		box-shadow: 0 0 1.5rem 0 rgb(var(--accent-500-rgb) / 30%);

		.site-name {
			color: var(--accent-500);
			font-weight: 600;
			font-size: 1.5rem;
			writing-mode: vertical-lr;
			rotate: 180deg;

			@include phone {
				writing-mode: inherit;
				rotate: 0deg;
			}
		}

		@include phone {
			width: 100%;
			height: 3rem;
		}
	}
</style>
