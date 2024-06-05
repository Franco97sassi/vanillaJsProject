import { guardarCarritoStorage } from "./storage.js";

const actualizarTotalesCarrito = (carrito) => {
    const totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    const subtotalCompra = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    const ivaCompra = carrito.reduce((acc, item) => acc + ((item.precio * item.cantidad) * 0.18), 0);  // IVA corresponde al % 18
    
    let costoEnvio = 0;
    
    if ((subtotalCompra + ivaCompra < 5000) && (subtotalCompra + ivaCompra > 1)) {
       costoEnvio = 200 + Math.round((subtotalCompra + ivaCompra) * 0.05);
    };
    
    const totalCompra = subtotalCompra + ivaCompra + costoEnvio;

    pintarTotalesCarrito(totalCantidad, subtotalCompra, ivaCompra, costoEnvio, totalCompra);
    guardarCarritoStorage(carrito);
};

const pintarTotalesCarrito = (totalCantidad, subtotalCompra, ivaCompra, costoEnvio, totalCompra) => {
  const contadorCarrito = document.getElementById("contador-carrito");
  const precioSubtotal = document.getElementById("precioSubtotal");
  const precioIVA = document.getElementById("precioIVA");
  const precioTotal = document.getElementById("precioTotal");
  const envio = document.getElementById("envio");

  contadorCarrito.innerText = totalCantidad;
  precioSubtotal.innerText = subtotalCompra;
  precioIVA.innerText = ivaCompra;
  precioTotal.innerText = totalCompra;
  
  if (totalCompra > 5000) {
  envio.innerText = "El envío de su compra es Gratis";
  }
  else {
    envio.innerText = "$ " + costoEnvio;
  }
};

export { actualizarTotalesCarrito };


