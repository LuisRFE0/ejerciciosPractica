const arr = [1, 2, 4, 5];

duplicar(arr);

function duplicar(arreglo) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    console.log(arr);
}