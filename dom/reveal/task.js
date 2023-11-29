let vieport = window.innerHeight;
let element = document.querySelectorAll(".reveal")

window.addEventListener("scroll", ()=>{
    for(let i=0;i<element.length;i++){
        if (element[i].getBoundingClientRect().top<vieport){
            element[i].classList.add("reveal_active");
    }
    }
});