document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  const links = document.querySelectorAll(".links");

  let menuOpen = false;
  menuToggle.addEventListener("click", function () {
    if (!menuOpen) {
      menu.style.display = "flex";
      requestAnimationFrame(() => {
        menu.classList.add("show");
        links.forEach((link, index) => {
          setTimeout(() => {
            link.style.opacity = "1";
            link.style.transform = "translateY(0)";
            link.style.pointerEvents = "auto"; // Habilita eventos de clique
          }, index * 100);
        });
      });
  
      // Habilita eventos de clique no botão do modal
      const buttonNav = document.getElementById("button-nav");
      buttonNav.style.pointerEvents = "auto";
  
      menuOpen = true;
    } else {
      // Verifica se o modal está aberto
      const modal = document.getElementById("contatoModal");
      if (modal.classList.contains("show")) {
        // Fecha o modal
        modal.classList.remove("show");
        const modalDialog = modal.querySelector(".modal-dialog");
        modalDialog.classList.remove("show");
      }
  
      // Fecha o menu após um atraso
      setTimeout(() => {
        menu.classList.remove("show");
        links.forEach((link) => {
          link.style.opacity = "0";
          link.style.transform = "translateY(20px)";
          link.style.pointerEvents = "none"; // Desabilita eventos de clique
        });
  
        // Desabilita eventos de clique no botão do modal
        const buttonNav = document.getElementById("button-nav");
        buttonNav.style.pointerEvents = "none";
  
        menuOpen = false;
      }, 200);
    }
  });

  function handleResize() {
    if (window.innerWidth > 767) {
      menuToggle.classList.remove("active");
      menu.style.display = "flex";
      menuOpen = false;
  
      // Reset link styles
      links.forEach((link) => {
        link.style.opacity = "1";
        link.style.transform = "translateY(0)";
        link.style.pointerEvents = "auto"; // Habilita eventos de clique
      });
    } else {
      menu.style.display = "none"; // Esconde o menu original em telas menores
      links.forEach((link) => {
        link.style.opacity = "0";
        link.style.transform = "translateY(20px)";
        link.style.pointerEvents = "none"; // Desabilita eventos de clique
      });
    }
  }

  window.addEventListener("resize", handleResize);
  handleResize(); // Chama para garantir o estado correto no carregamento
});
