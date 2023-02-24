const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

console.log(listaDeAlunosEMedias);

console.log(
  //O Primeiro parametro diz qual a lista será acessada, o segundo diz qual posicao será acessa da lista informada no primeiro parametro
  `A Aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}
  A nota dessa aluna é ${listaDeAlunosEMedias[1][1]}
  `
);
