// solução 1
function verificaPalindromo(string){
    if (!string) return false;

    return string.split("").reverse().join("") === string;
}

// myString = "ovo";

// console.log(verificaPalindromo(myString));

// Solução 2 
function verificaPalindromo2(string){
    if (!string) return false;

    for(let i = 0; i < string.length / 2; i++){
        if (string[i] !== string[string.length - 1 -i]){
            return false;
        }
    }
    return true;
}

myString = ""

let ePalindromo = verificaPalindromo(myString) ?  "É palindromo" : "Não é palindromo";
console.log(ePalindromo);
ePalindromo = verificaPalindromo2(myString) ?  "É palindromo" : "Não é palindromo";
console.log(ePalindromo);