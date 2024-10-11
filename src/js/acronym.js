let mode = "";

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

const showSection = (key) => {
  Object.keys(sections).forEach(
    (k) => (sections[k].style.display = k === key ? "block" : "none"),
  );
};

const toggleFullWords = (show) => {
  labels.forEach((label) => {
    const fullWord = label.querySelector("span.full-word");
    fullWord.style.opacity = show ? "1" : "0";
    fullWord.style.transform = show ? "translateY(0)" : "translateY(10px)";
  });
};

const setActive = (activeLabel) => {
  labels.forEach((label) =>
    label.classList.toggle("active", label === activeLabel),
  );
};

const desktopFunction = () => {
  if (mode === "desktop") return;
  mode = "desktop";
  toggleFullWords(true);
  Object.values(radios).forEach(
    (radio) =>
      (radio.onmouseover = () => {
        setActive(radio);
        showSection(radio.id.split("-")[1]);
      }),
  );
};

const mobileFunction = () => {
  if (mode === "mobile") return;
  mode = "mobile";
  labels.forEach(
    (label) =>
      (label.onclick = () => {
        setActive(label);
        toggleFullWords(false);
        label.querySelector("span.full-word").style.opacity = "1";
        label.querySelector("span.full-word").style.transform = "translateY(0)";
        showSection(label.id.split("-")[1]);
      }),
  );
};

const checkWindowSize = () =>
  window.innerWidth <= 768 ? mobileFunction() : desktopFunction();

window.onload = checkWindowSize;
window.onresize = checkWindowSize;
