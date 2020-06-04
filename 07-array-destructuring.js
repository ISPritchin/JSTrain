const fib = [1, 2, 3, 4, 5, 6]

const [a, b, c] = fib
console.log(a, b, c)

const [, a2, , b2, , c2] = fib
console.log(a2, b2, c2)

const [a3, ...others] = fib
console.log(a3, others)

const line = [[0, 3], [3, 5]]
const [[p1x, p1y], [p2x, p2y]] = line
console.log(p1x, p1y)


const dict = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak',
    hamster: 'squeak'
}

const res = Object.entries(dict)
console.log(res)

console.log(res
    .filter(([, value]) => value === 'squeak')
    .map(([key,] ) => key))

const shape = {
    type: 'segment',
    coordinates: {
        start: [1, 3],
        end: [5, 3]
    }
};

const {coordinates: { start: [startX, startY], end: [endX, endY]}} = shape
console.log(startX, startY, endX, endY)