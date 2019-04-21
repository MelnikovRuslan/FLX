/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/less/style.less":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/less/style.less ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ \"./node_modules/css-loader/dist/runtime/url-escape.js\");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../img/bg.jpg */ \"./src/img/bg.jpg\"));\n\n// Module\nexports.push([module.i, \".choices {\\n  width: 60%;\\n  display: flex;\\n  margin: 26px auto;\\n  justify-content: space-between;\\n}\\n.choices .choice {\\n  padding: 26px;\\n  border: 2px solid #ffffff;\\n  border-radius: 100%;\\n  transition: all 0.4s ease;\\n}\\n.choices .choice img {\\n  width: 100%;\\n  height: 100%;\\n}\\n.choices .choice:hover {\\n  cursor: pointer;\\n  background-color: #066304;\\n}\\n.control {\\n  width: 26%;\\n  margin: 36px auto;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.control #modalBtn,\\n.control #reset {\\n  padding: 6px 10px;\\n  border: none;\\n  color: #ffffff;\\n  font-size: 18px;\\n  border-radius: 12px;\\n  background-color: rgba(0, 0, 0, 0.4);\\n}\\n.control #modalBtn:hover,\\n.control #reset:hover {\\n  cursor: pointer;\\n  background-color: #087908;\\n}\\n.move-message {\\n  color: #ffffff;\\n  text-align: center;\\n  font-size: 26px;\\n  font-weight: bold;\\n}\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\nbody {\\n  background-image: url(\" + ___CSS_LOADER_URL___0___ + \");\\n  background-repeat: repeat;\\n}\\nheader {\\n  padding: 16px 0;\\n}\\nheader h1 {\\n  text-align: center;\\n  font-family: serif;\\n  color: #ffffff;\\n}\\n.score {\\n  width: 300px;\\n  margin: 0 auto;\\n  color: #ffffff;\\n  font-size: 40px;\\n  text-align: center;\\n}\\n.rules {\\n  display: none;\\n  position: fixed;\\n  z-index: 1;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  overflow: auto;\\n  background-color: #000000;\\n  background-color: rgba(0, 0, 0, 0.4);\\n}\\n.rules .rules-content {\\n  background-color: #fefefe;\\n  margin: 0 auto;\\n  padding: 50px;\\n  border: 1px solid #888;\\n  width: 80%;\\n}\\n.rules .rules-content #close {\\n  color: #aaa;\\n  float: right;\\n  font-size: 28px;\\n  font-weight: bold;\\n}\\n.rules .rules-content #close:hover,\\n.rules .rules-content #close:focus {\\n  color: black;\\n  text-decoration: none;\\n  cursor: pointer;\\n}\\n.rules .rules-content h2 {\\n  text-align: center;\\n}\\n.rules .rules-content h3 {\\n  margin-top: 24px;\\n  margin-bottom: 6px;\\n}\\n.rules .rules-content .hand-list {\\n  font-size: 18px;\\n  padding: 10px 40px;\\n}\\n.rules .rules-content .far {\\n  font-size: 50px;\\n}\\n.rules .rules-content .hend-description {\\n  display: inline;\\n  font-size: 18px;\\n}\\n.rules .rules-content #play {\\n  width: 100px;\\n  height: 36px;\\n  color: #ffffff;\\n  display: block;\\n  margin: 0 auto;\\n  margin-top: 30px;\\n  border: none;\\n  border-radius: 8px;\\n  font-weight: bold;\\n  background-color: #007688;\\n}\\n.rules .rules-content #play:hover {\\n  cursor: pointer;\\n  background-color: #087908;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/less/style.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function escape(url, needQuotes) {\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"';\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/url-escape.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/img/bg.jpg":
/*!************************!*\
  !*** ./src/img/bg.jpg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"src/img/bg.jpg\";\n\n//# sourceURL=webpack:///./src/img/bg.jpg?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners */ \"./src/js/listeners.js\");\n/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rules */ \"./src/js/rules.js\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ \"./src/js/variables.js\");\n/* harmony import */ var _less_style_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../less/style.less */ \"./src/less/style.less\");\n/* harmony import */ var _less_style_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_less_style_less__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.onload = ()=> {\r\n\tObject(_listeners__WEBPACK_IMPORTED_MODULE_0__[\"addListeners\"])();\r\n\tObject(_rules__WEBPACK_IMPORTED_MODULE_1__[\"showRules\"])();\r\n}\r\n\r\nwindow.onclick = (e)=>{\r\n\tif (e.target == _variables__WEBPACK_IMPORTED_MODULE_2__[\"rulesModal\"]) {\r\n\t\t_variables__WEBPACK_IMPORTED_MODULE_2__[\"rulesModal\"].style.display = \"none\";\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/choices.js":
/*!***************************!*\
  !*** ./src/js/choices.js ***!
  \***************************/
/*! exports provided: userChoice, compChoice, checkChoice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userChoice\", function() { return userChoice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compChoice\", function() { return compChoice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkChoice\", function() { return checkChoice; });\n/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners */ \"./src/js/listeners.js\");\n/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score */ \"./src/js/score.js\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ \"./src/js/variables.js\");\n\r\n\r\n\r\n\r\n\r\nfunction userChoice(e) {\r\n\tif(e.target.className === _variables__WEBPACK_IMPORTED_MODULE_2__[\"hands\"][0].className) {\r\n\t\te.target.style.backgroundColor = '#031B71';\r\n\t\tObject(_listeners__WEBPACK_IMPORTED_MODULE_0__[\"removeListeners\"])();\r\n\t\tcompChoice(e.target.id);\r\n\t} else if(e.target.parentElement.className === _variables__WEBPACK_IMPORTED_MODULE_2__[\"hands\"][0].className){\r\n\t\te.target.parentElement.style.backgroundColor = '#031B71';\r\n\t\tObject(_listeners__WEBPACK_IMPORTED_MODULE_0__[\"removeListeners\"])();\r\n\t\tcompChoice(e.target.parentElement.id);\r\n\t}\r\n}\r\n\r\nfunction compChoice(userChoice) {\r\n\tlet n = Math.floor(Math.random() * 3);\r\n\tlet compChoice = _variables__WEBPACK_IMPORTED_MODULE_2__[\"hands\"][n];\r\n\tcompChoice.style.backgroundColor = 'red';\r\n\tcheckChoice(userChoice, compChoice);\r\n}\r\n\r\nfunction checkChoice(userChoice, compChoice) {\r\n\tif(_variables__WEBPACK_IMPORTED_MODULE_2__[\"obj\"][userChoice].wins === compChoice.id) {\r\n\t\t_variables__WEBPACK_IMPORTED_MODULE_2__[\"score\"].userScore += 1;\r\n\t} else if(_variables__WEBPACK_IMPORTED_MODULE_2__[\"obj\"][compChoice.id].wins === userChoice) {\r\n\t\t_variables__WEBPACK_IMPORTED_MODULE_2__[\"score\"].computerScore += 1;\r\n\t}\r\n\t_variables__WEBPACK_IMPORTED_MODULE_2__[\"moveMessage\"].textContent = `Round ${_variables__WEBPACK_IMPORTED_MODULE_2__[\"score\"].round}, ${userChoice} vs ${compChoice.id}`;\r\n\t_variables__WEBPACK_IMPORTED_MODULE_2__[\"score\"].round +=1;\r\n\tObject(_score__WEBPACK_IMPORTED_MODULE_1__[\"showScore\"])(_variables__WEBPACK_IMPORTED_MODULE_2__[\"score\"].userScore, _variables__WEBPACK_IMPORTED_MODULE_2__[\"score\"].computerScore);\r\n}\n\n//# sourceURL=webpack:///./src/js/choices.js?");

/***/ }),

/***/ "./src/js/listeners.js":
/*!*****************************!*\
  !*** ./src/js/listeners.js ***!
  \*****************************/
/*! exports provided: addListeners, removeListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addListeners\", function() { return addListeners; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeListeners\", function() { return removeListeners; });\n/* harmony import */ var _choices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choices */ \"./src/js/choices.js\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ \"./src/js/variables.js\");\n\r\n\r\n\r\nfunction addListeners() {\r\n\tfor(let i = 0; i < _variables__WEBPACK_IMPORTED_MODULE_1__[\"hands\"].length; i++){\r\n\t\t_variables__WEBPACK_IMPORTED_MODULE_1__[\"hands\"][i].addEventListener('click', _choices__WEBPACK_IMPORTED_MODULE_0__[\"userChoice\"]);\r\n\t}\r\n}\r\n\r\nfunction removeListeners() {\r\n\tfor(let i = 0; i < _variables__WEBPACK_IMPORTED_MODULE_1__[\"hands\"].length; i++){\r\n\t\t_variables__WEBPACK_IMPORTED_MODULE_1__[\"hands\"][i].removeEventListener('click', _choices__WEBPACK_IMPORTED_MODULE_0__[\"userChoice\"]);\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/js/listeners.js?");

/***/ }),

/***/ "./src/js/reset.js":
/*!*************************!*\
  !*** ./src/js/reset.js ***!
  \*************************/
/*! exports provided: resetStage, restartGame, gameEnd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetStage\", function() { return resetStage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"restartGame\", function() { return restartGame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameEnd\", function() { return gameEnd; });\n/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners */ \"./src/js/listeners.js\");\n/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score */ \"./src/js/score.js\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ \"./src/js/variables.js\");\n\r\n\r\n\r\n\r\nfunction resetStage() {\r\n\tif(_variables__WEBPACK_IMPORTED_MODULE_2__[\"score\"].round <= 3){\r\n\t\tsetTimeout(function() {\r\n\t\t\tfor(let i = 0; i < _variables__WEBPACK_IMPORTED_MODULE_2__[\"hands\"].length; i++){\r\n\t\t\t\t_variables__WEBPACK_IMPORTED_MODULE_2__[\"hands\"][i].style.backgroundColor = \"\";\r\n\t\t\t}\r\n\t\t\t_variables__WEBPACK_IMPORTED_MODULE_2__[\"moveMessage\"].textContent = `Make Your Move`;\r\n\t\t\tObject(_listeners__WEBPACK_IMPORTED_MODULE_0__[\"addListeners\"])();\r\n\t\t}, 1600);\r\n\t} else {\r\n\t\tgameEnd();\r\n\t}\r\n}\r\n\r\nfunction restartGame() {\r\n\t_variables__WEBPACK_IMPORTED_MODULE_2__[\"score\"].userScore = 0;\r\n\t_variables__WEBPACK_IMPORTED_MODULE_2__[\"score\"].computerScore = 0;\r\n\t_variables__WEBPACK_IMPORTED_MODULE_2__[\"score\"].round = 1;\r\n\tObject(_score__WEBPACK_IMPORTED_MODULE_1__[\"showScore\"])(_variables__WEBPACK_IMPORTED_MODULE_2__[\"score\"].userScore, _variables__WEBPACK_IMPORTED_MODULE_2__[\"score\"].computerScore);\r\n}\r\n\r\nfunction gameEnd() {\r\n\tif(_variables__WEBPACK_IMPORTED_MODULE_2__[\"score\"].userScore > _variables__WEBPACK_IMPORTED_MODULE_2__[\"score\"].computerScore)\t{\r\n\t\t_variables__WEBPACK_IMPORTED_MODULE_2__[\"moveMessage\"].textContent = 'USER WIN PLEASE RESTART GAME';\r\n\t}else if(_variables__WEBPACK_IMPORTED_MODULE_2__[\"score\"].userScore < _variables__WEBPACK_IMPORTED_MODULE_2__[\"score\"].computerScore){\r\n\t\t_variables__WEBPACK_IMPORTED_MODULE_2__[\"moveMessage\"].textContent = 'COMPUTER WIN PLEASE RESTART GAME';\r\n\t} else {\r\n\t\t_variables__WEBPACK_IMPORTED_MODULE_2__[\"moveMessage\"].textContent = 'A DRAW PLEASE RESTART GAME';\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/js/reset.js?");

/***/ }),

/***/ "./src/js/rules.js":
/*!*************************!*\
  !*** ./src/js/rules.js ***!
  \*************************/
/*! exports provided: showRules, closeRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showRules\", function() { return showRules; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closeRules\", function() { return closeRules; });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/js/variables.js\");\n\r\n\r\nfunction showRules() {\r\n\t_variables__WEBPACK_IMPORTED_MODULE_0__[\"rulesModal\"].style.display = \"block\";\r\n}\r\n\r\nfunction closeRules() {\r\n\t_variables__WEBPACK_IMPORTED_MODULE_0__[\"rulesModal\"].style.display = \"none\";\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/rules.js?");

/***/ }),

/***/ "./src/js/score.js":
/*!*************************!*\
  !*** ./src/js/score.js ***!
  \*************************/
/*! exports provided: showScore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showScore\", function() { return showScore; });\n/* harmony import */ var _reset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset */ \"./src/js/reset.js\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ \"./src/js/variables.js\");\n\r\n\r\n\r\nfunction showScore(userScore, computerScore) {\r\n\t_variables__WEBPACK_IMPORTED_MODULE_1__[\"userScoreSpan\"].textContent = userScore;\r\n\t_variables__WEBPACK_IMPORTED_MODULE_1__[\"compScoreSpan\"].textContent = computerScore;\r\n\tObject(_reset__WEBPACK_IMPORTED_MODULE_0__[\"resetStage\"])();\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/score.js?");

/***/ }),

/***/ "./src/js/variables.js":
/*!*****************************!*\
  !*** ./src/js/variables.js ***!
  \*****************************/
/*! exports provided: rulesModal, rulesBtn, rulesClose, rulesRead, moveMessage, userScoreSpan, compScoreSpan, reset, hands, score, obj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rulesModal\", function() { return rulesModal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rulesBtn\", function() { return rulesBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rulesClose\", function() { return rulesClose; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rulesRead\", function() { return rulesRead; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveMessage\", function() { return moveMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userScoreSpan\", function() { return userScoreSpan; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compScoreSpan\", function() { return compScoreSpan; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reset\", function() { return reset; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hands\", function() { return hands; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"score\", function() { return score; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"obj\", function() { return obj; });\n/* harmony import */ var _reset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset */ \"./src/js/reset.js\");\n/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rules */ \"./src/js/rules.js\");\n\r\n\r\n\r\n\r\nlet rulesModal = document.getElementById('rules-modal');\r\nlet rulesBtn = document.getElementById('modalBtn');\r\nlet rulesClose = document.getElementById('close');\r\n\r\nlet rulesRead = document.getElementById('play');\r\nlet moveMessage = document.querySelector('.move-message');\r\nlet userScoreSpan = document.getElementById('user-score');\r\n\r\n\r\nlet compScoreSpan = document.getElementById('comp-score');\r\nlet reset = document.getElementById('reset');\r\nlet hands = document.querySelectorAll('.choice');\r\n\r\nlet score = {userScore: 0, computerScore: 0, round: 1};\r\n\r\nlet obj = {\r\n\trock: {wins: 'scissors', loses: 'paper'},\r\n\tpaper: {wins: 'rock',\tloses: 'scissors'},\r\n\tscissors: {wins: 'paper',\tloses: 'rock'}\r\n}\r\n\r\nrulesBtn.addEventListener('click', _rules__WEBPACK_IMPORTED_MODULE_1__[\"showRules\"]);\r\nrulesClose.addEventListener('click', _rules__WEBPACK_IMPORTED_MODULE_1__[\"closeRules\"]);\r\nrulesRead.addEventListener('click', _rules__WEBPACK_IMPORTED_MODULE_1__[\"closeRules\"]);\r\nreset.addEventListener('click', _reset__WEBPACK_IMPORTED_MODULE_0__[\"restartGame\"]);\n\n//# sourceURL=webpack:///./src/js/variables.js?");

/***/ }),

/***/ "./src/less/style.less":
/*!*****************************!*\
  !*** ./src/less/style.less ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./style.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/less/style.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/less/style.less?");

/***/ })

/******/ });