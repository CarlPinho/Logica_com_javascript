

let idade = 22 //prompt("Digite sua idade: ");
let cnh = false


// if(idade >= 18){
//     console.log("Voce é legal ")

// }else{
//     console.log("Voce não pode dirigir!");

// }





// if(idade >= 18){
//         if(cnh == true){
//             console.log("voce pode dirigir")

//         }else{
//             console.log("voce é maior de idade mas não tem cnh e não pode dirigir")
//         }

// }else{
//     console.log("Voce É BESTA!");

// }

// var numeroPensado = Math.round(Math.random() * 100);

// console.log(numeroPensado)

// let num = prompt("Pense em um numero")

// var pensamneto = Math.round(Math.random() * 4);

// if(num == pensamneto){
//     console.log("A certou!")

// }else{
//     console.log("Voce errou!")
// }

// condicional aninhada

let nota =  6

if(nota >= 7){
    console.log("Aprovado!")
}else if(nota >= 5){
    console.log("Recuperação.")
}else{
    console.log("Reprovado.")
}


let permicao = prompt("Você tem permição (Sim ou Não)").toLocaleUpperCase();
console.log(permicao);

if(permicao == "SIM"){
    console.log("Voçê tem permição");
}else if(permicao == "NAO" || "NÃO"){
    console.log("Você não tem permição");
}else{
    console.log("Resposta invalIda.");
}
