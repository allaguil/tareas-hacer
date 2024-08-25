require('colors');
const { mostrarMenu, pausa } = require('./helpers/mensajes');
console.clear(); // limpia la consola cada vez que se ejecuta la aplicación

// función asíncrona
const main = async () => {
    console.log('Hola Mundo');

    let opt = '';
    do {
        opt = await mostrarMenu(); // Esperate hasta que tengamos una resolucion de mostrarMenu()
        console.log({ opt });
        if (opt !== '0') await pausa(); // Si opt es diferente de cero entonces haga la pausa sino salgase del programa de una vez.

    } while (opt !== '0'); // Mientras que opt NO sea 0 sigue mostrando el Menu.
}

main();

// Asi es como funciona basicamente esta aplicacion:
// Se va a desplegar el Menu de Opciones > Siempre y cuando el usuario digite una opcion del Menu que NO sea el numero 0, el Menu de Opciones se va a seguir desplegando.
// Pero si el usuario digita el numero 0, entonces el Menu NO se va a mostrar mas y la aplicacion ya NO se correrá.