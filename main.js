'use strict';

let title = prompt('Как называется ваш проект?', "Название проекта");
let screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
let screenPrice = +prompt('Сколько будет стоить данная работа?', "12000");
let rollback = Math.random() * 50;
let adaptive = confirm('Нужен ли адаптив на сайте?');

let service1 = prompt('Какой дополнительный тип услуги нужен?', "service1");
let servicePrice1 = +prompt('Сколько это будет стоить?', "servicePrice1");
let service2 = prompt('Какой дополнительный тип услуги нужен?', "service2");
let servicePrice2 = +prompt('Сколько это будет стоить?', "servicePrice2");
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice - rollback / 100);


switch(fullPrice) {
    case fullPrice > 30000:
        console.log('Даём скидку в 10%');
    case fullPrice > 15000 && fullPrice < 30000:
        console.log('Даем скидку в 5%');
    case fullPrice > 0 && fullPrice > 15000:
        console.log('Скидка не предусмотрена');
};


console.log('Проект называется' + ' ' + title);
console.log('Типы экранов, которые необходимо выбрать:' + ' ' + screens);
console.log('Работа будет стоить:' + ' ' + screenPrice);
console.log('Нужен адаптив?' + ' ' + adaptive);

console.log('Нужна дополнительная 1-ая услуга под названием:' + ' ' + service1);
console.log('Цена первой услуги:' + ' ' + servicePrice1);
console.log('Нужна дополнительная 2-ая услуга под названием:' + ' ' + service1);
console.log('Цена второй услуги:' + ' ' + servicePrice2);

console.log('Итоговая цена:' + ' ' + fullPrice);
console.log('Цена процента сервиса:' + ' ' + servicePercentPrice);
if (fullPrice > 30000) {
    console.log('Даём скидку в 10%');
} else if ((15000 < fullPrice) && (fullPrice < 30000)) {
    console.log('Даем скидку в 5%');
} else if ((0 < fullPrice) && (fullPrice < 15000)){
    console.log('Скидка не предусмотрена');
} else {
    console.log('Что-то пошло не так');
}
