const prompt = require (`prompt-sync`)();

let Arreglo = []
let tamaño = parseInt(prompt(`ingrese el numero de empleados:`))

class Empleado{
    constructor(nombre,apellido,RFC,direccion,telefono,sueldo){
        this.nombre = nombre
        this.apellido = apellido
        this.RFC=RFC
        this.direccion=direccion
        this.telefono=telefono
        this.sueldo=parseFloat(sueldo)
    }
    get nombre(){
        return this._nombre
    }
    set nombre(value){
        this._nombre= value
    }

    get apellido(){
        return this._apellido
    }
    set apellido(value){
        this._apellido = value
    }
    get RFC(){
        return this._RFC
    }
    set RFC(value){
        this._RFC= value
    }
    get direccion(){
        return this._direccion
    }
    set direccion(value){
        this._direccion= value
    }
    get telefono(){
        return this._telefono
    }
    set telefono(value){
        this._telefono= value
    }
    get sueldo(){
        return this._sueldo
    }
    set sueldo(value){
        this._sueldo=parseFloat(value)
    }

    calcularSueldo(){
        return this._sueldo * 0.15
    }
    aumentarSueldo(){
        this._sueldo += this._sueldo * 0.15
    }
}

function obtenerEmpleado() {
        let nombre = prompt (`nombre:`)
        let apellido = prompt (`apellido:`)
        let RFC = prompt (`RFC:`)
        let direccion = prompt(`direccion:`)
        let telefono = prompt (`telefono:`)
        let sueldo = prompt (`sueldo:`)
        

    let empleado= new Empleado (nombre,apellido,RFC,direccion,telefono,sueldo)
        Arreglo.push(empleado)

    }

    for(let i = 0; i < tamaño; i++) {
     obtenerEmpleado() 
    }

    if(Arreglo.length > 0 ){
        Arreglo.pop()
    }

    Arreglo.forEach((empleado) => {
        console.log(`nombre: ${empleado.nombre},apellido:${empleado.apellido},RFC: ${empleado.RFC},direccion:${empleado.direccion}, telefono: ${empleado.telefono}, sueldo: ${empleado.sueldo}`)
        empleado.aumentarSueldo()
        console.log(`sueldo aumentado: ${empleado.sueldo}`)
    });
