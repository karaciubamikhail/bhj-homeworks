let text = document.querySelectorAll(".has-tooltip");
text.forEach(element => {
    element.addEventListener("click",(e)=>{
        e.preventDefault();
        let newElement = document.createElement("div");
        let atrib = element.getAttribute("title");
        newElement.classList.add("tooltip");
        newElement.innerHTML = atrib;
        element.appendChild(newElement);
        newElement.classList.add("tooltip_active");
    })
});