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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('20 april 2022')\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n\n//# sourceURL=webpack://3dglo/./src/index.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuBtn = document.querySelector('.menu')\r\n    const menu = document.querySelector('menu')\r\n    const closeBtn = menu.querySelector('.close-btn')\r\n    const menuItems = menu.querySelectorAll('ul>li>a')\r\n\r\n    const handleMenu = () => {\r\n        menu.classList.toggle('active-menu')\r\n    }\r\n\r\n    menuBtn.addEventListener('click', handleMenu)\r\n    closeBtn.addEventListener('click' , handleMenu)\r\n    menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu))\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://3dglo/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    // const modal = document.querySelector('.popup')\r\n    // // const modalContent = document.querySelector('.popup-content')\r\n    // const buttons = document.querySelectorAll('.popup-btn')\r\n    // const closeBtn = modal.querySelector('.popup-close')\r\n\r\n\r\n    // const disableAnims = () => {\r\n    //     if (window.innerWidth <= 768) {\r\n    //         modal.style.display = 'none'\r\n    //         modal.style.transform = 'translateX(0%)'\r\n    //         buttons.forEach(btn => {\r\n    //             btn.addEventListener('click', () => {\r\n    //                 modal.style.display = 'block'\r\n    //             })\r\n    //         })\r\n    //         closeBtn.addEventListener('click' , () => {\r\n    //             modal.style.display = 'none'\r\n    //         })\r\n    //     } else if (window.innerWidth > 768) {\r\n    //         modal.style.display = 'block'\r\n    //         modal.style.transform = 'translateX(-100%)'\r\n    //         modal.style.transition = '.2s'\r\n            \r\n        \r\n    //         buttons.forEach(btn => {\r\n    //             btn.addEventListener('click', () => {\r\n    //                 modal.style.transform = 'translateX(0%)'\r\n    //             })\r\n    //         })\r\n    //         closeBtn.addEventListener('click' , () => {\r\n    //             modal.style.transform = 'translateX(-100%)'\r\n    //         })\r\n    //     }\r\n    // }\r\n    // disableAnims()\r\n\r\n\r\n    const modal = document.querySelector('.popup')\r\n    const modalContent = document.querySelector('.popup-content')\r\n    const buttons = document.querySelectorAll('.popup-btn')\r\n    const closeBtn = modal.querySelector('.popup-close')\r\n\r\n    let count = -38\r\n    let intervalId\r\n    modalContent.style.left = `${count}%`\r\n\r\n    \r\n    const disableAnims = (count) => {           \r\n        modalContent.style.left = `${count}%`\r\n    }\r\n\r\n    const counterOpen = () => {\r\n        count += 4\r\n        disableAnims(count)\r\n        if (count >= 40) {\r\n            clearInterval(intervalId)\r\n        }\r\n    }\r\n    const counterClose = () => {\r\n        count -= 4\r\n        disableAnims(count)\r\n        if (count <= -38) {\r\n            clearInterval(intervalId)\r\n            modal.style.display = ''\r\n            count = -38\r\n        }\r\n    }\r\n\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            if (window.innerWidth <= 768) {\r\n                modalContent.style.left = ``\r\n                modal.style.display = 'block'\r\n            } else {\r\n                modal.style.display = 'block'\r\n                intervalId = setInterval(counterOpen, 10)\r\n            }\r\n        })\r\n    })\r\n    closeBtn.addEventListener('click' , () => {\r\n        if (window.innerWidth > 768) {\r\n            intervalId = setInterval(counterClose, 10)\r\n        } else {\r\n            modal.style.display = ''\r\n        }\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://3dglo/./src/modules/modal.js?");

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