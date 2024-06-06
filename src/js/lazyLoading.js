

    document.addEventListener("DOMContentLoaded", function () {
        const menuIcon = document.querySelector('.menu-icon');
        const menu = document.querySelector('.menu');

        document.addEventListener('click', function (event) {
            if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
                menuIcon.classList.remove('open');
                menu.classList.remove('open');
            }
        });

        menuIcon.addEventListener('click', function (event) {
            event.stopPropagation();
            menuIcon.classList.toggle('open');
            menu.classList.toggle('open');
        });
    });

