let radioDesign = document.querySelector("#label-design");
let radioEfficiency = document.querySelector("#label-efficiency");
let radioProductivity = document.querySelector("#label-productivity");
let radioSimplicity = document.querySelector("#label-simplicity");

let sectionDesign = document.querySelector("#design");
let sectionEfficiency = document.querySelector("#efficiency");
let sectionProductivity = document.querySelector("#productivity");
let sectionSimplicity = document.querySelector("#simplicity");

let pointer = document.querySelector(".pointer");

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

// Gerenciamento da classe "active" nas labels
const depsAcronym = document.querySelector(".deps-acronym");
const labels = depsAcronym.querySelectorAll("p");

// Função para remover a classe 'active' de todas as labels
const removeActiveFromAll = () => {
  labels.forEach((label) => {
    label.classList.remove("active");
  });
};

// Adicionar comportamento para manter a classe 'active'
labels.forEach((label) => {
  label.addEventListener("mouseover", () => {
    // Remove 'active' de todas as labels
    removeActiveFromAll();

    label.classList.add("active");
  });
});


// Verifica se a tela é menor que 768px para aplicar as funcionalidades móveis
if (window.innerWidth <= 768) {
  // Ativar a primeira label e exibir sua descrição ao carregar
  radioDesign.classList.add("active");
  sectionDesign.style.display = "block";

  // Adicionar evento de clique nas labels
  labels.forEach((label) => {
    label.addEventListener("click", () => {
      // Remove 'active' de todas as labels
      removeActiveFromAll();

      // Adiciona 'active' à label clicada
      label.classList.add("active");

      // Alterna a exibição da palavra completa
      labels.forEach((lbl) => {
        const fullWord = lbl.querySelector("span.full-word");
        if (lbl !== label) {
          fullWord.style.opacity = "0";
          fullWord.style.transform = "translateY(10px)";
        } else {
          fullWord.style.opacity = "1";
          fullWord.style.transform = "translateY(0)";
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
