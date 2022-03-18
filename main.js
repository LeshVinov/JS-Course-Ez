'use strict'

let title = prompt('Как называется ваш проект?', "Название проекта");
let screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
let screenPrice = +prompt('Сколько будет стоить данная работа?', "12000");
let rollback = Math.random() * 50;
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?', "service1");
let servicePrice1 = +prompt('Сколько это будет стоить?', "1200");
let service2 = prompt('Какой дополнительный тип услуги нужен?', "service2");
let servicePrice2 = +prompt('Сколько это будет стоить?', "1200");
let allServicePrices;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice;

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
};

const getRollbackMessage = function(price) {
    if (price >= 30000) {
        return 'Даём скидку в 10%'
    } else if (15000 <= price && price < 30000) {
        return 'Даем скидку в 5%'
    } else if (0 <= price && price < 15000){
        return 'Скидка не предусмотрена'
    } else {
        return 'Что-то пошло не так'
    }
};

const getAllServicePrices = function() {
    return servicePrice1 + servicePrice2;
};
    allServicePrices = getAllServicePrices();

const getFullPrice = function() {
   return screenPrice + allServicePrices;
};
    fullPrice = getFullPrice();

const getTitle = function() {
    let titleNew = title.split('')[0].toUpperCase()
    let title2 = title.slice(1);
    title = titleNew + title2
    return title
}; 
    title = getTitle();

const getServicePercentPrices = function() {
    return fullPrice - (fullPrice * (rollback / 100));
};
    servicePercentPrice = getServicePercentPrices();

// console.log(getRollbackMessage(fullPrice));
// console.log(typeof title);
// console.log(typeof screenPrice);
// console.log(typeof adaptive);
// console.log("Стоимость всех услуг: " + getAllServicePrices());
// console.log(screens.length);
// console.log(servicePercentPrice);

// console.log("Стоимость верстки экранов " + screenPrice + " рублей/ долларов/гривен/юаней" + " и стоимось разарботки сайта " + fullPrice + " рублей/ долларов/гривен/юаней");

console.clear();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("Следующие типы экранов: " + screens);
console.log(getRollbackMessage(fullPrice));
console.log("Cтоимость за вычетом процента отката посреднику:" + Math.round(servicePercentPrice));