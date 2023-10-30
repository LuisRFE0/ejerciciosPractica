let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

imprimirTodo(people); //1. Write a command that prints out all of the people in the list.
console.log(eliminar(people, 'Dani'));//2. Write the command to remove "Dani" from the array.
console.log(eliminar(people, 'Juan'));//3. Write the command to remove "Juan" from the array.
moverEnfrente(people, 'Luis');//4. Write the command to move "Luis" to the front of the array.
nombreFinal('Luis Flores');//5. Write the command to add your name to the end of the array.
detenerEn('Maria');//6. Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
console.log("El index de maria es: " + encontrar(people, 'Maria'));//7. Write the command that gives the indexOf where "Maria" is located.

function imprimirTodo(arr) {
    arr.forEach(e => {
        console.log(e)
    });
}

function encontrar(arr, persona) {
    const index = arr.indexOf(persona);
    return index;
}

function eliminar(arr, persona) {
    const index = encontrar(arr, persona);
    arr.splice(index, 1);
    return arr;

}

function moverEnfrente(arr, persona) {
    const index = encontrar(arr, persona);
    eliminar(arr, persona);
    arr.unshift(persona);
    console.log(arr);

}

function nombreFinal(nombre) {
    people.push(nombre);
    console.log(people);
}

5
function detenerEn(persona) {
    for (let i = 0; i < people.length; i++) {
        console.log(people[i]);
        if (people[i] === persona) {
            break;
        }
    }
}