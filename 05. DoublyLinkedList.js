/*
    Una doubly linked list tiene el mismo comportamiento que una simply linked list, pero con 
    la particularidad de que esta SI puede regresar. Aún necesita ir moviéndose una por una, 
    pero ahora si lo desea puede regresar porque ya conoce quién es su elemento anterior y 
    también quién es el siguiente, es decir, ya no es necesario repetir el ciclo.
*/

//Clase nodo
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

//Clase lista doble
class MyDoubleLinkedLista {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        };
        this.cola = this.head;
        this.length = 1;
    }

    //Método para agregar nodos al final de la lista
    append(value) {
        const newNode = new Node(value);

        //El anterior al nuevo nodo, es el nodo que habia en la cola
        newNodo.prev = this.cola;
        //El ultimo nodo ahora apunta al nuevo nodo
        this.cola.next = newNode;
        //La cola del nodo ahora es el nuevo nodo
        this.cola = newNode;

        this.length++;

        return this;
    }
}

let myList = new MyDoubleLinkedLista(5);

myList.append(10);
myList.append(100);
myList.append(15);

console.log(myList);