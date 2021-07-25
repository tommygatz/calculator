let display = 0;
let savedNumber = 0;
let currentNumber = 0;
let result = 0;
let operator = "";


// function to update display
function updateDisplay(input){
  document.getElementById("displayText").innerHTML = input;
}


// clear screen
function clearScreen(){
  display = 0;
  currentNumber = 0;
  updateDisplay(display);
}

// pull numbers from buttons pressed
function sendVal(value){
  currentNumber = (currentNumber*10) + value;
  updateDisplay(currentNumber)
}

// functions for math operations
function add(a,b){
  return a + b;
}
function subt(a,b){
  return a - b;
}
function mult(a,b){
  return a * b;
}
function divide(a,b){
  return a / b;
}

// evaluate math problem when = is pressed using switch cases

function equals(){

}
