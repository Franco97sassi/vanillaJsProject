import { eliminarProductoCarrito } from "./accionesCarrito.js";
import { obtenerCarritoStorage } from "./storage.js";
import { guardarCarritoStorage} from "./storage.js";
import { pintarCarrito } from "./accionesCarrito.js";
import { actualizarTotalesCarrito } from "./actualizarCarrito.js";
import { vaciarTodoElCarrito } from "./vaciarCarrito.js";

const modalContenedor = document.querySelector('.modal-contenedor');
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito')
const vaciarCarrito = document.querySelector('.vaciar-carrito');

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click()
});

modalCarrito.addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.target.classList.contains('boton-eliminar')) {
        Swal.fire({
            title: '¿Esta seguro?',
            text: 'Va a eliminar el producto',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarProductoCarrito(e.target.value);
                Swal.fire(
                    'Eliminado',
                    'El producto ha sido eliminado',
                    'success'
                )
            }
        })
    }
});

vaciarCarrito.addEventListener("click", (e) => {
    e.stopPropagation();
    const existeElemento = document.getElementById("contador-carrito");
    if (e.target.classList.contains('vaciar-carrito')) {
        if (existeElemento.innerText > 0) {
        Swal.fire({
            title: '¿Esta seguro?',
            text: 'Va a vaciar el carrito',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Vaciar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                vaciarTodoElCarrito();
                Swal.fire(
                    'Hecho',
                    'El carrito se vació',
                    'success'
                )
            }
        })
    }
    else {
        Swal.fire({
            title: 'Vacío',
            text: 'El carrito de compra ya está vacío',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Volver',
    }
)}}});
