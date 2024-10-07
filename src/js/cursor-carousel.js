const cursorDot = document.querySelector(".icon");
const carousel = document.getElementById("image-carousel");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;
  const isWithinCarousel = carousel.contains(document.elementFromPoint(posX, posY));

  if (isWithinCarousel) {
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
  } else {
    cursorDot.style.left = "-100px";
    cursorDot.style.top = "-100px";
  }
});