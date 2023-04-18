// AOS.init(
//     {disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//     startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//     initClassName: 'aos-init', // class applied after initialization
//     animatedClassName: 'aos-animate', // class applied on animation
//     useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//     disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//     debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//     throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

//     // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//     offset: 120, // offset (in px) from the original trigger point
//     delay: 0, // values from 0 to 3000, with step 50ms
//     duration: 400, // values from 0 to 3000, with step 50ms
//     easing: 'ease', // default easing for AOS animations
//     once: false, // whether animation should happen only once - while scrolling down
//     mirror: false, // whether elements should animate out while scrolling past them
//     anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
//   }
// );

const slider = document.querySelector(".photographers__slider");
const currentNumber = document.querySelector('.photographer-info__number-current');
const totalNumber = document.querySelector('.photographer-info__number-total');
const mySwiper = new Swiper(slider, {
  slidesPerView: "auto",
  centeredSlides: true,
  initialSlide: 1,
  spaceBetween: 50,
  slideClass: "photographer",
  breakpoints: {
    540: {
      spaceBetween: 60,
    },

    768: {
      spaceBetween: 150,
    },
    1024: {
      spaceBetween: 200,
    },

  },
});

const onSlideChange = () => {
const slidesLength = mySwiper.slides.length;
const activeSlideIndex =  mySwiper.activeIndex;
currentNumber.innerHTML = activeSlideIndex + 1;
totalNumber.innerHTML = slidesLength;
}
mySwiper.on('slideChange', onSlideChange);





