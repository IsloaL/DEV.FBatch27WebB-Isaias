/**
 * 1.- Recorrer los datos
 * Se aseguran que los valores de la izquierda, sean los valores mpas chicos y los de la derecha los mayores.
 * preguntar de derecha a izquierda, si soy el elemento más chico que el elemento que estoy comparando y si eso ocurre, me inserto en esa posición.
 * 
 */


function ordenamientoPorInsercion(numerosAOrdenar) {
    for (let i = 1; i < numerosAOrdenar.length; i++) {
        let g = i;
        while (g >= 1 && numerosAOrdenar[g] < numerosAOrdenar [g - 1]) {
            [numerosAOrdenar[g - 1], numerosAOrdenar[g]] = [numerosAOrdenar[g], numerosAOrdenar[g - 1]]
            g--
            
        }
    }    
    return numerosAOrdenar    
}


console.log(ordenamientoPorInsercion([15, 88, 7, 17, 18]));