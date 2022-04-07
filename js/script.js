'use strict'

const title = document.getElementsByTagName('h1')[0];
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');
const mainControlsInput = document.querySelector('.main-controls__input')
const mainBox = document.querySelectorAll('.main-controls__views')[0]

const inputRange = document.querySelector('.rollback [type=range]');
const inputRangeValue = document.querySelector('.rollback .range-value');

const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let select = document.querySelector('select')
let screenCount = 0

let screens = document.querySelectorAll('.screen');


const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    init: function() {
        this.addTitle()

        startBtn.addEventListener('click', this.start)
        buttonPlus.addEventListener('click', this.adselectBoxcreenBlock)
        resetBtn.addEventListener('click', this.reset)
    },
    addTitle: function () {
        document.title = title.textContent
    },
    start: function() {
        appData.zeroing()
        appData.adselectBoxcreens()
        appData.adselectBoxervices()
        appData.addPrices()
        // appData.getServicePercentPrices(),
        appData.checkingForMistakes()
        // appData.logger()
        appData.showResult()
        appData.disabled()
        appData.btnSwitch()
    },
    
    zeroing: function() {
        appData.fullPrice = 0
        appData.servicePricesNumber = 0
        appData.servicePricesPercent = 0
        appData.screenPrice = 0
        appData.screens.length = 0
        screenCount = 0
    },

    btnSwitch: function() {
        startBtn.style.display = 'none'
        resetBtn.style.display = 'flex'
    },

    reset: function () {
        const check = document.querySelectorAll('.custom-checkbox')
        const screenBox = mainBox.querySelectorAll('.main-controls__item')
        const selectBox = mainBox.querySelector('select')
        const inputBox = mainBox.querySelector('.main-controls__input > input')

        resetBtn.style.display = 'none'
        startBtn.style.display = 'flex'
        inputRange.value = 0
        inputRangeValue.textContent = '0%'

        check.forEach(function (item) {
            item.checked = false
        })

    inputBox.value = ''
        selectBox.selectedIndex = 0

        selectBox.disabled = false
    inputBox.disabled = false
        buttonPlus.disabled = false

        total.value = 0
        totalCountOther.value = 0
        fullTotalCount.value = 0
        totalCountRollback.value = 0
        totalCount.value = 0

        for(let key in screenBox) {
            if (key > 0) {
                screenBox[key].remove()
            }
        }
    },

    disabled: function() {
        const selectBox = mainBox.querySelectorAll('select')
        const inputBox = mainBox.querySelectorAll('.main-controls__input > input')

        buttonPlus.disabled = true

        for(let key = 0; key < selectBox.length; key++){
            selectBox[key].disabled = true
        }

        for(let key = 0; key <inputBox.length; key++){
        inputBox[key].disabled = true
        }
    },

    checkingForMistakes: function() {

        const changing = function(event) {
            inputRangeValue.textContent = event.target.value + '%'
            this.rollback = event.target.value
            appData.showResult()
            // console.log(appData.rollback)
        }

        inputRange.addEventListener('input', changing)
    },
    showResult: function() {
        total.value = this.screenPrice
        totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber
        fullTotalCount.value = this.fullPrice
        totalCountRollback.value = this.fullPrice + (this.fullPrice/100 * inputRange.value)
        totalCount.value = screenCount
    },
    adselectBoxcreens: function() {
        screens = document.querySelectorAll('.screen')

        screens.forEach((screen, index) => {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent

            appData.screens.push({ 
                id: index, 
                name: selectName, 
                price: +select.value * +input.value
            });

        })

    },
    adselectBoxervices: function() {
        otherItemsPercent.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')
            // console.log(check, label, input)
            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value
            }
        })

        otherItemsNumber.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')
            // console.log(check, label, input)
            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value
            }
        })
    },
    adselectBoxcreenBlock: function() {
        const cloneScreen = screens[0].cloneNode(true)
        const input = cloneScreen.querySelector('input')
        input.value = ''
        screens[screens.length - 1].after(cloneScreen)
    },
    addPrices: function() {

        let screenCounts = document.querySelectorAll('.screen input')

        screenCounts.forEach((item, arr) => {
            arr = +item.value
            screenCount = screenCount + arr
        })

        for (let screen of this.screens) {
            this.screenPrice += +screen.price
        }
        
        for (let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key];
        }

        for (let key in this.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100);
        }

        this.fullPrice = this.screenPrice + this.servicePricesPercent + this.servicePricesNumber;
        this.servicePercentPrice = this.fullPrice - (this.fullPrice * (this.rollback / 100));
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

appData.checkingForMistakes()
appData.init();
