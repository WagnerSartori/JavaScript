const clientes = require("./clientes.json");

function apartamentosSemComplemento(clientes) {
  return clientes.filter((cliente) => { //Funcao Filter retorna o item valido conforme condição
    return (
      cliente.endereco.apartamento &&
      !cliente.endereco.hasOwnProperty("complemento")
    );
  });
}

const filtrados = apartamentosSemComplemento(clientes);

console.log(filtrados);
