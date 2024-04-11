const input = document.getElementById('value')
const btn = document.querySelector('.calculator-buttons')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const multiply = document.querySelector('.multiply')
const divide = document.querySelector('.divide')
const clearBtn = document.querySelector('.clear')
const equalsBtn = document.querySelector('.equals')


function getValue(e) {
    if (e.target.classList.contains('button')){
    input.innerHTML += e.target.value
    } else {
        
    }
   console.log(e.target.value);
}
btn.addEventListener('click', getValue)
