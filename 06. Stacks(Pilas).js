/*
    Un stack basicamente es una pila, es decir, algo que estás apilando, lo primero que 
    entra se queda hasta abajo y lo último que entra se queda hasta arriba, de ahí su 
    nombre LIFO, Las In (El último que entra), First Out (Es el primero que sale).

    ** Métodos **
    Pop -> Remover el último elemento
    Push -> Agregar un elemento al final
    Peek -> Tomar al último elemento de la línea
*/

//Clase nodo
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//Clase pila
class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    //Método para seleccionar el elemento que está hasta arriba
    peek() {
        return this.top;
    }

    //Método para agregar un elemento hasta el final
    push(value) {
        const newNode = new Node(value);

        //Verificando si el stack está vacio
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            //Guardando el nodo que va a dejar de ser el top
            const holdingPointer = this.top;
            //El nuevo top es el nuevo nodo
            this.top = newNode;
            //El nodo nuevo que ahora es el top, apunta al antiguo top
            this.top.next = holdingPointer;
        }

        this.length++;

        return this;
    }

    //Método para eliminar el último elemento
    pop() {
        if (!this.length) {
            console.error("The stack is void!!");
            return;
        }

        const topNode = this.top;

        if (this.length === 1) {
            this.top = null;
            this.bottom = null;
        } else {
            //El nuevo top es el nodo al que apuntaba nuestro antiguo top)
            this.top = this.top.next;
        }

        this.length--;

        return topNode;
    }
}

const myStack = new Stack();