const loaderContainer = document.querySelector(".loader-container");
const pageContent = document.querySelector("#page-content");

window.addEventListener('load', () => {
    loaderContainer.classList.add('hidden');
    pageContent.classList.add('visible');
})