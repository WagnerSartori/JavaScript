//Ler arquivo JSON - Este comando transforma a const dados em um Objeto
const dados = require("./cliente.json");
//Require é uma função para ler um arquivo de outro lugar.

console.log(dados);
console.log(typeof dados); //Objeto

//Transforma objeto em JSON - String
const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString);

//Transforma arquivo JSON em Objeto
const objetoCliente = JSON.parse(clienteEmString);

console.log(objetoCliente);


