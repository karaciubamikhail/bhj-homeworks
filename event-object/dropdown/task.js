
let btn = document.querySelector(".dropdown__value");
let list = document.querySelector(".dropdown__list");
let item = document.querySelectorAll(".dropdown__item");
let value = document.querySelector(".dropdown__value");

btn.addEventListener("click", (e)=>{
    if(list.classList.value === "dropdown__list dropdown__list_active"){
        list.classList.remove("dropdown__list_active");
    }else{
        list.classList.add("dropdown__list_active");
    }
});
for(let i=0;i<item.length;i++){
    item[i].addEventListener("click",click);
}
function click(e){
    e.preventDefault();
    list.classList.remove("dropdown__list_active");
    value.textContent = e.srcElement.textContent;
}