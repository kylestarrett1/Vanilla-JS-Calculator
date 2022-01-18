const clearAll = document.getElementById("clearAll");
const plus = document.getElementById("plus");
const displayResults = document.getElementById("displayResults");
const screenDisplay = document.querySelector("#displayResults");
const buttons = document.querySelectorAll("button[id]");

clearAll.addEventListener("click", function () {
  displayResults.innerHTML = "0";
});

const clickNumbers = buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    inputNumber(this.innerHTML);

    var currentValue = screenDisplay.innerHTML;
    console.log(currentValue);
  });
});

const inputNumber = (number) => {
  const screenNumber = screenDisplay.innerHTML;
  if (screenNumber.length < 16) {
    // limiting the number that can be inserted so you dont excede the limit and get something like 3.333333333333333e+21
    screenDisplay.innerHTML = parseInt(screenNumber + number).toString();
  }
};

const addition = plus.addEventListener("click", function () {
  screenDisplay.innerHTML = 0;
  const currentValue = screenDisplay.innerHTML;

  console.log(currentValue);
});

$("#percentage").tilt({
  glare: true,
  maxGlare: 0.5,
});

$("#clearEntry").tilt({
  glare: true,
  maxGlare: 0.5,
});

$("#clearAll").tilt({
  glare: true,
  maxGlare: 0.5,
});

$("#backSpace").tilt({
  glare: true,
  maxGlare: 0.5,
});

$("#reciprocal").tilt({
  glare: true,
  maxGlare: 0.5,
});

$("#sqrd").tilt({
  glare: true,
  maxGlare: 0.5,
});

$("#sqrt").tilt({
  glare: true,
  maxGlare: 0.5,
});

$("#divide").tilt({
  glare: true,
  maxGlare: 0.5,
});

$("#seven").tilt({
  glare: true,
  maxGlare: 0.5,
});

$("#eight").tilt({
  glare: true,
  maxGlare: 0.5,
});

$("#nine").tilt({
  glare: true,
  maxGlare: 0.5,
});

$("#mult").tilt({
  glare: true,
  maxGlare: 0.5,
});

$("#four").tilt({
  glare: true,
  maxGlare: 0.5,
});

$("#five").tilt({
  glare: true,
  maxGlare: 0.5,
});

$("#six").tilt({
  glare: true,
  maxGlare: 0.5,
});

$("#minus").tilt({
  glare: true,
  maxGlare: 0.5,
});

$("#one").tilt({
  glare: true,
  maxGlare: 0.5,
});

$("#two").tilt({
  glare: true,
  maxGlare: 0.5,
});

$("#three").tilt({
  glare: true,
  maxGlare: 0.5,
});

$("#plus").tilt({
  glare: true,
  maxGlare: 0.5,
});

$("#negPos").tilt({
  glare: true,
  maxGlare: 0.5,
});

$("#zero").tilt({
  glare: true,
  maxGlare: 0.5,
});

$("#decimal").tilt({
  glare: true,
  maxGlare: 0.5,
});

$("#equals").tilt({
  glare: true,
  maxGlare: 0.5,
});
