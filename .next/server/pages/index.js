"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

;// CONCATENATED MODULE: external "react/jsx-runtime"
const jsx_runtime_namespaceObject = require("react/jsx-runtime");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/components/Card/index.tsx

const Card = ({ msg  })=>{
    return /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
        children: msg
    });
};
/* harmony default export */ const components_Card = (Card);

;// CONCATENATED MODULE: ./pages/index.tsx



const HomePage = ({ message  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h1", {
                children: "Hello, world! message: "
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(components_Card, {
                msg: message
            })
        ]
    });
};
async function getServerSideProps() {
    return {
        props: {
            message: "SSR IS WORKING"
        }
    };
}
/* harmony default export */ const pages = (HomePage);


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(883));
module.exports = __webpack_exports__;

})();