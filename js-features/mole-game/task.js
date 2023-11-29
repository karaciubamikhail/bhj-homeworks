(()=>{
    let holes = document.querySelectorAll('div > .hole');

for(let i=0; i<holes.length;i++){
    holes[i].addEventListener("click", clicker);
}

function clicker(){
    const dead = document.getElementById("dead");
    const lost = document.getElementById("lost");
    if (dead.textContent <= 8 & lost.textContent <= 3) {
        if (this.className == "hole hole_has-mole") {
            dead.textContent++ + 1;
        } else {
            lost.textContent++ + 1;
        }
    } else 
    if (dead.textContent >= 8) {
        alert('Вы выиграли');
        dead.textContent = 0;
        lost.textContent = 0;
    } else if (lost.textContent >= 3){
        alert('Вы проиграли');
        dead.textContent = 0;
        lost.textContent = 0;
    }
};
})();