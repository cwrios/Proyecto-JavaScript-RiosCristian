function mostrarMenu() {
    let opcion = prompt("Bienvenidos a Guardapolvos Vero Ruiz!! \n Elija el modelo de guardapolvo que quiere comprar\n 1. Guardapolvo Acrocel blanco $3500 \n 2. Guardapolvo Acrocel Color $3600 \n 3. Guardapolvo Tropical Mecanica Blanca $3700 \n 4. Guardapolvo Tropical Mecanica Color $3800 \n 5. Salir")
    return opcion;
}
function multiplicar(x , y){
    let totalCompra = x * y;
    return totalCompra;
}
function mostrarCompra(totalCompra){
    alert("El total de su compra es: " +totalCompra)
}
function calcularCompra(){
    let opcionElegida = mostrarMenu()

    while (opcionElegida !== "5"){
        if (opcionElegida !==""){
            let cantidadProd = parseFloat(prompt("Ingresa la cantidad que queres comprar: "))
            opcionElegida = parseInt(opcionElegida)

            switch(opcionElegida){
                case 1:
                let total1 = multiplicar("3500", cantidadProd)
                mostrarCompra(total1)
                break;
                case 2:
                let total2 = multiplicar("3600", cantidadProd)
                mostrarCompra(total2)
                break;
                case 3:
                let total3 = multiplicar("3700", cantidadProd)
                mostrarCompra(total3)
                break;
                case 4:
                let total4 = multiplicar("3800", cantidadProd)
                mostrarCompra(total4)
                break;

                default:
                    alert("Opcion Incorrecta")
                    break;
            }
        } else{

            alert("Seleccione la opcion")
        }
    
        opcionElegida=mostrarMenu()
    }
}

calcularCompra()