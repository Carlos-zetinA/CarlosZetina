const { _edad } = require("./EjercicioAmano");

const prompt = require (`prompt-sync`)();

class Empleado{
    constructor(nombre,edad,sexo,direccion,telefono,){
        this._nombre = nombre
        this._edad =edad
        this._sexo= sexo
        this._direccion=direccion
        this._telefono=telefono
        
    }

    function obtenerEmpleado() {
            let nombre = prompt (`nombre:`)
            let apellido = prompt (`apellido:`)
            let RFC = prompt (`RFC:`)
            let direccion = prompt(`direccion:`)
            let telefono = prompt (`telefono:`)
            
    
        let empleado= new Empleado (nombre,apellido,RFC,direccion,telefono,sueldo)
            Arreglo.push(empleado)
    
        }
    
    
        Arreglo.forEach((empleado) => {
            console.log(`nombre: ${empleado.nombre},apellido:${empleado.apellido},RFC: ${empleado.RFC},direccion:${empleado.direccion}, telefono: ${empleado.telefono}, sueldo: ${empleado.sueldo}`)
            empleado.aumentarSueldo()
            console.log(`sueldo aumentado: ${empleado.sueldo}`)
        });
}    
obtenerEmpleado()