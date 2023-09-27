const miCuentaDeAlumno = {
//Idealmente, si le pones comillas dobles o comillas simples a un atributo, para mantener tu base de código o codebase uniforme, tienes que añadírselas a los demás atributos
    "id": "Bicho7",
    "nombre completo": "BicharajOso",//Las comillas simples son para las propiedades que tienen espacio
    "materias": ["Español", "Matemáticas", "Física"],
    "mascota1": "gato",
    "mascota2": "mapache",
    mostrarGrupo() {
        return `El alumno ${this["nombre completo"] }, se encuentra cursando la materia ${this.materias[2]}`;
    }
};

let claveDinamica = "materias";

console.log(miCuentaDeAlumno["nombre completo"]);

//Un "typo" es un error de ortografía en el código

//También podemos acceder a los valores de nuestros objetos con la notación de corchetes cuadrados "Square brackets notation"

console.log(miCuentaDeAlumno["id"]);
console.log(miCuentaDeAlumno["mostrarGrupo"]());

console.log(miCuentaDeAlumno["mascota" + 2]);//con la Square bracket notation nos permite añadir un poco más de dinamismo al poder concatenar dentro de ellos. Concatenando una variable se puede iterar para mostrar más valores siempre y cuando esto pueda ser consecutivos como en el caso de mascotas
console.log("holaaaaa");
console.log(miCuentaDeAlumno[claveDinamica]);
