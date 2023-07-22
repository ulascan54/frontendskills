const toggles = document.querySelectorAll(".faq-toggle")
const list = document.querySelectorAll(".faq")

list.forEach((element, i) => {
  toggles[i].addEventListener("click", () => {
    element.classList.toggle("active")
  })
})
