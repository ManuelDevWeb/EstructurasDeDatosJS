/*
    Linked List son simplemente un conjunto de nodos ordenados que contienen los valores que 
    necesitemos (numbers, strings, boolean, etc). Cada uno tiene un valor y una referencia a 
    un siguiente nodo.

    ** Métodos ** 
    Prepend -> Agregar un nodo al inicio
    Append -> Agregar un nodo al final
    Lookup / Search -> Buscar un nodo
    Insert -> Insertar un nodo en la lista
    Delete -> Borrar un nodo

    ** Singly Linked List **
    -> Tenemos un nodo, Se compone de dos factores: valor, valor del Next.
    -> Si deseamos llegar a algún lugar, debemos empezar del Head hasta el lugar especificado.
    -> No podemos regresar una vez hemos avanzado en un lugar, sera necesario volver a hacer 
       otro recorrido.
*/

// 1 --> 2 --> 3 --> 4 --> 5 --> null

/*
let singlyLinkedList = {
    head: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: {
                        value: 5,
                        next: null
                    }
                }
            }
        }
    }
}
*/

//Clase nodo
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//Clase lista
class MySinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.cola = this.head;
        this.length = 1;
    }

    //Método para agregar nodos al final de la lista
    append(value) {
        const newNode = new Node(value);

        //El ultimo nodo ahora apunta al nuevo nodo
        this.cola.next = newNode;
        //La cola del nodo ahora es el nuevo nodo
        this.cola = newNode;

        this.length++;

        return this;
    }

    //Método para agregar nodos al inicio de la lista
    prepend(value) {
        const newNode = new Node(value);

        //El nuevo nodo, apunta al nodo que habia primero
        newNode.next = this.head;
        //La cabeza de la lista, ahora es el nuevo nodo
        this.head = newNode;

        this.length++;

        return this;
    }

    //Método para buscar un indice en la lista
    getTheIndex(index) {
        let count = 0;
        //Nodo actual
        let currentNode = this.head;

        while (count !== index) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode;
    }

    //Método para agregar nodos intermedios en la lista
    insert(index, value) {
        //Validar que el indice exista
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);
        //Se coloca index - 1 para que el nodo anterior apunte al nuevo nodo que ira en el index asignado
        const firstPointer = this.getTheIndex(index - 1);
        //Nodo que queda esperando, este se desplaza una posicion mas de la original
        const holdingPointer = firstPointer.next;

        firstPointer.next = newNode;
        newNode.next = holdingPointer;

        this.length++;

        return this;
    }

    //Método para eliminar un nodo
    remove(index) {
        //Tomamos el nodo actual, su nodo anterior y siguiente para cambiar los next
        const previousPointer = this.getTheIndex(index - 1);
        const holdingPointer = this.getTheIndex(index + 1);

        previousPointer.next = holdingPointer;

        this.length--;

        return this;
    }
}

let myList = new MySinglyLinkedList(5);

myList.append(10);
myList.append(100);
myList.append(15);
myList.append(20);
myList.append(50);
myList.insert(3, 40);

console.log(myList);