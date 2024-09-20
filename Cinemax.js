
const prompt= require ("prompt-sync")();

class cliente{
 constructor(numeroMembresia,nombre,direccion,telefono,estado) {
    this._numeroMenbresia = numeroMembresia;
    this._nombre = nombre;
    this._direccion = direccion;
    this._telefono = telefono;
    this._estado = estado;
 }
 get numeroMembresia(){
    return this._numeroMenbresia
 }
 set numeroMembresia(value){
    this._numeroMenbresia=value
 }
 get nombre(){
    return this._nombre
 }
 set nombre(value){
    this._nombre = value
 }
 get direccion(){
    return this._direccion
 }
 set direccion(value){
    this._direccion=value
 }
 get telefono(){
    return this._telefono
 }
 set telefono(value){
    this._telefono=value
 }
 get estado(){
    return this._estado;
 }
 set estado(estado){
    this._estado=estado;
 }
 
}

class Pelicula {
    constructor(numeroPelicula,titulo,clasificacion,estado,tipo){
        this._numeroPelicula = numeroPelicula;
        this._titulo = titulo;
        this._clasificacion = clasificacion;
        this._estado = estado;
        this._tipo = tipo;
}

get numeroPelicula(){
    return this._numeroPelicula;
}
set numeroPelicula(value){
    this._numeroPelicula = value;
}
get titulo(){
    return this._titulo;
}
set titulo(value){
    this._titulo = value;
}
get clasificacion(){
    return this._clasificacion;
}
set clasificacion(value) {
    this._clasificacion = value;
}
get estado(){
    return this._estado;
}
set estado(estado){
    this._estado = estado;
}
get tipo(){
    return this._tipo;
}
set tipo(value){
    this._tipo = value;
 }
}

class RegistroClientes{
    constructor(){
        this._cliente =[];
    }

    RegistroClientes() {
        let numeroMembresia = parseInt(prompt("Ingresa tu numero de membresia:"));
        let nombre = prompt("ingresa tu nombre:");
        let direccion= prompt("ingresa la direccion del cliente:");
        let telefono = prompt("ingresa el telefono del cliente:");
        let estado = prompt("ingresa el estado del cliente(deudor o libre de multa): ");
        let cliente = new RegistroClientes (numeroMembresia, nombre, direccion, telefono, estado);
        this._cliente.push(cliente);
        console.log("Usted se registro exitosamente!")
    }

 consultarClientes(){
    if (this._cliente.length > 0) {
        console.log("lista de clientes");
        this._cliente.forEach((cliente) => {
            console.log(`numero de membresia: ${cliente.numeroMembresia}`);
            console.log(`nombre: ${cliente.nombre}`);
            console.log(`direccion: ${cliente.direccion}`);
            console.log(`telefono:${cliente.telefono}`);
            console.log(`estado ${cliente.estado}`);
            console.log("---------------------")
     });
    } else {
     console.long("usted no se ha registrado,registrese porfavor");
    }
}

eliminarCliente() {
let numeroMembresia = parseInt(prompt("Ingrese el numero de membresia del cliente que desee eliminar:"));
let indice= this._cliente.findIndex((cliente)=> cliente.numeroMembresia === numeroMembresia);
if (indice !== -1) {
   this._cliente.splice(indice,1);
   console.log("cliente eliminado!");
} else {
  console.log("el  cliente no existe con el numero de membresia que ingreso");
  }    
 }
}

class RegistroPeliculas{
    constructor() {
     this._pelicula = [];
     this._rentas = [];
 }
 registroPeliculas(){
    let numeroPelicula= parseInt(prompt("ingrese el numero de peliculas:"));
    let titulo= prompt("ingrese el titulo de la pelicula:");
    let clasificacion = prompt("ingrese la clasificacion de la pelicula:");
    let estado = prompt("ingrese el estado de la pelicula (disponible o rentada):");
    let tipo = prompt("ingrese el tipo de peliculas(estreno o catalogo):");
    let pelicula = new Pelicula(numeroPelicula,titulo,clasificacion,estado,tipo);
    this._pelicula.push(pelicula);
    console.log("Pelicula registrada con exito");
 }

 consultarPeliculas(){
    if(this._pelicula.length > 0) {
    console.log("Lista de peliculas");
    this._pelicula.forEach((pelicula) => {
     console.log(`numero de pelicula: ${pelicula.numeroPelicula}`);
     console.log(`titulo: ${pelicula.titulo}`);
     console.log(`clasificacion: ${pelicula.clasificacion}`);
     console.log(`estado: ${pelicula.estado}`);
     console.log(`tipo: ${pelicula.tipo}`);
     console.log("----------------------");
     });
    }else{
    console.log("no hay pelicula registradas");
 }
}

eliminarPelicula(){
    let numeroPelicula= parseInt(prompt("ingrese el numero de pelicula a emilinar"));
    let indice = this._peliculas.findIndex((peliculas) => pelicula.numeroPelicula === numeroPelicula);
    if (indice !== -1) {
     this._pelicula.splice(indice, 1);
     console.log("pelicula eliminada");
    } else {
      console.log("no se encontro un apelicula existente con ese numero");
    }    
  }

  rentaPelicula() {
    let numeroMembresia = parseInt(prompt("Ingrese el numero de membresia del cliente que sea rentar la pelicula"));
    let indiceCliente = this._cliente.findIndex((cliente) => cliente.numeroMembresia === numeroMembresia);
    if (indiceCliente !== -1){
        let cliente = this._cliente[indiceCliente];
        if(cliente.estado==="libre de multa") {
        let numeroPelicula = parseInt(prompt("Ingrese el numero de pelicula que desea rentar"));
        let indicePelicula = this._peliculas.findIndex((pelicula) => pelicula.numeroPelicula === numeroPelicula);
        if (indicePelicula !== -1) {
            let pelicula = this._pelicula[indicePelicula];
            if (pelicula.estado === "Disponible") {
                let fechaRenta = new Date ();
                let fechaDevolucion = new Date(fechaRenta.getTime() + 3 * 24 * 60 * 60 * 1000);
                let renta = {
                    cliente: cliente,
                    pelicula: pelicula,
                    fechaRenta: fechaRenta,
                    fechaDevolucion: fechaDevolucion,
                    fechaDevolucion: fechaDevolucion,
                };
                this._rentas.push(renta);
                pelicula.estado = "Rentada";
                console.log("Pelicula rentada con exito")
                }else{
                    console.log("La pelicula no esta disponible para rentar");
                    }
                    }else{
                        console.log("No se encontro la pelicula con ese numero");
                        }
                        }else{
                            console.log("El cliente no puede rentar peliculas porque tiene multa");
                            }
                        } else {
                            console.log("No se encontro el cliente con ese numero de membresia");
                        }
  }

  devolverPelicula(){
    let numeroMembresia = parseInt(prompt("Ingrese el numero de membresia del cliente que desea devolver la pelicula"));
    let indiceCliente = this._cliente.findIndex((cliente) => cliente.numeroMembresia === numeroMembresia);
    if (indiceCliente !== -1){
        let cliente = this._cliente[indiceCliente];
        let numeroPelicula = parseInt(prompt("Ingrese el numero de pelicula que desee devolver"));
        let indiceRenta = this._rentas.findIndex((rentas) => rentas.cliente.numeroMembresia === numeroMembresia && renta.pelicula.numeroPelicula === numeroPelicula);
        if (indiceRenta !== -1) {
            let renta = this._rentas[indiceRenta];
            let pelicula = renta.pelicula;
            pelicula.estado = "disponible";
            this._rentas.splice(indiceRenta, 1);
            console. log ("Pelicula devuelta con exito");
            }else{
                console.log("No se encontro la renta con ese numero de membresia y numero de pelicula que usted ingreso");
                }
                }else{
                    console.log("No se encontro el cliente con ese numero de membresia que ingreso");
  }
        }
    }

let registroClientes = new RegistroClientes();
let registroPeliculas = new RegistroPeliculas();

while (true) {
    console.log("Hola bienvenido a nuestro menu");
    console.log("1.Registro de clientes:");
    console.log("2.Consulta de cliente:");
    console.log("3.Eliminar cliente:");
    console.log("4.Registro de pelicula:");
    console.log("5.Consulta de pelicula:");
    console.log("6.Eliminar pelicula:");
    console.log("7.rentar pelicula");
    console.log("8.devolver pelicula");
    console.log("9.Salir");
let opcion = parseInt (prompt("ingrese una opcion:"));
switch (opcion) {
    case 1:
        registroClientes.RegistroClientes();
        break;
    case 2:
        registroClientes.consultarClientes();
        break;
    case 3:
        registroClientes.eliminarCliente();
        break;
    case 4:
        registroPeliculas.registroPeliculas();
        break;
    case 5:
        registroPeliculas.consultarPeliculas();
        break;
    case 6:
        registroPeliculas.eliminarPelicula();
        break;
    case 7:
        console.log("Bai,Bonito dia hasta la proxima");
        return;
    default:
        console.log("opcion invalida. intente de nuevo porfavor");
 }
}