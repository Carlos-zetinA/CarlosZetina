//Regla sintactica de js

class personas{
    constructor(nombre,apellido,edad,sexo,direccion,telefono,correo,horario){
        this._nombre=nombre;
        this._apellido=apellido;
        this._edad=edad;
        this._sexo=sexo;
        this._direccion=direccion;
        this._telefono=telefono;
        this._correo=correo;
        this._horario=horario;
    }
}

class Alumnos extends personas{
    constructor(nombre,apellido,horario,matricula,carrera,semestre,){
        super(nombre,apellido,horario);
        this.matricula=matricula;
        this.carrera=carrera;
        this.semestre=semestre;

    }
    mensaje(){
        console.log(`Soy el alumno ${this._nombre} y estudio la carrera de ${this.carrera}`);
    }
}

let alumno1=new Alumnos("Medel","Reyes","10-16","23E20142","ING.Civil","3");
alumno1.mensaje();