// Módulo de Manipulação de Modal
export function initModalHandlers() {
    // Função para abrir o modal
    function openModal(modalSelector) {
        const modal = document.querySelector(modalSelector);
        if (modal) {
            // Limpa qualquer estado anterior
            document.body.classList.remove('modal-open');
            removeBackdrop();

            // Adiciona classes para abrir o modal
            modal.style.display = 'block';
            modal.classList.add('show');
            document.body.classList.add('modal-open');

            // Cria backdrop
            const backdrop = document.createElement('div');
            backdrop.classList.add('modal-backdrop', 'fade', 'show');
            document.body.appendChild(backdrop);
        }
    }

    // Função para remover backdrop
    function removeBackdrop() {
        const existingBackdrops = document.querySelectorAll('.modal-backdrop');
        existingBackdrops.forEach(backdrop => {
            backdrop.classList.remove('show');
            backdrop.remove();
        });
    }

    // Função para fechar o modal
    function closeModal(modalSelector) {
        const modal = document.querySelector(modalSelector);
        if (modal) {
            // Remove classes do modal
            modal.style.display = 'none';
            modal.classList.remove('show');
            
            // Remove classes do body
            document.body.classList.remove('modal-open');

            // Remove backdrop completamente
            removeBackdrop();

            // Força remoção de qualquer estilo inline que possa bloquear interações
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.paddingRight = '';
        }
    }

    // Adiciona event listeners para todos os botões de modal
    const modalTriggers = document.querySelectorAll('[data-toggle="modal"]');
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const targetModal = this.getAttribute('data-target');
            openModal(targetModal);
        });
    });

    // Adiciona event listeners para botões de fechar modal
    const closeButtons = document.querySelectorAll('.modal .close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                closeModal(`#${modal.id}`);
            }
        });
    });

    // Adiciona event listener para fechar modal ao clicar fora
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal(`#${this.id}`);
            }
        });
    });

    // Adiciona event listener para fechar modal com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const openModal = document.querySelector('.modal.show');
            if (openModal) {
                closeModal(`#${openModal.id}`);
            }
        }
    });
}
