let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];


function encontrarElementosComunes(arreglo1, arreglo2) {
    for (let i = 0; i < arreglo1.length; i++) {
        for (let j = 0; j < arreglo2.length; j++) {
            if (arreglo1[i] === arreglo2[j]) {
                console.log("Elemento común encontrado: " + arreglo1[j]);
            }
        }
    }
}

encontrarElementosComunes(student1Courses, student2Courses);
