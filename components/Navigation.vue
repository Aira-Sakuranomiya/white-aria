<script setup lang="ts">
</script>

<template>
	<div>
		<div class="bg"></div>
		<div class="left">
			<NuxtLink to="/">
				<span class="material-icons">local_cafe</span>
				<span class="site-name">AIRA CAFÉ</span>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M19.1803 4.6723L6.43807 12.6737L4.81968 10.0964L17.5619 2.09503L19.1803 4.6723Z"
						fill="var(--nav-left-color)" />
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M19.1803 13.9036L6.43807 21.905L4.81968 19.3277L17.5619 11.3263L19.1803 13.9036Z"
						fill="var(--nav-left-color)" />
				</svg>
			</NuxtLink>
		</div>
		<div class="right">
			<NuxtLink to="/profile">
				<span class="material-icons">person</span>
				Profile
			</NuxtLink>
			<NuxtLink to="/links">
				<span class="material-icons">link</span>
				Links
			</NuxtLink>
		</div>
	</div>
</template>

<style scoped lang="scss">
$lr-padding: 1rem;

.navigation {
	--nav-left-color: var(--accent-500);
	--nav-right-color: var(--icon);
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 3rem;
	// box-shadow: 0 0 1.5rem 0 rgb(var(--accent-500-rgb) / 30%);

	&.white {
		--nav-left-color: white;
		--nav-right-color: white;
	}

	.bg {
		mask-image: linear-gradient(black 60%, transparent);
		position: absolute;
		right: 0;
		left: 0;
		z-index: -1;
		height: 4rem;
		backdrop-filter: blur(20px);
	}

	.site-name {
		@include title-font;
		font-weight: 600;
		font-size: 1.5rem;

		@include phone {
			display: none;
		}
	}

	.left {
		height: 100%;

		a {
			display: flex;
			flex-shrink: 0;
			gap: 4px;
			align-items: center;
			justify-content: center;
			height: 100%;
			padding: 0 $lr-padding;
			color: var(--nav-left-color);
		}
	}

	.right {
		display: flex;
		align-items: center;
		height: 100%;
		margin-right: 4px;
		font-family: Montserrat, sans-serif;

		a {
			display: flex;
			gap: 4px;
			align-items: center;
			justify-content: center;
			height: 100%;
			padding: 0 12px;
			color: var(--nav-right-color);
			text-decoration: none;

			&::after {
				position: absolute;
				bottom: 0;
				display: block;
				width: 24px;
				height: 2px;
				margin-top: 3px;
				background-color: var(--accent-500);
				transform: scaleX(0);
				transition: transform 0.6s;
				content: "";
			}

			&.router-link-active {
				color: var(--accent-500);

				&::after {
					transform: scaleX(1);
				}
			}
		}
	}
}
</style>
