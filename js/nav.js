let menuBtn = document.querySelector(".menuButton");
let menuNgt = document.querySelector(".menuNavigation")
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("active");
    menuNgt.classList.toggle("active");
})

let destinationMn = document.querySelector(".destinationMenu")
let destinationMenuSpans = document.querySelector(".destinationMenu-span")
let destination = document.querySelector(".destination")
destinationMn.addEventListener('click', () =>{
    destinationMenuSpans.classList.toggle("active");
    destination.classList.toggle("active");
})