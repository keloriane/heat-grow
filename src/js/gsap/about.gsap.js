import { gsap } from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';



gsap.registerPlugin(ScrollTrigger);

const swiper = new Swiper('.swiper-container', {
    pagination: {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 30,
        type: "progressbar"
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});





export const animationAbout = {
    _enter: () => {
        animationAbout.mainArticle()
        animationAbout.textScroll();
    },
    _beforeEnter: () => {
        animationAbout.reinitialization()
    },
    mainArticle: () => {
        let tl = gsap.timeline();
        tl.to('.nav-main', {opacity: 1})
            .to('.about-wrapper', {opacity: 1})
            .from('.about-title', fadeInUp)
            .from('.about-img-wrapper', fadeIn)
            .from('.about-img', deScale)
            .from('.about-main-text p', fadeInUpStagger, "-=3")
            .to('.about-wrapper', {backgroundColor: 'black', duration: 0.3})
            .to('.about-title', {color: 'white', duration: 0.3})
            .to('.about-main-text p', {color: 'white', duration: 0.3})
    },
    reinitialization: () => {
        gsap.set('.about-wrapper', {opacity: 0})
        gsap.set('.nav-main', {opacity: 0})
    },
    textScroll: () => {
        return gsap.to('.text-scroll', {
            scrollTrigger: {
                markers: true,
                trigger: ".text-scroll",
                start: '-=300',
                end: '200',
                scrub: 1.5
            },
            xPercent: 100,
        })
    }
}
















