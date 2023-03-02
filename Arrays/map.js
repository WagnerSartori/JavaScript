const notas = [10, 9.5, 8, 7, 6];

// O Map é muito apropriado para reescrever Arrays
const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1; //Incrementa 1 através do ternario no Array
    //return nota + 1; // Incrementa 1 para cada valor do Array
});

console.log(notasAtualizadas);
