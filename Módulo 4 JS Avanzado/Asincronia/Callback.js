/**
 * Consisye en pasar una función como parámetro de otra, para que la segunda función la ejecute cuando lo requiera. Dicho de otra manera, es la programación de la ejecución del código dentro del callback.
 * 
 * Solución sencilla pero estéticamente compleja de leer y caótica.
 */

class Callback {
    ejecucion(){
        console.log('==================== BLOQUE 3 ====================');

        const showSuccesMessage = ()=>{
            console.log('proceso 3: compra exitosa');
        }

        const validatePaymentCallback = (showSuccesMessage) => {
            setTimeout( ()=> {
                console.log('Proceso 2: Validando tarjeta de crédito');
            }, 10000)
        }

        function validatePaymentCallback(showSuccesMessage) {

        }

        console.log('proceso 1: presiona el botón de compra')
        validatePaymentCallback(showSuccesMessage);
        console.log('Proceso 4: Notificación de mi amix');
    }
}

export default new Callback();