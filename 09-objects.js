// Пример 1
const x = 10
const y = 30

const point = {
    x: x,
    y: y,

    draw: function () {
        //...
    }
}

const p = {
    x,
    y,

    draw() {
        //
    }
}

// Пример 2
const prefix = '_pre_';
const data = {
    [prefix + 'name']: 'Bob',
    [prefix + 'age']: 23,
}
console.log(data)

// Пример 3
const defaults = {
    host: 'localhost',
    dbName: 'blog',
    user: 'admin'
}
const opts = {
    user: 'john',
    password: 'pass'
}
const shallowCopy = Object.assign({}, defaults, opts)
console.log(shallowCopy)

