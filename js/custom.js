// Make Navbar Sticky on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 50) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });
  
  // Toggle Navbar on Mobile
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
  
  // Close Navbar on Resize (if screen size exceeds mobile breakpoint)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });

// Banner Background Carousel
const backgroundLayers = document.querySelectorAll('.background-layer');
let currentLayer = 0;

function changeBackground() {
    backgroundLayers[currentLayer].classList.remove('active');
    currentLayer = (currentLayer + 1) % backgroundLayers.length;
    backgroundLayers[currentLayer].classList.add('active');
}

setInterval(changeBackground, 5000); // Change every 5 seconds

// Initialize the first background layer
backgroundLayers[0].classList.add('active');

// review 
document.getElementById('reviewForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const rating = document.getElementById('rating').value;
  const comment = document.getElementById('comment').value;

  // Create a new review element
  const reviewElement = document.createElement('div');
  reviewElement.classList.add('review');

  // Add review content
  reviewElement.innerHTML = `
      <h4>${name}</h4>
      <p class="rating">${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</p>
      <p>${comment}</p>
      <button class="delete-btn"><i class="fas fa-trash"></i></button>
  `;

  // Append the new review to the reviews container
  document.getElementById('reviewsContainer').appendChild(reviewElement);

  // Clear the form
  document.getElementById('reviewForm').reset();

  // Add event listener to the delete button
  const deleteBtn = reviewElement.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', function () {
      reviewElement.remove();
  });
});
// up button start
// Get the button element
const upButton = document.getElementById('upButton');

// Function to handle scroll and button visibility
function handleScroll() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    upButton.classList.add('show');
  } else {
    upButton.classList.remove('show');
  }
}

// Make sure the button shows on all pages when scrolling
window.onscroll = handleScroll;

// Scroll to the top smoothly when the button is clicked
upButton.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Initially check if we are scrolled down on page load
handleScroll();

// up button end

// scroll slide js st
window.addEventListener('scroll', reveal);
function reveal() {
  var reveals = document.querySelectorAll('.reveal');
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;
    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    }
    else {
      reveals[i].classList.remove('.active');
    }
  }
}
// scroll slide js end
// Preloader JavaScript (Vanilla JavaScript)
window.addEventListener("load", function () {
  var loader = document.getElementById("preloder");

  // Show preloader initially
  loader.style.display = "flex"; 

  // Set a timeout for the preloader fade-out
  setTimeout(function () {
      loader.style.transition = "opacity 1s ease-out"; // Apply a smooth fade-out effect
      loader.style.opacity = "0"; // Fade out
      setTimeout(function () {
          loader.style.display = "none"; // Hide preloader after fading out
      }, 1000); // Wait for fade-out to complete
  }, 3000); // Optional delay (3 seconds)
});




