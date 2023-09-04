<script setup lang="ts">

</script>

<template>
	<div class="home-header">
		<div class="background">
			<NuxtImg src="https://i0.hdslb.com/bfs/new_dyn/a6d44500ef3c61e4cc8d91196f0a4ba1456935358.png@1024w_1024h.webp" alt="Background" />
		</div>
		<div class="header">
			<h1>桜ノ宮<b><ruby>アイラ<rt>AIRA</rt></ruby></b></h1>
			<h2><b>Kind and Kawaii</b>, Forever!~</h2>
			<SocialButtons />
		</div>
		<NuxtImg src="https://i1.hdslb.com/bfs/face/0997d3ad773f67b3bfd7294edfa63b23981aee02.jpg@733w_733h.webp"
			class="avatar" alt="My avatar" />
	</div>
</template>

<style scoped lang="scss">
	$avatar-size: 28vw;
	$center: 60vh;

	.background {
		position: absolute;
		right: 0;
		left: 0;
		z-index: -1;
		height: $center;
		overflow: hidden;
		pointer-events: none;

		img {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: 50% 20%;
		}

		&::before {
			position: absolute;
			display: block;
			width: 100%;
			height: 100%;
			background-color: var(--accent-500);
			opacity: 0.8;
			content: "";
		}
	}

	.header {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 0.5vw;
		justify-content: flex-end;
		height: $center;
		// padding: 0 10vw;
		padding-bottom: 3vw;
		padding-left: calc(10vw + $avatar-size + 5vw);
		color: white;

		@include phone {
			padding-left: calc(10vw + $avatar-size + 3vw);
		}

		h1 {
			display: flex;
			align-items: baseline;

			ruby {
				font-family: Montserrat, sans-serif;

				& > rt {
					font-size: 0.3em;
					letter-spacing: 1em;
					text-align: center;
					text-indent: 1em;
				}
			}
		}

		h1,
		h2 {
			font-weight: 400;
		}

		.social-buttons {
			position: absolute;
			top: $center + 2vh;
			margin-left: -0.5rem;
			padding-right: 1rem;
		}
	}

	.avatar {
		width: $avatar-size;
		margin-top: -20vw;
		margin-left: 8vw;
		border-radius: 100%;
	}

	h1 {
		@include text-shadow;
		display: flex;
		gap: 0.5em;
		font-size: 7vw;
		font-family: -apple-system, BlinkMacSystemFont, "Noto Sans CJK JP", "Noto Sans JP", "Yu Gothic", system-ui, sans-serif;

		@include phone {
			font-size: 7.5vw;
		}

		b {
			font-weight: 900;
		}
	}

	h2 {
		@include text-shadow;
		margin-left: 0.1em;
		font-size: 2vw;

		@include tablet {
			font-size: 1rem;
		}
	}
</style>
