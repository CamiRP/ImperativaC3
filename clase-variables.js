// ANCHOR ---> Variables

// para crear variables uso let o const 
// necesito una de esas palabras + nombre que le quiera asignar + = (para asignar un valor) + valor
// se recomienda que a const se les nombra la variable con mayusculas pero depende de donde trabaje 
// se puede nombrar una variable con snake case nombre_usuario o camel case nombreUsuario 

let nombre = "Pepe"
const apellido = "Perez"

console.log (nombre)
console.log (apellido)

// diferencia let y const
// a let las puedo modificar en el tiempo pero a const no se le modifica el valor
// no tengo que volver a usar let o sino intenta crear una nueva variable nuevamente 
// en js no es necesario poner el ; con el enter es suficiente

nombre = "Carmen"

console.log (nombre)


// en el caso de const no se puede modificar el valor ya que const es una variable constante, en la terminal aparecerá un error

// ANCHOR ---> Tipo de datos -- primitivos

// Existen los numeros, texto y booleanos
// STRINGS o cadena de texto, quiero guardar texto en una variable, cada espacio que este dentro de los "" o '' cuenta como un caracter

let frase = "hola ¿cómo estás?"

// NUMBER o numero, no llevan "" puede ser cualquier tipo de numero, si es decimal va con un punto "."

let edad = 12

// BOOLEAN, se usan para verificar cosas, responde con true o false, no va entre comillas

let esMayorDeEdad = false 
let isLogged = true

// UNDEFINED = aun no le doy un valor, aun no sé cual será, guardará en un futuro porque ahora no la manejo, no es necesario escribirlo porque si no le doy valor a una variable lo deja así
// NULL = no existe, no se pone, es lo que devuelve cuando no encuentra algo
// NaN =  not a number, no se pone, es lo que devuelve al resolver una operacion que no da resultado numerico 

let precio = undefined
let stock = null
let x = NaN

// para ordenar la info en la terminal puedo usar console.log("------") o console.log("x",: x) 

// ANCHOR ----> operadores
// MATEMATICOS, las tipicas operaciones matematicas suma, resta, mult y division

let n1 = 5
let n2 = 2 

console.log (n1 + n2)
console.log (n1 - n2)
console.log (n1 * n2)
console.log (n1 / n2)
// MODULO, par, impar, multiplos, es el resto de la division
console.log (n1 % n2)

// CONCATENAR --- juntar (en este caso string) ya no se usaaaaa

let palabraUno = "hola"
let palabraDos = "chau"

let fraseCompleta = palabraUno + palabraDos
console.log (fraseCompleta)

// TEMPLATE LITERALS --- backsticks `` (ctrl+alt+}})

let fraseCompleta2 = ` ${palabraUno} pepe ${palabraDos} , yo muy bien!`
console.log (fraseCompleta2) 

// COMPARACION --- puedo comparar lo que quiera -- siempre devuelven un booleano
// para js 6 == "6" porque no ve que son distintos TIPOS de datos 
// lo puedo solucionar con === !== es igualdad o desigualdad estricta

let num1 = 6
let num2 = 12 

console.log ( num1 == num2) //simple
console.log ( num1 != num2) //simple 
console.log ( num1 > num2)
console.log ( num1 < num2)
console.log ( num1 >= num2)
console.log ( num1 <= num2)

