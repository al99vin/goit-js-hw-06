const body = document.getElementsByTagName('body')
const button = document.getElementsByTagName('button')
const span = document.getElementsByTagName('span')


button[0].addEventListener('click', ()=>{body[0].style.backgroundColor = '#' + (Math.floor(Math.random() * 16777215).toString(16))
span[0].innerText = `${body[0]?.style.backgroundColor}`})
