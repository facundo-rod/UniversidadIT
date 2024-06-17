document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Previene el envío del formulario
        console.log("Formulario enviado");
        alert("Formulario enviado exitosamente");
        form.submit(); // Envía el formulario después de mostrar la alerta
    });
});
