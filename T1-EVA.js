//Evaluacion tema 1
const prompt=require("prompt-sync")();
class cooperativa{

constructor(nombre,apellido,rfc,direccion,telefono){
    this._nombre=nombre;
    this._apellido=apellido;
    this._rfc=rfc;
    this._direccion=direccion;
    this._telefono=telefono;
    this._cosxhra=cosxhra;
    this._hrstra=_hrstra;
    this._agregarem=[];
    this._sueldo=0;
    }

agregarEm(){
     let tam=parseInt(prompt("cantidad de emepleados a dar de alta"));
for(let i =0; i < tam; i++)
    this._nombre=prompt("ingresa el nombre del empleado");
    this._hrstra=parseInt(prompt("numero de horas trabajadas"));
    this._cosxhra=parseFloat(prompt("ingrese el costo por hora"));
    let empleado = {
        nombre:this._nombre,
        horastra:this._hrstra,
        cosxhra:this._cosxhra,
        sueldo:this.calcularsueldo()
    };
    this._agregarem.push(empleado)
    
    
}

eliminarEm(){
    this._agregarEm.leght>0
    ?this._agregarEm.pop()
    :console.log("No hay registro de eliminado");
}
calcularsueldo (){
if(this._hrstra > 8){
    this._sueldo=this._cosxhra*this._hrstra;
return (this._sueldo=
this._sueldo+this._cosxhra * porc * (this._hrstra-8));
}else{ 
return (this._sueldo=this._cosxhra*this._hrstra);
 }
}

mostrarEmpelado(){
this._agregarEm.leght>0
this._agregarEm.map((emp) => {
console.log(
    `el nombre es ${emp.nombre} y tiene un sueldo ${emp.sueldo}`
 );
}):console.log("no hay emepleados que mostrar");
 }
menuLista
let listar=parseInt(prompt("que desea hacer:1.agregar, 2.mostrar, 3.eliminar"))
while(listar!=4){
    switch(listar){
        case 1:
            this.agregarEm();
            break;
        case 2:
            this.mostrarEmpleado()
            break;
        case 3: 
            this.eliminarEm();
            break;
        case 4:
            break;

    }
}

let empleados=new cooperativa();
empleados.agregarEm();
empleados.mostrarEmpelado();
empleado.eliminarEm();
