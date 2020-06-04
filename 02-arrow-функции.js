function square(x) {
    return x*x;
}

const sq = (x) => x*x

console.log(sq(3))

const arr = ['1', '3', '2', '4']
const res = arr
    .map((el) => parseInt(el))
    .filter((num) => num%2)
    .reduce((max, value) => Math.max(max, value), 0)
console.log(res)

// многосточная arrow-функция
const sq2 = (x) => {
    x += 1
    return x*x
}
console.log(sq2(10))

// arrow-функции не могут являться констукторами
