// Adiciona um ouvinte de evento para o envio do formulário
document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault() // Impede o envio padrão do formulário

  // Captura os dados do formulário
  var formData = new FormData(this)

  // Envia os dados do formulário via AJAX para o arquivo PHP
  var xhr = new XMLHttpRequest()
  xhr.open('POST', 'sendform.php', true)
  xhr.onload = function () {
    if (xhr.status === 200) {
      // Exibe a mensagem retornada pelo PHP no modal
      showModal(xhr.responseText)
      // Recarrega a página após 3 segundos
      setTimeout(function () {
        location.reload()
      }, 3000)
    }
  }
  xhr.send(formData)
})

// Função para exibir o modal com a mensagem e definir a cor do modal
function showModal(message) {
  document.getElementById('modalMessage').innerText = message
  var modal = document.getElementById('myModal')

  $('#myModal').modal('show')
}
