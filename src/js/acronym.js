let radioDesign = document.querySelector("#label-design");
let radioEfficiency = document.querySelector("#label-efficiency");
let radioProductivity = document.querySelector("#label-productivity");
let radioSimplicity = document.querySelector("#label-simplicity");

let sectionDesign = document.querySelector("#design");
let sectionEfficiency = document.querySelector("#efficiency");
let sectionProductivity = document.querySelector("#productivity");
let sectionSimplicity = document.querySelector("#simplicity");

let pointer = document.querySelector(".pointer");

const depsAcronym = document.querySelector(".deps-acronym");
const labels = depsAcronym.querySelectorAll("p");

const removeActiveFromAll = () => {
  labels.forEach((label) => {
    label.classList.remove("active");
  });
};

function desktopFunction() {
  console.log("Modo desktop ativado");

  // Mostrar full-word em todas as labels no modo desktop
  labels.forEach((label) => {
    const fullWord = label.querySelector("span.full-word");
    fullWord.style.opacity = "1"; // Mostrar full-word
    fullWord.style.transform = "translateY(0)"; // Resetar a posição
  });

  radioDesign.addEventListener("mouseover", (e) => {
    sectionDesign.style.display = "block";
    sectionEfficiency.style.display = "none";
    sectionProductivity.style.display = "none";
    sectionSimplicity.style.display = "none";
  });

  radioEfficiency.addEventListener("mouseover", (e) => {
    sectionDesign.style.display = "none";
    sectionEfficiency.style.display = "block";
    sectionProductivity.style.display = "none";
    sectionSimplicity.style.display = "none";
  });

  radioProductivity.addEventListener("mouseover", (e) => {
    sectionDesign.style.display = "none";
    sectionEfficiency.style.display = "none";
    sectionProductivity.style.display = "block";
    sectionSimplicity.style.display = "none";
  });

  radioSimplicity.addEventListener("mouseover", (e) => {
    sectionDesign.style.display = "none";
    sectionEfficiency.style.display = "none";
    sectionProductivity.style.display = "none";
    sectionSimplicity.style.display = "block";
  });
}

function mobileFunction() {
  console.log("Modo mobile ativado");
  
  radioDesign.classList.add("active");
  sectionDesign.style.display = "block";

  labels.forEach((label) => {
    label.addEventListener("click", () => {

      removeActiveFromAll();

      label.classList.add("active");

      labels.forEach((lbl) => {
        const fullWord = lbl.querySelector("span.full-word");
        if (lbl !== label) {
          fullWord.style.opacity = "0"; // Esconder full-word
          fullWord.style.transform = "translateY(10px)"; // Mover a palavra para baixo
        } else {
          fullWord.style.opacity = "1"; // Mostrar full-word
          fullWord.style.transform = "translateY(0)"; // Resetar a posição
        }
      });

      // Exibe a seção correspondente
      sectionDesign.style.display = "none";
      sectionEfficiency.style.display = "none";
      sectionProductivity.style.display = "none";
      sectionSimplicity.style.display = "none";

      if (label === radioDesign) {
        sectionDesign.style.display = "block";
      } else if (label === radioEfficiency) {
        sectionEfficiency.style.display = "block";
      } else if (label === radioProductivity) {
        sectionProductivity.style.display = "block";
      } else if (label === radioSimplicity) {
        sectionSimplicity.style.display = "block";
      }
    });
  });
}

function checkWindowSize() {
  if (window.innerWidth <= 768) { 
    mobileFunction();
  } else {
    desktopFunction();
  }
}

// Verifica o tamanho da janela quando a página carrega
window.onload = checkWindowSize;

// Verifica o tamanho da janela toda vez que ela for redimensionada
window.onresize = checkWindowSize;
