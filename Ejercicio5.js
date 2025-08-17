// 5. Solicita el precio de un producto (decimal). Calcula y muestra en consola
// el precio del producto, el IVA (13%) y el precio total (precio + IVA).

import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

rl.question("Ingrese el precio del producto seleccionado:" , (precio) => {
    const precioFloat = parseFloat(precio);
    const iva = precio * 0.13;
    const precioTotal = precioFloat + iva;
    console.log(`El precio del producto es: $${precioFloat}`);
    console.log(`El IVA aplicado es: $${iva}`);
    console.log(`El precio total a pagar es: $${precioTotal}`);
    rl.close();
});
