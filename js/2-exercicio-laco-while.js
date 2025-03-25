// Use o laço de repetição while

/**
 * 1. Contagem de 1 a 10 
Crie um programa que exiba os números de 1 a 10 utilizando um laço while.

 */
var i = 1
while(i <= 10){
    console.log(i)
    i++
}

console.log("------------------------")

/**
 * 2. Soma de Números Positivos 
Crie um programa que some vários números positivos digitados pelo usuário. O 
programa só deve parar quando o usuário digitar um número negativo.
 */
var soma = 0
var n1

while(true){
    n1 = parseInt(prompt("Digite um numero positivos"))
    if(n1 < 0){
        break;
    }
    soma = soma + n1
}console.log(soma)
    


console.log("------------------------")

/**
 * 3. Tabuada de um Número 
Crie um programa que solicite ao usuário um número e exiba a sua tabuada de 1 
a 10 usando um laço while.
 * 
 */

var n1 = prompt("Digite um numero e decubra a tabuada: ")
console.log("Tabuada do: ", n1)
var i = 1;
//ile(i <= 10){
 // console.log(n1, " x ", i, " = ", n1 * i)
 // console.log(`${n1} x${} = ${n1 * i}´);
  //i++
//


console.log("------------------------")

/**
 * 
 * 4. Contagem Regressiva 
Crie um programa que exiba uma contagem regressiva de 10 até 0 utilizando um 
laço while.
 */

var i = 10;

while(i >= 1){
    console.log(i)
    i--
}
console.log("------------------------")

/**
 * 5. Verificação de Senha 
Crie um programa que peça ao usuário para digitar uma senha. Enquanto a 
senha digitada for incorreta, o programa deve pedir novamente. Quando a senha 
estiver correta, exibir "Acesso permitido!".
 */


var n2 = prompt("Digite a senha: ")

const senha = "2345"

while(n2 !== senha){
        console.log("Senha incorreta!")
        n2 = prompt("Digite a senha novamnete: ")
}console.log("Senha Correta!")



/*Use o laço de repetição do while
1. Contagem de 1 a 10
Crie um programa que exiba os números de 1 a 10 utilizando um laço do while.
*/

let contador = 1

do{
    console.log(contador)
    contador++
}while(contador <= 10)



/**
 * Tabuada de um Número
Crie um programa que solicite ao usuário um número e exiba a sua tabuada de 1
a 10 usando um laço do while.

 */


let num = prompt("descubra a tabuada de um numero:")
console.log("A tabuada do: ", num)

var i = 1
do{
    console.log(num, " x ", i, " = ", num * i)
    console.log(`${num} x ${i} = ${num * i}`)
    i++

}while(i <=  10)


/**
 * 
 * . Soma dos primeiros 10 números 
Crie um programa que calcule a soma dos números de 1 a 10 utilizando um laço 
do while.

 */
console.log("A soma dos numero de 1 a 10 são: ")
var i = 1
var soma = 0
do{
   soma = soma + 1;
    
    
    i++
}while(i <= 10)
    console.log(soma)
/**
 *  Contagem Regressiva de 10 a 0 
Crie um programa que exiba uma contagem regressiva de 10 até 0 utilizando um 
laço do while.
 */

var i = 10

do{
    console.log(i)
    i--
}while(i >= 0)


/*
5. Ler números até digitar 0
Crie um programa que solicite números ao usuário e os some. O programa deve 
continuar solicitando números até que o usuário digite 0, utilizando um laço do 
while

*/ 


var soma = 0;
var n1;
do{
     n1 = parseInt(console.log("Digite um numero (0 para sair)"))
     soma = soma + n1 // soma += n1
}while(n1 !== 0);


