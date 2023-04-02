// Select the elements we need
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

// Add an event listener to the menu toggle button
menuToggle.addEventListener('click', function() {
  // Toggle the "open" class on the nav element
  nav.classList.toggle('open');
});
