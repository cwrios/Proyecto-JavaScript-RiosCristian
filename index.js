const productos = [
    {cod:1, nombre: "Guardapolvo Acrocel Blanco", precio: 3500},
    {cod:2, nombre: "Guardapolvo Acrocel Color", precio: 3600},
    {cod:3, nombre: "Guardapolvo Tropical Mecanica Blanca", precio:3700},
    {cod:4, nombre: "Guardapolvo Tropical Mecanica Color", precio:3800},
]


const nombres = productos.map((producto) => producto.nombre)

console.log("Nombre de los productos: " + nombres) //muestras los nombres de los productos por consola

const productosConPrecioActualizado = productos.map((producto) => producto.precio*1.20)

console.log(productosConPrecioActualizado) //muestra el precio actualizado un 20% de aumento

const total = productos.reduce((acumulador, elemento) => acumulador + elemento.precio, 0)
alert("El valor total de los productos es: "+ total) // muestra por un alert el total de los valores de los productos

