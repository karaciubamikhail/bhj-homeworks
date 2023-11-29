let tubs = document.querySelectorAll(".tab");

let tabContents = document.querySelectorAll(".tab__content");

for(let i=0;i<tubs.length;i++){
    tubs[i].addEventListener("click", (e)=>{

    })
}
tubs.forEach((tabs,index)=>{
    tabs.addEventListener("click",(e)=>{
        for(let i=0;i<tubs.length;i++){
            tubs[i].classList.remove("tab_active");
            tabContents[i].classList.remove("tab__content_active");
        }
        e.target.classList.add("tab_active");
        tabContents[index].classList.add("tab__content_active");
    })
})
