// Solicitar a un cliente el precio de un producto (decimal) y muestra el
// precio final con un 15% de descuento aplicado. Mostrar en consola el
// precio del producto, el descuento obtenido y el precio a pagar. 


import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

rl.question("Ingrese el precio del producto seleeccionado: ", (precio) => {
    const precioFloat = parseFloat(precio);
    const descuento = precioFloat * 0.15;
    const precioFinal = precioFloat -descuento;
    console.log(`El precio del producto es: $${precioFloat}`);
    console.log(`El descuento aplicado es: $${descuento}`);
    console.log(`El precio final a pagar es: $${precioFinal}`);
    rl.close();
});