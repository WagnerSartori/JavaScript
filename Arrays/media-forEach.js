const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

// O forEach é o mais utilizado no mercado de JS
notas.forEach(function(tantofaz, tantofaz2) {
    somaDasNotas += tantofaz;
    console.log(tantofaz2);
});

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`);

