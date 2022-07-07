class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
}

const guardAB = new Producto("Guardapolvo Acrocel Blanco", 3500);
const guardAC = new Producto("Guardapolvo Acrocel Color", 3600);
const guardTMB = new Producto("Guardapolvo Tropical Mecanica Blanca", 3700);
const guardTMC = new Producto("Guardapolvo Tropical Mecanica Color", 3800);

let totalProductos = 0
let carrito = [];


function multiplicacion(x, y) {
    let resultado = x * y;
    return resultado;
}

function resta(x, y) {
    let resultado = x - y;
    return resultado;
}

function suma(x, y) {
    let resultado = x + y;
    return resultado;
}

function revisarCarrito() {

    alert("Los productos en su carrito son:\n" + carrito.join("\n") + "\n Total a pagar: $" + totalProductos)
}

function usuario() {
    nombreUsuario = prompt("Ingrese su nombre por favor")
    while (nombreUsuario === "") {
        nombreUsuario = prompt("Ingrese su nombre por favor")
    }
}

function mostrarTotal(resultado) {
    alert("El total a pagar de tu compra es: $" + resultado + "\n ¡¡Gracias por tu compra!!");
}

function menu() {
    let opcion = 0;

    do {
        opcion = parseInt(prompt("Hola Bienvenido " + nombreUsuario + ", seleccione una opcion para continuar. (ESC para salir)\nEn el carrito hay actualmente " + carrito.length + " Productos.\n 1.Agregar productos al carrito\n 2.Pagar el total de la compra\n 3.Reiniciar carrito\n 4.Mostrar productos dentro del carrito"));

        switch (opcion) {
            case 1:
                agregarProducto()
                return menu()
            case 2:
                metodoPago()
                return mostrarTotal(totalProductos)
            case 3:
                reinicioCarrito()
                return menu()
            case 4:
                revisarCarrito()
                return menu()
            default:
                alert("seleccione una opcion valida!!")

        }
    } while (opcion !== "")
}

function agregarProducto() {
    let seleccionarProducto = 0
    do {
        seleccionarProducto = parseInt(prompt("Seleccione el producto que desea agregar al carrito.\n su total hasta ahora es $" + totalProductos + "\n Actualmente hay " + carrito.length + " productos en el carrito.\n 1.Guardapolvo Acrocel Blanco $3500\n 2.Guardapolvo Acrocel Color $ 3600\n 3.Guardapolvo Tropical Mecanica Blanca $ 3700\n 4.Guardapolvo Tropical Mecanica Color $ 3800\n 0.Volver al menu anterior."));

        if (seleccionarProducto === 1) {
            totalProductos = suma(totalProductos, guardAB.precio)
            carrito.push('Guardapolvo Acrocel Blanco $3500')
        }
        if (seleccionarProducto === 2) {
            totalProductos = suma(totalProductos, guardAC.precio)
            carrito.push('Guardapolvo Acrocel Color $ 3600')
        }
        if (seleccionarProducto === 3) {
            totalProductos = suma(totalProductos, guardTMB.precio)
            carrito.push('Guardapolvo Tropical Mecanica Blanca $ 3700')
        }
        if (seleccionarProducto === 4) {
            totalProductos = suma(totalProductos, guardTMC.precio)
            carrito.push('Guardapolvo Tropical Mecanica Color $3800')
        }
        if (seleccionarProducto >= 5) {
            alert("Seleccione por favor una opcion valida")
        }

    } while (seleccionarProducto !== 0)

}


function metodoPago() {
    let transferencia = totalProductos
    let efectivo = totalProductos * 0.90
    let credito = totalProductos * 1.10
    let metodoPago = 0

    metodoPago = parseInt(prompt("El total en el carrito es de: $" + totalProductos + "\nComo desea pagarlo?\n 1.Efectivo\n 2.Transferencia\n 3.Tarjeta de credito"));
    if (metodoPago === 1) {
        alert("Se ha aplicado un descuento del 10%");
        totalProductos = efectivo;

    }
    if (metodoPago === 2) {
        totalProductos = transferencia;

    }
    if (metodoPago === 3) {
        alert("Se ha aplicado un recargo del 10%");
        totalProductos = credito;

    }
    if (metodoPago >= 4) {
        alert("Seleccione una opcion valida")

    }
}

function reinicioCarrito() {
    alert("Se han eliminado todos los productos del carrito")
    totalProductos = multiplicacion(totalProductos, 0);
    carrito = []
}
const listaProductos = [
    {
    id: 1,
    nombre: "Guardapolvo Acrocel Blanco",
    precio: "3500"
    },
    {
    id: 2,
    nombre: "Guardapolvo Acrocel Color",
    precio: "3600"
    },
    {
    id: 3,
    nombre: "Guardapolvo Tropical Mecanica Blanco",
    precio: "3700"
    },
    { 
    id: 3,
    nombre: "Guardapolvo Tropical Mecanica Color",
    precio: "3800" },
];

const contenedorProductos = document.getElementById("contenedor-productos");

for (const producto of listaProductos) {
    let column = document.createElement("div");
    column.className = "col-md-4 mt-3 ";
    column.id = `columna-${producto.id}`;
    column.innerHTML = `
    <div class="card">
        <div class="card-body">
            <p class="card-text">Nombre: <b>${producto.nombre}</b></p>
            <p class="card-text">Precio compra: <b>${producto.precio}</b></p>
        </div>
    </div>`;

    contenedorProductos.append(column);
}


usuario()
menu()