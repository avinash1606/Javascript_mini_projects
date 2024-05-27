const clock=document.getElementById("clock");
const day=document.getElementById("day");
function updateClock(){
    const now=new Date();
    let hours=now.getHours();
    const todayDay=now.getDay();
    const minutes=now.getMinutes().toString().padStart(2,0);
    const seconds=now.getSeconds().toString().padStart(2,0);
    const meridiam=hours>=12?"PM":"AM";
    hours = hours %12 ||12;
    hours=hours.toString().padStart(2,0);

    const timestring=`${hours}:${minutes}:${seconds} ${meridiam}`;
    clock.textContent=timestring;
    if(todayDay==0){
        day.textContent=`SUNDAY`;
    }
    else if(todayDay==1){
        day.textContent=`MONDAY`;
    }
    else if(todayDay==2){
        day.textContent=`TUESDAY`;
    }
    else if(todayDay==3){
        day.textContent=`WEDNESDAY`;
    }
    else if(todayDay==4){
        day.textContent=`THURSDAY`;
    }
    else if(todayDay==5){
        day.textContent=`FRIDAY`;
    }
    else if(todayDay==6){
        day.textContent=`SATURDAY`;
    }
}
updateClock();
setInterval(updateClock,1000);