document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const links = document.querySelectorAll(".links");
    const buttonNav = document.getElementById("button-nav");

    function toggleMenu() {
        // Alterna a classe 'active' no botão de menu
        menuToggle.classList.toggle('active');
        
        // Verifica se o menu está visível
        const isMenuVisible = menu.classList.contains('show');

        if (!isMenuVisible) {
            // Abre o menu
            menu.style.display = "flex";
            menu.setAttribute('aria-hidden', 'false');
            
            // Animação de entrada dos links
            links.forEach((link, index) => {
                setTimeout(() => {
                    link.style.opacity = "1";
                    link.style.transform = "translateY(0)";
                    link.style.pointerEvents = "auto";
                }, index * 100);
            });

            // Habilita botão de navegação
            if (buttonNav) {
                buttonNav.style.pointerEvents = "auto";
            }

            // Adiciona classe de mostrar
            requestAnimationFrame(() => {
                menu.classList.add('show');
            });
        } else {
            // Fecha o menu
            menu.classList.remove('show');
            menu.setAttribute('aria-hidden', 'true');

            // Animação de saída dos links
            links.forEach((link) => {
                link.style.opacity = "0";
                link.style.transform = "translateY(20px)";
                link.style.pointerEvents = "none";
            });

            // Desabilita botão de navegação
            if (buttonNav) {
                buttonNav.style.pointerEvents = "none";
            }

            // Esconde o menu após a animação
            setTimeout(() => {
                menu.style.display = "none";
            }, 300);
        }
    }

    // Adiciona evento de clique no botão de menu
    if (menuToggle) {
        menuToggle.addEventListener("click", toggleMenu);
    }

    // Função para lidar com redimensionamento da janela
    function handleResize() {
        const isMobile = window.innerWidth <= 1024;

        if (!isMobile) {
            // Para telas maiores
            menu.style.display = "flex";
            menu.classList.remove('show');
            menu.setAttribute('aria-hidden', 'false');

            links.forEach((link) => {
                link.style.opacity = "1";
                link.style.transform = "translateY(0)";
                link.style.pointerEvents = "auto";
            });

            // Remove classe active do botão de menu
            menuToggle.classList.remove('active');
        } else {
            // Para telas menores
            menu.style.display = "none";
            menu.classList.remove('show');
            menu.setAttribute('aria-hidden', 'true');

            links.forEach((link) => {
                link.style.opacity = "0";
                link.style.transform = "translateY(20px)";
                link.style.pointerEvents = "none";
            });
        }
    }

    // Adiciona evento de redimensionamento
    window.addEventListener("resize", handleResize);

    // Chama handleResize no carregamento para definir estado inicial
    handleResize();
});
