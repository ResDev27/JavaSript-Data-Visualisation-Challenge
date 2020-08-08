# JavaSript-Data-Visualisation-Challenge

repository : js-datavisualisation-challenge
mode: solo
type: consolidation challenge
duration: 5 days
author: Alexandre Plennevaux

## Objectives
This consolidation challenge will help you assess your ability to solve a problem inspired from real-life situations using your new javascript muscles involving the following know-hows :

- **DOM** manipulation
- **AJAX**/**FETCH** request
- Using **Third-party libraries**
- **problem-solving** : design a logical solution to implement the expected result
- Debugging using the console
- Understand the notion of **"separation of concerns"**

# 1st step

I injected my script.js in the HTML file and tested it to see if the script.js was well linked.

I choosed to work with [chart.js](https://www.chartjs.org/ ) since I am a beginner in JavaScript and and its libraries.

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

## Evaluation
The evaluation method chosen is a **self-evaluation** based on the following indicators:

#### 1. handling of the DOM:

- [ ] I was able to find the right selector to do it.
- [ ] I was able to inject the graph in the right place on the page via javascript.
- [ ] I was able to retrieve the html data in a format adapted to my javascript code.

### 2. Request ajax/fetch:
- [ ] I was able to receive the answer from the remote server in json.
- [ ] Then, I was able to build a callback function to process this data.

### 3. Use of **third party libraries**:
- [ ] I was able to integrate the third-party library into my application.
- [ ] I used the documentation provided by the library.
- [ ] I was able to generate the 2 inline data graphs.
- [ ] I was able to generate the "remote data" graph.

### 4. Problem-solving:

- [ ] Syntactic rigor: I was able to translate the processes I imagined into javascript syntax.
- [ ] Logical thinking: Through iterations and trial and error, I was able to find a logical path that works to address the issues raised by the client's request. Specifically:
  - [ ] I was able to generate the 2 inline data graphs.
	- [ ]  I was able to generate the "remote data" graph.
  - [ ]  I was able to build a callback function to process remote data (received via ajax).
	- [ ]  I was able to make the realtime graph refresh in real time.
	- [ ]  I was able to display the detailed data when I hover the mouse.

### 5. Debugging:

  - [ ]  I use the console to understand what is happening and compare what I am trying to program with what the machine is doing.

### 6. Separation of concerns:

 - [ ]  If I disable javascript, the user experience is satisfactory, the user has access to data and content
 - [ ]  If I enable javascript, the tables are enhanced with an interactive graph.