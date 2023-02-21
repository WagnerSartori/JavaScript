// tipo de dado
// booleans 

// conversão implicita
const numero = 7;
const numeroString  = "7"; // 1 igual é somente para armazenar valores

console.log(numero === numeroString); // 3 igual é para comparar o valor das variáveis e também o tipo da variável 
console.log(numero == numeroString); // 2 igual é para apenas comparar o valor das variáveis

console.log(numero + numeroString); // Vai concatenar e nao somar visto que a numeroString é uma string

// conversão explicita

console.log(numero + Number(numeroString)); // Dessa forma fez a soma correta, visto que a variavel numeroString foi transformada em um Number
