<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <!----<script>
        // Print 1st 5 integers
       
       // for(let i=1; i<=5; i++){
          //  console.log(i)
       // }

          //backword 
       // for(let i=-1; i<=-5; i--){
          //  console.log(i)
       // }
      

       </script>--->
    <script>
        let numbers=[];

        function  getNumbers(){

            for(var i=0; i<5; i++){
                var number=parseInt(prompt("enter a positive num:"));
                if(number > 0 ){
                    numbers.push(number);
                }else {
                    alert("Enter a correct number");
                    i--;
                }
            }
        }
        // function for calculating the sum of numbr
        function calculateSum(){
            var sum=0;
            for(var i=0; i< numbers.length; i++){
                sum += numbers[i];

            }
            return sum;
        }
        // 5 numbers from user
        getNumbers();
        //calculate some of numbrs
        var sum=calculateSum();
        //here is some of num 
        console.log("the sum of 5 Positive integers are;"+sum);
    </script>
</body>
</html>