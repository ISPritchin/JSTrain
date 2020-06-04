// mymath.js

const pi = 3.1415

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function divide(a, b) {
    return a / b
}

function divide(a, b) {
    return a / b
}

// экспорт функций и констант
export {
    add, subtract, divide as div
}

// index.js

// import { add, subtract as sub} from './mymath.js'

// console.log(add(2, 2))
// console.log(sub(2, 2))
// console.log(div(2, 2))


// index2.js

// import * as calc from './mymath'

// console.log(calc.add(2, 2))

