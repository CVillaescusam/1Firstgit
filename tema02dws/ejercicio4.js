function calcularPrecio(nProducto="Producto genérico",precio=100,impuesto=21){
let precioFinal = precio + ((precio*impuesto)/100);
return `El precio del producto ${nProducto} es de ${precioFinalrecio}`
}

console.log(calcularPrecio());