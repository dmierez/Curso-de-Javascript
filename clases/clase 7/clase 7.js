class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar() {
        console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
    }

    soyalto(){
        return this.altura > 1.75
    }
}


class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar () {
        console.log(`hola, me llamo ${this.nombre} ${this.apellido} y soy desarrolla@`)

    }

}

// var diego = new Persona('diego', 'mierez', 1.65)
// var gordito = new Persona('jaramichi', 'paes', 1.80)
// var viejito = new Persona('viejito', 'mierez', 1.70)

// diego.soyalto()
// gotdito.soyalto()
// viejito.soyalto()

