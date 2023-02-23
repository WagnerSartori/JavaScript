// Função Padrão
function apresentar(nome) {
    return `Meu nome é ${nome}`;
}

console.log(apresentar("Wagner"));

// Arrow Function
// Cuidar com o Hoisting
const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

console.log(apresentarArrow("Blade"));
console.log(soma(47,189));

// Arrow Function com + de 1 linha de instrução
const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10){
        return "somente números de 1 a 9"
    } else {
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos(4,7));