# JavaSript-Data-Visualisation-Challenge

repository : js-datavisualisation-challenge
mode: solo
type: consolidation challenge
duration: 5 days
author: Alexandre Plennevaux

# 1st step

I injected my script.js in the HTML file and tested it to see if the script.js was well linked.

i choosed to work with [chart.js](https://www.chartjs.org/ ) since I am a beginner in JavaScript and and its libraries.

I then choosed to use the CDN method in order to be abble to use [chart.js](https://www.chartjs.org/ ).

Here's the link i used to use the library 
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.js" integrity="sha512-QEiC894KVkN9Tsoi6+mKf8HaCLJvyA6QIRzY5KrfINXYuP9NxdIkRQhGq3BZi0J4I7V5SidGM3XUQ5wFiMDuWg==" crossorigin="anonymous"></script>
```

I did some DOM manipulation, by adding a [premade graph](https://www.chartjs.org/docs/latest/getting-started/usage.html) into the HTML file. You can see bellow, a snippet of the method that I used to be abble to see if my setup was ok.
```
let test = `<canvas id="Chart1" width="400" height="400"></canvas>`; //creating the canvas

document.getElementById("firstHeading").innerHTML += test; //injecting the canvas in the html file
```

