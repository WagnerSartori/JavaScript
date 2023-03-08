const cliente = {
    nome: "André",
    idade: 32,
    cpf: "12356786590",
    email: "andre@dominio.com",
}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos`);

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);