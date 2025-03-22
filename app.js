// Mobile Nav Menu //

const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const mobileNav = document.getElementById('mobileNav');

menuToggle.addEventListener('click', () => {
    mobileNav.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    mobileNav.classList.remove('active');
});


const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movieList = ['videos/hero-1.mp4', 'videos/hero-2.mp4', 'videos/hero-3.mp4', 'videos/hero-4.mp4']

let index = 0;
nextButton.addEventListener('click', function(){

    index += 1
    video.src = movieList[index];

    if (index === 3){
        index = -1;
    }

})


// const nextButton document.querySelector('.next-btn');
// const video = document.querySelector('.hero-video");
// const movieList = ['videos/hero-1.mp4', 'videos/hero-2.mp4', 'videos/hero-3.mp4', 'videos/hero-4.mp4',];

// let index = 0;
// nextButton.addEventListener('click', function(){
// video.src movieList[index];
// index += 1

// if (index=== 3)

// index=-1; I

// })