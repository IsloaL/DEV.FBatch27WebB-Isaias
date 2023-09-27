const arr = [0, 12, 67, 4, 2, 1];

function ordenamientoBurbuja(arregloDeNumPorOrdenar) {
    const total = arregloDeNumPorOrdenar.length;

    for (let i = 0; i < total; i++) {//con este for se avanza
        for (let g = 0; g < total; g++) {//con este for se compara por valores y se ordena de mayor a menor
            if (arregloDeNumPorOrdenar[g] > arregloDeNumPorOrdenar [g + 1]) {
                [arregloDeNumPorOrdenar[g] > arregloDeNumPorOrdenar [g + 1]] = [arregloDeNumPorOrdenar [j + 1], arregloDeNumPorOrdenar [j]];
            }
        }
    }
    return arregloDeNumPorOrdenar;
}

console.log(ordenamientoBurbuja(arr));