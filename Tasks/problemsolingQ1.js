
// QUESTION NO# 01 ------ take 5 numbers as an input and Print, whether it is positive or not 

const numbers = [22, -33, 44, -66, 20]; 

function checkPositive(number) {
    if (number > 0) {
        return "Positive";
    } else {
        return "Not positive"; 
    }
}
//with the help of loop print array of 5 numbers
for (let i = 0; i < numbers.length; i++) {
    console.log("Number", numbers[i], ":", checkPositive(numbers[i]));
}