// Пример 1
const person = {
    firstName: 'Peter',
    lastName: 'Smith',
    age: 21,
}

// const firstName = person.firstName
// const lastName = person.lastName

const { firstName, lastName } = person
console.log(firstName, lastName)


// Пример 2
const person2 = {
    name: {
        first: 'Tom',
        last: 'Simpson',
    },
    age: 21,
}

// const firstName = person.firstName
// const lastName = person.lastName

const { name: { first: firstName2, last: lastName2 } } = person2
console.log(firstName2, lastName2)

// значения по умолчанию
const { role = 'user'} = person;
console.log(role)


// Пример 3
function connect({
    host = 'localhost',
    port = 8080,
    user = 'admin',
                 } = {}) {
    console.log(host, port, user)
}
connect({port: 12345})
connect()

const dict = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak'
}
const { duck, ...otherAnimals} = dict
console.log(duck, otherAnimals)