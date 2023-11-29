let dropdown = document.querySelector(".dropdown");
let dropdownValue = document.querySelector(".dropdown__value");
let dropdownList = document.querySelector(".dropdown__list");


dropdown.addEventListener("click",(e)=>{
    e.preventDefault();
    if(dropdownList.classList.contains("dropdown__list_active")){
        dropdownList.classList.remove("dropdown__list_active")
    }
    else{
        dropdownList.classList.add("dropdown__list_active")
    }
    let item = e.target.innerHTML;
    dropdownValue.innerHTML = item;
})