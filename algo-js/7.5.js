let table = [52, 14, 2, 74, 9]

function sortArray(array) {
    let bool = false;
    while (!bool) {
      bool = true;
      for (let i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          bool = false;
          let temp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = temp;
        }
      }
    }
  
    return array;
}

sortArray(table);
console.log(table);