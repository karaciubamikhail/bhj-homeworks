
let cookie=document.getElementById("cookie");
let stats = document.getElementById("clicker__counter").innerHTML;
Number(stats);
cookie.onclick=function(){
    stats++;
    document.getElementById("clicker__counter").innerHTML=stats;
    cookie.style.width="250px";
    setTimeout(()=>{
        cookie.style.width="200px";
    },100);
};