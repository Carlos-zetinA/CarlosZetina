const prompt = require('prompt')();

let Arreglo = [];
let tamaño  = parseInt(prompt("Ingrese el tamaño del arreglo:"));

function ob() {
    let i = 0;
    while (i < tamaño) {
        let nombre = prompt("Nombre: ");
        let edad = prompt("Edad: ");

        let objeto = { nombre, edad };
        Arreglo.push(objeto);
        i++;
    }
}

ob();

Arreglo.map((data) => {
    console.log(data);
});