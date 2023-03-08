const notas = [7, 7, 8, 9];

// Particularidade do JS, ao receber um array desta forma ele sempre altera a origem ou seja, alterado um você acaba alterando o outro.
//const novasNotas = notas;  ***

const novasNotas = [3, ...notas, 10]; // Desta forma ele faz apenas uma copia. Esse comando ainda possibilita incremente novos valores. // spread operator ... (ou operador de espalhamento)

//novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);
