const first = parseFloat(prompt("Please Enter Your First Number: "));
const operator = prompt("Please Enter Your Value(pick +, -, * or /): ");
const second = parseFloat(prompt("Please Enter Your Second Number: "));
if(operator == '+') {
    result = first + second;
}
else if (operator == '-') {
    result = first - second;
}
else if (operator == '*') {
    result = first * second;
}
else if (operator == '/') {
    result = first / second;
}
else {
    result = "Please Enter a Valid Input"
}
window.alert("Your result is " + result)