let arr = [1, 2, 3, 4, 5]
let sum = new Number(0)

arr.forEach(element => {
    sum = sum + element;
});

console.log(sum/arr.length)