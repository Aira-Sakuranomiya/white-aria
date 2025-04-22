<script setup lang="ts">
const loading = ref(false);
const opacity = ref(0);

function playAnimation() {
	loading.value = true;
	setTimeout(() => {
		loading.value = false;
	}, 800);
}
</script>

<template>
	<div class="dx-transition-demo">
		<!-- <input v-model="loading" class="toggle" type="checkbox" /> -->
		<a href="#" @click="playAnimation">播放动画</a>
		<!-- <input v-model="opacity" class="range" type="range" min="0" max="1" step="0.01" /> -->
		<ClientOnly>
			<DXTransition v-show="opacity != 1" :loading :duration="600" />
		</ClientOnly>
		<!-- <NuxtImg v-show="opacity != 0" src="images/dx-transition-original.png" alt="DX Transition" class="original-image"
			:style="{ opacity: opacity }" /> -->
	</div>
</template>

<style scoped lang="scss">
.dx-transition-demo {
	padding: 0;
	margin: 0;
	transition: none !important;
	animation: none !important;
}

.dx-transition {
	--dx-color-center: #c3ffff;
	--dx-color-items-1: #fea3c1;
	--dx-color-items-2: #fed821;
	--dx-color-items-3: white;
	--dx-color-items-4: #d2f1ff;
	--dx-color-bg: #4ec0f8;
	--dx-color-side-1: #a7eaff;
	--dx-color-side-2: #ffffff;
}

.toggle {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 2rem;
	height: 2rem;
	z-index: 600;
}

.range {
	position: fixed;
	bottom: 2rem;
	left: 0;
	width: 10rem;
	height: 2rem;
	z-index: 600;
}

.original-image {
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	object-fit: cover;
	z-index: 501;
}
</style>
