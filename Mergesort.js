//Merge sort
//Sin Recursividad 
function mergeSort(arr) {
    const len = arr.length;
    const mid = Math.floor(len / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const result = [];
    let i = 0;
    let j = 0;

    while(i < left.length && j  < right.length) {
      if (left[i] <= right[j]){
         result.push(left[i]);
         i++;
     } else {
        result.push(right[j]);
        j++;
    }
}

while (i < left.length) {
  result.push(left[i]);
  i++;
 }

while (i  < right.length) {
 result.push(right[j]);
 j++;
}
return result;

}

function mergeSortIterative(arr) {
 const len = arr.length;
 const queue = [{arr, start: 0, end: len - 1 }];

 while (queue.length > 0) {
    const {arr: currentArr, start, end } = queue.shift();
    if (start < end) {
       const mid = Math.floor((start + end) / 2);
       const left = currentArr.slice(start,mid + 1);
       const right = currentArr.slice(mid + 1, end + 1);

       queue.push({ arr: left, start: 0, end: left.length -1 });
       queue.push({ arr: right, start: 0, end: right.length -1 });
    } else {
        arr[start] =  currentArr[start];
 }
}
return arr;
}

//Con Recursividad 
function mergeSort(arr) {
    if (arr.length <= 1) {
     return arr;
}

const mid =  Math.floor(arr.length / 2);
const left = arr.slice(0,mid);
const right = arr.slice(mid);

return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < left.length  && j < right.length) {
    if (left[i] <=  right[j]) {
        result.push(left[i]);
        i++;
} else {
    result.push(right[j]);
    j++;
  }
}

while(i < left.length) {
    result.push(left[i]);
    i++;
}

while(j < right.length){
    j++;
}
return result;
}