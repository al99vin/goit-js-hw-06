let listOfUls = categories.querySelectorAll('ul');
let listOfIls = categories.querySelectorAll('.item');
let text1 = `Кількість категорій в ul#categories: ${listOfUls.length}`
console.log(text1)
for(let i = 0; i<listOfUls.length; i++){
    const text2 = `Назва категорії: ${listOfIls[i].firstElementChild.innerText}`
    console.log(text2)
    const temp = listOfIls[i].querySelectorAll('li')
    console.log('Кількість елементів в категорії:'+temp.length)
   
}