$(document).ready(() => {
  const showMessage = (message, isSuccess = true) => {
    $("#modalMessage .modal-body").html(`<p>${message}</p>`);
    $("#modalMessage").modal("show");

    if (isSuccess) {
      setTimeout(() => location.reload(), 3000);
    }
  };

  const handleFormSubmit = (formSelector, action) => {
    $(formSelector).on("submit", function (e) {
      e.preventDefault();

      $.ajax({
        type: "POST",
        url: action,
        data: $(this).serialize(),
        success: () => showMessage("Mensagem enviada com sucesso!"),
        error: () =>
          showMessage("Erro ao enviar mensagem. Tente novamente.", false),
      });
    });
  };

  handleFormSubmit("#contactForm", "send_email.php");
  handleFormSubmit("#modalContactForm", "send_email.php");
});
