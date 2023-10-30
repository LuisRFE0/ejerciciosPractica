const arr = [1, 2, 3, 4];

sumaProducto(arr);

function sumaProducto(arr) {
    let producto;
    let sumas = 0;
    for (let i = 0; i < arr.length; i++) {
        sumas += arr[i];
    }

    producto = arr.reduce((resultado, elemento) => { return resultado * elemento; });

    const resultado2 = document.querySelector('.q');
    let res = document.createElement('p');
    res.textContent = 'dfgdfg';
    resultado2.appendChild(res);


    // const resultado3 = document.querySelector('.q');
    // let res2 = document.createElement('p');
    // res.textContent = 'dfgdfg'; // Asigna el texto al elemento de párrafo
    // resultado2.appendChild(res); // Agrega el elemento de párrafo como hijo del elemento seleccionado

    console.log(`El resultado de la suma es: ${sumas} y el producto es : ${producto}`);
}




