//Objeto Date 

// O objeto Date é usado para representar datas e horarios.
// Ele permite criar, manipular e formatar datas.


// Data atual


var dataAtual = new Date();
console.log(dataAtual);

// Data especifica (ano, mes, dia, hora, minuto, segundo)
var dataEspecifica = new Date(1991,10-1,25,14,30,0)
console.log(dataEspecifica)


// Metodos Úteis do Date()

// getFullYear(): Retornar o ano (4 digitos)

// getMonth(): Retorna o mes (0-11, onde 0 é janeiro)
// getDate(): Retorna o dia do mes (1-31)
// getDay(): Retorna o dia da semana (0-6, onde 0 é domingo)
// getHour(): Retorna a hora (0-23)
// getMinutes(): Retorna os minutos (0-59)
// getSeconds(): Retorna os segundos (0-59)
// getMilliseconds(): Retorna os milissegundos (0-999)
// getTime(): Retorna os timestamp(milissegundos desde 1° de janeiro de 1970)


var data = new Date();
console.log(dataAtual.getFullYear()) // Ano atual
console.log(data.getMonth() + 1) // Mes atual (Adiciona 1 porque janeiro é 0)
console.log(data.getDate()) // Dia do mes 1-31
console.log(data.getDay()) // Dia da semana 0 - 6



// Timestamp

// O timestamp é um numero que representa a quantidade de milissegundos desde 1° de janeiro de 1970
// (Conhecido com "Unix Epoch")

var timestamp = Date.now(); // retorna o timestamp atual
console.log(timestamp)

// convertendo timestamp para data

var timestamp = 16973928000000;
var data = new Date(timestamp);
console.log(data);

var timestamp = Date.now(); // retorna o timestamp atual
var data = new Date(timestamp);
console.log(data);

// Formatação de datas
var data = new Date();
console.log(data.toLocaleDateString())


var date = new Date();
var dia = data.getDate();
var mes = data.getMonth(); +1
var ano = data.getFullYear(); 


var dataFormatada =   `${dia}/${mes}/${ano}`
console.log(dataFormatada);


// Diferença entre dias datas


var data1 = new Date(2023,9,15);
var data2 = new Date(2023.9,20);

var diferenca = data2 - data1; // Diferença em milesegundo
console.log(diferenca) 

var dias = diferenca / (1000 * 60 * 60 * 24 );
console.log(dias);      