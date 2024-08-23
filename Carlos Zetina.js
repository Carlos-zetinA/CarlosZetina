//Realizar un arreglo con 2 dimenciones y guardar 2 arreglos internos y dar lectura a los datos internos
Array= [[1,2,3,4,5],[6,7,8,9]];

/*const datosArreglos= ()=>{
    Array.map((datos)=>{
        datos.map((valores, i)=>{
            console.log(`${i}=${valores}`)
        })
    });
}
 datosArreglos();
*/
/*
//for of 
const datosArreglos = () => {
    for(const datos of Array){
        for(const[i,valores]of datos.entries()){
            console.log(`${i}=${valores}`);
        }
    }
}
datosArreglos();
*/


//for in
/* const datosArreglos = () => {
    for (const datos in Array) {
        for (const valores in Array[datos]){
            console.log(`${valores}=${Array[datos][valores]}`);
        }
    }
}
datosArreglos();
*/

//for each
/*const datosArreglos = () => {
    Array.forEach((datos)=>{ 
        datos.forEach((valores,i) => {
            console.log(`${i}=${valores}`);
        });
    });
}
datosArreglos();
*/

//funcion flecha
/*const datosArreglos = () => {
    for (const datosIndex in Array){
    for ( const valoresIndex in Array [datosIndex])
        console.log(`${valoresIndex}=${Array[datosIndex][valoresIndex]}`);
}
}
datosArreglos(); 
*/

//while
const datosArreglos = () => {
    let prop = 0;
    while (prop in Array){
        let valoresIndex= 0;
        while( valoresIndex in Array[prop]){
            console.log (`${valoresIndex}=${Array[prop][valoresIndex]}`);
            valoresIndex++;
        }
        prop++;
    }
    };
    datosArreglos();
