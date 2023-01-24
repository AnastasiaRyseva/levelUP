
//слайдер
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

//ТАЙМЕР
let sec = 1800;
let countDiv = document.getElementById("mv_timer");
let countDown = setInterval(function () {
    secpass();
  }, 1000);

function secpass() {
    let min = Math.floor(sec / 60),
        remSec = sec % 60;
    
    if(remSec < 10) {
        remSec = '0' + remSec;
    }
    if (min < 10) {
      min = '0' + min;
    }
    countDiv.innerHTML = min + ":" + remSec;
    if(sec > 0) {
        sec = sec - 1;
    } else {
        clearInterval(countDown);
        countDiv.innerHTML = 'countdown done';
    }
}

// скролл к форме обратного звонка

const forCall = document.querySelectorAll('.forCall');
const callForm = document.querySelector('.callback');

forCall.forEach(item => item.onclick = function() {
    callForm.scrollIntoView({block: 'center',  behavior: 'smooth'});
})