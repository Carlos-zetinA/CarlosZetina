const prompt = require(`prompt-sync`)();

/* let numero1

numero1=prompt("ingrese el numero 1:")
console.log(numero1)
*/

/*Realiza un progrma que contenga un arreglo indefinido, en el que se solicite a traves del teclado el tamaño y se ingrese por lo
menos 4 valores de cualquier tipo utilizando un ciclo para ingresar los datos imprimir los valores en pantalla*/

Arreglo = []
tamaño  = prompt("ingrese el tamaño del arreglo:")

/* let tamaño  = prompt("ingrese el tamaño del arreglo:")
fuction añadir (){
i=0
while (i<tamaño){
Arreglo.push (prom("ingrese el elemento que se añadira:"))
i++}
}añadir() */

/*for (const datos of Arreglo) {
 console.log(datos)
 } */

 function ob(){
    i=0;
    while (i< tamaño) {
        let nombre = prompt("nombre: ")
        let apellido = prompt ("apellido:")

        let objeto = {nombre,apellido}
        Arreglo.push(objeto)
        i++
        }
        }ob()
            Arreglo.map((data) => {
                console.log(data)
            })