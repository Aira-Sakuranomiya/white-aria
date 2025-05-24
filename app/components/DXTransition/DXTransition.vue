<script setup lang="ts">
const props = withDefaults(defineProps<{
	loading: boolean;
	duration?: number;
}>(), {
	duration: 600,
});
const durationFormatted = computed(() => `${props.duration}ms`);
const show = ref(false);
const leavable = ref(true);
const leaveRequested = ref(false);
watch(() => props.loading, (value) => {
	if (value) {
		show.value = true;
		leavable.value = false;
		leaveRequested.value = false;
		setTimeout(() => {
			leavable.value = true;
			if (leaveRequested.value) {
				show.value = false;
				leaveRequested.value = false;
			}
		}, props.duration + 100);
	} else if (leavable.value) {
		show.value = false;
	} else {
		leaveRequested.value = true;
	}
}, { immediate: true });

const { width, height } = useWindowSize();
const ratio = computed(() => width.value / height.value);
const itemsScale = computed(() => {
	if (ratio.value > 1) {
		return 1 / ratio.value;
	} else {
		return ratio.value;
	}
});
const itemsWidthMultiplier = computed(() => {
	if (ratio.value > 1) {
		return ratio.value;
	} else {
		return 1 / ratio.value;
	}
});
const itemsHeightMultiplier = computed(() => {
	if (ratio.value > 1) {
		return 1;
	} else {
		return 1;
	}
});
</script>

<template>
	<div class="dx-transition">
		<Transition>
			<div v-if="show" class="solid-bg"></div>
		</Transition>
		<DXTransitionBg class="bg-1" :loading="show" :duration />
		<DXTransitionBg class="bg-2" :loading="show" :duration />
		<Transition>
			<div v-if="show" class="items">
				<DXTransitionSlide class="slide-1" />
				<DXTransitionSlide class="slide-2" />
				<DXTransitionSlide class="slide-3" />
				<DXTransitionSlide class="slide-4" />
				<DXTransitionSlideLong class="slide-long-1" />
				<DXTransitionSlideLong class="slide-long-2" />
				<DXTransitionHold class="hold-1" />
				<DXTransitionHold class="hold-2" />
				<DXTransitionHold class="hold-3" />
				<DXTransitionHold class="hold-4" />
				<DXTransitionHold class="hold-5" />
			</div>
		</Transition>
		<DXTransitionSide class="side-1" :loading="show" :duration />
		<DXTransitionSide class="side-2" :loading="show" :duration />
		<Transition>
			<div v-if="show" class="center">
				<div class="wrapper">
					<svg width="64" height="64" viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM51.5 49C51.7761 49 52 48.7761 52 48.5C52 48.2239 51.7761 48 51.5 48C51.2239 48 51 48.2239 51 48.5C51 48.7761 51.2239 49 51.5 49ZM48.5 52C48.7761 52 49 51.7761 49 51.5C49 51.2239 48.7761 51 48.5 51C48.2239 51 48 51.2239 48 51.5C48 51.7761 48.2239 52 48.5 52ZM53.5 32C53.5 43.8741 43.8741 53.5 32 53.5C20.1259 53.5 10.5 43.8741 10.5 32C10.5 26.9623 12.2326 22.3293 15.1345 18.6643C14.7399 18.2223 14.5 17.6392 14.5 17C14.5 15.6193 15.6193 14.5 17 14.5C17.6392 14.5 18.2223 14.7399 18.6643 15.1345C22.3293 12.2326 26.9623 10.5 32 10.5C37.0377 10.5 41.6707 12.2326 45.3357 15.1345C45.7777 14.7399 46.3608 14.5 47 14.5C48.3807 14.5 49.5 15.6193 49.5 17C49.5 17.6392 49.2601 18.2223 48.8655 18.6643C51.7674 22.3293 53.5 26.9623 53.5 32ZM38.7703 2.76719L37.5145 9.15104C39.9282 9.7317 42.1974 10.6849 44.257 11.9461L47.8827 6.54447C45.1152 4.81414 42.0453 3.52257 38.7703 2.76719ZM26.4855 9.15104C24.0718 9.73169 21.8026 10.6848 19.7431 11.946L16.1158 6.54208C18.9657 4.76044 22.0497 3.50294 25.2302 2.76958L26.4855 9.15104ZM52.0548 19.7444C53.3158 21.804 54.2688 24.0732 54.8493 26.487L61.2312 25.2315C60.4979 22.0511 59.2404 18.967 57.4587 16.1171L52.0548 19.7444ZM54.8491 37.5157C54.2685 39.9295 53.3153 42.1983 52.0538 44.2577L57.4563 47.884C59.1867 45.1166 60.4782 42.0466 61.2336 38.7716L54.8491 37.5157ZM37.5136 54.8496C39.9275 54.2692 42.1962 53.3163 44.2557 52.0551L47.8837 57.4601C45.0338 59.2417 41.9497 60.4992 38.7693 61.2326L37.5136 54.8496ZM26.4854 54.8493C24.0716 54.2689 21.8029 53.3159 19.7435 52.0546L16.1168 57.4577C18.8842 59.188 21.9542 60.4796 25.2292 61.235L26.4854 54.8493ZM9.15076 37.5151C9.73128 39.9289 10.6843 42.1976 11.9457 44.257L6.54074 47.885C4.75911 45.0351 3.5016 41.9511 2.76824 38.7706L9.15076 37.5151ZM2.76585 25.2305L9.15079 26.4866C9.73131 24.0729 10.6843 21.8038 11.9453 19.7442L6.54313 16.1181C4.8128 18.8856 3.52124 21.9555 2.76585 25.2305Z" />
						<path
							d="M45 38.5C45 39.8807 43.8807 41 42.5 41C41.1193 41 40 39.8807 40 38.5C40 37.1193 41.1193 36 42.5 36C43.8807 36 45 37.1193 45 38.5Z" />
						<path
							d="M45 38.5C45 39.8807 43.8807 41 42.5 41C41.1193 41 40 39.8807 40 38.5C40 37.1193 41.1193 36 42.5 36C43.8807 36 45 37.1193 45 38.5Z" />
						<path
							d="M24 38.5C24 39.8807 22.8807 41 21.5 41C20.1193 41 19 39.8807 19 38.5C19 37.1193 20.1193 36 21.5 36C22.8807 36 24 37.1193 24 38.5Z" />
						<path
							d="M24 38.5C24 39.8807 22.8807 41 21.5 41C20.1193 41 19 39.8807 19 38.5C19 37.1193 20.1193 36 21.5 36C22.8807 36 24 37.1193 24 38.5Z" />
						<path
							d="M32 38.25C30.168 38.25 30.0078 38.5953 30.0078 38.9598C30.0078 39.2486 30.4108 40.0874 31.25 40.4233V42.1895L29.2595 44.1816C28.9667 44.4746 28.9669 44.9494 29.2599 45.2422C29.5529 45.535 30.0278 45.5348 30.3205 45.2418L32.0002 43.5609L33.6814 45.242C33.9743 45.5349 34.4491 45.5349 34.742 45.242C35.0349 44.9491 35.0349 44.4743 34.742 44.1814L32.75 42.1893V40.423C33.5965 40.085 34.0137 39.2392 34.0137 38.9598C34.0137 38.6075 33.832 38.25 32 38.25Z" />
					</svg>
				</div>
			</div>
		</Transition>
	</div>
</template>

<style scoped lang="scss">
$color-bg: var(--dx-color-bg);
$color-center: var(--dx-color-center);
$color-items-1: var(--dx-color-items-1);
$color-items-2: var(--dx-color-items-2);
$color-items-3: var(--dx-color-items-3);
$color-items-4: var(--dx-color-items-4);
$duration: v-bind(durationFormatted);

.dx-transition {
	--dx-transition-duration: #{$duration};
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	overflow: hidden;
	z-index: 500;
	// border-radius: 100%;
	pointer-events: none;
	inset: 0;
	margin: 0;
	padding: 0;

	> * {
		pointer-events: auto;
	}
}

.solid-bg {
	position: absolute;
	width: 100vw;
	height: 100vh;
	background-color: $color-bg;

	&.v-enter-from {
		opacity: 0;
	}

	&.v-enter-active {
		transition: opacity $duration;
	}
}

.center {
	$size: 40;
	$length: min(#{$size}vw, #{$size}vh);
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	width: $length;
	height: $length;

	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;

		> * {
			color: $color-center;
			width: 100%;
			height: 100%;
		}
	}

	&.v-enter-from {
		rotate: -180deg;

		.wrapper {
			transform: scale(13);
		}
	}

	&.v-leave-to {
		opacity: 0;

		.wrapper {
			transform: scale(13);
		}
	}

	&.v-enter-active,
	&.v-leave-active {
		transition: all $duration cubic-bezier(0.3, 0, 0.7, 1);
	}

	&.v-enter-active {
		.wrapper {
			transition: all $duration cubic-bezier(0, 0, 0, 1.15);
		}
	}

	&.v-leave-active {
		.wrapper {
			transition: all $duration cubic-bezier(1, -0.2, 0.2, 1);
		}
	}
}

.bg-2 {
	transform: rotate(180deg);
}

.side-1 {
	top: 0;
	left: 0;
}

.side-2 {
	bottom: 0;
	right: 0;
	transform: rotate(180deg);
}

.items {
	$base: 61;
	width: calc(max(#{$base}vw, #{$base}vh) * #{"v-bind(itemsWidthMultiplier)"});
	height: calc(max(100vw, 100vh) * #{"v-bind(itemsHeightMultiplier)"});
	scale: #{"v-bind(itemsScale)"};
	display: flex;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	position: relative;
	transform: rotate(45deg);

	> *,
	> * > * {
		position: absolute;
	}

	&.v-enter-active,
	&.v-enter-active > * {
		transition: $duration cubic-bezier(0, 0, 0.1, 1);
		transition-property: transform, opacity;
	}

	&.v-leave-active,
	&.v-leave-active > * {
		transition: $duration cubic-bezier(0.9, 0, 1, 1);
		transition-property: transform, opacity;
	}
}

@mixin enter-from($y, $opacity: 1) {
	.items.v-enter-from & {
		transform: translateY(max(#{$y}vw, #{$y}vh));

		@if $opacity !=1 {
			opacity: $opacity;
		}
	}
}

@mixin leave-to($y, $opacity: 1) {
	.items.v-leave-to & {
		transform: translateY(min(#{$y}vw, #{$y}vh));

		@if $opacity !=1 {
			opacity: $opacity;
		}
	}
}

.slide-1 {
	$size: 14;
	width: max(#{$size}vw, #{$size}vh);
	color: $color-items-1;
	// right: min(-1vw, -1vh);
	right: -1%;
	bottom: min(-3.5vw, -3.5vh);
	@include enter-from(44);
	@include leave-to(-102);
}

.slide-2 {
	$size: 12;
	width: max(12vw, 12vh);
	color: $color-items-1;
	// left: max(11vw, 11vh);
	left: 18%;
	top: min(-13.5vw, -13.5vh);
	@include enter-from(122);
	@include leave-to(-38);
}

.slide-3 {
	$size: 6.5;
	width: max(6.5vw, 6.5vh);
	color: $color-items-2;
	// right: max(21.5vw, 21.5vh);
	right: 35%;
	top: max(2vw, 2vh);
	@include enter-from(38, 0);
	@include leave-to(-44);
}

.slide-4 {
	$size: 6.5;
	width: max(6.5vw, 6.5vh);
	color: $color-items-3;
	// left: max(4.5vw, 4.5vh);
	left: 7%;
	top: max(21vw, 21vh);
	@include enter-from(38, 0);
	@include leave-to(-44);
}

.slide-long-1 {
	$size: 12;
	width: max(12vw, 12vh);
	color: $color-items-2;
	left: 0;
	bottom: min(-18vw, -18vh);
	@include enter-from(45);
	@include leave-to(-118);
}

.slide-long-2 {
	$size: 6;
	width: max(6vw, 6vh);
	color: $color-items-3;
	// right: max(18vw, 18vh);
	right: 29%;
	bottom: min(-5.5vw, -5.5vh);
	@include enter-from(38);
	@include leave-to(-44, 0)
}

.dx-transition-hold,
.dx-transition-hold-long {
	color: $color-items-4;
}

.hold-1 {
	width: max(11vw, 11vh);
	// left: max(12vw, 12vh);
	left: 20%;
	bottom: min(-83vw, -83vh);
	@include enter-from(-28, 0);
	@include leave-to(58, 0);
}

.hold-2 {
	width: max(6.5vw, 6.5vh);
	// left: max(22vw, 22vh);
	left: 36%;
	bottom: min(-53.3vw, -53.3vh);
	@include enter-from(-14, 0);
	@include leave-to(30, 0);
}

.hold-3 {
	width: max(11vw, 7vh);
	// right: max(7vw, 7vh);
	right: 5%;
	bottom: min(-95vw, -95vh);
	@include enter-from(-20, 0);
	@include leave-to(40, 0);
}

.hold-4 {
	width: max(5.5vw, 5.5vh);
	right: 8%;
	top: min(-9vw, -9vh);
	@include enter-from(-14, 0);
	@include leave-to(16, 0);
}

.hold-5 {
	width: max(11vw, 11vh);
	right: 19%;
	top: min(-79vw, -79vh);
	@include enter-from(-28, 0);
	@include leave-to(38, 0);
}
</style>
