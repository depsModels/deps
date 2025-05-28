document.addEventListener("DOMContentLoaded", () => {
  const labels = document.querySelectorAll(".deps-acronym p");
  const sections = document.querySelectorAll(".about-acronym > div");
  let mode = "";

  const showSection = (targetId) => {
    sections.forEach(section => {
      section.style.display = section.id === targetId ? "block" : "none";
    });
  };

  const setActive = (activeLabel) => {
    labels.forEach(label => {
      label.classList.toggle("active", label === activeLabel);
    });
  };

  const desktopFunction = () => {
    if (mode === "desktop") return;
    mode = "desktop";
    
    labels.forEach(label => {
      label.onmouseover = () => {
        setActive(label);
        const targetId = label.id.split("-")[1];
        showSection(targetId);
      };
    });
  };

  const mobileFunction = () => {
    if (mode === "mobile") return;
    mode = "mobile";
    
    labels.forEach(label => {
      label.onclick = () => {
        setActive(label);
        const targetId = label.id.split("-")[1];
        showSection(targetId);
      };
    });
  };

  const handleResize = () => {
    if (window.innerWidth <= 1024) {
      mobileFunction();
    } else {
      desktopFunction();
    }
  };

  window.addEventListener("resize", handleResize);
  
  // Inicialização
  handleResize();
  if (labels.length > 0) {
    setActive(labels[0]);
    showSection("design");
  }
});
