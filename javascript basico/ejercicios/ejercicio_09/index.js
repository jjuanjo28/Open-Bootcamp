const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

const miFuncion = val => {
    if(typeof val === "number"){
        return 2 * val
    }
    throw new Error("este no es un numero")
 }
 const numero = "hola"
try {
    const doble = miFuncion(numero)
    console.log(doble)
} catch (error) {
    logger.error("este no es un numero", console.log("este no es un numero"))
   }
