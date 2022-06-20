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
    if (count<0){         //a conditional arguement for not letting it go down the zero value or avaoiding the negetive value
        count = 0
    }
    displayEl.textContent = count
})

resetBtn.addEventListener("click", function(){
    count = 0
    displayEl.textContent = count
})