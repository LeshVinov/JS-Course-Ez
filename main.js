'use strict'

const getTodayDate = () => {
    const dateWeekDay = document.getElementById('date-week-Day')
const weekText = document.getElementById('date-time')
const timeToNYText = document.getElementById('time-to-NY')
const greetingsText = document.getElementById('greetings-text')

let todayDate = new Date();
let greeting
let weekDay
let hours 
let minute
let second
let dayToNY

const getGreeting = () => {

    if (todayDate.getHours() > 0 && todayDate.getHours() <= 6) {
       greeting = greetingsText.textContent = 'Доброй ночи'
    } else if (todayDate.getHours() > 6 && todayDate.getHours() <= 12) {
        greetingsText.textContent = 'Доброе утро'
    } else if (todayDate.getHours() > 12 &&  todayDate.getHours() <= 18) {
       greeting = greetingsText.textContent = 'Добрый день'
    } else if (todayDate.getHours() > 18 && todayDate.getHours() < 24) {
       greeting = greetingsText.textContent = 'Добрый вечер'
    }
    return greeting
}

switch (todayDate.getDay()) {
    case 0:
        weekDay = 'Воскресенье';
        break;
    case 1:
        weekDay = 'Понедельник';
        break;
    case 2:
        weekDay = 'Вторник';
        break;
    case 3:
        weekDay = 'Среда';
        break;
    case 4:
        weekDay = 'Четверг';
        break;
    case 5:
        weekDay = 'Пятница';
        break;
    case 6:
        weekDay = 'Суббота';
        break;    
}

const getHour = () => {
    hours = todayDate.getHours()
    // console.log(hours);
    let dayOrNight = ''
    if (hours > 12 || hours < 24) {
        dayOrNight = 'PM'
    } else if (hours > 0 || hours < 12) {
        dayOrNight = 'AM'
    }

    return(dayOrNight)
}

const zeroToNumber = () => {
    hours = todayDate.getHours()
    minute = todayDate.getMinutes()
    second = todayDate.getSeconds()

    if (todayDate.getHours() < 10) {
        hours  = '0' + todayDate.getHours()
    } else if (todayDate.getMinutes() < 10) {
        minute = '0' + todayDate.getMinutes()
    } else if (todayDate.getSeconds() < 10) {
        second = '0' + todayDate.getSeconds()
    }
    // console.log(second)
}
zeroToNumber()
const renderDate = () => {
    greetingsText.textContent = getGreeting()
    dateWeekDay.textContent = 'Сегодня: ' + weekDay
    weekText.textContent = 'Текущее время: ' + hours +':' + minute + ':' + second + ' ' + getHour()
}
renderDate()
}


setInterval(getTodayDate, 1000)