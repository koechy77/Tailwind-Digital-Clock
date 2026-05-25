// DOM Manipulation method
// innerHTML - adds a new tag
let addText = document.getElementById(heading)
// addText.innerHTML = `<span>this is a text</span>`

// textContent
let newText = document.getElementById(heading)
newText.textContent = "span"

// css styling
let main = document.body
main.style.backgroundColor = "red"

// classList- helps to append or remove from our css
// main.classList.add("n mg")
// main.classList.remove()

// create element
let newH = document.createElement(`div`)
newH.textContent = `TEXT CONTENT...`

// appendChild
addText.appendChild(newH)

// deleting / removing node/child
newH.remove()

// attributes
let inputField = document.getElementById()
console.log(inputField.getAttribute())

// set attribute
inputField.setAttribute(`type`,"checkbox")
console.log(inputField)
