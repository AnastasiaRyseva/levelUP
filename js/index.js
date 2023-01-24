const video = document.getElementById("bgVideo");
const btnPause = document.getElementById("myBtn");
    
function pauseVideo() {
    if(video.paused) {
        video.play();
        btnPause.innerHTML = "Pause";
    } else {
        video.pause();
        btnPause.innerHTML = "Play";
    }
}

new Swiper('.review-swiper', {
    navigation: {
		nextEl: '.next2',
		prevEl: '.prev2'
	},
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 40
        },
        1010: {
          slidesPerView: 2,
          spaceBetween: 20
        }
    }
});