<script setup lang="ts">

</script>

<template>
	<div class="home-who">

		<div class="content">

			<div class="list">

				<div>
					<div>
						<span class="material-icons">place</span>
						<span>Shanghai</span>
					</div>

					<div>
						<span class="material-icons">cake</span>
						<span>2003/12/24</span>
					</div>

					<div>
						<span class="material-icons">transgender</span>
						<span>she / her</span>
					</div>
				</div>

				<div>

					<div>
						<span class="material-icons">settings_suggest</span>
						<span>技术宅</span>
					</div>

					<div>
						<span class="material-icons">design_services</span>
						<span>设计师</span>
					</div>

					<div>
						<span class="material-icons">local_florist</span>
						<span>喜欢可爱的东西</span>
					</div>

					<div>
						<span class="material-icons">cancel</span>
						<span>讨厌可怕的东西</span>
					</div>

					<div>
						<span class="material-icons">games</span>
						<span>Minecraft 玩家</span>
					</div>
				</div>

			</div>

			<div class="side-img-wrapper">
				<h2>Who is<br><b>Aira?</b></h2>
				<NuxtImg src="https://m1.miaomc.cn/uploads/20230804_64cbee56379a2.webp" class="side-img" />
			</div>

		</div>
	</div>
</template>

<style scoped lang="scss">
	.home-who {
		// @include content-padding;
		display: flex;
		gap: 3rem;
	}

	.content {
		display: flex;
		gap: 10vw;
		align-items: center;
		justify-content: space-between;
		height: 100%;
		padding-left: 10vw;
		background-color: rgb(var(--accent-500-rgb) / 80%);
	}

	.list {
		@include text-shadow;
		display: flex;
		flex-direction: column;
		flex-shrink: 0;
		gap: 4rem;
		color: white;

		>div {
			display: flex;
			flex-direction: column;
			gap: 2rem;
		}

		>div>div {
			display: flex;
			gap: 1rem;
			align-items: center;

			span:nth-child(1) {
				font-size: 2.5rem;
			}

			span:nth-child(2) {
				font-size: 1.5rem;
			}
		}
	}

	.side-img-wrapper {
		position: relative;
		flex-grow: 1;
		height: 100%;

		h2 {
			position: absolute;
			max-width: inherit;
			color: white;
			font-weight: 400;
			font-size: 10vw;
			text-shadow: 0 0.05em 0.1em rgb(var(--accent-500-rgb) / 15%);

			@include phone {
				display: none;
			}
		}
	}

	.side-img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 80% 50%;

		@include tablet {
			object-position: 62% 50%;
		}
	}
</style>
