<script setup lang="ts">
useHead({ title: "Profile" });
definePageMeta({
	navigationBgStyle: "progressive",
});
</script>

<template>
	<div class="page-container">

		<div class="content">

			<div class="list">

				<h2>+ Profile +</h2>

				<hr />

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

				<hr />

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

				<div>
					<span class="material-icons">music_note</span>
					<span>Otomad</span>
				</div>

				<div>
					<span class="material-icons">view_in_ar</span>
					<span>Minecraft</span>
				</div>

				<div>
					<span class="material-icons">local_laundry_service</span>
					<span>maimai</span>
				</div>

			</div>

			<div class="side-img-wrapper">
				<NuxtImg src="https://m1.miaomc.cn/uploads/20230804_64cbee56379a2.webp" class="side-img" alt="A photo of me" />
			</div>

		</div>
	</div>
</template>

<style scoped lang="scss">
.page-container {
	// @include content-padding;
	display: flex;
	gap: 3rem;
	height: 100vh;
	overflow: hidden;
}

.content {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 100%;

	@include phone {
		gap: 0;
	}
}

@keyframes list-intro {
	from {
		transform: translateX(-100%);
	}
}

@keyframes list-item-intro {
	from {
		transform: translateX(-150%);
	}
}

.list {
	// @include text-shadow;
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
	gap: 1.5rem;
	padding: 0 8vw;
	color: var(--neutral);
	animation: 1s cubic-bezier(0.1, 0.9, 0.2, 1) backwards list-intro;

	hr {
		margin: 0;
		visibility: hidden;
	}

	> h2 {
		color: var(--accent-500);
		font-size: 2rem;
		text-align: center;

		@include dark {
			@include small-text-shadow;
		}
	}

	> div {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		animation: 0.6s cubic-bezier(0.1, 0.9, 0.2, 1) backwards list-item-intro;
	}

	@include phone {
		width: 50%;
		padding: 0 8vw;
	}
}

@for $i from 1 through 9 {
	.list > div:nth-of-type(#{$i}) {
		animation-delay: 50ms * ($i - 1);
		animation-duration: 800ms + 20ms * ($i - 1);
	}
}

@keyframes side-img-wrapper-intro {
	from {
		transform: translateX(100%);
		// filter: blur(100rem);
	}
}

@keyframes opacity-intro {
	from {
		opacity: 0;
	}
}

.side-img-wrapper {
	position: relative;
	min-width: 100%;
	height: 100%;
	animation: 1s cubic-bezier(0.1, 0.9, 0.2, 1) backwards side-img-wrapper-intro;

	@include phone {
		flex-shrink: 0;
		width: 50%;
	}
}

.side-img {
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: 80% 50%;

	@include phone {
		object-position: 62% 50%;
	}
}
</style>
