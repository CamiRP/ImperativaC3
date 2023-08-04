//ANCHOR ---- Operadores lógicos

//AND ---> &&
// concatena evaluaciones o condiciones, para que sea true, todo tiene que cumplirse sí o sí, si solo una cosa es falso, todo es falso
// se queda con el ultimo true (truthy (num mayor a 0, [], {}, "holi")) o el primer false (falsy (0,"",null,undefined))

let estaLogueado = false
let esAdmin = true 

let tienePermiso = estaLogueado && esAdmin
console.log (tienePermiso)

//OR ---> ||
//le da la oportunidad al sistema de llegar al final hasta pillar un true, si todos son false, devuelve false
//con uno que se cumpla todo es true
// se queda con el primer true (truthy (num mayor a 0, [], {}, "holi")) o el ultimo false (falsy (0,"",null,undefined))

let tienePermiso2 = estaLogueado === true || esAdmin === true 
console.log (tienePermiso2)

//NOT ---> !
//niego lo que fue declarado anteriormente

let r = true 
console.log(!r)

//ANCHOR --- Funciones

//bloque para poner instrucciones
//la estructura es function + nombre funcion + () + {} 
//dentro de {} es donde escribo las instrucciones
//luego de crearla, tengo que llamar la funcion
//realizan un proceso y devuelven algo importante

function f1 (){

    console.log("holi")

}

f1 ()

function saludar (){

    //bloque codigo
    let nombre = "pepe"
    let saludo = `hola ${nombre} como estas?`
    return saludo
}

let saludolisto = saludar()
console.log(saludolisto)

//el return corta la ejecucion de la funcion y devuelve lo que tiene que devolver
//solo importa lo que el return devuelve
//si quiero mostrar la funcion tengo que guardarla en una variable antes, o sino no funciona

function sumar (){

    let n3 = 2
    let n5 = 3
    return n3 + n5

}

let resultado = sumar ()
console.log (resultado)

// las funciones en () pueden recibir variables, no hay que declararlas, puedo separarlas con ,

function sumas (numero1,numero2){

    return numero1 + numero2

}

let res = sumas (15,12)
console.log (res)
