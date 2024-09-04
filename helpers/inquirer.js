import inquirer from 'inquirer';
import 'colors';

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            { value: '1', name: `${'1.'.green} Create Tarea` },
            { value: '2', name: `${'2.'.green} Listar Tareas` },
            { value: '3', name: `${'3.'.green} Listar Tareas Completadas` },
            { value: '4', name: `${'4.'.green} Listar Tareas Pendientes` },
            { value: '5', name: `${'5.'.green} Completar Tarea(s)` },
            { value: '6', name: `${'6.'.green} Borrar Tarea` },
            { value: '0', name: `${'0.'.green} Exit` }
        ]
    }
];

const inquirerMenu = async () => {

    console.clear();
    console.log('============================='.green);
    console.log('   Seleccione una opción'.white);
    console.log('=============================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);
    return opcion;
}

const pause = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.green.underline} para continuar`
        }
    ];

    console.log('\n');
    await inquirer.prompt(question); // El await va a esperar que el usuario le de click a la tecla "Enter"
}

const leerInput = async( message ) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message: message,
            validate( value ) {
                if( value.length === 0 ) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}

export { inquirerMenu, pause, leerInput }
