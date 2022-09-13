const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
  let newList = new DocumentFragment() ;
 const list = document.querySelector("ul");
 for(let i=0; i<ingredients.length;i++){ 
  const createLi = document.createElement('li');
  createLi.textContent = ingredients[i];
  createLi.classList.add('item')
  newList.append(createLi);
 }
  list.append(newList)