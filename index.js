const productos = [
    {cod:1, nombre: "Guardapolvo Acrocel Blanco", precio: 3500},
    {cod:2, nombre: "Guardapolvo Acrocel Color", precio: 3600},
    {cod:3, nombre: "Guardapolvo Tropical Mecanica Blanca", precio:3700},
    {cod:4, nombre: "Guardapolvo Tropical Mecanica Blanca", precio:3800},
]
function mostrarProductos(productos) {
    for (const producto of productos) {
    console.log(producto);
    }
}

mostrarProductos(productos) //muestra por consola el listado de productos