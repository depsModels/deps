// Função para lidar com o envio de formulário via AJAX
function handleFormSubmit(formId) {
  document.getElementById(formId).addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os dados do formulário
    var formData = new FormData(this);

    // Envia os dados do formulário via AJAX para o arquivo PHP
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "sendform.php", true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Exibe a mensagem retornada pelo PHP no modal
        showModal(xhr.responseText);
        // Limpa o formulário
        document.getElementById(formId).reset();
      }
    };
    xhr.send(formData);
  });
}

// Aplica a função para o formulário
handleFormSubmit("myForm");

// Função para exibir o modal com a mensagem
function showModal(message) {
  const responseMessageElement = document.getElementById("responseMessage");
  if (responseMessageElement) {
    responseMessageElement.textContent = message;
    responseMessageElement.style.color = message.includes("sucesso") ? "green" : "red";
  }
  
  // Mostra o modal
  openModal();
}

// Controle de Modal em Vanilla JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById("contatoModal");
  const closeButtons = modal.querySelectorAll('.close');
  const contactButtons = document.querySelectorAll('[data-toggle="modal"][data-target="#contatoModal"]');

  // Função para abrir o modal
  function openModal() {
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

    // Limpa formulário
    const form = modal.querySelector('form');
    if (form) form.reset();

    // Limpa mensagens anteriores
    const responseMessageElement = document.getElementById("responseMessage");
    if (responseMessageElement) {
      responseMessageElement.textContent = '';
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
  function closeModal(event) {
    // Previne propagação para evitar fechamento acidental
    if (event) {
      event.stopPropagation();
    }

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

  // Adiciona eventos de clique nos botões de contato
  contactButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      openModal();
    });
  });

  // Adiciona eventos de clique nos botões de fechar
  closeButtons.forEach(button => {
    button.addEventListener('click', closeModal);
  });

  // Adiciona evento de clique no backdrop para fechar
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal(event);
    }
  });

  // Adiciona evento de teclado para fechar com ESC
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.classList.contains('show')) {
      closeModal(event);
    }
  });
});
