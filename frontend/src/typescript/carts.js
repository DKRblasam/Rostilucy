import productosData from "../../../config/backend/Data/productos.json";

function crearTarjetaProducto(producto) {
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

document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById("tarjetas");

  if (contenedor) {
    productosData.forEach((producto) => {
      const { tarjeta, glasses } = crearTarjetaProducto(producto);
      contenedor.appendChild(tarjeta);
      contenedor.appendChild(glasses);
    });
  } else {
    console.error('Contenedor de tarjetas no encontrado');
  }
});