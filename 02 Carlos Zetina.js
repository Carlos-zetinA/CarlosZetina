//Realizar un arreglo con 2 dimenciones y guardar 2 arreglos internos y dar lectura a los datos internos//
let A=[[1,2,3,4,5],[6,7,8,9]];

const datosArreglos=()=>{
    
    A.map((datos,index)=>{
        datos.map((valores,i)=>{
            console.log('${i}=${valores}')
        })
    });
}