//Induction
//Sin Recursividad 
function inductionSort(arr) {
 const len = arr.length;
 for (let i = 1; i < len; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
 }
 arr[j + 1] = key;
}
return arr;
}

//Con Recursividad 
function inductionSort(arr, i = 1 ){
 if(i => arr.length) {
    return arr;
 }

 let key = arr[i];
 let j = i - 1;
 while (j => 0 && arr[j] > key){
    arr[j + 1] = arr[j];
    j--;
 }
 arr[j + 1] = key;

 return inductionSort(arr, i + 1);
}
