let indice = 0;
const intervaloTiempo = 3000; // Tiempo en milisegundos (3 segundos)

function moverCarrusel(direccion) {
  const carrusel = document.querySelector('.carrucel-inner');
  const totalImagenes = 3;
  indice = (indice + direccion + totalImagenes) % totalImagenes;
  carrusel.style.transform = `translateX(${-indice *900}px)`;
}

function avanzarAutomaticamente() {
  moverCarrusel(1);
}

// Iniciar el avance automático
let intervalo = setInterval(avanzarAutomaticamente, intervaloTiempo);

// Detener el avance automático al interactuar con los botones
document.querySelector('.prev').addEventListener('click', () => {
  clearInterval(intervalo);
  moverCarrusel(-1);
  intervalo = setInterval(avanzarAutomaticamente, intervaloTiempo);
});

document.querySelector('.next').addEventListener('click', () => {
  clearInterval(intervalo);
  moverCarrusel(1);
  intervalo = setInterval(avanzarAutomaticamente, intervaloTiempo);
});
