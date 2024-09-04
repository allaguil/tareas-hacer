import 'colors';
import { inquirerMenu, pause, leerInput } from './helpers/inquirer.js';
import { Tareas } from './models/tareas.js';
import { guardarDB, leerDB } from './helpers/guardarArchivo.js';

const main = async () => {

    let opt = '';
    const tareas = new Tareas(); // instancia de las Tareas

    const tareasDB = leerDB();

    if (tareasDB) { // cargar tareas
        tareas.cargarTareasFromArray( tareasDB );
    }

    do {
        opt = await inquirerMenu(); // Imprimir el Menú y retorna la opcion seleccionada por el usuario

        switch (opt) {
            case '1':
                // Crear Opcion
                const desc = await leerInput('Descripción:');
                tareas.crearTarea(desc);
            break;

            case '2':
                tareas.listadoCompleto();
            break;
        }

        guardarDB( tareas.listadoArr );


        await pause();

    } while (opt !== '0');
}

main();