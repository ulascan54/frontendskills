const left = document.querySelector(".left")
const right = document.querySelector(".right")
const container =document.querySelector(".container")

left.addEventListener("mouseenter",leftAction)
right.addEventListener("mouseenter",rightAction)

function leftAction(){
    container.classList.add("hover-left")
    container.classList.remove("hover-right")
}
function rightAction(){
    container.classList.add("hover-right")
    container.classList.remove("hover-left")
}