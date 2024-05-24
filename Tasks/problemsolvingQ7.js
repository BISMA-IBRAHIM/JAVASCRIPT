const number = parseInt(prompt("Enter a number"));
const arr = [number]; // Convert the input number into an array

function countNumbers(arr) {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    
    for (let i = 0; i < arr.length; i++) 
   
      {
        if (arr[i] > 0) {
            positiveCount++;
        } else if (arr[i] < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }
    }
    
    console.log('Positive numbers:', positiveCount);
    console.log('Negative numbers:', negativeCount);
    console.log('Zero numbers:', zeroCount);
}

countNumbers(arr);
