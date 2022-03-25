'use strict'

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
    start: function() {
        appData.asking(),
        appData.addPrices(),
        appData.getFullPrice(),
        appData.getServicePercentPrices(),
        appData.getTitle(),
        appData.logger()
    },
    asking: function() {
        do {
            appData.title = prompt('Как называется ваш проект?', "Название проекта");
        } while (isNaN(appData.title) === false);
    
        for (let i = 0; i < 2; i++) {
            let name
            do {
                name = prompt('Какие типы экранов нужно разработать?');
            } while (isNaN(name) === false);
            let price = 0;

            do {
                price = prompt('Сколько будет стоить данная работа?', 12000);
                appData.getNumber(price);
            } while (!appData.isNumber(price))

            
            appData.screens.push({ id: 1, name: name, price: price });
        }
        
        for (let i = 0; i < 2; i++) {
            let name

            do {
                name = prompt('Какой дополнительный тип услуги нужен?', "service1");
            } while (isNaN(name) === false);

            let price = 0;
        
            do {
                price = +prompt('Сколько это будет стоить?', 1200);
            } while (!appData.isNumber(price))
            
            appData.services[name] = +price
        }
        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },
    addPrices: function() {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price
        }
        
        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },
    isNumber: function(num) {
        return !isNaN(parseFloat(num)) && isFinite(num) && num !=0;
    },
    getNumber: function (num) {
        let numNew = Number(String(num).trim())
        return numNew
    },
    getFullPrice: function() {
        appData.fullPrice = appData.screenPrice + appData.allServicePrices;
    },
    getServicePercentPrices: function() {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    getTitle: function() {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase()
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
    logger: function() {
        // for (let key in appData) {
        //     console.log(key + ': ' + appData[key]);
        // }
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
        console.log(appData.services);
    }
}

appData.start();



