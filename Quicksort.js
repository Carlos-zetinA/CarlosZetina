//Quicksort
//Sin Recursividad 
function quickSort(arr) {
    const stack = [{ lo: 0, hi: arr.length -1 }];
    while ( stack.length > 0 ) {
     const { lo, hi } = stack.pop();
     const pivot = partition(arr, lo, hi);
     if (pivot - 1 > lo) {
        stack.push({ lo, hi: pivot - 1 });
    }
    if (pivot + 1 < hi) {
        stack.push({ lo: pivot + 1, hi });
}
}
return arr;
}

function partition(arr, lo, hi) {
    const pivot = arr[lo];
    let i = lo + 1;
    let j = hi;
    while( i <= j) {
        while( i <= j && arr[i] <= pivot) {
        i++;
    }
    while( i <= j && arr[j] > pivot) {
    j--;
}
if (i <= j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
 }
}
[arr[lo], arr[j]] = [arr[j], arr[lo]];
return j;
}

//Con Recursividad 
function quickSort(arr, lo = 0, hi = arr.length - 1){
    if (lo < hi) {
       const pivot = partition(arr, lo, hi);
       quickSort(arr, lo, pivot -1);
       quickSort(arr, pivot + 1, hi);
}
return arr;
}

function partition( arr, lo, hi) {
    const pivot = arr[lo];
    let i = lo + 1;
    let j = hi;
    while( i <= j) {
        while( i <= j && arr[i] <= pivot) {
        i++;
}
while( i <= j && arr[j] > pivot) {
    j--;
}
if (i <= j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
    }
}
[arr[lo], arr[j]] = [arr[j], arr[lo]];
return j;
}