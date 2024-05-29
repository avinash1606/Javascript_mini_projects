const myinput=document.getElementById("myinput");
const mybutton=document.getElementById("mybutton");
const myresult=document.getElementById("myresult");
const myimages=document.getElementById("myimages");


mybutton.onclick=function(){
    const values=[];
    const images=[];


    inputvalue=myinput.value;

    for(i=0;i<inputvalue;i++){
        let randomNum=Math.floor(Math.random()*6)+1;

        values.push(randomNum);
       images.push(`<img src="assets/${randomNum}.png" alt="Dice:${randomNum}">`);

    }

    myresult.textContent=`Dice:${values.join()}`;
    myimages.innerHTML=images.join('&nbsp&nbsp&nbsp');
}