const notas = [10, 6, 8];

// Mesmo sendo uma constante é possível incrementar a mesma visto que isto nao é uma nova atribuição e sim funções da própria lista.
// Adiciona um novo valor ao array
notas.push(7);

console.log(notas);

const media = (notas[0] + notas [1] + notas[2] + notas[3]) / notas.length;

console.log(media);