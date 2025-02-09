// Inicialização de componentes globais
document.addEventListener('DOMContentLoaded', function() {
    // Inicialização do AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true
        });
    }

    // Atualização dinâmica do ano de copyright
    const copyrightYearElement = document.getElementById('copyrightYear');
    if (copyrightYearElement) {
        copyrightYearElement.textContent = new Date().getFullYear();
    }

    // Remover loader após carregamento
    const loaderContainer = document.querySelector('.loader-container');
    if (loaderContainer) {
        loaderContainer.classList.add('loaded');
        setTimeout(() => {
            loaderContainer.style.display = 'none';
        }, 500);
    }

    // Inicialização dos modais
    const contactModalTrigger = document.querySelector('[data-toggle="modal"][data-target="#contactModal"]');
    if (contactModalTrigger) {
        contactModalTrigger.addEventListener('click', function(e) {
            e.preventDefault();
            const targetModal = document.querySelector(this.getAttribute('data-target'));
            if (targetModal) {
                $(targetModal).modal('show');
            }
        });
    }

    // Smooth Scrolling para links internos
    function smoothScroll(target, duration) {
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        // Easing function for smooth scroll
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    // Adiciona smooth scroll para todos os links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                smoothScroll(targetElement, 1000); // Duração de 1 segundo
            }
        });
    });
});
