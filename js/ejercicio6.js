function burbuja(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const array = [3, 6, 12, 5, 100, 1];
console.log("Arreglo original: " + array);
console.log("Arreglo ordenado: " + burbuja(array));
