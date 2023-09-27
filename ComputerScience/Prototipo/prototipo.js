/*DEFINICIÓN: JAVASCRIPT, ES UN LENGUAJE MULTIPARADIGMA, PRINCIPALMENTE ORIENTADO A OBJETOS Y BASADO EN PROTOTIPOS (JAVA EN CLASES)
*las clases son fábricas de orbjetos
funciones contrsucturas crean protoipos
la clase es una estructura
*/

function Animal (nombre, color) {  //primera en mayúscula cuando sea prototipo, minúsculas función, inicial mayusc prototipo
    this.nombre = nombre;
    this.color = color;
    /**
     * DIFERENCIA ENTRE MÉTODO Y FUNCIÓN
     * un método es una función que se declara dentro de un prototipo
     * 
     */

    this.sonidoAnimal = function sonidoAnimal() {
        return `Hola, estoy emitiendo el sonido de  ${this.nombre}`;
    };
};

//const primerAnimal = new Animal(); //después del igual es crear una instancia, estamos instanciando, cuando instanciamos una variable se dice que estamos creando un objeto
//OBJETO = ES UNA INSTANCIA DE UN PROTOTIPO
//console.log(primerAnimal); 

// ¿CÓMO LE HARÍAS PARA CREAR LOS SIGUIENTES OBJETOS? (jaguar, jirafa conejo) me salió mal

// const segundoAnimal = new Animal(nombre, color);
//     this.nombre = 'jirafa';
//     this.color = 'naranja con manchas cafés';
// console.log(segundoAnimal);

// const tercerAnimal = new Animal('conejo', 'blanco');
// console.log(tercerAnimal);

//********************************* */
const jaguar = new Animal("jaguar", "amarillo");
const jirafa = new Animal("jirafa", "naranja con manchas");
const conejo = new Animal("conejo", "blanco");

console.log(jaguar);
console.log(jirafa);
console.log(conejo);

//para acceder a las propiedades de un objeto con la noctación de punto o dot notation

console.log(jaguar.nombre);
console.log(jirafa.color);
//para acceder a las propiedades de un objeto con la noctación de paréntesis cuadrados o square bracket
console.log(conejo["nombre"]);

/* DIFERENCIA ENTRE MÉTODO Y FUNCIÓN
     * un método se ejecuta utilizando el objeto y la notación del punto
     */

console.log(jaguar.sonidoAnimal());