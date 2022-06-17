// Cndicional if 

// if (condicao) {}
var inteiro = 10;
var verdade;
if (inteiro > 10){
    console.log('Maior que 10');
} else if (inteiro < 10){
    console.log('Menor que 10');
} else{
    console.log('São iguais');
}

// if ternario
inteiro > 10 ? console.log('Maior que 10') : console.log('Menor que 10');

// Switch
verdade = (inteiro > 10);

switch(verdade){
    case verdade == inteiro > 10:
        console.log('Maior que 10');
        break;
    case verdade == inteiro < 10:
        console.log('Menor que 10');
        break;
    default:
        console.log('Igual a 10');
}