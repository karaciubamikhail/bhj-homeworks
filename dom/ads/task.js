let element = document.querySelectorAll(".rotator__case");
let сurrent = 0;

setInterval(()=>{
    let prew = сurrent;
    if(сurrent<(element.length-1)){
        сurrent ++;
    }else{
        сurrent = 0;
    }
    element[сurrent].classList.add("rotator__case_active");
    if(сurrent !== 0){
        prew = сurrent - 1;
    }
    element[prew].classList.remove("rotator__case_active");
},1000)