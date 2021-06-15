// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here
    //click run

    document.getElementById("run").addEventListener("click", ()=>{
        let table = [];
        let sum = 0;

        for (let index = 0; index < 10; index++) {

            table.push(Math.floor(Math.random()* 100));
            document.getElementById('n-'+(index+1)).innerHTML = table[index];

        }

        table.forEach(element => {
            sum += element;
        }); 

        document.getElementById("min").innerHTML =  Math.min.apply(null, table);
        document.getElementById("max").innerHTML =  Math.max.apply(null, table);
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML =  Math.floor(sum/table.length);
    }) 

    //random 1-100
    //Math.floor(Math.random() * 100) + 1;
    // display in the table
    //display the smallest
    //display the biggest
    //display the sum
    //display the average

})();