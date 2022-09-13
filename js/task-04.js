const minusOne = document.querySelector('button[data-action="decrement"]')
const plusOne = document.querySelector('button[data-action="increment"]')
const valueToChange = document.querySelector('#value');
let counterValue = 0;


plusOne.addEventListener('click', () => {counterValue+=1; valueToChange.innerText = changeValue; })
minusOne.addEventListener('click', () => {counterValue-=1; valueToChange.innerText = changeValue; })
