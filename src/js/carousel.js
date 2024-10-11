const figureKarine = document.querySelector("#karine");
const figureStock = document.querySelector("#stock-deps");
const figureGym = document.querySelector("#gym");
const videoKarine = document.querySelector("#video-karine");
const videoStock = document.querySelector("#video-stock");
const videoGym = document.querySelector("#video-gym");

if (videoKarine) {
  figureKarine.addEventListener("mouseenter", () => {
    videoKarine.play();
  });

  figureKarine.addEventListener("mouseleave", () => {
    videoKarine.pause();
  });
} else {
  console.log("Video element not found");
}

if (videoStock) {
  figureStock.addEventListener("mouseenter", () => {
    videoStock.play();
  });

  figureStock.addEventListener("mouseleave", () => {
    videoStock.pause();
  });
} else {
  console.log("Video element not found");
}

if (videoGym) {
  figureGym.addEventListener("mouseenter", () => {
    videoGym.play();
  });

  figureGym.addEventListener("mouseleave", () => {
    videoGym.pause();
  });
} else {
  console.log("Video element not found");
}

var splide = new Splide(".splide", {
  type: "loop",
  autoplay: true,
});
var bar = splide.root.querySelector(".my-slider-progress-bar");

// Updates the bar width whenever the carousel moves:
splide.on("mounted move", function () {
  var end = splide.Components.Controller.getEnd() + 1;
  var rate = Math.min((splide.index + 1) / end, 1);
  bar.style.width = String(100 * rate) + "%";
});

splide.mount();
