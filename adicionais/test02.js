//Dia 02 estruturas de controle (if, switch, loops).

//Exercico 01 do dia 02
/**********************************/
let num = -9;

if (num < 0) {
    console.log("Esse número é negativo.");
} else if (num > 0) {
    console.log("Esse número é positivo.");
} else {
    console.log("O número é zero.");
}


//Exercico 02 do dia 02
/**********************************/
let mes = 10;
switch (mes) {
    case 1:
        console.log('Janeiro');
        break;
    case 2:
        console.log('Fevereiro');
        break;
    case 3:
        console.log('Março');
        break;
    case 4:
        console.log('Abril');
        break;
    case 5:
        console.log('Maio');
        break;
    case 6:
        console.log('Junho');
        break;
    case 7:
        console.log('Julho');
        break;
    case 8:
        console.log('Agosto');
        break;
    case 9:
        console.log('Setembro');
        break;
    case 10:
        console.log('Outubro');
        break;
    case 11:
        console.log('Novembro');
        break;
    case 12:
        console.log('Dezembro');
        break;
    default:
        console.log('Mês inválido digite um número de 1 a 12.');
}


//Exercico 03 do dia 02
/**********************************/
for (let n = 0; n <= 10; n++) {
    console.log(n);
}
//uma curiosidade é que aqui fora desse for se eu der um console em "n" o valor é 11, por isso usei let.



//Exercico 04 do dia 02
/**********************************/
let decrescente = 11
while (decrescente > 0) {
    decrescente--;
    console.log(decrescente);
}



//Exercico 05 do dia 02
/**********************************/
let numero;

do {
    numero = prompt("Por favor, insira um número maior que 10:");
    numero = Number(numero); // Converte a entrada para número
} while (numero <= 10);

console.log("Obrigado! Você inseriu um número maior que 10.");
