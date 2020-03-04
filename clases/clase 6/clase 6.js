// var diego = {
//     nombre: 'diego',
//     apellido: 'mierez',
//     edad: 34
// }

// var viejo = {
//     nombre: 'gerardo',
//     apellido: 'mierez',
//     edad: 59
// }

// function imprimir(persona) {
//     var { nombre, edad } = persona
//     console.log('Hola me llamo ' + nombre.toUpperCase() + ' y tengo ' + edad + ' años')
// }

// imprimir(diego)
// imprimir(viejo)

// function cumple(persona) {
//     return {
//         ...persona,
//         edad: persona.edad +1
//     }
// }


// var x = 4
// var y = '4'

// var diego = {
//     nombre: 'diego'
// }

// var otroDiego = {
//     ...diego
// }


// 

var diego = {
    nombre: 'diego',
    apellido: 'mierez',
    edad: 34,
    peso: 85
}

console.log(`al inicio del año ${diego.nombre} pesa ${diego.peso}kg`)

const incremento = 0.3

const aumento = persona => persona.peso += incremento
const bajar = persona => persona.peso -= incremento
const comer = () => Math.random() < 0.3
const deporte = () => Math.random() < 0.4

const meta = diego.peso - 3
var dias = 0

while (diego.peso > meta) {
    if (comer()) {
        aumento(diego)
    }
    if (deporte()) {
        bajar(diego)
    }
    dias +=1
}

console.log(`pasaron ${dias} días hasta que ${diego.nombre} bajó 3kg`)