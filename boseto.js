// Crear un arreglo de dos dimensiones
let matriz = [];

// Definir dos arreglos internos
let arreglo1 = [1, 2, 3];
let arreglo2 = [4, 5, 6];

// Guardar los arreglos internos en la matriz
matriz.push(arreglo1);
matriz.push(arreglo2);

// Leer los datos internos
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(`matriz[${i}][${j}] = ${matriz[i][j]}`);
    }
}
