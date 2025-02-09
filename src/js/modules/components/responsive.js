function checkWidth() {
  const elements = document.querySelectorAll(".titles-end");
  const titles = document.querySelectorAll(".titles");
  const label_who_we_are = document.querySelectorAll(".label-who-we-are");
  if (window.innerWidth < 767) {
    elements.forEach((element) => element.classList.remove("titles-end"));
    titles.forEach((element) => element.classList.add("text-center"));
    label_who_we_are.forEach((element) => (element.style.fontSize = "3.2vh"));
  } else {
    elements.forEach((element) => element.classList.add("titles-end"));
    titles.forEach((element) => element.classList.remove("text-center"));
    label_who_we_are.forEach((element) => (element.style.fontSize = ""));
  }
}

window.addEventListener("resize", checkWidth);
document.addEventListener("DOMContentLoaded", checkWidth);
