//Bubble
//Sin Recursividad 
function bubbleSort (arr) {
    let swapped;
    do{
        swapped = false;
        for (let i = 0; i < arr.length - 1; i ++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1 ]]= [arr[i + 1 ], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return arr; 
}

//Con Recursividad 
function bubbleSort(arr, n = arr.length) {
    if (n=== 1) {
        return arr;
}
for (let i  = 0; i < n - 1; i++) {
 if (arr[i] > arr[i + 1]) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
 }
 return  bubbleSort(arr, n - 1);
}