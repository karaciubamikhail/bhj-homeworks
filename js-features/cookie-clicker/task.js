let cocie = document.querySelector("#cookie")
let statuss = document.querySelector("#clicker__counter");
let timer = 0;
cocie.addEventListener("click",()=>{
    timer+=1;
    statuss.innerHTML=timer;
    cocie.setAttribute("style","width:200px;");
    setTimeout(()=>{
        cocie.setAttribute("style","width:100px;");
    },100)
});