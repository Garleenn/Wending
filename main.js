let headerContainer = document.querySelector('.header-container');
let burgerMenu = document.querySelector('.burger-menu');
let menuBtn = document.getElementById('menu-btn');
let closeBtn = document.querySelector('.close-btn');
let audio = document.getElementById('background-music');
let playBtn = document.getElementById('play-btn');
let bgPhoto = document.querySelector('.bg-photo');
let touch = document.querySelector('.touch');
let body = document.getElementById('body');

menuBtn.addEventListener('click', function() {
	burgerMenu.classList.toggle('hidden');
});

closeBtn.addEventListener('click', function() {
	burgerMenu.classList.toggle('hidden');
});

function playSound() {
	if (audio.paused) {
		playBtn.setAttribute('src', './assets/sound.png');
		touch.classList.add('opacity-0');
		body.classList.remove('overflow-y-hidden');
		audio.play()
	} else {
		playBtn.setAttribute('src', './assets/off-sound.png');
		audio.pause();
	}
}

playBtn.addEventListener('click', playSound);
bgPhoto.addEventListener('click', function() {
	playBtn.setAttribute('src', './assets/sound.png');
	touch.classList.add('opacity-0');
	body.classList.remove('overflow-y-hidden');
	audio.play()
});

window.addEventListener('scroll', function() {
	if(window.scrollY >= 300 || window.scrollY >= 7500) {
		headerContainer.classList.remove('hidden');
	} if(window.scrollY >= 6600 || window.scrollY <= 300) {
	headerContainer.classList.add('hidden');
}
});

window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
})


document.addEventListener('DOMContentLoaded', () => {

  const deadline = new Date('2025-05-03T14:30:00');
  
  const elDays = document.querySelector('.timer_days');
  const elHours = document.querySelector('.timer_hours');
  const elMinutes = document.querySelector('.timer_minutes');
  const elSeconds = document.querySelector('.timer_seconds');

  const updateTimer = () => {
    const now = new Date();
    const diff = Math.max(0, deadline - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    elDays.textContent = String(days).padStart(2, '0');
    elHours.textContent = String(hours).padStart(2, '0');
    elMinutes.textContent = String(minutes).padStart(2, '0');
    elSeconds.textContent = String(seconds).padStart(2, '0');

    if (diff === 0) {
      clearInterval(timerId);
    }
  };
  updateTimer();
  const timerId = setInterval(updateTimer, 1000);
});