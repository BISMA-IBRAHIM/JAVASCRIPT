// Q#5 Take n number as input and count how many numbers are positive and negative ( Count ZERO as positive number)

    const myarray= parseInt(prompt("enter a number"));
    for (let i=1; i<=myarray.length; i++);
   
    if (myarray > 0) {
        console.log("It's a positive number");
    } else if (myarray === 0) {
        console.log("Count zero as a positive number");
    } else {
        console.log("It's a negative number");
    }
