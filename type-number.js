const valor1 = 1;
const valor2 = 5;

function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes);

    const total = salarioHora.toFixed(2);

    return total;

};

console.log(valor1 * valor2);

const pontoflutuante = 5.7;

const operacaoMatematica = (valor1 / pontoflutuante);

console.log(operacaoMatematica);

// NaN -> Not A Number (Nao é um numero)

const alura = 'Alura';

console.log(alura * valor2);

// ------------------------------------

console.log(ganhoPorHora(11700, 180)); 