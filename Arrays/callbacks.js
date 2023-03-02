const nomes = ["Evaldo", "Mari", "Camila"];

nomes.forEach(function(nome){
    console.log(nome);
});

// Arrow Function é a mais utilizada no mercado de JS
nomes.forEach((nome) =>{
    console.log(nome);
});

function imprimeNome(nome){
    console.log(nome);
};

nomes.forEach(imprimeNome);