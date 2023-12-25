document.addEventListener("DOMContentLoaded", function() {
    var body = document.querySelector('body');
    var imageUrl = "images/bg-header-cut.jpg";

    function lazyload() {
        if (body) {
            console.log("sexo");
            body.classList.add('body-before-styles', 'body-before-opacity');
            body.style.backgroundImage = "url('" + imageUrl + "')";
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationchange", lazyload);
        }
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationchange", lazyload);

    lazyload(); // Carrega a imagem de fundo inicialmente
});

