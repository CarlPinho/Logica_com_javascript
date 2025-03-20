// console.log("Olá, mundo")


// //prompt("Digite algo ")


// const readline = require('readline-sync');

// var texto = readline.question("Digite algo!");


// console.log("Voce digitou: " + texto);



// Se não quiser instalar pacotes extras, pode usar readline, que já vem imbutido no node



const readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("Digite alguma coisa: ", (resposta) => {
    console.log("Voce digitou: " + resposta);
    rl.close();
});
