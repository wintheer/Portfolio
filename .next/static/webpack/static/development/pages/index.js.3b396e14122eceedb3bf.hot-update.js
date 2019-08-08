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
          return scrollTo(skills);
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
      }, "a.jsx-4269863753{cursor:pointer;}.navbar.jsx-4269863753{height:60px;left:0;top:0;right:0;position:fixed;width:100%;background:rgba(255,255,255,0.4);}.logo.jsx-4269863753{font-family:\"Verdana\";font-size:14pt;height:50px;background:none;}.logo.jsx-4269863753:hover{cursor:pointer;-webkit-animation-name:changeColor-jsx-4269863753;animation-name:changeColor-jsx-4269863753;-webkit-animation-duration:5s;animation-duration:5s;}.person_name.jsx-4269863753{margin-left:10px;}.navbar_container.jsx-4269863753{padding-left:10%;padding-right:10%;min-width:400px;align_items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-left:auto;margin-right:auto;}.navbar_left.jsx-4269863753{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;height:100%;}.navbar_right.jsx-4269863753{box-sizing:border-box;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}a.jsx-4269863753{color:black;-webkit-text-decoration:none;text-decoration:none;font-family:\"Verdana\";font-size:12pt;border-radius:10%;padding:4px 15px 4px 15px;margin-left:15px;}a.jsx-4269863753:hover{background:rgba(0,0,0,0.1);}@-webkit-keyframes changeColor-jsx-4269863753{}@keyframes changeColor-jsx-4269863753{}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9XaW50aGVyL0Ryb3Bib3gvSm9iYW5zw7hnbmluZy9Qb3J0Zm9saW8vZnJlZGVyaWsvY29tcG9uZW50cy9zaGFyZWQvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1EaUIsQUFHdUIsQUFJSCxBQVVVLEFBT1AsQUFNRSxBQUlBLEFBWUosQUFPUyxBQVFWLEFBVWUsWUEvRHBCLEFBc0RjLEdBMUR0QixBQXFCNEIsRUFNN0IsQUFJb0IsRUExQlosR0FTUyxBQW9DVSxHQTVDakIsRUE4RFYsTUE3RGlCLEVBeUJDLEVBakJKLFdBUEQsQ0FRSyxFQWlCRyxRQXhCaUIsR0FrRGQsR0ExQ3hCLEtBaUJlLElBU00sVUFpQkosUUFsRGpCLE9BbURvQixRQXZDSSxVQXdDSSxFQVhkLFlBQ08sWUFXRixDQTVCTCxZQUNrQixHQWJoQyxDQXlDQSxPQXBCd0Isc0JBQ1YsWUFDZCx1QkFPZSwrQ0FoQkksaUJBQ0MsVUFnQnBCLFFBZkEiLCJmaWxlIjoiL1VzZXJzL1dpbnRoZXIvRHJvcGJveC9Kb2JhbnPDuGduaW5nL1BvcnRmb2xpby9mcmVkZXJpay9jb21wb25lbnRzL3NoYXJlZC9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2FuaW1hdGVTY3JvbGwsIEV2ZW50cywgRWxlbWVudH0gZnJvbSAncmVhY3Qtc2Nyb2xsJ1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdEV2ZW50cy5zY3JvbGxFdmVudC5yZWdpc3RlcignYmVnaW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImJlZ2luXCIsIGFyZ3VtZW50cyk7XG4gICAgfSk7XG5cbiAgICBFdmVudHMuc2Nyb2xsRXZlbnQucmVnaXN0ZXIoJ2VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZW5kXCIsIGFyZ3VtZW50cyk7XG4gICAgfSk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRFdmVudHMuc2Nyb2xsRXZlbnQucmVtb3ZlKCdiZWdpbicpO1xuICAgIEV2ZW50cy5zY3JvbGxFdmVudC5yZW1vdmUoJ2VuZCcpO1xuXHR9XG5cblx0c2Nyb2xsVG9Ta2lsbHMobmFtZSkge1xuXHRcdGFuaW1hdGVTY3JvbGwuc2Nyb2xsVG8obmFtZSwge1xuXHRcdFx0ZHVyYXRpb246IDgwMCxcblx0XHRcdGRlbGF5OiAwLFxuXHRcdFx0c21vb3RoOiAnZWFzZUluT3V0UXVhcnRzJ1xuXHRcdH0pXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuYXZiYXJfY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9sZWZ0XCI+XG5cdFx0XHRcdFx0XHRcdDxwaWN0dXJlIG9uQ2xpY2s9eygpID0+IGFuaW1hdGVTY3JvbGwuc2Nyb2xsVG9Ub3AoKX0+XG5cdFx0XHRcdFx0XHRcdFx0PHNvdXJjZSBtZWRpYT1cIihtaW4td2lkdGg6OTAwcHhcIiBzcmNTZXQ9XCIuLi9zdGF0aWMvTG9nb19kZXNrdG9wLnBuZ1wiPjwvc291cmNlPlxuXHRcdFx0XHRcdFx0XHRcdDxzb3VyY2UgbWVkaWE9XCIobWluLXdpZHRoOjUwMHB4XCIgc3JjU2V0PVwiLi4vc3RhdGljL0xvZ29fbW9iaWxlLnBuZ1wiPjwvc291cmNlPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz1cIlwiIGFsdD1cIkZyZWRlcmlrIFdpbnRoZXJcIi8+XG5cdFx0XHRcdFx0XHQ8L3BpY3R1cmU+XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9yaWdodFwiPlxuXHRcdFx0XHRcdFx0XHQ8YT5BYm91dDwvYT5cblx0XHRcdFx0XHRcdFx0PExpbmsgdG89XCJza2lsbHNcIiBzbW9vdGg9e3RydWV9ID48YT5Ta2lsbHM8L2E+PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHQ8YSBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUbyhza2lsbHMpfT5Qcm9qZWN0czwvYT5cblx0XHRcdFx0XHRcdFx0PGEgb25DbGljaz17KCkgPT4gYW5pbWF0ZVNjcm9sbC5zY3JvbGxUb0JvdHRvbSgpfT5Db250YWN0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL0NWXCI+PGE+Q1Y8L2E+PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdFx0YSB7XG5cdFx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Lm5hdmJhciB7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogNjBweDtcblx0XHRcdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQubG9nbyB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIlZlcmRhbmFcIjtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB0O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDUwcHg7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IG5vbmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC5sb2dvOmhvdmVyIHtcblx0XHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdFx0XHRhbmltYXRpb24tbmFtZTogY2hhbmdlQ29sb3I7XG5cdFx0XHRcdFx0XHRcdGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC5wZXJzb25fbmFtZSB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQubmF2YmFyX2NvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctbGVmdDogMTAlO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiAxMCU7XG5cdFx0XHRcdFx0XHRcdG1pbi13aWR0aDogNDAwcHg7XG5cdFx0XHRcdFx0XHRcdGFsaWduX2l0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogYXV0bztcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQubmF2YmFyX2xlZnQge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC5uYXZiYXJfcmlnaHQge1xuXHRcdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGEge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogYmxhY2s7XG5cdFx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiVmVyZGFuYVwiO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHQ7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEwJTtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogNHB4IDE1cHggNHB4IDE1cHg7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxNXB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHRhOmhvdmVyIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHRAa2V5ZnJhbWVzIGNoYW5nZUNvbG9yIHtcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=/Users/Winther/Dropbox/Jobans\xF8gning/Portfolio/frederik/components/shared/Header.js */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.3b396e14122eceedb3bf.hot-update.js.map