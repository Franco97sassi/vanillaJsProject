import { guardarCarritoStorage } from "./storage.js";
import { pintarCarrito } from "./accionesCarrito.js";
import { actualizarTotalesCarrito } from "./actualizarCarrito.js";


const vaciarTodoElCarrito = (aVaciar) => {
    const carritoActual = JSON.parse(localStorage.getItem("carrito"))
    for (let i = carritoActual.length; i> 0; i--) {
        carritoActual.pop(i)
    }
    guardarCarritoStorage(carritoActual);
    pintarCarrito(carritoActual);
    actualizarTotalesCarrito(carritoActual);
}

export {vaciarTodoElCarrito};