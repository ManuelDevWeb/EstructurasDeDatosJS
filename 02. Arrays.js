/*
    Los array son una colección de información que inicia desde la posición 0.
    Proveen la opción de disponer varios datos que se pueden acceder con un 
    mismo nombre (array[0], array[1]).

    ** Métodos **
    Push -> Agregar un elemento al final del array.
    Pop -> Borra el último elemento.
    Unshift -> Agrega un elemento al inicio del array.
    Shift -> Borra el primer elemento.
    Splice -> Agregar un elemento en una parte del array

    ** Tipos **
    Estático -> Tiene un tamaño por defecto, definido “manualmente”. No se puede 
    modificar su tamaño, si se desea agregar mas datos en el toca “clonarlo” y 
    crear otro array con la información clonana y la nueva.

    Dinámico -> Su tamaño (en JS) es el doble de la informacion proporcionada, 
    por ejemplo: const arr = [1, 2, 3] JS por defecto va a crear un array con 6 
    espacios o posiciones.

    A diferencia de los estáticos, los dinamicos pueden modificarse siempre cuando 
    respete ese tamaño que le proporciona el lenguaje. De lo contrario toca hacer 
    el mismo proceso de “clonarlo”
*/

//Clase Array
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }

    //Método para obtener un elemento
    get(index) {
        return this.data[index];
    }

    //Método para agregar un elemento
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    //Método para eliminar el último elemento del array
    pop() {
        //Almacenando último elemento para mostrarle al usuario cual se eliminó
        const lastItem = this.data[this.length - 1];
        //Eliminando último elemento
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    //Método para generar cambio en los indices
    shiftindex(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }

    //Método para eliminar un elemento especifico del array
    delete(index) {
        //Almacenando elemento eliminado para mostrarle al usuario
        const item = this.data[index];
        this.shiftindex(index);
        return item;
    }


}

const arreglo1 = new MyArray();

arreglo1.push("Hola");
arreglo1.get(0);

console.log(arreglo1);