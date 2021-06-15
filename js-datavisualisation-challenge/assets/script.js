// Exercise 2 - Remote data, in real-time, via ajax
const firstHeading = document.getElementById("firstHeading");
firstHeading.insertAdjacentHTML('afterend', '<canvas id="chart"></canvas>');
const xhr = new XMLHttpRequest;
let labels = [];
let datas = [];

function draw(labels, datas) {
    const ctx = document.getElementById("chart").getContext("2d");
    let myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels : labels,
            datasets: [{
                label : "",
                backgroundColor : ["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(201, 203, 207, 0.2)","rgba(255, 99, 206, 0.2)","rgba(255, 159, 140, 0.2)"],
                borderColor : "black",
                borderWidth : 1,
                data : datas
            }]
        }
    });
}

function getData(xhr) {

    xhr.open('GET', `https://canvasjs.com/services/data/datapoints.php?nocache=${new Date().getTime()}`, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            result = JSON.parse(xhr.responseText);
            result.forEach(element => {
                labels.push(element[0]);
                datas.push(element[1]);
            });

            draw(labels, datas);
            
        }
        else {
            document.getElementById("chart").innerHTML = "Error ! Please try to reload the page."
        }
    }
    xhr.send();

    labels = [];
    datas = [];
}

setInterval(function() {
    getData(xhr);
}, 1000);


let chart1Label = [];
let chart2Label = [];
// let dataChart1 = [];
// let dataChart2 = [];
let datasetChart1 = [];
let datasetChart2 = [];
// -----------chart 1----------------//
let tab1 = document.getElementById("table1");
tab1.insertAdjacentHTML("beforebegin", '<canvas id="firstCanvas"></canvas>');
let firstCanvas = document.getElementById("firstCanvas");
let yRows = tab1.rows;
let increColor = 0;

function randomColor (lenghtsus1){
    let tempColor = Math.round(increColor);
        let color = "hsl(" + tempColor+", "+Math.floor(Math.random() * 70 + 30)+"%, "+Math.floor(Math.random() * 60 + 20)+"%)";
        increColor += (360/lenghtsus1);
        return color
}

// --------First Chart loop----------//

for (let k = 2; k < yRows[1].cells.length; k++) {
    let year = yRows[1].cells[k].innerHTML; 
    chart1Label.push(year);
}

    for (let i = 0; i < yRows.length; i++) {
        // let color = randomcolor(34)
        if (i >= 2) {
            let country = {
                label: '',
                borderColor: randomColor(34),
                backgroundColor: 'transparent',
                data: []
            }
            country.label = yRows[i].cells[1].innerHTML;
            for (let j = 2; j < yRows[i].cells.length; j++) {
                country.data.push(parseInt(yRows[i].cells[j].innerHTML));
            }

            datasetChart1.push(country);
            
        }
    }


//Grap for crimesR
let crimesrecorded = new Chart(firstCanvas, {
    // Types of chart we use
    type: 'line',

    // The data of the API
    data: {
        labels: chart1Label,
        datasets: datasetChart1
    },
    options: {
    }
})




//----------chart 2  ----------------------//
 //-----move table 2 to the right place----//

let tab2 = document.getElementById("table2");

// let move = document.getElementById('A_steadily_increasing_prison_population');
// move.insertAdjacentHTML("afterend", tab2);
tab2.insertAdjacentHTML("beforebegin", '<canvas id="secondCanvas"></canvas>');
let secondCanvas = document.getElementById("secondCanvas");
let y2Rows = tab2.rows;

// ----second chart loop----------------//
for (let i = 2; i < y2Rows[1].cells.length; i++) {
    let years = y2Rows[0].cells[i].innerHTML;  
    chart2Label.push(years);
}
for (let i = 0; i < y2Rows.length; i++) {
    let color = randomColor(29);
    if (i >= 1) {
        let country2 = {
            label: chart2Label,
            borderColor: color,
            backgroundColor: color,
            //Bar variante 
            barPercentage: 10,
            barThickness: 2,
            maxBarThickness: 15,
            minBarLength: 40,
            data: []
        }
        country2.label = y2Rows[i].cells[1].innerHTML;
        for (let j = 2; j < y2Rows[i].cells.length; j++) {
            country2.data.push(parseInt(y2Rows[i].cells[j].innerHTML));
        }

        datasetChart2.push(country2);
    }
}

//Grap for population
let population = new Chart(secondCanvas, {
    // Types of chart we use
    type: 'bar',

    // The data of the API
    data: {
        labels: chart2Label,
        datasets: datasetChart2
    },
    options: {
    }
})






