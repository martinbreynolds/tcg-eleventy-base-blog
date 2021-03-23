---
layout: layouts/page.njk
title: Javascript with The Coders Guild
templateClass: tmpl-page
eleventyNavigation:
  key: Javascript
  order: 4
image: "/img/pages/image5.jpg"
---

<div class="container">

## Learning Javascript with the Coders Guild

On this page I will document my JS learning with The Coders Guild

### JS Lesson 1 - Programming Concepts

In this lesson, we were taken through the basics of Javascript, including creating variables `var`, concatination, using arithmetic operators, adding comments and using `console.log`.

The code from the in lesson practicals is below.

```javascript
//Creating a variable

var myName = "Martin";

//A short one line comment

alert(myName);
console.log(myName);

/* This is a multiline comment
    that goes over
    multiple pages*/

document.write(myName);

var a = 15;
var b = 6;

console.log("my numbers are", a, "and", b);

console.log("addition", a + b);
console.log("subtraction", a - b);
console.log("multiplication", a * b);
console.log("division", a / b);
console.log("modulas", a % b);

var fName = "Martin";
var lName = "Reynolds";

console.log("Simple concactenate", fName + " " + lName);
console.log(`String interprelation ${fName + " " + lName}`);
```

#### The mandatory task was to create a tip calculator in javascript.

1. We’ll make a program to calculate a tip

   Create variables for the pre-tip total and the tip percentage
   Calculate the new total
   Output a sentence to the page - something like:
   Your total bill, with tip, is £35.45

##### BONUS POINTS:

Use `toFixed()` to round the output to 2 decimal places
Display the tip amount in the output as well

2. Extend the Tip program

Create variables for the pre-tip total and the tip percentage
Calculate the new total
Output a sentence to the page - something like:
“Your total bill, with tip, is £35.45”

Extension: round the figure to 2 DP and display the tip amount.

##### Additional

Make a Procedural `Function` in Javascript.

My code is available to be viewed here on [Github](https://github.com/martinbreynolds/JS-Basics).

  <h1>Javascript Challenges - Variables and Operators</h1>
  <h2>Sentence Output</h2>
      <h3>The Code</h3>

```javascript
// Write a simple program to combine a first name and a last name inside a function.
// Then update the function to accept a first and last name as arguments.

// Add a return statement to your 'name' function. Use that function to set the value of a variable.

function displayFullName(fName, lName) {
  var fName = document.getElementById("fName").value;
  var lName = document.getElementById("lName").value;

  return (document.getElementById(
    "fullNameDisplay"
  ).innerHTML = `${fName} ${lName}`);
}
```

<h3>The Code in Action</h3>

<label>Please click the button to display a sentence.</label>
<button type="submit" onclick="createSentence()">
Create a Sentence.
</button>

<p id="sentence">&nbsp;</p>

  <h2>Show your Full Name</h2>

  <h3>The Code</h3>

```javascript
// Write a simple program to combine a first name and a last name inside a function.
// Then update the function to accept a first and last name as arguments.

function displayFullName(fName, lName) {
  var fName = document.getElementById("fName").value;
  var lName = document.getElementById("lName").value;

  return (document.getElementById(
    "fullNameDisplay"
  ).innerHTML = `${fName} ${lName}`);
}
```

  <h3>The Code in Action</h3>

<label for="fName">Please enter your first name.</label>
<input type="text" id="fName" />

<label for="lName">Please enter your last name.</label>
<input type="text" id="lName" />

  <button type="submit" onclick="displayFullName()">
  <label>Please click the button to display a sentence.</label>
        Display your full name.
      </button>

  <p id="fullNameDisplay">&nbsp;</p>

  <h2>Do I need a coat? - Part 1</h2>

  <h3>The Code</h3>

```javascript

//Should I wear a coat?

// Part 1
// Make a variable called temperature. Write some code that tells you to put on a coat if it is
below 50 degrees.

function coatCheck() {
var temperature;
var coatWeather;

temperature = document.getElementById("temperature").value;
if (temperature == "") {
return;
}

temp = parseInt(temperature);
coatWeather = temp < 50 ? "Put on your coat!" : "No coat required!";
document.getElementById("coatAdvice").innerHTML = coatWeather;
}
```

  <h3>The Code in Action</h3>

<label for="temperature">Whats the temperature?</label>
<input type="text" id="temperature" />

<label>Please click the button to check if you need a coat.</label>
<button type="submit" onclick="coatCheck()">Do I need a coat?</button>

  <p id="coatAdvice">&nbsp;</p>

  <h2>Do I need a coat? - Part 2</h2>

  <h3>The Code</h3>

```javascript
//Should I wear a coat?

// Part 2
// If it's less than 50 degrees, wear a coat.
// If it's less than 30 degrees, wear a coat and a hat.
// If it's less than 0 degrees, stay inside.
// Otherwise, just pants and vest is fine.

function coatCheck2() {
  var temperature2;
  var coatWeather2;

  temperature2 = document.getElementById("temperature2").value;
  if (temperature2 == "") {
    return;
  }

  temp2 = parseInt(temperature);

  if (temp >= 50) coatWeather2 = "Pants and Vest are fine";
  else if (temp >= 30) coatWeather2 = "Wear a Coat";
  else if (temp >= 0) coatWeather2 = "Wear a Coat and a Hat";
  else coatWeather2 = "Stay Inside";

  document.getElementById("coatAdvice2").innerHTML = coatWeather2;
}
```

  <h3>The Code in Action</h3>

<label for="temperature2">Whats the temperature?</label>
<input type="text" id="temperature2" />

<label>Please click the button to check if you need a coat.</label>
<button type="submit" onclick="coatCheck2()">Do I need a coat?</button>

  <p id="coatAdvice2">&nbsp;</p>

  <h2>Age Calculator</h2>

  <h3>The Code</h3>

```javascript

// The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN”, substituting the values.

function ageCalculator(currentyear, yearOfBirth) {
var currentyear = new Date().getFullYear();
var yearOfBirth = parseInt(document.getElementById("currentAge").value);
var age = currentyear - yearOfBirth;
return (document.getElementById("year").innerHTML =
"You are either " + (age - 1) + " or " + age + ".");
}
}
```

  <h3>The Code in Action</h3>

<label>Please enter your current Age</label>

  <input type="number" id="currentAge" />
      <button type="submit" onclick="ageCalculator()">
        Calculate your Age
      </button>
  <p id="year">&nbsp;</p>

  <h2>Fortune Teller</h2>

  <h3>The Code</h3>

```javascript
// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables:

// number of children
// partner’s name
// geographic location
// job title
// Output your fortune to the screen like so: “You will be a X in Y, and married to Z with N kids.”

function fortuneTeller(numberOfChildren, partnersName, location, jobTitle) {
  var numberOfChildren = document.getElementById("fortuneAge").value;
  var partnersName = document.getElementById("partnersName").value;
  var location = document.getElementById("location").value;
  var jobTitle = document.getElementById("jobTitle").value;

  return (document.getElementById(
    "yourFortune"
  ).innerHTML = `You will be a ${jobTitle} in ${location}, and married to ${partnersName} with ${numberOfChildren} kids.`);
}
```

  <h3>The Code in Action</h3>

<label for="fortuneAge">Please enter your current Age</label>
<input type="number" id="fortuneAge" />

<label for="partnersName">Please enter your partners Name</label>
<input type="text" id="partnersName" />

<label for="location">Please enter your current location</label>
<input type="text" id="location" />

<label for="jobTitle">Please enter your job title</label>
<input type="text" id="jobTitle" />
<button type="submit" onclick="fortuneTeller()">
Let me tell your fortune
</button>

  <p id="yourFortune">&nbsp;</p>

  <h2>Percentage Calculator</h2>

  <h3>The Code</h3>

```javascript

//Percentage Calculator

//Create a percentage calculator that takes a number and % and return the percentage value.

function percentageCalculator(num, per) {
var num = parseInt(
document.getElementById("percentageCalculatorNumber").value
);
var per = parseInt(
document.getElementById("percentageCalculatorPercent").value
);
return (document.getElementById("percentageResult").innerHTML =
(num / 100) \* per);
}

```

  <h3>The Code in Action</h3>

<label for="percentageCalculatorNumber">Please enter a Number</label>
<input type="number" id="percentageCalculatorNumber" />

<label for="percentageCalculatorPercent">Please enter a %</label>
<input type="number" id="percentageCalculatorPercent" />

  <button type="submit" onclick="percentageCalculator()">
        Work out the Percentage
      </button>

  <p id="percentageResult">&nbsp;</p>

  <h2>Drinks Maker</h2>

  <h3>The Code</h3>

```javascript

//Drinks Maker

//Use a switch statement to make a drink selection with two variabkes and return the drinks selection.

function drinkOrder(size, drink) {
var drink = document.getElementById("flavours").value;
switch (drink) {
case "cola":
return outputDrinksOrder(size, "Cola");
break;
case "lemonade":
return outputDrinksOrder(size, "Lemonade");
break;
case "orange":
return outputDrinksOrder(size, "Orange");
break;
}
}

function outputDrinksOrder(size, drink) {
var size = document.getElementById("sizes").value;
switch (size) {
case "small":
return (document.getElementById("drinksOrder").innerHTML =
"Your order is a Small " + drink);
break;
case "medium":
return (document.getElementById("drinksOrder").innerHTML =
"Your order is a Medium " + drink);
break;
case "large":
return (document.getElementById("drinksOrder").innerHTML =
"Your order is a Large " + drink);
break;
}
}

}
```

  <h3>The Code in Action</h3>

  <select name="flavour" id="flavours">
        <option value="lemonade">Lemonade</option>
        <option value="cola">Cola</option>
        <option value="orange">Orangeade</option>
      </select>

  <select name="size" id="sizes">
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>

<button type="submit" onclick="drinkOrder()">Show my Order</button>

  <p id="drinksOrder">&nbsp;</p>

  <h2>Calculator</h2>

  <h3>The Code</h3>

```javascript

//Calculator

//Build a simple calculator that takes two integers and the operator and displays the result.

function calculator(num1, num2, operator) {
var num1 = parseInt(document.getElementById("num1").value);
var num2 = parseInt(document.getElementById("num2").value);
var operator = document.getElementById("operator").value;
switch (operator) {
case "+":
var result = num1 + num2;
document.getElementById(
"calculatorResult"
).innerHTML = `${num1} ${operator} ${num2} = ${result}`;
break;
case "-":
var result = num1 - num2;
document.getElementById(
"calculatorResult"
).innerHTML = `${num1} ${operator} ${num2} = ${result}`;
return;
break;
case "_":
var result = num1 _ num2;
document.getElementById(
"calculatorResult"
).innerHTML = `${num1} ${operator} ${num2} = ${result}`;
return;
break;
case "/":
var result = num1 / num2;
document.getElementById(
"calculatorResult"
).innerHTML = `${num1} ${operator} ${num2} = ${result}`;
return;
break;
case "%":
var result = num1 % num2;
document.getElementById(
"calculatorResult"
).innerHTML = `${num1} ${operator} ${num2} = ${result}`;
return;
}
}
```

   <h3>The Code in Action</h3>

<label for="num1">Please enter a Number</label>
<input type="number" id="num1" />

  <select name="operator" id="operator">
        <option value="+">+ Add</option>
        <option value="-">- Subtract</option>
        <option value="*">* Times</option>
        <option value="/">/ Divide</option>
        <option value="%">% Modulas</option>
      </select>

<label for="num2">Please enter a Number</label>
<input type="number" id="num2" />

<button type="submit" onclick="calculator()">Calculate</button>

  <p id="calculatorResult">&nbsp;</p>

  </div>

  <!-- Scripts -->

<script>
//Should I wear a coat?

// Part 1
// Make a variable called temperature. Write some code that tells you to put on a coat if it is below 50 degrees.

function coatCheck() {
  var temperature;
  var coatWeather;

  temperature = document.getElementById("temperature").value;
  if (temperature == "") {
    return;
  }

  temp = parseInt(temperature);
  coatWeather = temp < 50 ? "Put on your coat!" : "No coat required!";
  document.getElementById("coatAdvice").innerHTML = coatWeather;
}

// Part 2
//  If it's less than 50 degrees, wear a coat.
// If it's less than 30 degrees, wear a coat and a  hat.
// If it's less than 0 degrees, stay inside.
// Otherwise, just pants and vest is fine.

function coatCheck2() {
  var temperature2;
  var coatWeather2;

  temperature2 = document.getElementById("temperature2").value;
  if (temperature2 == "") {
    return;
  }

  temp2 = parseInt(temperature2);

  if (temp2 >= 50) coatWeather2 = "Pants and Vest are fine";
  else if (temp2 >= 30) coatWeather2 = "Wear a Coat";
  else if (temp2 >= 0) coatWeather2 = "Wear a Coat and a Hat";
  else coatWeather2 = "Stay Inside";

  document.getElementById("coatAdvice2").innerHTML = coatWeather2;
}

//Full Name Display

// Write a simple program to combine a first name and a last name inside a function.
// Then update the function to accept a first and last name as arguments.

// Add a return statement to your 'name' function. Use that function to set the value of a variable.

function displayFullName(fName, lName) {
  var fName = document.getElementById("fName").value;
  var lName = document.getElementById("lName").value;

  return (document.getElementById(
    "fullNameDisplay"
  ).innerHTML = `${fName} ${lName}`);
}

// Write a function that outputs a sentence. Then invoke that function later in your code.

function createSentence() {
  var newSentence = "Even the darkest night will end and the sun will rise.";
  document.getElementById("sentence").innerHTML = newSentence;
}

// The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN”, substituting the values.

function ageCalculator(currentyear, yearOfBirth) {
  var currentyear = new Date().getFullYear();
  var yearOfBirth = parseInt(document.getElementById("currentAge").value);
  var age = currentyear - yearOfBirth;
  return (document.getElementById("year").innerHTML =
    "You are either " + (age - 1) + " or " + age + ".");
}

// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables:

// number of children
// partner’s name
// geographic location
// job title
// Output your fortune to the screen like so: “You will be a X in Y, and married to Z with N kids.”

function fortuneTeller(numberOfChildren, partnersName, location, jobTitle) {
  var numberOfChildren = document.getElementById("fortuneAge").value;
  var partnersName = document.getElementById("partnersName").value;
  var location = document.getElementById("location").value;
  var jobTitle = document.getElementById("jobTitle").value;

  return (document.getElementById(
    "yourFortune"
  ).innerHTML = `You will be a ${jobTitle} in ${location}, and married to ${partnersName} with ${numberOfChildren} kids.`);
}

//Percentage Calculator

//Create a percentage calculator that takes a number and % and return the percentage value.

function percentageCalculator(num, per) {
  var num = parseInt(
    document.getElementById("percentageCalculatorNumber").value
  );
  var per = parseInt(
    document.getElementById("percentageCalculatorPercent").value
  );
  return (document.getElementById("percentageResult").innerHTML =
    (num / 100) * per);
}

//Drinks Maker

//Use a switch statement to make a drink selection with two variabkes and return the drinks selection.

function drinkOrder(size, drink) {
  var drink = document.getElementById("flavours").value;
  switch (drink) {
    case "cola":
      return outputDrinksOrder(size, "Cola");
      break;
    case "lemonade":
      return outputDrinksOrder(size, "Lemonade");
      break;
    case "orange":
      return outputDrinksOrder(size, "Orange");
      break;
  }
}

function outputDrinksOrder(size, drink) {
  var size = document.getElementById("sizes").value;
  switch (size) {
    case "small":
      return (document.getElementById("drinksOrder").innerHTML =
        "Your order is a Small " + drink);
      break;
    case "medium":
      return (document.getElementById("drinksOrder").innerHTML =
        "Your order is a Medium " + drink);
      break;
    case "large":
      return (document.getElementById("drinksOrder").innerHTML =
        "Your order is a Large " + drink);
      break;
  }
}

//Calculator

//Build a simple calculator that takes two integers and the operator and displays the result.

function calculator(num1, num2, operator) {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var operator = document.getElementById("operator").value;
  switch (operator) {
    case "+":
      var result = num1 + num2;
      document.getElementById(
        "calculatorResult"
      ).innerHTML = `${num1} ${operator} ${num2} = ${result}`;
      break;
    case "-":
      var result = num1 - num2;
      document.getElementById(
        "calculatorResult"
      ).innerHTML = `${num1} ${operator} ${num2} = ${result}`;
      return;
      break;
    case "*":
      var result = num1 * num2;
      document.getElementById(
        "calculatorResult"
      ).innerHTML = `${num1} ${operator} ${num2} = ${result}`;
      return;
      break;
    case "/":
      var result = num1 / num2;
      document.getElementById(
        "calculatorResult"
      ).innerHTML = `${num1} ${operator} ${num2} = ${result}`;
      return;
      break;
    case "%":
      var result = num1 % num2;
      document.getElementById(
        "calculatorResult"
      ).innerHTML = `${num1} ${operator} ${num2} = ${result}`;
      return;
  }
}

  </script>
