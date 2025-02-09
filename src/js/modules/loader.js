// Módulo de Loader
export function initLoader() {
    const loaderContainer = document.querySelector('.loader-container');
    if (loaderContainer) {
        loaderContainer.classList.add('loaded');
        setTimeout(() => {
            loaderContainer.style.display = 'none';
        }, 500);
    }
}
