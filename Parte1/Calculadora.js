//var valorInvestido = prompt('Entre que o valor a ser investido:');

//var valorInvestido = prompt("Qual objeto você deseja incluir na lista?", "Adicione um novo objeto");
/*
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  rl.question('Entre que o valor a ser investido:', function (answer) {
    // TODO: Log the answer in a database
    const valorInvestido = answer;
    console.log("valorInvestido entrada: " + valorInvestido);
    rl.close();
  });
*/

const readline = require('readline-sync')

const valorInvestido = readline.question('Entre que o valor a ser investido:')

//const primeiraNota = parseFloat(readline.question('Nota 1 '))

//var valorInvestido = 1000;

console.log("valorInvestido entrada: " + valorInvestido);

var pessoasQueVisualizam ;

var pessoasQueClicam;

var pessoasQueCompartilham;

var pessoasQueVisualizam = valorInvestido * 30;

for (let i = 0; i < 4; i++) {
    console.log('********** loop ' + i + '************')
    console.log("pessoasQueVisualizam parcial: " + pessoasQueVisualizam);
    pessoasQueClicam =  Math.floor(pessoasQueVisualizam * 12 / 100); 
    console.log("pessoasQueClicam parcial: " + pessoasQueClicam);
    pessoasQueCompartilham = Math.floor(pessoasQueClicam * 3 / 20);
    console.log("pessoasQueCompartilham parcial: " + pessoasQueCompartilham);
    console.log("pessoasQueVisualizam conta: " + (pessoasQueCompartilham * 40));
    pessoasQueVisualizam = pessoasQueVisualizam + (pessoasQueCompartilham * 40);
    console.log("pessoasQueVisualizam parcial final loop: " + pessoasQueVisualizam);
}

console.log("Total de visualizações: " + pessoasQueVisualizam);