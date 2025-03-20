// 1. Usando o operador de concatenação (+)


let string1 = "Olá, ";
let string2 = "mundo!";

console.log(string1 + string2 + " seloco")






// 2. Usando o método concat()
let string3 = "Hello, ";
let string4 = "World! ";

let resultado = string3.concat(string4);

//console.log(string3.concat(string4))

console.log(resultado)




// 3. Unsando template literals (Tamplete string)

let string5 = "Olá, ";
let string6 = "mundo! ";


let resultado2 = `${string5}${string6}`
console.log(resultado2)



// 4. Usando a função join()


let sobrenome = "cardoso"

let resultado3 = ['Maria', sobrenome].join('');
console.log(resultado3);

