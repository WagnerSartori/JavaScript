const clientes = require("./clientes.json");

function ordenar(lista, propriedade) {
    const resultado = lista.sort((a,b) => {
        if (a[propriedade] < b[propriedade]) {
            return -1; //Por causa da ordem dos parametros da função sort, vamos retornar negativo visto que a é menor do que b ou seja, só retornaremos negativa quando o primeiro parametro for negativo !.
        }
        if (a[propriedade] > b[propriedade]) {
            return 1;
        }
        return 0;
    });

    return resultado;
}

const ordenadoNome = ordenar(clientes, "nome");

console.log(ordenadoNome);