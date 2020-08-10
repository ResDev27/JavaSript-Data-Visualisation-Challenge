/*
    code line to add if you want chart to be drawn after a span tag inner html
*/

let chartValue1 = `<canvas id="chart1" width="400" height="400"></canvas>`;
let chartValue2 = `<canvas id="chart2" width="400" height="400"></canvas>`;
let chartValue3 = `<canvas id="chart3" width="400" height="400"></canvas>`;

// Which id is used when getting elements
let titre = "firstHeading";
let police = "Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police";
let homicide = "Homicides";

// Use of a new paragraph containing the charts
let newParagraph1 = document.createElement('p');
let newParagraph2 = document.createElement('p');
let newParagraph3 = document.createElement('p');

document.getElementById(titre).appendChild(newParagraph1); // appendChild = After the selected element
newParagraph1.innerHTML = chartValue1;

document.getElementById(police).appendChild(newParagraph2);
newParagraph2.innerHTML = chartValue2;

document.getElementById(homicide).appendChild(newParagraph3);
newParagraph3.innerHTML = chartValue3;




/* 1st Chart */

var dataPoints = [];
$.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=10&length=10&type=json", function(data) {  // Ajax method get, 
    $.each(data, function(key, value){
        dataPoints.push({x: value[0], y: parseInt(value[1])});
    });
    
    var firstChart = document.getElementById('chart1');
    var myFirstChart = new Chart(firstChart, {
        type: 'line',
        data: {
            datasets: [
                {
                    data: dataPoints,
                    label: 'Random Datas',
                    borderColor: '#C02080',
                    fill: false,
                }]
        }
    })
    updateChart();
});


function addData() {
    dataPoints.push({
        x: parseInt(value[0]),
        y: parseInt(value[1])
    });
    chart.update();
}


function updateChart() {
    $.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=" + (dataPoints.length + 1) + "&ystart=" + (dataPoints[dataPoints.length - 1].y) + "&length=1&type=json", function(data) {
        $.each(data, function(key, value) {
            addData()
        });
    setTimeout(function(){updateChart()}, 1000);
});
}










/* 2nd Chart */
let tableChart2 = document.getElementById("table1");

const headersChart2 = [];
const countryChart2 = [];
const dateCharts2 = [];
const jsonChart2 = [];

for (let x = 2; x < tableChart2.rows.length; x++)
    {
        countryChart2[x] = tableChart2.rows[x].cells[1].innerHTML;
    }

for (let x = 0; x < tableChart2.rows[0].cells.length; x++)
    {
        headersChart2[x] = tableChart2.rows[0].cells[x].innerHTML;
    }

for (let x = 2; x < tableChart2.rows[1].cells.length; x++)
    {
        dateCharts2[x] = tableChart2.rows[1].cells[x].innerHTML
        .replace(/\n/g, '')
        .replace(/<div>/g, '')
        .replace(/<\/div>/g, '')
        .replace(/<br>/g, ' ')
        .replace(/\s/g, '');
    }

for (let x = 2; x < tableChart2.rows.length; x++)
    {
        let tableRow1 = tableChart2.rows[x];
        let rowValues1 = {};
            for (let y = 0; y < tableRow1.cells.length; y++)
                {
                    rowValues1[dateCharts2[y]] = tableRow1.cells[y].innerHTML;
                }
        jsonChart2.push(rowValues1);
    }

const countryList1 = jsonChart2.map(function (f)
    {
        return f.undefined;
    } 
);

const year2002 = jsonChart2.map(function (f) 
    {
        return parseInt(f["2002"]);
    }
);
const year2003 = jsonChart2.map(function (f) 
    {
        return parseInt(f["2003"]);
    }
);
const year2004 = jsonChart2.map(function (f) 
    {
        return parseInt(f["2004"]);
    }
);
const year2005 = jsonChart2.map(function (f) 
    {
        return parseInt(f["2005"]);
    }
);
const year2006 = jsonChart2.map(function (f) 
    {
        return parseInt(f["2006"]);
    }
);
const year2007 = jsonChart2.map(function (f) 
    {
        return parseInt(f["2007"]);
    }
);
const year2008 = jsonChart2.map(function (f) 
    {
        return parseInt(f["2008"]);
    }
);
const year2009 = jsonChart2.map(function (f) 
    {
        return parseInt(f["2009"]);
    }
);
const year2010 = jsonChart2.map(function (f) 
    {
        return parseInt(f["2010"]);
    }
);
const year2011 = jsonChart2.map(function (f) 
    {
        return parseInt(f["2011"]);
    }
);
const year2012 = jsonChart2.map(function (f) 
    {
        return parseInt(f["2012"]);
    }
    );
    
var secondChart = document.getElementById('chart2');
var mySecondChart = new Chart(secondChart, {
    type: 'bar',
    data: {
        labels: countryList1,
        datasets: [
            {
                label: "2002",
                borderWidth: 1,
                lineTension: 0,
                showLines: false,
                backgroundColor: "rgba(120,60,60, 0.5)",
                borderColor: "#C06060",
                data: year2002,
            },
            {
                label: "2003",
                borderWidth: 1,
                lineTension: 0,
                showLines: false,
                backgroundColor: "rgba(120,90,90, 0.5)",
                borderColor: "#C09090",
                data: year2003,
            },
            {
                label: "2004",
                borderWidth: 1,
                lineTension: 0,
                showLines: false,
                backgroundColor: "rgba(60,120,60, 0.5)",
                borderColor: "#60C060",
                data: year2004,
            },
            {
                label: "2005",
                borderWidth: 1,
                lineTension: 0,
                showLines: false,
                backgroundColor: "rgba(90,120,90, 0.5)",
                borderColor: "#90C090",
                data: year2005,
            },
            {
                label: "2006",
                borderWidth: 1,
                lineTension: 0,
                showLines: false,
                backgroundColor: "rgba(60,60,120, 0.5)",
                borderColor: "#6060C0",
                data: year2006,
            },
            {
                label: "2007",
                borderWidth: 1,
                lineTension: 0,
                showLines: false,
                backgroundColor: "rgba(90,90,120, 0.5)",
                borderColor: "#9090C0",
                data: year2007,
            },
            {
                label: "2008",
                borderWidth: 1,
                lineTension: 0,
                showLines: false,
                backgroundColor: "rgba(120,60,120, 0.5)",
                borderColor: "#C060C0",
                data: year2008,
            },
            {
                label: "2009",
                borderWidth: 1,
                lineTension: 0,
                showLines: false,
                backgroundColor: "rgba(120,90,120, 0.5)",
                borderColor: "#C090C0",
                data: year2009,
            },
            {
                label: "2010",
                borderWidth: 1,
                lineTension: 0,
                showLines: false,
                backgroundColor: "rgba(60,120,120, 0.5)",
                borderColor: "#60C0C0",
                data: year2010,
            },
            {
                label: "2011",
                borderWidth: 1,
                lineTension: 0,
                showLines: false,
                backgroundColor: "rgba(90,120,120, 0.5)",
                borderColor: "#90C0C0",
                data: year2011,
            },
            {
                label: "2012",
                borderWidth: 1,
                lineTension: 0,
                showLines: false,
                backgroundColor: "rgba(90,60,90, 0.5)",
                borderColor: "#906090",
                data: year2012,
            },
        ]
    }
});









/* 3rd Chart */
let tableChart3 = document.getElementById("table2");
// Testing purpose: console.log(tableChart3);

const headersChart3 = []; // Will contain the header of chart (N°, Country, etc ..)
const jsonChart3 = []; // Will contain all datas

/*
    Listing of all the headers, using a *for* loop
*/
for (let x = 0; x < tableChart3.rows[0].cells.length; x++)
    {
        headersChart3[x] = tableChart3.rows[0].cells[x].innerHTML; // Going through each cell of the first row
    }
// Testing purpose: console.log(headersChart3);

/*
    *for* loop getting datas based on row
*/
for ( let x = 1; x < tableChart3.rows.length; x++) // Starting @ 'x=1' because we already have the first (0) row from previous loop
    {
        let tableRow = tableChart3.rows[x];
        let rowValues = {};
        for (let y = 0; y < tableRow.cells.length; y++)
            {
                rowValues[headersChart3[y]] = tableRow.cells[y].innerHTML
                .replace(/\n/g, '')
                .replace(/<div>/g, '')
                .replace(/<\/div>/g, '')
                .replace(/<br>/g, ' ')
                .replace(/\(.\)/g, '')
                .replace(/\s/g, '');
            }
            /*
                Use of .replace here to remove unwanted characters (based on regex rules, using: https://www.regextester.com/)
            */
        jsonChart3.push(rowValues); // Each row is pushed when last cell is reached (Y loop ending)
}
// Testing purpose: console.log(jsonChart3);

const countryList = jsonChart3.map(function (f) // .map is used to have a new array listed by a function
    {
        return f.Country; // .map here is taking only Country into jsonChart3 array and return each Country occurence
    }
);
// Testing purpose: console.log(countryList);

const firstMillenial = jsonChart3.map(function (f) 
    {
        return parseInt(f["2007–09"]); // parseInt is here to convert "string" into "number"
    }
);
// Testing purpose: console.log(firstMillenial);

    const secondMillenial = jsonChart3.map(function (f) 
    {
        return parseInt(f["2010–12"]); // same as previous
    }
);
// Testing purpose: console.log(secondMillenial);

let thirdChart = document.getElementById('chart3');
let myThirdChart = new Chart(thirdChart, {
    type: 'bar',
    data: {
        labels: countryList,
        datasets: [
            {
                label: "2007-09",
                backgroundColor: "#2080FF",
                data: firstMillenial,
            },
            {
                label: "2010-12",
                backgroundColor: "#FF2080",
                data: secondMillenial,
            },
        ]
    }
});
