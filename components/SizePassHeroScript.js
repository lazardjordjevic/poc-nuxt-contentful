'use strict';

export const SizePassHeroScript = async () => {
    const module = await import('lottie-web');
    const lottie = module.default;
    const module1 = await import('gsap');
    const gsap = module1.default;
    const module3 = await import('gsap/ScrollTrigger');
    const ScrollTrigger = module3.default;
    const sizePassPlayerRef = document.querySelector('.size-pass__player');

    gsap.registerPlugin(ScrollTrigger);

    if (typeof lottie !== 'undefined') {
        const devicePath = window.matchMedia('(min-width: 992px)').matches ? 'desktop' : 'mobile'; // Refactor this so it works for mobile and desktop
        const lottieProgress = lottie.loadAnimation({
            container: document.querySelector('.size-pass__player') || document.createElement('div'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: `https://cdn.suitsupply.com/apps/content/animations/sp-animation-${devicePath}.json`
        });

        window.addEventListener('scroll', () => {
            if (!sizePassPlayerRef?.clientHeight) {
                return;
            }

            const totalHeight = Number(sizePassPlayerRef?.clientHeight);
            const scrollFromTop =
                window.pageYOffset -
                Number(document.querySelector('#header')?.getBoundingClientRect().height);
            const scrollPercentage = (scrollFromTop * 100) / (totalHeight * 0.8);

            lottieProgress.goToAndStop((scrollPercentage * lottieProgress.totalFrames) / 100, true);
        });
    }

    gsap.to('#size-pass__header', {
        translateY: 60,
        ease: 'none',
        scrollTrigger: {
            trigger: '#size-pass__header',
            pin: false,
            start: '-=100px top',
            scrub: true,
            end: 'bottom top +=340px'
        }
    });
};
