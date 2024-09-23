import '../css/styles.css';
import '../css/responsivo.css';
// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


var splide = new Splide('.splide', {
    type: 'loop',
    padding: '5rem',
    autoplay: true,
});

splide.mount();