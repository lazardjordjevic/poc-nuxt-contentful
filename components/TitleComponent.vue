<script setup>
const props = defineProps({ titleData: Object });
const { title, text } = props.titleData.content[0].fields;
</script>

<template>
    <div class="fitroom__text">
        <h2 class="fitroom__title">{{ title }}</h2>
        <p class="fitroom__description">{{ text }}</p>
    </div>
</template>

<style lang="scss">
@import "../assets/styles/mixins.scss";

.fitroom__text {
    @include media-breakpoint-up(md) {
        flex: 1 1 100%;
        padding-top: 30px;
        padding-right: 40px;
    }

    @include media-breakpoint-down(sm) {
        text-align: center;
        margin-bottom: 50px;
    }
}

.fitroom__title {
    font-weight: 500;
    letter-spacing: -0.04em;
    max-width: 620px;

    @include media-breakpoint-up(xl) {
        font-size: 96px;
        line-height: 91px;
        margin-bottom: 50px;
    }

    @include media-breakpoint-only(lg) {
        font-size: 82px;
        line-height: 78px;
        margin-bottom: 40px;
    }

    @include media-breakpoint-only(md) {
        font-size: 62px;
        line-height: 58px;
        margin-bottom: 25px;
    }

    @include media-breakpoint-down(sm) {
        font-size: 50px;
        line-height: 50px;
        margin-bottom: 30px;
    }
}

.fitroom__description {
    @include media-breakpoint-up(xl) {
        font-size: 24px;
        line-height: 32px;
        letter-spacing: -0.3px;
        max-width: 450px;
    }

    @include media-breakpoint-only(lg) {
        font-size: 23px;
        line-height: 31px;
        letter-spacing: -0.2px;
        max-width: 420px;
    }

    @include media-breakpoint-only(md) {
        font-size: 20px;
        line-height: 28px;
        letter-spacing: -0.2px;
        max-width: 300px;
    }

    @include media-breakpoint-down(sm) {
        font-size: 18px;
        line-height: 24px;
    }
}
</style>
