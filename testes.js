var lista = [1, 4, 7, 2, 10, 23, 3];

function comparaNumeros(a, b) {    
    if (a == b) return 0; if (a < b) return -1; if (a > b) return 1;
}

console.log(lista.sort(comparaNumeros));

// --------------------------------------------------------

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area);
// var area;

// let forma = "retangulo";
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === "retangulo") {
//     area = altura * comprimento;
// } else {
//     area = (altura * comprimento) / 2;
// }

// console.log(area);

const forma = "triangulo";
const altura = 5;
const comprimento = 7;
let area;

if (forma === "quadrado") {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);
