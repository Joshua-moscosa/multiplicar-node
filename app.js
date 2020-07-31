const argv = require('./config/yargs.js').argv;
const colors = require('colors/safe');

const { listarTablas, crearArchivo } = require('./multiplicar/multiplicar.js');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTablas(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: '.yellow, colors.green(`${ archivo }`)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}








/* let base = 'Hola'; */

//console.log(process.argv);

///let argv2 = process.argv;

//console.log('Limite: ', argv.limite);

/* let parametro = argv[2];
let base = parametro.split('=')[1]; */

/* console.log(base); */

/*  */