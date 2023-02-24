const alunos = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "Andre",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinícius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo",
];

// Metodo Slice retorna a lista dividida pela quantidade de posicoes que voce informar
// No caso abaixo dividimos a lista de aluno em 2, criando 2 salas com 10 alunos
const sala1 = alunos.slice(0, alunos.length / 2);
const sala2 = alunos.slice(alunos.length / 2);
// Obs Importante ! No segundo parâmetro, informamos o índice de um elemento e esse elemento não será incluído no novo array! Ou seja, ao colocar os parâmetro 0 e 10, estamos selecionando os alunos do índice 0 ao 9

console.log(sala1);
console.log(sala2);
