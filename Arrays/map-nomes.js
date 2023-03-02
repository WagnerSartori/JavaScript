const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

// Esta forma de declarar a arrow function é bastante utilizada, como podemos ver nao foi necessário as chaver e por isso nao precisa do return.
const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomesPadronizados);