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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation */ "./components/Navigation.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);




function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-1601952333"
  }, "Frederik Winther")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Navigation__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1601952333"
  }, "body,html{margin:0;height:100%;}#__next{height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9XaW50aGVyL0Ryb3Bib3gvSm9iYW5zw7hnbmluZy9Qb3J0Zm9saW8vZnJlZGVyaWsvY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVXlCLEFBR3NCLEFBS0UsU0FKQyxHQUtkLFNBSkEiLCJmaWxlIjoiL1VzZXJzL1dpbnRoZXIvRHJvcGJveC9Kb2JhbnPDuGduaW5nL1BvcnRmb2xpby9mcmVkZXJpay9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vTmF2aWdhdGlvbidcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XG4gIHJldHVybiAoXG4gIFx0PFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5GcmVkZXJpayBXaW50aGVyPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblx0ICAgIDxOYXZpZ2F0aW9uLz5cblx0ICAgIDxzdHlsZSBqc3ggZ2xvYmFsPiB7YFxuICAgICAgICAgIGJvZHksIGh0bWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNfX25leHQge1xuICAgICAgICAgIFx0aGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn0iXX0= */\n/*@ sourceURL=/Users/Winther/Dropbox/Jobans\xF8gning/Portfolio/frederik/components/Layout.js */"));
}

/***/ }),

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);




function Navigation() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-949889220" + " " + "navbar"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-949889220" + " " + "navbar_container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-949889220" + " " + "navbar_left"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("picture", {
    className: "jsx-949889220"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("source", {
    media: "(min-width:900px",
    srcSet: "../static/Logo_desktop.png",
    className: "jsx-949889220"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("source", {
    media: "(min-width:500px",
    srcSet: "../static/Logo_mobile.png",
    className: "jsx-949889220"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "",
    alt: "Frederik Winther",
    className: "jsx-949889220" + " " + "logo"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-949889220" + " " + "navbar_right"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#about"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-949889220"
  }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#skills"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-949889220"
  }, "Skills")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#projects"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-949889220"
  }, "Projects")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    scroll: false,
    href: "#contact"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-949889220"
  }, "Contact")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/CV"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-949889220"
  }, "CV")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "949889220"
  }, ".navbar.jsx-949889220{height:60px;left:0;top:0;right:0;position:fixed;width:100%;background:rgba(255,255,255,0.4);}.logo.jsx-949889220{font-family:\"Verdana\";font-size:14pt;height:50px;background:none;}.logo.jsx-949889220:hover{cursor:pointer;-webkit-animation-name:changeColor-jsx-949889220;animation-name:changeColor-jsx-949889220;-webkit-animation-duration:5s;animation-duration:5s;}.person_name.jsx-949889220{margin-left:10px;}.navbar_container.jsx-949889220{padding-left:10%;padding-right:10%;min-width:400px;align_items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-left:auto;margin-right:auto;}.navbar_left.jsx-949889220{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;height:100%;}.navbar_right.jsx-949889220{box-sizing:border-box;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}a.jsx-949889220{color:black;-webkit-text-decoration:none;text-decoration:none;font-family:\"Verdana\";font-size:12pt;border-radius:10%;padding:4px 15px 4px 15px;margin-left:15px;}a.jsx-949889220:hover{background:rgba(0,0,0,0.1);}@-webkit-keyframes changeColor-jsx-949889220{}@keyframes changeColor-jsx-949889220{}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9XaW50aGVyL0Ryb3Bib3gvSm9iYW5zw7hnbmluZy9Qb3J0Zm9saW8vZnJlZGVyaWsvY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCa0IsQUFJMEIsQUFVTyxBQU9QLEFBTUUsQUFJRyxBQVlKLEFBT1MsQUFRYixBQVVlLFlBL0RqQixBQXNEVyxHQXJDTSxFQU01QixBQUlzQixFQTFCWixHQVNNLEFBb0NhLEdBNUNqQixFQThEWixNQTdEbUIsRUF5QkMsRUFqQlAsV0FQRSxDQVFFLEVBaUJNLFFBeEJpQixHQWtEakIsR0ExQ3ZCLEtBaUJpQixJQVNNLFVBaUJQLFFBbERoQixPQW1EbUIsTUF2Q0ksWUF3Q0ksRUFYWCxZQUNPLFlBV0YsQ0E1QkwsWUFDa0IsQ0FibEMsR0F5Q0EsT0FwQjBCLHNCQUNWLFlBQ2hCLHVCQU9pQiwrQ0FoQkksaUJBQ0MsVUFnQnRCLFFBZkEiLCJmaWxlIjoiL1VzZXJzL1dpbnRoZXIvRHJvcGJveC9Kb2JhbnPDuGduaW5nL1BvcnRmb2xpby9mcmVkZXJpay9jb21wb25lbnRzL05hdmlnYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgYW5pbWF0ZVNjcm9sbCBmcm9tICdyZWFjdC1zY3JvbGwnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb24oKSB7XG5cdHJldHVybiAoXG5cdDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9jb250YWluZXJcIj5cbiAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfbGVmdFwiPlxuICAgICAgXHRcdDxwaWN0dXJlPlxuICAgICAgXHRcdFx0PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6OTAwcHhcIiBzcmNTZXQ9XCIuLi9zdGF0aWMvTG9nb19kZXNrdG9wLnBuZ1wiPjwvc291cmNlPlxuICAgICAgXHRcdFx0PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6NTAwcHhcIiBzcmNTZXQ9XCIuLi9zdGF0aWMvTG9nb19tb2JpbGUucG5nXCI+PC9zb3VyY2U+XG4gICAgICBcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9XCJcIiBhbHQ9XCJGcmVkZXJpayBXaW50aGVyXCIvPlxuICBcdFx0XHQ8L3BpY3R1cmU+XG4gICAgICBcdFx0XG4gICAgICBcdDwvZGl2PlxuXG4gICAgICBcdDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX3JpZ2h0XCI+XG4gICAgICBcdFx0PExpbmsgaHJlZj1cIiNhYm91dFwiPjxhPkFib3V0PC9hPjwvTGluaz5cbiAgICAgIFx0XHQ8TGluayBocmVmPVwiI3NraWxsc1wiPjxhPlNraWxsczwvYT48L0xpbms+XG4gICAgICBcdFx0PExpbmsgaHJlZj1cIiNwcm9qZWN0c1wiPjxhPlByb2plY3RzPC9hPjwvTGluaz5cbiAgICAgIFx0XHQ8TGluayBzY3JvbGw9e2ZhbHNlfSBocmVmPVwiI2NvbnRhY3RcIj48YT5Db250YWN0PC9hPjwvTGluaz5cbiAgICAgIFx0XHQ8TGluayBocmVmPVwiL0NWXCI+PGE+Q1Y8L2E+PC9MaW5rPlxuICAgICAgXHQ8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICBcdFx0Lm5hdmJhciB7XG5cdCAgICAgICAgICAgIGhlaWdodDogNjBweDtcblx0ICAgICAgICAgICAgbGVmdDogMDtcblx0ICAgICAgICAgICAgdG9wOiAwO1xuXHQgICAgICAgICAgICByaWdodDogMDtcblx0ICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuXHQgICAgICAgICAgICB3aWR0aDogMTAwJTtcblx0ICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAgICAgICBcdH1cblxuICAgICAgICBcdC5sb2dvIHtcbiAgICAgICAgXHRcdGZvbnQtZmFtaWx5OiBcIlZlcmRhbmFcIjtcbiAgICAgICAgXHRcdGZvbnQtc2l6ZTogMTRwdDtcbiAgICAgICAgXHRcdGhlaWdodDogNTBweDtcbiAgICAgICAgXHRcdGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIFx0fVxuXG4gICAgICAgIFx0LmxvZ286aG92ZXIge1xuICAgICAgICBcdFx0Y3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBcdFx0YW5pbWF0aW9uLW5hbWU6IGNoYW5nZUNvbG9yO1xuICAgICAgICBcdFx0YW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcbiAgICAgICAgXHR9XG5cbiAgICAgICAgXHQucGVyc29uX25hbWUge1xuICAgICAgICBcdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIFx0fVxuXG4gICAgICAgIFx0Lm5hdmJhcl9jb250YWluZXIge1xuXHQgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcblx0ICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTAlO1xuXHQgICAgICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xuXHQgICAgICAgICAgICBhbGlnbl9pdGVtczogY2VudGVyO1xuXHQgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXHQgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cdCAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0ICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG5cdCAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgXHR9XG5cbiAgICAgICAgXHQubmF2YmFyX2xlZnQge1xuXHQgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXHQgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXHQgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHQgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIFx0fVxuXG4gICAgICAgIFx0Lm5hdmJhcl9yaWdodCB7XG5cdCAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdCAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdCAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblx0ICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblx0ICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgXHR9XG5cbiAgICAgICAgXHRhIHtcbiAgICAgICAgXHRcdGNvbG9yOiBibGFjaztcbiAgICAgICAgXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgXHRcdGZvbnQtZmFtaWx5OiBcIlZlcmRhbmFcIjtcbiAgICAgICAgXHRcdGZvbnQtc2l6ZTogMTJwdDtcbiAgICAgICAgXHRcdGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgICAgICAgXHRcdHBhZGRpbmc6IDRweCAxNXB4IDRweCAxNXB4O1xuICAgICAgICAgICAgXHRtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgXHR9XG5cbiAgICAgICAgXHRhOmhvdmVyIHtcbiAgICAgICAgXHRcdGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgXHR9XG5cbiAgICAgICAgXHRAa2V5ZnJhbWVzIGNoYW5nZUNvbG9yIHtcblx0XHRcdFx0XG5cdFx0XHR9XG5cbiAgICAgIFx0YH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICAgKVxufSJdfQ== */\n/*@ sourceURL=/Users/Winther/Dropbox/Jobans\xF8gning/Portfolio/frederik/components/Navigation.js */"));
}

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








var About =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(About, _React$Component);

  function About() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, About);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(About).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(About, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "about",
        className: "jsx-4232980339" + " " + "about_container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "4232980339"
      }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9XaW50aGVyL0Ryb3Bib3gvSm9iYW5zw7hnbmluZy9Qb3J0Zm9saW8vZnJlZGVyaWsvcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU2dCIiwiZmlsZSI6Ii9Vc2Vycy9XaW50aGVyL0Ryb3Bib3gvSm9iYW5zw7hnbmluZy9Qb3J0Zm9saW8vZnJlZGVyaWsvcGFnZXMvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIEFib3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9XCJhYm91dFwiIGNsYXNzTmFtZT1cImFib3V0X2NvbnRhaW5lclwiPlxuXHRcblx0XG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHRcblx0XHRcdFx0YH1cblx0XHRcdFx0PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dDsiXX0= */\n/*@ sourceURL=/Users/Winther/Dropbox/Jobans\xF8gning/Portfolio/frederik/pages/about.js */"));
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
        className: "jsx-4031414500" + " " + "front_container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-4031414500" + " " + "image_container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-4031414500" + " " + "image"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-4031414500"
      }, "Designer, Full Stack Developer ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        className: "jsx-4031414500"
      }), " & Triathlete")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "4031414500"
      }, ".front_container.jsx-4031414500{height:100%;}.image_container.jsx-4031414500{position:relative;background:black;height:100%;width:100%;display:table;z-index:-1;}.image.jsx-4031414500{opacity:.3;background-image:url(\"../static/Front_image.png\");position:absolute;width:100%;height:100%;display:block;background-position:center;background-repeat:no-repeat;background-size:cover;-webkit-filter:blur(1px);filter:blur(1px);}h1.jsx-4031414500{font-size:300%;position:relative;text-align:center;margin:0;display:table-cell;vertical-align:middle;z-index:1;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9XaW50aGVyL0Ryb3Bib3gvSm9iYW5zw7hnbmluZy9Qb3J0Zm9saW8vZnJlZGVyaWsvcGFnZXMvZnJvbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWdCLEFBR21CLEFBSU0sQUFVUCxBQWFJLFdBWm1DLENBZG5ELEdBMkJtQixHQXZCRCxlQXdCQyxFQXZCTixZQUNELElBdUJGLE9BdEJLLEVBdUJLLENBZkQsV0FOUCxPQU9BLEFBZVcsSUFyQnZCLE9BT2EsV0FlRixDQWRJLFNBZUYsS0FkZSxPQWU1QixvQkFkNkIsNEJBQ04sc0JBQ0wsMENBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9XaW50aGVyL0Ryb3Bib3gvSm9iYW5zw7hnbmluZy9Qb3J0Zm9saW8vZnJlZGVyaWsvcGFnZXMvZnJvbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIEZyb250IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9XCJmcm9udFwiIGNsYXNzTmFtZT1cImZyb250X2NvbnRhaW5lclwiPlxuXHRcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWFnZV9jb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+PC9kaXY+XG5cdFx0XHRcdFx0PGgxPkRlc2lnbmVyLCBGdWxsIFN0YWNrIERldmVsb3BlciA8YnIvPiAmIFRyaWF0aGxldGU8L2gxPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHQuZnJvbnRfY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRcdC5pbWFnZV9jb250YWluZXIge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogYmxhY2s7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IHRhYmxlO1xuXHRcdFx0XHRcdFx0LyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cblx0XHRcdFx0XHRcdHotaW5kZXg6IC0xO1xuXHRcdFx0XHRcdH1cblx0XG5cdFx0XHRcdFx0LmltYWdlIHtcblx0XHRcdFx0XHRcdG9wYWNpdHk6IC4zO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vc3RhdGljL0Zyb250X2ltYWdlLnBuZ1wiKTtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0XHRcdGZpbHRlcjogYmx1cigxcHgpO1xuXHRcdFx0XHRcdH1cblx0XG5cdFx0XHRcdFx0aDEge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAzMDAlO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogdGFibGUtY2VsbDsgXG5cdFx0XHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRcdFx0XHRcdFx0ei1pbmRleDogMTtcblx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9XG5cdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0ICBcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBGcm9udDsiXX0= */\n/*@ sourceURL=/Users/Winther/Dropbox/Jobans\xF8gning/Portfolio/frederik/pages/front.js */"));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _front__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./front */ "./pages/front.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ "./pages/about.js");
/* harmony import */ var _skills__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skills */ "./pages/skills.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects */ "./pages/projects.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact */ "./pages/contact.js");








/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_front__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_skills__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_projects__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contact__WEBPACK_IMPORTED_MODULE_7__["default"], null));
});

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
        className: "jsx-1478032800" + " " + "projects_container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1478032800" + " " + "image_grid"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onClick: showcase("This project!"),
        className: "jsx-1478032800" + " " + "project_item"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1478032800" + " " + "image_container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("picture", {
        className: "jsx-1478032800"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "",
        alt: "Project one",
        className: "jsx-1478032800" + " " + "project_picture"
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1478032800" + " " + "text_container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-1478032800"
      }, "VR maintenance training"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onClick: showcase("Another project!"),
        className: "jsx-1478032800" + " " + "project_item"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1478032800" + " " + "image_container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("picture", {
        className: "jsx-1478032800"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "",
        alt: "Project two",
        className: "jsx-1478032800" + " " + "project_picture"
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1478032800" + " " + "text_container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-1478032800"
      }, "Project with LEGO"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onClick: showcase("Third project"),
        className: "jsx-1478032800" + " " + "project_item"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1478032800" + " " + "image_container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("picture", {
        className: "jsx-1478032800"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "",
        alt: "Project three",
        className: "jsx-1478032800" + " " + "project_picture"
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1478032800" + " " + "text_container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-1478032800"
      }, "VR texture rendering"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onClick: showcase("Fourth project"),
        className: "jsx-1478032800" + " " + "project_item"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1478032800" + " " + "image_container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("picture", {
        className: "jsx-1478032800"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "",
        alt: "Project four",
        className: "jsx-1478032800" + " " + "project_picture"
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1478032800" + " " + "text_container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-1478032800"
      }, "Interactive interior decorating"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onClick: showcase("Fifth project"),
        className: "jsx-1478032800" + " " + "project_item"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1478032800" + " " + "image_container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("picture", {
        className: "jsx-1478032800"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "",
        alt: "Project five",
        className: "jsx-1478032800" + " " + "project_picture"
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1478032800" + " " + "text_container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-1478032800"
      }, "J\xF6ro")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1478032800"
      }, ".projects_container.jsx-1478032800{padding-top:4vw;height:100%;padding-left:15%;padding-right:15%;}.image_grid.jsx-1478032800{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(2,18vw);grid-gap:15px;}h1.jsx-1478032800{margin-left:0;text-align:center;padding-left:0;}.project_item.jsx-1478032800{background:grey;}.text_container.jsx-1478032800{padding-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9XaW50aGVyL0Ryb3Bib3gvSm9iYW5zw7hnbmluZy9Qb3J0Zm9saW8vZnJlZGVyaWsvcGFnZXMvcHJvamVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0VnQixBQUd1QixBQU9ILEFBT0MsQUFNRSxBQUlFLGFBaEJtQixDQU9uQixFQWROLEFBb0JiLEVBSUEsVUF2QmtCLElBY0YsYUFiRyxFQWNuQixFQVJvQyxjQUxwQyxvQkFNZSxjQUNmIiwiZmlsZSI6Ii9Vc2Vycy9XaW50aGVyL0Ryb3Bib3gvSm9iYW5zw7hnbmluZy9Qb3J0Zm9saW8vZnJlZGVyaWsvcGFnZXMvcHJvamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuXG5jbGFzcyBQcm9qZWN0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPVwicHJvamVjdHNcIiBjbGFzc05hbWU9XCJwcm9qZWN0c19jb250YWluZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWFnZV9ncmlkXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0X2l0ZW1cIiBvbkNsaWNrPXtzaG93Y2FzZShcIlRoaXMgcHJvamVjdCFcIil9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWFnZV9jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0PHBpY3R1cmU+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJwcm9qZWN0X3BpY3R1cmVcIiBzcmM9XCJcIiBhbHQ9XCJQcm9qZWN0IG9uZVwiLz5cblx0XHRcdFx0XHRcdFx0PC9waWN0dXJlPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0X2NvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHQ8aDE+VlIgbWFpbnRlbmFuY2UgdHJhaW5pbmc8L2gxPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdF9pdGVtXCIgb25DbGljaz17c2hvd2Nhc2UoXCJBbm90aGVyIHByb2plY3QhXCIpfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VfY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxwaWN0dXJlPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwicHJvamVjdF9waWN0dXJlXCIgc3JjPVwiXCIgYWx0PVwiUHJvamVjdCB0d29cIi8+XG5cdFx0XHRcdFx0XHRcdDwvcGljdHVyZT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dF9jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0PGgxPlByb2plY3Qgd2l0aCBMRUdPPC9oMT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RfaXRlbVwiIG9uQ2xpY2s9e3Nob3djYXNlKFwiVGhpcmQgcHJvamVjdFwiKX0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltYWdlX2NvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHQ8cGljdHVyZT5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cInByb2plY3RfcGljdHVyZVwiIHNyYz1cIlwiIGFsdD1cIlByb2plY3QgdGhyZWVcIi8+XG5cdFx0XHRcdFx0XHRcdDwvcGljdHVyZT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dF9jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0PGgxPlZSIHRleHR1cmUgcmVuZGVyaW5nPC9oMT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RfaXRlbVwiIG9uQ2xpY2s9e3Nob3djYXNlKFwiRm91cnRoIHByb2plY3RcIil9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWFnZV9jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0PHBpY3R1cmU+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJwcm9qZWN0X3BpY3R1cmVcIiBzcmM9XCJcIiBhbHQ9XCJQcm9qZWN0IGZvdXJcIi8+XG5cdFx0XHRcdFx0XHRcdDwvcGljdHVyZT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dF9jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0PGgxPkludGVyYWN0aXZlIGludGVyaW9yIGRlY29yYXRpbmc8L2gxPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdF9pdGVtXCIgb25DbGljaz17c2hvd2Nhc2UoXCJGaWZ0aCBwcm9qZWN0XCIpfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VfY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxwaWN0dXJlPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwicHJvamVjdF9waWN0dXJlXCIgc3JjPVwiXCIgYWx0PVwiUHJvamVjdCBmaXZlXCIvPlxuXHRcdFx0XHRcdFx0XHQ8L3BpY3R1cmU+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHRfY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxoMT5Kw7ZybzwvaDE+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XG5cdFx0XHRcdDwvZGl2PlxuXHRcblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdC5wcm9qZWN0c19jb250YWluZXIge1xuXHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDR2dztcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdHBhZGRpbmctbGVmdDogMTUlO1xuXHRcdFx0XHRcdFx0cGFkZGluZy1yaWdodDogMTUlO1xuXHRcdFx0XHRcdH1cblx0XG5cdFx0XHRcdFx0LmltYWdlX2dyaWQge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZ3JpZDtcblx0XHRcdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG5cdFx0XHRcdFx0XHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxOHZ3KTtcblx0XHRcdFx0XHRcdGdyaWQtZ2FwOiAxNXB4O1xuXHRcdFx0XHRcdH1cblx0XG5cdFx0XHRcdFx0aDEge1xuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDA7XG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDA7XG5cdFx0XHRcdFx0fVxuXHRcblx0XHRcdFx0XHQucHJvamVjdF9pdGVtIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGdyZXk7XG5cdFx0XHRcdFx0fVxuXHRcblx0XHRcdFx0XHQudGV4dF9jb250YWluZXIge1xuXHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAyMHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH1cblx0XHRcdFx0PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcblxuLy8gSSBuZWVkIHRvIHVzZSB0aGlzIGZ1bmN0aW9uIGFzIGEgZ2VuZXJpYyBtZXRob2QgXG5mdW5jdGlvbiBzaG93Y2FzZSh3aGljaFByb2plY3QpIHtcblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRjb25zb2xlLmxvZyh3aGljaFByb2plY3QpO1xuXHR9XG59Il19 */\n/*@ sourceURL=/Users/Winther/Dropbox/Jobans\xF8gning/Portfolio/frederik/pages/projects.js */"));
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
        id: "skills",
        className: "jsx-1939066184" + " " + "skills_container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1939066184" + " " + "designer_container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-1939066184"
      }, "Designer"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-1939066184"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "Idea Generating"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "Prototyping"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-1939066184"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "Arduino"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "Raspberry Pi"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "3D-Printing"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "Custom PCBs")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "Sketching"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "Participatory Design"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "Interaction Design"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "Adobe:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-1939066184"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "Photoshop"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "inDesign"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "Illustrator")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "Blender"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1939066184" + " " + "frontend_container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-1939066184"
      }, "Frontend"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-1939066184"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "HTML/CSS"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "JavaScript"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-1939066184"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "jQuery"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "Bootstrap")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "React.JS"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-1939066184"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "Next.JS")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "Node.JS"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "npm"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1939066184" + " " + "backend_container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-1939066184"
      }, "Backend"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-1939066184"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "Java"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "C#"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "SQL"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1939066184" + " " + "triathlon_container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-1939066184"
      }, "Triathlete"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-1939066184"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "Karreb\xE6ksminde Triatlon:"), "(950m, 50km, 10,5km)", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-1939066184"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "1st: 3:36:45"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "2nd: 3:13:30")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "Aarhus KMD Ironman:"), "(1500m, 45km, 10km)", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-1939066184"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "1st: 3:06:35")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1939066184" + " " + "tools_container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-1939066184"
      }, "Tools & IDEs"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-1939066184"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "IntelliJ Studio"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "Android Studio"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "Unity"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "Visual Studio (Code)"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1939066184"
      }, "Git"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1939066184"
      }, "h1.jsx-1939066184{margin:10 0 0 0;text-align:center;}ul.jsx-1939066184{list-style-type:none;}li.jsx-1939066184{list-style-type:none;margin-top:10px;font-size:130%;}.skills_container.jsx-1939066184{height:100%;background:#0c0c0c;padding-top:4vw;padding-left:15%;padding-right:15%;display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(8,4vw);grid-gap:20px;}.ProjectItem.jsx-1939066184{height:100%;width:100%;background:grey;object-fit:cover;}.designer_container.jsx-1939066184{grid-column-start:1;grid-column-end:2;grid-row-start:1;grid-row-end:8;background:grey;}.frontend_container.jsx-1939066184{grid-column-start:2;grid-column-end:3;grid-row-start:1;grid-row-end:5;background:grey;}.backend_container.jsx-1939066184{grid-column-start:2;grid-column-end:3;grid-row-start:5;grid-row-end:8;background:grey;}.tools_container.jsx-1939066184{grid-column-start:3;grid-column-end:4;grid-row-start:1;grid-row-end:4;background:grey;}.triathlon_container.jsx-1939066184{background:grey;grid-row-start:4;grid-row-end:8;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9XaW50aGVyL0Ryb3Bib3gvSm9iYW5zw7hnbmluZy9Qb3J0Zm9saW8vZnJlZGVyaWsvcGFnZXMvc2tpbGxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdGZ0IsQUFHd0IsQUFLSyxBQU1BLEFBTVQsQUFZQSxBQU9RLEFBUUEsQUFRQSxBQVFBLEFBUUosWUFsREcsQUFZUixJQTdCTyxBQW9FRCxJQWhDQyxBQVFBLEFBUUEsQUFRQSxDQXREbkIsQUFLaUIsRUFtQkEsUUFaQSxFQW1ERCxDQXBFaEIsR0FXZ0IsQ0F5QkUsQUFRQSxBQVFBLEFBUUEsQ0E5QkEsUUFaQSxDQW1EbEIsSUF6REEsR0F5QmdCLEFBUUEsQUFRQSxBQVFBLENBOUJoQixRQVptQixNQW1CRixBQVFBLEFBUUEsQUFRQSxZQTFDSCxJQW1CZCxBQVFBLEFBUUEsQUFRQSxTQTFDc0Msb0NBQ0gsaUNBQ3BCLGNBQ2YiLCJmaWxlIjoiL1VzZXJzL1dpbnRoZXIvRHJvcGJveC9Kb2JhbnPDuGduaW5nL1BvcnRmb2xpby9mcmVkZXJpay9wYWdlcy9za2lsbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBTa2lsbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cInNraWxsc1wiIGNsYXNzTmFtZT1cInNraWxsc19jb250YWluZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZXNpZ25lcl9jb250YWluZXJcIj5cblx0XHRcdFx0XHQ8aDE+RGVzaWduZXI8L2gxPlxuXHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdDxsaT5JZGVhIEdlbmVyYXRpbmc8L2xpPlxuXHRcdFx0XHRcdFx0PGxpPlByb3RvdHlwaW5nPC9saT5cblx0XHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdFx0PGxpPkFyZHVpbm88L2xpPlxuXHRcdFx0XHRcdFx0XHQ8bGk+UmFzcGJlcnJ5IFBpPC9saT5cblx0XHRcdFx0XHRcdFx0PGxpPjNELVByaW50aW5nPC9saT5cblx0XHRcdFx0XHRcdFx0PGxpPkN1c3RvbSBQQ0JzPC9saT5cblx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHQ8bGk+U2tldGNoaW5nPC9saT5cblx0XHRcdFx0XHRcdDxsaT5QYXJ0aWNpcGF0b3J5IERlc2lnbjwvbGk+XG5cdFx0XHRcdFx0XHQ8bGk+SW50ZXJhY3Rpb24gRGVzaWduPC9saT5cblx0XHRcdFx0XHRcdDxsaT5BZG9iZTo8L2xpPlxuXHRcdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0XHQ8bGk+UGhvdG9zaG9wPC9saT5cblx0XHRcdFx0XHRcdFx0PGxpPmluRGVzaWduPC9saT5cblx0XHRcdFx0XHRcdFx0PGxpPklsbHVzdHJhdG9yPC9saT5cblx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHQ8bGk+QmxlbmRlcjwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XG5cdFx0XHRcdFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZyb250ZW5kX2NvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxoMT5Gcm9udGVuZDwvaDE+XG5cdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0PGxpPkhUTUwvQ1NTPC9saT5cblx0XHRcdFx0XHRcdDxsaT5KYXZhU2NyaXB0PC9saT5cblx0XHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdFx0PGxpPmpRdWVyeTwvbGk+XG5cdFx0XHRcdFx0XHRcdDxsaT5Cb290c3RyYXA8L2xpPlxuXHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdDxsaT5SZWFjdC5KUzwvbGk+XG5cdFx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHRcdDxsaT5OZXh0LkpTPC9saT5cblx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHQ8bGk+Tm9kZS5KUzwvbGk+XG5cdFx0XHRcdFx0XHQ8bGk+bnBtPC9saT5cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWNrZW5kX2NvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxoMT5CYWNrZW5kPC9oMT5cblx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHQ8bGk+SmF2YTwvbGk+XG5cdFx0XHRcdFx0XHQ8bGk+QyM8L2xpPlxuXHRcdFx0XHRcdFx0PGxpPlNRTDwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRyaWF0aGxvbl9jb250YWluZXJcIj5cblx0XHRcdFx0XHQ8aDE+VHJpYXRobGV0ZTwvaDE+XG5cdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0PGxpPkthcnJlYsOma3NtaW5kZSBUcmlhdGxvbjo8L2xpPlxuXHRcdFx0XHRcdFx0KDk1MG0sIDUwa20sIDEwLDVrbSlcblx0XHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdFx0PGxpPjFzdDogMzozNjo0NTwvbGk+XG5cdFx0XHRcdFx0XHRcdDxsaT4ybmQ6IDM6MTM6MzA8L2xpPlxuXHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdDxsaT5BYXJodXMgS01EIElyb25tYW46PC9saT5cblx0XHRcdFx0XHRcdCgxNTAwbSwgNDVrbSwgMTBrbSlcblx0XHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdFx0PGxpPjFzdDogMzowNjozNTwvbGk+XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvb2xzX2NvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxoMT5Ub29scyAmIElERXM8L2gxPlxuXHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdDxsaT5JbnRlbGxpSiBTdHVkaW88L2xpPlxuXHRcdFx0XHRcdFx0PGxpPkFuZHJvaWQgU3R1ZGlvPC9saT5cblx0XHRcdFx0XHRcdDxsaT5Vbml0eTwvbGk+XG5cdFx0XHRcdFx0XHQ8bGk+VmlzdWFsIFN0dWRpbyAoQ29kZSk8L2xpPlxuXHRcdFx0XHRcdFx0PGxpPkdpdDwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHRcdGgxIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAxMCAwIDAgMDtcblx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFxuXHRcdFx0XHRcdFx0dWwge1xuXHRcdFx0XHRcdFx0XHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cdFx0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XG5cdFx0XHRcdFx0XHRsaSB7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDEwcHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTMwJTtcblx0XHRcdFx0XHRcdH1cblx0XHRcblx0XHRcdFx0XHRcdC5za2lsbHNfY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMGMwYzBjO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogNHZ3O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDE1JTtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1yaWdodDogMTUlO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdFx0XHRcdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuXHRcdFx0XHRcdFx0XHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCA0dncpO1xuXHRcdFx0XHRcdFx0XHRncmlkLWdhcDogMjBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcblx0XHRcdFx0XHRcdC5Qcm9qZWN0SXRlbSB7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGdyZXk7XG5cdFx0XHRcdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFxuXHRcdFx0XHRcdFx0LmRlc2lnbmVyX2NvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRcdGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuXHRcdFx0XHRcdFx0XHRncmlkLWNvbHVtbi1lbmQ6IDI7XG5cdFx0XHRcdFx0XHRcdGdyaWQtcm93LXN0YXJ0OiAxO1xuXHRcdFx0XHRcdFx0XHRncmlkLXJvdy1lbmQ6IDg7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGdyZXk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XG5cdFx0XHRcdFx0XHQuZnJvbnRlbmRfY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdFx0Z3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG5cdFx0XHRcdFx0XHRcdGdyaWQtY29sdW1uLWVuZDogMztcblx0XHRcdFx0XHRcdFx0Z3JpZC1yb3ctc3RhcnQ6IDE7XG5cdFx0XHRcdFx0XHRcdGdyaWQtcm93LWVuZDogNTtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogZ3JleTtcblx0XHRcdFx0XHRcdH1cblx0XHRcblx0XHRcdFx0XHRcdC5iYWNrZW5kX2NvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRcdGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuXHRcdFx0XHRcdFx0XHRncmlkLWNvbHVtbi1lbmQ6IDM7XG5cdFx0XHRcdFx0XHRcdGdyaWQtcm93LXN0YXJ0OiA1O1xuXHRcdFx0XHRcdFx0XHRncmlkLXJvdy1lbmQ6IDg7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGdyZXk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XG5cdFx0XHRcdFx0XHQudG9vbHNfY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdFx0Z3JpZC1jb2x1bW4tc3RhcnQ6IDM7XG5cdFx0XHRcdFx0XHRcdGdyaWQtY29sdW1uLWVuZDogNDtcblx0XHRcdFx0XHRcdFx0Z3JpZC1yb3ctc3RhcnQ6IDE7XG5cdFx0XHRcdFx0XHRcdGdyaWQtcm93LWVuZDogNDtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogZ3JleTtcblx0XHRcdFx0XHRcdH1cblx0XHRcblx0XHRcdFx0XHRcdC50cmlhdGhsb25fY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogZ3JleTtcblx0XHRcdFx0XHRcdFx0Z3JpZC1yb3ctc3RhcnQ6IDQ7XG5cdFx0XHRcdFx0XHRcdGdyaWQtcm93LWVuZDogODtcblx0XHRcdFx0XHRcdH1cblx0XHRcblx0XHRcdFx0XHRgfVxuXHRcdFx0XHQ8L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNraWxsczsiXX0= */\n/*@ sourceURL=/Users/Winther/Dropbox/Jobans\xF8gning/Portfolio/frederik/pages/skills.js */"));
    }
  }]);

  return Skills;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ }),

/***/ 4:
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