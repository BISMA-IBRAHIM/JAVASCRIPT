<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <script>

    let numbers=[];
     function checkPositiveNegativ(number){
     if (number>0){
        return "Positive number";
     } else if(number<0){
        return "Negative number";
     }else {
        return "zero ";

     }
    }
    for (let i=0; i<=10; i++){
        let userInput=prompt("enter a number");
        let number=parseFloat(userInput);
        if(!isNaN (number)){
            numbers.push(number);

        }else{
            alert("enter a valid number");

        }
    }


    numbers.forEach(number =>{
        let result= checkPositiveNegativ(number);
        console.log(`The number ${number} is ${result}.`);
});
   </script> 
</body>
</html>