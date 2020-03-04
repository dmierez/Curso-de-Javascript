const URL_API = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true}


function obtenerPersona (id) {
    return new Promise((resolve, reject) => {
       const url = `${URL_API}${PEOPLE_URL.replace(':id', id)}`
       $
        .get(url, opts, function (data) {
            resolve(data)
        })
        .fail(() => reject(id))
    })
}

function onError(id) {
    console.log(`Hubo un error al obtener el personaje ${id}`)
}

var ids = [1, 2, 3]
var promesas = ids.map(function (id) {
    return obtenerPersona(id)
})
Promise
    .all(promesas)
    .then(persona => console.log(persona))
    .catch(onError)





// obtenerPersona(1)
//     .then(function (persona) {
//         console.log(`el personaje 1 es ${persona.name}`)
//         return obtenerPersona(2)
//     })
//     .then(function (persona) {
//         console.log(`el personaje 2 es ${persona.name}`)
//         return obtenerPersona(3)
//     })
//     .then(function (personaje) {
//         console.log(`el personaje 3 es ${personaje.name}`)
//     })
//     .catch(onError)
   







// function obtenerPersona (id, callback) {
//     const url = `${URL_API}${PEOPLE_URL.replace(':id', id)}`
    
//     $.get(url, opts, function (persona) {
//         console.log(`Hola yo soy ${persona.name}`)

//         if (callback) {
//             callback()
//         }
//     })
// }

// obtenerPersona(1, function () {
//     obtenerPersona(2, function () {
//         obtenerPersona(3)
//     })
    
// })