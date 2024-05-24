// QUESTION 4 # TAKE n NUMBERS AS AN INPUT AND PRINT WHETER IT IS POSITIVE OR NOT 
const num= prompt("ENTER A NUMBER");
    if(num>0 ){
        document.write("its a positive num");

   }else{
       document.write("Its a negative num");
    }
 
  for(let i=0; i< num.length; i++){
document.write("number",num[i], ":",checkPositive(num[i]));
 }