function iniciarAnimacion() {

    let progreso = 0; // Progreso inicial
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
            mensaje.innerHTML = "¡Descarga Completada!";
        }

    }
    const interval = setInterval(actualizaBarra, 30);




}