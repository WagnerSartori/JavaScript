const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20",
  aliado: {
    nome: "Saruman",
    classe: "mago",
  },
  status: "desaparecido",
};

delete objPersonagem.aliado;
delete objPersonagem["status"];

console.log(objPersonagem.aliado); //undefined
console.log(objPersonagem.status); //undefined

// ---------------------------------------------------------

const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]

//É importante notar que o Delete não retorna false se tentarmos remover, por exemplo, uma propriedade que não existe no objeto
console.log(delProp) //true
console.log(delPropInexistente) //true
