// Add Smooth Scroll to all links //
var scroll = new SmoothScroll('a[href*="#"]');

// Use JS for dropdown menu functionality

// DOM Selectors
const menuBtn = document.querySelector('.menu-btn');
const menuLine1 = document.querySelector('.line1');
const menuLine2 = document.querySelector('.line2');
const menuLine3 = document.querySelector('.line3');
const menu = document.querySelector('.dropdown-menu');
const menuNav = document.querySelector('.dropdown-menu-nav');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

// Add EventListener on menu button in the event of a mouse click
menuBtn.addEventListener('click', toggleMenu);

// Function
function toggleMenu() {
  if (!showMenu) {
    // if showMenu == false;
    menuBtn.classList.add('close');
    menuLine1.classList.add('close');
    menuLine2.classList.add('close');
    menuLine3.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    // Loop through each nav item
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menuLine1.classList.remove('close');
    menuLine2.classList.remove('close');
    menuLine3.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    // Loop through each nav item
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}
