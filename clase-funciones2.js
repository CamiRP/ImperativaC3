// ANCHOR FUNCION DECLARADA 

// lo de la clase pasada

// ANCHOR FUNCION EXPRESADA --- anónima
// FUNCION EXPRESADA TRADICIONAL

// function + no tiene nombre () 

// function (n1, n2) //

  //  return n1 - n2  //

// ahora cómo la llamo si no está declarada?

const restar = function (n1,n2) {
    return n1 - n2
}

let res = restar (1,33)

console.log (res)


// FUNCION EXPRESADA FLECHA

const multiplicar = (n1,n2)=>{
    return n1*n2
}   

let mul = multiplicar (2,4)

console.log (mul)

// si es una funcion de una linea de codigo puedo hacer ()=>lo que va dentro de la funcion

const saludo = (nombre)=> `Hola ${nombre} como tas?`

let sal = saludo("jiji")
console.log(sal)

