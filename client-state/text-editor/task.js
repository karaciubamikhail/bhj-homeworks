let text = document.querySelector("#editor");
let textnew;
text.innerHTML = localStorage.getItem("texts");
addEventListener("change",()=>{
    textnew = text.value;
    localStorage.setItem("texts", textnew);
})
