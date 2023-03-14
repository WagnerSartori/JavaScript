const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [
  {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
  },
];

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
  console.log(`Ligando para ${telefoneComercial}`);
  console.log(`Ligando para ${telefoneResidencial}`);
}

//Como podemos ver, aqui ele espalhou as informações do array, que são 2.
ligaParaCliente(...cliente.telefone);

//Neste caso foi espalhado todas as chaves o objeto cliente.enderecos.
const encomenda = {
  destinatario: cliente.nome,
  ...cliente.enderecos[0],
};

console.log(encomenda);
