const fichaGuerreiro = {
  nome: "Aragorn",
  classe: "guerreiro",
};

const equipoGuerreiro = {
  espada: "Andúril",
  capa: "capa élfica +2",
};

//Desta forma ele vai dividir em 2 chaves com atributos e nao espalhar
//const guerreiro = { fichaGuerreiro, equipoGuerreiro }
//console.log(guerreiro)

const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log(guerreiro)