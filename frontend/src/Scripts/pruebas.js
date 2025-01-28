// js/script.js

// Función para crear una tarjeta de producto
function crearTarjetaProducto(producto) {
  // // Crear elementos
  // const tarjeta = document.createElement('div');
  // tarjeta.classList.add('tarjeta');

  // const imagen = document.createElement('img');
  // imagen.src = producto.imagen;
  // imagen.alt = producto.nombre;

  // const nombre = document.createElement('h3');
  // nombre.textContent = producto.nombre;

  // const descripcion = document.createElement('p');
  // descripcion.textContent = producto.descripcion;

  // const precio = document.createElement('p');
  // precio.classList.add('precio');
  // precio.textContent = producto.precio;

  // // Agregar elementos a la tarjeta
  // tarjeta.appendChild(imagen);
  // tarjeta.appendChild(nombre);
  // tarjeta.appendChild(descripcion);
  // tarjeta.appendChild(precio);

  // return tarjeta;

    // Crear elementos
  const tarjeta = document.createElement('div');
  tarjeta.classList.add('card');

  const heading = document.createElement('div');
  heading.classList.add('heading');
  heading.textContent = producto.nombre;

  const details = document.createElement('div');
  details.classList.add('details');
  details.textContent = producto.descripcion;

  const price = document.createElement('div');
  price.classList.add('price');
  price.textContent = producto.precio;

  const btn1 = document.createElement('button');
  btn1.classList.add('btn1');
  btn1.textContent = "Buy";

  const btn2 = document.createElement('button');
  btn2.classList.add('btn2');
  btn2.textContent = "Add to Cart";

  const glasses = document.createElement('svg');
  glasses.classList.add('glasses');
  glasses.setAttribute('version', '1.1');
  glasses.setAttribute('id', 'Layer_1');
  glasses.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  glasses.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
  glasses.setAttribute('x', '0px');
  glasses.setAttribute('y', '0px');
  glasses.setAttribute('width', '100px');
  glasses.setAttribute('height', '100px');
  glasses.setAttribute('viewBox', '0 0 100 100');
  glasses.setAttribute('xml:space', 'preserve');

  const image = document.createElement('image');
  image.setAttribute('id', 'image0');
  image.setAttribute('width', '100');
  image.setAttribute('height', '100');
  image.setAttribute('x', '0');
  image.setAttribute('y', '0');
  image.setAttribute('href', producto.imagen);

  glasses.appendChild(image);

  tarjeta.appendChild(heading);
  tarjeta.appendChild(details);
  tarjeta.appendChild(price);
  tarjeta.appendChild(btn1);
  tarjeta.appendChild(btn2);

  return { tarjeta, glasses };


}

// Función para cargar los productos desde un archivo JSON
async function cargarProductos() {
  try {
    const respuesta = await fetch('../config/backend/Data/productos.json');
    if (!respuesta.ok) {
      throw new Error(`HTTP error! Status: ${respuesta.status}`);
    }
    const productos = await respuesta.json();

    const contenedor = document.getElementById('contenedor-tarjetas');

    productos.forEach(producto => {
      console.log(producto);
      const tarjeta = crearTarjetaProducto(producto);
      contenedor.appendChild(tarjeta);
    });
  } catch (error) {
    console.error('Error al cargar los productos:', error);
  }
}

// Llamar a la función para cargar los productos al cargar la página
document.addEventListener('DOMContentLoaded', cargarProductos);
