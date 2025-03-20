// Operadores relacionais
// Esses operadores são usados para comprar dois valores e retornanr um valor Lógico (verdadeiro = true / false = false)


let n1 = 35
let n2 = 5

// Igual a (==): Verifica se dois valores são iguais.

let igualdade = n1 == n2
console.log(igualdade)
console.log("----->")


console.log(5 == "5");
console.log("----->") // true (A string "5" é convertida para número 5)
console.log(true == 3);
console.log("----->") // true (true é convertido para 1)
console.log(null == undefined);
console.log("----->") // treu (ambos são considerados iguais, sme valor atribuido)
console.log(false == 0); // false (false é convertido para 0)
console.log("----->")


// Igual a valor e tipo: Verifica se dois valores são iguais e do mesmo tipo

let igualValorTipo = n1 === n2
console.log(igualValorTipo);
console.log("----->")
console.log(5 === "5") // fale (número !== string)
console.log("----->")
console.log(true === 1); // false (booleano !== número)
console.log("----->")
console.log(null === undefined); // false (null !== undefined)
console.log("----->")
console.log(false === 0) // false (numero !== booleano)
console.log("----->")

console.log("----->")
// Diferente de (!=): Verifica se dois valores são diferentes
let diferente = n1 != n2;

console.log(diferente)

console.log(5 != "5"); //false
cpmsole.log(true != 1); //false
console.log("----->")

// Diferente valor e tipo de (!==): Verifica se dois valores são diferente e do mesmo tipo
let diferenteValorTipo = n1 !== n2

console.log(5 !== "5")
console.log(true !== 1)
console.log("----->")


// Maior que (>): ferifica se um valor é maior que outro

let maiorQue = n1 > n2
console.log(maiorQue)

// Menor que (<): verifica se um valor é menor que outro

let menorQue = n1 < n2 
console.log(menorQue);

// Maior ou igual a (>=): Verifica se um valor é maior ou igual ao outro
let maiorIgual = n1 >= n2
console.log(maiorIgual);

// Menor ou igual a (<=): Verifica se um valor é menor ou igual ao outro
let menorIgual = n1 <= n2
console.log(menorIgual);