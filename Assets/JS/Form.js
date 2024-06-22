document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Previene el envio del formulario
        console.log("Formulario enviado");
        alert("Formulario enviado exitosamente");
        form.submit(); // Envia el formulario despues de mostrar la alerta
    });
});
