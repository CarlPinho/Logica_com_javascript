let compra = prompt("Digite o valor da compra: ")

let desconto = compra / 100 * 15
let desconto1 = compra - desconto

if(compra > 200){
    console.log("Valor da compra " + compra + " Desconto: " + " 15% " + "Valor com desconto: " + desconto1)
}else{
    console.log("valor da compra: " + compra)
}