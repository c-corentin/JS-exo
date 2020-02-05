const HOVERS = Array.from(document.getElementsByClassName("hoverMe"))
 
HOVERS.forEach(HOVER => {
    HOVER.addEventListener("mouseover", () => {
    HOVER.classList.add("hide")
 })
})

 document.getElementById("reset").addEventListener("click",()=> {
    HOVERS.forEach(HOVER => {
     HOVER.classList.remove("hide")
    })
 })

 document.addEventListener("mousemove", (event) => {
     document.getElementById("X").textContent = `X: ${event.clientX}`
     document.getElementById("Y").textContent = `Y: ${event.clientY}`
 })

