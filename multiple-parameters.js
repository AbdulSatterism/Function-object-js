// add two number

function addTwoNumbers(number1, number2) {
    console.log(number1, number2);
    var total = number1 + number2;
    return total;
}
var firstNumber = 44;
var secondNumber = 47;
var result = addTwoNumbers(firstNumber, secondNumber);
console.log("Totala value", result)

// multiply function

function multiplyTwoNum(num1, num2) {
    var multiple = num1 * num2;
    return multiple;
}
var price = 100;
var quantity = 5;
var multipleValue = multiplyTwoNum(price, quantity);
console.log('Multiply value is : ', multipleValue);

// Substractor or biyog 

function substract(firstValue, secondValue) {
    var sub = firstValue - secondValue;
    return sub;
}
var subResult = substract(50, 10);
console.log('Submission value is :', subResult)