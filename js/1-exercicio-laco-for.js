
/**
 *  Contagem de 1 a 10 
Crie um programa que exiba os números de 1 a 10 utilizando um laço for.
 */
console.log("------------------------------------")
console.log("Contagem de 1 a 10 ")

for(var i = 1; i <= 10; i++){
    console.log(i);
}

console.log("------------------------------------")

/**
 * 2. Tabuada de um Número 
Crie um programa que solicite ao usuário um número e exiba a sua tabuada de 1 
a 10 usando um laço for.
 */

let n1= prompt("Digite um numero e descubra a tabuada: ")
console.log("Tabuada do ", n1)
var i = 0;
for(i = 1; i <= 10; i++){
    console.log(n1, " x ", i, n1 * i)
    //nsole.log(`$`)
}

console.log("------------------------------------")

/**
 * 3. Soma dos primeiros 10 números 
Crie um programa que calcule a soma dos números de 1 a 10 utilizando um laço 
for.
 */

var i = 0;

for(i = 1;i <= 10; i++){
    console.log(i, " + ", i, " = ",i + i )
    console.log()
}
console.log(i)

console.log("------------------------------------")

/**
 * 4. Contagem Regressiva de 10 a 0 
Crie um programa que exiba uma contagem regressiva de 10 até 0 utilizando um 
laço for.
 */


var i = 10;

for(i = 10; i >= 0; i--){
    console.log(i)
}

console.log("------------------------------------")


/**
 * 5. Exibir apenas números pares de 1 a 20 
Crie um programa que exiba apenas os números pares de 1 a 20 utilizando um 
laço fo
 */

var i = 1;

for(i = 1; i <= 20; i++){
    if(i % 2 == 0){
    console.log(i)
    }
    
}