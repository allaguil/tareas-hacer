import 'colors';
import { inquirerMenu, pause, leerInput } from './helpers/inquirer.js';
import { Tareas } from './models/tareas.js';

const main = async () => {

    let opt = '';
    const tareas = new Tareas();

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // crear opcion
                const desc = await leerInput('Descripción: ');
                console.log(desc);
            break;

            case '2':
                console.log( tareas._listado );
            break;
        }




        await pause();

    } while (opt !== '0');
}

main();


//const tareas = new Tareas(); //{}
//const tarea = new Tarea('Percepcion de la realidad!');
//tareas._listado[tarea.id] = tarea;
//console.log(tareas);
// La manera en que lo estamos manejando es una forma similar a como se trabaja en Bases de Datos no relacionales como Firebase o MongoDB