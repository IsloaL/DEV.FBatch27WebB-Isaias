class Asincronia {
    ejecucion(){
        console.log('========== BLOQUE 2 ==========');
        const validatePayment = ()=> {
            setTimeout( ()=> {
                console.log('Proceso 2: Validando tarjeta de crédito');
            }, 100)
        }
        console.log('Proceso 1: Presiona el botón de comprar');
        validatePayment();
        console.log('Proceso 3: Compra exitosa');
    }
}

export default new Asincronia();