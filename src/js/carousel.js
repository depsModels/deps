const figureKarine = document.querySelector("#karine");
const figureStock = document.querySelector("#stock-deps");
const figureGym = document.querySelector("#gym");
const videoKarine = document.querySelector("#video-karine");
const videoStock = document.querySelector("#video-stock");
const videoGym = document.querySelector("#video-gym");

// Função para dar play/pause no vídeo com base no slide ativo
function controlVideos(index) {
  const videos = [videoStock, videoKarine, videoGym];
  videos.forEach((video, idx) => {
    if (video) {
      video.pause();
      video.controls = false;
      if (idx === index) {
        video.muted = true;
        video.play();
      }
    }
  });
}

// Inicializando o Splide
var splide = new Splide(".splide", {
  type: "loop",
  autoplay: true,
  speed: 800, // Defina a velocidade da transição (em milissegundos)
  easing: "ease",
});

var bar = splide.root.querySelector(".my-slider-progress-bar");

// Atualizando o controle de vídeos e a barra de progresso conforme o slide muda
splide.on("move", function () {
  controlVideos(splide.index); // Atualiza os vídeos conforme o slide
  var end = splide.Components.Controller.getEnd() + 1;
  var rate = Math.min((splide.index + 1) / end, 1);
  bar.style.width = String(100 * rate) + "%"; // Atualiza a barra de progresso
});

// Dá play nos vídeos ao carregar o carrossel
splide.on("mounted", function () {
  controlVideos(splide.index); // Dá play no vídeo do slide ativo ao carregar

  // Inicializando a barra de progresso
  var end = splide.Components.Controller.getEnd() + 1;
  var rate = Math.min((splide.index + 1) / end, 1);
  bar.style.width = String(100 * rate) + "%"; // Inicializa a barra de progresso
});

if (videoStock) {
  videoStock.muted = true;
  videoStock.autoplay = true;
}
if (videoKarine) {
  videoKarine.muted = true;
  videoKarine.autoplay = true;
}
if (videoGym) {
  videoGym.muted = true;
  videoGym.autoplay = true;
}

splide.mount();
