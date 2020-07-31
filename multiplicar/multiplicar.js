const fs = require('fs');
const colors = require('colors');

let listarTablas = (base, limite = 10) => {

    console.log('==========================');
    console.log(`====== Tabla del ${ base } =======`.green);
    console.log('==========================');

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } x ${ i } = ${ (base*i) }`);
    }
}

/* module.exports. */
crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido: '${ base }' no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } x ${ i } = ${ (base*i) } \n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }`)

        });
    });
}

module.exports = {
    crearArchivo,
    listarTablas
}