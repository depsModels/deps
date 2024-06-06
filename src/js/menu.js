document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const links = document.querySelectorAll('.links');

    let menuOpen = false;

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        
        if (!menuOpen) {
            menu.style.display = 'flex';
            requestAnimationFrame(() => {
                menu.classList.add('show');
                links.forEach((link, index) => {
                    setTimeout(() => {
                        link.style.opacity = '1';
                        link.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            });
            menuOpen = true;
        } else {
            menu.classList.remove('show');
            links.forEach(link => {
                link.style.opacity = '0';
                link.style.transform = 'translateY(20px)';
            });
            menuOpen = false;
        }
    });
});
