(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cornerstone-core"), require("cornerstone-math"), require("cornerstone-tools"));
	else if(typeof define === 'function' && define.amd)
		define("ohif-segmentation-plugin", ["cornerstone-core", "cornerstone-math", "cornerstone-tools"], factory);
	else if(typeof exports === 'object')
		exports["ohif-segmentation-plugin"] = factory(require("cornerstone-core"), require("cornerstone-math"), require("cornerstone-tools"));
	else
		root["ohif-segmentation-plugin"] = factory(root["cornerstone-core"], root["cornerstone-math"], root["cornerstone-tools"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_cornerstone_core__, __WEBPACK_EXTERNAL_MODULE_cornerstone_math__, __WEBPACK_EXTERNAL_MODULE_cornerstone_tools__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/GeneralAnatomylist.js":
/*!***********************************!*\
  !*** ./src/GeneralAnatomylist.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var json = "{\n  \"SegmentationCategoryTypeContextName\": \"Segmentation category and type - 3D Slicer General Anatomy list\",\n  \"@schema\": \"https://raw.githubusercontent.com/qiicr/dcmqi/master/doc/schemas/segment-context-schema.json#\",\n  \"SegmentationCodes\": {\n    \"Category\": [\n      {\n        \"CodeMeaning\": \"Tissue\",\n        \"CodingSchemeDesignator\": \"SRT\",\n        \"SNOMEDCTConceptID\": \"85756007\",\n        \"cid\": \"7051\",\n        \"UMLSConceptUID\": \"C0040300\",\n        \"CodeValue\": \"T-D0050\",\n        \"contextGroupName\": \"Segmentation Property Categories\",\n        \"Type\": [\n          {\n            \"recommendedDisplayRGBValue\": [\n              128,\n              174,\n              128\n            ],\n            \"CodeMeaning\": \"Tissue\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"tissue\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0040300\",\n            \"CodeValue\": \"T-D0050\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"85756007\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              216,\n              101,\n              79\n            ],\n            \"CodeMeaning\": \"Artery\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"artery\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0555806\",\n            \"CodeValue\": \"T-41066\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"275989006\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              230,\n              220,\n              70\n            ],\n            \"CodeMeaning\": \"Body fat\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"fat\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0344335\",\n            \"CodeValue\": \"F-03D38\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"248300009\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              241,\n              214,\n              145\n            ],\n            \"CodeMeaning\": \"Bone\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"bone\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0262950\",\n            \"CodeValue\": \"T-D016E\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"272673000\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              183,\n              156,\n              220\n            ],\n            \"CodeMeaning\": \"Capillary\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"capillary\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0006901\",\n            \"CodeValue\": \"T-40050\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"20982000\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              111,\n              184,\n              210\n            ],\n            \"CodeMeaning\": \"Cartilage\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"cartilage\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0007301\",\n            \"CodeValue\": \"T-D021B\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"309312004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              111,\n              184,\n              210\n            ],\n            \"CodeMeaning\": \"Connective tissue\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"connective tissue\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0009780\",\n            \"CodeValue\": \"T-1A200\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"21793004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              183,\n              214,\n              211\n            ],\n            \"CodeMeaning\": \"Ligament\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"ligament\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0023685\",\n            \"CodeValue\": \"T-18010\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"52082005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              68,\n              172,\n              100\n            ],\n            \"CodeMeaning\": \"Lymph node\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"lymph node\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0024204\",\n            \"CodeValue\": \"T-C4000\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"59441001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              111,\n              197,\n              131\n            ],\n            \"CodeMeaning\": \"Lymphatic vessel\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"lymphatic vessel\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0229889\",\n            \"CodeValue\": \"T-C6010\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"83555006\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              178,\n              212,\n              242\n            ],\n            \"CodeMeaning\": \"Meniscus\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"meniscus\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0224498\",\n            \"CodeValue\": \"T-15009\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"74135004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              192,\n              104,\n              88\n            ],\n            \"CodeMeaning\": \"Muscle\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"muscle\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0026845\",\n            \"CodeValue\": \"T-13001\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"71616004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              244,\n              214,\n              49\n            ],\n            \"CodeMeaning\": \"Nerve\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"nerve\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C1268169\",\n            \"CodeValue\": \"T-D0598\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"119410002\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              221,\n              130,\n              101\n            ],\n            \"CodeMeaning\": \"Organ\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"organ\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C1285092\",\n            \"CodeValue\": \"T-1A310\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"2861001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              177,\n              122,\n              101\n            ],\n            \"CodeMeaning\": \"Skin\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"skin\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C1123023\",\n            \"CodeValue\": \"T-01000\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"39937001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              152,\n              189,\n              207\n            ],\n            \"CodeMeaning\": \"Tendon\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"tendon\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0039508\",\n            \"CodeValue\": \"T-17010\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"13024002\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              0,\n              151,\n              206\n            ],\n            \"CodeMeaning\": \"Vein\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"vein\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0447146\",\n            \"CodeValue\": \"T-4806E\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"181378009\"\n          }\n        ],\n        \"showAnatomy\": true\n      },\n      {\n        \"CodeMeaning\": \"Anatomical Structure\",\n        \"CodingSchemeDesignator\": \"SRT\",\n        \"SNOMEDCTConceptID\": \"123037004\",\n        \"cid\": \"7051\",\n        \"UMLSConceptUID\": \"C1268086\",\n        \"CodeValue\": \"T-D000A\",\n        \"contextGroupName\": \"Segmentation Property Categories\",\n        \"Type\": [\n          {\n            \"recommendedDisplayRGBValue\": [\n              177,\n              122,\n              101\n            ],\n            \"cid\": \"7154\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"abdomen\",\n            \"CodeValue\": \"T-D4000\",\n            \"UMLSConceptUID\": \"C0000726\",\n            \"CodeMeaning\": \"Abdomen\",\n            \"contextGroupName\": \"Abdominal Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"113345001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              186,\n              124,\n              161\n            ],\n            \"cid\": \"7154\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"abdominal cavity\",\n            \"CodeValue\": \"T-D4010\",\n            \"UMLSConceptUID\": \"C0230168\",\n            \"CodeMeaning\": \"Abdominal cavity\",\n            \"contextGroupName\": \"Abdominal Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"52731004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              171,\n              85,\n              68\n            ],\n            \"cid\": \"7154\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"muscles of abdominal wall\",\n            \"CodeValue\": \"T-14001\",\n            \"UMLSConceptUID\": \"C1279385\",\n            \"CodeMeaning\": \"Abdominal wall muscle\",\n            \"contextGroupName\": \"Abdominal Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"195879000\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              60,\n              143,\n              83\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"adenohypophysis\",\n            \"CodeValue\": \"T-B1100\",\n            \"UMLSConceptUID\": \"C0032008\",\n            \"CodeMeaning\": \"Adenohypophysis\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"62818001\"\n          },\n          {\n            \"contextGroupName\": \"Abdominal Organ Segmentation Types\",\n            \"cid\": \"7154\",\n            \"CodeMeaning\": \"Adrenal gland\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0001625\",\n            \"CodeValue\": \"T-B3000\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  249,\n                  186,\n                  150\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right adrenal gland\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  249,\n                  186,\n                  150\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left adrenal gland\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"23451007\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Amygdala\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0002708\",\n            \"CodeValue\": \"T-A3230\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  98,\n                  153,\n                  112\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right amygdaloid complex\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  98,\n                  153,\n                  112\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left amygdaloid complex\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"4958002\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              255,\n              224,\n              199\n            ],\n            \"cid\": \"4031\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"anus\",\n            \"CodeValue\": \"T-59900\",\n            \"UMLSConceptUID\": \"C0003461\",\n            \"CodeMeaning\": \"Anus\",\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"53505006\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              224,\n              97,\n              76\n            ],\n            \"cid\": \"7152\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"aorta\",\n            \"CodeValue\": \"T-42000\",\n            \"UMLSConceptUID\": \"C0003483\",\n            \"CodeMeaning\": \"Aorta\",\n            \"contextGroupName\": \"Cardiac Structure Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"15825003\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              218,\n              123,\n              97\n            ],\n            \"cid\": \"6113\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"aortic valve\",\n            \"CodeValue\": \"T-35400\",\n            \"UMLSConceptUID\": \"C0003501\",\n            \"CodeMeaning\": \"Aortic Valve\",\n            \"contextGroupName\": \"Mediastinum Anatomy Finding or Feature\",\n            \"SNOMEDCTConceptID\": \"34202007\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              255,\n              244,\n              209\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"arachnoid\",\n            \"CodeValue\": \"T-A1220\",\n            \"UMLSConceptUID\": \"C0003707\",\n            \"CodeMeaning\": \"Arachnoid\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"75042008\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Arcuate Fasciculus\",\n            \"CodingSchemeDesignator\": \"FMA\",\n            \"UMLSConceptUID\": \"C2329633\",\n            \"CodeValue\": \"276650\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  125,\n                  102,\n                  154\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right arcuate fasciculus\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  125,\n                  102,\n                  154\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left arcuate fasciculus\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              255,\n              226,\n              77\n            ],\n            \"cid\": \"7167\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"autonomic nerve\",\n            \"CodeValue\": \"T-A9605\",\n            \"UMLSConceptUID\": \"C0206250\",\n            \"CodeMeaning\": \"Autonomic nerve\",\n            \"contextGroupName\": \"Peripheral Nervous System Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"53520000\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              0,\n              145,\n              30\n            ],\n            \"cid\": \"7154\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"biliary tree\",\n            \"CodeValue\": \"T-60610\",\n            \"UMLSConceptUID\": \"C0005400\",\n            \"CodeMeaning\": \"Bile Duct\",\n            \"contextGroupName\": \"Abdominal Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"28273000\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              222,\n              154,\n              132\n            ],\n            \"cid\": \"7160\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"urinary bladder\",\n            \"CodeValue\": \"T-74000\",\n            \"UMLSConceptUID\": \"C0005682\",\n            \"CodeMeaning\": \"Bladder\",\n            \"contextGroupName\": \"Pelvic Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"89837001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              255,\n              239,\n              172\n            ],\n            \"cid\": \"7155\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"skeleton of thorax\",\n            \"CodeValue\": \"T-D0170\",\n            \"UMLSConceptUID\": \"C0448157\",\n            \"CodeMeaning\": \"Bone of thorax\",\n            \"contextGroupName\": \"Thoracic Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"272710004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              242,\n              206,\n              142\n            ],\n            \"cid\": \"4028\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"skeleton of neck\",\n            \"CodeValue\": \"T-D006D\",\n            \"UMLSConceptUID\": \"C0730130\",\n            \"CodeMeaning\": \"Bone structure of head and/or neck\",\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"312779009\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              250,\n              250,\n              225\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"brain\",\n            \"CodeValue\": \"T-A0100\",\n            \"UMLSConceptUID\": \"C0006104\",\n            \"CodeMeaning\": \"Brain\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"12738006\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              85,\n              188,\n              255\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"CSF space\",\n            \"CodeValue\": \"T-A0109\",\n            \"UMLSConceptUID\": \"C0459387\",\n            \"CodeMeaning\": \"Brain cerebrospinal fluid pathway\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"280371009\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              88,\n              106,\n              215\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"ventricles of brain\",\n            \"CodeValue\": \"T-A1600\",\n            \"UMLSConceptUID\": \"C0007799\",\n            \"CodeMeaning\": \"Brain ventricle\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"35764002\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Caudate nucleus\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0007461\",\n            \"CodeValue\": \"T-A3200\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  30,\n                  111,\n                  85\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right caudate nucleus\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  30,\n                  111,\n                  85\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left caudate nucleus\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"11000004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              244,\n              214,\n              49\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"central nervous system\",\n            \"CodeValue\": \"T-A0090\",\n            \"UMLSConceptUID\": \"C0927232\",\n            \"CodeMeaning\": \"Central nervous system\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"21483005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              194,\n              195,\n              164\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"cerebellar white matter\",\n            \"CodeValue\": \"T-A6080\",\n            \"UMLSConceptUID\": \"C0152381\",\n            \"CodeMeaning\": \"Cerebellar white matter\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"33060004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              88,\n              106,\n              215\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"cerebral aqueduct\",\n            \"CodeValue\": \"T-A1800\",\n            \"UMLSConceptUID\": \"C0007769\",\n            \"CodeMeaning\": \"Cerebral aqueduct\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"80447000\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Cerebral fornix\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0152334\",\n            \"CodeValue\": \"T-A2970\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  64,\n                  123,\n                  147\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right fornix\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  64,\n                  123,\n                  147\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left fornix\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"87463005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              128,\n              174,\n              128\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"cerebral cortex\",\n            \"CodeValue\": \"T-A2020\",\n            \"UMLSConceptUID\": \"C0007776\",\n            \"CodeMeaning\": \"Cerebral Grey Matter\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"40146001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              250,\n              250,\n              225\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"cerebral white matter\",\n            \"CodeValue\": \"T-A2030\",\n            \"UMLSConceptUID\": \"C0152295\",\n            \"CodeMeaning\": \"Cerebral White Matter\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"68523003\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              255,\n              255,\n              207\n            ],\n            \"cid\": \"4031\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"cervical vertebral column\",\n            \"CodeValue\": \"T-11501\",\n            \"UMLSConceptUID\": \"C0728985\",\n            \"CodeMeaning\": \"Cervical spine\",\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"122494005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              188,\n              95,\n              76\n            ],\n            \"cid\": \"7155\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"muscles of thoracic wall\",\n            \"CodeValue\": \"T-14122\",\n            \"UMLSConceptUID\": \"C1269825\",\n            \"CodeMeaning\": \"Chest wall muscle\",\n            \"contextGroupName\": \"Thoracic Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"372074006\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Cingulum\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0228272\",\n            \"CodeValue\": \"T-A2840\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  154,\n                  146,\n                  83\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right cingulum bundle\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  154,\n                  146,\n                  83\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left cingulum bundle\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"37035000\"\n          },\n          {\n            \"contextGroupName\": \"Thoracic Tissue Segmentation Types\",\n            \"cid\": \"7155\",\n            \"CodeMeaning\": \"Clavicle\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0008913\",\n            \"CodeValue\": \"T-12310\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  205,\n                  179,\n                  108\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right clavicle\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  205,\n                  179,\n                  108\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left clavicle\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"51299004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              204,\n              168,\n              143\n            ],\n            \"cid\": \"4031\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"colon\",\n            \"CodeValue\": \"T-59300\",\n            \"UMLSConceptUID\": \"C0009368\",\n            \"CodeMeaning\": \"Colon\",\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"71854001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              97,\n              113,\n              158\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"corpus callosum\",\n            \"CodeValue\": \"T-A2700\",\n            \"UMLSConceptUID\": \"C0010090\",\n            \"CodeMeaning\": \"Corpus callosum\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"88442005\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Corpus striatum\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0010097\",\n            \"CodeValue\": \"T-A3100\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  140,\n                  190\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right striatum\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  140,\n                  190\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left striatum\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"31428008\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              255,\n              234,\n              92\n            ],\n            \"cid\": \"7167\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"cranial nerves\",\n            \"CodeValue\": \"T-A8000\",\n            \"UMLSConceptUID\": \"C0010268\",\n            \"CodeMeaning\": \"Cranial nerve\",\n            \"contextGroupName\": \"Peripheral Nervous System Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"25238003\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Diencephalon\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0012144\",\n            \"CodeValue\": \"T-A0102\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  69,\n                  110,\n                  53\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"diencephalon\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"87563008\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              255,\n              253,\n              229\n            ],\n            \"cid\": \"4031\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"duodenum\",\n            \"CodeValue\": \"T-58200\",\n            \"UMLSConceptUID\": \"C0013303\",\n            \"CodeMeaning\": \"Duodenum\",\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"38848004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              255,\n              244,\n              209\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"dura mater\",\n            \"CodeValue\": \"T-A1120\",\n            \"UMLSConceptUID\": \"C0013313\",\n            \"CodeMeaning\": \"Dura mater\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"18545000\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              211,\n              171,\n              143\n            ],\n            \"cid\": \"7155\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"esophagus\",\n            \"CodeValue\": \"T-56000\",\n            \"UMLSConceptUID\": \"C0014876\",\n            \"CodeMeaning\": \"Esophagus\",\n            \"contextGroupName\": \"Thoracic Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"32849002\"\n          },\n          {\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"cid\": \"4028\",\n            \"CodeMeaning\": \"External ear\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0013453\",\n            \"CodeValue\": \"T-AB100\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  174,\n                  122,\n                  90\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right external ear\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  174,\n                  122,\n                  90\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left external ear\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"28347008\"\n          },\n          {\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"cid\": \"4028\",\n            \"CodeMeaning\": \"Eyeball\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0229242\",\n            \"CodeValue\": \"T-AA770\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  194,\n                  142,\n                  0\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right eyeball\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  194,\n                  142,\n                  0\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left eyeball\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"79652003\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              185,\n              135,\n              134\n            ],\n            \"cid\": \"7160\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"female external genitalia\",\n            \"CodeValue\": \"T-80010\",\n            \"UMLSConceptUID\": \"C0227747\",\n            \"CodeMeaning\": \"Female external genitalia\",\n            \"contextGroupName\": \"Pelvic Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"86969008\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              244,\n              170,\n              147\n            ],\n            \"cid\": \"7160\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"female internal genitalia\",\n            \"CodeValue\": \"T-80020\",\n            \"UMLSConceptUID\": \"C0227748\",\n            \"CodeMeaning\": \"Female internal genitalia\",\n            \"contextGroupName\": \"Pelvic Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"87759004\"\n          },\n          {\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"cid\": \"4031\",\n            \"CodeMeaning\": \"Foot\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0016504\",\n            \"CodeValue\": \"T-D9700\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right foot\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left foot\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"56459004\"\n          },\n          {\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"cid\": \"4031\",\n            \"CodeMeaning\": \"Forearm\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0016536\",\n            \"CodeValue\": \"T-D8500\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right forearm\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left forearm\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"14975008\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              88,\n              106,\n              215\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"fourth ventricle\",\n            \"CodeValue\": \"T-A1820\",\n            \"UMLSConceptUID\": \"C0149556\",\n            \"CodeMeaning\": \"Fourth ventricle\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"35918002\"\n          },\n          {\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"cid\": \"4028\",\n            \"CodeMeaning\": \"Frontal bone\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0016732\",\n            \"CodeValue\": \"T-11110\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  203,\n                  179,\n                  77\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right frontal bone\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  203,\n                  179,\n                  77\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left frontal bone\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"74872008\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Frontal lobe\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0016733\",\n            \"CodeValue\": \"T-A2200\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  83,\n                  146,\n                  164\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right frontal lobe\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  83,\n                  146,\n                  164\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left frontal lobe\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"83251001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              139,\n              150,\n              98\n            ],\n            \"cid\": \"4040\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"gallbladder\",\n            \"CodeValue\": \"T-63000\",\n            \"UMLSConceptUID\": \"C0016976\",\n            \"CodeMeaning\": \"Gallbladder\",\n            \"contextGroupName\": \"Endoscopy Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"28231008\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Globus pallidus\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0017651\",\n            \"CodeValue\": \"T-A3500\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  48,\n                  129,\n                  126\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right pallidum\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  48,\n                  129,\n                  126\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left pallidum\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"14738005\"\n          },\n          {\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"cid\": \"4031\",\n            \"CodeMeaning\": \"Hand\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0018563\",\n            \"CodeValue\": \"T-D8700\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right hand\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left hand\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"85562004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              177,\n              122,\n              101\n            ],\n            \"cid\": \"4031\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"head\",\n            \"CodeValue\": \"T-D1100\",\n            \"UMLSConceptUID\": \"C0018670\",\n            \"CodeMeaning\": \"Head\",\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"69536005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              206,\n              110,\n              84\n            ],\n            \"cid\": \"7152\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"heart\",\n            \"CodeValue\": \"T-32000\",\n            \"UMLSConceptUID\": \"C0018787\",\n            \"CodeMeaning\": \"Heart\",\n            \"contextGroupName\": \"Cardiac Structure Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"80891009\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              250,\n              210,\n              139\n            ],\n            \"cid\": \"4028\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"hyoid bone\",\n            \"CodeValue\": \"T-11190\",\n            \"UMLSConceptUID\": \"C0020417\",\n            \"CodeMeaning\": \"Hyoid bone\",\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"21387005\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Inferior cerebellar peduncle\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0152393\",\n            \"CodeValue\": \"T-A6640\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  186,\n                  135,\n                  135\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right inferior cerebellar peduncle\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  186,\n                  135,\n                  135\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left inferior cerebellar peduncle\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"67701001\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Inferior longitudinal fasciculus\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0228273\",\n            \"CodeValue\": \"T-A2850\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  159,\n                  116,\n                  163\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right inferior longitudinal fasciculus\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  159,\n                  116,\n                  163\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left inferior longitudinal fasciculus\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"55233005\"\n          },\n          {\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"cid\": \"4028\",\n            \"CodeMeaning\": \"Inner ear\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0022889\",\n            \"CodeValue\": \"T-AB700\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  229,\n                  147,\n                  118\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right inner ear\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  229,\n                  147,\n                  118\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left inner ear\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"22945000\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Insula\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0021640\",\n            \"CodeValue\": \"T-A2610\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  188,\n                  135,\n                  166\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right insular lobe\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  188,\n                  135,\n                  166\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left insular lobe\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"36169008\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              233,\n              138,\n              112\n            ],\n            \"cid\": \"6116\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"atrial septum\",\n            \"CodeValue\": \"T-32150\",\n            \"UMLSConceptUID\": \"C0225836\",\n            \"CodeMeaning\": \"Interatrial septum\",\n            \"contextGroupName\": \"Muscular Anatomy\",\n            \"SNOMEDCTConceptID\": \"58095006\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              195,\n              100,\n              73\n            ],\n            \"cid\": \"6116\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"ventricular septum\",\n            \"CodeValue\": \"T-32410\",\n            \"UMLSConceptUID\": \"C0225870\",\n            \"CodeMeaning\": \"Interventricular septum\",\n            \"contextGroupName\": \"Muscular Anatomy\",\n            \"SNOMEDCTConceptID\": \"589001\"\n          },\n          {\n            \"contextGroupName\": \"Abdominal Organ Segmentation Types\",\n            \"cid\": \"7154\",\n            \"CodeMeaning\": \"Kidney\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0022646\",\n            \"CodeValue\": \"T-71000\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  185,\n                  102,\n                  83\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right kidney\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  185,\n                  102,\n                  83\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left kidney\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"64033007\"\n          },\n          {\n            \"contextGroupName\": \"Endoscopy Anatomic Regions\",\n            \"cid\": \"4040\",\n            \"CodeMeaning\": \"Knee\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C1456798\",\n            \"CodeValue\": \"T-D9200\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right knee\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left knee\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"72696002\"\n          },\n          {\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"cid\": \"4028\",\n            \"CodeMeaning\": \"Lacrimal bone\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0222733\",\n            \"CodeValue\": \"T-1115A\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  255,\n                  250,\n                  160\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right lacrimal bone\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"6229007\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              150,\n              208,\n              243\n            ],\n            \"cid\": \"4040\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"larynx\",\n            \"CodeValue\": \"T-24100\",\n            \"UMLSConceptUID\": \"C0023078\",\n            \"CodeMeaning\": \"Larynx\",\n            \"contextGroupName\": \"Endoscopy Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"4596009\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Lateral corticospinal tract\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0152402\",\n            \"CodeValue\": \"T-A7093\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  201,\n                  160,\n                  133\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right corticospinal tract\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  201,\n                  160,\n                  133\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left corticospinal tract\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"461002\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Lateral ventricle\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0152279\",\n            \"CodeValue\": \"T-A1650\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  88,\n                  106,\n                  215\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right lateral ventricle\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  88,\n                  106,\n                  215\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left lateral ventricle\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"66720007\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              152,\n              55,\n              13\n            ],\n            \"cid\": \"7152\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"left ventricle of heart\",\n            \"CodeValue\": \"T-32600\",\n            \"UMLSConceptUID\": \"C0225897\",\n            \"CodeMeaning\": \"Left Ventricle\",\n            \"contextGroupName\": \"Cardiac Structure Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"87878005\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Limbic lobe\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0458337\",\n            \"CodeValue\": \"T-A0036\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  154,\n                  150,\n                  201\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right limbic lobe\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  154,\n                  150,\n                  201\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left limbic lobe\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"279215006\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              188,\n              91,\n              95\n            ],\n            \"cid\": \"4028\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"lips\",\n            \"CodeValue\": \"T-52000\",\n            \"UMLSConceptUID\": \"C0023759\",\n            \"CodeMeaning\": \"Lip\",\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"48477009\"\n          },\n          {\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"cid\": \"4031\",\n            \"CodeMeaning\": \"Lower leg\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C1140621\",\n            \"CodeValue\": \"T-D9400\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right leg\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left leg\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"30021000\"\n          },\n          {\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"cid\": \"4031\",\n            \"CodeMeaning\": \"Lower limb\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0023216\",\n            \"CodeValue\": \"T-D9000\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right lower limb\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left lower limb\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"61685007\"\n          },\n          {\n            \"contextGroupName\": \"Thoracic Tissue Segmentation Types\",\n            \"cid\": \"7155\",\n            \"CodeMeaning\": \"Lower lobe of lung\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0225758\",\n            \"CodeValue\": \"T-28830\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  224,\n                  186,\n                  162\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"inferior lobe of right lung\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  224,\n                  186,\n                  162\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"inferior lobe of left lung\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"90572001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              212,\n              188,\n              102\n            ],\n            \"cid\": \"4031\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"lumbar vertebral column\",\n            \"CodeValue\": \"T-11503\",\n            \"UMLSConceptUID\": \"C0024091\",\n            \"CodeMeaning\": \"Lumbar spine\",\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"122496007\"\n          },\n          {\n            \"contextGroupName\": \"Thoracic Tissue Segmentation Types\",\n            \"cid\": \"7155\",\n            \"CodeMeaning\": \"Lung\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0024109\",\n            \"CodeValue\": \"T-28000\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  197,\n                  165,\n                  145\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right lung\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  197,\n                  165,\n                  145\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left lung\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"39607008\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              185,\n              135,\n              134\n            ],\n            \"cid\": \"7160\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"male external genitalia\",\n            \"CodeValue\": \"T-90010\",\n            \"UMLSConceptUID\": \"C0227922\",\n            \"CodeMeaning\": \"Male external genitalia\",\n            \"contextGroupName\": \"Pelvic Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"90418005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              216,\n              146,\n              127\n            ],\n            \"cid\": \"7160\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"male internal genitalia\",\n            \"CodeValue\": \"T-90020\",\n            \"UMLSConceptUID\": \"C0227923\",\n            \"CodeMeaning\": \"Male internal genitalia\",\n            \"contextGroupName\": \"Pelvic Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"38242008\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              222,\n              198,\n              101\n            ],\n            \"cid\": \"4031\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"mandible\",\n            \"CodeValue\": \"T-11180\",\n            \"UMLSConceptUID\": \"C0024687\",\n            \"CodeMeaning\": \"Mandible\",\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"91609006\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Medial Lemniscus\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0228420\",\n            \"CodeValue\": \"T-A5271\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  174,\n                  140,\n                  103\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right medial lemniscus\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  174,\n                  140,\n                  103\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left medial lemniscus\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"30114003\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              255,\n              244,\n              209\n            ],\n            \"cid\": \"7155\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"mediastinum\",\n            \"CodeValue\": \"T-D3300\",\n            \"UMLSConceptUID\": \"C0025066\",\n            \"CodeMeaning\": \"Mediastinum\",\n            \"contextGroupName\": \"Thoracic Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"72410000\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              255,\n              244,\n              209\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"meninges\",\n            \"CodeValue\": \"T-A1110\",\n            \"UMLSConceptUID\": \"C0025285\",\n            \"CodeMeaning\": \"Meninges\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"1231004\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Middle cerebellar peduncle\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0152392\",\n            \"CodeValue\": \"T-A6630\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  148,\n                  120,\n                  72\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right middle cerebellar peduncle\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  148,\n                  120,\n                  72\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left middle cerebellar peduncle\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"33723005\"\n          },\n          {\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"cid\": \"4028\",\n            \"CodeMeaning\": \"Middle ear\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0013455\",\n            \"CodeValue\": \"T-AB300\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  201,\n                  112,\n                  73\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right middle ear\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  201,\n                  112,\n                  73\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left middle ear\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"25342003\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              202,\n              164,\n              140\n            ],\n            \"cid\": \"7155\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"middle lobe of right lung\",\n            \"CodeValue\": \"T-28300\",\n            \"UMLSConceptUID\": \"C0225757\",\n            \"CodeMeaning\": \"Middle lobe of right lung\",\n            \"contextGroupName\": \"Thoracic Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"72481006\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              159,\n              63,\n              27\n            ],\n            \"cid\": \"6113\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"mitral valve\",\n            \"CodeValue\": \"T-35300\",\n            \"UMLSConceptUID\": \"C0026264\",\n            \"CodeMeaning\": \"Mitral Valve\",\n            \"contextGroupName\": \"Mediastinum Anatomy Finding or Feature\",\n            \"SNOMEDCTConceptID\": \"91134007\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              201,\n              121,\n              77\n            ],\n            \"cid\": \"4028\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"muscles of head\",\n            \"CodeValue\": \"T-13100\",\n            \"UMLSConceptUID\": \"C0224097\",\n            \"CodeMeaning\": \"Muscle of head\",\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"22688005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              213,\n              124,\n              109\n            ],\n            \"cid\": \"4028\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"muscles of neck\",\n            \"CodeValue\": \"T-13300\",\n            \"UMLSConceptUID\": \"C0027532\",\n            \"CodeMeaning\": \"Muscle of neck\",\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"81727001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              177,\n              122,\n              101\n            ],\n            \"cid\": \"4031\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"neck\",\n            \"CodeValue\": \"T-D1600\",\n            \"UMLSConceptUID\": \"C0027530\",\n            \"CodeMeaning\": \"Neck\",\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"45048000\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              92,\n              162,\n              109\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"neurohypophysis\",\n            \"CodeValue\": \"T-B1200\",\n            \"UMLSConceptUID\": \"C0032009\",\n            \"CodeMeaning\": \"Neurohypophysis\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"37512009\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Occipital lobe\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0028785\",\n            \"CodeValue\": \"T-A2400\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  182,\n                  166,\n                  110\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right occipital lobe\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  182,\n                  166,\n                  110\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left occipital lobe\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"31065004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              234,\n              234,\n              194\n            ],\n            \"cid\": \"7154\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"omentum\",\n            \"CodeValue\": \"T-D4600\",\n            \"UMLSConceptUID\": \"C0028977\",\n            \"CodeMeaning\": \"Omentum\",\n            \"contextGroupName\": \"Abdominal Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"27398004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              99,\n              106,\n              24\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"optic chiasm\",\n            \"CodeValue\": \"T-A800B\",\n            \"UMLSConceptUID\": \"C0029126\",\n            \"CodeMeaning\": \"Optic chiasm\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"244453006\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Optic radiation\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0228277\",\n            \"CodeValue\": \"T-A2880\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  78,\n                  152,\n                  141\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right optic radiation\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  78,\n                  152,\n                  141\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left optic radiation\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"70105001\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Optic tract\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0152405\",\n            \"CodeValue\": \"T-A8060\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  156,\n                  171,\n                  108\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right optic tract\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  156,\n                  171,\n                  108\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left optic tract\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"53238003\"\n          },\n          {\n            \"contextGroupName\": \"Pelvic Organ Segmentation Types\",\n            \"cid\": \"7160\",\n            \"CodeMeaning\": \"Ovary\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0029939\",\n            \"CodeValue\": \"T-87000\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  213,\n                  141,\n                  113\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right ovary\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  213,\n                  141,\n                  113\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left ovary\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"15497006\"\n          },\n          {\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"cid\": \"4028\",\n            \"CodeMeaning\": \"Palatine bone\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0222734\",\n            \"CodeValue\": \"T-11160\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  242,\n                  217,\n                  123\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right palatine bone\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  242,\n                  217,\n                  123\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left palatine bone\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"51283005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              249,\n              180,\n              111\n            ],\n            \"cid\": \"4030\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"pancreas\",\n            \"CodeValue\": \"T-65000\",\n            \"UMLSConceptUID\": \"C0030274\",\n            \"CodeMeaning\": \"Pancreas\",\n            \"contextGroupName\": \"CT, MR and PET Anatomy Imaged\",\n            \"SNOMEDCTConceptID\": \"15776009\"\n          },\n          {\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"cid\": \"4028\",\n            \"CodeMeaning\": \"Parietal bone\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0030558\",\n            \"CodeValue\": \"T-11120\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  229,\n                  204,\n                  109\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right parietal bone\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  229,\n                  204,\n                  109\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left parietal bone\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"24924006\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Parietal lobe\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0030560\",\n            \"CodeValue\": \"T-A2300\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  141,\n                  93,\n                  137\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right parietal lobe\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  141,\n                  93,\n                  137\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left parietal lobe\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"16630005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              184,\n              122,\n              154\n            ],\n            \"cid\": \"7152\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"pericardial cavity\",\n            \"CodeValue\": \"T-39050\",\n            \"UMLSConceptUID\": \"C0225972\",\n            \"CodeMeaning\": \"Pericardial cavity\",\n            \"contextGroupName\": \"Cardiac Structure Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"25489000\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              255,\n              244,\n              209\n            ],\n            \"cid\": \"7152\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"pericardium\",\n            \"CodeValue\": \"T-39000\",\n            \"UMLSConceptUID\": \"C0031050\",\n            \"CodeMeaning\": \"Pericardium\",\n            \"contextGroupName\": \"Cardiac Structure Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"76848001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              224,\n              194,\n              0\n            ],\n            \"cid\": \"7167\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"peripheral nerve\",\n            \"CodeValue\": \"T-A0500\",\n            \"UMLSConceptUID\": \"C0031119\",\n            \"CodeMeaning\": \"Peripheral nerve\",\n            \"contextGroupName\": \"Peripheral Nervous System Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"84782009\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              216,\n              186,\n              0\n            ],\n            \"cid\": \"7167\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"peripheral nervous system\",\n            \"CodeValue\": \"T-A0140\",\n            \"UMLSConceptUID\": \"C0206417\",\n            \"CodeMeaning\": \"Peripheral nervous system\",\n            \"contextGroupName\": \"Peripheral Nervous System Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"3058005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              255,\n              255,\n              220\n            ],\n            \"cid\": \"7154\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"peritoneum\",\n            \"CodeValue\": \"T-D4400\",\n            \"UMLSConceptUID\": \"C0031153\",\n            \"CodeMeaning\": \"Peritioneum\",\n            \"contextGroupName\": \"Abdominal Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"15425007\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              204,\n              142,\n              178\n            ],\n            \"cid\": \"7154\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"peritoneal cavity\",\n            \"CodeValue\": \"T-D4425\",\n            \"UMLSConceptUID\": \"C1704247\",\n            \"CodeMeaning\": \"Peritoneal cavity\",\n            \"contextGroupName\": \"Abdominal Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"83670000\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              184,\n              105,\n              108\n            ],\n            \"cid\": \"4040\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"pharynx\",\n            \"CodeValue\": \"T-55000\",\n            \"UMLSConceptUID\": \"C0031354\",\n            \"CodeMeaning\": \"Pharynx\",\n            \"contextGroupName\": \"Endoscopy Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"54066008\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              255,\n              244,\n              209\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"pia mater\",\n            \"CodeValue\": \"T-A1280\",\n            \"UMLSConceptUID\": \"C0031869\",\n            \"CodeMeaning\": \"Pia mater\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"23180006\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              253,\n              135,\n              192\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"pineal gland\",\n            \"CodeValue\": \"T-B2000\",\n            \"UMLSConceptUID\": \"C0031939\",\n            \"CodeMeaning\": \"Pineal Gland\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"45793000\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              57,\n              157,\n              110\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"pituitary gland\",\n            \"CodeValue\": \"T-B1000\",\n            \"UMLSConceptUID\": \"C0032005\",\n            \"CodeMeaning\": \"Pituitary\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"56329008\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              126,\n              161,\n              197\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"posterior commissure\",\n            \"CodeValue\": \"T-A4904\",\n            \"UMLSConceptUID\": \"C0152327\",\n            \"CodeMeaning\": \"Posterior cerebral commissure\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"279336005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              230,\n              158,\n              140\n            ],\n            \"cid\": \"7160\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"prostate\",\n            \"CodeValue\": \"T-92000\",\n            \"UMLSConceptUID\": \"C0033572\",\n            \"CodeMeaning\": \"Prostate\",\n            \"contextGroupName\": \"Pelvic Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"41216001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              225,\n              130,\n              104\n            ],\n            \"cid\": \"6113\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"pulmonary valve\",\n            \"CodeValue\": \"T-35200\",\n            \"UMLSConceptUID\": \"C0034086\",\n            \"CodeMeaning\": \"Pulmonary valve\",\n            \"contextGroupName\": \"Mediastinum Anatomy Finding or Feature\",\n            \"SNOMEDCTConceptID\": \"39057004\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Putamen\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0034169\",\n            \"CodeValue\": \"T-A3400\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  210,\n                  157,\n                  166\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right putamen\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  210,\n                  157,\n                  166\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left putamen\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"89278009\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              180,\n              119,\n              153\n            ],\n            \"cid\": \"7154\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"retroperitoneal space\",\n            \"CodeValue\": \"T-D4900\",\n            \"UMLSConceptUID\": \"C0035359\",\n            \"CodeMeaning\": \"Retroperitoneal space\",\n            \"contextGroupName\": \"Abdominal Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"82849001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              181,\n              85,\n              57\n            ],\n            \"cid\": \"7152\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"right ventricle of heart\",\n            \"CodeValue\": \"T-32500\",\n            \"UMLSConceptUID\": \"C0225883\",\n            \"CodeMeaning\": \"Right Ventricle\",\n            \"contextGroupName\": \"Cardiac Structure Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"53085002\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              70,\n              163,\n              117\n            ],\n            \"cid\": \"4028\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"salivary glands\",\n            \"CodeValue\": \"T-61007\",\n            \"UMLSConceptUID\": \"C0036098\",\n            \"CodeMeaning\": \"Salivary gland\",\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"385294005\"\n          },\n          {\n            \"contextGroupName\": \"Pelvic Organ Segmentation Types\",\n            \"cid\": \"7160\",\n            \"CodeMeaning\": \"Seminal Vesicle\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0036628\",\n            \"CodeValue\": \"T-93000\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  245,\n                  172,\n                  147\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right seminal vesicle\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  245,\n                  172,\n                  147\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left seminal vesicle\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"64739004\"\n          },\n          {\n            \"contextGroupName\": \"Endoscopy Anatomic Regions\",\n            \"cid\": \"4040\",\n            \"CodeMeaning\": \"Shoulder\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0037004\",\n            \"CodeValue\": \"T-D2220\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right shoulder\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left shoulder\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"16982005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              177,\n              124,\n              92\n            ],\n            \"cid\": \"7154\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"skin of abdominal wall\",\n            \"CodeValue\": \"T-02480\",\n            \"UMLSConceptUID\": \"C0222166\",\n            \"CodeMeaning\": \"Skin of abdomen\",\n            \"contextGroupName\": \"Abdominal Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"75093004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              173,\n              121,\n              88\n            ],\n            \"cid\": \"7155\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"skin of thoracic wall\",\n            \"CodeValue\": \"T-02424\",\n            \"UMLSConceptUID\": \"C0222149\",\n            \"CodeMeaning\": \"Skin of chest\",\n            \"contextGroupName\": \"Thoracic Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"74160004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              241,\n              213,\n              144\n            ],\n            \"cid\": \"4031\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"skull\",\n            \"CodeValue\": \"T-11100\",\n            \"UMLSConceptUID\": \"C0037303\",\n            \"CodeMeaning\": \"Skull\",\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"89546000\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              205,\n              167,\n              142\n            ],\n            \"cid\": \"7154\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"small bowel\",\n            \"CodeValue\": \"T-58000\",\n            \"UMLSConceptUID\": \"C0021852\",\n            \"CodeMeaning\": \"Small Intestine\",\n            \"contextGroupName\": \"Abdominal Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"30315005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              182,\n              105,\n              107\n            ],\n            \"cid\": \"4028\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"soft palate\",\n            \"CodeValue\": \"T-51120\",\n            \"UMLSConceptUID\": \"C0030219\",\n            \"CodeMeaning\": \"Soft palate\",\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"49460000\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              244,\n              214,\n              49\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"spinal cord\",\n            \"CodeValue\": \"T-A7010\",\n            \"UMLSConceptUID\": \"C0037925\",\n            \"CodeMeaning\": \"Spinal cord\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"2748008\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              200,\n              200,\n              215\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"gray matter of spinal cord\",\n            \"CodeValue\": \"T-A7020\",\n            \"UMLSConceptUID\": \"C0475853\",\n            \"CodeMeaning\": \"Spinal cord gray matter\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"12958003\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              250,\n              250,\n              225\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"white matter of spinal cord\",\n            \"CodeValue\": \"T-A7070\",\n            \"UMLSConceptUID\": \"C0458457\",\n            \"CodeMeaning\": \"Spinal cord white matter\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"27088001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              244,\n              217,\n              154\n            ],\n            \"cid\": \"7155\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"sternum\",\n            \"CodeValue\": \"T-11210\",\n            \"UMLSConceptUID\": \"C0038293\",\n            \"CodeMeaning\": \"Sternum\",\n            \"contextGroupName\": \"Thoracic Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"56873002\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              216,\n              132,\n              105\n            ],\n            \"cid\": \"4031\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"stomach\",\n            \"CodeValue\": \"T-57000\",\n            \"UMLSConceptUID\": \"C0038351\",\n            \"CodeMeaning\": \"Stomach\",\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"69695003\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              88,\n              106,\n              215\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"subarachnoid space\",\n            \"CodeValue\": \"T-A1500\",\n            \"UMLSConceptUID\": \"C0038527\",\n            \"CodeMeaning\": \"Subarachnoid space\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"35951006\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Substantia nigra\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0038590\",\n            \"CodeValue\": \"T-A5160\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  0,\n                  108,\n                  112\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right substantia nigra\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  0,\n                  108,\n                  112\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left substantia nigra\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"70007007\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Superior longitudinal fasciculus\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0228270\",\n            \"CodeValue\": \"T-A2820\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  127,\n                  150,\n                  88\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right superior longitudinal fasciculus\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  127,\n                  150,\n                  88\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left superior longitudinal fasciculus\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"89202009\"\n          },\n          {\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"cid\": \"4028\",\n            \"CodeMeaning\": \"Temporal bone\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0039484\",\n            \"CodeValue\": \"T-11130\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  255,\n                  243,\n                  152\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right temporal bone\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  255,\n                  243,\n                  152\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left temporal bone\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"60911003\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Temporal lobe\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0039485\",\n            \"CodeValue\": \"T-A2500\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  162,\n                  115,\n                  105\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right temporal lobe\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  162,\n                  115,\n                  105\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left temporal lobe\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"78277001\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Thalamus\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0458271\",\n            \"CodeValue\": \"T-D0593\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  122,\n                  101,\n                  38\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right thalamus\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  122,\n                  101,\n                  38\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left thalamus\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"119406000\"\n          },\n          {\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"cid\": \"4031\",\n            \"CodeMeaning\": \"Thigh\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0039866\",\n            \"CodeValue\": \"T-D9100\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right thigh\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left thigh\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"68367000\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              226,\n              202,\n              134\n            ],\n            \"cid\": \"7155\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"thoracic vertebral column\",\n            \"CodeValue\": \"T-11502\",\n            \"UMLSConceptUID\": \"C0581269\",\n            \"CodeMeaning\": \"Thoracic spine\",\n            \"contextGroupName\": \"Thoracic Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"122495006\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              177,\n              122,\n              101\n            ],\n            \"cid\": \"7155\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"thorax\",\n            \"CodeValue\": \"T-D3000\",\n            \"UMLSConceptUID\": \"C0817096\",\n            \"CodeMeaning\": \"Thorax\",\n            \"contextGroupName\": \"Thoracic Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"51185008\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              47,\n              150,\n              103\n            ],\n            \"cid\": \"7155\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"thymus\",\n            \"CodeValue\": \"T-C8000\",\n            \"UMLSConceptUID\": \"C0040113\",\n            \"CodeMeaning\": \"Thymus\",\n            \"contextGroupName\": \"Thoracic Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"9875009\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              62,\n              162,\n              114\n            ],\n            \"cid\": \"6113\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"thyroid gland\",\n            \"CodeValue\": \"T-B6000\",\n            \"UMLSConceptUID\": \"C0040132\",\n            \"CodeMeaning\": \"Thyroid\",\n            \"contextGroupName\": \"Mediastinum Anatomy Finding or Feature\",\n            \"SNOMEDCTConceptID\": \"69748006\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              166,\n              84,\n              94\n            ],\n            \"cid\": \"4028\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"tongue\",\n            \"CodeValue\": \"T-53000\",\n            \"UMLSConceptUID\": \"C0040408\",\n            \"CodeMeaning\": \"Tongue\",\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"21974007\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              255,\n              250,\n              220\n            ],\n            \"cid\": \"4028\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"teeth\",\n            \"CodeValue\": \"T-54010\",\n            \"UMLSConceptUID\": \"C0040426\",\n            \"CodeMeaning\": \"Tooth\",\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"38199008\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              182,\n              228,\n              255\n            ],\n            \"cid\": \"7155\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"trachea\",\n            \"CodeValue\": \"T-25000\",\n            \"UMLSConceptUID\": \"C0040578\",\n            \"CodeMeaning\": \"Trachea\",\n            \"contextGroupName\": \"Thoracic Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"44567001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              166,\n              70,\n              38\n            ],\n            \"cid\": \"6113\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"tricuspid valve\",\n            \"CodeValue\": \"T-35100\",\n            \"UMLSConceptUID\": \"C0040960\",\n            \"CodeMeaning\": \"Tricuspid Valve\",\n            \"contextGroupName\": \"Mediastinum Anatomy Finding or Feature\",\n            \"SNOMEDCTConceptID\": \"46030003\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Uncinate fasciculus\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0228271\",\n            \"CodeValue\": \"T-A2830\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  106,\n                  174,\n                  155\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right uncinate fasciculus\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  106,\n                  174,\n                  155\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left uncinate fasciculus\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"26230003\"\n          },\n          {\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"cid\": \"4031\",\n            \"CodeMeaning\": \"Upper arm\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0446516\",\n            \"CodeValue\": \"T-D8200\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right arm\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left arm\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"40983000\"\n          },\n          {\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"cid\": \"4031\",\n            \"CodeMeaning\": \"Upper limb\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0016555\",\n            \"CodeValue\": \"T-D8000\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right upper limb\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left upper limb\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"53120007\"\n          },\n          {\n            \"contextGroupName\": \"Thoracic Tissue Segmentation Types\",\n            \"cid\": \"7155\",\n            \"CodeMeaning\": \"Upper lobe of lung\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0225756\",\n            \"CodeValue\": \"T-28820\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  172,\n                  138,\n                  115\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"superior lobe of right lung\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  172,\n                  138,\n                  115\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"superior lobe of left lung\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"45653009\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              124,\n              186,\n              223\n            ],\n            \"cid\": \"4031\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"urethra\",\n            \"CodeValue\": \"T-75000\",\n            \"UMLSConceptUID\": \"C0041967\",\n            \"CodeMeaning\": \"Urethra\",\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"13648007\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              203,\n              136,\n              116\n            ],\n            \"cid\": \"7154\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"urinary system\",\n            \"CodeValue\": \"T-70001\",\n            \"UMLSConceptUID\": \"C1508753\",\n            \"CodeMeaning\": \"Urinary system\",\n            \"contextGroupName\": \"Abdominal Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"122489005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              255,\n              181,\n              158\n            ],\n            \"cid\": \"7160\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"uterus\",\n            \"CodeValue\": \"T-83000\",\n            \"UMLSConceptUID\": \"C0042149\",\n            \"CodeMeaning\": \"Uterus\",\n            \"contextGroupName\": \"Pelvic Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"35039007\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              193,\n              123,\n              103\n            ],\n            \"cid\": \"7160\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"vagina\",\n            \"CodeValue\": \"T-82000\",\n            \"UMLSConceptUID\": \"C0042232\",\n            \"CodeMeaning\": \"Vagina\",\n            \"contextGroupName\": \"Pelvic Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"76784001\"\n          },\n          {\n            \"contextGroupName\": \"Pelvic Organ Segmentation Types\",\n            \"cid\": \"7160\",\n            \"CodeMeaning\": \"Vas deferens\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0042360\",\n            \"CodeValue\": \"T-96000\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  241,\n                  172,\n                  151\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right deferent duct\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  241,\n                  172,\n                  151\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left deferent duct\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"57671007\"\n          },\n          {\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"cid\": \"4031\",\n            \"CodeMeaning\": \"Zygoma\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0043539\",\n            \"CodeValue\": \"T-11166\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  255,\n                  255,\n                  167\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right zygomatic bone\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"13881006\"\n          }\n        ],\n        \"showAnatomy\": false\n      },\n      {\n        \"CodeMeaning\": \"Morphologically Altered Structure\",\n        \"CodingSchemeDesignator\": \"SRT\",\n        \"SNOMEDCTConceptID\": \"49755003\",\n        \"cid\": \"7051\",\n        \"UMLSConceptUID\": \"C0221198\",\n        \"CodeValue\": \"M-01000\",\n        \"contextGroupName\": \"Segmentation Property Categories\",\n        \"Type\": [\n          {\n            \"recommendedDisplayRGBValue\": [\n              145,\n              60,\n              66\n            ],\n            \"CodeMeaning\": \"Blood clot\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"clot\",\n            \"cid\": \"7159\",\n            \"UMLSConceptUID\": \"C0302148\",\n            \"CodeValue\": \"M-35000\",\n            \"contextGroupName\": \"Lesion Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"75753009\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              205,\n              205,\n              100\n            ],\n            \"CodeMeaning\": \"Cyst\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"cyst\",\n            \"cid\": \"7159\",\n            \"UMLSConceptUID\": \"C0010709\",\n            \"CodeValue\": \"M-3340A\",\n            \"contextGroupName\": \"Lesion Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"367643001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              140,\n              224,\n              228\n            ],\n            \"CodeMeaning\": \"Edema\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"edema\",\n            \"cid\": \"7159\",\n            \"UMLSConceptUID\": \"C0013604\",\n            \"CodeValue\": \"M-36300\",\n            \"contextGroupName\": \"Lesion Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"79654002\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              150,\n              98,\n              83\n            ],\n            \"CodeMeaning\": \"Embolus\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"embolism\",\n            \"cid\": \"7159\",\n            \"UMLSConceptUID\": \"C1704212\",\n            \"CodeValue\": \"M-35300\",\n            \"contextGroupName\": \"Lesion Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"55584005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              188,\n              65,\n              28\n            ],\n            \"CodeMeaning\": \"Hemorrhage\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"bleeding\",\n            \"cid\": \"7159\",\n            \"UMLSConceptUID\": \"C0019080\",\n            \"CodeValue\": \"M-37000\",\n            \"contextGroupName\": \"Lesion Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"50960005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              144,\n              238,\n              144\n            ],\n            \"CodeMeaning\": \"Mass\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"mass\",\n            \"cid\": \"7159\",\n            \"UMLSConceptUID\": \"C0577559\",\n            \"CodeValue\": \"M-03000\",\n            \"contextGroupName\": \"Lesion Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"4147007\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              216,\n              191,\n              216\n            ],\n            \"CodeMeaning\": \"Necrosis\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"necrosis\",\n            \"cid\": \"7159\",\n            \"UMLSConceptUID\": \"C0027540\",\n            \"CodeValue\": \"M-54000\",\n            \"contextGroupName\": \"Lesion Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"6574001\"\n          }\n        ],\n        \"showAnatomy\": true\n      },\n      {\n        \"CodeMeaning\": \"Body Substance\",\n        \"CodingSchemeDesignator\": \"SRT\",\n        \"SNOMEDCTConceptID\": \"91720002\",\n        \"cid\": \"\",\n        \"UMLSConceptUID\": \"C0504082\",\n        \"CodeValue\": \"T-D0080\",\n        \"contextGroupName\": \"\",\n        \"Type\": [\n          {\n            \"recommendedDisplayRGBValue\": [\n              0,\n              145,\n              30\n            ],\n            \"CodeMeaning\": \"Bile\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"bile\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0005388\",\n            \"CodeValue\": \"T-60650\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"70150004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              170,\n              250,\n              250\n            ],\n            \"CodeMeaning\": \"Body fluid\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"fluid\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0005889\",\n            \"CodeValue\": \"T-D0070\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"32457005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              78,\n              63,\n              0\n            ],\n            \"CodeMeaning\": \"Feces\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"feces\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0015733\",\n            \"CodeValue\": \"T-59666\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"39477002\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              218,\n              255,\n              255\n            ],\n            \"CodeMeaning\": \"Gas\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"gas\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0017110\",\n            \"CodeValue\": \"C-10080\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"74947009\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              214,\n              230,\n              130\n            ],\n            \"CodeMeaning\": \"Urine\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"urine\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0042036\",\n            \"CodeValue\": \"T-70060\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"78014005\"\n          }\n        ],\n        \"showAnatomy\": false\n      }\n    ]\n  }\n}";
var parsedJson = JSON.parse(json);
var _default = parsedJson;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _init = _interopRequireDefault(__webpack_require__(/*! ./init.js */ "./src/init.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TOOLBAR_BUTTON_TYPES = {
  COMMAND: 'command',
  SET_TOOL_ACTIVE: 'setToolActive'
};
var _default = {
  /**
   * Only required property. Should be a unique value across all extensions.
   */
  id: 'ohif-segmentation-extension',
  preRegistration: function preRegistration() {
    var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _init.default)(configuration);
  },

  /**
   * Registers one or more named commands scoped to a context. Commands are
   * the primary means for...
   */
  getCommandsModule: function getCommandsModule() {
    return {
      defaultContext: 'VIEWER',
      actions: {},
      definitions: []
    };
  },

  /**
   * Allows you to provide toolbar definitions that will be merged with any
   * existing application toolbar configuration. Used to determine which
   * buttons should be visible when, their order, what happens when they're
   * clicked, etc.
   */
  getToolbarModule: function getToolbarModule() {
    return {
      definitions: [{
        id: 'freehandRoiTools',
        label: 'ROI',
        icon: 'level',
        buttons: [{
          id: 'FreehandRoi',
          label: 'Draw',
          icon: 'level',
          type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
          commandName: 'enableFreehandRoi'
        }, {
          id: 'FreehandRoiSculptor',
          label: 'Sculpt',
          icon: 'level',
          type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
          commandName: 'enableFreehandRoiSculptor'
        }]
      }, {
        id: 'brushTools',
        label: 'Segment',
        icon: 'level',
        buttons: [{
          id: 'Brush',
          label: 'Manual',
          icon: 'level',
          type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
          commandName: 'enabledBrush'
        }, {
          id: 'Brush3DHUGatedTool',
          label: 'Smart CT',
          icon: 'level',
          type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
          commandName: 'enabledBrush3DHUGatedTool'
        }, {
          id: 'Brush3DAutoGatedTool',
          label: 'Auto',
          icon: 'level',
          type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
          commandName: 'enabledBrush3DAutoGatedTool'
        }]
      }],
      defaultContext: 'ACTIVE_VIEWPORT::CORNERSTONE'
    };
  },

  /**
   * Not yet implemented
   */
  getPanelModule: function getPanelModule() {
    return null;
  }
};
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = init;

var _cornerstoneTools = __webpack_require__(/*! cornerstone-tools */ "cornerstone-tools");

var _freehand3DModule = _interopRequireDefault(__webpack_require__(/*! ./modules/freehand3DModule.js */ "./src/modules/freehand3DModule.js"));

var _extendBrushModule = _interopRequireDefault(__webpack_require__(/*! ./modules/extendBrushModule.js */ "./src/modules/extendBrushModule.js"));

var _Brush3DTool = _interopRequireDefault(__webpack_require__(/*! ./tools/Brush3DTool.js */ "./src/tools/Brush3DTool.js"));

var _Brush3DHUGatedTool = _interopRequireDefault(__webpack_require__(/*! ./tools/Brush3DHUGatedTool.js */ "./src/tools/Brush3DHUGatedTool.js"));

var _Brush3DAutoGatedTool = _interopRequireDefault(__webpack_require__(/*! ./tools/Brush3DAutoGatedTool.js */ "./src/tools/Brush3DAutoGatedTool.js"));

var _FreehandRoi3DTool = _interopRequireDefault(__webpack_require__(/*! ./tools/FreehandRoi3DTool.js */ "./src/tools/FreehandRoi3DTool.js"));

var _FreehandRoi3DSculptorTool = _interopRequireDefault(__webpack_require__(/*! ./tools/FreehandRoi3DSculptorTool.js */ "./src/tools/FreehandRoi3DSculptorTool.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modules = _cornerstoneTools.store.modules;
var defaultConfig = {
  maxRadius: 64,
  holeFill: 2,
  holeFillRange: [0, 20],
  strayRemove: 5,
  strayRemoveRange: [0, 99],
  interpolate: false,
  showFreehandStats: false,
  brush3dToolName: 'Brush3DTool',
  brush3DHUGatedToolName: 'Brush3DHUGatedTool',
  brush3DAutoGatedTool: 'Brush3DAutoGatedTool',
  freehandRoi3DTool: 'FreehandRoi3DTool',
  freehandRoi3DSculptorTool: 'FreehandRoi3DSculptorTool',
  gates: [{
    // https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4309522/
    name: 'adipose',
    range: [-190, -30]
  }, {
    // https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4309522/
    name: 'muscle',
    range: [-29, 150]
  }, {
    name: 'custom',
    range: [0, 100]
  }]
};

function init() {
  var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var brushModule = modules.brush;
  var config = Object.assign({}, defaultConfig, configuration);
  (0, _extendBrushModule.default)(brushModule, config);
  (0, _cornerstoneTools.register)('module', 'freehand3D', _freehand3DModule.default);
  var freehand3DStore = modules.freehand3D;
  freehand3DStore.state.interpolate = config.interpolate;
  freehand3DStore.state.displayStats = config.showFreehandStats;
  (0, _cornerstoneTools.addTool)(_Brush3DTool.default, {
    name: config.brush3dToolName
  });
  (0, _cornerstoneTools.addTool)(_Brush3DHUGatedTool.default, {
    name: config.brush3DHUGatedToolName
  });
  (0, _cornerstoneTools.addTool)(_Brush3DAutoGatedTool.default, {
    name: config.brush3DAutoGatedTool
  });
  (0, _cornerstoneTools.addTool)(_FreehandRoi3DTool.default, {
    name: config.freehandRoi3DTool
  });
  (0, _cornerstoneTools.addTool)(_FreehandRoi3DSculptorTool.default, {
    name: config.freehandRoi3DSculptorTool,
    referencedToolName: config.freehandRoi3DTool
  });
}

module.exports = exports["default"];

/***/ }),

/***/ "./src/modules/extendBrushModule.js":
/*!******************************************!*\
  !*** ./src/modules/extendBrushModule.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extendBrushModule;

function extendBrushModule(brushModule, config) {
  var brushState = brushModule.state;
  var getters = brushModule.getters;
  var setters = brushModule.setters;
  brushState.holeFill = config.holeFill;
  brushState.holeFillRange = config.holeFillRange;
  brushState.strayRemove = config.strayRemove;
  brushState.strayRemoveRange = config.strayRemoveRange;
  brushState.gates = config.gates;
  brushState.activeGate = brushState.gates[0].name;
  brushState.maxRadius = config.maxRadius;

  getters.activeGateRange = function () {
    var activeGate = brushState.activeGate;
    var gates = brushState.gates;
    var gateIndex = gates.findIndex(function (element) {
      return element.name === activeGate;
    });
    return brushState.gates[gateIndex].range;
  };

  getters.customGateRange = function () {
    var gates = brushState.gates;
    var gateIndex = gates.findIndex(function (element) {
      return element.name === 'custom';
    });
    return brushState.gates[gateIndex].range;
  };

  setters.customGateRange = function (min, max) {
    var gates = brushState.gates;
    var gateIndex = gates.findIndex(function (element) {
      return element.name === 'custom';
    });
    var customGateRange = brushState.gates[gateIndex].range;

    if (min !== null) {
      customGateRange[0] = min;
    }

    if (max !== null) {
      customGateRange[1] = max;
    }
  };

  getters.importMetadata = function (seriesInstanceUid) {
    if (brushModule.state.import && brushModule.state.import[seriesInstanceUid]) {
      return brushModule.state.import[seriesInstanceUid];
    }

    return;
  };

  setters.importMetadata = function (seriesInstanceUid, metadata) {
    // Store that we've imported a collection for this series.
    if (!brushModule.state.import) {
      brushModule.state.import = {};
    }

    brushModule.state.import[seriesInstanceUid] = metadata;
  };

  setters.importModified = function (seriesInstanceUid) {
    var importMetadata = brushModule.state.import[seriesInstanceUid];

    if (importMetadata.modified) {
      return;
    }

    importMetadata.modified = true; // JamesAPetts
    // TODO: Force update of component.
  };
}

module.exports = exports["default"];

/***/ }),

/***/ "./src/modules/freehand3DModule.js":
/*!*****************************************!*\
  !*** ./src/modules/freehand3DModule.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNextColor = getNextColor;
exports.default = void 0;

var _cornerstoneCore = _interopRequireDefault(__webpack_require__(/*! cornerstone-core */ "cornerstone-core"));

var _generateUID = _interopRequireDefault(__webpack_require__(/*! ../util/generateUID.js */ "./src/util/generateUID.js"));

var _getSeriesInstanceUidFromEnabledElement = _interopRequireDefault(__webpack_require__(/*! ../util/getSeriesInstanceUidFromEnabledElement.js */ "./src/util/getSeriesInstanceUidFromEnabledElement.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @typedef {series[]} seriesCollection
 *
 * @example
 * [
 *   series1,
 *   series2
 * ];
 */

/**
 * @typedef {object} series
 * @property {string} uid The seriesInstanceUid
 * @property {number} activeStructureSetIndex The activeStructureSet within the series.
 * @property {structureSet[]} structureSetCollection An array of structureSets.
 *
 * @example
 * {
 *  uid: 'mySeriesInstanceUid',
 *  activeStructureSetIndex: 0,
 *  structureSetCollection,
 * };
 */

/**
 * @typedef {object} structureSet
 * @property {string} uid The structureSetUid
 * @property {string} name A human readable descriptor of the structureSet.
 * @property {boolean} isLocked Whether the structureSet is immutable.
 * @property {boolean} visible Whether the structureSet should be rendered.
 * @property {number} activeROIContourIndex The index of the active ROIContour.
 * @property {ROIContour[]} ROIContourCollection An array of ROIContours.
 *
 * @example
 * {
 *   uid: 'myStructureSetUid',
 *   name: `myLovelyStructureSet`,
 *   isLocked: false,
 *   visible: true,
 *   activeROIContourIndex: 7,
 *   ROIContourCollection
 * };
 */

/**
 * @typedef {object} ROIContour
 * @property {string} uid The ROIContourUid.
 * @property {string} name A human readable descriptor of the biological object the contour encloses.
 * @property {string} color A css color to render the volume with.
 * @property {number} polygonCount The number of polygons that comprise the ROIContour.
 *
 * @example
 * {
 *  uid: 'myROIContourUid',
 *  name: 'myLovelyROIContour',
 *  color: 'cornflowerblue',
 *  polygonCount: '34'
 * };
 */
// Each contour references a seriesInstanceUid, structureSetUid, ROIContourUid.
var state = {
  seriesCollection: [],
  interpolate: false,
  displayStats: false
};

function check(object, name) {
  if (!object) {
    throw new Error("Insufficient information provided, must provide ".concat(name, "."));
  }
}

function getSeries(seriesInstanceUid) {
  check(seriesInstanceUid, 'seriesInstanceUid');
  return state.seriesCollection.find(function (series) {
    return series.uid === seriesInstanceUid;
  });
}

function getStructureSet(seriesInstanceUid) {
  var structureSetUid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'DEFAULT';
  check(structureSetUid, 'structureSetUid');
  var series = getSeries(seriesInstanceUid);

  if (!series) {
    return;
  }

  return series.structureSetCollection.find(function (structureSet) {
    return structureSet.uid === structureSetUid;
  });
}

function getROIContour(seriesInstanceUid, structureSetUid, ROIContourUid) {
  check(ROIContourUid, 'ROIContourUid');
  var structureSet = getStructureSet(seriesInstanceUid, structureSetUid);

  if (!structureSet) {
    return;
  }

  return structureSet.ROIContourCollection.find(function (ROIContour) {
    return ROIContour && ROIContour.uid === ROIContourUid;
  });
}

function getROIContourIndex(seriesInstanceUid, structureSetUid, ROIContourUid) {
  check(ROIContourUid, 'ROIContourUid');
  var structureSet = getStructureSet(seriesInstanceUid, structureSetUid);

  if (!structureSet) {
    return;
  }

  return structureSet.ROIContourCollection.findIndex(function (ROIContour) {
    return ROIContour.uid === ROIContourUid;
  });
}

function getActiveStructureSetIndex(seriesInstanceUid) {
  var series = getSeries(seriesInstanceUid);
  return series.activeStructureSetIndex;
}

function getActiveROIContourIndex(seriesInstanceUid) {
  var structureSetUid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'DEFAULT';
  var structureSet = getStructureSet(seriesInstanceUid, structureSetUid);
  return structureSet.activeROIContourIndex;
}

function getActiveROIContour(seriesInstanceUid) {
  var structureSetUid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'DEFAULT';
  var structureSet = getStructureSet(seriesInstanceUid, structureSetUid);
  var activeROIContourIndex = structureSet.activeROIContourIndex;

  if (activeROIContourIndex === null || activeROIContourIndex === undefined) {
    return;
  }

  return structureSet.ROIContourCollection[activeROIContourIndex];
}

function setSeries(seriesInstanceUid) {
  check(seriesInstanceUid);
  var series = {
    uid: seriesInstanceUid,
    activeStructureSetIndex: null,
    structureSetCollection: []
  };
  state.seriesCollection.push(series); // Add a default structureSet for the series.

  setStructureSet(seriesInstanceUid, 'default', {
    uid: 'DEFAULT'
  });
}

function setStructureSet(seriesInstanceUid, name) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  check(name, 'name');
  var series = getSeries(seriesInstanceUid);

  if (!series) {
    // Generate the series.
    setSeries(seriesInstanceUid);
    series = getSeries(seriesInstanceUid);
  }

  var structureSet = {
    uid: options.uid ? options.uid : (0, _generateUID.default)(),
    name: name,
    isLocked: options.isLocked ? options.isLocked : false,
    visible: options.visible ? options.visible : true,
    activeROIContourIndex: options.activeROIContourIndex !== undefined ? options.activeROIContourIndex : null,
    ROIContourCollection: []
  };
  series.structureSetCollection.push(structureSet);
}

function setROIContour(seriesInstanceUid, structureSetUid, name) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  check(name, 'name');
  var structureSet = getStructureSet(seriesInstanceUid, structureSetUid);

  if (!structureSet) {
    // Can't generate the structureSet as not enough info (no name).
    throw new Error("Cannot generate ROIContour, as the structureSet with ".concat(structureSetUid, " does not exist."));
  }

  var ROIContour = {
    uid: options.uid ? options.uid : (0, _generateUID.default)(),
    name: name,
    color: options.color ? options.color : getNextColor(),
    polygonCount: options.polygonCount ? options.polygonCount : 0
  };
  structureSet.ROIContourCollection.push(ROIContour);
  return ROIContour.uid;
}

function setROIContourAndSetIndexActive(seriesInstanceUid, structureSetUid, name) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  setROIContour(seriesInstanceUid, structureSetUid, name, options);
  var structureSet = getStructureSet(seriesInstanceUid, structureSetUid);
  var index = structureSet.ROIContourCollection.length - 1;
  structureSet.activeROIContourIndex = index;
  return index;
}

function setDeleteROIFromStructureSet(seriesInstanceUid, structureSetUid, ROIContourUid) {
  var structureSet = getStructureSet(seriesInstanceUid, structureSetUid);
  var ROIContourCollection = structureSet.ROIContourCollection;
  var ROIContourIndex = ROIContourCollection.findIndex(function (ROIContour) {
    return ROIContour.uid === ROIContourUid;
  });
  ROIContourCollection.splice(ROIContourIndex, 1);
}

function setStructureSetName(name, seriesInstanceUid, structureSetUid) {
  check(name, 'name');
  var structureSet = getStructureSet(seriesInstanceUid, structureSetUid);
  structureSet.name = name;
}

function setDeleteStructureSet(seriesInstanceUid, structureSetUid) {
  var series = getSeries(seriesInstanceUid);
  var structureSetCollection = series.structureSetCollection;
  var structureSetIndex = structureSetCollection.findIndex(function (structureSet) {
    return structureSet.uid === structureSetUid;
  });
  structureSetCollection.splice(structureSetIndex, 1);
}

function setROIContourName(name, seriesInstanceUid, structureSetUid, ROIContourUid) {
  check(name, 'name');
  var ROIContour = getROIContour(seriesInstanceUid, structureSetUid, ROIContourUid);
  ROIContour.name = name;
}

function setActiveStructureSetIndex(index, seriesInstanceUid) {
  check(index, 'index');
  var series = getSeries(seriesInstanceUid);
  series.activeStructureSetIndex = index;
}

function setActiveStructureSet(seriesInstanceUid, structureSetUid) {
  check(structureSetUid, 'structureSetUid');
  var series = getSeries(seriesInstanceUid);
  var structureSetCollection = series.structureSetCollection;
  var structureSetIndex = structureSetCollection.findIndex(function (structureSet) {
    return structureSet.uid === structureSetUid;
  });
  series.activeStructureSetIndex = structureSetIndex;
}

function setActiveROIContourIndex(index, seriesInstanceUid) {
  var structureSetUid = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'DEFAULT';
  var structureSet = getStructureSet(seriesInstanceUid, structureSetUid);
  structureSet.activeROIContourIndex = index;
}

function setActiveROIContour(seriesInstanceUid) {
  var structureSetUid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'DEFAULT';
  var ROIContourUid = arguments[2];
  check(ROIContourUid, 'ROIContourUid');
  var structureSet = getStructureSet(seriesInstanceUid, structureSetUid);
  var ROIContourCollection = structureSet.ROIContourCollection;
  var ROIContourIndex = ROIContourCollection.findIndex(function (ROIContour) {
    return ROIContour.uid === ROIContourUid;
  });
  structureSet.activeROIContourIndex = ROIContourIndex;
}

function incrementPolygonCount(seriesInstanceUid, structureSetUid, ROIContourUid) {
  var ROIContour = getROIContour(seriesInstanceUid, structureSetUid, ROIContourUid);
  ROIContour.polygonCount++;
}

function decrementPolygonCount(seriesInstanceUid, structureSetUid, ROIContourUid) {
  var ROIContour = getROIContour(seriesInstanceUid, structureSetUid, ROIContourUid);
  ROIContour.polygonCount--;
}

var getters = {
  series: getSeries,
  structureSet: getStructureSet,
  ROIContour: getROIContour,
  ROIContourIndex: getROIContourIndex,
  activeStructureSetIndex: getActiveStructureSetIndex,
  activeROIContourIndex: getActiveROIContourIndex,
  activeROIContour: getActiveROIContour
};
var setters = {
  series: setSeries,
  structureSet: setStructureSet,
  ROIContour: setROIContour,
  ROIContourAndSetIndexActive: setROIContourAndSetIndexActive,
  deleteROIFromStructureSet: setDeleteROIFromStructureSet,
  deleteStructureSet: setDeleteStructureSet,
  structureSetName: setStructureSetName,
  ROIContourName: setROIContourName,
  activeStructureSetIndex: setActiveStructureSetIndex,
  activeStructureSet: setActiveStructureSet,
  activeROIContourIndex: setActiveROIContourIndex,
  activeROIContour: setActiveROIContour,
  incrementPolygonCount: incrementPolygonCount,
  decrementPolygonCount: decrementPolygonCount,
  toggleInterpolate: function toggleInterpolate() {
    state.interpolate = !state.interpolate;
  },
  toggleDisplayStats: function toggleDisplayStats() {
    state.displayStats = !state.displayStats;
  }
};
/**
 * enabledElementCallback - Element specific initilisation.
 * @public
 * @param  {Object} enabledElement  The element on which the module is
 *                                  being initialised.
 */

function enabledElementCallback(element) {
  var enabledElement = _cornerstoneCore.default.getEnabledElement(element);

  if (!enabledElement.image) {
    return;
  }

  var seriesInstanceUid = (0, _getSeriesInstanceUidFromEnabledElement.default)(enabledElement);

  if (!getSeries(seriesInstanceUid)) {
    // Generate series store.
    setSeries(seriesInstanceUid);
  }
}

var _default = {
  state: state,
  enabledElementCallback: enabledElementCallback,
  getters: getters,
  setters: setters
};
exports.default = _default;
var importColors = ['cornflowerblue', 'firebrick', 'goldenrod', 'blueviolet', 'indianred', 'orange', 'mediumturquoise', 'lightcoral', 'khaki', 'darkmagenta', 'lightseagreen', 'tomato', 'aquamarine', 'darksalmon', 'moccasin', 'orchid', 'skyblue', 'peru']; // Such that first color will be the first in roiColors

var currentColorIndex = importColors.length;
/**
 * getNextColor
 *
 * @return {string} A CSS recognised color with which to render the ROI contour.
 */

function getNextColor() {
  currentColorIndex++;

  if (currentColorIndex >= importColors.length) {
    currentColorIndex = 0;
  }

  return importColors[currentColorIndex];
}

/***/ }),

/***/ "./src/tools/Brush3DAutoGatedTool.js":
/*!*******************************************!*\
  !*** ./src/tools/Brush3DAutoGatedTool.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cornerstoneCore = _interopRequireDefault(__webpack_require__(/*! cornerstone-core */ "cornerstone-core"));

var _Brush3DHUGatedTool2 = _interopRequireDefault(__webpack_require__(/*! ./Brush3DHUGatedTool.js */ "./src/tools/Brush3DHUGatedTool.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _cornerstoneTools$imp = _cornerstoneCore.default.importInternalModule('util/brushUtils'),
    getCircle = _cornerstoneTools$imp.getCircle;

var brushModule = _cornerstoneCore.default.store.modules.brush;

var Brush3DAutoGatedTool =
/*#__PURE__*/
function (_Brush3DHUGatedTool) {
  _inherits(Brush3DAutoGatedTool, _Brush3DHUGatedTool);

  function Brush3DAutoGatedTool() {
    var _this;

    var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Brush3DAutoGatedTool);

    var defaultConfig = {};
    var initialConfiguration = Object.assign(defaultConfig, configuration);
    _this = _possibleConstructorReturn(this, (Brush3DAutoGatedTool.__proto__ || Object.getPrototypeOf(Brush3DAutoGatedTool)).call(this, initialConfiguration));
    _this.initialConfiguration = initialConfiguration;
    return _this;
  }
  /**
   * Event handler for MOUSE_DOWN event.
   *
   * @override
   * @event
   * @param {Object} evt - The event.
   */


  _createClass(Brush3DAutoGatedTool, [{
    key: "preMouseDownCallback",
    value: function preMouseDownCallback(evt) {
      this._setCustomGate(evt);

      this._startPainting(evt);

      return true;
    }
    /**
     * _setCustomGate - Gets the minimum and maximum brush values within the image
     * and sets the gate mode to "custom" with these values.
     *
     * @param  {object} evt The cornerstone event.
     * @returns {null}
     */

  }, {
    key: "_setCustomGate",
    value: function _setCustomGate(evt) {
      var eventData = evt.detail;
      var image = eventData.image;
      var rows = image.rows,
          columns = image.columns;
      var _eventData$currentPoi = eventData.currentPoints.image,
          x = _eventData$currentPoi.x,
          y = _eventData$currentPoi.y;
      var radius = brushModule.state.radius;
      var imagePixelData = image.getPixelData();
      var rescaleSlope = image.slope || 1;
      var rescaleIntercept = image.intercept || 0;
      var circle = getCircle(radius, rows, columns, x, y); // Initialise hi and lo as the first pixelValue in the circle.

      var lo = imagePixelData[circle[0][0] + circle[0][1] * rows];
      var hi = lo; // Find the highest and lowest value.

      for (var i = 0; i < circle.length; i++) {
        var pixelValue = imagePixelData[circle[i][0] + circle[i][1] * rows];

        if (pixelValue < lo) {
          lo = pixelValue;
        }

        if (pixelValue > hi) {
          hi = pixelValue;
        }
      }

      lo = lo * rescaleSlope + rescaleIntercept;
      hi = hi * rescaleSlope + rescaleIntercept;
      this.gate = [lo, hi];
    }
    /**
     * _gateCircle - Given an image and a brush circle, gate the circle between
     * the set gate values, and then cleanup the resulting mask using the
     * holeFill and strayRemove properties of the brush module.
     *
     * @param  {object} image   The cornerstone image.
     * @param  {Number[][]} circle  An array of image pixels contained within the brush
     *                        circle.
     * @returns {Number[][]}  An array containing the gated/cleaned pixels to fill.
     */

  }, {
    key: "_gateCircle",
    value: function _gateCircle(image, circle) {
      var rows = image.image;
      var imagePixelData = image.getPixelData();
      var gateValues = this.gate;
      var rescaleSlope = image.slope || 1;
      var rescaleIntercept = image.intercept || 0;
      var gatedCircleArray = [];

      for (var i = 0; i < circle.length; i++) {
        var pixelValue = imagePixelData[circle[i][0] + circle[i][1] * rows];
        pixelValue = pixelValue * rescaleSlope + rescaleIntercept;

        if (pixelValue >= gateValues[0] && pixelValue <= gateValues[1]) {
          gatedCircleArray.push(circle[i]);
        }
      }

      return this._cleanGatedCircle(circle, gatedCircleArray);
    }
  }]);

  return Brush3DAutoGatedTool;
}(_Brush3DHUGatedTool2.default);

exports.default = Brush3DAutoGatedTool;
module.exports = exports["default"];

/***/ }),

/***/ "./src/tools/Brush3DHUGatedTool.js":
/*!*****************************************!*\
  !*** ./src/tools/Brush3DHUGatedTool.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cornerstoneTools = __webpack_require__(/*! cornerstone-tools */ "cornerstone-tools");

var _cornerstoneCore = _interopRequireDefault(__webpack_require__(/*! cornerstone-core */ "cornerstone-core"));

var _Brush3DTool2 = _interopRequireDefault(__webpack_require__(/*! ./Brush3DTool.js */ "./src/tools/Brush3DTool.js"));

var _nDimensionalFloodFill = _interopRequireDefault(__webpack_require__(/*! ./n-dimensional-flood-fill.js */ "./src/tools/n-dimensional-flood-fill.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var brushModule = _cornerstoneTools.store.modules.brush;

var _importInternalModule = (0, _cornerstoneTools.importInternalModule)('util/brushUtils'),
    getCircle = _importInternalModule.getCircle,
    drawBrushPixels = _importInternalModule.drawBrushPixels;

var Brush3DHUGatedTool =
/*#__PURE__*/
function (_Brush3DTool) {
  _inherits(Brush3DHUGatedTool, _Brush3DTool);

  function Brush3DHUGatedTool() {
    var _this;

    var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Brush3DHUGatedTool);

    var defaultConfig = {};
    var initialConfiguration = Object.assign(defaultConfig, configuration);
    _this = _possibleConstructorReturn(this, (Brush3DHUGatedTool.__proto__ || Object.getPrototypeOf(Brush3DHUGatedTool)).call(this, initialConfiguration));
    _this.initialConfiguration = initialConfiguration;
    return _this;
  }
  /**
   * Event handler for MOUSE_DOWN event.
   *
   * @override
   * @event
   * @param {Object} evt - The event.
   */


  _createClass(Brush3DHUGatedTool, [{
    key: "preMouseDownCallback",
    value: function preMouseDownCallback(evt) {
      this.activeGateRange = brushModule.getters.activeGateRange();

      this._startPainting(evt);

      return true;
    }
    /**
     * Paints the data to the canvas.
     *
     * @protected
     * @param  {Object} evt The data object associated with the event.
     * @returns {void}
     */

  }, {
    key: "_paint",
    value: function _paint(evt) {
      var eventData = evt.detail;
      var element = eventData.element,
          image = eventData.image;
      var rows = image.rows,
          columns = image.columns;
      var _eventData$currentPoi = eventData.currentPoints.image,
          x = _eventData$currentPoi.x,
          y = _eventData$currentPoi.y;

      if (x < 0 || x > columns || y < 0 || y > rows) {
        return;
      }

      var radius = brushModule.state.radius;

      var pointerArray = this._gateCircle(image, getCircle(radius, rows, columns, x, y));

      var _this$paintEventData = this.paintEventData,
          labelmap3D = _this$paintEventData.labelmap3D,
          currentImageIdIndex = _this$paintEventData.currentImageIdIndex,
          activeLabelmapIndex = _this$paintEventData.activeLabelmapIndex,
          shouldErase = _this$paintEventData.shouldErase; // Draw / Erase the active color.

      drawBrushPixels(pointerArray, labelmap3D, currentImageIdIndex, columns, shouldErase);

      _cornerstoneCore.default.triggerEvent(element, _cornerstoneTools.EVENTS.LABELMAP_MODIFIED, {
        activeLabelmapIndex: activeLabelmapIndex
      });

      _cornerstoneCore.default.updateImage(evt.detail.element);
    }
    /**
     * _gateCircle - Given an image and a brush circle, gate the circle between
     * the set gate values, and then cleanup the resulting mask using the
     * holeFill and strayRemove properties of the brush module.
     *
     * @param  {object} image   The cornerstone image.
     * @param  {Number[][]} circle  An array of image pixels contained within the brush
     *                        circle.
     * @returns {Number[][]}  An array containing the gated/cleaned pixels to fill.
     */

  }, {
    key: "_gateCircle",
    value: function _gateCircle(image, circle) {
      var rows = image.rows;
      var imagePixelData = image.getPixelData();
      var gateRange = this.activeGateRange;
      var rescaleSlope = image.slope || 1;
      var rescaleIntercept = image.intercept || 0;
      var gatedCircleArray = [];

      for (var i = 0; i < circle.length; i++) {
        var pixelValue = imagePixelData[circle[i][0] + circle[i][1] * rows];
        pixelValue = pixelValue * rescaleSlope + rescaleIntercept;

        if (pixelValue >= gateRange[0] && pixelValue <= gateRange[1]) {
          gatedCircleArray.push(circle[i]);
        }
      }

      return this._cleanGatedCircle(circle, gatedCircleArray);
    }
    /**
     * _getEdgePixels - Returns the indicies of the edge pixels for the circular
     * brush data.
     *
     * @param  {Number[][]} data The squared-circle data where all circle members are
     *                     0, and values outside the circle are -1
     * @returns {Number[][]} An array of positions of the circle edge pixels.
     */

  }, {
    key: "_getEdgePixels",
    value: function _getEdgePixels(data) {
      var edgePixels = [];
      var xSize = data.length;
      var ySize = data[0].length; // first and last row add all of top and bottom which are circle members.

      for (var i = 0; i < data.length; i++) {
        if (data[i][0]) {
          edgePixels.push([i, 0]);
          edgePixels.push([i, ySize - 1]);
        }
      } // all other rows - Find first circle member, and use its position to add
      // The first and last circle member of that row.


      for (var j = 1; j < ySize - 1; j++) {
        for (var _i = 0; _i < data.length; _i++) {
          if (data[_i][j]) {
            edgePixels.push([_i, j]);
            edgePixels.push([xSize - 1 - _i, j]);
            break;
          }
        }
      }

      return edgePixels;
    }
    /**
     * _cleanGatedCircle - Clean the HU gated circle using the holeFill and
     * strayRemove properties of the brush module.
     *
     * @param  {Number[][]} circle     An array of the pixel indicies within the
     *                                 brush circle.
     * @param  {Number[][]} gatedCircleArray An array of the pixel indicies within
     *                                       the gate range.
     * @returns {Number[][]}                  The cleaned array of pixel indicies.
     */

  }, {
    key: "_cleanGatedCircle",
    value: function _cleanGatedCircle(circle, gatedCircleArray) {
      var _this$_getBoundingBox = this._getBoundingBoxOfCircle(circle),
          max = _this$_getBoundingBox.max,
          min = _this$_getBoundingBox.min;

      var xSize = max[0] - min[0] + 1;
      var ySize = max[1] - min[1] + 1;

      var data = this._boxGatedCircle(circle, gatedCircleArray, min, xSize, ySize); // Define our getter for accessing the data structure.


      function getter(x, y) {
        return data[x][y];
      }

      this._floodFillEmptyRegionsFromEdges(data, getter);

      var _this$_findHolesAndRe = this._findHolesAndRegions(circle, data, getter, min),
          holes = _this$_findHolesAndRe.holes,
          regions = _this$_findHolesAndRe.regions;

      var largestRegionArea = this._getAreaOfLargestRegion(regions); // Delete any region outside the `strayRemove` threshold.


      for (var r = 0; r < regions.length; r++) {
        var region = regions[r];

        if (region.length <= brushModule.state.strayRemove / 100.0 * largestRegionArea) {
          for (var p = 0; p < region.length; p++) {
            data[region[p][0]][region[p][1]] = 3;
          }
        }
      } // Fill in any holes smaller than the `holeFill` threshold.


      for (var _r = 0; _r < holes.length; _r++) {
        var hole = holes[_r];

        if (hole.length <= brushModule.state.holeFill / 100.0 * largestRegionArea) {
          for (var _p = 0; _p < hole.length; _p++) {
            data[hole[_p][0]][hole[_p][1]] = 5;
          }
        }
      }

      var filledGatedCircleArray = [];

      for (var i = 0; i < xSize; i++) {
        for (var j = 0; j < ySize; j++) {
          if (data[i][j] === 5) {
            filledGatedCircleArray.push([i + min[0], j + min[1]]);
          }
        }
      }

      return filledGatedCircleArray;
    }
    /**
     * _getBoundingBoxOfCircle - Returns two points defining the extent of the circle.
     *
     * @param  {number[][]} circle  An array of the pixel indicies within the brush circle.
     * @returns {object}        The minimum and maximum of the extent.
     */

  }, {
    key: "_getBoundingBoxOfCircle",
    value: function _getBoundingBoxOfCircle(circle) {
      var max = [circle[0][0], circle[0][1]];
      var min = [circle[0][0], circle[0][1]];

      for (var p = 0; p < circle.length; p++) {
        var _circle$p = _slicedToArray(circle[p], 2),
            i = _circle$p[0],
            j = _circle$p[1];

        if (i > max[0]) {
          max[0] = i;
        } else if (i < min[0]) {
          min[0] = i;
        }

        if (j > max[1]) {
          max[1] = j;
        } else if (j < min[1]) {
          min[1] = j;
        }
      }

      return {
        max: max,
        min: min
      };
    }
    /**
     * _boxGatedCircle - Generates a rectangular dataset from the brush circle
     *                   for efficient flood fill/cleaning.
     *
     * @param  {type} circle           An array of the pixel indicies within the brush circle.
     * @param  {type} gatedCircleArray The circle array with the gate applied.
     * @param  {type} min              The location of the top left pixel of the
     *                                 generated dataset with respect to the
     *                                 underlying image data.
     * @param  {type} xSize            The x size of the generated box.
     * @param  {type} ySize            The y size of the generated box.
     * @returns {number[][]}           The data with pixel [0,0] centered on min,
     *                                 the circle marked with 1 for unoccupied, 2
     *                                 for occupied and 0 for outside of the circle bounds.
     */

  }, {
    key: "_boxGatedCircle",
    value: function _boxGatedCircle(circle, gatedCircleArray, min, xSize, ySize) {
      var data = []; // Fill in square as 0 (out of bounds/ignore).

      for (var i = 0; i < xSize; i++) {
        data[i] = new Uint8ClampedArray(ySize);
      } // fill circle in as 1.


      for (var p = 0; p < circle.length; p++) {
        var _i2 = circle[p][0] - min[0];

        var j = circle[p][1] - min[1];
        data[_i2][j] = 1;
      } // fill gated region as 2.


      for (var _p2 = 0; _p2 < gatedCircleArray.length; _p2++) {
        var _i3 = gatedCircleArray[_p2][0] - min[0];

        var _j = gatedCircleArray[_p2][1] - min[1];

        data[_i3][_j] = 2;
      }

      return data;
    }
    /**
     * _floodFillEmptyRegionsFromEdges - Flood fills empty regions which touch the
     *                                   edge of the circle with the value 3.
     *
     * @param  {number[][]} data The data to flood fill.
     * @param {function} getter The getter function floodFill uses to access array
     *                          elements.
     * @modifies data
     * @returns {null}
     */

  }, {
    key: "_floodFillEmptyRegionsFromEdges",
    value: function _floodFillEmptyRegionsFromEdges(data, getter) {
      var edgePixels = this._getEdgePixels(data);

      for (var p = 0; p < edgePixels.length; p++) {
        var i = edgePixels[p][0];
        var j = edgePixels[p][1];

        if (data[i][j] === 1) {
          var result = (0, _nDimensionalFloodFill.default)({
            getter: getter,
            seed: [i, j]
          });
          var flooded = result.flooded;

          for (var k = 0; k < flooded.length; k++) {
            data[flooded[k][0]][flooded[k][1]] = 3;
          }
        }
      }
    }
    /**
     * _findHolesAndRegions - Finds all the holes and regions and returns their
     *                        positions within the 2D data set. Sets the value of
     *                        holes and regions to 4 and 5, respectively.
     *
     * @param  {number[][]} circle An array of the pixel indicies within the brush circle.
     * @param  {number[][]} data   The data set.
     * @param  {function}   getter The getter function floodFill uses to access array
     *                       elements.
     * @param  {number[]}   min    The location of the top left pixel of the dataset
     *                       with respect to the underlying image data.
     * @returns {object}    An object containing arrays of the occupation of all
     *                      regions and holes in the dataset.
     */

  }, {
    key: "_findHolesAndRegions",
    value: function _findHolesAndRegions(circle, data, getter, min) {
      var holes = [];
      var regions = []; // Find each hole and paint them 3.
      // Find contiguous regions and paint them 4.

      for (var p = 0; p < circle.length; p++) {
        var i = circle[p][0] - min[0];
        var j = circle[p][1] - min[1];

        if (data[i][j] === 1) {
          var result = (0, _nDimensionalFloodFill.default)({
            getter: getter,
            seed: [i, j]
          });
          var flooded = result.flooded;

          for (var k = 0; k < flooded.length; k++) {
            data[flooded[k][0]][flooded[k][1]] = 4;
          }

          holes.push(flooded);
        } else if (data[i][j] === 2) {
          var _result = (0, _nDimensionalFloodFill.default)({
            getter: getter,
            seed: [i, j]
          });

          var _flooded = _result.flooded;

          for (var _k = 0; _k < _flooded.length; _k++) {
            data[_flooded[_k][0]][_flooded[_k][1]] = 5;
          }

          regions.push(_flooded);
        }
      }

      return {
        holes: holes,
        regions: regions
      };
    }
    /**
     * _getAreaOfLargestRegion - Returns the number of pixels in the largest
     *                           region of a list of regions.
     *
     * @param  {number[][][]} regions An array of regions of 2D points.
     * @returns {number}        The area of the largest region in pixels.
     */

  }, {
    key: "_getAreaOfLargestRegion",
    value: function _getAreaOfLargestRegion(regions) {
      var largestRegionArea = 0;

      for (var i = 0; i < regions.length; i++) {
        if (regions[i].length > largestRegionArea) {
          largestRegionArea = regions[i].length;
        }
      }

      return largestRegionArea;
    }
  }]);

  return Brush3DHUGatedTool;
}(_Brush3DTool2.default);

exports.default = Brush3DHUGatedTool;
module.exports = exports["default"];

/***/ }),

/***/ "./src/tools/Brush3DTool.js":
/*!**********************************!*\
  !*** ./src/tools/Brush3DTool.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cornerstoneTools = __webpack_require__(/*! cornerstone-tools */ "cornerstone-tools");

var _generateBrushMetadata = _interopRequireDefault(__webpack_require__(/*! ../util/generateBrushMetadata.js */ "./src/util/generateBrushMetadata.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var brushModule = _cornerstoneTools.store.modules.brush;

var Brush3DTool =
/*#__PURE__*/
function (_BrushTool) {
  _inherits(Brush3DTool, _BrushTool);

  function Brush3DTool() {
    var _this;

    var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Brush3DTool);

    var defaultConfig = {};
    var initialConfiguration = Object.assign(defaultConfig, configuration);
    _this = _possibleConstructorReturn(this, (Brush3DTool.__proto__ || Object.getPrototypeOf(Brush3DTool)).call(this, initialConfiguration));
    _this.initialConfiguration = initialConfiguration;
    return _this;
  }
  /**
   * Initialise painting with baseBrushTool
   *
   * @override @protected
   * @event
   * @param {Object} evt - The event.
   */


  _createClass(Brush3DTool, [{
    key: "_startPainting",
    value: function _startPainting(evt) {
      var eventData = evt.detail;
      var element = eventData.element;

      var _brushModule$getters$ = brushModule.getters.getAndCacheLabelmap2D(element),
          labelmap3D = _brushModule$getters$.labelmap3D,
          currentImageIdIndex = _brushModule$getters$.currentImageIdIndex,
          activeLabelmapIndex = _brushModule$getters$.activeLabelmapIndex;

      var shouldErase = this._isCtrlDown(eventData) || this.configuration.alwaysEraseOnClick;
      this.paintEventData = {
        labelmap3D: labelmap3D,
        currentImageIdIndex: currentImageIdIndex,
        activeLabelmapIndex: activeLabelmapIndex,
        shouldErase: shouldErase
      };
      var segmentIndex = labelmap3D.activeSegmentIndex;
      var metadata = labelmap3D.metadata[segmentIndex];

      if (!metadata) {
        metadata = (0, _generateBrushMetadata.default)('Unnamed Segment');
        brushModule.setters.metadata(element, activeLabelmapIndex, segmentIndex, metadata);
      } // Metadata assigned, start drawing.


      if (eventData.currentPoints) {
        this._paint(evt);
      }

      this._drawing = true;

      this._startListeningForMouseUp(element);
    }
  }]);

  return Brush3DTool;
}(_cornerstoneTools.BrushTool);

exports.default = Brush3DTool;
module.exports = exports["default"];

/***/ }),

/***/ "./src/tools/FreehandRoi3DSculptorTool.js":
/*!************************************************!*\
  !*** ./src/tools/FreehandRoi3DSculptorTool.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cornerstoneTools = __webpack_require__(/*! cornerstone-tools */ "cornerstone-tools");

var _cornerstoneCore = __webpack_require__(/*! cornerstone-core */ "cornerstone-core");

var _interpolate = _interopRequireDefault(__webpack_require__(/*! ../util/freehandInterpolate/interpolate.js */ "./src/util/freehandInterpolate/interpolate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var modules = _cornerstoneTools.store.modules,
    state = _cornerstoneTools.store.state;

var FreehandRoi3DSculptorTool =
/*#__PURE__*/
function (_FreehandRoiSculptorT) {
  _inherits(FreehandRoi3DSculptorTool, _FreehandRoiSculptorT);

  function FreehandRoi3DSculptorTool() {
    var _this;

    var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, FreehandRoi3DSculptorTool);

    var defaultConfig = {
      configuration: getDefaultFreehandSculpterMouseToolConfiguration()
    };
    var initialConfiguration = Object.assign(defaultConfig, configuration);
    _this = _possibleConstructorReturn(this, (FreehandRoi3DSculptorTool.__proto__ || Object.getPrototypeOf(FreehandRoi3DSculptorTool)).call(this, initialConfiguration)); // Create bound functions for private event loop.

    _this.activeMouseUpCallback = _this.activeMouseUpCallback.bind(_this);
    return _this;
  }
  /**
   * Select the freehand tool to be edited. Don't allow selecting of locked
   * ROIContours.
   *
   * @private
   * @param {Object} eventData - Data object associated with the event.
   */


  _createClass(FreehandRoi3DSculptorTool, [{
    key: "_selectFreehandTool",
    value: function _selectFreehandTool(eventData) {
      var config = this.configuration;
      var element = eventData.element;

      var closestToolIndex = this._getClosestFreehandToolOnElement(element, eventData);

      if (closestToolIndex === undefined) {
        return;
      }

      var toolState = (0, _cornerstoneTools.getToolState)(element, this.referencedToolName);
      var toolData = toolState.data[closestToolIndex];
      var isLocked = toolData.referencedStructureSet.isLocked;

      if (isLocked) {
        return;
      }

      config.hoverColor = toolData.referencedROIContour.color;
      config.currentTool = closestToolIndex;
    }
    /**
     * Event handler for MOUSE_UP during the active loop.
     *
     * @param {Object} evt - The event.
     */

  }, {
    key: "_activeEnd",
    value: function _activeEnd(evt) {
      var eventData = evt.detail;
      var element = eventData.element;
      var config = this.configuration;
      this._active = false;
      state.isMultiPartToolActive = false;

      this._getMouseLocation(eventData);

      this._invalidateToolData(eventData);

      config.mouseUpRender = true;

      this._deactivateSculpt(element);

      var toolData = (0, _cornerstoneTools.getToolState)(element, this.referencedToolName);
      var data = toolData.data[config.currentTool];

      if (modules.freehand3D.getters.interpolate()) {
        (0, _interpolate.default)(data);
      } // Update the image


      (0, _cornerstoneCore.updateImage)(eventData.element);
      preventPropagation(evt);
    }
    /**
     * Invalidate the freehand tool data, tirggering re-calculation of statistics.
     *
     * @private @override
     * @param {Object} eventData - Data object associated with the event.
     */

  }, {
    key: "_invalidateToolData",
    value: function _invalidateToolData(eventData) {
      var config = this.configuration;
      var element = eventData.element;
      var toolData = (0, _cornerstoneTools.getToolState)(element, this.referencedToolName);
      var data = toolData.data[config.currentTool];
      data.invalidated = true;
      data.interpolated = false;
    }
  }]);

  return FreehandRoi3DSculptorTool;
}(_cornerstoneTools.FreehandRoiSculptorTool);
/**
 * Returns the default freehandSculpterMouseTool configuration.
 *
 * @return {Object} The default configuration object.
 */


exports.default = FreehandRoi3DSculptorTool;

function getDefaultFreehandSculpterMouseToolConfiguration() {
  return {
    mouseLocation: {
      handles: {
        start: {
          highlight: true,
          active: true
        }
      }
    },
    minSpacing: 1,
    currentTool: null,
    dragColor: _cornerstoneTools.toolColors.getActiveColor(),
    hoverColor: _cornerstoneTools.toolColors.getToolColor(),

    /* --- Hover options ---
    showCursorOnHover:        Shows a preview of the sculpting radius on hover.
    limitRadiusOutsideRegion: Limit max toolsize outside the subject ROI based
                              on subject ROI area.
    hoverCursorFadeAlpha:     Alpha to fade to when tool very distant from
                              subject ROI.
    hoverCursorFadeDistance:  Distance from ROI in which to fade the hoverCursor
                              (in units of radii).
    */
    showCursorOnHover: true,
    limitRadiusOutsideRegion: true,
    hoverCursorFadeAlpha: 0.5,
    hoverCursorFadeDistance: 1.2
  };
}

function preventPropagation(evt) {
  evt.stopImmediatePropagation();
  evt.stopPropagation();
  evt.preventDefault();
}

module.exports = exports["default"];

/***/ }),

/***/ "./src/tools/FreehandRoi3DTool.js":
/*!****************************************!*\
  !*** ./src/tools/FreehandRoi3DTool.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cornerstoneCore = __webpack_require__(/*! cornerstone-core */ "cornerstone-core");

var _cornerstoneMath = __webpack_require__(/*! cornerstone-math */ "cornerstone-math");

var _cornerstoneTools = __webpack_require__(/*! cornerstone-tools */ "cornerstone-tools");

var _generateUID = _interopRequireDefault(__webpack_require__(/*! ../util/generateUID.js */ "./src/util/generateUID.js"));

var _interpolate = _interopRequireDefault(__webpack_require__(/*! ../util/freehandInterpolate/interpolate.js */ "./src/util/freehandInterpolate/interpolate.js"));

var _getSeriesInstanceUidFromEnabledElement = _interopRequireDefault(__webpack_require__(/*! ../util/getSeriesInstanceUidFromEnabledElement.js */ "./src/util/getSeriesInstanceUidFromEnabledElement.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Cornerstone 3rd party dev kit imports
var _importInternalModule = (0, _cornerstoneTools.importInternalModule)('util/freehandUtils'),
    insertOrDelete = _importInternalModule.insertOrDelete,
    freehandArea = _importInternalModule.freehandArea,
    calculateFreehandStatistics = _importInternalModule.calculateFreehandStatistics;

var draw = (0, _cornerstoneTools.importInternalModule)('drawing/draw');
var drawJoinedLines = (0, _cornerstoneTools.importInternalModule)('drawing/drawJoinedLines');
var drawHandles = (0, _cornerstoneTools.importInternalModule)('drawing/drawHandles');
var drawLinkedTextBox = (0, _cornerstoneTools.importInternalModule)('drawing/drawLinkedTextBox');
var moveHandleNearImagePoint = (0, _cornerstoneTools.importInternalModule)('manipulators/moveHandleNearImagePoint');
var getNewContext = (0, _cornerstoneTools.importInternalModule)('drawing/getNewContext');
var modules = _cornerstoneTools.store.modules;
var numbersWithCommas = (0, _cornerstoneTools.importInternalModule)('util/numbersWithCommas');
var pointInsideBoundingBox = (0, _cornerstoneTools.importInternalModule)('util/pointInsideBoundingBox');
var calculateSUV = (0, _cornerstoneTools.importInternalModule)('util/calculateSUV');

var FreehandRoi3DTool =
/*#__PURE__*/
function (_FreehandRoiTool) {
  _inherits(FreehandRoi3DTool, _FreehandRoiTool);

  function FreehandRoi3DTool() {
    var _this;

    var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, FreehandRoi3DTool);

    var defaultConfig = {
      configuration: defaultFreehandConfiguration()
    };
    var initialConfiguration = Object.assign(defaultConfig, configuration);
    _this = _possibleConstructorReturn(this, (FreehandRoi3DTool.__proto__ || Object.getPrototypeOf(FreehandRoi3DTool)).call(this, initialConfiguration));
    _this.configuration.alwaysShowHandles = false;
    _this._freehand3DStore = modules.freehand3D;
    _this._onMeasurementRemoved = _this._onMeasurementRemoved.bind(_this);
    _this._drawingMouseUpCallback = _this._drawingMouseUpCallback.bind(_this);
    return _this;
  }
  /**
   * Create the measurement data for this tool.
   * @override @public @method
   *
   * @param {object} eventData
   * @returns {object} measurementData
   */


  _createClass(FreehandRoi3DTool, [{
    key: "createNewMeasurement",
    value: function createNewMeasurement(eventData) {
      var freehand3DStore = this._freehand3DStore;
      var goodEventData = eventData && eventData.currentPoints && eventData.currentPoints.image;

      if (!goodEventData) {
        console.error("required eventData not supplied to tool ".concat(this.name, "'s createNewMeasurement"));
        return;
      }

      var enabledElement = (0, _cornerstoneCore.getEnabledElement)(this.element);
      var seriesInstanceUid = (0, _getSeriesInstanceUidFromEnabledElement.default)(enabledElement);
      var referencedStructureSet = freehand3DStore.getters.structureSet(seriesInstanceUid, 'DEFAULT');
      var referencedROIContour = freehand3DStore.getters.activeROIContour(seriesInstanceUid);
      var measurementData = {
        uid: (0, _generateUID.default)(),
        seriesInstanceUid: seriesInstanceUid,
        structureSetUid: 'DEFAULT',
        ROIContourUid: referencedROIContour.uid,
        referencedROIContour: referencedROIContour,
        referencedStructureSet: referencedStructureSet,
        visible: true,
        active: true,
        invalidated: true,
        handles: {
          points: []
        }
      };
      measurementData.handles.textBox = {
        active: false,
        hasMoved: false,
        movesIndependently: false,
        drawnIndependently: true,
        allowedOutsideImage: true,
        hasBoundingBox: true
      };
      freehand3DStore.setters.incrementPolygonCount(seriesInstanceUid, 'DEFAULT', referencedROIContour.uid);
      return measurementData;
    }
    /**
     * Event handler for called by the mouseDownActivate event, if tool is active and
     * the event is not caught by mouseDownCallback.
     * @override
     *
     * @event
     * @param {Object} evt - The event.
     */

  }, {
    key: "addNewMeasurement",
    value: function addNewMeasurement(evt, interactionType) {
      var eventData = evt.detail; // Create metadata if it doesn't exist.

      this._addAndSetVolumeIfNoVolumes();

      this._drawing = true;

      this._startDrawing(evt);

      this._addPoint(eventData);

      preventPropagation(evt);
    }
  }, {
    key: "_addAndSetVolumeIfNoVolumes",
    value: function _addAndSetVolumeIfNoVolumes() {
      var enabledElement = (0, _cornerstoneCore.getEnabledElement)(this.element);
      var seriesInstanceUid = (0, _getSeriesInstanceUidFromEnabledElement.default)(enabledElement);
      var freehand3DStore = modules.freehand3D;
      var series = freehand3DStore.getters.series(seriesInstanceUid);

      if (!series) {
        freehand3DStore.setters.series(seriesInstanceUid);
        series = freehand3DStore.getters.series(seriesInstanceUid);
      }

      var activeROIContour = freehand3DStore.getters.activeROIContour(seriesInstanceUid);

      if (!activeROIContour) {
        freehand3DStore.setters.ROIContour(seriesInstanceUid, 'DEFAULT', 'Unnamed Lesion');
      }
    }
    /**
     * Returns a handle of a particular tool if it is close to the mouse cursor
     *
     * @private
     * @param {Object} element - The element on which the roi is being drawn.
     * @param {Object} data      Data object associated with the tool.
     * @param {*} coords
     * @returns {Number|Object|Boolean}
     */

  }, {
    key: "_pointNearHandle",
    value: function _pointNearHandle(element, data, coords) {
      var freehand3DStore = this._freehand3DStore;

      if (!data.handles || data.handles.points === undefined) {
        return;
      }

      if (data.visible === false) {
        return;
      }

      var points = data.handles.points;

      for (var i = 0; i < points.length; i++) {
        var handleCanvas = (0, _cornerstoneCore.pixelToCanvas)(element, points[i]);

        if (_cornerstoneMath.point.distance(handleCanvas, coords) < 6) {
          return i;
        }
      } // Check to see if mouse in bounding box of textbox


      if (freehand3DStore.state.displayStats && data.handles.textBox) {
        if (pointInsideBoundingBox(data.handles.textBox, coords)) {
          return data.handles.textBox;
        }
      }
    }
    /**
     * Active mouse down callback that takes priority if the user is attempting
     * to insert or delete a handle with ctrl + click.
     *
     * @param {Object} evt - The event.
     */

  }, {
    key: "preMouseDownCallback",
    value: function preMouseDownCallback(evt) {
      var eventData = evt.detail;
      var toolData = (0, _cornerstoneTools.getToolState)(evt.currentTarget, this.name);

      if (!toolData) {
        return false;
      }

      var nearby = this._pointNearHandleAllTools(eventData);

      var freehand3DStore = this._freehand3DStore;

      if (eventData.event.ctrlKey) {
        if (nearby !== undefined && nearby.handleNearby.hasBoundingBox) {// Ctrl + clicked textBox, do nothing but still consume event.
        } else {
          insertOrDelete.call(this, evt, nearby);
        }

        preventPropagation(evt);
        return true;
      }

      if (!nearby) {
        return;
      }

      var data = toolData.data[nearby.toolIndex]; // Check if locked and return

      var structureSet = freehand3DStore.getters.structureSet(data.seriesInstanceUid, data.structureSetUid);

      if (structureSet.isLocked) {
        return false;
      }

      return false;
    }
    /**
     * Custom callback for when a handle is selected.
     *
     * @param  {Object} evt
     * @param  {Object} handle The selected handle.
     */

  }, {
    key: "handleSelectedCallback",
    value: function handleSelectedCallback(evt, data, handle) {
      var interactionType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'mouse';
      var freehand3DStore = this._freehand3DStore;
      var eventData = evt.detail;
      var element = eventData.element;

      if (eventData.event.metaKey) {
        this._switchROIContour(evt, data);

        preventPropagation(evt);
        return;
      }

      if (handle.hasBoundingBox && freehand3DStore.state.displayStats) {
        // Use default move handler - Can move textbox of locked ROIContours.
        moveHandleNearImagePoint(evt, this, data, handle, interactionType);
        return;
      } // Check if locked and return


      var structureSet = freehand3DStore.getters.structureSet(data.seriesInstanceUid, data.structureSetUid);

      if (structureSet.isLocked) {
        return false;
      }

      var config = this.configuration;
      config.dragOrigin = {
        x: handle.x,
        y: handle.y
      }; // Have to do this to get tool index.

      var nearby = this._pointNearHandleAllTools(eventData);

      if (!nearby) {
        return;
      }

      var handleNearby = nearby.handleNearby;
      var toolIndex = nearby.toolIndex;
      this._modifying = true;
      config.currentHandle = handleNearby;
      config.currentTool = toolIndex;

      this._activateModify(element);

      preventPropagation(evt);
    }
  }, {
    key: "_switchROIContour",
    value: function _switchROIContour(evt, data) {
      var freehand3DStore = this._freehand3DStore;
      freehand3DStore.setters.activeROIContour(data.seriesInstanceUid, data.structureSetUid, data.ROIContourUid);
      (0, _cornerstoneCore.updateImage)(evt.detail.element);
    }
    /**
     *
     *
     * @param {*} evt
     * @returns
     */

  }, {
    key: "renderToolData",
    value: function renderToolData(evt) {
      var _this2 = this;

      var eventData = evt.detail;
      var freehand3DStore = this._freehand3DStore; // If we have no toolState for this element, return immediately as there is nothing to do

      var toolState = (0, _cornerstoneTools.getToolState)(evt.currentTarget, this.name);

      if (!toolState) {
        return;
      }

      var image = eventData.image;
      var element = eventData.element;
      var config = this.configuration;

      var seriesModule = _cornerstoneCore.metaData.get('generalSeriesModule', image.imageId);

      var modality;

      if (seriesModule) {
        modality = seriesModule.modality;
      } // We have tool data for this element - iterate over each one and draw it


      var context = getNewContext(eventData.canvasContext.canvas);

      var lineWidth = _cornerstoneTools.toolStyle.getToolWidth();

      var _loop = function _loop(i) {
        var data = toolState.data[i];
        var structureSet = data.referencedStructureSet;
        var ROIContour = data.referencedROIContour;

        if (data.visible === false || !structureSet.visible) {
          return "continue";
        }

        var isROIActive = freehand3DStore.getters.ROIContourIndex(data.seriesInstanceUid, data.structureSetUid, data.ROIContourUid) === freehand3DStore.getters.activeROIContourIndex(data.seriesInstanceUid);
        draw(context, function (context) {
          var color = _cornerstoneTools.toolColors.getColorIfActive(data);

          var fillColor;
          var points = data.handles.points;

          if (data.active && !structureSet.isLocked) {
            if (data.handles.invalidHandlePlacement) {
              color = config.invalidColor;
              fillColor = config.invalidColor;
            } else {
              color = _cornerstoneTools.toolColors.getColorIfActive(data);
              fillColor = _cornerstoneTools.toolColors.getFillColor();
            }
          } else {
            color = ROIContour.color;
            fillColor = ROIContour.color;
          }

          if (isROIActive && data.interpolated) {
            context.globalAlpha = config.interpolatedAlpha;
          }

          if (data.handles.points.length) {
            for (var j = 0; j < points.length; j++) {
              var lines = [].concat(_toConsumableArray(points[j].lines));

              if (j === points.length - 1 && !data.polyBoundingBox) {
                // If it's still being actively drawn, keep the last line to
                // The mouse location
                lines.push(config.mouseLocation.handles.start);
              }

              drawJoinedLines(context, eventData.element, data.handles.points[j], lines, {
                color: color
              });
            }
          }

          context.globalAlpha = 1.0; // Draw handles

          var options = {
            color: color,
            fill: fillColor
          };

          if (isROIActive && data.interpolated) {
            // Render dotted line
            options.handleRadius = config.interpolatedHandleRadius;
            drawHandles(context, eventData, points, options);
          } else if (config.alwaysShowHandles || data.active && data.polyBoundingBox) {
            // Render all handles
            options.handleRadius = config.activeHandleRadius;
            drawHandles(context, eventData, points, options);
          }

          if (data.canComplete) {
            // Draw large handle at the origin if can complete drawing
            options.handleRadius = config.completeHandleRadius;
            drawHandles(context, eventData, [points[0]], options);
          }

          if (data.active && !data.polyBoundingBox) {
            // Draw handle at origin and at mouse if actively drawing
            options.handleRadius = config.activeHandleRadius;
            drawHandles(context, eventData, config.mouseLocation.handles, options);
            drawHandles(context, eventData, [points[0]], options);
          } // Define variables for the area and mean/standard deviation


          var area, meanStdDev, meanStdDevSUV; // Perform a check to see if the tool has been invalidated. This is to prevent
          // Unnecessary re-calculation of the area, mean, and standard deviation if the
          // Image is re-rendered but the tool has not moved (e.g. during a zoom)

          if (data.invalidated === false) {
            // If the data is not invalidated, retrieve it from the toolState
            meanStdDev = data.meanStdDev;
            meanStdDevSUV = data.meanStdDevSUV;
            area = data.area;
          } else if (!data.active) {
            // If the data has been invalidated, and the tool is not currently active,
            // We need to calculate it again.
            // Retrieve the bounds of the ROI in image coordinates
            var bounds = {
              left: points[0].x,
              right: points[0].x,
              bottom: points[0].y,
              top: points[0].x
            };

            for (var _i = 0; _i < points.length; _i++) {
              bounds.left = Math.min(bounds.left, points[_i].x);
              bounds.right = Math.max(bounds.right, points[_i].x);
              bounds.bottom = Math.min(bounds.bottom, points[_i].y);
              bounds.top = Math.max(bounds.top, points[_i].y);
            }

            var polyBoundingBox = {
              left: bounds.left,
              top: bounds.bottom,
              width: Math.abs(bounds.right - bounds.left),
              height: Math.abs(bounds.top - bounds.bottom)
            }; // Store the bounding box information for the text box

            data.polyBoundingBox = polyBoundingBox; // First, make sure this is not a color image, since no mean / standard
            // Deviation will be calculated for color images.

            if (!image.color) {
              // Retrieve the array of pixels that the ROI bounds cover
              var pixels = (0, _cornerstoneCore.getPixels)(element, polyBoundingBox.left, polyBoundingBox.top, polyBoundingBox.width, polyBoundingBox.height); // Calculate the mean & standard deviation from the pixels and the object shape

              meanStdDev = calculateFreehandStatistics.call(_this2, pixels, polyBoundingBox, points);

              if (modality === 'PT') {
                // If the image is from a PET scan, use the DICOM tags to
                // Calculate the SUV from the mean and standard deviation.
                // Note that because we are using modality pixel values from getPixels, and
                // The calculateSUV routine also rescales to modality pixel values, we are first
                // Returning the values to storedPixel values before calcuating SUV with them.
                // TODO: Clean this up? Should we add an option to not scale in calculateSUV?
                meanStdDevSUV = {
                  mean: calculateSUV(image, (meanStdDev.mean - image.intercept) / image.slope),
                  stdDev: calculateSUV(image, (meanStdDev.stdDev - image.intercept) / image.slope)
                };
              } // If the mean and standard deviation values are sane, store them for later retrieval


              if (meanStdDev && !isNaN(meanStdDev.mean)) {
                data.meanStdDev = meanStdDev;
                data.meanStdDevSUV = meanStdDevSUV;
              }
            } // Retrieve the pixel spacing values, and if they are not
            // Real non-zero values, set them to 1


            var columnPixelSpacing = image.columnPixelSpacing || 1;
            var rowPixelSpacing = image.rowPixelSpacing || 1;
            var scaling = columnPixelSpacing * rowPixelSpacing;
            area = freehandArea(points, scaling); // If the area value is sane, store it for later retrieval

            if (!isNaN(area)) {
              data.area = area;
            } // Set the invalidated flag to false so that this data won't automatically be recalculated


            data.invalidated = false;
          } // Only render text if polygon ROI has been completed, and is active,
          // Or config is set to show the textBox all the time


          if (data.polyBoundingBox && (freehand3DStore.state.displayStats || data.active)) {
            // If the textbox has not been moved by the user, it should be displayed on the right-most
            // Side of the tool.
            if (!data.handles.textBox.hasMoved) {
              // Find the rightmost side of the polyBoundingBox at its vertical center, and place the textbox here
              // Note that this calculates it in image coordinates
              data.handles.textBox.x = data.polyBoundingBox.left + data.polyBoundingBox.width;
              data.handles.textBox.y = data.polyBoundingBox.top + data.polyBoundingBox.height / 2;
            }

            var text = textBoxText.call(_this2, data);
            drawLinkedTextBox(context, element, data.handles.textBox, text, points, textBoxAnchorPoints, color, lineWidth, 0, true);
          }
        });
      };

      for (var i = 0; i < toolState.data.length; i++) {
        var _ret = _loop(i);

        if (_ret === "continue") continue;
      }

      function textBoxText(data) {
        var ROIContour = data.referencedROIContour;
        var structureSet = data.referencedStructureSet;
        var meanStdDev = data.meanStdDev,
            meanStdDevSUV = data.meanStdDevSUV,
            area = data.area; // Define an array to store the rows of text for the textbox

        var textLines = [];
        textLines.push(ROIContour.name);

        if (structureSet.name === 'DEFAULT') {
          textLines.push('Working ROI Collection');
        } else {
          textLines.push(structureSet.name);
        } // If the mean and standard deviation values are present, display them


        if (meanStdDev && meanStdDev.mean !== undefined) {
          // If the modality is CT, add HU to denote Hounsfield Units
          var moSuffix = '';

          if (modality === 'CT') {
            moSuffix = ' HU';
          } // Create a line of text to display the mean and any units that were specified (i.e. HU)


          var meanText = "Mean: ".concat(numbersWithCommas(meanStdDev.mean.toFixed(2))).concat(moSuffix); // Create a line of text to display the standard deviation and any units that were specified (i.e. HU)

          var stdDevText = "StdDev: ".concat(numbersWithCommas(meanStdDev.stdDev.toFixed(2))).concat(moSuffix); // If this image has SUV values to display, concatenate them to the text line

          if (meanStdDevSUV && meanStdDevSUV.mean !== undefined) {
            var SUVtext = ' SUV: ';
            meanText += SUVtext + numbersWithCommas(meanStdDevSUV.mean.toFixed(2));
            stdDevText += SUVtext + numbersWithCommas(meanStdDevSUV.stdDev.toFixed(2));
          } // Add these text lines to the array to be displayed in the textbox


          textLines.push(meanText);
          textLines.push(stdDevText);
        } // If the area is a sane value, display it


        if (area) {
          // Determine the area suffix based on the pixel spacing in the image.
          // If pixel spacing is present, use millimeters. Otherwise, use pixels.
          // This uses Char code 178 for a superscript 2
          var suffix = " mm".concat(String.fromCharCode(178));

          if (!image.rowPixelSpacing || !image.columnPixelSpacing) {
            suffix = " pixels".concat(String.fromCharCode(178));
          } // Create a line of text to display the area and its units


          var areaText = "Area: ".concat(numbersWithCommas(area.toFixed(2))).concat(suffix); // Add this text line to the array to be displayed in the textbox

          textLines.push(areaText);
        }

        textLines.push("".concat(ROIContour.polygonCount, " contours"));
        return textLines;
      }

      function textBoxAnchorPoints(points) {
        return points;
      }
    }
    /**
     * Ends the active drawing loop and completes the polygon.
     *
     * @private
     * @param {Object} element - The element on which the roi is being drawn.
     * @param {Object} handleNearby - the handle nearest to the mouse cursor.
     */

  }, {
    key: "_endDrawing",
    value: function _endDrawing(element, handleNearby) {
      var toolState = (0, _cornerstoneTools.getToolState)(element, this.name);
      var config = this.configuration;
      var data = toolState.data[config.currentTool];
      var points = data.handles.points;
      data.active = false;
      data.highlight = false;
      data.handles.invalidHandlePlacement = false; // Connect the end handle to the origin handle

      if (handleNearby !== undefined) {
        points[config.currentHandle - 1].lines.push(points[0]);
      }

      if (this._modifying) {
        this._modifying = false;
        data.invalidated = true;
        data.interpolated = false;
      } // Reset the current handle


      config.currentHandle = 0;
      config.currentTool = -1;
      data.canComplete = false;

      if (this._drawing) {
        this._drawing = false;

        this._deactivateDraw(element);
      }

      if (modules.freehand3D.state.interpolate) {
        (0, _interpolate.default)(data, element);
      }

      (0, _cornerstoneCore.updateImage)(element);
    }
    /**
     * Custom callback for when toolData is deleted.
     *
     * @param  {Object} evt
     */

  }, {
    key: "_onMeasurementRemoved",
    value: function _onMeasurementRemoved(evt) {
      var eventData = evt.detail;

      if (eventData.toolType !== this.name) {
        return;
      }

      var measurementData = eventData.measurementData;

      this._freehand3DStore.setters.decrementPolygonCount(measurementData.seriesInstanceUid, measurementData.structureSetUid, measurementData.ROIContourUid);
    }
  }, {
    key: "passiveCallback",
    value: function passiveCallback(element) {
      this._closeToolIfDrawing(element);

      this._addMeasurementRemovedListener(element);
    }
  }, {
    key: "enabledCallback",
    value: function enabledCallback(element) {
      this._closeToolIfDrawing(element);

      this._addMeasurementRemovedListener(element);
    }
  }, {
    key: "activeCallback",
    value: function activeCallback(element) {
      this._addMeasurementRemovedListener(element);
    }
  }, {
    key: "disabledCallback",
    value: function disabledCallback(element) {
      this._closeToolIfDrawing(element);

      element.removeEventListener(_cornerstoneTools.EVENTS.MEASUREMENT_REMOVED, this._onMeasurementRemoved);
    }
  }, {
    key: "_addMeasurementRemovedListener",
    value: function _addMeasurementRemovedListener(element) {
      element.removeEventListener(_cornerstoneTools.EVENTS.MEASUREMENT_REMOVED, this._onMeasurementRemoved);
      element.addEventListener(_cornerstoneTools.EVENTS.MEASUREMENT_REMOVED, this._onMeasurementRemoved);
    }
  }]);

  return FreehandRoi3DTool;
}(_cornerstoneTools.FreehandRoiTool);

exports.default = FreehandRoi3DTool;

function defaultFreehandConfiguration() {
  return {
    mouseLocation: {
      handles: {
        start: {
          highlight: true,
          active: true
        }
      }
    },
    spacing: 1,
    interpolatedHandleRadius: 0.5,
    interpolatedAlpha: 0.5,
    activeHandleRadius: 3,
    completeHandleRadius: 6,
    completeHandleRadiusTouch: 28,
    alwaysShowHandles: false,
    invalidColor: 'crimson',
    currentHandle: 0,
    currentTool: -1
  };
}

function preventPropagation(evt) {
  evt.stopImmediatePropagation();
  evt.stopPropagation();
  evt.preventDefault();
}

module.exports = exports["default"];

/***/ }),

/***/ "./src/tools/n-dimensional-flood-fill.js":
/*!***********************************************!*\
  !*** ./src/tools/n-dimensional-flood-fill.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://github.com/tuzz/n-dimensional-flood-fill

module.exports = function (options) {
  var getter, seed, onFlood, onBoundary, equals, diagonals, startNode, permutations, stack, flooded, visits, bounds;

  var initialize = function initialize() {
    getter = options.getter;
    seed = options.seed;
    onFlood = options.onFlood || noop;
    onBoundary = options.onBoundary || noop;
    equals = options.equals || defaultEquals;
    diagonals = options.diagonals || false;
    startNode = get(seed);
    permutations = prunedPermutations();
    stack = [];
    flooded = [];
    visits = {};
    bounds = {};
  };

  var main = function main() {
    stack.push({
      currentArgs: seed
    });

    while (stack.length > 0) {
      flood(stack.pop());
    }

    return {
      flooded: flooded,
      boundaries: boundaries()
    };
  };

  var flood = function flood(job) {
    var getArgs = job.currentArgs;
    var preletgs = job.previousArgs;

    if (visited(getArgs)) {
      return;
    }

    markAsVisited(getArgs);

    if (member(getArgs)) {
      markAsFlooded(getArgs);
      pushAdjacent(getArgs);
    } else {
      markAsBoundary(preletgs);
    }
  };

  var visited = function visited(key) {
    return visits[key] === true;
  };

  var markAsVisited = function markAsVisited(key) {
    visits[key] = true;
  };

  var member = function member(getArgs) {
    var node = safely(get, [getArgs]);
    return safely(equals, [node, startNode]);
  };

  var markAsFlooded = function markAsFlooded(getArgs) {
    flooded.push(getArgs);
    onFlood.apply(undefined, getArgs);
  };

  var markAsBoundary = function markAsBoundary(preletgs) {
    bounds[preletgs] = preletgs;
    onBoundary.apply(undefined, preletgs);
  };

  var pushAdjacent = function pushAdjacent(getArgs) {
    for (var i = 0; i < permutations.length; i += 1) {
      var perm = permutations[i];
      var nextArgs = getArgs.slice(0);

      for (var j = 0; j < getArgs.length; j += 1) {
        nextArgs[j] += perm[j];
      }

      stack.push({
        currentArgs: nextArgs,
        previousArgs: getArgs
      });
    }
  };

  var get = function get(getArgs) {
    return getter.apply(undefined, getArgs);
  };

  var safely = function safely(f, args) {
    try {
      return f.apply(undefined, args);
    } catch (error) {}
  };

  var noop = function noop() {};

  var defaultEquals = function defaultEquals(a, b) {
    return a === b;
  };

  var prunedPermutations = function prunedPermutations() {
    var permutations = permute(seed.length);
    return permutations.filter(function (perm) {
      var count = countNonZeroes(perm);
      return count !== 0 && (count === 1 || diagonals);
    });
  };

  var permute = function permute(length) {
    var perms = [];

    var permutation = function permutation(string) {
      return string.split('').map(function (c) {
        return parseInt(c, 10) - 1;
      });
    };

    for (var i = 0; i < Math.pow(3, length); i += 1) {
      var string = lpad(i.toString(3), '0', length);
      perms.push(permutation(string));
    }

    return perms;
  };

  var lpad = function lpad(string, character, length) {
    var array = new Array(length + 1);
    var pad = array.join(character);
    return (pad + string).slice(-length);
  };

  var countNonZeroes = function countNonZeroes(array) {
    var count = 0;

    for (var i = 0; i < array.length; i += 1) {
      if (array[i] !== 0) {
        count += 1;
      }
    }

    return count;
  };

  var boundaries = function boundaries() {
    var array = [];

    for (var key in bounds) {
      if (bounds.hasOwnProperty(key)) {
        array.unshift(bounds[key]);
      }
    }

    return array;
  };

  initialize();
  return main();
};

/***/ }),

/***/ "./src/util/classes/Polygon.js":
/*!*************************************!*\
  !*** ./src/util/classes/Polygon.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Polygon = void 0;

var _cornerstoneTools = __webpack_require__(/*! cornerstone-tools */ "cornerstone-tools");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var modules = _cornerstoneTools.store.modules;

var Polygon =
/*#__PURE__*/
function () {
  function Polygon(points, sopInstanceUid, seriesInstanceUid, structureSetUid, ROIContourUid, polygonUid, frameNumber, interpolated) {
    _classCallCheck(this, Polygon);

    this._polyPoints = this._deepCopyPoints(points);
    this._sopInstanceUid = sopInstanceUid;
    this._seriesInstanceUid = seriesInstanceUid;
    this._structureSetUid = structureSetUid;
    this._ROIContourUid = ROIContourUid;
    this._polygonUid = polygonUid;
    this._frameNumber = frameNumber;
    this._interpolated = interpolated;
  }

  _createClass(Polygon, [{
    key: "_deepCopyPoints",
    value: function _deepCopyPoints(points) {
      // Creates a deep copy of the points array
      var polyPoints = [];
      var isZ = points[0].z !== undefined;

      for (var i = 0; i < points.length; i++) {
        polyPoints.push({
          x: points[i].x,
          y: points[i].y
        });

        if (isZ) {
          polyPoints[i].z = points[i].z;
        }
      }

      return polyPoints;
    }
  }, {
    key: "getFreehandToolData",
    value: function getFreehandToolData(importType) {
      var seriesInstanceUid = this._seriesInstanceUid;
      var structureSetUid = this._structureSetUid;
      var ROIContourUid = this._ROIContourUid;
      var freehand3DStore = modules.freehand3D;
      var referencedROIContour = freehand3DStore.getters.ROIContour(seriesInstanceUid, structureSetUid, ROIContourUid);
      var referencedStructureSet = freehand3DStore.getters.structureSet(seriesInstanceUid, structureSetUid);
      var data = {
        uid: this._polygonUid,
        seriesInstanceUid: seriesInstanceUid,
        structureSetUid: structureSetUid,
        ROIContourUid: ROIContourUid,
        referencedROIContour: referencedROIContour,
        referencedStructureSet: referencedStructureSet,
        visible: true,
        active: false,
        invalidated: true,
        handles: {
          points: []
        }
      };

      if (this._sopInstanceUid) {
        data.sopInstanceUID = this._sopInstanceUid;
      }

      if (this._interpolated) {
        data.interpolated = true;
      }

      this._generatePoints(data.handles.points);

      data.handles.textBox = {
        active: false,
        hasMoved: false,
        movesIndependently: false,
        drawnIndependently: true,
        allowedOutsideImage: true,
        hasBoundingBox: true
      };
      data.polyBoundingBox = {};
      data.toBeScaled = importType;
      return data;
    }
  }, {
    key: "_generatePoints",
    value: function _generatePoints(points) {
      // Construct data.handles.points array
      for (var i = 0; i < this._polyPoints.length; i++) {
        points.push(this._deepCopyOnePoint(i));
      } // Generate lines to be drawn


      for (var _i = 0; _i < points.length; _i++) {
        if (_i === points.length - 1) {
          points[_i].lines.push(points[0]);
        } else {
          points[_i].lines.push(points[_i + 1]);
        }
      }
    }
  }, {
    key: "_deepCopyOnePoint",
    value: function _deepCopyOnePoint(i) {
      var point = {
        x: this._polyPoints[i].x,
        y: this._polyPoints[i].y,
        lines: []
      };

      if (this._polyPoints[i].z !== undefined) {
        point.z = this._polyPoints[i].z;
      }

      return point;
    }
  }, {
    key: "polyPoints",
    get: function get() {
      return this._polyPoints;
    }
  }, {
    key: "sopInstanceUid",
    get: function get() {
      return this._sopInstanceUid;
    }
  }, {
    key: "uid",
    get: function get() {
      return this._polygonUid;
    }
  }, {
    key: "frameNumber",
    get: function get() {
      return this._frameNumber;
    }
  }]);

  return Polygon;
}();

exports.Polygon = Polygon;

/***/ }),

/***/ "./src/util/freehandInterpolate/generateInterpolationData.js":
/*!*******************************************************************!*\
  !*** ./src/util/freehandInterpolate/generateInterpolationData.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _cornerstoneTools = __webpack_require__(/*! cornerstone-tools */ "cornerstone-tools");

var globalToolStateManager = _cornerstoneTools.globalImageIdSpecificToolStateManager;
/**
 * generateInterpolationList - Generate the list of contours to interpolate,
 * including whether they are new contours, or interpolated contours that need
 * to be updated.
 *
 * @param  {object} toolData The tool data of the freehand3D contour.
 * @return {object} An object containing the ROIContourData and the
 * interpolationList.
 */

function _default(toolData, element) {
  var ROIContourUid = toolData.ROIContourUid;

  var imageIds = _getImageIdsOfActiveSeries(element);

  var ROIContourData = _getROIContourData(imageIds, ROIContourUid);

  var extent = _getExtentOfRegion(ROIContourData);

  var sliceEdited = _getSlicePositionOfToolData(ROIContourData, toolData.uid);

  var interpolationList = []; // Check if contours between the extent can be interpolated.

  for (var i = extent[0] + 1; i <= extent[1] - 1; i++) {
    if (_sliceNeedsInterpolating(ROIContourData, i)) {
      var contourPair = _getBoundingPair(i, extent, ROIContourData);

      if (contourPair && (contourPair[0] === sliceEdited || contourPair[1] === sliceEdited)) {
        _appendinterpolationList(contourPair, interpolationList);
      }
    }
  }

  return {
    ROIContourData: ROIContourData,
    interpolationList: interpolationList
  };
}
/**
 * _getSlicePositionOfToolData - Finds the slice that was edited.
 *
 * @param  {type} ROIContourData description
 * @param  {type} polygonUid     description
 * @return {type}                description
 */


function _getSlicePositionOfToolData(ROIContourData, polygonUid) {
  for (var i = 0; i < ROIContourData.length; i++) {
    if (ROIContourData[i].contours) {
      var contours = ROIContourData[i].contours;

      for (var j = 0; j < contours.length; j++) {
        if (contours[j].uid === polygonUid) {
          return i;
        }
      }
    }
  }

  return;
}
/**
 * _getImageIdsOfActiveSeries - returns an array of the imageIds for the current
 * active series.
 *
 * @return {String[]} An array of imageIds.
 */


function _getImageIdsOfActiveSeries(element) {
  var stackToolState = (0, _cornerstoneTools.getToolState)(element, 'stack');
  return stackToolState.data[0].imageIds;
}
/**
 * _getROIContourData - Generates a list of the slice locations of the 2D
 * polygons that make up the ROIContour.
 *
 * @param  {String[]} imageIds  An array of Image Ids.
 * @param  {type} ROIContourUid The UID of the ROIContour.
 * @return {object[]}           The list of contour locations in the stack.
 */


function _getROIContourData(imageIds, ROIContourUid) {
  var ROIContourData = [];
  var toolStateManager = globalToolStateManager.saveToolState();

  for (var i = 0; i < imageIds.length; i++) {
    var imageId = imageIds[i];
    var imageToolState = toolStateManager[imageId];

    if (!imageToolState || !imageToolState.freehandRoi) {
      ROIContourData.push({
        imageId: imageId
      });
    } else {
      var contours = imageToolState.freehandRoi.data.filter(function (contour) {
        return contour.ROIContourUid === ROIContourUid;
      });
      var contoursOnSlice = {
        imageId: imageId
      };

      if (contours.length) {
        contoursOnSlice.contours = contours;
      }

      ROIContourData.push(contoursOnSlice);
    }
  }

  return ROIContourData;
}
/**
 * _getExtentOfRegion - Returns a 2 element array with the slice locations of
 * top and bottom polygon of the ROIContour.
 *
 * @param  {object} ROIContourData  Data on the slice location of contours
 *                                  for the ROIContour.
 * @return {Number[]}               The slice locations of the top and bottom
 *                                  polygon of the ROIContour.
 */


function _getExtentOfRegion(ROIContourData) {
  var extent = [];

  for (var i = 0; i < ROIContourData.length; i++) {
    if (ROIContourData[i].contours) {
      extent.push(i);
      break;
    }
  }

  for (var _i = ROIContourData.length - 1; _i >= 0; _i--) {
    if (ROIContourData[_i].contours) {
      extent.push(_i);
      break;
    }
  }

  return extent;
}
/**
 * _sliceNeedsInterpolating - Check whether there are no contours on this
 * slice, or one which is an interpolated contour.
 *
 * @param  {object} ROIContourData  Data on the slice location of contours
 *                                  for the ROIContour.
 * @param  {Number} sliceIndex      The slice index.
 * @return {boolean}                Whether or not the slice needs interpolating.
 */


function _sliceNeedsInterpolating(ROIContourData, sliceIndex) {
  return !ROIContourData[sliceIndex].contours || ROIContourData[sliceIndex].contours.length === 1 && ROIContourData[sliceIndex].contours[0].interpolated;
}
/**
 * _appendinterpolationList - If the contour on slice i can be updated, add it to the
 * interpolationList.
 *
 * @param  {Number} sliceIndex      The slice index.
 * @param  {Number[]} extent        The extent of slice occupancy of the
 *                                  ROIContour.
 * @param  {object[]} ROIContourData  Data for the slice location of contours
 *                                  for the ROIContour.
 * @param  {object[]} interpolationList The list of contours to be interpolated.
 * @return {null}
 */


function _appendinterpolationList(contourPair, interpolationList) {
  if (!interpolationList[contourPair[0]]) {
    interpolationList[contourPair[0]] = {
      pair: contourPair,
      list: []
    };
  }
}
/**
 * _getBoundingPair - Given the slice index and extent of the ROIContour,
 * get the pair of polygons to use for interpolation of the slice. Returns
 * undefined if there is an ambiguity and interpolation can't take place.
 *
 * @param  {Number} sliceIndex   The slice index.
 * @param  {Number[]} extent        The extent of slice occupancy of the
 *                                  ROIContour.
 * @param  {object[]} ROIContourData  Data for the slice location of contours
 *                                  for the ROIContour.
 * @return {Number[] || undefined}  The pair of slice indicies, or undefined if
 * the contours to use for interpolation is ambiguous.
 */


function _getBoundingPair(sliceIndex, extent, ROIContourData) {
  var contourPair = [];
  var canInterpolate = true; // Check for nearest lowest sliceIndex containing contours.

  for (var i = sliceIndex - 1; i >= extent[0]; i--) {
    if (ROIContourData[i].contours) {
      var contours = ROIContourData[i].contours;

      if (contours[0].interpolated) {
        // This contour is interpolated. We need to
        // Find a solid contour to interpolate from.
        continue;
      }

      if (contours.length > 1) {
        canInterpolate = false;
      } // Found single, non interpolated contour to interpolate from.


      contourPair.push(i);
      break;
    }
  }

  if (!canInterpolate) {
    return;
  } // Check for nearest upper sliceIndex containing contours.


  for (var _i2 = sliceIndex + 1; _i2 <= extent[1]; _i2++) {
    if (ROIContourData[_i2].contours) {
      var _contours = ROIContourData[_i2].contours;

      if (_contours[0].interpolated) {
        // This contour is interpolated. We need to
        // Find a solid contour to interpolate from.
        continue;
      }

      if (_contours.length > 1) {
        canInterpolate = false;
      }

      contourPair.push(_i2);
      break;
    }
  }

  if (!canInterpolate) {
    return;
  }

  return contourPair;
}

module.exports = exports["default"];

/***/ }),

/***/ "./src/util/freehandInterpolate/interpolate.js":
/*!*****************************************************!*\
  !*** ./src/util/freehandInterpolate/interpolate.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _cornerstoneTools = __webpack_require__(/*! cornerstone-tools */ "cornerstone-tools");

var _Polygon = __webpack_require__(/*! ../classes/Polygon.js */ "./src/util/classes/Polygon.js");

var _generateUID = _interopRequireDefault(__webpack_require__(/*! ../generateUID.js */ "./src/util/generateUID.js"));

var _generateInterpolationData = _interopRequireDefault(__webpack_require__(/*! ./generateInterpolationData.js */ "./src/util/freehandInterpolate/generateInterpolationData.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var globalToolStateManager = _cornerstoneTools.globalImageIdSpecificToolStateManager;
var dP = 0.2; // Aim for < 0.2mm between interpolated nodes when super-sampling.

var modules = _cornerstoneTools.store.modules;
/**
 * interpolate - Interpolate missing contours in the ROIContour.
 *
 * @param  {object} toolData The tool data of the freehand3D contour.
 * @return {null}
 */

function _default(toolData, element) {
  var _generateInterpolatio = (0, _generateInterpolationData.default)(toolData, element),
      ROIContourData = _generateInterpolatio.ROIContourData,
      interpolationList = _generateInterpolatio.interpolationList;

  for (var i = 0; i < interpolationList.length; i++) {
    if (interpolationList[i]) {
      _linearlyInterpolateBetween(interpolationList[i].list, interpolationList[i].pair, ROIContourData);
    }
  }
}
/**
 * _linearlyInterpolateBetween - Linearly interpolate all the slices in the
 * indicies array between the contourPair.
 *
 * @param  {Number[]} indicies     An array of slice indicies to interpolate.
 * @param  {Number[]} contourPair  The pair of contours to interpolate between.
 * @param  {object[]} ROIContourData  Data for the slice location of contours
 *                                    for the ROIContour.
 * @return {null}
 */


function _linearlyInterpolateBetween(indicies, contourPair, ROIContourData) {
  var c1 = _generateClosedContour(ROIContourData[contourPair[0]].contours[0].handles.points);

  var c2 = _generateClosedContour(ROIContourData[contourPair[1]].contours[0].handles.points);

  var _generateInterpolatio2 = _generateInterpolationContourPair(c1, c2),
      c1Interp = _generateInterpolatio2.c1Interp,
      c2Interp = _generateInterpolatio2.c2Interp; // Using the newly constructed contours, interpolate each ROI.


  indicies.forEach(function (index) {
    _linearlyInterpolateContour(c1Interp, c2Interp, index, contourPair, ROIContourData, c1.x.length > c2.x.length);
  });
}
/**
 * _linearlyInterpolateContour - Inserts a linearly interpolated contour at
 * specified slice index.
 *
 * @param  {object} c1Interp       The first reference contour.
 * @param  {object} c2Interp       The second reference contour.
 * @param  {Number} sliceIndex       The slice index to interpolate.
 * @param  {Number{}} contourPair    The slice indicies of the reference contours.
 * @param  {object[]} ROIContourData  Data for the slice location of contours
 *                                  for the ROIContour.
 * @param  {boolean} c1HasMoreNodes True if c1 has more nodes than c2.
 * @return {null}
 */


function _linearlyInterpolateContour(c1Interp, c2Interp, sliceIndex, contourPair, ROIContourData, c1HasMoreNodes) {
  var zInterp = (sliceIndex - contourPair[0]) / (contourPair[1] - contourPair[0]);

  var interpolated2DContour = _generateInterpolatedOpenContour(c1Interp, c2Interp, zInterp, c1HasMoreNodes);

  var c1Metadata = ROIContourData[contourPair[0]].contours[0];

  if (ROIContourData[sliceIndex].contours) {
    _editInterpolatedContour(interpolated2DContour, ROIContourData[sliceIndex].imageId, c1Metadata);
  } else {
    _addInterpolatedContour(interpolated2DContour, ROIContourData[sliceIndex].imageId, c1Metadata);
  }
}
/**
 * _generateInterpolationContourPair - generates two aligned contours with an
 * equal number of nodes from which an intermediate contour may be interpolated.
 *
 * @param  {object} c1 The first contour.
 * @param  {object} c2 The second contour.
 * @return {object}  An object containing the two contours.
 */


function _generateInterpolationContourPair(c1, c2) {
  var cumPerim1 = _getCumulativePerimeter(c1);

  var cumPerim2 = _getCumulativePerimeter(c2);

  var interpNodes = Math.max(Math.ceil(cumPerim1[cumPerim1.length - 1] / dP), Math.ceil(cumPerim2[cumPerim2.length - 1] / dP));

  var cumPerim1Norm = _normalisedCumulativePerimeter(cumPerim1);

  var cumPerim2Norm = _normalisedCumulativePerimeter(cumPerim2);

  var numNodes1 = interpNodes + c2.x.length;
  var numNodes2 = interpNodes + c1.x.length; // concatinate p && cumPerimNorm

  var perim1Interp = _getInterpolatedPerim(numNodes1, cumPerim1Norm);

  var perim2Interp = _getInterpolatedPerim(numNodes2, cumPerim2Norm);

  var perim1Ind = _getIndicatorArray(c1, numNodes1);

  var perim2Ind = _getIndicatorArray(c2, numNodes2);

  var nodesPerSegment1 = _getNodesPerSegment(perim1Interp, perim1Ind);

  var nodesPerSegment2 = _getNodesPerSegment(perim2Interp, perim2Ind);

  var c1i = _getSuperSampledContour(c1, nodesPerSegment1);

  var c2i = _getSuperSampledContour(c2, nodesPerSegment2); // Keep c2i fixed and shift the starting node of c1i to minimise the total length of segments.


  _shiftSuperSampledContourInPlace(c1i, c2i);

  return _reduceContoursToOriginNodes(c1i, c2i);
}
/**
 * _addInterpolatedContour - Adds a new contour to the imageId.
 *
 * @param  {object} interpolated2DContour The polygon to add to the ROIContour.
 * @param  {String} imageId               The imageId to add the polygon to.
 * @param  {type} referencedToolData    The toolData of another polygon in the
 * ROIContour, to assign appropriate metadata to the new polygon.
 * @return {null}
 */


function _addInterpolatedContour(interpolated2DContour, imageId, referencedToolData) {
  var points = [];

  for (var i = 0; i < interpolated2DContour.x.length; i++) {
    points.push({
      x: interpolated2DContour.x[i],
      y: interpolated2DContour.y[i]
    });
  }

  var polygon = new _Polygon.Polygon(points, null, referencedToolData.seriesInstanceUid, referencedToolData.structureSetUid, referencedToolData.ROIContourUid, (0, _generateUID.default)(), null, true);
  var toolStateManager = globalToolStateManager.saveToolState();

  if (!toolStateManager[imageId]) {
    toolStateManager[imageId] = {};
  }

  var imageToolState = toolStateManager[imageId];

  if (!imageToolState.freehandRoi) {
    imageToolState.freehandRoi = {};
    imageToolState.freehandRoi.data = [];
  } else if (!imageToolState.freehandRoi.data) {
    imageToolState.freehandRoi.data = [];
  }

  imageToolState.freehandRoi.data.push(polygon.getFreehandToolData(false));
  modules.freehand3D.setters.incrementPolygonCount(referencedToolData.seriesInstanceUid, referencedToolData.structureSetUid, referencedToolData.ROIContourUid);
}
/**
 * _editInterpolatedContour - Edits an interpolated polygon on the imageId
 * that corresponds to the specified ROIContour.
 *
 * @param  {object} interpolated2DContour The polygon to add to the ROIContour.
 * @param  {String} imageId               The imageId to add the polygon to.
 * @param  {type} referencedToolData    The toolData of another polygon in the
 * ROIContour, to assign appropriate metadata to the new polygon.
 * @return {null}
 */


function _editInterpolatedContour(interpolated2DContour, imageId, referencedToolData) {
  var toolStateManager = globalToolStateManager.saveToolState();
  var imageToolState = toolStateManager[imageId];

  if (!imageToolState) {
    throw new Error('Image toolstate does not exist. This should not be reached in this case!');
  } // Find the index of the polygon on this slice corresponding to
  // The ROIContour.


  var toolDataIndex;

  for (var i = 0; i < imageToolState.freehandRoi.data.length; i++) {
    if (imageToolState.freehandRoi.data[i].ROIContourUid === referencedToolData.ROIContourUid) {
      toolDataIndex = i;
      break;
    }
  }

  var oldPolygon = imageToolState.freehandRoi.data[toolDataIndex];
  var points = [];

  for (var _i = 0; _i < interpolated2DContour.x.length; _i++) {
    points.push({
      x: interpolated2DContour.x[_i],
      y: interpolated2DContour.y[_i]
    });
  }

  var updatedPolygon = new _Polygon.Polygon(points, null, oldPolygon.seriesInstanceUid, oldPolygon.structureSetUid, oldPolygon.ROIContourUid, oldPolygon.uid, null, true);
  imageToolState.freehandRoi.data[toolDataIndex] = updatedPolygon.getFreehandToolData(false);
}
/**
 * _generateInterpolatedOpenContour - Interpolate an open contour between c1ir
 * and c2ir at the zInterp position.
 *
 * @param  {object} c1ir            The interpolated c1 contour with
 *                                  superfluous nodes removed.
 * @param  {object} c2ir            The interpolated c2 contour with
 *                                  superfluous nodes removed.
 * @param  {Number} zInterp         The z- coordinate of the desired
 *                                  interpolation.
 * @param  {boolean} c1HasMoreNodes True if c1 has more original nodes
 *                                  than c2.
 * @return {object}                 The interpolated contour at z=zInterp.
 */


function _generateInterpolatedOpenContour(c1ir, c2ir, zInterp, c1HasMoreNodes) {
  var cInterp = {
    x: [],
    y: []
  };
  var indicies = c1HasMoreNodes ? c1ir.I : c2ir.I;

  for (var i = 0; i < c1ir.x.length; i++) {
    if (indicies[i]) {
      cInterp.x.push((1 - zInterp) * c1ir.x[i] + zInterp * c2ir.x[i]);
      cInterp.y.push((1 - zInterp) * c1ir.y[i] + zInterp * c2ir.y[i]);
    }
  }

  return cInterp;
}
/**
 * _reduceContoursToOriginNodes - Removes any nodes from the contours that don't
 * correspond to an original contour node.
 *
 * @param  {object} c1i The first super-sampled contour.
 * @param  {object} c2i The second super-sampled contour.
 * @return {object}     An object containing the two reduced contours.
 */


function _reduceContoursToOriginNodes(c1i, c2i) {
  var c1Interp = {
    x: [],
    y: [],
    I: []
  };
  var c2Interp = {
    x: [],
    y: [],
    I: []
  };

  for (var i = 0; i < c1i.x.length; i++) {
    if (c1i.I[i] || c2i.I[i]) {
      c1Interp.x.push(c1i.x[i]);
      c1Interp.y.push(c1i.y[i]);
      c1Interp.I.push(c1i.I[i]);
      c2Interp.x.push(c2i.x[i]);
      c2Interp.y.push(c2i.y[i]);
      c2Interp.I.push(c2i.I[i]);
    }
  }

  return {
    c1Interp: c1Interp,
    c2Interp: c2Interp
  };
}
/**
 * _shiftSuperSampledContourInPlace - Shifts the indicies of c1i around to
 * minimise: SUM (|c1i[i]-c2i[i]|) from 0 to N.
 *
 * @param  {object} c1i The contour to shift.
 * @param  {object} c2i The reference contour.
 * @modifies c1i
 */


function _shiftSuperSampledContourInPlace(c1i, c2i) {
  var c1iLength = c1i.x.length;
  var optimal = {
    startingNode: 0,
    totalSquaredXYLengths: Infinity
  };

  for (var startingNode = 0; startingNode < c1iLength; startingNode++) {
    var _node = startingNode; // NOTE: 1) Ignore calculating Z, as the sum of all squared Z distances will always be a constant.
    // NOTE: 2) Don't need actual length, so don't worry about square rooting.

    var totalSquaredXYLengths = 0;

    for (var itteration = 0; itteration < c1iLength; itteration++) {
      totalSquaredXYLengths += Math.pow(c1i.x[_node] - c2i.x[itteration], 2) + Math.pow(c1i.y[_node] - c2i.y[itteration], 2);
      _node++;
      if (_node === c1iLength) _node = 0;
    }

    if (totalSquaredXYLengths < optimal.totalSquaredXYLengths) {
      optimal.totalSquaredXYLengths = totalSquaredXYLengths;
      optimal.startingNode = startingNode;
    }
  }

  var node = optimal.startingNode;

  _shiftCircularArray(c1i.x, node);

  _shiftCircularArray(c1i.y, node);

  _shiftCircularArray(c1i.I, node);
}
/**
 * _shiftCircularArray - Shift the circular array by the count.
 *
 * @param  {*[]} arr   The array.
 * @param  {Number} count The shift.
 * @return {*[]}       The shifted array.
 */


function _shiftCircularArray(arr, count) {
  count -= arr.length * Math.floor(count / arr.length);
  arr.push.apply(arr, arr.splice(0, count));
  return arr;
}
/**
 * _getSuperSampledContour - Generates a super sampled contour with additional
 * nodes added per segment.
 *
 * @param  {object} c                 The original contour.
 * @param  {Number[]} nodesPerSegment An array of the number of nodes to add
 *                                    per line segment.
 * @return {object}                   The super sampled contour.
 */


function _getSuperSampledContour(c, nodesPerSegment) {
  var ci = {
    x: [],
    y: [],
    I: []
  }; // Length - 1, produces 'open' polygon.

  for (var n = 0; n < c.x.length - 1; n++) {
    // Add original node.
    ci.x.push(c.x[n]);
    ci.y.push(c.y[n]);
    ci.I.push(true); // Add linerally interpolated nodes.

    var xSpacing = (c.x[n + 1] - c.x[n]) / (nodesPerSegment[n] + 1);
    var ySpacing = (c.y[n + 1] - c.y[n]) / (nodesPerSegment[n] + 1); // Add other nodesPerSegment - 1 other nodes (as already put in original node).

    for (var i = 0; i < nodesPerSegment[n] - 1; i++) {
      ci.x.push(ci.x[ci.x.length - 1] + xSpacing);
      ci.y.push(ci.y[ci.y.length - 1] + ySpacing);
      ci.I.push(false);
    }
  }

  return ci;
}
/**
 * _getNodesPerSegment - Returns an array of the number of interpolated nodes
 * to be added along each line segment of a polygon.
 *
 * @param  {Number[]} perimInterp Normalised array of original and added nodes.
 * @param  {boolean[]} perimInd    The indicator array describing the location of
 *                            the original contour's nodes.
 * @return {Number[]}         An array containging the number of nodes to be
 *                            added per original line segment.
 */


function _getNodesPerSegment(perimInterp, perimInd) {
  var idx = [];

  for (var i = 0; i < perimInterp.length; ++i) {
    idx[i] = i;
  }

  idx.sort(function (a, b) {
    return perimInterp[a] < perimInterp[b] ? -1 : perimInterp[a] > perimInterp[b];
  });
  var perimIndSorted = [];

  for (var _i2 = 0; _i2 < perimInd.length; _i2++) {
    perimIndSorted.push(perimInd[idx[_i2]]);
  }

  var indiciesOfOriginNodes = perimIndSorted.reduce(function (arr, elementValue, i) {
    if (elementValue) arr.push(i);
    return arr;
  }, []);
  var nodesPerSegment = [];

  for (var _i3 = 0; _i3 < indiciesOfOriginNodes.length - 1; _i3++) {
    nodesPerSegment.push(indiciesOfOriginNodes[_i3 + 1] - indiciesOfOriginNodes[_i3]);
  }

  return nodesPerSegment;
}
/**
 * _getIndicatorArray - Produces an array of the location of the original nodes
 * in a super sampled contour.
 *
 * @param  {object} contour   The original contour.
 * @param  {Number} numNodes The number of nodes added.
 * @return {boolean[]}           The indicator array of original node locations.
 */


function _getIndicatorArray(contour, numNodes) {
  var perimInd = [];

  for (var i = 0; i < numNodes - 2; i++) {
    perimInd.push(false);
  }

  for (var _i4 = 0; _i4 < contour.x.length; _i4++) {
    perimInd.push(true);
  }

  return perimInd;
}
/**
 * _getInterpolatedPerim - Adds additional interpolated nodes to the
 * normalised perimeter array.
 *
 * @param  {Number} numNodes    The number of nodes to add.
 * @param  {Number[]} cumPerimNorm The cumulative perimeter array.
 * @return {Number[]}              The array of nodes.
 */


function _getInterpolatedPerim(numNodes, cumPerimNorm) {
  var diff = 1 / (numNodes - 1);
  var linspace = [diff]; // Length - 2 as we are discarding 0 an 1 for efficiency (no need to calculate them).

  for (var i = 1; i < numNodes - 2; i++) {
    linspace.push(linspace[linspace.length - 1] + diff);
  }

  return linspace.concat(cumPerimNorm);
}
/**
 * _getCumulativePerimeter - Returns an array of the the cumulative perimeter at
 * each node of the contour.
 *
 * @param  {object} contour The contour.
 * @return {Number[]}         An array of the cumulative perimeter at each node.
 */


function _getCumulativePerimeter(contour) {
  var cumulativePerimeter = [0];

  for (var i = 1; i < contour.x.length; i++) {
    var lengthOfSegment = Math.sqrt(Math.pow(contour.x[i] - contour.x[i - 1], 2) + Math.pow(contour.y[i] - contour.y[i - 1], 2));
    cumulativePerimeter.push(cumulativePerimeter[i - 1] + lengthOfSegment);
  }

  return cumulativePerimeter;
}
/**
 * _normalisedCumulativePerimeter - Normalises the cumulative perimeter array.
 *
 * @param  {type} cumPerim An array of the cumulative perimeter at each of a
 * contour.
 * @return {type}          The normalised array.
 */


function _normalisedCumulativePerimeter(cumPerim) {
  var cumPerimNorm = [];

  for (var i = 0; i < cumPerim.length; i++) {
    cumPerimNorm.push(cumPerim[i] / cumPerim[cumPerim.length - 1]);
  }

  return cumPerimNorm;
}
/**
 * _generateClosedContour - Generate a clockwise contour object from the points
 * of a clockwise or anti-clockwise polygon.
 *
 * @param  {object[]} points The points to generate the contour from.
 * @return {object}           The generated contour object.
 */


function _generateClosedContour(points) {
  var c = {
    x: [],
    y: []
  }; // NOTE: For z positions we only need the relative difference for interpolation, thus use frame index as Z.

  for (var i = 0; i < points.length; i++) {
    c.x[i] = points[i].x;
    c.y[i] = points[i].y;
  } // Push last node to create closed contour.


  c.x.push(c.x[0]);
  c.y.push(c.y[0]);

  _reverseIfAntiClockwise(c);

  return c;
}
/**
 * _reverseIfAntiClockwise - If the contour's nodes run anti-clockwise,
 * reverse them.
 *
 * @param  {object} contour The contour.
 * @return {object}         The contour, corrected to be clockwise if appropriate.
 */


function _reverseIfAntiClockwise(contour) {
  var length = contour.x.length;
  var contourXMean = contour.x.reduce(getSumReducer) / length;
  var checkSum = 0;

  for (var k = 0, i = 1, j = 2; k < length; k++) {
    checkSum += (contour.x[i] - contourXMean) * (contour.y[j] - contour.y[k]);
    i++;
    j++;
    if (i >= length) i = 0;
    if (j >= length) j = 0;
  }

  if (checkSum > 0) {
    contour.x.reverse();
    contour.y.reverse();
  }
}
/**
 * getSumReducer - A reducer function that calculates the sum of an array.
 *
 * @param  {Number} total The running total.
 * @param  {Number} num   The numerical value of the array element.
 * @return {Number}       The updated running total.
 */


function getSumReducer(total, num) {
  return total + num;
}

module.exports = exports["default"];

/***/ }),

/***/ "./src/util/generateBrushMetadata.js":
/*!*******************************************!*\
  !*** ./src/util/generateBrushMetadata.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateMetadata;

var _GeneralAnatomylist = _interopRequireDefault(__webpack_require__(/*! ../GeneralAnatomylist.js */ "./src/GeneralAnatomylist.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var categories = _GeneralAnatomylist.default.SegmentationCodes.Category;

function generateMetadata(label) {
  var categoryUID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'T-D0050';
  var typeUID = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'T-D0050';
  var modifierUID = arguments[3];
  var category = categories.find(function (categoriesI) {
    return categoriesI.CodeValue === categoryUID;
  });
  var type = category.Type.find(function (typesI) {
    return typesI.CodeValue === typeUID;
  });
  var metadata = {
    SegmentedPropertyCategoryCodeSequence: {
      CodeValue: category.CodeValue,
      CodingSchemeDesignator: category.CodingSchemeDesignator,
      CodeMeaning: category.CodeMeaning
    },
    SegmentLabel: label,
    SegmentAlgorithmType: 'MANUAL',
    SegmentedPropertyTypeCodeSequence: {
      CodeValue: type.CodeValue,
      CodingSchemeDesignator: type.CodingSchemeDesignator,
      CodeMeaning: type.CodeMeaning
    }
  };

  if (modifierUID) {
    var modfier = type.Modifier.find(function (modifierI) {
      return modifierI.CodeValue === modifierUID;
    });
    metadata.SegmentedPropertyTypeCodeSequence.SegmentedPropertyTypeModifierCodeSequence = {
      CodeValue: modfier.CodeValue,
      CodingSchemeDesignator: modfier.CodingSchemeDesignator,
      CodeMeaning: modfier.CodeMeaning
    };
    metadata.RecommendedDisplayCIELabValue = modfier.recommendedDisplayRGBValue;
  } else {
    metadata.RecommendedDisplayCIELabValue = type.recommendedDisplayRGBValue;
  }

  return metadata;
}

module.exports = exports["default"];

/***/ }),

/***/ "./src/util/generateUID.js":
/*!*********************************!*\
  !*** ./src/util/generateUID.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

/**
 * Generates a UUID for the enabledElement.
 * @export @public @method
 * @name generateUID
 *
 * @return {String} the UUID.
 */
function _default() {
  // https://stackoverflow.com/a/8809472/9208320 Public Domain/MIT

  /* eslint no-bitwise: ["error", { "allow": ["&","|"] }] */
  var d = new Date().getTime();

  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now(); // Use high-precision timer if available
  }

  return 'x.x.x.x.x.x.xxxx.xxx.x.x.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
}

module.exports = exports["default"];

/***/ }),

/***/ "./src/util/getSeriesInstanceUidFromEnabledElement.js":
/*!************************************************************!*\
  !*** ./src/util/getSeriesInstanceUidFromEnabledElement.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getSeriesInstanceUidFromEnabledElement;

var _cornerstoneTools = _interopRequireDefault(__webpack_require__(/*! cornerstone-tools */ "cornerstone-tools"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSeriesInstanceUidFromEnabledElement(enabledElement) {
  if (!enabledElement) {
    return;
  }

  var imageId = enabledElement.image.imageId;

  var generalSeriesModule = _cornerstoneTools.default.metaData.get('generalSeriesModule', imageId);

  return generalSeriesModule.seriesInstanceUID;
}

module.exports = exports["default"];

/***/ }),

/***/ "cornerstone-core":
/*!***********************************!*\
  !*** external "cornerstone-core" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cornerstone_core__;

/***/ }),

/***/ "cornerstone-math":
/*!***********************************!*\
  !*** external "cornerstone-math" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cornerstone_math__;

/***/ }),

/***/ "cornerstone-tools":
/*!************************************!*\
  !*** external "cornerstone-tools" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cornerstone_tools__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vLi9zcmMvR2VuZXJhbEFuYXRvbXlsaXN0LmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vLi9zcmMvaW5pdC5qcyIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vLi9zcmMvbW9kdWxlcy9leHRlbmRCcnVzaE1vZHVsZS5qcyIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vLi9zcmMvbW9kdWxlcy9mcmVlaGFuZDNETW9kdWxlLmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy90b29scy9CcnVzaDNEQXV0b0dhdGVkVG9vbC5qcyIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vLi9zcmMvdG9vbHMvQnJ1c2gzREhVR2F0ZWRUb29sLmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy90b29scy9CcnVzaDNEVG9vbC5qcyIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vLi9zcmMvdG9vbHMvRnJlZWhhbmRSb2kzRFNjdWxwdG9yVG9vbC5qcyIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vLi9zcmMvdG9vbHMvRnJlZWhhbmRSb2kzRFRvb2wuanMiLCJ3ZWJwYWNrOi8vb2hpZi1zZWdtZW50YXRpb24tcGx1Z2luLy4vc3JjL3Rvb2xzL24tZGltZW5zaW9uYWwtZmxvb2QtZmlsbC5qcyIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vLi9zcmMvdXRpbC9jbGFzc2VzL1BvbHlnb24uanMiLCJ3ZWJwYWNrOi8vb2hpZi1zZWdtZW50YXRpb24tcGx1Z2luLy4vc3JjL3V0aWwvZnJlZWhhbmRJbnRlcnBvbGF0ZS9nZW5lcmF0ZUludGVycG9sYXRpb25EYXRhLmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy91dGlsL2ZyZWVoYW5kSW50ZXJwb2xhdGUvaW50ZXJwb2xhdGUuanMiLCJ3ZWJwYWNrOi8vb2hpZi1zZWdtZW50YXRpb24tcGx1Z2luLy4vc3JjL3V0aWwvZ2VuZXJhdGVCcnVzaE1ldGFkYXRhLmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy91dGlsL2dlbmVyYXRlVUlELmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy91dGlsL2dldFNlcmllc0luc3RhbmNlVWlkRnJvbUVuYWJsZWRFbGVtZW50LmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi9leHRlcm5hbCBcImNvcm5lcnN0b25lLWNvcmVcIiIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vZXh0ZXJuYWwgXCJjb3JuZXJzdG9uZS1tYXRoXCIiLCJ3ZWJwYWNrOi8vb2hpZi1zZWdtZW50YXRpb24tcGx1Z2luL2V4dGVybmFsIFwiY29ybmVyc3RvbmUtdG9vbHNcIiJdLCJuYW1lcyI6WyJqc29uIiwicGFyc2VkSnNvbiIsIkpTT04iLCJwYXJzZSIsIlRPT0xCQVJfQlVUVE9OX1RZUEVTIiwiQ09NTUFORCIsIlNFVF9UT09MX0FDVElWRSIsImlkIiwicHJlUmVnaXN0cmF0aW9uIiwiY29uZmlndXJhdGlvbiIsImdldENvbW1hbmRzTW9kdWxlIiwiZGVmYXVsdENvbnRleHQiLCJhY3Rpb25zIiwiZGVmaW5pdGlvbnMiLCJnZXRUb29sYmFyTW9kdWxlIiwibGFiZWwiLCJpY29uIiwiYnV0dG9ucyIsInR5cGUiLCJjb21tYW5kTmFtZSIsImdldFBhbmVsTW9kdWxlIiwibW9kdWxlcyIsImRlZmF1bHRDb25maWciLCJtYXhSYWRpdXMiLCJob2xlRmlsbCIsImhvbGVGaWxsUmFuZ2UiLCJzdHJheVJlbW92ZSIsInN0cmF5UmVtb3ZlUmFuZ2UiLCJpbnRlcnBvbGF0ZSIsInNob3dGcmVlaGFuZFN0YXRzIiwiYnJ1c2gzZFRvb2xOYW1lIiwiYnJ1c2gzREhVR2F0ZWRUb29sTmFtZSIsImJydXNoM0RBdXRvR2F0ZWRUb29sIiwiZnJlZWhhbmRSb2kzRFRvb2wiLCJmcmVlaGFuZFJvaTNEU2N1bHB0b3JUb29sIiwiZ2F0ZXMiLCJuYW1lIiwicmFuZ2UiLCJpbml0IiwiYnJ1c2hNb2R1bGUiLCJicnVzaCIsImNvbmZpZyIsIk9iamVjdCIsImFzc2lnbiIsImZyZWVoYW5kM0RTdG9yZSIsImZyZWVoYW5kM0QiLCJzdGF0ZSIsImRpc3BsYXlTdGF0cyIsInJlZmVyZW5jZWRUb29sTmFtZSIsImV4dGVuZEJydXNoTW9kdWxlIiwiYnJ1c2hTdGF0ZSIsImdldHRlcnMiLCJzZXR0ZXJzIiwiYWN0aXZlR2F0ZSIsImFjdGl2ZUdhdGVSYW5nZSIsImdhdGVJbmRleCIsImZpbmRJbmRleCIsImVsZW1lbnQiLCJjdXN0b21HYXRlUmFuZ2UiLCJtaW4iLCJtYXgiLCJpbXBvcnRNZXRhZGF0YSIsInNlcmllc0luc3RhbmNlVWlkIiwiaW1wb3J0IiwibWV0YWRhdGEiLCJpbXBvcnRNb2RpZmllZCIsIm1vZGlmaWVkIiwic2VyaWVzQ29sbGVjdGlvbiIsImNoZWNrIiwib2JqZWN0IiwiRXJyb3IiLCJnZXRTZXJpZXMiLCJmaW5kIiwic2VyaWVzIiwidWlkIiwiZ2V0U3RydWN0dXJlU2V0Iiwic3RydWN0dXJlU2V0VWlkIiwic3RydWN0dXJlU2V0Q29sbGVjdGlvbiIsInN0cnVjdHVyZVNldCIsImdldFJPSUNvbnRvdXIiLCJST0lDb250b3VyVWlkIiwiUk9JQ29udG91ckNvbGxlY3Rpb24iLCJST0lDb250b3VyIiwiZ2V0Uk9JQ29udG91ckluZGV4IiwiZ2V0QWN0aXZlU3RydWN0dXJlU2V0SW5kZXgiLCJhY3RpdmVTdHJ1Y3R1cmVTZXRJbmRleCIsImdldEFjdGl2ZVJPSUNvbnRvdXJJbmRleCIsImFjdGl2ZVJPSUNvbnRvdXJJbmRleCIsImdldEFjdGl2ZVJPSUNvbnRvdXIiLCJ1bmRlZmluZWQiLCJzZXRTZXJpZXMiLCJwdXNoIiwic2V0U3RydWN0dXJlU2V0Iiwib3B0aW9ucyIsImlzTG9ja2VkIiwidmlzaWJsZSIsInNldFJPSUNvbnRvdXIiLCJjb2xvciIsImdldE5leHRDb2xvciIsInBvbHlnb25Db3VudCIsInNldFJPSUNvbnRvdXJBbmRTZXRJbmRleEFjdGl2ZSIsImluZGV4IiwibGVuZ3RoIiwic2V0RGVsZXRlUk9JRnJvbVN0cnVjdHVyZVNldCIsIlJPSUNvbnRvdXJJbmRleCIsInNwbGljZSIsInNldFN0cnVjdHVyZVNldE5hbWUiLCJzZXREZWxldGVTdHJ1Y3R1cmVTZXQiLCJzdHJ1Y3R1cmVTZXRJbmRleCIsInNldFJPSUNvbnRvdXJOYW1lIiwic2V0QWN0aXZlU3RydWN0dXJlU2V0SW5kZXgiLCJzZXRBY3RpdmVTdHJ1Y3R1cmVTZXQiLCJzZXRBY3RpdmVST0lDb250b3VySW5kZXgiLCJzZXRBY3RpdmVST0lDb250b3VyIiwiaW5jcmVtZW50UG9seWdvbkNvdW50IiwiZGVjcmVtZW50UG9seWdvbkNvdW50IiwiYWN0aXZlUk9JQ29udG91ciIsIlJPSUNvbnRvdXJBbmRTZXRJbmRleEFjdGl2ZSIsImRlbGV0ZVJPSUZyb21TdHJ1Y3R1cmVTZXQiLCJkZWxldGVTdHJ1Y3R1cmVTZXQiLCJzdHJ1Y3R1cmVTZXROYW1lIiwiUk9JQ29udG91ck5hbWUiLCJhY3RpdmVTdHJ1Y3R1cmVTZXQiLCJ0b2dnbGVJbnRlcnBvbGF0ZSIsInRvZ2dsZURpc3BsYXlTdGF0cyIsImVuYWJsZWRFbGVtZW50Q2FsbGJhY2siLCJlbmFibGVkRWxlbWVudCIsImdldEVuYWJsZWRFbGVtZW50IiwiaW1hZ2UiLCJpbXBvcnRDb2xvcnMiLCJjdXJyZW50Q29sb3JJbmRleCIsImltcG9ydEludGVybmFsTW9kdWxlIiwiZ2V0Q2lyY2xlIiwic3RvcmUiLCJCcnVzaDNEQXV0b0dhdGVkVG9vbCIsImluaXRpYWxDb25maWd1cmF0aW9uIiwiZXZ0IiwiX3NldEN1c3RvbUdhdGUiLCJfc3RhcnRQYWludGluZyIsImV2ZW50RGF0YSIsImRldGFpbCIsInJvd3MiLCJjb2x1bW5zIiwiY3VycmVudFBvaW50cyIsIngiLCJ5IiwicmFkaXVzIiwiaW1hZ2VQaXhlbERhdGEiLCJnZXRQaXhlbERhdGEiLCJyZXNjYWxlU2xvcGUiLCJzbG9wZSIsInJlc2NhbGVJbnRlcmNlcHQiLCJpbnRlcmNlcHQiLCJjaXJjbGUiLCJsbyIsImhpIiwiaSIsInBpeGVsVmFsdWUiLCJnYXRlIiwiZ2F0ZVZhbHVlcyIsImdhdGVkQ2lyY2xlQXJyYXkiLCJfY2xlYW5HYXRlZENpcmNsZSIsImRyYXdCcnVzaFBpeGVscyIsIkJydXNoM0RIVUdhdGVkVG9vbCIsInBvaW50ZXJBcnJheSIsIl9nYXRlQ2lyY2xlIiwicGFpbnRFdmVudERhdGEiLCJsYWJlbG1hcDNEIiwiY3VycmVudEltYWdlSWRJbmRleCIsImFjdGl2ZUxhYmVsbWFwSW5kZXgiLCJzaG91bGRFcmFzZSIsInRyaWdnZXJFdmVudCIsIkxBQkVMTUFQX01PRElGSUVEIiwidXBkYXRlSW1hZ2UiLCJnYXRlUmFuZ2UiLCJkYXRhIiwiZWRnZVBpeGVscyIsInhTaXplIiwieVNpemUiLCJqIiwiX2dldEJvdW5kaW5nQm94T2ZDaXJjbGUiLCJfYm94R2F0ZWRDaXJjbGUiLCJnZXR0ZXIiLCJfZmxvb2RGaWxsRW1wdHlSZWdpb25zRnJvbUVkZ2VzIiwiX2ZpbmRIb2xlc0FuZFJlZ2lvbnMiLCJob2xlcyIsInJlZ2lvbnMiLCJsYXJnZXN0UmVnaW9uQXJlYSIsIl9nZXRBcmVhT2ZMYXJnZXN0UmVnaW9uIiwiciIsInJlZ2lvbiIsInAiLCJob2xlIiwiZmlsbGVkR2F0ZWRDaXJjbGVBcnJheSIsIlVpbnQ4Q2xhbXBlZEFycmF5IiwiX2dldEVkZ2VQaXhlbHMiLCJyZXN1bHQiLCJzZWVkIiwiZmxvb2RlZCIsImsiLCJCcnVzaDNEVG9vbCIsImdldEFuZENhY2hlTGFiZWxtYXAyRCIsIl9pc0N0cmxEb3duIiwiYWx3YXlzRXJhc2VPbkNsaWNrIiwic2VnbWVudEluZGV4IiwiYWN0aXZlU2VnbWVudEluZGV4IiwiX3BhaW50IiwiX2RyYXdpbmciLCJfc3RhcnRMaXN0ZW5pbmdGb3JNb3VzZVVwIiwiRnJlZWhhbmRSb2kzRFNjdWxwdG9yVG9vbCIsImdldERlZmF1bHRGcmVlaGFuZFNjdWxwdGVyTW91c2VUb29sQ29uZmlndXJhdGlvbiIsImFjdGl2ZU1vdXNlVXBDYWxsYmFjayIsImJpbmQiLCJjbG9zZXN0VG9vbEluZGV4IiwiX2dldENsb3Nlc3RGcmVlaGFuZFRvb2xPbkVsZW1lbnQiLCJ0b29sU3RhdGUiLCJ0b29sRGF0YSIsInJlZmVyZW5jZWRTdHJ1Y3R1cmVTZXQiLCJob3ZlckNvbG9yIiwicmVmZXJlbmNlZFJPSUNvbnRvdXIiLCJjdXJyZW50VG9vbCIsIl9hY3RpdmUiLCJpc011bHRpUGFydFRvb2xBY3RpdmUiLCJfZ2V0TW91c2VMb2NhdGlvbiIsIl9pbnZhbGlkYXRlVG9vbERhdGEiLCJtb3VzZVVwUmVuZGVyIiwiX2RlYWN0aXZhdGVTY3VscHQiLCJwcmV2ZW50UHJvcGFnYXRpb24iLCJpbnZhbGlkYXRlZCIsImludGVycG9sYXRlZCIsIm1vdXNlTG9jYXRpb24iLCJoYW5kbGVzIiwic3RhcnQiLCJoaWdobGlnaHQiLCJhY3RpdmUiLCJtaW5TcGFjaW5nIiwiZHJhZ0NvbG9yIiwiZ2V0QWN0aXZlQ29sb3IiLCJnZXRUb29sQ29sb3IiLCJzaG93Q3Vyc29yT25Ib3ZlciIsImxpbWl0UmFkaXVzT3V0c2lkZVJlZ2lvbiIsImhvdmVyQ3Vyc29yRmFkZUFscGhhIiwiaG92ZXJDdXJzb3JGYWRlRGlzdGFuY2UiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImluc2VydE9yRGVsZXRlIiwiZnJlZWhhbmRBcmVhIiwiY2FsY3VsYXRlRnJlZWhhbmRTdGF0aXN0aWNzIiwiZHJhdyIsImRyYXdKb2luZWRMaW5lcyIsImRyYXdIYW5kbGVzIiwiZHJhd0xpbmtlZFRleHRCb3giLCJtb3ZlSGFuZGxlTmVhckltYWdlUG9pbnQiLCJnZXROZXdDb250ZXh0IiwibnVtYmVyc1dpdGhDb21tYXMiLCJwb2ludEluc2lkZUJvdW5kaW5nQm94IiwiY2FsY3VsYXRlU1VWIiwiRnJlZWhhbmRSb2kzRFRvb2wiLCJkZWZhdWx0RnJlZWhhbmRDb25maWd1cmF0aW9uIiwiYWx3YXlzU2hvd0hhbmRsZXMiLCJfZnJlZWhhbmQzRFN0b3JlIiwiX29uTWVhc3VyZW1lbnRSZW1vdmVkIiwiX2RyYXdpbmdNb3VzZVVwQ2FsbGJhY2siLCJnb29kRXZlbnREYXRhIiwiY29uc29sZSIsImVycm9yIiwibWVhc3VyZW1lbnREYXRhIiwicG9pbnRzIiwidGV4dEJveCIsImhhc01vdmVkIiwibW92ZXNJbmRlcGVuZGVudGx5IiwiZHJhd25JbmRlcGVuZGVudGx5IiwiYWxsb3dlZE91dHNpZGVJbWFnZSIsImhhc0JvdW5kaW5nQm94IiwiaW50ZXJhY3Rpb25UeXBlIiwiX2FkZEFuZFNldFZvbHVtZUlmTm9Wb2x1bWVzIiwiX3N0YXJ0RHJhd2luZyIsIl9hZGRQb2ludCIsImNvb3JkcyIsImhhbmRsZUNhbnZhcyIsImRpc3RhbmNlIiwiY3VycmVudFRhcmdldCIsIm5lYXJieSIsIl9wb2ludE5lYXJIYW5kbGVBbGxUb29scyIsImV2ZW50IiwiY3RybEtleSIsImhhbmRsZU5lYXJieSIsImNhbGwiLCJ0b29sSW5kZXgiLCJoYW5kbGUiLCJtZXRhS2V5IiwiX3N3aXRjaFJPSUNvbnRvdXIiLCJkcmFnT3JpZ2luIiwiX21vZGlmeWluZyIsImN1cnJlbnRIYW5kbGUiLCJfYWN0aXZhdGVNb2RpZnkiLCJzZXJpZXNNb2R1bGUiLCJnZXQiLCJpbWFnZUlkIiwibW9kYWxpdHkiLCJjb250ZXh0IiwiY2FudmFzQ29udGV4dCIsImNhbnZhcyIsImxpbmVXaWR0aCIsImdldFRvb2xXaWR0aCIsImlzUk9JQWN0aXZlIiwiZ2V0Q29sb3JJZkFjdGl2ZSIsImZpbGxDb2xvciIsImludmFsaWRIYW5kbGVQbGFjZW1lbnQiLCJpbnZhbGlkQ29sb3IiLCJnZXRGaWxsQ29sb3IiLCJnbG9iYWxBbHBoYSIsImludGVycG9sYXRlZEFscGhhIiwibGluZXMiLCJwb2x5Qm91bmRpbmdCb3giLCJmaWxsIiwiaGFuZGxlUmFkaXVzIiwiaW50ZXJwb2xhdGVkSGFuZGxlUmFkaXVzIiwiYWN0aXZlSGFuZGxlUmFkaXVzIiwiY2FuQ29tcGxldGUiLCJjb21wbGV0ZUhhbmRsZVJhZGl1cyIsImFyZWEiLCJtZWFuU3RkRGV2IiwibWVhblN0ZERldlNVViIsImJvdW5kcyIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsInRvcCIsIk1hdGgiLCJ3aWR0aCIsImFicyIsImhlaWdodCIsInBpeGVscyIsIm1lYW4iLCJzdGREZXYiLCJpc05hTiIsImNvbHVtblBpeGVsU3BhY2luZyIsInJvd1BpeGVsU3BhY2luZyIsInNjYWxpbmciLCJ0ZXh0IiwidGV4dEJveFRleHQiLCJ0ZXh0Qm94QW5jaG9yUG9pbnRzIiwidGV4dExpbmVzIiwibW9TdWZmaXgiLCJtZWFuVGV4dCIsInRvRml4ZWQiLCJzdGREZXZUZXh0IiwiU1VWdGV4dCIsInN1ZmZpeCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImFyZWFUZXh0IiwiX2RlYWN0aXZhdGVEcmF3IiwidG9vbFR5cGUiLCJfY2xvc2VUb29sSWZEcmF3aW5nIiwiX2FkZE1lYXN1cmVtZW50UmVtb3ZlZExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk1FQVNVUkVNRU5UX1JFTU9WRUQiLCJhZGRFdmVudExpc3RlbmVyIiwic3BhY2luZyIsImNvbXBsZXRlSGFuZGxlUmFkaXVzVG91Y2giLCJtb2R1bGUiLCJleHBvcnRzIiwib25GbG9vZCIsIm9uQm91bmRhcnkiLCJlcXVhbHMiLCJkaWFnb25hbHMiLCJzdGFydE5vZGUiLCJwZXJtdXRhdGlvbnMiLCJzdGFjayIsInZpc2l0cyIsImluaXRpYWxpemUiLCJub29wIiwiZGVmYXVsdEVxdWFscyIsInBydW5lZFBlcm11dGF0aW9ucyIsIm1haW4iLCJjdXJyZW50QXJncyIsImZsb29kIiwicG9wIiwiYm91bmRhcmllcyIsImpvYiIsImdldEFyZ3MiLCJwcmVsZXRncyIsInByZXZpb3VzQXJncyIsInZpc2l0ZWQiLCJtYXJrQXNWaXNpdGVkIiwibWVtYmVyIiwibWFya0FzRmxvb2RlZCIsInB1c2hBZGphY2VudCIsIm1hcmtBc0JvdW5kYXJ5Iiwia2V5Iiwibm9kZSIsInNhZmVseSIsImFwcGx5IiwicGVybSIsIm5leHRBcmdzIiwic2xpY2UiLCJmIiwiYXJncyIsImEiLCJiIiwicGVybXV0ZSIsImZpbHRlciIsImNvdW50IiwiY291bnROb25aZXJvZXMiLCJwZXJtcyIsInBlcm11dGF0aW9uIiwic3RyaW5nIiwic3BsaXQiLCJtYXAiLCJjIiwicGFyc2VJbnQiLCJwb3ciLCJscGFkIiwidG9TdHJpbmciLCJjaGFyYWN0ZXIiLCJhcnJheSIsIkFycmF5IiwicGFkIiwiam9pbiIsImhhc093blByb3BlcnR5IiwidW5zaGlmdCIsIlBvbHlnb24iLCJzb3BJbnN0YW5jZVVpZCIsInBvbHlnb25VaWQiLCJmcmFtZU51bWJlciIsIl9wb2x5UG9pbnRzIiwiX2RlZXBDb3B5UG9pbnRzIiwiX3NvcEluc3RhbmNlVWlkIiwiX3Nlcmllc0luc3RhbmNlVWlkIiwiX3N0cnVjdHVyZVNldFVpZCIsIl9ST0lDb250b3VyVWlkIiwiX3BvbHlnb25VaWQiLCJfZnJhbWVOdW1iZXIiLCJfaW50ZXJwb2xhdGVkIiwicG9seVBvaW50cyIsImlzWiIsInoiLCJpbXBvcnRUeXBlIiwic29wSW5zdGFuY2VVSUQiLCJfZ2VuZXJhdGVQb2ludHMiLCJ0b0JlU2NhbGVkIiwiX2RlZXBDb3B5T25lUG9pbnQiLCJwb2ludCIsImdsb2JhbFRvb2xTdGF0ZU1hbmFnZXIiLCJpbWFnZUlkcyIsIl9nZXRJbWFnZUlkc09mQWN0aXZlU2VyaWVzIiwiUk9JQ29udG91ckRhdGEiLCJfZ2V0Uk9JQ29udG91ckRhdGEiLCJleHRlbnQiLCJfZ2V0RXh0ZW50T2ZSZWdpb24iLCJzbGljZUVkaXRlZCIsIl9nZXRTbGljZVBvc2l0aW9uT2ZUb29sRGF0YSIsImludGVycG9sYXRpb25MaXN0IiwiX3NsaWNlTmVlZHNJbnRlcnBvbGF0aW5nIiwiY29udG91clBhaXIiLCJfZ2V0Qm91bmRpbmdQYWlyIiwiX2FwcGVuZGludGVycG9sYXRpb25MaXN0IiwiY29udG91cnMiLCJzdGFja1Rvb2xTdGF0ZSIsInRvb2xTdGF0ZU1hbmFnZXIiLCJzYXZlVG9vbFN0YXRlIiwiaW1hZ2VUb29sU3RhdGUiLCJmcmVlaGFuZFJvaSIsImNvbnRvdXIiLCJjb250b3Vyc09uU2xpY2UiLCJzbGljZUluZGV4IiwicGFpciIsImxpc3QiLCJjYW5JbnRlcnBvbGF0ZSIsImRQIiwiX2xpbmVhcmx5SW50ZXJwb2xhdGVCZXR3ZWVuIiwiaW5kaWNpZXMiLCJjMSIsIl9nZW5lcmF0ZUNsb3NlZENvbnRvdXIiLCJjMiIsIl9nZW5lcmF0ZUludGVycG9sYXRpb25Db250b3VyUGFpciIsImMxSW50ZXJwIiwiYzJJbnRlcnAiLCJmb3JFYWNoIiwiX2xpbmVhcmx5SW50ZXJwb2xhdGVDb250b3VyIiwiYzFIYXNNb3JlTm9kZXMiLCJ6SW50ZXJwIiwiaW50ZXJwb2xhdGVkMkRDb250b3VyIiwiX2dlbmVyYXRlSW50ZXJwb2xhdGVkT3BlbkNvbnRvdXIiLCJjMU1ldGFkYXRhIiwiX2VkaXRJbnRlcnBvbGF0ZWRDb250b3VyIiwiX2FkZEludGVycG9sYXRlZENvbnRvdXIiLCJjdW1QZXJpbTEiLCJfZ2V0Q3VtdWxhdGl2ZVBlcmltZXRlciIsImN1bVBlcmltMiIsImludGVycE5vZGVzIiwiY2VpbCIsImN1bVBlcmltMU5vcm0iLCJfbm9ybWFsaXNlZEN1bXVsYXRpdmVQZXJpbWV0ZXIiLCJjdW1QZXJpbTJOb3JtIiwibnVtTm9kZXMxIiwibnVtTm9kZXMyIiwicGVyaW0xSW50ZXJwIiwiX2dldEludGVycG9sYXRlZFBlcmltIiwicGVyaW0ySW50ZXJwIiwicGVyaW0xSW5kIiwiX2dldEluZGljYXRvckFycmF5IiwicGVyaW0ySW5kIiwibm9kZXNQZXJTZWdtZW50MSIsIl9nZXROb2Rlc1BlclNlZ21lbnQiLCJub2Rlc1BlclNlZ21lbnQyIiwiYzFpIiwiX2dldFN1cGVyU2FtcGxlZENvbnRvdXIiLCJjMmkiLCJfc2hpZnRTdXBlclNhbXBsZWRDb250b3VySW5QbGFjZSIsIl9yZWR1Y2VDb250b3Vyc1RvT3JpZ2luTm9kZXMiLCJyZWZlcmVuY2VkVG9vbERhdGEiLCJwb2x5Z29uIiwiZ2V0RnJlZWhhbmRUb29sRGF0YSIsInRvb2xEYXRhSW5kZXgiLCJvbGRQb2x5Z29uIiwidXBkYXRlZFBvbHlnb24iLCJjMWlyIiwiYzJpciIsImNJbnRlcnAiLCJJIiwiYzFpTGVuZ3RoIiwib3B0aW1hbCIsInN0YXJ0aW5nTm9kZSIsInRvdGFsU3F1YXJlZFhZTGVuZ3RocyIsIkluZmluaXR5IiwiaXR0ZXJhdGlvbiIsIl9zaGlmdENpcmN1bGFyQXJyYXkiLCJhcnIiLCJmbG9vciIsIm5vZGVzUGVyU2VnbWVudCIsImNpIiwibiIsInhTcGFjaW5nIiwieVNwYWNpbmciLCJwZXJpbUludGVycCIsInBlcmltSW5kIiwiaWR4Iiwic29ydCIsInBlcmltSW5kU29ydGVkIiwiaW5kaWNpZXNPZk9yaWdpbk5vZGVzIiwicmVkdWNlIiwiZWxlbWVudFZhbHVlIiwibnVtTm9kZXMiLCJjdW1QZXJpbU5vcm0iLCJkaWZmIiwibGluc3BhY2UiLCJjb25jYXQiLCJjdW11bGF0aXZlUGVyaW1ldGVyIiwibGVuZ3RoT2ZTZWdtZW50Iiwic3FydCIsImN1bVBlcmltIiwiX3JldmVyc2VJZkFudGlDbG9ja3dpc2UiLCJjb250b3VyWE1lYW4iLCJnZXRTdW1SZWR1Y2VyIiwiY2hlY2tTdW0iLCJyZXZlcnNlIiwidG90YWwiLCJudW0iLCJjYXRlZ29yaWVzIiwiU2VnbWVudGF0aW9uQ29kZXMiLCJDYXRlZ29yeSIsImdlbmVyYXRlTWV0YWRhdGEiLCJjYXRlZ29yeVVJRCIsInR5cGVVSUQiLCJtb2RpZmllclVJRCIsImNhdGVnb3J5IiwiY2F0ZWdvcmllc0kiLCJDb2RlVmFsdWUiLCJUeXBlIiwidHlwZXNJIiwiU2VnbWVudGVkUHJvcGVydHlDYXRlZ29yeUNvZGVTZXF1ZW5jZSIsIkNvZGluZ1NjaGVtZURlc2lnbmF0b3IiLCJDb2RlTWVhbmluZyIsIlNlZ21lbnRMYWJlbCIsIlNlZ21lbnRBbGdvcml0aG1UeXBlIiwiU2VnbWVudGVkUHJvcGVydHlUeXBlQ29kZVNlcXVlbmNlIiwibW9kZmllciIsIk1vZGlmaWVyIiwibW9kaWZpZXJJIiwiU2VnbWVudGVkUHJvcGVydHlUeXBlTW9kaWZpZXJDb2RlU2VxdWVuY2UiLCJSZWNvbW1lbmRlZERpc3BsYXlDSUVMYWJWYWx1ZSIsInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlIiwiZCIsIkRhdGUiLCJnZXRUaW1lIiwicGVyZm9ybWFuY2UiLCJub3ciLCJyZXBsYWNlIiwicmFuZG9tIiwiZ2V0U2VyaWVzSW5zdGFuY2VVaWRGcm9tRW5hYmxlZEVsZW1lbnQiLCJnZW5lcmFsU2VyaWVzTW9kdWxlIiwibWV0YURhdGEiLCJzZXJpZXNJbnN0YW5jZVVJRCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FB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OEQ7Ozs7Ozs7Ozs7O0FDQUEsK0QiLCJmaWxlIjoib2hpZi1zZWdtZW50YXRpb24tcGx1Z2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY29ybmVyc3RvbmUtY29yZVwiKSwgcmVxdWlyZShcImNvcm5lcnN0b25lLW1hdGhcIiksIHJlcXVpcmUoXCJjb3JuZXJzdG9uZS10b29sc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIm9oaWYtc2VnbWVudGF0aW9uLXBsdWdpblwiLCBbXCJjb3JuZXJzdG9uZS1jb3JlXCIsIFwiY29ybmVyc3RvbmUtbWF0aFwiLCBcImNvcm5lcnN0b25lLXRvb2xzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm9oaWYtc2VnbWVudGF0aW9uLXBsdWdpblwiXSA9IGZhY3RvcnkocmVxdWlyZShcImNvcm5lcnN0b25lLWNvcmVcIiksIHJlcXVpcmUoXCJjb3JuZXJzdG9uZS1tYXRoXCIpLCByZXF1aXJlKFwiY29ybmVyc3RvbmUtdG9vbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm9oaWYtc2VnbWVudGF0aW9uLXBsdWdpblwiXSA9IGZhY3Rvcnkocm9vdFtcImNvcm5lcnN0b25lLWNvcmVcIl0sIHJvb3RbXCJjb3JuZXJzdG9uZS1tYXRoXCJdLCByb290W1wiY29ybmVyc3RvbmUtdG9vbHNcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY29ybmVyc3RvbmVfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Nvcm5lcnN0b25lX21hdGhfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jb3JuZXJzdG9uZV90b29sc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBqc29uID0gYHtcbiAgXCJTZWdtZW50YXRpb25DYXRlZ29yeVR5cGVDb250ZXh0TmFtZVwiOiBcIlNlZ21lbnRhdGlvbiBjYXRlZ29yeSBhbmQgdHlwZSAtIDNEIFNsaWNlciBHZW5lcmFsIEFuYXRvbXkgbGlzdFwiLFxuICBcIkBzY2hlbWFcIjogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vcWlpY3IvZGNtcWkvbWFzdGVyL2RvYy9zY2hlbWFzL3NlZ21lbnQtY29udGV4dC1zY2hlbWEuanNvbiNcIixcbiAgXCJTZWdtZW50YXRpb25Db2Rlc1wiOiB7XG4gICAgXCJDYXRlZ29yeVwiOiBbXG4gICAgICB7XG4gICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJUaXNzdWVcIixcbiAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI4NTc1NjAwN1wiLFxuICAgICAgICBcImNpZFwiOiBcIjcwNTFcIixcbiAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDQwMzAwXCIsXG4gICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EMDA1MFwiLFxuICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJTZWdtZW50YXRpb24gUHJvcGVydHkgQ2F0ZWdvcmllc1wiLFxuICAgICAgICBcIlR5cGVcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxMjgsXG4gICAgICAgICAgICAgIDE3NCxcbiAgICAgICAgICAgICAgMTI4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlRpc3N1ZVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJ0aXNzdWVcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2NlwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDQwMzAwXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDAwNTBcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiODU3NTYwMDdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIxNixcbiAgICAgICAgICAgICAgMTAxLFxuICAgICAgICAgICAgICA3OVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJBcnRlcnlcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiYXJ0ZXJ5XCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDU1NTgwNlwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTQxMDY2XCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI3NTk4OTAwNlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjMwLFxuICAgICAgICAgICAgICAyMjAsXG4gICAgICAgICAgICAgIDcwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkJvZHkgZmF0XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImZhdFwiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTY2XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAzNDQzMzVcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRi0wM0QzOFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDgzMDAwMDlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDI0MSxcbiAgICAgICAgICAgICAgMjE0LFxuICAgICAgICAgICAgICAxNDVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQm9uZVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJib25lXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDI2Mjk1MFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQwMTZFXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI3MjY3MzAwMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTgzLFxuICAgICAgICAgICAgICAxNTYsXG4gICAgICAgICAgICAgIDIyMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJDYXBpbGxhcnlcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiY2FwaWxsYXJ5XCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwNjkwMVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTQwMDUwXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjIwOTgyMDAwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxMTEsXG4gICAgICAgICAgICAgIDE4NCxcbiAgICAgICAgICAgICAgMjEwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkNhcnRpbGFnZVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJjYXJ0aWxhZ2VcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2NlwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDA3MzAxXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDAyMUJcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzA5MzEyMDA0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxMTEsXG4gICAgICAgICAgICAgIDE4NCxcbiAgICAgICAgICAgICAgMjEwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkNvbm5lY3RpdmUgdGlzc3VlXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImNvbm5lY3RpdmUgdGlzc3VlXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwOTc4MFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTFBMjAwXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjIxNzkzMDA0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxODMsXG4gICAgICAgICAgICAgIDIxNCxcbiAgICAgICAgICAgICAgMjExXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxpZ2FtZW50XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxpZ2FtZW50XCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyMzY4NVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTE4MDEwXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjUyMDgyMDA1XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICA2OCxcbiAgICAgICAgICAgICAgMTcyLFxuICAgICAgICAgICAgICAxMDBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTHltcGggbm9kZVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJseW1waCBub2RlXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyNDIwNFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUM0MDAwXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjU5NDQxMDAxXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxMTEsXG4gICAgICAgICAgICAgIDE5NyxcbiAgICAgICAgICAgICAgMTMxXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkx5bXBoYXRpYyB2ZXNzZWxcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibHltcGhhdGljIHZlc3NlbFwiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTY2XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjk4ODlcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1DNjAxMFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI4MzU1NTAwNlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTc4LFxuICAgICAgICAgICAgICAyMTIsXG4gICAgICAgICAgICAgIDI0MlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJNZW5pc2N1c1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJtZW5pc2N1c1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTY2XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjQ0OThcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0xNTAwOVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NDEzNTAwNFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTkyLFxuICAgICAgICAgICAgICAxMDQsXG4gICAgICAgICAgICAgIDg4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk11c2NsZVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJtdXNjbGVcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2NlwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDI2ODQ1XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMTMwMDFcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzE2MTYwMDRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDI0NCxcbiAgICAgICAgICAgICAgMjE0LFxuICAgICAgICAgICAgICA0OVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJOZXJ2ZVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJuZXJ2ZVwiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTY2XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzEyNjgxNjlcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EMDU5OFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxMTk0MTAwMDJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIyMSxcbiAgICAgICAgICAgICAgMTMwLFxuICAgICAgICAgICAgICAxMDFcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiT3JnYW5cIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwib3JnYW5cIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2NlwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMxMjg1MDkyXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMUEzMTBcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjg2MTAwMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTc3LFxuICAgICAgICAgICAgICAxMjIsXG4gICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJTa2luXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInNraW5cIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2NlwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMxMTIzMDIzXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMDEwMDBcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzk5MzcwMDFcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE1MixcbiAgICAgICAgICAgICAgMTg5LFxuICAgICAgICAgICAgICAyMDdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVGVuZG9uXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInRlbmRvblwiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTY2XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzk1MDhcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0xNzAxMFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxMzAyNDAwMlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMTUxLFxuICAgICAgICAgICAgICAyMDZcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVmVpblwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJ2ZWluXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDQ0NzE0NlwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTQ4MDZFXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjE4MTM3ODAwOVwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcInNob3dBbmF0b215XCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJBbmF0b21pY2FsIFN0cnVjdHVyZVwiLFxuICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjEyMzAzNzAwNFwiLFxuICAgICAgICBcImNpZFwiOiBcIjcwNTFcIixcbiAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMxMjY4MDg2XCIsXG4gICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EMDAwQVwiLFxuICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJTZWdtZW50YXRpb24gUHJvcGVydHkgQ2F0ZWdvcmllc1wiLFxuICAgICAgICBcIlR5cGVcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxNzcsXG4gICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgMTAxXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU0XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImFiZG9tZW5cIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1ENDAwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDAwNzI2XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQWJkb21lblwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQWJkb21pbmFsIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjExMzM0NTAwMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTg2LFxuICAgICAgICAgICAgICAxMjQsXG4gICAgICAgICAgICAgIDE2MVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJhYmRvbWluYWwgY2F2aXR5XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDQwMTBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIzMDE2OFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkFiZG9taW5hbCBjYXZpdHlcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkFiZG9taW5hbCBPcmdhbiBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1MjczMTAwNFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTcxLFxuICAgICAgICAgICAgICA4NSxcbiAgICAgICAgICAgICAgNjhcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTRcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibXVzY2xlcyBvZiBhYmRvbWluYWwgd2FsbFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTE0MDAxXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzEyNzkzODVcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJBYmRvbWluYWwgd2FsbCBtdXNjbGVcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkFiZG9taW5hbCBPcmdhbiBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxOTU4NzkwMDBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDYwLFxuICAgICAgICAgICAgICAxNDMsXG4gICAgICAgICAgICAgIDgzXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImFkZW5vaHlwb3BoeXNpc1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUIxMTAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzIwMDhcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJBZGVub2h5cG9waHlzaXNcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNjI4MTgwMDFcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQWJkb21pbmFsIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU0XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQWRyZW5hbCBnbGFuZFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMDE2MjVcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1CMzAwMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDI0OSxcbiAgICAgICAgICAgICAgICAgIDE4NixcbiAgICAgICAgICAgICAgICAgIDE1MFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBhZHJlbmFsIGdsYW5kXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMjQ5LFxuICAgICAgICAgICAgICAgICAgMTg2LFxuICAgICAgICAgICAgICAgICAgMTUwXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgYWRyZW5hbCBnbGFuZFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjIzNDUxMDA3XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJBbXlnZGFsYVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMDI3MDhcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMzIzMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDk4LFxuICAgICAgICAgICAgICAgICAgMTUzLFxuICAgICAgICAgICAgICAgICAgMTEyXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGFteWdkYWxvaWQgY29tcGxleFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDk4LFxuICAgICAgICAgICAgICAgICAgMTUzLFxuICAgICAgICAgICAgICAgICAgMTEyXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgYW15Z2RhbG9pZCBjb21wbGV4XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNDk1ODAwMlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgICAyMjQsXG4gICAgICAgICAgICAgIDE5OVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJhbnVzXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNTk5MDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwMzQ2MVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkFudXNcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNTM1MDUwMDZcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIyNCxcbiAgICAgICAgICAgICAgOTcsXG4gICAgICAgICAgICAgIDc2XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUyXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImFvcnRhXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNDIwMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwMzQ4M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkFvcnRhXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDYXJkaWFjIFN0cnVjdHVyZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxNTgyNTAwM1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjE4LFxuICAgICAgICAgICAgICAxMjMsXG4gICAgICAgICAgICAgIDk3XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI2MTEzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImFvcnRpYyB2YWx2ZVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTM1NDAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMDM1MDFcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJBb3J0aWMgVmFsdmVcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIk1lZGlhc3RpbnVtIEFuYXRvbXkgRmluZGluZyBvciBGZWF0dXJlXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzQyMDIwMDdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgICAgMjQ0LFxuICAgICAgICAgICAgICAyMDlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiYXJhY2hub2lkXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTEyMjBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwMzcwN1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkFyYWNobm9pZFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NTA0MjAwOFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQXJjdWF0ZSBGYXNjaWN1bHVzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJGTUFcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMjMyOTYzM1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCIyNzY2NTBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxMjUsXG4gICAgICAgICAgICAgICAgICAxMDIsXG4gICAgICAgICAgICAgICAgICAxNTRcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgYXJjdWF0ZSBmYXNjaWN1bHVzXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTI1LFxuICAgICAgICAgICAgICAgICAgMTAyLFxuICAgICAgICAgICAgICAgICAgMTU0XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgYXJjdWF0ZSBmYXNjaWN1bHVzXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAgIDIyNixcbiAgICAgICAgICAgICAgNzdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjdcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiYXV0b25vbWljIG5lcnZlXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTk2MDVcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNjI1MFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkF1dG9ub21pYyBuZXJ2ZVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiUGVyaXBoZXJhbCBOZXJ2b3VzIFN5c3RlbSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1MzUyMDAwMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMTQ1LFxuICAgICAgICAgICAgICAzMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJiaWxpYXJ5IHRyZWVcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC02MDYxMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDA1NDAwXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQmlsZSBEdWN0XCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJBYmRvbWluYWwgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjgyNzMwMDBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIyMixcbiAgICAgICAgICAgICAgMTU0LFxuICAgICAgICAgICAgICAxMzJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjBcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwidXJpbmFyeSBibGFkZGVyXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNzQwMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwNTY4MlwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkJsYWRkZXJcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlBlbHZpYyBPcmdhbiBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI4OTgzNzAwMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgICAyMzksXG4gICAgICAgICAgICAgIDE3MlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJza2VsZXRvbiBvZiB0aG9yYXhcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EMDE3MFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwNDQ4MTU3XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQm9uZSBvZiB0aG9yYXhcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlRob3JhY2ljIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNzI3MTAwMDRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDI0MixcbiAgICAgICAgICAgICAgMjA2LFxuICAgICAgICAgICAgICAxNDJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMjhcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwic2tlbGV0b24gb2YgbmVja1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQwMDZEXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzA3MzAxMzBcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJCb25lIHN0cnVjdHVyZSBvZiBoZWFkIGFuZC9vciBuZWNrXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDcmFuaW9mYWNpYWwgQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjMxMjc3OTAwOVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjUwLFxuICAgICAgICAgICAgICAyNTAsXG4gICAgICAgICAgICAgIDIyNVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJicmFpblwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEwMTAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMDYxMDRcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJCcmFpblwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxMjczODAwNlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgODUsXG4gICAgICAgICAgICAgIDE4OCxcbiAgICAgICAgICAgICAgMjU1XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIkNTRiBzcGFjZVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEwMTA5XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzA0NTkzODdcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJCcmFpbiBjZXJlYnJvc3BpbmFsIGZsdWlkIHBhdGh3YXlcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjgwMzcxMDA5XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICA4OCxcbiAgICAgICAgICAgICAgMTA2LFxuICAgICAgICAgICAgICAyMTVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwidmVudHJpY2xlcyBvZiBicmFpblwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUExNjAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMDc3OTlcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJCcmFpbiB2ZW50cmljbGVcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzU3NjQwMDJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkNhdWRhdGUgbnVjbGV1c1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMDc0NjFcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMzIwMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDMwLFxuICAgICAgICAgICAgICAgICAgMTExLFxuICAgICAgICAgICAgICAgICAgODVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgY2F1ZGF0ZSBudWNsZXVzXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMzAsXG4gICAgICAgICAgICAgICAgICAxMTEsXG4gICAgICAgICAgICAgICAgICA4NVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGNhdWRhdGUgbnVjbGV1c1wiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjExMDAwMDA0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyNDQsXG4gICAgICAgICAgICAgIDIxNCxcbiAgICAgICAgICAgICAgNDlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiY2VudHJhbCBuZXJ2b3VzIHN5c3RlbVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEwMDkwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzA5MjcyMzJcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJDZW50cmFsIG5lcnZvdXMgc3lzdGVtXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjIxNDgzMDA1XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxOTQsXG4gICAgICAgICAgICAgIDE5NSxcbiAgICAgICAgICAgICAgMTY0XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImNlcmViZWxsYXIgd2hpdGUgbWF0dGVyXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTYwODBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDE1MjM4MVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkNlcmViZWxsYXIgd2hpdGUgbWF0dGVyXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjMzMDYwMDA0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICA4OCxcbiAgICAgICAgICAgICAgMTA2LFxuICAgICAgICAgICAgICAyMTVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiY2VyZWJyYWwgYXF1ZWR1Y3RcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMTgwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDA3NzY5XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQ2VyZWJyYWwgYXF1ZWR1Y3RcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiODA0NDcwMDBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkNlcmVicmFsIGZvcm5peFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAxNTIzMzRcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMjk3MFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDY0LFxuICAgICAgICAgICAgICAgICAgMTIzLFxuICAgICAgICAgICAgICAgICAgMTQ3XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGZvcm5peFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDY0LFxuICAgICAgICAgICAgICAgICAgMTIzLFxuICAgICAgICAgICAgICAgICAgMTQ3XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgZm9ybml4XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiODc0NjMwMDVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDEyOCxcbiAgICAgICAgICAgICAgMTc0LFxuICAgICAgICAgICAgICAxMjhcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiY2VyZWJyYWwgY29ydGV4XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTIwMjBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwNzc3NlwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkNlcmVicmFsIEdyZXkgTWF0dGVyXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjQwMTQ2MDAxXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyNTAsXG4gICAgICAgICAgICAgIDI1MCxcbiAgICAgICAgICAgICAgMjI1XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImNlcmVicmFsIHdoaXRlIG1hdHRlclwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEyMDMwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAxNTIyOTVcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJDZXJlYnJhbCBXaGl0ZSBNYXR0ZXJcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNjg1MjMwMDNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgICAyMDdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMzFcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiY2VydmljYWwgdmVydGVicmFsIGNvbHVtblwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTExNTAxXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzA3Mjg5ODVcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJDZXJ2aWNhbCBzcGluZVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxMjI0OTQwMDVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE4OCxcbiAgICAgICAgICAgICAgOTUsXG4gICAgICAgICAgICAgIDc2XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU1XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIm11c2NsZXMgb2YgdGhvcmFjaWMgd2FsbFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTE0MTIyXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzEyNjk4MjVcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJDaGVzdCB3YWxsIG11c2NsZVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiVGhvcmFjaWMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjM3MjA3NDAwNlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQ2luZ3VsdW1cIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjI4MjcyXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTI4NDBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNTQsXG4gICAgICAgICAgICAgICAgICAxNDYsXG4gICAgICAgICAgICAgICAgICA4M1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBjaW5ndWx1bSBidW5kbGVcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNTQsXG4gICAgICAgICAgICAgICAgICAxNDYsXG4gICAgICAgICAgICAgICAgICA4M1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGNpbmd1bHVtIGJ1bmRsZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjM3MDM1MDAwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlRob3JhY2ljIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkNsYXZpY2xlXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwODkxM1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTEyMzEwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMjA1LFxuICAgICAgICAgICAgICAgICAgMTc5LFxuICAgICAgICAgICAgICAgICAgMTA4XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGNsYXZpY2xlXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMjA1LFxuICAgICAgICAgICAgICAgICAgMTc5LFxuICAgICAgICAgICAgICAgICAgMTA4XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgY2xhdmljbGVcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1MTI5OTAwNFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjA0LFxuICAgICAgICAgICAgICAxNjgsXG4gICAgICAgICAgICAgIDE0M1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJjb2xvblwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTU5MzAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMDkzNjhcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJDb2xvblwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3MTg1NDAwMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgOTcsXG4gICAgICAgICAgICAgIDExMyxcbiAgICAgICAgICAgICAgMTU4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImNvcnB1cyBjYWxsb3N1bVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEyNzAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTAwOTBcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJDb3JwdXMgY2FsbG9zdW1cIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiODg0NDIwMDVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkNvcnB1cyBzdHJpYXR1bVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTAwOTdcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMzEwMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgICAgIDE0MCxcbiAgICAgICAgICAgICAgICAgIDE5MFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBzdHJpYXR1bVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgICAgIDE0MCxcbiAgICAgICAgICAgICAgICAgIDE5MFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IHN0cmlhdHVtXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzE0MjgwMDhcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgICAgMjM0LFxuICAgICAgICAgICAgICA5MlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2N1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJjcmFuaWFsIG5lcnZlc1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUE4MDAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTAyNjhcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJDcmFuaWFsIG5lcnZlXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJQZXJpcGhlcmFsIE5lcnZvdXMgU3lzdGVtIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI1MjM4MDAzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJEaWVuY2VwaGFsb25cIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDEyMTQ0XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTAxMDJcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICA2OSxcbiAgICAgICAgICAgICAgICAgIDExMCxcbiAgICAgICAgICAgICAgICAgIDUzXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImRpZW5jZXBoYWxvblwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiODc1NjMwMDhcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgICAgMjUzLFxuICAgICAgICAgICAgICAyMjlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMzFcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiZHVvZGVudW1cIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC01ODIwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDEzMzAzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiRHVvZGVudW1cIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzg4NDgwMDRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgICAgMjQ0LFxuICAgICAgICAgICAgICAyMDlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiZHVyYSBtYXRlclwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUExMTIwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTMzMTNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJEdXJhIG1hdGVyXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjE4NTQ1MDAwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyMTEsXG4gICAgICAgICAgICAgIDE3MSxcbiAgICAgICAgICAgICAgMTQzXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU1XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImVzb3BoYWd1c1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTU2MDAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTQ4NzZcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJFc29waGFndXNcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlRob3JhY2ljIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzMjg0OTAwMlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDcmFuaW9mYWNpYWwgQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDI4XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiRXh0ZXJuYWwgZWFyXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAxMzQ1M1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUFCMTAwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTc0LFxuICAgICAgICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgICAgICAgOTBcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgZXh0ZXJuYWwgZWFyXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTc0LFxuICAgICAgICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgICAgICAgOTBcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBleHRlcm5hbCBlYXJcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyODM0NzAwOFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDcmFuaW9mYWNpYWwgQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDI4XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiRXllYmFsbFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjkyNDJcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BQTc3MFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE5NCxcbiAgICAgICAgICAgICAgICAgIDE0MixcbiAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgZXllYmFsbFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE5NCxcbiAgICAgICAgICAgICAgICAgIDE0MixcbiAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBleWViYWxsXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzk2NTIwMDNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE4NSxcbiAgICAgICAgICAgICAgMTM1LFxuICAgICAgICAgICAgICAxMzRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjBcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiZmVtYWxlIGV4dGVybmFsIGdlbml0YWxpYVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTgwMDEwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjc3NDdcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJGZW1hbGUgZXh0ZXJuYWwgZ2VuaXRhbGlhXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJQZWx2aWMgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiODY5NjkwMDhcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDI0NCxcbiAgICAgICAgICAgICAgMTcwLFxuICAgICAgICAgICAgICAxNDdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjBcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiZmVtYWxlIGludGVybmFsIGdlbml0YWxpYVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTgwMDIwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjc3NDhcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJGZW1hbGUgaW50ZXJuYWwgZ2VuaXRhbGlhXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJQZWx2aWMgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiODc3NTkwMDRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkZvb3RcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDE2NTA0XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDk3MDBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNzcsXG4gICAgICAgICAgICAgICAgICAxMjIsXG4gICAgICAgICAgICAgICAgICAxMDFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgZm9vdFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGZvb3RcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1NjQ1OTAwNFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDMxXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiRm9yZWFybVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTY1MzZcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EODUwMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBmb3JlYXJtXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTc3LFxuICAgICAgICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgICAgICAgMTAxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgZm9yZWFybVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjE0OTc1MDA4XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICA4OCxcbiAgICAgICAgICAgICAgMTA2LFxuICAgICAgICAgICAgICAyMTVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiZm91cnRoIHZlbnRyaWNsZVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUExODIwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAxNDk1NTZcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJGb3VydGggdmVudHJpY2xlXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjM1OTE4MDAyXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNyYW5pb2ZhY2lhbCBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMjhcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJGcm9udGFsIGJvbmVcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDE2NzMyXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMTExMTBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAyMDMsXG4gICAgICAgICAgICAgICAgICAxNzksXG4gICAgICAgICAgICAgICAgICA3N1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBmcm9udGFsIGJvbmVcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAyMDMsXG4gICAgICAgICAgICAgICAgICAxNzksXG4gICAgICAgICAgICAgICAgICA3N1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGZyb250YWwgYm9uZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc0ODcyMDA4XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJGcm9udGFsIGxvYmVcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDE2NzMzXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTIyMDBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICA4MyxcbiAgICAgICAgICAgICAgICAgIDE0NixcbiAgICAgICAgICAgICAgICAgIDE2NFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBmcm9udGFsIGxvYmVcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICA4MyxcbiAgICAgICAgICAgICAgICAgIDE0NixcbiAgICAgICAgICAgICAgICAgIDE2NFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGZyb250YWwgbG9iZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjgzMjUxMDAxXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxMzksXG4gICAgICAgICAgICAgIDE1MCxcbiAgICAgICAgICAgICAgOThcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwNDBcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiZ2FsbGJsYWRkZXJcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC02MzAwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDE2OTc2XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiR2FsbGJsYWRkZXJcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkVuZG9zY29weSBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjgyMzEwMDhcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkdsb2J1cyBwYWxsaWR1c1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTc2NTFcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMzUwMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDQ4LFxuICAgICAgICAgICAgICAgICAgMTI5LFxuICAgICAgICAgICAgICAgICAgMTI2XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IHBhbGxpZHVtXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgNDgsXG4gICAgICAgICAgICAgICAgICAxMjksXG4gICAgICAgICAgICAgICAgICAxMjZcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBwYWxsaWR1bVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjE0NzM4MDA1XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMzFcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJIYW5kXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAxODU2M1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQ4NzAwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTc3LFxuICAgICAgICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgICAgICAgMTAxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGhhbmRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNzcsXG4gICAgICAgICAgICAgICAgICAxMjIsXG4gICAgICAgICAgICAgICAgICAxMDFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBoYW5kXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiODU1NjIwMDRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgICAxMDFcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMzFcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiaGVhZFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQxMTAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTg2NzBcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJIZWFkXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjY5NTM2MDA1XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyMDYsXG4gICAgICAgICAgICAgIDExMCxcbiAgICAgICAgICAgICAgODRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTJcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiaGVhcnRcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0zMjAwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDE4Nzg3XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiSGVhcnRcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNhcmRpYWMgU3RydWN0dXJlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjgwODkxMDA5XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyNTAsXG4gICAgICAgICAgICAgIDIxMCxcbiAgICAgICAgICAgICAgMTM5XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDI4XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImh5b2lkIGJvbmVcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0xMTE5MFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDIwNDE3XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiSHlvaWQgYm9uZVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ3JhbmlvZmFjaWFsIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyMTM4NzAwNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiSW5mZXJpb3IgY2VyZWJlbGxhciBwZWR1bmNsZVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAxNTIzOTNcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BNjY0MFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE4NixcbiAgICAgICAgICAgICAgICAgIDEzNSxcbiAgICAgICAgICAgICAgICAgIDEzNVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBpbmZlcmlvciBjZXJlYmVsbGFyIHBlZHVuY2xlXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTg2LFxuICAgICAgICAgICAgICAgICAgMTM1LFxuICAgICAgICAgICAgICAgICAgMTM1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgaW5mZXJpb3IgY2VyZWJlbGxhciBwZWR1bmNsZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjY3NzAxMDAxXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJJbmZlcmlvciBsb25naXR1ZGluYWwgZmFzY2ljdWx1c1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjgyNzNcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMjg1MFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE1OSxcbiAgICAgICAgICAgICAgICAgIDExNixcbiAgICAgICAgICAgICAgICAgIDE2M1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBpbmZlcmlvciBsb25naXR1ZGluYWwgZmFzY2ljdWx1c1wiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE1OSxcbiAgICAgICAgICAgICAgICAgIDExNixcbiAgICAgICAgICAgICAgICAgIDE2M1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGluZmVyaW9yIGxvbmdpdHVkaW5hbCBmYXNjaWN1bHVzXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNTUyMzMwMDVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ3JhbmlvZmFjaWFsIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAyOFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIklubmVyIGVhclwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMjI4ODlcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BQjcwMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDIyOSxcbiAgICAgICAgICAgICAgICAgIDE0NyxcbiAgICAgICAgICAgICAgICAgIDExOFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBpbm5lciBlYXJcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAyMjksXG4gICAgICAgICAgICAgICAgICAxNDcsXG4gICAgICAgICAgICAgICAgICAxMThcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBpbm5lciBlYXJcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyMjk0NTAwMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiSW5zdWxhXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyMTY0MFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEyNjEwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTg4LFxuICAgICAgICAgICAgICAgICAgMTM1LFxuICAgICAgICAgICAgICAgICAgMTY2XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGluc3VsYXIgbG9iZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE4OCxcbiAgICAgICAgICAgICAgICAgIDEzNSxcbiAgICAgICAgICAgICAgICAgIDE2NlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGluc3VsYXIgbG9iZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjM2MTY5MDA4XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyMzMsXG4gICAgICAgICAgICAgIDEzOCxcbiAgICAgICAgICAgICAgMTEyXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI2MTE2XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImF0cmlhbCBzZXB0dW1cIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0zMjE1MFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjI1ODM2XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiSW50ZXJhdHJpYWwgc2VwdHVtXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJNdXNjdWxhciBBbmF0b215XCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNTgwOTUwMDZcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE5NSxcbiAgICAgICAgICAgICAgMTAwLFxuICAgICAgICAgICAgICA3M1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNjExNlwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJ2ZW50cmljdWxhciBzZXB0dW1cIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0zMjQxMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjI1ODcwXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiSW50ZXJ2ZW50cmljdWxhciBzZXB0dW1cIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIk11c2N1bGFyIEFuYXRvbXlcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1ODkwMDFcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQWJkb21pbmFsIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU0XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiS2lkbmV5XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyMjY0NlwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTcxMDAwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTg1LFxuICAgICAgICAgICAgICAgICAgMTAyLFxuICAgICAgICAgICAgICAgICAgODNcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQga2lkbmV5XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTg1LFxuICAgICAgICAgICAgICAgICAgMTAyLFxuICAgICAgICAgICAgICAgICAgODNcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBraWRuZXlcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI2NDAzMzAwN1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJFbmRvc2NvcHkgQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDQwXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiS25lZVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzE0NTY3OThcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EOTIwMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBrbmVlXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTc3LFxuICAgICAgICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgICAgICAgMTAxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQga25lZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjcyNjk2MDAyXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNyYW5pb2ZhY2lhbCBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMjhcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMYWNyaW1hbCBib25lXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIyMjczM1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTExMTVBXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgICAgICAgMjUwLFxuICAgICAgICAgICAgICAgICAgMTYwXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGxhY3JpbWFsIGJvbmVcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjYyMjkwMDdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE1MCxcbiAgICAgICAgICAgICAgMjA4LFxuICAgICAgICAgICAgICAyNDNcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwNDBcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGFyeW54XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMjQxMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyMzA3OFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxhcnlueFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiRW5kb3Njb3B5IEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI0NTk2MDA5XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMYXRlcmFsIGNvcnRpY29zcGluYWwgdHJhY3RcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMTUyNDAyXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTcwOTNcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAyMDEsXG4gICAgICAgICAgICAgICAgICAxNjAsXG4gICAgICAgICAgICAgICAgICAxMzNcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgY29ydGljb3NwaW5hbCB0cmFjdFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDIwMSxcbiAgICAgICAgICAgICAgICAgIDE2MCxcbiAgICAgICAgICAgICAgICAgIDEzM1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGNvcnRpY29zcGluYWwgdHJhY3RcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI0NjEwMDJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxhdGVyYWwgdmVudHJpY2xlXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDE1MjI3OVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUExNjUwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgODgsXG4gICAgICAgICAgICAgICAgICAxMDYsXG4gICAgICAgICAgICAgICAgICAyMTVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgbGF0ZXJhbCB2ZW50cmljbGVcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICA4OCxcbiAgICAgICAgICAgICAgICAgIDEwNixcbiAgICAgICAgICAgICAgICAgIDIxNVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGxhdGVyYWwgdmVudHJpY2xlXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNjY3MjAwMDdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE1MixcbiAgICAgICAgICAgICAgNTUsXG4gICAgICAgICAgICAgIDEzXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUyXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgdmVudHJpY2xlIG9mIGhlYXJ0XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMzI2MDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIyNTg5N1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnQgVmVudHJpY2xlXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDYXJkaWFjIFN0cnVjdHVyZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI4Nzg3ODAwNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGltYmljIGxvYmVcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwNDU4MzM3XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTAwMzZcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNTQsXG4gICAgICAgICAgICAgICAgICAxNTAsXG4gICAgICAgICAgICAgICAgICAyMDFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgbGltYmljIGxvYmVcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNTQsXG4gICAgICAgICAgICAgICAgICAxNTAsXG4gICAgICAgICAgICAgICAgICAyMDFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBsaW1iaWMgbG9iZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI3OTIxNTAwNlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTg4LFxuICAgICAgICAgICAgICA5MSxcbiAgICAgICAgICAgICAgOTVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMjhcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGlwc1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTUyMDAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMjM3NTlcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMaXBcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNyYW5pb2ZhY2lhbCBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNDg0NzcwMDlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxvd2VyIGxlZ1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzExNDA2MjFcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EOTQwMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBsZWdcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNzcsXG4gICAgICAgICAgICAgICAgICAxMjIsXG4gICAgICAgICAgICAgICAgICAxMDFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBsZWdcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzMDAyMTAwMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDMxXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTG93ZXIgbGltYlwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMjMyMTZcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EOTAwMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBsb3dlciBsaW1iXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTc3LFxuICAgICAgICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgICAgICAgMTAxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgbG93ZXIgbGltYlwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjYxNjg1MDA3XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlRob3JhY2ljIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxvd2VyIGxvYmUgb2YgbHVuZ1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjU3NThcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0yODgzMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDIyNCxcbiAgICAgICAgICAgICAgICAgIDE4NixcbiAgICAgICAgICAgICAgICAgIDE2MlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJpbmZlcmlvciBsb2JlIG9mIHJpZ2h0IGx1bmdcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAyMjQsXG4gICAgICAgICAgICAgICAgICAxODYsXG4gICAgICAgICAgICAgICAgICAxNjJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiaW5mZXJpb3IgbG9iZSBvZiBsZWZ0IGx1bmdcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI5MDU3MjAwMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjEyLFxuICAgICAgICAgICAgICAxODgsXG4gICAgICAgICAgICAgIDEwMlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsdW1iYXIgdmVydGVicmFsIGNvbHVtblwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTExNTAzXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMjQwOTFcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMdW1iYXIgc3BpbmVcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTIyNDk2MDA3XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlRob3JhY2ljIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkx1bmdcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDI0MTA5XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMjgwMDBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxOTcsXG4gICAgICAgICAgICAgICAgICAxNjUsXG4gICAgICAgICAgICAgICAgICAxNDVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgbHVuZ1wiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE5NyxcbiAgICAgICAgICAgICAgICAgIDE2NSxcbiAgICAgICAgICAgICAgICAgIDE0NVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGx1bmdcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzOTYwNzAwOFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTg1LFxuICAgICAgICAgICAgICAxMzUsXG4gICAgICAgICAgICAgIDEzNFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2MFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJtYWxlIGV4dGVybmFsIGdlbml0YWxpYVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTkwMDEwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjc5MjJcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJNYWxlIGV4dGVybmFsIGdlbml0YWxpYVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiUGVsdmljIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjkwNDE4MDA1XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyMTYsXG4gICAgICAgICAgICAgIDE0NixcbiAgICAgICAgICAgICAgMTI3XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTYwXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIm1hbGUgaW50ZXJuYWwgZ2VuaXRhbGlhXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtOTAwMjBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIyNzkyM1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk1hbGUgaW50ZXJuYWwgZ2VuaXRhbGlhXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJQZWx2aWMgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzgyNDIwMDhcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIyMixcbiAgICAgICAgICAgICAgMTk4LFxuICAgICAgICAgICAgICAxMDFcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMzFcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibWFuZGlibGVcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0xMTE4MFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDI0Njg3XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTWFuZGlibGVcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiOTE2MDkwMDZcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk1lZGlhbCBMZW1uaXNjdXNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjI4NDIwXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTUyNzFcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNzQsXG4gICAgICAgICAgICAgICAgICAxNDAsXG4gICAgICAgICAgICAgICAgICAxMDNcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgbWVkaWFsIGxlbW5pc2N1c1wiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NCxcbiAgICAgICAgICAgICAgICAgIDE0MCxcbiAgICAgICAgICAgICAgICAgIDEwM1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IG1lZGlhbCBsZW1uaXNjdXNcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzMDExNDAwM1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgICAyNDQsXG4gICAgICAgICAgICAgIDIwOVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJtZWRpYXN0aW51bVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQzMzAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMjUwNjZcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJNZWRpYXN0aW51bVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiVGhvcmFjaWMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjcyNDEwMDAwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAgIDI0NCxcbiAgICAgICAgICAgICAgMjA5XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIm1lbmluZ2VzXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTExMTBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyNTI4NVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk1lbmluZ2VzXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjEyMzEwMDRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk1pZGRsZSBjZXJlYmVsbGFyIHBlZHVuY2xlXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDE1MjM5MlwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUE2NjMwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTQ4LFxuICAgICAgICAgICAgICAgICAgMTIwLFxuICAgICAgICAgICAgICAgICAgNzJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgbWlkZGxlIGNlcmViZWxsYXIgcGVkdW5jbGVcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNDgsXG4gICAgICAgICAgICAgICAgICAxMjAsXG4gICAgICAgICAgICAgICAgICA3MlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IG1pZGRsZSBjZXJlYmVsbGFyIHBlZHVuY2xlXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzM3MjMwMDVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ3JhbmlvZmFjaWFsIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAyOFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk1pZGRsZSBlYXJcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDEzNDU1XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQUIzMDBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAyMDEsXG4gICAgICAgICAgICAgICAgICAxMTIsXG4gICAgICAgICAgICAgICAgICA3M1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBtaWRkbGUgZWFyXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMjAxLFxuICAgICAgICAgICAgICAgICAgMTEyLFxuICAgICAgICAgICAgICAgICAgNzNcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBtaWRkbGUgZWFyXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjUzNDIwMDNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIwMixcbiAgICAgICAgICAgICAgMTY0LFxuICAgICAgICAgICAgICAxNDBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTVcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibWlkZGxlIGxvYmUgb2YgcmlnaHQgbHVuZ1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTI4MzAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjU3NTdcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJNaWRkbGUgbG9iZSBvZiByaWdodCBsdW5nXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJUaG9yYWNpYyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzI0ODEwMDZcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE1OSxcbiAgICAgICAgICAgICAgNjMsXG4gICAgICAgICAgICAgIDI3XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI2MTEzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIm1pdHJhbCB2YWx2ZVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTM1MzAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMjYyNjRcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJNaXRyYWwgVmFsdmVcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIk1lZGlhc3RpbnVtIEFuYXRvbXkgRmluZGluZyBvciBGZWF0dXJlXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiOTExMzQwMDdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIwMSxcbiAgICAgICAgICAgICAgMTIxLFxuICAgICAgICAgICAgICA3N1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAyOFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJtdXNjbGVzIG9mIGhlYWRcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0xMzEwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjI0MDk3XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTXVzY2xlIG9mIGhlYWRcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNyYW5pb2ZhY2lhbCBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjI2ODgwMDVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIxMyxcbiAgICAgICAgICAgICAgMTI0LFxuICAgICAgICAgICAgICAxMDlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMjhcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibXVzY2xlcyBvZiBuZWNrXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMTMzMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyNzUzMlwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk11c2NsZSBvZiBuZWNrXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDcmFuaW9mYWNpYWwgQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjgxNzI3MDAxXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxNzcsXG4gICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgMTAxXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDMxXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIm5lY2tcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EMTYwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDI3NTMwXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTmVja1wiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI0NTA0ODAwMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgOTIsXG4gICAgICAgICAgICAgIDE2MixcbiAgICAgICAgICAgICAgMTA5XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIm5ldXJvaHlwb3BoeXNpc1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUIxMjAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzIwMDlcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJOZXVyb2h5cG9waHlzaXNcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzc1MTIwMDlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk9jY2lwaXRhbCBsb2JlXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyODc4NVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEyNDAwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTgyLFxuICAgICAgICAgICAgICAgICAgMTY2LFxuICAgICAgICAgICAgICAgICAgMTEwXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IG9jY2lwaXRhbCBsb2JlXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTgyLFxuICAgICAgICAgICAgICAgICAgMTY2LFxuICAgICAgICAgICAgICAgICAgMTEwXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgb2NjaXBpdGFsIGxvYmVcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzMTA2NTAwNFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjM0LFxuICAgICAgICAgICAgICAyMzQsXG4gICAgICAgICAgICAgIDE5NFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJvbWVudHVtXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDQ2MDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyODk3N1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk9tZW50dW1cIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkFiZG9taW5hbCBPcmdhbiBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNzM5ODAwNFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgOTksXG4gICAgICAgICAgICAgIDEwNixcbiAgICAgICAgICAgICAgMjRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwib3B0aWMgY2hpYXNtXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTgwMEJcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyOTEyNlwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk9wdGljIGNoaWFzbVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDQ0NTMwMDZcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk9wdGljIHJhZGlhdGlvblwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjgyNzdcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMjg4MFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDc4LFxuICAgICAgICAgICAgICAgICAgMTUyLFxuICAgICAgICAgICAgICAgICAgMTQxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IG9wdGljIHJhZGlhdGlvblwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDc4LFxuICAgICAgICAgICAgICAgICAgMTUyLFxuICAgICAgICAgICAgICAgICAgMTQxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgb3B0aWMgcmFkaWF0aW9uXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzAxMDUwMDFcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk9wdGljIHRyYWN0XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDE1MjQwNVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUE4MDYwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTU2LFxuICAgICAgICAgICAgICAgICAgMTcxLFxuICAgICAgICAgICAgICAgICAgMTA4XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IG9wdGljIHRyYWN0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTU2LFxuICAgICAgICAgICAgICAgICAgMTcxLFxuICAgICAgICAgICAgICAgICAgMTA4XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgb3B0aWMgdHJhY3RcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1MzIzODAwM1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJQZWx2aWMgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjBcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJPdmFyeVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMjk5MzlcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC04NzAwMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDIxMyxcbiAgICAgICAgICAgICAgICAgIDE0MSxcbiAgICAgICAgICAgICAgICAgIDExM1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBvdmFyeVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDIxMyxcbiAgICAgICAgICAgICAgICAgIDE0MSxcbiAgICAgICAgICAgICAgICAgIDExM1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IG92YXJ5XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTU0OTcwMDZcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ3JhbmlvZmFjaWFsIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAyOFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlBhbGF0aW5lIGJvbmVcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjIyNzM0XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMTExNjBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAyNDIsXG4gICAgICAgICAgICAgICAgICAyMTcsXG4gICAgICAgICAgICAgICAgICAxMjNcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgcGFsYXRpbmUgYm9uZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDI0MixcbiAgICAgICAgICAgICAgICAgIDIxNyxcbiAgICAgICAgICAgICAgICAgIDEyM1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IHBhbGF0aW5lIGJvbmVcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1MTI4MzAwNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjQ5LFxuICAgICAgICAgICAgICAxODAsXG4gICAgICAgICAgICAgIDExMVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJwYW5jcmVhc1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTY1MDAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzAyNzRcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJQYW5jcmVhc1wiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ1QsIE1SIGFuZCBQRVQgQW5hdG9teSBJbWFnZWRcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxNTc3NjAwOVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDcmFuaW9mYWNpYWwgQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDI4XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUGFyaWV0YWwgYm9uZVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzA1NThcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0xMTEyMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDIyOSxcbiAgICAgICAgICAgICAgICAgIDIwNCxcbiAgICAgICAgICAgICAgICAgIDEwOVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBwYXJpZXRhbCBib25lXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMjI5LFxuICAgICAgICAgICAgICAgICAgMjA0LFxuICAgICAgICAgICAgICAgICAgMTA5XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgcGFyaWV0YWwgYm9uZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0OTI0MDA2XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJQYXJpZXRhbCBsb2JlXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzMDU2MFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEyMzAwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTQxLFxuICAgICAgICAgICAgICAgICAgOTMsXG4gICAgICAgICAgICAgICAgICAxMzdcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgcGFyaWV0YWwgbG9iZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE0MSxcbiAgICAgICAgICAgICAgICAgIDkzLFxuICAgICAgICAgICAgICAgICAgMTM3XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgcGFyaWV0YWwgbG9iZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjE2NjMwMDA1XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxODQsXG4gICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgMTU0XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUyXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInBlcmljYXJkaWFsIGNhdml0eVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTM5MDUwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjU5NzJcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJQZXJpY2FyZGlhbCBjYXZpdHlcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNhcmRpYWMgU3RydWN0dXJlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI1NDg5MDAwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAgIDI0NCxcbiAgICAgICAgICAgICAgMjA5XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUyXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInBlcmljYXJkaXVtXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMzkwMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzMTA1MFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlBlcmljYXJkaXVtXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDYXJkaWFjIFN0cnVjdHVyZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3Njg0ODAwMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjI0LFxuICAgICAgICAgICAgICAxOTQsXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjdcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicGVyaXBoZXJhbCBuZXJ2ZVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEwNTAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzExMTlcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJQZXJpcGhlcmFsIG5lcnZlXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJQZXJpcGhlcmFsIE5lcnZvdXMgU3lzdGVtIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjg0NzgyMDA5XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyMTYsXG4gICAgICAgICAgICAgIDE4NixcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2N1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJwZXJpcGhlcmFsIG5lcnZvdXMgc3lzdGVtXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTAxNDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNjQxN1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlBlcmlwaGVyYWwgbmVydm91cyBzeXN0ZW1cIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlBlcmlwaGVyYWwgTmVydm91cyBTeXN0ZW0gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzA1ODAwNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAgIDIyMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJwZXJpdG9uZXVtXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDQ0MDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzMTE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlBlcml0aW9uZXVtXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJBYmRvbWluYWwgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTU0MjUwMDdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIwNCxcbiAgICAgICAgICAgICAgMTQyLFxuICAgICAgICAgICAgICAxNzhcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTRcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicGVyaXRvbmVhbCBjYXZpdHlcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1ENDQyNVwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMxNzA0MjQ3XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUGVyaXRvbmVhbCBjYXZpdHlcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkFiZG9taW5hbCBPcmdhbiBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI4MzY3MDAwMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTg0LFxuICAgICAgICAgICAgICAxMDUsXG4gICAgICAgICAgICAgIDEwOFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDA0MFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJwaGFyeW54XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNTUwMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzMTM1NFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlBoYXJ5bnhcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkVuZG9zY29weSBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNTQwNjYwMDhcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgICAgMjQ0LFxuICAgICAgICAgICAgICAyMDlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicGlhIG1hdGVyXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTEyODBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzMTg2OVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlBpYSBtYXRlclwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyMzE4MDAwNlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjUzLFxuICAgICAgICAgICAgICAxMzUsXG4gICAgICAgICAgICAgIDE5MlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJwaW5lYWwgZ2xhbmRcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1CMjAwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDMxOTM5XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUGluZWFsIEdsYW5kXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjQ1NzkzMDAwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICA1NyxcbiAgICAgICAgICAgICAgMTU3LFxuICAgICAgICAgICAgICAxMTBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicGl0dWl0YXJ5IGdsYW5kXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQjEwMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzMjAwNVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlBpdHVpdGFyeVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1NjMyOTAwOFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTI2LFxuICAgICAgICAgICAgICAxNjEsXG4gICAgICAgICAgICAgIDE5N1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJwb3N0ZXJpb3IgY29tbWlzc3VyZVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUE0OTA0XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAxNTIzMjdcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJQb3N0ZXJpb3IgY2VyZWJyYWwgY29tbWlzc3VyZVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNzkzMzYwMDVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIzMCxcbiAgICAgICAgICAgICAgMTU4LFxuICAgICAgICAgICAgICAxNDBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjBcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicHJvc3RhdGVcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC05MjAwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDMzNTcyXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUHJvc3RhdGVcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlBlbHZpYyBPcmdhbiBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI0MTIxNjAwMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjI1LFxuICAgICAgICAgICAgICAxMzAsXG4gICAgICAgICAgICAgIDEwNFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNjExM1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJwdWxtb25hcnkgdmFsdmVcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0zNTIwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDM0MDg2XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUHVsbW9uYXJ5IHZhbHZlXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJNZWRpYXN0aW51bSBBbmF0b215IEZpbmRpbmcgb3IgRmVhdHVyZVwiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjM5MDU3MDA0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJQdXRhbWVuXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzNDE2OVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEzNDAwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMjEwLFxuICAgICAgICAgICAgICAgICAgMTU3LFxuICAgICAgICAgICAgICAgICAgMTY2XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IHB1dGFtZW5cIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAyMTAsXG4gICAgICAgICAgICAgICAgICAxNTcsXG4gICAgICAgICAgICAgICAgICAxNjZcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBwdXRhbWVuXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiODkyNzgwMDlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE4MCxcbiAgICAgICAgICAgICAgMTE5LFxuICAgICAgICAgICAgICAxNTNcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTRcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmV0cm9wZXJpdG9uZWFsIHNwYWNlXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDQ5MDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzNTM1OVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJldHJvcGVyaXRvbmVhbCBzcGFjZVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQWJkb21pbmFsIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjgyODQ5MDAxXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxODEsXG4gICAgICAgICAgICAgIDg1LFxuICAgICAgICAgICAgICA1N1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1MlwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCB2ZW50cmljbGUgb2YgaGVhcnRcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0zMjUwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjI1ODgzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHQgVmVudHJpY2xlXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDYXJkaWFjIFN0cnVjdHVyZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1MzA4NTAwMlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgNzAsXG4gICAgICAgICAgICAgIDE2MyxcbiAgICAgICAgICAgICAgMTE3XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDI4XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInNhbGl2YXJ5IGdsYW5kc1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTYxMDA3XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzYwOThcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJTYWxpdmFyeSBnbGFuZFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ3JhbmlvZmFjaWFsIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzODUyOTQwMDVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiUGVsdmljIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTYwXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiU2VtaW5hbCBWZXNpY2xlXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzNjYyOFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTkzMDAwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMjQ1LFxuICAgICAgICAgICAgICAgICAgMTcyLFxuICAgICAgICAgICAgICAgICAgMTQ3XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IHNlbWluYWwgdmVzaWNsZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDI0NSxcbiAgICAgICAgICAgICAgICAgIDE3MixcbiAgICAgICAgICAgICAgICAgIDE0N1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IHNlbWluYWwgdmVzaWNsZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjY0NzM5MDA0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkVuZG9zY29weSBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwNDBcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJTaG91bGRlclwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzcwMDRcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EMjIyMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBzaG91bGRlclwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IHNob3VsZGVyXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTY5ODIwMDVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgMTI0LFxuICAgICAgICAgICAgICA5MlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJza2luIG9mIGFiZG9taW5hbCB3YWxsXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMDI0ODBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIyMjE2NlwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlNraW4gb2YgYWJkb21lblwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQWJkb21pbmFsIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc1MDkzMDA0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxNzMsXG4gICAgICAgICAgICAgIDEyMSxcbiAgICAgICAgICAgICAgODhcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTVcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwic2tpbiBvZiB0aG9yYWNpYyB3YWxsXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMDI0MjRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIyMjE0OVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlNraW4gb2YgY2hlc3RcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlRob3JhY2ljIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NDE2MDAwNFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjQxLFxuICAgICAgICAgICAgICAyMTMsXG4gICAgICAgICAgICAgIDE0NFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJza3VsbFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTExMTAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzczMDNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJTa3VsbFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI4OTU0NjAwMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjA1LFxuICAgICAgICAgICAgICAxNjcsXG4gICAgICAgICAgICAgIDE0MlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJzbWFsbCBib3dlbFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTU4MDAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMjE4NTJcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJTbWFsbCBJbnRlc3RpbmVcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkFiZG9taW5hbCBPcmdhbiBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzMDMxNTAwNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTgyLFxuICAgICAgICAgICAgICAxMDUsXG4gICAgICAgICAgICAgIDEwN1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAyOFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJzb2Z0IHBhbGF0ZVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTUxMTIwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzAyMTlcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJTb2Z0IHBhbGF0ZVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ3JhbmlvZmFjaWFsIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI0OTQ2MDAwMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjQ0LFxuICAgICAgICAgICAgICAyMTQsXG4gICAgICAgICAgICAgIDQ5XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInNwaW5hbCBjb3JkXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTcwMTBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzNzkyNVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlNwaW5hbCBjb3JkXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI3NDgwMDhcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIwMCxcbiAgICAgICAgICAgICAgMjAwLFxuICAgICAgICAgICAgICAyMTVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiZ3JheSBtYXR0ZXIgb2Ygc3BpbmFsIGNvcmRcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BNzAyMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwNDc1ODUzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiU3BpbmFsIGNvcmQgZ3JheSBtYXR0ZXJcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTI5NTgwMDNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDI1MCxcbiAgICAgICAgICAgICAgMjUwLFxuICAgICAgICAgICAgICAyMjVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwid2hpdGUgbWF0dGVyIG9mIHNwaW5hbCBjb3JkXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTcwNzBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDQ1ODQ1N1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlNwaW5hbCBjb3JkIHdoaXRlIG1hdHRlclwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNzA4ODAwMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjQ0LFxuICAgICAgICAgICAgICAyMTcsXG4gICAgICAgICAgICAgIDE1NFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJzdGVybnVtXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMTEyMTBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzODI5M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlN0ZXJudW1cIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlRob3JhY2ljIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1Njg3MzAwMlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjE2LFxuICAgICAgICAgICAgICAxMzIsXG4gICAgICAgICAgICAgIDEwNVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJzdG9tYWNoXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNTcwMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzODM1MVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlN0b21hY2hcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNjk2OTUwMDNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDg4LFxuICAgICAgICAgICAgICAxMDYsXG4gICAgICAgICAgICAgIDIxNVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJzdWJhcmFjaG5vaWQgc3BhY2VcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMTUwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDM4NTI3XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiU3ViYXJhY2hub2lkIHNwYWNlXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjM1OTUxMDA2XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJTdWJzdGFudGlhIG5pZ3JhXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzODU5MFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUE1MTYwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgIDEwOCxcbiAgICAgICAgICAgICAgICAgIDExMlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBzdWJzdGFudGlhIG5pZ3JhXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgIDEwOCxcbiAgICAgICAgICAgICAgICAgIDExMlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IHN1YnN0YW50aWEgbmlncmFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3MDAwNzAwN1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiU3VwZXJpb3IgbG9uZ2l0dWRpbmFsIGZhc2NpY3VsdXNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjI4MjcwXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTI4MjBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxMjcsXG4gICAgICAgICAgICAgICAgICAxNTAsXG4gICAgICAgICAgICAgICAgICA4OFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBzdXBlcmlvciBsb25naXR1ZGluYWwgZmFzY2ljdWx1c1wiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDEyNyxcbiAgICAgICAgICAgICAgICAgIDE1MCxcbiAgICAgICAgICAgICAgICAgIDg4XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgc3VwZXJpb3IgbG9uZ2l0dWRpbmFsIGZhc2NpY3VsdXNcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI4OTIwMjAwOVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDcmFuaW9mYWNpYWwgQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDI4XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVGVtcG9yYWwgYm9uZVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzk0ODRcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0xMTEzMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgICAgICAgIDI0MyxcbiAgICAgICAgICAgICAgICAgIDE1MlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCB0ZW1wb3JhbCBib25lXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgICAgICAgMjQzLFxuICAgICAgICAgICAgICAgICAgMTUyXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgdGVtcG9yYWwgYm9uZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjYwOTExMDAzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJUZW1wb3JhbCBsb2JlXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzOTQ4NVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEyNTAwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTYyLFxuICAgICAgICAgICAgICAgICAgMTE1LFxuICAgICAgICAgICAgICAgICAgMTA1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IHRlbXBvcmFsIGxvYmVcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNjIsXG4gICAgICAgICAgICAgICAgICAxMTUsXG4gICAgICAgICAgICAgICAgICAxMDVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCB0ZW1wb3JhbCBsb2JlXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzgyNzcwMDFcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlRoYWxhbXVzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDQ1ODI3MVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQwNTkzXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgICAgICAgMTAxLFxuICAgICAgICAgICAgICAgICAgMzhcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgdGhhbGFtdXNcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxMjIsXG4gICAgICAgICAgICAgICAgICAxMDEsXG4gICAgICAgICAgICAgICAgICAzOFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IHRoYWxhbXVzXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTE5NDA2MDAwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMzFcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJUaGlnaFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzk4NjZcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EOTEwMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCB0aGlnaFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IHRoaWdoXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNjgzNjcwMDBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIyNixcbiAgICAgICAgICAgICAgMjAyLFxuICAgICAgICAgICAgICAxMzRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTVcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwidGhvcmFjaWMgdmVydGVicmFsIGNvbHVtblwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTExNTAyXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzA1ODEyNjlcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJUaG9yYWNpYyBzcGluZVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiVGhvcmFjaWMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjEyMjQ5NTAwNlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTc3LFxuICAgICAgICAgICAgICAxMjIsXG4gICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJ0aG9yYXhcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EMzAwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwODE3MDk2XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVGhvcmF4XCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJUaG9yYWNpYyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNTExODUwMDhcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDQ3LFxuICAgICAgICAgICAgICAxNTAsXG4gICAgICAgICAgICAgIDEwM1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJ0aHltdXNcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1DODAwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDQwMTEzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVGh5bXVzXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJUaG9yYWNpYyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiOTg3NTAwOVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgNjIsXG4gICAgICAgICAgICAgIDE2MixcbiAgICAgICAgICAgICAgMTE0XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI2MTEzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInRoeXJvaWQgZ2xhbmRcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1CNjAwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDQwMTMyXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVGh5cm9pZFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTWVkaWFzdGludW0gQW5hdG9teSBGaW5kaW5nIG9yIEZlYXR1cmVcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI2OTc0ODAwNlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTY2LFxuICAgICAgICAgICAgICA4NCxcbiAgICAgICAgICAgICAgOTRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMjhcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwidG9uZ3VlXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNTMwMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDA0MDQwOFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlRvbmd1ZVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ3JhbmlvZmFjaWFsIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyMTk3NDAwN1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgICAyNTAsXG4gICAgICAgICAgICAgIDIyMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAyOFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJ0ZWV0aFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTU0MDEwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwNDA0MjZcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJUb290aFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ3JhbmlvZmFjaWFsIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzODE5OTAwOFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTgyLFxuICAgICAgICAgICAgICAyMjgsXG4gICAgICAgICAgICAgIDI1NVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJ0cmFjaGVhXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMjUwMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDA0MDU3OFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlRyYWNoZWFcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlRob3JhY2ljIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI0NDU2NzAwMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTY2LFxuICAgICAgICAgICAgICA3MCxcbiAgICAgICAgICAgICAgMzhcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjYxMTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwidHJpY3VzcGlkIHZhbHZlXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMzUxMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDA0MDk2MFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlRyaWN1c3BpZCBWYWx2ZVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTWVkaWFzdGludW0gQW5hdG9teSBGaW5kaW5nIG9yIEZlYXR1cmVcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI0NjAzMDAwM1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVW5jaW5hdGUgZmFzY2ljdWx1c1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjgyNzFcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMjgzMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDEwNixcbiAgICAgICAgICAgICAgICAgIDE3NCxcbiAgICAgICAgICAgICAgICAgIDE1NVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCB1bmNpbmF0ZSBmYXNjaWN1bHVzXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTA2LFxuICAgICAgICAgICAgICAgICAgMTc0LFxuICAgICAgICAgICAgICAgICAgMTU1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgdW5jaW5hdGUgZmFzY2ljdWx1c1wiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI2MjMwMDAzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMzFcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJVcHBlciBhcm1cIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwNDQ2NTE2XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDgyMDBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNzcsXG4gICAgICAgICAgICAgICAgICAxMjIsXG4gICAgICAgICAgICAgICAgICAxMDFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgYXJtXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTc3LFxuICAgICAgICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgICAgICAgMTAxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgYXJtXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNDA5ODMwMDBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlVwcGVyIGxpbWJcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDE2NTU1XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDgwMDBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNzcsXG4gICAgICAgICAgICAgICAgICAxMjIsXG4gICAgICAgICAgICAgICAgICAxMDFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgdXBwZXIgbGltYlwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IHVwcGVyIGxpbWJcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1MzEyMDAwN1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJUaG9yYWNpYyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTVcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJVcHBlciBsb2JlIG9mIGx1bmdcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjI1NzU2XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMjg4MjBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNzIsXG4gICAgICAgICAgICAgICAgICAxMzgsXG4gICAgICAgICAgICAgICAgICAxMTVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwic3VwZXJpb3IgbG9iZSBvZiByaWdodCBsdW5nXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTcyLFxuICAgICAgICAgICAgICAgICAgMTM4LFxuICAgICAgICAgICAgICAgICAgMTE1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInN1cGVyaW9yIGxvYmUgb2YgbGVmdCBsdW5nXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNDU2NTMwMDlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDEyNCxcbiAgICAgICAgICAgICAgMTg2LFxuICAgICAgICAgICAgICAyMjNcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMzFcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwidXJldGhyYVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTc1MDAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwNDE5NjdcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJVcmV0aHJhXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjEzNjQ4MDA3XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyMDMsXG4gICAgICAgICAgICAgIDEzNixcbiAgICAgICAgICAgICAgMTE2XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU0XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInVyaW5hcnkgc3lzdGVtXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNzAwMDFcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMTUwODc1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlVyaW5hcnkgc3lzdGVtXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJBYmRvbWluYWwgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTIyNDg5MDA1XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAgIDE4MSxcbiAgICAgICAgICAgICAgMTU4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTYwXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInV0ZXJ1c1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTgzMDAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwNDIxNDlcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJVdGVydXNcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlBlbHZpYyBPcmdhbiBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzNTAzOTAwN1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTkzLFxuICAgICAgICAgICAgICAxMjMsXG4gICAgICAgICAgICAgIDEwM1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2MFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJ2YWdpbmFcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC04MjAwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDQyMjMyXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVmFnaW5hXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJQZWx2aWMgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzY3ODQwMDFcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiUGVsdmljIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTYwXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVmFzIGRlZmVyZW5zXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDA0MjM2MFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTk2MDAwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMjQxLFxuICAgICAgICAgICAgICAgICAgMTcyLFxuICAgICAgICAgICAgICAgICAgMTUxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGRlZmVyZW50IGR1Y3RcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAyNDEsXG4gICAgICAgICAgICAgICAgICAxNzIsXG4gICAgICAgICAgICAgICAgICAxNTFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBkZWZlcmVudCBkdWN0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNTc2NzEwMDdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlp5Z29tYVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwNDM1MzlcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0xMTE2NlwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgICAgICAgIDE2N1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCB6eWdvbWF0aWMgYm9uZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTM4ODEwMDZcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJzaG93QW5hdG9teVwiOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk1vcnBob2xvZ2ljYWxseSBBbHRlcmVkIFN0cnVjdHVyZVwiLFxuICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjQ5NzU1MDAzXCIsXG4gICAgICAgIFwiY2lkXCI6IFwiNzA1MVwiLFxuICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjExOThcIixcbiAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJNLTAxMDAwXCIsXG4gICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlNlZ21lbnRhdGlvbiBQcm9wZXJ0eSBDYXRlZ29yaWVzXCIsXG4gICAgICAgIFwiVHlwZVwiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE0NSxcbiAgICAgICAgICAgICAgNjAsXG4gICAgICAgICAgICAgIDY2XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkJsb29kIGNsb3RcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiY2xvdFwiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU5XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAzMDIxNDhcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiTS0zNTAwMFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGVzaW9uIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc1NzUzMDA5XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyMDUsXG4gICAgICAgICAgICAgIDIwNSxcbiAgICAgICAgICAgICAgMTAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkN5c3RcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiY3lzdFwiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU5XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTA3MDlcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiTS0zMzQwQVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGVzaW9uIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjM2NzY0MzAwMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTQwLFxuICAgICAgICAgICAgICAyMjQsXG4gICAgICAgICAgICAgIDIyOFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJFZGVtYVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJlZGVtYVwiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU5XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTM2MDRcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiTS0zNjMwMFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGVzaW9uIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc5NjU0MDAyXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxNTAsXG4gICAgICAgICAgICAgIDk4LFxuICAgICAgICAgICAgICA4M1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJFbWJvbHVzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImVtYm9saXNtXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTlcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMTcwNDIxMlwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJNLTM1MzAwXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMZXNpb24gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNTU1ODQwMDVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE4OCxcbiAgICAgICAgICAgICAgNjUsXG4gICAgICAgICAgICAgIDI4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkhlbW9ycmhhZ2VcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiYmxlZWRpbmdcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1OVwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDE5MDgwXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIk0tMzcwMDBcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxlc2lvbiBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1MDk2MDAwNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTQ0LFxuICAgICAgICAgICAgICAyMzgsXG4gICAgICAgICAgICAgIDE0NFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJNYXNzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIm1hc3NcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1OVwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwNTc3NTU5XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIk0tMDMwMDBcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxlc2lvbiBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI0MTQ3MDA3XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyMTYsXG4gICAgICAgICAgICAgIDE5MSxcbiAgICAgICAgICAgICAgMjE2XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk5lY3Jvc2lzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIm5lY3Jvc2lzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTlcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyNzU0MFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJNLTU0MDAwXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMZXNpb24gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNjU3NDAwMVwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcInNob3dBbmF0b215XCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJCb2R5IFN1YnN0YW5jZVwiLFxuICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjkxNzIwMDAyXCIsXG4gICAgICAgIFwiY2lkXCI6IFwiXCIsXG4gICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDUwNDA4MlwiLFxuICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDAwODBcIixcbiAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiXCIsXG4gICAgICAgIFwiVHlwZVwiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDE0NSxcbiAgICAgICAgICAgICAgMzBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQmlsZVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJiaWxlXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwNTM4OFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTYwNjUwXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjcwMTUwMDA0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxNzAsXG4gICAgICAgICAgICAgIDI1MCxcbiAgICAgICAgICAgICAgMjUwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkJvZHkgZmx1aWRcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiZmx1aWRcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2NlwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDA1ODg5XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDAwNzBcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzI0NTcwMDVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDc4LFxuICAgICAgICAgICAgICA2MyxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJGZWNlc1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJmZWNlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTY2XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTU3MzNcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC01OTY2NlwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzOTQ3NzAwMlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjE4LFxuICAgICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAgIDI1NVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJHYXNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiZ2FzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAxNzExMFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJDLTEwMDgwXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc0OTQ3MDA5XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyMTQsXG4gICAgICAgICAgICAgIDIzMCxcbiAgICAgICAgICAgICAgMTMwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlVyaW5lXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInVyaW5lXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDA0MjAzNlwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTcwMDYwXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc4MDE0MDA1XCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwic2hvd0FuYXRvbXlcIjogZmFsc2VcbiAgICAgIH1cbiAgICBdXG4gIH1cbn1gO1xuXG5jb25zdCBwYXJzZWRKc29uID0gSlNPTi5wYXJzZShqc29uKTtcblxuZXhwb3J0IGRlZmF1bHQgcGFyc2VkSnNvbjtcbiIsImltcG9ydCBpbml0IGZyb20gJy4vaW5pdC5qcyc7XG5cbmNvbnN0IFRPT0xCQVJfQlVUVE9OX1RZUEVTID0ge1xuICBDT01NQU5EOiAnY29tbWFuZCcsXG4gIFNFVF9UT09MX0FDVElWRTogJ3NldFRvb2xBY3RpdmUnXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8qKlxuICAgKiBPbmx5IHJlcXVpcmVkIHByb3BlcnR5LiBTaG91bGQgYmUgYSB1bmlxdWUgdmFsdWUgYWNyb3NzIGFsbCBleHRlbnNpb25zLlxuICAgKi9cbiAgaWQ6ICdvaGlmLXNlZ21lbnRhdGlvbi1leHRlbnNpb24nLFxuXG4gIHByZVJlZ2lzdHJhdGlvbihjb25maWd1cmF0aW9uID0ge30pIHtcbiAgICBpbml0KGNvbmZpZ3VyYXRpb24pO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgb25lIG9yIG1vcmUgbmFtZWQgY29tbWFuZHMgc2NvcGVkIHRvIGEgY29udGV4dC4gQ29tbWFuZHMgYXJlXG4gICAqIHRoZSBwcmltYXJ5IG1lYW5zIGZvci4uLlxuICAgKi9cbiAgZ2V0Q29tbWFuZHNNb2R1bGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlZmF1bHRDb250ZXh0OiAnVklFV0VSJyxcbiAgICAgIGFjdGlvbnM6IHt9LFxuICAgICAgZGVmaW5pdGlvbnM6IFtdXG4gICAgfTtcbiAgfSxcblxuICAvKipcbiAgICogQWxsb3dzIHlvdSB0byBwcm92aWRlIHRvb2xiYXIgZGVmaW5pdGlvbnMgdGhhdCB3aWxsIGJlIG1lcmdlZCB3aXRoIGFueVxuICAgKiBleGlzdGluZyBhcHBsaWNhdGlvbiB0b29sYmFyIGNvbmZpZ3VyYXRpb24uIFVzZWQgdG8gZGV0ZXJtaW5lIHdoaWNoXG4gICAqIGJ1dHRvbnMgc2hvdWxkIGJlIHZpc2libGUgd2hlbiwgdGhlaXIgb3JkZXIsIHdoYXQgaGFwcGVucyB3aGVuIHRoZXkncmVcbiAgICogY2xpY2tlZCwgZXRjLlxuICAgKi9cbiAgZ2V0VG9vbGJhck1vZHVsZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVmaW5pdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnZnJlZWhhbmRSb2lUb29scycsXG4gICAgICAgICAgbGFiZWw6ICdST0knLFxuICAgICAgICAgIGljb246ICdsZXZlbCcsXG4gICAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ0ZyZWVoYW5kUm9pJyxcbiAgICAgICAgICAgICAgbGFiZWw6ICdEcmF3JyxcbiAgICAgICAgICAgICAgaWNvbjogJ2xldmVsJyxcbiAgICAgICAgICAgICAgdHlwZTogVE9PTEJBUl9CVVRUT05fVFlQRVMuU0VUX1RPT0xfQUNUSVZFLFxuICAgICAgICAgICAgICBjb21tYW5kTmFtZTogJ2VuYWJsZUZyZWVoYW5kUm9pJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdGcmVlaGFuZFJvaVNjdWxwdG9yJyxcbiAgICAgICAgICAgICAgbGFiZWw6ICdTY3VscHQnLFxuICAgICAgICAgICAgICBpY29uOiAnbGV2ZWwnLFxuICAgICAgICAgICAgICB0eXBlOiBUT09MQkFSX0JVVFRPTl9UWVBFUy5TRVRfVE9PTF9BQ1RJVkUsXG4gICAgICAgICAgICAgIGNvbW1hbmROYW1lOiAnZW5hYmxlRnJlZWhhbmRSb2lTY3VscHRvcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ2JydXNoVG9vbHMnLFxuICAgICAgICAgIGxhYmVsOiAnU2VnbWVudCcsXG4gICAgICAgICAgaWNvbjogJ2xldmVsJyxcbiAgICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnQnJ1c2gnLFxuICAgICAgICAgICAgICBsYWJlbDogJ01hbnVhbCcsXG4gICAgICAgICAgICAgIGljb246ICdsZXZlbCcsXG4gICAgICAgICAgICAgIHR5cGU6IFRPT0xCQVJfQlVUVE9OX1RZUEVTLlNFVF9UT09MX0FDVElWRSxcbiAgICAgICAgICAgICAgY29tbWFuZE5hbWU6ICdlbmFibGVkQnJ1c2gnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ0JydXNoM0RIVUdhdGVkVG9vbCcsXG4gICAgICAgICAgICAgIGxhYmVsOiAnU21hcnQgQ1QnLFxuICAgICAgICAgICAgICBpY29uOiAnbGV2ZWwnLFxuICAgICAgICAgICAgICB0eXBlOiBUT09MQkFSX0JVVFRPTl9UWVBFUy5TRVRfVE9PTF9BQ1RJVkUsXG4gICAgICAgICAgICAgIGNvbW1hbmROYW1lOiAnZW5hYmxlZEJydXNoM0RIVUdhdGVkVG9vbCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnQnJ1c2gzREF1dG9HYXRlZFRvb2wnLFxuICAgICAgICAgICAgICBsYWJlbDogJ0F1dG8nLFxuICAgICAgICAgICAgICBpY29uOiAnbGV2ZWwnLFxuICAgICAgICAgICAgICB0eXBlOiBUT09MQkFSX0JVVFRPTl9UWVBFUy5TRVRfVE9PTF9BQ1RJVkUsXG4gICAgICAgICAgICAgIGNvbW1hbmROYW1lOiAnZW5hYmxlZEJydXNoM0RBdXRvR2F0ZWRUb29sJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGRlZmF1bHRDb250ZXh0OiAnQUNUSVZFX1ZJRVdQT1JUOjpDT1JORVJTVE9ORSdcbiAgICB9O1xuICB9LFxuXG4gIC8qKlxuICAgKiBOb3QgeWV0IGltcGxlbWVudGVkXG4gICAqL1xuICBnZXRQYW5lbE1vZHVsZTogKCkgPT4gbnVsbFxufTtcbiIsImltcG9ydCB7IHN0b3JlLCByZWdpc3RlciwgYWRkVG9vbCB9IGZyb20gJ2Nvcm5lcnN0b25lLXRvb2xzJztcbmltcG9ydCBmcmVlaGFuZDNETW9kdWxlIGZyb20gJy4vbW9kdWxlcy9mcmVlaGFuZDNETW9kdWxlLmpzJztcbmltcG9ydCBleHRlbmRCcnVzaE1vZHVsZSBmcm9tICcuL21vZHVsZXMvZXh0ZW5kQnJ1c2hNb2R1bGUuanMnO1xuXG5pbXBvcnQgQnJ1c2gzRFRvb2wgZnJvbSAnLi90b29scy9CcnVzaDNEVG9vbC5qcyc7XG5pbXBvcnQgQnJ1c2gzREhVR2F0ZWRUb29sIGZyb20gJy4vdG9vbHMvQnJ1c2gzREhVR2F0ZWRUb29sLmpzJztcbmltcG9ydCBCcnVzaDNEQXV0b0dhdGVkVG9vbCBmcm9tICcuL3Rvb2xzL0JydXNoM0RBdXRvR2F0ZWRUb29sLmpzJztcbmltcG9ydCBGcmVlaGFuZFJvaTNEVG9vbCBmcm9tICcuL3Rvb2xzL0ZyZWVoYW5kUm9pM0RUb29sLmpzJztcbmltcG9ydCBGcmVlaGFuZFJvaTNEU2N1bHB0b3JUb29sIGZyb20gJy4vdG9vbHMvRnJlZWhhbmRSb2kzRFNjdWxwdG9yVG9vbC5qcyc7XG5cbmNvbnN0IG1vZHVsZXMgPSBzdG9yZS5tb2R1bGVzO1xuXG5jb25zdCBkZWZhdWx0Q29uZmlnID0ge1xuICBtYXhSYWRpdXM6IDY0LFxuICBob2xlRmlsbDogMixcbiAgaG9sZUZpbGxSYW5nZTogWzAsIDIwXSxcbiAgc3RyYXlSZW1vdmU6IDUsXG4gIHN0cmF5UmVtb3ZlUmFuZ2U6IFswLCA5OV0sXG4gIGludGVycG9sYXRlOiBmYWxzZSxcbiAgc2hvd0ZyZWVoYW5kU3RhdHM6IGZhbHNlLFxuICBicnVzaDNkVG9vbE5hbWU6ICdCcnVzaDNEVG9vbCcsXG4gIGJydXNoM0RIVUdhdGVkVG9vbE5hbWU6ICdCcnVzaDNESFVHYXRlZFRvb2wnLFxuICBicnVzaDNEQXV0b0dhdGVkVG9vbDogJ0JydXNoM0RBdXRvR2F0ZWRUb29sJyxcbiAgZnJlZWhhbmRSb2kzRFRvb2w6ICdGcmVlaGFuZFJvaTNEVG9vbCcsXG4gIGZyZWVoYW5kUm9pM0RTY3VscHRvclRvb2w6ICdGcmVlaGFuZFJvaTNEU2N1bHB0b3JUb29sJyxcbiAgZ2F0ZXM6IFtcbiAgICB7XG4gICAgICAvLyBodHRwczovL3d3dy5uY2JpLm5sbS5uaWguZ292L3BtYy9hcnRpY2xlcy9QTUM0MzA5NTIyL1xuICAgICAgbmFtZTogJ2FkaXBvc2UnLFxuICAgICAgcmFuZ2U6IFstMTkwLCAtMzBdXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBodHRwczovL3d3dy5uY2JpLm5sbS5uaWguZ292L3BtYy9hcnRpY2xlcy9QTUM0MzA5NTIyL1xuICAgICAgbmFtZTogJ211c2NsZScsXG4gICAgICByYW5nZTogWy0yOSwgMTUwXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2N1c3RvbScsXG4gICAgICByYW5nZTogWzAsIDEwMF1cbiAgICB9XG4gIF1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoY29uZmlndXJhdGlvbiA9IHt9KSB7XG4gIGNvbnN0IGJydXNoTW9kdWxlID0gbW9kdWxlcy5icnVzaDtcbiAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdENvbmZpZywgY29uZmlndXJhdGlvbik7XG5cbiAgZXh0ZW5kQnJ1c2hNb2R1bGUoYnJ1c2hNb2R1bGUsIGNvbmZpZyk7XG5cbiAgcmVnaXN0ZXIoJ21vZHVsZScsICdmcmVlaGFuZDNEJywgZnJlZWhhbmQzRE1vZHVsZSk7XG4gIGNvbnN0IGZyZWVoYW5kM0RTdG9yZSA9IG1vZHVsZXMuZnJlZWhhbmQzRDtcblxuICBmcmVlaGFuZDNEU3RvcmUuc3RhdGUuaW50ZXJwb2xhdGUgPSBjb25maWcuaW50ZXJwb2xhdGU7XG4gIGZyZWVoYW5kM0RTdG9yZS5zdGF0ZS5kaXNwbGF5U3RhdHMgPSBjb25maWcuc2hvd0ZyZWVoYW5kU3RhdHM7XG5cbiAgYWRkVG9vbChCcnVzaDNEVG9vbCwgeyBuYW1lOiBjb25maWcuYnJ1c2gzZFRvb2xOYW1lIH0pO1xuICBhZGRUb29sKEJydXNoM0RIVUdhdGVkVG9vbCwgeyBuYW1lOiBjb25maWcuYnJ1c2gzREhVR2F0ZWRUb29sTmFtZSB9KTtcbiAgYWRkVG9vbChCcnVzaDNEQXV0b0dhdGVkVG9vbCwgeyBuYW1lOiBjb25maWcuYnJ1c2gzREF1dG9HYXRlZFRvb2wgfSk7XG4gIGFkZFRvb2woRnJlZWhhbmRSb2kzRFRvb2wsIHsgbmFtZTogY29uZmlnLmZyZWVoYW5kUm9pM0RUb29sIH0pO1xuICBhZGRUb29sKEZyZWVoYW5kUm9pM0RTY3VscHRvclRvb2wsIHtcbiAgICBuYW1lOiBjb25maWcuZnJlZWhhbmRSb2kzRFNjdWxwdG9yVG9vbCxcbiAgICByZWZlcmVuY2VkVG9vbE5hbWU6IGNvbmZpZy5mcmVlaGFuZFJvaTNEVG9vbFxuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4dGVuZEJydXNoTW9kdWxlKGJydXNoTW9kdWxlLCBjb25maWcpIHtcbiAgY29uc3QgYnJ1c2hTdGF0ZSA9IGJydXNoTW9kdWxlLnN0YXRlO1xuICBjb25zdCBnZXR0ZXJzID0gYnJ1c2hNb2R1bGUuZ2V0dGVycztcbiAgY29uc3Qgc2V0dGVycyA9IGJydXNoTW9kdWxlLnNldHRlcnM7XG5cbiAgYnJ1c2hTdGF0ZS5ob2xlRmlsbCA9IGNvbmZpZy5ob2xlRmlsbDtcbiAgYnJ1c2hTdGF0ZS5ob2xlRmlsbFJhbmdlID0gY29uZmlnLmhvbGVGaWxsUmFuZ2U7XG4gIGJydXNoU3RhdGUuc3RyYXlSZW1vdmUgPSBjb25maWcuc3RyYXlSZW1vdmU7XG4gIGJydXNoU3RhdGUuc3RyYXlSZW1vdmVSYW5nZSA9IGNvbmZpZy5zdHJheVJlbW92ZVJhbmdlO1xuICBicnVzaFN0YXRlLmdhdGVzID0gY29uZmlnLmdhdGVzO1xuICBicnVzaFN0YXRlLmFjdGl2ZUdhdGUgPSBicnVzaFN0YXRlLmdhdGVzWzBdLm5hbWU7XG4gIGJydXNoU3RhdGUubWF4UmFkaXVzID0gY29uZmlnLm1heFJhZGl1cztcblxuICBnZXR0ZXJzLmFjdGl2ZUdhdGVSYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCBhY3RpdmVHYXRlID0gYnJ1c2hTdGF0ZS5hY3RpdmVHYXRlO1xuICAgIGNvbnN0IGdhdGVzID0gYnJ1c2hTdGF0ZS5nYXRlcztcblxuICAgIGNvbnN0IGdhdGVJbmRleCA9IGdhdGVzLmZpbmRJbmRleChlbGVtZW50ID0+IHtcbiAgICAgIHJldHVybiBlbGVtZW50Lm5hbWUgPT09IGFjdGl2ZUdhdGU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYnJ1c2hTdGF0ZS5nYXRlc1tnYXRlSW5kZXhdLnJhbmdlO1xuICB9O1xuXG4gIGdldHRlcnMuY3VzdG9tR2F0ZVJhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGdhdGVzID0gYnJ1c2hTdGF0ZS5nYXRlcztcblxuICAgIGNvbnN0IGdhdGVJbmRleCA9IGdhdGVzLmZpbmRJbmRleChlbGVtZW50ID0+IHtcbiAgICAgIHJldHVybiBlbGVtZW50Lm5hbWUgPT09ICdjdXN0b20nO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGJydXNoU3RhdGUuZ2F0ZXNbZ2F0ZUluZGV4XS5yYW5nZTtcbiAgfTtcblxuICBzZXR0ZXJzLmN1c3RvbUdhdGVSYW5nZSA9IChtaW4sIG1heCkgPT4ge1xuICAgIGNvbnN0IGdhdGVzID0gYnJ1c2hTdGF0ZS5nYXRlcztcblxuICAgIGNvbnN0IGdhdGVJbmRleCA9IGdhdGVzLmZpbmRJbmRleChlbGVtZW50ID0+IHtcbiAgICAgIHJldHVybiBlbGVtZW50Lm5hbWUgPT09ICdjdXN0b20nO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY3VzdG9tR2F0ZVJhbmdlID0gYnJ1c2hTdGF0ZS5nYXRlc1tnYXRlSW5kZXhdLnJhbmdlO1xuXG4gICAgaWYgKG1pbiAhPT0gbnVsbCkge1xuICAgICAgY3VzdG9tR2F0ZVJhbmdlWzBdID0gbWluO1xuICAgIH1cblxuICAgIGlmIChtYXggIT09IG51bGwpIHtcbiAgICAgIGN1c3RvbUdhdGVSYW5nZVsxXSA9IG1heDtcbiAgICB9XG4gIH07XG5cbiAgZ2V0dGVycy5pbXBvcnRNZXRhZGF0YSA9IHNlcmllc0luc3RhbmNlVWlkID0+IHtcbiAgICBpZiAoYnJ1c2hNb2R1bGUuc3RhdGUuaW1wb3J0ICYmIGJydXNoTW9kdWxlLnN0YXRlLmltcG9ydFtzZXJpZXNJbnN0YW5jZVVpZF0pIHtcbiAgICAgIHJldHVybiBicnVzaE1vZHVsZS5zdGF0ZS5pbXBvcnRbc2VyaWVzSW5zdGFuY2VVaWRdO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfTtcblxuICBzZXR0ZXJzLmltcG9ydE1ldGFkYXRhID0gKHNlcmllc0luc3RhbmNlVWlkLCBtZXRhZGF0YSkgPT4ge1xuICAgIC8vIFN0b3JlIHRoYXQgd2UndmUgaW1wb3J0ZWQgYSBjb2xsZWN0aW9uIGZvciB0aGlzIHNlcmllcy5cbiAgICBpZiAoIWJydXNoTW9kdWxlLnN0YXRlLmltcG9ydCkge1xuICAgICAgYnJ1c2hNb2R1bGUuc3RhdGUuaW1wb3J0ID0ge307XG4gICAgfVxuXG4gICAgYnJ1c2hNb2R1bGUuc3RhdGUuaW1wb3J0W3Nlcmllc0luc3RhbmNlVWlkXSA9IG1ldGFkYXRhO1xuICB9O1xuXG4gIHNldHRlcnMuaW1wb3J0TW9kaWZpZWQgPSBzZXJpZXNJbnN0YW5jZVVpZCA9PiB7XG4gICAgY29uc3QgaW1wb3J0TWV0YWRhdGEgPSBicnVzaE1vZHVsZS5zdGF0ZS5pbXBvcnRbc2VyaWVzSW5zdGFuY2VVaWRdO1xuXG4gICAgaWYgKGltcG9ydE1ldGFkYXRhLm1vZGlmaWVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW1wb3J0TWV0YWRhdGEubW9kaWZpZWQgPSB0cnVlO1xuXG4gICAgLy8gSmFtZXNBUGV0dHNcbiAgICAvLyBUT0RPOiBGb3JjZSB1cGRhdGUgb2YgY29tcG9uZW50LlxuICB9O1xufVxuIiwiaW1wb3J0IGNvcm5lcnN0b25lIGZyb20gJ2Nvcm5lcnN0b25lLWNvcmUnO1xuaW1wb3J0IGdlbmVyYXRlVUlEIGZyb20gJy4uL3V0aWwvZ2VuZXJhdGVVSUQuanMnO1xuaW1wb3J0IGdldFNlcmllc0luc3RhbmNlVWlkRnJvbUVuYWJsZWRFbGVtZW50IGZyb20gJy4uL3V0aWwvZ2V0U2VyaWVzSW5zdGFuY2VVaWRGcm9tRW5hYmxlZEVsZW1lbnQuanMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtzZXJpZXNbXX0gc2VyaWVzQ29sbGVjdGlvblxuICpcbiAqIEBleGFtcGxlXG4gKiBbXG4gKiAgIHNlcmllczEsXG4gKiAgIHNlcmllczJcbiAqIF07XG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBzZXJpZXNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB1aWQgVGhlIHNlcmllc0luc3RhbmNlVWlkXG4gKiBAcHJvcGVydHkge251bWJlcn0gYWN0aXZlU3RydWN0dXJlU2V0SW5kZXggVGhlIGFjdGl2ZVN0cnVjdHVyZVNldCB3aXRoaW4gdGhlIHNlcmllcy5cbiAqIEBwcm9wZXJ0eSB7c3RydWN0dXJlU2V0W119IHN0cnVjdHVyZVNldENvbGxlY3Rpb24gQW4gYXJyYXkgb2Ygc3RydWN0dXJlU2V0cy5cbiAqXG4gKiBAZXhhbXBsZVxuICoge1xuICogIHVpZDogJ215U2VyaWVzSW5zdGFuY2VVaWQnLFxuICogIGFjdGl2ZVN0cnVjdHVyZVNldEluZGV4OiAwLFxuICogIHN0cnVjdHVyZVNldENvbGxlY3Rpb24sXG4gKiB9O1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYge29iamVjdH0gc3RydWN0dXJlU2V0XG4gKiBAcHJvcGVydHkge3N0cmluZ30gdWlkIFRoZSBzdHJ1Y3R1cmVTZXRVaWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuYW1lIEEgaHVtYW4gcmVhZGFibGUgZGVzY3JpcHRvciBvZiB0aGUgc3RydWN0dXJlU2V0LlxuICogQHByb3BlcnR5IHtib29sZWFufSBpc0xvY2tlZCBXaGV0aGVyIHRoZSBzdHJ1Y3R1cmVTZXQgaXMgaW1tdXRhYmxlLlxuICogQHByb3BlcnR5IHtib29sZWFufSB2aXNpYmxlIFdoZXRoZXIgdGhlIHN0cnVjdHVyZVNldCBzaG91bGQgYmUgcmVuZGVyZWQuXG4gKiBAcHJvcGVydHkge251bWJlcn0gYWN0aXZlUk9JQ29udG91ckluZGV4IFRoZSBpbmRleCBvZiB0aGUgYWN0aXZlIFJPSUNvbnRvdXIuXG4gKiBAcHJvcGVydHkge1JPSUNvbnRvdXJbXX0gUk9JQ29udG91ckNvbGxlY3Rpb24gQW4gYXJyYXkgb2YgUk9JQ29udG91cnMuXG4gKlxuICogQGV4YW1wbGVcbiAqIHtcbiAqICAgdWlkOiAnbXlTdHJ1Y3R1cmVTZXRVaWQnLFxuICogICBuYW1lOiBgbXlMb3ZlbHlTdHJ1Y3R1cmVTZXRgLFxuICogICBpc0xvY2tlZDogZmFsc2UsXG4gKiAgIHZpc2libGU6IHRydWUsXG4gKiAgIGFjdGl2ZVJPSUNvbnRvdXJJbmRleDogNyxcbiAqICAgUk9JQ29udG91ckNvbGxlY3Rpb25cbiAqIH07XG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBST0lDb250b3VyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdWlkIFRoZSBST0lDb250b3VyVWlkLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IG5hbWUgQSBodW1hbiByZWFkYWJsZSBkZXNjcmlwdG9yIG9mIHRoZSBiaW9sb2dpY2FsIG9iamVjdCB0aGUgY29udG91ciBlbmNsb3Nlcy5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjb2xvciBBIGNzcyBjb2xvciB0byByZW5kZXIgdGhlIHZvbHVtZSB3aXRoLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHBvbHlnb25Db3VudCBUaGUgbnVtYmVyIG9mIHBvbHlnb25zIHRoYXQgY29tcHJpc2UgdGhlIFJPSUNvbnRvdXIuXG4gKlxuICogQGV4YW1wbGVcbiAqIHtcbiAqICB1aWQ6ICdteVJPSUNvbnRvdXJVaWQnLFxuICogIG5hbWU6ICdteUxvdmVseVJPSUNvbnRvdXInLFxuICogIGNvbG9yOiAnY29ybmZsb3dlcmJsdWUnLFxuICogIHBvbHlnb25Db3VudDogJzM0J1xuICogfTtcbiAqL1xuXG4vLyBFYWNoIGNvbnRvdXIgcmVmZXJlbmNlcyBhIHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQsIFJPSUNvbnRvdXJVaWQuXG5cbmNvbnN0IHN0YXRlID0ge1xuICBzZXJpZXNDb2xsZWN0aW9uOiBbXSxcbiAgaW50ZXJwb2xhdGU6IGZhbHNlLFxuICBkaXNwbGF5U3RhdHM6IGZhbHNlXG59O1xuXG5mdW5jdGlvbiBjaGVjayhvYmplY3QsIG5hbWUpIHtcbiAgaWYgKCFvYmplY3QpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEluc3VmZmljaWVudCBpbmZvcm1hdGlvbiBwcm92aWRlZCwgbXVzdCBwcm92aWRlICR7bmFtZX0uYCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U2VyaWVzKHNlcmllc0luc3RhbmNlVWlkKSB7XG4gIGNoZWNrKHNlcmllc0luc3RhbmNlVWlkLCAnc2VyaWVzSW5zdGFuY2VVaWQnKTtcblxuICByZXR1cm4gc3RhdGUuc2VyaWVzQ29sbGVjdGlvbi5maW5kKHNlcmllcyA9PiB7XG4gICAgcmV0dXJuIHNlcmllcy51aWQgPT09IHNlcmllc0luc3RhbmNlVWlkO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RydWN0dXJlU2V0KHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQgPSAnREVGQVVMVCcpIHtcbiAgY2hlY2soc3RydWN0dXJlU2V0VWlkLCAnc3RydWN0dXJlU2V0VWlkJyk7XG5cbiAgY29uc3Qgc2VyaWVzID0gZ2V0U2VyaWVzKHNlcmllc0luc3RhbmNlVWlkKTtcblxuICBpZiAoIXNlcmllcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiBzZXJpZXMuc3RydWN0dXJlU2V0Q29sbGVjdGlvbi5maW5kKHN0cnVjdHVyZVNldCA9PiB7XG4gICAgcmV0dXJuIHN0cnVjdHVyZVNldC51aWQgPT09IHN0cnVjdHVyZVNldFVpZDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFJPSUNvbnRvdXIoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCwgUk9JQ29udG91clVpZCkge1xuICBjaGVjayhST0lDb250b3VyVWlkLCAnUk9JQ29udG91clVpZCcpO1xuXG4gIGNvbnN0IHN0cnVjdHVyZVNldCA9IGdldFN0cnVjdHVyZVNldChzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkKTtcblxuICBpZiAoIXN0cnVjdHVyZVNldCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiBzdHJ1Y3R1cmVTZXQuUk9JQ29udG91ckNvbGxlY3Rpb24uZmluZChST0lDb250b3VyID0+IHtcbiAgICByZXR1cm4gUk9JQ29udG91ciAmJiBST0lDb250b3VyLnVpZCA9PT0gUk9JQ29udG91clVpZDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFJPSUNvbnRvdXJJbmRleChzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkLCBST0lDb250b3VyVWlkKSB7XG4gIGNoZWNrKFJPSUNvbnRvdXJVaWQsICdST0lDb250b3VyVWlkJyk7XG5cbiAgY29uc3Qgc3RydWN0dXJlU2V0ID0gZ2V0U3RydWN0dXJlU2V0KHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQpO1xuXG4gIGlmICghc3RydWN0dXJlU2V0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIHN0cnVjdHVyZVNldC5ST0lDb250b3VyQ29sbGVjdGlvbi5maW5kSW5kZXgoUk9JQ29udG91ciA9PiB7XG4gICAgcmV0dXJuIFJPSUNvbnRvdXIudWlkID09PSBST0lDb250b3VyVWlkO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0QWN0aXZlU3RydWN0dXJlU2V0SW5kZXgoc2VyaWVzSW5zdGFuY2VVaWQpIHtcbiAgY29uc3Qgc2VyaWVzID0gZ2V0U2VyaWVzKHNlcmllc0luc3RhbmNlVWlkKTtcblxuICByZXR1cm4gc2VyaWVzLmFjdGl2ZVN0cnVjdHVyZVNldEluZGV4O1xufVxuXG5mdW5jdGlvbiBnZXRBY3RpdmVST0lDb250b3VySW5kZXgoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCA9ICdERUZBVUxUJykge1xuICBjb25zdCBzdHJ1Y3R1cmVTZXQgPSBnZXRTdHJ1Y3R1cmVTZXQoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCk7XG5cbiAgcmV0dXJuIHN0cnVjdHVyZVNldC5hY3RpdmVST0lDb250b3VySW5kZXg7XG59XG5cbmZ1bmN0aW9uIGdldEFjdGl2ZVJPSUNvbnRvdXIoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCA9ICdERUZBVUxUJykge1xuICBjb25zdCBzdHJ1Y3R1cmVTZXQgPSBnZXRTdHJ1Y3R1cmVTZXQoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCk7XG5cbiAgY29uc3QgYWN0aXZlUk9JQ29udG91ckluZGV4ID0gc3RydWN0dXJlU2V0LmFjdGl2ZVJPSUNvbnRvdXJJbmRleDtcblxuICBpZiAoYWN0aXZlUk9JQ29udG91ckluZGV4ID09PSBudWxsIHx8IGFjdGl2ZVJPSUNvbnRvdXJJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIHN0cnVjdHVyZVNldC5ST0lDb250b3VyQ29sbGVjdGlvblthY3RpdmVST0lDb250b3VySW5kZXhdO1xufVxuXG5mdW5jdGlvbiBzZXRTZXJpZXMoc2VyaWVzSW5zdGFuY2VVaWQpIHtcbiAgY2hlY2soc2VyaWVzSW5zdGFuY2VVaWQpO1xuXG4gIGNvbnN0IHNlcmllcyA9IHtcbiAgICB1aWQ6IHNlcmllc0luc3RhbmNlVWlkLFxuICAgIGFjdGl2ZVN0cnVjdHVyZVNldEluZGV4OiBudWxsLFxuICAgIHN0cnVjdHVyZVNldENvbGxlY3Rpb246IFtdXG4gIH07XG5cbiAgc3RhdGUuc2VyaWVzQ29sbGVjdGlvbi5wdXNoKHNlcmllcyk7XG5cbiAgLy8gQWRkIGEgZGVmYXVsdCBzdHJ1Y3R1cmVTZXQgZm9yIHRoZSBzZXJpZXMuXG4gIHNldFN0cnVjdHVyZVNldChzZXJpZXNJbnN0YW5jZVVpZCwgJ2RlZmF1bHQnLCB7XG4gICAgdWlkOiAnREVGQVVMVCdcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldFN0cnVjdHVyZVNldChzZXJpZXNJbnN0YW5jZVVpZCwgbmFtZSwgb3B0aW9ucyA9IHt9KSB7XG4gIGNoZWNrKG5hbWUsICduYW1lJyk7XG5cbiAgbGV0IHNlcmllcyA9IGdldFNlcmllcyhzZXJpZXNJbnN0YW5jZVVpZCk7XG5cbiAgaWYgKCFzZXJpZXMpIHtcbiAgICAvLyBHZW5lcmF0ZSB0aGUgc2VyaWVzLlxuICAgIHNldFNlcmllcyhzZXJpZXNJbnN0YW5jZVVpZCk7XG4gICAgc2VyaWVzID0gZ2V0U2VyaWVzKHNlcmllc0luc3RhbmNlVWlkKTtcbiAgfVxuXG4gIGNvbnN0IHN0cnVjdHVyZVNldCA9IHtcbiAgICB1aWQ6IG9wdGlvbnMudWlkID8gb3B0aW9ucy51aWQgOiBnZW5lcmF0ZVVJRCgpLFxuICAgIG5hbWUsXG4gICAgaXNMb2NrZWQ6IG9wdGlvbnMuaXNMb2NrZWQgPyBvcHRpb25zLmlzTG9ja2VkIDogZmFsc2UsXG4gICAgdmlzaWJsZTogb3B0aW9ucy52aXNpYmxlID8gb3B0aW9ucy52aXNpYmxlIDogdHJ1ZSxcbiAgICBhY3RpdmVST0lDb250b3VySW5kZXg6IG9wdGlvbnMuYWN0aXZlUk9JQ29udG91ckluZGV4ICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmFjdGl2ZVJPSUNvbnRvdXJJbmRleCA6IG51bGwsXG4gICAgUk9JQ29udG91ckNvbGxlY3Rpb246IFtdXG4gIH07XG5cbiAgc2VyaWVzLnN0cnVjdHVyZVNldENvbGxlY3Rpb24ucHVzaChzdHJ1Y3R1cmVTZXQpO1xufVxuXG5mdW5jdGlvbiBzZXRST0lDb250b3VyKHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQsIG5hbWUsIG9wdGlvbnMgPSB7fSkge1xuICBjaGVjayhuYW1lLCAnbmFtZScpO1xuXG4gIGNvbnN0IHN0cnVjdHVyZVNldCA9IGdldFN0cnVjdHVyZVNldChzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkKTtcblxuICBpZiAoIXN0cnVjdHVyZVNldCkge1xuICAgIC8vIENhbid0IGdlbmVyYXRlIHRoZSBzdHJ1Y3R1cmVTZXQgYXMgbm90IGVub3VnaCBpbmZvIChubyBuYW1lKS5cbiAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBnZW5lcmF0ZSBST0lDb250b3VyLCBhcyB0aGUgc3RydWN0dXJlU2V0IHdpdGggJHtzdHJ1Y3R1cmVTZXRVaWR9IGRvZXMgbm90IGV4aXN0LmApO1xuICB9XG5cbiAgY29uc3QgUk9JQ29udG91ciA9IHtcbiAgICB1aWQ6IG9wdGlvbnMudWlkID8gb3B0aW9ucy51aWQgOiBnZW5lcmF0ZVVJRCgpLFxuICAgIG5hbWUsXG4gICAgY29sb3I6IG9wdGlvbnMuY29sb3IgPyBvcHRpb25zLmNvbG9yIDogZ2V0TmV4dENvbG9yKCksXG4gICAgcG9seWdvbkNvdW50OiBvcHRpb25zLnBvbHlnb25Db3VudCA/IG9wdGlvbnMucG9seWdvbkNvdW50IDogMFxuICB9O1xuXG4gIHN0cnVjdHVyZVNldC5ST0lDb250b3VyQ29sbGVjdGlvbi5wdXNoKFJPSUNvbnRvdXIpO1xuXG4gIHJldHVybiBST0lDb250b3VyLnVpZDtcbn1cblxuZnVuY3Rpb24gc2V0Uk9JQ29udG91ckFuZFNldEluZGV4QWN0aXZlKHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQsIG5hbWUsIG9wdGlvbnMgPSB7fSkge1xuICBzZXRST0lDb250b3VyKHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQsIG5hbWUsIG9wdGlvbnMpO1xuXG4gIGNvbnN0IHN0cnVjdHVyZVNldCA9IGdldFN0cnVjdHVyZVNldChzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkKTtcblxuICBjb25zdCBpbmRleCA9IHN0cnVjdHVyZVNldC5ST0lDb250b3VyQ29sbGVjdGlvbi5sZW5ndGggLSAxO1xuXG4gIHN0cnVjdHVyZVNldC5hY3RpdmVST0lDb250b3VySW5kZXggPSBpbmRleDtcblxuICByZXR1cm4gaW5kZXg7XG59XG5cbmZ1bmN0aW9uIHNldERlbGV0ZVJPSUZyb21TdHJ1Y3R1cmVTZXQoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCwgUk9JQ29udG91clVpZCkge1xuICBjb25zdCBzdHJ1Y3R1cmVTZXQgPSBnZXRTdHJ1Y3R1cmVTZXQoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCk7XG4gIGNvbnN0IFJPSUNvbnRvdXJDb2xsZWN0aW9uID0gc3RydWN0dXJlU2V0LlJPSUNvbnRvdXJDb2xsZWN0aW9uO1xuXG4gIGNvbnN0IFJPSUNvbnRvdXJJbmRleCA9IFJPSUNvbnRvdXJDb2xsZWN0aW9uLmZpbmRJbmRleChST0lDb250b3VyID0+IHtcbiAgICByZXR1cm4gUk9JQ29udG91ci51aWQgPT09IFJPSUNvbnRvdXJVaWQ7XG4gIH0pO1xuXG4gIFJPSUNvbnRvdXJDb2xsZWN0aW9uLnNwbGljZShST0lDb250b3VySW5kZXgsIDEpO1xufVxuXG5mdW5jdGlvbiBzZXRTdHJ1Y3R1cmVTZXROYW1lKG5hbWUsIHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQpIHtcbiAgY2hlY2sobmFtZSwgJ25hbWUnKTtcblxuICBjb25zdCBzdHJ1Y3R1cmVTZXQgPSBnZXRTdHJ1Y3R1cmVTZXQoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCk7XG5cbiAgc3RydWN0dXJlU2V0Lm5hbWUgPSBuYW1lO1xufVxuXG5mdW5jdGlvbiBzZXREZWxldGVTdHJ1Y3R1cmVTZXQoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCkge1xuICBjb25zdCBzZXJpZXMgPSBnZXRTZXJpZXMoc2VyaWVzSW5zdGFuY2VVaWQpO1xuXG4gIGNvbnN0IHN0cnVjdHVyZVNldENvbGxlY3Rpb24gPSBzZXJpZXMuc3RydWN0dXJlU2V0Q29sbGVjdGlvbjtcblxuICBjb25zdCBzdHJ1Y3R1cmVTZXRJbmRleCA9IHN0cnVjdHVyZVNldENvbGxlY3Rpb24uZmluZEluZGV4KHN0cnVjdHVyZVNldCA9PiB7XG4gICAgcmV0dXJuIHN0cnVjdHVyZVNldC51aWQgPT09IHN0cnVjdHVyZVNldFVpZDtcbiAgfSk7XG5cbiAgc3RydWN0dXJlU2V0Q29sbGVjdGlvbi5zcGxpY2Uoc3RydWN0dXJlU2V0SW5kZXgsIDEpO1xufVxuXG5mdW5jdGlvbiBzZXRST0lDb250b3VyTmFtZShuYW1lLCBzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkLCBST0lDb250b3VyVWlkKSB7XG4gIGNoZWNrKG5hbWUsICduYW1lJyk7XG5cbiAgY29uc3QgUk9JQ29udG91ciA9IGdldFJPSUNvbnRvdXIoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCwgUk9JQ29udG91clVpZCk7XG5cbiAgUk9JQ29udG91ci5uYW1lID0gbmFtZTtcbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlU3RydWN0dXJlU2V0SW5kZXgoaW5kZXgsIHNlcmllc0luc3RhbmNlVWlkKSB7XG4gIGNoZWNrKGluZGV4LCAnaW5kZXgnKTtcblxuICBjb25zdCBzZXJpZXMgPSBnZXRTZXJpZXMoc2VyaWVzSW5zdGFuY2VVaWQpO1xuXG4gIHNlcmllcy5hY3RpdmVTdHJ1Y3R1cmVTZXRJbmRleCA9IGluZGV4O1xufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVTdHJ1Y3R1cmVTZXQoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCkge1xuICBjaGVjayhzdHJ1Y3R1cmVTZXRVaWQsICdzdHJ1Y3R1cmVTZXRVaWQnKTtcblxuICBjb25zdCBzZXJpZXMgPSBnZXRTZXJpZXMoc2VyaWVzSW5zdGFuY2VVaWQpO1xuICBjb25zdCBzdHJ1Y3R1cmVTZXRDb2xsZWN0aW9uID0gc2VyaWVzLnN0cnVjdHVyZVNldENvbGxlY3Rpb247XG5cbiAgY29uc3Qgc3RydWN0dXJlU2V0SW5kZXggPSBzdHJ1Y3R1cmVTZXRDb2xsZWN0aW9uLmZpbmRJbmRleChzdHJ1Y3R1cmVTZXQgPT4ge1xuICAgIHJldHVybiBzdHJ1Y3R1cmVTZXQudWlkID09PSBzdHJ1Y3R1cmVTZXRVaWQ7XG4gIH0pO1xuXG4gIHNlcmllcy5hY3RpdmVTdHJ1Y3R1cmVTZXRJbmRleCA9IHN0cnVjdHVyZVNldEluZGV4O1xufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVST0lDb250b3VySW5kZXgoaW5kZXgsIHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQgPSAnREVGQVVMVCcpIHtcbiAgY29uc3Qgc3RydWN0dXJlU2V0ID0gZ2V0U3RydWN0dXJlU2V0KHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQpO1xuXG4gIHN0cnVjdHVyZVNldC5hY3RpdmVST0lDb250b3VySW5kZXggPSBpbmRleDtcbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlUk9JQ29udG91cihzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkID0gJ0RFRkFVTFQnLCBST0lDb250b3VyVWlkKSB7XG4gIGNoZWNrKFJPSUNvbnRvdXJVaWQsICdST0lDb250b3VyVWlkJyk7XG5cbiAgY29uc3Qgc3RydWN0dXJlU2V0ID0gZ2V0U3RydWN0dXJlU2V0KHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQpO1xuICBjb25zdCBST0lDb250b3VyQ29sbGVjdGlvbiA9IHN0cnVjdHVyZVNldC5ST0lDb250b3VyQ29sbGVjdGlvbjtcblxuICBjb25zdCBST0lDb250b3VySW5kZXggPSBST0lDb250b3VyQ29sbGVjdGlvbi5maW5kSW5kZXgoUk9JQ29udG91ciA9PiB7XG4gICAgcmV0dXJuIFJPSUNvbnRvdXIudWlkID09PSBST0lDb250b3VyVWlkO1xuICB9KTtcblxuICBzdHJ1Y3R1cmVTZXQuYWN0aXZlUk9JQ29udG91ckluZGV4ID0gUk9JQ29udG91ckluZGV4O1xufVxuXG5mdW5jdGlvbiBpbmNyZW1lbnRQb2x5Z29uQ291bnQoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCwgUk9JQ29udG91clVpZCkge1xuICBjb25zdCBST0lDb250b3VyID0gZ2V0Uk9JQ29udG91cihzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkLCBST0lDb250b3VyVWlkKTtcblxuICBST0lDb250b3VyLnBvbHlnb25Db3VudCsrO1xufVxuXG5mdW5jdGlvbiBkZWNyZW1lbnRQb2x5Z29uQ291bnQoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCwgUk9JQ29udG91clVpZCkge1xuICBjb25zdCBST0lDb250b3VyID0gZ2V0Uk9JQ29udG91cihzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkLCBST0lDb250b3VyVWlkKTtcblxuICBST0lDb250b3VyLnBvbHlnb25Db3VudC0tO1xufVxuXG5jb25zdCBnZXR0ZXJzID0ge1xuICBzZXJpZXM6IGdldFNlcmllcyxcbiAgc3RydWN0dXJlU2V0OiBnZXRTdHJ1Y3R1cmVTZXQsXG4gIFJPSUNvbnRvdXI6IGdldFJPSUNvbnRvdXIsXG4gIFJPSUNvbnRvdXJJbmRleDogZ2V0Uk9JQ29udG91ckluZGV4LFxuICBhY3RpdmVTdHJ1Y3R1cmVTZXRJbmRleDogZ2V0QWN0aXZlU3RydWN0dXJlU2V0SW5kZXgsXG4gIGFjdGl2ZVJPSUNvbnRvdXJJbmRleDogZ2V0QWN0aXZlUk9JQ29udG91ckluZGV4LFxuICBhY3RpdmVST0lDb250b3VyOiBnZXRBY3RpdmVST0lDb250b3VyXG59O1xuXG5jb25zdCBzZXR0ZXJzID0ge1xuICBzZXJpZXM6IHNldFNlcmllcyxcbiAgc3RydWN0dXJlU2V0OiBzZXRTdHJ1Y3R1cmVTZXQsXG4gIFJPSUNvbnRvdXI6IHNldFJPSUNvbnRvdXIsXG4gIFJPSUNvbnRvdXJBbmRTZXRJbmRleEFjdGl2ZTogc2V0Uk9JQ29udG91ckFuZFNldEluZGV4QWN0aXZlLFxuICBkZWxldGVST0lGcm9tU3RydWN0dXJlU2V0OiBzZXREZWxldGVST0lGcm9tU3RydWN0dXJlU2V0LFxuICBkZWxldGVTdHJ1Y3R1cmVTZXQ6IHNldERlbGV0ZVN0cnVjdHVyZVNldCxcbiAgc3RydWN0dXJlU2V0TmFtZTogc2V0U3RydWN0dXJlU2V0TmFtZSxcbiAgUk9JQ29udG91ck5hbWU6IHNldFJPSUNvbnRvdXJOYW1lLFxuICBhY3RpdmVTdHJ1Y3R1cmVTZXRJbmRleDogc2V0QWN0aXZlU3RydWN0dXJlU2V0SW5kZXgsXG4gIGFjdGl2ZVN0cnVjdHVyZVNldDogc2V0QWN0aXZlU3RydWN0dXJlU2V0LFxuICBhY3RpdmVST0lDb250b3VySW5kZXg6IHNldEFjdGl2ZVJPSUNvbnRvdXJJbmRleCxcbiAgYWN0aXZlUk9JQ29udG91cjogc2V0QWN0aXZlUk9JQ29udG91cixcbiAgaW5jcmVtZW50UG9seWdvbkNvdW50LFxuICBkZWNyZW1lbnRQb2x5Z29uQ291bnQsXG4gIHRvZ2dsZUludGVycG9sYXRlOiAoKSA9PiB7XG4gICAgc3RhdGUuaW50ZXJwb2xhdGUgPSAhc3RhdGUuaW50ZXJwb2xhdGU7XG4gIH0sXG4gIHRvZ2dsZURpc3BsYXlTdGF0czogKCkgPT4ge1xuICAgIHN0YXRlLmRpc3BsYXlTdGF0cyA9ICFzdGF0ZS5kaXNwbGF5U3RhdHM7XG4gIH1cbn07XG5cbi8qKlxuICogZW5hYmxlZEVsZW1lbnRDYWxsYmFjayAtIEVsZW1lbnQgc3BlY2lmaWMgaW5pdGlsaXNhdGlvbi5cbiAqIEBwdWJsaWNcbiAqIEBwYXJhbSAge09iamVjdH0gZW5hYmxlZEVsZW1lbnQgIFRoZSBlbGVtZW50IG9uIHdoaWNoIHRoZSBtb2R1bGUgaXNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlaW5nIGluaXRpYWxpc2VkLlxuICovXG5mdW5jdGlvbiBlbmFibGVkRWxlbWVudENhbGxiYWNrKGVsZW1lbnQpIHtcbiAgY29uc3QgZW5hYmxlZEVsZW1lbnQgPSBjb3JuZXJzdG9uZS5nZXRFbmFibGVkRWxlbWVudChlbGVtZW50KTtcblxuICBpZiAoIWVuYWJsZWRFbGVtZW50LmltYWdlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgc2VyaWVzSW5zdGFuY2VVaWQgPSBnZXRTZXJpZXNJbnN0YW5jZVVpZEZyb21FbmFibGVkRWxlbWVudChlbmFibGVkRWxlbWVudCk7XG5cbiAgaWYgKCFnZXRTZXJpZXMoc2VyaWVzSW5zdGFuY2VVaWQpKSB7XG4gICAgLy8gR2VuZXJhdGUgc2VyaWVzIHN0b3JlLlxuICAgIHNldFNlcmllcyhzZXJpZXNJbnN0YW5jZVVpZCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdGF0ZSxcbiAgZW5hYmxlZEVsZW1lbnRDYWxsYmFjayxcbiAgZ2V0dGVycyxcbiAgc2V0dGVyc1xufTtcblxuY29uc3QgaW1wb3J0Q29sb3JzID0gW1xuICAnY29ybmZsb3dlcmJsdWUnLFxuICAnZmlyZWJyaWNrJyxcbiAgJ2dvbGRlbnJvZCcsXG4gICdibHVldmlvbGV0JyxcbiAgJ2luZGlhbnJlZCcsXG4gICdvcmFuZ2UnLFxuICAnbWVkaXVtdHVycXVvaXNlJyxcbiAgJ2xpZ2h0Y29yYWwnLFxuICAna2hha2knLFxuICAnZGFya21hZ2VudGEnLFxuICAnbGlnaHRzZWFncmVlbicsXG4gICd0b21hdG8nLFxuICAnYXF1YW1hcmluZScsXG4gICdkYXJrc2FsbW9uJyxcbiAgJ21vY2Nhc2luJyxcbiAgJ29yY2hpZCcsXG4gICdza3libHVlJyxcbiAgJ3BlcnUnXG5dO1xuXG4vLyBTdWNoIHRoYXQgZmlyc3QgY29sb3Igd2lsbCBiZSB0aGUgZmlyc3QgaW4gcm9pQ29sb3JzXG5sZXQgY3VycmVudENvbG9ySW5kZXggPSBpbXBvcnRDb2xvcnMubGVuZ3RoO1xuXG4vKipcbiAqIGdldE5leHRDb2xvclxuICpcbiAqIEByZXR1cm4ge3N0cmluZ30gQSBDU1MgcmVjb2duaXNlZCBjb2xvciB3aXRoIHdoaWNoIHRvIHJlbmRlciB0aGUgUk9JIGNvbnRvdXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0Q29sb3IoKSB7XG4gIGN1cnJlbnRDb2xvckluZGV4Kys7XG4gIGlmIChjdXJyZW50Q29sb3JJbmRleCA+PSBpbXBvcnRDb2xvcnMubGVuZ3RoKSB7XG4gICAgY3VycmVudENvbG9ySW5kZXggPSAwO1xuICB9XG5cbiAgcmV0dXJuIGltcG9ydENvbG9yc1tjdXJyZW50Q29sb3JJbmRleF07XG59XG4iLCJpbXBvcnQgY29ybmVyc3RvbmVUb29scyBmcm9tICdjb3JuZXJzdG9uZS1jb3JlJztcbmltcG9ydCBCcnVzaDNESFVHYXRlZFRvb2wgZnJvbSAnLi9CcnVzaDNESFVHYXRlZFRvb2wuanMnO1xuXG5jb25zdCB7IGdldENpcmNsZSB9ID0gY29ybmVyc3RvbmVUb29scy5pbXBvcnRJbnRlcm5hbE1vZHVsZSgndXRpbC9icnVzaFV0aWxzJyk7XG5cbmNvbnN0IGJydXNoTW9kdWxlID0gY29ybmVyc3RvbmVUb29scy5zdG9yZS5tb2R1bGVzLmJydXNoO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcnVzaDNEQXV0b0dhdGVkVG9vbCBleHRlbmRzIEJydXNoM0RIVUdhdGVkVG9vbCB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb24gPSB7fSkge1xuICAgIGNvbnN0IGRlZmF1bHRDb25maWcgPSB7fTtcbiAgICBjb25zdCBpbml0aWFsQ29uZmlndXJhdGlvbiA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdENvbmZpZywgY29uZmlndXJhdGlvbik7XG5cbiAgICBzdXBlcihpbml0aWFsQ29uZmlndXJhdGlvbik7XG5cbiAgICB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uID0gaW5pdGlhbENvbmZpZ3VyYXRpb247XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgaGFuZGxlciBmb3IgTU9VU0VfRE9XTiBldmVudC5cbiAgICpcbiAgICogQG92ZXJyaWRlXG4gICAqIEBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZ0IC0gVGhlIGV2ZW50LlxuICAgKi9cbiAgcHJlTW91c2VEb3duQ2FsbGJhY2soZXZ0KSB7XG4gICAgdGhpcy5fc2V0Q3VzdG9tR2F0ZShldnQpO1xuICAgIHRoaXMuX3N0YXJ0UGFpbnRpbmcoZXZ0KTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIF9zZXRDdXN0b21HYXRlIC0gR2V0cyB0aGUgbWluaW11bSBhbmQgbWF4aW11bSBicnVzaCB2YWx1ZXMgd2l0aGluIHRoZSBpbWFnZVxuICAgKiBhbmQgc2V0cyB0aGUgZ2F0ZSBtb2RlIHRvIFwiY3VzdG9tXCIgd2l0aCB0aGVzZSB2YWx1ZXMuXG4gICAqXG4gICAqIEBwYXJhbSAge29iamVjdH0gZXZ0IFRoZSBjb3JuZXJzdG9uZSBldmVudC5cbiAgICogQHJldHVybnMge251bGx9XG4gICAqL1xuICBfc2V0Q3VzdG9tR2F0ZShldnQpIHtcbiAgICBjb25zdCBldmVudERhdGEgPSBldnQuZGV0YWlsO1xuICAgIGNvbnN0IGltYWdlID0gZXZlbnREYXRhLmltYWdlO1xuICAgIGNvbnN0IHsgcm93cywgY29sdW1ucyB9ID0gaW1hZ2U7XG4gICAgY29uc3QgeyB4LCB5IH0gPSBldmVudERhdGEuY3VycmVudFBvaW50cy5pbWFnZTtcbiAgICBjb25zdCByYWRpdXMgPSBicnVzaE1vZHVsZS5zdGF0ZS5yYWRpdXM7XG4gICAgY29uc3QgaW1hZ2VQaXhlbERhdGEgPSBpbWFnZS5nZXRQaXhlbERhdGEoKTtcbiAgICBjb25zdCByZXNjYWxlU2xvcGUgPSBpbWFnZS5zbG9wZSB8fCAxO1xuICAgIGNvbnN0IHJlc2NhbGVJbnRlcmNlcHQgPSBpbWFnZS5pbnRlcmNlcHQgfHwgMDtcblxuICAgIGNvbnN0IGNpcmNsZSA9IGdldENpcmNsZShyYWRpdXMsIHJvd3MsIGNvbHVtbnMsIHgsIHkpO1xuXG4gICAgLy8gSW5pdGlhbGlzZSBoaSBhbmQgbG8gYXMgdGhlIGZpcnN0IHBpeGVsVmFsdWUgaW4gdGhlIGNpcmNsZS5cbiAgICBsZXQgbG8gPSBpbWFnZVBpeGVsRGF0YVtjaXJjbGVbMF1bMF0gKyBjaXJjbGVbMF1bMV0gKiByb3dzXTtcbiAgICBsZXQgaGkgPSBsbztcblxuICAgIC8vIEZpbmQgdGhlIGhpZ2hlc3QgYW5kIGxvd2VzdCB2YWx1ZS5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNpcmNsZS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHBpeGVsVmFsdWUgPSBpbWFnZVBpeGVsRGF0YVtjaXJjbGVbaV1bMF0gKyBjaXJjbGVbaV1bMV0gKiByb3dzXTtcblxuICAgICAgaWYgKHBpeGVsVmFsdWUgPCBsbykge1xuICAgICAgICBsbyA9IHBpeGVsVmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChwaXhlbFZhbHVlID4gaGkpIHtcbiAgICAgICAgaGkgPSBwaXhlbFZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxvID0gbG8gKiByZXNjYWxlU2xvcGUgKyByZXNjYWxlSW50ZXJjZXB0O1xuICAgIGhpID0gaGkgKiByZXNjYWxlU2xvcGUgKyByZXNjYWxlSW50ZXJjZXB0O1xuXG4gICAgdGhpcy5nYXRlID0gW2xvLCBoaV07XG4gIH1cblxuICAvKipcbiAgICogX2dhdGVDaXJjbGUgLSBHaXZlbiBhbiBpbWFnZSBhbmQgYSBicnVzaCBjaXJjbGUsIGdhdGUgdGhlIGNpcmNsZSBiZXR3ZWVuXG4gICAqIHRoZSBzZXQgZ2F0ZSB2YWx1ZXMsIGFuZCB0aGVuIGNsZWFudXAgdGhlIHJlc3VsdGluZyBtYXNrIHVzaW5nIHRoZVxuICAgKiBob2xlRmlsbCBhbmQgc3RyYXlSZW1vdmUgcHJvcGVydGllcyBvZiB0aGUgYnJ1c2ggbW9kdWxlLlxuICAgKlxuICAgKiBAcGFyYW0gIHtvYmplY3R9IGltYWdlICAgVGhlIGNvcm5lcnN0b25lIGltYWdlLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJbXVtdfSBjaXJjbGUgIEFuIGFycmF5IG9mIGltYWdlIHBpeGVscyBjb250YWluZWQgd2l0aGluIHRoZSBicnVzaFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgIGNpcmNsZS5cbiAgICogQHJldHVybnMge051bWJlcltdW119ICBBbiBhcnJheSBjb250YWluaW5nIHRoZSBnYXRlZC9jbGVhbmVkIHBpeGVscyB0byBmaWxsLlxuICAgKi9cbiAgX2dhdGVDaXJjbGUoaW1hZ2UsIGNpcmNsZSkge1xuICAgIGNvbnN0IHJvd3MgPSBpbWFnZS5pbWFnZTtcbiAgICBjb25zdCBpbWFnZVBpeGVsRGF0YSA9IGltYWdlLmdldFBpeGVsRGF0YSgpO1xuICAgIGNvbnN0IGdhdGVWYWx1ZXMgPSB0aGlzLmdhdGU7XG4gICAgY29uc3QgcmVzY2FsZVNsb3BlID0gaW1hZ2Uuc2xvcGUgfHwgMTtcbiAgICBjb25zdCByZXNjYWxlSW50ZXJjZXB0ID0gaW1hZ2UuaW50ZXJjZXB0IHx8IDA7XG5cbiAgICBjb25zdCBnYXRlZENpcmNsZUFycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNpcmNsZS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHBpeGVsVmFsdWUgPSBpbWFnZVBpeGVsRGF0YVtjaXJjbGVbaV1bMF0gKyBjaXJjbGVbaV1bMV0gKiByb3dzXTtcblxuICAgICAgcGl4ZWxWYWx1ZSA9IHBpeGVsVmFsdWUgKiByZXNjYWxlU2xvcGUgKyByZXNjYWxlSW50ZXJjZXB0O1xuXG4gICAgICBpZiAocGl4ZWxWYWx1ZSA+PSBnYXRlVmFsdWVzWzBdICYmIHBpeGVsVmFsdWUgPD0gZ2F0ZVZhbHVlc1sxXSkge1xuICAgICAgICBnYXRlZENpcmNsZUFycmF5LnB1c2goY2lyY2xlW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fY2xlYW5HYXRlZENpcmNsZShjaXJjbGUsIGdhdGVkQ2lyY2xlQXJyYXkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBzdG9yZSwgRVZFTlRTLCBpbXBvcnRJbnRlcm5hbE1vZHVsZSB9IGZyb20gJ2Nvcm5lcnN0b25lLXRvb2xzJztcbmltcG9ydCBjb3JuZXJzdG9uZSBmcm9tICdjb3JuZXJzdG9uZS1jb3JlJztcblxuaW1wb3J0IEJydXNoM0RUb29sIGZyb20gJy4vQnJ1c2gzRFRvb2wuanMnO1xuXG5jb25zdCBicnVzaE1vZHVsZSA9IHN0b3JlLm1vZHVsZXMuYnJ1c2g7XG5jb25zdCB7IGdldENpcmNsZSwgZHJhd0JydXNoUGl4ZWxzIH0gPSBpbXBvcnRJbnRlcm5hbE1vZHVsZSgndXRpbC9icnVzaFV0aWxzJyk7XG5cbmltcG9ydCBmbG9vZEZpbGwgZnJvbSAnLi9uLWRpbWVuc2lvbmFsLWZsb29kLWZpbGwuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcnVzaDNESFVHYXRlZFRvb2wgZXh0ZW5kcyBCcnVzaDNEVG9vbCB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb24gPSB7fSkge1xuICAgIGNvbnN0IGRlZmF1bHRDb25maWcgPSB7fTtcbiAgICBjb25zdCBpbml0aWFsQ29uZmlndXJhdGlvbiA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdENvbmZpZywgY29uZmlndXJhdGlvbik7XG5cbiAgICBzdXBlcihpbml0aWFsQ29uZmlndXJhdGlvbik7XG5cbiAgICB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uID0gaW5pdGlhbENvbmZpZ3VyYXRpb247XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgaGFuZGxlciBmb3IgTU9VU0VfRE9XTiBldmVudC5cbiAgICpcbiAgICogQG92ZXJyaWRlXG4gICAqIEBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZ0IC0gVGhlIGV2ZW50LlxuICAgKi9cbiAgcHJlTW91c2VEb3duQ2FsbGJhY2soZXZ0KSB7XG4gICAgdGhpcy5hY3RpdmVHYXRlUmFuZ2UgPSBicnVzaE1vZHVsZS5nZXR0ZXJzLmFjdGl2ZUdhdGVSYW5nZSgpO1xuXG4gICAgdGhpcy5fc3RhcnRQYWludGluZyhldnQpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogUGFpbnRzIHRoZSBkYXRhIHRvIHRoZSBjYW52YXMuXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHBhcmFtICB7T2JqZWN0fSBldnQgVGhlIGRhdGEgb2JqZWN0IGFzc29jaWF0ZWQgd2l0aCB0aGUgZXZlbnQuXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgX3BhaW50KGV2dCkge1xuICAgIGNvbnN0IGV2ZW50RGF0YSA9IGV2dC5kZXRhaWw7XG4gICAgY29uc3QgeyBlbGVtZW50LCBpbWFnZSB9ID0gZXZlbnREYXRhO1xuICAgIGNvbnN0IHsgcm93cywgY29sdW1ucyB9ID0gaW1hZ2U7XG4gICAgY29uc3QgeyB4LCB5IH0gPSBldmVudERhdGEuY3VycmVudFBvaW50cy5pbWFnZTtcblxuICAgIGlmICh4IDwgMCB8fCB4ID4gY29sdW1ucyB8fCB5IDwgMCB8fCB5ID4gcm93cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJhZGl1cyA9IGJydXNoTW9kdWxlLnN0YXRlLnJhZGl1cztcbiAgICBjb25zdCBwb2ludGVyQXJyYXkgPSB0aGlzLl9nYXRlQ2lyY2xlKGltYWdlLCBnZXRDaXJjbGUocmFkaXVzLCByb3dzLCBjb2x1bW5zLCB4LCB5KSk7XG5cbiAgICBjb25zdCB7IGxhYmVsbWFwM0QsIGN1cnJlbnRJbWFnZUlkSW5kZXgsIGFjdGl2ZUxhYmVsbWFwSW5kZXgsIHNob3VsZEVyYXNlIH0gPSB0aGlzLnBhaW50RXZlbnREYXRhO1xuXG4gICAgLy8gRHJhdyAvIEVyYXNlIHRoZSBhY3RpdmUgY29sb3IuXG4gICAgZHJhd0JydXNoUGl4ZWxzKHBvaW50ZXJBcnJheSwgbGFiZWxtYXAzRCwgY3VycmVudEltYWdlSWRJbmRleCwgY29sdW1ucywgc2hvdWxkRXJhc2UpO1xuXG4gICAgY29ybmVyc3RvbmUudHJpZ2dlckV2ZW50KGVsZW1lbnQsIEVWRU5UUy5MQUJFTE1BUF9NT0RJRklFRCwge1xuICAgICAgYWN0aXZlTGFiZWxtYXBJbmRleFxuICAgIH0pO1xuXG4gICAgY29ybmVyc3RvbmUudXBkYXRlSW1hZ2UoZXZ0LmRldGFpbC5lbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBfZ2F0ZUNpcmNsZSAtIEdpdmVuIGFuIGltYWdlIGFuZCBhIGJydXNoIGNpcmNsZSwgZ2F0ZSB0aGUgY2lyY2xlIGJldHdlZW5cbiAgICogdGhlIHNldCBnYXRlIHZhbHVlcywgYW5kIHRoZW4gY2xlYW51cCB0aGUgcmVzdWx0aW5nIG1hc2sgdXNpbmcgdGhlXG4gICAqIGhvbGVGaWxsIGFuZCBzdHJheVJlbW92ZSBwcm9wZXJ0aWVzIG9mIHRoZSBicnVzaCBtb2R1bGUuXG4gICAqXG4gICAqIEBwYXJhbSAge29iamVjdH0gaW1hZ2UgICBUaGUgY29ybmVyc3RvbmUgaW1hZ2UuXG4gICAqIEBwYXJhbSAge051bWJlcltdW119IGNpcmNsZSAgQW4gYXJyYXkgb2YgaW1hZ2UgcGl4ZWxzIGNvbnRhaW5lZCB3aXRoaW4gdGhlIGJydXNoXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgY2lyY2xlLlxuICAgKiBAcmV0dXJucyB7TnVtYmVyW11bXX0gIEFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIGdhdGVkL2NsZWFuZWQgcGl4ZWxzIHRvIGZpbGwuXG4gICAqL1xuICBfZ2F0ZUNpcmNsZShpbWFnZSwgY2lyY2xlKSB7XG4gICAgY29uc3Qgcm93cyA9IGltYWdlLnJvd3M7XG4gICAgY29uc3QgaW1hZ2VQaXhlbERhdGEgPSBpbWFnZS5nZXRQaXhlbERhdGEoKTtcbiAgICBjb25zdCBnYXRlUmFuZ2UgPSB0aGlzLmFjdGl2ZUdhdGVSYW5nZTtcbiAgICBjb25zdCByZXNjYWxlU2xvcGUgPSBpbWFnZS5zbG9wZSB8fCAxO1xuICAgIGNvbnN0IHJlc2NhbGVJbnRlcmNlcHQgPSBpbWFnZS5pbnRlcmNlcHQgfHwgMDtcblxuICAgIGNvbnN0IGdhdGVkQ2lyY2xlQXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2lyY2xlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcGl4ZWxWYWx1ZSA9IGltYWdlUGl4ZWxEYXRhW2NpcmNsZVtpXVswXSArIGNpcmNsZVtpXVsxXSAqIHJvd3NdO1xuXG4gICAgICBwaXhlbFZhbHVlID0gcGl4ZWxWYWx1ZSAqIHJlc2NhbGVTbG9wZSArIHJlc2NhbGVJbnRlcmNlcHQ7XG5cbiAgICAgIGlmIChwaXhlbFZhbHVlID49IGdhdGVSYW5nZVswXSAmJiBwaXhlbFZhbHVlIDw9IGdhdGVSYW5nZVsxXSkge1xuICAgICAgICBnYXRlZENpcmNsZUFycmF5LnB1c2goY2lyY2xlW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fY2xlYW5HYXRlZENpcmNsZShjaXJjbGUsIGdhdGVkQ2lyY2xlQXJyYXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIF9nZXRFZGdlUGl4ZWxzIC0gUmV0dXJucyB0aGUgaW5kaWNpZXMgb2YgdGhlIGVkZ2UgcGl4ZWxzIGZvciB0aGUgY2lyY3VsYXJcbiAgICogYnJ1c2ggZGF0YS5cbiAgICpcbiAgICogQHBhcmFtICB7TnVtYmVyW11bXX0gZGF0YSBUaGUgc3F1YXJlZC1jaXJjbGUgZGF0YSB3aGVyZSBhbGwgY2lyY2xlIG1lbWJlcnMgYXJlXG4gICAqICAgICAgICAgICAgICAgICAgICAgMCwgYW5kIHZhbHVlcyBvdXRzaWRlIHRoZSBjaXJjbGUgYXJlIC0xXG4gICAqIEByZXR1cm5zIHtOdW1iZXJbXVtdfSBBbiBhcnJheSBvZiBwb3NpdGlvbnMgb2YgdGhlIGNpcmNsZSBlZGdlIHBpeGVscy5cbiAgICovXG4gIF9nZXRFZGdlUGl4ZWxzKGRhdGEpIHtcbiAgICBjb25zdCBlZGdlUGl4ZWxzID0gW107XG4gICAgY29uc3QgeFNpemUgPSBkYXRhLmxlbmd0aDtcbiAgICBjb25zdCB5U2l6ZSA9IGRhdGFbMF0ubGVuZ3RoO1xuXG4gICAgLy8gZmlyc3QgYW5kIGxhc3Qgcm93IGFkZCBhbGwgb2YgdG9wIGFuZCBib3R0b20gd2hpY2ggYXJlIGNpcmNsZSBtZW1iZXJzLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGRhdGFbaV1bMF0pIHtcbiAgICAgICAgZWRnZVBpeGVscy5wdXNoKFtpLCAwXSk7XG4gICAgICAgIGVkZ2VQaXhlbHMucHVzaChbaSwgeVNpemUgLSAxXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWxsIG90aGVyIHJvd3MgLSBGaW5kIGZpcnN0IGNpcmNsZSBtZW1iZXIsIGFuZCB1c2UgaXRzIHBvc2l0aW9uIHRvIGFkZFxuICAgIC8vIFRoZSBmaXJzdCBhbmQgbGFzdCBjaXJjbGUgbWVtYmVyIG9mIHRoYXQgcm93LlxuICAgIGZvciAobGV0IGogPSAxOyBqIDwgeVNpemUgLSAxOyBqKyspIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZGF0YVtpXVtqXSkge1xuICAgICAgICAgIGVkZ2VQaXhlbHMucHVzaChbaSwgal0pO1xuICAgICAgICAgIGVkZ2VQaXhlbHMucHVzaChbeFNpemUgLSAxIC0gaSwgal0pO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWRnZVBpeGVscztcbiAgfVxuXG4gIC8qKlxuICAgKiBfY2xlYW5HYXRlZENpcmNsZSAtIENsZWFuIHRoZSBIVSBnYXRlZCBjaXJjbGUgdXNpbmcgdGhlIGhvbGVGaWxsIGFuZFxuICAgKiBzdHJheVJlbW92ZSBwcm9wZXJ0aWVzIG9mIHRoZSBicnVzaCBtb2R1bGUuXG4gICAqXG4gICAqIEBwYXJhbSAge051bWJlcltdW119IGNpcmNsZSAgICAgQW4gYXJyYXkgb2YgdGhlIHBpeGVsIGluZGljaWVzIHdpdGhpbiB0aGVcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicnVzaCBjaXJjbGUuXG4gICAqIEBwYXJhbSAge051bWJlcltdW119IGdhdGVkQ2lyY2xlQXJyYXkgQW4gYXJyYXkgb2YgdGhlIHBpeGVsIGluZGljaWVzIHdpdGhpblxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBnYXRlIHJhbmdlLlxuICAgKiBAcmV0dXJucyB7TnVtYmVyW11bXX0gICAgICAgICAgICAgICAgICBUaGUgY2xlYW5lZCBhcnJheSBvZiBwaXhlbCBpbmRpY2llcy5cbiAgICovXG4gIF9jbGVhbkdhdGVkQ2lyY2xlKGNpcmNsZSwgZ2F0ZWRDaXJjbGVBcnJheSkge1xuICAgIGNvbnN0IHsgbWF4LCBtaW4gfSA9IHRoaXMuX2dldEJvdW5kaW5nQm94T2ZDaXJjbGUoY2lyY2xlKTtcblxuICAgIGNvbnN0IHhTaXplID0gbWF4WzBdIC0gbWluWzBdICsgMTtcbiAgICBjb25zdCB5U2l6ZSA9IG1heFsxXSAtIG1pblsxXSArIDE7XG5cbiAgICBjb25zdCBkYXRhID0gdGhpcy5fYm94R2F0ZWRDaXJjbGUoY2lyY2xlLCBnYXRlZENpcmNsZUFycmF5LCBtaW4sIHhTaXplLCB5U2l6ZSk7XG5cbiAgICAvLyBEZWZpbmUgb3VyIGdldHRlciBmb3IgYWNjZXNzaW5nIHRoZSBkYXRhIHN0cnVjdHVyZS5cbiAgICBmdW5jdGlvbiBnZXR0ZXIoeCwgeSkge1xuICAgICAgcmV0dXJuIGRhdGFbeF1beV07XG4gICAgfVxuXG4gICAgdGhpcy5fZmxvb2RGaWxsRW1wdHlSZWdpb25zRnJvbUVkZ2VzKGRhdGEsIGdldHRlcik7XG5cbiAgICBjb25zdCB7IGhvbGVzLCByZWdpb25zIH0gPSB0aGlzLl9maW5kSG9sZXNBbmRSZWdpb25zKGNpcmNsZSwgZGF0YSwgZ2V0dGVyLCBtaW4pO1xuXG4gICAgY29uc3QgbGFyZ2VzdFJlZ2lvbkFyZWEgPSB0aGlzLl9nZXRBcmVhT2ZMYXJnZXN0UmVnaW9uKHJlZ2lvbnMpO1xuXG4gICAgLy8gRGVsZXRlIGFueSByZWdpb24gb3V0c2lkZSB0aGUgYHN0cmF5UmVtb3ZlYCB0aHJlc2hvbGQuXG4gICAgZm9yIChsZXQgciA9IDA7IHIgPCByZWdpb25zLmxlbmd0aDsgcisrKSB7XG4gICAgICBjb25zdCByZWdpb24gPSByZWdpb25zW3JdO1xuXG4gICAgICBpZiAocmVnaW9uLmxlbmd0aCA8PSAoYnJ1c2hNb2R1bGUuc3RhdGUuc3RyYXlSZW1vdmUgLyAxMDAuMCkgKiBsYXJnZXN0UmVnaW9uQXJlYSkge1xuICAgICAgICBmb3IgKGxldCBwID0gMDsgcCA8IHJlZ2lvbi5sZW5ndGg7IHArKykge1xuICAgICAgICAgIGRhdGFbcmVnaW9uW3BdWzBdXVtyZWdpb25bcF1bMV1dID0gMztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZpbGwgaW4gYW55IGhvbGVzIHNtYWxsZXIgdGhhbiB0aGUgYGhvbGVGaWxsYCB0aHJlc2hvbGQuXG4gICAgZm9yIChsZXQgciA9IDA7IHIgPCBob2xlcy5sZW5ndGg7IHIrKykge1xuICAgICAgY29uc3QgaG9sZSA9IGhvbGVzW3JdO1xuXG4gICAgICBpZiAoaG9sZS5sZW5ndGggPD0gKGJydXNoTW9kdWxlLnN0YXRlLmhvbGVGaWxsIC8gMTAwLjApICogbGFyZ2VzdFJlZ2lvbkFyZWEpIHtcbiAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCBob2xlLmxlbmd0aDsgcCsrKSB7XG4gICAgICAgICAgZGF0YVtob2xlW3BdWzBdXVtob2xlW3BdWzFdXSA9IDU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBmaWxsZWRHYXRlZENpcmNsZUFycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHhTaXplOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgeVNpemU7IGorKykge1xuICAgICAgICBpZiAoZGF0YVtpXVtqXSA9PT0gNSkge1xuICAgICAgICAgIGZpbGxlZEdhdGVkQ2lyY2xlQXJyYXkucHVzaChbaSArIG1pblswXSwgaiArIG1pblsxXV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbGxlZEdhdGVkQ2lyY2xlQXJyYXk7XG4gIH1cblxuICAvKipcbiAgICogX2dldEJvdW5kaW5nQm94T2ZDaXJjbGUgLSBSZXR1cm5zIHR3byBwb2ludHMgZGVmaW5pbmcgdGhlIGV4dGVudCBvZiB0aGUgY2lyY2xlLlxuICAgKlxuICAgKiBAcGFyYW0gIHtudW1iZXJbXVtdfSBjaXJjbGUgIEFuIGFycmF5IG9mIHRoZSBwaXhlbCBpbmRpY2llcyB3aXRoaW4gdGhlIGJydXNoIGNpcmNsZS5cbiAgICogQHJldHVybnMge29iamVjdH0gICAgICAgIFRoZSBtaW5pbXVtIGFuZCBtYXhpbXVtIG9mIHRoZSBleHRlbnQuXG4gICAqL1xuICBfZ2V0Qm91bmRpbmdCb3hPZkNpcmNsZShjaXJjbGUpIHtcbiAgICBjb25zdCBtYXggPSBbY2lyY2xlWzBdWzBdLCBjaXJjbGVbMF1bMV1dO1xuICAgIGNvbnN0IG1pbiA9IFtjaXJjbGVbMF1bMF0sIGNpcmNsZVswXVsxXV07XG5cbiAgICBmb3IgKGxldCBwID0gMDsgcCA8IGNpcmNsZS5sZW5ndGg7IHArKykge1xuICAgICAgY29uc3QgW2ksIGpdID0gY2lyY2xlW3BdO1xuXG4gICAgICBpZiAoaSA+IG1heFswXSkge1xuICAgICAgICBtYXhbMF0gPSBpO1xuICAgICAgfSBlbHNlIGlmIChpIDwgbWluWzBdKSB7XG4gICAgICAgIG1pblswXSA9IGk7XG4gICAgICB9XG5cbiAgICAgIGlmIChqID4gbWF4WzFdKSB7XG4gICAgICAgIG1heFsxXSA9IGo7XG4gICAgICB9IGVsc2UgaWYgKGogPCBtaW5bMV0pIHtcbiAgICAgICAgbWluWzFdID0gajtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBtYXgsIG1pbiB9O1xuICB9XG5cbiAgLyoqXG4gICAqIF9ib3hHYXRlZENpcmNsZSAtIEdlbmVyYXRlcyBhIHJlY3Rhbmd1bGFyIGRhdGFzZXQgZnJvbSB0aGUgYnJ1c2ggY2lyY2xlXG4gICAqICAgICAgICAgICAgICAgICAgIGZvciBlZmZpY2llbnQgZmxvb2QgZmlsbC9jbGVhbmluZy5cbiAgICpcbiAgICogQHBhcmFtICB7dHlwZX0gY2lyY2xlICAgICAgICAgICBBbiBhcnJheSBvZiB0aGUgcGl4ZWwgaW5kaWNpZXMgd2l0aGluIHRoZSBicnVzaCBjaXJjbGUuXG4gICAqIEBwYXJhbSAge3R5cGV9IGdhdGVkQ2lyY2xlQXJyYXkgVGhlIGNpcmNsZSBhcnJheSB3aXRoIHRoZSBnYXRlIGFwcGxpZWQuXG4gICAqIEBwYXJhbSAge3R5cGV9IG1pbiAgICAgICAgICAgICAgVGhlIGxvY2F0aW9uIG9mIHRoZSB0b3AgbGVmdCBwaXhlbCBvZiB0aGVcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZWQgZGF0YXNldCB3aXRoIHJlc3BlY3QgdG8gdGhlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJseWluZyBpbWFnZSBkYXRhLlxuICAgKiBAcGFyYW0gIHt0eXBlfSB4U2l6ZSAgICAgICAgICAgIFRoZSB4IHNpemUgb2YgdGhlIGdlbmVyYXRlZCBib3guXG4gICAqIEBwYXJhbSAge3R5cGV9IHlTaXplICAgICAgICAgICAgVGhlIHkgc2l6ZSBvZiB0aGUgZ2VuZXJhdGVkIGJveC5cbiAgICogQHJldHVybnMge251bWJlcltdW119ICAgICAgICAgICBUaGUgZGF0YSB3aXRoIHBpeGVsIFswLDBdIGNlbnRlcmVkIG9uIG1pbixcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgY2lyY2xlIG1hcmtlZCB3aXRoIDEgZm9yIHVub2NjdXBpZWQsIDJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3Igb2NjdXBpZWQgYW5kIDAgZm9yIG91dHNpZGUgb2YgdGhlIGNpcmNsZSBib3VuZHMuXG4gICAqL1xuICBfYm94R2F0ZWRDaXJjbGUoY2lyY2xlLCBnYXRlZENpcmNsZUFycmF5LCBtaW4sIHhTaXplLCB5U2l6ZSkge1xuICAgIGNvbnN0IGRhdGEgPSBbXTtcblxuICAgIC8vIEZpbGwgaW4gc3F1YXJlIGFzIDAgKG91dCBvZiBib3VuZHMvaWdub3JlKS5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHhTaXplOyBpKyspIHtcbiAgICAgIGRhdGFbaV0gPSBuZXcgVWludDhDbGFtcGVkQXJyYXkoeVNpemUpO1xuICAgIH1cblxuICAgIC8vIGZpbGwgY2lyY2xlIGluIGFzIDEuXG4gICAgZm9yIChsZXQgcCA9IDA7IHAgPCBjaXJjbGUubGVuZ3RoOyBwKyspIHtcbiAgICAgIGNvbnN0IGkgPSBjaXJjbGVbcF1bMF0gLSBtaW5bMF07XG4gICAgICBjb25zdCBqID0gY2lyY2xlW3BdWzFdIC0gbWluWzFdO1xuXG4gICAgICBkYXRhW2ldW2pdID0gMTtcbiAgICB9XG5cbiAgICAvLyBmaWxsIGdhdGVkIHJlZ2lvbiBhcyAyLlxuICAgIGZvciAobGV0IHAgPSAwOyBwIDwgZ2F0ZWRDaXJjbGVBcnJheS5sZW5ndGg7IHArKykge1xuICAgICAgY29uc3QgaSA9IGdhdGVkQ2lyY2xlQXJyYXlbcF1bMF0gLSBtaW5bMF07XG4gICAgICBjb25zdCBqID0gZ2F0ZWRDaXJjbGVBcnJheVtwXVsxXSAtIG1pblsxXTtcblxuICAgICAgZGF0YVtpXVtqXSA9IDI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgICogX2Zsb29kRmlsbEVtcHR5UmVnaW9uc0Zyb21FZGdlcyAtIEZsb29kIGZpbGxzIGVtcHR5IHJlZ2lvbnMgd2hpY2ggdG91Y2ggdGhlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlIG9mIHRoZSBjaXJjbGUgd2l0aCB0aGUgdmFsdWUgMy5cbiAgICpcbiAgICogQHBhcmFtICB7bnVtYmVyW11bXX0gZGF0YSBUaGUgZGF0YSB0byBmbG9vZCBmaWxsLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBnZXR0ZXIgVGhlIGdldHRlciBmdW5jdGlvbiBmbG9vZEZpbGwgdXNlcyB0byBhY2Nlc3MgYXJyYXlcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzLlxuICAgKiBAbW9kaWZpZXMgZGF0YVxuICAgKiBAcmV0dXJucyB7bnVsbH1cbiAgICovXG4gIF9mbG9vZEZpbGxFbXB0eVJlZ2lvbnNGcm9tRWRnZXMoZGF0YSwgZ2V0dGVyKSB7XG4gICAgY29uc3QgZWRnZVBpeGVscyA9IHRoaXMuX2dldEVkZ2VQaXhlbHMoZGF0YSk7XG5cbiAgICBmb3IgKGxldCBwID0gMDsgcCA8IGVkZ2VQaXhlbHMubGVuZ3RoOyBwKyspIHtcbiAgICAgIGNvbnN0IGkgPSBlZGdlUGl4ZWxzW3BdWzBdO1xuICAgICAgY29uc3QgaiA9IGVkZ2VQaXhlbHNbcF1bMV07XG5cbiAgICAgIGlmIChkYXRhW2ldW2pdID09PSAxKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGZsb29kRmlsbCh7XG4gICAgICAgICAgZ2V0dGVyOiBnZXR0ZXIsXG4gICAgICAgICAgc2VlZDogW2ksIGpdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGZsb29kZWQgPSByZXN1bHQuZmxvb2RlZDtcblxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGZsb29kZWQubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICBkYXRhW2Zsb29kZWRba11bMF1dW2Zsb29kZWRba11bMV1dID0gMztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBfZmluZEhvbGVzQW5kUmVnaW9ucyAtIEZpbmRzIGFsbCB0aGUgaG9sZXMgYW5kIHJlZ2lvbnMgYW5kIHJldHVybnMgdGhlaXJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnMgd2l0aGluIHRoZSAyRCBkYXRhIHNldC4gU2V0cyB0aGUgdmFsdWUgb2ZcbiAgICogICAgICAgICAgICAgICAgICAgICAgICBob2xlcyBhbmQgcmVnaW9ucyB0byA0IGFuZCA1LCByZXNwZWN0aXZlbHkuXG4gICAqXG4gICAqIEBwYXJhbSAge251bWJlcltdW119IGNpcmNsZSBBbiBhcnJheSBvZiB0aGUgcGl4ZWwgaW5kaWNpZXMgd2l0aGluIHRoZSBicnVzaCBjaXJjbGUuXG4gICAqIEBwYXJhbSAge251bWJlcltdW119IGRhdGEgICBUaGUgZGF0YSBzZXQuXG4gICAqIEBwYXJhbSAge2Z1bmN0aW9ufSAgIGdldHRlciBUaGUgZ2V0dGVyIGZ1bmN0aW9uIGZsb29kRmlsbCB1c2VzIHRvIGFjY2VzcyBhcnJheVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMuXG4gICAqIEBwYXJhbSAge251bWJlcltdfSAgIG1pbiAgICBUaGUgbG9jYXRpb24gb2YgdGhlIHRvcCBsZWZ0IHBpeGVsIG9mIHRoZSBkYXRhc2V0XG4gICAqICAgICAgICAgICAgICAgICAgICAgICB3aXRoIHJlc3BlY3QgdG8gdGhlIHVuZGVybHlpbmcgaW1hZ2UgZGF0YS5cbiAgICogQHJldHVybnMge29iamVjdH0gICAgQW4gb2JqZWN0IGNvbnRhaW5pbmcgYXJyYXlzIG9mIHRoZSBvY2N1cGF0aW9uIG9mIGFsbFxuICAgKiAgICAgICAgICAgICAgICAgICAgICByZWdpb25zIGFuZCBob2xlcyBpbiB0aGUgZGF0YXNldC5cbiAgICovXG4gIF9maW5kSG9sZXNBbmRSZWdpb25zKGNpcmNsZSwgZGF0YSwgZ2V0dGVyLCBtaW4pIHtcbiAgICBjb25zdCBob2xlcyA9IFtdO1xuICAgIGNvbnN0IHJlZ2lvbnMgPSBbXTtcblxuICAgIC8vIEZpbmQgZWFjaCBob2xlIGFuZCBwYWludCB0aGVtIDMuXG4gICAgLy8gRmluZCBjb250aWd1b3VzIHJlZ2lvbnMgYW5kIHBhaW50IHRoZW0gNC5cbiAgICBmb3IgKGxldCBwID0gMDsgcCA8IGNpcmNsZS5sZW5ndGg7IHArKykge1xuICAgICAgY29uc3QgaSA9IGNpcmNsZVtwXVswXSAtIG1pblswXTtcbiAgICAgIGNvbnN0IGogPSBjaXJjbGVbcF1bMV0gLSBtaW5bMV07XG5cbiAgICAgIGlmIChkYXRhW2ldW2pdID09PSAxKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGZsb29kRmlsbCh7XG4gICAgICAgICAgZ2V0dGVyOiBnZXR0ZXIsXG4gICAgICAgICAgc2VlZDogW2ksIGpdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGZsb29kZWQgPSByZXN1bHQuZmxvb2RlZDtcblxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGZsb29kZWQubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICBkYXRhW2Zsb29kZWRba11bMF1dW2Zsb29kZWRba11bMV1dID0gNDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhvbGVzLnB1c2goZmxvb2RlZCk7XG4gICAgICB9IGVsc2UgaWYgKGRhdGFbaV1bal0gPT09IDIpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZmxvb2RGaWxsKHtcbiAgICAgICAgICBnZXR0ZXI6IGdldHRlcixcbiAgICAgICAgICBzZWVkOiBbaSwgal1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZmxvb2RlZCA9IHJlc3VsdC5mbG9vZGVkO1xuXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZmxvb2RlZC5sZW5ndGg7IGsrKykge1xuICAgICAgICAgIGRhdGFbZmxvb2RlZFtrXVswXV1bZmxvb2RlZFtrXVsxXV0gPSA1O1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaW9ucy5wdXNoKGZsb29kZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IGhvbGVzLCByZWdpb25zIH07XG4gIH1cblxuICAvKipcbiAgICogX2dldEFyZWFPZkxhcmdlc3RSZWdpb24gLSBSZXR1cm5zIHRoZSBudW1iZXIgb2YgcGl4ZWxzIGluIHRoZSBsYXJnZXN0XG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaW9uIG9mIGEgbGlzdCBvZiByZWdpb25zLlxuICAgKlxuICAgKiBAcGFyYW0gIHtudW1iZXJbXVtdW119IHJlZ2lvbnMgQW4gYXJyYXkgb2YgcmVnaW9ucyBvZiAyRCBwb2ludHMuXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9ICAgICAgICBUaGUgYXJlYSBvZiB0aGUgbGFyZ2VzdCByZWdpb24gaW4gcGl4ZWxzLlxuICAgKi9cbiAgX2dldEFyZWFPZkxhcmdlc3RSZWdpb24ocmVnaW9ucykge1xuICAgIGxldCBsYXJnZXN0UmVnaW9uQXJlYSA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlZ2lvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWdpb25zW2ldLmxlbmd0aCA+IGxhcmdlc3RSZWdpb25BcmVhKSB7XG4gICAgICAgIGxhcmdlc3RSZWdpb25BcmVhID0gcmVnaW9uc1tpXS5sZW5ndGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhcmdlc3RSZWdpb25BcmVhO1xuICB9XG59XG4iLCJpbXBvcnQgeyBCcnVzaFRvb2wsIHN0b3JlIH0gZnJvbSAnY29ybmVyc3RvbmUtdG9vbHMnO1xuaW1wb3J0IGdlbmVyYXRlQnJ1c2hNZXRhZGF0YSBmcm9tICcuLi91dGlsL2dlbmVyYXRlQnJ1c2hNZXRhZGF0YS5qcyc7XG5cbmNvbnN0IGJydXNoTW9kdWxlID0gc3RvcmUubW9kdWxlcy5icnVzaDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJ1c2gzRFRvb2wgZXh0ZW5kcyBCcnVzaFRvb2wge1xuICBjb25zdHJ1Y3Rvcihjb25maWd1cmF0aW9uID0ge30pIHtcbiAgICBjb25zdCBkZWZhdWx0Q29uZmlnID0ge307XG4gICAgY29uc3QgaW5pdGlhbENvbmZpZ3VyYXRpb24gPSBPYmplY3QuYXNzaWduKGRlZmF1bHRDb25maWcsIGNvbmZpZ3VyYXRpb24pO1xuXG4gICAgc3VwZXIoaW5pdGlhbENvbmZpZ3VyYXRpb24pO1xuXG4gICAgdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbiA9IGluaXRpYWxDb25maWd1cmF0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpc2UgcGFpbnRpbmcgd2l0aCBiYXNlQnJ1c2hUb29sXG4gICAqXG4gICAqIEBvdmVycmlkZSBAcHJvdGVjdGVkXG4gICAqIEBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZ0IC0gVGhlIGV2ZW50LlxuICAgKi9cbiAgX3N0YXJ0UGFpbnRpbmcoZXZ0KSB7XG4gICAgY29uc3QgZXZlbnREYXRhID0gZXZ0LmRldGFpbDtcbiAgICBjb25zdCBlbGVtZW50ID0gZXZlbnREYXRhLmVsZW1lbnQ7XG5cbiAgICBjb25zdCB7IGxhYmVsbWFwM0QsIGN1cnJlbnRJbWFnZUlkSW5kZXgsIGFjdGl2ZUxhYmVsbWFwSW5kZXggfSA9IGJydXNoTW9kdWxlLmdldHRlcnMuZ2V0QW5kQ2FjaGVMYWJlbG1hcDJEKGVsZW1lbnQpO1xuXG4gICAgY29uc3Qgc2hvdWxkRXJhc2UgPSB0aGlzLl9pc0N0cmxEb3duKGV2ZW50RGF0YSkgfHwgdGhpcy5jb25maWd1cmF0aW9uLmFsd2F5c0VyYXNlT25DbGljaztcblxuICAgIHRoaXMucGFpbnRFdmVudERhdGEgPSB7XG4gICAgICBsYWJlbG1hcDNELFxuICAgICAgY3VycmVudEltYWdlSWRJbmRleCxcbiAgICAgIGFjdGl2ZUxhYmVsbWFwSW5kZXgsXG4gICAgICBzaG91bGRFcmFzZVxuICAgIH07XG5cbiAgICBjb25zdCBzZWdtZW50SW5kZXggPSBsYWJlbG1hcDNELmFjdGl2ZVNlZ21lbnRJbmRleDtcbiAgICBsZXQgbWV0YWRhdGEgPSBsYWJlbG1hcDNELm1ldGFkYXRhW3NlZ21lbnRJbmRleF07XG5cbiAgICBpZiAoIW1ldGFkYXRhKSB7XG4gICAgICBtZXRhZGF0YSA9IGdlbmVyYXRlQnJ1c2hNZXRhZGF0YSgnVW5uYW1lZCBTZWdtZW50Jyk7XG5cbiAgICAgIGJydXNoTW9kdWxlLnNldHRlcnMubWV0YWRhdGEoZWxlbWVudCwgYWN0aXZlTGFiZWxtYXBJbmRleCwgc2VnbWVudEluZGV4LCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgLy8gTWV0YWRhdGEgYXNzaWduZWQsIHN0YXJ0IGRyYXdpbmcuXG4gICAgaWYgKGV2ZW50RGF0YS5jdXJyZW50UG9pbnRzKSB7XG4gICAgICB0aGlzLl9wYWludChldnQpO1xuICAgIH1cbiAgICB0aGlzLl9kcmF3aW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9zdGFydExpc3RlbmluZ0Zvck1vdXNlVXAoZWxlbWVudCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEZyZWVoYW5kUm9pU2N1bHB0b3JUb29sLCB0b29sQ29sb3JzLCBzdG9yZSwgZ2V0VG9vbFN0YXRlIH0gZnJvbSAnY29ybmVyc3RvbmUtdG9vbHMnO1xuaW1wb3J0IHsgdXBkYXRlSW1hZ2UgfSBmcm9tICdjb3JuZXJzdG9uZS1jb3JlJztcbmltcG9ydCBpbnRlcnBvbGF0ZSBmcm9tICcuLi91dGlsL2ZyZWVoYW5kSW50ZXJwb2xhdGUvaW50ZXJwb2xhdGUuanMnO1xuXG5jb25zdCB7IG1vZHVsZXMsIHN0YXRlIH0gPSBzdG9yZTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJlZWhhbmRSb2kzRFNjdWxwdG9yVG9vbCBleHRlbmRzIEZyZWVoYW5kUm9pU2N1bHB0b3JUb29sIHtcbiAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbiA9IHt9KSB7XG4gICAgY29uc3QgZGVmYXVsdENvbmZpZyA9IHtcbiAgICAgIGNvbmZpZ3VyYXRpb246IGdldERlZmF1bHRGcmVlaGFuZFNjdWxwdGVyTW91c2VUb29sQ29uZmlndXJhdGlvbigpXG4gICAgfTtcbiAgICBjb25zdCBpbml0aWFsQ29uZmlndXJhdGlvbiA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdENvbmZpZywgY29uZmlndXJhdGlvbik7XG5cbiAgICBzdXBlcihpbml0aWFsQ29uZmlndXJhdGlvbik7XG5cbiAgICAvLyBDcmVhdGUgYm91bmQgZnVuY3Rpb25zIGZvciBwcml2YXRlIGV2ZW50IGxvb3AuXG4gICAgdGhpcy5hY3RpdmVNb3VzZVVwQ2FsbGJhY2sgPSB0aGlzLmFjdGl2ZU1vdXNlVXBDYWxsYmFjay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdCB0aGUgZnJlZWhhbmQgdG9vbCB0byBiZSBlZGl0ZWQuIERvbid0IGFsbG93IHNlbGVjdGluZyBvZiBsb2NrZWRcbiAgICogUk9JQ29udG91cnMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudERhdGEgLSBEYXRhIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggdGhlIGV2ZW50LlxuICAgKi9cbiAgX3NlbGVjdEZyZWVoYW5kVG9vbChldmVudERhdGEpIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb247XG4gICAgY29uc3QgZWxlbWVudCA9IGV2ZW50RGF0YS5lbGVtZW50O1xuICAgIGNvbnN0IGNsb3Nlc3RUb29sSW5kZXggPSB0aGlzLl9nZXRDbG9zZXN0RnJlZWhhbmRUb29sT25FbGVtZW50KGVsZW1lbnQsIGV2ZW50RGF0YSk7XG5cbiAgICBpZiAoY2xvc2VzdFRvb2xJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdG9vbFN0YXRlID0gZ2V0VG9vbFN0YXRlKGVsZW1lbnQsIHRoaXMucmVmZXJlbmNlZFRvb2xOYW1lKTtcblxuICAgIGNvbnN0IHRvb2xEYXRhID0gdG9vbFN0YXRlLmRhdGFbY2xvc2VzdFRvb2xJbmRleF07XG5cbiAgICBjb25zdCBpc0xvY2tlZCA9IHRvb2xEYXRhLnJlZmVyZW5jZWRTdHJ1Y3R1cmVTZXQuaXNMb2NrZWQ7XG5cbiAgICBpZiAoaXNMb2NrZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25maWcuaG92ZXJDb2xvciA9IHRvb2xEYXRhLnJlZmVyZW5jZWRST0lDb250b3VyLmNvbG9yO1xuXG4gICAgY29uZmlnLmN1cnJlbnRUb29sID0gY2xvc2VzdFRvb2xJbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBoYW5kbGVyIGZvciBNT1VTRV9VUCBkdXJpbmcgdGhlIGFjdGl2ZSBsb29wLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZ0IC0gVGhlIGV2ZW50LlxuICAgKi9cbiAgX2FjdGl2ZUVuZChldnQpIHtcbiAgICBjb25zdCBldmVudERhdGEgPSBldnQuZGV0YWlsO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudERhdGEuZWxlbWVudDtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb247XG5cbiAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZTtcblxuICAgIHN0YXRlLmlzTXVsdGlQYXJ0VG9vbEFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5fZ2V0TW91c2VMb2NhdGlvbihldmVudERhdGEpO1xuICAgIHRoaXMuX2ludmFsaWRhdGVUb29sRGF0YShldmVudERhdGEpO1xuXG4gICAgY29uZmlnLm1vdXNlVXBSZW5kZXIgPSB0cnVlO1xuXG4gICAgdGhpcy5fZGVhY3RpdmF0ZVNjdWxwdChlbGVtZW50KTtcblxuICAgIGNvbnN0IHRvb2xEYXRhID0gZ2V0VG9vbFN0YXRlKGVsZW1lbnQsIHRoaXMucmVmZXJlbmNlZFRvb2xOYW1lKTtcbiAgICBjb25zdCBkYXRhID0gdG9vbERhdGEuZGF0YVtjb25maWcuY3VycmVudFRvb2xdO1xuXG4gICAgaWYgKG1vZHVsZXMuZnJlZWhhbmQzRC5nZXR0ZXJzLmludGVycG9sYXRlKCkpIHtcbiAgICAgIGludGVycG9sYXRlKGRhdGEpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgaW1hZ2VcbiAgICB1cGRhdGVJbWFnZShldmVudERhdGEuZWxlbWVudCk7XG5cbiAgICBwcmV2ZW50UHJvcGFnYXRpb24oZXZ0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZhbGlkYXRlIHRoZSBmcmVlaGFuZCB0b29sIGRhdGEsIHRpcmdnZXJpbmcgcmUtY2FsY3VsYXRpb24gb2Ygc3RhdGlzdGljcy5cbiAgICpcbiAgICogQHByaXZhdGUgQG92ZXJyaWRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudERhdGEgLSBEYXRhIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggdGhlIGV2ZW50LlxuICAgKi9cbiAgX2ludmFsaWRhdGVUb29sRGF0YShldmVudERhdGEpIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb247XG4gICAgY29uc3QgZWxlbWVudCA9IGV2ZW50RGF0YS5lbGVtZW50O1xuICAgIGNvbnN0IHRvb2xEYXRhID0gZ2V0VG9vbFN0YXRlKGVsZW1lbnQsIHRoaXMucmVmZXJlbmNlZFRvb2xOYW1lKTtcbiAgICBjb25zdCBkYXRhID0gdG9vbERhdGEuZGF0YVtjb25maWcuY3VycmVudFRvb2xdO1xuXG4gICAgZGF0YS5pbnZhbGlkYXRlZCA9IHRydWU7XG4gICAgZGF0YS5pbnRlcnBvbGF0ZWQgPSBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGRlZmF1bHQgZnJlZWhhbmRTY3VscHRlck1vdXNlVG9vbCBjb25maWd1cmF0aW9uLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIGRlZmF1bHQgY29uZmlndXJhdGlvbiBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGdldERlZmF1bHRGcmVlaGFuZFNjdWxwdGVyTW91c2VUb29sQ29uZmlndXJhdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICBtb3VzZUxvY2F0aW9uOiB7XG4gICAgICBoYW5kbGVzOiB7XG4gICAgICAgIHN0YXJ0OiB7XG4gICAgICAgICAgaGlnaGxpZ2h0OiB0cnVlLFxuICAgICAgICAgIGFjdGl2ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBtaW5TcGFjaW5nOiAxLFxuICAgIGN1cnJlbnRUb29sOiBudWxsLFxuICAgIGRyYWdDb2xvcjogdG9vbENvbG9ycy5nZXRBY3RpdmVDb2xvcigpLFxuICAgIGhvdmVyQ29sb3I6IHRvb2xDb2xvcnMuZ2V0VG9vbENvbG9yKCksXG5cbiAgICAvKiAtLS0gSG92ZXIgb3B0aW9ucyAtLS1cbiAgICBzaG93Q3Vyc29yT25Ib3ZlcjogICAgICAgIFNob3dzIGEgcHJldmlldyBvZiB0aGUgc2N1bHB0aW5nIHJhZGl1cyBvbiBob3Zlci5cbiAgICBsaW1pdFJhZGl1c091dHNpZGVSZWdpb246IExpbWl0IG1heCB0b29sc2l6ZSBvdXRzaWRlIHRoZSBzdWJqZWN0IFJPSSBiYXNlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb24gc3ViamVjdCBST0kgYXJlYS5cbiAgICBob3ZlckN1cnNvckZhZGVBbHBoYTogICAgIEFscGhhIHRvIGZhZGUgdG8gd2hlbiB0b29sIHZlcnkgZGlzdGFudCBmcm9tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0IFJPSS5cbiAgICBob3ZlckN1cnNvckZhZGVEaXN0YW5jZTogIERpc3RhbmNlIGZyb20gUk9JIGluIHdoaWNoIHRvIGZhZGUgdGhlIGhvdmVyQ3Vyc29yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaW4gdW5pdHMgb2YgcmFkaWkpLlxuICAgICovXG4gICAgc2hvd0N1cnNvck9uSG92ZXI6IHRydWUsXG4gICAgbGltaXRSYWRpdXNPdXRzaWRlUmVnaW9uOiB0cnVlLFxuICAgIGhvdmVyQ3Vyc29yRmFkZUFscGhhOiAwLjUsXG4gICAgaG92ZXJDdXJzb3JGYWRlRGlzdGFuY2U6IDEuMlxuICB9O1xufVxuXG5mdW5jdGlvbiBwcmV2ZW50UHJvcGFnYXRpb24oZXZ0KSB7XG4gIGV2dC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICBldnQucHJldmVudERlZmF1bHQoKTtcbn1cbiIsImltcG9ydCB7IG1ldGFEYXRhLCB1cGRhdGVJbWFnZSwgcGl4ZWxUb0NhbnZhcywgZ2V0RW5hYmxlZEVsZW1lbnQsIGdldFBpeGVscyB9IGZyb20gJ2Nvcm5lcnN0b25lLWNvcmUnO1xuaW1wb3J0IHsgcG9pbnQgfSBmcm9tICdjb3JuZXJzdG9uZS1tYXRoJztcbmltcG9ydCB7XG4gIGltcG9ydEludGVybmFsTW9kdWxlLFxuICBGcmVlaGFuZFJvaVRvb2wsXG4gIGdldFRvb2xTdGF0ZSxcbiAgc3RvcmUsXG4gIHRvb2xTdHlsZSxcbiAgdG9vbENvbG9ycyxcbiAgRVZFTlRTXG59IGZyb20gJ2Nvcm5lcnN0b25lLXRvb2xzJztcblxuaW1wb3J0IGdlbmVyYXRlVUlEIGZyb20gJy4uL3V0aWwvZ2VuZXJhdGVVSUQuanMnO1xuaW1wb3J0IGludGVycG9sYXRlIGZyb20gJy4uL3V0aWwvZnJlZWhhbmRJbnRlcnBvbGF0ZS9pbnRlcnBvbGF0ZS5qcyc7XG5pbXBvcnQgZ2V0U2VyaWVzSW5zdGFuY2VVaWRGcm9tRW5hYmxlZEVsZW1lbnQgZnJvbSAnLi4vdXRpbC9nZXRTZXJpZXNJbnN0YW5jZVVpZEZyb21FbmFibGVkRWxlbWVudC5qcyc7XG5cbi8vIENvcm5lcnN0b25lIDNyZCBwYXJ0eSBkZXYga2l0IGltcG9ydHNcbmNvbnN0IHsgaW5zZXJ0T3JEZWxldGUsIGZyZWVoYW5kQXJlYSwgY2FsY3VsYXRlRnJlZWhhbmRTdGF0aXN0aWNzIH0gPSBpbXBvcnRJbnRlcm5hbE1vZHVsZSgndXRpbC9mcmVlaGFuZFV0aWxzJyk7XG5jb25zdCBkcmF3ID0gaW1wb3J0SW50ZXJuYWxNb2R1bGUoJ2RyYXdpbmcvZHJhdycpO1xuY29uc3QgZHJhd0pvaW5lZExpbmVzID0gaW1wb3J0SW50ZXJuYWxNb2R1bGUoJ2RyYXdpbmcvZHJhd0pvaW5lZExpbmVzJyk7XG5jb25zdCBkcmF3SGFuZGxlcyA9IGltcG9ydEludGVybmFsTW9kdWxlKCdkcmF3aW5nL2RyYXdIYW5kbGVzJyk7XG5jb25zdCBkcmF3TGlua2VkVGV4dEJveCA9IGltcG9ydEludGVybmFsTW9kdWxlKCdkcmF3aW5nL2RyYXdMaW5rZWRUZXh0Qm94Jyk7XG5jb25zdCBtb3ZlSGFuZGxlTmVhckltYWdlUG9pbnQgPSBpbXBvcnRJbnRlcm5hbE1vZHVsZSgnbWFuaXB1bGF0b3JzL21vdmVIYW5kbGVOZWFySW1hZ2VQb2ludCcpO1xuY29uc3QgZ2V0TmV3Q29udGV4dCA9IGltcG9ydEludGVybmFsTW9kdWxlKCdkcmF3aW5nL2dldE5ld0NvbnRleHQnKTtcbmNvbnN0IG1vZHVsZXMgPSBzdG9yZS5tb2R1bGVzO1xuY29uc3QgbnVtYmVyc1dpdGhDb21tYXMgPSBpbXBvcnRJbnRlcm5hbE1vZHVsZSgndXRpbC9udW1iZXJzV2l0aENvbW1hcycpO1xuY29uc3QgcG9pbnRJbnNpZGVCb3VuZGluZ0JveCA9IGltcG9ydEludGVybmFsTW9kdWxlKCd1dGlsL3BvaW50SW5zaWRlQm91bmRpbmdCb3gnKTtcbmNvbnN0IGNhbGN1bGF0ZVNVViA9IGltcG9ydEludGVybmFsTW9kdWxlKCd1dGlsL2NhbGN1bGF0ZVNVVicpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmVlaGFuZFJvaTNEVG9vbCBleHRlbmRzIEZyZWVoYW5kUm9pVG9vbCB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb24gPSB7fSkge1xuICAgIGNvbnN0IGRlZmF1bHRDb25maWcgPSB7XG4gICAgICBjb25maWd1cmF0aW9uOiBkZWZhdWx0RnJlZWhhbmRDb25maWd1cmF0aW9uKClcbiAgICB9O1xuICAgIGNvbnN0IGluaXRpYWxDb25maWd1cmF0aW9uID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q29uZmlnLCBjb25maWd1cmF0aW9uKTtcblxuICAgIHN1cGVyKGluaXRpYWxDb25maWd1cmF0aW9uKTtcblxuICAgIHRoaXMuY29uZmlndXJhdGlvbi5hbHdheXNTaG93SGFuZGxlcyA9IGZhbHNlO1xuICAgIHRoaXMuX2ZyZWVoYW5kM0RTdG9yZSA9IG1vZHVsZXMuZnJlZWhhbmQzRDtcblxuICAgIHRoaXMuX29uTWVhc3VyZW1lbnRSZW1vdmVkID0gdGhpcy5fb25NZWFzdXJlbWVudFJlbW92ZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9kcmF3aW5nTW91c2VVcENhbGxiYWNrID0gdGhpcy5fZHJhd2luZ01vdXNlVXBDYWxsYmFjay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgbWVhc3VyZW1lbnQgZGF0YSBmb3IgdGhpcyB0b29sLlxuICAgKiBAb3ZlcnJpZGUgQHB1YmxpYyBAbWV0aG9kXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudERhdGFcbiAgICogQHJldHVybnMge29iamVjdH0gbWVhc3VyZW1lbnREYXRhXG4gICAqL1xuICBjcmVhdGVOZXdNZWFzdXJlbWVudChldmVudERhdGEpIHtcbiAgICBjb25zdCBmcmVlaGFuZDNEU3RvcmUgPSB0aGlzLl9mcmVlaGFuZDNEU3RvcmU7XG4gICAgY29uc3QgZ29vZEV2ZW50RGF0YSA9IGV2ZW50RGF0YSAmJiBldmVudERhdGEuY3VycmVudFBvaW50cyAmJiBldmVudERhdGEuY3VycmVudFBvaW50cy5pbWFnZTtcblxuICAgIGlmICghZ29vZEV2ZW50RGF0YSkge1xuICAgICAgY29uc29sZS5lcnJvcihgcmVxdWlyZWQgZXZlbnREYXRhIG5vdCBzdXBwbGllZCB0byB0b29sICR7dGhpcy5uYW1lfSdzIGNyZWF0ZU5ld01lYXN1cmVtZW50YCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBlbmFibGVkRWxlbWVudCA9IGdldEVuYWJsZWRFbGVtZW50KHRoaXMuZWxlbWVudCk7XG4gICAgY29uc3Qgc2VyaWVzSW5zdGFuY2VVaWQgPSBnZXRTZXJpZXNJbnN0YW5jZVVpZEZyb21FbmFibGVkRWxlbWVudChlbmFibGVkRWxlbWVudCk7XG4gICAgY29uc3QgcmVmZXJlbmNlZFN0cnVjdHVyZVNldCA9IGZyZWVoYW5kM0RTdG9yZS5nZXR0ZXJzLnN0cnVjdHVyZVNldChzZXJpZXNJbnN0YW5jZVVpZCwgJ0RFRkFVTFQnKTtcbiAgICBjb25zdCByZWZlcmVuY2VkUk9JQ29udG91ciA9IGZyZWVoYW5kM0RTdG9yZS5nZXR0ZXJzLmFjdGl2ZVJPSUNvbnRvdXIoc2VyaWVzSW5zdGFuY2VVaWQpO1xuXG4gICAgY29uc3QgbWVhc3VyZW1lbnREYXRhID0ge1xuICAgICAgdWlkOiBnZW5lcmF0ZVVJRCgpLFxuICAgICAgc2VyaWVzSW5zdGFuY2VVaWQsXG4gICAgICBzdHJ1Y3R1cmVTZXRVaWQ6ICdERUZBVUxUJyxcbiAgICAgIFJPSUNvbnRvdXJVaWQ6IHJlZmVyZW5jZWRST0lDb250b3VyLnVpZCxcbiAgICAgIHJlZmVyZW5jZWRST0lDb250b3VyLFxuICAgICAgcmVmZXJlbmNlZFN0cnVjdHVyZVNldCxcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBhY3RpdmU6IHRydWUsXG4gICAgICBpbnZhbGlkYXRlZDogdHJ1ZSxcbiAgICAgIGhhbmRsZXM6IHtcbiAgICAgICAgcG9pbnRzOiBbXVxuICAgICAgfVxuICAgIH07XG5cbiAgICBtZWFzdXJlbWVudERhdGEuaGFuZGxlcy50ZXh0Qm94ID0ge1xuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgIGhhc01vdmVkOiBmYWxzZSxcbiAgICAgIG1vdmVzSW5kZXBlbmRlbnRseTogZmFsc2UsXG4gICAgICBkcmF3bkluZGVwZW5kZW50bHk6IHRydWUsXG4gICAgICBhbGxvd2VkT3V0c2lkZUltYWdlOiB0cnVlLFxuICAgICAgaGFzQm91bmRpbmdCb3g6IHRydWVcbiAgICB9O1xuXG4gICAgZnJlZWhhbmQzRFN0b3JlLnNldHRlcnMuaW5jcmVtZW50UG9seWdvbkNvdW50KHNlcmllc0luc3RhbmNlVWlkLCAnREVGQVVMVCcsIHJlZmVyZW5jZWRST0lDb250b3VyLnVpZCk7XG5cbiAgICByZXR1cm4gbWVhc3VyZW1lbnREYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IGhhbmRsZXIgZm9yIGNhbGxlZCBieSB0aGUgbW91c2VEb3duQWN0aXZhdGUgZXZlbnQsIGlmIHRvb2wgaXMgYWN0aXZlIGFuZFxuICAgKiB0aGUgZXZlbnQgaXMgbm90IGNhdWdodCBieSBtb3VzZURvd25DYWxsYmFjay5cbiAgICogQG92ZXJyaWRlXG4gICAqXG4gICAqIEBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZ0IC0gVGhlIGV2ZW50LlxuICAgKi9cbiAgYWRkTmV3TWVhc3VyZW1lbnQoZXZ0LCBpbnRlcmFjdGlvblR5cGUpIHtcbiAgICBjb25zdCBldmVudERhdGEgPSBldnQuZGV0YWlsO1xuXG4gICAgLy8gQ3JlYXRlIG1ldGFkYXRhIGlmIGl0IGRvZXNuJ3QgZXhpc3QuXG4gICAgdGhpcy5fYWRkQW5kU2V0Vm9sdW1lSWZOb1ZvbHVtZXMoKTtcbiAgICB0aGlzLl9kcmF3aW5nID0gdHJ1ZTtcblxuICAgIHRoaXMuX3N0YXJ0RHJhd2luZyhldnQpO1xuICAgIHRoaXMuX2FkZFBvaW50KGV2ZW50RGF0YSk7XG4gICAgcHJldmVudFByb3BhZ2F0aW9uKGV2dCk7XG4gIH1cblxuICBfYWRkQW5kU2V0Vm9sdW1lSWZOb1ZvbHVtZXMoKSB7XG4gICAgY29uc3QgZW5hYmxlZEVsZW1lbnQgPSBnZXRFbmFibGVkRWxlbWVudCh0aGlzLmVsZW1lbnQpO1xuICAgIGNvbnN0IHNlcmllc0luc3RhbmNlVWlkID0gZ2V0U2VyaWVzSW5zdGFuY2VVaWRGcm9tRW5hYmxlZEVsZW1lbnQoZW5hYmxlZEVsZW1lbnQpO1xuICAgIGNvbnN0IGZyZWVoYW5kM0RTdG9yZSA9IG1vZHVsZXMuZnJlZWhhbmQzRDtcbiAgICBsZXQgc2VyaWVzID0gZnJlZWhhbmQzRFN0b3JlLmdldHRlcnMuc2VyaWVzKHNlcmllc0luc3RhbmNlVWlkKTtcblxuICAgIGlmICghc2VyaWVzKSB7XG4gICAgICBmcmVlaGFuZDNEU3RvcmUuc2V0dGVycy5zZXJpZXMoc2VyaWVzSW5zdGFuY2VVaWQpO1xuICAgICAgc2VyaWVzID0gZnJlZWhhbmQzRFN0b3JlLmdldHRlcnMuc2VyaWVzKHNlcmllc0luc3RhbmNlVWlkKTtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmVST0lDb250b3VyID0gZnJlZWhhbmQzRFN0b3JlLmdldHRlcnMuYWN0aXZlUk9JQ29udG91cihzZXJpZXNJbnN0YW5jZVVpZCk7XG5cbiAgICBpZiAoIWFjdGl2ZVJPSUNvbnRvdXIpIHtcbiAgICAgIGZyZWVoYW5kM0RTdG9yZS5zZXR0ZXJzLlJPSUNvbnRvdXIoc2VyaWVzSW5zdGFuY2VVaWQsICdERUZBVUxUJywgJ1VubmFtZWQgTGVzaW9uJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBoYW5kbGUgb2YgYSBwYXJ0aWN1bGFyIHRvb2wgaWYgaXQgaXMgY2xvc2UgdG8gdGhlIG1vdXNlIGN1cnNvclxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCAtIFRoZSBlbGVtZW50IG9uIHdoaWNoIHRoZSByb2kgaXMgYmVpbmcgZHJhd24uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhICAgICAgRGF0YSBvYmplY3QgYXNzb2NpYXRlZCB3aXRoIHRoZSB0b29sLlxuICAgKiBAcGFyYW0geyp9IGNvb3Jkc1xuICAgKiBAcmV0dXJucyB7TnVtYmVyfE9iamVjdHxCb29sZWFufVxuICAgKi9cbiAgX3BvaW50TmVhckhhbmRsZShlbGVtZW50LCBkYXRhLCBjb29yZHMpIHtcbiAgICBjb25zdCBmcmVlaGFuZDNEU3RvcmUgPSB0aGlzLl9mcmVlaGFuZDNEU3RvcmU7XG5cbiAgICBpZiAoIWRhdGEuaGFuZGxlcyB8fCBkYXRhLmhhbmRsZXMucG9pbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS52aXNpYmxlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBvaW50cyA9IGRhdGEuaGFuZGxlcy5wb2ludHM7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaGFuZGxlQ2FudmFzID0gcGl4ZWxUb0NhbnZhcyhlbGVtZW50LCBwb2ludHNbaV0pO1xuXG4gICAgICBpZiAocG9pbnQuZGlzdGFuY2UoaGFuZGxlQ2FudmFzLCBjb29yZHMpIDwgNikge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDaGVjayB0byBzZWUgaWYgbW91c2UgaW4gYm91bmRpbmcgYm94IG9mIHRleHRib3hcbiAgICBpZiAoZnJlZWhhbmQzRFN0b3JlLnN0YXRlLmRpc3BsYXlTdGF0cyAmJiBkYXRhLmhhbmRsZXMudGV4dEJveCkge1xuICAgICAgaWYgKHBvaW50SW5zaWRlQm91bmRpbmdCb3goZGF0YS5oYW5kbGVzLnRleHRCb3gsIGNvb3JkcykpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEuaGFuZGxlcy50ZXh0Qm94O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmUgbW91c2UgZG93biBjYWxsYmFjayB0aGF0IHRha2VzIHByaW9yaXR5IGlmIHRoZSB1c2VyIGlzIGF0dGVtcHRpbmdcbiAgICogdG8gaW5zZXJ0IG9yIGRlbGV0ZSBhIGhhbmRsZSB3aXRoIGN0cmwgKyBjbGljay5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGV2dCAtIFRoZSBldmVudC5cbiAgICovXG4gIHByZU1vdXNlRG93bkNhbGxiYWNrKGV2dCkge1xuICAgIGNvbnN0IGV2ZW50RGF0YSA9IGV2dC5kZXRhaWw7XG5cbiAgICBjb25zdCB0b29sRGF0YSA9IGdldFRvb2xTdGF0ZShldnQuY3VycmVudFRhcmdldCwgdGhpcy5uYW1lKTtcblxuICAgIGlmICghdG9vbERhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBuZWFyYnkgPSB0aGlzLl9wb2ludE5lYXJIYW5kbGVBbGxUb29scyhldmVudERhdGEpO1xuICAgIGNvbnN0IGZyZWVoYW5kM0RTdG9yZSA9IHRoaXMuX2ZyZWVoYW5kM0RTdG9yZTtcblxuICAgIGlmIChldmVudERhdGEuZXZlbnQuY3RybEtleSkge1xuICAgICAgaWYgKG5lYXJieSAhPT0gdW5kZWZpbmVkICYmIG5lYXJieS5oYW5kbGVOZWFyYnkuaGFzQm91bmRpbmdCb3gpIHtcbiAgICAgICAgLy8gQ3RybCArIGNsaWNrZWQgdGV4dEJveCwgZG8gbm90aGluZyBidXQgc3RpbGwgY29uc3VtZSBldmVudC5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluc2VydE9yRGVsZXRlLmNhbGwodGhpcywgZXZ0LCBuZWFyYnkpO1xuICAgICAgfVxuXG4gICAgICBwcmV2ZW50UHJvcGFnYXRpb24oZXZ0KTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFuZWFyYnkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gdG9vbERhdGEuZGF0YVtuZWFyYnkudG9vbEluZGV4XTtcblxuICAgIC8vIENoZWNrIGlmIGxvY2tlZCBhbmQgcmV0dXJuXG4gICAgY29uc3Qgc3RydWN0dXJlU2V0ID0gZnJlZWhhbmQzRFN0b3JlLmdldHRlcnMuc3RydWN0dXJlU2V0KGRhdGEuc2VyaWVzSW5zdGFuY2VVaWQsIGRhdGEuc3RydWN0dXJlU2V0VWlkKTtcblxuICAgIGlmIChzdHJ1Y3R1cmVTZXQuaXNMb2NrZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ3VzdG9tIGNhbGxiYWNrIGZvciB3aGVuIGEgaGFuZGxlIGlzIHNlbGVjdGVkLlxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGV2dFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGhhbmRsZSBUaGUgc2VsZWN0ZWQgaGFuZGxlLlxuICAgKi9cbiAgaGFuZGxlU2VsZWN0ZWRDYWxsYmFjayhldnQsIGRhdGEsIGhhbmRsZSwgaW50ZXJhY3Rpb25UeXBlID0gJ21vdXNlJykge1xuICAgIGNvbnN0IGZyZWVoYW5kM0RTdG9yZSA9IHRoaXMuX2ZyZWVoYW5kM0RTdG9yZTtcbiAgICBjb25zdCBldmVudERhdGEgPSBldnQuZGV0YWlsO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudERhdGEuZWxlbWVudDtcblxuICAgIGlmIChldmVudERhdGEuZXZlbnQubWV0YUtleSkge1xuICAgICAgdGhpcy5fc3dpdGNoUk9JQ29udG91cihldnQsIGRhdGEpO1xuICAgICAgcHJldmVudFByb3BhZ2F0aW9uKGV2dCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaGFuZGxlLmhhc0JvdW5kaW5nQm94ICYmIGZyZWVoYW5kM0RTdG9yZS5zdGF0ZS5kaXNwbGF5U3RhdHMpIHtcbiAgICAgIC8vIFVzZSBkZWZhdWx0IG1vdmUgaGFuZGxlciAtIENhbiBtb3ZlIHRleHRib3ggb2YgbG9ja2VkIFJPSUNvbnRvdXJzLlxuICAgICAgbW92ZUhhbmRsZU5lYXJJbWFnZVBvaW50KGV2dCwgdGhpcywgZGF0YSwgaGFuZGxlLCBpbnRlcmFjdGlvblR5cGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIGxvY2tlZCBhbmQgcmV0dXJuXG4gICAgY29uc3Qgc3RydWN0dXJlU2V0ID0gZnJlZWhhbmQzRFN0b3JlLmdldHRlcnMuc3RydWN0dXJlU2V0KGRhdGEuc2VyaWVzSW5zdGFuY2VVaWQsIGRhdGEuc3RydWN0dXJlU2V0VWlkKTtcblxuICAgIGlmIChzdHJ1Y3R1cmVTZXQuaXNMb2NrZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb247XG5cbiAgICBjb25maWcuZHJhZ09yaWdpbiA9IHtcbiAgICAgIHg6IGhhbmRsZS54LFxuICAgICAgeTogaGFuZGxlLnlcbiAgICB9O1xuXG4gICAgLy8gSGF2ZSB0byBkbyB0aGlzIHRvIGdldCB0b29sIGluZGV4LlxuICAgIGNvbnN0IG5lYXJieSA9IHRoaXMuX3BvaW50TmVhckhhbmRsZUFsbFRvb2xzKGV2ZW50RGF0YSk7XG5cbiAgICBpZiAoIW5lYXJieSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZU5lYXJieSA9IG5lYXJieS5oYW5kbGVOZWFyYnk7XG4gICAgY29uc3QgdG9vbEluZGV4ID0gbmVhcmJ5LnRvb2xJbmRleDtcblxuICAgIHRoaXMuX21vZGlmeWluZyA9IHRydWU7XG4gICAgY29uZmlnLmN1cnJlbnRIYW5kbGUgPSBoYW5kbGVOZWFyYnk7XG4gICAgY29uZmlnLmN1cnJlbnRUb29sID0gdG9vbEluZGV4O1xuXG4gICAgdGhpcy5fYWN0aXZhdGVNb2RpZnkoZWxlbWVudCk7XG4gICAgcHJldmVudFByb3BhZ2F0aW9uKGV2dCk7XG4gIH1cblxuICBfc3dpdGNoUk9JQ29udG91cihldnQsIGRhdGEpIHtcbiAgICBjb25zdCBmcmVlaGFuZDNEU3RvcmUgPSB0aGlzLl9mcmVlaGFuZDNEU3RvcmU7XG5cbiAgICBmcmVlaGFuZDNEU3RvcmUuc2V0dGVycy5hY3RpdmVST0lDb250b3VyKGRhdGEuc2VyaWVzSW5zdGFuY2VVaWQsIGRhdGEuc3RydWN0dXJlU2V0VWlkLCBkYXRhLlJPSUNvbnRvdXJVaWQpO1xuXG4gICAgdXBkYXRlSW1hZ2UoZXZ0LmRldGFpbC5lbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKlxuICAgKiBAcGFyYW0geyp9IGV2dFxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgcmVuZGVyVG9vbERhdGEoZXZ0KSB7XG4gICAgY29uc3QgZXZlbnREYXRhID0gZXZ0LmRldGFpbDtcbiAgICBjb25zdCBmcmVlaGFuZDNEU3RvcmUgPSB0aGlzLl9mcmVlaGFuZDNEU3RvcmU7XG5cbiAgICAvLyBJZiB3ZSBoYXZlIG5vIHRvb2xTdGF0ZSBmb3IgdGhpcyBlbGVtZW50LCByZXR1cm4gaW1tZWRpYXRlbHkgYXMgdGhlcmUgaXMgbm90aGluZyB0byBkb1xuICAgIGNvbnN0IHRvb2xTdGF0ZSA9IGdldFRvb2xTdGF0ZShldnQuY3VycmVudFRhcmdldCwgdGhpcy5uYW1lKTtcblxuICAgIGlmICghdG9vbFN0YXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW1hZ2UgPSBldmVudERhdGEuaW1hZ2U7XG4gICAgY29uc3QgZWxlbWVudCA9IGV2ZW50RGF0YS5lbGVtZW50O1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbjtcbiAgICBjb25zdCBzZXJpZXNNb2R1bGUgPSBtZXRhRGF0YS5nZXQoJ2dlbmVyYWxTZXJpZXNNb2R1bGUnLCBpbWFnZS5pbWFnZUlkKTtcblxuICAgIGxldCBtb2RhbGl0eTtcblxuICAgIGlmIChzZXJpZXNNb2R1bGUpIHtcbiAgICAgIG1vZGFsaXR5ID0gc2VyaWVzTW9kdWxlLm1vZGFsaXR5O1xuICAgIH1cblxuICAgIC8vIFdlIGhhdmUgdG9vbCBkYXRhIGZvciB0aGlzIGVsZW1lbnQgLSBpdGVyYXRlIG92ZXIgZWFjaCBvbmUgYW5kIGRyYXcgaXRcbiAgICBjb25zdCBjb250ZXh0ID0gZ2V0TmV3Q29udGV4dChldmVudERhdGEuY2FudmFzQ29udGV4dC5jYW52YXMpO1xuXG4gICAgY29uc3QgbGluZVdpZHRoID0gdG9vbFN0eWxlLmdldFRvb2xXaWR0aCgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b29sU3RhdGUuZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZGF0YSA9IHRvb2xTdGF0ZS5kYXRhW2ldO1xuICAgICAgY29uc3Qgc3RydWN0dXJlU2V0ID0gZGF0YS5yZWZlcmVuY2VkU3RydWN0dXJlU2V0O1xuICAgICAgY29uc3QgUk9JQ29udG91ciA9IGRhdGEucmVmZXJlbmNlZFJPSUNvbnRvdXI7XG5cbiAgICAgIGlmIChkYXRhLnZpc2libGUgPT09IGZhbHNlIHx8ICFzdHJ1Y3R1cmVTZXQudmlzaWJsZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNST0lBY3RpdmUgPVxuICAgICAgICBmcmVlaGFuZDNEU3RvcmUuZ2V0dGVycy5ST0lDb250b3VySW5kZXgoZGF0YS5zZXJpZXNJbnN0YW5jZVVpZCwgZGF0YS5zdHJ1Y3R1cmVTZXRVaWQsIGRhdGEuUk9JQ29udG91clVpZCkgPT09XG4gICAgICAgIGZyZWVoYW5kM0RTdG9yZS5nZXR0ZXJzLmFjdGl2ZVJPSUNvbnRvdXJJbmRleChkYXRhLnNlcmllc0luc3RhbmNlVWlkKTtcblxuICAgICAgZHJhdyhjb250ZXh0LCBjb250ZXh0ID0+IHtcbiAgICAgICAgbGV0IGNvbG9yID0gdG9vbENvbG9ycy5nZXRDb2xvcklmQWN0aXZlKGRhdGEpO1xuICAgICAgICBsZXQgZmlsbENvbG9yO1xuXG4gICAgICAgIGNvbnN0IHBvaW50cyA9IGRhdGEuaGFuZGxlcy5wb2ludHM7XG5cbiAgICAgICAgaWYgKGRhdGEuYWN0aXZlICYmICFzdHJ1Y3R1cmVTZXQuaXNMb2NrZWQpIHtcbiAgICAgICAgICBpZiAoZGF0YS5oYW5kbGVzLmludmFsaWRIYW5kbGVQbGFjZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbG9yID0gY29uZmlnLmludmFsaWRDb2xvcjtcbiAgICAgICAgICAgIGZpbGxDb2xvciA9IGNvbmZpZy5pbnZhbGlkQ29sb3I7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbG9yID0gdG9vbENvbG9ycy5nZXRDb2xvcklmQWN0aXZlKGRhdGEpO1xuICAgICAgICAgICAgZmlsbENvbG9yID0gdG9vbENvbG9ycy5nZXRGaWxsQ29sb3IoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29sb3IgPSBST0lDb250b3VyLmNvbG9yO1xuICAgICAgICAgIGZpbGxDb2xvciA9IFJPSUNvbnRvdXIuY29sb3I7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNST0lBY3RpdmUgJiYgZGF0YS5pbnRlcnBvbGF0ZWQpIHtcbiAgICAgICAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gY29uZmlnLmludGVycG9sYXRlZEFscGhhO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEuaGFuZGxlcy5wb2ludHMubGVuZ3RoKSB7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwb2ludHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmVzID0gWy4uLnBvaW50c1tqXS5saW5lc107XG5cbiAgICAgICAgICAgIGlmIChqID09PSBwb2ludHMubGVuZ3RoIC0gMSAmJiAhZGF0YS5wb2x5Qm91bmRpbmdCb3gpIHtcbiAgICAgICAgICAgICAgLy8gSWYgaXQncyBzdGlsbCBiZWluZyBhY3RpdmVseSBkcmF3biwga2VlcCB0aGUgbGFzdCBsaW5lIHRvXG4gICAgICAgICAgICAgIC8vIFRoZSBtb3VzZSBsb2NhdGlvblxuICAgICAgICAgICAgICBsaW5lcy5wdXNoKGNvbmZpZy5tb3VzZUxvY2F0aW9uLmhhbmRsZXMuc3RhcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHJhd0pvaW5lZExpbmVzKGNvbnRleHQsIGV2ZW50RGF0YS5lbGVtZW50LCBkYXRhLmhhbmRsZXMucG9pbnRzW2pdLCBsaW5lcywgeyBjb2xvciB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gMS4wO1xuXG4gICAgICAgIC8vIERyYXcgaGFuZGxlc1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgY29sb3IsXG4gICAgICAgICAgZmlsbDogZmlsbENvbG9yXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGlzUk9JQWN0aXZlICYmIGRhdGEuaW50ZXJwb2xhdGVkKSB7XG4gICAgICAgICAgLy8gUmVuZGVyIGRvdHRlZCBsaW5lXG4gICAgICAgICAgb3B0aW9ucy5oYW5kbGVSYWRpdXMgPSBjb25maWcuaW50ZXJwb2xhdGVkSGFuZGxlUmFkaXVzO1xuICAgICAgICAgIGRyYXdIYW5kbGVzKGNvbnRleHQsIGV2ZW50RGF0YSwgcG9pbnRzLCBvcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb25maWcuYWx3YXlzU2hvd0hhbmRsZXMgfHwgKGRhdGEuYWN0aXZlICYmIGRhdGEucG9seUJvdW5kaW5nQm94KSkge1xuICAgICAgICAgIC8vIFJlbmRlciBhbGwgaGFuZGxlc1xuICAgICAgICAgIG9wdGlvbnMuaGFuZGxlUmFkaXVzID0gY29uZmlnLmFjdGl2ZUhhbmRsZVJhZGl1cztcbiAgICAgICAgICBkcmF3SGFuZGxlcyhjb250ZXh0LCBldmVudERhdGEsIHBvaW50cywgb3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS5jYW5Db21wbGV0ZSkge1xuICAgICAgICAgIC8vIERyYXcgbGFyZ2UgaGFuZGxlIGF0IHRoZSBvcmlnaW4gaWYgY2FuIGNvbXBsZXRlIGRyYXdpbmdcbiAgICAgICAgICBvcHRpb25zLmhhbmRsZVJhZGl1cyA9IGNvbmZpZy5jb21wbGV0ZUhhbmRsZVJhZGl1cztcbiAgICAgICAgICBkcmF3SGFuZGxlcyhjb250ZXh0LCBldmVudERhdGEsIFtwb2ludHNbMF1dLCBvcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhLmFjdGl2ZSAmJiAhZGF0YS5wb2x5Qm91bmRpbmdCb3gpIHtcbiAgICAgICAgICAvLyBEcmF3IGhhbmRsZSBhdCBvcmlnaW4gYW5kIGF0IG1vdXNlIGlmIGFjdGl2ZWx5IGRyYXdpbmdcbiAgICAgICAgICBvcHRpb25zLmhhbmRsZVJhZGl1cyA9IGNvbmZpZy5hY3RpdmVIYW5kbGVSYWRpdXM7XG4gICAgICAgICAgZHJhd0hhbmRsZXMoY29udGV4dCwgZXZlbnREYXRhLCBjb25maWcubW91c2VMb2NhdGlvbi5oYW5kbGVzLCBvcHRpb25zKTtcbiAgICAgICAgICBkcmF3SGFuZGxlcyhjb250ZXh0LCBldmVudERhdGEsIFtwb2ludHNbMF1dLCBvcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlZmluZSB2YXJpYWJsZXMgZm9yIHRoZSBhcmVhIGFuZCBtZWFuL3N0YW5kYXJkIGRldmlhdGlvblxuICAgICAgICBsZXQgYXJlYSwgbWVhblN0ZERldiwgbWVhblN0ZERldlNVVjtcblxuICAgICAgICAvLyBQZXJmb3JtIGEgY2hlY2sgdG8gc2VlIGlmIHRoZSB0b29sIGhhcyBiZWVuIGludmFsaWRhdGVkLiBUaGlzIGlzIHRvIHByZXZlbnRcbiAgICAgICAgLy8gVW5uZWNlc3NhcnkgcmUtY2FsY3VsYXRpb24gb2YgdGhlIGFyZWEsIG1lYW4sIGFuZCBzdGFuZGFyZCBkZXZpYXRpb24gaWYgdGhlXG4gICAgICAgIC8vIEltYWdlIGlzIHJlLXJlbmRlcmVkIGJ1dCB0aGUgdG9vbCBoYXMgbm90IG1vdmVkIChlLmcuIGR1cmluZyBhIHpvb20pXG4gICAgICAgIGlmIChkYXRhLmludmFsaWRhdGVkID09PSBmYWxzZSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkYXRhIGlzIG5vdCBpbnZhbGlkYXRlZCwgcmV0cmlldmUgaXQgZnJvbSB0aGUgdG9vbFN0YXRlXG4gICAgICAgICAgbWVhblN0ZERldiA9IGRhdGEubWVhblN0ZERldjtcbiAgICAgICAgICBtZWFuU3RkRGV2U1VWID0gZGF0YS5tZWFuU3RkRGV2U1VWO1xuICAgICAgICAgIGFyZWEgPSBkYXRhLmFyZWE7XG4gICAgICAgIH0gZWxzZSBpZiAoIWRhdGEuYWN0aXZlKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRhdGEgaGFzIGJlZW4gaW52YWxpZGF0ZWQsIGFuZCB0aGUgdG9vbCBpcyBub3QgY3VycmVudGx5IGFjdGl2ZSxcbiAgICAgICAgICAvLyBXZSBuZWVkIHRvIGNhbGN1bGF0ZSBpdCBhZ2Fpbi5cblxuICAgICAgICAgIC8vIFJldHJpZXZlIHRoZSBib3VuZHMgb2YgdGhlIFJPSSBpbiBpbWFnZSBjb29yZGluYXRlc1xuICAgICAgICAgIGNvbnN0IGJvdW5kcyA9IHtcbiAgICAgICAgICAgIGxlZnQ6IHBvaW50c1swXS54LFxuICAgICAgICAgICAgcmlnaHQ6IHBvaW50c1swXS54LFxuICAgICAgICAgICAgYm90dG9tOiBwb2ludHNbMF0ueSxcbiAgICAgICAgICAgIHRvcDogcG9pbnRzWzBdLnhcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJvdW5kcy5sZWZ0ID0gTWF0aC5taW4oYm91bmRzLmxlZnQsIHBvaW50c1tpXS54KTtcbiAgICAgICAgICAgIGJvdW5kcy5yaWdodCA9IE1hdGgubWF4KGJvdW5kcy5yaWdodCwgcG9pbnRzW2ldLngpO1xuICAgICAgICAgICAgYm91bmRzLmJvdHRvbSA9IE1hdGgubWluKGJvdW5kcy5ib3R0b20sIHBvaW50c1tpXS55KTtcbiAgICAgICAgICAgIGJvdW5kcy50b3AgPSBNYXRoLm1heChib3VuZHMudG9wLCBwb2ludHNbaV0ueSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgcG9seUJvdW5kaW5nQm94ID0ge1xuICAgICAgICAgICAgbGVmdDogYm91bmRzLmxlZnQsXG4gICAgICAgICAgICB0b3A6IGJvdW5kcy5ib3R0b20sXG4gICAgICAgICAgICB3aWR0aDogTWF0aC5hYnMoYm91bmRzLnJpZ2h0IC0gYm91bmRzLmxlZnQpLFxuICAgICAgICAgICAgaGVpZ2h0OiBNYXRoLmFicyhib3VuZHMudG9wIC0gYm91bmRzLmJvdHRvbSlcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gU3RvcmUgdGhlIGJvdW5kaW5nIGJveCBpbmZvcm1hdGlvbiBmb3IgdGhlIHRleHQgYm94XG4gICAgICAgICAgZGF0YS5wb2x5Qm91bmRpbmdCb3ggPSBwb2x5Qm91bmRpbmdCb3g7XG5cbiAgICAgICAgICAvLyBGaXJzdCwgbWFrZSBzdXJlIHRoaXMgaXMgbm90IGEgY29sb3IgaW1hZ2UsIHNpbmNlIG5vIG1lYW4gLyBzdGFuZGFyZFxuICAgICAgICAgIC8vIERldmlhdGlvbiB3aWxsIGJlIGNhbGN1bGF0ZWQgZm9yIGNvbG9yIGltYWdlcy5cbiAgICAgICAgICBpZiAoIWltYWdlLmNvbG9yKSB7XG4gICAgICAgICAgICAvLyBSZXRyaWV2ZSB0aGUgYXJyYXkgb2YgcGl4ZWxzIHRoYXQgdGhlIFJPSSBib3VuZHMgY292ZXJcbiAgICAgICAgICAgIGNvbnN0IHBpeGVscyA9IGdldFBpeGVscyhcbiAgICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgICAgcG9seUJvdW5kaW5nQm94LmxlZnQsXG4gICAgICAgICAgICAgIHBvbHlCb3VuZGluZ0JveC50b3AsXG4gICAgICAgICAgICAgIHBvbHlCb3VuZGluZ0JveC53aWR0aCxcbiAgICAgICAgICAgICAgcG9seUJvdW5kaW5nQm94LmhlaWdodFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBtZWFuICYgc3RhbmRhcmQgZGV2aWF0aW9uIGZyb20gdGhlIHBpeGVscyBhbmQgdGhlIG9iamVjdCBzaGFwZVxuICAgICAgICAgICAgbWVhblN0ZERldiA9IGNhbGN1bGF0ZUZyZWVoYW5kU3RhdGlzdGljcy5jYWxsKHRoaXMsIHBpeGVscywgcG9seUJvdW5kaW5nQm94LCBwb2ludHMpO1xuXG4gICAgICAgICAgICBpZiAobW9kYWxpdHkgPT09ICdQVCcpIHtcbiAgICAgICAgICAgICAgLy8gSWYgdGhlIGltYWdlIGlzIGZyb20gYSBQRVQgc2NhbiwgdXNlIHRoZSBESUNPTSB0YWdzIHRvXG4gICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgU1VWIGZyb20gdGhlIG1lYW4gYW5kIHN0YW5kYXJkIGRldmlhdGlvbi5cblxuICAgICAgICAgICAgICAvLyBOb3RlIHRoYXQgYmVjYXVzZSB3ZSBhcmUgdXNpbmcgbW9kYWxpdHkgcGl4ZWwgdmFsdWVzIGZyb20gZ2V0UGl4ZWxzLCBhbmRcbiAgICAgICAgICAgICAgLy8gVGhlIGNhbGN1bGF0ZVNVViByb3V0aW5lIGFsc28gcmVzY2FsZXMgdG8gbW9kYWxpdHkgcGl4ZWwgdmFsdWVzLCB3ZSBhcmUgZmlyc3RcbiAgICAgICAgICAgICAgLy8gUmV0dXJuaW5nIHRoZSB2YWx1ZXMgdG8gc3RvcmVkUGl4ZWwgdmFsdWVzIGJlZm9yZSBjYWxjdWF0aW5nIFNVViB3aXRoIHRoZW0uXG4gICAgICAgICAgICAgIC8vIFRPRE86IENsZWFuIHRoaXMgdXA/IFNob3VsZCB3ZSBhZGQgYW4gb3B0aW9uIHRvIG5vdCBzY2FsZSBpbiBjYWxjdWxhdGVTVVY/XG4gICAgICAgICAgICAgIG1lYW5TdGREZXZTVVYgPSB7XG4gICAgICAgICAgICAgICAgbWVhbjogY2FsY3VsYXRlU1VWKGltYWdlLCAobWVhblN0ZERldi5tZWFuIC0gaW1hZ2UuaW50ZXJjZXB0KSAvIGltYWdlLnNsb3BlKSxcbiAgICAgICAgICAgICAgICBzdGREZXY6IGNhbGN1bGF0ZVNVVihpbWFnZSwgKG1lYW5TdGREZXYuc3RkRGV2IC0gaW1hZ2UuaW50ZXJjZXB0KSAvIGltYWdlLnNsb3BlKVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGUgbWVhbiBhbmQgc3RhbmRhcmQgZGV2aWF0aW9uIHZhbHVlcyBhcmUgc2FuZSwgc3RvcmUgdGhlbSBmb3IgbGF0ZXIgcmV0cmlldmFsXG4gICAgICAgICAgICBpZiAobWVhblN0ZERldiAmJiAhaXNOYU4obWVhblN0ZERldi5tZWFuKSkge1xuICAgICAgICAgICAgICBkYXRhLm1lYW5TdGREZXYgPSBtZWFuU3RkRGV2O1xuICAgICAgICAgICAgICBkYXRhLm1lYW5TdGREZXZTVVYgPSBtZWFuU3RkRGV2U1VWO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJldHJpZXZlIHRoZSBwaXhlbCBzcGFjaW5nIHZhbHVlcywgYW5kIGlmIHRoZXkgYXJlIG5vdFxuICAgICAgICAgIC8vIFJlYWwgbm9uLXplcm8gdmFsdWVzLCBzZXQgdGhlbSB0byAxXG4gICAgICAgICAgY29uc3QgY29sdW1uUGl4ZWxTcGFjaW5nID0gaW1hZ2UuY29sdW1uUGl4ZWxTcGFjaW5nIHx8IDE7XG4gICAgICAgICAgY29uc3Qgcm93UGl4ZWxTcGFjaW5nID0gaW1hZ2Uucm93UGl4ZWxTcGFjaW5nIHx8IDE7XG4gICAgICAgICAgY29uc3Qgc2NhbGluZyA9IGNvbHVtblBpeGVsU3BhY2luZyAqIHJvd1BpeGVsU3BhY2luZztcblxuICAgICAgICAgIGFyZWEgPSBmcmVlaGFuZEFyZWEocG9pbnRzLCBzY2FsaW5nKTtcblxuICAgICAgICAgIC8vIElmIHRoZSBhcmVhIHZhbHVlIGlzIHNhbmUsIHN0b3JlIGl0IGZvciBsYXRlciByZXRyaWV2YWxcbiAgICAgICAgICBpZiAoIWlzTmFOKGFyZWEpKSB7XG4gICAgICAgICAgICBkYXRhLmFyZWEgPSBhcmVhO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFNldCB0aGUgaW52YWxpZGF0ZWQgZmxhZyB0byBmYWxzZSBzbyB0aGF0IHRoaXMgZGF0YSB3b24ndCBhdXRvbWF0aWNhbGx5IGJlIHJlY2FsY3VsYXRlZFxuICAgICAgICAgIGRhdGEuaW52YWxpZGF0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9ubHkgcmVuZGVyIHRleHQgaWYgcG9seWdvbiBST0kgaGFzIGJlZW4gY29tcGxldGVkLCBhbmQgaXMgYWN0aXZlLFxuICAgICAgICAvLyBPciBjb25maWcgaXMgc2V0IHRvIHNob3cgdGhlIHRleHRCb3ggYWxsIHRoZSB0aW1lXG4gICAgICAgIGlmIChkYXRhLnBvbHlCb3VuZGluZ0JveCAmJiAoZnJlZWhhbmQzRFN0b3JlLnN0YXRlLmRpc3BsYXlTdGF0cyB8fCBkYXRhLmFjdGl2ZSkpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgdGV4dGJveCBoYXMgbm90IGJlZW4gbW92ZWQgYnkgdGhlIHVzZXIsIGl0IHNob3VsZCBiZSBkaXNwbGF5ZWQgb24gdGhlIHJpZ2h0LW1vc3RcbiAgICAgICAgICAvLyBTaWRlIG9mIHRoZSB0b29sLlxuXG4gICAgICAgICAgaWYgKCFkYXRhLmhhbmRsZXMudGV4dEJveC5oYXNNb3ZlZCkge1xuICAgICAgICAgICAgLy8gRmluZCB0aGUgcmlnaHRtb3N0IHNpZGUgb2YgdGhlIHBvbHlCb3VuZGluZ0JveCBhdCBpdHMgdmVydGljYWwgY2VudGVyLCBhbmQgcGxhY2UgdGhlIHRleHRib3ggaGVyZVxuICAgICAgICAgICAgLy8gTm90ZSB0aGF0IHRoaXMgY2FsY3VsYXRlcyBpdCBpbiBpbWFnZSBjb29yZGluYXRlc1xuICAgICAgICAgICAgZGF0YS5oYW5kbGVzLnRleHRCb3gueCA9IGRhdGEucG9seUJvdW5kaW5nQm94LmxlZnQgKyBkYXRhLnBvbHlCb3VuZGluZ0JveC53aWR0aDtcbiAgICAgICAgICAgIGRhdGEuaGFuZGxlcy50ZXh0Qm94LnkgPSBkYXRhLnBvbHlCb3VuZGluZ0JveC50b3AgKyBkYXRhLnBvbHlCb3VuZGluZ0JveC5oZWlnaHQgLyAyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHRleHQgPSB0ZXh0Qm94VGV4dC5jYWxsKHRoaXMsIGRhdGEpO1xuXG4gICAgICAgICAgZHJhd0xpbmtlZFRleHRCb3goXG4gICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgIGRhdGEuaGFuZGxlcy50ZXh0Qm94LFxuICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgIHBvaW50cyxcbiAgICAgICAgICAgIHRleHRCb3hBbmNob3JQb2ludHMsXG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIGxpbmVXaWR0aCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICB0cnVlXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGV4dEJveFRleHQoZGF0YSkge1xuICAgICAgY29uc3QgUk9JQ29udG91ciA9IGRhdGEucmVmZXJlbmNlZFJPSUNvbnRvdXI7XG4gICAgICBjb25zdCBzdHJ1Y3R1cmVTZXQgPSBkYXRhLnJlZmVyZW5jZWRTdHJ1Y3R1cmVTZXQ7XG5cbiAgICAgIGNvbnN0IHsgbWVhblN0ZERldiwgbWVhblN0ZERldlNVViwgYXJlYSB9ID0gZGF0YTtcbiAgICAgIC8vIERlZmluZSBhbiBhcnJheSB0byBzdG9yZSB0aGUgcm93cyBvZiB0ZXh0IGZvciB0aGUgdGV4dGJveFxuICAgICAgY29uc3QgdGV4dExpbmVzID0gW107XG5cbiAgICAgIHRleHRMaW5lcy5wdXNoKFJPSUNvbnRvdXIubmFtZSk7XG5cbiAgICAgIGlmIChzdHJ1Y3R1cmVTZXQubmFtZSA9PT0gJ0RFRkFVTFQnKSB7XG4gICAgICAgIHRleHRMaW5lcy5wdXNoKCdXb3JraW5nIFJPSSBDb2xsZWN0aW9uJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0TGluZXMucHVzaChzdHJ1Y3R1cmVTZXQubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSBtZWFuIGFuZCBzdGFuZGFyZCBkZXZpYXRpb24gdmFsdWVzIGFyZSBwcmVzZW50LCBkaXNwbGF5IHRoZW1cbiAgICAgIGlmIChtZWFuU3RkRGV2ICYmIG1lYW5TdGREZXYubWVhbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIElmIHRoZSBtb2RhbGl0eSBpcyBDVCwgYWRkIEhVIHRvIGRlbm90ZSBIb3Vuc2ZpZWxkIFVuaXRzXG4gICAgICAgIGxldCBtb1N1ZmZpeCA9ICcnO1xuXG4gICAgICAgIGlmIChtb2RhbGl0eSA9PT0gJ0NUJykge1xuICAgICAgICAgIG1vU3VmZml4ID0gJyBIVSc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgYSBsaW5lIG9mIHRleHQgdG8gZGlzcGxheSB0aGUgbWVhbiBhbmQgYW55IHVuaXRzIHRoYXQgd2VyZSBzcGVjaWZpZWQgKGkuZS4gSFUpXG4gICAgICAgIGxldCBtZWFuVGV4dCA9IGBNZWFuOiAke251bWJlcnNXaXRoQ29tbWFzKG1lYW5TdGREZXYubWVhbi50b0ZpeGVkKDIpKX0ke21vU3VmZml4fWA7XG4gICAgICAgIC8vIENyZWF0ZSBhIGxpbmUgb2YgdGV4dCB0byBkaXNwbGF5IHRoZSBzdGFuZGFyZCBkZXZpYXRpb24gYW5kIGFueSB1bml0cyB0aGF0IHdlcmUgc3BlY2lmaWVkIChpLmUuIEhVKVxuICAgICAgICBsZXQgc3RkRGV2VGV4dCA9IGBTdGREZXY6ICR7bnVtYmVyc1dpdGhDb21tYXMobWVhblN0ZERldi5zdGREZXYudG9GaXhlZCgyKSl9JHttb1N1ZmZpeH1gO1xuXG4gICAgICAgIC8vIElmIHRoaXMgaW1hZ2UgaGFzIFNVViB2YWx1ZXMgdG8gZGlzcGxheSwgY29uY2F0ZW5hdGUgdGhlbSB0byB0aGUgdGV4dCBsaW5lXG4gICAgICAgIGlmIChtZWFuU3RkRGV2U1VWICYmIG1lYW5TdGREZXZTVVYubWVhbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29uc3QgU1VWdGV4dCA9ICcgU1VWOiAnO1xuXG4gICAgICAgICAgbWVhblRleHQgKz0gU1VWdGV4dCArIG51bWJlcnNXaXRoQ29tbWFzKG1lYW5TdGREZXZTVVYubWVhbi50b0ZpeGVkKDIpKTtcbiAgICAgICAgICBzdGREZXZUZXh0ICs9IFNVVnRleHQgKyBudW1iZXJzV2l0aENvbW1hcyhtZWFuU3RkRGV2U1VWLnN0ZERldi50b0ZpeGVkKDIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCB0aGVzZSB0ZXh0IGxpbmVzIHRvIHRoZSBhcnJheSB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIHRleHRib3hcbiAgICAgICAgdGV4dExpbmVzLnB1c2gobWVhblRleHQpO1xuICAgICAgICB0ZXh0TGluZXMucHVzaChzdGREZXZUZXh0KTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlIGFyZWEgaXMgYSBzYW5lIHZhbHVlLCBkaXNwbGF5IGl0XG4gICAgICBpZiAoYXJlYSkge1xuICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIGFyZWEgc3VmZml4IGJhc2VkIG9uIHRoZSBwaXhlbCBzcGFjaW5nIGluIHRoZSBpbWFnZS5cbiAgICAgICAgLy8gSWYgcGl4ZWwgc3BhY2luZyBpcyBwcmVzZW50LCB1c2UgbWlsbGltZXRlcnMuIE90aGVyd2lzZSwgdXNlIHBpeGVscy5cbiAgICAgICAgLy8gVGhpcyB1c2VzIENoYXIgY29kZSAxNzggZm9yIGEgc3VwZXJzY3JpcHQgMlxuICAgICAgICBsZXQgc3VmZml4ID0gYCBtbSR7U3RyaW5nLmZyb21DaGFyQ29kZSgxNzgpfWA7XG5cbiAgICAgICAgaWYgKCFpbWFnZS5yb3dQaXhlbFNwYWNpbmcgfHwgIWltYWdlLmNvbHVtblBpeGVsU3BhY2luZykge1xuICAgICAgICAgIHN1ZmZpeCA9IGAgcGl4ZWxzJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDE3OCl9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBhIGxpbmUgb2YgdGV4dCB0byBkaXNwbGF5IHRoZSBhcmVhIGFuZCBpdHMgdW5pdHNcbiAgICAgICAgY29uc3QgYXJlYVRleHQgPSBgQXJlYTogJHtudW1iZXJzV2l0aENvbW1hcyhhcmVhLnRvRml4ZWQoMikpfSR7c3VmZml4fWA7XG5cbiAgICAgICAgLy8gQWRkIHRoaXMgdGV4dCBsaW5lIHRvIHRoZSBhcnJheSB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIHRleHRib3hcbiAgICAgICAgdGV4dExpbmVzLnB1c2goYXJlYVRleHQpO1xuICAgICAgfVxuXG4gICAgICB0ZXh0TGluZXMucHVzaChgJHtST0lDb250b3VyLnBvbHlnb25Db3VudH0gY29udG91cnNgKTtcblxuICAgICAgcmV0dXJuIHRleHRMaW5lcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0ZXh0Qm94QW5jaG9yUG9pbnRzKHBvaW50cykge1xuICAgICAgcmV0dXJuIHBvaW50cztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW5kcyB0aGUgYWN0aXZlIGRyYXdpbmcgbG9vcCBhbmQgY29tcGxldGVzIHRoZSBwb2x5Z29uLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCAtIFRoZSBlbGVtZW50IG9uIHdoaWNoIHRoZSByb2kgaXMgYmVpbmcgZHJhd24uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBoYW5kbGVOZWFyYnkgLSB0aGUgaGFuZGxlIG5lYXJlc3QgdG8gdGhlIG1vdXNlIGN1cnNvci5cbiAgICovXG4gIF9lbmREcmF3aW5nKGVsZW1lbnQsIGhhbmRsZU5lYXJieSkge1xuICAgIGNvbnN0IHRvb2xTdGF0ZSA9IGdldFRvb2xTdGF0ZShlbGVtZW50LCB0aGlzLm5hbWUpO1xuXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uO1xuXG4gICAgY29uc3QgZGF0YSA9IHRvb2xTdGF0ZS5kYXRhW2NvbmZpZy5jdXJyZW50VG9vbF07XG5cbiAgICBjb25zdCBwb2ludHMgPSBkYXRhLmhhbmRsZXMucG9pbnRzO1xuXG4gICAgZGF0YS5hY3RpdmUgPSBmYWxzZTtcbiAgICBkYXRhLmhpZ2hsaWdodCA9IGZhbHNlO1xuICAgIGRhdGEuaGFuZGxlcy5pbnZhbGlkSGFuZGxlUGxhY2VtZW50ID0gZmFsc2U7XG5cbiAgICAvLyBDb25uZWN0IHRoZSBlbmQgaGFuZGxlIHRvIHRoZSBvcmlnaW4gaGFuZGxlXG4gICAgaWYgKGhhbmRsZU5lYXJieSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwb2ludHNbY29uZmlnLmN1cnJlbnRIYW5kbGUgLSAxXS5saW5lcy5wdXNoKHBvaW50c1swXSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX21vZGlmeWluZykge1xuICAgICAgdGhpcy5fbW9kaWZ5aW5nID0gZmFsc2U7XG4gICAgICBkYXRhLmludmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgIGRhdGEuaW50ZXJwb2xhdGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gUmVzZXQgdGhlIGN1cnJlbnQgaGFuZGxlXG4gICAgY29uZmlnLmN1cnJlbnRIYW5kbGUgPSAwO1xuICAgIGNvbmZpZy5jdXJyZW50VG9vbCA9IC0xO1xuICAgIGRhdGEuY2FuQ29tcGxldGUgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLl9kcmF3aW5nKSB7XG4gICAgICB0aGlzLl9kcmF3aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLl9kZWFjdGl2YXRlRHJhdyhlbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAobW9kdWxlcy5mcmVlaGFuZDNELnN0YXRlLmludGVycG9sYXRlKSB7XG4gICAgICBpbnRlcnBvbGF0ZShkYXRhLCBlbGVtZW50KTtcbiAgICB9XG5cbiAgICB1cGRhdGVJbWFnZShlbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDdXN0b20gY2FsbGJhY2sgZm9yIHdoZW4gdG9vbERhdGEgaXMgZGVsZXRlZC5cbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBldnRcbiAgICovXG4gIF9vbk1lYXN1cmVtZW50UmVtb3ZlZChldnQpIHtcbiAgICBjb25zdCBldmVudERhdGEgPSBldnQuZGV0YWlsO1xuXG4gICAgaWYgKGV2ZW50RGF0YS50b29sVHlwZSAhPT0gdGhpcy5uYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWVhc3VyZW1lbnREYXRhID0gZXZlbnREYXRhLm1lYXN1cmVtZW50RGF0YTtcblxuICAgIHRoaXMuX2ZyZWVoYW5kM0RTdG9yZS5zZXR0ZXJzLmRlY3JlbWVudFBvbHlnb25Db3VudChcbiAgICAgIG1lYXN1cmVtZW50RGF0YS5zZXJpZXNJbnN0YW5jZVVpZCxcbiAgICAgIG1lYXN1cmVtZW50RGF0YS5zdHJ1Y3R1cmVTZXRVaWQsXG4gICAgICBtZWFzdXJlbWVudERhdGEuUk9JQ29udG91clVpZFxuICAgICk7XG4gIH1cblxuICBwYXNzaXZlQ2FsbGJhY2soZWxlbWVudCkge1xuICAgIHRoaXMuX2Nsb3NlVG9vbElmRHJhd2luZyhlbGVtZW50KTtcbiAgICB0aGlzLl9hZGRNZWFzdXJlbWVudFJlbW92ZWRMaXN0ZW5lcihlbGVtZW50KTtcbiAgfVxuXG4gIGVuYWJsZWRDYWxsYmFjayhlbGVtZW50KSB7XG4gICAgdGhpcy5fY2xvc2VUb29sSWZEcmF3aW5nKGVsZW1lbnQpO1xuICAgIHRoaXMuX2FkZE1lYXN1cmVtZW50UmVtb3ZlZExpc3RlbmVyKGVsZW1lbnQpO1xuICB9XG5cbiAgYWN0aXZlQ2FsbGJhY2soZWxlbWVudCkge1xuICAgIHRoaXMuX2FkZE1lYXN1cmVtZW50UmVtb3ZlZExpc3RlbmVyKGVsZW1lbnQpO1xuICB9XG5cbiAgZGlzYWJsZWRDYWxsYmFjayhlbGVtZW50KSB7XG4gICAgdGhpcy5fY2xvc2VUb29sSWZEcmF3aW5nKGVsZW1lbnQpO1xuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihFVkVOVFMuTUVBU1VSRU1FTlRfUkVNT1ZFRCwgdGhpcy5fb25NZWFzdXJlbWVudFJlbW92ZWQpO1xuICB9XG5cbiAgX2FkZE1lYXN1cmVtZW50UmVtb3ZlZExpc3RlbmVyKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoRVZFTlRTLk1FQVNVUkVNRU5UX1JFTU9WRUQsIHRoaXMuX29uTWVhc3VyZW1lbnRSZW1vdmVkKTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoRVZFTlRTLk1FQVNVUkVNRU5UX1JFTU9WRUQsIHRoaXMuX29uTWVhc3VyZW1lbnRSZW1vdmVkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0RnJlZWhhbmRDb25maWd1cmF0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIG1vdXNlTG9jYXRpb246IHtcbiAgICAgIGhhbmRsZXM6IHtcbiAgICAgICAgc3RhcnQ6IHtcbiAgICAgICAgICBoaWdobGlnaHQ6IHRydWUsXG4gICAgICAgICAgYWN0aXZlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHNwYWNpbmc6IDEsXG4gICAgaW50ZXJwb2xhdGVkSGFuZGxlUmFkaXVzOiAwLjUsXG4gICAgaW50ZXJwb2xhdGVkQWxwaGE6IDAuNSxcbiAgICBhY3RpdmVIYW5kbGVSYWRpdXM6IDMsXG4gICAgY29tcGxldGVIYW5kbGVSYWRpdXM6IDYsXG4gICAgY29tcGxldGVIYW5kbGVSYWRpdXNUb3VjaDogMjgsXG4gICAgYWx3YXlzU2hvd0hhbmRsZXM6IGZhbHNlLFxuICAgIGludmFsaWRDb2xvcjogJ2NyaW1zb24nLFxuICAgIGN1cnJlbnRIYW5kbGU6IDAsXG4gICAgY3VycmVudFRvb2w6IC0xXG4gIH07XG59XG5cbmZ1bmN0aW9uIHByZXZlbnRQcm9wYWdhdGlvbihldnQpIHtcbiAgZXZ0LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdHV6ei9uLWRpbWVuc2lvbmFsLWZsb29kLWZpbGxcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICBsZXQgZ2V0dGVyLCBzZWVkLCBvbkZsb29kLCBvbkJvdW5kYXJ5LCBlcXVhbHMsIGRpYWdvbmFscywgc3RhcnROb2RlLCBwZXJtdXRhdGlvbnMsIHN0YWNrLCBmbG9vZGVkLCB2aXNpdHMsIGJvdW5kcztcblxuICBsZXQgaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBnZXR0ZXIgPSBvcHRpb25zLmdldHRlcjtcbiAgICBzZWVkID0gb3B0aW9ucy5zZWVkO1xuICAgIG9uRmxvb2QgPSBvcHRpb25zLm9uRmxvb2QgfHwgbm9vcDtcbiAgICBvbkJvdW5kYXJ5ID0gb3B0aW9ucy5vbkJvdW5kYXJ5IHx8IG5vb3A7XG4gICAgZXF1YWxzID0gb3B0aW9ucy5lcXVhbHMgfHwgZGVmYXVsdEVxdWFscztcbiAgICBkaWFnb25hbHMgPSBvcHRpb25zLmRpYWdvbmFscyB8fCBmYWxzZTtcbiAgICBzdGFydE5vZGUgPSBnZXQoc2VlZCk7XG4gICAgcGVybXV0YXRpb25zID0gcHJ1bmVkUGVybXV0YXRpb25zKCk7XG4gICAgc3RhY2sgPSBbXTtcbiAgICBmbG9vZGVkID0gW107XG4gICAgdmlzaXRzID0ge307XG4gICAgYm91bmRzID0ge307XG4gIH07XG5cbiAgbGV0IG1haW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgc3RhY2sucHVzaCh7IGN1cnJlbnRBcmdzOiBzZWVkIH0pO1xuXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgIGZsb29kKHN0YWNrLnBvcCgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZmxvb2RlZDogZmxvb2RlZCxcbiAgICAgIGJvdW5kYXJpZXM6IGJvdW5kYXJpZXMoKVxuICAgIH07XG4gIH07XG5cbiAgbGV0IGZsb29kID0gZnVuY3Rpb24gKGpvYikge1xuICAgIGxldCBnZXRBcmdzID0gam9iLmN1cnJlbnRBcmdzO1xuICAgIGxldCBwcmVsZXRncyA9IGpvYi5wcmV2aW91c0FyZ3M7XG5cbiAgICBpZiAodmlzaXRlZChnZXRBcmdzKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBtYXJrQXNWaXNpdGVkKGdldEFyZ3MpO1xuXG4gICAgaWYgKG1lbWJlcihnZXRBcmdzKSkge1xuICAgICAgbWFya0FzRmxvb2RlZChnZXRBcmdzKTtcbiAgICAgIHB1c2hBZGphY2VudChnZXRBcmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWFya0FzQm91bmRhcnkocHJlbGV0Z3MpO1xuICAgIH1cbiAgfTtcblxuICBsZXQgdmlzaXRlZCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gdmlzaXRzW2tleV0gPT09IHRydWU7XG4gIH07XG5cbiAgbGV0IG1hcmtBc1Zpc2l0ZWQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmlzaXRzW2tleV0gPSB0cnVlO1xuICB9O1xuXG4gIGxldCBtZW1iZXIgPSBmdW5jdGlvbiAoZ2V0QXJncykge1xuICAgIGxldCBub2RlID0gc2FmZWx5KGdldCwgW2dldEFyZ3NdKTtcblxuICAgIHJldHVybiBzYWZlbHkoZXF1YWxzLCBbbm9kZSwgc3RhcnROb2RlXSk7XG4gIH07XG5cbiAgbGV0IG1hcmtBc0Zsb29kZWQgPSBmdW5jdGlvbiAoZ2V0QXJncykge1xuICAgIGZsb29kZWQucHVzaChnZXRBcmdzKTtcbiAgICBvbkZsb29kLmFwcGx5KHVuZGVmaW5lZCwgZ2V0QXJncyk7XG4gIH07XG5cbiAgbGV0IG1hcmtBc0JvdW5kYXJ5ID0gZnVuY3Rpb24gKHByZWxldGdzKSB7XG4gICAgYm91bmRzW3ByZWxldGdzXSA9IHByZWxldGdzO1xuICAgIG9uQm91bmRhcnkuYXBwbHkodW5kZWZpbmVkLCBwcmVsZXRncyk7XG4gIH07XG5cbiAgbGV0IHB1c2hBZGphY2VudCA9IGZ1bmN0aW9uIChnZXRBcmdzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwZXJtdXRhdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGxldCBwZXJtID0gcGVybXV0YXRpb25zW2ldO1xuICAgICAgbGV0IG5leHRBcmdzID0gZ2V0QXJncy5zbGljZSgwKTtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnZXRBcmdzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIG5leHRBcmdzW2pdICs9IHBlcm1bal07XG4gICAgICB9XG5cbiAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICBjdXJyZW50QXJnczogbmV4dEFyZ3MsXG4gICAgICAgIHByZXZpb3VzQXJnczogZ2V0QXJnc1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGxldCBnZXQgPSBmdW5jdGlvbiAoZ2V0QXJncykge1xuICAgIHJldHVybiBnZXR0ZXIuYXBwbHkodW5kZWZpbmVkLCBnZXRBcmdzKTtcbiAgfTtcblxuICBsZXQgc2FmZWx5ID0gZnVuY3Rpb24gKGYsIGFyZ3MpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGYuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge31cbiAgfTtcblxuICBsZXQgbm9vcCA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gIGxldCBkZWZhdWx0RXF1YWxzID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYSA9PT0gYjtcbiAgfTtcblxuICBsZXQgcHJ1bmVkUGVybXV0YXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBwZXJtdXRhdGlvbnMgPSBwZXJtdXRlKHNlZWQubGVuZ3RoKTtcblxuICAgIHJldHVybiBwZXJtdXRhdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChwZXJtKSB7XG4gICAgICBsZXQgY291bnQgPSBjb3VudE5vblplcm9lcyhwZXJtKTtcblxuICAgICAgcmV0dXJuIGNvdW50ICE9PSAwICYmIChjb3VudCA9PT0gMSB8fCBkaWFnb25hbHMpO1xuICAgIH0pO1xuICB9O1xuXG4gIGxldCBwZXJtdXRlID0gZnVuY3Rpb24gKGxlbmd0aCkge1xuICAgIGxldCBwZXJtcyA9IFtdO1xuXG4gICAgbGV0IHBlcm11dGF0aW9uID0gZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgcmV0dXJuIHN0cmluZy5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChjLCAxMCkgLSAxO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5wb3coMywgbGVuZ3RoKTsgaSArPSAxKSB7XG4gICAgICBsZXQgc3RyaW5nID0gbHBhZChpLnRvU3RyaW5nKDMpLCAnMCcsIGxlbmd0aCk7XG5cbiAgICAgIHBlcm1zLnB1c2gocGVybXV0YXRpb24oc3RyaW5nKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBlcm1zO1xuICB9O1xuXG4gIGxldCBscGFkID0gZnVuY3Rpb24gKHN0cmluZywgY2hhcmFjdGVyLCBsZW5ndGgpIHtcbiAgICBsZXQgYXJyYXkgPSBuZXcgQXJyYXkobGVuZ3RoICsgMSk7XG4gICAgbGV0IHBhZCA9IGFycmF5LmpvaW4oY2hhcmFjdGVyKTtcblxuICAgIHJldHVybiAocGFkICsgc3RyaW5nKS5zbGljZSgtbGVuZ3RoKTtcbiAgfTtcblxuICBsZXQgY291bnROb25aZXJvZXMgPSBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGFycmF5W2ldICE9PSAwKSB7XG4gICAgICAgIGNvdW50ICs9IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvdW50O1xuICB9O1xuXG4gIGxldCBib3VuZGFyaWVzID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBhcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQga2V5IGluIGJvdW5kcykge1xuICAgICAgaWYgKGJvdW5kcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGFycmF5LnVuc2hpZnQoYm91bmRzW2tleV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcnJheTtcbiAgfTtcblxuICBpbml0aWFsaXplKCk7XG4gIHJldHVybiBtYWluKCk7XG59O1xuIiwiaW1wb3J0IHsgc3RvcmUgfSBmcm9tICdjb3JuZXJzdG9uZS10b29scyc7XG5cbmNvbnN0IG1vZHVsZXMgPSBzdG9yZS5tb2R1bGVzO1xuXG5leHBvcnQgY2xhc3MgUG9seWdvbiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHBvaW50cyxcbiAgICBzb3BJbnN0YW5jZVVpZCxcbiAgICBzZXJpZXNJbnN0YW5jZVVpZCxcbiAgICBzdHJ1Y3R1cmVTZXRVaWQsXG4gICAgUk9JQ29udG91clVpZCxcbiAgICBwb2x5Z29uVWlkLFxuICAgIGZyYW1lTnVtYmVyLFxuICAgIGludGVycG9sYXRlZFxuICApIHtcbiAgICB0aGlzLl9wb2x5UG9pbnRzID0gdGhpcy5fZGVlcENvcHlQb2ludHMocG9pbnRzKTtcbiAgICB0aGlzLl9zb3BJbnN0YW5jZVVpZCA9IHNvcEluc3RhbmNlVWlkO1xuICAgIHRoaXMuX3Nlcmllc0luc3RhbmNlVWlkID0gc2VyaWVzSW5zdGFuY2VVaWQ7XG4gICAgdGhpcy5fc3RydWN0dXJlU2V0VWlkID0gc3RydWN0dXJlU2V0VWlkO1xuICAgIHRoaXMuX1JPSUNvbnRvdXJVaWQgPSBST0lDb250b3VyVWlkO1xuICAgIHRoaXMuX3BvbHlnb25VaWQgPSBwb2x5Z29uVWlkO1xuICAgIHRoaXMuX2ZyYW1lTnVtYmVyID0gZnJhbWVOdW1iZXI7XG4gICAgdGhpcy5faW50ZXJwb2xhdGVkID0gaW50ZXJwb2xhdGVkO1xuICB9XG5cbiAgX2RlZXBDb3B5UG9pbnRzKHBvaW50cykge1xuICAgIC8vIENyZWF0ZXMgYSBkZWVwIGNvcHkgb2YgdGhlIHBvaW50cyBhcnJheVxuICAgIGNvbnN0IHBvbHlQb2ludHMgPSBbXTtcbiAgICBjb25zdCBpc1ogPSBwb2ludHNbMF0ueiAhPT0gdW5kZWZpbmVkO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHBvbHlQb2ludHMucHVzaCh7XG4gICAgICAgIHg6IHBvaW50c1tpXS54LFxuICAgICAgICB5OiBwb2ludHNbaV0ueVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChpc1opIHtcbiAgICAgICAgcG9seVBvaW50c1tpXS56ID0gcG9pbnRzW2ldLno7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvbHlQb2ludHM7XG4gIH1cblxuICBnZXRGcmVlaGFuZFRvb2xEYXRhKGltcG9ydFR5cGUpIHtcbiAgICBjb25zdCBzZXJpZXNJbnN0YW5jZVVpZCA9IHRoaXMuX3Nlcmllc0luc3RhbmNlVWlkO1xuICAgIGNvbnN0IHN0cnVjdHVyZVNldFVpZCA9IHRoaXMuX3N0cnVjdHVyZVNldFVpZDtcbiAgICBjb25zdCBST0lDb250b3VyVWlkID0gdGhpcy5fUk9JQ29udG91clVpZDtcblxuICAgIGNvbnN0IGZyZWVoYW5kM0RTdG9yZSA9IG1vZHVsZXMuZnJlZWhhbmQzRDtcblxuICAgIGNvbnN0IHJlZmVyZW5jZWRST0lDb250b3VyID0gZnJlZWhhbmQzRFN0b3JlLmdldHRlcnMuUk9JQ29udG91cihzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkLCBST0lDb250b3VyVWlkKTtcbiAgICBjb25zdCByZWZlcmVuY2VkU3RydWN0dXJlU2V0ID0gZnJlZWhhbmQzRFN0b3JlLmdldHRlcnMuc3RydWN0dXJlU2V0KHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQpO1xuXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHVpZDogdGhpcy5fcG9seWdvblVpZCxcbiAgICAgIHNlcmllc0luc3RhbmNlVWlkLFxuICAgICAgc3RydWN0dXJlU2V0VWlkLFxuICAgICAgUk9JQ29udG91clVpZCxcbiAgICAgIHJlZmVyZW5jZWRST0lDb250b3VyLFxuICAgICAgcmVmZXJlbmNlZFN0cnVjdHVyZVNldCxcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgaW52YWxpZGF0ZWQ6IHRydWUsXG4gICAgICBoYW5kbGVzOiB7XG4gICAgICAgIHBvaW50czogW11cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuX3NvcEluc3RhbmNlVWlkKSB7XG4gICAgICBkYXRhLnNvcEluc3RhbmNlVUlEID0gdGhpcy5fc29wSW5zdGFuY2VVaWQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2ludGVycG9sYXRlZCkge1xuICAgICAgZGF0YS5pbnRlcnBvbGF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuX2dlbmVyYXRlUG9pbnRzKGRhdGEuaGFuZGxlcy5wb2ludHMpO1xuXG4gICAgZGF0YS5oYW5kbGVzLnRleHRCb3ggPSB7XG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgaGFzTW92ZWQ6IGZhbHNlLFxuICAgICAgbW92ZXNJbmRlcGVuZGVudGx5OiBmYWxzZSxcbiAgICAgIGRyYXduSW5kZXBlbmRlbnRseTogdHJ1ZSxcbiAgICAgIGFsbG93ZWRPdXRzaWRlSW1hZ2U6IHRydWUsXG4gICAgICBoYXNCb3VuZGluZ0JveDogdHJ1ZVxuICAgIH07XG5cbiAgICBkYXRhLnBvbHlCb3VuZGluZ0JveCA9IHt9O1xuXG4gICAgZGF0YS50b0JlU2NhbGVkID0gaW1wb3J0VHlwZTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgX2dlbmVyYXRlUG9pbnRzKHBvaW50cykge1xuICAgIC8vIENvbnN0cnVjdCBkYXRhLmhhbmRsZXMucG9pbnRzIGFycmF5XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wb2x5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwb2ludHMucHVzaCh0aGlzLl9kZWVwQ29weU9uZVBvaW50KGkpKTtcbiAgICB9XG5cbiAgICAvLyBHZW5lcmF0ZSBsaW5lcyB0byBiZSBkcmF3blxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA9PT0gcG9pbnRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgcG9pbnRzW2ldLmxpbmVzLnB1c2gocG9pbnRzWzBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvaW50c1tpXS5saW5lcy5wdXNoKHBvaW50c1tpICsgMV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9kZWVwQ29weU9uZVBvaW50KGkpIHtcbiAgICBsZXQgcG9pbnQgPSB7XG4gICAgICB4OiB0aGlzLl9wb2x5UG9pbnRzW2ldLngsXG4gICAgICB5OiB0aGlzLl9wb2x5UG9pbnRzW2ldLnksXG4gICAgICBsaW5lczogW11cbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuX3BvbHlQb2ludHNbaV0ueiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwb2ludC56ID0gdGhpcy5fcG9seVBvaW50c1tpXS56O1xuICAgIH1cblxuICAgIHJldHVybiBwb2ludDtcbiAgfVxuXG4gIGdldCBwb2x5UG9pbnRzKCkge1xuICAgIHJldHVybiB0aGlzLl9wb2x5UG9pbnRzO1xuICB9XG4gIGdldCBzb3BJbnN0YW5jZVVpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc29wSW5zdGFuY2VVaWQ7XG4gIH1cblxuICBnZXQgdWlkKCkge1xuICAgIHJldHVybiB0aGlzLl9wb2x5Z29uVWlkO1xuICB9XG5cbiAgZ2V0IGZyYW1lTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLl9mcmFtZU51bWJlcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2xvYmFsSW1hZ2VJZFNwZWNpZmljVG9vbFN0YXRlTWFuYWdlciwgZ2V0VG9vbFN0YXRlIH0gZnJvbSAnY29ybmVyc3RvbmUtdG9vbHMnO1xuXG5jb25zdCBnbG9iYWxUb29sU3RhdGVNYW5hZ2VyID0gZ2xvYmFsSW1hZ2VJZFNwZWNpZmljVG9vbFN0YXRlTWFuYWdlcjtcblxuLyoqXG4gKiBnZW5lcmF0ZUludGVycG9sYXRpb25MaXN0IC0gR2VuZXJhdGUgdGhlIGxpc3Qgb2YgY29udG91cnMgdG8gaW50ZXJwb2xhdGUsXG4gKiBpbmNsdWRpbmcgd2hldGhlciB0aGV5IGFyZSBuZXcgY29udG91cnMsIG9yIGludGVycG9sYXRlZCBjb250b3VycyB0aGF0IG5lZWRcbiAqIHRvIGJlIHVwZGF0ZWQuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSB0b29sRGF0YSBUaGUgdG9vbCBkYXRhIG9mIHRoZSBmcmVlaGFuZDNEIGNvbnRvdXIuXG4gKiBAcmV0dXJuIHtvYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBST0lDb250b3VyRGF0YSBhbmQgdGhlXG4gKiBpbnRlcnBvbGF0aW9uTGlzdC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHRvb2xEYXRhLCBlbGVtZW50KSB7XG4gIGNvbnN0IFJPSUNvbnRvdXJVaWQgPSB0b29sRGF0YS5ST0lDb250b3VyVWlkO1xuICBjb25zdCBpbWFnZUlkcyA9IF9nZXRJbWFnZUlkc09mQWN0aXZlU2VyaWVzKGVsZW1lbnQpO1xuICBjb25zdCBST0lDb250b3VyRGF0YSA9IF9nZXRST0lDb250b3VyRGF0YShpbWFnZUlkcywgUk9JQ29udG91clVpZCk7XG4gIGNvbnN0IGV4dGVudCA9IF9nZXRFeHRlbnRPZlJlZ2lvbihST0lDb250b3VyRGF0YSk7XG4gIGNvbnN0IHNsaWNlRWRpdGVkID0gX2dldFNsaWNlUG9zaXRpb25PZlRvb2xEYXRhKFJPSUNvbnRvdXJEYXRhLCB0b29sRGF0YS51aWQpO1xuXG4gIGNvbnN0IGludGVycG9sYXRpb25MaXN0ID0gW107XG5cbiAgLy8gQ2hlY2sgaWYgY29udG91cnMgYmV0d2VlbiB0aGUgZXh0ZW50IGNhbiBiZSBpbnRlcnBvbGF0ZWQuXG4gIGZvciAobGV0IGkgPSBleHRlbnRbMF0gKyAxOyBpIDw9IGV4dGVudFsxXSAtIDE7IGkrKykge1xuICAgIGlmIChfc2xpY2VOZWVkc0ludGVycG9sYXRpbmcoUk9JQ29udG91ckRhdGEsIGkpKSB7XG4gICAgICBjb25zdCBjb250b3VyUGFpciA9IF9nZXRCb3VuZGluZ1BhaXIoaSwgZXh0ZW50LCBST0lDb250b3VyRGF0YSk7XG5cbiAgICAgIGlmIChjb250b3VyUGFpciAmJiAoY29udG91clBhaXJbMF0gPT09IHNsaWNlRWRpdGVkIHx8IGNvbnRvdXJQYWlyWzFdID09PSBzbGljZUVkaXRlZCkpIHtcbiAgICAgICAgX2FwcGVuZGludGVycG9sYXRpb25MaXN0KGNvbnRvdXJQYWlyLCBpbnRlcnBvbGF0aW9uTGlzdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBST0lDb250b3VyRGF0YSxcbiAgICBpbnRlcnBvbGF0aW9uTGlzdFxuICB9O1xufVxuXG4vKipcbiAqIF9nZXRTbGljZVBvc2l0aW9uT2ZUb29sRGF0YSAtIEZpbmRzIHRoZSBzbGljZSB0aGF0IHdhcyBlZGl0ZWQuXG4gKlxuICogQHBhcmFtICB7dHlwZX0gUk9JQ29udG91ckRhdGEgZGVzY3JpcHRpb25cbiAqIEBwYXJhbSAge3R5cGV9IHBvbHlnb25VaWQgICAgIGRlc2NyaXB0aW9uXG4gKiBAcmV0dXJuIHt0eXBlfSAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxuICovXG5mdW5jdGlvbiBfZ2V0U2xpY2VQb3NpdGlvbk9mVG9vbERhdGEoUk9JQ29udG91ckRhdGEsIHBvbHlnb25VaWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBST0lDb250b3VyRGF0YS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChST0lDb250b3VyRGF0YVtpXS5jb250b3Vycykge1xuICAgICAgY29uc3QgY29udG91cnMgPSBST0lDb250b3VyRGF0YVtpXS5jb250b3VycztcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb250b3Vycy5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoY29udG91cnNbal0udWlkID09PSBwb2x5Z29uVWlkKSB7XG4gICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm47XG59XG5cbi8qKlxuICogX2dldEltYWdlSWRzT2ZBY3RpdmVTZXJpZXMgLSByZXR1cm5zIGFuIGFycmF5IG9mIHRoZSBpbWFnZUlkcyBmb3IgdGhlIGN1cnJlbnRcbiAqIGFjdGl2ZSBzZXJpZXMuXG4gKlxuICogQHJldHVybiB7U3RyaW5nW119IEFuIGFycmF5IG9mIGltYWdlSWRzLlxuICovXG5cbmZ1bmN0aW9uIF9nZXRJbWFnZUlkc09mQWN0aXZlU2VyaWVzKGVsZW1lbnQpIHtcbiAgY29uc3Qgc3RhY2tUb29sU3RhdGUgPSBnZXRUb29sU3RhdGUoZWxlbWVudCwgJ3N0YWNrJyk7XG5cbiAgcmV0dXJuIHN0YWNrVG9vbFN0YXRlLmRhdGFbMF0uaW1hZ2VJZHM7XG59XG5cbi8qKlxuICogX2dldFJPSUNvbnRvdXJEYXRhIC0gR2VuZXJhdGVzIGEgbGlzdCBvZiB0aGUgc2xpY2UgbG9jYXRpb25zIG9mIHRoZSAyRFxuICogcG9seWdvbnMgdGhhdCBtYWtlIHVwIHRoZSBST0lDb250b3VyLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ1tdfSBpbWFnZUlkcyAgQW4gYXJyYXkgb2YgSW1hZ2UgSWRzLlxuICogQHBhcmFtICB7dHlwZX0gUk9JQ29udG91clVpZCBUaGUgVUlEIG9mIHRoZSBST0lDb250b3VyLlxuICogQHJldHVybiB7b2JqZWN0W119ICAgICAgICAgICBUaGUgbGlzdCBvZiBjb250b3VyIGxvY2F0aW9ucyBpbiB0aGUgc3RhY2suXG4gKi9cblxuZnVuY3Rpb24gX2dldFJPSUNvbnRvdXJEYXRhKGltYWdlSWRzLCBST0lDb250b3VyVWlkKSB7XG4gIGNvbnN0IFJPSUNvbnRvdXJEYXRhID0gW107XG4gIGNvbnN0IHRvb2xTdGF0ZU1hbmFnZXIgPSBnbG9iYWxUb29sU3RhdGVNYW5hZ2VyLnNhdmVUb29sU3RhdGUoKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlSWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgaW1hZ2VJZCA9IGltYWdlSWRzW2ldO1xuICAgIGNvbnN0IGltYWdlVG9vbFN0YXRlID0gdG9vbFN0YXRlTWFuYWdlcltpbWFnZUlkXTtcblxuICAgIGlmICghaW1hZ2VUb29sU3RhdGUgfHwgIWltYWdlVG9vbFN0YXRlLmZyZWVoYW5kUm9pKSB7XG4gICAgICBST0lDb250b3VyRGF0YS5wdXNoKHtcbiAgICAgICAgaW1hZ2VJZFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbnRvdXJzID0gaW1hZ2VUb29sU3RhdGUuZnJlZWhhbmRSb2kuZGF0YS5maWx0ZXIoY29udG91ciA9PiB7XG4gICAgICAgIHJldHVybiBjb250b3VyLlJPSUNvbnRvdXJVaWQgPT09IFJPSUNvbnRvdXJVaWQ7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgY29udG91cnNPblNsaWNlID0ge1xuICAgICAgICBpbWFnZUlkXG4gICAgICB9O1xuXG4gICAgICBpZiAoY29udG91cnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnRvdXJzT25TbGljZS5jb250b3VycyA9IGNvbnRvdXJzO1xuICAgICAgfVxuXG4gICAgICBST0lDb250b3VyRGF0YS5wdXNoKGNvbnRvdXJzT25TbGljZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFJPSUNvbnRvdXJEYXRhO1xufVxuXG4vKipcbiAqIF9nZXRFeHRlbnRPZlJlZ2lvbiAtIFJldHVybnMgYSAyIGVsZW1lbnQgYXJyYXkgd2l0aCB0aGUgc2xpY2UgbG9jYXRpb25zIG9mXG4gKiB0b3AgYW5kIGJvdHRvbSBwb2x5Z29uIG9mIHRoZSBST0lDb250b3VyLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gUk9JQ29udG91ckRhdGEgIERhdGEgb24gdGhlIHNsaWNlIGxvY2F0aW9uIG9mIGNvbnRvdXJzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIFJPSUNvbnRvdXIuXG4gKiBAcmV0dXJuIHtOdW1iZXJbXX0gICAgICAgICAgICAgICBUaGUgc2xpY2UgbG9jYXRpb25zIG9mIHRoZSB0b3AgYW5kIGJvdHRvbVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9seWdvbiBvZiB0aGUgUk9JQ29udG91ci5cbiAqL1xuXG5mdW5jdGlvbiBfZ2V0RXh0ZW50T2ZSZWdpb24oUk9JQ29udG91ckRhdGEpIHtcbiAgY29uc3QgZXh0ZW50ID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBST0lDb250b3VyRGF0YS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChST0lDb250b3VyRGF0YVtpXS5jb250b3Vycykge1xuICAgICAgZXh0ZW50LnB1c2goaSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpID0gUk9JQ29udG91ckRhdGEubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAoUk9JQ29udG91ckRhdGFbaV0uY29udG91cnMpIHtcbiAgICAgIGV4dGVudC5wdXNoKGkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGV4dGVudDtcbn1cblxuLyoqXG4gKiBfc2xpY2VOZWVkc0ludGVycG9sYXRpbmcgLSBDaGVjayB3aGV0aGVyIHRoZXJlIGFyZSBubyBjb250b3VycyBvbiB0aGlzXG4gKiBzbGljZSwgb3Igb25lIHdoaWNoIGlzIGFuIGludGVycG9sYXRlZCBjb250b3VyLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gUk9JQ29udG91ckRhdGEgIERhdGEgb24gdGhlIHNsaWNlIGxvY2F0aW9uIG9mIGNvbnRvdXJzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIFJPSUNvbnRvdXIuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHNsaWNlSW5kZXggICAgICBUaGUgc2xpY2UgaW5kZXguXG4gKiBAcmV0dXJuIHtib29sZWFufSAgICAgICAgICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgc2xpY2UgbmVlZHMgaW50ZXJwb2xhdGluZy5cbiAqL1xuZnVuY3Rpb24gX3NsaWNlTmVlZHNJbnRlcnBvbGF0aW5nKFJPSUNvbnRvdXJEYXRhLCBzbGljZUluZGV4KSB7XG4gIHJldHVybiAoXG4gICAgIVJPSUNvbnRvdXJEYXRhW3NsaWNlSW5kZXhdLmNvbnRvdXJzIHx8XG4gICAgKFJPSUNvbnRvdXJEYXRhW3NsaWNlSW5kZXhdLmNvbnRvdXJzLmxlbmd0aCA9PT0gMSAmJiBST0lDb250b3VyRGF0YVtzbGljZUluZGV4XS5jb250b3Vyc1swXS5pbnRlcnBvbGF0ZWQpXG4gICk7XG59XG5cbi8qKlxuICogX2FwcGVuZGludGVycG9sYXRpb25MaXN0IC0gSWYgdGhlIGNvbnRvdXIgb24gc2xpY2UgaSBjYW4gYmUgdXBkYXRlZCwgYWRkIGl0IHRvIHRoZVxuICogaW50ZXJwb2xhdGlvbkxpc3QuXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSBzbGljZUluZGV4ICAgICAgVGhlIHNsaWNlIGluZGV4LlxuICogQHBhcmFtICB7TnVtYmVyW119IGV4dGVudCAgICAgICAgVGhlIGV4dGVudCBvZiBzbGljZSBvY2N1cGFuY3kgb2YgdGhlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBST0lDb250b3VyLlxuICogQHBhcmFtICB7b2JqZWN0W119IFJPSUNvbnRvdXJEYXRhICBEYXRhIGZvciB0aGUgc2xpY2UgbG9jYXRpb24gb2YgY29udG91cnNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgUk9JQ29udG91ci5cbiAqIEBwYXJhbSAge29iamVjdFtdfSBpbnRlcnBvbGF0aW9uTGlzdCBUaGUgbGlzdCBvZiBjb250b3VycyB0byBiZSBpbnRlcnBvbGF0ZWQuXG4gKiBAcmV0dXJuIHtudWxsfVxuICovXG5mdW5jdGlvbiBfYXBwZW5kaW50ZXJwb2xhdGlvbkxpc3QoY29udG91clBhaXIsIGludGVycG9sYXRpb25MaXN0KSB7XG4gIGlmICghaW50ZXJwb2xhdGlvbkxpc3RbY29udG91clBhaXJbMF1dKSB7XG4gICAgaW50ZXJwb2xhdGlvbkxpc3RbY29udG91clBhaXJbMF1dID0ge1xuICAgICAgcGFpcjogY29udG91clBhaXIsXG4gICAgICBsaXN0OiBbXVxuICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBfZ2V0Qm91bmRpbmdQYWlyIC0gR2l2ZW4gdGhlIHNsaWNlIGluZGV4IGFuZCBleHRlbnQgb2YgdGhlIFJPSUNvbnRvdXIsXG4gKiBnZXQgdGhlIHBhaXIgb2YgcG9seWdvbnMgdG8gdXNlIGZvciBpbnRlcnBvbGF0aW9uIG9mIHRoZSBzbGljZS4gUmV0dXJuc1xuICogdW5kZWZpbmVkIGlmIHRoZXJlIGlzIGFuIGFtYmlndWl0eSBhbmQgaW50ZXJwb2xhdGlvbiBjYW4ndCB0YWtlIHBsYWNlLlxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gc2xpY2VJbmRleCAgIFRoZSBzbGljZSBpbmRleC5cbiAqIEBwYXJhbSAge051bWJlcltdfSBleHRlbnQgICAgICAgIFRoZSBleHRlbnQgb2Ygc2xpY2Ugb2NjdXBhbmN5IG9mIHRoZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUk9JQ29udG91ci5cbiAqIEBwYXJhbSAge29iamVjdFtdfSBST0lDb250b3VyRGF0YSAgRGF0YSBmb3IgdGhlIHNsaWNlIGxvY2F0aW9uIG9mIGNvbnRvdXJzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIFJPSUNvbnRvdXIuXG4gKiBAcmV0dXJuIHtOdW1iZXJbXSB8fCB1bmRlZmluZWR9ICBUaGUgcGFpciBvZiBzbGljZSBpbmRpY2llcywgb3IgdW5kZWZpbmVkIGlmXG4gKiB0aGUgY29udG91cnMgdG8gdXNlIGZvciBpbnRlcnBvbGF0aW9uIGlzIGFtYmlndW91cy5cbiAqL1xuXG5mdW5jdGlvbiBfZ2V0Qm91bmRpbmdQYWlyKHNsaWNlSW5kZXgsIGV4dGVudCwgUk9JQ29udG91ckRhdGEpIHtcbiAgbGV0IGNvbnRvdXJQYWlyID0gW107XG4gIGxldCBjYW5JbnRlcnBvbGF0ZSA9IHRydWU7XG5cbiAgLy8gQ2hlY2sgZm9yIG5lYXJlc3QgbG93ZXN0IHNsaWNlSW5kZXggY29udGFpbmluZyBjb250b3Vycy5cbiAgZm9yIChsZXQgaSA9IHNsaWNlSW5kZXggLSAxOyBpID49IGV4dGVudFswXTsgaS0tKSB7XG4gICAgaWYgKFJPSUNvbnRvdXJEYXRhW2ldLmNvbnRvdXJzKSB7XG4gICAgICBjb25zdCBjb250b3VycyA9IFJPSUNvbnRvdXJEYXRhW2ldLmNvbnRvdXJzO1xuXG4gICAgICBpZiAoY29udG91cnNbMF0uaW50ZXJwb2xhdGVkKSB7XG4gICAgICAgIC8vIFRoaXMgY29udG91ciBpcyBpbnRlcnBvbGF0ZWQuIFdlIG5lZWQgdG9cbiAgICAgICAgLy8gRmluZCBhIHNvbGlkIGNvbnRvdXIgdG8gaW50ZXJwb2xhdGUgZnJvbS5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb250b3Vycy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNhbkludGVycG9sYXRlID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIEZvdW5kIHNpbmdsZSwgbm9uIGludGVycG9sYXRlZCBjb250b3VyIHRvIGludGVycG9sYXRlIGZyb20uXG4gICAgICBjb250b3VyUGFpci5wdXNoKGkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjYW5JbnRlcnBvbGF0ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIENoZWNrIGZvciBuZWFyZXN0IHVwcGVyIHNsaWNlSW5kZXggY29udGFpbmluZyBjb250b3Vycy5cbiAgZm9yIChsZXQgaSA9IHNsaWNlSW5kZXggKyAxOyBpIDw9IGV4dGVudFsxXTsgaSsrKSB7XG4gICAgaWYgKFJPSUNvbnRvdXJEYXRhW2ldLmNvbnRvdXJzKSB7XG4gICAgICBjb25zdCBjb250b3VycyA9IFJPSUNvbnRvdXJEYXRhW2ldLmNvbnRvdXJzO1xuXG4gICAgICBpZiAoY29udG91cnNbMF0uaW50ZXJwb2xhdGVkKSB7XG4gICAgICAgIC8vIFRoaXMgY29udG91ciBpcyBpbnRlcnBvbGF0ZWQuIFdlIG5lZWQgdG9cbiAgICAgICAgLy8gRmluZCBhIHNvbGlkIGNvbnRvdXIgdG8gaW50ZXJwb2xhdGUgZnJvbS5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb250b3Vycy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNhbkludGVycG9sYXRlID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGNvbnRvdXJQYWlyLnB1c2goaSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoIWNhbkludGVycG9sYXRlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRvdXJQYWlyO1xufVxuIiwiaW1wb3J0IHsgZ2xvYmFsSW1hZ2VJZFNwZWNpZmljVG9vbFN0YXRlTWFuYWdlciwgc3RvcmUgfSBmcm9tICdjb3JuZXJzdG9uZS10b29scyc7XG5cbmltcG9ydCB7IFBvbHlnb24gfSBmcm9tICcuLi9jbGFzc2VzL1BvbHlnb24uanMnO1xuaW1wb3J0IGdlbmVyYXRlVUlEIGZyb20gJy4uL2dlbmVyYXRlVUlELmpzJztcbmltcG9ydCBnZW5lcmF0ZUludGVycG9sYXRpb25EYXRhIGZyb20gJy4vZ2VuZXJhdGVJbnRlcnBvbGF0aW9uRGF0YS5qcyc7XG5cbmNvbnN0IGdsb2JhbFRvb2xTdGF0ZU1hbmFnZXIgPSBnbG9iYWxJbWFnZUlkU3BlY2lmaWNUb29sU3RhdGVNYW5hZ2VyO1xuY29uc3QgZFAgPSAwLjI7IC8vIEFpbSBmb3IgPCAwLjJtbSBiZXR3ZWVuIGludGVycG9sYXRlZCBub2RlcyB3aGVuIHN1cGVyLXNhbXBsaW5nLlxuY29uc3QgbW9kdWxlcyA9IHN0b3JlLm1vZHVsZXM7XG5cbi8qKlxuICogaW50ZXJwb2xhdGUgLSBJbnRlcnBvbGF0ZSBtaXNzaW5nIGNvbnRvdXJzIGluIHRoZSBST0lDb250b3VyLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gdG9vbERhdGEgVGhlIHRvb2wgZGF0YSBvZiB0aGUgZnJlZWhhbmQzRCBjb250b3VyLlxuICogQHJldHVybiB7bnVsbH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHRvb2xEYXRhLCBlbGVtZW50KSB7XG4gIGNvbnN0IHsgUk9JQ29udG91ckRhdGEsIGludGVycG9sYXRpb25MaXN0IH0gPSBnZW5lcmF0ZUludGVycG9sYXRpb25EYXRhKHRvb2xEYXRhLCBlbGVtZW50KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGludGVycG9sYXRpb25MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGludGVycG9sYXRpb25MaXN0W2ldKSB7XG4gICAgICBfbGluZWFybHlJbnRlcnBvbGF0ZUJldHdlZW4oaW50ZXJwb2xhdGlvbkxpc3RbaV0ubGlzdCwgaW50ZXJwb2xhdGlvbkxpc3RbaV0ucGFpciwgUk9JQ29udG91ckRhdGEpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIF9saW5lYXJseUludGVycG9sYXRlQmV0d2VlbiAtIExpbmVhcmx5IGludGVycG9sYXRlIGFsbCB0aGUgc2xpY2VzIGluIHRoZVxuICogaW5kaWNpZXMgYXJyYXkgYmV0d2VlbiB0aGUgY29udG91clBhaXIuXG4gKlxuICogQHBhcmFtICB7TnVtYmVyW119IGluZGljaWVzICAgICBBbiBhcnJheSBvZiBzbGljZSBpbmRpY2llcyB0byBpbnRlcnBvbGF0ZS5cbiAqIEBwYXJhbSAge051bWJlcltdfSBjb250b3VyUGFpciAgVGhlIHBhaXIgb2YgY29udG91cnMgdG8gaW50ZXJwb2xhdGUgYmV0d2Vlbi5cbiAqIEBwYXJhbSAge29iamVjdFtdfSBST0lDb250b3VyRGF0YSAgRGF0YSBmb3IgdGhlIHNsaWNlIGxvY2F0aW9uIG9mIGNvbnRvdXJzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgUk9JQ29udG91ci5cbiAqIEByZXR1cm4ge251bGx9XG4gKi9cblxuZnVuY3Rpb24gX2xpbmVhcmx5SW50ZXJwb2xhdGVCZXR3ZWVuKGluZGljaWVzLCBjb250b3VyUGFpciwgUk9JQ29udG91ckRhdGEpIHtcbiAgY29uc3QgYzEgPSBfZ2VuZXJhdGVDbG9zZWRDb250b3VyKFJPSUNvbnRvdXJEYXRhW2NvbnRvdXJQYWlyWzBdXS5jb250b3Vyc1swXS5oYW5kbGVzLnBvaW50cyk7XG4gIGNvbnN0IGMyID0gX2dlbmVyYXRlQ2xvc2VkQ29udG91cihST0lDb250b3VyRGF0YVtjb250b3VyUGFpclsxXV0uY29udG91cnNbMF0uaGFuZGxlcy5wb2ludHMpO1xuXG4gIGNvbnN0IHsgYzFJbnRlcnAsIGMySW50ZXJwIH0gPSBfZ2VuZXJhdGVJbnRlcnBvbGF0aW9uQ29udG91clBhaXIoYzEsIGMyKTtcblxuICAvLyBVc2luZyB0aGUgbmV3bHkgY29uc3RydWN0ZWQgY29udG91cnMsIGludGVycG9sYXRlIGVhY2ggUk9JLlxuICBpbmRpY2llcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgIF9saW5lYXJseUludGVycG9sYXRlQ29udG91cihjMUludGVycCwgYzJJbnRlcnAsIGluZGV4LCBjb250b3VyUGFpciwgUk9JQ29udG91ckRhdGEsIGMxLngubGVuZ3RoID4gYzIueC5sZW5ndGgpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBfbGluZWFybHlJbnRlcnBvbGF0ZUNvbnRvdXIgLSBJbnNlcnRzIGEgbGluZWFybHkgaW50ZXJwb2xhdGVkIGNvbnRvdXIgYXRcbiAqIHNwZWNpZmllZCBzbGljZSBpbmRleC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGMxSW50ZXJwICAgICAgIFRoZSBmaXJzdCByZWZlcmVuY2UgY29udG91ci5cbiAqIEBwYXJhbSAge29iamVjdH0gYzJJbnRlcnAgICAgICAgVGhlIHNlY29uZCByZWZlcmVuY2UgY29udG91ci5cbiAqIEBwYXJhbSAge051bWJlcn0gc2xpY2VJbmRleCAgICAgICBUaGUgc2xpY2UgaW5kZXggdG8gaW50ZXJwb2xhdGUuXG4gKiBAcGFyYW0gIHtOdW1iZXJ7fX0gY29udG91clBhaXIgICAgVGhlIHNsaWNlIGluZGljaWVzIG9mIHRoZSByZWZlcmVuY2UgY29udG91cnMuXG4gKiBAcGFyYW0gIHtvYmplY3RbXX0gUk9JQ29udG91ckRhdGEgIERhdGEgZm9yIHRoZSBzbGljZSBsb2NhdGlvbiBvZiBjb250b3Vyc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBST0lDb250b3VyLlxuICogQHBhcmFtICB7Ym9vbGVhbn0gYzFIYXNNb3JlTm9kZXMgVHJ1ZSBpZiBjMSBoYXMgbW9yZSBub2RlcyB0aGFuIGMyLlxuICogQHJldHVybiB7bnVsbH1cbiAqL1xuZnVuY3Rpb24gX2xpbmVhcmx5SW50ZXJwb2xhdGVDb250b3VyKGMxSW50ZXJwLCBjMkludGVycCwgc2xpY2VJbmRleCwgY29udG91clBhaXIsIFJPSUNvbnRvdXJEYXRhLCBjMUhhc01vcmVOb2Rlcykge1xuICBjb25zdCB6SW50ZXJwID0gKHNsaWNlSW5kZXggLSBjb250b3VyUGFpclswXSkgLyAoY29udG91clBhaXJbMV0gLSBjb250b3VyUGFpclswXSk7XG4gIGNvbnN0IGludGVycG9sYXRlZDJEQ29udG91ciA9IF9nZW5lcmF0ZUludGVycG9sYXRlZE9wZW5Db250b3VyKGMxSW50ZXJwLCBjMkludGVycCwgekludGVycCwgYzFIYXNNb3JlTm9kZXMpO1xuXG4gIGNvbnN0IGMxTWV0YWRhdGEgPSBST0lDb250b3VyRGF0YVtjb250b3VyUGFpclswXV0uY29udG91cnNbMF07XG5cbiAgaWYgKFJPSUNvbnRvdXJEYXRhW3NsaWNlSW5kZXhdLmNvbnRvdXJzKSB7XG4gICAgX2VkaXRJbnRlcnBvbGF0ZWRDb250b3VyKGludGVycG9sYXRlZDJEQ29udG91ciwgUk9JQ29udG91ckRhdGFbc2xpY2VJbmRleF0uaW1hZ2VJZCwgYzFNZXRhZGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgX2FkZEludGVycG9sYXRlZENvbnRvdXIoaW50ZXJwb2xhdGVkMkRDb250b3VyLCBST0lDb250b3VyRGF0YVtzbGljZUluZGV4XS5pbWFnZUlkLCBjMU1ldGFkYXRhKTtcbiAgfVxufVxuXG4vKipcbiAqIF9nZW5lcmF0ZUludGVycG9sYXRpb25Db250b3VyUGFpciAtIGdlbmVyYXRlcyB0d28gYWxpZ25lZCBjb250b3VycyB3aXRoIGFuXG4gKiBlcXVhbCBudW1iZXIgb2Ygbm9kZXMgZnJvbSB3aGljaCBhbiBpbnRlcm1lZGlhdGUgY29udG91ciBtYXkgYmUgaW50ZXJwb2xhdGVkLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gYzEgVGhlIGZpcnN0IGNvbnRvdXIuXG4gKiBAcGFyYW0gIHtvYmplY3R9IGMyIFRoZSBzZWNvbmQgY29udG91ci5cbiAqIEByZXR1cm4ge29iamVjdH0gIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSB0d28gY29udG91cnMuXG4gKi9cbmZ1bmN0aW9uIF9nZW5lcmF0ZUludGVycG9sYXRpb25Db250b3VyUGFpcihjMSwgYzIpIHtcbiAgY29uc3QgY3VtUGVyaW0xID0gX2dldEN1bXVsYXRpdmVQZXJpbWV0ZXIoYzEpO1xuICBjb25zdCBjdW1QZXJpbTIgPSBfZ2V0Q3VtdWxhdGl2ZVBlcmltZXRlcihjMik7XG5cbiAgY29uc3QgaW50ZXJwTm9kZXMgPSBNYXRoLm1heChcbiAgICBNYXRoLmNlaWwoY3VtUGVyaW0xW2N1bVBlcmltMS5sZW5ndGggLSAxXSAvIGRQKSxcbiAgICBNYXRoLmNlaWwoY3VtUGVyaW0yW2N1bVBlcmltMi5sZW5ndGggLSAxXSAvIGRQKVxuICApO1xuXG4gIGNvbnN0IGN1bVBlcmltMU5vcm0gPSBfbm9ybWFsaXNlZEN1bXVsYXRpdmVQZXJpbWV0ZXIoY3VtUGVyaW0xKTtcbiAgY29uc3QgY3VtUGVyaW0yTm9ybSA9IF9ub3JtYWxpc2VkQ3VtdWxhdGl2ZVBlcmltZXRlcihjdW1QZXJpbTIpO1xuXG4gIGNvbnN0IG51bU5vZGVzMSA9IGludGVycE5vZGVzICsgYzIueC5sZW5ndGg7XG4gIGNvbnN0IG51bU5vZGVzMiA9IGludGVycE5vZGVzICsgYzEueC5sZW5ndGg7XG5cbiAgLy8gY29uY2F0aW5hdGUgcCAmJiBjdW1QZXJpbU5vcm1cbiAgY29uc3QgcGVyaW0xSW50ZXJwID0gX2dldEludGVycG9sYXRlZFBlcmltKG51bU5vZGVzMSwgY3VtUGVyaW0xTm9ybSk7XG4gIGNvbnN0IHBlcmltMkludGVycCA9IF9nZXRJbnRlcnBvbGF0ZWRQZXJpbShudW1Ob2RlczIsIGN1bVBlcmltMk5vcm0pO1xuXG4gIGNvbnN0IHBlcmltMUluZCA9IF9nZXRJbmRpY2F0b3JBcnJheShjMSwgbnVtTm9kZXMxKTtcbiAgY29uc3QgcGVyaW0ySW5kID0gX2dldEluZGljYXRvckFycmF5KGMyLCBudW1Ob2RlczIpO1xuXG4gIGNvbnN0IG5vZGVzUGVyU2VnbWVudDEgPSBfZ2V0Tm9kZXNQZXJTZWdtZW50KHBlcmltMUludGVycCwgcGVyaW0xSW5kKTtcbiAgY29uc3Qgbm9kZXNQZXJTZWdtZW50MiA9IF9nZXROb2Rlc1BlclNlZ21lbnQocGVyaW0ySW50ZXJwLCBwZXJpbTJJbmQpO1xuXG4gIGNvbnN0IGMxaSA9IF9nZXRTdXBlclNhbXBsZWRDb250b3VyKGMxLCBub2Rlc1BlclNlZ21lbnQxKTtcbiAgY29uc3QgYzJpID0gX2dldFN1cGVyU2FtcGxlZENvbnRvdXIoYzIsIG5vZGVzUGVyU2VnbWVudDIpO1xuXG4gIC8vIEtlZXAgYzJpIGZpeGVkIGFuZCBzaGlmdCB0aGUgc3RhcnRpbmcgbm9kZSBvZiBjMWkgdG8gbWluaW1pc2UgdGhlIHRvdGFsIGxlbmd0aCBvZiBzZWdtZW50cy5cbiAgX3NoaWZ0U3VwZXJTYW1wbGVkQ29udG91ckluUGxhY2UoYzFpLCBjMmkpO1xuXG4gIHJldHVybiBfcmVkdWNlQ29udG91cnNUb09yaWdpbk5vZGVzKGMxaSwgYzJpKTtcbn1cblxuLyoqXG4gKiBfYWRkSW50ZXJwb2xhdGVkQ29udG91ciAtIEFkZHMgYSBuZXcgY29udG91ciB0byB0aGUgaW1hZ2VJZC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGludGVycG9sYXRlZDJEQ29udG91ciBUaGUgcG9seWdvbiB0byBhZGQgdG8gdGhlIFJPSUNvbnRvdXIuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGltYWdlSWQgICAgICAgICAgICAgICBUaGUgaW1hZ2VJZCB0byBhZGQgdGhlIHBvbHlnb24gdG8uXG4gKiBAcGFyYW0gIHt0eXBlfSByZWZlcmVuY2VkVG9vbERhdGEgICAgVGhlIHRvb2xEYXRhIG9mIGFub3RoZXIgcG9seWdvbiBpbiB0aGVcbiAqIFJPSUNvbnRvdXIsIHRvIGFzc2lnbiBhcHByb3ByaWF0ZSBtZXRhZGF0YSB0byB0aGUgbmV3IHBvbHlnb24uXG4gKiBAcmV0dXJuIHtudWxsfVxuICovXG5mdW5jdGlvbiBfYWRkSW50ZXJwb2xhdGVkQ29udG91cihpbnRlcnBvbGF0ZWQyRENvbnRvdXIsIGltYWdlSWQsIHJlZmVyZW5jZWRUb29sRGF0YSkge1xuICBjb25zdCBwb2ludHMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGludGVycG9sYXRlZDJEQ29udG91ci54Lmxlbmd0aDsgaSsrKSB7XG4gICAgcG9pbnRzLnB1c2goe1xuICAgICAgeDogaW50ZXJwb2xhdGVkMkRDb250b3VyLnhbaV0sXG4gICAgICB5OiBpbnRlcnBvbGF0ZWQyRENvbnRvdXIueVtpXVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgcG9seWdvbiA9IG5ldyBQb2x5Z29uKFxuICAgIHBvaW50cyxcbiAgICBudWxsLFxuICAgIHJlZmVyZW5jZWRUb29sRGF0YS5zZXJpZXNJbnN0YW5jZVVpZCxcbiAgICByZWZlcmVuY2VkVG9vbERhdGEuc3RydWN0dXJlU2V0VWlkLFxuICAgIHJlZmVyZW5jZWRUb29sRGF0YS5ST0lDb250b3VyVWlkLFxuICAgIGdlbmVyYXRlVUlEKCksXG4gICAgbnVsbCxcbiAgICB0cnVlXG4gICk7XG5cbiAgY29uc3QgdG9vbFN0YXRlTWFuYWdlciA9IGdsb2JhbFRvb2xTdGF0ZU1hbmFnZXIuc2F2ZVRvb2xTdGF0ZSgpO1xuXG4gIGlmICghdG9vbFN0YXRlTWFuYWdlcltpbWFnZUlkXSkge1xuICAgIHRvb2xTdGF0ZU1hbmFnZXJbaW1hZ2VJZF0gPSB7fTtcbiAgfVxuXG4gIGNvbnN0IGltYWdlVG9vbFN0YXRlID0gdG9vbFN0YXRlTWFuYWdlcltpbWFnZUlkXTtcblxuICBpZiAoIWltYWdlVG9vbFN0YXRlLmZyZWVoYW5kUm9pKSB7XG4gICAgaW1hZ2VUb29sU3RhdGUuZnJlZWhhbmRSb2kgPSB7fTtcbiAgICBpbWFnZVRvb2xTdGF0ZS5mcmVlaGFuZFJvaS5kYXRhID0gW107XG4gIH0gZWxzZSBpZiAoIWltYWdlVG9vbFN0YXRlLmZyZWVoYW5kUm9pLmRhdGEpIHtcbiAgICBpbWFnZVRvb2xTdGF0ZS5mcmVlaGFuZFJvaS5kYXRhID0gW107XG4gIH1cblxuICBpbWFnZVRvb2xTdGF0ZS5mcmVlaGFuZFJvaS5kYXRhLnB1c2gocG9seWdvbi5nZXRGcmVlaGFuZFRvb2xEYXRhKGZhbHNlKSk7XG5cbiAgbW9kdWxlcy5mcmVlaGFuZDNELnNldHRlcnMuaW5jcmVtZW50UG9seWdvbkNvdW50KFxuICAgIHJlZmVyZW5jZWRUb29sRGF0YS5zZXJpZXNJbnN0YW5jZVVpZCxcbiAgICByZWZlcmVuY2VkVG9vbERhdGEuc3RydWN0dXJlU2V0VWlkLFxuICAgIHJlZmVyZW5jZWRUb29sRGF0YS5ST0lDb250b3VyVWlkXG4gICk7XG59XG5cbi8qKlxuICogX2VkaXRJbnRlcnBvbGF0ZWRDb250b3VyIC0gRWRpdHMgYW4gaW50ZXJwb2xhdGVkIHBvbHlnb24gb24gdGhlIGltYWdlSWRcbiAqIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIHNwZWNpZmllZCBST0lDb250b3VyLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gaW50ZXJwb2xhdGVkMkRDb250b3VyIFRoZSBwb2x5Z29uIHRvIGFkZCB0byB0aGUgUk9JQ29udG91ci5cbiAqIEBwYXJhbSAge1N0cmluZ30gaW1hZ2VJZCAgICAgICAgICAgICAgIFRoZSBpbWFnZUlkIHRvIGFkZCB0aGUgcG9seWdvbiB0by5cbiAqIEBwYXJhbSAge3R5cGV9IHJlZmVyZW5jZWRUb29sRGF0YSAgICBUaGUgdG9vbERhdGEgb2YgYW5vdGhlciBwb2x5Z29uIGluIHRoZVxuICogUk9JQ29udG91ciwgdG8gYXNzaWduIGFwcHJvcHJpYXRlIG1ldGFkYXRhIHRvIHRoZSBuZXcgcG9seWdvbi5cbiAqIEByZXR1cm4ge251bGx9XG4gKi9cbmZ1bmN0aW9uIF9lZGl0SW50ZXJwb2xhdGVkQ29udG91cihpbnRlcnBvbGF0ZWQyRENvbnRvdXIsIGltYWdlSWQsIHJlZmVyZW5jZWRUb29sRGF0YSkge1xuICBjb25zdCB0b29sU3RhdGVNYW5hZ2VyID0gZ2xvYmFsVG9vbFN0YXRlTWFuYWdlci5zYXZlVG9vbFN0YXRlKCk7XG4gIGNvbnN0IGltYWdlVG9vbFN0YXRlID0gdG9vbFN0YXRlTWFuYWdlcltpbWFnZUlkXTtcblxuICBpZiAoIWltYWdlVG9vbFN0YXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbWFnZSB0b29sc3RhdGUgZG9lcyBub3QgZXhpc3QuIFRoaXMgc2hvdWxkIG5vdCBiZSByZWFjaGVkIGluIHRoaXMgY2FzZSEnKTtcbiAgfVxuXG4gIC8vIEZpbmQgdGhlIGluZGV4IG9mIHRoZSBwb2x5Z29uIG9uIHRoaXMgc2xpY2UgY29ycmVzcG9uZGluZyB0b1xuICAvLyBUaGUgUk9JQ29udG91ci5cbiAgbGV0IHRvb2xEYXRhSW5kZXg7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZVRvb2xTdGF0ZS5mcmVlaGFuZFJvaS5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGltYWdlVG9vbFN0YXRlLmZyZWVoYW5kUm9pLmRhdGFbaV0uUk9JQ29udG91clVpZCA9PT0gcmVmZXJlbmNlZFRvb2xEYXRhLlJPSUNvbnRvdXJVaWQpIHtcbiAgICAgIHRvb2xEYXRhSW5kZXggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb2xkUG9seWdvbiA9IGltYWdlVG9vbFN0YXRlLmZyZWVoYW5kUm9pLmRhdGFbdG9vbERhdGFJbmRleF07XG4gIGNvbnN0IHBvaW50cyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW50ZXJwb2xhdGVkMkRDb250b3VyLngubGVuZ3RoOyBpKyspIHtcbiAgICBwb2ludHMucHVzaCh7XG4gICAgICB4OiBpbnRlcnBvbGF0ZWQyRENvbnRvdXIueFtpXSxcbiAgICAgIHk6IGludGVycG9sYXRlZDJEQ29udG91ci55W2ldXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCB1cGRhdGVkUG9seWdvbiA9IG5ldyBQb2x5Z29uKFxuICAgIHBvaW50cyxcbiAgICBudWxsLFxuICAgIG9sZFBvbHlnb24uc2VyaWVzSW5zdGFuY2VVaWQsXG4gICAgb2xkUG9seWdvbi5zdHJ1Y3R1cmVTZXRVaWQsXG4gICAgb2xkUG9seWdvbi5ST0lDb250b3VyVWlkLFxuICAgIG9sZFBvbHlnb24udWlkLFxuICAgIG51bGwsXG4gICAgdHJ1ZVxuICApO1xuXG4gIGltYWdlVG9vbFN0YXRlLmZyZWVoYW5kUm9pLmRhdGFbdG9vbERhdGFJbmRleF0gPSB1cGRhdGVkUG9seWdvbi5nZXRGcmVlaGFuZFRvb2xEYXRhKGZhbHNlKTtcbn1cblxuLyoqXG4gKiBfZ2VuZXJhdGVJbnRlcnBvbGF0ZWRPcGVuQ29udG91ciAtIEludGVycG9sYXRlIGFuIG9wZW4gY29udG91ciBiZXR3ZWVuIGMxaXJcbiAqIGFuZCBjMmlyIGF0IHRoZSB6SW50ZXJwIHBvc2l0aW9uLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gYzFpciAgICAgICAgICAgIFRoZSBpbnRlcnBvbGF0ZWQgYzEgY29udG91ciB3aXRoXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBlcmZsdW91cyBub2RlcyByZW1vdmVkLlxuICogQHBhcmFtICB7b2JqZWN0fSBjMmlyICAgICAgICAgICAgVGhlIGludGVycG9sYXRlZCBjMiBjb250b3VyIHdpdGhcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cGVyZmx1b3VzIG5vZGVzIHJlbW92ZWQuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHpJbnRlcnAgICAgICAgICBUaGUgei0gY29vcmRpbmF0ZSBvZiB0aGUgZGVzaXJlZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwb2xhdGlvbi5cbiAqIEBwYXJhbSAge2Jvb2xlYW59IGMxSGFzTW9yZU5vZGVzIFRydWUgaWYgYzEgaGFzIG1vcmUgb3JpZ2luYWwgbm9kZXNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYW4gYzIuXG4gKiBAcmV0dXJuIHtvYmplY3R9ICAgICAgICAgICAgICAgICBUaGUgaW50ZXJwb2xhdGVkIGNvbnRvdXIgYXQgej16SW50ZXJwLlxuICovXG5mdW5jdGlvbiBfZ2VuZXJhdGVJbnRlcnBvbGF0ZWRPcGVuQ29udG91cihjMWlyLCBjMmlyLCB6SW50ZXJwLCBjMUhhc01vcmVOb2Rlcykge1xuICBjb25zdCBjSW50ZXJwID0ge1xuICAgIHg6IFtdLFxuICAgIHk6IFtdXG4gIH07XG5cbiAgY29uc3QgaW5kaWNpZXMgPSBjMUhhc01vcmVOb2RlcyA/IGMxaXIuSSA6IGMyaXIuSTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGMxaXIueC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChpbmRpY2llc1tpXSkge1xuICAgICAgY0ludGVycC54LnB1c2goKDEgLSB6SW50ZXJwKSAqIGMxaXIueFtpXSArIHpJbnRlcnAgKiBjMmlyLnhbaV0pO1xuICAgICAgY0ludGVycC55LnB1c2goKDEgLSB6SW50ZXJwKSAqIGMxaXIueVtpXSArIHpJbnRlcnAgKiBjMmlyLnlbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjSW50ZXJwO1xufVxuXG4vKipcbiAqIF9yZWR1Y2VDb250b3Vyc1RvT3JpZ2luTm9kZXMgLSBSZW1vdmVzIGFueSBub2RlcyBmcm9tIHRoZSBjb250b3VycyB0aGF0IGRvbid0XG4gKiBjb3JyZXNwb25kIHRvIGFuIG9yaWdpbmFsIGNvbnRvdXIgbm9kZS5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGMxaSBUaGUgZmlyc3Qgc3VwZXItc2FtcGxlZCBjb250b3VyLlxuICogQHBhcmFtICB7b2JqZWN0fSBjMmkgVGhlIHNlY29uZCBzdXBlci1zYW1wbGVkIGNvbnRvdXIuXG4gKiBAcmV0dXJuIHtvYmplY3R9ICAgICBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgdHdvIHJlZHVjZWQgY29udG91cnMuXG4gKi9cbmZ1bmN0aW9uIF9yZWR1Y2VDb250b3Vyc1RvT3JpZ2luTm9kZXMoYzFpLCBjMmkpIHtcbiAgY29uc3QgYzFJbnRlcnAgPSB7XG4gICAgeDogW10sXG4gICAgeTogW10sXG4gICAgSTogW11cbiAgfTtcbiAgY29uc3QgYzJJbnRlcnAgPSB7XG4gICAgeDogW10sXG4gICAgeTogW10sXG4gICAgSTogW11cbiAgfTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGMxaS54Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGMxaS5JW2ldIHx8IGMyaS5JW2ldKSB7XG4gICAgICBjMUludGVycC54LnB1c2goYzFpLnhbaV0pO1xuICAgICAgYzFJbnRlcnAueS5wdXNoKGMxaS55W2ldKTtcbiAgICAgIGMxSW50ZXJwLkkucHVzaChjMWkuSVtpXSk7XG5cbiAgICAgIGMySW50ZXJwLngucHVzaChjMmkueFtpXSk7XG4gICAgICBjMkludGVycC55LnB1c2goYzJpLnlbaV0pO1xuICAgICAgYzJJbnRlcnAuSS5wdXNoKGMyaS5JW2ldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGMxSW50ZXJwLFxuICAgIGMySW50ZXJwXG4gIH07XG59XG5cbi8qKlxuICogX3NoaWZ0U3VwZXJTYW1wbGVkQ29udG91ckluUGxhY2UgLSBTaGlmdHMgdGhlIGluZGljaWVzIG9mIGMxaSBhcm91bmQgdG9cbiAqIG1pbmltaXNlOiBTVU0gKHxjMWlbaV0tYzJpW2ldfCkgZnJvbSAwIHRvIE4uXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSBjMWkgVGhlIGNvbnRvdXIgdG8gc2hpZnQuXG4gKiBAcGFyYW0gIHtvYmplY3R9IGMyaSBUaGUgcmVmZXJlbmNlIGNvbnRvdXIuXG4gKiBAbW9kaWZpZXMgYzFpXG4gKi9cbmZ1bmN0aW9uIF9zaGlmdFN1cGVyU2FtcGxlZENvbnRvdXJJblBsYWNlKGMxaSwgYzJpKSB7XG4gIGNvbnN0IGMxaUxlbmd0aCA9IGMxaS54Lmxlbmd0aDtcblxuICBsZXQgb3B0aW1hbCA9IHtcbiAgICBzdGFydGluZ05vZGU6IDAsXG4gICAgdG90YWxTcXVhcmVkWFlMZW5ndGhzOiBJbmZpbml0eVxuICB9O1xuXG4gIGZvciAobGV0IHN0YXJ0aW5nTm9kZSA9IDA7IHN0YXJ0aW5nTm9kZSA8IGMxaUxlbmd0aDsgc3RhcnRpbmdOb2RlKyspIHtcbiAgICBsZXQgbm9kZSA9IHN0YXJ0aW5nTm9kZTtcblxuICAgIC8vIE5PVEU6IDEpIElnbm9yZSBjYWxjdWxhdGluZyBaLCBhcyB0aGUgc3VtIG9mIGFsbCBzcXVhcmVkIFogZGlzdGFuY2VzIHdpbGwgYWx3YXlzIGJlIGEgY29uc3RhbnQuXG4gICAgLy8gTk9URTogMikgRG9uJ3QgbmVlZCBhY3R1YWwgbGVuZ3RoLCBzbyBkb24ndCB3b3JyeSBhYm91dCBzcXVhcmUgcm9vdGluZy5cbiAgICBsZXQgdG90YWxTcXVhcmVkWFlMZW5ndGhzID0gMDtcblxuICAgIGZvciAobGV0IGl0dGVyYXRpb24gPSAwOyBpdHRlcmF0aW9uIDwgYzFpTGVuZ3RoOyBpdHRlcmF0aW9uKyspIHtcbiAgICAgIHRvdGFsU3F1YXJlZFhZTGVuZ3RocyArPSAoYzFpLnhbbm9kZV0gLSBjMmkueFtpdHRlcmF0aW9uXSkgKiogMiArIChjMWkueVtub2RlXSAtIGMyaS55W2l0dGVyYXRpb25dKSAqKiAyO1xuXG4gICAgICBub2RlKys7XG5cbiAgICAgIGlmIChub2RlID09PSBjMWlMZW5ndGgpIG5vZGUgPSAwO1xuICAgIH1cblxuICAgIGlmICh0b3RhbFNxdWFyZWRYWUxlbmd0aHMgPCBvcHRpbWFsLnRvdGFsU3F1YXJlZFhZTGVuZ3Rocykge1xuICAgICAgb3B0aW1hbC50b3RhbFNxdWFyZWRYWUxlbmd0aHMgPSB0b3RhbFNxdWFyZWRYWUxlbmd0aHM7XG4gICAgICBvcHRpbWFsLnN0YXJ0aW5nTm9kZSA9IHN0YXJ0aW5nTm9kZTtcbiAgICB9XG4gIH1cblxuICBsZXQgbm9kZSA9IG9wdGltYWwuc3RhcnRpbmdOb2RlO1xuXG4gIF9zaGlmdENpcmN1bGFyQXJyYXkoYzFpLngsIG5vZGUpO1xuICBfc2hpZnRDaXJjdWxhckFycmF5KGMxaS55LCBub2RlKTtcbiAgX3NoaWZ0Q2lyY3VsYXJBcnJheShjMWkuSSwgbm9kZSk7XG59XG5cbi8qKlxuICogX3NoaWZ0Q2lyY3VsYXJBcnJheSAtIFNoaWZ0IHRoZSBjaXJjdWxhciBhcnJheSBieSB0aGUgY291bnQuXG4gKlxuICogQHBhcmFtICB7KltdfSBhcnIgICBUaGUgYXJyYXkuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGNvdW50IFRoZSBzaGlmdC5cbiAqIEByZXR1cm4geypbXX0gICAgICAgVGhlIHNoaWZ0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIF9zaGlmdENpcmN1bGFyQXJyYXkoYXJyLCBjb3VudCkge1xuICBjb3VudCAtPSBhcnIubGVuZ3RoICogTWF0aC5mbG9vcihjb3VudCAvIGFyci5sZW5ndGgpO1xuICBhcnIucHVzaC5hcHBseShhcnIsIGFyci5zcGxpY2UoMCwgY291bnQpKTtcbiAgcmV0dXJuIGFycjtcbn1cblxuLyoqXG4gKiBfZ2V0U3VwZXJTYW1wbGVkQ29udG91ciAtIEdlbmVyYXRlcyBhIHN1cGVyIHNhbXBsZWQgY29udG91ciB3aXRoIGFkZGl0aW9uYWxcbiAqIG5vZGVzIGFkZGVkIHBlciBzZWdtZW50LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gYyAgICAgICAgICAgICAgICAgVGhlIG9yaWdpbmFsIGNvbnRvdXIuXG4gKiBAcGFyYW0gIHtOdW1iZXJbXX0gbm9kZXNQZXJTZWdtZW50IEFuIGFycmF5IG9mIHRoZSBudW1iZXIgb2Ygbm9kZXMgdG8gYWRkXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlciBsaW5lIHNlZ21lbnQuXG4gKiBAcmV0dXJuIHtvYmplY3R9ICAgICAgICAgICAgICAgICAgIFRoZSBzdXBlciBzYW1wbGVkIGNvbnRvdXIuXG4gKi9cbmZ1bmN0aW9uIF9nZXRTdXBlclNhbXBsZWRDb250b3VyKGMsIG5vZGVzUGVyU2VnbWVudCkge1xuICBjb25zdCBjaSA9IHtcbiAgICB4OiBbXSxcbiAgICB5OiBbXSxcbiAgICBJOiBbXVxuICB9O1xuXG4gIC8vIExlbmd0aCAtIDEsIHByb2R1Y2VzICdvcGVuJyBwb2x5Z29uLlxuICBmb3IgKGxldCBuID0gMDsgbiA8IGMueC5sZW5ndGggLSAxOyBuKyspIHtcbiAgICAvLyBBZGQgb3JpZ2luYWwgbm9kZS5cbiAgICBjaS54LnB1c2goYy54W25dKTtcbiAgICBjaS55LnB1c2goYy55W25dKTtcbiAgICBjaS5JLnB1c2godHJ1ZSk7XG5cbiAgICAvLyBBZGQgbGluZXJhbGx5IGludGVycG9sYXRlZCBub2Rlcy5cbiAgICBjb25zdCB4U3BhY2luZyA9IChjLnhbbiArIDFdIC0gYy54W25dKSAvIChub2Rlc1BlclNlZ21lbnRbbl0gKyAxKTtcbiAgICBjb25zdCB5U3BhY2luZyA9IChjLnlbbiArIDFdIC0gYy55W25dKSAvIChub2Rlc1BlclNlZ21lbnRbbl0gKyAxKTtcblxuICAgIC8vIEFkZCBvdGhlciBub2Rlc1BlclNlZ21lbnQgLSAxIG90aGVyIG5vZGVzIChhcyBhbHJlYWR5IHB1dCBpbiBvcmlnaW5hbCBub2RlKS5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzUGVyU2VnbWVudFtuXSAtIDE7IGkrKykge1xuICAgICAgY2kueC5wdXNoKGNpLnhbY2kueC5sZW5ndGggLSAxXSArIHhTcGFjaW5nKTtcbiAgICAgIGNpLnkucHVzaChjaS55W2NpLnkubGVuZ3RoIC0gMV0gKyB5U3BhY2luZyk7XG4gICAgICBjaS5JLnB1c2goZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjaTtcbn1cblxuLyoqXG4gKiBfZ2V0Tm9kZXNQZXJTZWdtZW50IC0gUmV0dXJucyBhbiBhcnJheSBvZiB0aGUgbnVtYmVyIG9mIGludGVycG9sYXRlZCBub2Rlc1xuICogdG8gYmUgYWRkZWQgYWxvbmcgZWFjaCBsaW5lIHNlZ21lbnQgb2YgYSBwb2x5Z29uLlxuICpcbiAqIEBwYXJhbSAge051bWJlcltdfSBwZXJpbUludGVycCBOb3JtYWxpc2VkIGFycmF5IG9mIG9yaWdpbmFsIGFuZCBhZGRlZCBub2Rlcy5cbiAqIEBwYXJhbSAge2Jvb2xlYW5bXX0gcGVyaW1JbmQgICAgVGhlIGluZGljYXRvciBhcnJheSBkZXNjcmliaW5nIHRoZSBsb2NhdGlvbiBvZlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIG9yaWdpbmFsIGNvbnRvdXIncyBub2Rlcy5cbiAqIEByZXR1cm4ge051bWJlcltdfSAgICAgICAgIEFuIGFycmF5IGNvbnRhaW5naW5nIHRoZSBudW1iZXIgb2Ygbm9kZXMgdG8gYmVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZGVkIHBlciBvcmlnaW5hbCBsaW5lIHNlZ21lbnQuXG4gKi9cbmZ1bmN0aW9uIF9nZXROb2Rlc1BlclNlZ21lbnQocGVyaW1JbnRlcnAsIHBlcmltSW5kKSB7XG4gIGNvbnN0IGlkeCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGVyaW1JbnRlcnAubGVuZ3RoOyArK2kpIGlkeFtpXSA9IGk7XG4gIGlkeC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIHBlcmltSW50ZXJwW2FdIDwgcGVyaW1JbnRlcnBbYl0gPyAtMSA6IHBlcmltSW50ZXJwW2FdID4gcGVyaW1JbnRlcnBbYl07XG4gIH0pO1xuXG4gIGNvbnN0IHBlcmltSW5kU29ydGVkID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwZXJpbUluZC5sZW5ndGg7IGkrKykge1xuICAgIHBlcmltSW5kU29ydGVkLnB1c2gocGVyaW1JbmRbaWR4W2ldXSk7XG4gIH1cblxuICBjb25zdCBpbmRpY2llc09mT3JpZ2luTm9kZXMgPSBwZXJpbUluZFNvcnRlZC5yZWR1Y2UoZnVuY3Rpb24gKGFyciwgZWxlbWVudFZhbHVlLCBpKSB7XG4gICAgaWYgKGVsZW1lbnRWYWx1ZSkgYXJyLnB1c2goaSk7XG4gICAgcmV0dXJuIGFycjtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG5vZGVzUGVyU2VnbWVudCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kaWNpZXNPZk9yaWdpbk5vZGVzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIG5vZGVzUGVyU2VnbWVudC5wdXNoKGluZGljaWVzT2ZPcmlnaW5Ob2Rlc1tpICsgMV0gLSBpbmRpY2llc09mT3JpZ2luTm9kZXNbaV0pO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVzUGVyU2VnbWVudDtcbn1cblxuLyoqXG4gKiBfZ2V0SW5kaWNhdG9yQXJyYXkgLSBQcm9kdWNlcyBhbiBhcnJheSBvZiB0aGUgbG9jYXRpb24gb2YgdGhlIG9yaWdpbmFsIG5vZGVzXG4gKiBpbiBhIHN1cGVyIHNhbXBsZWQgY29udG91ci5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGNvbnRvdXIgICBUaGUgb3JpZ2luYWwgY29udG91ci5cbiAqIEBwYXJhbSAge051bWJlcn0gbnVtTm9kZXMgVGhlIG51bWJlciBvZiBub2RlcyBhZGRlZC5cbiAqIEByZXR1cm4ge2Jvb2xlYW5bXX0gICAgICAgICAgIFRoZSBpbmRpY2F0b3IgYXJyYXkgb2Ygb3JpZ2luYWwgbm9kZSBsb2NhdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIF9nZXRJbmRpY2F0b3JBcnJheShjb250b3VyLCBudW1Ob2Rlcykge1xuICBjb25zdCBwZXJpbUluZCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtTm9kZXMgLSAyOyBpKyspIHtcbiAgICBwZXJpbUluZC5wdXNoKGZhbHNlKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29udG91ci54Lmxlbmd0aDsgaSsrKSB7XG4gICAgcGVyaW1JbmQucHVzaCh0cnVlKTtcbiAgfVxuXG4gIHJldHVybiBwZXJpbUluZDtcbn1cblxuLyoqXG4gKiBfZ2V0SW50ZXJwb2xhdGVkUGVyaW0gLSBBZGRzIGFkZGl0aW9uYWwgaW50ZXJwb2xhdGVkIG5vZGVzIHRvIHRoZVxuICogbm9ybWFsaXNlZCBwZXJpbWV0ZXIgYXJyYXkuXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSBudW1Ob2RlcyAgICBUaGUgbnVtYmVyIG9mIG5vZGVzIHRvIGFkZC5cbiAqIEBwYXJhbSAge051bWJlcltdfSBjdW1QZXJpbU5vcm0gVGhlIGN1bXVsYXRpdmUgcGVyaW1ldGVyIGFycmF5LlxuICogQHJldHVybiB7TnVtYmVyW119ICAgICAgICAgICAgICBUaGUgYXJyYXkgb2Ygbm9kZXMuXG4gKi9cbmZ1bmN0aW9uIF9nZXRJbnRlcnBvbGF0ZWRQZXJpbShudW1Ob2RlcywgY3VtUGVyaW1Ob3JtKSB7XG4gIGNvbnN0IGRpZmYgPSAxIC8gKG51bU5vZGVzIC0gMSk7XG4gIGNvbnN0IGxpbnNwYWNlID0gW2RpZmZdO1xuXG4gIC8vIExlbmd0aCAtIDIgYXMgd2UgYXJlIGRpc2NhcmRpbmcgMCBhbiAxIGZvciBlZmZpY2llbmN5IChubyBuZWVkIHRvIGNhbGN1bGF0ZSB0aGVtKS5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1Ob2RlcyAtIDI7IGkrKykge1xuICAgIGxpbnNwYWNlLnB1c2gobGluc3BhY2VbbGluc3BhY2UubGVuZ3RoIC0gMV0gKyBkaWZmKTtcbiAgfVxuXG4gIHJldHVybiBsaW5zcGFjZS5jb25jYXQoY3VtUGVyaW1Ob3JtKTtcbn1cblxuLyoqXG4gKiBfZ2V0Q3VtdWxhdGl2ZVBlcmltZXRlciAtIFJldHVybnMgYW4gYXJyYXkgb2YgdGhlIHRoZSBjdW11bGF0aXZlIHBlcmltZXRlciBhdFxuICogZWFjaCBub2RlIG9mIHRoZSBjb250b3VyLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gY29udG91ciBUaGUgY29udG91ci5cbiAqIEByZXR1cm4ge051bWJlcltdfSAgICAgICAgIEFuIGFycmF5IG9mIHRoZSBjdW11bGF0aXZlIHBlcmltZXRlciBhdCBlYWNoIG5vZGUuXG4gKi9cbmZ1bmN0aW9uIF9nZXRDdW11bGF0aXZlUGVyaW1ldGVyKGNvbnRvdXIpIHtcbiAgbGV0IGN1bXVsYXRpdmVQZXJpbWV0ZXIgPSBbMF07XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBjb250b3VyLngubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBsZW5ndGhPZlNlZ21lbnQgPSBNYXRoLnNxcnQoKGNvbnRvdXIueFtpXSAtIGNvbnRvdXIueFtpIC0gMV0pICoqIDIgKyAoY29udG91ci55W2ldIC0gY29udG91ci55W2kgLSAxXSkgKiogMik7XG5cbiAgICBjdW11bGF0aXZlUGVyaW1ldGVyLnB1c2goY3VtdWxhdGl2ZVBlcmltZXRlcltpIC0gMV0gKyBsZW5ndGhPZlNlZ21lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGN1bXVsYXRpdmVQZXJpbWV0ZXI7XG59XG5cbi8qKlxuICogX25vcm1hbGlzZWRDdW11bGF0aXZlUGVyaW1ldGVyIC0gTm9ybWFsaXNlcyB0aGUgY3VtdWxhdGl2ZSBwZXJpbWV0ZXIgYXJyYXkuXG4gKlxuICogQHBhcmFtICB7dHlwZX0gY3VtUGVyaW0gQW4gYXJyYXkgb2YgdGhlIGN1bXVsYXRpdmUgcGVyaW1ldGVyIGF0IGVhY2ggb2YgYVxuICogY29udG91ci5cbiAqIEByZXR1cm4ge3R5cGV9ICAgICAgICAgIFRoZSBub3JtYWxpc2VkIGFycmF5LlxuICovXG5mdW5jdGlvbiBfbm9ybWFsaXNlZEN1bXVsYXRpdmVQZXJpbWV0ZXIoY3VtUGVyaW0pIHtcbiAgY29uc3QgY3VtUGVyaW1Ob3JtID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdW1QZXJpbS5sZW5ndGg7IGkrKykge1xuICAgIGN1bVBlcmltTm9ybS5wdXNoKGN1bVBlcmltW2ldIC8gY3VtUGVyaW1bY3VtUGVyaW0ubGVuZ3RoIC0gMV0pO1xuICB9XG5cbiAgcmV0dXJuIGN1bVBlcmltTm9ybTtcbn1cblxuLyoqXG4gKiBfZ2VuZXJhdGVDbG9zZWRDb250b3VyIC0gR2VuZXJhdGUgYSBjbG9ja3dpc2UgY29udG91ciBvYmplY3QgZnJvbSB0aGUgcG9pbnRzXG4gKiBvZiBhIGNsb2Nrd2lzZSBvciBhbnRpLWNsb2Nrd2lzZSBwb2x5Z29uLlxuICpcbiAqIEBwYXJhbSAge29iamVjdFtdfSBwb2ludHMgVGhlIHBvaW50cyB0byBnZW5lcmF0ZSB0aGUgY29udG91ciBmcm9tLlxuICogQHJldHVybiB7b2JqZWN0fSAgICAgICAgICAgVGhlIGdlbmVyYXRlZCBjb250b3VyIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gX2dlbmVyYXRlQ2xvc2VkQ29udG91cihwb2ludHMpIHtcbiAgY29uc3QgYyA9IHtcbiAgICB4OiBbXSxcbiAgICB5OiBbXVxuICB9O1xuXG4gIC8vIE5PVEU6IEZvciB6IHBvc2l0aW9ucyB3ZSBvbmx5IG5lZWQgdGhlIHJlbGF0aXZlIGRpZmZlcmVuY2UgZm9yIGludGVycG9sYXRpb24sIHRodXMgdXNlIGZyYW1lIGluZGV4IGFzIFouXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgYy54W2ldID0gcG9pbnRzW2ldLng7XG4gICAgYy55W2ldID0gcG9pbnRzW2ldLnk7XG4gIH1cblxuICAvLyBQdXNoIGxhc3Qgbm9kZSB0byBjcmVhdGUgY2xvc2VkIGNvbnRvdXIuXG4gIGMueC5wdXNoKGMueFswXSk7XG4gIGMueS5wdXNoKGMueVswXSk7XG5cbiAgX3JldmVyc2VJZkFudGlDbG9ja3dpc2UoYyk7XG5cbiAgcmV0dXJuIGM7XG59XG5cbi8qKlxuICogX3JldmVyc2VJZkFudGlDbG9ja3dpc2UgLSBJZiB0aGUgY29udG91cidzIG5vZGVzIHJ1biBhbnRpLWNsb2Nrd2lzZSxcbiAqIHJldmVyc2UgdGhlbS5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGNvbnRvdXIgVGhlIGNvbnRvdXIuXG4gKiBAcmV0dXJuIHtvYmplY3R9ICAgICAgICAgVGhlIGNvbnRvdXIsIGNvcnJlY3RlZCB0byBiZSBjbG9ja3dpc2UgaWYgYXBwcm9wcmlhdGUuXG4gKi9cbmZ1bmN0aW9uIF9yZXZlcnNlSWZBbnRpQ2xvY2t3aXNlKGNvbnRvdXIpIHtcbiAgY29uc3QgbGVuZ3RoID0gY29udG91ci54Lmxlbmd0aDtcbiAgY29uc3QgY29udG91clhNZWFuID0gY29udG91ci54LnJlZHVjZShnZXRTdW1SZWR1Y2VyKSAvIGxlbmd0aDtcbiAgbGV0IGNoZWNrU3VtID0gMDtcblxuICBmb3IgKGxldCBrID0gMCwgaSA9IDEsIGogPSAyOyBrIDwgbGVuZ3RoOyBrKyspIHtcbiAgICBjaGVja1N1bSArPSAoY29udG91ci54W2ldIC0gY29udG91clhNZWFuKSAqIChjb250b3VyLnlbal0gLSBjb250b3VyLnlba10pO1xuICAgIGkrKztcbiAgICBqKys7XG4gICAgaWYgKGkgPj0gbGVuZ3RoKSBpID0gMDtcbiAgICBpZiAoaiA+PSBsZW5ndGgpIGogPSAwO1xuICB9XG5cbiAgaWYgKGNoZWNrU3VtID4gMCkge1xuICAgIGNvbnRvdXIueC5yZXZlcnNlKCk7XG4gICAgY29udG91ci55LnJldmVyc2UoKTtcbiAgfVxufVxuXG4vKipcbiAqIGdldFN1bVJlZHVjZXIgLSBBIHJlZHVjZXIgZnVuY3Rpb24gdGhhdCBjYWxjdWxhdGVzIHRoZSBzdW0gb2YgYW4gYXJyYXkuXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSB0b3RhbCBUaGUgcnVubmluZyB0b3RhbC5cbiAqIEBwYXJhbSAge051bWJlcn0gbnVtICAgVGhlIG51bWVyaWNhbCB2YWx1ZSBvZiB0aGUgYXJyYXkgZWxlbWVudC5cbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgVGhlIHVwZGF0ZWQgcnVubmluZyB0b3RhbC5cbiAqL1xuZnVuY3Rpb24gZ2V0U3VtUmVkdWNlcih0b3RhbCwgbnVtKSB7XG4gIHJldHVybiB0b3RhbCArIG51bTtcbn1cbiIsImltcG9ydCBHZW5lcmFsQW5hdG9teUxpc3QgZnJvbSAnLi4vR2VuZXJhbEFuYXRvbXlsaXN0LmpzJztcblxuY29uc3QgY2F0ZWdvcmllcyA9IEdlbmVyYWxBbmF0b215TGlzdC5TZWdtZW50YXRpb25Db2Rlcy5DYXRlZ29yeTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVNZXRhZGF0YShsYWJlbCwgY2F0ZWdvcnlVSUQgPSAnVC1EMDA1MCcsIHR5cGVVSUQgPSAnVC1EMDA1MCcsIG1vZGlmaWVyVUlEKSB7XG4gIGNvbnN0IGNhdGVnb3J5ID0gY2F0ZWdvcmllcy5maW5kKGNhdGVnb3JpZXNJID0+IGNhdGVnb3JpZXNJLkNvZGVWYWx1ZSA9PT0gY2F0ZWdvcnlVSUQpO1xuICBjb25zdCB0eXBlID0gY2F0ZWdvcnkuVHlwZS5maW5kKHR5cGVzSSA9PiB0eXBlc0kuQ29kZVZhbHVlID09PSB0eXBlVUlEKTtcblxuICBjb25zdCBtZXRhZGF0YSA9IHtcbiAgICBTZWdtZW50ZWRQcm9wZXJ0eUNhdGVnb3J5Q29kZVNlcXVlbmNlOiB7XG4gICAgICBDb2RlVmFsdWU6IGNhdGVnb3J5LkNvZGVWYWx1ZSxcbiAgICAgIENvZGluZ1NjaGVtZURlc2lnbmF0b3I6IGNhdGVnb3J5LkNvZGluZ1NjaGVtZURlc2lnbmF0b3IsXG4gICAgICBDb2RlTWVhbmluZzogY2F0ZWdvcnkuQ29kZU1lYW5pbmdcbiAgICB9LFxuICAgIFNlZ21lbnRMYWJlbDogbGFiZWwsXG4gICAgU2VnbWVudEFsZ29yaXRobVR5cGU6ICdNQU5VQUwnLFxuXG4gICAgU2VnbWVudGVkUHJvcGVydHlUeXBlQ29kZVNlcXVlbmNlOiB7XG4gICAgICBDb2RlVmFsdWU6IHR5cGUuQ29kZVZhbHVlLFxuICAgICAgQ29kaW5nU2NoZW1lRGVzaWduYXRvcjogdHlwZS5Db2RpbmdTY2hlbWVEZXNpZ25hdG9yLFxuICAgICAgQ29kZU1lYW5pbmc6IHR5cGUuQ29kZU1lYW5pbmdcbiAgICB9XG4gIH07XG5cbiAgaWYgKG1vZGlmaWVyVUlEKSB7XG4gICAgY29uc3QgbW9kZmllciA9IHR5cGUuTW9kaWZpZXIuZmluZChtb2RpZmllckkgPT4gbW9kaWZpZXJJLkNvZGVWYWx1ZSA9PT0gbW9kaWZpZXJVSUQpO1xuXG4gICAgbWV0YWRhdGEuU2VnbWVudGVkUHJvcGVydHlUeXBlQ29kZVNlcXVlbmNlLlNlZ21lbnRlZFByb3BlcnR5VHlwZU1vZGlmaWVyQ29kZVNlcXVlbmNlID0ge1xuICAgICAgQ29kZVZhbHVlOiBtb2RmaWVyLkNvZGVWYWx1ZSxcbiAgICAgIENvZGluZ1NjaGVtZURlc2lnbmF0b3I6IG1vZGZpZXIuQ29kaW5nU2NoZW1lRGVzaWduYXRvcixcbiAgICAgIENvZGVNZWFuaW5nOiBtb2RmaWVyLkNvZGVNZWFuaW5nXG4gICAgfTtcblxuICAgIG1ldGFkYXRhLlJlY29tbWVuZGVkRGlzcGxheUNJRUxhYlZhbHVlID0gbW9kZmllci5yZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZTtcbiAgfSBlbHNlIHtcbiAgICBtZXRhZGF0YS5SZWNvbW1lbmRlZERpc3BsYXlDSUVMYWJWYWx1ZSA9IHR5cGUucmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWU7XG4gIH1cblxuICByZXR1cm4gbWV0YWRhdGE7XG59XG4iLCIvKipcbiAqIEdlbmVyYXRlcyBhIFVVSUQgZm9yIHRoZSBlbmFibGVkRWxlbWVudC5cbiAqIEBleHBvcnQgQHB1YmxpYyBAbWV0aG9kXG4gKiBAbmFtZSBnZW5lcmF0ZVVJRFxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIFVVSUQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzg4MDk0NzIvOTIwODMyMCBQdWJsaWMgRG9tYWluL01JVFxuICAvKiBlc2xpbnQgbm8tYml0d2lzZTogW1wiZXJyb3JcIiwgeyBcImFsbG93XCI6IFtcIiZcIixcInxcIl0gfV0gKi9cbiAgbGV0IGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICBpZiAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcGVyZm9ybWFuY2Uubm93ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZCArPSBwZXJmb3JtYW5jZS5ub3coKTsgLy8gVXNlIGhpZ2gtcHJlY2lzaW9uIHRpbWVyIGlmIGF2YWlsYWJsZVxuICB9XG4gIHJldHVybiAneC54LngueC54LngueHh4eC54eHgueC54Lnh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xuICAgIGNvbnN0IHIgPSAoZCArIE1hdGgucmFuZG9tKCkgKiAxNikgJSAxNiB8IDA7XG5cbiAgICBkID0gTWF0aC5mbG9vcihkIC8gMTYpO1xuICAgIHJldHVybiAoYyA9PT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4OCkudG9TdHJpbmcoMTYpO1xuICB9KTtcbn1cbiIsImltcG9ydCBjb3JuZXJzdG9uZSBmcm9tICdjb3JuZXJzdG9uZS10b29scyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFNlcmllc0luc3RhbmNlVWlkRnJvbUVuYWJsZWRFbGVtZW50KGVuYWJsZWRFbGVtZW50KSB7XG4gIGlmICghZW5hYmxlZEVsZW1lbnQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBpbWFnZUlkID0gZW5hYmxlZEVsZW1lbnQuaW1hZ2UuaW1hZ2VJZDtcbiAgY29uc3QgZ2VuZXJhbFNlcmllc01vZHVsZSA9IGNvcm5lcnN0b25lLm1ldGFEYXRhLmdldCgnZ2VuZXJhbFNlcmllc01vZHVsZScsIGltYWdlSWQpO1xuXG4gIHJldHVybiBnZW5lcmFsU2VyaWVzTW9kdWxlLnNlcmllc0luc3RhbmNlVUlEO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Nvcm5lcnN0b25lX2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY29ybmVyc3RvbmVfbWF0aF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jb3JuZXJzdG9uZV90b29sc19fOyJdLCJzb3VyY2VSb290IjoiIn0=