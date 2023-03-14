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

// Metodo Keys armazena todos as chaves(atributos) de um determinado objeto
const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

//Este ! na frente, inverte a validação, neste caso valida se o retorno é falso
if (!chavesDoObjeto.includes("enderecoss")) {
    console.error("Erro. É necessário ter um endereço cadastrado.");
}