//Factory function

const personas = {
    nombre:"Lalo",
    edad: 19
}
    const personas2 = {
        nombre:"Lalo",
        edad: 19
    }



function datospersona (nombre,edad){
return{
    nombre:nombre,
    edad:edad,
    active:true
}
}

let persona1=datospersona("carlos",24)
let persona2=datospersona("zetina",24)
//console.log(persona1,persona2)

//datos de un usuario se utiliza camel case(Las primeras letras deberan ser mayusculas)
const datosUsuario={
    nombre:"carlos",
    edad:19,
    password:"934115",
    direccion:{
        colonia:"yomel",
        calle:"san fermin",
        numext:123
    },
    sueldo:233.24,
    guardarUsuario:function(){
        console.log("Guardar usuario....");
        }
}
//datosUsuario.guardarUsuario();

//Add registros y parametros a los odjetos definicion

const user= {id:1};
user.nombre="Carlos";
user.guardarUser=function(){
    console.long("GUardando user...");
}
/* console.log(user);
user.guardarUser(); */

//objetos definidos
/* const Person=Odject.freeze({id:1,nombre:"carlos"}) */
const Person=Object.seal({id:1,nombre:"carlos"})
Person.id=2;
Person.nombre="carlos"
Person.edad=19;

//console.long(Person);
//pasar funciones como parametros 
function Pitbull(nombre){
    this.nombre=nombre;
}

function Animal(Fn,argumento){
    return new Fn(argumento)
}

let animal1=Animal(Pitbull,"Fidudays")
console.log(animal1);