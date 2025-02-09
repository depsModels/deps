const links = document.querySelectorAll(".link-smooth");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.getAttribute("href");
    const targetElement = document.querySelector(target);
    const offsetTop = targetElement.offsetTop;

    $("html, body").animate(
      {
        scrollTop: offsetTop,
      },
      500,
    );
  });
});

const slideElements = document.querySelectorAll(".slide");
const slideInElements = document.querySelectorAll(".slide-in");
const slideUpElements = document.querySelectorAll(".slide-up");

slideElements.forEach((element) => element.classList.add("show"));
slideInElements.forEach((element) => element.classList.add("show"));
slideUpElements.forEach((element) => element.classList.add("show"));

function showElements(parentClass, childClasses) {
  childClasses.forEach((childClass) => {
    const elements = document.querySelectorAll(`.${parentClass}.${childClass}`);
    elements.forEach((element) => element.classList.add("show"));
  });
}

showElements("slide", ["slide-in", "slide-up", "slide-down"]);
