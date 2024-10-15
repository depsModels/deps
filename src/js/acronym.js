let mode = "";

// Seleciona os elementos dos radios e seções
const radios = {
  design: document.querySelector("#label-design"),
  efficiency: document.querySelector("#label-efficiency"),
  productivity: document.querySelector("#label-productivity"),
  simplicity: document.querySelector("#label-simplicity"),
};

const sections = {
  design: document.querySelector("#design"),
  efficiency: document.querySelector("#efficiency"),
  productivity: document.querySelector("#productivity"),
  simplicity: document.querySelector("#simplicity"),
};

const labels = document.querySelectorAll(".deps-acronym p");

// Exibe a seção correspondente à label ativa
const showSection = (key) => {
  Object.keys(sections).forEach(
    (k) => (sections[k].style.display = k === key ? "block" : "none"),
  );
};

// Esconde todas as palavras completas ('full-word')
const hideAllFullWords = () => {
  labels.forEach((label) => {
    const fullWord = label.querySelector("span.full-word");
    fullWord.style.opacity = "0";
    fullWord.style.transform = "translateY(10px)";
  });
};

// Define a label ativa e mostra a palavra completa correspondente
const setActive = (activeLabel) => {
  labels.forEach((label) =>
    label.classList.toggle("active", label === activeLabel),
  );
  hideAllFullWords();
  const fullWord = activeLabel.querySelector("span.full-word");
  fullWord.style.opacity = "1";
  fullWord.style.transform = "translateY(0)";
};

// Função para inicializar o estado do layout no modo desktop
const desktopFunction = () => {
  if (mode === "desktop") return;
  mode = "desktop";
  Object.values(radios).forEach(
    (radio) =>
      (radio.onmouseover = () => {
        setActive(radio);
        showSection(radio.id.split("-")[1]);
      }),
  );
};

// Função para inicializar o estado do layout no modo mobile
const mobileFunction = () => {
  if (mode === "mobile") return;
  mode = "mobile";
  labels.forEach(
    (label) =>
      (label.onclick = () => {
        setActive(label);
        showSection(label.id.split("-")[1]);
      }),
  );
};

// Função para verificar o tamanho da janela e ajustar o layout
const checkWindowSize = () => {
  window.innerWidth <= 1024 ? mobileFunction() : desktopFunction();
};

// No carregamento da página, oculta todas as palavras completas e ativa a primeira label
window.onload = () => {
  checkWindowSize();
  setActive(radios.design); // Define "design" como a primeira label ativa
  showSection("design"); // Mostra a seção de "design" por padrão
};

window.onresize = checkWindowSize;
