function mostrarInformacionLugar(lugarSeleccionado) {
    var informacionLugar = document.getElementById('informacion-lugar');
    var nombreLugar = document.getElementById('nombre-lugar');
    var direccionLugar = document.getElementById('direccion-lugar');
    var mapaLugar = document.getElementById('mapa-lugar');
    var imagenLugar = document.getElementById('capilla');

    if (lugarSeleccionado === 'iglesia') {
        nombreLugar.textContent = 'Parroquia de Nuestra Señora de los Dolores';
        direccionLugar.textContent = 'Calle Ntra. Sra. de los Dolores, 72, 41006 Sevilla';
        mapaLugar.href = 'https://maps.app.goo.gl/UMiEKhfKHVnszDjk9';
        imagenLugar.src = 'images/dolores.jpg';
    } else {
        nombreLugar.textContent = 'Hacienda La Bodeguilla';
        direccionLugar.textContent = 'A-8052, km. 1, 8, 41927 Bollullos de la Mitación, Sevilla';
        mapaLugar.href = 'https://maps.app.goo.gl/Z4ZmmfDnWm2GpeNC7';
        imagenLugar.src = 'images/hacienda.jpeg';
    }

    informacionLugar.style.display = 'block';
}