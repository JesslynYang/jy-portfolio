// Auto Type Text
const typingText = document.querySelector('.text-typing');

let index = 0;
let text = 'Hello! I am Jesslyn and I am a freelance web developer!';

function typeText() {
	typingText.innerHTML = text.slice(0, index);

	index++;

	if( index > text.length ) {
		return;
	}
}

setInterval(typeText, 100);

// Custom Navbar
const navbarButton = document.querySelector('.navbar-toggler-icon');

// navbarButton.addEventListener('click', function() {
// 	gsap.to('.custom-nav', { duration: 2, stagger: 1, x: 100% });
// });

gsap.from('.hero-orange', { duration: 1.5, stagger: 1, x: '-100vh' });
gsap.from('.hero-purple', { duration: 1.5, stagger: 1, x: '100vh' });