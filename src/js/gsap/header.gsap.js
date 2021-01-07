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


const titleLines = document.querySelectorAll(".title-anim");
const block = document.querySelectorAll('.block-anim');





export const headerAnimation = {
    _enter: () => {
        console.log("test");
        headerAnimation.header()
    },

    _beforeEnter: () => {
        headerAnimation.reinitialization()
    },

    header : ( ) => {
        /*let tl = gsap.timeline()

        tl.from(".title-anim" ,  {
                y:"160%",
                stagger: 0.2,
                duration: .5 ,
            })
            .from('.block-anim' ,  {
                opacity:0,

                stagger: 0.2,
                duration: .5 ,
            })

         */
        return  gsap.from('.title-anim' ,  {
            duration: 1,
            opacity:0

        })
    },
    reinitialization: () => {

    },

}
















