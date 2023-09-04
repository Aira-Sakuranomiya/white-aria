<script setup lang="ts">

</script>

<template>
	<div class="navigation">
		<div class="left">
			<NuxtLink to="/">
				<span class="site-name">AIRA CAFÉ</span>
			</NuxtLink>
		</div>
		<div class="right">
			<NuxtLink to="/profile">Profile</NuxtLink>
			<NuxtLink to="/links">Links</NuxtLink>
		</div>
	</div>
</template>

<style scoped lang="scss">
	$lr-padding: 1.5rem;

	.navigation {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 3rem;
		// background-color: var(--accent-500);
		// box-shadow: 0 0 1.5rem 0 rgb(var(--accent-500-rgb) / 30%);

		.site-name {
			@include title-font;
			margin-left: $lr-padding;
			color: white;
			font-weight: 600;
			font-size: 1.5rem;
		}

		.right {
			display: flex;
			gap: 3rem;
			align-items: center;
			height: 100%;
			padding: 0 $lr-padding;
			filter: drop-shadow(0 0 5px rgb(var(--accent-500-rgb) / 100%));

			a {
				color: rgb(255 255 255 / 70%);
				text-decoration: none;

				&::after {
					display: block;
					width: 100%;
					height: 2px;
					margin-top: 3px;
					background-color: white;
					transform: scaleX(0);
					transition: transform 0.6s;
					content: "";
				}

				&.router-link-active {
					color: white;

					&::after {
						transform: scaleX(0.5);
					}
				}
			}
		}
	}
</style>
