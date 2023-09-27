class Node {
    constructor (valor) {
        this.valor = valor; //Datos almacenados en el nodo
        this.nextNode = null //Referencia a donde apuntará nuestro nodo
    }
}

class LinkedList {
    constructor (){
        this.cabeza = null; //puntero (apuntamos) al primer nodo
    }
    append(valor) {
        const nuevoNode = new Node(valor);

        if (!this.cabeza) {
            this.cabeza = nuevoNode; // si la lista está vacía, el nuevo nodo se convierte en el primero
        } else {
            let actual = this.cabeza;
            while (actual.nextNode) {
                actual = actual.nextNode
                
            }
            actual.nextNode = nuevoNode; //agrega el nuevo nodo al final de la lista
        }
    }

    prepend(valor){
        const nuevoNode = new Node(valor)
        nuevoNode.nextNode = this.cabeza //establecemos el nuevo nodo como el primero o cabeza
        this.cabeza = nuevoNode
    }

    delete(valor){
        if (!this.cabeza) {
            return 'Borré la cabeza'
        }
        if (this.cabeza.valor === valor) { //elimina el primer nodo si contiene los datos buscados
            this.cabeza = this.cabeza.nextNode;
            return;
        }
        let actual = this.cabeza;
        while (actual.nextNode) {
            if (actual.nextNode.valor === valor) { //elimina el nodo siguiente si contiene los daros buscados
                actual.nextNode = actual.nextNode.nextNode
                return;
            }
            actual = actual.nextNode
        }
    }

    display() {
        let actual = this.cabeza;
        while (actual) {
            console.log(actual.valor);
            actual = actual.nextNode
        }
    }

    setHead(Node) {
        if (!Node || !(Node instanceof Node)){
            return console.log('El nodo ingresado no es un nodo válido');
        }
        Node.nextNode
    }

}

const linkedList = new LinkedList();
linkedList.append(10);
linkedList.display();
linkedList.append(23);
linkedList.append(19);
linkedList.append(9);
linkedList.append(7);
linkedList.append(18);
linkedList.append(50);
linkedList.display();
console.log('-------------');
linkedList.delete(23);
linkedList.display();
console.log('-------------');
linkedList.delete(10);
linkedList.display();
console.log('-------------');
linkedList.prepend(7);
linkedList.display();


