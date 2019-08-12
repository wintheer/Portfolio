webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");










var Skills =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Skills, _React$Component);

  function Skills(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Skills);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Skills).call(this, props));
    _this.state = {
      width: 0,
      height: 0
    };
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Skills, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: "updateWindowDimensions",
    value: function updateWindowDimensions() {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        name: "skills",
        className: "jsx-1440444350" + " " + "skills_container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        md: "12",
        lg: "4"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        className: "designer_container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardTitle"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: "jsx-1440444350"
      }, "Designer")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "jsx-1440444350"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "Idea Generating"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "Prototyping"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "jsx-1440444350"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "Arduino"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "Raspberry Pi"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "3D-Printing"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "Custom PCBs")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "Sketching"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "Participatory Design"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "Interaction Design"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "Blender"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "Adobe Photoshop, inDesign & Illustrator"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        md: "12",
        lg: "4"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        className: "frontend_container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardTitle"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: "jsx-1440444350"
      }, "Frontend")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "jsx-1440444350"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "HTML & CSS"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "JavaScript"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "jsx-1440444350"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "jQuery"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "Bootstrap")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "React.JS"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "jsx-1440444350"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "Next.JS")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "Node.JS"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "npm")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1440444350" + " " + "filler"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        className: "backend_container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardTitle"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: "jsx-1440444350"
      }, "Backend")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "jsx-1440444350"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "Java"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "C#"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "SQL"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        md: "12",
        lg: "4"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        className: "tools_container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardTitle"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: "jsx-1440444350"
      }, "Tools & IDEs")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "jsx-1440444350"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "IntelliJ Studio"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "Android Studio"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "Unity"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "Visual Studio (Code)"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "Git")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1440444350" + " " + "filler"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        className: "triathlon_container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardTitle"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: "jsx-1440444350"
      }, "Triathlete")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "jsx-1440444350"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "Karreb\xE6ksminde Triatlon:"), "(950m, 50km, 10,5km)", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "jsx-1440444350"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "1st: 3:36:45"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "2nd: 3:13:30")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "Aarhus KMD Ironman:"), "(1500m, 45km, 10km)", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "jsx-1440444350"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1440444350"
      }, "1st: 3:06:35"))))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1440444350"
      }, "h1.jsx-1440444350{color:black;margin-top:10px;text-align:center;}.card-title.jsx-1440444350{margin-bottom:0;}ul.jsx-1440444350{list-style-type:none;}li.jsx-1440444350{list-style-type:none;margin-top:10px;font-size:130%;}.skills_container.jsx-1440444350{height:100%;padding-top:4vw;}@media only screen and (min-width:993){.filler.jsx-1440444350{margin-bottom:1rem;margin-bottom:200px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9XaW50aGVyL0Ryb3Bib3gvSm9iYW5zw7hnbmluZy9Qb3J0Zm9saW8vZnJlZGVyaWsvcGFnZXMvc2tpbGxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRIZ0IsQUFHbUIsQUFNVSxBQUlELEFBSUEsQUFNVCxBQVllLFlBL0JYLEFBcUJBLElBZlosR0EwQndCLEVBdEI3QixBQUlpQixPQWJFLEFBMEJuQixTQVpnQixFQWtCVCxPQS9CRixNQWNMIiwiZmlsZSI6Ii9Vc2Vycy9XaW50aGVyL0Ryb3Bib3gvSm9iYW5zw7hnbmluZy9Qb3J0Zm9saW8vZnJlZGVyaWsvcGFnZXMvc2tpbGxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCwgQ2FyZEltZywgQ2FyZFRleHQsIENhcmRCb2R5LCBcblx0Q2FyZFRpdGxlLCBDYXJkU3VidGl0bGUsIEJ1dHRvbiwgXG5cdFJvdywgQ29sfSBmcm9tICdyZWFjdHN0cmFwJ1xuXG5jbGFzcyBTa2lsbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfTtcbiAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMgPSB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyk7XG4gIH1cblxuICB1cGRhdGVXaW5kb3dEaW1lbnNpb25zKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IH0pO1xuICB9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IG5hbWU9XCJza2lsbHNcIiBjbGFzc05hbWU9XCJza2lsbHNfY29udGFpbmVyXCI+XG5cdFx0XHRcdDxSb3c+XG5cdFx0XHRcdFx0PENvbCBtZD1cIjEyXCIgbGc9XCI0XCI+XG5cdFx0XHRcdFx0XHQ8Q2FyZCBjbGFzc05hbWU9XCJkZXNpZ25lcl9jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0PENhcmRUaXRsZT48aDE+RGVzaWduZXI8L2gxPjwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgPGxpPklkZWEgR2VuZXJhdGluZzwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+UHJvdG90eXBpbmc8L2xpPlxuICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+QXJkdWlubzwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5SYXNwYmVycnkgUGk8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+M0QtUHJpbnRpbmc8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Q3VzdG9tIFBDQnM8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDxsaT5Ta2V0Y2hpbmc8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlBhcnRpY2lwYXRvcnkgRGVzaWduPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5JbnRlcmFjdGlvbiBEZXNpZ248L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPkJsZW5kZXI8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPkFkb2JlIFBob3Rvc2hvcCwgaW5EZXNpZ24gJiBJbGx1c3RyYXRvcjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cblx0XHRcdFx0XHRcdDwvQ2FyZD5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8Q29sIG1kPVwiMTJcIiBsZz1cIjRcIj5cblx0XHRcdFx0XHRcdDxDYXJkIGNsYXNzTmFtZT1cImZyb250ZW5kX2NvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHQ8Q2FyZFRpdGxlPjxoMT5Gcm9udGVuZDwvaDE+PC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICA8bGk+SFRNTCAmIENTUzwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+SmF2YVNjcmlwdDwvbGk+XG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5qUXVlcnk8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Qm9vdHN0cmFwPC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8bGk+UmVhY3QuSlM8L2xpPlxuICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+TmV4dC5KUzwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPGxpPk5vZGUuSlM8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPm5wbTwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cblx0XHRcdFx0XHRcdDwvQ2FyZD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxsZXJcIi8+XG5cdFx0XHRcdFxuXHRcdFx0XHRcdFx0PENhcmQgY2xhc3NOYW1lPVwiYmFja2VuZF9jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0PENhcmRUaXRsZT48aDE+QmFja2VuZDwvaDE+PC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICA8bGk+SmF2YTwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+QyM8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlNRTDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cblx0XHRcdFx0XHRcdDwvQ2FyZD5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8Q29sIG1kPVwiMTJcIiBsZz1cIjRcIj5cbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInRvb2xzX2NvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHQ8Q2FyZFRpdGxlPjxoMT5Ub29scyAmIElERXM8L2gxPjwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgPGxpPkludGVsbGlKIFN0dWRpbzwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+QW5kcm9pZCBTdHVkaW88L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlVuaXR5PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5WaXN1YWwgU3R1ZGlvIChDb2RlKTwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+R2l0PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuXHRcdFx0XHRcdFx0PC9DYXJkPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGxlclwiLz5cblxuXHRcdFx0XHRcdFx0PENhcmQgY2xhc3NOYW1lPVwidHJpYXRobG9uX2NvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHQ8Q2FyZFRpdGxlPjxoMT5UcmlhdGhsZXRlPC9oMT48L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIDxsaT5LYXJyZWLDpmtzbWluZGUgVHJpYXRsb246PC9saT5cbiAgICAgICAgICAgICAgICAgICg5NTBtLCA1MGttLCAxMCw1a20pXG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT4xc3Q6IDM6MzY6NDU8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Mm5kOiAzOjEzOjMwPC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8bGk+QWFyaHVzIEtNRCBJcm9ubWFuOjwvbGk+XG4gICAgICAgICAgICAgICAgICAoMTUwMG0sIDQ1a20sIDEwa20pXG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT4xc3Q6IDM6MDY6MzU8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuXHRcdFx0XHRcdFx0PC9DYXJkPlxuXHRcdFx0XHRcblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0PC9Sb3c+XG5cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdGgxIHtcblx0XHRcdFx0XHRcdGNvbG9yOiBibGFjaztcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDEwcHg7XG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgfVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHVsIHtcblx0XHRcdFx0XHRcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0bGkge1xuXHRcdFx0XHRcdFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMTBweDtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTMwJTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0LnNraWxsc19jb250YWluZXIge1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdFx0LypiYWNrZ3JvdW5kOiAjMGMwYzBjOyovXG5cdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogNHZ3O1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQvKmRpc3BsYXk6IGdyaWQ7XG5cdFx0XHRcdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuXHRcdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwgNHZ3KTtcblx0XHRcdFx0XHRcdGdyaWQtZ2FwOiAyMHB4OyovXG5cdFx0XHRcdFx0fSBcbiAgICAgICAgICBcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5Mykge1xuICAgICAgICAgICAgLmZpbGxlciB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBTa2lsbHM7Il19 */\n/*@ sourceURL=/Users/Winther/Dropbox/Jobans\xF8gning/Portfolio/frederik/pages/skills.js */"));
    }
  }]);

  return Skills;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ })

})
//# sourceMappingURL=index.js.061fa17d3c0a52e42183.hot-update.js.map