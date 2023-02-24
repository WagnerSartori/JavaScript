// Uma higher order function é uma função que recebe uma outra como argumento, ou uma função que retorna outra função.
const acesso = (nome) => {
    return `${nome} logou com sucesso no sistema!`
}

const autentica = (cargo) => {
    let array = []
    for (i = 0; i < cargo; i++) {
        array.push(i)
    }
    return true;
}

//Higher order function, como podemos ver a arrow function abaixo esta recebendo a arrow function 'autentica' por parametro
const login = (pessoa, autentica) => {
    if (pessoa.cargo === `funcionario`) {
        autentica(90000)
    } else if (pessoa.cargo === `diretoria`) {
        autentica(900000)
    }
    return acesso(pessoa.nome)
}
                   //Objeto com 2 atributos, cargo e nome
console.log(login({cargo: "diretoria", nome: "Leia"}, autentica));