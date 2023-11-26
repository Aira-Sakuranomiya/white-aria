<script setup lang="ts">

</script>

<template>
	<div class="home-header">
		<div class="background">
			<NuxtImg src="https://i0.hdslb.com/bfs/new_dyn/a6d44500ef3c61e4cc8d91196f0a4ba1456935358.png@1024w_1024h.webp"
				alt="Background" />
		</div>
		<div class="header">
			<div class="left">
				<NuxtImg src="https://i1.hdslb.com/bfs/face/0997d3ad773f67b3bfd7294edfa63b23981aee02.jpg@733w_733h.webp"
					class="avatar" alt="My avatar" />
			</div>
			<div class="right">
				<h1>桜ノ宮<b><ruby>アイラ<rt>AIRA</rt>
							<rt>艾了个拉</rt>
						</ruby></b></h1>
				<h2><b>Kind and Kawaii</b>, Forever!~</h2>
				<SocialButtons />
			</div>
		</div>
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
		animation: 1s cubic-bezier(0.1, 0.9, 0.2, 1) both bg-intro;
		pointer-events: none;

		@keyframes bg-intro {
			from {
				height: 0;
			}

			to {
				height: $center;
			}
		}

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

			@include dark {
				background-color: hsl(from var(--accent-500) h calc(s - 0.4) calc(l - 0.3));
				opacity: 0.85;
			}
		}
	}

	@keyframes move-in {
		from {
			opacity: 0;
			translate: 50vw 0;
		}
	}

	.header {
		position: relative;
		display: flex;
		gap: 2rem;
		align-items: flex-end;
		justify-content: center;
		height: $center;
		color: white;

		@include phone {
			flex-direction: column;
			align-items: center;
		}

		.left {
			display: flex;
			transform: translateY(30%);
		}

		.right {
			margin-bottom: 2rem;
		}

		h1 {
			display: flex;
			align-items: flex-end;
			animation: 1s cubic-bezier(0.1, 0.9, 0.2, 1) 0.4s both move-in;

			b {
				display: flex;
			}

			ruby {
				display: inline-flex;
				flex-direction: column-reverse;
				font-family: Montserrat, sans-serif;

				rb,
				rt {
					display: inline;
					font-size: 0.3em;
					line-height: 1;
					letter-spacing: 1em;
					text-align: center;
					text-indent: 1em;

					&:nth-child(1) {
						margin-bottom: -0.5em;
					}

					&:nth-child(2) {
						margin-bottom: 0.5em;
						font-size: 0.24em;
					}
				}
			}
		}

		h2 {
			animation: 1s cubic-bezier(0.1, 0.9, 0.2, 1) 0.5s both move-in;
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

			@include phone {
				right: 0;
				left: 0;
				margin: 0;
				padding: 10vw;
			}
		}
	}

	.avatar {
		width: $avatar-size;
		border-radius: 100%;
		animation: 0.6s cubic-bezier(0.26, 1.44, 0.4, 1.0) both avatar-intro;

		@keyframes avatar-intro {
			from {
				scale: 0;
			}

			to {
				scale: 1;
			}
		}

		@include phone {
			margin-bottom: 20vw;
		}

		@include dark {
			filter: drop-shadow(0 0.05rem 2rem rgb(var(--accent-500-rgb) / 80%));
		}
	}

	h1 {
		@include text-shadow;
		display: flex;
		gap: 0.5em;
		font-size: 7.5vw;
		font-family: -apple-system, BlinkMacSystemFont, "Noto Sans CJK JP", "Noto Sans JP", "Yu Gothic", system-ui, sans-serif;

		@include phone {
			font-size: 8.2vw;
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
