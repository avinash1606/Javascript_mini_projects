const myinput=document.getElementById("myinput");

const includeLowercase=document.getElementById("includeLowercase");

const includeUppercase=document.getElementById("includeUppercase");

const includeNumbers=document.getElementById("includeNumbers");

const includeSymbols=document.getElementById("includeSymbols");;

const mybutton=document.getElementById("mybutton");

const result=document.getElementById("result");

const LowerCase="abcdefghijklmnopqrstuvwsyz";
const UpperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers="0123456789";
const symbols="!@#$%^&*()_+";

function createpassword(passwordlength,includeLowercase,includeUppercase,includeNumbers,includeSymbols){
    let allowedchars="";
    allowedchars+=includeLowercase?LowerCase:"";
    allowedchars+=includeUppercase?UpperCase:"";
    allowedchars+=includeNumbers?numbers:"";
    allowedchars+=includeSymbols?symbols:"";

    if(passwordlength<=0){
        
        return `Password length must be atleast of 1 length`;
    }
    if(passwordlength>0 && includeLowercase==0 && includeUppercase==0 && includeNumbers==0 &&includeSymbols==0){
        return `not selected anything`;
    }
        let result="";
        for(let i=0;i<passwordlength;i++){
        const randomIndex=Math.floor(Math.random()*allowedchars.length);
        result+=allowedchars[randomIndex];

    }
    return result;

    


    
}

mybutton.onclick=function(){
    let passwordlength=Number(myinput.value);
   // result.textContent=createpassword(12,true,true,true,true);
   result.textContent=createpassword(passwordlength,includeLowercase.checked,includeUppercase.checked,includeNumbers.checked,includeSymbols.checked);

}
