let btnprew = document.querySelector(".slider__arrow_prev");
let btnnext = document.querySelector(".slider__arrow_next");
let slideritem = document.querySelectorAll(".slider__item");

console.log(btnprew,btnnext,slideritem);

let slide=0;
btnnext.addEventListener('click',()=>{
    if(slide!==4){
        slide+=1;
        slideritem[slide].classList.add("slider__item_active");
        let cur=slide-1;
        slideritem[cur].classList.remove("slider__item_active");
    }else{
        slideritem[4].classList.remove("slider__item_active");
        slide=0;
        slideritem[slide].classList.add("slider__item_active");
    }
})
btnprew.addEventListener('click',()=>{
    if (slide!==0){
        slide-=1;
        slideritem[slide].classList.add("slider__item_active");
        let cur=slide+1;
        slideritem[cur].classList.remove("slider__item_active");
    }else{
        slideritem[0].classList.remove("slider__item_active");
        slide=4;
        slideritem[slide].classList.add("slider__item_active");
    }
})