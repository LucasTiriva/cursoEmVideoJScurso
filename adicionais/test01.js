//Exercico 01 do dia 01

let nome = "João";
let idade = "30";

console.log(`Meu nome é ${nome} e tenho ${idade} anos`)


//Exercico 02 do dia 01
/**********************************/
let carro = {marca: "Gol", modelo: "quadrado", ano: 2020};

console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.ano);


//Exercico 03 do dia 01
/***********************************/
let cores = ['vermelho', 'azul', 'verde'];

cores.push('rosa');
cores.shift();
console.log(cores)


//Exercico 04 do dia 01
/***********************************/
function soma(a, b) {
    return a + b;
}

// Chamando a função com diferentes valores e imprimindo o resultado
console.log(soma(2, 3));
console.log(soma(10, 5));
console.log(soma(-1, 1));



//Exercico 05 do dia 01
/***********************************/
let igual = (10 == '10');
console.log(igual);

let igualMesmo = (10 === '10');
console.log(igualMesmo);