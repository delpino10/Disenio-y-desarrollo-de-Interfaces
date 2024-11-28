function iniciarAnimacion() {

    let progreso = 0; // Progreso inicial
    const velocidad = 0.5; // Velocidad del incremento del progreso (porcentaje por "frame")
    let boton = document.querySelector("button")
    let porcentaje = document.querySelector("span")

    barraCarga = document.getElementById('barraCarga');
    mensaje = document.getElementById('mensaje');

    porcentaje.style.display = 'flex'

    boton.style.display = 'none'
    function actualizaBarra(){
        if (progreso <= 100){
                barraCarga.style.width = progreso + "%";
                porcentaje.textContent = progreso + "%";
                progreso++;
        }else{
            clearInterval(interval)
        }

    }
    const interval = setInterval(actualizaBarra, 50);


    mensaje.innerHTML = "¡Descarga Completada!";


}