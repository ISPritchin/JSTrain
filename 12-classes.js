class Animal {

    constructor(name, voice) {
        this.name = name;
        this.voice = voice;
    }

    say() {
        console.log(this.name, '-', this.voice)
    }
}

// duck -> Bird.prototype -> Animal.prototype -> Object.prototype -> null
class Bird extends Animal {
    constructor(name, voice, canFly=true) {
        super(name, voice) // вызов метода супер-конструктора
        this.canFly = canFly
        // this.say() - обращение к методу класса
        // super.say() - обращение к методу суперкласса

    }

    say() {
        console.log('Birds don\'t like to talk')
    }
}

const duck = new Bird('Duck', 'quack')
duck.say()