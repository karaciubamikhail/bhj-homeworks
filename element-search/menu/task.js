let links=document.getElementsByTagName

for(let i=0; i<links.length;i++){
    console.log(links[i].nextElementSibling);
    links[i].addEventListener("click", click);
}
function click(e){
    if (this.nextElementSibling.className === 'menu menu_sub menu_active') {
        this.nextElementSibling.classList.remove("menu_active");
    } else {
        this.nextElementSibling.classList.add("menu_active");
        e.preventDefault();
    }
}