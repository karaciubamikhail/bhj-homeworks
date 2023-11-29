let tab = document.querySelectorAll(".tab");
let content = document.querySelectorAll(".tab__content");
let countercontent=0;
let text;
let array=[];
for (let i=0; i<tab.length;i++){
    tab[i].addEventListener("click",clicktab);
    array.push(tab[i].innerHTML.trim());
}
function clicktab(e){
    let contenttab = e.target.innerHTML.trim();
    let current = document.querySelector(".tab__content_active");
    text = array.indexOf(contenttab);
    switch(text){
        case 0: countercontent = 0;
        current.classList.remove("tab__content_active");
        break;
        case 1: countercontent = 1;
        current.classList.remove("tab__content_active");
        break;
        case 2: countercontent = 2;
        current.classList.remove("tab__content_active");
        break;
    }
    content[countercontent].classList.add("tab__content_active");
}