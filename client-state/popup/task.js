let popup = document.querySelector(".modal");
let btn = document.querySelector(".modal__close");

let popupYes = "yestr";

const pairs = document.cookie.split("; ")

const cookie = pairs.find(p => p.startsWith("yestr"));

if(cookie){
    popup.classList.remove("modal_active");
}else{
    popup.classList.add("modal_active");
}

btn.addEventListener("click",()=>{
    popup.classList.remove("modal_active");
    document.cookie = popupYes;
})
