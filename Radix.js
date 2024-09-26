//Radix 
//Sin Recursividad 
function radixSort(arr) {
    const max = Math.max(...arr);
    const exp = 1;
    let radix = 10;

    while(max / exp > 0) {
     const buckets = Array.from({length: radix}, ()=> []);

     for (let i = 0; i < arr.length; i++) {
        const digit = Math.floor((arr[i]/ exp) % radix);
        buckets[digit].push(arr[i]);
     }

     arr = [];
     for (let i = 0; i < radix; i++) {
        arr = arr.concat(buckets[i]);
     }
     exp *= radix;
    }
    return arr;
}

//Con Recursividad 
function radixSort(arr,exp = 1) {
    const max = Math.max(...arr);
    const radix = 10;

    if(max/ exp <= 0){
        return arr;
    }

    const buckets = Array.from({length: radix}, ()=> []);

    for(let i = 0; i < arr.length; i++){
        const digit = Math.floor((arr[i]/ exp) % radix);
        buckets[digit].push(arr[i]);
    }

    const sortedBuckets = buckets.map(buckets =>  radixSort(buckets, exp*radix));
    return sortedBuckets.flat();

}