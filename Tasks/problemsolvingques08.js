
    
 // initilize empty arry & ask user how many numbers for input ->5 
let numbers = [];

function checkPositiveNegative(number) {
    if (number > 0) {
        return "positive";
    } else if (number < 0) {
        return "negative";
    } else {
        return "zero";
    }
}

for (let i = 0; i < 5; i++) {
    let userInput = prompt("Enter a number");
    let number = parseFloat(userInput);
    if (!isNaN(number)) {
        numbers.push(number);
    } else {
        alert("Please enter a valid number.");
    }
}

numbers.forEach(number => {
    let result = checkPositiveNegative(number);
    console.log(`The number ${number} is ${result}.`);
});



    
