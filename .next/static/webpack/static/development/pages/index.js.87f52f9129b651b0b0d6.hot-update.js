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
      console.log(this.props.width + " " + this.props.height);
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
      }, "h1.jsx-1440444350{color:black;margin-top:10px;text-align:center;}.card-title.jsx-1440444350{margin-bottom:0;}ul.jsx-1440444350{list-style-type:none;}li.jsx-1440444350{list-style-type:none;margin-top:10px;font-size:130%;}.skills_container.jsx-1440444350{height:100%;padding-top:4vw;}@media only screen and (min-width:993){.filler.jsx-1440444350{margin-bottom:1rem;margin-bottom:200px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9XaW50aGVyL0Ryb3Bib3gvSm9iYW5zw7hnbmluZy9Qb3J0Zm9saW8vZnJlZGVyaWsvcGFnZXMvc2tpbGxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZIZ0IsQUFHbUIsQUFNVSxBQUlELEFBSUEsQUFNVCxBQVllLFlBL0JYLEFBcUJBLElBZlosR0EwQndCLEVBdEI3QixBQUlpQixPQWJFLEFBMEJuQixTQVpnQixFQWtCVCxPQS9CRixNQWNMIiwiZmlsZSI6Ii9Vc2Vycy9XaW50aGVyL0Ryb3Bib3gvSm9iYW5zw7hnbmluZy9Qb3J0Zm9saW8vZnJlZGVyaWsvcGFnZXMvc2tpbGxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCwgQ2FyZEltZywgQ2FyZFRleHQsIENhcmRCb2R5LCBcblx0Q2FyZFRpdGxlLCBDYXJkU3VidGl0bGUsIEJ1dHRvbiwgXG5cdFJvdywgQ29sfSBmcm9tICdyZWFjdHN0cmFwJ1xuXG5jbGFzcyBTa2lsbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfTtcbiAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMgPSB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyk7XG4gIH1cblxuICB1cGRhdGVXaW5kb3dEaW1lbnNpb25zKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IH0pO1xuICAgIGNvbnNvbGUubG9nKCB0aGlzLnByb3BzLndpZHRoICsgXCIgXCIgKyB0aGlzLnByb3BzLmhlaWdodCk7XG4gIH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgbmFtZT1cInNraWxsc1wiIGNsYXNzTmFtZT1cInNraWxsc19jb250YWluZXJcIj5cblx0XHRcdFx0PFJvdz5cblx0XHRcdFx0XHQ8Q29sIG1kPVwiMTJcIiBsZz1cIjRcIj5cblx0XHRcdFx0XHRcdDxDYXJkIGNsYXNzTmFtZT1cImRlc2lnbmVyX2NvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHQ8Q2FyZFRpdGxlPjxoMT5EZXNpZ25lcjwvaDE+PC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICA8bGk+SWRlYSBHZW5lcmF0aW5nPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5Qcm90b3R5cGluZzwvbGk+XG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5BcmR1aW5vPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlJhc3BiZXJyeSBQaTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT4zRC1QcmludGluZzwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5DdXN0b20gUENCczwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPGxpPlNrZXRjaGluZzwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+UGFydGljaXBhdG9yeSBEZXNpZ248L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPkludGVyYWN0aW9uIERlc2lnbjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+QmxlbmRlcjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+QWRvYmUgUGhvdG9zaG9wLCBpbkRlc2lnbiAmIElsbHVzdHJhdG9yPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuXHRcdFx0XHRcdFx0PC9DYXJkPlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdDxDb2wgbWQ9XCIxMlwiIGxnPVwiNFwiPlxuXHRcdFx0XHRcdFx0PENhcmQgY2xhc3NOYW1lPVwiZnJvbnRlbmRfY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxDYXJkVGl0bGU+PGgxPkZyb250ZW5kPC9oMT48L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIDxsaT5IVE1MICYgQ1NTPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5KYXZhU2NyaXB0PC9saT5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPmpRdWVyeTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5Cb290c3RyYXA8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDxsaT5SZWFjdC5KUzwvbGk+XG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5OZXh0LkpTPC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8bGk+Tm9kZS5KUzwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+bnBtPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuXHRcdFx0XHRcdFx0PC9DYXJkPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGxlclwiLz5cblx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ8Q2FyZCBjbGFzc05hbWU9XCJiYWNrZW5kX2NvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHQ8Q2FyZFRpdGxlPjxoMT5CYWNrZW5kPC9oMT48L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIDxsaT5KYXZhPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5DIzwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+U1FMPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuXHRcdFx0XHRcdFx0PC9DYXJkPlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdDxDb2wgbWQ9XCIxMlwiIGxnPVwiNFwiPlxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwidG9vbHNfY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxDYXJkVGl0bGU+PGgxPlRvb2xzICYgSURFczwvaDE+PC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICA8bGk+SW50ZWxsaUogU3R1ZGlvPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5BbmRyb2lkIFN0dWRpbzwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+VW5pdHk8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlZpc3VhbCBTdHVkaW8gKENvZGUpPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5HaXQ8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XG5cdFx0XHRcdFx0XHQ8L0NhcmQ+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsbGVyXCIvPlxuXG5cdFx0XHRcdFx0XHQ8Q2FyZCBjbGFzc05hbWU9XCJ0cmlhdGhsb25fY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxDYXJkVGl0bGU+PGgxPlRyaWF0aGxldGU8L2gxPjwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgPGxpPkthcnJlYsOma3NtaW5kZSBUcmlhdGxvbjo8L2xpPlxuICAgICAgICAgICAgICAgICAgKDk1MG0sIDUwa20sIDEwLDVrbSlcbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjFzdDogMzozNjo0NTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT4ybmQ6IDM6MTM6MzA8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDxsaT5BYXJodXMgS01EIElyb25tYW46PC9saT5cbiAgICAgICAgICAgICAgICAgICgxNTAwbSwgNDVrbSwgMTBrbSlcbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjFzdDogMzowNjozNTwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XG5cdFx0XHRcdFx0XHQ8L0NhcmQ+XG5cdFx0XHRcdFxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHQ8L1Jvdz5cblxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0aDEge1xuXHRcdFx0XHRcdFx0Y29sb3I6IGJsYWNrO1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMTBweDtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLmNhcmQtdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dWwge1xuXHRcdFx0XHRcdFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHRsaSB7XG5cdFx0XHRcdFx0XHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMzAlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQuc2tpbGxzX2NvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHQvKmJhY2tncm91bmQ6ICMwYzBjMGM7Ki9cblx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiA0dnc7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdC8qZGlzcGxheTogZ3JpZDtcblx0XHRcdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG5cdFx0XHRcdFx0XHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCA0dncpO1xuXHRcdFx0XHRcdFx0Z3JpZC1nYXA6IDIwcHg7Ki9cblx0XHRcdFx0XHR9IFxuICAgICAgICAgIFxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkzKSB7XG4gICAgICAgICAgICAuZmlsbGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG5cdFx0XHRcdGB9PC9zdHlsZT5cblxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNraWxsczsiXX0= */\n/*@ sourceURL=/Users/Winther/Dropbox/Jobans\xF8gning/Portfolio/frederik/pages/skills.js */"));
    }
  }]);

  return Skills;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ })

})
//# sourceMappingURL=index.js.87f52f9129b651b0b0d6.hot-update.js.map