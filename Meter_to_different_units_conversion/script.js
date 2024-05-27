const myinput=document.getElementById("myinput");
const meterToInches=document.getElementById("meterToInches");
const btnformetoinch=document.getElementById("btnformetoinch");
const btnformetofeet=document.getElementById("btnformetofeet");
const meterToFeet=document.getElementById("meterToFeet");
const btnformetomilli=document.getElementById("btnformetomilli");
const meterToMillimetres=document.getElementById("meterToMillimetres");

const btnformetokillo=document.getElementById("btnformetokillo");
const meterToKilo=document.getElementById("meterToKilo");
const btnformetocenti=document.getElementById("btnformetocenti");
const meterToCenti=document.getElementById("meterToCenti");







function meToInch(number){
    return 39.36*number;

}

function meToFeet(number){
    return 3.28084*number;
}


let valuee;
btnformetoinch.onclick=function(){
    valuee=Number(myinput.value);
   // document.getElementById("myp").textContent=`${valuee}`;
    meterToInches.value=`${meToInch(valuee)}`;

}

btnformetofeet.onclick=function(){
    valuee=Number(myinput.value);
    meterToFeet.value=`${meToFeet(valuee)}`;

}

btnformetomilli.onclick=function(){
    valuee=Number(myinput.value);
    meterToMillimetres.value=`${valuee*1000}`;
}

btnformetokillo.onclick=function(){
    valuee=Number(myinput.value);
    meterToKilo.value=`${valuee/1000}`;
}

btnformetocenti.onclick=function(){
    valuee=Number(myinput.value);
    meterToCenti.value=`${valuee*100}`;
}