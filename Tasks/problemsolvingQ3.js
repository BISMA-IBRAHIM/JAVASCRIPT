 // QUESTION NO# 03 ------ take 100 numbers as an input and Print, whether it is positive or not 

 const myarray=["23", "45", "67", "89", "12", "34", "56", "78", "90", "10", "21", "32",
 "43", "54", "65", "76", "87", "98", "9", "8", "7", "6", "5", "4", "3", "2", "1", "99", "88", "77", 
 "66", "55", "44", "33", "22", "11", "100", "91", "92", "93", "94", "95", "96", "97", "79", "80", "81", 
 "82", "83", "84", "85", "86", "20", "19", "18", "17", "16", "15", "14", "13", "57", "58", "59", "60", "61", 
 "62", "63", "64", "48", "49", "50", "51", "52", "53", "24"]

function checkPositive(myarray){
    if(myarray>0){
        return "Its a positive number";
    }else{
        return "Its a negative number";
    }
}
for (let i=0; i< myarray.length; i++){
    console.log("number",myarray[i], ":", checkPositive(myarray[i]));
}
