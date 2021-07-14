/*
    Una cola o queue es una estructura de datos muy similar a una Pila. Nna Cola es 
    FIFO (First In First Out), es decir, siempre el primer elemento que  agreguemos, 
    será el primero que saquemos de ella.

    ** Métodos **
    Enqueue -> Agregar un elemento al final de la línea.
    Dequeue -> Remover al primer elemento de la línea.
    Peek -> Tomar el primer elemento de la línea.
*/

//Clase nodo
class Nodo {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//Clase cola
class Cola {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    //Método para tomar el primer elemento de la cola
    peek() {
        return this.first;
    }

    //Método para agregar un elemento al final de la cola
    enqueue(value) {
        const newNodo = new Nodo(value);

        //Verificando si la pila está vacia
        if (this.length === 0) {
            this.first = newNodo;
            this.last = newNodo;
        } else {
            //El último elemento apunta al nuevo nodo
            this.last.next = newNodo;
            //El nuevo nodo ahora es el último elemento
            this.last = newNodo;
        }

        this.length++;

        return this;
    }

    //Método para remover el primer elemento de la cola
    dequeue() {
        if (!this.length) {
            console.error("The queue is void!!");
            return;
        }

        const firstNode = this.first;

        if (this.length === 1) {
            this.first = null;
            this.last = null;
        } else {
            //El nuevo first es el nodo al que apuntaba al antiguo first
            this.first = this.first.next;
        }

        this.length--;

        return firstNode;
    }
}

const myQueue = new Cola();