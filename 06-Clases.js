//Definir clases con atributos dentro del constructor 
class Persona{
    constructor(nombre,edad,sexo,direccion){
        this.nombre=nombre;
        this.edad=edad;
        this.sexo=sexo;
        this.direccion=direccion;
    }
    //Metodo saludar
    saludar(){
console.log(`Hola ${this.nombre}`);
    }
    //Encaosulamiento setter y getter
    get nombre(){
        return this._nombre
    }

    set nombre(values){
        this._nombre=values;
    }
}

let Persona1=new Persona ("Carlos",23,"M","Balancan");
Persona1.nombre="Carlos"
console.log(Persona1._nombrenombre);
Persona1.saludar();