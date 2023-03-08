const cliente = {
    nome: "André",
    idade: 32,
    cpf: "12356786590",
    email: "andre@dominio.com",
}

//É possivel utilizar conchetes para acessar a propriedade também, ela é utilizada para acessar propriedades na quais nao sabemos que existem
console.log(`Meu nome é ${cliente["nome"]} e tenho ${cliente['idade']} anos`);

//É possivel que voce receba um array com as propriedades do objeto
const chaves = ["nome", "idade", "cpf", "email", "altura"];

//Lendo as propriedades que foram recebidas
chaves.forEach( (chave) => {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
} )