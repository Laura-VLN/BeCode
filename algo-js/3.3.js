let arr = []

arr.push(1, 2, 3, 4, 5)

let arrClone = []

for (let index = 0; index < arr.length; index++) {
    arrClone[index] = arr[index];
    
}

console.log(arr + arrClone)