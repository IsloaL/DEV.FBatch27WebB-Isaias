/**
 *1.- Los objetos literales son una estructura de datso que también son conocidos como arreglos asociativos (PHP) o mapas
 *2.- Los objetos literales son distintos de los objetos de POO
 *3.- Los objetos literales son distintos de JSON
 *4.- Pueden almacenar cualquier tipo de dato, desde primitivos hasta referencias
 *5.-Los objetos literales ons un objeto de tipo "Object"
 */

// LAS PROPIEDADES SE DEFINEN COMO PARES DE CLAVE Y VALOR
const miCuentaDeAlumno = {
    id: "Bicho7",
    nombre: "Cinthya",
    materias: ["Español", "Matemáticas", "Física"],
    mostrarGrupo() {
        return `El alumno ${this.nombre}, se encuentra cursando la materia ${this.materias[2]}`;
    }
};
console.log(miCuentaDeAlumno);

// "this", es un objeto que se crea para cada función, con excepción de las arrow function y también existe para cada objeto, ya sea objeto literal o de POO y representa una autoreferencia para poder acceder a mis propias referencias

// Podemos acceder a los valores de nuestras propiedades y métodos, usando la notación de punto o dot notation

console.log(miCuentaDeAlumno.materias);
console.log(miCuentaDeAlumno.materias[0]);//lo de los corchetes es el índice del array
console.log(miCuentaDeAlumno.mostrarGrupo());
