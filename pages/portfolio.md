---
layout: layouts/page.njk
title: Learning with The Coders Guild
templateClass: tmpl-page
eleventyNavigation:
  key: Portfolio
  order: 4
image: "/img/pages/image5.jpg"
---

<div class="tw-container tw-p-6">

<h2>Mandatory Challenges</h2>

<p>On this page I will document my mandatory challenges with The Coders Guild</p>

<h3 id="#top">Menu</h3>
<menu class="tw-text-xl tw-list-none tw-font-bold tw-p-0">
 
<li class="tw-underline"><a href="#">HTML Table challenge (Lesson 3 - Semantic HTML)</a></li>
<li><a>Git.It Electron Tutorial (Lesson 2 - Source Control)</a></li>
<li><a>Make a Github pages profile (Lesson 2 - Source Control)</a></li>
<li><a>Create a HTML page using bootstrap (Lesson 4 - Frameworks)</a></li>
<li><a>Create a Jamstack site in 11ty (Lesson 5 - Static Site Generators)</a></li>
<li><a>Add bootstrap to 11ty site with Git (Lesson 6 - Git Workflows)</a></li>
<li><a>Update you site making detailed commits (Lesson 6 - Git Workflow)</a></li>
<li><a>Add a form to your 11ty site (Lesson 7 - Form Processing)</a></li>
<li><a>Add CMS to you 11ty site (Lesson 8 - Content Management)</a></li>
<li><a>Add further data and page types to CMS (Lesson 8 - Content management)</a></li>
<li><a>Create a tip calculator in javascript (Lesson 9 - Programming Concepts)</a></li>
<li><a>Write a function that outputs a sentence. Then invoke that function later in your code. (Lesson 10 - Functions and Control Flow)</a></li>
<li><a>Write a simple program to combine a first name and a last name inside a function. Then update the function to accept a first and last name as arguments. (Lesson 10 - Functions and Control Flow)</a></li>
<li><a>Add a return statement to your 'name' function. Use that function to set the value of a variable.(Lesson 10 - Functions and Control Flow)</a></li>
<li><a>"Shall I wear a coat?" function (Lesson 10 - Functions and Control Flow)</a></li>
<li><a>Percentage Calculator (Lesson 11 - Functions Practical)</a></li>
<li><a>Switch Statements (Lesson 11 - Functions Practical)</a></li>
<li><a>Build a calculation function (Lesson 11 - Functions Practical)</a></li>

</menu>

<h3>Javascript Challenges - Programming Concepts</h3>

<h4><a>HTML Table challenge (Lesson 3 - Semantic HTML)</a></h4>
<a href="https://github.com/martinbreynolds/semantic-html-challenge"><i class="fab fa-github"></i> Find my repository here.</a>

<h3>Tip Calculator</h3>

  <h4>We’ll make a program to calculate a tip:</h4>
 
 <p>Create 2 Variables for Amount and Tip Percentage</p>
  <p>Calculate the new total</p>
  <p>Output a sentence to the page - something like: "Your total bill, with tip, is £35.45"</p>

<h5>BONUS POINTS:</h5>

<p>Use `toFixed()` to round the output to 2 decimal places</p>
<p>Display the tip amount in the output as well</p>

<h4>Additional</h4>

<p>Make a Procedural `Function` in Javascript.</p>

<h3>The Code</h3>

<pre class="tw-bg-gray-900 tw-text-gray-50"><code>
function tipCalculator() {
  var billAmount = parseInt(document.getElementById("billAmount").value);

  var tipPercentage = parseInt(
    document.getElementById("percentAmount").value
  ).toFixed(2);

  var tipPercentCalc = ((billAmount / 100) * tipPercentage).toFixed(2);

  var totalBill = billAmount + tipPercentCalc;

  return (document.getElementById(
    "totalBillSentence"
  ).innerHTML = `Your bill of £${billAmount.toFixed(
    2
  )}, with a ${tipPercentage}% tip of £${tipPercentCalc} , is a total bill of £${totalBill}`);
}
</code></pre>

<h3>The Code in Action</h3>

<label class="tw-font-semibold tw-mb-1" for="billAmount">Please enter the total bill amount.</label>
<input type="number" id="billAmount"></input>
<label class="tw-font-semibold tw-mb-1"  for="percentAmount">Please enter the total percentage amount.</label>
<input type="number" id="percentAmount"></input>
<button class="tw-my-5 tw-bg-cyan-900 tw-font-bold tw-uppercase tw-text-gray-50 tw-p-2 tw-border-gray-300 tw-border-solid tw-border-2 tw-rounded-xl" onclick="tipCalculator()">Calculate Tip</button>

<div class="answerArea tw-bg-cyan-900 tw-text-gray-50 tw-p-6 tw-mt-4 mb-4">
  <p id="totalBillSentence">&nbsp;</p>
</div>

  <div class="tw-mb-4 tw-border-b-4 tw-border-solid tw-border-cyan-900 tw-p-3">
  <a href="#top">Back To The Top</a></div>

  <h2>Javascript Challenges - Variables and Operators</h2>
  <h3>Sentence Output</h3>
      <h3>The Code</h3>

<pre class="tw-bg-gray-900 tw-text-gray-50"><code>
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
</code></pre>

<h3>The Code in Action</h3>

<label class="tw-font-semibold tw-mb-1" >Please click the button to display a sentence.</label>
<button class="tw-my-5 tw-bg-cyan-900 tw-font-bold tw-uppercase tw-text-gray-50 tw-p-2 tw-border-gray-300 tw-border-solid tw-border-2 tw-rounded-xl" type="submit" onclick="createSentence()">Create a Sentence.</button>

<div class="answerArea tw-bg-cyan-900 tw-text-gray-50 tw-p-6 tw-mt-4 mb-4">
<p id="sentence">&nbsp;</p>
</div>

  <div class="tw-mb-4 tw-border-b-4 tw-border-solid tw-border-cyan-900 tw-p-3">
  <a href="#top">Back To The Top</a></div>

  <h3>Show your Full Name</h3>

  <h3>The Code</h3>

<pre class="tw-bg-gray-900 tw-text-gray-50"><code>
// Write a simple program to combine a first name and a last name inside a function.
// Then update the function to accept a first and last name as arguments.

function displayFullName(fName, lName) {
  var fName = document.getElementById("fName").value;
  var lName = document.getElementById("lName").value;

  return (document.getElementById(
    "fullNameDisplay"
  ).innerHTML = `${fName} ${lName}`);
}
</code></pre>

  <h3>The Code in Action</h3>

<label class="tw-font-semibold tw-mb-1"  for="fName">Please enter your first name.</label>
<input type="text" id="fName" />

<label class="tw-font-semibold tw-mb-1"  for="lName">Please enter your last name.</label>
<input type="text" id="lName" />

   <button class="tw-my-5 tw-bg-cyan-900 tw-font-bold tw-uppercase tw-text-gray-50 tw-p-2 tw-border-gray-300 tw-border-solid tw-border-2 tw-rounded-xl"  type="submit" onclick="displayFullName()">
        Display your full name.
      </button>

<div class="answerArea tw-bg-cyan-900 tw-text-gray-50 tw-p-6 tw-mt-4 mb-4">
<p id="fullNameDisplay">&nbsp;</p>
</div>

  <div class="tw-mb-4 tw-border-b-4 tw-border-solid tw-border-cyan-900 tw-p-3">
  <a href="#top">Back To The Top</a></div>

<h3>Do I need a coat? - Part 1</h3>

<h3>The Code</h3>

<pre class="tw-bg-gray-900 tw-text-gray-50"><code>

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
</code></pre>

  <h3>The Code in Action</h3>

<label class="tw-font-semibold tw-mb-1"  for="temperature">Whats the temperature?</label>
<input type="text" id="temperature" />

<label class="tw-font-semibold tw-mb-1" >Please click the button to check if you need a coat.</label>
<button class="tw-my-5 tw-bg-cyan-900 tw-font-bold tw-uppercase tw-text-gray-50 tw-p-2 tw-border-gray-300 tw-border-solid tw-border-2 tw-rounded-xl"  type="submit" onclick="coatCheck()">Do I need a coat?</button>

<div class="answerArea tw-bg-cyan-900 tw-text-gray-50 tw-p-6 tw-mt-4 mb-4">
  <p id="coatAdvice">&nbsp;</p>
  </div>

  <div class="tw-mb-4 tw-border-b-4 tw-border-solid tw-border-cyan-900 tw-p-3">
  <a href="#top">Back To The Top</a></div>

  <h3>Do I need a coat? - Part 2</h3>

  <h3>The Code</h3>

<pre class="tw-bg-gray-900 tw-text-gray-50"><code>
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
</code></pre>

  <h3>The Code in Action</h3>

<label class="tw-font-semibold tw-mb-1"  for="temperature2">Whats the temperature?</label>
<input type="text" id="temperature2" />

<label class="tw-font-semibold tw-mb-1" >Please click the button to check if you need a coat.</label>
<button class="tw-my-5 tw-bg-cyan-900 tw-font-bold tw-uppercase tw-text-gray-50 tw-p-2 tw-border-gray-300 tw-border-solid tw-border-2 tw-rounded-xl"  type="submit" onclick="coatCheck2()">Do I need a coat?</button>

<div class="answerArea tw-bg-cyan-900 tw-text-gray-50 tw-p-6 tw-mt-4 mb-4">
  <p id="coatAdvice2">&nbsp;</p>
</div>

  <div class="tw-mb-4 tw-border-b-4 tw-border-solid tw-border-cyan-900 tw-p-3">
  <a href="#top">Back To The Top</a></div>

  <h3>Age Calculator</h3>

  <h3>The Code</h3>

<pre class="tw-bg-gray-900 tw-text-gray-50"><code>

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
</code></pre>

  <h3>The Code in Action</h3>

<label class="tw-font-semibold tw-mb-1" >Please enter your current Age</label>

  <input type="number" id="currentAge" />
  <button class="tw-my-5 tw-bg-cyan-900 tw-font-bold tw-uppercase tw-text-gray-50 tw-p-2 tw-border-gray-300 tw-border-solid tw-border-2 tw-rounded-xl"  type="submit" onclick="ageCalculator()">
        Calculate your Age
      </button>

<div class="answerArea tw-bg-cyan-900 tw-text-gray-50 tw-p-6 tw-mt-4 mb-4">

<p id="year">&nbsp;</p>
  </div>

  <div class="tw-mb-4 tw-border-b-4 tw-border-solid tw-border-cyan-900 tw-p-3">
  <a href="#top">Back To The Top</a></div>

  <h3>Fortune Teller</h3>

  <h3>The Code</h3>

<pre class="tw-bg-gray-900 tw-text-gray-50"><code>
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
</code></pre>

  <h3>The Code in Action</h3>

<label class="tw-font-semibold tw-mb-1"  for="fortuneAge">Please enter your current Age</label>
<input type="number" id="fortuneAge" />

<label class="tw-font-semibold tw-mb-1"  for="partnersName">Please enter your partners Name</label>
<input type="text" id="partnersName" />

<label class="tw-font-semibold tw-mb-1"  for="location">Please enter your current location</label>
<input type="text" id="location" />

<label class="tw-font-semibold tw-mb-1"  for="jobTitle">Please enter your job title</label>
<input type="text" id="jobTitle" />
<button class="tw-my-5 tw-bg-cyan-900 tw-font-bold tw-uppercase tw-text-gray-50 tw-p-2 tw-border-gray-300 tw-border-solid tw-border-2 tw-rounded-xl"  type="submit" onclick="fortuneTeller()">
Let me tell your fortune
</button>

<div class="answerArea tw-bg-cyan-900 tw-text-gray-50 tw-p-6 tw-mt-4 mb-4">
  <p id="yourFortune">&nbsp;</p>
</div>

  <div class="tw-mb-4 tw-border-b-4 tw-border-solid tw-border-cyan-900 tw-p-3">
  <a href="#top">Back To The Top</a></div>

  <h3>Percentage Calculator</h3>

  <h3>The Code</h3>

<pre class="tw-bg-gray-900 tw-text-gray-50"><code>

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

</code></pre>

  <h3>The Code in Action</h3>

<label class="tw-font-semibold tw-mb-1"  for="percentageCalculatorNumber">Please enter a Number</label>
<input type="number" id="percentageCalculatorNumber" />

<label class="tw-font-semibold tw-mb-1"  for="percentageCalculatorPercent">Please enter a %</label>
<input type="number" id="percentageCalculatorPercent" />

   <button class="tw-my-5 tw-bg-cyan-900 tw-font-bold tw-uppercase tw-text-gray-50 tw-p-2 tw-border-gray-300 tw-border-solid tw-border-2 tw-rounded-xl"  type="submit" onclick="percentageCalculator()">
        Work out the Percentage
      </button>

<div class="answerArea tw-bg-cyan-900 tw-text-gray-50 tw-p-6 tw-mt-4 mb-4">
  <p id="percentageResult">&nbsp;</p>
  </div>

<div class="tw-mb-4 tw-border-b-4 tw-border-solid tw-border-cyan-900 tw-p-3">

<a href="#top">Back To The Top</a></div>

  <h3>Drinks Maker</h3>

  <h3>The Code</h3>

<pre class="tw-bg-gray-900 tw-text-gray-50"><code>

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
</code></pre>

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

<button class="tw-my-5 tw-bg-cyan-900 tw-font-bold tw-uppercase tw-text-gray-50 tw-p-2 tw-border-gray-300 tw-border-solid tw-border-2 tw-rounded-xl"  type="submit" onclick="drinkOrder()">Show my Order</button>

<div class="answerArea tw-bg-cyan-900 tw-text-gray-50 tw-p-6 tw-mt-4 mb-4">
  <p id="drinksOrder">&nbsp;</p>
</div>
  <div class="tw-mb-4 tw-border-b-4 tw-border-solid tw-border-cyan-900 tw-p-3">
  <a href="#top">Back To The Top</a></div>

  <h3>Calculator</h3>

  <h3>The Code</h3>

<pre class="tw-bg-gray-900 tw-text-gray-50"><code>

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
</code></pre>

   <h3>The Code in Action</h3>

<label class="tw-font-semibold tw-mb-1"  for="num1">Please enter a Number</label>
<input type="number" id="num1" />

  <select name="operator" id="operator">
        <option value="+">+ Add</option>
        <option value="-">- Subtract</option>
        <option value="*">* Times</option>
        <option value="/">/ Divide</option>
        <option value="%">% Modulas</option>
      </select>

<label class="tw-font-semibold tw-mb-1"  for="num2">Please enter a Number</label>
<input type="number" id="num2" />

<button class="tw-my-5 tw-bg-cyan-900 tw-font-bold tw-uppercase tw-text-gray-50 tw-p-2 tw-border-gray-300 tw-border-solid tw-border-2 tw-rounded-xl"  type="submit" onclick="calculator()">Calculate</button>

<div class="answerArea tw-bg-cyan-900 tw-text-gray-50 tw-p-6 tw-mt-4 mb-4">
  <p id="calculatorResult">&nbsp;</p>
</div>
  </div>

  <div class="tw-mb-4 tw-border-b-4 tw-border-solid tw-border-cyan-900 tw-p-3">
  <a href="#top">Back To The Top</a></div>

  <!-- Scripts -->

<script>

//Tip Calculator

//  We’ll make a program to calculate a tip:
 
// Calculate the new total
// Output a sentence to the page - something like: "Your total bill, with tip, is £35.45
// Create variables for the pre-tip total and the tip percentage

// BONUS POINTS:

// Use `toFixed()` to round the output to 2 decimal places</p>
// Display the tip amount in the output as well</p>

// Additional</h4>

// Make a Procedural `Function` in Javascript.

  function tipCalculator(){

  var billAmount = parseInt(document.getElementById('billAmount').value);

  var tipPercentage = parseInt(document.getElementById('percentAmount').value).toFixed(2);

  var tipPercentCalc = ((billAmount / 100) * tipPercentage).toFixed(2);

  var totalBill = (billAmount + tipPercentCalc);
  
  return(
  document.getElementById('totalBillSentence').innerHTML = `Your bill of £${billAmount.toFixed(2)}, with a ${tipPercentage}% tip of £${tipPercentCalc} , is a total bill of £${totalBill}`)
 
}

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
