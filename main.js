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
	if(window.scrollY >= 300) {
		headerContainer.classList.remove('hidden');
	} else {
		headerContainer.classList.add('hidden');
	}
});

window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
})