const mytext= document.getElementById("mytext");
const camelcase=document.getElementById("camelcase");
const mysubmit= document.getElementById("mysubmit");
const myresult=document.getElementById("myresult");
const snakecase=document.getElementById("snakecase")
const pascalcase=document.getElementById("pascalcase");
mytext.onclick=function(){
    mytext.value="";
}
mysubmit.onclick=function(){

    if(mytext.value=="" && (camelcase.checked==false)&& (snakecase.checked==false) && (pascalcase.checked==false)){
        myresult.textContent=`Not Entered Anything And Not Selected Anything `;
    }
    else if(mytext.value && (camelcase.checked==false)&& (snakecase.checked==false) && (pascalcase.checked==false)){
        myresult.textContent=`Not Selected Anything`;
    }
    else if(mytext.value=="" && (camelcase.checked)|| (snakecase.checked)&& mytext.value==""|| mytext.value==""&& (pascalcase.checked)){
        myresult.textContent=`Selected But Not Entered Anything`;
    }

    else if(camelcase.checked){
        let text=mytext.value;
        
        let parts=[];
        parts=text.split(" ");
        let result=parts[0].toLowerCase();
        for(let i=0;i<parts.length-1;i++){
            let string= parts[i+1].toLowerCase();
           result+=string.charAt(0).toUpperCase()+string.slice(1);
        }

        myresult.textContent=result;

    }

    else if(snakecase.checked){
        let text=mytext.value;
        
        let parts=[];
        parts=text.split(" ");
        let result="";
        for(let i=0;i<parts.length;i++){
            let string=parts[i].toLowerCase();
            result+=string+ (i==parts.length-1?"":"_");

            
        }
        myresult.textContent=result;

    }

    else if(pascalcase.checked){
        let text=mytext.value;
        
        let parts=[];
        parts=text.split(" ");
        let result="";
        for(let i=0;i<parts.length;i++){
            let string= parts[i].toLowerCase();
           result+=string.charAt(0).toUpperCase()+string.slice(1);
        }

        myresult.textContent=result;

    }




}
