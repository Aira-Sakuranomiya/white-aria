<script setup lang="ts">
	useHead({ title: "My Profile" });
</script>

<template>
	<div class="page-wrapper">

		<div class="content">

			<div class="list">

				<h4>+ Profile +</h4>

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
						<span>Tech</span>
					</div>

					<div>
						<span class="material-icons">design_services</span>
						<span>Design</span>
					</div>

					<div>
						<span class="material-icons">local_florist</span>
						<span>Cute</span>
					</div>

					<!-- <div>
						<span class="material-icons">cancel</span>
						<span>讨厌可怕的东西</span>
					</div> -->

					<div>
						<span class="material-icons">games</span>
						<span>Minecraft</span>
					</div>
				</div>

			</div>

			<div class="side-img-wrapper">
				<h2>Who is<br><b>Aira?</b></h2>
				<NuxtImg src="https://m1.miaomc.cn/uploads/20230804_64cbee56379a2.webp" class="side-img" alt="A photo of me" />
			</div>

		</div>
	</div>
</template>

<style scoped lang="scss">
	.page-wrapper {
		// @include content-padding;
		display: flex;
		gap: 3rem;
		height: 100vh;
		background-color: var(--accent-500);
	}

	.content {
		display: flex;
		gap: 10vw;
		align-items: center;
		justify-content: space-between;
		height: 100%;
		padding-left: 8vw;
	}

	.list {
		@include text-shadow;
		display: flex;
		flex-direction: column;
		flex-shrink: 0;
		gap: 4rem;
		color: white;

		>h4 {
			font-size: 1.5rem;
			text-align: center;
		}

		>div {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
		}

		>div>div {
			display: flex;
			gap: 0.5rem;
			align-items: center;
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
