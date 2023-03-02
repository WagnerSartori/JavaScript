const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

//Metodo Filter, serve para filtrar os registros do array, basta retornar true para a funcao para ela considerar o registro.
const reprovados = alunos.filter((_, indice) => {
                                //Utlizando underline no parametro o JS entende que nao será utilizado este parametro, desta forma você conseguira utulizar o segundo parametro como no exemplo
    return medias[indice] < 7;
});

console.log(reprovados);
