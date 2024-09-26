/* Los algoritmos de ordenamiento son técnicas utilizadas para organizar elementos en un arreglo de forma ascendente o descendente.
1. Bubble Sort (Ordenamiento Burbuja) (para cantidades muy grande no es recomendable cuando son 5 valores y mas )
Este algoritmo compara pares de elementos adyacentes y los intercambia si están en el orden incorrecto. Este proceso se repite hasta que el arreglo esté ordenado.
Ejemplo: */
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
  
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          // Intercambiar elementos
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
        }
      }
      n--; // Reducir el rango porque el último ya está en su lugar correcto
    } while (swapped);
  
    return arr;
  }
  
  console.log(bubbleSort([5, 3, 8, 4, 2]));  // Salida: [2, 3, 4, 5, 8]

/*   2. Selection Sort (Ordenamiento por Selección)
Este algoritmo encuentra el valor más pequeño en un arreglo y lo coloca al principio. Luego repite el proceso para el resto del arreglo.

Ejemplo: */
function selectionSort(arr) {
    let n = arr.length;
  
    for (let i = 0; i < n; i++) {
      let minIndex = i;
      // Encontrar el mínimo elemento en el arreglo desordenado
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      // Intercambiar el mínimo elemento con el primer elemento
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  
    return arr;
  }
  
  console.log(selectionSort([29, 10, 14, 37, 13]));  // Salida: [10, 13, 14, 29, 37]

/*   3. Insertion Sort (Ordenamiento por Inserción)
Este algoritmo construye el arreglo ordenado de izquierda a derecha, tomando un elemento de la parte desordenada y colocándolo en la posición correcta.

Ejemplo: */
function insertionSort(arr) {
    let n = arr.length;
  
    for (let i = 1; i < n; i++) {
      let current = arr[i];
      let j = i - 1;
  
      // Mover los elementos mayores a la derecha
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = current; // Insertar el elemento en su posición correcta
    }
  
    return arr;
  }
  
  console.log(insertionSort([12, 11, 13, 5, 6]));  // Salida: [5, 6, 11, 12, 13]
  
/*   4. Merge Sort (Ordenamiento por Mezcla)
Este es un algoritmo de tipo divide y vencerás. Divide el arreglo en mitades, las ordena por separado y luego las combina para formar el arreglo ordenado.
 Ejemplo*/
 function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));  // Salida: [3, 9, 10, 27, 38, 43, 82]
  
/*   5. Quick Sort (Ordenamiento Rápido)
Este es otro algoritmo de tipo divide y vencerás. Selecciona un "pivote" y organiza el arreglo de modo que los elementos menores que el pivote estén a la izquierda y los mayores a la derecha, luego repite el proceso.

Ejemplo: */
function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  console.log(quickSort([10, 7, 8, 9, 1, 5]));  // Salida: [1, 5, 7, 8, 9, 10]
/*   
  6. Heap Sort (Ordenamiento por Montículos)
Es un algoritmo basado en una estructura de datos llamada "montículo" (heap). Se construye un max-heap y luego se extrae el elemento máximo para colocarlo en el final del arreglo.

Ejemplo: */
function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
  
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
  
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
  
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, n, largest);
    }
  }
  
  function heapSort(arr) {
    let n = arr.length;
  
    // Construir el max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  
    // Extraer elementos uno por uno
    for (let i = n - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      heapify(arr, i, 0);
    }
  
    return arr;
  }
  
  console.log(heapSort([12, 11, 13, 5, 6, 7]));  // Salida: [5, 6, 7, 11, 12, 13]
  
/*   Resumen de algoritmos:
Bubble Sort: Simple pero ineficiente para grandes arreglos.
Selection Sort: Busca el mínimo en cada iteración, ineficiente para grandes datos.
Insertion Sort: Eficiente para arreglos pequeños o casi ordenados.
Merge Sort: Divide el arreglo y lo combina, eficiente pero usa espacio adicional.
Quick Sort: Muy eficiente en la mayoría de los casos, pero puede tener el peor caso si el pivote no es ideal.
Heap Sort: Usa una estructura de montículo, eficiente y no usa espacio extra. */