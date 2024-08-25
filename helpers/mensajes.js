require('colors');
const readline = require('readline'); // Modulo nativo de NodeJS

// Esta funcion retorna una promesa
const mostrarMenu = () => {

    return new Promise((resolve) => {
        console.clear();
        console.log('============================='.green);
        console.log('   Seleccione una opción'.green);
        console.log('=============================\n'.green);

        console.log(`${'1.'.green} Crear Tarea`);
        console.log(`${'2.'.green} Listar Tareas`);
        console.log(`${'3.'.green} Listar Tareas Completadas`);
        console.log(`${'4.'.green} Listar Tareas Pendientes`);
        console.log(`${'5.'.green} Completar Tarea(s)`);
        console.log(`${'6.'.green} Borrar Tarea`);
        console.log(`${'0.'.green} Salir\n`);

        // "createInterface" método para crear la interfaz para interactuar con el usuario
        const rl = readline.createInterface({
            input: process.stdin, //  Espera la opción ingresada en el teclado
            output: process.stdout // Muestra un msg al usuario en pantalla
        });

        // Una vez creada la interfaz en la constante "rl" podemos utilizarla con el metodo .question() para comenzar a interactuar con el usuario en consola.
        // Este metodo .question() Despliega al usuario una pregunta o mensaje. Luego, se captura la opción ingresada en el teclado por el usuario e inmediatamente se dispara con un callback que toma esa respuesta del usuario.
        rl.question('Seleccione una opción: ', (opt) => {
            rl.close(); // Debemos terminar el readline
            resolve(opt); // Se resuelve la promesa y pasa en el resolve la opción ingresada en el teclado por el usuario "ej:1"
        });

    });
}

// Esta funcion regresa una promesa
const pausa = () => {

    return new Promise((resolve) => {
        // Crear la interfaz para mostrar y recibir información al usuario
        const rl = readline.createInterface({
            input: process.stdin, //  espera la opción ingresada en el teclado
            output: process.stdout // retorna un msg al usuario en pantalla
        });

        // Para mostrar al usuario una pregunta (stdout). Esto se dispara con un callback que toma la respuesta del usuario.
        rl.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt) => {
            rl.close(); // Debemos terminar el readline
            resolve();
        });
    });


}

module.exports = {
    mostrarMenu,
    pausa
}