//Bucket Sort
//Sin Recursividad 
function bucketSort(arr) {
    const buckets = [];
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const range = max - min + 1;

    for ( let i = 0; i < range; i++) {
        buckets[i] = [];
    }

    for (let i = 0; i < arr.length; i++) {
        const index = Math.floor((arr[i] - min) / range);
        buckets[index].push(arr[i]);
    }

    for (let i = 0; i < range; i++ ) {
        buckets[i] = buckets[i].sort((a,b)=> a-b);
    }

    const result = [];
    for (let i = 0; i < range; i++) {
        result = result.concat(buckets[i]);
    }
    return result;
    }

//Con Recursividad 
function bucketSort(arr) {
 const min= Math.min(...arr);
 const max = Math.max(...arr);
 const range = max - min + 1;

 const buckets = [];
 for (let i = 0; i < range; i++) {
    buckets[i] = [];
 }

 for (let i= 0;  i < arr.length; i++) {
 const index =  Math.floor((arr[i] - min) / range);
 buckets[index].push(arr[i]);
}

for (let i = 0;  i < range; i++) {
    buckets[i] = insertionSort(buckets[i]);
}

const result = [];
for (let i = 0; i < range; i++) {
    result = result.concat(buckets[i]);
}

return result;
}

function  insertionSort(arr) {
 if (arr.length <= 1) {
    return arr;
 }

 const first = arr[0];
 const rest = arr.slice(1);
 const sortedRest =  insertionSort(rest);

let i = 0
while (i < sortedRest.length && sortedRest[i] <= first) {
    i++;
}
return sortedRest.slice(0, i). concat([first], sortedRest.slice(i));

}