var agora = new Date();

var hora = agora.getHours();
console.log(`Agora são ${hora} horas.`);
if (hora == 0 || hora <= 4) {
    console.log('boa madrugada')
}else if (hora < 12) {
    console.log('bom dia');
} else if (hora <= 18) {
    console.log('Boa tarde');
} else if (hora <= 23 ) {
    console.log('Boa noite');
}