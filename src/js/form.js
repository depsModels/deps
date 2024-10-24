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
        // Recarrega a página após 3 segundos
        setTimeout(function () {
          location.reload();
        }, 3000);
      }
    };
    xhr.send(formData);
  });
}

// Aplica a função para ambos os formulários
handleFormSubmit("myForm"); // Formulário do footer
handleFormSubmit("modalForm"); // Formulário do modal

// Função para exibir o modal com a mensagem
function showModal(message) {
  document.getElementById("modalMessage").innerText = message;
  $("#myModal").modal("show");
}
