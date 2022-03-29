'use strict'

const books = document.querySelectorAll('.books')
let book = document.querySelectorAll('.book')
const removeAdv = document.querySelector('.adv')
const li2 = book[0].querySelectorAll('li')
const li5 = book[5].querySelectorAll('li')
const li6 = book[2].querySelectorAll('li')

document.querySelector('body').style.backgroundImage = "url(../image/you-dont-know-js.jpg)"

book[1].after(book[0])
book[2].before(book[4])
book[3].after(book[2])
book[2].before(book[5])

book[0].before(book[1])


book[4].querySelector('a').text = "Книга 3. this и Прототипы Объектов"

removeAdv.remove()

li2[10].before(li2[2])
li2[3].after(li2[6])
li2[6].after(li2[8])

li5[4].after(li5[2])
li5[3].before(li5[9])
li5[8].before(li5[5])

const createNewLi = document.createElement('li');
createNewLi.textContent = 'Глава 8: За пределами ES6'

book[2].querySelector('ul').append(createNewLi);
createNewLi.after(li6[9])
