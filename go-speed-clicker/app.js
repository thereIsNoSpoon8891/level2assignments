///////////////////*******GO speed clicker *///////////////////////
let clickCount = 0

document.getElementById("clicker").addEventListener("click", e => {
    e.preventDefault()
    clickCount ++
    const counter = document.getElementById("counter")
    counter.textContent = clickCount
})
    
document.getElementById("save").addEventListener("click", e => {
    e.preventDefault()
    localStorage.setItem("clickCount", clickCount)
    counter.textContent = clickCount
})

document.getElementById('load').addEventListener("click", e => {
    e.preventDefault()
    let lastValue = localStorage.getItem("clickCount")
    counter.textContent = lastValue
})


