class Alumnos {
    constructor(nombre,numControl) {
        this._nombre = nombre;
        this._numControl = numControl;
    }
}

class Docente {
    constructor(nombre) {
        this._nombre = nombre;
    }
}

class Materia {
    constructor(nombre, docente) {
        this._nombre = nombre;
        this._docente =  docente;
    }
}

class Calificacion extends Alumnos {
constructor(nombre,  numControl,materia, calificaciones){
        super(nombre,numControl);
        this._materia = materia;
        this._calificaciones = calificaciones;
 }

calcularPromedio() {
 const total = this._calificaciones.reduce((acc,cal)=> acc + cal, 0);
 return (total / this._calificaciones.length).toFixed(2);
 }

mostrarInfo() {
 console.log(`Numero de control: ${this._numControl}`);
 console.log(`Alumno: ${this._nombre}`);
 console.log(`Materia: ${this._materia._nombre}`);
 console.log(`Docente: ${this._materia._docente._nombre}`);
 console.log(`Calificaciones 1 y 2: ${this._calificaciones.join(",")}`);
 console.log(`Promedio: ${this.calcularPromedio()}`);
 }
}

const Profe1 = new Docente("David Salomon");
const Profe2 = new Docente("Victor Hugo");
const Profe3 = new Docente("Angel Vazquez");

const Redes = new Materia("Redes",Profe1);
const Calculo = new Materia("Calculo",Profe2);
const Telecomunicacion = new Materia("Telecomunicacion",Profe3);

//Calificaciones de Medel Reyes
const califmedelreyes1 = new Calificacion("Medel Reyes", "23E20145", Redes, [88, 80]);
const califmedelreyes2 = new Calificacion("Medel Reyes", "23E20145", Calculo, [83, 90]);
const califmedelreyes3 = new Calificacion("Medel Reyes", "23E20145", Telecomunicacion, [75, 83]);

//Calificacion de Diego Dehara 
const califdiegodehara1 = new Calificacion("Diego Dehara", "23E20138", Redes, [79, 77]);
const califdiegodehara2 = new Calificacion("Diego Dehara", "23E20138", Calculo, [86, 90]);
const califdiegodehara3 = new Calificacion("Diego Dehara", "23E20138", Telecomunicacion, [90, 95]);

califmedelreyes1.mostrarInfo();
califmedelreyes2.mostrarInfo();
califmedelreyes3.mostrarInfo();
califdiegodehara1.mostrarInfo();
califdiegodehara2.mostrarInfo();
califdiegodehara3.mostrarInfo();