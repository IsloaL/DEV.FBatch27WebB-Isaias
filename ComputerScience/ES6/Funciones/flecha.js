//DIFERENCIAS IMPORTANTES ENTRE FLECHA Y NORMALES
/**
 * la función flecha nos da una sintaxis más limpia y fácil de leer.
 * normalmente se almacenan en constantes o variables.
 * EN LAS FUNCIONES FLECHA, NO EXISTE EL OBJETO "THIS" Y ESTAS NO PUEDEN SER PROTOTIPOS
 */


let saludar = ()=>{
    return "Hola Pan Pan"
};

console.log(saludar());

//SHORT ARROW FUNCTIONS ---> FUNCIONES CORTAS DE FLECHA
/**
 * reglas de sintaxis en arrow functions
 * si mi función sólo retorna un valor, puedo quitar el return explícito los paréntesis y hacer uso del return explícito
*/

const suma = (a, b) => a + b;
console.log(suma (4,9));

//SHORT ARROW FUNCTION QUE PIDE UN SÓLO PARÁMETRO
/**
 * si mi función sólo retorna un valor y pide un sólo parámetro, puedo aplicar la regla anterior y además quitar los paréntesis del parámetro
 */

const hi = persona => "Hola " + persona;
console.log(hi ("Primito Pan Pan"));


//

