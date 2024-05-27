function randomColorGenerator(){
   let randomColorString="0123456789ABCDEF";
   let randomColor='#';

   for(let i=0;i<6;i++){
    randomColor+=randomColorString[Math.floor((Math.random()*16))];


   }
   return randomColor;

}
let timer=null;
document.getElementById("startbtn").addEventListener("click",function(e){
    if(!timer){
        timer=setInterval(changeBgcolor, 1000);
        function changeBgcolor(){
            document.body.style.backgroundColor=randomColorGenerator();
           
    
        }
    }
   
})

document.getElementById("stopbtn").addEventListener("click",function(e){
   clearInterval(timer);
   timer=null;
})