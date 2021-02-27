---
layout: layouts/page.njk
title: Javascript with with the Coders Guild
templateClass: tmpl-page
eleventyNavigation:
  key: JS with CG
  order: 4
image: '/img/pages/image5.jpg'
---

## Learning Javascript with the Coders Guild

On this page I will document my JS learning with The Coders Guild

### Lesson 9 - JS Lesson 1 - Programming Concepts

In this lesson, we were taken through the basics of Javascript, including creating variables, contactination, using arithmetic operators, adding comments and using console.log.

The code from the in lesson practicals is below.

```javascript
    //Creating a variable
    
    var myName = 'Martin';

    //A short one line comment

    alert(myName);
    console.log(myName);

    /* This is a multiline comment
    that goes over
    multiple pages*/

    document.write(myName);

    var a = 15;
    var b = 6;

    console.log('my numbers are', a, 'and', b)

    console.log('addition', a+b);
    console.log('subtraction', a-b);
    console.log('multiplication', a*b);
    console.log('division', a/b);
    console.log('modulas', a%b);

    var fName = 'Martin';
    var lName = 'Reynolds';

    console.log('Simple concactenate', fName+' '+lName);
    console.log(`String interprelation ${fName +' ' + lName}`)
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