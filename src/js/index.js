// Importação de módulos globais
import { initLoader } from './modules/loader.js';
import { initCopyright } from './modules/copyright.js';
import { initSmoothScroll } from './modules/smoothScroll.js';
import { initAOS } from './modules/aosInit.js';
import { initModalHandlers } from './modules/modalHandler.js';
import { initFAQ } from './modules/components/faq.js';

// Importação de módulos específicos
try {
    import('./modules/components/acronym.js').then(() => console.log('Acronym module loaded'));
    import('./modules/components/carousel.js').then(() => console.log('Carousel module loaded'));
    import('./modules/components/form.js').then(() => console.log('Form module loaded'));
    import('./modules/components/menu.js').then(() => console.log('Menu module loaded'));
    import('./modules/components/responsive.js').then(() => console.log('Responsive module loaded'));
    import('./modules/components/load-content.js').then(() => console.log('Load Content module loaded'));
} catch (error) {
    console.error('Error loading modules:', error);
}

// Inicialização de componentes quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    try {
        initLoader();
        initCopyright();
        initSmoothScroll();
        initAOS();
        initModalHandlers();
        initFAQ();
        console.log('All global modules initialized successfully');
    } catch (error) {
        console.error('Error initializing global modules:', error);
    }
});
