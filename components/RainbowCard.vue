<template>
    <div class="sp-card">
        <div class="sp-card__inner">
            <div class="sp-card__avatar">
                <img class="sp-card__avatar-image"
                    src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="Rainbow card image" />
            </div>
            <h3 class="sp-card__title">Title</h3>
            <div class="sp-card__measurements">
                <div class="sp-card__line">
                    <span class="sp-card__description">Measurement</span>
                    <span class="sp-card__size">60cm</span>
                </div>
            </div>
            <div class="sp-card__measurements">
                <div class="sp-card__line">
                    <span class="sp-card__description">Measurement</span>
                    <span class="sp-card__size">60cm</span>
                </div>
            </div>
            <div class="sp-card__measurements">
                <div class="sp-card__line">
                    <span class="sp-card__description">Measurement</span>
                    <span class="sp-card__size">60cm</span>
                </div>
            </div>
            <div class="sp-card__measurements">
                <div class="sp-card__line">
                    <span class="sp-card__description">Measurement</span>
                    <span class="sp-card__size">60cm</span>
                </div>
            </div>
            <div class="sp-card__shadow-overlay" />
        </div>
    </div>
</template>

<style lang="scss">
@import "../assets/styles/mixins.scss";

.sp-card {
    width: 100%;
    position: relative;
    padding: 3px;
    text-align: center;
    background: conic-gradient(from 220deg at 52.3% 54.16%,
            #dc9f1c 0deg,
            #e42922 108.12deg,
            #2085ce 201.88deg,
            #58b64a 275.93deg,
            #dc9f1c 359.51deg,
            #dc9f1c 360deg);
    box-shadow: 3px 30px 58px rgba(#000, 0.08), 1.5px 15px 25px rgba(#000, 0.054),
        0.6px 6px 9.5px rgba(#000, 0.04), 0.2px 1.3px 3.3px rgba(#000, 0.026);

    @include media-breakpoint-up(xl) {
        border-radius: 22px;
    }

    @include media-breakpoint-only(lg) {
        border-radius: 16px;
    }

    @include media-breakpoint-down(md) {
        border-radius: 15px;
        padding: 2px;
    }
}

.sp-card__inner {
    position: relative;
    background-color: #fff;
    overflow: hidden;

    @include media-breakpoint-up(xl) {
        padding: 48px 25px 2px;
        border-radius: 19px;
    }

    @include media-breakpoint-only(lg) {
        padding: 36px 20px 2px;
        border-radius: 13px;
    }

    @include media-breakpoint-only(md) {
        padding: 26px 14px 2px;
        border-radius: 13px;
    }

    @include media-breakpoint-down(sm) {
        padding: 38px 20px 0;
        border-radius: 13px;
    }
}

.sp-card__avatar {
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    display: inline-block;

    @include media-breakpoint-up(xl) {
        width: 78px;
        height: 78px;
        margin-bottom: 30px;
    }

    @include media-breakpoint-only(lg) {
        width: 62px;
        height: 62px;
        margin-bottom: 20px;
    }

    @include media-breakpoint-only(md) {
        width: 42px;
        height: 42px;
        margin-bottom: 14px;
    }

    @include media-breakpoint-down(sm) {
        width: 56px;
        height: 56px;
        margin-bottom: 20px;
    }
}

.sp-card__avatar-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
}

.sp-card__title {
    letter-spacing: -0.02em;

    @include media-breakpoint-up(xl) {
        font-size: 38px;
        line-height: 37px;
        margin-bottom: 50px;
    }

    @include media-breakpoint-only(lg) {
        font-size: 29px;
        line-height: 28px;
        margin-bottom: 40px;
    }

    @include media-breakpoint-only(md) {
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 25px;
    }

    @include media-breakpoint-down(sm) {
        font-size: 28px;
        line-height: 26px;
        margin-bottom: 30px;
    }
}

.sp-card__line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--color-background);
    border-radius: 4px;

    @include media-breakpoint-up(xl) {
        padding: 24px 28px;
        margin-bottom: 7px;
    }

    @include media-breakpoint-down(lg) {
        margin-bottom: 5px;
    }

    @include media-breakpoint-only(lg) {
        padding: 18px 22px;
    }

    @include media-breakpoint-only(md) {
        padding: 14px 15px;
    }

    @include media-breakpoint-down(sm) {
        padding: 20px;
    }
}

.sp-card__description {
    font-weight: 300;
    color: var(--color-secondary);

    @include media-breakpoint-up(xl) {
        font-size: 16px;
        line-height: 26px;
    }

    @include media-breakpoint-only(lg) {
        font-size: 12px;
        line-height: 20px;
    }

    @include media-breakpoint-only(md) {
        font-size: 9px;
        line-height: 14px;
    }

    @include media-breakpoint-down(sm) {
        font-size: 11px;
        line-height: 18px;
    }
}

.sp-card__size {
    font-weight: 500;

    @include media-breakpoint-up(xl) {
        font-size: 36px;
        line-height: 41px;
    }

    @include media-breakpoint-only(lg) {
        font-size: 27px;
        line-height: 32px;
    }

    @include media-breakpoint-only(md) {
        font-size: 19px;
        line-height: 19px;
    }

    @include media-breakpoint-down(sm) {
        font-size: 25px;
        line-height: 25px;
    }
}

.sp-card__size-unit {
    font-weight: 300;

    @include media-breakpoint-up(xl) {
        font-size: 30px;
        line-height: 36px;
    }

    @include media-breakpoint-only(lg) {
        font-size: 24px;
        line-height: 28px;
    }

    @include media-breakpoint-only(md) {
        font-size: 16px;
        line-height: 16px;
    }

    @include media-breakpoint-down(sm) {
        font-size: 22px;
        line-height: 22px;
    }
}

.sp-card__shadow-overlay {
    background: linear-gradient(180deg, rgba(#fff, 0) 0%, #fff 94.27%);
    width: 100%;
    height: 132px;
    position: absolute;
    bottom: -3px;
    left: 0;
    opacity: 0.9;
}
</style>
