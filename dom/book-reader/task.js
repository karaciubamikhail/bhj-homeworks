let small = document.querySelector(".font-size_small");
let active = document.querySelector(".font-size_active");
let big = document.querySelector(".font-size_big");
let book = document.querySelector(".book");

big.addEventListener("click",(e)=>{
    e.preventDefault();
    big.classList.add("font-size_active")
    small.classList.remove("font-size_active")
    active.classList.remove("font-size_active")
    book.classList.remove("book_fs-small");
    book.classList.add("book_fs-big");
})
active.addEventListener("click",(e)=>{
    
    big.classList.remove("font-size_active")
    small.classList.remove("font-size_active")
    active.classList.add("font-size_active")
    e.preventDefault();
    book.classList.remove("book_fs-big");
    book.classList.remove("book_fs-small");
})
small.addEventListener("click",(e)=>{
    big.classList.remove("font-size_active")
    small.classList.add("font-size_active")
    active.classList.remove("font-size_active")
    e.preventDefault();
    book.classList.remove("book_fs-big");
    book.classList.add("book_fs-small");
})