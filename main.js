'use strict'

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: Math.random() * 50,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',
    asking: function() {
        appData.title = prompt('Как называется ваш проект?', "Название проекта");
        appData.screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
    
        do {
            appData.screenPrice = +prompt('Сколько будет стоить данная работа?', 12000);
            appData.getNumber(appData.screenPrice);
        } while (!appData.isNumber(appData.screenPrice))
    
        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },
    start: function() {
        appData.asking(),
        appData.allServicePrices = appData.getAllServicePrices(),
        appData.fullPrice = appData.getFullPrice(),
        appData.servicePercentPrice = appData.getServicePercentPrices(),
        appData.title = appData.getTitle(),
        appData.logger()
    },
    isNumber: function(num) {
        return !isNaN(parseFloat(num)) && isFinite(num) && num !=0;
    },
    getNumber: function (num) {
        let numNew = Number(String(num).trim())
        return numNew
    },
    getRollbackMessage: function(price) {
        if (price >= 30000) {
            return 'Даём скидку в 10%'
        } else if (15000 <= price && price < 30000) {
            return 'Даем скидку в 5%'
        } else if (0 <= price && price < 15000){
            return 'Скидка не предусмотрена'
        } else {
            return 'Что-то пошло не так'
        }
    },
    getAllServicePrices: function() {
        let sum = 0;
        let servicePrice = 0;
    
        for (let i = 0; i < 2; i++) {
    
            if (i === 0) {
                appData.service1 = prompt('Какой дополнительный тип услуги нужен?', "service1");
            } else if (i === 1) {
                appData.service2 = prompt('Какой дополнительный тип услуги нужен?', "service2");
            }
    
            do {
                servicePrice = +prompt('Сколько это будет стоить?', 1200);
            } while (!appData.isNumber(servicePrice))
    
            sum += servicePrice
        }
    
        return sum
    },
    getFullPrice: function() {
        return appData.screenPrice + appData.allServicePrices;
    },
    getTitle: function() {
        let titleNew = appData.title.split('')[0].toUpperCase()
        let title2 = appData.title.slice(1);
        appData.title = titleNew + title2
        return appData.title
    },
    getServicePercentPrices: function() {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    logger: function() {
        for (let key in appData) {
            console.log(key + ': ' + appData[key]);
        }
    }
}

appData.start();

// appData.asking()
// appData.allServicePrices = getAllServicePrices();
// appData.fullPrice = getFullPrice();
// appData.servicePercentPrice = getServicePercentPrices();
// appData.title = getTitle();


