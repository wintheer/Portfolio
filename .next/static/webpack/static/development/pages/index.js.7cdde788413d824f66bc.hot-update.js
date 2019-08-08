webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
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
    key: "scrollToSkills",
    value: function scrollToSkills(name) {
      react_scroll__WEBPACK_IMPORTED_MODULE_8__["animateScroll"].scrollTo(name, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuarts'
      });
    }
  }, {
    key: "render",
    value: function render() {
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
        srcSet: "../static/Logo_desktop.png",
        className: "jsx-4269863753"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("source", {
        media: "(min-width:500px",
        srcSet: "../static/Logo_mobile.png",
        className: "jsx-4269863753"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "",
        alt: "Frederik Winther",
        className: "jsx-4269863753" + " " + "logo"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-4269863753" + " " + "navbar_right"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-4269863753"
      }, "About"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        to: "skills",
        smooth: true
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-4269863753"
      }, "Skills")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: function onClick() {
          return scrollTo('skills');
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
      }, "a.jsx-4269863753{cursor:pointer;}.navbar.jsx-4269863753{height:60px;left:0;top:0;right:0;position:fixed;width:100%;background:rgba(255,255,255,0.4);}.logo.jsx-4269863753{font-family:\"Verdana\";font-size:14pt;height:50px;background:none;}.logo.jsx-4269863753:hover{cursor:pointer;-webkit-animation-name:changeColor-jsx-4269863753;animation-name:changeColor-jsx-4269863753;-webkit-animation-duration:5s;animation-duration:5s;}.person_name.jsx-4269863753{margin-left:10px;}.navbar_container.jsx-4269863753{padding-left:10%;padding-right:10%;min-width:400px;align_items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-left:auto;margin-right:auto;}.navbar_left.jsx-4269863753{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;height:100%;}.navbar_right.jsx-4269863753{box-sizing:border-box;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}a.jsx-4269863753{color:black;-webkit-text-decoration:none;text-decoration:none;font-family:\"Verdana\";font-size:12pt;border-radius:10%;padding:4px 15px 4px 15px;margin-left:15px;}a.jsx-4269863753:hover{background:rgba(0,0,0,0.1);}@-webkit-keyframes changeColor-jsx-4269863753{}@keyframes changeColor-jsx-4269863753{}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9XaW50aGVyL0Ryb3Bib3gvSm9iYW5zw7hnbmluZy9Qb3J0Zm9saW8vZnJlZGVyaWsvY29tcG9uZW50cy9zaGFyZWQvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1EaUIsQUFHdUIsQUFJSCxBQVVVLEFBT1AsQUFNRSxBQUlBLEFBWUosQUFPUyxBQVFWLEFBVWUsWUEvRHBCLEFBc0RjLEdBMUR0QixBQXFCNEIsRUFNN0IsQUFJb0IsRUExQlosR0FTUyxBQW9DVSxHQTVDakIsRUE4RFYsTUE3RGlCLEVBeUJDLEVBakJKLFdBUEQsQ0FRSyxFQWlCRyxRQXhCaUIsR0FrRGQsR0ExQ3hCLEtBaUJlLElBU00sVUFpQkosUUFsRGpCLE9BbURvQixRQXZDSSxVQXdDSSxFQVhkLFlBQ08sWUFXRixDQTVCTCxZQUNrQixHQWJoQyxDQXlDQSxPQXBCd0Isc0JBQ1YsWUFDZCx1QkFPZSwrQ0FoQkksaUJBQ0MsVUFnQnBCLFFBZkEiLCJmaWxlIjoiL1VzZXJzL1dpbnRoZXIvRHJvcGJveC9Kb2JhbnPDuGduaW5nL1BvcnRmb2xpby9mcmVkZXJpay9jb21wb25lbnRzL3NoYXJlZC9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2FuaW1hdGVTY3JvbGwsIEV2ZW50cywgRWxlbWVudH0gZnJvbSAncmVhY3Qtc2Nyb2xsJ1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdEV2ZW50cy5zY3JvbGxFdmVudC5yZWdpc3RlcignYmVnaW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImJlZ2luXCIsIGFyZ3VtZW50cyk7XG4gICAgfSk7XG5cbiAgICBFdmVudHMuc2Nyb2xsRXZlbnQucmVnaXN0ZXIoJ2VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZW5kXCIsIGFyZ3VtZW50cyk7XG4gICAgfSk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRFdmVudHMuc2Nyb2xsRXZlbnQucmVtb3ZlKCdiZWdpbicpO1xuICAgIEV2ZW50cy5zY3JvbGxFdmVudC5yZW1vdmUoJ2VuZCcpO1xuXHR9XG5cblx0c2Nyb2xsVG9Ta2lsbHMobmFtZSkge1xuXHRcdGFuaW1hdGVTY3JvbGwuc2Nyb2xsVG8obmFtZSwge1xuXHRcdFx0ZHVyYXRpb246IDgwMCxcblx0XHRcdGRlbGF5OiAwLFxuXHRcdFx0c21vb3RoOiAnZWFzZUluT3V0UXVhcnRzJ1xuXHRcdH0pXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9sZWZ0XCI+XG5cdFx0XHRcdFx0XHRcdDxwaWN0dXJlIG9uQ2xpY2s9eygpID0+IGFuaW1hdGVTY3JvbGwuc2Nyb2xsVG9Ub3AoKX0+XG5cdFx0XHRcdFx0XHRcdFx0PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6OTAwcHhcIiBzcmNTZXQ9XCIuLi9zdGF0aWMvTG9nb19kZXNrdG9wLnBuZ1wiPjwvc291cmNlPlxuXHRcdFx0XHRcdFx0XHRcdDxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOjUwMHB4XCIgc3JjU2V0PVwiLi4vc3RhdGljL0xvZ29fbW9iaWxlLnBuZ1wiPjwvc291cmNlPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz1cIlwiIGFsdD1cIkZyZWRlcmlrIFdpbnRoZXJcIi8+XG5cdFx0XHRcdFx0XHQ8L3BpY3R1cmU+XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9yaWdodFwiPlxuXHRcdFx0XHRcdFx0XHQ8YT5BYm91dDwvYT5cblx0XHRcdFx0XHRcdFx0PExpbmsgdG89XCJza2lsbHNcIiBzbW9vdGg9e3RydWV9ID48YT5Ta2lsbHM8L2E+PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHQ8YSBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUbygnc2tpbGxzJyl9PlByb2plY3RzPC9hPlxuXHRcdFx0XHRcdFx0XHQ8YSBvbkNsaWNrPXsoKSA9PiBhbmltYXRlU2Nyb2xsLnNjcm9sbFRvQm90dG9tKCl9PkNvbnRhY3Q8L2E+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvQ1ZcIj48YT5DVjwvYT48L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0XHRhIHtcblx0XHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQubmF2YmFyIHtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA2MHB4O1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC5sb2dvIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiVmVyZGFuYVwiO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHQ7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogNTBweDtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogbm9uZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0LmxvZ286aG92ZXIge1xuXHRcdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0XHRcdGFuaW1hdGlvbi1uYW1lOiBjaGFuZ2VDb2xvcjtcblx0XHRcdFx0XHRcdFx0YW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0LnBlcnNvbl9uYW1lIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC5uYXZiYXJfY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAxMCU7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDEwJTtcblx0XHRcdFx0XHRcdFx0bWluLXdpZHRoOiA0MDBweDtcblx0XHRcdFx0XHRcdFx0YWxpZ25faXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC5uYXZiYXJfbGVmdCB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Lm5hdmJhcl9yaWdodCB7XG5cdFx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0YSB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiBibGFjaztcblx0XHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogXCJWZXJkYW5hXCI7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJwdDtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTAlO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiA0cHggMTVweCA0cHggMTVweDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDE1cHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGE6aG92ZXIge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdEBrZXlmcmFtZXMgY2hhbmdlQ29sb3Ige1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=/Users/Winther/Dropbox/Jobans\xF8gning/Portfolio/frederik/components/shared/Header.js */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.7cdde788413d824f66bc.hot-update.js.map