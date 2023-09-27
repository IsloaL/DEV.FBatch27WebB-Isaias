class Queue {
    constructor(){
        this.items = [] //Arreglo en el cual guardamos nuestros elementos
    }

    enqueue(item) { // encolar
        this.items.push(item); // Agrega un elemnto al final de la cola
    }

    dequeue(){ //desencolar
        if (this.isEmpty) {
            return 'Esta cola está limpia'
        }
        return this.items.shift(); // Dequeue: retira o elimina el primer elemntos de la cola
    }

    front() {
        return this.items[0] // devuelve el primer elemnto sin eliminarlo
    }

    back() {
        
    }


    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length; // devuelve la cantidad de elementos en la fila
    }

}

const cola = new Queue();

console.log(cola.front());

cola.enqueue(7);
cola.enqueue(24);
cola.enqueue(11);
cola.enqueue(3312);

console.log(cola.dequeue()); // ? = 7
console.log(cola.front()); // ? = 24
console.log(cola);
console.log(cola.size());
