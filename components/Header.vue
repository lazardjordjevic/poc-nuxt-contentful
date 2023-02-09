<template>
    <header class="header">
        <div class="header__wrap">
            Suitsupply
        </div>
    </header>
</template>

<style lang="scss">
@import "../assets/styles/mixins.scss";

.header {
    position: fixed;
    width: 100%;
    top: 0;
    background-color: var(--color-surface);
    z-index: 2;
    transition: 0.3s ease-in-out;

    &::before {
        content: '';
        position: absolute;
        bottom: 100%;
        left: 0;
        width: 100%;
        height: 200px;
        background-color: var(--color-surface);
        border-bottom: 1px solid var(--color-outline);
        display: block;
    }
}

.header__wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid var(--color-outline);
    background-color: #fff;

    @include media-breakpoint-up(xl) {
        height: 55px;
        padding: 0 22px;
        position: relative;
        background-color: #fff;
    }

    @include media-breakpoint-down(lg) {
        height: 40px;
        padding: 0 8px;
    }
}
</style>
