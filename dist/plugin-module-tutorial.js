(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("paella-core"));
	else if(typeof define === 'function' && define.amd)
		define(["paella-core"], factory);
	else if(typeof exports === 'object')
		exports["plugin-module-tutorial"] = factory(require("paella-core"));
	else
		root["plugin-module-tutorial"] = factory(root[undefined]);
})(self, function(__WEBPACK_EXTERNAL_MODULE_paella_core__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/plugins/TutorialPlugins.js":
/*!****************************************!*\
  !*** ./src/plugins/TutorialPlugins.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TutorialPlugins)
/* harmony export */ });
/* harmony import */ var paella_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! paella-core */ "paella-core");
/* harmony import */ var paella_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(paella_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ "./package.json");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var TutorialPlugins = /*#__PURE__*/function (_PluginModule) {
  _inherits(TutorialPlugins, _PluginModule);

  var _super = _createSuper(TutorialPlugins);

  function TutorialPlugins() {
    _classCallCheck(this, TutorialPlugins);

    return _super.apply(this, arguments);
  }

  _createClass(TutorialPlugins, [{
    key: "moduleName",
    get: function get() {
      return 'tutorial-plugins';
    }
  }, {
    key: "moduleVersion",
    get: function get() {
      return _package_json__WEBPACK_IMPORTED_MODULE_1__.version;
    }
  }]);

  return TutorialPlugins;
}(paella_core__WEBPACK_IMPORTED_MODULE_0__.PluginModule);



/***/ }),

/***/ "./src/plugins/es.upv.paella.myTutorialPlugin.js":
/*!*******************************************************!*\
  !*** ./src/plugins/es.upv.paella.myTutorialPlugin.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyTutorialPlugin)
/* harmony export */ });
/* harmony import */ var paella_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! paella-core */ "paella-core");
/* harmony import */ var paella_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(paella_core__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var MyTutorialPlugin = /*#__PURE__*/function (_EventLogPlugin) {
  _inherits(MyTutorialPlugin, _EventLogPlugin);

  var _super = _createSuper(MyTutorialPlugin);

  function MyTutorialPlugin() {
    _classCallCheck(this, MyTutorialPlugin);

    return _super.apply(this, arguments);
  }

  _createClass(MyTutorialPlugin, [{
    key: "events",
    get: function get() {
      return [paella_core__WEBPACK_IMPORTED_MODULE_0__.Events.PLAY, paella_core__WEBPACK_IMPORTED_MODULE_0__.Events.PAUSE];
    }
  }, {
    key: "onEvent",
    value: function () {
      var _onEvent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event, params) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = event;
                _context.next = _context.t0 === paella_core__WEBPACK_IMPORTED_MODULE_0__.Events.PLAY ? 3 : _context.t0 === paella_core__WEBPACK_IMPORTED_MODULE_0__.Events.PAUSE ? 5 : 7;
                break;

              case 3:
                console.log("You have pressed the PLAY button");
                return _context.abrupt("break", 7);

              case 5:
                console.log("You have pressed the PAUSE button");
                return _context.abrupt("break", 7);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function onEvent(_x, _x2) {
        return _onEvent.apply(this, arguments);
      }

      return onEvent;
    }()
  }]);

  return MyTutorialPlugin;
}(paella_core__WEBPACK_IMPORTED_MODULE_0__.EventLogPlugin);



/***/ }),

/***/ "./src/plugins sync recursive \\.js":
/*!********************************!*\
  !*** ./src/plugins/ sync \.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./TutorialPlugins.js": "./src/plugins/TutorialPlugins.js",
	"./es.upv.paella.myTutorialPlugin.js": "./src/plugins/es.upv.paella.myTutorialPlugin.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/plugins sync recursive \\.js";

/***/ }),

/***/ "paella-core":
/*!*****************************************************************************************!*\
  !*** external {"commonjs":"paella-core","commonjs2":"paella-core","amd":"paella-core"} ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_paella_core__;

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"plugin-module-tutorial","version":"1.0.0","description":"Plugin module for paella-core, created through plugin module tutorial. You can see it in the documentation page, at https://paellaplayer.upv.es","main":"index.js","scripts":{"build":"webpack --mode development --config webpack.config.js","dev":"webpack serve --mode development --config webpack.debug.js"},"repository":{"type":"git","url":"git+https://github.com/polimediaupv/plugin-module-tutorial.git"},"keywords":["paella-core","paella","player","plugin","module","tutorial"],"author":"Fernando Serrano Carpena <ferserc1@gmail.com>","license":"SEE LICENSE IN license.txt","bugs":{"url":"https://github.com/polimediaupv/plugin-module-tutorial/issues"},"homepage":"https://github.com/polimediaupv/plugin-module-tutorial#readme","dependencies":{"paella-core":"^1.0.40"},"devDependencies":{"@babel/core":"^7.17.8","@babel/preset-env":"^7.16.11","babel-loader":"^8.2.4","copy-webpack-plugin":"^10.2.4","css-loader":"^6.7.1","file-loader":"^6.2.0","html-webpack-plugin":"^5.5.0","style-loader":"^3.3.1","svg-inline-loader":"^0.8.2","webpack":"^5.70.0","webpack-cli":"^4.9.2","webpack-dev-server":"^4.7.4"}}');

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTutorialPluginContext)
/* harmony export */ });
function getTutorialPluginContext() {
  return __webpack_require__("./src/plugins sync recursive \\.js");
}
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=plugin-module-tutorial.js.map