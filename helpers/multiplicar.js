const fs = require('fs');
const colors = require('colors');


const crearArchivo = async ( base = 5 , listar = true, limite = 10 ) =>{



    try {   
        console.clear();
        let salida  = '';
        let consola  = '';

        if(limite > 200 ){ limite = 200 };
        
        for( let i = 1; i<=limite; i++ ){
            salida += (`${base} x ${i} = ${base * i}\n`);
            consola += (`${base} ${ 'x'.green } ${i} ${'='.green} ${base * i}\n`);
        }
        

        if( listar ) {
            console.log('===================='.blue);
            console.log( colors.rainbow('Tabla del: '), colors.green( base ));
            console.log('===================='.blue);
            console.log(consola.bold);
        }

        const nombreArchivo = `tabla-${base}.txt`

        fs.writeFileSync(`./salida/${nombreArchivo}`, salida);

        return nombreArchivo;
        
    } catch (err) {

        throw err;

    }

    

}

module.exports = {
    crearArchivo
}