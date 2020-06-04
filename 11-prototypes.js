const animal = {
    say: function() {
        console.log(this.name, '-', this.voice)
    }
}

const dog = {
    name: 'dog',
    voice: 'woof',
}
Object.setPrototypeOf(dog, animal)

const cat = {
    name: 'dog',
    voice: 'woof',
}
Object.setPrototypeOf(cat, animal)

dog.say()
dog.say()

// но setPrototypeOf медленно работает

const super_dog = Object.create(animal)
super_dog.name = 'Dog'
super_dog.voice = 'woof'
super_dog.say()

// вынесем логику создания в отдельную функцию

function createAnimal(name, voice) {
    const result = Object.create(animal)
    result.name = name;
    result.voice = voice;
}

const dog2 = createAnimal('Dog', 'wooooof')
const cat2 = createAnimal('Cat', 'meow')

// более читабильный вид:
function Animal(name, voice) {
    this.name = name;
    this.voice = voice;
}

Animal.prototype.say = function() {
    console.log(this.name, '-', this.voice)
}

const dog3 = new Animal('Dog', 'wooooof')
dog3.say()