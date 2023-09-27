//Crear un objeto "contador" con un método "incrementar" que aumente un valor "valorActual" en 1 y otro método "obtenerValor" que devuelva el valor actual.

class Contador {
    constructor (valorActual){
        this.valorActual = valorActual;
    }
    incrementar(valorActual){
        let valorIncrementado = this.valorActual + 1;
        return valorIncrementado;
    }

    obtenerValor(valorActual){
        let resp = this.valorActual;
        return resp;
    }
}

var numToIncrement = new Contador(2)
console.log(numToIncrement.incrementar()); //devuleve número 3
console.log(numToIncrement.obtenerValor());//devuleve número 2

/* Crear una función "ordenarArray" que acepte un array 
 * de números como parámetro y devuelva el array 
 * ordenado de menor a mayor.
 */

function ordenarArray(array) {
    let arrayOrdenado = array.slice().sort((a,b) => a-b)
    return arrayOrdenado;
}
const numbers = [8,72,4,1,10,9,8,11]
console.log(ordenarArray(numbers));


// Crear una clase "Rectangulo" con propiedades "ancho"  y "alto" y un método "area" que calcule el área del rectángulo.
/*
class Rectangulo{
    constructor (ancho, alto){
        this.ancho = ancho;
        this.alto = alto;
        return this.ancho * this.alto;
    }

    areaDeRect() {
        let calculo = new Rectangulo(5,4);
        
    }
}

console.log(calculo(10,2));
*/

class Rectangulo {
    constructor (ancho, alto){
        this.ancho = ancho;
        this.alto = alto; 
    }
    area() {
        return this.ancho * this.largo;
        
    }
}
    let rec = new Rectangulo(5,4);
    console.log("El área del rectángulo de base " + this.ancho + " y altura de " + this.alto + " es igual a "  );


//Crear una función "factorial" que acepte un número como parámetro y devuelva su factorial (el producto de todos los números enteros positivos desde 1 hasta el número).
/*
function factorial() {
    var num = parseInt(prompt("Ingrese un número para conocer su factorial"));

    respuesta = 
}
*/




//  Crear un objeto "agenda" que permita agregar, 
//  eliminar y buscar contactos. Cada contacto debe 
//  tener un nombre, un email y un teléfono.

class Agenda {
    constructor(contactos){
        this.contactos = [];//[]ARREGLO O ARRAY       {}OBJETO
    }
    agregarContacto(nombre, mail, telefono) {
        const nuevoContacto = {nombre, mail, telefono}
        this.contactos.push(nuevoContacto)
    }

    eliminarContacto(nombre) {
        this.contactos = this.contactos.filter(contacto => contacto.nombre !== nombre)
    }

    buscarContacto(nombre) {
        return this.contactos = this.contactos.filter(contacto => contacto.nombre === nombre)
    }
}

const agenda = new Agenda();
agenda.agregarContacto("Enrique", "enrique.maya@gmail.com", "554698741")
agenda.agregarContacto("Alberto", "elbeto@gmail.com", "555555555")
agenda.agregarContacto("Arnulfo", "profe@gmail.com", "778996434")

console.log("Contactos en la agenda: ", agenda.contactos);

agenda.eliminarContacto("Enrique")
console.log("Contactos en la agenda: ", agenda.contactos);

