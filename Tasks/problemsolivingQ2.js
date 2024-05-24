 // QUESTION NO# 02 ------ take 10 numbers as an input and Print, whether it is positive or not 

 const numbers=["22","33","66","88","99","-99","77","-56","89","78"]

 function checkPositive(number){
     if(number>0){
         return "its a positive num";
     }else{
         return "its a negative num";
     }
 }
 
 for(let i=0; i< numbers.length ; i++){
     console.log("number",numbers [i]," : ", checkPositive(numbers[i]));
 }