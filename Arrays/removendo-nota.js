const notas = [10, 6, 8, 5.5, 10];

// Remove ultimo valor do array
notas.pop();

const media = (notas[0] + notas [1] + notas[2] + notas[3]) / notas.length;

console.log(notas);

console.log(`A média é ${media}`);