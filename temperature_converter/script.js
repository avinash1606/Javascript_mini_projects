const myinput=document.getElementById("myinput");
const celtofah=document.getElementById("celtofah");
const fahtocel=document.getElementById("fahtocel");
const mysubmit=document.getElementById("mysubmit");
const answer=document.getElementById("answer");

function celsiusToFahrenheit(number){
    return number*9/5+32;

}

function fahrenheitToCelsius(number){
    return 5/9*(number-32);
}
let temp=0;
mysubmit.onclick=function(){
    if(celtofah.checked){
         temp=Number(myinput.value);
        answer.textContent=`${celsiusToFahrenheit(temp)} degree fahrenheit`;

   }
   else if(fahtocel.checked){
    temp=Number(myinput.value);
        answer.textContent=`${fahrenheitToCelsius(temp)} degree celsius`;

   }
}
// document.getElementById("answer").textContent=`welcome to the game`;