// Función para mostrar/ocultar el campo de texto de intolerancia alimenticia
function mostrarIntoleranciaDetalle() {
    var intoleranciaDetalle = document.getElementById('intolerancia-detalle');
    intoleranciaDetalle.style.display = (document.querySelector('input[name="intolerancia"]:checked').value === 'si') ? 'block' : 'none';
}

// Función para mostrar/ocultar el campo de detalles de acompañantes
function mostrarAcompanantesDetalle() {
    var acompanantesDetalle = document.getElementById('acompanantes-detalle');
    acompanantesDetalle.style.display = (document.querySelector('input[name="acompanantes"]:checked').value === 'si') ? 'block' : 'none';
}

// Función para mostrar/ocultar el campo de detalles de autobuses
function mostrarAutobusesDetalle() {
    var autobusesDetalle = document.getElementById('autobuses-detalle');
    var radioAutobusesNo = document.getElementById('no'); // Asegúrate de que el radio "No" tenga un ID
    autobusesDetalle.style.display = (radioAutobusesNo.checked) ? 'none' : 'block';
}


// Llama a las funciones al cargar la página y asigna los eventos de cambio
document.addEventListener('DOMContentLoaded', function () {
    // Asigna el evento de cambio al campo "intolerancia"
    var radiosIntolerancia = document.querySelectorAll('input[name="intolerancia"]');
    radiosIntolerancia.forEach(function (radio) {
        radio.addEventListener('change', mostrarIntoleranciaDetalle);
    });


    // Asigna el evento de cambio al campo "acompanantes"
    var radiosAcompanantes = document.querySelectorAll('input[name="acompanantes"]');
    radiosAcompanantes.forEach(function (radio) {
        radio.addEventListener('change', mostrarAcompanantesDetalle);
    });

     // Asigna el evento de cambio al campo "autobuses"
     var radiosAutobuses = document.querySelectorAll('input[name="autobuses"]');
     radiosAutobuses.forEach(function (radio) {
         radio.addEventListener('change', mostrarAutobusesDetalle);
     });

    // Inicia la cuenta atrás
    actualizarCuentaAtras();

     // Muestra los detalles de autobuses al cargar la página
     mostrarAutobusesDetalle();
});