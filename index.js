class Producto {
    constructor(id, nombre, img, precio) {
        this.id = id;
        this.nombre = nombre;
        this.img = img;
        this.precio = precio;
    }
}
class Carrito {
    constructor(id) {
        this.id = id;
        this.productos = [];
    }
    calcularTotal() {
        let total = 0;
        for (let i = 0; i < this.productos.length; i++) {
            total = total + this.productos[i].precio;
        }
        return total;
    }
}

function limpiarCarrito() {
    let divCarrito = document.querySelector("#carrito");
    divCarrito.innerHTML = "";
}

function actualizarCarrito(carrito) {

    let divCarrito = document.querySelector("#carrito");
    carrito.productos.forEach(producto => {
        divCarrito.innerHTML += renderCarrito(producto);
    })
    divCarrito.innerHTML += `<h1>Precio total $ ${carrito.calcularTotal()}</h1>`

}

function renovarStorage() {
    localStorage.removeItem("carrito");
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
window.addEventListener(`DOMContentLoaded`, (e) => {

    let storage = JSON.parse(localStorage.getItem("carrito"));
    let carritoGuardado = new Carrito(storage.id, storage.productos);
    storage.productos.forEach(producto => {
        carritoGuardado.productos.push(producto);
    })

    limpiarCarrito();
    actualizarCarrito(carritoGuardado);

});


let catalogoProductos = [];

let producto1 = new Producto(1, "Guardapolvo Acrocel Blanco", "acrocel_blanco.jpeg", 3500);
let producto2 = new Producto(2, "Guardapolvo Acrocel Color", "acrocel_color.jpeg", 3600);
let producto3 = new Producto(3, "Guardapolvo Tropical Mecanica Blanco", "tropical_mec_blanca.jpeg", 3700);
let producto4 = new Producto(4, "Guardapolvo Tropical Mecanica Color", "tropical_mec_color.jpeg", 3800);

catalogoProductos.push(producto1);
catalogoProductos.push(producto2);
catalogoProductos.push(producto3);
catalogoProductos.push(producto4);

let cardsDiv = document.querySelector("#cards");


catalogoProductos.forEach(producto => {
    cardsDiv.innerHTML += renderCard(producto);
})

function renderCard(producto) {
    let cardRendered = `
<div class="card m-3" style="width: 18rem;">
    <img src="./img/${producto.img}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${producto.id}.${producto.nombre}</h5>
        <p class="card-text">$ ${producto.precio}</p>
        <a href="#" class="btn btn-primary botonDeCompra" id="${producto.id}">Agregar al carrito</a>
    </div>
</div>
`;
    return cardRendered;
}

function renderCarrito(producto) {
    let carritoRendered = `
    <table class="table">
    <thead>
            <tr>
                <th scope="col">Producto ID</th>
                <th scope="col">Nombre Producto</th>
                <th scope="col">Precio</th>
            </tr>
    </thead>
    <tbody>
    <tr>
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>$ ${producto.precio}</td>
        
    </tr>
    
    </tbody>
    </table>
`;
    return carritoRendered;
}


let carrito = new Carrito(1);

let botones = document.querySelectorAll(".botonDeCompra");
let arrayDeBotones = Array.from(botones)

arrayDeBotones.forEach(boton => {
    boton.addEventListener("click", (e) => {
        let productoSeleccionado = catalogoProductos.find(producto => producto.id == e.target.id);
        carrito.productos.push(productoSeleccionado);
        limpiarCarrito();
        actualizarCarrito(carrito)
        renovarStorage()

    })

})
botonVaciar.addEventListener("click", () => {
    carrito.producto.length = 0;
    limpiarCarrito();
    total();
    renovarStorage();
});

const botonBorrar = document.querySelectorAll(".botonBorrar");
const arrayDeBotonBorrar = Array.from(botonBorrar);
arrayDeBotonBorrar.find((boton) => {
    boton.addEventListener("click", (e) => {
        const item = carrito.producto.find(
            (producto) => producto.id == e.target.id
        );
        console.log(item);
        const indice = carrito.producto.indexOf(item);
        carrito.producto.splice(indice, 1);
        limpiarCarrito();
        actualizarCarrito(carrito);
        total();
    });
});
