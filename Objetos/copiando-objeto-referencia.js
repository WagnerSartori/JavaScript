const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }

   // Esta forma copia a referencia do objeto ou seja, utiliza o mesmo ponto na memória, oque eu alterar em um ele altera nos dois.
   //const objPersonagem2 = objPersonagem 

   //Desta forma conseguimos criar um objeto novo e um ponto novo da memória, serão 2 objetos distintos e sem referencia entre eles.
   const objPersonagem2 = Object.create(objPersonagem)
   objPersonagem2.nome = "Gandalf, o Cinzento"
   
   console.log(objPersonagem.nome) //Gandalf
   console.log(objPersonagem2.nome) //Gandalf, o Cinzento