function parOImpar(num) {
    num = parseInt(prompt("Ingrese un número entero cualquiera"));

    if (num % 2 === 0) {
        console.log(`El número, ${num}, es par `);
    } else {
        console.log(`El número, ${num}, es impar `);
    }
}

console.log(parOImpar());



/**
 * Algoritmo    Es par o impar

Variables		Número entero

Inicio
	escribir ("Introduzca un número entero cualquiera")
	leer (int)
	funcion (realizar la operación algebráica de dividir el número introducido entre dos)
	si (analizar el residuo si el residuo es cero, si sí, imprimir en pantalla "Es par")
	si no (imprimir "Es impar")
Fin
 */