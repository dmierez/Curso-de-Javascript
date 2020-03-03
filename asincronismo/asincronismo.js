class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn) {
        var { nombre, apellido } = this
        console.log(`hola, me llamo ${nombre} ${apellido}`)
        if (fn) {
            fn(nombre, apellido)
        }
    }

    soyalto(){
        return this.altura > 1.75
    }
}


class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar (fn) {
        // var nombre = this.nombre
        // var apellido = this.apellido
        var { nombre, apellido } = this

        console.log(`hola, me llamo ${nombre} ${apellido} y soy desarrollador`)
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
}

function responder (nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`Mirá no sabía que eras Dev`)
    }
}

var diego = new Persona('diego', 'mierez', 1.65)
var gordito = new Persona('jaramichi', 'paes', 1.80)
var viejito = new Desarrollador('viejito', 'mierez', 1.70)

diego.saludar()
gordito.saludar(responder)
viejito.saludar(responder)



// diego.soyalto()
// gotdito.soyalto()
// viejito.soyalto()

