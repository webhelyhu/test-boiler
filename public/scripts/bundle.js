/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// importing the files needed (.js is not needed)
// import './utilities'     // only run the file, nothing is needed importing.
// the first name you give for the default export, or just skip it, and name exports inside the {}

var name = 'A simple log to the console from index.js. ' + _utilities__WEBPACK_IMPORTED_MODULE_0__["secretWord"];
console.log(name); // testing: creating an object

var OneObject =
/*#__PURE__*/
function () {
  function OneObject() {
    _classCallCheck(this, OneObject);
  }

  _createClass(OneObject, [{
    key: "myMethod",
    value: function myMethod() {
      return 'Testing...';
    }
  }]);

  return OneObject;
}(); // // testing to console:


var justsomething = new OneObject();
console.log(justsomething.myMethod());
console.log('call add(): ' + Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["add"])(3, 4));
console.log('call the default export from utilities, whatever its name is: ' + Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["default"])(5, 5)); // // Rest parameter test, base version:
// const calculateAverage = (numOne, numTwo) => {
//     return (numOne + numTwo) / 2
// }

var calculateAverage = function calculateAverage() {
  var sum = 0;

  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  numbers.forEach(function (num) {
    return sum += num;
  });
  return sum / numbers.length;
};

console.log(calculateAverage(0, 100, 88, 64));

var calculateAverage2 = function calculateAverage2(thing) {
  var sum = 0;

  for (var _len2 = arguments.length, numbers = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    numbers[_key2 - 1] = arguments[_key2];
  }

  numbers.forEach(function (num) {
    return sum += num;
  });
  var average = sum / numbers.length;
  return "The average ".concat(thing, " is ").concat(average);
};

console.log(calculateAverage2('number', 0, 100, 88, 64)); // SPREAD test

var printTeam = function printTeam(teamName, coach) {
  console.log("Team: ".concat(teamName));
  console.log("Coach: ".concat(coach));

  for (var _len3 = arguments.length, players = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    players[_key3 - 2] = arguments[_key3];
  }

  console.log("Members: ".concat(players.join(', ')));
};

printTeam('Firsts', 'Big Bill', 'Marge', 'Hyde', 'Who Other');
var team = {
  name: 'Liberty',
  coach: 'Casy Penn',
  players: ['Marge', 'Penn', 'Jackie']
};
printTeam.apply(void 0, [team.name, team.coach].concat(_toConsumableArray(team.players))); // copy of an array

var cities = ['Amsterdam', 'Barcelona', 'Budapest'];
var anAnotherArray = ['Dublin'].concat(cities, ['Paris']); // changing one of the arrays will not effect the other. They are independent.

console.log(anAnotherArray); // using spread with object:
// babel 7: install --save-dev @babel/plugin-proposal-object-rest-spread
// babel 6: install babel-plugin-transform-object-rest-spread
// and webpack.config.js: ..... under options: ->> 
//     babel 7: plugins: ['@babel/plugin-proposal-object-rest-spread']
//     babel 6: plugins: ['transform-object-rest-spread']

var house = {
  bedrooms: 2,
  bathrooms: 1,
  yearBuilt: 2017
};

var newHouse = _objectSpread({
  basement: true
}, house, {
  bedrooms: 7
});

newHouse.bathrooms = 3;
console.log(house);
console.log(newHouse);

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/*! exports provided: add, secretWord, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secretWord", function() { return secretWord; });
console.log("utilities.js is started"); // this function is to be exported to others:

var add = function add(a, b) {
  return a + b;
};
var secretWord = 'HelloMyWord'; // default export (have to be a separate definition and a separate export default line)

var adducting = function adducting(a, b) {
  return a + b;
};

/* harmony default export */ __webpack_exports__["default"] = (adducting); // or you can remove the export words above, and use only one export command for the file:
// export { add, secretWord, adducting as default }

console.log("utilities.js is done  once again!  :)");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map