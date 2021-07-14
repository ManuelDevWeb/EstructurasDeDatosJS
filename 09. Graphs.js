/*
    Un grafo es una estructura de datos las cuales están compuestas de nodos conectados 
    entre sí.

    Los grafos son simplemente nodos interconectados, existen diferentes formas de 
    conectarlos entre si. Esta estructura de datos está compuesta por: Nodos [vértice] y
    Edge [Borde].

    ** Grafos dirigidos y no dirigidos **
    -> En los dirigidos un nodo nos lleva a otro nodo.
    -> En los no dirigidos un nodo nos lleva a otro nodo, pero también en viceversa.

    ** Grafos ponderados y no ponderados **
    Ponderados -> Hay un peso, un digito o valor en el vértice.
    No ponderados -> No tienen un valor en los vertices.

    ** Grafos cíclicos y acíclico **
    Cíclicos -> Es un grafo en el cual puedo recorrer un nodo y luego volver a ese nodo.
    Acíclicos -> No puedo regresar a un punto en específico una vez recorrido el grafo.

    ** Formas de representar un grafo **
    -> Edge List
    -> Adjacent List
    -> Adjancent Matrix

         2 - 0
        / \
       1 - 3

*/

//Edge List
const edgeList = [
    [0, 2],
    [2, 3],
    [2, 1],
    [1, 3]
];

//Adjacent List
const adjacentList = [
    [2], // 0
    [2, 3], // 1
    [0, 1, 3], // 2
    [1, 2] // 3
];

const adjacentListObject = {
    0: [2],
    1: [2, 3],
    2: [0, 1, 3],
    3: [1, 2]
}

//Adjacent Matrix
const adjacentMatrix = [
    [0, 0, 1, 0], // 0 - 2
    [0, 0, 1, 1], // 1 - 2 y 3
    [1, 1, 0, 1], // 2 - 0, 1 y 3
    [0, 1, 1, 0], // 3 - 1 y 2
]

const adjacentMatrixObject = {
    0: [0, 0, 1, 0],
    1: [0, 0, 1, 1],
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0]
}

//Clase grafo
class Graph {
    constructor() {
        this.nodes = 0;
        this.adjacentList = {}
    }

    //Agregar Nodos o vertices
    addVertex(node) {
        //Por cada elemento que se va agregando a la lista, le creamos un array vacio
        this.adjacentList[node] = [];
        this.nodes++;
    }

    //Agregar bordes o aristas
    addEdge(node1, node2) {
        //Agregando al array de cada nodo el nodo con el cual conecta
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
}

const myGraph = new Graph();

myGraph.addVertex("1");
myGraph.addVertex("3")
myGraph.addVertex("4")
myGraph.addVertex("5")
myGraph.addVertex("6")
myGraph.addVertex("8");

myGraph.addEdge("1", "3");
myGraph.addEdge("4", "1");
myGraph.addEdge("6", "1");
myGraph.addEdge("3", "6");
myGraph.addEdge("5", "3");
myGraph.addEdge("4", "5");
myGraph.addEdge("4", "8");

console.log(myGraph);