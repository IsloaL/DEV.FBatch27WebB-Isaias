class Stack {
    constructor(){
        this.items = [] //Usamos un arreglo para poder almacenar datos en nuestra pila
    }

    push(item){
        this.items.push(item); // Agregamos al final de la pila un elemento
    }

    pop() {
        if(this.isEmpty()) {//el método isEmpty() se realizará más adelante, es parte de los métodos de nuestra clase stack
            return 'La pila está vacía'
        }
        return this.items.pop(); // Elimina y muestra (devuelve) el último valor de nuestra pila o stack
    }

    peek() { //[0,1,2,3,4] el arreglo tiene tamaño de 5 pero en la posición 4 está el valor 5
        return this.items[this.items.length - 1]; // devolvemos el valor del último elemento de nuestra pila pero no lo sacamos
    }

    size() {
        return this.items.length; //esto nos devuleve el tamaño de la pila
    }

    isEmpty(){
        return this.items.length === 0; //verificar si nuestra pila está vacía
    }

}

const pila = new Stack();

pila.push(95);
pila.push(66);
pila.push(22);
pila.push(37);
pila.push(77);
pila.push(19);

console.log(pila);

console.log(pila.pop());

console.log(pila);

console.log(pila.peek());

console.log(pila);

console.log(pila.size());

console.log(pila);

