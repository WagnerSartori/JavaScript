var lista = [1, 4, 7, 2, 10, 23, 3];

function comparaNumeros(a, b) {
    console.log(a + ' ' + b);
    if (a == b) return 0; if (a < b) return -1; if (a > b) return 1;
}

console.log(lista.sort(comparaNumeros));