"use strict";
// Seleccionamos la barra de navegación
const navbar = document.getElementById('navbar');
// Agregamos un evento de desplazamiento (scroll)
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.classList.add('shrink'); // Se agrega la clase 'shrink' al hacer scroll
    }
    else {
        navbar.classList.remove('shrink'); // Se quita la clase 'shrink' al volver al inicio
    }
});
