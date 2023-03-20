const modalidades = require("./ttModalidade.json");

function encontrar(lista, chave, valor) {
    //O método Find nos retorna o item conforme a function que passamos para ele
    //O método includes do array tenta localizar o valor dentro de todas as posições do array de telefones e vai funcionar tb para o caso do nome.
    //SOMENTE SE DEVE UTILIZAR O METODO INCLUDES SE VOCE TIVER UM ARRAY DENTRO DO SEU OBJETO
    return lista.find((item => item[chave] === valor));
}

const encontrado = encontrar(modalidades.ttModalidade, "cd-modalidade", 5);

console.log(encontrado);
