//Crear una lista con diferentes tipos de datos
let datos=[{nombre:"Carlos",apellidos:"Zetina",edad:19,estudiante: true},{nombre:"Eduardo",apellidos:"Perez",edad:20,estudiante: true}]
//let arreglo=["Carlos",34,true], 

const info=()=>{
  /*   for(let arr in arreglo){
        console.log(arreglo[arr]);
        for(let lis in datos){
            console.log(`${lis}:${datos[lis]}`);
        }
    } */

  /*  let valores=Object.values(datos);
   valores.map((data,index) => {
    console.log(`${index}:${data}`);
   }); */

/*    let valores=Objetjec.keys(datos)
   for(let data of valores)
    let infor=valores[data];
    console.log(valores[data.])
   } */

 /*    let valores=Object.entries(data);
    valores.map(dat);
    console.log(dat) */

   /*  Object.entries(datos).forEach(([key,value])=>{
        console.log (`${key}: $(value)}`);
    }) */
  
        datos.map((data)=>{
            console.log(`El nombre es:${data.nombre}${data.apellidos} y tiene ${data.edad} años`)
})
}
info()
