
// Parâmetros/Argumentos de Função
function soma(num1, num2){
    return num1 + num2;
}

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

// É possível colocar um valor no parametro para casos em que nao seja informado o valor do parametro na chamada na função
function multiplica(num1 = 1, num2 = 1){
    return num1 * num2;
}

console.log(soma(5,8));
console.log(soma(5,89));
console.log(soma(-145,8));

console.log(nomeIdade("Wagner", 34));

console.log(multiplica(soma(2,3), soma(5,7)));

console.log(multiplica(soma(2,3)));