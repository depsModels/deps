document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  const links = document.querySelectorAll(".links");
  const buttonNav = document.getElementById("button-nav");

  let menuOpen = false;

  function setLinksState(visible) {
    links.forEach((link, index) => {
      const delay = visible ? index * 100 : 0;
      setTimeout(() => {
        link.style.opacity = visible ? "1" : "0";
        link.style.transform = visible ? "translateY(0)" : "translateY(20px)";
        link.style.pointerEvents = visible ? "auto" : "none";
      }, delay);
    });
    if (buttonNav) {
      buttonNav.style.pointerEvents = visible ? "auto" : "none";
    }
  }

  menuToggle.addEventListener("click", () => {
    if (!menuOpen) {
      menu.style.display = "flex";
      requestAnimationFrame(() => {
        menu.classList.add("show");
        setLinksState(true);
      });
      menuOpen = true;
    } else {
      menu.style.display = "none";
      const modal = document.getElementById("contatoModal");
      if (modal?.classList.contains("show")) {
        modal.classList.remove("show");
        modal.querySelector(".modal-dialog")?.classList.remove("show");
      }

      setTimeout(() => {
        menu.classList.remove("show");
        setLinksState(false);
        menuOpen = false;
      }, 200);
    }
  });

  function handleResize() {
    const isDesktop = window.innerWidth > 1024;

    if (isDesktop) {
      menuToggle.classList.remove("active");
      menu.style.display = "flex";
      menuOpen = false;
      setLinksState(true);
    } else {
      menu.style.display = "none";
      setLinksState(false);
    }
  }

  window.addEventListener("resize", handleResize);
  handleResize();
});
