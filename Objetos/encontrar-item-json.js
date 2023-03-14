const clientes = require("./clientes.json");

function encontrar(lista, chave, valor) {
    //O método Find nos retorna o item conforme a function que passamos para ele
    //O método includes do array tenta localizar o valor dentro de todas as posições do array de telefones e vai funcionar tb para o caso do nome.
    return lista.find((item => item[chave].includes(valor)));
}

const encontrado = encontrar(clientes, "nome", "Kirby");

const encontrado2 = encontrar(clientes, "telefone", "1918820860");

console.log(encontrado);