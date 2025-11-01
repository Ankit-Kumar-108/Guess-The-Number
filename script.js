const count = document.getElementsByClassName('count')[0]
const output = document.getElementsByClassName('out')[0]
const input = document.getElementById('input-1')
const button = document.getElementById('Enter')
const reload = document.getElementById('reload')

const rand = Math.floor((Math.random() * 100) + 1)
let chances = 10
count.textContent = chances

reload.style.display = "none"

reload.addEventListener('click', ()=>{
    location.reload()
    
})


button.addEventListener('click', () => {
    const Element = document.createElement('h1')
    output.innerHTML = ""
    const guess = input.value.trim()
    if (guess === "") {
        Element.textContent = "Enter Valid Input"
    } else {
        if (Number(guess) === rand) {
            Element.textContent = "✅Correct 😊"
            reload.style.display = "inline-block"
            button.disabled = true
        } else {
            chances--
            count.textContent = chances

            if (chances <= 0) {
                Element.textContent = "❌Game Over! Try Again"
                // input.disabled = true
                button.disabled = true
            }else{
                const exp = Number(guess) < Number(rand) ? "Number is Greater📈" : "Number is Lesser📉"
                Element.textContent = exp
            }
        }
    }
    output.append(Element)
    input.focus()
    input.value = ""
})
