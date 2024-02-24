      // Función para actualizar la cuenta atrás
      function actualizarCuentaAtras() {
        var fechaEvento = new Date("2025-05-03T11:00:00"); // Fecha y hora del evento en formato UTC
        var ahora = new Date();

        var tiempoRestante = fechaEvento - ahora;

        var dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
        var horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        var segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = "" + dias + "d " + horas + "h " + minutos + "m " + segundos + "s";

        // Actualiza la cuenta atrás cada segundo
        setTimeout(actualizarCuentaAtras, 1000);
    }