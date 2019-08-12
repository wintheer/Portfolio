module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/layouts/Layout.js":
/*!**************************************!*\
  !*** ./components/layouts/Layout.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Header */ "./components/shared/Header.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);




function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-1601952333"
  }, "Frederik Winther")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1601952333"
  }, "body,html{margin:0;height:100%;}#__next{height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9XaW50aGVyL0Ryb3Bib3gvSm9iYW5zw7hnbmluZy9Qb3J0Zm9saW8vZnJlZGVyaWsvY29tcG9uZW50cy9sYXlvdXRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZeUIsQUFHc0IsQUFLRSxTQUpDLEdBS2QsU0FKQSIsImZpbGUiOiIvVXNlcnMvV2ludGhlci9Ecm9wYm94L0pvYmFuc8O4Z25pbmcvUG9ydGZvbGlvL2ZyZWRlcmlrL2NvbXBvbmVudHMvbGF5b3V0cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL3NoYXJlZC9IZWFkZXInXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dChwcm9wcykge1xuXG4gIHJldHVybiAoXG4gIFx0PFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5GcmVkZXJpayBXaW50aGVyPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblx0ICAgIDxIZWFkZXIvPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuXHQgICAgPHN0eWxlIGpzeCBnbG9iYWw+IHtgXG4gICAgICAgICAgYm9keSwgaHRtbCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI19fbmV4dCB7XG4gICAgICAgICAgXHRoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufSJdfQ== */\n/*@ sourceURL=/Users/Winther/Dropbox/Jobans\xF8gning/Portfolio/frederik/components/layouts/Layout.js */"));
}

/***/ }),

/***/ "./components/shared/Header.js":
/*!*************************************!*\
  !*** ./components/shared/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_8__);










var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _React$Component);

  function Header() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      react_scroll__WEBPACK_IMPORTED_MODULE_8__["Events"].scrollEvent.register('begin', function () {
        console.log("begin", arguments);
      });
      react_scroll__WEBPACK_IMPORTED_MODULE_8__["Events"].scrollEvent.register('end', function () {
        console.log("end", arguments);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      react_scroll__WEBPACK_IMPORTED_MODULE_8__["Events"].scrollEvent.remove('begin');
      react_scroll__WEBPACK_IMPORTED_MODULE_8__["Events"].scrollEvent.remove('end');
    }
  }, {
    key: "scrollToElement",
    value: function scrollToElement(name) {
      console.log("Called scroll function.");
      react_scroll__WEBPACK_IMPORTED_MODULE_8__["scroller"].scrollTo(name, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuarts'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-4269863753" + " " + "navbar"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-4269863753" + " " + "navbar_container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-4269863753" + " " + "navbar_left"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("picture", {
        onClick: function onClick() {
          return react_scroll__WEBPACK_IMPORTED_MODULE_8__["animateScroll"].scrollToTop();
        },
        className: "jsx-4269863753"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("source", {
        media: "(min-width:900px",
        srcSet: "../static/images/Logo_desktop.png",
        className: "jsx-4269863753"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("source", {
        media: "(min-width:500px",
        srcSet: "../static/images/Logo_mobile.png",
        className: "jsx-4269863753"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "",
        alt: "Frederik Winther",
        className: "jsx-4269863753" + " " + "logo"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-4269863753" + " " + "navbar_right"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-4269863753"
      }, "About"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: function onClick() {
          return _this.scrollToElement('skills');
        },
        className: "jsx-4269863753"
      }, "Skills"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: function onClick() {
          return _this.scrollToElement('projects');
        },
        className: "jsx-4269863753"
      }, "Projects"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: function onClick() {
          return react_scroll__WEBPACK_IMPORTED_MODULE_8__["animateScroll"].scrollToBottom();
        },
        className: "jsx-4269863753"
      }, "Contact"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/CV"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-4269863753"
      }, "CV")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "4269863753"
      }, "a.jsx-4269863753{cursor:pointer;}.navbar.jsx-4269863753{height:60px;left:0;top:0;right:0;position:fixed;width:100%;background:rgba(255,255,255,0.4);}.logo.jsx-4269863753{font-family:\"Verdana\";font-size:14pt;height:50px;background:none;}.logo.jsx-4269863753:hover{cursor:pointer;-webkit-animation-name:changeColor-jsx-4269863753;animation-name:changeColor-jsx-4269863753;-webkit-animation-duration:5s;animation-duration:5s;}.person_name.jsx-4269863753{margin-left:10px;}.navbar_container.jsx-4269863753{padding-left:10%;padding-right:10%;min-width:400px;align_items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-left:auto;margin-right:auto;}.navbar_left.jsx-4269863753{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;height:100%;}.navbar_right.jsx-4269863753{box-sizing:border-box;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}a.jsx-4269863753{color:black;-webkit-text-decoration:none;text-decoration:none;font-family:\"Verdana\";font-size:12pt;border-radius:10%;padding:4px 15px 4px 15px;margin-left:15px;}a.jsx-4269863753:hover{background:rgba(0,0,0,0.1);}@-webkit-keyframes changeColor-jsx-4269863753{}@keyframes changeColor-jsx-4269863753{}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9XaW50aGVyL0Ryb3Bib3gvSm9iYW5zw7hnbmluZy9Qb3J0Zm9saW8vZnJlZGVyaWsvY29tcG9uZW50cy9zaGFyZWQvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEaUIsQUFHdUIsQUFJSCxBQVVVLEFBT1AsQUFNRSxBQUlBLEFBWUosQUFPUyxBQVFWLEFBVWUsWUEvRHBCLEFBc0RjLEdBMUR0QixBQXFCNEIsRUFNN0IsQUFJb0IsRUExQlosR0FTUyxBQW9DVSxHQTVDakIsRUE4RFYsTUE3RGlCLEVBeUJDLEVBakJKLFdBUEQsQ0FRSyxFQWlCRyxRQXhCaUIsR0FrRGQsR0ExQ3hCLEtBaUJlLElBU00sVUFpQkosUUFsRGpCLE9BbURvQixRQXZDSSxVQXdDSSxFQVhkLFlBQ08sWUFXRixDQTVCTCxZQUNrQixHQWJoQyxDQXlDQSxPQXBCd0Isc0JBQ1YsWUFDZCx1QkFPZSwrQ0FoQkksaUJBQ0MsVUFnQnBCLFFBZkEiLCJmaWxlIjoiL1VzZXJzL1dpbnRoZXIvRHJvcGJveC9Kb2JhbnPDuGduaW5nL1BvcnRmb2xpby9mcmVkZXJpay9jb21wb25lbnRzL3NoYXJlZC9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBhbmltYXRlU2Nyb2xsLCBFdmVudHMsIEVsZW1lbnQsIExpbmsgYXMgU2Nyb2xsTGluaywgc2Nyb2xsZXIgfSBmcm9tICdyZWFjdC1zY3JvbGwnXG5cblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRFdmVudHMuc2Nyb2xsRXZlbnQucmVnaXN0ZXIoJ2JlZ2luJywgZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coXCJiZWdpblwiLCBhcmd1bWVudHMpO1xuICAgIH0pO1xuXG4gICAgRXZlbnRzLnNjcm9sbEV2ZW50LnJlZ2lzdGVyKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImVuZFwiLCBhcmd1bWVudHMpO1xuICAgIH0pO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0RXZlbnRzLnNjcm9sbEV2ZW50LnJlbW92ZSgnYmVnaW4nKTtcbiAgICBFdmVudHMuc2Nyb2xsRXZlbnQucmVtb3ZlKCdlbmQnKTtcblx0fVxuXG5cdHNjcm9sbFRvRWxlbWVudChuYW1lKSB7XG5cdFx0Y29uc29sZS5sb2coXCJDYWxsZWQgc2Nyb2xsIGZ1bmN0aW9uLlwiKVxuXHRcdHNjcm9sbGVyLnNjcm9sbFRvKG5hbWUsIHtcblx0XHRcdGR1cmF0aW9uOiA4MDAsXG5cdFx0XHRkZWxheTogMCxcblx0XHRcdHNtb290aDogJ2Vhc2VJbk91dFF1YXJ0cydcblx0XHR9KVxuXHRcdFxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX2NvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfbGVmdFwiPlxuXHRcdFx0XHRcdFx0XHQ8cGljdHVyZSBvbkNsaWNrPXsoKSA9PiBhbmltYXRlU2Nyb2xsLnNjcm9sbFRvVG9wKCl9PlxuXHRcdFx0XHRcdFx0XHRcdDxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOjkwMHB4XCIgc3JjU2V0PVwiLi4vc3RhdGljL2ltYWdlcy9Mb2dvX2Rlc2t0b3AucG5nXCI+PC9zb3VyY2U+XG5cdFx0XHRcdFx0XHRcdFx0PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6NTAwcHhcIiBzcmNTZXQ9XCIuLi9zdGF0aWMvaW1hZ2VzL0xvZ29fbW9iaWxlLnBuZ1wiPjwvc291cmNlPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz1cIlwiIGFsdD1cIkZyZWRlcmlrIFdpbnRoZXJcIi8+XG5cdFx0XHRcdFx0XHQ8L3BpY3R1cmU+XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX3JpZ2h0XCI+XG5cdFx0XHRcdFx0XHRcdDxhPkFib3V0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8YSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNjcm9sbFRvRWxlbWVudCgnc2tpbGxzJyl9PlNraWxsczwvYT5cblx0XHRcdFx0XHRcdFx0PGEgb25DbGljaz17KCkgPT4gdGhpcy5zY3JvbGxUb0VsZW1lbnQoJ3Byb2plY3RzJyl9PlByb2plY3RzPC9hPlxuXHRcdFx0XHRcdFx0XHQ8YSBvbkNsaWNrPXsoKSA9PiBhbmltYXRlU2Nyb2xsLnNjcm9sbFRvQm90dG9tKCl9PkNvbnRhY3Q8L2E+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvQ1ZcIj48YT5DVjwvYT48L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0XHRhIHtcblx0XHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQubmF2YmFyIHtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA2MHB4O1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC5sb2dvIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiVmVyZGFuYVwiO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHQ7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogNTBweDtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogbm9uZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0LmxvZ286aG92ZXIge1xuXHRcdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0XHRcdGFuaW1hdGlvbi1uYW1lOiBjaGFuZ2VDb2xvcjtcblx0XHRcdFx0XHRcdFx0YW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0LnBlcnNvbl9uYW1lIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC5uYXZiYXJfY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAxMCU7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDEwJTtcblx0XHRcdFx0XHRcdFx0bWluLXdpZHRoOiA0MDBweDtcblx0XHRcdFx0XHRcdFx0YWxpZ25faXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC5uYXZiYXJfbGVmdCB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Lm5hdmJhcl9yaWdodCB7XG5cdFx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0YSB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiBibGFjaztcblx0XHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogXCJWZXJkYW5hXCI7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJwdDtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTAlO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiA0cHggMTVweCA0cHggMTVweDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDE1cHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGE6aG92ZXIge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdEBrZXlmcmFtZXMgY2hhbmdlQ29sb3Ige1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=/Users/Winther/Dropbox/Jobans\xF8gning/Portfolio/frederik/components/shared/Header.js */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _construct; });
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");



function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false;
  if (_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map["default"]();
var IntersectionObserver =  false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    observer.unobserve(el);
    listeners["delete"](el);
  };
};

var Link =
/*#__PURE__*/
function (_react$Component) {
  (0, _inherits2["default"])(Link, _react$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2["default"])(this, Link);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Link).apply(this, arguments));

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      // @ts-ignore target exists on currentTarget
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      })["catch"](function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2["default"])(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.cleanUpListeners = function () {};
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners = listenToIntersections(ref, function () {
          _this2.prefetch();
        });
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = (0, _url.resolve)(pathname, parsedHref);

      _router["default"].prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          return _this3.handleRef(el);
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch();
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user

      };

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) {}

      return _react["default"].cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired,
    as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
    prefetch: _propTypes["default"].bool,
    replace: _propTypes["default"].bool,
    shallow: _propTypes["default"].bool,
    passHref: _propTypes["default"].bool,
    scroll: _propTypes["default"].bool,
    children: _propTypes["default"].oneOfType([_propTypes["default"].element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _construct2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/construct */ "./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js"));

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.useRequest = useRequest;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2["default"];

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _requestContext = __webpack_require__(/*! next-server/dist/lib/request-context */ "next-server/dist/lib/request-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty["default"])(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty["default"])(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
}

function useRequest() {
  return _react["default"].useContext(_requestContext.RequestContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = (0, _construct2["default"])(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var _i = 0, _urlPropertyFields = urlPropertyFields; _i < _urlPropertyFields.length; _i++) {
    var property = _urlPropertyFields[_i];

    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2["default"])({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2["default"].events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty["default"])(instance, field, {
      get: function get() {
        return _router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react$default$Compon) {
    (0, _inherits2["default"])(WithRouteWrapper, _react$default$Compon);

    function WithRouteWrapper() {
      var _this;

      (0, _classCallCheck2["default"])(this, WithRouteWrapper);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(WithRouteWrapper).apply(this, arguments));
      _this.context = void 0;
      return _this;
    }

    (0, _createClass2["default"])(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement(ComposedComponent, (0, _extends2["default"])({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(_react["default"].Component);

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes["default"].object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








var About =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(About, _React$Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(About, null, [{
    key: "getInitialProps",
    value: function getInitialProps() {
      return {};
    }
  }]);

  function About(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, About);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(About).call(this, props));
    _this.state = {
      someVariable: "This can be anything"
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(About, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("componentDidMount");
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log("componentDidUpdate");
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("componentWillUnmount");
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "about",
        className: "jsx-4232980339" + " " + "about_container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "4232980339"
      }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9XaW50aGVyL0Ryb3Bib3gvSm9iYW5zw7hnbmluZy9Qb3J0Zm9saW8vZnJlZGVyaWsvcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NnQiIsImZpbGUiOiIvVXNlcnMvV2ludGhlci9Ecm9wYm94L0pvYmFuc8O4Z25pbmcvUG9ydGZvbGlvL2ZyZWRlcmlrL3BhZ2VzL2Fib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBBYm91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0c3RhdGljIGdldEluaXRpYWxQcm9wcygpIHtcblxuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNvbWVWYXJpYWJsZTogXCJUaGlzIGNhbiBiZSBhbnl0aGluZ1wiXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Y29uc29sZS5sb2coXCJjb21wb25lbnREaWRNb3VudFwiKTtcblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblx0XHRjb25zb2xlLmxvZyhcImNvbXBvbmVudERpZFVwZGF0ZVwiKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdGNvbnNvbGUubG9nKFwiY29tcG9uZW50V2lsbFVubW91bnRcIik7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9XCJhYm91dFwiIGNsYXNzTmFtZT1cImFib3V0X2NvbnRhaW5lclwiPlxuXHRcblx0XG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHRcblx0XHRcdFx0YH1cblx0XHRcdFx0PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dDsiXX0= */\n/*@ sourceURL=/Users/Winther/Dropbox/Jobans\xF8gning/Portfolio/frederik/pages/about.js */"));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








var Contact =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Contact, _React$Component);

  function Contact() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Contact);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Contact).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Contact, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "contact",
        className: "jsx-3151728718" + " " + "contact_container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3151728718" + " " + "external_links"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3151728718" + " " + "linked_in"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3151728718" + " " + "github"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3151728718" + " " + "mail"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3151728718" + " " + "copyright"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "jsx-3151728718"
      }, "Built by Frederik Winther")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3151728718"
      }, ".copyright.jsx-3151728718{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9XaW50aGVyL0Ryb3Bib3gvSm9iYW5zw7hnbmluZy9Qb3J0Zm9saW8vZnJlZGVyaWsvcGFnZXMvY29udGFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmdCLEFBT3lCLGtCQUNuQiIsImZpbGUiOiIvVXNlcnMvV2ludGhlci9Ecm9wYm94L0pvYmFuc8O4Z25pbmcvUG9ydGZvbGlvL2ZyZWRlcmlrL3BhZ2VzL2NvbnRhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIENvbnRhY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRcblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPVwiY29udGFjdFwiIGNsYXNzTmFtZT1cImNvbnRhY3RfY29udGFpbmVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXh0ZXJuYWxfbGlua3NcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmtlZF9pblwiPlxuXHRcblx0XHRcdFx0XHQ8L2Rpdj5cblx0XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnaXRodWJcIj5cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haWxcIj5cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29weXJpZ2h0XCI+XG5cdFx0XHRcdFx0XHQ8aDI+QnVpbHQgYnkgRnJlZGVyaWsgV2ludGhlcjwvaDI+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0LmV4dGVybmFsX2xpbmtzIHtcblx0XG5cdFx0XHRcdFx0fVxuXHRcblx0XHRcdFx0XHQuY29weXJpZ2h0IHtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9XG5cdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDsiXX0= */\n/*@ sourceURL=/Users/Winther/Dropbox/Jobans\xF8gning/Portfolio/frederik/pages/contact.js */"));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./pages/front.js":
/*!************************!*\
  !*** ./pages/front.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








var Front =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Front, _React$Component);

  function Front() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Front);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Front).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Front, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "front",
        className: "jsx-49286734" + " " + "front_container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-49286734" + " " + "image_container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "/static/images/Front_image.png",
        className: "jsx-49286734" + " " + "image"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-49286734"
      }, "Designer, Full Stack Developer ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        className: "jsx-49286734"
      }), " & Triathlete")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "49286734"
      }, ".front_container.jsx-49286734{height:100%;}.image_container.jsx-49286734{position:relative;background:black;height:100%;width:100%;display:table;z-index:-1;}.image.jsx-49286734{opacity:.3;position:absolute;width:100%;height:100%;display:block;background-position:center;background-repeat:no-repeat;background-size:cover;-webkit-filter:blur(1px);filter:blur(1px);}#front.jsx-49286734 h1.jsx-49286734{font-size:300%;position:relative;text-align:center;margin:0;display:table-cell;vertical-align:middle;z-index:1;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9XaW50aGVyL0Ryb3Bib3gvSm9iYW5zw7hnbmluZy9Qb3J0Zm9saW8vZnJlZGVyaWsvcGFnZXMvZnJvbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWWdCLEFBR21CLEFBSU0sQUFVUCxBQVlJLFdBWEcsQ0FkbkIsR0EwQm1CLEdBdEJELFdBV04sSUFZTyxFQXRCTixLQVdBLE9BVkQsSUFzQkYsQ0FYSyxNQVZBLEVBc0JLLE1BWFEsTUFUaEIsT0FxQlcsSUFwQnZCLFVBUzZCLFFBWWxCLFVBQ0UsVUFaVSxFQWF2QixvQkFaa0IsMENBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9XaW50aGVyL0Ryb3Bib3gvSm9iYW5zw7hnbmluZy9Qb3J0Zm9saW8vZnJlZGVyaWsvcGFnZXMvZnJvbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIEZyb250IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9XCJmcm9udFwiIGNsYXNzTmFtZT1cImZyb250X2NvbnRhaW5lclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltYWdlX2NvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2VcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9Gcm9udF9pbWFnZS5wbmdcIi8+XG5cdFx0XHRcdFx0PGgxPkRlc2lnbmVyLCBGdWxsIFN0YWNrIERldmVsb3BlciA8YnIvPiAmIFRyaWF0aGxldGU8L2gxPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0LmZyb250X2NvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC5pbWFnZV9jb250YWluZXIge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogYmxhY2s7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IHRhYmxlO1xuXHRcdFx0XHRcdFx0LyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cblx0XHRcdFx0XHRcdHotaW5kZXg6IC0xO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQuaW1hZ2Uge1xuXHRcdFx0XHRcdFx0b3BhY2l0eTogLjM7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0XHRcdFx0XHRmaWx0ZXI6IGJsdXIoMXB4KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0I2Zyb250IGgxIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMzAwJTtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IHRhYmxlLWNlbGw7IFxuXHRcdFx0XHRcdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0XHRcdFx0XHRcdHotaW5kZXg6IDE7XG5cdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0YH08L3N0eWxlPlxuXG5cdFx0XHQ8L2Rpdj5cblx0ICBcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBGcm9udDsiXX0= */\n/*@ sourceURL=/Users/Winther/Dropbox/Jobans\xF8gning/Portfolio/frederik/pages/front.js */"));
    }
  }]);

  return Front;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Front);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_layouts_Layout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layouts/Layout.js */ "./components/layouts/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _front__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./front */ "./pages/front.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about */ "./pages/about.js");
/* harmony import */ var _skills__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./skills */ "./pages/skills.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projects */ "./pages/projects.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact */ "./pages/contact.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_13__);















var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_layouts_Layout_js__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_front__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Container"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_skills__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_projects__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_contact__WEBPACK_IMPORTED_MODULE_12__["default"], null)));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_8__);










var Projects =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Projects, _React$Component);

  function Projects() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Projects);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Projects).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Projects, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "projects",
        className: "jsx-3899002250" + " " + "projects_container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        onClick: showcase("This project!")
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardImg"], {
        top: true,
        width: "100%",
        src: "/static/images/Front_image.png",
        alt: "Card image cap"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardTitle"], null, "VR maintenance training"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        onClick: showcase("Another project!")
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardTitle"], null, "Project with LEGO"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        onClick: showcase("Third project")
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardTitle"], null, "VR texture rendering"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], null, "View Demo"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], null, "See on GitHub")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        lg: "4"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        onClick: showcase("Fourth project")
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardTitle"], null, "Interactive interior decorating"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        lg: "4"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        onClick: showcase("Fifth project")
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardTitle"], null, "J\xF6ro")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3899002250"
      }, "h1.jsx-3899002250{margin-left:0;text-align:center;padding-left:0;}.card.jsx-3899002250:hover{background:yellow;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9XaW50aGVyL0Ryb3Bib3gvSm9iYW5zw7hnbmluZy9Qb3J0Zm9saW8vZnJlZGVyaWsvcGFnZXMvcHJvamVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0RnQixBQUlxQixBQU1JLGNBTEEsSUFNbkIsY0FMZ0IsZUFDaEIiLCJmaWxlIjoiL1VzZXJzL1dpbnRoZXIvRHJvcGJveC9Kb2JhbnPDuGduaW5nL1BvcnRmb2xpby9mcmVkZXJpay9wYWdlcy9wcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgeyBDYXJkLCBDYXJkSW1nLCBDYXJkVGV4dCwgQ2FyZEJvZHksIFxuXHRDYXJkVGl0bGUsIENhcmRTdWJ0aXRsZSwgQnV0dG9uLCBcblx0Um93LCBDb2wgfSBmcm9tICdyZWFjdHN0cmFwJ1xuXG5jbGFzcyBQcm9qZWN0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPVwicHJvamVjdHNcIiBjbGFzc05hbWU9XCJwcm9qZWN0c19jb250YWluZXJcIj5cblx0XHRcdFx0PFJvdz5cblxuXHRcdFx0XHRcdDxDb2w+XG5cdFx0XHRcdFx0XHQ8Q2FyZCBvbkNsaWNrPXtzaG93Y2FzZShcIlRoaXMgcHJvamVjdCFcIil9PlxuXHRcdFx0XHRcdFx0XHQ8Q2FyZEltZyB0b3Agd2lkdGg9XCIxMDAlXCIgc3JjPVwiL3N0YXRpYy9pbWFnZXMvRnJvbnRfaW1hZ2UucG5nXCIgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIi8+XG5cdFx0XHRcdFx0XHRcdDxDYXJkVGl0bGU+VlIgbWFpbnRlbmFuY2UgdHJhaW5pbmc8L0NhcmRUaXRsZT5cblx0XHRcdFx0XHRcdDwvQ2FyZD5cblx0XHRcdFx0XHQ8L0NvbD5cblxuXHRcdFx0XHRcdDxDb2w+XG5cdFx0XHRcdFx0XHQ8Q2FyZCBvbkNsaWNrPXtzaG93Y2FzZShcIkFub3RoZXIgcHJvamVjdCFcIil9PlxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0PENhcmRUaXRsZT5Qcm9qZWN0IHdpdGggTEVHTzwvQ2FyZFRpdGxlPlxuXHRcdFx0XHRcdFx0PC9DYXJkPlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcblx0XHRcdFx0XHQ8Q29sPlxuXHRcdFx0XHRcdFx0PENhcmQgb25DbGljaz17c2hvd2Nhc2UoXCJUaGlyZCBwcm9qZWN0XCIpfT5cblxuXHRcdFx0XHRcdFx0XHQ8Q2FyZFRpdGxlPlZSIHRleHR1cmUgcmVuZGVyaW5nPC9DYXJkVGl0bGU+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24+VmlldyBEZW1vPC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24+U2VlIG9uIEdpdEh1YjwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9DYXJkPlxuXHRcdFx0XHRcdDwvQ29sPlxuXG5cdFx0XHRcdDwvUm93PlxuXG5cdFx0XHRcdDxSb3c+XG5cdFx0XHRcdFx0PENvbCBsZz1cIjRcIj5cblx0XHRcdFx0XHRcdDxDYXJkIG9uQ2xpY2s9e3Nob3djYXNlKFwiRm91cnRoIHByb2plY3RcIil9PlxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0PENhcmRUaXRsZT5JbnRlcmFjdGl2ZSBpbnRlcmlvciBkZWNvcmF0aW5nPC9DYXJkVGl0bGU+XG5cdFx0XHRcdFx0XHQ8L0NhcmQ+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFxuXHRcdFx0XHRcdDxDb2wgbGc9XCI0XCI+XG5cdFx0XHRcdFx0XHQ8Q2FyZCBvbkNsaWNrPXtzaG93Y2FzZShcIkZpZnRoIHByb2plY3RcIil9PlxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0PENhcmRUaXRsZT5Kw7ZybzwvQ2FyZFRpdGxlPlxuXHRcdFx0XHRcdFx0PC9DYXJkPlxuXHRcdFx0XHRcdDwvQ29sPlxuXG5cdFx0XHRcdDwvUm93PlxuXHRcblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFxuXHRcdFx0XHRcdGgxIHtcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAwO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5jYXJkOmhvdmVyIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHllbGxvdztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9XG5cdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG5cbi8vIEkgbmVlZCB0byB1c2UgdGhpcyBmdW5jdGlvbiBhcyBhIGdlbmVyaWMgbWV0aG9kIFxuZnVuY3Rpb24gc2hvd2Nhc2Uod2hpY2hQcm9qZWN0KSB7XG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc29sZS5sb2cod2hpY2hQcm9qZWN0KTtcblx0fVxufSJdfQ== */\n/*@ sourceURL=/Users/Winther/Dropbox/Jobans\xF8gning/Portfolio/frederik/pages/projects.js */"));
    }
  }]);

  return Projects;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Projects); // I need to use this function as a generic method 

function showcase(whichProject) {
  return function () {
    console.log(whichProject);
  };
}

/***/ }),

/***/ "./pages/skills.js":
/*!*************************!*\
  !*** ./pages/skills.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_7__);









var Skills =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Skills, _React$Component);

  function Skills() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Skills);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Skills).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Skills, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        name: "skills",
        className: "jsx-803848116" + " " + "skills_container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-803848116" + " " + "site_spacer"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        sm: "12",
        lg: "4"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        className: "designer_container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardTitle"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-803848116"
      }, "Designer")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-803848116"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "Idea Generating"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "Prototyping"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-803848116"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "Arduino"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "Raspberry Pi"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "3D-Printing"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "Custom PCBs")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "Sketching"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "Participatory Design"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "Interaction Design"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "Blender"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "Adobe Photoshop, inDesign & Illustrator")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-803848116" + " " + "card_spacer_mobile"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        sm: "12",
        lg: "4"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        className: "frontend_container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardTitle"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-803848116"
      }, "Frontend")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-803848116"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "HTML & CSS"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "JavaScript"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-803848116"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "jQuery"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "Bootstrap")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "React.JS"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-803848116"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "Next.JS")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "Node.JS"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "npm")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-803848116" + " " + "card_spacer"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-803848116" + " " + "card_spacer_mobile"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        className: "backend_container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardTitle"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-803848116"
      }, "Backend")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-803848116"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "Java"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "C#"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "SQL")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-803848116" + " " + "card_spacer_mobile"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        sm: "12",
        lg: "4"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        className: "tools_container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardTitle"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-803848116"
      }, "Tools & IDEs")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-803848116"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "IntelliJ Studio"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "Android Studio"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "Unity"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "Visual Studio (Code)"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "Git")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-803848116" + " " + "card_spacer"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-803848116" + " " + "card_spacer_mobile"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        className: "triathlon_container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardTitle"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-803848116"
      }, "Triathlete")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-803848116"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "Karreb\xE6ksminde Triatlon:"), "(950m, 50km, 10.5km)", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-803848116"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "1st: 3:36:45"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "2nd: 3:13:30")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "Aarhus KMD Ironman:"), "(1500m, 45km, 10km)", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-803848116"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-803848116"
      }, "1st: 3:06:35"))))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-803848116" + " " + "site_spacer"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "803848116"
      }, "h1.jsx-803848116{color:black;margin-top:10px;text-align:center;}.card-title.jsx-803848116{margin-bottom:0;}ul.jsx-803848116{list-style-type:none;}li.jsx-803848116{list-style-type:none;margin-top:10px;font-size:130%;}@media screen and (min-width:768px){.card_spacer.jsx-803848116{margin-bottom:1rem;}.site_spacer.jsx-803848116{padding-top:7vw;}}@media screen and (max-width:768px){.card_spacer.jsx-803848116{margin-bottom:0;}.card_spacer_mobile.jsx-803848116{margin-bottom:3rem;}.site_spacer.jsx-803848116{padding-top:7vw;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9XaW50aGVyL0Ryb3Bib3gvSm9iYW5zw7hnbmluZy9Qb3J0Zm9saW8vZnJlZGVyaWsvcGFnZXMvc2tpbGxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStHZ0IsQUFHbUIsQUFNVSxBQUlELEFBSUEsQUFlTSxBQUlILEFBTUEsQUFJRyxBQUlILFlBOUNSLElBTVosQUEyQkUsQUFNQSxBQVFBLEdBbEJBLEFBY0EsRUFqQ1AsQUFJaUIsT0FiRSxTQWNILFNBYlgsTUFjTCIsImZpbGUiOiIvVXNlcnMvV2ludGhlci9Ecm9wYm94L0pvYmFuc8O4Z25pbmcvUG9ydGZvbGlvL2ZyZWRlcmlrL3BhZ2VzL3NraWxscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmQsIENhcmRCb2R5LCBcblx0Q2FyZFRpdGxlLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0c3RyYXAnXG5cbmNsYXNzIFNraWxscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IG5hbWU9XCJza2lsbHNcIiBjbGFzc05hbWU9XCJza2lsbHNfY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpdGVfc3BhY2VyXCIvPlxuXHRcdFx0XHQ8Um93PlxuXHRcdFx0XHRcdDxDb2wgc209XCIxMlwiIGxnPVwiNFwiPlxuXHRcdFx0XHRcdFx0PENhcmQgY2xhc3NOYW1lPVwiZGVzaWduZXJfY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxDYXJkVGl0bGU+PGgxPkRlc2lnbmVyPC9oMT48L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIDxsaT5JZGVhIEdlbmVyYXRpbmc8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlByb3RvdHlwaW5nPC9saT5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPkFyZHVpbm88L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+UmFzcGJlcnJ5IFBpPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjNELVByaW50aW5nPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPkN1c3RvbSBQQ0JzPC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8bGk+U2tldGNoaW5nPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5QYXJ0aWNpcGF0b3J5IERlc2lnbjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+SW50ZXJhY3Rpb24gRGVzaWduPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5CbGVuZGVyPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5BZG9iZSBQaG90b3Nob3AsIGluRGVzaWduICYgSWxsdXN0cmF0b3I8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XG5cdFx0XHRcdFx0XHQ8L0NhcmQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfc3BhY2VyX21vYmlsZVwiLz5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8Q29sIHNtPVwiMTJcIiBsZz1cIjRcIj5cblx0XHRcdFx0XHRcdDxDYXJkIGNsYXNzTmFtZT1cImZyb250ZW5kX2NvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHQ8Q2FyZFRpdGxlPjxoMT5Gcm9udGVuZDwvaDE+PC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICA8bGk+SFRNTCAmIENTUzwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+SmF2YVNjcmlwdDwvbGk+XG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5qUXVlcnk8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Qm9vdHN0cmFwPC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8bGk+UmVhY3QuSlM8L2xpPlxuICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+TmV4dC5KUzwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPGxpPk5vZGUuSlM8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPm5wbTwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cblx0XHRcdFx0XHRcdDwvQ2FyZD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX3NwYWNlclwiLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9zcGFjZXJfbW9iaWxlXCIvPlxuXHRcdFx0XHRcblx0XHRcdFx0XHRcdDxDYXJkIGNsYXNzTmFtZT1cImJhY2tlbmRfY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxDYXJkVGl0bGU+PGgxPkJhY2tlbmQ8L2gxPjwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgPGxpPkphdmE8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPkMjPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5TUUw8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XG5cdFx0XHRcdFx0XHQ8L0NhcmQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfc3BhY2VyX21vYmlsZVwiLz5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8Q29sIHNtPVwiMTJcIiBsZz1cIjRcIj5cbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInRvb2xzX2NvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHQ8Q2FyZFRpdGxlPjxoMT5Ub29scyAmIElERXM8L2gxPjwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgPGxpPkludGVsbGlKIFN0dWRpbzwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+QW5kcm9pZCBTdHVkaW88L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlVuaXR5PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5WaXN1YWwgU3R1ZGlvIChDb2RlKTwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+R2l0PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuXHRcdFx0XHRcdFx0PC9DYXJkPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfc3BhY2VyXCIvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX3NwYWNlcl9tb2JpbGVcIi8+XG5cblx0XHRcdFx0XHRcdDxDYXJkIGNsYXNzTmFtZT1cInRyaWF0aGxvbl9jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0PENhcmRUaXRsZT48aDE+VHJpYXRobGV0ZTwvaDE+PC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICA8bGk+S2FycmViw6Zrc21pbmRlIFRyaWF0bG9uOjwvbGk+XG4gICAgICAgICAgICAgICAgICAoOTUwbSwgNTBrbSwgMTAuNWttKVxuICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+MXN0OiAzOjM2OjQ1PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjJuZDogMzoxMzozMDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPGxpPkFhcmh1cyBLTUQgSXJvbm1hbjo8L2xpPlxuICAgICAgICAgICAgICAgICAgKDE1MDBtLCA0NWttLCAxMGttKVxuICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+MXN0OiAzOjA2OjM1PC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cblx0XHRcdFx0XHRcdDwvQ2FyZD5cblx0XHRcdFx0XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdDwvUm93PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l0ZV9zcGFjZXJcIi8+XG5cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdGgxIHtcblx0XHRcdFx0XHRcdGNvbG9yOiBibGFjaztcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDEwcHg7XG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQtdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dWwge1xuXHRcdFx0XHRcdFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHRsaSB7XG5cdFx0XHRcdFx0XHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMzAlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQuc2tpbGxzX2NvbnRhaW5lciB7XG4gICAgICAgICAgICBcblx0XHRcdFx0XHRcdC8qYmFja2dyb3VuZDogIzBjMGMwYzsqL1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdH0gXG4gICAgICAgICAgXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIC5jYXJkX3NwYWNlciB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zaXRlX3NwYWNlciB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA3dnc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIC5jYXJkX3NwYWNlciB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jYXJkX3NwYWNlcl9tb2JpbGUge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2l0ZV9zcGFjZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogN3Z3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBTa2lsbHM7Il19 */\n/*@ sourceURL=/Users/Winther/Dropbox/Jobans\xF8gning/Portfolio/frederik/pages/skills.js */"));
    }
  }]);

  return Skills;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Winther/Dropbox/Jobansøgning/Portfolio/frederik/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/request-context":
/*!*******************************************************!*\
  !*** external "next-server/dist/lib/request-context" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/request-context");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map