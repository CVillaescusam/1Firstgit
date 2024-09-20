function imprimirNumero(vecesRepite,numero){
let resultado= numero;
for (let index = 0; index < vecesRepite; index++) {
    resultado += numero*2;
    return resultado ;

}
}
console.log(imprimirNumero(4,6));