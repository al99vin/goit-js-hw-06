const input = document.querySelector('input')
const span = document.querySelector('span')

input.addEventListener('input', () => {span.style.fontSize = `${input.value}px`; console.log(input.value)})