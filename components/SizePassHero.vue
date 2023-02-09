<script setup>
const props = defineProps({ sizePassHeroData: Object });
const { internalTitle, altText } = props.sizePassHeroData.content[0].fields;
const src = 'https://cdn.suitsupply.com/image/upload/fl_progressive,f_auto,q_auto,w_564/suitsupply/assets/fw21/size-passport/size-passport-model.png';
</script>

<template>
    <div class="size-pass">
        <div class="size-pass__header" id="size-pass__header">
            <div class="size-pass__header-icon">
                <img class="size-pass__header-image"
                    src="https://cdn.suitsupply.com/image/upload/svg/icon-size-passport.svg" alt="" />
            </div>
            <h1 class="size-pass__header-title">{{ internalTitle }}</h1>
        </div>
        <div class="size-pass__content">
            <div class="size-pass__content-wrap">
                <img class="size-pass__model-image" :src="src" :alt="altText" />
                <div class="size-pass__animation">
                    <div class="size-pass__player" id="size-pass__player" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "../assets/styles/mixins.scss";

.size-pass {
		background-color: #efefef;
		width: 100%;
		text-align: center;
		padding: 100px 20px 0;
		overflow: hidden;

		@include media-breakpoint-only(lg) {
			padding-top: 80px;
		}

		@include media-breakpoint-down(md) {
			padding-top: 65px;
		}
	}

	.size-pass__header-icon {
		@include media-breakpoint-up(xl) {
			margin-bottom: 65px;
		}

		@include media-breakpoint-between(md, lg) {
			margin-bottom: 45px;
		}

		@include media-breakpoint-down(sm) {
			margin-bottom: 42px;
		}
	}

	.size-pass__header-image {
		@include media-breakpoint-up(xl) {
			max-width: 102px;
		}

		@include media-breakpoint-only(lg) {
			max-width: 85px;
		}

		@include media-breakpoint-only(md) {
			max-width: 74px;
		}

		@include media-breakpoint-down(sm) {
			max-width: 68px;
		}
	}

	.size-pass__header-title {
		letter-spacing: -0.04em;
		margin: 0;
		font-weight: 500;

		@include media-breakpoint-up(xl) {
			font-size: 144px;
			line-height: 100px;
		}

		@include media-breakpoint-only(lg) {
			font-size: 124px;
			line-height: 90px;
		}

		@include media-breakpoint-only(md) {
			font-size: 104px;
			line-height: 74px;
		}

		@include media-breakpoint-down(sm) {
			font-size: 77px;
			line-height: 58px;
		}
	}

	.size-pass__content {
		width: 100%;
		position: relative;
		max-width: 1100px;
		height: 1500px;

		@include media-breakpoint-up(xl) {
			margin: -55px auto 0;
		}

		@include media-breakpoint-down(lg) {
			left: 50%;
			transform: translateX(-50%);
		}

		@include media-breakpoint-only(lg) {
			width: 1074px;
			margin-top: -50px;
		}

		@include media-breakpoint-only(md) {
			width: 790px;
			margin-top: -50px;
		}

		@include media-breakpoint-down(sm) {
			width: 564px;
			margin-top: -35px;
		}
	}

	.size-pass__model {
		width: 100%;
		padding-bottom: 139.8545%;
	}

	.size-pass__model-image {
		width: 100%;
		height: auto;
	}

	.size-pass__animation,
	.size-pass__player {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.size-pass__content-wrap {
		margin: 0 auto;
	}
</style>
