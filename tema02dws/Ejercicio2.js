"use strict";
function calcularMedia(valor1,valor2,valor3){
return (valor1+valor2+valor3)/3;
}
let mediaJuan;
let mediaMiguel;
let mediaMaria;
console.log(`La media del equipo de Juan es ${mediaJuan=calcularMediaç(89,120,103)}`);
console.log(`La media del equipo de Juan es ${mediaMiguel=calcularMediaç(116,94,123)}`);
console.log(`La media del equipo de Juan es ${mediaMaria=calcularMediaç(97,134,105)}`);

function calcularMejorMedia(mediaJuan,mediaMiguel,mediaMaria){
    if (mediaJuan>mediaMiguel && mediaJuan>mediaMaria){
    return `La mejor media es del equipo de Juan y es de ${mediaJuan}`;
    }
 else if(mediaMiguel>mediaJuan && mediaMiguel>mediaMaria){
    return `La mejor media es del equipo de Miguel y es de ${mediaMiguel}`;
   }
  else if(mediaMaria>mediaJuan && mediaMaria>mediaMiguel){
    return  `La mejor media es del equipo de Miguel y es de ${mediaMaria}`;
  }
  else{
    return `Ha habido un empate entre las medias no se puede determinar el ganador`;
  }    
}
console.log(calcularMejorMedia(mediaJuan,mediaMiguel,mediaMaria));