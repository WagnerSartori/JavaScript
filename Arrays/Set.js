const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes); //O Set cria uma lista sem elementos duplicados ou seja, ele nao permite ter elementos iguais dentro dele.

const nomesAtualizados = [...meuSet]; //Aqui agente esta pegando os valores de Set e jogando em um Array.

//const nomesAtualizados = [...new Set(nomes)]; // Esta forma é a que precisa de menos codigo, substitui as duas linhas acima.

console.log(nomesAtualizados);