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
