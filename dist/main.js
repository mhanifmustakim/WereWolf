/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Fonts/Creepster-Regular.ttf */ \"./src/Fonts/Creepster-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Fonts/Lacquer-Regular.ttf */ \"./src/Fonts/Lacquer-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./Images/BgImage.jpg */ \"./src/Images/BgImage.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*, *::before, *::after{\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n    font-size: inherit;\\n    font-family: inherit;\\n}\\n\\n@font-face {\\n    font-family: 'Creepster';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('truetype');\\n    font-weight: 600;\\n    font-style: normal;\\n}\\n\\n@font-face {\\n    font-family: 'Lacquer';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('truetype');\\n    font-weight: 600;\\n    font-style: normal;\\n}\\n\\n:root {\\n    font-family: Lacquer;\\n    font-size: 32px;\\n}\\n\\nbody{\\n    height: 100vh;\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    background-position: center;\\n}\\n\\nbutton {\\n    padding: 0 0.5em;\\n    margin: 0 0.5em;\\n    border-radius: 0.5em;\\n}\\n\\n#main {\\n    width: 70vw;\\n    margin: 0 auto;\\n    display: flex;\\n    flex-flow: column nowrap;\\n    align-items: center;\\n}\\n\\n#main-title {\\n    height: 12rem;\\n    display: flex;\\n    flex-flow: column nowrap;\\n    justify-content: center;\\n    gap: 1em;\\n}\\n\\n#action-screen{\\n    min-height: 100vh;\\n    padding: 3em 2em;\\n    display: grid;\\n    grid-template-columns: 1fr;\\n    grid-template-rows: auto 1fr auto;\\n    gap: 2em;\\n}\\n\\n.role-input-group {\\n    display: grid;\\n    grid-template-columns: 1fr auto auto;\\n    gap: 0.5em;\\n}\\n\\n.role-input-group>input {\\n    width: 3ch;\\n    text-align: right;\\n}\\n\\n.vote-list{\\n    display: grid;\\n    grid-template-columns: 1fr auto;\\n    gap: 0.5em;\\n}\\n\\n.role-action-container{\\n    height: 100%;\\n    align-items: center;\\n}\\n\\n.role-action{\\n    display: grid;\\n    grid-template-columns: 1fr auto;\\n    gap: 0.5em;\\n}\\n\\n.spaced-vertical {\\n    margin: 1em 0;\\n}\\n\\n.scary-text{\\n    font-family: Creepster;\\n}\\n\\n.text-l{\\n    font-size: 1.5rem;\\n}\\n\\n.text-xl{\\n    font-size: 3rem;\\n}\\n\\n.text-center{\\n    text-align: center;\\n}\\n\\n.text-red {\\n    color: crimson;\\n}\\n\\n.center{\\n    height: 100vh;\\n    display: flex;\\n    flex-flow: column nowrap;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.center-x{\\n    display: flex;\\n    justify-content: center;\\n}\\n\\n.flex-column{\\n    display: flex;\\n    flex-flow: column nowrap;\\n}\\n\\n.focus-view{\\n    font-size: 3rem;\\n    height: 80vh;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://werewolf/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://werewolf/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://werewolf/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://werewolf/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/number-to-words/numberToWords.min.js":
/*!***********************************************************!*\
  !*** ./node_modules/number-to-words/numberToWords.min.js ***!
  \***********************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/*!\n * Number-To-Words util\n * @version v1.2.4\n * @link https://github.com/marlun78/number-to-words\n * @author Martin Eneqvist (https://github.com/marlun78)\n * @contributors Aleksey Pilyugin (https://github.com/pilyugin),Jeremiah Hall (https://github.com/jeremiahrhall),Adriano Melo (https://github.com/adrianomelo),dmrzn (https://github.com/dmrzn)\n * @license MIT\n */\n!function(){\"use strict\";var e=\"object\"==typeof self&&self.self===self&&self||\"object\"==typeof __webpack_require__.g&&__webpack_require__.g.global===__webpack_require__.g&&__webpack_require__.g||this,t=9007199254740991;function f(e){return!(\"number\"!=typeof e||e!=e||e===1/0||e===-1/0)}function l(e){return\"number\"==typeof e&&Math.abs(e)<=t}var n=/(hundred|thousand|(m|b|tr|quadr)illion)$/,r=/teen$/,o=/y$/,i=/(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/,s={zero:\"zeroth\",one:\"first\",two:\"second\",three:\"third\",four:\"fourth\",five:\"fifth\",six:\"sixth\",seven:\"seventh\",eight:\"eighth\",nine:\"ninth\",ten:\"tenth\",eleven:\"eleventh\",twelve:\"twelfth\"};function h(e){return n.test(e)||r.test(e)?e+\"th\":o.test(e)?e.replace(o,\"ieth\"):i.test(e)?e.replace(i,a):e}function a(e,t){return s[t]}var u=10,d=100,p=1e3,v=1e6,b=1e9,y=1e12,c=1e15,g=9007199254740992,m=[\"zero\",\"one\",\"two\",\"three\",\"four\",\"five\",\"six\",\"seven\",\"eight\",\"nine\",\"ten\",\"eleven\",\"twelve\",\"thirteen\",\"fourteen\",\"fifteen\",\"sixteen\",\"seventeen\",\"eighteen\",\"nineteen\"],w=[\"zero\",\"ten\",\"twenty\",\"thirty\",\"forty\",\"fifty\",\"sixty\",\"seventy\",\"eighty\",\"ninety\"];function x(e,t){var n,r=parseInt(e,10);if(!f(r))throw new TypeError(\"Not a finite number: \"+e+\" (\"+typeof e+\")\");if(!l(r))throw new RangeError(\"Input is not a safe number, it’s either too large or too small.\");return n=function e(t){var n,r,o=arguments[1];if(0===t)return o?o.join(\" \").replace(/,$/,\"\"):\"zero\";o||(o=[]);t<0&&(o.push(\"minus\"),t=Math.abs(t));t<20?(n=0,r=m[t]):t<d?(n=t%u,r=w[Math.floor(t/u)],n&&(r+=\"-\"+m[n],n=0)):t<p?(n=t%d,r=e(Math.floor(t/d))+\" hundred\"):t<v?(n=t%p,r=e(Math.floor(t/p))+\" thousand,\"):t<b?(n=t%v,r=e(Math.floor(t/v))+\" million,\"):t<y?(n=t%b,r=e(Math.floor(t/b))+\" billion,\"):t<c?(n=t%y,r=e(Math.floor(t/y))+\" trillion,\"):t<=g&&(n=t%c,r=e(Math.floor(t/c))+\" quadrillion,\");o.push(r);return e(n,o)}(r),t?h(n):n}var M={toOrdinal:function(e){var t=parseInt(e,10);if(!f(t))throw new TypeError(\"Not a finite number: \"+e+\" (\"+typeof e+\")\");if(!l(t))throw new RangeError(\"Input is not a safe number, it’s either too large or too small.\");var n=String(t),r=Math.abs(t%100),o=11<=r&&r<=13,i=n.charAt(n.length-1);return n+(o?\"th\":\"1\"===i?\"st\":\"2\"===i?\"nd\":\"3\"===i?\"rd\":\"th\")},toWords:x,toWordsOrdinal:function(e){return h(x(e))}}; true?( true&&module.exports&&(exports=module.exports=M),exports.numberToWords=M):0}();\n\n//# sourceURL=webpack://werewolf/./node_modules/number-to-words/numberToWords.min.js?");

/***/ }),

/***/ "./node_modules/pubsub-js/src/pubsub.js":
/*!**********************************************!*\
  !*** ./node_modules/pubsub-js/src/pubsub.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n/**\n * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk\n * License: MIT - http://mrgnrdrck.mit-license.org\n *\n * https://github.com/mroderick/PubSubJS\n */\n\n(function (root, factory){\n    'use strict';\n\n    var PubSub = {};\n\n    if (root.PubSub) {\n        PubSub = root.PubSub;\n        console.warn(\"PubSub already loaded, using existing version\");\n    } else {\n        root.PubSub = PubSub;\n        factory(PubSub);\n    }\n    // CommonJS and Node.js module support\n    if (true){\n        if (module !== undefined && module.exports) {\n            exports = module.exports = PubSub; // Node.js specific `module.exports`\n        }\n        exports.PubSub = PubSub; // CommonJS module 1.1.1 spec\n        module.exports = exports = PubSub; // CommonJS\n    }\n    // AMD support\n    /* eslint-disable no-undef */\n    else {}\n\n}(( typeof window === 'object' && window ) || this, function (PubSub){\n    'use strict';\n\n    var messages = {},\n        lastUid = -1,\n        ALL_SUBSCRIBING_MSG = '*';\n\n    function hasKeys(obj){\n        var key;\n\n        for (key in obj){\n            if ( Object.prototype.hasOwnProperty.call(obj, key) ){\n                return true;\n            }\n        }\n        return false;\n    }\n\n    /**\n     * Returns a function that throws the passed exception, for use as argument for setTimeout\n     * @alias throwException\n     * @function\n     * @param { Object } ex An Error object\n     */\n    function throwException( ex ){\n        return function reThrowException(){\n            throw ex;\n        };\n    }\n\n    function callSubscriberWithDelayedExceptions( subscriber, message, data ){\n        try {\n            subscriber( message, data );\n        } catch( ex ){\n            setTimeout( throwException( ex ), 0);\n        }\n    }\n\n    function callSubscriberWithImmediateExceptions( subscriber, message, data ){\n        subscriber( message, data );\n    }\n\n    function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){\n        var subscribers = messages[matchedMessage],\n            callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,\n            s;\n\n        if ( !Object.prototype.hasOwnProperty.call( messages, matchedMessage ) ) {\n            return;\n        }\n\n        for (s in subscribers){\n            if ( Object.prototype.hasOwnProperty.call(subscribers, s)){\n                callSubscriber( subscribers[s], originalMessage, data );\n            }\n        }\n    }\n\n    function createDeliveryFunction( message, data, immediateExceptions ){\n        return function deliverNamespaced(){\n            var topic = String( message ),\n                position = topic.lastIndexOf( '.' );\n\n            // deliver the message as it is now\n            deliverMessage(message, message, data, immediateExceptions);\n\n            // trim the hierarchy and deliver message to each level\n            while( position !== -1 ){\n                topic = topic.substr( 0, position );\n                position = topic.lastIndexOf('.');\n                deliverMessage( message, topic, data, immediateExceptions );\n            }\n\n            deliverMessage(message, ALL_SUBSCRIBING_MSG, data, immediateExceptions);\n        };\n    }\n\n    function hasDirectSubscribersFor( message ) {\n        var topic = String( message ),\n            found = Boolean(Object.prototype.hasOwnProperty.call( messages, topic ) && hasKeys(messages[topic]));\n\n        return found;\n    }\n\n    function messageHasSubscribers( message ){\n        var topic = String( message ),\n            found = hasDirectSubscribersFor(topic) || hasDirectSubscribersFor(ALL_SUBSCRIBING_MSG),\n            position = topic.lastIndexOf( '.' );\n\n        while ( !found && position !== -1 ){\n            topic = topic.substr( 0, position );\n            position = topic.lastIndexOf( '.' );\n            found = hasDirectSubscribersFor(topic);\n        }\n\n        return found;\n    }\n\n    function publish( message, data, sync, immediateExceptions ){\n        message = (typeof message === 'symbol') ? message.toString() : message;\n\n        var deliver = createDeliveryFunction( message, data, immediateExceptions ),\n            hasSubscribers = messageHasSubscribers( message );\n\n        if ( !hasSubscribers ){\n            return false;\n        }\n\n        if ( sync === true ){\n            deliver();\n        } else {\n            setTimeout( deliver, 0 );\n        }\n        return true;\n    }\n\n    /**\n     * Publishes the message, passing the data to it's subscribers\n     * @function\n     * @alias publish\n     * @param { String } message The message to publish\n     * @param {} data The data to pass to subscribers\n     * @return { Boolean }\n     */\n    PubSub.publish = function( message, data ){\n        return publish( message, data, false, PubSub.immediateExceptions );\n    };\n\n    /**\n     * Publishes the message synchronously, passing the data to it's subscribers\n     * @function\n     * @alias publishSync\n     * @param { String } message The message to publish\n     * @param {} data The data to pass to subscribers\n     * @return { Boolean }\n     */\n    PubSub.publishSync = function( message, data ){\n        return publish( message, data, true, PubSub.immediateExceptions );\n    };\n\n    /**\n     * Subscribes the passed function to the passed message. Every returned token is unique and should be stored if you need to unsubscribe\n     * @function\n     * @alias subscribe\n     * @param { String } message The message to subscribe to\n     * @param { Function } func The function to call when a new message is published\n     * @return { String }\n     */\n    PubSub.subscribe = function( message, func ){\n        if ( typeof func !== 'function'){\n            return false;\n        }\n\n        message = (typeof message === 'symbol') ? message.toString() : message;\n\n        // message is not registered yet\n        if ( !Object.prototype.hasOwnProperty.call( messages, message ) ){\n            messages[message] = {};\n        }\n\n        // forcing token as String, to allow for future expansions without breaking usage\n        // and allow for easy use as key names for the 'messages' object\n        var token = 'uid_' + String(++lastUid);\n        messages[message][token] = func;\n\n        // return token for unsubscribing\n        return token;\n    };\n\n    PubSub.subscribeAll = function( func ){\n        return PubSub.subscribe(ALL_SUBSCRIBING_MSG, func);\n    };\n\n    /**\n     * Subscribes the passed function to the passed message once\n     * @function\n     * @alias subscribeOnce\n     * @param { String } message The message to subscribe to\n     * @param { Function } func The function to call when a new message is published\n     * @return { PubSub }\n     */\n    PubSub.subscribeOnce = function( message, func ){\n        var token = PubSub.subscribe( message, function(){\n            // before func apply, unsubscribe message\n            PubSub.unsubscribe( token );\n            func.apply( this, arguments );\n        });\n        return PubSub;\n    };\n\n    /**\n     * Clears all subscriptions\n     * @function\n     * @public\n     * @alias clearAllSubscriptions\n     */\n    PubSub.clearAllSubscriptions = function clearAllSubscriptions(){\n        messages = {};\n    };\n\n    /**\n     * Clear subscriptions by the topic\n     * @function\n     * @public\n     * @alias clearAllSubscriptions\n     * @return { int }\n     */\n    PubSub.clearSubscriptions = function clearSubscriptions(topic){\n        var m;\n        for (m in messages){\n            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){\n                delete messages[m];\n            }\n        }\n    };\n\n    /**\n       Count subscriptions by the topic\n     * @function\n     * @public\n     * @alias countSubscriptions\n     * @return { Array }\n    */\n    PubSub.countSubscriptions = function countSubscriptions(topic){\n        var m;\n        // eslint-disable-next-line no-unused-vars\n        var token;\n        var count = 0;\n        for (m in messages) {\n            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) {\n                for (token in messages[m]) {\n                    count++;\n                }\n                break;\n            }\n        }\n        return count;\n    };\n\n\n    /**\n       Gets subscriptions by the topic\n     * @function\n     * @public\n     * @alias getSubscriptions\n    */\n    PubSub.getSubscriptions = function getSubscriptions(topic){\n        var m;\n        var list = [];\n        for (m in messages){\n            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){\n                list.push(m);\n            }\n        }\n        return list;\n    };\n\n    /**\n     * Removes subscriptions\n     *\n     * - When passed a token, removes a specific subscription.\n     *\n\t * - When passed a function, removes all subscriptions for that function\n     *\n\t * - When passed a topic, removes all subscriptions for that topic (hierarchy)\n     * @function\n     * @public\n     * @alias subscribeOnce\n     * @param { String | Function } value A token, function or topic to unsubscribe from\n     * @example // Unsubscribing with a token\n     * var token = PubSub.subscribe('mytopic', myFunc);\n     * PubSub.unsubscribe(token);\n     * @example // Unsubscribing with a function\n     * PubSub.unsubscribe(myFunc);\n     * @example // Unsubscribing from a topic\n     * PubSub.unsubscribe('mytopic');\n     */\n    PubSub.unsubscribe = function(value){\n        var descendantTopicExists = function(topic) {\n                var m;\n                for ( m in messages ){\n                    if ( Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0 ){\n                        // a descendant of the topic exists:\n                        return true;\n                    }\n                }\n\n                return false;\n            },\n            isTopic    = typeof value === 'string' && ( Object.prototype.hasOwnProperty.call(messages, value) || descendantTopicExists(value) ),\n            isToken    = !isTopic && typeof value === 'string',\n            isFunction = typeof value === 'function',\n            result = false,\n            m, message, t;\n\n        if (isTopic){\n            PubSub.clearSubscriptions(value);\n            return;\n        }\n\n        for ( m in messages ){\n            if ( Object.prototype.hasOwnProperty.call( messages, m ) ){\n                message = messages[m];\n\n                if ( isToken && message[value] ){\n                    delete message[value];\n                    result = value;\n                    // tokens are unique, so we can just stop here\n                    break;\n                }\n\n                if (isFunction) {\n                    for ( t in message ){\n                        if (Object.prototype.hasOwnProperty.call(message, t) && message[t] === value){\n                            delete message[t];\n                            result = true;\n                        }\n                    }\n                }\n            }\n        }\n\n        return result;\n    };\n}));\n\n\n//# sourceURL=webpack://werewolf/./node_modules/pubsub-js/src/pubsub.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://werewolf/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://werewolf/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://werewolf/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://werewolf/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://werewolf/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://werewolf/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://werewolf/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Control.js":
/*!************************!*\
  !*** ./src/Control.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Roles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Roles */ \"./src/Roles.js\");\n\n\nconst Control = (function () {\n  const addPlayer = (e) => {\n    e.preventDefault();\n    const data = document.querySelector(\"#player-name\").value;\n    PubSub.publish(\"PlayerAdded\", data);\n    document.querySelector(\"#player-name\").value = \"\";\n  };\n\n  const startGame = (e) => {\n    e.preventDefault();\n    const data = {};\n    Object.keys(_Roles__WEBPACK_IMPORTED_MODULE_0__[\"default\"]).forEach((roleName) => {\n      data[roleName] = parseInt(\n        document.querySelector(`#role-${roleName}`).value\n      );\n    });\n\n    PubSub.publish(\"StartGame\", data);\n  };\n\n  const revealPlayer = (players, current) => {\n    const playerView = document.querySelector(\"#player-view\");\n    const currentPlayer = players[current];\n    playerView.textContent = \"You are a \" + currentPlayer.role.name + \"!\";\n    if (\"onSet\" in currentPlayer.role) {\n      playerView.appendChild(currentPlayer.role.onSet());\n      playerView.classList.add(\"flex-column\");\n    }\n    playerView.removeEventListener(\"click\", revealPlayer);\n  };\n\n  const voteOut = (e) => {\n    e.preventDefault();\n    const data = e.target.getAttribute(\"data-id\");\n    PubSub.publish(\"Voted\", parseInt(data));\n  };\n\n  const startNewGame = (e) => {\n    PubSub.publish(\"Reset\", null);\n  };\n  return {\n    addPlayer,\n    voteOut,\n    startNewGame,\n    startGame,\n    revealPlayer,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Control);\n\n\n//# sourceURL=webpack://werewolf/./src/Control.js?");

/***/ }),

/***/ "./src/EventAggregator.js":
/*!********************************!*\
  !*** ./src/EventAggregator.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ \"./node_modules/pubsub-js/src/pubsub.js\");\n/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\n/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./View */ \"./src/View.js\");\n\n\n\n\n\nconst EventAggregator = (function () {\n  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(\"PlayerAdded\", (msg, name) => {\n    const player = (0,_Player__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(name);\n    _Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addPlayer(player);\n    _View__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayCurrentPlayers(_Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].players);\n  });\n\n  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(\"StartGame\", (msg, data) => {\n    _Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setRoles(data);\n    _Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].start();\n  });\n\n  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(\"Voted\", (msg, playerId) => {\n    _Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].voteOut(playerId);\n\n    const player = _Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getPlayerById(playerId);\n    _View__WEBPACK_IMPORTED_MODULE_3__[\"default\"].resolveVotes({ VotedOut: player.name });\n  });\n\n  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(\"GameOver\", (msg, { players, winner }) => {\n    _View__WEBPACK_IMPORTED_MODULE_3__[\"default\"].renderGameOver(players, winner);\n  });\n\n  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(\"Reset\", (msg, players) => {\n    _Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].reset();\n    _View__WEBPACK_IMPORTED_MODULE_3__[\"default\"].renderChooseRoles(_Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  });\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventAggregator);\n\n\n//# sourceURL=webpack://werewolf/./src/EventAggregator.js?");

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _RoleView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoleView */ \"./src/RoleView.js\");\n/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View */ \"./src/View.js\");\n\n\n\nconst Game = (function () {\n  let players = [];\n  let isGameOver = true;\n  let dayCount = 0;\n  let winner = null;\n  let nightEvents = {};\n  let prevRoles = null;\n\n  const addPlayer = (player) => {\n    players.push(player);\n  };\n\n  const setRoles = (roleQuantities) => {\n    let unsetPlayers = [...players];\n    Object.entries(roleQuantities).forEach((entry) => {\n      const role = entry[0];\n      const quantity = parseInt(entry[1]);\n      for (let i = 0; i < quantity; i++) {\n        const index = Math.floor(Math.random() * unsetPlayers.length);\n        const randomPlayer = unsetPlayers.splice(index, 1)[0];\n        randomPlayer.setRole(role);\n      }\n    });\n\n    prevRoles = roleQuantities;\n  };\n\n  const count = (type) => {\n    let total = 0;\n    players.forEach((player) => {\n      if (player.isAlive && player.role.type === type) {\n        total += 1;\n      }\n    });\n    return total;\n  };\n\n  const reset = () => {\n    for (let i = 0; i < players.length; i++) {\n      players[i].reset();\n    }\n  };\n\n  const start = () => {\n    isGameOver = false;\n    dayCount = 0;\n    winner = null;\n    _View__WEBPACK_IMPORTED_MODULE_1__[\"default\"].revealRoles(players);\n  };\n\n  const startDay = () => {\n    dayCount += 1;\n    checkGameEnd();\n\n    if (!isGameOver) _View__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderDay(dayCount);\n  };\n\n  const startNight = () => {\n    checkGameEnd();\n    if (isGameOver) return;\n\n    const nightRoles = new Set();\n    players.forEach((player) => {\n      if (\n        player.role.availableActions &&\n        !nightRoles.has(player.role.name) &&\n        player.isAlive\n      ) {\n        nightRoles.add(player.role.name);\n      }\n    });\n\n    _RoleView__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render(Array.from(nightRoles));\n  };\n\n  const voteOut = (playerId) => {\n    players.forEach((player) => {\n      if (player.id === playerId) {\n        player.die();\n        console.log(`${player.name} is dead!`);\n      }\n    });\n  };\n\n  const killAtNight = (playerIds) => {\n    const names = [];\n    playerIds.forEach((id) => {\n      const player = getPlayerById(id);\n      player.die();\n\n      if (\"onKillNight\" in player.role) {\n        const result = player.role.onKillNight();\n        if (\"kill\" in result) {\n          const additionalPlayer = getPlayerById(result[\"kill\"]);\n          additionalPlayer.die();\n          names.push(additionalPlayer.name);\n        }\n      }\n\n      names.push(player.name);\n    });\n\n    _View__WEBPACK_IMPORTED_MODULE_1__[\"default\"].resolveNight(names);\n  };\n\n  const checkGameEnd = () => {\n    const wwCount = count(\"werewolf\");\n    const humanCount = count(\"human\");\n\n    if (wwCount >= humanCount) {\n      isGameOver = true;\n      winner = \"Werewolves\";\n    } else if (wwCount === 0) {\n      isGameOver = true;\n      winner = \"Citizens\";\n    }\n\n    if (isGameOver) {\n      PubSub.publish(\"GameOver\", { players, winner });\n    }\n  };\n\n  const getPlayerById = (id) => {\n    return players.filter((player) => player.id === id)[0];\n  };\n\n  const attack = (attacker, victimId) => {\n    nightEvents[attacker] = {\n      attack: victimId,\n    };\n  };\n\n  const reveal = (revealer, playerId) => {\n    const player = getPlayerById(playerId);\n    player.reveal();\n    nightEvents[revealer] = {\n      reveal: playerId,\n    };\n  };\n\n  const guard = (savior, playerId) => {\n    const player = getPlayerById(playerId);\n    nightEvents[savior] = {\n      guard: playerId,\n    };\n  };\n\n  const finishNight = () => {\n    const attacked = new Set();\n    const revealed = new Set();\n    const guarded = new Set();\n    Object.values(nightEvents).forEach((event) => {\n      if (\"attack\" in event) {\n        attacked.add(event.attack);\n      }\n\n      if (\"reveal\" in event) {\n        revealed.add(event.reveal);\n      }\n\n      if (\"guard\" in event) {\n        guarded.add(event.guard);\n      }\n    });\n\n    const killed = new Set(\n      Array.from(attacked).filter((id) => !guarded.has(id))\n    );\n    killAtNight(Array.from(killed));\n  };\n\n  return {\n    get players() {\n      return players;\n    },\n    get isGameOver() {\n      return isGameOver;\n    },\n    get prevRoles() {\n      return prevRoles;\n    },\n    addPlayer,\n    setRoles,\n    start,\n    reset,\n    startDay,\n    startNight,\n    voteOut,\n    checkGameEnd,\n    attack,\n    reveal,\n    guard,\n    finishNight,\n    getPlayerById,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n\n//# sourceURL=webpack://werewolf/./src/Game.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Roles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Roles */ \"./src/Roles.js\");\n\n\nconst Player = function (name) {\n  const id = Player.getId();\n  let isAlive = true;\n  let role = null;\n  let hasRevealed = false;\n\n  const setRole = (roleName) => {\n    role = _Roles__WEBPACK_IMPORTED_MODULE_0__[\"default\"][roleName]();\n  };\n\n  const reveal = () => {\n    hasRevealed = true;\n  };\n\n  const reset = () => {\n    role = null;\n    isAlive = true;\n    hasRevealed = false;\n  };\n\n  const die = () => {\n    isAlive = false;\n  };\n\n  return {\n    get name() {\n      return name;\n    },\n    get id() {\n      return id;\n    },\n    get role() {\n      return role;\n    },\n    get isAlive() {\n      return isAlive;\n    },\n    get hasRevealed() {\n      return hasRevealed;\n    },\n    die,\n    setRole,\n    reset,\n    reveal,\n  };\n};\n\nPlayer.nextId = 1;\nPlayer.getId = function () {\n  const current = Player.nextId;\n  Player.nextId += 1;\n  return current;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack://werewolf/./src/Player.js?");

/***/ }),

/***/ "./src/RoleView.js":
/*!*************************!*\
  !*** ./src/RoleView.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n/* harmony import */ var _Roles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Roles */ \"./src/Roles.js\");\n\n\n\nconst RoleView = (function () {\n  const enableNextBtn = () => {\n    document.querySelector(\"#nextButton\").disabled = false;\n  };\n\n  const roles = {\n    werewolf: function () {\n      const mainElement = document.createElement(\"div\");\n      const werewolf = _Roles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].werewolf();\n      _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].players.forEach((player) => {\n        if (player.role.name !== \"werewolf\" && player.isAlive) {\n          const playerName = document.createElement(\"p\");\n          playerName.textContent = player.name;\n          const killBtn = document.createElement(\"button\");\n          killBtn.textContent = \"KILL\";\n          killBtn.addEventListener(\"click\", (e) => {\n            e.target.style.backgroundColor = \"red\";\n            e.target.style.color = \"white\";\n            const buttons = mainElement.querySelectorAll(\"button\");\n            buttons.forEach((button) => (button.disabled = true));\n            werewolf.action.kill(player.id);\n            enableNextBtn();\n          });\n\n          mainElement.appendChild(playerName);\n          mainElement.appendChild(killBtn);\n        }\n      });\n      return mainElement;\n    },\n    seer: function () {\n      const mainElement = document.createElement(\"div\");\n      const seer = _Roles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].seer();\n      _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].players.forEach((player) => {\n        if (!player.isAlive || player.role.name === \"seer\") return;\n        const playerName = document.createElement(\"p\");\n        playerName.textContent = player.name;\n        const revealBtn = document.createElement(\"button\");\n        revealBtn.textContent = \"REVEAL\";\n        revealBtn.addEventListener(\"click\", () => {\n          mainElement.innerHTML = \"\";\n          const role = document.createElement(\"h3\");\n          role.classList.add(\"text-xl\");\n          role.textContent = `${player.name} is a ${seer.action.reveal(\n            player.id\n          )}.`;\n          mainElement.appendChild(role);\n          enableNextBtn();\n        });\n        if (player.hasRevealed) revealBtn.disabled = true;\n\n        mainElement.appendChild(playerName);\n        mainElement.appendChild(revealBtn);\n      });\n\n      return mainElement;\n    },\n    doctor: function () {\n      const mainElement = document.createElement(\"div\");\n      const doctor = _Roles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].doctor();\n      _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].players.forEach((player) => {\n        if (!player.isAlive || player.role.name === \"doctor\") return;\n        const playerName = document.createElement(\"p\");\n        playerName.textContent = player.name;\n        const healBtn = document.createElement(\"button\");\n        healBtn.textContent = \"HEAL\";\n        healBtn.addEventListener(\"click\", (e) => {\n          e.target.style.backgroundColor = \"green\";\n          e.target.style.color = \"white\";\n          const buttons = mainElement.querySelectorAll(\"button\");\n          buttons.forEach((button) => (button.disabled = true));\n          doctor.action.heal(player.id);\n          enableNextBtn();\n        });\n        mainElement.appendChild(playerName);\n        mainElement.appendChild(healBtn);\n      });\n\n      return mainElement;\n    },\n  };\n\n  const render = (nightRoles, current = 0) => {\n    const currentRole = nightRoles[current];\n    let nextRole = false;\n    if (current !== nightRoles.length - 1) {\n      nextRole = true;\n    }\n\n    const main = document.querySelector(\"#main\");\n    main.innerHTML = \"\";\n\n    const container = document.createElement(\"div\");\n    container.id = \"action-screen\";\n\n    const header = document.createElement(\"header\");\n    header.textContent = \"Night action of the \" + currentRole + \": \";\n    header.classList.add(\"text-l\");\n\n    const roleActionContainer = document.createElement(\"div\");\n    const element = roles[currentRole]();\n    element.classList.add(\"role-action\");\n    roleActionContainer.appendChild(element);\n    roleActionContainer.classList.add(\"center-x\");\n    roleActionContainer.classList.add(\"role-action-container\");\n\n    container.appendChild(header);\n    container.appendChild(roleActionContainer);\n\n    const nextBtn = document.createElement(\"button\");\n    nextBtn.disabled = !Array.from(element.querySelectorAll(\"button\")).every(\n      (button) => button.disabled === true\n    );\n    nextBtn.id = \"nextButton\";\n    if (nextRole) {\n      nextBtn.textContent = \"NEXT ROLE\";\n      nextBtn.addEventListener(\n        \"click\",\n        render.bind(window, nightRoles, current + 1)\n      );\n    } else {\n      nextBtn.textContent = \"GO TO DAY\";\n      nextBtn.addEventListener(\"click\", _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].finishNight);\n    }\n\n    container.appendChild(nextBtn);\n    main.appendChild(container);\n  };\n\n  return {\n    render,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoleView);\n\n\n//# sourceURL=webpack://werewolf/./src/RoleView.js?");

/***/ }),

/***/ "./src/Roles.js":
/*!**********************!*\
  !*** ./src/Roles.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n\n\nconst Roles = {\n  werewolf: function () {\n    const name = \"werewolf\";\n    const type = \"werewolf\";\n    const team = \"Werewolves\";\n    const availableActions = [\"kill\"];\n    const action = {\n      kill: function (playerId) {\n        _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].attack(\"Werewolves\", playerId);\n      },\n    };\n\n    return {\n      get name() {\n        return name;\n      },\n      get type() {\n        return type;\n      },\n      get availableActions() {\n        return availableActions;\n      },\n      get action() {\n        return action;\n      },\n      get team() {\n        return team;\n      },\n    };\n  },\n\n  citizen: function () {\n    const name = \"citizen\";\n    const type = \"human\";\n    const team = \"Citizens\";\n    const availableActions = null;\n\n    return {\n      get name() {\n        return name;\n      },\n      get type() {\n        return type;\n      },\n      get availableActions() {\n        return availableActions;\n      },\n      get team() {\n        return team;\n      },\n    };\n  },\n\n  seer: function () {\n    const name = \"seer\";\n    const type = \"human\";\n    const team = \"Citizens\";\n    const availableActions = [\"reveal\"];\n    const action = {\n      reveal: function (playerId) {\n        _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].reveal(\"seer\", playerId);\n        return _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getPlayerById(playerId).role.name;\n      },\n    };\n\n    return {\n      get name() {\n        return name;\n      },\n      get type() {\n        return type;\n      },\n      get availableActions() {\n        return availableActions;\n      },\n      get action() {\n        return action;\n      },\n      get team() {\n        return team;\n      },\n    };\n  },\n\n  doctor: function () {\n    const name = \"doctor\";\n    const type = \"human\";\n    const team = \"Citizens\";\n    const availableActions = [\"heal\"];\n    const action = {\n      heal: function (playerId) {\n        _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].guard(\"doctor\", playerId);\n      },\n    };\n\n    return {\n      get name() {\n        return name;\n      },\n      get type() {\n        return type;\n      },\n      get availableActions() {\n        return availableActions;\n      },\n      get action() {\n        return action;\n      },\n      get team() {\n        return team;\n      },\n    };\n  },\n\n  lover: function () {\n    const name = \"lover\";\n    const type = \"human\";\n    const team = \"Citizens\";\n    const availableActions = null;\n    const onSet = () => {\n      const lovers = [];\n      const element = document.createElement(\"h4\");\n      _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].players.forEach((player) => {\n        if (player.role.name === \"lover\") {\n          lovers.push(player.name);\n        }\n      });\n      element.innerHTML = `The lovers are <br>${lovers.join(\" & \")}`;\n      return element;\n    };\n\n    const onKillNight = () => {\n      const resolve = {};\n      _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].players.forEach((player) => {\n        if (player.role.name === \"lover\" && player.isAlive) {\n          resolve[\"kill\"] = player.id;\n        }\n      });\n      return resolve;\n    };\n\n    return {\n      get name() {\n        return name;\n      },\n      get type() {\n        return type;\n      },\n      get availableActions() {\n        return availableActions;\n      },\n      get action() {\n        return action;\n      },\n      get team() {\n        return team;\n      },\n      onSet,\n      onKillNight,\n    };\n  },\n  psycho: function () {\n    const name = \"psycho\";\n    const type = \"human\";\n    const team = \"Werewolves\";\n    const availableActions = null;\n\n    return {\n      get name() {\n        return name;\n      },\n      get type() {\n        return type;\n      },\n      get availableActions() {\n        return availableActions;\n      },\n      get team() {\n        return team;\n      },\n    };\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Roles);\n\n\n//# sourceURL=webpack://werewolf/./src/Roles.js?");

/***/ }),

/***/ "./src/View.js":
/*!*********************!*\
  !*** ./src/View.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Control */ \"./src/Control.js\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n/* harmony import */ var _Roles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Roles */ \"./src/Roles.js\");\n/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! number-to-words */ \"./node_modules/number-to-words/numberToWords.min.js\");\n/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(number_to_words__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst View = (function () {\n  const main = document.querySelector(\"#main\");\n  const titleView = () => {\n    const title = document.createElement(\"div\");\n    const mainTitle = document.createElement(\"h1\");\n    const secondary = document.createElement(\"h3\");\n    mainTitle.textContent = \"Werewolf Game\";\n    mainTitle.classList.add(\"text-xl\");\n    secondary.textContent =\n      \"Unleash your inner predator in this thrilling werewolf game. Can you outsmart your opponents and emerge victorious?\";\n    title.classList.add(\"main-title\");\n\n    title.appendChild(mainTitle);\n    title.appendChild(secondary);\n    title.classList.add(\"text-center\");\n    title.classList.add(\"scary-text\");\n    title.id = \"main-title\";\n    return title;\n  };\n\n  const addPlayerForm = () => {\n    const form = document.createElement(\"form\");\n\n    const input = document.createElement(\"input\");\n    input.id = \"player-name\";\n    input.name = \"player-name\";\n    input.required = true;\n    input.autocomplete = \"off\";\n    input.placeholder = \"Add name here\";\n    const label = document.createElement(\"label\");\n    label.for = \"player-name\";\n    label.textContent = \"New Player Name: \";\n    const addPlayerBtn = document.createElement(\"button\");\n    addPlayerBtn.textContent = \"Add Player\";\n    addPlayerBtn.type = \"submit\";\n\n    form.appendChild(label);\n    form.appendChild(input);\n    form.appendChild(addPlayerBtn);\n\n    form.addEventListener(\"submit\", _Control__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addPlayer);\n\n    return form;\n  };\n\n  const displayCurrentPlayers = (players) => {\n    const list = document.querySelector(\"#players-list\");\n    list.innerHTML = \"\";\n    players.forEach((player) => {\n      if (!player.isAlive) return;\n      const playerElement = document.createElement(\"li\");\n      playerElement.textContent = player.name;\n      playerElement.setAttribute(\"data-id\", player.id);\n      list.appendChild(playerElement);\n    });\n  };\n\n  const revealRoles = (players, current = 0) => {\n    main.innerHTML = \"\";\n\n    const playerView = document.createElement(\"h3\");\n    const navBtns = document.createElement(\"div\");\n\n    playerView.id = \"player-view\";\n    playerView.classList.add(\"focus-view\");\n    playerView.textContent = \"Calling for \" + players[current].name;\n\n    playerView.addEventListener(\n      \"click\",\n      _Control__WEBPACK_IMPORTED_MODULE_0__[\"default\"].revealPlayer.bind(window, players, current)\n    );\n\n    main.appendChild(playerView);\n\n    if (current !== 0) {\n      const backBtn = document.createElement(\"button\");\n      backBtn.textContent = \"Back\";\n      backBtn.addEventListener(\n        \"click\",\n        revealRoles.bind(window, players, current - 1)\n      );\n      navBtns.appendChild(backBtn);\n    }\n\n    const nextBtn = document.createElement(\"button\");\n    nextBtn.textContent = \"Next Player\";\n\n    if (current === players.length - 1) {\n      nextBtn.textContent = \"Start Day\";\n      nextBtn.addEventListener(\"click\", _Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].startDay);\n    } else {\n      nextBtn.addEventListener(\n        \"click\",\n        revealRoles.bind(window, players, current + 1)\n      );\n    }\n\n    navBtns.appendChild(nextBtn);\n    main.appendChild(navBtns);\n  };\n\n  const renderChooseRoles = (Game) => {\n    main.innerHTML = \"\";\n    main.appendChild(titleView());\n\n    let n = Game.players.length;\n    const playerCount = document.createElement(\"header\");\n    playerCount.textContent = \"Total Players: \" + Game.players.length;\n\n    const form = document.createElement(\"form\");\n    form.id = \"chooseRoleForm\";\n    Object.keys(_Roles__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).forEach((roleName) => {\n      const formGroup = document.createElement(\"div\");\n      let quantity = 0;\n\n      if (Game.prevRoles !== null) {\n        quantity = Game.prevRoles[roleName];\n      } else if (roleName === \"werewolf\") {\n        quantity = 1;\n      } else if (roleName === \"citizen\") {\n        quantity = n - 1;\n      }\n\n      const roleLabel = document.createElement(\"label\");\n      roleLabel.textContent = roleName;\n      roleLabel.for = `role-${roleName}`;\n      const roleInput = document.createElement(\"input\");\n      roleInput.id = `role-${roleName}`;\n      roleInput.name = `role-${roleName}`;\n      roleInput.type = \"number\";\n      roleInput.min = roleName == \"werewolf\" ? 1 : 0;\n      roleInput.value = quantity;\n      const separator = document.createElement(\"div\");\n      separator.textContent = \" : \";\n\n      formGroup.appendChild(roleLabel);\n      formGroup.appendChild(separator);\n      formGroup.appendChild(roleInput);\n      formGroup.classList.add(\"role-input-group\");\n\n      form.appendChild(formGroup);\n    });\n\n    const buttons = document.createElement(\"div\");\n    buttons.classList.add(\"spaced-vertical\");\n    const startGameBtn = document.createElement(\"button\");\n    startGameBtn.textContent = \"Start Game\";\n    startGameBtn.type = \"submit\";\n    const backBtn = document.createElement(\"button\");\n    backBtn.textContent = \"Back\";\n    backBtn.type = \"button\";\n    backBtn.addEventListener(\"click\", renderStart);\n\n    buttons.appendChild(backBtn);\n    buttons.appendChild(startGameBtn);\n    form.appendChild(buttons);\n\n    form.addEventListener(\"submit\", _Control__WEBPACK_IMPORTED_MODULE_0__[\"default\"].startGame);\n    form.classList.add(\"flex-column\");\n    form.classList.add(\"spaced-vertical\");\n\n    main.appendChild(playerCount);\n    main.appendChild(form);\n  };\n\n  const renderVotingScreen = () => {\n    main.innerHTML = \"\";\n    main.appendChild(titleView());\n\n    const votePrompt = document.createElement(\"header\");\n    votePrompt.textContent =\n      \"It's time for the villagers to cast their votes and try to identify the werewolf among us. Who do you suspect is the werewolf? Think carefully and choose wisely.\";\n\n    const playersList = document.createElement(\"ul\");\n    playersList.classList.add(\"vote-list\");\n    playersList.classList.add(\"spaced-vertical\");\n    _Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].players.forEach((player) => {\n      const playerView = document.createElement(\"li\");\n      const name = document.createElement(\"p\");\n      name.textContent = player.name;\n\n      playerView.appendChild(name);\n\n      const voteBtn = document.createElement(\"button\");\n      voteBtn.textContent = \"VOTE\";\n      voteBtn.setAttribute(\"data-id\", player.id);\n      if (!player.isAlive) voteBtn.disabled = true;\n      voteBtn.addEventListener(\"click\", _Control__WEBPACK_IMPORTED_MODULE_0__[\"default\"].voteOut);\n\n      playersList.appendChild(playerView);\n      playersList.appendChild(voteBtn);\n    });\n\n    const skipBtn = document.createElement(\"button\");\n    skipBtn.textContent = \"Skip\";\n    skipBtn.addEventListener(\"click\", View.resolveVotes);\n\n    main.appendChild(votePrompt);\n    main.appendChild(playersList);\n    main.appendChild(skipBtn);\n  };\n\n  const highlight = (text) => {\n    const span = `<span class=\"text-red\">${text}</span>`;\n    return span;\n  };\n\n  const resolveVotes = (data) => {\n    main.innerHTML = \"\";\n\n    const container = document.createElement(\"div\");\n    container.classList.add(\"focus-view\");\n\n    let text;\n    if (\"VotedOut\" in data) {\n      text = `The villagers have cast their votes, and the results are in.<br> ${highlight(\n        data[\"VotedOut\"]\n      )} has the most votes and is lynched by the village.`;\n    } else {\n      text =\n        \"The villagers have decided to skip the voting phase.<br>\" +\n        highlight(\"No one\") +\n        \"will be lynched by the village today.\";\n    }\n\n    const resolution = document.createElement(\"h3\");\n    resolution.innerHTML = text;\n    resolution.classList.add(\"text-center\");\n    container.appendChild(resolution);\n\n    const continueBtn = document.createElement(\"button\");\n    continueBtn.textContent = \"CONTINUE\";\n    continueBtn.addEventListener(\"click\", _Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].startNight);\n\n    main.appendChild(container);\n    main.appendChild(continueBtn);\n  };\n\n  const renderDay = (dayCount) => {\n    main.innerHTML = \"\";\n\n    const dayElement = document.createElement(\"div\");\n    dayElement.classList.add(\"center\");\n    const dayText = document.createElement(\"header\");\n    dayText.classList.add(\"text-xl\");\n    dayText.textContent = \"Day \" + dayCount;\n\n    const discussPrompt = document.createElement(\"p\");\n    discussPrompt.classList.add(\"spaced-vertical\");\n    discussPrompt.classList.add(\"text-center\");\n    discussPrompt.textContent = `It's the ${(0,number_to_words__WEBPACK_IMPORTED_MODULE_3__.toOrdinal)(\n      dayCount\n    )} day of the game, and the village is already on edge. Rumors of werewolves lurking in the shadows have everyone on edge. The villagers must come together and discuss their suspicions to determine who among them may be the werewolves. Who do you suspect and why? What evidence do you have to support your suspicions?`;\n\n    const gotoVoteBtn = document.createElement(\"button\");\n    gotoVoteBtn.textContent = \"START VOTING\";\n    gotoVoteBtn.addEventListener(\"click\", renderVotingScreen);\n\n    dayElement.appendChild(dayText);\n    dayElement.appendChild(discussPrompt);\n    dayElement.appendChild(gotoVoteBtn);\n    main.appendChild(dayElement);\n  };\n\n  const renderGameOver = (players, winner) => {\n    main.innerHTML = \"\";\n    main.appendChild(titleView());\n\n    const gameOverText = document.createElement(\"h2\");\n    gameOverText.textContent = \"Game Over!\";\n\n    const results = document.createElement(\"p\");\n    results.textContent = `${winner} Win!`;\n\n    const playersList = document.createElement(\"ul\");\n    playersList.classList.add(\"spaced-vertical\");\n    players.forEach((player) => {\n      const playerView = document.createElement(\"li\");\n      const name = document.createElement(\"header\");\n      name.textContent = `${player.name} => ${player.role.name}`;\n      if (player.role.team === winner) name.style.color = \"crimson\";\n\n      playerView.appendChild(name);\n      playersList.appendChild(playerView);\n    });\n\n    const startNewGameBtn = document.createElement(\"button\");\n    startNewGameBtn.textContent = \"Start New Game\";\n    startNewGameBtn.addEventListener(\"click\", _Control__WEBPACK_IMPORTED_MODULE_0__[\"default\"].startNewGame);\n\n    main.appendChild(gameOverText);\n    main.appendChild(results);\n    main.appendChild(playersList);\n    main.appendChild(startNewGameBtn);\n  };\n\n  const resolveNight = (names) => {\n    main.innerHTML = \"\";\n    main.appendChild(titleView());\n\n    const resolution = document.createElement(\"h3\");\n    if (names.length === 0) {\n      resolution.innerHTML =\n        \"It's the morning after the first night, and the villagers are relieved to find that no one was killed by the werewolves.\";\n    } else {\n      resolution.innerHTML = `It's the morning after the first night, and the villagers are shocked to find ${highlight(\n        names.join(\", \")\n      )} killed during the night.`;\n    }\n\n    const continueBtn = document.createElement(\"button\");\n    continueBtn.classList.add(\"spaced-vertical\");\n    continueBtn.textContent = \"continue\";\n    continueBtn.addEventListener(\"click\", _Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].startDay);\n\n    main.appendChild(resolution);\n    main.appendChild(continueBtn);\n  };\n\n  const renderStart = () => {\n    main.innerHTML = \"\";\n\n    const currentPlayers = document.createElement(\"div\");\n    currentPlayers.classList.add(\"spaced-vertical\");\n    const playersList = document.createElement(\"ul\");\n    playersList.id = \"players-list\";\n    currentPlayers.classList.add(\"spaced-vertical\");\n    currentPlayers.textContent = \"Current Players: \";\n    currentPlayers.appendChild(playersList);\n\n    const startBtn = document.createElement(\"button\");\n    startBtn.textContent = \"START\";\n    startBtn.addEventListener(\"click\", renderChooseRoles.bind(window, _Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n\n    main.appendChild(titleView());\n    main.appendChild(addPlayerForm());\n    main.appendChild(currentPlayers);\n    main.appendChild(startBtn);\n  };\n\n  return {\n    renderStart,\n    renderGameOver,\n    renderChooseRoles,\n    renderDay,\n    revealRoles,\n    resolveNight,\n    resolveVotes,\n    displayCurrentPlayers,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);\n\n\n//# sourceURL=webpack://werewolf/./src/View.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ \"./src/View.js\");\n/* harmony import */ var _EventAggregator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventAggregator.js */ \"./src/EventAggregator.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _Images_BgImage_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Images/BgImage.jpg */ \"./src/Images/BgImage.jpg\");\n\n\n\n\n\n_View__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderStart();\n\n\n//# sourceURL=webpack://werewolf/./src/index.js?");

/***/ }),

/***/ "./src/Fonts/Creepster-Regular.ttf":
/*!*****************************************!*\
  !*** ./src/Fonts/Creepster-Regular.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"7e29388744fe1602e58c.ttf\";\n\n//# sourceURL=webpack://werewolf/./src/Fonts/Creepster-Regular.ttf?");

/***/ }),

/***/ "./src/Fonts/Lacquer-Regular.ttf":
/*!***************************************!*\
  !*** ./src/Fonts/Lacquer-Regular.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"322f4f7b5f12cb6387c2.ttf\";\n\n//# sourceURL=webpack://werewolf/./src/Fonts/Lacquer-Regular.ttf?");

/***/ }),

/***/ "./src/Images/BgImage.jpg":
/*!********************************!*\
  !*** ./src/Images/BgImage.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"65f99f1cf5a053206ac7.jpg\";\n\n//# sourceURL=webpack://werewolf/./src/Images/BgImage.jpg?");

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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