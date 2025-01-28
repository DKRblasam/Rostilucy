"use strict";
// Función para redirigir
function redirigir(start) {
    // Calcular el tiempo transcurrido
    const tiempoLimite = 1000;
    let redirect = true;
    // Configurar el temporizador para redirigir
    setTimeout(function () {
        window.location.href = "./frontend/pages/index.html";
    }, tiempoLimite);
    const end = new Date().getTime() - start.getTime();
    redirect = end > tiempoLimite ? true : false;
    if (redirect) {
        // Configurar el temporizador para mostrar el mensaje
        setTimeout(function () {
            // Mostrar mensaje
            const mensajeElement = document.getElementById("mensaje");
            if (mensajeElement) {
                mensajeElement.style.display = "block";
            }
        }, tiempoLimite);
    }
}
