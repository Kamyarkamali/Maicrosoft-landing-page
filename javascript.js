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

let currentSlide2 = 0;
const slides2 = document.querySelectorAll(".slide2");
const totalSlides2 = slides2.length;

function showSlide2(index2) {
  if (index2 >= totalSlides2) {
    currentSlide2 = 0;
  } else if (index2 < 0) {
    currentSlide2 = totalSlides2 - 1;
  } else {
    currentSlide2 = index2;
  }

  document.querySelector(".slider-wrapper2").style.transform = `translateX(-${
    currentSlide2 * 100
  }%)`;

  // Update pagination dots
  document.querySelectorAll(".pagination-dot2").forEach((dot, i) => {
    dot.classList.toggle("active2", i === currentSlide2);
  });
}

document.querySelector(".slider2-next2").addEventListener("click", () => {
  showSlide2(currentSlide2 + 1);
});

document.querySelector(".slider2-prev2").addEventListener("click", () => {
  showSlide2(currentSlide2 - 1);
});

document.querySelectorAll(".pagination-dot2").forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide2(i);
  });
});

// Initialize the slider
showSlide2(currentSlide2);
