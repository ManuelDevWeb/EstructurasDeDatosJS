/*
    Las Hash Table funcionan similar a un Array, solo que en vez de índices numéricos 
    se tienen índices o keys en caracteres, entonces es necesario una función intermedia 
    que convierte el key en caracteres en índice numérico.

    Hash Table es similar a un objeto JSON, estos hash se van guardando en Buckets (Cubetas)
    de información y el hash function le da un addres.

    ** Métodos **
    Insert -> Inserta un elemento en la tabla
    Search -> Buscar un elemento por key
    Delete -> Borrar un elemento

    ** Colisión de Hash Table **
    En ocasiones pasar un key distinto puede generar un mismo hash, debemos saber tratar
    estas colisiones.
*/

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    //Método para crear el hash
    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            //Generando número random, que sera el hash a regresar
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    //Método para agregar un elemento en el hashTable
    set(key, value) {
        //Address donde se guardara el valor
        const address = this.hashMethod(key);

        //Validando que no exista el dato con ese address
        if (!this.data[address]) {
            this.data[address] = [];
        }
        //En caso de que ya exista, no reescriba sino que agrega la info en el bucket
        this.data[address].push([key, value]);

        console.log(this.data);
        return this.data;
    }

    //Método para buscar un elemento por key
    get(key) {
        //Address donde se guardara el valor
        const address = this.hashMethod(key);
        //Address donde se encuentra nuestra información
        const currentBucket = this.data[address];

        //Validando si existe el elemento (Puede tener mas de un elemento si hay una colision)
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                //Validando si el key del elemento es igual al key que le enviamos
                if (currentBucket[i][0] === key) {
                    //Retornando el value del elemento
                    return currentBucket[i][1];
                }
            }
        }
        //En caso de que no exista retornamos undefined
        return undefined;
    }

    //Método para eliminar un elemento por key
    delete(key) {
        //Address donde se guardara el valor
        const address = this.hashMethod(key);
        //Address donde se encuentra nuestra información
        const currentBucket = this.data[address];

        //Validando si existe el elemento (Puede tener mas de un elemento si hay una colision)
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                //Validando si el key del elemento es igual al key que le enviamos
                if (currentBucket[i][0] === key) {
                    const deleted = currentBucket[i][1];
                    //Eliminando 1 elemento desde el indice i
                    this.data[address].splice(i, 1);
                    return deleted;
                }
            }
        }
        return undefined;
    }

    //Método para obtener todos los elementos
    getAllKeys() {
        const keys = [];
        for (let i = 0; i < this.data.length; i++) {
            //Validando que exista información en el indice i
            if (this.data[i]) {
                //Recorriendo el arreglo dentro del hashTable
                for (let j = 0; j < this.data[i].length; j++) {
                    //Agregando al arreglo de keys el key de cada elemento que se encuentra en cada array del hashTable
                    keys.push(this.data[i][j][0]);
                }
            }
        }
        return keys;
    }
}

const myHashTable = new HashTable(50);

myHashTable.set("Nombre", "Jaime");
myHashTable.get("Nombre");
myHashTable.set("Nombre", "Manuel");
myHashTable.set("Apellido", "Valencia");
myHashTable.get("Apellido");