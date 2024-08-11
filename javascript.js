function openHamburgerMenu() {
  document.getElementById("myHamburgerMenu").classList.add("open");
}

function closeHamburgerMenu() {
  document.getElementById("myHamburgerMenu").classList.remove("open");
}

// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  document.querySelector(".slider-wrapper").style.transform = `translateX(-${
    currentSlide * 100
  }%)`;

  // Update pagination dots
  document.querySelectorAll(".pagination-dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });
}

document.querySelector(".slider-next").addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

document.querySelector(".slider-prev").addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

document.querySelectorAll(".pagination-dot").forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
  });
});

// Initialize the slider
showSlide(currentSlide);
