const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {  //Verifica se o valor existe dentro do Array

        // const alunos = listaDeAlunosEMedias[0]; //Separamos o Array de 2 dimensoes em arrays únicos para ficar mais facil enteder a lógica
        // const medias = listaDeAlunosEMedias[1];

        const [alunos, medias] = listaDeAlunosEMedias; // Essa lógica substitui as 2 declarações de const acima, lógica nova do JS. // sintaxe de desestruturação de listas

        const indice = alunos.indexOf(aluno); //Retorna a posicao deste valor dentro do Array
        const mediaAluno = medias[indice]; //Utiliza essa posicao para localizar o valor no outro Array, é quase como a chave de uma tabela para relacionar

        console.log(`${aluno} está cadastrado e sua nota é ${mediaAluno}`);
        
    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("Ana");