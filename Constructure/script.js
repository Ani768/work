// script.js

// Get the menu icon and nav links
const menuIcon = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Toggle the active class on click
menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // Add or remove the 'active' class
});