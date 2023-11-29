let time = document.querySelector(".timer").textContent;
Number(time);
time=5;
setInterval(function(){
    time=time-1;
    document.querySelector(".timer").textContent=time;
    if(time===0){
        alert("Вы победили")
        return;
    }
},1000)