const prompt = require("prompt-sync")()

class personas {
    constructor(nombre,edad,sexo,direccion,telefono) {
        this._nombre=nombre;
        this._edad=edad;
        this._sexo=sexo;
        this._direccion=direccion;
        this._telefono=telefono;
        this.array=[];
    }

    añadir() {
    let tamaño = parseInt(prompt("Ingrese el numero de personas que desee agregar:"));
    for(let i = 0; i < tamaño; i++){
        let nombre = prompt("Ingrese el nombre de la persona:");
        let edad = prompt("Ingrese la edad de la persona:");
        let sexo = prompt("Ingrese el sexo de la persona:");
        let direccion = prompt("Ingrese la direccion de la persona:");
        let telefono = prompt("Ingrese el telefono de la persona:");

        let persona = new personas (nombre,edad,sexo,direccion,telefono);
        this.array.push(personas);
     }
    }

    mostrarpersonas() {
        console.log("Personas:");
        this.array.forEach((personas) => {
            console.log(`nombre: ${personas._nombre},edad: ${personas._edad}, sexo: ${personas._sexo}, direccion: ${personas._direccion}, telefono: ${personas._telefono}`);
        });
        }}

    let persona = new personas();
    persona.añadir();
    persona.mostrarpersonas();