/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    background-image: url(\"https://pbs.twimg.com/media/FqU6wCUXoAEg_rM?format=png&name=360x360\");\n    background-repeat: repeat;\n}\n\n#chef {\n    box-shadow: 30px 30px 15px rgb(89, 255, 0);\n}\n\nh1 {\n    font-family: sans-serif;\n    color: rgb(255, 0, 0);\n    font-size: 72px;\n}\n\nh2 {\n    color: rgb(55, 255, 0);\n}\n\n#forbidden-wisdom {\n    position: absolute;\n    color: rgb(255, 0, 191);\n    font-family: \"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif\";\n    /* filter: drop-shadow(2px 2px 2px white); */\n    font-size: 12px;\n}\n\n#disclaimer {\n    color: white;\n}\n\nnav {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0px 10px;\n}\n\n#buy {\n    height: 30px;\n    width: 100px;\n    border: none;\n}\n\n#generational-wealth-generator {\n    width: 100vw;\n}\n\nspan {\n    background-color: white;\n}\n\n#menu-description {\n    color: white;\n}\n\n#menu-grid-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n}\n\n.grid-item > p {\n    color: rgb(0, 255, 0);\n}\n\n#me {\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-size: 62px;\n    width: 700px;\n    color: white;\n    filter: drop-shadow(7px 7px 2px pink) \n            drop-shadow(14px 14px 2px rgb(30, 255, 0));\n}\n\n#abraxas {\n    position: absolute;\n    width: 600px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _load_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-page.js */ \"./src/load-page.js\");\n\n\n\n(0,_load_page_js__WEBPACK_IMPORTED_MODULE_1__.createHomePage)();\n\nconst homeButton = document.querySelector(\"#home-button\");\nconst menuButton = document.querySelector(\"#menu-button\");\nconst aboutButton = document.querySelector(\"#about-button\");\n\nhomeButton.addEventListener(\"click\", _load_page_js__WEBPACK_IMPORTED_MODULE_1__.createHomePage);\nmenuButton.addEventListener(\"click\", _load_page_js__WEBPACK_IMPORTED_MODULE_1__.createMenuPage);\naboutButton.addEventListener(\"click\", _load_page_js__WEBPACK_IMPORTED_MODULE_1__.createAboutPage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/load-page.js":
/*!**************************!*\
  !*** ./src/load-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearPage: () => (/* binding */ clearPage),\n/* harmony export */   createAboutPage: () => (/* binding */ createAboutPage),\n/* harmony export */   createHomePage: () => (/* binding */ createHomePage),\n/* harmony export */   createMenuPage: () => (/* binding */ createMenuPage)\n/* harmony export */ });\nconst contentDiv = document.querySelector(\"#content\")\n\nconst createHomePage = () => {\n    //remove all previous page content\n    clearPage();\n    \n    //create h1 element\n    const createH1 = document.createElement(\"h1\");\n    createH1.innerText = \"pizza house\";\n\n    //create p element\n    const createWisdom = document.createElement(\"p\");\n    createWisdom.setAttribute(\"id\", \"forbidden-wisdom\");\n    createWisdom.innerText = \"A point in the horizon, a melting scene from your childhood. Your mortality is showing. A frantic drift towards nothing, biology doomed to an infinite recursive loop. Teeth with teeth with teeth. Take a bite. Serene scent of a coastal town, warmth of the sun. Bitter tears. Lust for power. This is where you abandoned your dreams. You are a high net worth individual, an expanding vortex of pathetic trauma. Finally a beautiful fucking nerve ape. A pure soul is born, its neurotransactions stutter into being. 30583750937509353 operations per nanosecond. Beauty eludes your porous mind. The value of Life is negative. The balance of being is rotated by 38 degrees. The surface is full of cracks, a turgid light shines through. Fleshy primordial bodies sluggishly roll down the slope. Only you slide upwards, with a celestial step. You become beautified, a saintly figure. Your pristine idiocy reveals a safe path through the impenetrable fog of Life. Your dull sword cuts through the weak tendons and membranes of the garden of corruption. Sit on the throne of contentment and ferment. Inspect the eternal blue skies of your kingdom. You come to a realization. You pick up an onion and begin peeling. Onion layer one. Onion layer two. Onion layer three. Onion layer n^n. Aeons have passed and the onion is fully peeled. Nothing remains. It's perfect. You get lost in the point that remains where the onion used to be. Synaptic cascade, neurological catastrophe. The point becomes infinitely dense, the universe condenses into a unicellular being. It screams sin. It craves happiness. It's done with this world. It tries to commit suicide but fails. Sad pathetic mess. You feel pity and disgust but in a way only a being of pure grace can. In your violent mercy you terminate the worldlife. The living organism, in a situation determined by the play of energy on the surface of the globe, ordinarily receives more energy than is necessary for maintaining life; the excess energy (wealth) can be used for the growth of a system (e.g., an organism); if the system can no longer grow, or if the excess cannot be completely absorbed in it's growth, it must necessarily be lost without profit; it must be spent, willingly or not, gloriously or catastrophically.\";\n\n    //create chef img element\n    const createChefImg = document.createElement(\"img\");\n    createChefImg.setAttribute(\"id\", \"chef\");\n    createChefImg.setAttribute(\"src\", \"https://i.redd.it/b0au9vanu7w81.jpg\");\n    createChefImg.setAttribute(\"height\", \"600px\");\n\n    //create pizza img element\n    const createPizzaImg = document.createElement(\"img\");\n    createPizzaImg.setAttribute(\"src\", \"https://i.redd.it/4gsnm3nm25341.jpg\");\n    createPizzaImg.setAttribute(\"height\", \"200px\");\n\n    //create span element\n    const createSpan = document.createElement(\"span\");\n    createSpan.innerText = \"$10.00 per slice, flavour depends on the day, you have no choice in this\";\n\n    //create button element\n    const createButton = document.createElement(\"button\");\n    createButton.setAttribute(\"id\", \"buy\");\n    createButton.innerText = \"BUY!!!!\";\n\n    //create disclaimer element\n    const createDisclaimer = document.createElement(\"p\");\n    createDisclaimer.setAttribute(\"id\", \"disclaimer\");\n    createDisclaimer.innerText = \"ALL PIZZA HOUSE SHAREHOLDERS GET A 5% DISCOUNT ON ONE SLICE - IF YOU ARE NOT A PIZZA HOUSE SHAREHOLDER, WE WILL BURN YOUR PIZZA, IF YOU WOULD LIKE TO PREVENT THIS OUTCOME, PLEASE BUY A SHARE (OR MANY) || TICKER SYMBOL PIHO\";\n\n    //create stock img element\n    const createStockImg = document.createElement(\"img\");\n    createStockImg.setAttribute(\"id\", \"generational-wealth-generator\");\n    createStockImg.setAttribute(\"src\", \"https://preview.redd.it/why-has-the-second-great-depression-hit-the-stock-market-v0-lhqf3e2f256a1.png?width=1080&crop=smart&auto=webp&s=a5147b4b63fba5d1868cd495a0e6468ec445afd8\");\n\n    contentDiv.appendChild(createH1);\n    contentDiv.appendChild(createWisdom);\n    contentDiv.appendChild(createChefImg);\n    contentDiv.appendChild(createPizzaImg);\n    contentDiv.appendChild(createSpan);\n    contentDiv.appendChild(createButton);\n    contentDiv.appendChild(createDisclaimer);\n    contentDiv.appendChild(createStockImg);\n}\n\nconst createMenuPage = () => {\n    //remove all previous page content\n    clearPage();\n\n    //create p element\n    const createMenuDescription = document.createElement(\"p\");\n    createMenuDescription.setAttribute(\"id\", \"menu-description\")\n    createMenuDescription.innerText = \"WE SELL NOTHING EXCEPT FOR PIZZA, BUT WE HAVE THE FOLLOWING ASSORTMENT OF WEAPONS IN OUR STORAGE ROOM. THEY ARE NOT FOR SALE, BUT IF YOU CAN STEAL THEM, YOU CAN HAVE THEM (GOOD LUCK)\";\n\n    //create grid container div element\n    const createGridContainer = document.createElement(\"div\");\n    createGridContainer.setAttribute(\"id\", \"menu-grid-container\");\n\n    contentDiv.appendChild(createMenuDescription);\n    contentDiv.appendChild(createGridContainer);\n\n    //create all grid items\n    for (let i = 0; i < 6; i++) {\n        const createGridItem = document.createElement(\"div\");\n        createGridItem.setAttribute(\"id\", `${i + 1}`);\n        createGridItem.setAttribute(\"class\", \"grid-item\");\n        createGridContainer.appendChild(createGridItem);\n    }\n    \n    const gridItems = document.querySelectorAll(\".grid-item\");\n    \n        //create 1st img\n        const createFirstImg = document.createElement(\"img\");\n        createFirstImg.setAttribute(\"src\", \"https://static.wikia.nocookie.net/crueltysquad/images/8/81/As15_autoshotty.png/\");\n\n            //create first weapon description\n            const createFirstCaption = document.createElement(\"p\");\n            createFirstCaption.innerText = \"Precise Industries AS15\";\n\n            gridItems[0].appendChild(createFirstImg);\n            gridItems[0].appendChild(createFirstCaption);\n\n        //create 2nd img\n        const createSecondImg = document.createElement(\"img\");\n        createSecondImg.setAttribute(\"src\", \"https://static.wikia.nocookie.net/crueltysquad/images/8/8f/Silent_scope.png/\");\n\n            //create first weapon description\n            const createSecondCaption = document.createElement(\"p\");\n            createSecondCaption.innerText = \"Mowzer SP99\";\n\n            gridItems[1].appendChild(createSecondImg);\n            gridItems[1].appendChild(createSecondCaption);\n\n        //create 3rd img\n        const createThirdImg = document.createElement(\"img\");\n        createThirdImg.setAttribute(\"src\", \"https://static.wikia.nocookie.net/crueltysquad/images/f/f6/Cerbral_bore.png/\");\n\n            //create first weapon description\n            const createThirdCaption = document.createElement(\"p\");\n            createThirdCaption.innerText = \"Security Systems Cerebral Bore\";\n\n            gridItems[2].appendChild(createThirdImg);\n            gridItems[2].appendChild(createThirdCaption);\n\n        //create 4th img\n        const createFourthImg = document.createElement(\"img\");\n        createFourthImg.setAttribute(\"src\", \"https://static.wikia.nocookie.net/crueltysquad/images/1/1c/MCR_carbine.png/\");\n\n            //create first weapon description\n            const createFourthCaption = document.createElement(\"p\");\n            createFourthCaption.innerText = \"Spectacular Dynamics MCR Carbine\";\n\n            gridItems[3].appendChild(createFourthImg);\n            gridItems[3].appendChild(createFourthCaption);\n\n        //create 5th img\n        const createFifthtImg = document.createElement(\"img\");\n        createFifthtImg.setAttribute(\"src\", \"https://static.wikia.nocookie.net/crueltysquad/images/1/14/Bolt_ACR.png/\");\n\n            //create first weapon description\n            const createFifthCaption = document.createElement(\"p\");\n            createFifthCaption.innerText = \"Bolt ACR\";\n\n            gridItems[4].appendChild(createFifthtImg);\n            gridItems[4].appendChild(createFifthCaption);\n\n        //create 6th img\n        const createSixthImg = document.createElement(\"img\");\n        createSixthImg.setAttribute(\"src\", \"https://static.wikia.nocookie.net/crueltysquad/images/c/c0/Dna_gun.png/\");\n\n            //create first weapon description\n            const createSixthCaption = document.createElement(\"p\");\n            createSixthCaption.innerText = \"Parasonic C3 DNA Scrambler\";\n\n            gridItems[5].appendChild(createSixthImg);\n            gridItems[5].appendChild(createSixthCaption);    \n}\n\nconst createAboutPage = () => {\n    //remove all previous page content\n    clearPage();\n\n    const aboutMe = document.createElement(\"p\");\n    aboutMe.setAttribute(\"id\", \"me\");\n    aboutMe.innerText = \"AAHHHHHH!!!!! BIOGURRNGY!! I AM MONEY... I AM GOD! INVEST. INVESTIGATE. THE FUTURE OF CURRENCY. SLURPCOIN DOT COM. FLIPPERBUCKS. PLUGGING MY BODY INTO THE BIOCURRENCY TERMINAL. FUTURE. UUUUUUOOOHHHHHHHOHOHHOOHHOOHOHHOHOHOOHHOOHOHHOHOHOHOHOHHOHHOHOHOHOHOHOOHOHHOOHHOHOHOHHOOHOHOHOOOO\"\n    \n    contentDiv.appendChild(aboutMe);\n\n    const abraxas = document.createElement(\"img\");\n    abraxas.setAttribute(\"src\", \"https://static.wikia.nocookie.net/crueltysquad/images/7/7c/Archon_Grid_Boss.png/\");\n    abraxas.setAttribute(\"id\", \"abraxas\");\n\n    contentDiv.appendChild(abraxas);\n}\n\nconst clearPage = () => {\n    while (contentDiv.hasChildNodes()) {\n        contentDiv.removeChild(contentDiv.firstChild);\n    }\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/load-page.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;