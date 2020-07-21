webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var _global_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../global/styles */ "./global/styles.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/Header */ "./components/Header.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../components/Footer */ "./components/Footer.jsx");
/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../components/Wrapper */ "./components/Wrapper.jsx");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../components/Container */ "./components/Container.jsx");
/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Note */ "./components/Note.jsx");
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../components/Section */ "./components/Section.jsx");


var _jsxFileName = "/Users/darioaschero/Downloads/zw0vv (1)/components/Layout.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }














var Main = _components_Wrapper__WEBPACK_IMPORTED_MODULE_9__["default"].withComponent("main", {
  target: "e1705oa02",
  label: "Main"
});
var textSyles = {
  headlineHuge: {
    "fontFamily": "Inter, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
    "fontSize": "19vw",
    "lineHeight": "0.9950248756218905",
    "fontWeight": "700",
    "letterSpacing": "-0.05em",
    "@media (min-width: 1320px)": {
      "fontSize": "12.6rem"
    }
  },
  headlineXxl: {
    "fontFamily": "Inter, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
    "fontSize": "2.894821933274881rem",
    "lineHeight": "1.1235955056179774",
    "fontWeight": "500",
    "letterSpacing": "-0.05em",
    "@media (min-width: 768px)": {
      "fontSize": "6.722050113026419rem"
    }
  },
  headlineXl: {
    "fontFamily": "Inter, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
    "fontSize": "1.0533337141457rem",
    "lineHeight": "1.1235955056179774",
    "fontWeight": "700",
    "letterSpacing": "-0.025em",
    "@media (min-width: 768px)": {
      "fontWeight": "500",
      "fontSize": "2.894821933274881rem"
    }
  },
  headline: {
    "fontFamily": "Inter, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
    "fontSize": "1.0533337141457rem",
    "lineHeight": "1.1235955056179774",
    "fontWeight": "700",
    "letterSpacing": "-0.025em",
    "@media (min-width: 768px)": {
      "fontSize": "1.4754277295595906rem"
    }
  },
  leadText: {
    "fontFamily": "Inter, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
    "fontSize": "1.0533337141457rem",
    "lineHeight": "1.2640449438202246",
    "fontWeight": "500",
    "letterSpacing": "-0.025em",
    "@media (min-width: 768px)": {
      "fontSize": "1.4754277295595906rem"
    }
  },
  text: {
    "fontFamily": "Inter, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
    "fontSize": "0.89rem",
    "lineHeight": "1.4044943820224718",
    "fontWeight": "500"
  },
  annotation: {
    "fontFamily": "IBM Plex Mono, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace",
    "fontSize": "0.6710824742276663rem",
    "lineHeight": "1.1968085106382977",
    "fontWeight": "400",
    "fontStyle": "italic",
    "letterSpacing": "0"
  },
  nav: {},
  meta: {}
};

var _ref = false ? undefined : {
  name: "1dz2m4l-Brand",
  styles: "height:60vh;;label:Brand;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXJpb2FzY2hlcm8vRG93bmxvYWRzL3p3MHZ2ICgxKS9jb21wb25lbnRzL0xheW91dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NLIiwiZmlsZSI6Ii9Vc2Vycy9kYXJpb2FzY2hlcm8vRG93bmxvYWRzL3p3MHZ2ICgxKS9jb21wb25lbnRzL0xheW91dC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuaW1wb3J0IHsgTURYUHJvdmlkZXIgfSBmcm9tIFwiQG1keC1qcy9yZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi8uLi9nbG9iYWwvc3R5bGVzXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLy4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLy4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgV3JhcHBlciBmcm9tIFwiLi8uLi9jb21wb25lbnRzL1dyYXBwZXJcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vLi4vY29tcG9uZW50cy9Db250YWluZXJcIjtcbmltcG9ydCBOb3RlIGZyb20gXCIuL05vdGVcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLy4uL2NvbXBvbmVudHMvU2VjdGlvblwiO1xuaW1wb3J0IHR3LCB7IHN0eWxlZCwgY3NzIH0gZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgTWFpbiA9IFdyYXBwZXIud2l0aENvbXBvbmVudChcIm1haW5cIik7XG5cblxuXG5jb25zdCB0ZXh0U3lsZXMgPSB7XG4gIGhlYWRsaW5lSHVnZTogdHdgICAgZm9udC1zYW5zICAgIHRleHQtbG9nb0ZsdWlkICAgbGVhZGluZy1kaXNwbGF5LW5vbmUgICBmb250LWJvbGQgICB0cmFja2luZy10aWdodGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhsOnRleHQtbG9nb0NvbnRhaW5lZGAsXG4gIGhlYWRsaW5lWHhsOiB0d2AgICAgZm9udC1zYW5zICAgICAgIHRleHQtc2Fucy03ICAgICAgbGVhZGluZy1zYW5zLW5vbmUgICAgICBmb250LW1lZGl1bSAgIHRyYWNraW5nLXRpZ2h0ZXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1kOnRleHQtc2Fucy0xMmAsXG4gIGhlYWRsaW5lWGw6IHR3YCAgICAgZm9udC1zYW5zICAgICAgIHRleHQtc2Fucy0xICAgICAgbGVhZGluZy1zYW5zLW5vbmUgICAgICBmb250LWJvbGQgbWQ6Zm9udC1tZWRpdW0gICB0cmFja2luZy10aWdodCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWQ6dGV4dC1zYW5zLTdgLFxuICBoZWFkbGluZTogdHdgICAgICAgIGZvbnQtc2FucyAgICAgICB0ZXh0LXNhbnMtMSAgICAgIGxlYWRpbmctc2Fucy1ub25lICAgICAgZm9udC1ib2xkICAgdHJhY2tpbmctdGlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWQ6dGV4dC1zYW5zLTNgLFxuICBsZWFkVGV4dDogdHdgICAgICAgIGZvbnQtc2FucyAgICAgICB0ZXh0LXNhbnMtMSAgICAgIGxlYWRpbmctc2Fucy10aWdodCAgICAgZm9udC1tZWRpdW0gICB0cmFja2luZy10aWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZDp0ZXh0LXNhbnMtMyAgICBgLFxuICB0ZXh0OiAgICAgdHdgICAgICAgIGZvbnQtc2FucyAgICAgICB0ZXh0LXNhbnMtMCAgICAgIGxlYWRpbmctc2Fucy1zbnVnICAgICAgZm9udC1tZWRpdW0gYCxcbiAgYW5ub3RhdGlvbjogdHdgICAgICBmb250LW1vbm8gICAgICAgdGV4dC1tb25vLS0yICAgICBsZWFkaW5nLW1vbm8tdGlnaHQgICAgIGZvbnQtbm9ybWFsIGl0YWxpYyB0cmFja2luZy1ub3JtYWxgLFxuICBuYXY6IHR3YCAgYCxcbiAgbWV0YTogdHdgICBgLFxufTtcblxuY29uc3QgQnJhbmQgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+IFtcbiAgdHdgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWVuZCBtYi0xNmAsXG4gIGNzc2AgaGVpZ2h0OjYwdmg7YFxuICBcbl0pO1xuXG5jb25zdCBUeXBvZ3JhcGh5ID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiBbXG5cbiAgY3NzYFxuICAgICR7dGV4dFN5bGVzLnRleHR9XG4gICAgKi5pcy1sZWFkaW5neyR7dGV4dFN5bGVzLmxlYWRUZXh0fX1cbiAgICBoMSB7JHt0ZXh0U3lsZXMuaGVhZGxpbmVIdWdlfSAke3R3YCBtdC0xMGB9fVxuICAgIGgyIHske3RleHRTeWxlcy5oZWFkbGluZVh4bH0gJHt0d2AgbWItMTBgfX1cbiAgICBoMyB7JHt0ZXh0U3lsZXMuaGVhZGxpbmVYbH0gJHt0d2AgbWItNWB9fVxuICAgIGg0IHske3RleHRTeWxlcy5oZWFkbGluZX19XG4gICAgLmFubm90YXRpb24gKnske3RleHRTeWxlcy5hbm5vdGF0aW9ufX1cbiAgICBwLCBoNCwgb2wsIHVsIHsgJHt0d2AgbWItMyBgfX1cbiAgICBwIHsgJHt0d2AgbWItMyBtYXgtdy1tZWFzdXJlYH19XG4gICAgb2wge1xuICAgICAgY291bnRlci1yZXNldDogb2wtY291bnRlcjtcbiAgICB9XG4gICAgb2wgbGkge1xuICAgICAgY291bnRlci1pbmNyZW1lbnQ6IG9sLWNvdW50ZXI7XG4gICAgXG4gICAgICAke3R3YCByZWxhdGl2ZWB9XG4gICAgICA6OmJlZm9yZXtcbiAgICAgICAgY29udGVudDogY291bnRlcihvbC1jb3VudGVyKTtcbiAgICAgICAgJHt0d2AgZmxvYXQtbGVmdCB3LXUxMCB4bDp3LTQwIGgtZnVsbCBtdC0xYH1cbiAgICAgICAgJHt0ZXh0U3lsZXMudGV4dH1cbiAgICAgIH1cbiAgICAgIDo6YWZ0ZXJ7XG4gICAgICAgIGNvbnRlbnQ6Jyc7XG4gICAgICAgICR7dHdgICBoLTEgYm9yZGVyLXQgYm9yZGVyLWN1cnJlbnQgYmxvY2sgYWJzb2x1dGVgfVxuICAgICAgICB0b3A6IDAuNTVlbTtcbiAgICAgICAgbGVmdDogMS4yNWVtO1xuICAgICAgICByaWdodDogY2FsYyggNzUlICsgMS4yNWVtICk7XG4gICAgICB9XG4gICAgfVxuICBgLFxuXSk7XG5cbmNvbnN0IG1kQ29tcG9uZW50cyA9IHtcbiAgQnJhbmQ6IChwcm9wcykgPT4gPEJyYW5kIHsuLi5wcm9wc30gLz4sXG4gIFNlY3Rpb246IChwcm9wcykgPT4gPFNlY3Rpb24gey4uLnByb3BzfSAvPixcbiAgTm90ZTogKHByb3BzKSA9PiA8Tm90ZSB7Li4ucHJvcHN9IC8+XG59O1xuLy9saTogcHJvcHMgPT4gPExpIHsuLi5wcm9wc30gLz5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7XG4gIGNoaWxkcmVuLFxuICB0aXRsZSA9IFwiRXZlbnRpdml6ZVwiLFxufSkge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxHbG9iYWwgc3R5bGVzPXtzdHlsZXN9IC8+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxNRFhQcm92aWRlciBjb21wb25lbnRzPXttZENvbXBvbmVudHN9PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPE1haW4+XG4gICAgICAgICAgXG4gICAgICAgICAgPENvbnRhaW5lcj57Y2hpbGRyZW59PC9Db250YWluZXI+XG4gICAgICAgICAgXG4gICAgICAgXG4gICAgICAgIFxuICAgICAgICAgXG4gICAgICAgIDwvTWFpbj5cbiAgICAgICAgPEZvb3Rlci8+XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvTURYUHJvdmlkZXI+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn1cbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _Brand = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__["default"])("div", {
  target: "e1705oa00",
  label: "Brand"
})(function (_ref2) {
  var theme = _ref2.theme;
  return [{
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "flex-end",
    "marginBottom": "4rem"
  }, _ref];
}, false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXJpb2FzY2hlcm8vRG93bmxvYWRzL3p3MHZ2ICgxKS9jb21wb25lbnRzL0xheW91dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NjIiwiZmlsZSI6Ii9Vc2Vycy9kYXJpb2FzY2hlcm8vRG93bmxvYWRzL3p3MHZ2ICgxKS9jb21wb25lbnRzL0xheW91dC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuaW1wb3J0IHsgTURYUHJvdmlkZXIgfSBmcm9tIFwiQG1keC1qcy9yZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi8uLi9nbG9iYWwvc3R5bGVzXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLy4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLy4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgV3JhcHBlciBmcm9tIFwiLi8uLi9jb21wb25lbnRzL1dyYXBwZXJcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vLi4vY29tcG9uZW50cy9Db250YWluZXJcIjtcbmltcG9ydCBOb3RlIGZyb20gXCIuL05vdGVcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLy4uL2NvbXBvbmVudHMvU2VjdGlvblwiO1xuaW1wb3J0IHR3LCB7IHN0eWxlZCwgY3NzIH0gZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgTWFpbiA9IFdyYXBwZXIud2l0aENvbXBvbmVudChcIm1haW5cIik7XG5cblxuXG5jb25zdCB0ZXh0U3lsZXMgPSB7XG4gIGhlYWRsaW5lSHVnZTogdHdgICAgZm9udC1zYW5zICAgIHRleHQtbG9nb0ZsdWlkICAgbGVhZGluZy1kaXNwbGF5LW5vbmUgICBmb250LWJvbGQgICB0cmFja2luZy10aWdodGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhsOnRleHQtbG9nb0NvbnRhaW5lZGAsXG4gIGhlYWRsaW5lWHhsOiB0d2AgICAgZm9udC1zYW5zICAgICAgIHRleHQtc2Fucy03ICAgICAgbGVhZGluZy1zYW5zLW5vbmUgICAgICBmb250LW1lZGl1bSAgIHRyYWNraW5nLXRpZ2h0ZXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1kOnRleHQtc2Fucy0xMmAsXG4gIGhlYWRsaW5lWGw6IHR3YCAgICAgZm9udC1zYW5zICAgICAgIHRleHQtc2Fucy0xICAgICAgbGVhZGluZy1zYW5zLW5vbmUgICAgICBmb250LWJvbGQgbWQ6Zm9udC1tZWRpdW0gICB0cmFja2luZy10aWdodCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWQ6dGV4dC1zYW5zLTdgLFxuICBoZWFkbGluZTogdHdgICAgICAgIGZvbnQtc2FucyAgICAgICB0ZXh0LXNhbnMtMSAgICAgIGxlYWRpbmctc2Fucy1ub25lICAgICAgZm9udC1ib2xkICAgdHJhY2tpbmctdGlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWQ6dGV4dC1zYW5zLTNgLFxuICBsZWFkVGV4dDogdHdgICAgICAgIGZvbnQtc2FucyAgICAgICB0ZXh0LXNhbnMtMSAgICAgIGxlYWRpbmctc2Fucy10aWdodCAgICAgZm9udC1tZWRpdW0gICB0cmFja2luZy10aWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZDp0ZXh0LXNhbnMtMyAgICBgLFxuICB0ZXh0OiAgICAgdHdgICAgICAgIGZvbnQtc2FucyAgICAgICB0ZXh0LXNhbnMtMCAgICAgIGxlYWRpbmctc2Fucy1zbnVnICAgICAgZm9udC1tZWRpdW0gYCxcbiAgYW5ub3RhdGlvbjogdHdgICAgICBmb250LW1vbm8gICAgICAgdGV4dC1tb25vLS0yICAgICBsZWFkaW5nLW1vbm8tdGlnaHQgICAgIGZvbnQtbm9ybWFsIGl0YWxpYyB0cmFja2luZy1ub3JtYWxgLFxuICBuYXY6IHR3YCAgYCxcbiAgbWV0YTogdHdgICBgLFxufTtcblxuY29uc3QgQnJhbmQgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+IFtcbiAgdHdgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWVuZCBtYi0xNmAsXG4gIGNzc2AgaGVpZ2h0OjYwdmg7YFxuICBcbl0pO1xuXG5jb25zdCBUeXBvZ3JhcGh5ID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiBbXG5cbiAgY3NzYFxuICAgICR7dGV4dFN5bGVzLnRleHR9XG4gICAgKi5pcy1sZWFkaW5neyR7dGV4dFN5bGVzLmxlYWRUZXh0fX1cbiAgICBoMSB7JHt0ZXh0U3lsZXMuaGVhZGxpbmVIdWdlfSAke3R3YCBtdC0xMGB9fVxuICAgIGgyIHske3RleHRTeWxlcy5oZWFkbGluZVh4bH0gJHt0d2AgbWItMTBgfX1cbiAgICBoMyB7JHt0ZXh0U3lsZXMuaGVhZGxpbmVYbH0gJHt0d2AgbWItNWB9fVxuICAgIGg0IHske3RleHRTeWxlcy5oZWFkbGluZX19XG4gICAgLmFubm90YXRpb24gKnske3RleHRTeWxlcy5hbm5vdGF0aW9ufX1cbiAgICBwLCBoNCwgb2wsIHVsIHsgJHt0d2AgbWItMyBgfX1cbiAgICBwIHsgJHt0d2AgbWItMyBtYXgtdy1tZWFzdXJlYH19XG4gICAgb2wge1xuICAgICAgY291bnRlci1yZXNldDogb2wtY291bnRlcjtcbiAgICB9XG4gICAgb2wgbGkge1xuICAgICAgY291bnRlci1pbmNyZW1lbnQ6IG9sLWNvdW50ZXI7XG4gICAgXG4gICAgICAke3R3YCByZWxhdGl2ZWB9XG4gICAgICA6OmJlZm9yZXtcbiAgICAgICAgY29udGVudDogY291bnRlcihvbC1jb3VudGVyKTtcbiAgICAgICAgJHt0d2AgZmxvYXQtbGVmdCB3LXUxMCB4bDp3LTQwIGgtZnVsbCBtdC0xYH1cbiAgICAgICAgJHt0ZXh0U3lsZXMudGV4dH1cbiAgICAgIH1cbiAgICAgIDo6YWZ0ZXJ7XG4gICAgICAgIGNvbnRlbnQ6Jyc7XG4gICAgICAgICR7dHdgICBoLTEgYm9yZGVyLXQgYm9yZGVyLWN1cnJlbnQgYmxvY2sgYWJzb2x1dGVgfVxuICAgICAgICB0b3A6IDAuNTVlbTtcbiAgICAgICAgbGVmdDogMS4yNWVtO1xuICAgICAgICByaWdodDogY2FsYyggNzUlICsgMS4yNWVtICk7XG4gICAgICB9XG4gICAgfVxuICBgLFxuXSk7XG5cbmNvbnN0IG1kQ29tcG9uZW50cyA9IHtcbiAgQnJhbmQ6IChwcm9wcykgPT4gPEJyYW5kIHsuLi5wcm9wc30gLz4sXG4gIFNlY3Rpb246IChwcm9wcykgPT4gPFNlY3Rpb24gey4uLnByb3BzfSAvPixcbiAgTm90ZTogKHByb3BzKSA9PiA8Tm90ZSB7Li4ucHJvcHN9IC8+XG59O1xuLy9saTogcHJvcHMgPT4gPExpIHsuLi5wcm9wc30gLz5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7XG4gIGNoaWxkcmVuLFxuICB0aXRsZSA9IFwiRXZlbnRpdml6ZVwiLFxufSkge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxHbG9iYWwgc3R5bGVzPXtzdHlsZXN9IC8+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxNRFhQcm92aWRlciBjb21wb25lbnRzPXttZENvbXBvbmVudHN9PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPE1haW4+XG4gICAgICAgICAgXG4gICAgICAgICAgPENvbnRhaW5lcj57Y2hpbGRyZW59PC9Db250YWluZXI+XG4gICAgICAgICAgXG4gICAgICAgXG4gICAgICAgIFxuICAgICAgICAgXG4gICAgICAgIDwvTWFpbj5cbiAgICAgICAgPEZvb3Rlci8+XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvTURYUHJvdmlkZXI+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn1cbiJdfQ== */");

var Typography = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__["default"])("div", {
  target: "e1705oa01",
  label: "Typography"
})(function (_ref3) {
  var theme = _ref3.theme;
  return [
  /*#__PURE__*/
  Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])(textSyles.text, " *.is-leading{", textSyles.leadText, "}h1{", textSyles.headlineHuge, " margin-top:2.5rem;}h2{", textSyles.headlineXxl, " margin-bottom:2.5rem;}h3{", textSyles.headlineXl, " margin-bottom:1.25rem;}h4{", textSyles.headline, "}.annotation *{", textSyles.annotation, "}p,h4,ol,ul{margin-bottom:0.75rem;}p{margin-bottom:0.75rem;max-width:55ch;}ol{counter-reset:ol-counter;}ol li{counter-increment:ol-counter;position:relative;::before{content:counter(ol-counter);float:left;width:15.151515151515152vw;height:100%;margin-top:0.25rem;@media (min-width: 1320px){width:10rem;} ", textSyles.text, "}::after{content:'';height:0.25rem;border-top-width:1px;border-color:currentColor;display:block;position:absolute; top:0.55em;left:1.25em;right:calc( 75% + 1.25em );}};label:Typography;" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXJpb2FzY2hlcm8vRG93bmxvYWRzL3p3MHZ2ICgxKS9jb21wb25lbnRzL0xheW91dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENLIiwiZmlsZSI6Ii9Vc2Vycy9kYXJpb2FzY2hlcm8vRG93bmxvYWRzL3p3MHZ2ICgxKS9jb21wb25lbnRzL0xheW91dC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuaW1wb3J0IHsgTURYUHJvdmlkZXIgfSBmcm9tIFwiQG1keC1qcy9yZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi8uLi9nbG9iYWwvc3R5bGVzXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLy4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLy4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgV3JhcHBlciBmcm9tIFwiLi8uLi9jb21wb25lbnRzL1dyYXBwZXJcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vLi4vY29tcG9uZW50cy9Db250YWluZXJcIjtcbmltcG9ydCBOb3RlIGZyb20gXCIuL05vdGVcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLy4uL2NvbXBvbmVudHMvU2VjdGlvblwiO1xuaW1wb3J0IHR3LCB7IHN0eWxlZCwgY3NzIH0gZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuY29uc3QgTWFpbiA9IFdyYXBwZXIud2l0aENvbXBvbmVudChcIm1haW5cIik7XG5cblxuXG5jb25zdCB0ZXh0U3lsZXMgPSB7XG4gIGhlYWRsaW5lSHVnZTogdHdgICAgZm9udC1zYW5zICAgIHRleHQtbG9nb0ZsdWlkICAgbGVhZGluZy1kaXNwbGF5LW5vbmUgICBmb250LWJvbGQgICB0cmFja2luZy10aWdodGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhsOnRleHQtbG9nb0NvbnRhaW5lZGAsXG4gIGhlYWRsaW5lWHhsOiB0d2AgICAgZm9udC1zYW5zICAgICAgIHRleHQtc2Fucy03ICAgICAgbGVhZGluZy1zYW5zLW5vbmUgICAgICBmb250LW1lZGl1bSAgIHRyYWNraW5nLXRpZ2h0ZXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1kOnRleHQtc2Fucy0xMmAsXG4gIGhlYWRsaW5lWGw6IHR3YCAgICAgZm9udC1zYW5zICAgICAgIHRleHQtc2Fucy0xICAgICAgbGVhZGluZy1zYW5zLW5vbmUgICAgICBmb250LWJvbGQgbWQ6Zm9udC1tZWRpdW0gICB0cmFja2luZy10aWdodCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWQ6dGV4dC1zYW5zLTdgLFxuICBoZWFkbGluZTogdHdgICAgICAgIGZvbnQtc2FucyAgICAgICB0ZXh0LXNhbnMtMSAgICAgIGxlYWRpbmctc2Fucy1ub25lICAgICAgZm9udC1ib2xkICAgdHJhY2tpbmctdGlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWQ6dGV4dC1zYW5zLTNgLFxuICBsZWFkVGV4dDogdHdgICAgICAgIGZvbnQtc2FucyAgICAgICB0ZXh0LXNhbnMtMSAgICAgIGxlYWRpbmctc2Fucy10aWdodCAgICAgZm9udC1tZWRpdW0gICB0cmFja2luZy10aWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZDp0ZXh0LXNhbnMtMyAgICBgLFxuICB0ZXh0OiAgICAgdHdgICAgICAgIGZvbnQtc2FucyAgICAgICB0ZXh0LXNhbnMtMCAgICAgIGxlYWRpbmctc2Fucy1zbnVnICAgICAgZm9udC1tZWRpdW0gYCxcbiAgYW5ub3RhdGlvbjogdHdgICAgICBmb250LW1vbm8gICAgICAgdGV4dC1tb25vLS0yICAgICBsZWFkaW5nLW1vbm8tdGlnaHQgICAgIGZvbnQtbm9ybWFsIGl0YWxpYyB0cmFja2luZy1ub3JtYWxgLFxuICBuYXY6IHR3YCAgYCxcbiAgbWV0YTogdHdgICBgLFxufTtcblxuY29uc3QgQnJhbmQgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+IFtcbiAgdHdgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWVuZCBtYi0xNmAsXG4gIGNzc2AgaGVpZ2h0OjYwdmg7YFxuICBcbl0pO1xuXG5jb25zdCBUeXBvZ3JhcGh5ID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiBbXG5cbiAgY3NzYFxuICAgICR7dGV4dFN5bGVzLnRleHR9XG4gICAgKi5pcy1sZWFkaW5neyR7dGV4dFN5bGVzLmxlYWRUZXh0fX1cbiAgICBoMSB7JHt0ZXh0U3lsZXMuaGVhZGxpbmVIdWdlfSAke3R3YCBtdC0xMGB9fVxuICAgIGgyIHske3RleHRTeWxlcy5oZWFkbGluZVh4bH0gJHt0d2AgbWItMTBgfX1cbiAgICBoMyB7JHt0ZXh0U3lsZXMuaGVhZGxpbmVYbH0gJHt0d2AgbWItNWB9fVxuICAgIGg0IHske3RleHRTeWxlcy5oZWFkbGluZX19XG4gICAgLmFubm90YXRpb24gKnske3RleHRTeWxlcy5hbm5vdGF0aW9ufX1cbiAgICBwLCBoNCwgb2wsIHVsIHsgJHt0d2AgbWItMyBgfX1cbiAgICBwIHsgJHt0d2AgbWItMyBtYXgtdy1tZWFzdXJlYH19XG4gICAgb2wge1xuICAgICAgY291bnRlci1yZXNldDogb2wtY291bnRlcjtcbiAgICB9XG4gICAgb2wgbGkge1xuICAgICAgY291bnRlci1pbmNyZW1lbnQ6IG9sLWNvdW50ZXI7XG4gICAgXG4gICAgICAke3R3YCByZWxhdGl2ZWB9XG4gICAgICA6OmJlZm9yZXtcbiAgICAgICAgY29udGVudDogY291bnRlcihvbC1jb3VudGVyKTtcbiAgICAgICAgJHt0d2AgZmxvYXQtbGVmdCB3LXUxMCB4bDp3LTQwIGgtZnVsbCBtdC0xYH1cbiAgICAgICAgJHt0ZXh0U3lsZXMudGV4dH1cbiAgICAgIH1cbiAgICAgIDo6YWZ0ZXJ7XG4gICAgICAgIGNvbnRlbnQ6Jyc7XG4gICAgICAgICR7dHdgICBoLTEgYm9yZGVyLXQgYm9yZGVyLWN1cnJlbnQgYmxvY2sgYWJzb2x1dGVgfVxuICAgICAgICB0b3A6IDAuNTVlbTtcbiAgICAgICAgbGVmdDogMS4yNWVtO1xuICAgICAgICByaWdodDogY2FsYyggNzUlICsgMS4yNWVtICk7XG4gICAgICB9XG4gICAgfVxuICBgLFxuXSk7XG5cbmNvbnN0IG1kQ29tcG9uZW50cyA9IHtcbiAgQnJhbmQ6IChwcm9wcykgPT4gPEJyYW5kIHsuLi5wcm9wc30gLz4sXG4gIFNlY3Rpb246IChwcm9wcykgPT4gPFNlY3Rpb24gey4uLnByb3BzfSAvPixcbiAgTm90ZTogKHByb3BzKSA9PiA8Tm90ZSB7Li4ucHJvcHN9IC8+XG59O1xuLy9saTogcHJvcHMgPT4gPExpIHsuLi5wcm9wc30gLz5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7XG4gIGNoaWxkcmVuLFxuICB0aXRsZSA9IFwiRXZlbnRpdml6ZVwiLFxufSkge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxHbG9iYWwgc3R5bGVzPXtzdHlsZXN9IC8+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxNRFhQcm92aWRlciBjb21wb25lbnRzPXttZENvbXBvbmVudHN9PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPE1haW4+XG4gICAgICAgICAgXG4gICAgICAgICAgPENvbnRhaW5lcj57Y2hpbGRyZW59PC9Db250YWluZXI+XG4gICAgICAgICAgXG4gICAgICAgXG4gICAgICAgIFxuICAgICAgICAgXG4gICAgICAgIDwvTWFpbj5cbiAgICAgICAgPEZvb3Rlci8+XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvTURYUHJvdmlkZXI+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn1cbiJdfQ== */"))];
}, false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXJpb2FzY2hlcm8vRG93bmxvYWRzL3p3MHZ2ICgxKS9jb21wb25lbnRzL0xheW91dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NtQiIsImZpbGUiOiIvVXNlcnMvZGFyaW9hc2NoZXJvL0Rvd25sb2Fkcy96dzB2diAoMSkvY29tcG9uZW50cy9MYXlvdXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCB7IE1EWFByb3ZpZGVyIH0gZnJvbSBcIkBtZHgtanMvcmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vLi4vZ2xvYmFsL3N0eWxlc1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi8uLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi8uLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IFdyYXBwZXIgZnJvbSBcIi4vLi4vY29tcG9uZW50cy9XcmFwcGVyXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLy4uL2NvbXBvbmVudHMvQ29udGFpbmVyXCI7XG5pbXBvcnQgTm90ZSBmcm9tIFwiLi9Ob3RlXCI7XG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi8uLi9jb21wb25lbnRzL1NlY3Rpb25cIjtcbmltcG9ydCB0dywgeyBzdHlsZWQsIGNzcyB9IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5cbmNvbnN0IE1haW4gPSBXcmFwcGVyLndpdGhDb21wb25lbnQoXCJtYWluXCIpO1xuXG5cblxuY29uc3QgdGV4dFN5bGVzID0ge1xuICBoZWFkbGluZUh1Z2U6IHR3YCAgIGZvbnQtc2FucyAgICB0ZXh0LWxvZ29GbHVpZCAgIGxlYWRpbmctZGlzcGxheS1ub25lICAgZm9udC1ib2xkICAgdHJhY2tpbmctdGlnaHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bDp0ZXh0LWxvZ29Db250YWluZWRgLFxuICBoZWFkbGluZVh4bDogdHdgICAgIGZvbnQtc2FucyAgICAgICB0ZXh0LXNhbnMtNyAgICAgIGxlYWRpbmctc2Fucy1ub25lICAgICAgZm9udC1tZWRpdW0gICB0cmFja2luZy10aWdodGVyIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZDp0ZXh0LXNhbnMtMTJgLFxuICBoZWFkbGluZVhsOiB0d2AgICAgIGZvbnQtc2FucyAgICAgICB0ZXh0LXNhbnMtMSAgICAgIGxlYWRpbmctc2Fucy1ub25lICAgICAgZm9udC1ib2xkIG1kOmZvbnQtbWVkaXVtICAgdHJhY2tpbmctdGlnaHQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1kOnRleHQtc2Fucy03YCxcbiAgaGVhZGxpbmU6IHR3YCAgICAgICBmb250LXNhbnMgICAgICAgdGV4dC1zYW5zLTEgICAgICBsZWFkaW5nLXNhbnMtbm9uZSAgICAgIGZvbnQtYm9sZCAgIHRyYWNraW5nLXRpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1kOnRleHQtc2Fucy0zYCxcbiAgbGVhZFRleHQ6IHR3YCAgICAgICBmb250LXNhbnMgICAgICAgdGV4dC1zYW5zLTEgICAgICBsZWFkaW5nLXNhbnMtdGlnaHQgICAgIGZvbnQtbWVkaXVtICAgdHJhY2tpbmctdGlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWQ6dGV4dC1zYW5zLTMgICAgYCxcbiAgdGV4dDogICAgIHR3YCAgICAgICBmb250LXNhbnMgICAgICAgdGV4dC1zYW5zLTAgICAgICBsZWFkaW5nLXNhbnMtc251ZyAgICAgIGZvbnQtbWVkaXVtIGAsXG4gIGFubm90YXRpb246IHR3YCAgICAgZm9udC1tb25vICAgICAgIHRleHQtbW9uby0tMiAgICAgbGVhZGluZy1tb25vLXRpZ2h0ICAgICBmb250LW5vcm1hbCBpdGFsaWMgdHJhY2tpbmctbm9ybWFsYCxcbiAgbmF2OiB0d2AgIGAsXG4gIG1ldGE6IHR3YCAgYCxcbn07XG5cbmNvbnN0IEJyYW5kID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiBbXG4gIHR3YGZsZXggZmxleC1jb2wganVzdGlmeS1lbmQgbWItMTZgLFxuICBjc3NgIGhlaWdodDo2MHZoO2BcbiAgXG5dKTtcblxuY29uc3QgVHlwb2dyYXBoeSA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gW1xuXG4gIGNzc2BcbiAgICAke3RleHRTeWxlcy50ZXh0fVxuICAgICouaXMtbGVhZGluZ3ske3RleHRTeWxlcy5sZWFkVGV4dH19XG4gICAgaDEgeyR7dGV4dFN5bGVzLmhlYWRsaW5lSHVnZX0gJHt0d2AgbXQtMTBgfX1cbiAgICBoMiB7JHt0ZXh0U3lsZXMuaGVhZGxpbmVYeGx9ICR7dHdgIG1iLTEwYH19XG4gICAgaDMgeyR7dGV4dFN5bGVzLmhlYWRsaW5lWGx9ICR7dHdgIG1iLTVgfX1cbiAgICBoNCB7JHt0ZXh0U3lsZXMuaGVhZGxpbmV9fVxuICAgIC5hbm5vdGF0aW9uICp7JHt0ZXh0U3lsZXMuYW5ub3RhdGlvbn19XG4gICAgcCwgaDQsIG9sLCB1bCB7ICR7dHdgIG1iLTMgYH19XG4gICAgcCB7ICR7dHdgIG1iLTMgbWF4LXctbWVhc3VyZWB9fVxuICAgIG9sIHtcbiAgICAgIGNvdW50ZXItcmVzZXQ6IG9sLWNvdW50ZXI7XG4gICAgfVxuICAgIG9sIGxpIHtcbiAgICAgIGNvdW50ZXItaW5jcmVtZW50OiBvbC1jb3VudGVyO1xuICAgIFxuICAgICAgJHt0d2AgcmVsYXRpdmVgfVxuICAgICAgOjpiZWZvcmV7XG4gICAgICAgIGNvbnRlbnQ6IGNvdW50ZXIob2wtY291bnRlcik7XG4gICAgICAgICR7dHdgIGZsb2F0LWxlZnQgdy11MTAgeGw6dy00MCBoLWZ1bGwgbXQtMWB9XG4gICAgICAgICR7dGV4dFN5bGVzLnRleHR9XG4gICAgICB9XG4gICAgICA6OmFmdGVye1xuICAgICAgICBjb250ZW50OicnO1xuICAgICAgICAke3R3YCAgaC0xIGJvcmRlci10IGJvcmRlci1jdXJyZW50IGJsb2NrIGFic29sdXRlYH1cbiAgICAgICAgdG9wOiAwLjU1ZW07XG4gICAgICAgIGxlZnQ6IDEuMjVlbTtcbiAgICAgICAgcmlnaHQ6IGNhbGMoIDc1JSArIDEuMjVlbSApO1xuICAgICAgfVxuICAgIH1cbiAgYCxcbl0pO1xuXG5jb25zdCBtZENvbXBvbmVudHMgPSB7XG4gIEJyYW5kOiAocHJvcHMpID0+IDxCcmFuZCB7Li4ucHJvcHN9IC8+LFxuICBTZWN0aW9uOiAocHJvcHMpID0+IDxTZWN0aW9uIHsuLi5wcm9wc30gLz4sXG4gIE5vdGU6IChwcm9wcykgPT4gPE5vdGUgey4uLnByb3BzfSAvPlxufTtcbi8vbGk6IHByb3BzID0+IDxMaSB7Li4ucHJvcHN9IC8+XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoe1xuICBjaGlsZHJlbixcbiAgdGl0bGUgPSBcIkV2ZW50aXZpemVcIixcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8R2xvYmFsIHN0eWxlcz17c3R5bGVzfSAvPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8TURYUHJvdmlkZXIgY29tcG9uZW50cz17bWRDb21wb25lbnRzfT5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxNYWluPlxuICAgICAgICAgIFxuICAgICAgICAgIDxDb250YWluZXI+e2NoaWxkcmVufTwvQ29udGFpbmVyPlxuICAgICAgICAgIFxuICAgICAgIFxuICAgICAgICBcbiAgICAgICAgIFxuICAgICAgICA8L01haW4+XG4gICAgICAgIDxGb290ZXIvPlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L01EWFByb3ZpZGVyPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */");

var mdComponents = {
  Brand: function Brand(props) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_Brand, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }));
  },
  Section: function Section(props) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_Section__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }));
  },
  Note: function Note(props) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_Note__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }));
  }
}; //li: props => <Li {...props} />

function Layout(_ref4) {
  var children = _ref4.children,
      _ref4$title = _ref4.title,
      title = _ref4$title === void 0 ? "Eventivize" : _ref4$title;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["Global"], {
    styles: _global_styles__WEBPACK_IMPORTED_MODULE_6__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, title), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__["MDXProvider"], {
    components: mdComponents,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Typography, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Main, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_Container__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, children)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }))));
}

/***/ })

})
//# sourceMappingURL=_app.js.06a59614ee1d0563ab62.hot-update.js.map