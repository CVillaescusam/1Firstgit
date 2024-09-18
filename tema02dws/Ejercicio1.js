"use stricit";
function calcularImc(altura,masa){
return masa/(altura*altura);
}
let imcMarcos;
let imcJuan; 
//
console.log(`El imc de Marcos es ${imcMarcos=calcularImc(1.80,80)}`);
console.log(`El imc de Juan es ${imcJuan=calcularImc(1.70,70)}`);
//comparo los IMC de juan y marcos con el if
console.log(`¿Tiene Marcos un IMC mayor que el de Juan?:${imcMarcos>imcJuan ? true:false}`);
