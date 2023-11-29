let modal = document.querySelector(".modal");
let closes = document.querySelectorAll(".modal__close");
let btn = document.querySelector(".show-success");
let modmain= document.getElementById("modal_main");
let modsuc= document.getElementById("modal_success");
modmain.classList.add("modal_active");

btn.addEventListener("click",function(){
    modmain.classList.remove("modal_active");
    modsuc.classList.add("modal_active");
});
closes[0].addEventListener('click', function () {
    modmain.classList.remove("modal_active");
});
closes[2].addEventListener('click', function () {
    modsuc.classList.remove("modal_active");
});