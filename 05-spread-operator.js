const arr = [1, 2, 3]
const res = Math.max(...arr)
console.log(res)

const arr2 = [5, 4, 6]
const res2 = Math.max(...arr, ...arr2)
console.log(res2)

console.log([4, ...arr, ...arr2])
