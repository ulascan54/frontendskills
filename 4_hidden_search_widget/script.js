const search= document.querySelector(".search")
const btn= document.querySelector(".btn")
const input= document.querySelector(".input")

btn.addEventListener("click",()=>{
    // if(search.classList.contains('active')){
    //     search.classList.remove('active')
    // }
    // else{
    //     search.classList.add('active')
    //     input.focus()
    // }

    search.classList.toggle('active')
    input.focus()
})