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


