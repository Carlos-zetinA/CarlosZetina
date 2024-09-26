//Selection Sort
//Sin Recursividad 
function selectionSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++){
        let minIndex = i;
        for (let j = i + 1; j <  len; j++){
         if (arr[j] < arr[minIndex]) {
            minIndex = j;
    }
}
[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
}
return arr;
}

//Con Recursividad
function selectionSort(arr, i = 0){
 if (i === arr.length - 1) {
    return arr;
}

let minIndex = i;
for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[minIndex]) {
     minIndex = j;
 }
}
[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
return selectionSort(arr, i + 1);
}