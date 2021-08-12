const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs');
const colors = require('colors');


crearArchivo( argv.b , argv.l, argv.m )
.then( nombreArchivo => console.log(colors.green(nombreArchivo, 'creado')))
.catch( err => console.log(err));

    


// const base = 4;
//Desestructurar arrays para obtener argv manual
// const [ , ,arg3 = 'base=5'] = process.argv;
// const [ , base = 5 ] = arg3.split('=');