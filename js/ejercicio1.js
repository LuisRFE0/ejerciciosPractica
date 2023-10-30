let arr = ["This", "is", "a", "sentence."];

function printOutString() {
    let cadena = '';
    arr.forEach(e => {
        cadena += e + ' ';
    });
    console.log( cadena);;
}

printOutString();