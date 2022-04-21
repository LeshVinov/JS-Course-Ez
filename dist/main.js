/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n/* harmony import */ var _modules_formValidate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/formValidate */ \"./src/modules/formValidate.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('30 april 2022')\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_formValidate__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n\n//# sourceURL=webpack://3dglo/./src/index.js?");

/***/ }),

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculator = () => {\r\n    const calcSquare = document.querySelector('.calc-square')\r\n    const calcCount = document.querySelector('.calc-count')\r\n    const calcDay = document.querySelector('.calc-day')\r\n\r\n    const numberEnable = (e) => {\r\n        e.target.value = e.target.value.replace(/\\D+/, \"\")  \r\n    }\r\n    calcSquare.addEventListener('input', numberEnable)\r\n    calcCount.addEventListener('input', numberEnable)\r\n    calcDay.addEventListener('input', numberEnable)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack://3dglo/./src/modules/calculator.js?");

/***/ }),

/***/ "./src/modules/formValidate.js":
/*!*************************************!*\
  !*** ./src/modules/formValidate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst formValidate = () => {\r\n    const heroFormName = document.querySelectorAll('[name=\"user_name\"]')\r\n    const heroFormEmail = document.querySelectorAll('[type=email]')\r\n    const heroFormTel = document.querySelectorAll('[type=tel]')\r\n    const formMessage = document.querySelector('[placeholder=\"Ваше сообщение\"]')\r\n\r\n    \r\n    heroFormName.forEach(heroFormName =>\r\n        heroFormName.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/[^а-яА-Я\\-\\s]/g, \"\") \r\n    }))\r\n\r\n    heroFormEmail.forEach(heroFormEmail =>\r\n        heroFormEmail.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/[^a-zA-z@\\-\\.\\!\\~\\*\\']/g, \"\") \r\n    }))\r\n\r\n    heroFormTel.forEach(heroFormTel =>\r\n        heroFormTel.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/[^0-9\\(\\)\\-]/g, \"\") \r\n    }))\r\n\r\n    formMessage.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^а-яА-Я\\-\\s]/g, \"\") \r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formValidate);\n\n//# sourceURL=webpack://3dglo/./src/modules/formValidate.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menu = document.querySelector('menu')\r\n    const serviceBlock = document.getElementById('service-block')\r\n\r\n    const handleMenu = () => {\r\n        menu.classList.toggle('active-menu')\r\n    }\r\n    \r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('.close-btn')) {\r\n            handleMenu()\r\n        } else if (e.target.closest('ul>li>a')) {\r\n             e.preventDefault()\r\n             let anchor = document.querySelector(e.target.hash)\r\n             anchor.scrollIntoView({block: \"start\", behavior: \"smooth\"});\r\n             handleMenu()\r\n        } else if (e.target.closest('.menu')) {\r\n            handleMenu()\r\n        } else if (e.target == document.querySelector('main > a > img')) {\r\n            e.preventDefault()\r\n            serviceBlock.scrollIntoView({block: \"start\", behavior: \"smooth\"});\r\n        } else if (!e.target.closest('.active-menu')) {\r\n            handleMenu()\r\n        }\r\n\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://3dglo/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    // const modal = document.querySelector('.popup')\r\n    // // const modalContent = document.querySelector('.popup-content')\r\n    // const buttons = document.querySelectorAll('.popup-btn')\r\n    // const closeBtn = modal.querySelector('.popup-close')\r\n\r\n\r\n    // const disableAnims = () => {\r\n    //     if (window.innerWidth <= 768) {\r\n    //         modal.style.display = 'none'\r\n    //         modal.style.transform = 'translateX(0%)'\r\n    //         buttons.forEach(btn => {\r\n    //             btn.addEventListener('click', () => {\r\n    //                 modal.style.display = 'block'\r\n    //             })\r\n    //         })\r\n    //         closeBtn.addEventListener('click' , () => {\r\n    //             modal.style.display = 'none'\r\n    //         })\r\n    //     } else if (window.innerWidth > 768) {\r\n    //         modal.style.display = 'block'\r\n    //         modal.style.transform = 'translateX(-100%)'\r\n    //         modal.style.transition = '.2s'\r\n            \r\n        \r\n    //         buttons.forEach(btn => {\r\n    //             btn.addEventListener('click', () => {\r\n    //                 modal.style.transform = 'translateX(0%)'\r\n    //             })\r\n    //         })\r\n    //         closeBtn.addEventListener('click' , () => {\r\n    //             modal.style.transform = 'translateX(-100%)'\r\n    //         })\r\n    //     }\r\n    // }\r\n    // disableAnims()\r\n\r\n\r\n    const modal = document.querySelector('.popup')\r\n    const modalContent = document.querySelector('.popup-content')\r\n    const buttons = document.querySelectorAll('.popup-btn')\r\n\r\n    let count = -38\r\n    let intervalId\r\n    modalContent.style.left = `${count}%`\r\n\r\n    \r\n    const disableAnims = (count) => {           \r\n        modalContent.style.left = `${count}%`\r\n    }\r\n\r\n    const counterOpen = () => {\r\n        count += 4\r\n        disableAnims(count)\r\n        if (count >= 40) {\r\n            clearInterval(intervalId)\r\n        }\r\n    }\r\n    const counterClose = () => {\r\n        count -= 4\r\n        disableAnims(count)\r\n        if (count <= -38) {\r\n            clearInterval(intervalId)\r\n            modal.style.display = ''\r\n            count = -38\r\n        }\r\n    }\r\n\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            if (window.innerWidth <= 768) {\r\n                modalContent.style.left = ``\r\n                modal.style.display = 'block'\r\n            } else {\r\n                modal.style.display = 'block'\r\n                intervalId = setInterval(counterOpen, 10)\r\n            }\r\n        })\r\n    })\r\n    modal.addEventListener('click', (e) => {\r\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n            if (window.innerWidth > 768) {\r\n                intervalId = setInterval(counterClose, 10)\r\n            } else {\r\n                modal.style.display = ''\r\n            }   \r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://3dglo/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n    const tabPanel = document.querySelector('.service-header')\r\n    const tabs = document.querySelectorAll('.service-header-tab')\r\n    const tabContent = document.querySelectorAll('.service-tab')\r\n\r\n    tabPanel.addEventListener('click', (e)=> {\r\n        if (e.target.closest('.service-header-tab')) {\r\n            const tabBtn = e.target.closest('.service-header-tab')\r\n            tabs.forEach((tab, index) => {\r\n             if(tab === tabBtn) {\r\n                 tab.classList.add('active')\r\n                 tabContent[index].classList.remove('d-none')\r\n             } else {\r\n                 tab.classList.remove('active')\r\n                 tabContent[index].classList.add('d-none')\r\n             }\r\n            }) \r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3dglo/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerHours = document.getElementById('timer-hours')\r\n    const timerMinutes = document.getElementById('timer-minutes')\r\n    const timerSeconds = document.getElementById('timer-seconds')\r\n\r\n    let intervalID\r\n\r\n    const getTimeRemaining = (deadline) => {\r\n        let dateStop = new Date(deadline).getTime()\r\n        let dateNow = new Date().getTime()\r\n        let timeRemaining = (dateStop - dateNow) / 1000\r\n        let hours = Math.floor(timeRemaining / 60 / 60)\r\n        let minutes = Math.floor((timeRemaining / 60) % 60)\r\n        let seconds = Math.floor(timeRemaining % 60)\r\n\r\n        return { timeRemaining, hours, minutes, seconds }\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining(deadline)\r\n        const zeroToNumber = () => {\r\n            if (getTime.hours < 10) {\r\n                timerHours.textContent = '0' + getTime.hours\r\n            }\r\n            if (getTime.minutes < 10) {\r\n                timerMinutes.textContent = '0' + getTime.minutes\r\n            }\r\n            if (getTime.seconds < 10) {\r\n                timerSeconds.textContent = '0' + getTime.seconds\r\n            }\r\n        }\r\n\r\n        timerHours.textContent = getTime.hours\r\n        timerMinutes.textContent = getTime.minutes\r\n        timerSeconds.textContent = getTime.seconds\r\n        \r\n        zeroToNumber()\r\n\r\n        if (getTime.timeRemaining < 0) {\r\n            clearInterval(intervalID)\r\n            timerHours.textContent = '00'\r\n            timerMinutes.textContent = '00'\r\n            timerSeconds.textContent = '00'\r\n        }\r\n        \r\n    }\r\n    intervalID = setInterval(() => {\r\n        updateClock()\r\n    }, 1000);\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://3dglo/./src/modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;