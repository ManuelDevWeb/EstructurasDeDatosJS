/*
    Los arboles son una estructura de datos que puede ser lineal o no ( ahora lo vemos), los arboles tienen 
    una estructura con nodos que estos representan ser los hijos.

    ** Elementos del árbol **
    Root o Raiz -> Es el nodo superior de todo el arbol, si sabes HTML(lo mas probable es que si) seria como 
                   en el DOM el HTML es el elemento root o más bien el padre
    Parent / Padre -> Contienen ramas que apuntan a otros nodos
    Child / Hijos -> Es un nodo conectado directamente con otro cuando se aleja de la raiz
    Lead / Hojas -> Un nodo sin hijos
    Sibling / Hermanos -> Son un conjunto de nodos que vienen del mismo padre
    Sub Tree / Sub Arbol -> Son arboles que estan dentro de nodos
    Arm / Baso -> Es la conexión entre un nodo y otro

    ** Binary Trees / Arboles Binarios **
    Un Binary Search Tree básicamente costa de un elemento root (El elemento padre del que todos descienden). 
    Es a partir de ese elemento en donde se empieza la búsqueda.

    La condición es simple, un elemento únicamente puede tener dos descendientes, no más. Los descendientes 
    que son mayores que el elemento padre se colocan del lado derecho y los descendientes que son menores se 
    colocan del lado izquierdo, simple, ¿verdad?

    Para buscar en un Binary Search Tree simplemente tienes que preguntarte: ¿Este elemento es mayor o menor 
    que el que estoy buscando? Ohh es mayor, entonces me voy para la derecha, y así sucesivamente hasta que 
    encuentres el elemento que estabas buscando.

    ** Métodos ** 
    Search -> Buscar por un nodo
    Insert -> Insertar un nodo
    Delete -> Borrar un nodo
*/

/*
         10
      4      20
    2   8  17   170    
*/

//Clase nodo
class Nodo {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

//Clase árbol
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    //Método para insertar un nodo
    insert(value) {
        //Instanciando nodo nuevo
        const newNodo = new Node(value);

        //Validando si existe el nodo raiz
        if (this.root === null) {
            this.root = newNodo;
        } else {
            //Nodo actual
            let currentNode = this.root;

            while (true) {
                if (value < currentNode.value) {
                    //Validando que no exista un nodo a la izquierda del nodo actual
                    if (!currentNode.left) {
                        //Si el valor a insertar, es menor al valor del nodo actual, insertamos a la izquierda
                        currentNode.left = newNodo;
                        return this;
                    }
                    //En caso de que exista un nodo a la izquierda, el nodo actual será ese nodo existente.
                    currentNode = currentNode.left;
                } else {
                    //Validando que no exista un nodo a la derecha del nodo actual
                    if (!currentNode.right) {
                        //Si el valor a insertar, es mayor al valor del nodo actual, insertamos a la derecha
                        currentNode.right = newNodo;
                        return this;
                    }
                    //En caso de que exista un nodo a la derecha, el nodo actual será ese nodo existente.
                    currentNode = currentNode.right;
                }
            }
        }
    }

    //Método para buscar un nodo
    search(value) {
        //Nodo actual
        let currentNode = this.root;

        //Mientras exista un nodo y el valor enviado no sea igual al valor del nodo actual se ejecuta
        while (currentNode && currentNode.value !== value) {
            //Se ejecuta si el valor enviado es menor al valor del nodo actual
            if (value < currentNode.value) {
                //El nuevo nodo actual, es el nodo izquierdo del anterior nodo actual.
                currentNode = currentNode.left;
            } else {
                //Se ejecuta si el valor enviado es mayor al valor del nodo actual
                //El nuevo nodo actual, el el nodo derecho del anterior nodo actual.
                currentNode = currentNode.right;
            }
        }

        if (!currentNode) {
            console.log("The tree are void!!");
        }

        return currentNode;
    }
}

const myTree = new BinarySearchTree();