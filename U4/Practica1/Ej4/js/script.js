// script.js
function iniciarDescarga() {

let progreso = 0; // Progreso inicial
const velocidad = 0.5; // Velocidad del incremento del progreso (porcentaje por "frame")
let barraCarga, mensaje

    // Elementos de la barra de carga
    barraCarga = document.getElementById('barraCarga');
    mensaje = document.getElementById('mensaje');

    // Ocultar el botón de inicio de descarga
    document.querySelector("button").style.display = "none";

    // Mensaje de inicio
    mensaje.innerHTML = "Descargando...";

    // Llamamos a la función de animación
    animarDescarga();
}

function animarDescarga() {
    // Aumentamos el progreso en cada frame
    progreso += velocidad;

    // Actualizamos la barra de carga
    barraCarga.style.width = progreso + "%";

    // Continuamos si el progreso es menor al 100%
    if (progreso < 100) {
        requestAnimationFrame(animarDescarga); // Llamada recursiva a requestAnimationFrame
    } else {
        mensaje.innerHTML = "¡Descarga Completa!";
    }
}
