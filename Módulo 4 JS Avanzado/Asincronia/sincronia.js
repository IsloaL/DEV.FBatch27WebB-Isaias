/**
 * BLOQUE 1 - Código síncrono
 * Una línea se ejecuta inemediatemente despué de la otra
 * no hay código dependiente o bloqueante
 */
class Sincronia{
    ejecucion() {
        console.log('========== BLOQUE 1 ==========');        
        console.log('Primer proceso');
        console.log('Segundo proceso');
        console.log('Tercer proceso');
        
    }
}

export default new Sincronia();