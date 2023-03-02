const fs = require('fs')
const colors = require('colors')

const createFileTxt = async(base, listar = false, hasta = 10) => {

    try {
        
        
        let salida = ''
        
        for (let i = 1; i <= hasta; i++){
            salida += `${ base } x ${ i } = ${ base * i }\n`
        }
        
        if (listar){
                console.log('========================'.green)
                console.log('    Tabla del:'.underline.yellow, base)
                console.log('========================'.green)
                console.log(salida)
            }
        
            fs.writeFileSync(`./output/tabla-${ base }.txt`, salida)

            return `tabla-${ base }.txt`
        
    } catch (error) {

        throw error
        
    }
    
}

module.exports = {

    createFileTxt

}