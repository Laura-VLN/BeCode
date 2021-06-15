let arr = [3, 2, 5, 4, 1]
let min = Math.min.apply(null, arr)
let max = Math.max.apply(null, arr)

console.log(arr)
console.log("Min : " + min)
console.log("Max : " + max)