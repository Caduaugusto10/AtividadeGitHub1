//O slice() ele volta uma cópia de uma parte de um array
//Dentro de um novo array
//Sem mudar o array original

let nomes = ['Francisco', 'Rosangela', 'Yasmin', 'Carlos'];
let copiarNomes = nomes.slice(1, 3);

console.log(copiarNomes);