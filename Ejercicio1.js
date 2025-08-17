// 1. Solicita al usuario que ingrese una cantidad en metros (puede ser entero
// o decimal), muestra esa medida de metros en centímetros.
import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

rl.question('Ingrese una cantidad en metros: ', (metros) => {
    const metrosFloat = parseFloat(metros);
    const centimetros = metrosFloat * 100;
    console.log(`La medida ingresada en metros es de ${metrosFloat} , que es equivalente a ${centimetros} centímetros.`);
    rl.close();
});