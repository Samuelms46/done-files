<<<<<<< HEAD
const dynamicText = document.querySelector("h1 span");
const words = ["is key", "produces results", "is the way", "never lies"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting =false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if(!isDeleting && charIndex < currentWord.length){
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if(isDeleting && charIndex > 0){
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        dynamicText.classList.remove("stop-blinking");
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();
=======
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 40,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
        },
        800: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 3,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
>>>>>>> 5798211 (Image slider)
