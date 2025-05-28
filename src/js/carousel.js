const videos = [
  document.querySelector("#video-stock"),
  document.querySelector("#video-karine"),
  document.querySelector("#video-ecommerce"),
].filter(Boolean);

function controlVideos(index) {
  videos.forEach((video, idx) => {
    video.pause();
    video.controls = false;
    if (idx === index) {
      video.muted = true;
      video.play().catch(() => {});
    }
  });
}

videos.forEach((video) => {
  video.muted = true;
  video.autoplay = true;
});

const splide = new Splide(".splide", {
  type: "loop",
  autoplay: true,
  speed: 800,
  easing: "ease",
});

const bar = splide.root.querySelector(".my-slider-progress-bar");

function updateProgressBar() {
  const end = splide.Components.Controller.getEnd() + 1;
  const rate = Math.min((splide.index + 1) / end, 1);
  if (bar) bar.style.width = `${100 * rate}%`;
}

splide.on("move", () => {
  controlVideos(splide.index);
  updateProgressBar();
});

splide.on("mounted", () => {
  controlVideos(splide.index);
  updateProgressBar();
});

splide.mount();
