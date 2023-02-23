// expressão de função

// Como podemos ver é uma função anonima, sem nome, ela esta vinculada a variavel const.
// Detalhe: O JS lê primeiro as functions e var antes de executar o código ou seja, no caso abaixo a declaracao da const tem que vir antes de ser chamada.
// HOISTING

console.log(soma(1, 1));

const soma = function (num1, num2) { return num1 + num2 };

// Qual a diferença principal ?

// Neste caso nao ocorreu erro no JS visto que a function é lida antes de executar o código
console.log(apresentar());

function apresentar() {
    return "Olá";
}



