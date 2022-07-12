
const listaProductos = [
    {
    id: 1,
    nombre: "Guardapolvo Acrocel Blanco",
    precio: "3500",
    boton: "comprar.1"
    },
    {
    id: 2,
    nombre: "Guardapolvo Acrocel Color",
    precio: "3600",
    boton: "comprar.2"
    },
    {
    id: 3,
    nombre: "Guardapolvo Tropical Mecanica Blanco",
    precio: "3700",
    boton: "comprar.3"
    },
    { 
    id: 4,
    nombre: "Guardapolvo Tropical Mecanica Color",
    precio: "3800",
    boton: "comprar.4" 
    },
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
            <p class="card-text">Precio: <b>${producto.precio}</b></p>
            <button class="btn btn-primary" id=${producto.boton}> ${producto.boton} </button>
        </div>
    </div>`;

    contenedorProductos.append(column);
}
let botonUno = document.getElementById("comprar.1")
    botonUno.onclick = () =>{
        console.log(listaProductos[0])
        alert("Has comprado un: " + listaProductos[0].nombre + " al precio de: $" + listaProductos[0].precio)
    }

    let botonDos = document.getElementById("comprar.2")
    botonDos.onclick = () =>{
        console.log(listaProductos[1])
        alert("Has comprado un: " + listaProductos[1].nombre + " al precio de: $" + listaProductos[1].precio)
    }

    let botonTres = document.getElementById("comprar.3")
    botonTres.onclick = () =>{
        console.log(listaProductos[2])
        alert("Has comprado un: " + listaProductos[2].nombre + " al precio de: $" + listaProductos[2].precio)
    }
    let botonCuatro = document.getElementById("comprar.4")
    botonCuatro.onclick = () =>{
        console.log(listaProductos[3])
        alert("Has comprado un: " + listaProductos[3].nombre + " al precio de: $" + listaProductos[3].precio)
    }




usuario()
menu()