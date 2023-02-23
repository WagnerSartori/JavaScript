const nome = "Blade";
const idade = 2023-1988;
const cidadeNascimento = "Caxias do Sul";

// Forma padrão das linguagens
//const apresentacao = "Meu nickname é " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadeNascimento;

// Template String do JS
const apresentacao = `Meu nickname é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeNascimento}`;

console.log(apresentacao);

const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`;
console.log(pedido);