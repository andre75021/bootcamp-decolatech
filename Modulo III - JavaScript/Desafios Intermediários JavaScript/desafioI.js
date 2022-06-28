const raio = 3
const PI = 3.14159;

function calculaVolume(r){
    return (4 * PI * (r**3)) / 3;
}

console.log('Volume = ' + calculaVolume(raio).toFixed(3));