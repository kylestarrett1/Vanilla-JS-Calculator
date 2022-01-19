// Shortcut to get elements
var el = function (element) {
  if (element.charAt(0) === "#") {
    // if passed an ID...
    return document.querySelector(element); // returns single element
  }

  return document.querySelectorAll(element); // Otherwise, returns a nodelist
};

// Variables
var console = console.log;
var display = el("#display"), // Screen where results are displayed
  equals = el("#equals"), // Equals button
  nums = el(".num"), // List of numbers
  operators = el(".operators"), // List of operators
  theNum = "", // Current number
  oldNum = "", // First number
  resultNum, // Result
  operator;

// When number is clicked. Get the current number selected
var setNum = function () {
  if (resultNum) {
    // If a result was displayed, reset number
    theNum = this.getAttribute("data-num");
    resultNum = "";
  } else {
    // Otherwise, add a digit to previous number
    theNum += this.getAttribute("data-num");
  }

  display.innerHTML = theNum; // Display the current number
  console(theNum);
};

// When operator is clicked. Pass number to oldNum and save operator
var moveNum = function () {
  oldNum = theNum;
  theNum = "";
  operator = this.getAttribute("data-operator");

  console(operator);
  equals.setAttribute("data-result", ""); // Reset result in attribute
};

//When equals is clicked. Calculate result
var displayNum = function () {
  // Convert string input to numbers
  oldNum = parseFloat(oldNum);
  theNum = parseFloat(theNum);

  // Perform operation
  switch (operator) {
    case "plus":
      resultNum = oldNum + theNum;
      break;

    case "minus":
      resultNum = oldNum - theNum;
      break;

    case "mult":
      resultNum = oldNum * theNum;
      break;

    case "divide":
      resultNum = oldNum / theNum;
      break;

    case "percentage":
      resultNum = oldNum % theNum;
      break;

    case "sqrd":
      resultNum = oldNum ** 2;
      break;

    case "sqrt":
      resultNum = Math.sqrt(oldNum);
      break;

    case "reciprocal":
      resultNum = 1 / oldNum;
      break;

    case "reverseSign":
      resultNum = oldNum - oldNum * 2;
      break;

    // If equal is pressed without an operator, keep number and continue
    default:
      resultNum = theNum;
  }

  // If NaN
  if (isNaN(resultNum)) {
    resultNum = "Error";
  }

  // Display results
  display.innerHTML = resultNum;

  equals.setAttribute("data-result", resultNum);

  oldNum = 0;
  theNum = resultNum;
};

var clearEntry = function () {
  theNum = "";
  display.innerHTML = "0";
  equals.setAttribute("data-result", resultNum);
};

// When the clear button is pressed. Clear everything
var clearAll = function () {
  oldNum = "";
  theNum = "";
  display.innerHTML = "0";
  equals.setAttribute("data-result", resultNum);
};

/*  The Click Events  */

// Add click event to numbers
for (var i = 0; i < nums.length; i++) {
  nums[i].onclick = setNum;
}

// Add click event to operators
for (var i = 0; i < operators.length; i++) {
  operators[i].onclick = moveNum;
}

// Add click event to equal sign
equals.onclick = displayNum;

// Add click event to clear entry button
el("#clearEntry").onclick = clearEntry;

// Add click event to clear button
el("#clearAll").onclick = clearAll;

/*
$("").tilt({
  glare: true,
  maxGlare: 0.5,
});
*/
