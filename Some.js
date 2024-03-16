//O some() ele verifica se pelo menos um elemento do array passa no teste 
//Pela funçaõ fornecida
//Se passar no teste será TRUE e se não passar no teste será FALSE

let numeros = [2, 4, 6, 8];
let numerosDivisiveis = numeros.some(numeros => numeros % 2 === 0);//Se tiver algum numero que dividido por 2 der 0 sera 

console.log(numerosDivisiveis);