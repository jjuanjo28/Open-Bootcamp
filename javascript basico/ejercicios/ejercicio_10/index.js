import * as funcionesMatematicas  from "./modulos/controller.js"
import chalk from "chalk"
const suma = funcionesMatematicas.suma
const multiplica = funcionesMatematicas.multiplica
const log = console.log
console.log(suma(1,2))
log(chalk.green(multiplica(4,5)))

