// images in a array
let images = [
  "Assets/img/img1.jpg",
  "Assets/img/img2.jpg",
  "Assets/img/img3.jpg",
  "Assets/img/img4.png",
  "Assets/img/img5.png",
  "Assets/img/img6.png",
];

let currentIndex = 0;

// eventListener to nextSlide button
function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("slider-image").src = images[currentIndex];
}

// eventListener to prevSlide button
function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("slider-image").src = images[currentIndex];
}
