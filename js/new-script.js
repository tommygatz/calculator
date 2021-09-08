// Create basic math functions here:

function add(var1, var2) {
    return var1 + var2;
}
function sub(var1, var2) {
    return var1 - var2;
}
function mul(var1, var2) {
    return var1 * var2;
}
function div(var1, var2) {
    return var1 / var2;
}

// Create "operate" function, takes operator and two vars

function operate(operator, var1, var2){
    let answer = 0;
    switch (operator) {
        case "+":
            answer = add(var1,var2);
            break;
        case "-":
            answer = sub(var1,var2);
            break;
        case "x":
            answer = mul(var1,var2);
            break;
        case "/":
            answer = div(var1,var2);
            break;
        default:
            console.log("There was an error with the operate function");
            break;
    }
    return answer;
}

// Create the functions that populate the display when you click the number buttons… 
// you should be storing the ‘display value’ in a variable somewhere for use in the next step.

let displayValue = 0;
let values = [,,];

function clearDisplay(){
    displayValue = 0;
    values = [,,];
    updateDisplay(displayValue);
}

function buildNum(input){
    displayValue = (displayValue*10) + input;
    console.log(displayValue);
    updateDisplay(displayValue);
}

function updateDisplay(input){
    let checkNum = input.toString().length;
    let result = 0;
    if (checkNum <= 8){
        result = input;
    }
    else {
        result = input.toPrecision(8);
    }
    document.getElementById("displayText").innerHTML = result;
}

function operation(operator){
    if ((values[0] || values[0] == 0) && values[1]){
        values[2] = displayValue;
        displayValue = operate(values[0],values[1],values[2]);
        updateDisplay(displayValue);
    }
    else {
        values[0] = operator;
        values[1] = displayValue;
    }
    values[0] = operator;
    values[1] = displayValue;
    displayValue = 0;
    console.log(values);
}

function equals(){
    if (values[0] && values[1]){
        values[2] = displayValue;
        displayValue = operate(values[0],values[1],values[2]);
        updateDisplay(displayValue);
    }
    else {
        console.log('operation cleared.');
    }
    values = [,,];
    console.log(values);
}