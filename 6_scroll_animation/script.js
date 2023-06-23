const contents = document.querySelectorAll(".content")

window.addEventListener('scroll',checkContents)
checkContents()

function checkContents(){
    const triggerBottom = window.innerHeight / 5 * 4

    contents.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
