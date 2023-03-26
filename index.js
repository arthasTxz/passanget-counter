// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment(){
    count += 1
    countEl.innerText = count
}

function save(){
    let message = count + "-"
    let saveEl = document.getElementById("save-el")
    saveEl.textContent += message
    count = 0
    countEl.textContent = count
}









