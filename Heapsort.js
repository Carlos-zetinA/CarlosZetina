//Heap Sort
//Sin Recursividad 
function heapSort(arr) {
    const len = arr.length;

    for (let i = Math.floor(len / 2) -1  ; i >= 0; i--) {
        heapify(arr, len, i);
    }

    for(let i = len -1; i> 0; i--){
        [arr[0], arr[i]]= [arr[i], arr[0]];
        heapify(arr, i, 0);
    }

    return arr;
}

function heapify(arr, len, i){
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if(left < len && arr[left]> arr[largest]){
        largest = left;
    }

    if (right <  len && arr[right] > arr[largest]){
        largest = right;
    }

    if (largest !== i){
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        heapify(arr, len, largest);
    }
}

//Con Recursividad 
function heapSort(arr) {
    const len = arr.length;

    buildHeap(arr, len);
    for (let i =  len - 1; i > 0; i--){
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
    return arr;
}

function buildHeap(arr,len){
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--){
        heapify(arr, len, i);
    }
}

function heapify(arr, len, i){
    let largest = i;
    const left = 2 * i +  1;
    const right = 2 * i + 2;

if(left < len && arr [left]> arr[largest]){
    largest = left;
}
if (right < len  && arr[right] > arr[largest]) {
    largest = right;
}
if (largest !== i){
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    heapify(arr, len, largest);
    }
}
