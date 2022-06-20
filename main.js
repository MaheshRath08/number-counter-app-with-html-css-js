let displayEl = document.getElementById("display")
const addBtn = document.getElementById("add-btn")
const subBtn = document.getElementById("sub-btn")
const resetBtn = document.getElementById("reset-btn")
let count = 0

addBtn.addEventListener("click", function(){
    count++
    displayEl.textContent = count
})

subBtn.addEventListener("click", function(){
    count--
    if (count<0){
        count = 0
    }
    displayEl.textContent = count
})

resetBtn.addEventListener("click", function(){
    count = 0
    displayEl.textContent = count
})