var currentNuberWapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNuberWapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNuberWapper.innerHTML = currentNumber;
}