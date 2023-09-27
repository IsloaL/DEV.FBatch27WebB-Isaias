/**Bloque 5 - Solución asíncrona por promesas (pending, response (resolve, reject))
 * promete que va a regresar algo, ya sea favorable o no
 */

class Await{
    ejecucion(){
        console.log('============== BLOQUE 5 ==============');

        const validatePaymentPromise = () =>{
            return new Promise((resolve, reject)=>{
                console.log('2 Validando la tarjeta');
                setTimeout(()=>{
                    const statusArray = [200,500];
                    const randomResponse = statusArray[Math.floor(Math.random())];
                    if ( randomResponse === 200){
                        // 200 ok
                        console.log('Todo very very bien!! gasta tus ahorros')
                        resolve('Todo very very bien!! gasta tus ahorros')
                    } else if (randomResponse === 500) {
                        // 500 Internal server error
                        console.log('Corran se esta quemando el servidor!!! tiren todo')
                        reject('Corran se esta quemando el servidor!!! tiren todo')
                    }  
                }, 5000);
            }
            )
        }

        async function main(){
            console.log('1 Presiona el botón de comprar');

            try {
                await validatePaymentPromise();
                console.log('3 ver el mensaje de "Gracias joven"');
                console.log('4 Entregaremos el paquete cuando este sea enviado');
            } catch (error){
                console.log('Error: ', error);
            }

            console.log('============= BLOQUE 5 =============');
        }
    }
}
export default new Await();