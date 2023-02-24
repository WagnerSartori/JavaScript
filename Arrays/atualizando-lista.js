const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// Splice - Juntar - O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
// A primeiro parametro indica a partir de qual posicao vamos remover os itens e o segundo indica a quantidade, o terceiro parametro coloca um valor no lugar dos itens removidos
nomes.splice(1, 2, "Rodrigo");

console.log(nomes);
