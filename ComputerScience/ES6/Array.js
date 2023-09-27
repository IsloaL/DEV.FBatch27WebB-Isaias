class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    };
    get (index) {
        return this.data[index];
    }
    push(element) {
        this.data[this.length] = element;
        this.length++;
        return this.data;
    }
    pop() {//validar que el array no está vacío
        //también se debe modificar la cantidad de elementos y restar una unidad. para eliminar el último elemento, debemos de posicionarnos ahí
        const lastItem = this.data[this.length - 1] // 'esto lo puse yo, checar que sucede lo mismo = lastElement;
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    unshift() {//se debe de aumentar la longitud del arreglo en una unidad, modificar los índices desplazándolos hacia adelante, solicitar un valor y una vez que lo tengamos, colocarlo en el índice cero
        const lastItem = this.data[this.length - 1];

        for (let g = 0; g <= this.length - 1; g++) {
            this.data[g + 1] = this.data[g]
        }
        
        this.data[this.length] = lastItem;

        let item = this.data[0];

        this.length++;
        return this.length;
    }
    shift() { //TODO: Crear método para remover el primer elemento

    }
};




const arr1 = new MyArray();
console.log(arr1);

console.log(arr1.get(1));

arr1.push("Dolores");
arr1.push(["Español", "Matemáticas"]);
arr1.push(78);

console.log(arr1.get(0));
console.log(arr1);

arr1.unshift("cero");

console.log(arr1);
