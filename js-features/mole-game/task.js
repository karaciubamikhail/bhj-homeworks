let holes = document.querySelectorAll(".hole");
let dead = document.querySelector("#dead");
let lost=document.querySelector("#lost");
let countDead=0;
let countLost=0;

for(let i=0;i<holes.length;i++){
    holes[i].addEventListener("click",(e)=>{
       let element = e.target;
       if(element.classList.contains("hole_has-mole")){
        countDead+=1;
        dead.innerHTML=countDead;
        if(countDead===10){
            countDead=0;
            countLost=0;
            dead.textContent=0;
            lost.textContent=0;
            alert("Победа");
        }
       }else{
        countLost+=1;
        lost.innerHTML=countLost;
        if(countLost===5){
            countDead=0;
            countLost=0;
            dead.textContent=0;
            lost.textContent=0;
            alert("Поражение");
        }
       }
    })
}
