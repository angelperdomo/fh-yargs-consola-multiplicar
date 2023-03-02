const { createFileTxt } = require('./helpers/multiplicar.js')
const argv = require('./config/yargs')

console.clear()

// console.log( argv )

// console.log('base: yarg', argv.base)
// console.log(process.argv)
// // const [,,arg3 = 'base=5'] = process.argv
// // const [, base] = arg3.split('=')
// console.log(base)

// const base = 3
createFileTxt(argv.base, argv.listar, argv.hasta)
.then(file => console.log('nombre de archivo creado', file))
.catch(err => console.log(err))

