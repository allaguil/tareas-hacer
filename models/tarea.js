import { v4 as uuidv4 } from 'uuid';
//uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

class Tarea {

    id = '';
    desc = '';
    completadoEn = null;

    // El constructor es lo que se va a ejecutar cuando creemos una nueva instancia de nuestra Tarea
    constructor( desc ) {

        this.id = uuidv4(); // Esto va a generar un ID unico.
        this.desc = desc; // this hace referencia a la instancia de la clase que se este usando
        this.completadoEn = null;

    }

}

export { Tarea };


// npm uuid = Nos sirve para crear identificadores unicos a nivel mundial.

