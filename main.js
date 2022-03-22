'use strict'

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = Math.random() * 50;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
};

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function() {
    title = prompt('Как называется ваш проект?', "Название проекта");
    screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");

    do {
        screenPrice = +prompt('Сколько будет стоить данная работа?', 12000);
    } while (!isNumber(screenPrice))

    adaptive = confirm('Нужен ли адаптив на сайте?');
}

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
    let sum = 0;
    let servicePrice = 0;

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?', "service1");
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?', "service2");
        }

        do {
            servicePrice = +prompt('Сколько это будет стоить?', 1200);
        } while (!isNumber(servicePrice))

        sum += servicePrice
    }

    return sum
    // return servicePrice1 + servicePrice2;
};

const getFullPrice = function() {
   return screenPrice + allServicePrices;
};

const getTitle = function() {
    let titleNew = title.split('')[0].toUpperCase()
    let title2 = title.slice(1);
    title = titleNew + title2
    return title
}; 

const getServicePercentPrices = function() {
    return fullPrice - (fullPrice * (rollback / 100));
};

asking()
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

// console.log(getRollbackMessage(fullPrice));

// console.log("Стоимость всех услуг: " + getAllServicePrices());
// console.log(screens.length);
// console.log(servicePercentPrice);


console.clear();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices)

console.log("Следующие типы экранов: " + screens);
console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);
console.log("Cтоимость за вычетом процента отката посреднику: " + Math.round(servicePercentPrice));
console.log("Стоимость верстки экранов " + screenPrice + " рублей/ долларов/гривен/юаней" + " и стоимось разработки сайта " + fullPrice + " рублей/ долларов/гривен/юаней");