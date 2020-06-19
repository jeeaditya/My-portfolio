const navMenu = document.querySelector('.nav-menu');
const navItems = document.querySelectorAll('.nav-item');
const hamburger = document.querySelector('.nav-toggle');

function toggle() {
  navMenu.classList.toggle('activate');
}

hamburger.addEventListener('click', toggle);

Array.from(navItems).forEach(function (item) {
  e.addEventListener('click', toggle);
});
