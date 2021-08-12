const argv = require('yargs')
    .option('base', {
        alias: 'b',
        demandOption: true,
        describe: 'Número de la  tabla de multiplicar deseada',
        type: 'number'
    })
    .option('listar', {
        alias: 'l',
        default: false,
        describe: 'true = ver los resultados en pantalla ',
        type: 'boolean'
    })
    .option('limite', {
        alias: 'm',
        default: 10,
        describe: 'Limite de la tabla ',
        type: 'number'
    })
    .check((argv, options) => {
        if( isNaN( argv.b )){
            throw 'La base tiene que ser un número';
        }
        return true;
    })
    .argv;

    module.exports = argv;