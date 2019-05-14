/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({"about":"about"}[chunkId]||chunkId) + "." + {"about":"261ce865"}[chunkId] + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cd49");


/***/ }),

/***/ "15db":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_29d63822_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("903a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_29d63822_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_29d63822_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_29d63822_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4868":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5c0b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5e27");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5e27":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6646":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorTool_vue_vue_type_style_index_0_id_1a8b745c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4868");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorTool_vue_vue_type_style_index_0_id_1a8b745c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorTool_vue_vue_type_style_index_0_id_1a8b745c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorTool_vue_vue_type_style_index_0_id_1a8b745c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "669a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewTool_vue_vue_type_style_index_0_id_471de300_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bddf");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewTool_vue_vue_type_style_index_0_id_471de300_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewTool_vue_vue_type_style_index_0_id_471de300_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewTool_vue_vue_type_style_index_0_id_471de300_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "903a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bddf":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cd49":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("551c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.promise.finally.js
var es7_promise_finally = __webpack_require__("097d");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c1661e08-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=f95c6070&
var Appvue_type_template_id_f95c6070_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=f95c6070&

// EXTERNAL MODULE: ./node_modules/balm-ui/dist/balm-ui.js
var balm_ui = __webpack_require__("dca8");
var balm_ui_default = /*#__PURE__*/__webpack_require__.n(balm_ui);

// EXTERNAL MODULE: ./node_modules/balm-ui/dist/balm-ui-plus.js
var balm_ui_plus = __webpack_require__("3d84");
var balm_ui_plus_default = /*#__PURE__*/__webpack_require__.n(balm_ui_plus);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=ts&



vue_runtime_esm["default"].use(balm_ui_default.a);
vue_runtime_esm["default"].use(balm_ui_plus_default.a);
/* harmony default export */ var Appvue_type_script_lang_ts_ = (vue_runtime_esm["default"].extend({}));
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_Appvue_type_script_lang_ts_ = (Appvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&lang=scss&
var Appvue_type_style_index_0_lang_scss_ = __webpack_require__("5c0b");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_ts_,
  Appvue_type_template_id_f95c6070_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("8c4f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c1661e08-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home.vue?vue&type=template&id=29d63822&scoped=true&
var Homevue_type_template_id_29d63822_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_c('div',[_c('div',[_c('Filebar',{attrs:{"app":_vm.app}})],1),_c('div',[_c('Toolbar',{on:{"change":_vm.setTool}})],1),_c('div',[_c('ColorTool',{attrs:{"app":_vm.app}})],1)]),_c('canvas',{ref:"glCanvas",attrs:{"width":"640","height":"480"}})])}
var Homevue_type_template_id_29d63822_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/Home.vue?vue&type=template&id=29d63822&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("d225");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("b0b4");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 2 modules
var possibleConstructorReturn = __webpack_require__("308d");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("6bb5");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("4e2b");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("9ab4");

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js
var vue_property_decorator = __webpack_require__("60a3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c1661e08-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Toolbar.vue?vue&type=template&id=05dd26e0&
var Toolbarvue_type_template_id_05dd26e0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_c('ui-icon-button',{attrs:{"icon":"block"},on:{"change":function($event){return _vm.onToolClick('None')}}}),_c('ui-icon-button',{attrs:{"icon":"open_with"},on:{"change":function($event){return _vm.onToolClick('MoveObj')}}}),_c('ui-icon-button',{attrs:{"icon":"show_chart"},on:{"change":function($event){return _vm.onToolClick('LineAdd')}}}),_c('ui-icon-button',{attrs:{"icon":"gesture"},on:{"change":function($event){return _vm.onToolClick('BezierAdd')}}}),_c('ui-icon-button',{attrs:{"icon":"delete"},on:{"change":function($event){return _vm.onToolClick('DelObj')}}}),_c('ui-icon-button',{attrs:{"icon":"build"},on:{"change":function($event){return _vm.onToolClick('MovePoint')}}}),_c('ui-icon-button',{on:{"change":function($event){return _vm.onToolClick('BSplineAdd')}}},[_vm._v("B")])],1)}
var Toolbarvue_type_template_id_05dd26e0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Toolbar.vue?vue&type=template&id=05dd26e0&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("f499");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("5176");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("5d73");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.sub.js
var es6_string_sub = __webpack_require__("673e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.math.sign.js
var es6_math_sign = __webpack_require__("0b21");

// EXTERNAL MODULE: ./node_modules/three/build/three.module.js
var three_module = __webpack_require__("5a89");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("75fc");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/values.js
var values = __webpack_require__("db0c");
var values_default = /*#__PURE__*/__webpack_require__.n(values);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("a4bb");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./src/scripts/Data.ts












var Data_Layer = function Layer() {
  Object(classCallCheck["a" /* default */])(this, Layer);

  this.name = "";
  this.alpha = 1;
  this.data = {};
};
var Data_VectorLayer =
/*#__PURE__*/
function (_Layer) {
  Object(inherits["a" /* default */])(VectorLayer, _Layer);

  function VectorLayer() {
    Object(classCallCheck["a" /* default */])(this, VectorLayer);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(VectorLayer).apply(this, arguments));
  }

  return VectorLayer;
}(Data_Layer);
var Data_Storable =
/*#__PURE__*/
function () {
  function Storable() {
    Object(classCallCheck["a" /* default */])(this, Storable);

    this.id = 0;
    this.layer = 0;
    this.type = this.constructor.name;
  } //todo!//


  Object(createClass["a" /* default */])(Storable, null, [{
    key: "is",
    value: function is(obj, c) {
      if (obj.type === undefined) return false;
      return c.name == obj.type;
    }
  }]);

  return Storable;
}();
var Data_DataStore =
/*#__PURE__*/
function () {
  function DataStore() {
    Object(classCallCheck["a" /* default */])(this, DataStore);

    this.layers = []; //todo find a better solution

    this.recycledIds = [];
    this.largestId = 1;
  }

  Object(createClass["a" /* default */])(DataStore, [{
    key: "addLayer",
    value: function addLayer(layer) {
      this.layers.push(layer);
    }
  }, {
    key: "removeLayer",
    value: function removeLayer(layerIndex) {
      var _this = this;

      var delted = this.layers.splice(layerIndex, 1);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var d = _step.value;

          keys_default()(d.data).forEach(function (k) {
            return keys_default()(d.data[k]).forEach(function (kk) {
              return _this.recycledIds.push(Number(kk));
            });
          });
        };

        for (var _iterator = get_iterator_default()(delted), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return this.layers.map(function (l) {
        return values_default()(l.data).flatMap(function (d) {
          return values_default()(d);
        });
      }).reduce(function (a, b) {
        return [].concat(Object(toConsumableArray["a" /* default */])(a), Object(toConsumableArray["a" /* default */])(b));
      }, []);
    }
  }, {
    key: "getAllOfType",
    value: function getAllOfType(c) {
      return this.layers.map(function (l) {
        if (l.data[c.name] === undefined) return [];
        return values_default()(l.data[c.name]);
      }).reduce(function (a, b) {
        return [].concat(Object(toConsumableArray["a" /* default */])(a), Object(toConsumableArray["a" /* default */])(b));
      }, []);
    }
  }, {
    key: "get",
    value: function get(c, id) {
      return this.layers.map(function (l) {
        if (l.data[c.name] === undefined) return undefined;
        return l.data[c.name][id];
      }).reduce(function (a, b) {
        return a === undefined ? b : a;
      });
    }
  }, {
    key: "remove",
    value: function remove(value, layerIndex) {
      if (value.id == 0) {
        return;
      }

      var d = this.layers[layerIndex].data;
      var t = value.constructor.name;

      if (d[t] === undefined) {
        d[t] = {};
        return;
      }

      if (d[t][value.id]) {
        delete d[t][value.id];
        this.recycledIds.push(value.id);
      }
    }
  }, {
    key: "store",
    value: function store(value, layerIndex) {
      if (this.layers.length <= layerIndex) {
        throw new Error("Layer index out of range");
      }

      if (value.id == 0) {
        if (this.recycledIds.length > 0) {
          value.id = this.recycledIds.pop();
        } else {
          value.id = this.largestId++;
        }
      }

      var d = this.layers[layerIndex].data;
      var t = value.constructor.name;

      if (d[t] === undefined) {
        d[t] = {};
      }

      d[t][value.id] = value;
    }
  }]);

  return DataStore;
}();
// CONCATENATED MODULE: ./src/scripts/Point.ts


// export class ColorHelper{
//     static create(r:number=0,g:number=0,b:number=0,a:number=1){
//         return {r:r,g:g,b:b,a:a};
//     }
//     static white:Color = ColorHelper.create(1,1,1);
//     static black:Color = ColorHelper.create(0,0,0);
//     static toCSVString(c:Color){
//         return `rgba(${c.r},${c.g},${c.b},${(c.a)/255.0})`
//     }
// }
var Point_Point =
/*#__PURE__*/
function () {
  function Point() {
    Object(classCallCheck["a" /* default */])(this, Point);

    this.x = 0;
    this.y = 0;
    this.size = 1;
    this.color = "#000";
  }

  Object(createClass["a" /* default */])(Point, null, [{
    key: "add",
    value: function add(a, b) {
      var p = new Point();
      p.x = a.x + b.x;
      p.y = a.y + b.y;
      p.color = a.color;
      p.size = a.size;
      return p;
    }
  }, {
    key: "minus",
    value: function minus(a, b) {
      var p = new Point();
      p.x = a.x - b.x;
      p.y = a.y - b.y;
      p.color = a.color;
      p.size = a.size;
      return p;
    }
  }, {
    key: "multiply",
    value: function multiply(a, b) {
      var p = new Point();
      p.x = a.x * b;
      p.y = a.y * b;
      p.color = a.color;
      p.size = a.size;
      return p;
    }
  }, {
    key: "equals",
    value: function equals(a, b) {
      return a.x == b.x && a.y == b.y;
    }
  }]);

  return Point;
}();
// CONCATENATED MODULE: ./src/scripts/MouseTool.ts



var MouseTool_MouseTool =
/*#__PURE__*/
function () {
  function MouseTool() {
    Object(classCallCheck["a" /* default */])(this, MouseTool);
  }

  Object(createClass["a" /* default */])(MouseTool, [{
    key: "onEnable",
    value: function onEnable(app) {
      this.app = app;
    }
  }, {
    key: "onDisable",
    value: function onDisable() {
      console.log("Disabled " + this.constructor.name);
    } //not clicked

  }, {
    key: "onMouseOver",
    value: function onMouseOver(pos, interact, event) {//console.log(pos);
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(pos, interact, event) {//console.log(pos);
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(pos, interact, event) {//console.log(pos);
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp(pos, interact, event) {//console.log(pos);
    }
  }]);

  return MouseTool;
}();
// CONCATENATED MODULE: ./src/scripts/DataView.ts


var DataView_DataView =
/*#__PURE__*/
function () {
  function DataView() {
    Object(classCallCheck["a" /* default */])(this, DataView);
  }

  Object(createClass["a" /* default */])(DataView, [{
    key: "onEnable",
    value: function onEnable(app) {
      this.app = app;
    }
  }, {
    key: "onDisable",
    value: function onDisable() {
      console.log("Disabled");
    } //draw called per frame

  }, {
    key: "draw",
    value: function draw(gl) {}
  }, {
    key: "onDataAdd",
    value: function onDataAdd(data) {}
  }, {
    key: "onDataChange",
    value: function onDataChange(data) {}
  }, {
    key: "onDataRemove",
    value: function onDataRemove(data) {}
  }]);

  return DataView;
}();
// CONCATENATED MODULE: ./src/scripts/Line.ts










var Line_LineStore =
/*#__PURE__*/
function (_Storable) {
  Object(inherits["a" /* default */])(LineStore, _Storable);

  function LineStore() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, LineStore);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(LineStore).apply(this, arguments));
    _this.data = [];
    return _this;
  }

  return LineStore;
}(Data_Storable);
var Line_LineView =
/*#__PURE__*/
function (_DataView) {
  Object(inherits["a" /* default */])(LineView, _DataView);

  function LineView() {
    var _this2;

    Object(classCallCheck["a" /* default */])(this, LineView);

    _this2 = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(LineView).apply(this, arguments));
    _this2.currentViews = {};
    return _this2;
  }

  Object(createClass["a" /* default */])(LineView, [{
    key: "onDataAdd",
    value: function onDataAdd(data) {
      if (Data_Storable.is(data, Line_LineStore)) {
        if (data.data.length <= 0) return;
        var material = new three_module["f" /* LineBasicMaterial */]({
          color: 0xffffff,
          vertexColors: three_module["m" /* VertexColors */]
        });
        var geometry = new three_module["d" /* Geometry */]();
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = get_iterator_default()(data.data), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var p = _step.value;
            geometry.vertices.push(new three_module["l" /* Vector3 */](p.x, p.y, 0));
            geometry.colors.push(new three_module["b" /* Color */](p.color));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        var line = new three_module["e" /* Line */](geometry, material);
        line.userData["obj"] = data;
        this.app.currentScene.add(line);
        this.currentViews[data.id] = line;
      }
    }
  }, {
    key: "onDataChange",
    value: function onDataChange(data) {
      if (Data_Storable.is(data, Line_LineStore)) {
        if (this.currentViews[data.id]) {
          var l = this.currentViews[data.id];
          this.app.currentScene.remove(l);
          if (data.data.length <= 0) return;
          var material = new three_module["f" /* LineBasicMaterial */]({
            color: 0xffffff,
            vertexColors: three_module["m" /* VertexColors */]
          });
          var geometry = new three_module["d" /* Geometry */]();
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = get_iterator_default()(data.data), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var p = _step2.value;
              geometry.vertices.push(new three_module["l" /* Vector3 */](p.x, p.y, 0));
              geometry.colors.push(new three_module["b" /* Color */](p.color));
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          var line = new three_module["e" /* Line */](geometry, material);
          line.userData["obj"] = data;
          this.app.currentScene.add(line);
          this.currentViews[data.id] = line;
        }
      }
    }
  }, {
    key: "onDataRemove",
    value: function onDataRemove(data) {
      if (Data_Storable.is(data, Line_LineStore)) {
        if (this.currentViews[data.id]) {
          var l = this.currentViews[data.id];
          this.app.currentScene.remove(l);
          delete this.currentViews[data.id];
        }
      }
    }
  }]);

  return LineView;
}(DataView_DataView);
var Line_LineAddTool =
/*#__PURE__*/
function (_MouseTool) {
  Object(inherits["a" /* default */])(LineAddTool, _MouseTool);

  function LineAddTool() {
    Object(classCallCheck["a" /* default */])(this, LineAddTool);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(LineAddTool).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(LineAddTool, [{
    key: "onMouseDown",
    value: function onMouseDown(pos, ids, event) {
      pos.color = this.app.foregroundColor;

      if (this.data === undefined) {
        this.data = new Line_LineStore();
        this.data.data.push(pos);
        this.app.storeData(this.data);
      } else if (event.shiftKey) {
        this.data.data.push(pos);
        this.app.changeData(this.data);
      } else {
        if (this.data.data.length > 1) {
          delete this.data;
          this.data = new Line_LineStore();
          this.data.data.push(pos);
          this.app.storeData(this.data);
          return;
        }

        this.data.data.push(pos);
        this.app.changeData(this.data);
        delete this.data;
      }
    }
  }]);

  return LineAddTool;
}(MouseTool_MouseTool);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.typed.float32-array.js
var es6_typed_float32_array = __webpack_require__("63d9");

// CONCATENATED MODULE: ./src/scripts/Bezier.ts












var Bezier_BezierStore =
/*#__PURE__*/
function (_Storable) {
  Object(inherits["a" /* default */])(BezierStore, _Storable);

  function BezierStore() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, BezierStore);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(BezierStore).apply(this, arguments));
    _this.data = [];
    return _this;
  }

  return BezierStore;
}(Data_Storable);
var Bezier_BezierView =
/*#__PURE__*/
function (_DataView) {
  Object(inherits["a" /* default */])(BezierView, _DataView);

  function BezierView() {
    var _this2;

    Object(classCallCheck["a" /* default */])(this, BezierView);

    _this2 = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(BezierView).apply(this, arguments));
    _this2.currentViews = {};
    return _this2;
  }

  Object(createClass["a" /* default */])(BezierView, [{
    key: "onDataAdd",
    value: function onDataAdd(data) {
      if (Data_Storable.is(data, Bezier_BezierStore)) {
        var material = new three_module["f" /* LineBasicMaterial */]({
          color: 0xffffff,
          vertexColors: three_module["m" /* VertexColors */]
        });
        var geometry = new three_module["a" /* BufferGeometry */]();
        this.genPoints(data, geometry);
        var line = new three_module["e" /* Line */](geometry, material);
        line.userData["obj"] = data;
        this.app.currentScene.add(line);
        this.currentViews[data.id] = line;
      }
    }
  }, {
    key: "onDataChange",
    value: function onDataChange(data) {
      if (Data_Storable.is(data, Bezier_BezierStore)) {
        if (this.currentViews[data.id]) {
          var l = this.currentViews[data.id];
          this.app.currentScene.remove(l);
          var material = new three_module["f" /* LineBasicMaterial */]({
            color: 0xffffff,
            vertexColors: three_module["m" /* VertexColors */]
          });
          var geometry = new three_module["a" /* BufferGeometry */]();
          this.genPoints(data, geometry);
          var line = new three_module["e" /* Line */](geometry, material);
          line.userData["obj"] = data;
          this.app.currentScene.add(line);
          this.currentViews[data.id] = line;
        }
      }
    }
  }, {
    key: "onDataRemove",
    value: function onDataRemove(data) {
      if (Data_Storable.is(data, Bezier_BezierStore)) {
        if (this.currentViews[data.id]) {
          var l = this.currentViews[data.id];
          this.app.currentScene.remove(l);
          delete this.currentViews[data.id];
        }
      }
    }
  }, {
    key: "genPoints",
    value: function genPoints(data, g) {
      var interp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
      if (data.data.length <= 0) return;

      if (data.data.length == 1) {
        return;
      } else if ((data.data.length - 1) % 3 != 0) {//
        //return;
      }

      var pts = Math.floor((data.data.length - 1) / 3) * interp;
      var positions = new Float32Array(pts * 3);
      var colors = new Float32Array(pts * 3);
      var begin = 0;
      var intp = 1 / interp;

      for (var i = 1; i + 2 < data.data.length; i += 3) {
        begin = this.processPart(data.data[i - 1], data.data[i], data.data[i + 1], data.data[i + 2], positions, colors, begin, intp);
      }

      g.addAttribute("position", new three_module["c" /* Float32BufferAttribute */](positions, 3));
      g.addAttribute("color", new three_module["c" /* Float32BufferAttribute */](colors, 3));
      g.setDrawRange(0, begin / 3);
    }
  }, {
    key: "deCast",
    value: function deCast(pointsX, pointsY, dst, t) {
      var tm = 1 - t;

      if (pointsX.length == 1) {
        dst.x = pointsX[0];
        dst.y = pointsY[0];
      } else {
        var nx = new Array(pointsX.length - 1);
        var ny = new Array(pointsY.length - 1);

        for (var i = 0; i < nx.length; ++i) {
          var x = tm * pointsX[i] + t * pointsX[i + 1];
          var y = tm * pointsY[i] + t * pointsY[i + 1];
          nx[i] = x;
          ny[i] = y;
        }

        this.deCast(nx, ny, dst, t);
      }
    } //output out index

  }, {
    key: "processPart",
    value: function processPart(p0, p1, p2, p3, pos, color, begin, intp) {
      var c0 = new three_module["b" /* Color */](p0.color);
      var c3 = new three_module["b" /* Color */](p3.color);
      var xx;
      var yy;

      if (Point_Point.equals(p0, p1) && Point_Point.equals(p2, p3)) {
        //pure line
        color[begin] = c0.r;
        pos[begin++] = p0.x;
        color[begin] = c0.g;
        pos[begin++] = p0.y;
        color[begin] = c0.b;
        pos[begin++] = 0;
        color[begin] = c3.r;
        pos[begin++] = p3.x;
        color[begin] = c3.g;
        pos[begin++] = p3.y;
        color[begin] = c3.b;
        pos[begin++] = 0;
        return begin;
      } else if (Point_Point.equals(p0, p1)) {
        xx = [p0.x, p2.x, p3.x];
        yy = [p0.y, p2.y, p3.y];
      } else if (Point_Point.equals(p2, p3)) {
        xx = [p0.x, p1.x, p3.x];
        yy = [p0.y, p1.y, p3.y];
      } else {
        xx = [p0.x, p1.x, p2.x, p3.x];
        yy = [p0.y, p1.y, p2.y, p3.y];
      }

      var tempP = new Point_Point(); //point to array

      for (var t = 0; t <= 1; t += intp) {
        this.deCast(xx, yy, tempP, t);
        var c = c0.lerp(c3, t);
        color[begin] = c.r;
        pos[begin++] = tempP.x;
        color[begin] = c.g;
        pos[begin++] = tempP.y;
        color[begin] = c.b;
        pos[begin++] = 0;
      }

      return begin;
    }
  }]);

  return BezierView;
}(DataView_DataView);
var Bezier_BezierAddTool =
/*#__PURE__*/
function (_MouseTool) {
  Object(inherits["a" /* default */])(BezierAddTool, _MouseTool);

  function BezierAddTool() {
    var _this3;

    Object(classCallCheck["a" /* default */])(this, BezierAddTool);

    _this3 = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(BezierAddTool).apply(this, arguments));
    _this3.isDown = false;
    return _this3;
  }

  Object(createClass["a" /* default */])(BezierAddTool, [{
    key: "onMouseDown",
    value: function onMouseDown(pos, ids, event) {
      this.isDown = true;
      pos.color = this.app.foregroundColor;

      if (this.data === undefined) {
        this.data = new Bezier_BezierStore();
        this.data.data.push(assign_default()(new Point_Point(), pos));
        this.data.data.push(assign_default()(new Point_Point(), pos));
        this.begin = pos;
        this.index = 0;
        this.app.storeData(this.data);
      } else if (event.shiftKey) {
        this.index = this.data.data.length + 1;
        this.begin = pos;
        this.data.data.push(assign_default()(new Point_Point(), pos));
        this.data.data.push(assign_default()(new Point_Point(), pos));
        this.data.data.push(assign_default()(new Point_Point(), pos));
        this.app.changeData(this.data);
      } else {
        if (this.data.data.length > 3) {
          delete this.data;
          this.data = new Bezier_BezierStore();
          this.data.data.push(assign_default()(new Point_Point(), pos));
          this.data.data.push(assign_default()(new Point_Point(), pos));
          this.begin = pos;
          this.index = 0;
          this.app.storeData(this.data);
          return;
        }

        this.data.data.push(assign_default()(new Point_Point(), pos));
        this.data.data.push(assign_default()(new Point_Point(), pos));
        this.data.data.push(assign_default()(new Point_Point(), pos));
        this.app.changeData(this.data);
        delete this.data;
      }
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(pos, ids, event) {
      if (!this.isDown || !this.data) return;
      var delta = Point_Point.minus(pos, this.begin);
      this.move(this.data, delta);
      this.begin = pos;
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp(pos, ids, event) {
      this.isDown = false;
    }
  }, {
    key: "move",
    value: function move(data, delta) {
      if (data.data.length < this.index + 1) return;
      data.data[this.index + 1].x += delta.x;
      data.data[this.index + 1].y += delta.y;

      if (this.index - 1 >= 0) {
        data.data[this.index - 1].x = 2 * data.data[this.index].x - data.data[this.index + 1].x;
        data.data[this.index - 1].y = 2 * data.data[this.index].y - data.data[this.index + 1].y;
      }

      this.app.changeData(data);
    }
  }]);

  return BezierAddTool;
}(MouseTool_MouseTool);
// CONCATENATED MODULE: ./src/scripts/ObjectTool.ts











var ObjectTool_ObjDelTool =
/*#__PURE__*/
function (_MouseTool) {
  Object(inherits["a" /* default */])(ObjDelTool, _MouseTool);

  function ObjDelTool() {
    Object(classCallCheck["a" /* default */])(this, ObjDelTool);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(ObjDelTool).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(ObjDelTool, [{
    key: "onMouseDown",
    value: function onMouseDown(pos, ids, event) {
      if (ids.data.length <= 0) return;
      this.obj = ids.data[0];
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp() {
      if (!this.obj) return;
      this.app.delData(this.obj);
      delete this.obj;
    }
  }]);

  return ObjDelTool;
}(MouseTool_MouseTool);
var ObjectTool_ObjMoveTool =
/*#__PURE__*/
function (_MouseTool2) {
  Object(inherits["a" /* default */])(ObjMoveTool, _MouseTool2);

  function ObjMoveTool() {
    Object(classCallCheck["a" /* default */])(this, ObjMoveTool);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(ObjMoveTool).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(ObjMoveTool, [{
    key: "onMouseDown",
    value: function onMouseDown(pos, ids, event) {
      if (ids.data.length <= 0) return;
      this.obj = ids.data[0];
      this.begin = pos;
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(pos, ids, event) {
      if (!this.obj) return;
      var delta = Point_Point.minus(pos, this.begin);
      this.move(this.obj, delta);
      this.begin = pos;
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp() {
      if (!this.obj) return;
      delete this.obj;
    }
  }, {
    key: "move",
    value: function move(obj, delta) {
      if (Data_Storable.is(obj, Line_LineStore) || Data_Storable.is(obj, Bezier_BezierStore)) {
        obj.data.forEach(function (d) {
          d.x += delta.x;
          d.y += delta.y;
        });
        this.app.changeData(obj);
      }
    }
  }]);

  return ObjMoveTool;
}(MouseTool_MouseTool);
// CONCATENATED MODULE: ./src/scripts/BSpline.ts











var BSpline_BSplineStore =
/*#__PURE__*/
function (_Storable) {
  Object(inherits["a" /* default */])(BSplineStore, _Storable);

  function BSplineStore() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, BSplineStore);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(BSplineStore).apply(this, arguments));
    _this.data = [];
    return _this;
  }

  return BSplineStore;
}(Data_Storable);
var BSpline_BSplineView =
/*#__PURE__*/
function (_DataView) {
  Object(inherits["a" /* default */])(BSplineView, _DataView);

  function BSplineView() {
    var _this2;

    Object(classCallCheck["a" /* default */])(this, BSplineView);

    _this2 = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(BSplineView).apply(this, arguments));
    _this2.currentViews = {};
    return _this2;
  }

  Object(createClass["a" /* default */])(BSplineView, [{
    key: "onDataAdd",
    value: function onDataAdd(data) {
      if (Data_Storable.is(data, BSpline_BSplineStore)) {
        var material = new three_module["f" /* LineBasicMaterial */]({
          color: 0xffffff,
          vertexColors: three_module["m" /* VertexColors */]
        });
        var geometry = new three_module["a" /* BufferGeometry */]();
        this.genPoints(data, geometry);
        var line = new three_module["e" /* Line */](geometry, material);
        line.userData["obj"] = data;
        this.app.currentScene.add(line);
        this.currentViews[data.id] = line;
      }
    }
  }, {
    key: "onDataChange",
    value: function onDataChange(data) {
      if (Data_Storable.is(data, BSpline_BSplineStore)) {
        if (this.currentViews[data.id]) {
          var l = this.currentViews[data.id];
          this.app.currentScene.remove(l);
          var material = new three_module["f" /* LineBasicMaterial */]({
            color: 0xffffff,
            vertexColors: three_module["m" /* VertexColors */]
          });
          var geometry = new three_module["a" /* BufferGeometry */]();
          this.genPoints(data, geometry);
          var line = new three_module["e" /* Line */](geometry, material);
          line.userData["obj"] = data;
          this.app.currentScene.add(line);
          this.currentViews[data.id] = line;
        }
      }
    }
  }, {
    key: "onDataRemove",
    value: function onDataRemove(data) {
      if (Data_Storable.is(data, BSpline_BSplineStore)) {
        if (this.currentViews[data.id]) {
          var l = this.currentViews[data.id];
          this.app.currentScene.remove(l);
          delete this.currentViews[data.id];
        }
      }
    }
  }, {
    key: "genPoints",
    value: function genPoints(data, g) {
      var interp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 150;
      if (data.data.length <= 0) return;

      if (data.data.length <= 3) {
        return;
      }

      var c0 = new three_module["b" /* Color */](data.data[0].color);
      var c3 = new three_module["b" /* Color */](data.data[data.data.length - 1].color);
      var knots = new Array(data.data.length + 4);
      knots[0] = 0;
      knots[1] = 0;
      knots[2] = 0;
      knots[3] = 0;
      var l = knots.length - 7;

      for (var i = 1; i < l; ++i) {
        knots[i + 3] = i / l;
      }

      knots[knots.length - 1] = 1;
      knots[knots.length - 2] = 1;
      knots[knots.length - 3] = 1;
      knots[knots.length - 4] = 1;
      var xx = [];
      var yy = [];
      data.data.forEach(function (d) {
        xx.push(d.x);
        yy.push(d.y);
      });
      var intp = 1 / interp;
      var positions = new Float32Array((interp + 1) * 3);
      var colors = new Float32Array((interp + 1) * 3);
      var begin = 0;

      var _loop = function _loop(t) {
        //first pass
        var b0 = knots.map(function (d, i) {
          return t < d || i + 1 < knots.length && t >= knots[i + 1] ? 0 : 1;
        });
        var deg = 1;
        var b1 = b0.map(function (a, i) {
          var r = 0;
          var dd = knots[i + deg] - knots[i];

          if (dd != 0) {
            r += (t - knots[i]) / dd * a;
          }

          dd = knots[i + 1 + deg] - knots[i + 1];

          if (dd != 0) {
            r += (knots[i + 1 + deg] - t) / dd * b0[i + 1];
          }

          return r;
        });
        deg = 2;
        var b2 = b1.map(function (a, i) {
          var r = 0;
          var dd = knots[i + deg] - knots[i];

          if (dd != 0) {
            r += (t - knots[i]) / dd * a;
          }

          dd = knots[i + 1 + deg] - knots[i + 1];

          if (dd != 0) {
            r += (knots[i + 1 + deg] - t) / dd * b1[i + 1];
          }

          return r;
        });
        deg = 3;
        var b3 = b2.map(function (a, i) {
          var r = 0;
          var dd = knots[i + deg] - knots[i];

          if (dd != 0) {
            r += (t - knots[i]) / dd * a;
          }

          dd = knots[i + 1 + deg] - knots[i + 1];

          if (dd != 0) {
            r += (knots[i + 1 + deg] - t) / dd * b2[i + 1];
          }

          return r;
        });
        var x = xx.map(function (d, i) {
          return d * b3[i];
        }).reduce(function (a, b) {
          return a + b;
        });
        var y = yy.map(function (d, i) {
          return d * b3[i];
        }).reduce(function (a, b) {
          return a + b;
        });
        var c = c0.lerp(c3, t);
        colors[begin] = c.r;
        positions[begin++] = x;
        colors[begin] = c.g;
        positions[begin++] = y;
        colors[begin] = c.b;
        positions[begin++] = 0;
      };

      for (var t = 0; t <= 1; t += intp) {
        _loop(t);
      }

      g.addAttribute("position", new three_module["c" /* Float32BufferAttribute */](positions, 3));
      g.addAttribute("color", new three_module["c" /* Float32BufferAttribute */](colors, 3));
      g.setDrawRange(0, begin / 3);
    }
  }]);

  return BSplineView;
}(DataView_DataView);
var BSpline_BSplineAddTool =
/*#__PURE__*/
function (_MouseTool) {
  Object(inherits["a" /* default */])(BSplineAddTool, _MouseTool);

  function BSplineAddTool() {
    Object(classCallCheck["a" /* default */])(this, BSplineAddTool);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(BSplineAddTool).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(BSplineAddTool, [{
    key: "onMouseDown",
    value: function onMouseDown(pos, ids, event) {
      pos.color = this.app.foregroundColor;

      if (this.data === undefined) {
        this.data = new BSpline_BSplineStore();
        this.data.data.push(pos);
        this.app.storeData(this.data);
      } else if (event.shiftKey) {
        this.data.data.push(pos);
        this.app.changeData(this.data);
      } else {
        if (this.data.data.length > 3) {
          delete this.data;
          this.data = new BSpline_BSplineStore();
          this.data.data.push(pos);
          this.app.storeData(this.data);
          return;
        }

        this.data.data.push(pos);
        this.app.changeData(this.data);
        delete this.data;
      }
    }
  }]);

  return BSplineAddTool;
}(MouseTool_MouseTool);
// CONCATENATED MODULE: ./src/scripts/PointTool.ts














var PointTool_PointView =
/*#__PURE__*/
function (_DataView) {
  Object(inherits["a" /* default */])(PointView, _DataView);

  function PointView() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, PointView);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(PointView).apply(this, arguments));
    _this.currentViews = {};
    return _this;
  }

  Object(createClass["a" /* default */])(PointView, [{
    key: "onDataAdd",
    value: function onDataAdd(data) {
      if (Data_Storable.is(data, Line_LineStore) || Data_Storable.is(data, Bezier_BezierStore) || Data_Storable.is(data, BSpline_BSplineStore)) {
        var material = new three_module["i" /* PointsMaterial */]({
          color: 0x013FE9
        });
        var geometry = new three_module["d" /* Geometry */]();
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = get_iterator_default()(data.data), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var p = _step.value;
            geometry.vertices.push(new three_module["l" /* Vector3 */](p.x, p.y, 0));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        var point = new three_module["h" /* Points */](geometry, material);
        point.userData["point"] = true;
        point.userData["obj"] = data;
        this.app.currentScene.add(point);
        this.currentViews[data.id] = point;
      }
    }
  }, {
    key: "onDataChange",
    value: function onDataChange(data) {
      if (Data_Storable.is(data, Line_LineStore) || Data_Storable.is(data, Bezier_BezierStore) || Data_Storable.is(data, BSpline_BSplineStore)) {
        if (this.currentViews[data.id]) {
          var l = this.currentViews[data.id];
          this.app.currentScene.remove(l);
          var material = new three_module["i" /* PointsMaterial */]({
            color: 0x013FE9
          });
          var geometry = new three_module["d" /* Geometry */]();
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = get_iterator_default()(data.data), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var p = _step2.value;
              geometry.vertices.push(new three_module["l" /* Vector3 */](p.x, p.y, 0));
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          var point = new three_module["h" /* Points */](geometry, material);
          point.userData["point"] = true;
          point.userData["obj"] = data;
          this.app.currentScene.add(point);
          this.currentViews[data.id] = point;
        }
      }
    }
  }, {
    key: "onDataRemove",
    value: function onDataRemove(data) {
      if (Data_Storable.is(data, Line_LineStore) || Data_Storable.is(data, Bezier_BezierStore)) {
        if (this.currentViews[data.id]) {
          var l = this.currentViews[data.id];
          this.app.currentScene.remove(l);
          delete this.currentViews[data.id];
        }
      }
    }
  }]);

  return PointView;
}(DataView_DataView);
var PointTool_PointMoveTool =
/*#__PURE__*/
function (_MouseTool) {
  Object(inherits["a" /* default */])(PointMoveTool, _MouseTool);

  function PointMoveTool() {
    Object(classCallCheck["a" /* default */])(this, PointMoveTool);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(PointMoveTool).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(PointMoveTool, [{
    key: "onMouseDown",
    value: function onMouseDown(pos, ids, event) {
      if (ids.data.length <= 0) return;
      if (ids.pindex[0] == -1) return;
      this.obj = ids.data[0];
      this.begin = pos;
      this.index = ids.pindex[0];
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(pos, ids, event) {
      if (!this.obj) return;
      var delta = Point_Point.minus(pos, this.begin);
      this.move(this.obj, delta);
      this.begin = pos;
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp() {
      if (!this.obj) return;
      delete this.obj;
    }
  }, {
    key: "move",
    value: function move(obj, delta) {
      if (Data_Storable.is(obj, Line_LineStore) || Data_Storable.is(obj, Bezier_BezierStore) || Data_Storable.is(obj, BSpline_BSplineStore)) {
        if (obj.data.length < this.index) return;
        obj.data[this.index].x += delta.x;
        obj.data[this.index].y += delta.y;
        this.app.changeData(obj);
      }
    }
  }]);

  return PointMoveTool;
}(MouseTool_MouseTool);
// CONCATENATED MODULE: ./src/scripts/DPainter.ts

















var ToolType;

(function (ToolType) {
  ToolType[ToolType["None"] = 0] = "None";
  ToolType[ToolType["BezierAdd"] = 1] = "BezierAdd";
  ToolType[ToolType["LineAdd"] = 2] = "LineAdd";
  ToolType[ToolType["BSplineAdd"] = 3] = "BSplineAdd";
  ToolType[ToolType["MoveObj"] = 4] = "MoveObj";
  ToolType[ToolType["DelObj"] = 5] = "DelObj";
  ToolType[ToolType["MovePoint"] = 6] = "MovePoint";
})(ToolType || (ToolType = {}));

var DPainter_PainterApp =
/*#__PURE__*/
function () {
  function PainterApp() {
    var _this = this;

    Object(classCallCheck["a" /* default */])(this, PainterApp);

    // gl !: WebGLRenderingContext;
    this.shouldUpdate = true;
    this.previousTime = 0;
    this.deltaTime = 0;
    this.toolType = ToolType.None;
    this.tool = new MouseTool_MouseTool();
    this.views = [];
    this.scale = 1;
    this.currentLayer = 0;
    this.foregroundColor = "#000";
    this.backgroundColor = "#FFF";

    this.onWheel = function (ev) {
      var delta = Math.sign(ev.deltaY);
      _this.scale += delta / 50;
    };

    this.mvec = new three_module["l" /* Vector3 */](); // create once and reuse

    this.mpos = new three_module["l" /* Vector3 */](); // create once and reuse 

    this.onMouse = function (ev) {
      var point = new Point_Point();

      _this.mvec.set(ev.offsetX / _this.canvas.width * 2 - 1, -(ev.offsetY / _this.canvas.height) * 2 + 1, 0.5);

      _this.rayCaster.setFromCamera(_this.mvec, _this.currentCamera);

      var inters = _this.rayCaster.intersectObjects(_this.currentScene.children, true);

      _this.mvec.unproject(_this.currentCamera);

      _this.mvec.sub(_this.currentCamera.position).normalize();

      var distance = -_this.currentCamera.position.z / _this.mvec.z;

      _this.mpos.copy(_this.currentCamera.position).add(_this.mvec.multiplyScalar(distance));

      point.x = _this.mpos.x;
      point.y = _this.mpos.y;
      var ids = [];
      var pindex = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = get_iterator_default()(inters), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var i = _step.value;

          //i.distanceToRay
          //todo
          if (i.object.userData["obj"]) {
            var obj = i.object.userData["obj"];
            var d = ids.indexOf(obj);

            if (d == -1) {
              ids.push(obj);

              if (i.object.userData["point"] && i.index !== undefined) {
                pindex.push(i.index);
              } else {
                pindex.push(-1);
              }
            } else if (pindex[d] == -1) {
              pindex[d] = i.index !== undefined ? i.index : -1;
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var interact = {
        data: ids,
        pindex: pindex
      };

      switch (ev.type) {
        case 'mousedown':
          _this.tool.onMouseDown(point, interact, ev);

          break;

        case 'mouseover':
          _this.tool.onMouseOver(point, interact, ev);

          break;

        case 'mousemove':
          _this.tool.onMouseMove(point, interact, ev);

          break;

        case 'mouseup':
          _this.tool.onMouseUp(point, interact, ev);

          break;
      }
    };

    this.animationFrame = function (time) {
      _this.deltaTime = time - _this.previousTime;

      _this.update(_this.deltaTime);

      _this.previousTime = time;
      if (_this.shouldUpdate) window.requestAnimationFrame(_this.animationFrame);
    };

    this.currentScene = new three_module["k" /* Scene */]();
    this.currentScene.background = new three_module["b" /* Color */]("#FFF");
    this.data = new Data_DataStore();
    this.data.addLayer(new Data_Layer());
    this.tool.onEnable(this);
    var lineview = new Line_LineView();
    lineview.onEnable(this);
    this.views.push(lineview);
    var bezierView = new Bezier_BezierView();
    bezierView.onEnable(this);
    this.views.push(bezierView);
    var bsplineView = new BSpline_BSplineView();
    bsplineView.onEnable(this);
    this.views.push(bsplineView);
    var pointView = new PointTool_PointView();
    pointView.onEnable(this);
    this.views.push(pointView);
  }

  Object(createClass["a" /* default */])(PainterApp, [{
    key: "onEnable",
    value: function onEnable(canvas) {
      this.canvas = canvas;

      if (this.renderer) {
        this.renderer.dispose();
      }

      this.renderer = new three_module["n" /* WebGLRenderer */]({
        canvas: this.canvas,
        antialias: true
      });
      this.currentCamera = new three_module["g" /* PerspectiveCamera */](45, canvas.width / canvas.height, 0.1, 1000);
      this.currentCamera.position.set(0, 0, 100);
      this.currentCamera.lookAt(0, 0, 0);
      this.rayCaster = new three_module["j" /* Raycaster */](); // this.rayCaster.params.Points = {threshold:0.1};
      // this.rayCaster.linePrecision = 3;
      //todo https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas;
      //init webgl
      // let gl = canvas.getContext("webgl");
      // if(!gl){
      //     gl = canvas.getContext("experimental-webgl");
      // }
      // if(gl)this.gl = gl;

      this.registerListeners();
      this.animationFrame(0.01);
      this.initDataView();
    }
  }, {
    key: "onDisable",
    value: function onDisable() {
      this.unregisterListeners();
    }
  }, {
    key: "initDataView",
    value: function initDataView() {
      var _this2 = this;

      if (this.data === undefined) return;
      this.data.getAll().forEach(function (value) {
        return _this2.views.forEach(function (d) {
          return d.onDataAdd(value);
        });
      });
    }
  }, {
    key: "setTool",
    value: function setTool(tool) {
      this.toolType = tool;
      this.tool.onDisable();

      switch (tool) {
        case ToolType.BezierAdd:
          this.tool = new Bezier_BezierAddTool();
          break;

        case ToolType.LineAdd:
          this.tool = new Line_LineAddTool();
          break;

        case ToolType.BSplineAdd:
          this.tool = new BSpline_BSplineAddTool();
          break;

        case ToolType.MovePoint:
          this.tool = new PointTool_PointMoveTool();
          break;

        case ToolType.MoveObj:
          this.tool = new ObjectTool_ObjMoveTool();
          break;

        case ToolType.DelObj:
          this.tool = new ObjectTool_ObjDelTool();
          break;

        case ToolType.None:
        default:
          this.tool = new MouseTool_MouseTool();
          break;
      }

      this.tool.onEnable(this);
    }
  }, {
    key: "unregisterListeners",
    value: function unregisterListeners() {
      this.canvas.removeEventListener('mousedown', this.onMouse);
      this.canvas.removeEventListener('mouseover', this.onMouse);
      this.canvas.removeEventListener('mousemove', this.onMouse);
      this.canvas.removeEventListener('mouseup', this.onMouse);
      this.canvas.removeEventListener('wheel', this.onWheel);
    }
  }, {
    key: "registerListeners",
    value: function registerListeners() {
      this.canvas.addEventListener('mousedown', this.onMouse);
      this.canvas.addEventListener('mouseover', this.onMouse);
      this.canvas.addEventListener('mousemove', this.onMouse);
      this.canvas.addEventListener('mouseup', this.onMouse);
      this.canvas.addEventListener('wheel', this.onWheel);
    }
  }, {
    key: "update",
    value: function update(deltaTime) {
      //update renderer
      if (this.scale == 0) this.currentCamera.position.set(0, 0, 0);else this.currentCamera.position.set(0, 0, 100 / this.scale);
      this.renderer.render(this.currentScene, this.currentCamera);
    }
  }, {
    key: "storeData",
    value: function storeData(value) {
      if (this.data === undefined) return;
      this.data.store(value, this.currentLayer);
      this.views.forEach(function (d) {
        return d.onDataAdd(value);
      });
    }
  }, {
    key: "changeData",
    value: function changeData(value) {
      if (this.data === undefined) return;
      this.data.store(value, this.currentLayer);
      this.views.forEach(function (d) {
        return d.onDataChange(value);
      });
    }
  }, {
    key: "delData",
    value: function delData(value) {
      if (this.data === undefined) return;
      this.data.remove(value, this.currentLayer);
      this.views.forEach(function (d) {
        return d.onDataRemove(value);
      });
    }
  }, {
    key: "clearScene",
    value: function clearScene() {
      while (this.currentScene.children.length > 0) {
        this.currentScene.remove(this.currentScene.children[0]);
      }
    }
  }, {
    key: "open",
    value: function open(file) {
      var ds = assign_default()(new Data_DataStore(), file);

      this.clearScene();
      this.data = ds;
      this.initDataView();
    }
  }, {
    key: "save",
    value: function save() {
      if (this.data === undefined) return;

      var d = stringify_default()(this.data);

      var blob = new Blob([d], {
        type: 'text/plain'
      });
      var objectURL = URL.createObjectURL(blob);
      var link = document.createElement('a');
      link.style.display = 'none';
      document.body.appendChild(link);
      link.href = objectURL;
      link.href = URL.createObjectURL(blob);
      link.download = 'data.dpst';
      link.click();
    }
  }]);

  return PainterApp;
}();
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Toolbar.vue?vue&type=script&lang=ts&









var Toolbarvue_type_script_lang_ts_Toolbar =
/*#__PURE__*/
function (_Vue) {
  Object(inherits["a" /* default */])(Toolbar, _Vue);

  function Toolbar() {
    Object(classCallCheck["a" /* default */])(this, Toolbar);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Toolbar).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Toolbar, [{
    key: "onToolClick",
    value: function onToolClick(name) {
      var tool;

      switch (name) {
        case "MoveObj":
          tool = ToolType.MoveObj;
          break;

        case "LineAdd":
          tool = ToolType.LineAdd;
          break;

        case "BezierAdd":
          tool = ToolType.BezierAdd;
          break;

        case "BSplineAdd":
          tool = ToolType.BSplineAdd;
          break;

        case "DelObj":
          tool = ToolType.DelObj;
          break;

        case "MovePoint":
          tool = ToolType.MovePoint;
          break;

        default:
          tool = ToolType.None;
          break;
      }

      this.$emit("change", tool);
    }
  }]);

  return Toolbar;
}(vue_property_decorator["c" /* Vue */]);

Toolbarvue_type_script_lang_ts_Toolbar = tslib_es6["a" /* __decorate */]([vue_property_decorator["a" /* Component */]], Toolbarvue_type_script_lang_ts_Toolbar);
/* harmony default export */ var Toolbarvue_type_script_lang_ts_ = (Toolbarvue_type_script_lang_ts_Toolbar);
// CONCATENATED MODULE: ./src/components/Toolbar.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Toolbarvue_type_script_lang_ts_ = (Toolbarvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/Toolbar.vue





/* normalize component */

var Toolbar_component = Object(componentNormalizer["a" /* default */])(
  components_Toolbarvue_type_script_lang_ts_,
  Toolbarvue_type_template_id_05dd26e0_render,
  Toolbarvue_type_template_id_05dd26e0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_Toolbar = (Toolbar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c1661e08-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Filebar.vue?vue&type=template&id=20fef445&
var Filebarvue_type_template_id_20fef445_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_c('ui-icon-button',{attrs:{"icon":"save"},on:{"change":_vm.save}}),_c('input',{ref:"uploadinput",staticStyle:{"display":"none"},attrs:{"type":"file","accept":"*/dpst"},on:{"input":_vm.realopen}}),_c('ui-icon-button',{attrs:{"icon":"insert_drive_file"},on:{"change":_vm.open}}),_c('ui-icon-button',{attrs:{"icon":"clear"},on:{"change":_vm.clear}})],1)}
var Filebarvue_type_template_id_20fef445_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Filebar.vue?vue&type=template&id=20fef445&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Filebar.vue?vue&type=script&lang=ts&










var Filebarvue_type_script_lang_ts_Filebar =
/*#__PURE__*/
function (_Vue) {
  Object(inherits["a" /* default */])(Filebar, _Vue);

  function Filebar() {
    Object(classCallCheck["a" /* default */])(this, Filebar);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Filebar).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Filebar, [{
    key: "save",
    value: function save() {
      this.app.save();
    }
  }, {
    key: "open",
    value: function open() {
      this.$refs.uploadinput.value = "";
      this.$refs.uploadinput.click();
    }
  }, {
    key: "clear",
    value: function clear() {
      var d = new Data_DataStore();
      d.addLayer(new Data_Layer());
      this.app.open(d);
      this.app.setTool(ToolType.None);
    }
  }, {
    key: "realopen",
    value: function realopen(e) {
      var _this = this;

      var input = e.target;

      if ('files' in input && input.files.length > 0) {
        var file = input.files[0];
        var reader = new FileReader();

        reader.onload = function (event) {
          if (event.target == null || event.target.result == null) return;
          console.log(event.target.result); // desired file content

          var obj = JSON.parse(event.target.result);

          _this.app.open(obj);
        }; // reader.onerror = error => reject(error)


        reader.readAsText(file); // you could also read images and other binaries
      }
    }
  }]);

  return Filebar;
}(vue_property_decorator["c" /* Vue */]);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["b" /* Prop */])()], Filebarvue_type_script_lang_ts_Filebar.prototype, "app", void 0);

Filebarvue_type_script_lang_ts_Filebar = tslib_es6["a" /* __decorate */]([vue_property_decorator["a" /* Component */]], Filebarvue_type_script_lang_ts_Filebar);
/* harmony default export */ var Filebarvue_type_script_lang_ts_ = (Filebarvue_type_script_lang_ts_Filebar);
// CONCATENATED MODULE: ./src/components/Filebar.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Filebarvue_type_script_lang_ts_ = (Filebarvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/Filebar.vue





/* normalize component */

var Filebar_component = Object(componentNormalizer["a" /* default */])(
  components_Filebarvue_type_script_lang_ts_,
  Filebarvue_type_template_id_20fef445_render,
  Filebarvue_type_template_id_20fef445_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_Filebar = (Filebar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c1661e08-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ColorTool.vue?vue&type=template&id=1a8b745c&scoped=true&
var ColorToolvue_type_template_id_1a8b745c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_c('ui-icon-button',{style:({ color:_vm.foreColor }),attrs:{"icon":"color_lens"},on:{"change":_vm.foreground}}),_c('ui-icon-button',{style:({ color:_vm.backColor }),on:{"change":_vm.background}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":"none","d":"M0 0h24v24H0z"}}),_c('path',{attrs:{"d":"M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67 0 1.38-1.12 2.5-2.5 2.5zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z"}}),_c('circle',{attrs:{"cx":"6.5","cy":"11.5","r":"1.5"}}),_c('circle',{attrs:{"cx":"9.5","cy":"7.5","r":"1.5"}}),_c('circle',{attrs:{"cx":"14.5","cy":"7.5","r":"1.5"}}),_c('circle',{attrs:{"cx":"17.5","cy":"11.5","r":"1.5"}})])]),_c('ui-dialog',{on:{"confirm":_vm.onConfirm},model:{value:(_vm.open),callback:function ($$v) {_vm.open=$$v},expression:"open"}},[_c('ui-dialog-title',[_vm._v(_vm._s(_vm.pickfore?"Foreground":"Background"))]),_c('ui-dialog-content',[_c('chrome-picker',{staticClass:"picker",model:{value:(_vm.tempColor),callback:function ($$v) {_vm.tempColor=$$v},expression:"tempColor"}})],1),_c('ui-dialog-actions')],1)],1)}
var ColorToolvue_type_template_id_1a8b745c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ColorTool.vue?vue&type=template&id=1a8b745c&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-color/dist/vue-color.min.js
var vue_color_min = __webpack_require__("c345");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ColorTool.vue?vue&type=script&lang=ts&









var ColorToolvue_type_script_lang_ts_ColorTool =
/*#__PURE__*/
//@Component
function (_Vue) {
  Object(inherits["a" /* default */])(ColorTool, _Vue);

  function ColorTool() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ColorTool);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(ColorTool).apply(this, arguments));
    _this.open = false;
    _this.foreColor = "#000";
    _this.backColor = "#FFF";
    _this.tempColor = "#FFF";
    _this.pickfore = true;
    return _this;
  }

  Object(createClass["a" /* default */])(ColorTool, [{
    key: "foreground",
    value: function foreground() {
      this.pickfore = true;
      this.tempColor = this.foreColor;
      this.open = true;
    }
  }, {
    key: "background",
    value: function background() {
      this.pickfore = false;
      this.tempColor = this.backColor;
      this.open = true;
    }
  }, {
    key: "onAppChange",
    value: function onAppChange() {
      this.foreColor = this.app.foregroundColor;
      this.backColor = this.app.backgroundColor;
    }
  }, {
    key: "onConfirm",
    value: function onConfirm() {
      if (this.pickfore) {
        this.foreColor = this.tempColor.hex;
        this.app.foregroundColor = this.foreColor;
      } else {
        this.backColor = this.tempColor.hex;
        this.app.backgroundColor = this.backColor;
      }
    }
  }]);

  return ColorTool;
}(vue_property_decorator["c" /* Vue */]);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["b" /* Prop */])()], ColorToolvue_type_script_lang_ts_ColorTool.prototype, "app", void 0);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["d" /* Watch */])("app")], ColorToolvue_type_script_lang_ts_ColorTool.prototype, "onAppChange", null);

ColorToolvue_type_script_lang_ts_ColorTool = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  components: {
    "chrome-picker": vue_color_min["Chrome"]
  }
}) //@Component
], ColorToolvue_type_script_lang_ts_ColorTool);
/* harmony default export */ var ColorToolvue_type_script_lang_ts_ = (ColorToolvue_type_script_lang_ts_ColorTool);
// CONCATENATED MODULE: ./src/components/ColorTool.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_ColorToolvue_type_script_lang_ts_ = (ColorToolvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/ColorTool.vue?vue&type=style&index=0&id=1a8b745c&lang=scss&scoped=true&
var ColorToolvue_type_style_index_0_id_1a8b745c_lang_scss_scoped_true_ = __webpack_require__("6646");

// CONCATENATED MODULE: ./src/components/ColorTool.vue






/* normalize component */

var ColorTool_component = Object(componentNormalizer["a" /* default */])(
  components_ColorToolvue_type_script_lang_ts_,
  ColorToolvue_type_template_id_1a8b745c_scoped_true_render,
  ColorToolvue_type_template_id_1a8b745c_scoped_true_staticRenderFns,
  false,
  null,
  "1a8b745c",
  null
  
)

/* harmony default export */ var components_ColorTool = (ColorTool_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c1661e08-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ViewTool.vue?vue&type=template&id=471de300&scoped=true&
var ViewToolvue_type_template_id_471de300_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"scale"},[_c('ui-slider',{attrs:{"model":_vm.scale},on:{"input":function($event){return _vm.onScaleChange($event)}}})],1)}
var ViewToolvue_type_template_id_471de300_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ViewTool.vue?vue&type=template&id=471de300&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ViewTool.vue?vue&type=script&lang=ts&









var ViewToolvue_type_script_lang_ts_ViewTool =
/*#__PURE__*/
//@Component
function (_Vue) {
  Object(inherits["a" /* default */])(ViewTool, _Vue);

  function ViewTool() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ViewTool);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(ViewTool).apply(this, arguments));
    _this.scale = 100;
    return _this;
  }

  Object(createClass["a" /* default */])(ViewTool, [{
    key: "onAppChange",
    value: function onAppChange() {
      this.scale = this.app.scale * 100;
    } // @Watch("scale")

  }, {
    key: "onScaleChange",
    value: function onScaleChange(e) {
      this.scale = e;
      this.app.scale = this.scale / 100;
    }
  }]);

  return ViewTool;
}(vue_property_decorator["c" /* Vue */]);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["b" /* Prop */])()], ViewToolvue_type_script_lang_ts_ViewTool.prototype, "app", void 0);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["d" /* Watch */])("app")], ViewToolvue_type_script_lang_ts_ViewTool.prototype, "onAppChange", null);

ViewToolvue_type_script_lang_ts_ViewTool = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  components: {
    "chrome-picker": vue_color_min["Chrome"]
  }
}) //@Component
], ViewToolvue_type_script_lang_ts_ViewTool);
/* harmony default export */ var ViewToolvue_type_script_lang_ts_ = (ViewToolvue_type_script_lang_ts_ViewTool);
// CONCATENATED MODULE: ./src/components/ViewTool.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_ViewToolvue_type_script_lang_ts_ = (ViewToolvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/ViewTool.vue?vue&type=style&index=0&id=471de300&lang=scss&scoped=true&
var ViewToolvue_type_style_index_0_id_471de300_lang_scss_scoped_true_ = __webpack_require__("669a");

// CONCATENATED MODULE: ./src/components/ViewTool.vue






/* normalize component */

var ViewTool_component = Object(componentNormalizer["a" /* default */])(
  components_ViewToolvue_type_script_lang_ts_,
  ViewToolvue_type_template_id_471de300_scoped_true_render,
  ViewToolvue_type_template_id_471de300_scoped_true_staticRenderFns,
  false,
  null,
  "471de300",
  null
  
)

/* harmony default export */ var components_ViewTool = (ViewTool_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home.vue?vue&type=script&lang=ts&







 // @ is an alias to /src

 // @ is an alias to /src

 // @ is an alias to /src

 // @ is an alias to /src

 // @ is an alias to /src

var Homevue_type_script_lang_ts_Home =
/*#__PURE__*/
function (_Vue) {
  Object(inherits["a" /* default */])(Home, _Vue);

  function Home() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Home);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Home).apply(this, arguments));
    _this.app = new DPainter_PainterApp();
    return _this;
  }

  Object(createClass["a" /* default */])(Home, [{
    key: "mounted",
    value: function mounted() {
      this.app.onEnable(this.$refs.glCanvas);
    }
  }, {
    key: "destroyed",
    value: function destroyed() {
      this.app.onDisable();
    }
  }, {
    key: "setTool",
    value: function setTool(tool) {
      this.app.setTool(tool);
    }
  }]);

  return Home;
}(vue_property_decorator["c" /* Vue */]);

Homevue_type_script_lang_ts_Home = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  components: {
    Toolbar: components_Toolbar,
    Filebar: components_Filebar,
    ColorTool: components_ColorTool,
    ViewTool: components_ViewTool
  }
})], Homevue_type_script_lang_ts_Home);
/* harmony default export */ var Homevue_type_script_lang_ts_ = (Homevue_type_script_lang_ts_Home);
// CONCATENATED MODULE: ./src/views/Home.vue?vue&type=script&lang=ts&
 /* harmony default export */ var views_Homevue_type_script_lang_ts_ = (Homevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/views/Home.vue?vue&type=style&index=0&id=29d63822&lang=scss&scoped=true&
var Homevue_type_style_index_0_id_29d63822_lang_scss_scoped_true_ = __webpack_require__("15db");

// CONCATENATED MODULE: ./src/views/Home.vue






/* normalize component */

var Home_component = Object(componentNormalizer["a" /* default */])(
  views_Homevue_type_script_lang_ts_,
  Homevue_type_template_id_29d63822_scoped_true_render,
  Homevue_type_template_id_29d63822_scoped_true_staticRenderFns,
  false,
  null,
  "29d63822",
  null
  
)

/* harmony default export */ var views_Home = (Home_component.exports);
// CONCATENATED MODULE: ./src/router.ts



vue_runtime_esm["default"].use(vue_router_esm["a" /* default */]);
/* harmony default export */ var router = (new vue_router_esm["a" /* default */]({
  mode: 'hash',
  base: "",
  routes: [{
    path: '/',
    name: 'home',
    component: views_Home
  }, {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function component() {
      return __webpack_require__.e(/* import() | about */ "about").then(__webpack_require__.bind(null, "f820"));
    }
  }]
}));
// CONCATENATED MODULE: ./src/main.ts






 // import './registerServiceWorker'

vue_runtime_esm["default"].config.productionTip = false;
new vue_runtime_esm["default"]({
  router: router,
  render: function render(h) {
    return h(App);
  }
}).$mount('#app');

/***/ })

/******/ });
//# sourceMappingURL=app.0da82656.js.map