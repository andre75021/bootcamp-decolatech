// Caculo da área de um circulo
let raio = 2.00;

function calculaArea(raio){
    const pi = 3.14159;
    return pi * (raio ** 2);
}

console.log("A = " + calculaArea(raio).toFixed(4));