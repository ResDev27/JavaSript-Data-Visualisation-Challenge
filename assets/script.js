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
