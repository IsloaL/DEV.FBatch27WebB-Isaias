function prepararPizza(especialidad,tiempo){
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res(`Pizza preparada: ${especialidad}`)
        }, tiempo);
    })
}

const ordenPizzas = [
    prepararPizza('Hawaiana', 2000),
    prepararPizza('3 Quesos', 3000),
    prepararPizza('Pastor', 2500),
    prepararPizza('Mexicana', 15000),
]
/*
Promise.all(ordenPizzas).then(
    pizzas => {
        pizzas.forEach( pizza => console.log(pizza))
    }
)


function prepararPizza(especialidad,tiempo){
    return new Promise((res, rej) =>{
        setTimeout(() => {
            if(tiempo < 3000)
                res(`Pizza preparada:${especialidad}`)
            else
                rej('La pizza quedó fría')
        }, tiempo);
    })
}

const ordenPizzas = [
    prepararPizza('Hawaiana', 2000),
    prepararPizza('3 Quesos', 3001),
    prepararPizza('Pastor', 2500),
    prepararPizza('Mexicana', 1500),
]


Promise.all(ordenPizzas).then(
    pizzas => {
        pizzas.forEach( pizza => console.log(pizza))
    }
).catch(err => console.log(err))
*/
async function mandarOrdenPizzas(){
    try {
        const pizzasPreparadas = await Promise.all(ordenPizzas) // espera a que se ejecute el proceso
        pizzasPreparadas.forEach(pizza => console.log(pizza))
    } catch (error) {
        console.log(error);
    }
}