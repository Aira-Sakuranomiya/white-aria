<script setup lang="ts">
const props = defineProps<{
	loading: boolean;
	duration: number;
}>();
</script>

<template>
	<Transition>
		<div v-if="loading" class="dx-transition-bg">
			<div>
				<svg class="mosaik" viewBox="0 0 29 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<rect x="4" y="23" width="1" height="1" />
					<rect x="5" y="22" width="1" height="1" />
					<rect x="6" y="21" width="1" height="1" />
					<rect x="7" y="22" width="1" height="1" />
					<rect x="8" y="23" width="1" height="1" />
					<rect x="8" y="21" width="1" height="1" />
					<rect x="1" y="25" width="1" height="1" />
					<rect x="7" y="19" width="1" height="1" />
					<rect x="8" y="18" width="1" height="1" />
					<rect x="13" y="14" width="1" height="1" />
					<rect x="20" y="7" width="1" height="1" />
					<rect x="21" y="6" width="1" height="1" />
					<rect x="22" y="5" width="1" height="1" />
					<rect x="23" y="3" width="1" height="1" />
					<rect x="24" y="5" width="1" height="1" />
					<rect x="24" y="2" width="1" height="1" />
					<rect x="1" y="28" width="1" height="1" />
					<rect y="26" width="1" height="1" />
					<rect x="25" y="1" width="1" height="1" />
					<rect x="26" width="1" height="1" />
					<rect x="28" y="1" width="1" height="1" />
				</svg>
				<div class="rectangle"></div>
			</div>
		</div>
	</Transition>
</template>

<style scoped lang="scss">
$color: var(--dx-color-bg);
$duration: calc(var(--dx-transition-duration) - 100ms);

.dx-transition-bg {
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	opacity: 0;

	> * {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&.v-leave-to > * {
		$distance: 52;
		translate: min(-#{$distance}vw, -#{$distance}vh) min(-#{$distance}vw, -#{$distance}vh);
	}

	&.v-leave-active {
		opacity: 1;
	}

	&.v-leave-active,
	&.v-leave-active > * {
		transition: translate $duration cubic-bezier(1, -0.5, 1, 1);
	}
}

.rectangle {
	$size: 141.5;
	position: absolute;
	transform: rotate(-45deg);
	translate: -35.3% -35.3%;
	background-color: $color;
	width: max(#{$size}vw, #{$size}vh);
	height: max(#{$size}vw, #{$size}vh);
}

.mosaik {
	position: absolute;
	transform: translate(max(2.7vw, 2.7vh), max(2.7vw, 2.7vh));
	width: max(77vw, 77vh);
	color: $color;
}
</style>
