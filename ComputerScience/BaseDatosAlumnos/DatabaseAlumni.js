// function Alumni (nombre, apellidoP, apellidoM, edad, materiasInscrita1, materiasInscrita2, materiasInscrita3, calif1, calif2, calif3, conducta) {
    
//         this.nombre = nombre;
//         this.apellidoP = apellidoP;
//         this.apellidoM = apellidoM;
//         this.edad = edad;
//         this.materiasInscrita1 = materiasInscrita1;
//         this.materiasInscrita2 = materiasInscrita2;
//         this.materiasInscrita3 = materiasInscrita3;
//         this.calif1 = calif1;
//         this.calif2 = calif2;
//         this.calif3 = calif3;
//         this.conducta = conducta;
//     }



// const alumno1 = new Alumni("Isaías", "López", "Alcaraz", 33, "Programación", "Calidad", "Validación", 9, 10, 8, "Mal Portado");
// const alumno2 = new Alumni("Isaías", "López", "Hernández", 65, "Programación", "Calidad", "Mécanica", 9, 10, 10, "Mal Portado");
// const alumno3 = new  Alumni("Aurora Angélica", "Hernández", "Alcaraz", 33, "Programación", "Calidad", "Producción", 8, 9, 10, "Duerme en clase");
// const alumno4 = new Alumni("Mario Rafael", "Sánchez", "Alcaraz", 35, "Programación", "Calidad", "Pintura artística", 10, 9, 7, "Bien portado");

// console.log(alumno1);
// console.log(alumno2);
// console.log(alumno3);
// console.log(alumno4);

// class inscripcionInicial extends Alumni (nombre, apellidoP, apellidoM, edad) {
//     constructor (nombre, apellidoP, apellidoM, edad){
//         super (nombre, apellidoP, apellidoM, edad);
//     }

//     get materiasInscritas (){
//         return `El alumno ${this.nombre, this.apellidoP, this.apellidoM} se encuentra inscrito en las materias de ${this.materiasInscrita1, this.materiasInscrita2, this.materiasInscrita3}`
//     }

// }

class Alumni {
    constructor( nombre, apellidoP, apellidoM, edad, materiasInscrita1, materiasInscrita2, materiasInscrita3, calif1, calif2, calif3, conducta){
    this.nombre = nombre;
    this.apellidoP = apellidoP;
    this.apellidoM = apellidoM;
    this.edad = edad;
    this.materiasInscrita1 = materiasInscrita1;
    this.materiasInscrita2 = materiasInscrita2;
    this.materiasInscrita3 = materiasInscrita3;
    this.calif1 = calif1;
    this.calif2 = calif2;
    this.calif3 = calif3;
    this.conducta = conducta;
    }

    
    
}

console.log("Para poder realizar el proceso inicial de inscripción se requiere de los siguientes datos: Nombre completo y Edad");
    
let nombre = prompt ("Favor de ingresar su(s) nombre(s)");
let apellidoP = prompt ("Favor de ingresar su apellido paterno");
let apellidoM = prompt ("Favor de ingresar su apellido materno");
let edad = prompt ("Favor de ingresar su edad en años");

console.log(`El alumno registrado es ${nombre +' '+ apellidoP +' '+ apellidoM} de ${edad} años`);



// function inscripcion() {
//     prompt("Ingrese su(s) nombres(s)")
// }



const alumno1 = new Alumni("Isaías", "López", "Alcaraz", 33, "Programación", "Calidad", "Validación", 9, 10, 8, "Mal Portado"),
alumno2 = new Alumni("Isaías", "López", "Hernández", 65, "Programación", "Calidad", "Mécanica", 9, 10, 10, "Mal Portado"),
alumno3 = new  Alumni("Aurora Angélica", "Hernández", "Alcaraz", 33, "Programación", "Calidad", "Producción", 8, 9, 10, "Duerme en clase");
alumno4 = new Alumni("Mario Rafael", "Sánchez", "Alcaraz", 35, "Programación", "Calidad", "Pintura artística", 10, 9, 7, "Bien portado");



// function inscripcionInicial (nombre, apellidoP, apellidoM, edad) {
//     const alumno1 = new Alumni();
//     const alumno2 = new Alumni();
//     const alumno3 = new Alumni();
//     const alumno4 = new Alumni();
    
// }

