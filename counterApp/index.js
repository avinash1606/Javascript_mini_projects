const increasebtn=document.getElementById("increasebtn");
const decreasebtn=document.getElementById("decreasebtn");
const resetbtn=document.getElementById("resetbtn");
const mylabel=document.getElementById("mylabel");

let initial=0;
increasebtn.onclick=function(){
    initial=Number(mylabel.textContent);
    initial++;
    mylabel.textContent=initial;
    document.getElementById("myp").textContent=`you've pressed increase button`;
}
decreasebtn.onclick=function(){
    initial=Number(mylabel.textContent);
    initial--;
    mylabel.textContent=initial;
    document.getElementById("myp").textContent=`you've pressed decrease button`;
}

resetbtn.onclick=function(){
    initial=Number(mylabel.textContent);
    initial=0;
    mylabel.textContent=initial;
    document.getElementById("myp").textContent=`you've pressed reset button`;
}