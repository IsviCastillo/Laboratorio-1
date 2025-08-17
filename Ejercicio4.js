// 4. Solicita el ancho y alto de un rectángulo y muestra su perímetro.
// Formula: perimetro = 2 * (a + h);


import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

rl.question("Ingrese el ancho del rectangulo que desea calcular: ", (ancho) =>{
    rl.question("Ingrese el alto del rectangulo:", (alto) => {
        const a = parseFloat(ancho);
        const h = parseFloat(alto);
        const perimetro = 2 * (a +h);
        console.log(`El perimetro del rectangulo de ancho ${a} y alto ${h} es de: ${perimetro}`);
        rl.close();
  });
    });