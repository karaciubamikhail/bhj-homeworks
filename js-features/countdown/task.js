let timer = document.querySelector("#timer");
let inter=Number(timer.innerHTML);

setInterval(()=>{
    if(inter>0){
    inter=inter-1;
    timer.innerHTML=Number(inter);
    }
    else{
    alert("Вы победили в конкурсе!");
    clearInterval();
    }
},1000)