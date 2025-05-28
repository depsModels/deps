const links = document.querySelectorAll(".link-smooth");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.getAttribute("href");
    const targetElement = document.querySelector(target);

    if (targetElement) {
      $("html, body").animate(
        {
          scrollTop: targetElement.offsetTop,
        },
        500,
      );
    }
  });
});

const slideClasses = [
  ".slide",
  ".slide-in",
  ".slide-up",
  ".slide.slide-in",
  ".slide.slide-up",
  ".slide.slide-down",
];
slideClasses.forEach((className) => {
  document.querySelectorAll(className).forEach((element) => {
    element.classList.add("show");
  });
});
