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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vLi9zcmMvR2VuZXJhbEFuYXRvbXlsaXN0LmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vLi9zcmMvaW5pdC5qcyIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vLi9zcmMvbW9kdWxlcy9leHRlbmRCcnVzaE1vZHVsZS5qcyIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vLi9zcmMvbW9kdWxlcy9mcmVlaGFuZDNETW9kdWxlLmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy90b29scy9CcnVzaDNEQXV0b0dhdGVkVG9vbC5qcyIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vLi9zcmMvdG9vbHMvQnJ1c2gzREhVR2F0ZWRUb29sLmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy90b29scy9CcnVzaDNEVG9vbC5qcyIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vLi9zcmMvdG9vbHMvRnJlZWhhbmRSb2kzRFNjdWxwdG9yVG9vbC5qcyIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vLi9zcmMvdG9vbHMvRnJlZWhhbmRSb2kzRFRvb2wuanMiLCJ3ZWJwYWNrOi8vb2hpZi1zZWdtZW50YXRpb24tcGx1Z2luLy4vc3JjL3Rvb2xzL24tZGltZW5zaW9uYWwtZmxvb2QtZmlsbC5qcyIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vLi9zcmMvdXRpbC9jbGFzc2VzL1BvbHlnb24uanMiLCJ3ZWJwYWNrOi8vb2hpZi1zZWdtZW50YXRpb24tcGx1Z2luLy4vc3JjL3V0aWwvZnJlZWhhbmRJbnRlcnBvbGF0ZS9nZW5lcmF0ZUludGVycG9sYXRpb25EYXRhLmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy91dGlsL2ZyZWVoYW5kSW50ZXJwb2xhdGUvaW50ZXJwb2xhdGUuanMiLCJ3ZWJwYWNrOi8vb2hpZi1zZWdtZW50YXRpb24tcGx1Z2luLy4vc3JjL3V0aWwvZ2VuZXJhdGVCcnVzaE1ldGFkYXRhLmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy91dGlsL2dlbmVyYXRlVUlELmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy91dGlsL2dldFNlcmllc0luc3RhbmNlVWlkRnJvbUVuYWJsZWRFbGVtZW50LmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi9leHRlcm5hbCBcImNvcm5lcnN0b25lLWNvcmVcIiIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vZXh0ZXJuYWwgXCJjb3JuZXJzdG9uZS1tYXRoXCIiLCJ3ZWJwYWNrOi8vb2hpZi1zZWdtZW50YXRpb24tcGx1Z2luL2V4dGVybmFsIFwiY29ybmVyc3RvbmUtdG9vbHNcIiJdLCJuYW1lcyI6WyJqc29uIiwicGFyc2VkSnNvbiIsIkpTT04iLCJwYXJzZSIsIlRPT0xCQVJfQlVUVE9OX1RZUEVTIiwiQ09NTUFORCIsIlNFVF9UT09MX0FDVElWRSIsImlkIiwicHJlUmVnaXN0cmF0aW9uIiwiY29uZmlndXJhdGlvbiIsImdldENvbW1hbmRzTW9kdWxlIiwiZGVmYXVsdENvbnRleHQiLCJhY3Rpb25zIiwiZGVmaW5pdGlvbnMiLCJnZXRUb29sYmFyTW9kdWxlIiwibGFiZWwiLCJpY29uIiwiYnV0dG9ucyIsInR5cGUiLCJjb21tYW5kTmFtZSIsImdldFBhbmVsTW9kdWxlIiwibW9kdWxlcyIsImRlZmF1bHRDb25maWciLCJtYXhSYWRpdXMiLCJob2xlRmlsbCIsImhvbGVGaWxsUmFuZ2UiLCJzdHJheVJlbW92ZSIsInN0cmF5UmVtb3ZlUmFuZ2UiLCJpbnRlcnBvbGF0ZSIsInNob3dGcmVlaGFuZFN0YXRzIiwiYnJ1c2gzZFRvb2xOYW1lIiwiYnJ1c2gzREhVR2F0ZWRUb29sTmFtZSIsImJydXNoM0RBdXRvR2F0ZWRUb29sIiwiZnJlZWhhbmRSb2kzRFRvb2wiLCJmcmVlaGFuZFJvaTNEU2N1bHB0b3JUb29sIiwiZ2F0ZXMiLCJuYW1lIiwicmFuZ2UiLCJpbml0IiwiYnJ1c2hNb2R1bGUiLCJicnVzaCIsImNvbmZpZyIsIk9iamVjdCIsImFzc2lnbiIsImZyZWVoYW5kM0RTdG9yZSIsImZyZWVoYW5kM0QiLCJzdGF0ZSIsImRpc3BsYXlTdGF0cyIsInJlZmVyZW5jZWRUb29sTmFtZSIsImV4dGVuZEJydXNoTW9kdWxlIiwiYnJ1c2hTdGF0ZSIsImdldHRlcnMiLCJzZXR0ZXJzIiwiYWN0aXZlR2F0ZSIsImFjdGl2ZUdhdGVSYW5nZSIsImdhdGVJbmRleCIsImZpbmRJbmRleCIsImVsZW1lbnQiLCJjdXN0b21HYXRlUmFuZ2UiLCJtaW4iLCJtYXgiLCJpbXBvcnRNZXRhZGF0YSIsInNlcmllc0luc3RhbmNlVWlkIiwiaW1wb3J0IiwibWV0YWRhdGEiLCJpbXBvcnRNb2RpZmllZCIsIm1vZGlmaWVkIiwic2VyaWVzQ29sbGVjdGlvbiIsImNoZWNrIiwib2JqZWN0IiwiRXJyb3IiLCJnZXRTZXJpZXMiLCJmaW5kIiwic2VyaWVzIiwidWlkIiwiZ2V0U3RydWN0dXJlU2V0Iiwic3RydWN0dXJlU2V0VWlkIiwic3RydWN0dXJlU2V0Q29sbGVjdGlvbiIsInN0cnVjdHVyZVNldCIsImdldFJPSUNvbnRvdXIiLCJST0lDb250b3VyVWlkIiwiUk9JQ29udG91ckNvbGxlY3Rpb24iLCJST0lDb250b3VyIiwiZ2V0Uk9JQ29udG91ckluZGV4IiwiZ2V0QWN0aXZlU3RydWN0dXJlU2V0SW5kZXgiLCJhY3RpdmVTdHJ1Y3R1cmVTZXRJbmRleCIsImdldEFjdGl2ZVJPSUNvbnRvdXJJbmRleCIsImFjdGl2ZVJPSUNvbnRvdXJJbmRleCIsImdldEFjdGl2ZVJPSUNvbnRvdXIiLCJ1bmRlZmluZWQiLCJzZXRTZXJpZXMiLCJwdXNoIiwic2V0U3RydWN0dXJlU2V0Iiwib3B0aW9ucyIsImlzTG9ja2VkIiwidmlzaWJsZSIsInNldFJPSUNvbnRvdXIiLCJjb2xvciIsImdldE5leHRDb2xvciIsInBvbHlnb25Db3VudCIsInNldFJPSUNvbnRvdXJBbmRTZXRJbmRleEFjdGl2ZSIsImluZGV4IiwibGVuZ3RoIiwic2V0RGVsZXRlUk9JRnJvbVN0cnVjdHVyZVNldCIsIlJPSUNvbnRvdXJJbmRleCIsInNwbGljZSIsInNldFN0cnVjdHVyZVNldE5hbWUiLCJzZXREZWxldGVTdHJ1Y3R1cmVTZXQiLCJzdHJ1Y3R1cmVTZXRJbmRleCIsInNldFJPSUNvbnRvdXJOYW1lIiwic2V0QWN0aXZlU3RydWN0dXJlU2V0SW5kZXgiLCJzZXRBY3RpdmVTdHJ1Y3R1cmVTZXQiLCJzZXRBY3RpdmVST0lDb250b3VySW5kZXgiLCJzZXRBY3RpdmVST0lDb250b3VyIiwiaW5jcmVtZW50UG9seWdvbkNvdW50IiwiZGVjcmVtZW50UG9seWdvbkNvdW50IiwiYWN0aXZlUk9JQ29udG91ciIsIlJPSUNvbnRvdXJBbmRTZXRJbmRleEFjdGl2ZSIsImRlbGV0ZVJPSUZyb21TdHJ1Y3R1cmVTZXQiLCJkZWxldGVTdHJ1Y3R1cmVTZXQiLCJzdHJ1Y3R1cmVTZXROYW1lIiwiUk9JQ29udG91ck5hbWUiLCJhY3RpdmVTdHJ1Y3R1cmVTZXQiLCJ0b2dnbGVJbnRlcnBvbGF0ZSIsInRvZ2dsZURpc3BsYXlTdGF0cyIsImVuYWJsZWRFbGVtZW50Q2FsbGJhY2siLCJlbmFibGVkRWxlbWVudCIsImdldEVuYWJsZWRFbGVtZW50IiwiaW1hZ2UiLCJpbXBvcnRDb2xvcnMiLCJjdXJyZW50Q29sb3JJbmRleCIsImltcG9ydEludGVybmFsTW9kdWxlIiwiZ2V0Q2lyY2xlIiwic3RvcmUiLCJCcnVzaDNEQXV0b0dhdGVkVG9vbCIsImluaXRpYWxDb25maWd1cmF0aW9uIiwiZXZ0IiwiX3NldEN1c3RvbUdhdGUiLCJfc3RhcnRQYWludGluZyIsImV2ZW50RGF0YSIsImRldGFpbCIsInJvd3MiLCJjb2x1bW5zIiwiY3VycmVudFBvaW50cyIsIngiLCJ5IiwicmFkaXVzIiwiaW1hZ2VQaXhlbERhdGEiLCJnZXRQaXhlbERhdGEiLCJyZXNjYWxlU2xvcGUiLCJzbG9wZSIsInJlc2NhbGVJbnRlcmNlcHQiLCJpbnRlcmNlcHQiLCJjaXJjbGUiLCJsbyIsImhpIiwiaSIsInBpeGVsVmFsdWUiLCJnYXRlIiwiZ2F0ZVZhbHVlcyIsImdhdGVkQ2lyY2xlQXJyYXkiLCJfY2xlYW5HYXRlZENpcmNsZSIsImRyYXdCcnVzaFBpeGVscyIsIkJydXNoM0RIVUdhdGVkVG9vbCIsInBvaW50ZXJBcnJheSIsIl9nYXRlQ2lyY2xlIiwicGFpbnRFdmVudERhdGEiLCJsYWJlbG1hcDNEIiwiY3VycmVudEltYWdlSWRJbmRleCIsImFjdGl2ZUxhYmVsbWFwSW5kZXgiLCJzaG91bGRFcmFzZSIsInRyaWdnZXJFdmVudCIsIkxBQkVMTUFQX01PRElGSUVEIiwidXBkYXRlSW1hZ2UiLCJnYXRlUmFuZ2UiLCJkYXRhIiwiZWRnZVBpeGVscyIsInhTaXplIiwieVNpemUiLCJqIiwiX2dldEJvdW5kaW5nQm94T2ZDaXJjbGUiLCJfYm94R2F0ZWRDaXJjbGUiLCJnZXR0ZXIiLCJfZmxvb2RGaWxsRW1wdHlSZWdpb25zRnJvbUVkZ2VzIiwiX2ZpbmRIb2xlc0FuZFJlZ2lvbnMiLCJob2xlcyIsInJlZ2lvbnMiLCJsYXJnZXN0UmVnaW9uQXJlYSIsIl9nZXRBcmVhT2ZMYXJnZXN0UmVnaW9uIiwiciIsInJlZ2lvbiIsInAiLCJob2xlIiwiZmlsbGVkR2F0ZWRDaXJjbGVBcnJheSIsIlVpbnQ4Q2xhbXBlZEFycmF5IiwiX2dldEVkZ2VQaXhlbHMiLCJyZXN1bHQiLCJzZWVkIiwiZmxvb2RlZCIsImsiLCJCcnVzaDNEVG9vbCIsImdldEFuZENhY2hlTGFiZWxtYXAyRCIsIl9pc0N0cmxEb3duIiwiYWx3YXlzRXJhc2VPbkNsaWNrIiwic2VnbWVudEluZGV4IiwiYWN0aXZlU2VnbWVudEluZGV4IiwiX3BhaW50IiwiX2RyYXdpbmciLCJfc3RhcnRMaXN0ZW5pbmdGb3JNb3VzZVVwIiwiRnJlZWhhbmRSb2kzRFNjdWxwdG9yVG9vbCIsImdldERlZmF1bHRGcmVlaGFuZFNjdWxwdGVyTW91c2VUb29sQ29uZmlndXJhdGlvbiIsImFjdGl2ZU1vdXNlVXBDYWxsYmFjayIsImJpbmQiLCJjbG9zZXN0VG9vbEluZGV4IiwiX2dldENsb3Nlc3RGcmVlaGFuZFRvb2xPbkVsZW1lbnQiLCJ0b29sU3RhdGUiLCJ0b29sRGF0YSIsInJlZmVyZW5jZWRTdHJ1Y3R1cmVTZXQiLCJob3ZlckNvbG9yIiwicmVmZXJlbmNlZFJPSUNvbnRvdXIiLCJjdXJyZW50VG9vbCIsIl9hY3RpdmUiLCJpc011bHRpUGFydFRvb2xBY3RpdmUiLCJfZ2V0TW91c2VMb2NhdGlvbiIsIl9pbnZhbGlkYXRlVG9vbERhdGEiLCJtb3VzZVVwUmVuZGVyIiwiX2RlYWN0aXZhdGVTY3VscHQiLCJwcmV2ZW50UHJvcGFnYXRpb24iLCJpbnZhbGlkYXRlZCIsImludGVycG9sYXRlZCIsIm1vdXNlTG9jYXRpb24iLCJoYW5kbGVzIiwic3RhcnQiLCJoaWdobGlnaHQiLCJhY3RpdmUiLCJtaW5TcGFjaW5nIiwiZHJhZ0NvbG9yIiwiZ2V0QWN0aXZlQ29sb3IiLCJnZXRUb29sQ29sb3IiLCJzaG93Q3Vyc29yT25Ib3ZlciIsImxpbWl0UmFkaXVzT3V0c2lkZVJlZ2lvbiIsImhvdmVyQ3Vyc29yRmFkZUFscGhhIiwiaG92ZXJDdXJzb3JGYWRlRGlzdGFuY2UiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImluc2VydE9yRGVsZXRlIiwiZnJlZWhhbmRBcmVhIiwiY2FsY3VsYXRlRnJlZWhhbmRTdGF0aXN0aWNzIiwiZHJhdyIsImRyYXdKb2luZWRMaW5lcyIsImRyYXdIYW5kbGVzIiwiZHJhd0xpbmtlZFRleHRCb3giLCJtb3ZlSGFuZGxlTmVhckltYWdlUG9pbnQiLCJnZXROZXdDb250ZXh0IiwibnVtYmVyc1dpdGhDb21tYXMiLCJwb2ludEluc2lkZUJvdW5kaW5nQm94IiwiY2FsY3VsYXRlU1VWIiwiRnJlZWhhbmRSb2kzRFRvb2wiLCJkZWZhdWx0RnJlZWhhbmRDb25maWd1cmF0aW9uIiwiYWx3YXlzU2hvd0hhbmRsZXMiLCJfZnJlZWhhbmQzRFN0b3JlIiwiX29uTWVhc3VyZW1lbnRSZW1vdmVkIiwiX2RyYXdpbmdNb3VzZVVwQ2FsbGJhY2siLCJnb29kRXZlbnREYXRhIiwiY29uc29sZSIsImVycm9yIiwibWVhc3VyZW1lbnREYXRhIiwicG9pbnRzIiwidGV4dEJveCIsImhhc01vdmVkIiwibW92ZXNJbmRlcGVuZGVudGx5IiwiZHJhd25JbmRlcGVuZGVudGx5IiwiYWxsb3dlZE91dHNpZGVJbWFnZSIsImhhc0JvdW5kaW5nQm94IiwiaW50ZXJhY3Rpb25UeXBlIiwiX2FkZEFuZFNldFZvbHVtZUlmTm9Wb2x1bWVzIiwiX3N0YXJ0RHJhd2luZyIsIl9hZGRQb2ludCIsImNvb3JkcyIsImhhbmRsZUNhbnZhcyIsImRpc3RhbmNlIiwiY3VycmVudFRhcmdldCIsIm5lYXJieSIsIl9wb2ludE5lYXJIYW5kbGVBbGxUb29scyIsImV2ZW50IiwiY3RybEtleSIsImhhbmRsZU5lYXJieSIsImNhbGwiLCJ0b29sSW5kZXgiLCJoYW5kbGUiLCJtZXRhS2V5IiwiX3N3aXRjaFJPSUNvbnRvdXIiLCJkcmFnT3JpZ2luIiwiX21vZGlmeWluZyIsImN1cnJlbnRIYW5kbGUiLCJfYWN0aXZhdGVNb2RpZnkiLCJzZXJpZXNNb2R1bGUiLCJnZXQiLCJpbWFnZUlkIiwibW9kYWxpdHkiLCJjb250ZXh0IiwiY2FudmFzQ29udGV4dCIsImNhbnZhcyIsImxpbmVXaWR0aCIsImdldFRvb2xXaWR0aCIsImlzUk9JQWN0aXZlIiwiZ2V0Q29sb3JJZkFjdGl2ZSIsImZpbGxDb2xvciIsImludmFsaWRIYW5kbGVQbGFjZW1lbnQiLCJpbnZhbGlkQ29sb3IiLCJnZXRGaWxsQ29sb3IiLCJnbG9iYWxBbHBoYSIsImludGVycG9sYXRlZEFscGhhIiwibGluZXMiLCJwb2x5Qm91bmRpbmdCb3giLCJmaWxsIiwiaGFuZGxlUmFkaXVzIiwiaW50ZXJwb2xhdGVkSGFuZGxlUmFkaXVzIiwiYWN0aXZlSGFuZGxlUmFkaXVzIiwiY2FuQ29tcGxldGUiLCJjb21wbGV0ZUhhbmRsZVJhZGl1cyIsImFyZWEiLCJtZWFuU3RkRGV2IiwibWVhblN0ZERldlNVViIsImJvdW5kcyIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsInRvcCIsIk1hdGgiLCJ3aWR0aCIsImFicyIsImhlaWdodCIsInBpeGVscyIsIm1lYW4iLCJzdGREZXYiLCJpc05hTiIsImNvbHVtblBpeGVsU3BhY2luZyIsInJvd1BpeGVsU3BhY2luZyIsInNjYWxpbmciLCJ0ZXh0IiwidGV4dEJveFRleHQiLCJ0ZXh0Qm94QW5jaG9yUG9pbnRzIiwidGV4dExpbmVzIiwibW9TdWZmaXgiLCJtZWFuVGV4dCIsInRvRml4ZWQiLCJzdGREZXZUZXh0IiwiU1VWdGV4dCIsInN1ZmZpeCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImFyZWFUZXh0IiwiX2RlYWN0aXZhdGVEcmF3IiwidG9vbFR5cGUiLCJfY2xvc2VUb29sSWZEcmF3aW5nIiwiX2FkZE1lYXN1cmVtZW50UmVtb3ZlZExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk1FQVNVUkVNRU5UX1JFTU9WRUQiLCJhZGRFdmVudExpc3RlbmVyIiwic3BhY2luZyIsImNvbXBsZXRlSGFuZGxlUmFkaXVzVG91Y2giLCJtb2R1bGUiLCJleHBvcnRzIiwib25GbG9vZCIsIm9uQm91bmRhcnkiLCJlcXVhbHMiLCJkaWFnb25hbHMiLCJzdGFydE5vZGUiLCJwZXJtdXRhdGlvbnMiLCJzdGFjayIsInZpc2l0cyIsImluaXRpYWxpemUiLCJub29wIiwiZGVmYXVsdEVxdWFscyIsInBydW5lZFBlcm11dGF0aW9ucyIsIm1haW4iLCJjdXJyZW50QXJncyIsImZsb29kIiwicG9wIiwiYm91bmRhcmllcyIsImpvYiIsImdldEFyZ3MiLCJwcmVsZXRncyIsInByZXZpb3VzQXJncyIsInZpc2l0ZWQiLCJtYXJrQXNWaXNpdGVkIiwibWVtYmVyIiwibWFya0FzRmxvb2RlZCIsInB1c2hBZGphY2VudCIsIm1hcmtBc0JvdW5kYXJ5Iiwia2V5Iiwibm9kZSIsInNhZmVseSIsImFwcGx5IiwicGVybSIsIm5leHRBcmdzIiwic2xpY2UiLCJmIiwiYXJncyIsImEiLCJiIiwicGVybXV0ZSIsImZpbHRlciIsImNvdW50IiwiY291bnROb25aZXJvZXMiLCJwZXJtcyIsInBlcm11dGF0aW9uIiwic3RyaW5nIiwic3BsaXQiLCJtYXAiLCJjIiwicGFyc2VJbnQiLCJwb3ciLCJscGFkIiwidG9TdHJpbmciLCJjaGFyYWN0ZXIiLCJhcnJheSIsIkFycmF5IiwicGFkIiwiam9pbiIsImhhc093blByb3BlcnR5IiwidW5zaGlmdCIsIlBvbHlnb24iLCJzb3BJbnN0YW5jZVVpZCIsInBvbHlnb25VaWQiLCJmcmFtZU51bWJlciIsIl9wb2x5UG9pbnRzIiwiX2RlZXBDb3B5UG9pbnRzIiwiX3NvcEluc3RhbmNlVWlkIiwiX3Nlcmllc0luc3RhbmNlVWlkIiwiX3N0cnVjdHVyZVNldFVpZCIsIl9ST0lDb250b3VyVWlkIiwiX3BvbHlnb25VaWQiLCJfZnJhbWVOdW1iZXIiLCJfaW50ZXJwb2xhdGVkIiwicG9seVBvaW50cyIsImlzWiIsInoiLCJpbXBvcnRUeXBlIiwic29wSW5zdGFuY2VVSUQiLCJfZ2VuZXJhdGVQb2ludHMiLCJ0b0JlU2NhbGVkIiwiX2RlZXBDb3B5T25lUG9pbnQiLCJwb2ludCIsImdsb2JhbFRvb2xTdGF0ZU1hbmFnZXIiLCJpbWFnZUlkcyIsIl9nZXRJbWFnZUlkc09mQWN0aXZlU2VyaWVzIiwiUk9JQ29udG91ckRhdGEiLCJfZ2V0Uk9JQ29udG91ckRhdGEiLCJleHRlbnQiLCJfZ2V0RXh0ZW50T2ZSZWdpb24iLCJzbGljZUVkaXRlZCIsIl9nZXRTbGljZVBvc2l0aW9uT2ZUb29sRGF0YSIsImludGVycG9sYXRpb25MaXN0IiwiX3NsaWNlTmVlZHNJbnRlcnBvbGF0aW5nIiwiY29udG91clBhaXIiLCJfZ2V0Qm91bmRpbmdQYWlyIiwiX2FwcGVuZGludGVycG9sYXRpb25MaXN0IiwiY29udG91cnMiLCJzdGFja1Rvb2xTdGF0ZSIsInRvb2xTdGF0ZU1hbmFnZXIiLCJzYXZlVG9vbFN0YXRlIiwiaW1hZ2VUb29sU3RhdGUiLCJmcmVlaGFuZFJvaSIsImNvbnRvdXIiLCJjb250b3Vyc09uU2xpY2UiLCJzbGljZUluZGV4IiwicGFpciIsImxpc3QiLCJjYW5JbnRlcnBvbGF0ZSIsImRQIiwiX2xpbmVhcmx5SW50ZXJwb2xhdGVCZXR3ZWVuIiwiaW5kaWNpZXMiLCJjMSIsIl9nZW5lcmF0ZUNsb3NlZENvbnRvdXIiLCJjMiIsIl9nZW5lcmF0ZUludGVycG9sYXRpb25Db250b3VyUGFpciIsImMxSW50ZXJwIiwiYzJJbnRlcnAiLCJmb3JFYWNoIiwiX2xpbmVhcmx5SW50ZXJwb2xhdGVDb250b3VyIiwiYzFIYXNNb3JlTm9kZXMiLCJ6SW50ZXJwIiwiaW50ZXJwb2xhdGVkMkRDb250b3VyIiwiX2dlbmVyYXRlSW50ZXJwb2xhdGVkT3BlbkNvbnRvdXIiLCJjMU1ldGFkYXRhIiwiX2VkaXRJbnRlcnBvbGF0ZWRDb250b3VyIiwiX2FkZEludGVycG9sYXRlZENvbnRvdXIiLCJjdW1QZXJpbTEiLCJfZ2V0Q3VtdWxhdGl2ZVBlcmltZXRlciIsImN1bVBlcmltMiIsImludGVycE5vZGVzIiwiY2VpbCIsImN1bVBlcmltMU5vcm0iLCJfbm9ybWFsaXNlZEN1bXVsYXRpdmVQZXJpbWV0ZXIiLCJjdW1QZXJpbTJOb3JtIiwibnVtTm9kZXMxIiwibnVtTm9kZXMyIiwicGVyaW0xSW50ZXJwIiwiX2dldEludGVycG9sYXRlZFBlcmltIiwicGVyaW0ySW50ZXJwIiwicGVyaW0xSW5kIiwiX2dldEluZGljYXRvckFycmF5IiwicGVyaW0ySW5kIiwibm9kZXNQZXJTZWdtZW50MSIsIl9nZXROb2Rlc1BlclNlZ21lbnQiLCJub2Rlc1BlclNlZ21lbnQyIiwiYzFpIiwiX2dldFN1cGVyU2FtcGxlZENvbnRvdXIiLCJjMmkiLCJfc2hpZnRTdXBlclNhbXBsZWRDb250b3VySW5QbGFjZSIsIl9yZWR1Y2VDb250b3Vyc1RvT3JpZ2luTm9kZXMiLCJyZWZlcmVuY2VkVG9vbERhdGEiLCJwb2x5Z29uIiwiZ2V0RnJlZWhhbmRUb29sRGF0YSIsInRvb2xEYXRhSW5kZXgiLCJvbGRQb2x5Z29uIiwidXBkYXRlZFBvbHlnb24iLCJjMWlyIiwiYzJpciIsImNJbnRlcnAiLCJJIiwiYzFpTGVuZ3RoIiwib3B0aW1hbCIsInN0YXJ0aW5nTm9kZSIsInRvdGFsU3F1YXJlZFhZTGVuZ3RocyIsIkluZmluaXR5IiwiaXR0ZXJhdGlvbiIsIl9zaGlmdENpcmN1bGFyQXJyYXkiLCJhcnIiLCJmbG9vciIsIm5vZGVzUGVyU2VnbWVudCIsImNpIiwibiIsInhTcGFjaW5nIiwieVNwYWNpbmciLCJwZXJpbUludGVycCIsInBlcmltSW5kIiwiaWR4Iiwic29ydCIsInBlcmltSW5kU29ydGVkIiwiaW5kaWNpZXNPZk9yaWdpbk5vZGVzIiwicmVkdWNlIiwiZWxlbWVudFZhbHVlIiwibnVtTm9kZXMiLCJjdW1QZXJpbU5vcm0iLCJkaWZmIiwibGluc3BhY2UiLCJjb25jYXQiLCJjdW11bGF0aXZlUGVyaW1ldGVyIiwibGVuZ3RoT2ZTZWdtZW50Iiwic3FydCIsImN1bVBlcmltIiwiX3JldmVyc2VJZkFudGlDbG9ja3dpc2UiLCJjb250b3VyWE1lYW4iLCJnZXRTdW1SZWR1Y2VyIiwiY2hlY2tTdW0iLCJyZXZlcnNlIiwidG90YWwiLCJudW0iLCJjYXRlZ29yaWVzIiwiU2VnbWVudGF0aW9uQ29kZXMiLCJDYXRlZ29yeSIsImdlbmVyYXRlTWV0YWRhdGEiLCJjYXRlZ29yeVVJRCIsInR5cGVVSUQiLCJtb2RpZmllclVJRCIsImNhdGVnb3J5IiwiY2F0ZWdvcmllc0kiLCJDb2RlVmFsdWUiLCJUeXBlIiwidHlwZXNJIiwiU2VnbWVudGVkUHJvcGVydHlDYXRlZ29yeUNvZGVTZXF1ZW5jZSIsIkNvZGluZ1NjaGVtZURlc2lnbmF0b3IiLCJDb2RlTWVhbmluZyIsIlNlZ21lbnRMYWJlbCIsIlNlZ21lbnRBbGdvcml0aG1UeXBlIiwiU2VnbWVudGVkUHJvcGVydHlUeXBlQ29kZVNlcXVlbmNlIiwibW9kZmllciIsIk1vZGlmaWVyIiwibW9kaWZpZXJJIiwiU2VnbWVudGVkUHJvcGVydHlUeXBlTW9kaWZpZXJDb2RlU2VxdWVuY2UiLCJSZWNvbW1lbmRlZERpc3BsYXlDSUVMYWJWYWx1ZSIsInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlIiwiZCIsIkRhdGUiLCJnZXRUaW1lIiwicGVyZm9ybWFuY2UiLCJub3ciLCJyZXBsYWNlIiwicmFuZG9tIiwiZ2V0U2VyaWVzSW5zdGFuY2VVaWRGcm9tRW5hYmxlZEVsZW1lbnQiLCJnZW5lcmFsU2VyaWVzTW9kdWxlIiwibWV0YURhdGEiLCJzZXJpZXNJbnN0YW5jZVVJRCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTUEsSUFBSSx3bnNKQUFWO0FBd2tJQSxJQUFNQyxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxJQUFYLENBQW5CO2VBRWVDLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFrSWY7Ozs7QUFFQSxJQUFNRyxvQkFBb0IsR0FBRztBQUMzQkMsU0FBTyxFQUFFLFNBRGtCO0FBRTNCQyxpQkFBZSxFQUFFO0FBRlUsQ0FBN0I7ZUFLZTtBQUNiOzs7QUFHQUMsSUFBRSxFQUFFLDZCQUpTO0FBTWJDLGlCQU5hLDZCQU11QjtBQUFBLFFBQXBCQyxhQUFvQix1RUFBSixFQUFJO0FBQ2xDLHVCQUFLQSxhQUFMO0FBQ0QsR0FSWTs7QUFVYjs7OztBQUlBQyxtQkFkYSwrQkFjTztBQUNsQixXQUFPO0FBQ0xDLG9CQUFjLEVBQUUsUUFEWDtBQUVMQyxhQUFPLEVBQUUsRUFGSjtBQUdMQyxpQkFBVyxFQUFFO0FBSFIsS0FBUDtBQUtELEdBcEJZOztBQXNCYjs7Ozs7O0FBTUFDLGtCQTVCYSw4QkE0Qk07QUFDakIsV0FBTztBQUNMRCxpQkFBVyxFQUFFLENBQ1g7QUFDRU4sVUFBRSxFQUFFLGtCQUROO0FBRUVRLGFBQUssRUFBRSxLQUZUO0FBR0VDLFlBQUksRUFBRSxPQUhSO0FBSUVDLGVBQU8sRUFBRSxDQUNQO0FBQ0VWLFlBQUUsRUFBRSxhQUROO0FBRUVRLGVBQUssRUFBRSxNQUZUO0FBR0VDLGNBQUksRUFBRSxPQUhSO0FBSUVFLGNBQUksRUFBRWQsb0JBQW9CLENBQUNFLGVBSjdCO0FBS0VhLHFCQUFXLEVBQUU7QUFMZixTQURPLEVBUVA7QUFDRVosWUFBRSxFQUFFLHFCQUROO0FBRUVRLGVBQUssRUFBRSxRQUZUO0FBR0VDLGNBQUksRUFBRSxPQUhSO0FBSUVFLGNBQUksRUFBRWQsb0JBQW9CLENBQUNFLGVBSjdCO0FBS0VhLHFCQUFXLEVBQUU7QUFMZixTQVJPO0FBSlgsT0FEVyxFQXNCWDtBQUNFWixVQUFFLEVBQUUsWUFETjtBQUVFUSxhQUFLLEVBQUUsU0FGVDtBQUdFQyxZQUFJLEVBQUUsT0FIUjtBQUlFQyxlQUFPLEVBQUUsQ0FDUDtBQUNFVixZQUFFLEVBQUUsT0FETjtBQUVFUSxlQUFLLEVBQUUsUUFGVDtBQUdFQyxjQUFJLEVBQUUsT0FIUjtBQUlFRSxjQUFJLEVBQUVkLG9CQUFvQixDQUFDRSxlQUo3QjtBQUtFYSxxQkFBVyxFQUFFO0FBTGYsU0FETyxFQVFQO0FBQ0VaLFlBQUUsRUFBRSxvQkFETjtBQUVFUSxlQUFLLEVBQUUsVUFGVDtBQUdFQyxjQUFJLEVBQUUsT0FIUjtBQUlFRSxjQUFJLEVBQUVkLG9CQUFvQixDQUFDRSxlQUo3QjtBQUtFYSxxQkFBVyxFQUFFO0FBTGYsU0FSTyxFQWVQO0FBQ0VaLFlBQUUsRUFBRSxzQkFETjtBQUVFUSxlQUFLLEVBQUUsTUFGVDtBQUdFQyxjQUFJLEVBQUUsT0FIUjtBQUlFRSxjQUFJLEVBQUVkLG9CQUFvQixDQUFDRSxlQUo3QjtBQUtFYSxxQkFBVyxFQUFFO0FBTGYsU0FmTztBQUpYLE9BdEJXLENBRFI7QUFvRExSLG9CQUFjLEVBQUU7QUFwRFgsS0FBUDtBQXNERCxHQW5GWTs7QUFxRmI7OztBQUdBUyxnQkFBYyxFQUFFO0FBQUEsV0FBTSxJQUFOO0FBQUE7QUF4RkgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUGY7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsd0JBQU1BLE9BQXRCO0FBRUEsSUFBTUMsYUFBYSxHQUFHO0FBQ3BCQyxXQUFTLEVBQUUsRUFEUztBQUVwQkMsVUFBUSxFQUFFLENBRlU7QUFHcEJDLGVBQWEsRUFBRSxDQUFDLENBQUQsRUFBSSxFQUFKLENBSEs7QUFJcEJDLGFBQVcsRUFBRSxDQUpPO0FBS3BCQyxrQkFBZ0IsRUFBRSxDQUFDLENBQUQsRUFBSSxFQUFKLENBTEU7QUFNcEJDLGFBQVcsRUFBRSxLQU5PO0FBT3BCQyxtQkFBaUIsRUFBRSxLQVBDO0FBUXBCQyxpQkFBZSxFQUFFLGFBUkc7QUFTcEJDLHdCQUFzQixFQUFFLG9CQVRKO0FBVXBCQyxzQkFBb0IsRUFBRSxzQkFWRjtBQVdwQkMsbUJBQWlCLEVBQUUsbUJBWEM7QUFZcEJDLDJCQUF5QixFQUFFLDJCQVpQO0FBYXBCQyxPQUFLLEVBQUUsQ0FDTDtBQUNFO0FBQ0FDLFFBQUksRUFBRSxTQUZSO0FBR0VDLFNBQUssRUFBRSxDQUFDLENBQUMsR0FBRixFQUFPLENBQUMsRUFBUjtBQUhULEdBREssRUFNTDtBQUNFO0FBQ0FELFFBQUksRUFBRSxRQUZSO0FBR0VDLFNBQUssRUFBRSxDQUFDLENBQUMsRUFBRixFQUFNLEdBQU47QUFIVCxHQU5LLEVBV0w7QUFDRUQsUUFBSSxFQUFFLFFBRFI7QUFFRUMsU0FBSyxFQUFFLENBQUMsQ0FBRCxFQUFJLEdBQUo7QUFGVCxHQVhLO0FBYmEsQ0FBdEI7O0FBK0JlLFNBQVNDLElBQVQsR0FBa0M7QUFBQSxNQUFwQjdCLGFBQW9CLHVFQUFKLEVBQUk7QUFDL0MsTUFBTThCLFdBQVcsR0FBR2xCLE9BQU8sQ0FBQ21CLEtBQTVCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCckIsYUFBbEIsRUFBaUNiLGFBQWpDLENBQWY7QUFFQSxrQ0FBa0I4QixXQUFsQixFQUErQkUsTUFBL0I7QUFFQSxrQ0FBUyxRQUFULEVBQW1CLFlBQW5CO0FBQ0EsTUFBTUcsZUFBZSxHQUFHdkIsT0FBTyxDQUFDd0IsVUFBaEM7QUFFQUQsaUJBQWUsQ0FBQ0UsS0FBaEIsQ0FBc0JsQixXQUF0QixHQUFvQ2EsTUFBTSxDQUFDYixXQUEzQztBQUNBZ0IsaUJBQWUsQ0FBQ0UsS0FBaEIsQ0FBc0JDLFlBQXRCLEdBQXFDTixNQUFNLENBQUNaLGlCQUE1QztBQUVBLHVEQUFxQjtBQUFFTyxRQUFJLEVBQUVLLE1BQU0sQ0FBQ1g7QUFBZixHQUFyQjtBQUNBLDhEQUE0QjtBQUFFTSxRQUFJLEVBQUVLLE1BQU0sQ0FBQ1Y7QUFBZixHQUE1QjtBQUNBLGdFQUE4QjtBQUFFSyxRQUFJLEVBQUVLLE1BQU0sQ0FBQ1Q7QUFBZixHQUE5QjtBQUNBLDZEQUEyQjtBQUFFSSxRQUFJLEVBQUVLLE1BQU0sQ0FBQ1I7QUFBZixHQUEzQjtBQUNBLHFFQUFtQztBQUNqQ0csUUFBSSxFQUFFSyxNQUFNLENBQUNQLHlCQURvQjtBQUVqQ2Msc0JBQWtCLEVBQUVQLE1BQU0sQ0FBQ1I7QUFGTSxHQUFuQztBQUlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRGMsU0FBU2dCLGlCQUFULENBQTJCVixXQUEzQixFQUF3Q0UsTUFBeEMsRUFBZ0Q7QUFDN0QsTUFBTVMsVUFBVSxHQUFHWCxXQUFXLENBQUNPLEtBQS9CO0FBQ0EsTUFBTUssT0FBTyxHQUFHWixXQUFXLENBQUNZLE9BQTVCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHYixXQUFXLENBQUNhLE9BQTVCO0FBRUFGLFlBQVUsQ0FBQzFCLFFBQVgsR0FBc0JpQixNQUFNLENBQUNqQixRQUE3QjtBQUNBMEIsWUFBVSxDQUFDekIsYUFBWCxHQUEyQmdCLE1BQU0sQ0FBQ2hCLGFBQWxDO0FBQ0F5QixZQUFVLENBQUN4QixXQUFYLEdBQXlCZSxNQUFNLENBQUNmLFdBQWhDO0FBQ0F3QixZQUFVLENBQUN2QixnQkFBWCxHQUE4QmMsTUFBTSxDQUFDZCxnQkFBckM7QUFDQXVCLFlBQVUsQ0FBQ2YsS0FBWCxHQUFtQk0sTUFBTSxDQUFDTixLQUExQjtBQUNBZSxZQUFVLENBQUNHLFVBQVgsR0FBd0JILFVBQVUsQ0FBQ2YsS0FBWCxDQUFpQixDQUFqQixFQUFvQkMsSUFBNUM7QUFDQWMsWUFBVSxDQUFDM0IsU0FBWCxHQUF1QmtCLE1BQU0sQ0FBQ2xCLFNBQTlCOztBQUVBNEIsU0FBTyxDQUFDRyxlQUFSLEdBQTBCLFlBQU07QUFDOUIsUUFBTUQsVUFBVSxHQUFHSCxVQUFVLENBQUNHLFVBQTlCO0FBQ0EsUUFBTWxCLEtBQUssR0FBR2UsVUFBVSxDQUFDZixLQUF6QjtBQUVBLFFBQU1vQixTQUFTLEdBQUdwQixLQUFLLENBQUNxQixTQUFOLENBQWdCLFVBQUFDLE9BQU8sRUFBSTtBQUMzQyxhQUFPQSxPQUFPLENBQUNyQixJQUFSLEtBQWlCaUIsVUFBeEI7QUFDRCxLQUZpQixDQUFsQjtBQUlBLFdBQU9ILFVBQVUsQ0FBQ2YsS0FBWCxDQUFpQm9CLFNBQWpCLEVBQTRCbEIsS0FBbkM7QUFDRCxHQVREOztBQVdBYyxTQUFPLENBQUNPLGVBQVIsR0FBMEIsWUFBTTtBQUM5QixRQUFNdkIsS0FBSyxHQUFHZSxVQUFVLENBQUNmLEtBQXpCO0FBRUEsUUFBTW9CLFNBQVMsR0FBR3BCLEtBQUssQ0FBQ3FCLFNBQU4sQ0FBZ0IsVUFBQUMsT0FBTyxFQUFJO0FBQzNDLGFBQU9BLE9BQU8sQ0FBQ3JCLElBQVIsS0FBaUIsUUFBeEI7QUFDRCxLQUZpQixDQUFsQjtBQUlBLFdBQU9jLFVBQVUsQ0FBQ2YsS0FBWCxDQUFpQm9CLFNBQWpCLEVBQTRCbEIsS0FBbkM7QUFDRCxHQVJEOztBQVVBZSxTQUFPLENBQUNNLGVBQVIsR0FBMEIsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDdEMsUUFBTXpCLEtBQUssR0FBR2UsVUFBVSxDQUFDZixLQUF6QjtBQUVBLFFBQU1vQixTQUFTLEdBQUdwQixLQUFLLENBQUNxQixTQUFOLENBQWdCLFVBQUFDLE9BQU8sRUFBSTtBQUMzQyxhQUFPQSxPQUFPLENBQUNyQixJQUFSLEtBQWlCLFFBQXhCO0FBQ0QsS0FGaUIsQ0FBbEI7QUFJQSxRQUFNc0IsZUFBZSxHQUFHUixVQUFVLENBQUNmLEtBQVgsQ0FBaUJvQixTQUFqQixFQUE0QmxCLEtBQXBEOztBQUVBLFFBQUlzQixHQUFHLEtBQUssSUFBWixFQUFrQjtBQUNoQkQscUJBQWUsQ0FBQyxDQUFELENBQWYsR0FBcUJDLEdBQXJCO0FBQ0Q7O0FBRUQsUUFBSUMsR0FBRyxLQUFLLElBQVosRUFBa0I7QUFDaEJGLHFCQUFlLENBQUMsQ0FBRCxDQUFmLEdBQXFCRSxHQUFyQjtBQUNEO0FBQ0YsR0FoQkQ7O0FBa0JBVCxTQUFPLENBQUNVLGNBQVIsR0FBeUIsVUFBQUMsaUJBQWlCLEVBQUk7QUFDNUMsUUFBSXZCLFdBQVcsQ0FBQ08sS0FBWixDQUFrQmlCLE1BQWxCLElBQTRCeEIsV0FBVyxDQUFDTyxLQUFaLENBQWtCaUIsTUFBbEIsQ0FBeUJELGlCQUF6QixDQUFoQyxFQUE2RTtBQUMzRSxhQUFPdkIsV0FBVyxDQUFDTyxLQUFaLENBQWtCaUIsTUFBbEIsQ0FBeUJELGlCQUF6QixDQUFQO0FBQ0Q7O0FBRUQ7QUFDRCxHQU5EOztBQVFBVixTQUFPLENBQUNTLGNBQVIsR0FBeUIsVUFBQ0MsaUJBQUQsRUFBb0JFLFFBQXBCLEVBQWlDO0FBQ3hEO0FBQ0EsUUFBSSxDQUFDekIsV0FBVyxDQUFDTyxLQUFaLENBQWtCaUIsTUFBdkIsRUFBK0I7QUFDN0J4QixpQkFBVyxDQUFDTyxLQUFaLENBQWtCaUIsTUFBbEIsR0FBMkIsRUFBM0I7QUFDRDs7QUFFRHhCLGVBQVcsQ0FBQ08sS0FBWixDQUFrQmlCLE1BQWxCLENBQXlCRCxpQkFBekIsSUFBOENFLFFBQTlDO0FBQ0QsR0FQRDs7QUFTQVosU0FBTyxDQUFDYSxjQUFSLEdBQXlCLFVBQUFILGlCQUFpQixFQUFJO0FBQzVDLFFBQU1ELGNBQWMsR0FBR3RCLFdBQVcsQ0FBQ08sS0FBWixDQUFrQmlCLE1BQWxCLENBQXlCRCxpQkFBekIsQ0FBdkI7O0FBRUEsUUFBSUQsY0FBYyxDQUFDSyxRQUFuQixFQUE2QjtBQUMzQjtBQUNEOztBQUVETCxrQkFBYyxDQUFDSyxRQUFmLEdBQTBCLElBQTFCLENBUDRDLENBUzVDO0FBQ0E7QUFDRCxHQVhEO0FBWUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkQ7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7Ozs7OztBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBRUEsSUFBTXBCLEtBQUssR0FBRztBQUNacUIsa0JBQWdCLEVBQUUsRUFETjtBQUVadkMsYUFBVyxFQUFFLEtBRkQ7QUFHWm1CLGNBQVksRUFBRTtBQUhGLENBQWQ7O0FBTUEsU0FBU3FCLEtBQVQsQ0FBZUMsTUFBZixFQUF1QmpDLElBQXZCLEVBQTZCO0FBQzNCLE1BQUksQ0FBQ2lDLE1BQUwsRUFBYTtBQUNYLFVBQU0sSUFBSUMsS0FBSiwyREFBNkRsQyxJQUE3RCxPQUFOO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTbUMsU0FBVCxDQUFtQlQsaUJBQW5CLEVBQXNDO0FBQ3BDTSxPQUFLLENBQUNOLGlCQUFELEVBQW9CLG1CQUFwQixDQUFMO0FBRUEsU0FBT2hCLEtBQUssQ0FBQ3FCLGdCQUFOLENBQXVCSyxJQUF2QixDQUE0QixVQUFBQyxNQUFNLEVBQUk7QUFDM0MsV0FBT0EsTUFBTSxDQUFDQyxHQUFQLEtBQWVaLGlCQUF0QjtBQUNELEdBRk0sQ0FBUDtBQUdEOztBQUVELFNBQVNhLGVBQVQsQ0FBeUJiLGlCQUF6QixFQUF5RTtBQUFBLE1BQTdCYyxlQUE2Qix1RUFBWCxTQUFXO0FBQ3ZFUixPQUFLLENBQUNRLGVBQUQsRUFBa0IsaUJBQWxCLENBQUw7QUFFQSxNQUFNSCxNQUFNLEdBQUdGLFNBQVMsQ0FBQ1QsaUJBQUQsQ0FBeEI7O0FBRUEsTUFBSSxDQUFDVyxNQUFMLEVBQWE7QUFDWDtBQUNEOztBQUVELFNBQU9BLE1BQU0sQ0FBQ0ksc0JBQVAsQ0FBOEJMLElBQTlCLENBQW1DLFVBQUFNLFlBQVksRUFBSTtBQUN4RCxXQUFPQSxZQUFZLENBQUNKLEdBQWIsS0FBcUJFLGVBQTVCO0FBQ0QsR0FGTSxDQUFQO0FBR0Q7O0FBRUQsU0FBU0csYUFBVCxDQUF1QmpCLGlCQUF2QixFQUEwQ2MsZUFBMUMsRUFBMkRJLGFBQTNELEVBQTBFO0FBQ3hFWixPQUFLLENBQUNZLGFBQUQsRUFBZ0IsZUFBaEIsQ0FBTDtBQUVBLE1BQU1GLFlBQVksR0FBR0gsZUFBZSxDQUFDYixpQkFBRCxFQUFvQmMsZUFBcEIsQ0FBcEM7O0FBRUEsTUFBSSxDQUFDRSxZQUFMLEVBQW1CO0FBQ2pCO0FBQ0Q7O0FBRUQsU0FBT0EsWUFBWSxDQUFDRyxvQkFBYixDQUFrQ1QsSUFBbEMsQ0FBdUMsVUFBQVUsVUFBVSxFQUFJO0FBQzFELFdBQU9BLFVBQVUsSUFBSUEsVUFBVSxDQUFDUixHQUFYLEtBQW1CTSxhQUF4QztBQUNELEdBRk0sQ0FBUDtBQUdEOztBQUVELFNBQVNHLGtCQUFULENBQTRCckIsaUJBQTVCLEVBQStDYyxlQUEvQyxFQUFnRUksYUFBaEUsRUFBK0U7QUFDN0VaLE9BQUssQ0FBQ1ksYUFBRCxFQUFnQixlQUFoQixDQUFMO0FBRUEsTUFBTUYsWUFBWSxHQUFHSCxlQUFlLENBQUNiLGlCQUFELEVBQW9CYyxlQUFwQixDQUFwQzs7QUFFQSxNQUFJLENBQUNFLFlBQUwsRUFBbUI7QUFDakI7QUFDRDs7QUFFRCxTQUFPQSxZQUFZLENBQUNHLG9CQUFiLENBQWtDekIsU0FBbEMsQ0FBNEMsVUFBQTBCLFVBQVUsRUFBSTtBQUMvRCxXQUFPQSxVQUFVLENBQUNSLEdBQVgsS0FBbUJNLGFBQTFCO0FBQ0QsR0FGTSxDQUFQO0FBR0Q7O0FBRUQsU0FBU0ksMEJBQVQsQ0FBb0N0QixpQkFBcEMsRUFBdUQ7QUFDckQsTUFBTVcsTUFBTSxHQUFHRixTQUFTLENBQUNULGlCQUFELENBQXhCO0FBRUEsU0FBT1csTUFBTSxDQUFDWSx1QkFBZDtBQUNEOztBQUVELFNBQVNDLHdCQUFULENBQWtDeEIsaUJBQWxDLEVBQWtGO0FBQUEsTUFBN0JjLGVBQTZCLHVFQUFYLFNBQVc7QUFDaEYsTUFBTUUsWUFBWSxHQUFHSCxlQUFlLENBQUNiLGlCQUFELEVBQW9CYyxlQUFwQixDQUFwQztBQUVBLFNBQU9FLFlBQVksQ0FBQ1MscUJBQXBCO0FBQ0Q7O0FBRUQsU0FBU0MsbUJBQVQsQ0FBNkIxQixpQkFBN0IsRUFBNkU7QUFBQSxNQUE3QmMsZUFBNkIsdUVBQVgsU0FBVztBQUMzRSxNQUFNRSxZQUFZLEdBQUdILGVBQWUsQ0FBQ2IsaUJBQUQsRUFBb0JjLGVBQXBCLENBQXBDO0FBRUEsTUFBTVcscUJBQXFCLEdBQUdULFlBQVksQ0FBQ1MscUJBQTNDOztBQUVBLE1BQUlBLHFCQUFxQixLQUFLLElBQTFCLElBQWtDQSxxQkFBcUIsS0FBS0UsU0FBaEUsRUFBMkU7QUFDekU7QUFDRDs7QUFFRCxTQUFPWCxZQUFZLENBQUNHLG9CQUFiLENBQWtDTSxxQkFBbEMsQ0FBUDtBQUNEOztBQUVELFNBQVNHLFNBQVQsQ0FBbUI1QixpQkFBbkIsRUFBc0M7QUFDcENNLE9BQUssQ0FBQ04saUJBQUQsQ0FBTDtBQUVBLE1BQU1XLE1BQU0sR0FBRztBQUNiQyxPQUFHLEVBQUVaLGlCQURRO0FBRWJ1QiwyQkFBdUIsRUFBRSxJQUZaO0FBR2JSLDBCQUFzQixFQUFFO0FBSFgsR0FBZjtBQU1BL0IsT0FBSyxDQUFDcUIsZ0JBQU4sQ0FBdUJ3QixJQUF2QixDQUE0QmxCLE1BQTVCLEVBVG9DLENBV3BDOztBQUNBbUIsaUJBQWUsQ0FBQzlCLGlCQUFELEVBQW9CLFNBQXBCLEVBQStCO0FBQzVDWSxPQUFHLEVBQUU7QUFEdUMsR0FBL0IsQ0FBZjtBQUdEOztBQUVELFNBQVNrQixlQUFULENBQXlCOUIsaUJBQXpCLEVBQTRDMUIsSUFBNUMsRUFBZ0U7QUFBQSxNQUFkeUQsT0FBYyx1RUFBSixFQUFJO0FBQzlEekIsT0FBSyxDQUFDaEMsSUFBRCxFQUFPLE1BQVAsQ0FBTDtBQUVBLE1BQUlxQyxNQUFNLEdBQUdGLFNBQVMsQ0FBQ1QsaUJBQUQsQ0FBdEI7O0FBRUEsTUFBSSxDQUFDVyxNQUFMLEVBQWE7QUFDWDtBQUNBaUIsYUFBUyxDQUFDNUIsaUJBQUQsQ0FBVDtBQUNBVyxVQUFNLEdBQUdGLFNBQVMsQ0FBQ1QsaUJBQUQsQ0FBbEI7QUFDRDs7QUFFRCxNQUFNZ0IsWUFBWSxHQUFHO0FBQ25CSixPQUFHLEVBQUVtQixPQUFPLENBQUNuQixHQUFSLEdBQWNtQixPQUFPLENBQUNuQixHQUF0QixHQUE0QiwyQkFEZDtBQUVuQnRDLFFBQUksRUFBSkEsSUFGbUI7QUFHbkIwRCxZQUFRLEVBQUVELE9BQU8sQ0FBQ0MsUUFBUixHQUFtQkQsT0FBTyxDQUFDQyxRQUEzQixHQUFzQyxLQUg3QjtBQUluQkMsV0FBTyxFQUFFRixPQUFPLENBQUNFLE9BQVIsR0FBa0JGLE9BQU8sQ0FBQ0UsT0FBMUIsR0FBb0MsSUFKMUI7QUFLbkJSLHlCQUFxQixFQUFFTSxPQUFPLENBQUNOLHFCQUFSLEtBQWtDRSxTQUFsQyxHQUE4Q0ksT0FBTyxDQUFDTixxQkFBdEQsR0FBOEUsSUFMbEY7QUFNbkJOLHdCQUFvQixFQUFFO0FBTkgsR0FBckI7QUFTQVIsUUFBTSxDQUFDSSxzQkFBUCxDQUE4QmMsSUFBOUIsQ0FBbUNiLFlBQW5DO0FBQ0Q7O0FBRUQsU0FBU2tCLGFBQVQsQ0FBdUJsQyxpQkFBdkIsRUFBMENjLGVBQTFDLEVBQTJEeEMsSUFBM0QsRUFBK0U7QUFBQSxNQUFkeUQsT0FBYyx1RUFBSixFQUFJO0FBQzdFekIsT0FBSyxDQUFDaEMsSUFBRCxFQUFPLE1BQVAsQ0FBTDtBQUVBLE1BQU0wQyxZQUFZLEdBQUdILGVBQWUsQ0FBQ2IsaUJBQUQsRUFBb0JjLGVBQXBCLENBQXBDOztBQUVBLE1BQUksQ0FBQ0UsWUFBTCxFQUFtQjtBQUNqQjtBQUNBLFVBQU0sSUFBSVIsS0FBSixnRUFBa0VNLGVBQWxFLHNCQUFOO0FBQ0Q7O0FBRUQsTUFBTU0sVUFBVSxHQUFHO0FBQ2pCUixPQUFHLEVBQUVtQixPQUFPLENBQUNuQixHQUFSLEdBQWNtQixPQUFPLENBQUNuQixHQUF0QixHQUE0QiwyQkFEaEI7QUFFakJ0QyxRQUFJLEVBQUpBLElBRmlCO0FBR2pCNkQsU0FBSyxFQUFFSixPQUFPLENBQUNJLEtBQVIsR0FBZ0JKLE9BQU8sQ0FBQ0ksS0FBeEIsR0FBZ0NDLFlBQVksRUFIbEM7QUFJakJDLGdCQUFZLEVBQUVOLE9BQU8sQ0FBQ00sWUFBUixHQUF1Qk4sT0FBTyxDQUFDTSxZQUEvQixHQUE4QztBQUozQyxHQUFuQjtBQU9BckIsY0FBWSxDQUFDRyxvQkFBYixDQUFrQ1UsSUFBbEMsQ0FBdUNULFVBQXZDO0FBRUEsU0FBT0EsVUFBVSxDQUFDUixHQUFsQjtBQUNEOztBQUVELFNBQVMwQiw4QkFBVCxDQUF3Q3RDLGlCQUF4QyxFQUEyRGMsZUFBM0QsRUFBNEV4QyxJQUE1RSxFQUFnRztBQUFBLE1BQWR5RCxPQUFjLHVFQUFKLEVBQUk7QUFDOUZHLGVBQWEsQ0FBQ2xDLGlCQUFELEVBQW9CYyxlQUFwQixFQUFxQ3hDLElBQXJDLEVBQTJDeUQsT0FBM0MsQ0FBYjtBQUVBLE1BQU1mLFlBQVksR0FBR0gsZUFBZSxDQUFDYixpQkFBRCxFQUFvQmMsZUFBcEIsQ0FBcEM7QUFFQSxNQUFNeUIsS0FBSyxHQUFHdkIsWUFBWSxDQUFDRyxvQkFBYixDQUFrQ3FCLE1BQWxDLEdBQTJDLENBQXpEO0FBRUF4QixjQUFZLENBQUNTLHFCQUFiLEdBQXFDYyxLQUFyQztBQUVBLFNBQU9BLEtBQVA7QUFDRDs7QUFFRCxTQUFTRSw0QkFBVCxDQUFzQ3pDLGlCQUF0QyxFQUF5RGMsZUFBekQsRUFBMEVJLGFBQTFFLEVBQXlGO0FBQ3ZGLE1BQU1GLFlBQVksR0FBR0gsZUFBZSxDQUFDYixpQkFBRCxFQUFvQmMsZUFBcEIsQ0FBcEM7QUFDQSxNQUFNSyxvQkFBb0IsR0FBR0gsWUFBWSxDQUFDRyxvQkFBMUM7QUFFQSxNQUFNdUIsZUFBZSxHQUFHdkIsb0JBQW9CLENBQUN6QixTQUFyQixDQUErQixVQUFBMEIsVUFBVSxFQUFJO0FBQ25FLFdBQU9BLFVBQVUsQ0FBQ1IsR0FBWCxLQUFtQk0sYUFBMUI7QUFDRCxHQUZ1QixDQUF4QjtBQUlBQyxzQkFBb0IsQ0FBQ3dCLE1BQXJCLENBQTRCRCxlQUE1QixFQUE2QyxDQUE3QztBQUNEOztBQUVELFNBQVNFLG1CQUFULENBQTZCdEUsSUFBN0IsRUFBbUMwQixpQkFBbkMsRUFBc0RjLGVBQXRELEVBQXVFO0FBQ3JFUixPQUFLLENBQUNoQyxJQUFELEVBQU8sTUFBUCxDQUFMO0FBRUEsTUFBTTBDLFlBQVksR0FBR0gsZUFBZSxDQUFDYixpQkFBRCxFQUFvQmMsZUFBcEIsQ0FBcEM7QUFFQUUsY0FBWSxDQUFDMUMsSUFBYixHQUFvQkEsSUFBcEI7QUFDRDs7QUFFRCxTQUFTdUUscUJBQVQsQ0FBK0I3QyxpQkFBL0IsRUFBa0RjLGVBQWxELEVBQW1FO0FBQ2pFLE1BQU1ILE1BQU0sR0FBR0YsU0FBUyxDQUFDVCxpQkFBRCxDQUF4QjtBQUVBLE1BQU1lLHNCQUFzQixHQUFHSixNQUFNLENBQUNJLHNCQUF0QztBQUVBLE1BQU0rQixpQkFBaUIsR0FBRy9CLHNCQUFzQixDQUFDckIsU0FBdkIsQ0FBaUMsVUFBQXNCLFlBQVksRUFBSTtBQUN6RSxXQUFPQSxZQUFZLENBQUNKLEdBQWIsS0FBcUJFLGVBQTVCO0FBQ0QsR0FGeUIsQ0FBMUI7QUFJQUMsd0JBQXNCLENBQUM0QixNQUF2QixDQUE4QkcsaUJBQTlCLEVBQWlELENBQWpEO0FBQ0Q7O0FBRUQsU0FBU0MsaUJBQVQsQ0FBMkJ6RSxJQUEzQixFQUFpQzBCLGlCQUFqQyxFQUFvRGMsZUFBcEQsRUFBcUVJLGFBQXJFLEVBQW9GO0FBQ2xGWixPQUFLLENBQUNoQyxJQUFELEVBQU8sTUFBUCxDQUFMO0FBRUEsTUFBTThDLFVBQVUsR0FBR0gsYUFBYSxDQUFDakIsaUJBQUQsRUFBb0JjLGVBQXBCLEVBQXFDSSxhQUFyQyxDQUFoQztBQUVBRSxZQUFVLENBQUM5QyxJQUFYLEdBQWtCQSxJQUFsQjtBQUNEOztBQUVELFNBQVMwRSwwQkFBVCxDQUFvQ1QsS0FBcEMsRUFBMkN2QyxpQkFBM0MsRUFBOEQ7QUFDNURNLE9BQUssQ0FBQ2lDLEtBQUQsRUFBUSxPQUFSLENBQUw7QUFFQSxNQUFNNUIsTUFBTSxHQUFHRixTQUFTLENBQUNULGlCQUFELENBQXhCO0FBRUFXLFFBQU0sQ0FBQ1ksdUJBQVAsR0FBaUNnQixLQUFqQztBQUNEOztBQUVELFNBQVNVLHFCQUFULENBQStCakQsaUJBQS9CLEVBQWtEYyxlQUFsRCxFQUFtRTtBQUNqRVIsT0FBSyxDQUFDUSxlQUFELEVBQWtCLGlCQUFsQixDQUFMO0FBRUEsTUFBTUgsTUFBTSxHQUFHRixTQUFTLENBQUNULGlCQUFELENBQXhCO0FBQ0EsTUFBTWUsc0JBQXNCLEdBQUdKLE1BQU0sQ0FBQ0ksc0JBQXRDO0FBRUEsTUFBTStCLGlCQUFpQixHQUFHL0Isc0JBQXNCLENBQUNyQixTQUF2QixDQUFpQyxVQUFBc0IsWUFBWSxFQUFJO0FBQ3pFLFdBQU9BLFlBQVksQ0FBQ0osR0FBYixLQUFxQkUsZUFBNUI7QUFDRCxHQUZ5QixDQUExQjtBQUlBSCxRQUFNLENBQUNZLHVCQUFQLEdBQWlDdUIsaUJBQWpDO0FBQ0Q7O0FBRUQsU0FBU0ksd0JBQVQsQ0FBa0NYLEtBQWxDLEVBQXlDdkMsaUJBQXpDLEVBQXlGO0FBQUEsTUFBN0JjLGVBQTZCLHVFQUFYLFNBQVc7QUFDdkYsTUFBTUUsWUFBWSxHQUFHSCxlQUFlLENBQUNiLGlCQUFELEVBQW9CYyxlQUFwQixDQUFwQztBQUVBRSxjQUFZLENBQUNTLHFCQUFiLEdBQXFDYyxLQUFyQztBQUNEOztBQUVELFNBQVNZLG1CQUFULENBQTZCbkQsaUJBQTdCLEVBQTRGO0FBQUEsTUFBNUNjLGVBQTRDLHVFQUExQixTQUEwQjtBQUFBLE1BQWZJLGFBQWU7QUFDMUZaLE9BQUssQ0FBQ1ksYUFBRCxFQUFnQixlQUFoQixDQUFMO0FBRUEsTUFBTUYsWUFBWSxHQUFHSCxlQUFlLENBQUNiLGlCQUFELEVBQW9CYyxlQUFwQixDQUFwQztBQUNBLE1BQU1LLG9CQUFvQixHQUFHSCxZQUFZLENBQUNHLG9CQUExQztBQUVBLE1BQU11QixlQUFlLEdBQUd2QixvQkFBb0IsQ0FBQ3pCLFNBQXJCLENBQStCLFVBQUEwQixVQUFVLEVBQUk7QUFDbkUsV0FBT0EsVUFBVSxDQUFDUixHQUFYLEtBQW1CTSxhQUExQjtBQUNELEdBRnVCLENBQXhCO0FBSUFGLGNBQVksQ0FBQ1MscUJBQWIsR0FBcUNpQixlQUFyQztBQUNEOztBQUVELFNBQVNVLHFCQUFULENBQStCcEQsaUJBQS9CLEVBQWtEYyxlQUFsRCxFQUFtRUksYUFBbkUsRUFBa0Y7QUFDaEYsTUFBTUUsVUFBVSxHQUFHSCxhQUFhLENBQUNqQixpQkFBRCxFQUFvQmMsZUFBcEIsRUFBcUNJLGFBQXJDLENBQWhDO0FBRUFFLFlBQVUsQ0FBQ2lCLFlBQVg7QUFDRDs7QUFFRCxTQUFTZ0IscUJBQVQsQ0FBK0JyRCxpQkFBL0IsRUFBa0RjLGVBQWxELEVBQW1FSSxhQUFuRSxFQUFrRjtBQUNoRixNQUFNRSxVQUFVLEdBQUdILGFBQWEsQ0FBQ2pCLGlCQUFELEVBQW9CYyxlQUFwQixFQUFxQ0ksYUFBckMsQ0FBaEM7QUFFQUUsWUFBVSxDQUFDaUIsWUFBWDtBQUNEOztBQUVELElBQU1oRCxPQUFPLEdBQUc7QUFDZHNCLFFBQU0sRUFBRUYsU0FETTtBQUVkTyxjQUFZLEVBQUVILGVBRkE7QUFHZE8sWUFBVSxFQUFFSCxhQUhFO0FBSWR5QixpQkFBZSxFQUFFckIsa0JBSkg7QUFLZEUseUJBQXVCLEVBQUVELDBCQUxYO0FBTWRHLHVCQUFxQixFQUFFRCx3QkFOVDtBQU9kOEIsa0JBQWdCLEVBQUU1QjtBQVBKLENBQWhCO0FBVUEsSUFBTXBDLE9BQU8sR0FBRztBQUNkcUIsUUFBTSxFQUFFaUIsU0FETTtBQUVkWixjQUFZLEVBQUVjLGVBRkE7QUFHZFYsWUFBVSxFQUFFYyxhQUhFO0FBSWRxQiw2QkFBMkIsRUFBRWpCLDhCQUpmO0FBS2RrQiwyQkFBeUIsRUFBRWYsNEJBTGI7QUFNZGdCLG9CQUFrQixFQUFFWixxQkFOTjtBQU9kYSxrQkFBZ0IsRUFBRWQsbUJBUEo7QUFRZGUsZ0JBQWMsRUFBRVosaUJBUkY7QUFTZHhCLHlCQUF1QixFQUFFeUIsMEJBVFg7QUFVZFksb0JBQWtCLEVBQUVYLHFCQVZOO0FBV2R4Qix1QkFBcUIsRUFBRXlCLHdCQVhUO0FBWWRJLGtCQUFnQixFQUFFSCxtQkFaSjtBQWFkQyx1QkFBcUIsRUFBckJBLHFCQWJjO0FBY2RDLHVCQUFxQixFQUFyQkEscUJBZGM7QUFlZFEsbUJBQWlCLEVBQUUsNkJBQU07QUFDdkI3RSxTQUFLLENBQUNsQixXQUFOLEdBQW9CLENBQUNrQixLQUFLLENBQUNsQixXQUEzQjtBQUNELEdBakJhO0FBa0JkZ0csb0JBQWtCLEVBQUUsOEJBQU07QUFDeEI5RSxTQUFLLENBQUNDLFlBQU4sR0FBcUIsQ0FBQ0QsS0FBSyxDQUFDQyxZQUE1QjtBQUNEO0FBcEJhLENBQWhCO0FBdUJBOzs7Ozs7O0FBTUEsU0FBUzhFLHNCQUFULENBQWdDcEUsT0FBaEMsRUFBeUM7QUFDdkMsTUFBTXFFLGNBQWMsR0FBRyx5QkFBWUMsaUJBQVosQ0FBOEJ0RSxPQUE5QixDQUF2Qjs7QUFFQSxNQUFJLENBQUNxRSxjQUFjLENBQUNFLEtBQXBCLEVBQTJCO0FBQ3pCO0FBQ0Q7O0FBRUQsTUFBTWxFLGlCQUFpQixHQUFHLHFEQUF1Q2dFLGNBQXZDLENBQTFCOztBQUVBLE1BQUksQ0FBQ3ZELFNBQVMsQ0FBQ1QsaUJBQUQsQ0FBZCxFQUFtQztBQUNqQztBQUNBNEIsYUFBUyxDQUFDNUIsaUJBQUQsQ0FBVDtBQUNEO0FBQ0Y7O2VBRWM7QUFDYmhCLE9BQUssRUFBTEEsS0FEYTtBQUViK0Usd0JBQXNCLEVBQXRCQSxzQkFGYTtBQUdiMUUsU0FBTyxFQUFQQSxPQUhhO0FBSWJDLFNBQU8sRUFBUEE7QUFKYSxDOztBQU9mLElBQU02RSxZQUFZLEdBQUcsQ0FDbkIsZ0JBRG1CLEVBRW5CLFdBRm1CLEVBR25CLFdBSG1CLEVBSW5CLFlBSm1CLEVBS25CLFdBTG1CLEVBTW5CLFFBTm1CLEVBT25CLGlCQVBtQixFQVFuQixZQVJtQixFQVNuQixPQVRtQixFQVVuQixhQVZtQixFQVduQixlQVhtQixFQVluQixRQVptQixFQWFuQixZQWJtQixFQWNuQixZQWRtQixFQWVuQixVQWZtQixFQWdCbkIsUUFoQm1CLEVBaUJuQixTQWpCbUIsRUFrQm5CLE1BbEJtQixDQUFyQixDLENBcUJBOztBQUNBLElBQUlDLGlCQUFpQixHQUFHRCxZQUFZLENBQUMzQixNQUFyQztBQUVBOzs7Ozs7QUFLTyxTQUFTSixZQUFULEdBQXdCO0FBQzdCZ0MsbUJBQWlCOztBQUNqQixNQUFJQSxpQkFBaUIsSUFBSUQsWUFBWSxDQUFDM0IsTUFBdEMsRUFBOEM7QUFDNUM0QixxQkFBaUIsR0FBRyxDQUFwQjtBQUNEOztBQUVELFNBQU9ELFlBQVksQ0FBQ0MsaUJBQUQsQ0FBbkI7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOVpEOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFFc0IseUJBQWlCQyxvQkFBakIsQ0FBc0MsaUJBQXRDLEM7SUFBZEMsUyx5QkFBQUEsUzs7QUFFUixJQUFNN0YsV0FBVyxHQUFHLHlCQUFpQjhGLEtBQWpCLENBQXVCaEgsT0FBdkIsQ0FBK0JtQixLQUFuRDs7SUFFcUI4RixvQjs7Ozs7QUFDbkIsa0NBQWdDO0FBQUE7O0FBQUEsUUFBcEI3SCxhQUFvQix1RUFBSixFQUFJOztBQUFBOztBQUM5QixRQUFNYSxhQUFhLEdBQUcsRUFBdEI7QUFDQSxRQUFNaUgsb0JBQW9CLEdBQUc3RixNQUFNLENBQUNDLE1BQVAsQ0FBY3JCLGFBQWQsRUFBNkJiLGFBQTdCLENBQTdCO0FBRUEsd0lBQU04SCxvQkFBTjtBQUVBLFVBQUtBLG9CQUFMLEdBQTRCQSxvQkFBNUI7QUFOOEI7QUFPL0I7QUFFRDs7Ozs7Ozs7Ozs7eUNBT3FCQyxHLEVBQUs7QUFDeEIsV0FBS0MsY0FBTCxDQUFvQkQsR0FBcEI7O0FBQ0EsV0FBS0UsY0FBTCxDQUFvQkYsR0FBcEI7O0FBRUEsYUFBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7OzttQ0FPZUEsRyxFQUFLO0FBQ2xCLFVBQU1HLFNBQVMsR0FBR0gsR0FBRyxDQUFDSSxNQUF0QjtBQUNBLFVBQU1aLEtBQUssR0FBR1csU0FBUyxDQUFDWCxLQUF4QjtBQUZrQixVQUdWYSxJQUhVLEdBR1FiLEtBSFIsQ0FHVmEsSUFIVTtBQUFBLFVBR0pDLE9BSEksR0FHUWQsS0FIUixDQUdKYyxPQUhJO0FBQUEsa0NBSURILFNBQVMsQ0FBQ0ksYUFBVixDQUF3QmYsS0FKdkI7QUFBQSxVQUlWZ0IsQ0FKVSx5QkFJVkEsQ0FKVTtBQUFBLFVBSVBDLENBSk8seUJBSVBBLENBSk87QUFLbEIsVUFBTUMsTUFBTSxHQUFHM0csV0FBVyxDQUFDTyxLQUFaLENBQWtCb0csTUFBakM7QUFDQSxVQUFNQyxjQUFjLEdBQUduQixLQUFLLENBQUNvQixZQUFOLEVBQXZCO0FBQ0EsVUFBTUMsWUFBWSxHQUFHckIsS0FBSyxDQUFDc0IsS0FBTixJQUFlLENBQXBDO0FBQ0EsVUFBTUMsZ0JBQWdCLEdBQUd2QixLQUFLLENBQUN3QixTQUFOLElBQW1CLENBQTVDO0FBRUEsVUFBTUMsTUFBTSxHQUFHckIsU0FBUyxDQUFDYyxNQUFELEVBQVNMLElBQVQsRUFBZUMsT0FBZixFQUF3QkUsQ0FBeEIsRUFBMkJDLENBQTNCLENBQXhCLENBVmtCLENBWWxCOztBQUNBLFVBQUlTLEVBQUUsR0FBR1AsY0FBYyxDQUFDTSxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixJQUFlQSxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixJQUFlWixJQUEvQixDQUF2QjtBQUNBLFVBQUljLEVBQUUsR0FBR0QsRUFBVCxDQWRrQixDQWdCbEI7O0FBQ0EsV0FBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxNQUFNLENBQUNuRCxNQUEzQixFQUFtQ3NELENBQUMsRUFBcEMsRUFBd0M7QUFDdEMsWUFBSUMsVUFBVSxHQUFHVixjQUFjLENBQUNNLE1BQU0sQ0FBQ0csQ0FBRCxDQUFOLENBQVUsQ0FBVixJQUFlSCxNQUFNLENBQUNHLENBQUQsQ0FBTixDQUFVLENBQVYsSUFBZWYsSUFBL0IsQ0FBL0I7O0FBRUEsWUFBSWdCLFVBQVUsR0FBR0gsRUFBakIsRUFBcUI7QUFDbkJBLFlBQUUsR0FBR0csVUFBTDtBQUNEOztBQUVELFlBQUlBLFVBQVUsR0FBR0YsRUFBakIsRUFBcUI7QUFDbkJBLFlBQUUsR0FBR0UsVUFBTDtBQUNEO0FBQ0Y7O0FBRURILFFBQUUsR0FBR0EsRUFBRSxHQUFHTCxZQUFMLEdBQW9CRSxnQkFBekI7QUFDQUksUUFBRSxHQUFHQSxFQUFFLEdBQUdOLFlBQUwsR0FBb0JFLGdCQUF6QjtBQUVBLFdBQUtPLElBQUwsR0FBWSxDQUFDSixFQUFELEVBQUtDLEVBQUwsQ0FBWjtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Z0NBVVkzQixLLEVBQU95QixNLEVBQVE7QUFDekIsVUFBTVosSUFBSSxHQUFHYixLQUFLLENBQUNBLEtBQW5CO0FBQ0EsVUFBTW1CLGNBQWMsR0FBR25CLEtBQUssQ0FBQ29CLFlBQU4sRUFBdkI7QUFDQSxVQUFNVyxVQUFVLEdBQUcsS0FBS0QsSUFBeEI7QUFDQSxVQUFNVCxZQUFZLEdBQUdyQixLQUFLLENBQUNzQixLQUFOLElBQWUsQ0FBcEM7QUFDQSxVQUFNQyxnQkFBZ0IsR0FBR3ZCLEtBQUssQ0FBQ3dCLFNBQU4sSUFBbUIsQ0FBNUM7QUFFQSxVQUFNUSxnQkFBZ0IsR0FBRyxFQUF6Qjs7QUFFQSxXQUFLLElBQUlKLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILE1BQU0sQ0FBQ25ELE1BQTNCLEVBQW1Dc0QsQ0FBQyxFQUFwQyxFQUF3QztBQUN0QyxZQUFJQyxVQUFVLEdBQUdWLGNBQWMsQ0FBQ00sTUFBTSxDQUFDRyxDQUFELENBQU4sQ0FBVSxDQUFWLElBQWVILE1BQU0sQ0FBQ0csQ0FBRCxDQUFOLENBQVUsQ0FBVixJQUFlZixJQUEvQixDQUEvQjtBQUVBZ0Isa0JBQVUsR0FBR0EsVUFBVSxHQUFHUixZQUFiLEdBQTRCRSxnQkFBekM7O0FBRUEsWUFBSU0sVUFBVSxJQUFJRSxVQUFVLENBQUMsQ0FBRCxDQUF4QixJQUErQkYsVUFBVSxJQUFJRSxVQUFVLENBQUMsQ0FBRCxDQUEzRCxFQUFnRTtBQUM5REMsMEJBQWdCLENBQUNyRSxJQUFqQixDQUFzQjhELE1BQU0sQ0FBQ0csQ0FBRCxDQUE1QjtBQUNEO0FBQ0Y7O0FBRUQsYUFBTyxLQUFLSyxpQkFBTCxDQUF1QlIsTUFBdkIsRUFBK0JPLGdCQUEvQixDQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkdIOztBQUNBOztBQUVBOztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSEEsSUFBTXpILFdBQVcsR0FBRyx3QkFBTWxCLE9BQU4sQ0FBY21CLEtBQWxDOzs0QkFDdUMsNENBQXFCLGlCQUFyQixDO0lBQS9CNEYsUyx5QkFBQUEsUztJQUFXOEIsZSx5QkFBQUEsZTs7SUFJRUMsa0I7Ozs7O0FBQ25CLGdDQUFnQztBQUFBOztBQUFBLFFBQXBCMUosYUFBb0IsdUVBQUosRUFBSTs7QUFBQTs7QUFDOUIsUUFBTWEsYUFBYSxHQUFHLEVBQXRCO0FBQ0EsUUFBTWlILG9CQUFvQixHQUFHN0YsTUFBTSxDQUFDQyxNQUFQLENBQWNyQixhQUFkLEVBQTZCYixhQUE3QixDQUE3QjtBQUVBLG9JQUFNOEgsb0JBQU47QUFFQSxVQUFLQSxvQkFBTCxHQUE0QkEsb0JBQTVCO0FBTjhCO0FBTy9CO0FBRUQ7Ozs7Ozs7Ozs7O3lDQU9xQkMsRyxFQUFLO0FBQ3hCLFdBQUtsRixlQUFMLEdBQXVCZixXQUFXLENBQUNZLE9BQVosQ0FBb0JHLGVBQXBCLEVBQXZCOztBQUVBLFdBQUtvRixjQUFMLENBQW9CRixHQUFwQjs7QUFFQSxhQUFPLElBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7OzJCQU9PQSxHLEVBQUs7QUFDVixVQUFNRyxTQUFTLEdBQUdILEdBQUcsQ0FBQ0ksTUFBdEI7QUFEVSxVQUVGbkYsT0FGRSxHQUVpQmtGLFNBRmpCLENBRUZsRixPQUZFO0FBQUEsVUFFT3VFLEtBRlAsR0FFaUJXLFNBRmpCLENBRU9YLEtBRlA7QUFBQSxVQUdGYSxJQUhFLEdBR2dCYixLQUhoQixDQUdGYSxJQUhFO0FBQUEsVUFHSUMsT0FISixHQUdnQmQsS0FIaEIsQ0FHSWMsT0FISjtBQUFBLGtDQUlPSCxTQUFTLENBQUNJLGFBQVYsQ0FBd0JmLEtBSi9CO0FBQUEsVUFJRmdCLENBSkUseUJBSUZBLENBSkU7QUFBQSxVQUlDQyxDQUpELHlCQUlDQSxDQUpEOztBQU1WLFVBQUlELENBQUMsR0FBRyxDQUFKLElBQVNBLENBQUMsR0FBR0YsT0FBYixJQUF3QkcsQ0FBQyxHQUFHLENBQTVCLElBQWlDQSxDQUFDLEdBQUdKLElBQXpDLEVBQStDO0FBQzdDO0FBQ0Q7O0FBRUQsVUFBTUssTUFBTSxHQUFHM0csV0FBVyxDQUFDTyxLQUFaLENBQWtCb0csTUFBakM7O0FBQ0EsVUFBTWtCLFlBQVksR0FBRyxLQUFLQyxXQUFMLENBQWlCckMsS0FBakIsRUFBd0JJLFNBQVMsQ0FBQ2MsTUFBRCxFQUFTTCxJQUFULEVBQWVDLE9BQWYsRUFBd0JFLENBQXhCLEVBQTJCQyxDQUEzQixDQUFqQyxDQUFyQjs7QUFYVSxpQ0Fhb0UsS0FBS3FCLGNBYnpFO0FBQUEsVUFhRkMsVUFiRSx3QkFhRkEsVUFiRTtBQUFBLFVBYVVDLG1CQWJWLHdCQWFVQSxtQkFiVjtBQUFBLFVBYStCQyxtQkFiL0Isd0JBYStCQSxtQkFiL0I7QUFBQSxVQWFvREMsV0FicEQsd0JBYW9EQSxXQWJwRCxFQWVWOztBQUNBUixxQkFBZSxDQUFDRSxZQUFELEVBQWVHLFVBQWYsRUFBMkJDLG1CQUEzQixFQUFnRDFCLE9BQWhELEVBQXlENEIsV0FBekQsQ0FBZjs7QUFFQSwrQkFBWUMsWUFBWixDQUF5QmxILE9BQXpCLEVBQWtDLHlCQUFPbUgsaUJBQXpDLEVBQTREO0FBQzFESCwyQkFBbUIsRUFBbkJBO0FBRDBELE9BQTVEOztBQUlBLCtCQUFZSSxXQUFaLENBQXdCckMsR0FBRyxDQUFDSSxNQUFKLENBQVduRixPQUFuQztBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Z0NBVVl1RSxLLEVBQU95QixNLEVBQVE7QUFDekIsVUFBTVosSUFBSSxHQUFHYixLQUFLLENBQUNhLElBQW5CO0FBQ0EsVUFBTU0sY0FBYyxHQUFHbkIsS0FBSyxDQUFDb0IsWUFBTixFQUF2QjtBQUNBLFVBQU0wQixTQUFTLEdBQUcsS0FBS3hILGVBQXZCO0FBQ0EsVUFBTStGLFlBQVksR0FBR3JCLEtBQUssQ0FBQ3NCLEtBQU4sSUFBZSxDQUFwQztBQUNBLFVBQU1DLGdCQUFnQixHQUFHdkIsS0FBSyxDQUFDd0IsU0FBTixJQUFtQixDQUE1QztBQUVBLFVBQU1RLGdCQUFnQixHQUFHLEVBQXpCOztBQUVBLFdBQUssSUFBSUosQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsTUFBTSxDQUFDbkQsTUFBM0IsRUFBbUNzRCxDQUFDLEVBQXBDLEVBQXdDO0FBQ3RDLFlBQUlDLFVBQVUsR0FBR1YsY0FBYyxDQUFDTSxNQUFNLENBQUNHLENBQUQsQ0FBTixDQUFVLENBQVYsSUFBZUgsTUFBTSxDQUFDRyxDQUFELENBQU4sQ0FBVSxDQUFWLElBQWVmLElBQS9CLENBQS9CO0FBRUFnQixrQkFBVSxHQUFHQSxVQUFVLEdBQUdSLFlBQWIsR0FBNEJFLGdCQUF6Qzs7QUFFQSxZQUFJTSxVQUFVLElBQUlpQixTQUFTLENBQUMsQ0FBRCxDQUF2QixJQUE4QmpCLFVBQVUsSUFBSWlCLFNBQVMsQ0FBQyxDQUFELENBQXpELEVBQThEO0FBQzVEZCwwQkFBZ0IsQ0FBQ3JFLElBQWpCLENBQXNCOEQsTUFBTSxDQUFDRyxDQUFELENBQTVCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPLEtBQUtLLGlCQUFMLENBQXVCUixNQUF2QixFQUErQk8sZ0JBQS9CLENBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7OzttQ0FRZWUsSSxFQUFNO0FBQ25CLFVBQU1DLFVBQVUsR0FBRyxFQUFuQjtBQUNBLFVBQU1DLEtBQUssR0FBR0YsSUFBSSxDQUFDekUsTUFBbkI7QUFDQSxVQUFNNEUsS0FBSyxHQUFHSCxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVF6RSxNQUF0QixDQUhtQixDQUtuQjs7QUFDQSxXQUFLLElBQUlzRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHbUIsSUFBSSxDQUFDekUsTUFBekIsRUFBaUNzRCxDQUFDLEVBQWxDLEVBQXNDO0FBQ3BDLFlBQUltQixJQUFJLENBQUNuQixDQUFELENBQUosQ0FBUSxDQUFSLENBQUosRUFBZ0I7QUFDZG9CLG9CQUFVLENBQUNyRixJQUFYLENBQWdCLENBQUNpRSxDQUFELEVBQUksQ0FBSixDQUFoQjtBQUNBb0Isb0JBQVUsQ0FBQ3JGLElBQVgsQ0FBZ0IsQ0FBQ2lFLENBQUQsRUFBSXNCLEtBQUssR0FBRyxDQUFaLENBQWhCO0FBQ0Q7QUFDRixPQVhrQixDQWFuQjtBQUNBOzs7QUFDQSxXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELEtBQUssR0FBRyxDQUE1QixFQUErQkMsQ0FBQyxFQUFoQyxFQUFvQztBQUNsQyxhQUFLLElBQUl2QixFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHbUIsSUFBSSxDQUFDekUsTUFBekIsRUFBaUNzRCxFQUFDLEVBQWxDLEVBQXNDO0FBQ3BDLGNBQUltQixJQUFJLENBQUNuQixFQUFELENBQUosQ0FBUXVCLENBQVIsQ0FBSixFQUFnQjtBQUNkSCxzQkFBVSxDQUFDckYsSUFBWCxDQUFnQixDQUFDaUUsRUFBRCxFQUFJdUIsQ0FBSixDQUFoQjtBQUNBSCxzQkFBVSxDQUFDckYsSUFBWCxDQUFnQixDQUFDc0YsS0FBSyxHQUFHLENBQVIsR0FBWXJCLEVBQWIsRUFBZ0J1QixDQUFoQixDQUFoQjtBQUVBO0FBQ0Q7QUFDRjtBQUNGOztBQUVELGFBQU9ILFVBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7O3NDQVVrQnZCLE0sRUFBUU8sZ0IsRUFBa0I7QUFBQSxrQ0FDckIsS0FBS29CLHVCQUFMLENBQTZCM0IsTUFBN0IsQ0FEcUI7QUFBQSxVQUNsQzdGLEdBRGtDLHlCQUNsQ0EsR0FEa0M7QUFBQSxVQUM3QkQsR0FENkIseUJBQzdCQSxHQUQ2Qjs7QUFHMUMsVUFBTXNILEtBQUssR0FBR3JILEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBU0QsR0FBRyxDQUFDLENBQUQsQ0FBWixHQUFrQixDQUFoQztBQUNBLFVBQU11SCxLQUFLLEdBQUd0SCxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVNELEdBQUcsQ0FBQyxDQUFELENBQVosR0FBa0IsQ0FBaEM7O0FBRUEsVUFBTW9ILElBQUksR0FBRyxLQUFLTSxlQUFMLENBQXFCNUIsTUFBckIsRUFBNkJPLGdCQUE3QixFQUErQ3JHLEdBQS9DLEVBQW9Ec0gsS0FBcEQsRUFBMkRDLEtBQTNELENBQWIsQ0FOMEMsQ0FRMUM7OztBQUNBLGVBQVNJLE1BQVQsQ0FBZ0J0QyxDQUFoQixFQUFtQkMsQ0FBbkIsRUFBc0I7QUFDcEIsZUFBTzhCLElBQUksQ0FBQy9CLENBQUQsQ0FBSixDQUFRQyxDQUFSLENBQVA7QUFDRDs7QUFFRCxXQUFLc0MsK0JBQUwsQ0FBcUNSLElBQXJDLEVBQTJDTyxNQUEzQzs7QUFiMEMsa0NBZWYsS0FBS0Usb0JBQUwsQ0FBMEIvQixNQUExQixFQUFrQ3NCLElBQWxDLEVBQXdDTyxNQUF4QyxFQUFnRDNILEdBQWhELENBZmU7QUFBQSxVQWVsQzhILEtBZmtDLHlCQWVsQ0EsS0Fma0M7QUFBQSxVQWUzQkMsT0FmMkIseUJBZTNCQSxPQWYyQjs7QUFpQjFDLFVBQU1DLGlCQUFpQixHQUFHLEtBQUtDLHVCQUFMLENBQTZCRixPQUE3QixDQUExQixDQWpCMEMsQ0FtQjFDOzs7QUFDQSxXQUFLLElBQUlHLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILE9BQU8sQ0FBQ3BGLE1BQTVCLEVBQW9DdUYsQ0FBQyxFQUFyQyxFQUF5QztBQUN2QyxZQUFNQyxNQUFNLEdBQUdKLE9BQU8sQ0FBQ0csQ0FBRCxDQUF0Qjs7QUFFQSxZQUFJQyxNQUFNLENBQUN4RixNQUFQLElBQWtCL0QsV0FBVyxDQUFDTyxLQUFaLENBQWtCcEIsV0FBbEIsR0FBZ0MsS0FBakMsR0FBMENpSyxpQkFBL0QsRUFBa0Y7QUFDaEYsZUFBSyxJQUFJSSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxNQUFNLENBQUN4RixNQUEzQixFQUFtQ3lGLENBQUMsRUFBcEMsRUFBd0M7QUFDdENoQixnQkFBSSxDQUFDZSxNQUFNLENBQUNDLENBQUQsQ0FBTixDQUFVLENBQVYsQ0FBRCxDQUFKLENBQW1CRCxNQUFNLENBQUNDLENBQUQsQ0FBTixDQUFVLENBQVYsQ0FBbkIsSUFBbUMsQ0FBbkM7QUFDRDtBQUNGO0FBQ0YsT0E1QnlDLENBOEIxQzs7O0FBQ0EsV0FBSyxJQUFJRixFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHSixLQUFLLENBQUNuRixNQUExQixFQUFrQ3VGLEVBQUMsRUFBbkMsRUFBdUM7QUFDckMsWUFBTUcsSUFBSSxHQUFHUCxLQUFLLENBQUNJLEVBQUQsQ0FBbEI7O0FBRUEsWUFBSUcsSUFBSSxDQUFDMUYsTUFBTCxJQUFnQi9ELFdBQVcsQ0FBQ08sS0FBWixDQUFrQnRCLFFBQWxCLEdBQTZCLEtBQTlCLEdBQXVDbUssaUJBQTFELEVBQTZFO0FBQzNFLGVBQUssSUFBSUksRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR0MsSUFBSSxDQUFDMUYsTUFBekIsRUFBaUN5RixFQUFDLEVBQWxDLEVBQXNDO0FBQ3BDaEIsZ0JBQUksQ0FBQ2lCLElBQUksQ0FBQ0QsRUFBRCxDQUFKLENBQVEsQ0FBUixDQUFELENBQUosQ0FBaUJDLElBQUksQ0FBQ0QsRUFBRCxDQUFKLENBQVEsQ0FBUixDQUFqQixJQUErQixDQUEvQjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxVQUFNRSxzQkFBc0IsR0FBRyxFQUEvQjs7QUFFQSxXQUFLLElBQUlyQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHcUIsS0FBcEIsRUFBMkJyQixDQUFDLEVBQTVCLEVBQWdDO0FBQzlCLGFBQUssSUFBSXVCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELEtBQXBCLEVBQTJCQyxDQUFDLEVBQTVCLEVBQWdDO0FBQzlCLGNBQUlKLElBQUksQ0FBQ25CLENBQUQsQ0FBSixDQUFRdUIsQ0FBUixNQUFlLENBQW5CLEVBQXNCO0FBQ3BCYyxrQ0FBc0IsQ0FBQ3RHLElBQXZCLENBQTRCLENBQUNpRSxDQUFDLEdBQUdqRyxHQUFHLENBQUMsQ0FBRCxDQUFSLEVBQWF3SCxDQUFDLEdBQUd4SCxHQUFHLENBQUMsQ0FBRCxDQUFwQixDQUE1QjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxhQUFPc0ksc0JBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7NENBTXdCeEMsTSxFQUFRO0FBQzlCLFVBQU03RixHQUFHLEdBQUcsQ0FBQzZGLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLENBQUQsRUFBZUEsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsQ0FBZixDQUFaO0FBQ0EsVUFBTTlGLEdBQUcsR0FBRyxDQUFDOEYsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsQ0FBRCxFQUFlQSxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixDQUFmLENBQVo7O0FBRUEsV0FBSyxJQUFJc0MsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3RDLE1BQU0sQ0FBQ25ELE1BQTNCLEVBQW1DeUYsQ0FBQyxFQUFwQyxFQUF3QztBQUFBLHVDQUN2QnRDLE1BQU0sQ0FBQ3NDLENBQUQsQ0FEaUI7QUFBQSxZQUMvQm5DLENBRCtCO0FBQUEsWUFDNUJ1QixDQUQ0Qjs7QUFHdEMsWUFBSXZCLENBQUMsR0FBR2hHLEdBQUcsQ0FBQyxDQUFELENBQVgsRUFBZ0I7QUFDZEEsYUFBRyxDQUFDLENBQUQsQ0FBSCxHQUFTZ0csQ0FBVDtBQUNELFNBRkQsTUFFTyxJQUFJQSxDQUFDLEdBQUdqRyxHQUFHLENBQUMsQ0FBRCxDQUFYLEVBQWdCO0FBQ3JCQSxhQUFHLENBQUMsQ0FBRCxDQUFILEdBQVNpRyxDQUFUO0FBQ0Q7O0FBRUQsWUFBSXVCLENBQUMsR0FBR3ZILEdBQUcsQ0FBQyxDQUFELENBQVgsRUFBZ0I7QUFDZEEsYUFBRyxDQUFDLENBQUQsQ0FBSCxHQUFTdUgsQ0FBVDtBQUNELFNBRkQsTUFFTyxJQUFJQSxDQUFDLEdBQUd4SCxHQUFHLENBQUMsQ0FBRCxDQUFYLEVBQWdCO0FBQ3JCQSxhQUFHLENBQUMsQ0FBRCxDQUFILEdBQVN3SCxDQUFUO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPO0FBQUV2SCxXQUFHLEVBQUhBLEdBQUY7QUFBT0QsV0FBRyxFQUFIQTtBQUFQLE9BQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBZWdCOEYsTSxFQUFRTyxnQixFQUFrQnJHLEcsRUFBS3NILEssRUFBT0MsSyxFQUFPO0FBQzNELFVBQU1ILElBQUksR0FBRyxFQUFiLENBRDJELENBRzNEOztBQUNBLFdBQUssSUFBSW5CLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdxQixLQUFwQixFQUEyQnJCLENBQUMsRUFBNUIsRUFBZ0M7QUFDOUJtQixZQUFJLENBQUNuQixDQUFELENBQUosR0FBVSxJQUFJc0MsaUJBQUosQ0FBc0JoQixLQUF0QixDQUFWO0FBQ0QsT0FOMEQsQ0FRM0Q7OztBQUNBLFdBQUssSUFBSWEsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3RDLE1BQU0sQ0FBQ25ELE1BQTNCLEVBQW1DeUYsQ0FBQyxFQUFwQyxFQUF3QztBQUN0QyxZQUFNbkMsR0FBQyxHQUFHSCxNQUFNLENBQUNzQyxDQUFELENBQU4sQ0FBVSxDQUFWLElBQWVwSSxHQUFHLENBQUMsQ0FBRCxDQUE1Qjs7QUFDQSxZQUFNd0gsQ0FBQyxHQUFHMUIsTUFBTSxDQUFDc0MsQ0FBRCxDQUFOLENBQVUsQ0FBVixJQUFlcEksR0FBRyxDQUFDLENBQUQsQ0FBNUI7QUFFQW9ILFlBQUksQ0FBQ25CLEdBQUQsQ0FBSixDQUFRdUIsQ0FBUixJQUFhLENBQWI7QUFDRCxPQWQwRCxDQWdCM0Q7OztBQUNBLFdBQUssSUFBSVksR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBRy9CLGdCQUFnQixDQUFDMUQsTUFBckMsRUFBNkN5RixHQUFDLEVBQTlDLEVBQWtEO0FBQ2hELFlBQU1uQyxHQUFDLEdBQUdJLGdCQUFnQixDQUFDK0IsR0FBRCxDQUFoQixDQUFvQixDQUFwQixJQUF5QnBJLEdBQUcsQ0FBQyxDQUFELENBQXRDOztBQUNBLFlBQU13SCxFQUFDLEdBQUduQixnQkFBZ0IsQ0FBQytCLEdBQUQsQ0FBaEIsQ0FBb0IsQ0FBcEIsSUFBeUJwSSxHQUFHLENBQUMsQ0FBRCxDQUF0Qzs7QUFFQW9ILFlBQUksQ0FBQ25CLEdBQUQsQ0FBSixDQUFRdUIsRUFBUixJQUFhLENBQWI7QUFDRDs7QUFFRCxhQUFPSixJQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7OztvREFVZ0NBLEksRUFBTU8sTSxFQUFRO0FBQzVDLFVBQU1OLFVBQVUsR0FBRyxLQUFLbUIsY0FBTCxDQUFvQnBCLElBQXBCLENBQW5COztBQUVBLFdBQUssSUFBSWdCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdmLFVBQVUsQ0FBQzFFLE1BQS9CLEVBQXVDeUYsQ0FBQyxFQUF4QyxFQUE0QztBQUMxQyxZQUFNbkMsQ0FBQyxHQUFHb0IsVUFBVSxDQUFDZSxDQUFELENBQVYsQ0FBYyxDQUFkLENBQVY7QUFDQSxZQUFNWixDQUFDLEdBQUdILFVBQVUsQ0FBQ2UsQ0FBRCxDQUFWLENBQWMsQ0FBZCxDQUFWOztBQUVBLFlBQUloQixJQUFJLENBQUNuQixDQUFELENBQUosQ0FBUXVCLENBQVIsTUFBZSxDQUFuQixFQUFzQjtBQUNwQixjQUFNaUIsTUFBTSxHQUFHLG9DQUFVO0FBQ3ZCZCxrQkFBTSxFQUFFQSxNQURlO0FBRXZCZSxnQkFBSSxFQUFFLENBQUN6QyxDQUFELEVBQUl1QixDQUFKO0FBRmlCLFdBQVYsQ0FBZjtBQUtBLGNBQU1tQixPQUFPLEdBQUdGLE1BQU0sQ0FBQ0UsT0FBdkI7O0FBRUEsZUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxPQUFPLENBQUNoRyxNQUE1QixFQUFvQ2lHLENBQUMsRUFBckMsRUFBeUM7QUFDdkN4QixnQkFBSSxDQUFDdUIsT0FBTyxDQUFDQyxDQUFELENBQVAsQ0FBVyxDQUFYLENBQUQsQ0FBSixDQUFvQkQsT0FBTyxDQUFDQyxDQUFELENBQVAsQ0FBVyxDQUFYLENBQXBCLElBQXFDLENBQXJDO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7eUNBY3FCOUMsTSxFQUFRc0IsSSxFQUFNTyxNLEVBQVEzSCxHLEVBQUs7QUFDOUMsVUFBTThILEtBQUssR0FBRyxFQUFkO0FBQ0EsVUFBTUMsT0FBTyxHQUFHLEVBQWhCLENBRjhDLENBSTlDO0FBQ0E7O0FBQ0EsV0FBSyxJQUFJSyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHdEMsTUFBTSxDQUFDbkQsTUFBM0IsRUFBbUN5RixDQUFDLEVBQXBDLEVBQXdDO0FBQ3RDLFlBQU1uQyxDQUFDLEdBQUdILE1BQU0sQ0FBQ3NDLENBQUQsQ0FBTixDQUFVLENBQVYsSUFBZXBJLEdBQUcsQ0FBQyxDQUFELENBQTVCO0FBQ0EsWUFBTXdILENBQUMsR0FBRzFCLE1BQU0sQ0FBQ3NDLENBQUQsQ0FBTixDQUFVLENBQVYsSUFBZXBJLEdBQUcsQ0FBQyxDQUFELENBQTVCOztBQUVBLFlBQUlvSCxJQUFJLENBQUNuQixDQUFELENBQUosQ0FBUXVCLENBQVIsTUFBZSxDQUFuQixFQUFzQjtBQUNwQixjQUFNaUIsTUFBTSxHQUFHLG9DQUFVO0FBQ3ZCZCxrQkFBTSxFQUFFQSxNQURlO0FBRXZCZSxnQkFBSSxFQUFFLENBQUN6QyxDQUFELEVBQUl1QixDQUFKO0FBRmlCLFdBQVYsQ0FBZjtBQUtBLGNBQU1tQixPQUFPLEdBQUdGLE1BQU0sQ0FBQ0UsT0FBdkI7O0FBRUEsZUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxPQUFPLENBQUNoRyxNQUE1QixFQUFvQ2lHLENBQUMsRUFBckMsRUFBeUM7QUFDdkN4QixnQkFBSSxDQUFDdUIsT0FBTyxDQUFDQyxDQUFELENBQVAsQ0FBVyxDQUFYLENBQUQsQ0FBSixDQUFvQkQsT0FBTyxDQUFDQyxDQUFELENBQVAsQ0FBVyxDQUFYLENBQXBCLElBQXFDLENBQXJDO0FBQ0Q7O0FBRURkLGVBQUssQ0FBQzlGLElBQU4sQ0FBVzJHLE9BQVg7QUFDRCxTQWJELE1BYU8sSUFBSXZCLElBQUksQ0FBQ25CLENBQUQsQ0FBSixDQUFRdUIsQ0FBUixNQUFlLENBQW5CLEVBQXNCO0FBQzNCLGNBQU1pQixPQUFNLEdBQUcsb0NBQVU7QUFDdkJkLGtCQUFNLEVBQUVBLE1BRGU7QUFFdkJlLGdCQUFJLEVBQUUsQ0FBQ3pDLENBQUQsRUFBSXVCLENBQUo7QUFGaUIsV0FBVixDQUFmOztBQUtBLGNBQU1tQixRQUFPLEdBQUdGLE9BQU0sQ0FBQ0UsT0FBdkI7O0FBRUEsZUFBSyxJQUFJQyxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHRCxRQUFPLENBQUNoRyxNQUE1QixFQUFvQ2lHLEVBQUMsRUFBckMsRUFBeUM7QUFDdkN4QixnQkFBSSxDQUFDdUIsUUFBTyxDQUFDQyxFQUFELENBQVAsQ0FBVyxDQUFYLENBQUQsQ0FBSixDQUFvQkQsUUFBTyxDQUFDQyxFQUFELENBQVAsQ0FBVyxDQUFYLENBQXBCLElBQXFDLENBQXJDO0FBQ0Q7O0FBRURiLGlCQUFPLENBQUMvRixJQUFSLENBQWEyRyxRQUFiO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPO0FBQUViLGFBQUssRUFBTEEsS0FBRjtBQUFTQyxlQUFPLEVBQVBBO0FBQVQsT0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7NENBT3dCQSxPLEVBQVM7QUFDL0IsVUFBSUMsaUJBQWlCLEdBQUcsQ0FBeEI7O0FBRUEsV0FBSyxJQUFJL0IsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzhCLE9BQU8sQ0FBQ3BGLE1BQTVCLEVBQW9Dc0QsQ0FBQyxFQUFyQyxFQUF5QztBQUN2QyxZQUFJOEIsT0FBTyxDQUFDOUIsQ0FBRCxDQUFQLENBQVd0RCxNQUFYLEdBQW9CcUYsaUJBQXhCLEVBQTJDO0FBQ3pDQSwyQkFBaUIsR0FBR0QsT0FBTyxDQUFDOUIsQ0FBRCxDQUFQLENBQVd0RCxNQUEvQjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT3FGLGlCQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeFhIOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1wSixXQUFXLEdBQUcsd0JBQU1sQixPQUFOLENBQWNtQixLQUFsQzs7SUFFcUJnSyxXOzs7OztBQUNuQix5QkFBZ0M7QUFBQTs7QUFBQSxRQUFwQi9MLGFBQW9CLHVFQUFKLEVBQUk7O0FBQUE7O0FBQzlCLFFBQU1hLGFBQWEsR0FBRyxFQUF0QjtBQUNBLFFBQU1pSCxvQkFBb0IsR0FBRzdGLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjckIsYUFBZCxFQUE2QmIsYUFBN0IsQ0FBN0I7QUFFQSxzSEFBTThILG9CQUFOO0FBRUEsVUFBS0Esb0JBQUwsR0FBNEJBLG9CQUE1QjtBQU44QjtBQU8vQjtBQUVEOzs7Ozs7Ozs7OzttQ0FPZUMsRyxFQUFLO0FBQ2xCLFVBQU1HLFNBQVMsR0FBR0gsR0FBRyxDQUFDSSxNQUF0QjtBQUNBLFVBQU1uRixPQUFPLEdBQUdrRixTQUFTLENBQUNsRixPQUExQjs7QUFGa0Isa0NBSStDbEIsV0FBVyxDQUFDWSxPQUFaLENBQW9Cc0oscUJBQXBCLENBQTBDaEosT0FBMUMsQ0FKL0M7QUFBQSxVQUlWOEcsVUFKVSx5QkFJVkEsVUFKVTtBQUFBLFVBSUVDLG1CQUpGLHlCQUlFQSxtQkFKRjtBQUFBLFVBSXVCQyxtQkFKdkIseUJBSXVCQSxtQkFKdkI7O0FBTWxCLFVBQU1DLFdBQVcsR0FBRyxLQUFLZ0MsV0FBTCxDQUFpQi9ELFNBQWpCLEtBQStCLEtBQUtsSSxhQUFMLENBQW1Ca00sa0JBQXRFO0FBRUEsV0FBS3JDLGNBQUwsR0FBc0I7QUFDcEJDLGtCQUFVLEVBQVZBLFVBRG9CO0FBRXBCQywyQkFBbUIsRUFBbkJBLG1CQUZvQjtBQUdwQkMsMkJBQW1CLEVBQW5CQSxtQkFIb0I7QUFJcEJDLG1CQUFXLEVBQVhBO0FBSm9CLE9BQXRCO0FBT0EsVUFBTWtDLFlBQVksR0FBR3JDLFVBQVUsQ0FBQ3NDLGtCQUFoQztBQUNBLFVBQUk3SSxRQUFRLEdBQUd1RyxVQUFVLENBQUN2RyxRQUFYLENBQW9CNEksWUFBcEIsQ0FBZjs7QUFFQSxVQUFJLENBQUM1SSxRQUFMLEVBQWU7QUFDYkEsZ0JBQVEsR0FBRyxvQ0FBc0IsaUJBQXRCLENBQVg7QUFFQXpCLG1CQUFXLENBQUNhLE9BQVosQ0FBb0JZLFFBQXBCLENBQTZCUCxPQUE3QixFQUFzQ2dILG1CQUF0QyxFQUEyRG1DLFlBQTNELEVBQXlFNUksUUFBekU7QUFDRCxPQXRCaUIsQ0F3QmxCOzs7QUFDQSxVQUFJMkUsU0FBUyxDQUFDSSxhQUFkLEVBQTZCO0FBQzNCLGFBQUsrRCxNQUFMLENBQVl0RSxHQUFaO0FBQ0Q7O0FBQ0QsV0FBS3VFLFFBQUwsR0FBZ0IsSUFBaEI7O0FBQ0EsV0FBS0MseUJBQUwsQ0FBK0J2SixPQUEvQjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BESDs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUXBDLE8sMkJBQUFBLE87SUFBU3lCLEssMkJBQUFBLEs7O0lBRUltSyx5Qjs7Ozs7QUFDbkIsdUNBQWdDO0FBQUE7O0FBQUEsUUFBcEJ4TSxhQUFvQix1RUFBSixFQUFJOztBQUFBOztBQUM5QixRQUFNYSxhQUFhLEdBQUc7QUFDcEJiLG1CQUFhLEVBQUV5TSxnREFBZ0Q7QUFEM0MsS0FBdEI7QUFHQSxRQUFNM0Usb0JBQW9CLEdBQUc3RixNQUFNLENBQUNDLE1BQVAsQ0FBY3JCLGFBQWQsRUFBNkJiLGFBQTdCLENBQTdCO0FBRUEsa0pBQU04SCxvQkFBTixHQU44QixDQVE5Qjs7QUFDQSxVQUFLNEUscUJBQUwsR0FBNkIsTUFBS0EscUJBQUwsQ0FBMkJDLElBQTNCLE9BQTdCO0FBVDhCO0FBVS9CO0FBRUQ7Ozs7Ozs7Ozs7O3dDQU9vQnpFLFMsRUFBVztBQUM3QixVQUFNbEcsTUFBTSxHQUFHLEtBQUtoQyxhQUFwQjtBQUNBLFVBQU1nRCxPQUFPLEdBQUdrRixTQUFTLENBQUNsRixPQUExQjs7QUFDQSxVQUFNNEosZ0JBQWdCLEdBQUcsS0FBS0MsZ0NBQUwsQ0FBc0M3SixPQUF0QyxFQUErQ2tGLFNBQS9DLENBQXpCOztBQUVBLFVBQUkwRSxnQkFBZ0IsS0FBSzVILFNBQXpCLEVBQW9DO0FBQ2xDO0FBQ0Q7O0FBRUQsVUFBTThILFNBQVMsR0FBRyxvQ0FBYTlKLE9BQWIsRUFBc0IsS0FBS1Qsa0JBQTNCLENBQWxCO0FBRUEsVUFBTXdLLFFBQVEsR0FBR0QsU0FBUyxDQUFDeEMsSUFBVixDQUFlc0MsZ0JBQWYsQ0FBakI7QUFFQSxVQUFNdkgsUUFBUSxHQUFHMEgsUUFBUSxDQUFDQyxzQkFBVCxDQUFnQzNILFFBQWpEOztBQUVBLFVBQUlBLFFBQUosRUFBYztBQUNaO0FBQ0Q7O0FBRURyRCxZQUFNLENBQUNpTCxVQUFQLEdBQW9CRixRQUFRLENBQUNHLG9CQUFULENBQThCMUgsS0FBbEQ7QUFFQXhELFlBQU0sQ0FBQ21MLFdBQVAsR0FBcUJQLGdCQUFyQjtBQUNEO0FBRUQ7Ozs7Ozs7OytCQUtXN0UsRyxFQUFLO0FBQ2QsVUFBTUcsU0FBUyxHQUFHSCxHQUFHLENBQUNJLE1BQXRCO0FBQ0EsVUFBTW5GLE9BQU8sR0FBR2tGLFNBQVMsQ0FBQ2xGLE9BQTFCO0FBQ0EsVUFBTWhCLE1BQU0sR0FBRyxLQUFLaEMsYUFBcEI7QUFFQSxXQUFLb04sT0FBTCxHQUFlLEtBQWY7QUFFQS9LLFdBQUssQ0FBQ2dMLHFCQUFOLEdBQThCLEtBQTlCOztBQUVBLFdBQUtDLGlCQUFMLENBQXVCcEYsU0FBdkI7O0FBQ0EsV0FBS3FGLG1CQUFMLENBQXlCckYsU0FBekI7O0FBRUFsRyxZQUFNLENBQUN3TCxhQUFQLEdBQXVCLElBQXZCOztBQUVBLFdBQUtDLGlCQUFMLENBQXVCekssT0FBdkI7O0FBRUEsVUFBTStKLFFBQVEsR0FBRyxvQ0FBYS9KLE9BQWIsRUFBc0IsS0FBS1Qsa0JBQTNCLENBQWpCO0FBQ0EsVUFBTStILElBQUksR0FBR3lDLFFBQVEsQ0FBQ3pDLElBQVQsQ0FBY3RJLE1BQU0sQ0FBQ21MLFdBQXJCLENBQWI7O0FBRUEsVUFBSXZNLE9BQU8sQ0FBQ3dCLFVBQVIsQ0FBbUJNLE9BQW5CLENBQTJCdkIsV0FBM0IsRUFBSixFQUE4QztBQUM1QyxrQ0FBWW1KLElBQVo7QUFDRCxPQXJCYSxDQXVCZDs7O0FBQ0Esd0NBQVlwQyxTQUFTLENBQUNsRixPQUF0QjtBQUVBMEssd0JBQWtCLENBQUMzRixHQUFELENBQWxCO0FBQ0Q7QUFFRDs7Ozs7Ozs7O3dDQU1vQkcsUyxFQUFXO0FBQzdCLFVBQU1sRyxNQUFNLEdBQUcsS0FBS2hDLGFBQXBCO0FBQ0EsVUFBTWdELE9BQU8sR0FBR2tGLFNBQVMsQ0FBQ2xGLE9BQTFCO0FBQ0EsVUFBTStKLFFBQVEsR0FBRyxvQ0FBYS9KLE9BQWIsRUFBc0IsS0FBS1Qsa0JBQTNCLENBQWpCO0FBQ0EsVUFBTStILElBQUksR0FBR3lDLFFBQVEsQ0FBQ3pDLElBQVQsQ0FBY3RJLE1BQU0sQ0FBQ21MLFdBQXJCLENBQWI7QUFFQTdDLFVBQUksQ0FBQ3FELFdBQUwsR0FBbUIsSUFBbkI7QUFDQXJELFVBQUksQ0FBQ3NELFlBQUwsR0FBb0IsS0FBcEI7QUFDRDs7Ozs7QUFHSDs7Ozs7Ozs7O0FBS0EsU0FBU25CLGdEQUFULEdBQTREO0FBQzFELFNBQU87QUFDTG9CLGlCQUFhLEVBQUU7QUFDYkMsYUFBTyxFQUFFO0FBQ1BDLGFBQUssRUFBRTtBQUNMQyxtQkFBUyxFQUFFLElBRE47QUFFTEMsZ0JBQU0sRUFBRTtBQUZIO0FBREE7QUFESSxLQURWO0FBU0xDLGNBQVUsRUFBRSxDQVRQO0FBVUxmLGVBQVcsRUFBRSxJQVZSO0FBV0xnQixhQUFTLEVBQUUsNkJBQVdDLGNBQVgsRUFYTjtBQVlMbkIsY0FBVSxFQUFFLDZCQUFXb0IsWUFBWCxFQVpQOztBQWNMOzs7Ozs7Ozs7QUFTQUMscUJBQWlCLEVBQUUsSUF2QmQ7QUF3QkxDLDRCQUF3QixFQUFFLElBeEJyQjtBQXlCTEMsd0JBQW9CLEVBQUUsR0F6QmpCO0FBMEJMQywyQkFBdUIsRUFBRTtBQTFCcEIsR0FBUDtBQTRCRDs7QUFFRCxTQUFTZixrQkFBVCxDQUE0QjNGLEdBQTVCLEVBQWlDO0FBQy9CQSxLQUFHLENBQUMyRyx3QkFBSjtBQUNBM0csS0FBRyxDQUFDNEcsZUFBSjtBQUNBNUcsS0FBRyxDQUFDNkcsY0FBSjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SUQ7O0FBQ0E7O0FBQ0E7O0FBVUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs0QkFDc0UsNENBQXFCLG9CQUFyQixDO0lBQTlEQyxjLHlCQUFBQSxjO0lBQWdCQyxZLHlCQUFBQSxZO0lBQWNDLDJCLHlCQUFBQSwyQjs7QUFDdEMsSUFBTUMsSUFBSSxHQUFHLDRDQUFxQixjQUFyQixDQUFiO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLDRDQUFxQix5QkFBckIsQ0FBeEI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsNENBQXFCLHFCQUFyQixDQUFwQjtBQUNBLElBQU1DLGlCQUFpQixHQUFHLDRDQUFxQiwyQkFBckIsQ0FBMUI7QUFDQSxJQUFNQyx3QkFBd0IsR0FBRyw0Q0FBcUIsdUNBQXJCLENBQWpDO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLDRDQUFxQix1QkFBckIsQ0FBdEI7QUFDQSxJQUFNek8sT0FBTyxHQUFHLHdCQUFNQSxPQUF0QjtBQUNBLElBQU0wTyxpQkFBaUIsR0FBRyw0Q0FBcUIsd0JBQXJCLENBQTFCO0FBQ0EsSUFBTUMsc0JBQXNCLEdBQUcsNENBQXFCLDZCQUFyQixDQUEvQjtBQUNBLElBQU1DLFlBQVksR0FBRyw0Q0FBcUIsbUJBQXJCLENBQXJCOztJQUVxQkMsaUI7Ozs7O0FBQ25CLCtCQUFnQztBQUFBOztBQUFBLFFBQXBCelAsYUFBb0IsdUVBQUosRUFBSTs7QUFBQTs7QUFDOUIsUUFBTWEsYUFBYSxHQUFHO0FBQ3BCYixtQkFBYSxFQUFFMFAsNEJBQTRCO0FBRHZCLEtBQXRCO0FBR0EsUUFBTTVILG9CQUFvQixHQUFHN0YsTUFBTSxDQUFDQyxNQUFQLENBQWNyQixhQUFkLEVBQTZCYixhQUE3QixDQUE3QjtBQUVBLGtJQUFNOEgsb0JBQU47QUFFQSxVQUFLOUgsYUFBTCxDQUFtQjJQLGlCQUFuQixHQUF1QyxLQUF2QztBQUNBLFVBQUtDLGdCQUFMLEdBQXdCaFAsT0FBTyxDQUFDd0IsVUFBaEM7QUFFQSxVQUFLeU4scUJBQUwsR0FBNkIsTUFBS0EscUJBQUwsQ0FBMkJsRCxJQUEzQixPQUE3QjtBQUNBLFVBQUttRCx1QkFBTCxHQUErQixNQUFLQSx1QkFBTCxDQUE2Qm5ELElBQTdCLE9BQS9CO0FBWjhCO0FBYS9CO0FBRUQ7Ozs7Ozs7Ozs7O3lDQU9xQnpFLFMsRUFBVztBQUM5QixVQUFNL0YsZUFBZSxHQUFHLEtBQUt5TixnQkFBN0I7QUFDQSxVQUFNRyxhQUFhLEdBQUc3SCxTQUFTLElBQUlBLFNBQVMsQ0FBQ0ksYUFBdkIsSUFBd0NKLFNBQVMsQ0FBQ0ksYUFBVixDQUF3QmYsS0FBdEY7O0FBRUEsVUFBSSxDQUFDd0ksYUFBTCxFQUFvQjtBQUNsQkMsZUFBTyxDQUFDQyxLQUFSLG1EQUF5RCxLQUFLdE8sSUFBOUQ7QUFFQTtBQUNEOztBQUVELFVBQU0wRixjQUFjLEdBQUcsd0NBQWtCLEtBQUtyRSxPQUF2QixDQUF2QjtBQUNBLFVBQU1LLGlCQUFpQixHQUFHLHFEQUF1Q2dFLGNBQXZDLENBQTFCO0FBQ0EsVUFBTTJGLHNCQUFzQixHQUFHN0ssZUFBZSxDQUFDTyxPQUFoQixDQUF3QjJCLFlBQXhCLENBQXFDaEIsaUJBQXJDLEVBQXdELFNBQXhELENBQS9CO0FBQ0EsVUFBTTZKLG9CQUFvQixHQUFHL0ssZUFBZSxDQUFDTyxPQUFoQixDQUF3QmlFLGdCQUF4QixDQUF5Q3RELGlCQUF6QyxDQUE3QjtBQUVBLFVBQU02TSxlQUFlLEdBQUc7QUFDdEJqTSxXQUFHLEVBQUUsMkJBRGlCO0FBRXRCWix5QkFBaUIsRUFBakJBLGlCQUZzQjtBQUd0QmMsdUJBQWUsRUFBRSxTQUhLO0FBSXRCSSxxQkFBYSxFQUFFMkksb0JBQW9CLENBQUNqSixHQUpkO0FBS3RCaUosNEJBQW9CLEVBQXBCQSxvQkFMc0I7QUFNdEJGLDhCQUFzQixFQUF0QkEsc0JBTnNCO0FBT3RCMUgsZUFBTyxFQUFFLElBUGE7QUFRdEIySSxjQUFNLEVBQUUsSUFSYztBQVN0Qk4sbUJBQVcsRUFBRSxJQVRTO0FBVXRCRyxlQUFPLEVBQUU7QUFDUHFDLGdCQUFNLEVBQUU7QUFERDtBQVZhLE9BQXhCO0FBZUFELHFCQUFlLENBQUNwQyxPQUFoQixDQUF3QnNDLE9BQXhCLEdBQWtDO0FBQ2hDbkMsY0FBTSxFQUFFLEtBRHdCO0FBRWhDb0MsZ0JBQVEsRUFBRSxLQUZzQjtBQUdoQ0MsMEJBQWtCLEVBQUUsS0FIWTtBQUloQ0MsMEJBQWtCLEVBQUUsSUFKWTtBQUtoQ0MsMkJBQW1CLEVBQUUsSUFMVztBQU1oQ0Msc0JBQWMsRUFBRTtBQU5nQixPQUFsQztBQVNBdE8scUJBQWUsQ0FBQ1EsT0FBaEIsQ0FBd0I4RCxxQkFBeEIsQ0FBOENwRCxpQkFBOUMsRUFBaUUsU0FBakUsRUFBNEU2SixvQkFBb0IsQ0FBQ2pKLEdBQWpHO0FBRUEsYUFBT2lNLGVBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7OztzQ0FRa0JuSSxHLEVBQUsySSxlLEVBQWlCO0FBQ3RDLFVBQU14SSxTQUFTLEdBQUdILEdBQUcsQ0FBQ0ksTUFBdEIsQ0FEc0MsQ0FHdEM7O0FBQ0EsV0FBS3dJLDJCQUFMOztBQUNBLFdBQUtyRSxRQUFMLEdBQWdCLElBQWhCOztBQUVBLFdBQUtzRSxhQUFMLENBQW1CN0ksR0FBbkI7O0FBQ0EsV0FBSzhJLFNBQUwsQ0FBZTNJLFNBQWY7O0FBQ0F3Rix3QkFBa0IsQ0FBQzNGLEdBQUQsQ0FBbEI7QUFDRDs7O2tEQUU2QjtBQUM1QixVQUFNVixjQUFjLEdBQUcsd0NBQWtCLEtBQUtyRSxPQUF2QixDQUF2QjtBQUNBLFVBQU1LLGlCQUFpQixHQUFHLHFEQUF1Q2dFLGNBQXZDLENBQTFCO0FBQ0EsVUFBTWxGLGVBQWUsR0FBR3ZCLE9BQU8sQ0FBQ3dCLFVBQWhDO0FBQ0EsVUFBSTRCLE1BQU0sR0FBRzdCLGVBQWUsQ0FBQ08sT0FBaEIsQ0FBd0JzQixNQUF4QixDQUErQlgsaUJBQS9CLENBQWI7O0FBRUEsVUFBSSxDQUFDVyxNQUFMLEVBQWE7QUFDWDdCLHVCQUFlLENBQUNRLE9BQWhCLENBQXdCcUIsTUFBeEIsQ0FBK0JYLGlCQUEvQjtBQUNBVyxjQUFNLEdBQUc3QixlQUFlLENBQUNPLE9BQWhCLENBQXdCc0IsTUFBeEIsQ0FBK0JYLGlCQUEvQixDQUFUO0FBQ0Q7O0FBRUQsVUFBTXNELGdCQUFnQixHQUFHeEUsZUFBZSxDQUFDTyxPQUFoQixDQUF3QmlFLGdCQUF4QixDQUF5Q3RELGlCQUF6QyxDQUF6Qjs7QUFFQSxVQUFJLENBQUNzRCxnQkFBTCxFQUF1QjtBQUNyQnhFLHVCQUFlLENBQUNRLE9BQWhCLENBQXdCOEIsVUFBeEIsQ0FBbUNwQixpQkFBbkMsRUFBc0QsU0FBdEQsRUFBaUUsZ0JBQWpFO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7Ozs7Ozs7cUNBU2lCTCxPLEVBQVNzSCxJLEVBQU13RyxNLEVBQVE7QUFDdEMsVUFBTTNPLGVBQWUsR0FBRyxLQUFLeU4sZ0JBQTdCOztBQUVBLFVBQUksQ0FBQ3RGLElBQUksQ0FBQ3dELE9BQU4sSUFBaUJ4RCxJQUFJLENBQUN3RCxPQUFMLENBQWFxQyxNQUFiLEtBQXdCbkwsU0FBN0MsRUFBd0Q7QUFDdEQ7QUFDRDs7QUFFRCxVQUFJc0YsSUFBSSxDQUFDaEYsT0FBTCxLQUFpQixLQUFyQixFQUE0QjtBQUMxQjtBQUNEOztBQUVELFVBQU02SyxNQUFNLEdBQUc3RixJQUFJLENBQUN3RCxPQUFMLENBQWFxQyxNQUE1Qjs7QUFFQSxXQUFLLElBQUloSCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHZ0gsTUFBTSxDQUFDdEssTUFBM0IsRUFBbUNzRCxDQUFDLEVBQXBDLEVBQXdDO0FBQ3RDLFlBQU00SCxZQUFZLEdBQUcsb0NBQWMvTixPQUFkLEVBQXVCbU4sTUFBTSxDQUFDaEgsQ0FBRCxDQUE3QixDQUFyQjs7QUFFQSxZQUFJLHVCQUFNNkgsUUFBTixDQUFlRCxZQUFmLEVBQTZCRCxNQUE3QixJQUF1QyxDQUEzQyxFQUE4QztBQUM1QyxpQkFBTzNILENBQVA7QUFDRDtBQUNGLE9BbkJxQyxDQXFCdEM7OztBQUNBLFVBQUloSCxlQUFlLENBQUNFLEtBQWhCLENBQXNCQyxZQUF0QixJQUFzQ2dJLElBQUksQ0FBQ3dELE9BQUwsQ0FBYXNDLE9BQXZELEVBQWdFO0FBQzlELFlBQUliLHNCQUFzQixDQUFDakYsSUFBSSxDQUFDd0QsT0FBTCxDQUFhc0MsT0FBZCxFQUF1QlUsTUFBdkIsQ0FBMUIsRUFBMEQ7QUFDeEQsaUJBQU94RyxJQUFJLENBQUN3RCxPQUFMLENBQWFzQyxPQUFwQjtBQUNEO0FBQ0Y7QUFDRjtBQUVEOzs7Ozs7Ozs7eUNBTXFCckksRyxFQUFLO0FBQ3hCLFVBQU1HLFNBQVMsR0FBR0gsR0FBRyxDQUFDSSxNQUF0QjtBQUVBLFVBQU00RSxRQUFRLEdBQUcsb0NBQWFoRixHQUFHLENBQUNrSixhQUFqQixFQUFnQyxLQUFLdFAsSUFBckMsQ0FBakI7O0FBRUEsVUFBSSxDQUFDb0wsUUFBTCxFQUFlO0FBQ2IsZUFBTyxLQUFQO0FBQ0Q7O0FBRUQsVUFBTW1FLE1BQU0sR0FBRyxLQUFLQyx3QkFBTCxDQUE4QmpKLFNBQTlCLENBQWY7O0FBQ0EsVUFBTS9GLGVBQWUsR0FBRyxLQUFLeU4sZ0JBQTdCOztBQUVBLFVBQUkxSCxTQUFTLENBQUNrSixLQUFWLENBQWdCQyxPQUFwQixFQUE2QjtBQUMzQixZQUFJSCxNQUFNLEtBQUtsTSxTQUFYLElBQXdCa00sTUFBTSxDQUFDSSxZQUFQLENBQW9CYixjQUFoRCxFQUFnRSxDQUM5RDtBQUNELFNBRkQsTUFFTztBQUNMNUIsd0JBQWMsQ0FBQzBDLElBQWYsQ0FBb0IsSUFBcEIsRUFBMEJ4SixHQUExQixFQUErQm1KLE1BQS9CO0FBQ0Q7O0FBRUR4RCwwQkFBa0IsQ0FBQzNGLEdBQUQsQ0FBbEI7QUFFQSxlQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFJLENBQUNtSixNQUFMLEVBQWE7QUFDWDtBQUNEOztBQUVELFVBQU01RyxJQUFJLEdBQUd5QyxRQUFRLENBQUN6QyxJQUFULENBQWM0RyxNQUFNLENBQUNNLFNBQXJCLENBQWIsQ0E1QndCLENBOEJ4Qjs7QUFDQSxVQUFNbk4sWUFBWSxHQUFHbEMsZUFBZSxDQUFDTyxPQUFoQixDQUF3QjJCLFlBQXhCLENBQXFDaUcsSUFBSSxDQUFDakgsaUJBQTFDLEVBQTZEaUgsSUFBSSxDQUFDbkcsZUFBbEUsQ0FBckI7O0FBRUEsVUFBSUUsWUFBWSxDQUFDZ0IsUUFBakIsRUFBMkI7QUFDekIsZUFBTyxLQUFQO0FBQ0Q7O0FBRUQsYUFBTyxLQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7OzJDQU11QjBDLEcsRUFBS3VDLEksRUFBTW1ILE0sRUFBbUM7QUFBQSxVQUEzQmYsZUFBMkIsdUVBQVQsT0FBUztBQUNuRSxVQUFNdk8sZUFBZSxHQUFHLEtBQUt5TixnQkFBN0I7QUFDQSxVQUFNMUgsU0FBUyxHQUFHSCxHQUFHLENBQUNJLE1BQXRCO0FBQ0EsVUFBTW5GLE9BQU8sR0FBR2tGLFNBQVMsQ0FBQ2xGLE9BQTFCOztBQUVBLFVBQUlrRixTQUFTLENBQUNrSixLQUFWLENBQWdCTSxPQUFwQixFQUE2QjtBQUMzQixhQUFLQyxpQkFBTCxDQUF1QjVKLEdBQXZCLEVBQTRCdUMsSUFBNUI7O0FBQ0FvRCwwQkFBa0IsQ0FBQzNGLEdBQUQsQ0FBbEI7QUFFQTtBQUNEOztBQUVELFVBQUkwSixNQUFNLENBQUNoQixjQUFQLElBQXlCdE8sZUFBZSxDQUFDRSxLQUFoQixDQUFzQkMsWUFBbkQsRUFBaUU7QUFDL0Q7QUFDQThNLGdDQUF3QixDQUFDckgsR0FBRCxFQUFNLElBQU4sRUFBWXVDLElBQVosRUFBa0JtSCxNQUFsQixFQUEwQmYsZUFBMUIsQ0FBeEI7QUFDQTtBQUNELE9BaEJrRSxDQWtCbkU7OztBQUNBLFVBQU1yTSxZQUFZLEdBQUdsQyxlQUFlLENBQUNPLE9BQWhCLENBQXdCMkIsWUFBeEIsQ0FBcUNpRyxJQUFJLENBQUNqSCxpQkFBMUMsRUFBNkRpSCxJQUFJLENBQUNuRyxlQUFsRSxDQUFyQjs7QUFFQSxVQUFJRSxZQUFZLENBQUNnQixRQUFqQixFQUEyQjtBQUN6QixlQUFPLEtBQVA7QUFDRDs7QUFFRCxVQUFNckQsTUFBTSxHQUFHLEtBQUtoQyxhQUFwQjtBQUVBZ0MsWUFBTSxDQUFDNFAsVUFBUCxHQUFvQjtBQUNsQnJKLFNBQUMsRUFBRWtKLE1BQU0sQ0FBQ2xKLENBRFE7QUFFbEJDLFNBQUMsRUFBRWlKLE1BQU0sQ0FBQ2pKO0FBRlEsT0FBcEIsQ0EzQm1FLENBZ0NuRTs7QUFDQSxVQUFNMEksTUFBTSxHQUFHLEtBQUtDLHdCQUFMLENBQThCakosU0FBOUIsQ0FBZjs7QUFFQSxVQUFJLENBQUNnSixNQUFMLEVBQWE7QUFDWDtBQUNEOztBQUVELFVBQU1JLFlBQVksR0FBR0osTUFBTSxDQUFDSSxZQUE1QjtBQUNBLFVBQU1FLFNBQVMsR0FBR04sTUFBTSxDQUFDTSxTQUF6QjtBQUVBLFdBQUtLLFVBQUwsR0FBa0IsSUFBbEI7QUFDQTdQLFlBQU0sQ0FBQzhQLGFBQVAsR0FBdUJSLFlBQXZCO0FBQ0F0UCxZQUFNLENBQUNtTCxXQUFQLEdBQXFCcUUsU0FBckI7O0FBRUEsV0FBS08sZUFBTCxDQUFxQi9PLE9BQXJCOztBQUNBMEssd0JBQWtCLENBQUMzRixHQUFELENBQWxCO0FBQ0Q7OztzQ0FFaUJBLEcsRUFBS3VDLEksRUFBTTtBQUMzQixVQUFNbkksZUFBZSxHQUFHLEtBQUt5TixnQkFBN0I7QUFFQXpOLHFCQUFlLENBQUNRLE9BQWhCLENBQXdCZ0UsZ0JBQXhCLENBQXlDMkQsSUFBSSxDQUFDakgsaUJBQTlDLEVBQWlFaUgsSUFBSSxDQUFDbkcsZUFBdEUsRUFBdUZtRyxJQUFJLENBQUMvRixhQUE1RjtBQUVBLHdDQUFZd0QsR0FBRyxDQUFDSSxNQUFKLENBQVduRixPQUF2QjtBQUNEO0FBRUQ7Ozs7Ozs7OzttQ0FNZStFLEcsRUFBSztBQUFBOztBQUNsQixVQUFNRyxTQUFTLEdBQUdILEdBQUcsQ0FBQ0ksTUFBdEI7QUFDQSxVQUFNaEcsZUFBZSxHQUFHLEtBQUt5TixnQkFBN0IsQ0FGa0IsQ0FJbEI7O0FBQ0EsVUFBTTlDLFNBQVMsR0FBRyxvQ0FBYS9FLEdBQUcsQ0FBQ2tKLGFBQWpCLEVBQWdDLEtBQUt0UCxJQUFyQyxDQUFsQjs7QUFFQSxVQUFJLENBQUNtTCxTQUFMLEVBQWdCO0FBQ2Q7QUFDRDs7QUFFRCxVQUFNdkYsS0FBSyxHQUFHVyxTQUFTLENBQUNYLEtBQXhCO0FBQ0EsVUFBTXZFLE9BQU8sR0FBR2tGLFNBQVMsQ0FBQ2xGLE9BQTFCO0FBQ0EsVUFBTWhCLE1BQU0sR0FBRyxLQUFLaEMsYUFBcEI7O0FBQ0EsVUFBTWdTLFlBQVksR0FBRywwQkFBU0MsR0FBVCxDQUFhLHFCQUFiLEVBQW9DMUssS0FBSyxDQUFDMkssT0FBMUMsQ0FBckI7O0FBRUEsVUFBSUMsUUFBSjs7QUFFQSxVQUFJSCxZQUFKLEVBQWtCO0FBQ2hCRyxnQkFBUSxHQUFHSCxZQUFZLENBQUNHLFFBQXhCO0FBQ0QsT0FwQmlCLENBc0JsQjs7O0FBQ0EsVUFBTUMsT0FBTyxHQUFHL0MsYUFBYSxDQUFDbkgsU0FBUyxDQUFDbUssYUFBVixDQUF3QkMsTUFBekIsQ0FBN0I7O0FBRUEsVUFBTUMsU0FBUyxHQUFHLDRCQUFVQyxZQUFWLEVBQWxCOztBQXpCa0IsaUNBMkJUckosQ0EzQlM7QUE0QmhCLFlBQU1tQixJQUFJLEdBQUd3QyxTQUFTLENBQUN4QyxJQUFWLENBQWVuQixDQUFmLENBQWI7QUFDQSxZQUFNOUUsWUFBWSxHQUFHaUcsSUFBSSxDQUFDMEMsc0JBQTFCO0FBQ0EsWUFBTXZJLFVBQVUsR0FBRzZGLElBQUksQ0FBQzRDLG9CQUF4Qjs7QUFFQSxZQUFJNUMsSUFBSSxDQUFDaEYsT0FBTCxLQUFpQixLQUFqQixJQUEwQixDQUFDakIsWUFBWSxDQUFDaUIsT0FBNUMsRUFBcUQ7QUFDbkQ7QUFDRDs7QUFFRCxZQUFNbU4sV0FBVyxHQUNmdFEsZUFBZSxDQUFDTyxPQUFoQixDQUF3QnFELGVBQXhCLENBQXdDdUUsSUFBSSxDQUFDakgsaUJBQTdDLEVBQWdFaUgsSUFBSSxDQUFDbkcsZUFBckUsRUFBc0ZtRyxJQUFJLENBQUMvRixhQUEzRixNQUNBcEMsZUFBZSxDQUFDTyxPQUFoQixDQUF3Qm9DLHFCQUF4QixDQUE4Q3dGLElBQUksQ0FBQ2pILGlCQUFuRCxDQUZGO0FBSUEyTCxZQUFJLENBQUNvRCxPQUFELEVBQVUsVUFBQUEsT0FBTyxFQUFJO0FBQ3ZCLGNBQUk1TSxLQUFLLEdBQUcsNkJBQVdrTixnQkFBWCxDQUE0QnBJLElBQTVCLENBQVo7O0FBQ0EsY0FBSXFJLFNBQUo7QUFFQSxjQUFNeEMsTUFBTSxHQUFHN0YsSUFBSSxDQUFDd0QsT0FBTCxDQUFhcUMsTUFBNUI7O0FBRUEsY0FBSTdGLElBQUksQ0FBQzJELE1BQUwsSUFBZSxDQUFDNUosWUFBWSxDQUFDZ0IsUUFBakMsRUFBMkM7QUFDekMsZ0JBQUlpRixJQUFJLENBQUN3RCxPQUFMLENBQWE4RSxzQkFBakIsRUFBeUM7QUFDdkNwTixtQkFBSyxHQUFHeEQsTUFBTSxDQUFDNlEsWUFBZjtBQUNBRix1QkFBUyxHQUFHM1EsTUFBTSxDQUFDNlEsWUFBbkI7QUFDRCxhQUhELE1BR087QUFDTHJOLG1CQUFLLEdBQUcsNkJBQVdrTixnQkFBWCxDQUE0QnBJLElBQTVCLENBQVI7QUFDQXFJLHVCQUFTLEdBQUcsNkJBQVdHLFlBQVgsRUFBWjtBQUNEO0FBQ0YsV0FSRCxNQVFPO0FBQ0x0TixpQkFBSyxHQUFHZixVQUFVLENBQUNlLEtBQW5CO0FBQ0FtTixxQkFBUyxHQUFHbE8sVUFBVSxDQUFDZSxLQUF2QjtBQUNEOztBQUVELGNBQUlpTixXQUFXLElBQUluSSxJQUFJLENBQUNzRCxZQUF4QixFQUFzQztBQUNwQ3dFLG1CQUFPLENBQUNXLFdBQVIsR0FBc0IvUSxNQUFNLENBQUNnUixpQkFBN0I7QUFDRDs7QUFFRCxjQUFJMUksSUFBSSxDQUFDd0QsT0FBTCxDQUFhcUMsTUFBYixDQUFvQnRLLE1BQXhCLEVBQWdDO0FBQzlCLGlCQUFLLElBQUk2RSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHeUYsTUFBTSxDQUFDdEssTUFBM0IsRUFBbUM2RSxDQUFDLEVBQXBDLEVBQXdDO0FBQ3RDLGtCQUFNdUksS0FBSyxnQ0FBTzlDLE1BQU0sQ0FBQ3pGLENBQUQsQ0FBTixDQUFVdUksS0FBakIsRUFBWDs7QUFFQSxrQkFBSXZJLENBQUMsS0FBS3lGLE1BQU0sQ0FBQ3RLLE1BQVAsR0FBZ0IsQ0FBdEIsSUFBMkIsQ0FBQ3lFLElBQUksQ0FBQzRJLGVBQXJDLEVBQXNEO0FBQ3BEO0FBQ0E7QUFDQUQscUJBQUssQ0FBQy9OLElBQU4sQ0FBV2xELE1BQU0sQ0FBQzZMLGFBQVAsQ0FBcUJDLE9BQXJCLENBQTZCQyxLQUF4QztBQUNEOztBQUNEa0IsNkJBQWUsQ0FBQ21ELE9BQUQsRUFBVWxLLFNBQVMsQ0FBQ2xGLE9BQXBCLEVBQTZCc0gsSUFBSSxDQUFDd0QsT0FBTCxDQUFhcUMsTUFBYixDQUFvQnpGLENBQXBCLENBQTdCLEVBQXFEdUksS0FBckQsRUFBNEQ7QUFBRXpOLHFCQUFLLEVBQUxBO0FBQUYsZUFBNUQsQ0FBZjtBQUNEO0FBQ0Y7O0FBRUQ0TSxpQkFBTyxDQUFDVyxXQUFSLEdBQXNCLEdBQXRCLENBcEN1QixDQXNDdkI7O0FBRUEsY0FBTTNOLE9BQU8sR0FBRztBQUNkSSxpQkFBSyxFQUFMQSxLQURjO0FBRWQyTixnQkFBSSxFQUFFUjtBQUZRLFdBQWhCOztBQUtBLGNBQUlGLFdBQVcsSUFBSW5JLElBQUksQ0FBQ3NELFlBQXhCLEVBQXNDO0FBQ3BDO0FBQ0F4SSxtQkFBTyxDQUFDZ08sWUFBUixHQUF1QnBSLE1BQU0sQ0FBQ3FSLHdCQUE5QjtBQUNBbkUsdUJBQVcsQ0FBQ2tELE9BQUQsRUFBVWxLLFNBQVYsRUFBcUJpSSxNQUFyQixFQUE2Qi9LLE9BQTdCLENBQVg7QUFDRCxXQUpELE1BSU8sSUFBSXBELE1BQU0sQ0FBQzJOLGlCQUFQLElBQTZCckYsSUFBSSxDQUFDMkQsTUFBTCxJQUFlM0QsSUFBSSxDQUFDNEksZUFBckQsRUFBdUU7QUFDNUU7QUFDQTlOLG1CQUFPLENBQUNnTyxZQUFSLEdBQXVCcFIsTUFBTSxDQUFDc1Isa0JBQTlCO0FBQ0FwRSx1QkFBVyxDQUFDa0QsT0FBRCxFQUFVbEssU0FBVixFQUFxQmlJLE1BQXJCLEVBQTZCL0ssT0FBN0IsQ0FBWDtBQUNEOztBQUVELGNBQUlrRixJQUFJLENBQUNpSixXQUFULEVBQXNCO0FBQ3BCO0FBQ0FuTyxtQkFBTyxDQUFDZ08sWUFBUixHQUF1QnBSLE1BQU0sQ0FBQ3dSLG9CQUE5QjtBQUNBdEUsdUJBQVcsQ0FBQ2tELE9BQUQsRUFBVWxLLFNBQVYsRUFBcUIsQ0FBQ2lJLE1BQU0sQ0FBQyxDQUFELENBQVAsQ0FBckIsRUFBa0MvSyxPQUFsQyxDQUFYO0FBQ0Q7O0FBRUQsY0FBSWtGLElBQUksQ0FBQzJELE1BQUwsSUFBZSxDQUFDM0QsSUFBSSxDQUFDNEksZUFBekIsRUFBMEM7QUFDeEM7QUFDQTlOLG1CQUFPLENBQUNnTyxZQUFSLEdBQXVCcFIsTUFBTSxDQUFDc1Isa0JBQTlCO0FBQ0FwRSx1QkFBVyxDQUFDa0QsT0FBRCxFQUFVbEssU0FBVixFQUFxQmxHLE1BQU0sQ0FBQzZMLGFBQVAsQ0FBcUJDLE9BQTFDLEVBQW1EMUksT0FBbkQsQ0FBWDtBQUNBOEosdUJBQVcsQ0FBQ2tELE9BQUQsRUFBVWxLLFNBQVYsRUFBcUIsQ0FBQ2lJLE1BQU0sQ0FBQyxDQUFELENBQVAsQ0FBckIsRUFBa0MvSyxPQUFsQyxDQUFYO0FBQ0QsV0FsRXNCLENBb0V2Qjs7O0FBQ0EsY0FBSXFPLElBQUosRUFBVUMsVUFBVixFQUFzQkMsYUFBdEIsQ0FyRXVCLENBdUV2QjtBQUNBO0FBQ0E7O0FBQ0EsY0FBSXJKLElBQUksQ0FBQ3FELFdBQUwsS0FBcUIsS0FBekIsRUFBZ0M7QUFDOUI7QUFDQStGLHNCQUFVLEdBQUdwSixJQUFJLENBQUNvSixVQUFsQjtBQUNBQyx5QkFBYSxHQUFHckosSUFBSSxDQUFDcUosYUFBckI7QUFDQUYsZ0JBQUksR0FBR25KLElBQUksQ0FBQ21KLElBQVo7QUFDRCxXQUxELE1BS08sSUFBSSxDQUFDbkosSUFBSSxDQUFDMkQsTUFBVixFQUFrQjtBQUN2QjtBQUNBO0FBRUE7QUFDQSxnQkFBTTJGLE1BQU0sR0FBRztBQUNiQyxrQkFBSSxFQUFFMUQsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVNUgsQ0FESDtBQUVidUwsbUJBQUssRUFBRTNELE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVTVILENBRko7QUFHYndMLG9CQUFNLEVBQUU1RCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUzSCxDQUhMO0FBSWJ3TCxpQkFBRyxFQUFFN0QsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVNUg7QUFKRixhQUFmOztBQU9BLGlCQUFLLElBQUlZLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUdnSCxNQUFNLENBQUN0SyxNQUEzQixFQUFtQ3NELEVBQUMsRUFBcEMsRUFBd0M7QUFDdEN5SyxvQkFBTSxDQUFDQyxJQUFQLEdBQWNJLElBQUksQ0FBQy9RLEdBQUwsQ0FBUzBRLE1BQU0sQ0FBQ0MsSUFBaEIsRUFBc0IxRCxNQUFNLENBQUNoSCxFQUFELENBQU4sQ0FBVVosQ0FBaEMsQ0FBZDtBQUNBcUwsb0JBQU0sQ0FBQ0UsS0FBUCxHQUFlRyxJQUFJLENBQUM5USxHQUFMLENBQVN5USxNQUFNLENBQUNFLEtBQWhCLEVBQXVCM0QsTUFBTSxDQUFDaEgsRUFBRCxDQUFOLENBQVVaLENBQWpDLENBQWY7QUFDQXFMLG9CQUFNLENBQUNHLE1BQVAsR0FBZ0JFLElBQUksQ0FBQy9RLEdBQUwsQ0FBUzBRLE1BQU0sQ0FBQ0csTUFBaEIsRUFBd0I1RCxNQUFNLENBQUNoSCxFQUFELENBQU4sQ0FBVVgsQ0FBbEMsQ0FBaEI7QUFDQW9MLG9CQUFNLENBQUNJLEdBQVAsR0FBYUMsSUFBSSxDQUFDOVEsR0FBTCxDQUFTeVEsTUFBTSxDQUFDSSxHQUFoQixFQUFxQjdELE1BQU0sQ0FBQ2hILEVBQUQsQ0FBTixDQUFVWCxDQUEvQixDQUFiO0FBQ0Q7O0FBRUQsZ0JBQU0wSyxlQUFlLEdBQUc7QUFDdEJXLGtCQUFJLEVBQUVELE1BQU0sQ0FBQ0MsSUFEUztBQUV0QkcsaUJBQUcsRUFBRUosTUFBTSxDQUFDRyxNQUZVO0FBR3RCRyxtQkFBSyxFQUFFRCxJQUFJLENBQUNFLEdBQUwsQ0FBU1AsTUFBTSxDQUFDRSxLQUFQLEdBQWVGLE1BQU0sQ0FBQ0MsSUFBL0IsQ0FIZTtBQUl0Qk8sb0JBQU0sRUFBRUgsSUFBSSxDQUFDRSxHQUFMLENBQVNQLE1BQU0sQ0FBQ0ksR0FBUCxHQUFhSixNQUFNLENBQUNHLE1BQTdCO0FBSmMsYUFBeEIsQ0FuQnVCLENBMEJ2Qjs7QUFDQXpKLGdCQUFJLENBQUM0SSxlQUFMLEdBQXVCQSxlQUF2QixDQTNCdUIsQ0E2QnZCO0FBQ0E7O0FBQ0EsZ0JBQUksQ0FBQzNMLEtBQUssQ0FBQy9CLEtBQVgsRUFBa0I7QUFDaEI7QUFDQSxrQkFBTTZPLE1BQU0sR0FBRyxnQ0FDYnJSLE9BRGEsRUFFYmtRLGVBQWUsQ0FBQ1csSUFGSCxFQUdiWCxlQUFlLENBQUNjLEdBSEgsRUFJYmQsZUFBZSxDQUFDZ0IsS0FKSCxFQUtiaEIsZUFBZSxDQUFDa0IsTUFMSCxDQUFmLENBRmdCLENBVWhCOztBQUNBVix3QkFBVSxHQUFHM0UsMkJBQTJCLENBQUN3QyxJQUE1QixDQUFpQyxNQUFqQyxFQUF1QzhDLE1BQXZDLEVBQStDbkIsZUFBL0MsRUFBZ0UvQyxNQUFoRSxDQUFiOztBQUVBLGtCQUFJZ0MsUUFBUSxLQUFLLElBQWpCLEVBQXVCO0FBQ3JCO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBd0IsNkJBQWEsR0FBRztBQUNkVyxzQkFBSSxFQUFFOUUsWUFBWSxDQUFDakksS0FBRCxFQUFRLENBQUNtTSxVQUFVLENBQUNZLElBQVgsR0FBa0IvTSxLQUFLLENBQUN3QixTQUF6QixJQUFzQ3hCLEtBQUssQ0FBQ3NCLEtBQXBELENBREo7QUFFZDBMLHdCQUFNLEVBQUUvRSxZQUFZLENBQUNqSSxLQUFELEVBQVEsQ0FBQ21NLFVBQVUsQ0FBQ2EsTUFBWCxHQUFvQmhOLEtBQUssQ0FBQ3dCLFNBQTNCLElBQXdDeEIsS0FBSyxDQUFDc0IsS0FBdEQ7QUFGTixpQkFBaEI7QUFJRCxlQXpCZSxDQTJCaEI7OztBQUNBLGtCQUFJNkssVUFBVSxJQUFJLENBQUNjLEtBQUssQ0FBQ2QsVUFBVSxDQUFDWSxJQUFaLENBQXhCLEVBQTJDO0FBQ3pDaEssb0JBQUksQ0FBQ29KLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0FwSixvQkFBSSxDQUFDcUosYUFBTCxHQUFxQkEsYUFBckI7QUFDRDtBQUNGLGFBL0RzQixDQWlFdkI7QUFDQTs7O0FBQ0EsZ0JBQU1jLGtCQUFrQixHQUFHbE4sS0FBSyxDQUFDa04sa0JBQU4sSUFBNEIsQ0FBdkQ7QUFDQSxnQkFBTUMsZUFBZSxHQUFHbk4sS0FBSyxDQUFDbU4sZUFBTixJQUF5QixDQUFqRDtBQUNBLGdCQUFNQyxPQUFPLEdBQUdGLGtCQUFrQixHQUFHQyxlQUFyQztBQUVBakIsZ0JBQUksR0FBRzNFLFlBQVksQ0FBQ3FCLE1BQUQsRUFBU3dFLE9BQVQsQ0FBbkIsQ0F2RXVCLENBeUV2Qjs7QUFDQSxnQkFBSSxDQUFDSCxLQUFLLENBQUNmLElBQUQsQ0FBVixFQUFrQjtBQUNoQm5KLGtCQUFJLENBQUNtSixJQUFMLEdBQVlBLElBQVo7QUFDRCxhQTVFc0IsQ0E4RXZCOzs7QUFDQW5KLGdCQUFJLENBQUNxRCxXQUFMLEdBQW1CLEtBQW5CO0FBQ0QsV0EvSnNCLENBaUt2QjtBQUNBOzs7QUFDQSxjQUFJckQsSUFBSSxDQUFDNEksZUFBTCxLQUF5Qi9RLGVBQWUsQ0FBQ0UsS0FBaEIsQ0FBc0JDLFlBQXRCLElBQXNDZ0ksSUFBSSxDQUFDMkQsTUFBcEUsQ0FBSixFQUFpRjtBQUMvRTtBQUNBO0FBRUEsZ0JBQUksQ0FBQzNELElBQUksQ0FBQ3dELE9BQUwsQ0FBYXNDLE9BQWIsQ0FBcUJDLFFBQTFCLEVBQW9DO0FBQ2xDO0FBQ0E7QUFDQS9GLGtCQUFJLENBQUN3RCxPQUFMLENBQWFzQyxPQUFiLENBQXFCN0gsQ0FBckIsR0FBeUIrQixJQUFJLENBQUM0SSxlQUFMLENBQXFCVyxJQUFyQixHQUE0QnZKLElBQUksQ0FBQzRJLGVBQUwsQ0FBcUJnQixLQUExRTtBQUNBNUosa0JBQUksQ0FBQ3dELE9BQUwsQ0FBYXNDLE9BQWIsQ0FBcUI1SCxDQUFyQixHQUF5QjhCLElBQUksQ0FBQzRJLGVBQUwsQ0FBcUJjLEdBQXJCLEdBQTJCMUosSUFBSSxDQUFDNEksZUFBTCxDQUFxQmtCLE1BQXJCLEdBQThCLENBQWxGO0FBQ0Q7O0FBRUQsZ0JBQU1RLElBQUksR0FBR0MsV0FBVyxDQUFDdEQsSUFBWixDQUFpQixNQUFqQixFQUF1QmpILElBQXZCLENBQWI7QUFFQTZFLDZCQUFpQixDQUNmaUQsT0FEZSxFQUVmcFAsT0FGZSxFQUdmc0gsSUFBSSxDQUFDd0QsT0FBTCxDQUFhc0MsT0FIRSxFQUlmd0UsSUFKZSxFQUtmekUsTUFMZSxFQU1mMkUsbUJBTmUsRUFPZnRQLEtBUGUsRUFRZitNLFNBUmUsRUFTZixDQVRlLEVBVWYsSUFWZSxDQUFqQjtBQVlEO0FBQ0YsU0E3TEcsQ0FBSjtBQXhDZ0I7O0FBMkJsQixXQUFLLElBQUlwSixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHMkQsU0FBUyxDQUFDeEMsSUFBVixDQUFlekUsTUFBbkMsRUFBMkNzRCxDQUFDLEVBQTVDLEVBQWdEO0FBQUEseUJBQXZDQSxDQUF1Qzs7QUFBQSxpQ0FNNUM7QUFxTUg7O0FBRUQsZUFBUzBMLFdBQVQsQ0FBcUJ2SyxJQUFyQixFQUEyQjtBQUN6QixZQUFNN0YsVUFBVSxHQUFHNkYsSUFBSSxDQUFDNEMsb0JBQXhCO0FBQ0EsWUFBTTdJLFlBQVksR0FBR2lHLElBQUksQ0FBQzBDLHNCQUExQjtBQUZ5QixZQUlqQjBHLFVBSmlCLEdBSW1CcEosSUFKbkIsQ0FJakJvSixVQUppQjtBQUFBLFlBSUxDLGFBSkssR0FJbUJySixJQUpuQixDQUlMcUosYUFKSztBQUFBLFlBSVVGLElBSlYsR0FJbUJuSixJQUpuQixDQUlVbUosSUFKVixFQUt6Qjs7QUFDQSxZQUFNc0IsU0FBUyxHQUFHLEVBQWxCO0FBRUFBLGlCQUFTLENBQUM3UCxJQUFWLENBQWVULFVBQVUsQ0FBQzlDLElBQTFCOztBQUVBLFlBQUkwQyxZQUFZLENBQUMxQyxJQUFiLEtBQXNCLFNBQTFCLEVBQXFDO0FBQ25Db1QsbUJBQVMsQ0FBQzdQLElBQVYsQ0FBZSx3QkFBZjtBQUNELFNBRkQsTUFFTztBQUNMNlAsbUJBQVMsQ0FBQzdQLElBQVYsQ0FBZWIsWUFBWSxDQUFDMUMsSUFBNUI7QUFDRCxTQWR3QixDQWdCekI7OztBQUNBLFlBQUkrUixVQUFVLElBQUlBLFVBQVUsQ0FBQ1ksSUFBWCxLQUFvQnRQLFNBQXRDLEVBQWlEO0FBQy9DO0FBQ0EsY0FBSWdRLFFBQVEsR0FBRyxFQUFmOztBQUVBLGNBQUk3QyxRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDckI2QyxvQkFBUSxHQUFHLEtBQVg7QUFDRCxXQU44QyxDQVEvQzs7O0FBQ0EsY0FBSUMsUUFBUSxtQkFBWTNGLGlCQUFpQixDQUFDb0UsVUFBVSxDQUFDWSxJQUFYLENBQWdCWSxPQUFoQixDQUF3QixDQUF4QixDQUFELENBQTdCLFNBQTRERixRQUE1RCxDQUFaLENBVCtDLENBVS9DOztBQUNBLGNBQUlHLFVBQVUscUJBQWM3RixpQkFBaUIsQ0FBQ29FLFVBQVUsQ0FBQ2EsTUFBWCxDQUFrQlcsT0FBbEIsQ0FBMEIsQ0FBMUIsQ0FBRCxDQUEvQixTQUFnRUYsUUFBaEUsQ0FBZCxDQVgrQyxDQWEvQzs7QUFDQSxjQUFJckIsYUFBYSxJQUFJQSxhQUFhLENBQUNXLElBQWQsS0FBdUJ0UCxTQUE1QyxFQUF1RDtBQUNyRCxnQkFBTW9RLE9BQU8sR0FBRyxRQUFoQjtBQUVBSCxvQkFBUSxJQUFJRyxPQUFPLEdBQUc5RixpQkFBaUIsQ0FBQ3FFLGFBQWEsQ0FBQ1csSUFBZCxDQUFtQlksT0FBbkIsQ0FBMkIsQ0FBM0IsQ0FBRCxDQUF2QztBQUNBQyxzQkFBVSxJQUFJQyxPQUFPLEdBQUc5RixpQkFBaUIsQ0FBQ3FFLGFBQWEsQ0FBQ1ksTUFBZCxDQUFxQlcsT0FBckIsQ0FBNkIsQ0FBN0IsQ0FBRCxDQUF6QztBQUNELFdBbkI4QyxDQXFCL0M7OztBQUNBSCxtQkFBUyxDQUFDN1AsSUFBVixDQUFlK1AsUUFBZjtBQUNBRixtQkFBUyxDQUFDN1AsSUFBVixDQUFlaVEsVUFBZjtBQUNELFNBekN3QixDQTJDekI7OztBQUNBLFlBQUkxQixJQUFKLEVBQVU7QUFDUjtBQUNBO0FBQ0E7QUFDQSxjQUFJNEIsTUFBTSxnQkFBU0MsTUFBTSxDQUFDQyxZQUFQLENBQW9CLEdBQXBCLENBQVQsQ0FBVjs7QUFFQSxjQUFJLENBQUNoTyxLQUFLLENBQUNtTixlQUFQLElBQTBCLENBQUNuTixLQUFLLENBQUNrTixrQkFBckMsRUFBeUQ7QUFDdkRZLGtCQUFNLG9CQUFhQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0IsR0FBcEIsQ0FBYixDQUFOO0FBQ0QsV0FSTyxDQVVSOzs7QUFDQSxjQUFNQyxRQUFRLG1CQUFZbEcsaUJBQWlCLENBQUNtRSxJQUFJLENBQUN5QixPQUFMLENBQWEsQ0FBYixDQUFELENBQTdCLFNBQWlERyxNQUFqRCxDQUFkLENBWFEsQ0FhUjs7QUFDQU4sbUJBQVMsQ0FBQzdQLElBQVYsQ0FBZXNRLFFBQWY7QUFDRDs7QUFFRFQsaUJBQVMsQ0FBQzdQLElBQVYsV0FBa0JULFVBQVUsQ0FBQ2lCLFlBQTdCO0FBRUEsZUFBT3FQLFNBQVA7QUFDRDs7QUFFRCxlQUFTRCxtQkFBVCxDQUE2QjNFLE1BQTdCLEVBQXFDO0FBQ25DLGVBQU9BLE1BQVA7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7Ozs7Z0NBT1luTixPLEVBQVNzTyxZLEVBQWM7QUFDakMsVUFBTXhFLFNBQVMsR0FBRyxvQ0FBYTlKLE9BQWIsRUFBc0IsS0FBS3JCLElBQTNCLENBQWxCO0FBRUEsVUFBTUssTUFBTSxHQUFHLEtBQUtoQyxhQUFwQjtBQUVBLFVBQU1zSyxJQUFJLEdBQUd3QyxTQUFTLENBQUN4QyxJQUFWLENBQWV0SSxNQUFNLENBQUNtTCxXQUF0QixDQUFiO0FBRUEsVUFBTWdELE1BQU0sR0FBRzdGLElBQUksQ0FBQ3dELE9BQUwsQ0FBYXFDLE1BQTVCO0FBRUE3RixVQUFJLENBQUMyRCxNQUFMLEdBQWMsS0FBZDtBQUNBM0QsVUFBSSxDQUFDMEQsU0FBTCxHQUFpQixLQUFqQjtBQUNBMUQsVUFBSSxDQUFDd0QsT0FBTCxDQUFhOEUsc0JBQWIsR0FBc0MsS0FBdEMsQ0FYaUMsQ0FhakM7O0FBQ0EsVUFBSXRCLFlBQVksS0FBS3RNLFNBQXJCLEVBQWdDO0FBQzlCbUwsY0FBTSxDQUFDbk8sTUFBTSxDQUFDOFAsYUFBUCxHQUF1QixDQUF4QixDQUFOLENBQWlDbUIsS0FBakMsQ0FBdUMvTixJQUF2QyxDQUE0Q2lMLE1BQU0sQ0FBQyxDQUFELENBQWxEO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLMEIsVUFBVCxFQUFxQjtBQUNuQixhQUFLQSxVQUFMLEdBQWtCLEtBQWxCO0FBQ0F2SCxZQUFJLENBQUNxRCxXQUFMLEdBQW1CLElBQW5CO0FBQ0FyRCxZQUFJLENBQUNzRCxZQUFMLEdBQW9CLEtBQXBCO0FBQ0QsT0F0QmdDLENBd0JqQzs7O0FBQ0E1TCxZQUFNLENBQUM4UCxhQUFQLEdBQXVCLENBQXZCO0FBQ0E5UCxZQUFNLENBQUNtTCxXQUFQLEdBQXFCLENBQUMsQ0FBdEI7QUFDQTdDLFVBQUksQ0FBQ2lKLFdBQUwsR0FBbUIsS0FBbkI7O0FBRUEsVUFBSSxLQUFLakgsUUFBVCxFQUFtQjtBQUNqQixhQUFLQSxRQUFMLEdBQWdCLEtBQWhCOztBQUNBLGFBQUttSixlQUFMLENBQXFCelMsT0FBckI7QUFDRDs7QUFFRCxVQUFJcEMsT0FBTyxDQUFDd0IsVUFBUixDQUFtQkMsS0FBbkIsQ0FBeUJsQixXQUE3QixFQUEwQztBQUN4QyxrQ0FBWW1KLElBQVosRUFBa0J0SCxPQUFsQjtBQUNEOztBQUVELHdDQUFZQSxPQUFaO0FBQ0Q7QUFFRDs7Ozs7Ozs7MENBS3NCK0UsRyxFQUFLO0FBQ3pCLFVBQU1HLFNBQVMsR0FBR0gsR0FBRyxDQUFDSSxNQUF0Qjs7QUFFQSxVQUFJRCxTQUFTLENBQUN3TixRQUFWLEtBQXVCLEtBQUsvVCxJQUFoQyxFQUFzQztBQUNwQztBQUNEOztBQUVELFVBQU11TyxlQUFlLEdBQUdoSSxTQUFTLENBQUNnSSxlQUFsQzs7QUFFQSxXQUFLTixnQkFBTCxDQUFzQmpOLE9BQXRCLENBQThCK0QscUJBQTlCLENBQ0V3SixlQUFlLENBQUM3TSxpQkFEbEIsRUFFRTZNLGVBQWUsQ0FBQy9MLGVBRmxCLEVBR0UrTCxlQUFlLENBQUMzTCxhQUhsQjtBQUtEOzs7b0NBRWV2QixPLEVBQVM7QUFDdkIsV0FBSzJTLG1CQUFMLENBQXlCM1MsT0FBekI7O0FBQ0EsV0FBSzRTLDhCQUFMLENBQW9DNVMsT0FBcEM7QUFDRDs7O29DQUVlQSxPLEVBQVM7QUFDdkIsV0FBSzJTLG1CQUFMLENBQXlCM1MsT0FBekI7O0FBQ0EsV0FBSzRTLDhCQUFMLENBQW9DNVMsT0FBcEM7QUFDRDs7O21DQUVjQSxPLEVBQVM7QUFDdEIsV0FBSzRTLDhCQUFMLENBQW9DNVMsT0FBcEM7QUFDRDs7O3FDQUVnQkEsTyxFQUFTO0FBQ3hCLFdBQUsyUyxtQkFBTCxDQUF5QjNTLE9BQXpCOztBQUNBQSxhQUFPLENBQUM2UyxtQkFBUixDQUE0Qix5QkFBT0MsbUJBQW5DLEVBQXdELEtBQUtqRyxxQkFBN0Q7QUFDRDs7O21EQUU4QjdNLE8sRUFBUztBQUN0Q0EsYUFBTyxDQUFDNlMsbUJBQVIsQ0FBNEIseUJBQU9DLG1CQUFuQyxFQUF3RCxLQUFLakcscUJBQTdEO0FBQ0E3TSxhQUFPLENBQUMrUyxnQkFBUixDQUF5Qix5QkFBT0QsbUJBQWhDLEVBQXFELEtBQUtqRyxxQkFBMUQ7QUFDRDs7Ozs7Ozs7QUFHSCxTQUFTSCw0QkFBVCxHQUF3QztBQUN0QyxTQUFPO0FBQ0w3QixpQkFBYSxFQUFFO0FBQ2JDLGFBQU8sRUFBRTtBQUNQQyxhQUFLLEVBQUU7QUFDTEMsbUJBQVMsRUFBRSxJQUROO0FBRUxDLGdCQUFNLEVBQUU7QUFGSDtBQURBO0FBREksS0FEVjtBQVNMK0gsV0FBTyxFQUFFLENBVEo7QUFVTDNDLDRCQUF3QixFQUFFLEdBVnJCO0FBV0xMLHFCQUFpQixFQUFFLEdBWGQ7QUFZTE0sc0JBQWtCLEVBQUUsQ0FaZjtBQWFMRSx3QkFBb0IsRUFBRSxDQWJqQjtBQWNMeUMsNkJBQXlCLEVBQUUsRUFkdEI7QUFlTHRHLHFCQUFpQixFQUFFLEtBZmQ7QUFnQkxrRCxnQkFBWSxFQUFFLFNBaEJUO0FBaUJMZixpQkFBYSxFQUFFLENBakJWO0FBa0JMM0UsZUFBVyxFQUFFLENBQUM7QUFsQlQsR0FBUDtBQW9CRDs7QUFFRCxTQUFTTyxrQkFBVCxDQUE0QjNGLEdBQTVCLEVBQWlDO0FBQy9CQSxLQUFHLENBQUMyRyx3QkFBSjtBQUNBM0csS0FBRyxDQUFDNEcsZUFBSjtBQUNBNUcsS0FBRyxDQUFDNkcsY0FBSjtBQUNEOzs7Ozs7Ozs7Ozs7OztDQ3RzQkQ7O0FBRUFzSCxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVS9RLE9BQVYsRUFBbUI7QUFDbEMsTUFBSXlGLE1BQUosRUFBWWUsSUFBWixFQUFrQndLLE9BQWxCLEVBQTJCQyxVQUEzQixFQUF1Q0MsTUFBdkMsRUFBK0NDLFNBQS9DLEVBQTBEQyxTQUExRCxFQUFxRUMsWUFBckUsRUFBbUZDLEtBQW5GLEVBQTBGN0ssT0FBMUYsRUFBbUc4SyxNQUFuRyxFQUEyRy9DLE1BQTNHOztBQUVBLE1BQUlnRCxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFZO0FBQzNCL0wsVUFBTSxHQUFHekYsT0FBTyxDQUFDeUYsTUFBakI7QUFDQWUsUUFBSSxHQUFHeEcsT0FBTyxDQUFDd0csSUFBZjtBQUNBd0ssV0FBTyxHQUFHaFIsT0FBTyxDQUFDZ1IsT0FBUixJQUFtQlMsSUFBN0I7QUFDQVIsY0FBVSxHQUFHalIsT0FBTyxDQUFDaVIsVUFBUixJQUFzQlEsSUFBbkM7QUFDQVAsVUFBTSxHQUFHbFIsT0FBTyxDQUFDa1IsTUFBUixJQUFrQlEsYUFBM0I7QUFDQVAsYUFBUyxHQUFHblIsT0FBTyxDQUFDbVIsU0FBUixJQUFxQixLQUFqQztBQUNBQyxhQUFTLEdBQUd2RSxHQUFHLENBQUNyRyxJQUFELENBQWY7QUFDQTZLLGdCQUFZLEdBQUdNLGtCQUFrQixFQUFqQztBQUNBTCxTQUFLLEdBQUcsRUFBUjtBQUNBN0ssV0FBTyxHQUFHLEVBQVY7QUFDQThLLFVBQU0sR0FBRyxFQUFUO0FBQ0EvQyxVQUFNLEdBQUcsRUFBVDtBQUNELEdBYkQ7O0FBZUEsTUFBSW9ELElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQVk7QUFDckJOLFNBQUssQ0FBQ3hSLElBQU4sQ0FBVztBQUFFK1IsaUJBQVcsRUFBRXJMO0FBQWYsS0FBWDs7QUFFQSxXQUFPOEssS0FBSyxDQUFDN1EsTUFBTixHQUFlLENBQXRCLEVBQXlCO0FBQ3ZCcVIsV0FBSyxDQUFDUixLQUFLLENBQUNTLEdBQU4sRUFBRCxDQUFMO0FBQ0Q7O0FBRUQsV0FBTztBQUNMdEwsYUFBTyxFQUFFQSxPQURKO0FBRUx1TCxnQkFBVSxFQUFFQSxVQUFVO0FBRmpCLEtBQVA7QUFJRCxHQVhEOztBQWFBLE1BQUlGLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQVVHLEdBQVYsRUFBZTtBQUN6QixRQUFJQyxPQUFPLEdBQUdELEdBQUcsQ0FBQ0osV0FBbEI7QUFDQSxRQUFJTSxRQUFRLEdBQUdGLEdBQUcsQ0FBQ0csWUFBbkI7O0FBRUEsUUFBSUMsT0FBTyxDQUFDSCxPQUFELENBQVgsRUFBc0I7QUFDcEI7QUFDRDs7QUFDREksaUJBQWEsQ0FBQ0osT0FBRCxDQUFiOztBQUVBLFFBQUlLLE1BQU0sQ0FBQ0wsT0FBRCxDQUFWLEVBQXFCO0FBQ25CTSxtQkFBYSxDQUFDTixPQUFELENBQWI7QUFDQU8sa0JBQVksQ0FBQ1AsT0FBRCxDQUFaO0FBQ0QsS0FIRCxNQUdPO0FBQ0xRLG9CQUFjLENBQUNQLFFBQUQsQ0FBZDtBQUNEO0FBQ0YsR0FmRDs7QUFpQkEsTUFBSUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBVU0sR0FBVixFQUFlO0FBQzNCLFdBQU9wQixNQUFNLENBQUNvQixHQUFELENBQU4sS0FBZ0IsSUFBdkI7QUFDRCxHQUZEOztBQUlBLE1BQUlMLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBVUssR0FBVixFQUFlO0FBQ2pDcEIsVUFBTSxDQUFDb0IsR0FBRCxDQUFOLEdBQWMsSUFBZDtBQUNELEdBRkQ7O0FBSUEsTUFBSUosTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBVUwsT0FBVixFQUFtQjtBQUM5QixRQUFJVSxJQUFJLEdBQUdDLE1BQU0sQ0FBQ2hHLEdBQUQsRUFBTSxDQUFDcUYsT0FBRCxDQUFOLENBQWpCO0FBRUEsV0FBT1csTUFBTSxDQUFDM0IsTUFBRCxFQUFTLENBQUMwQixJQUFELEVBQU94QixTQUFQLENBQVQsQ0FBYjtBQUNELEdBSkQ7O0FBTUEsTUFBSW9CLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBVU4sT0FBVixFQUFtQjtBQUNyQ3pMLFdBQU8sQ0FBQzNHLElBQVIsQ0FBYW9TLE9BQWI7QUFDQWxCLFdBQU8sQ0FBQzhCLEtBQVIsQ0FBY2xULFNBQWQsRUFBeUJzUyxPQUF6QjtBQUNELEdBSEQ7O0FBS0EsTUFBSVEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFVUCxRQUFWLEVBQW9CO0FBQ3ZDM0QsVUFBTSxDQUFDMkQsUUFBRCxDQUFOLEdBQW1CQSxRQUFuQjtBQUNBbEIsY0FBVSxDQUFDNkIsS0FBWCxDQUFpQmxULFNBQWpCLEVBQTRCdVMsUUFBNUI7QUFDRCxHQUhEOztBQUtBLE1BQUlNLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQVVQLE9BQVYsRUFBbUI7QUFDcEMsU0FBSyxJQUFJbk8sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3NOLFlBQVksQ0FBQzVRLE1BQWpDLEVBQXlDc0QsQ0FBQyxJQUFJLENBQTlDLEVBQWlEO0FBQy9DLFVBQUlnUCxJQUFJLEdBQUcxQixZQUFZLENBQUN0TixDQUFELENBQXZCO0FBQ0EsVUFBSWlQLFFBQVEsR0FBR2QsT0FBTyxDQUFDZSxLQUFSLENBQWMsQ0FBZCxDQUFmOztBQUVBLFdBQUssSUFBSTNOLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc0TSxPQUFPLENBQUN6UixNQUE1QixFQUFvQzZFLENBQUMsSUFBSSxDQUF6QyxFQUE0QztBQUMxQzBOLGdCQUFRLENBQUMxTixDQUFELENBQVIsSUFBZXlOLElBQUksQ0FBQ3pOLENBQUQsQ0FBbkI7QUFDRDs7QUFFRGdNLFdBQUssQ0FBQ3hSLElBQU4sQ0FBVztBQUNUK1IsbUJBQVcsRUFBRW1CLFFBREo7QUFFVFosb0JBQVksRUFBRUY7QUFGTCxPQUFYO0FBSUQ7QUFDRixHQWREOztBQWdCQSxNQUFJckYsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBVXFGLE9BQVYsRUFBbUI7QUFDM0IsV0FBT3pNLE1BQU0sQ0FBQ3FOLEtBQVAsQ0FBYWxULFNBQWIsRUFBd0JzUyxPQUF4QixDQUFQO0FBQ0QsR0FGRDs7QUFJQSxNQUFJVyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFVSyxDQUFWLEVBQWFDLElBQWIsRUFBbUI7QUFDOUIsUUFBSTtBQUNGLGFBQU9ELENBQUMsQ0FBQ0osS0FBRixDQUFRbFQsU0FBUixFQUFtQnVULElBQW5CLENBQVA7QUFDRCxLQUZELENBRUUsT0FBT3RJLEtBQVAsRUFBYyxDQUFFO0FBQ25CLEdBSkQ7O0FBTUEsTUFBSTRHLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQVksQ0FBRSxDQUF6Qjs7QUFFQSxNQUFJQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQVUwQixDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDbEMsV0FBT0QsQ0FBQyxLQUFLQyxDQUFiO0FBQ0QsR0FGRDs7QUFJQSxNQUFJMUIsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFZO0FBQ25DLFFBQUlOLFlBQVksR0FBR2lDLE9BQU8sQ0FBQzlNLElBQUksQ0FBQy9GLE1BQU4sQ0FBMUI7QUFFQSxXQUFPNFEsWUFBWSxDQUFDa0MsTUFBYixDQUFvQixVQUFVUixJQUFWLEVBQWdCO0FBQ3pDLFVBQUlTLEtBQUssR0FBR0MsY0FBYyxDQUFDVixJQUFELENBQTFCO0FBRUEsYUFBT1MsS0FBSyxLQUFLLENBQVYsS0FBZ0JBLEtBQUssS0FBSyxDQUFWLElBQWVyQyxTQUEvQixDQUFQO0FBQ0QsS0FKTSxDQUFQO0FBS0QsR0FSRDs7QUFVQSxNQUFJbUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBVTdTLE1BQVYsRUFBa0I7QUFDOUIsUUFBSWlULEtBQUssR0FBRyxFQUFaOztBQUVBLFFBQUlDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQVVDLE1BQVYsRUFBa0I7QUFDbEMsYUFBT0EsTUFBTSxDQUFDQyxLQUFQLENBQWEsRUFBYixFQUFpQkMsR0FBakIsQ0FBcUIsVUFBVUMsQ0FBVixFQUFhO0FBQ3ZDLGVBQU9DLFFBQVEsQ0FBQ0QsQ0FBRCxFQUFJLEVBQUosQ0FBUixHQUFrQixDQUF6QjtBQUNELE9BRk0sQ0FBUDtBQUdELEtBSkQ7O0FBTUEsU0FBSyxJQUFJaFEsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzhLLElBQUksQ0FBQ29GLEdBQUwsQ0FBUyxDQUFULEVBQVl4VCxNQUFaLENBQXBCLEVBQXlDc0QsQ0FBQyxJQUFJLENBQTlDLEVBQWlEO0FBQy9DLFVBQUk2UCxNQUFNLEdBQUdNLElBQUksQ0FBQ25RLENBQUMsQ0FBQ29RLFFBQUYsQ0FBVyxDQUFYLENBQUQsRUFBZ0IsR0FBaEIsRUFBcUIxVCxNQUFyQixDQUFqQjtBQUVBaVQsV0FBSyxDQUFDNVQsSUFBTixDQUFXNlQsV0FBVyxDQUFDQyxNQUFELENBQXRCO0FBQ0Q7O0FBRUQsV0FBT0YsS0FBUDtBQUNELEdBaEJEOztBQWtCQSxNQUFJUSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFVTixNQUFWLEVBQWtCUSxTQUFsQixFQUE2QjNULE1BQTdCLEVBQXFDO0FBQzlDLFFBQUk0VCxLQUFLLEdBQUcsSUFBSUMsS0FBSixDQUFVN1QsTUFBTSxHQUFHLENBQW5CLENBQVo7QUFDQSxRQUFJOFQsR0FBRyxHQUFHRixLQUFLLENBQUNHLElBQU4sQ0FBV0osU0FBWCxDQUFWO0FBRUEsV0FBTyxDQUFDRyxHQUFHLEdBQUdYLE1BQVAsRUFBZVgsS0FBZixDQUFxQixDQUFDeFMsTUFBdEIsQ0FBUDtBQUNELEdBTEQ7O0FBT0EsTUFBSWdULGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBVVksS0FBVixFQUFpQjtBQUNwQyxRQUFJYixLQUFLLEdBQUcsQ0FBWjs7QUFFQSxTQUFLLElBQUl6UCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHc1EsS0FBSyxDQUFDNVQsTUFBMUIsRUFBa0NzRCxDQUFDLElBQUksQ0FBdkMsRUFBMEM7QUFDeEMsVUFBSXNRLEtBQUssQ0FBQ3RRLENBQUQsQ0FBTCxLQUFhLENBQWpCLEVBQW9CO0FBQ2xCeVAsYUFBSyxJQUFJLENBQVQ7QUFDRDtBQUNGOztBQUVELFdBQU9BLEtBQVA7QUFDRCxHQVZEOztBQVlBLE1BQUl4QixVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFZO0FBQzNCLFFBQUlxQyxLQUFLLEdBQUcsRUFBWjs7QUFFQSxTQUFLLElBQUkxQixHQUFULElBQWdCbkUsTUFBaEIsRUFBd0I7QUFDdEIsVUFBSUEsTUFBTSxDQUFDaUcsY0FBUCxDQUFzQjlCLEdBQXRCLENBQUosRUFBZ0M7QUFDOUIwQixhQUFLLENBQUNLLE9BQU4sQ0FBY2xHLE1BQU0sQ0FBQ21FLEdBQUQsQ0FBcEI7QUFDRDtBQUNGOztBQUVELFdBQU8wQixLQUFQO0FBQ0QsR0FWRDs7QUFZQTdDLFlBQVU7QUFDVixTQUFPSSxJQUFJLEVBQVg7QUFDRCxDQXJLRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7Ozs7Ozs7O0FBRUEsSUFBTXBXLE9BQU8sR0FBRyx3QkFBTUEsT0FBdEI7O0lBRWFtWixPOzs7QUFDWCxtQkFDRTVKLE1BREYsRUFFRTZKLGNBRkYsRUFHRTNXLGlCQUhGLEVBSUVjLGVBSkYsRUFLRUksYUFMRixFQU1FMFYsVUFORixFQU9FQyxXQVBGLEVBUUV0TSxZQVJGLEVBU0U7QUFBQTs7QUFDQSxTQUFLdU0sV0FBTCxHQUFtQixLQUFLQyxlQUFMLENBQXFCakssTUFBckIsQ0FBbkI7QUFDQSxTQUFLa0ssZUFBTCxHQUF1QkwsY0FBdkI7QUFDQSxTQUFLTSxrQkFBTCxHQUEwQmpYLGlCQUExQjtBQUNBLFNBQUtrWCxnQkFBTCxHQUF3QnBXLGVBQXhCO0FBQ0EsU0FBS3FXLGNBQUwsR0FBc0JqVyxhQUF0QjtBQUNBLFNBQUtrVyxXQUFMLEdBQW1CUixVQUFuQjtBQUNBLFNBQUtTLFlBQUwsR0FBb0JSLFdBQXBCO0FBQ0EsU0FBS1MsYUFBTCxHQUFxQi9NLFlBQXJCO0FBQ0Q7Ozs7b0NBRWV1QyxNLEVBQVE7QUFDdEI7QUFDQSxVQUFNeUssVUFBVSxHQUFHLEVBQW5CO0FBQ0EsVUFBTUMsR0FBRyxHQUFHMUssTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVMkssQ0FBVixLQUFnQjlWLFNBQTVCOztBQUVBLFdBQUssSUFBSW1FLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdnSCxNQUFNLENBQUN0SyxNQUEzQixFQUFtQ3NELENBQUMsRUFBcEMsRUFBd0M7QUFDdEN5UixrQkFBVSxDQUFDMVYsSUFBWCxDQUFnQjtBQUNkcUQsV0FBQyxFQUFFNEgsTUFBTSxDQUFDaEgsQ0FBRCxDQUFOLENBQVVaLENBREM7QUFFZEMsV0FBQyxFQUFFMkgsTUFBTSxDQUFDaEgsQ0FBRCxDQUFOLENBQVVYO0FBRkMsU0FBaEI7O0FBS0EsWUFBSXFTLEdBQUosRUFBUztBQUNQRCxvQkFBVSxDQUFDelIsQ0FBRCxDQUFWLENBQWMyUixDQUFkLEdBQWtCM0ssTUFBTSxDQUFDaEgsQ0FBRCxDQUFOLENBQVUyUixDQUE1QjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0YsVUFBUDtBQUNEOzs7d0NBRW1CRyxVLEVBQVk7QUFDOUIsVUFBTTFYLGlCQUFpQixHQUFHLEtBQUtpWCxrQkFBL0I7QUFDQSxVQUFNblcsZUFBZSxHQUFHLEtBQUtvVyxnQkFBN0I7QUFDQSxVQUFNaFcsYUFBYSxHQUFHLEtBQUtpVyxjQUEzQjtBQUVBLFVBQU1yWSxlQUFlLEdBQUd2QixPQUFPLENBQUN3QixVQUFoQztBQUVBLFVBQU04SyxvQkFBb0IsR0FBRy9LLGVBQWUsQ0FBQ08sT0FBaEIsQ0FBd0IrQixVQUF4QixDQUFtQ3BCLGlCQUFuQyxFQUFzRGMsZUFBdEQsRUFBdUVJLGFBQXZFLENBQTdCO0FBQ0EsVUFBTXlJLHNCQUFzQixHQUFHN0ssZUFBZSxDQUFDTyxPQUFoQixDQUF3QjJCLFlBQXhCLENBQXFDaEIsaUJBQXJDLEVBQXdEYyxlQUF4RCxDQUEvQjtBQUVBLFVBQU1tRyxJQUFJLEdBQUc7QUFDWHJHLFdBQUcsRUFBRSxLQUFLd1csV0FEQztBQUVYcFgseUJBQWlCLEVBQWpCQSxpQkFGVztBQUdYYyx1QkFBZSxFQUFmQSxlQUhXO0FBSVhJLHFCQUFhLEVBQWJBLGFBSlc7QUFLWDJJLDRCQUFvQixFQUFwQkEsb0JBTFc7QUFNWEYsOEJBQXNCLEVBQXRCQSxzQkFOVztBQU9YMUgsZUFBTyxFQUFFLElBUEU7QUFRWDJJLGNBQU0sRUFBRSxLQVJHO0FBU1hOLG1CQUFXLEVBQUUsSUFURjtBQVVYRyxlQUFPLEVBQUU7QUFDUHFDLGdCQUFNLEVBQUU7QUFERDtBQVZFLE9BQWI7O0FBZUEsVUFBSSxLQUFLa0ssZUFBVCxFQUEwQjtBQUN4Qi9QLFlBQUksQ0FBQzBRLGNBQUwsR0FBc0IsS0FBS1gsZUFBM0I7QUFDRDs7QUFFRCxVQUFJLEtBQUtNLGFBQVQsRUFBd0I7QUFDdEJyUSxZQUFJLENBQUNzRCxZQUFMLEdBQW9CLElBQXBCO0FBQ0Q7O0FBRUQsV0FBS3FOLGVBQUwsQ0FBcUIzUSxJQUFJLENBQUN3RCxPQUFMLENBQWFxQyxNQUFsQzs7QUFFQTdGLFVBQUksQ0FBQ3dELE9BQUwsQ0FBYXNDLE9BQWIsR0FBdUI7QUFDckJuQyxjQUFNLEVBQUUsS0FEYTtBQUVyQm9DLGdCQUFRLEVBQUUsS0FGVztBQUdyQkMsMEJBQWtCLEVBQUUsS0FIQztBQUlyQkMsMEJBQWtCLEVBQUUsSUFKQztBQUtyQkMsMkJBQW1CLEVBQUUsSUFMQTtBQU1yQkMsc0JBQWMsRUFBRTtBQU5LLE9BQXZCO0FBU0FuRyxVQUFJLENBQUM0SSxlQUFMLEdBQXVCLEVBQXZCO0FBRUE1SSxVQUFJLENBQUM0USxVQUFMLEdBQWtCSCxVQUFsQjtBQUVBLGFBQU96USxJQUFQO0FBQ0Q7OztvQ0FFZTZGLE0sRUFBUTtBQUN0QjtBQUNBLFdBQUssSUFBSWhILENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS2dSLFdBQUwsQ0FBaUJ0VSxNQUFyQyxFQUE2Q3NELENBQUMsRUFBOUMsRUFBa0Q7QUFDaERnSCxjQUFNLENBQUNqTCxJQUFQLENBQVksS0FBS2lXLGlCQUFMLENBQXVCaFMsQ0FBdkIsQ0FBWjtBQUNELE9BSnFCLENBTXRCOzs7QUFDQSxXQUFLLElBQUlBLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUdnSCxNQUFNLENBQUN0SyxNQUEzQixFQUFtQ3NELEVBQUMsRUFBcEMsRUFBd0M7QUFDdEMsWUFBSUEsRUFBQyxLQUFLZ0gsTUFBTSxDQUFDdEssTUFBUCxHQUFnQixDQUExQixFQUE2QjtBQUMzQnNLLGdCQUFNLENBQUNoSCxFQUFELENBQU4sQ0FBVThKLEtBQVYsQ0FBZ0IvTixJQUFoQixDQUFxQmlMLE1BQU0sQ0FBQyxDQUFELENBQTNCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xBLGdCQUFNLENBQUNoSCxFQUFELENBQU4sQ0FBVThKLEtBQVYsQ0FBZ0IvTixJQUFoQixDQUFxQmlMLE1BQU0sQ0FBQ2hILEVBQUMsR0FBRyxDQUFMLENBQTNCO0FBQ0Q7QUFDRjtBQUNGOzs7c0NBRWlCQSxDLEVBQUc7QUFDbkIsVUFBSWlTLEtBQUssR0FBRztBQUNWN1MsU0FBQyxFQUFFLEtBQUs0UixXQUFMLENBQWlCaFIsQ0FBakIsRUFBb0JaLENBRGI7QUFFVkMsU0FBQyxFQUFFLEtBQUsyUixXQUFMLENBQWlCaFIsQ0FBakIsRUFBb0JYLENBRmI7QUFHVnlLLGFBQUssRUFBRTtBQUhHLE9BQVo7O0FBTUEsVUFBSSxLQUFLa0gsV0FBTCxDQUFpQmhSLENBQWpCLEVBQW9CMlIsQ0FBcEIsS0FBMEI5VixTQUE5QixFQUF5QztBQUN2Q29XLGFBQUssQ0FBQ04sQ0FBTixHQUFVLEtBQUtYLFdBQUwsQ0FBaUJoUixDQUFqQixFQUFvQjJSLENBQTlCO0FBQ0Q7O0FBRUQsYUFBT00sS0FBUDtBQUNEOzs7d0JBRWdCO0FBQ2YsYUFBTyxLQUFLakIsV0FBWjtBQUNEOzs7d0JBQ29CO0FBQ25CLGFBQU8sS0FBS0UsZUFBWjtBQUNEOzs7d0JBRVM7QUFDUixhQUFPLEtBQUtJLFdBQVo7QUFDRDs7O3dCQUVpQjtBQUNoQixhQUFPLEtBQUtDLFlBQVo7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFJSDs7QUFFQSxJQUFNVyxzQkFBc0IsMERBQTVCO0FBRUE7Ozs7Ozs7Ozs7QUFTZSxrQkFBVXRPLFFBQVYsRUFBb0IvSixPQUFwQixFQUE2QjtBQUMxQyxNQUFNdUIsYUFBYSxHQUFHd0ksUUFBUSxDQUFDeEksYUFBL0I7O0FBQ0EsTUFBTStXLFFBQVEsR0FBR0MsMEJBQTBCLENBQUN2WSxPQUFELENBQTNDOztBQUNBLE1BQU13WSxjQUFjLEdBQUdDLGtCQUFrQixDQUFDSCxRQUFELEVBQVcvVyxhQUFYLENBQXpDOztBQUNBLE1BQU1tWCxNQUFNLEdBQUdDLGtCQUFrQixDQUFDSCxjQUFELENBQWpDOztBQUNBLE1BQU1JLFdBQVcsR0FBR0MsMkJBQTJCLENBQUNMLGNBQUQsRUFBaUJ6TyxRQUFRLENBQUM5SSxHQUExQixDQUEvQzs7QUFFQSxNQUFNNlgsaUJBQWlCLEdBQUcsRUFBMUIsQ0FQMEMsQ0FTMUM7O0FBQ0EsT0FBSyxJQUFJM1MsQ0FBQyxHQUFHdVMsTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZLENBQXpCLEVBQTRCdlMsQ0FBQyxJQUFJdVMsTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZLENBQTdDLEVBQWdEdlMsQ0FBQyxFQUFqRCxFQUFxRDtBQUNuRCxRQUFJNFMsd0JBQXdCLENBQUNQLGNBQUQsRUFBaUJyUyxDQUFqQixDQUE1QixFQUFpRDtBQUMvQyxVQUFNNlMsV0FBVyxHQUFHQyxnQkFBZ0IsQ0FBQzlTLENBQUQsRUFBSXVTLE1BQUosRUFBWUYsY0FBWixDQUFwQzs7QUFFQSxVQUFJUSxXQUFXLEtBQUtBLFdBQVcsQ0FBQyxDQUFELENBQVgsS0FBbUJKLFdBQW5CLElBQWtDSSxXQUFXLENBQUMsQ0FBRCxDQUFYLEtBQW1CSixXQUExRCxDQUFmLEVBQXVGO0FBQ3JGTSxnQ0FBd0IsQ0FBQ0YsV0FBRCxFQUFjRixpQkFBZCxDQUF4QjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFPO0FBQ0xOLGtCQUFjLEVBQWRBLGNBREs7QUFFTE0scUJBQWlCLEVBQWpCQTtBQUZLLEdBQVA7QUFJRDtBQUVEOzs7Ozs7Ozs7QUFPQSxTQUFTRCwyQkFBVCxDQUFxQ0wsY0FBckMsRUFBcUR2QixVQUFyRCxFQUFpRTtBQUMvRCxPQUFLLElBQUk5USxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHcVMsY0FBYyxDQUFDM1YsTUFBbkMsRUFBMkNzRCxDQUFDLEVBQTVDLEVBQWdEO0FBQzlDLFFBQUlxUyxjQUFjLENBQUNyUyxDQUFELENBQWQsQ0FBa0JnVCxRQUF0QixFQUFnQztBQUM5QixVQUFNQSxRQUFRLEdBQUdYLGNBQWMsQ0FBQ3JTLENBQUQsQ0FBZCxDQUFrQmdULFFBQW5DOztBQUVBLFdBQUssSUFBSXpSLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd5UixRQUFRLENBQUN0VyxNQUE3QixFQUFxQzZFLENBQUMsRUFBdEMsRUFBMEM7QUFDeEMsWUFBSXlSLFFBQVEsQ0FBQ3pSLENBQUQsQ0FBUixDQUFZekcsR0FBWixLQUFvQmdXLFVBQXhCLEVBQW9DO0FBQ2xDLGlCQUFPOVEsQ0FBUDtBQUNEO0FBQ0Y7QUFDRjtBQUNGOztBQUVEO0FBQ0Q7QUFFRDs7Ozs7Ozs7QUFPQSxTQUFTb1MsMEJBQVQsQ0FBb0N2WSxPQUFwQyxFQUE2QztBQUMzQyxNQUFNb1osY0FBYyxHQUFHLG9DQUFhcFosT0FBYixFQUFzQixPQUF0QixDQUF2QjtBQUVBLFNBQU9vWixjQUFjLENBQUM5UixJQUFmLENBQW9CLENBQXBCLEVBQXVCZ1IsUUFBOUI7QUFDRDtBQUVEOzs7Ozs7Ozs7O0FBU0EsU0FBU0csa0JBQVQsQ0FBNEJILFFBQTVCLEVBQXNDL1csYUFBdEMsRUFBcUQ7QUFDbkQsTUFBTWlYLGNBQWMsR0FBRyxFQUF2QjtBQUNBLE1BQU1hLGdCQUFnQixHQUFHaEIsc0JBQXNCLENBQUNpQixhQUF2QixFQUF6Qjs7QUFFQSxPQUFLLElBQUluVCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHbVMsUUFBUSxDQUFDelYsTUFBN0IsRUFBcUNzRCxDQUFDLEVBQXRDLEVBQTBDO0FBQ3hDLFFBQU0rSSxPQUFPLEdBQUdvSixRQUFRLENBQUNuUyxDQUFELENBQXhCO0FBQ0EsUUFBTW9ULGNBQWMsR0FBR0YsZ0JBQWdCLENBQUNuSyxPQUFELENBQXZDOztBQUVBLFFBQUksQ0FBQ3FLLGNBQUQsSUFBbUIsQ0FBQ0EsY0FBYyxDQUFDQyxXQUF2QyxFQUFvRDtBQUNsRGhCLG9CQUFjLENBQUN0VyxJQUFmLENBQW9CO0FBQ2xCZ04sZUFBTyxFQUFQQTtBQURrQixPQUFwQjtBQUdELEtBSkQsTUFJTztBQUNMLFVBQU1pSyxRQUFRLEdBQUdJLGNBQWMsQ0FBQ0MsV0FBZixDQUEyQmxTLElBQTNCLENBQWdDcU8sTUFBaEMsQ0FBdUMsVUFBQThELE9BQU8sRUFBSTtBQUNqRSxlQUFPQSxPQUFPLENBQUNsWSxhQUFSLEtBQTBCQSxhQUFqQztBQUNELE9BRmdCLENBQWpCO0FBSUEsVUFBTW1ZLGVBQWUsR0FBRztBQUN0QnhLLGVBQU8sRUFBUEE7QUFEc0IsT0FBeEI7O0FBSUEsVUFBSWlLLFFBQVEsQ0FBQ3RXLE1BQWIsRUFBcUI7QUFDbkI2Vyx1QkFBZSxDQUFDUCxRQUFoQixHQUEyQkEsUUFBM0I7QUFDRDs7QUFFRFgsb0JBQWMsQ0FBQ3RXLElBQWYsQ0FBb0J3WCxlQUFwQjtBQUNEO0FBQ0Y7O0FBRUQsU0FBT2xCLGNBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7OztBQVVBLFNBQVNHLGtCQUFULENBQTRCSCxjQUE1QixFQUE0QztBQUMxQyxNQUFNRSxNQUFNLEdBQUcsRUFBZjs7QUFFQSxPQUFLLElBQUl2UyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHcVMsY0FBYyxDQUFDM1YsTUFBbkMsRUFBMkNzRCxDQUFDLEVBQTVDLEVBQWdEO0FBQzlDLFFBQUlxUyxjQUFjLENBQUNyUyxDQUFELENBQWQsQ0FBa0JnVCxRQUF0QixFQUFnQztBQUM5QlQsWUFBTSxDQUFDeFcsSUFBUCxDQUFZaUUsQ0FBWjtBQUNBO0FBQ0Q7QUFDRjs7QUFFRCxPQUFLLElBQUlBLEVBQUMsR0FBR3FTLGNBQWMsQ0FBQzNWLE1BQWYsR0FBd0IsQ0FBckMsRUFBd0NzRCxFQUFDLElBQUksQ0FBN0MsRUFBZ0RBLEVBQUMsRUFBakQsRUFBcUQ7QUFDbkQsUUFBSXFTLGNBQWMsQ0FBQ3JTLEVBQUQsQ0FBZCxDQUFrQmdULFFBQXRCLEVBQWdDO0FBQzlCVCxZQUFNLENBQUN4VyxJQUFQLENBQVlpRSxFQUFaO0FBQ0E7QUFDRDtBQUNGOztBQUVELFNBQU91UyxNQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7QUFTQSxTQUFTSyx3QkFBVCxDQUFrQ1AsY0FBbEMsRUFBa0RtQixVQUFsRCxFQUE4RDtBQUM1RCxTQUNFLENBQUNuQixjQUFjLENBQUNtQixVQUFELENBQWQsQ0FBMkJSLFFBQTVCLElBQ0NYLGNBQWMsQ0FBQ21CLFVBQUQsQ0FBZCxDQUEyQlIsUUFBM0IsQ0FBb0N0VyxNQUFwQyxLQUErQyxDQUEvQyxJQUFvRDJWLGNBQWMsQ0FBQ21CLFVBQUQsQ0FBZCxDQUEyQlIsUUFBM0IsQ0FBb0MsQ0FBcEMsRUFBdUN2TyxZQUY5RjtBQUlEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7O0FBWUEsU0FBU3NPLHdCQUFULENBQWtDRixXQUFsQyxFQUErQ0YsaUJBQS9DLEVBQWtFO0FBQ2hFLE1BQUksQ0FBQ0EsaUJBQWlCLENBQUNFLFdBQVcsQ0FBQyxDQUFELENBQVosQ0FBdEIsRUFBd0M7QUFDdENGLHFCQUFpQixDQUFDRSxXQUFXLENBQUMsQ0FBRCxDQUFaLENBQWpCLEdBQW9DO0FBQ2xDWSxVQUFJLEVBQUVaLFdBRDRCO0FBRWxDYSxVQUFJLEVBQUU7QUFGNEIsS0FBcEM7QUFJRDtBQUNGO0FBRUQ7Ozs7Ozs7Ozs7Ozs7OztBQWNBLFNBQVNaLGdCQUFULENBQTBCVSxVQUExQixFQUFzQ2pCLE1BQXRDLEVBQThDRixjQUE5QyxFQUE4RDtBQUM1RCxNQUFJUSxXQUFXLEdBQUcsRUFBbEI7QUFDQSxNQUFJYyxjQUFjLEdBQUcsSUFBckIsQ0FGNEQsQ0FJNUQ7O0FBQ0EsT0FBSyxJQUFJM1QsQ0FBQyxHQUFHd1QsVUFBVSxHQUFHLENBQTFCLEVBQTZCeFQsQ0FBQyxJQUFJdVMsTUFBTSxDQUFDLENBQUQsQ0FBeEMsRUFBNkN2UyxDQUFDLEVBQTlDLEVBQWtEO0FBQ2hELFFBQUlxUyxjQUFjLENBQUNyUyxDQUFELENBQWQsQ0FBa0JnVCxRQUF0QixFQUFnQztBQUM5QixVQUFNQSxRQUFRLEdBQUdYLGNBQWMsQ0FBQ3JTLENBQUQsQ0FBZCxDQUFrQmdULFFBQW5DOztBQUVBLFVBQUlBLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWXZPLFlBQWhCLEVBQThCO0FBQzVCO0FBQ0E7QUFDQTtBQUNEOztBQUVELFVBQUl1TyxRQUFRLENBQUN0VyxNQUFULEdBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCaVgsc0JBQWMsR0FBRyxLQUFqQjtBQUNELE9BWDZCLENBYTlCOzs7QUFDQWQsaUJBQVcsQ0FBQzlXLElBQVosQ0FBaUJpRSxDQUFqQjtBQUNBO0FBQ0Q7QUFDRjs7QUFFRCxNQUFJLENBQUMyVCxjQUFMLEVBQXFCO0FBQ25CO0FBQ0QsR0EzQjJELENBNkI1RDs7O0FBQ0EsT0FBSyxJQUFJM1QsR0FBQyxHQUFHd1QsVUFBVSxHQUFHLENBQTFCLEVBQTZCeFQsR0FBQyxJQUFJdVMsTUFBTSxDQUFDLENBQUQsQ0FBeEMsRUFBNkN2UyxHQUFDLEVBQTlDLEVBQWtEO0FBQ2hELFFBQUlxUyxjQUFjLENBQUNyUyxHQUFELENBQWQsQ0FBa0JnVCxRQUF0QixFQUFnQztBQUM5QixVQUFNQSxTQUFRLEdBQUdYLGNBQWMsQ0FBQ3JTLEdBQUQsQ0FBZCxDQUFrQmdULFFBQW5DOztBQUVBLFVBQUlBLFNBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWXZPLFlBQWhCLEVBQThCO0FBQzVCO0FBQ0E7QUFDQTtBQUNEOztBQUVELFVBQUl1TyxTQUFRLENBQUN0VyxNQUFULEdBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCaVgsc0JBQWMsR0FBRyxLQUFqQjtBQUNEOztBQUVEZCxpQkFBVyxDQUFDOVcsSUFBWixDQUFpQmlFLEdBQWpCO0FBQ0E7QUFDRDtBQUNGOztBQUVELE1BQUksQ0FBQzJULGNBQUwsRUFBcUI7QUFDbkI7QUFDRDs7QUFFRCxTQUFPZCxXQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNQRDs7QUFFQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1YLHNCQUFzQiwwREFBNUI7QUFDQSxJQUFNMEIsRUFBRSxHQUFHLEdBQVgsQyxDQUFnQjs7QUFDaEIsSUFBTW5jLE9BQU8sR0FBRyx3QkFBTUEsT0FBdEI7QUFFQTs7Ozs7OztBQU1lLGtCQUFVbU0sUUFBVixFQUFvQi9KLE9BQXBCLEVBQTZCO0FBQUEsOEJBQ0ksd0NBQTBCK0osUUFBMUIsRUFBb0MvSixPQUFwQyxDQURKO0FBQUEsTUFDbEN3WSxjQURrQyx5QkFDbENBLGNBRGtDO0FBQUEsTUFDbEJNLGlCQURrQix5QkFDbEJBLGlCQURrQjs7QUFHMUMsT0FBSyxJQUFJM1MsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzJTLGlCQUFpQixDQUFDalcsTUFBdEMsRUFBOENzRCxDQUFDLEVBQS9DLEVBQW1EO0FBQ2pELFFBQUkyUyxpQkFBaUIsQ0FBQzNTLENBQUQsQ0FBckIsRUFBMEI7QUFDeEI2VCxpQ0FBMkIsQ0FBQ2xCLGlCQUFpQixDQUFDM1MsQ0FBRCxDQUFqQixDQUFxQjBULElBQXRCLEVBQTRCZixpQkFBaUIsQ0FBQzNTLENBQUQsQ0FBakIsQ0FBcUJ5VCxJQUFqRCxFQUF1RHBCLGNBQXZELENBQTNCO0FBQ0Q7QUFDRjtBQUNGO0FBRUQ7Ozs7Ozs7Ozs7OztBQVdBLFNBQVN3QiwyQkFBVCxDQUFxQ0MsUUFBckMsRUFBK0NqQixXQUEvQyxFQUE0RFIsY0FBNUQsRUFBNEU7QUFDMUUsTUFBTTBCLEVBQUUsR0FBR0Msc0JBQXNCLENBQUMzQixjQUFjLENBQUNRLFdBQVcsQ0FBQyxDQUFELENBQVosQ0FBZCxDQUErQkcsUUFBL0IsQ0FBd0MsQ0FBeEMsRUFBMkNyTyxPQUEzQyxDQUFtRHFDLE1BQXBELENBQWpDOztBQUNBLE1BQU1pTixFQUFFLEdBQUdELHNCQUFzQixDQUFDM0IsY0FBYyxDQUFDUSxXQUFXLENBQUMsQ0FBRCxDQUFaLENBQWQsQ0FBK0JHLFFBQS9CLENBQXdDLENBQXhDLEVBQTJDck8sT0FBM0MsQ0FBbURxQyxNQUFwRCxDQUFqQzs7QUFGMEUsK0JBSTNDa04saUNBQWlDLENBQUNILEVBQUQsRUFBS0UsRUFBTCxDQUpVO0FBQUEsTUFJbEVFLFFBSmtFLDBCQUlsRUEsUUFKa0U7QUFBQSxNQUl4REMsUUFKd0QsMEJBSXhEQSxRQUp3RCxFQU0xRTs7O0FBQ0FOLFVBQVEsQ0FBQ08sT0FBVCxDQUFpQixVQUFVNVgsS0FBVixFQUFpQjtBQUNoQzZYLCtCQUEyQixDQUFDSCxRQUFELEVBQVdDLFFBQVgsRUFBcUIzWCxLQUFyQixFQUE0Qm9XLFdBQTVCLEVBQXlDUixjQUF6QyxFQUF5RDBCLEVBQUUsQ0FBQzNVLENBQUgsQ0FBSzFDLE1BQUwsR0FBY3VYLEVBQUUsQ0FBQzdVLENBQUgsQ0FBSzFDLE1BQTVFLENBQTNCO0FBQ0QsR0FGRDtBQUdEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7OztBQWFBLFNBQVM0WCwyQkFBVCxDQUFxQ0gsUUFBckMsRUFBK0NDLFFBQS9DLEVBQXlEWixVQUF6RCxFQUFxRVgsV0FBckUsRUFBa0ZSLGNBQWxGLEVBQWtHa0MsY0FBbEcsRUFBa0g7QUFDaEgsTUFBTUMsT0FBTyxHQUFHLENBQUNoQixVQUFVLEdBQUdYLFdBQVcsQ0FBQyxDQUFELENBQXpCLEtBQWlDQSxXQUFXLENBQUMsQ0FBRCxDQUFYLEdBQWlCQSxXQUFXLENBQUMsQ0FBRCxDQUE3RCxDQUFoQjs7QUFDQSxNQUFNNEIscUJBQXFCLEdBQUdDLGdDQUFnQyxDQUFDUCxRQUFELEVBQVdDLFFBQVgsRUFBcUJJLE9BQXJCLEVBQThCRCxjQUE5QixDQUE5RDs7QUFFQSxNQUFNSSxVQUFVLEdBQUd0QyxjQUFjLENBQUNRLFdBQVcsQ0FBQyxDQUFELENBQVosQ0FBZCxDQUErQkcsUUFBL0IsQ0FBd0MsQ0FBeEMsQ0FBbkI7O0FBRUEsTUFBSVgsY0FBYyxDQUFDbUIsVUFBRCxDQUFkLENBQTJCUixRQUEvQixFQUF5QztBQUN2QzRCLDRCQUF3QixDQUFDSCxxQkFBRCxFQUF3QnBDLGNBQWMsQ0FBQ21CLFVBQUQsQ0FBZCxDQUEyQnpLLE9BQW5ELEVBQTRENEwsVUFBNUQsQ0FBeEI7QUFDRCxHQUZELE1BRU87QUFDTEUsMkJBQXVCLENBQUNKLHFCQUFELEVBQXdCcEMsY0FBYyxDQUFDbUIsVUFBRCxDQUFkLENBQTJCekssT0FBbkQsRUFBNEQ0TCxVQUE1RCxDQUF2QjtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozs7OztBQVFBLFNBQVNULGlDQUFULENBQTJDSCxFQUEzQyxFQUErQ0UsRUFBL0MsRUFBbUQ7QUFDakQsTUFBTWEsU0FBUyxHQUFHQyx1QkFBdUIsQ0FBQ2hCLEVBQUQsQ0FBekM7O0FBQ0EsTUFBTWlCLFNBQVMsR0FBR0QsdUJBQXVCLENBQUNkLEVBQUQsQ0FBekM7O0FBRUEsTUFBTWdCLFdBQVcsR0FBR25LLElBQUksQ0FBQzlRLEdBQUwsQ0FDbEI4USxJQUFJLENBQUNvSyxJQUFMLENBQVVKLFNBQVMsQ0FBQ0EsU0FBUyxDQUFDcFksTUFBVixHQUFtQixDQUFwQixDQUFULEdBQWtDa1gsRUFBNUMsQ0FEa0IsRUFFbEI5SSxJQUFJLENBQUNvSyxJQUFMLENBQVVGLFNBQVMsQ0FBQ0EsU0FBUyxDQUFDdFksTUFBVixHQUFtQixDQUFwQixDQUFULEdBQWtDa1gsRUFBNUMsQ0FGa0IsQ0FBcEI7O0FBS0EsTUFBTXVCLGFBQWEsR0FBR0MsOEJBQThCLENBQUNOLFNBQUQsQ0FBcEQ7O0FBQ0EsTUFBTU8sYUFBYSxHQUFHRCw4QkFBOEIsQ0FBQ0osU0FBRCxDQUFwRDs7QUFFQSxNQUFNTSxTQUFTLEdBQUdMLFdBQVcsR0FBR2hCLEVBQUUsQ0FBQzdVLENBQUgsQ0FBSzFDLE1BQXJDO0FBQ0EsTUFBTTZZLFNBQVMsR0FBR04sV0FBVyxHQUFHbEIsRUFBRSxDQUFDM1UsQ0FBSCxDQUFLMUMsTUFBckMsQ0FiaUQsQ0FlakQ7O0FBQ0EsTUFBTThZLFlBQVksR0FBR0MscUJBQXFCLENBQUNILFNBQUQsRUFBWUgsYUFBWixDQUExQzs7QUFDQSxNQUFNTyxZQUFZLEdBQUdELHFCQUFxQixDQUFDRixTQUFELEVBQVlGLGFBQVosQ0FBMUM7O0FBRUEsTUFBTU0sU0FBUyxHQUFHQyxrQkFBa0IsQ0FBQzdCLEVBQUQsRUFBS3VCLFNBQUwsQ0FBcEM7O0FBQ0EsTUFBTU8sU0FBUyxHQUFHRCxrQkFBa0IsQ0FBQzNCLEVBQUQsRUFBS3NCLFNBQUwsQ0FBcEM7O0FBRUEsTUFBTU8sZ0JBQWdCLEdBQUdDLG1CQUFtQixDQUFDUCxZQUFELEVBQWVHLFNBQWYsQ0FBNUM7O0FBQ0EsTUFBTUssZ0JBQWdCLEdBQUdELG1CQUFtQixDQUFDTCxZQUFELEVBQWVHLFNBQWYsQ0FBNUM7O0FBRUEsTUFBTUksR0FBRyxHQUFHQyx1QkFBdUIsQ0FBQ25DLEVBQUQsRUFBSytCLGdCQUFMLENBQW5DOztBQUNBLE1BQU1LLEdBQUcsR0FBR0QsdUJBQXVCLENBQUNqQyxFQUFELEVBQUsrQixnQkFBTCxDQUFuQyxDQTFCaUQsQ0E0QmpEOzs7QUFDQUksa0NBQWdDLENBQUNILEdBQUQsRUFBTUUsR0FBTixDQUFoQzs7QUFFQSxTQUFPRSw0QkFBNEIsQ0FBQ0osR0FBRCxFQUFNRSxHQUFOLENBQW5DO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7QUFTQSxTQUFTdEIsdUJBQVQsQ0FBaUNKLHFCQUFqQyxFQUF3RDFMLE9BQXhELEVBQWlFdU4sa0JBQWpFLEVBQXFGO0FBQ25GLE1BQU10UCxNQUFNLEdBQUcsRUFBZjs7QUFFQSxPQUFLLElBQUloSCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHeVUscUJBQXFCLENBQUNyVixDQUF0QixDQUF3QjFDLE1BQTVDLEVBQW9Ec0QsQ0FBQyxFQUFyRCxFQUF5RDtBQUN2RGdILFVBQU0sQ0FBQ2pMLElBQVAsQ0FBWTtBQUNWcUQsT0FBQyxFQUFFcVYscUJBQXFCLENBQUNyVixDQUF0QixDQUF3QlksQ0FBeEIsQ0FETztBQUVWWCxPQUFDLEVBQUVvVixxQkFBcUIsQ0FBQ3BWLENBQXRCLENBQXdCVyxDQUF4QjtBQUZPLEtBQVo7QUFJRDs7QUFFRCxNQUFNdVcsT0FBTyxHQUFHLHFCQUNkdlAsTUFEYyxFQUVkLElBRmMsRUFHZHNQLGtCQUFrQixDQUFDcGMsaUJBSEwsRUFJZG9jLGtCQUFrQixDQUFDdGIsZUFKTCxFQUtkc2Isa0JBQWtCLENBQUNsYixhQUxMLEVBTWQsMkJBTmMsRUFPZCxJQVBjLEVBUWQsSUFSYyxDQUFoQjtBQVdBLE1BQU04WCxnQkFBZ0IsR0FBR2hCLHNCQUFzQixDQUFDaUIsYUFBdkIsRUFBekI7O0FBRUEsTUFBSSxDQUFDRCxnQkFBZ0IsQ0FBQ25LLE9BQUQsQ0FBckIsRUFBZ0M7QUFDOUJtSyxvQkFBZ0IsQ0FBQ25LLE9BQUQsQ0FBaEIsR0FBNEIsRUFBNUI7QUFDRDs7QUFFRCxNQUFNcUssY0FBYyxHQUFHRixnQkFBZ0IsQ0FBQ25LLE9BQUQsQ0FBdkM7O0FBRUEsTUFBSSxDQUFDcUssY0FBYyxDQUFDQyxXQUFwQixFQUFpQztBQUMvQkQsa0JBQWMsQ0FBQ0MsV0FBZixHQUE2QixFQUE3QjtBQUNBRCxrQkFBYyxDQUFDQyxXQUFmLENBQTJCbFMsSUFBM0IsR0FBa0MsRUFBbEM7QUFDRCxHQUhELE1BR08sSUFBSSxDQUFDaVMsY0FBYyxDQUFDQyxXQUFmLENBQTJCbFMsSUFBaEMsRUFBc0M7QUFDM0NpUyxrQkFBYyxDQUFDQyxXQUFmLENBQTJCbFMsSUFBM0IsR0FBa0MsRUFBbEM7QUFDRDs7QUFFRGlTLGdCQUFjLENBQUNDLFdBQWYsQ0FBMkJsUyxJQUEzQixDQUFnQ3BGLElBQWhDLENBQXFDd2EsT0FBTyxDQUFDQyxtQkFBUixDQUE0QixLQUE1QixDQUFyQztBQUVBL2UsU0FBTyxDQUFDd0IsVUFBUixDQUFtQk8sT0FBbkIsQ0FBMkI4RCxxQkFBM0IsQ0FDRWdaLGtCQUFrQixDQUFDcGMsaUJBRHJCLEVBRUVvYyxrQkFBa0IsQ0FBQ3RiLGVBRnJCLEVBR0VzYixrQkFBa0IsQ0FBQ2xiLGFBSHJCO0FBS0Q7QUFFRDs7Ozs7Ozs7Ozs7O0FBVUEsU0FBU3daLHdCQUFULENBQWtDSCxxQkFBbEMsRUFBeUQxTCxPQUF6RCxFQUFrRXVOLGtCQUFsRSxFQUFzRjtBQUNwRixNQUFNcEQsZ0JBQWdCLEdBQUdoQixzQkFBc0IsQ0FBQ2lCLGFBQXZCLEVBQXpCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHRixnQkFBZ0IsQ0FBQ25LLE9BQUQsQ0FBdkM7O0FBRUEsTUFBSSxDQUFDcUssY0FBTCxFQUFxQjtBQUNuQixVQUFNLElBQUkxWSxLQUFKLENBQVUsMEVBQVYsQ0FBTjtBQUNELEdBTm1GLENBUXBGO0FBQ0E7OztBQUNBLE1BQUkrYixhQUFKOztBQUVBLE9BQUssSUFBSXpXLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdvVCxjQUFjLENBQUNDLFdBQWYsQ0FBMkJsUyxJQUEzQixDQUFnQ3pFLE1BQXBELEVBQTREc0QsQ0FBQyxFQUE3RCxFQUFpRTtBQUMvRCxRQUFJb1QsY0FBYyxDQUFDQyxXQUFmLENBQTJCbFMsSUFBM0IsQ0FBZ0NuQixDQUFoQyxFQUFtQzVFLGFBQW5DLEtBQXFEa2Isa0JBQWtCLENBQUNsYixhQUE1RSxFQUEyRjtBQUN6RnFiLG1CQUFhLEdBQUd6VyxDQUFoQjtBQUNBO0FBQ0Q7QUFDRjs7QUFFRCxNQUFNMFcsVUFBVSxHQUFHdEQsY0FBYyxDQUFDQyxXQUFmLENBQTJCbFMsSUFBM0IsQ0FBZ0NzVixhQUFoQyxDQUFuQjtBQUNBLE1BQU16UCxNQUFNLEdBQUcsRUFBZjs7QUFFQSxPQUFLLElBQUloSCxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHeVUscUJBQXFCLENBQUNyVixDQUF0QixDQUF3QjFDLE1BQTVDLEVBQW9Ec0QsRUFBQyxFQUFyRCxFQUF5RDtBQUN2RGdILFVBQU0sQ0FBQ2pMLElBQVAsQ0FBWTtBQUNWcUQsT0FBQyxFQUFFcVYscUJBQXFCLENBQUNyVixDQUF0QixDQUF3QlksRUFBeEIsQ0FETztBQUVWWCxPQUFDLEVBQUVvVixxQkFBcUIsQ0FBQ3BWLENBQXRCLENBQXdCVyxFQUF4QjtBQUZPLEtBQVo7QUFJRDs7QUFFRCxNQUFNMlcsY0FBYyxHQUFHLHFCQUNyQjNQLE1BRHFCLEVBRXJCLElBRnFCLEVBR3JCMFAsVUFBVSxDQUFDeGMsaUJBSFUsRUFJckJ3YyxVQUFVLENBQUMxYixlQUpVLEVBS3JCMGIsVUFBVSxDQUFDdGIsYUFMVSxFQU1yQnNiLFVBQVUsQ0FBQzViLEdBTlUsRUFPckIsSUFQcUIsRUFRckIsSUFScUIsQ0FBdkI7QUFXQXNZLGdCQUFjLENBQUNDLFdBQWYsQ0FBMkJsUyxJQUEzQixDQUFnQ3NWLGFBQWhDLElBQWlERSxjQUFjLENBQUNILG1CQUFmLENBQW1DLEtBQW5DLENBQWpEO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7OztBQWNBLFNBQVM5QixnQ0FBVCxDQUEwQ2tDLElBQTFDLEVBQWdEQyxJQUFoRCxFQUFzRHJDLE9BQXRELEVBQStERCxjQUEvRCxFQUErRTtBQUM3RSxNQUFNdUMsT0FBTyxHQUFHO0FBQ2QxWCxLQUFDLEVBQUUsRUFEVztBQUVkQyxLQUFDLEVBQUU7QUFGVyxHQUFoQjtBQUtBLE1BQU15VSxRQUFRLEdBQUdTLGNBQWMsR0FBR3FDLElBQUksQ0FBQ0csQ0FBUixHQUFZRixJQUFJLENBQUNFLENBQWhEOztBQUVBLE9BQUssSUFBSS9XLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc0VyxJQUFJLENBQUN4WCxDQUFMLENBQU8xQyxNQUEzQixFQUFtQ3NELENBQUMsRUFBcEMsRUFBd0M7QUFDdEMsUUFBSThULFFBQVEsQ0FBQzlULENBQUQsQ0FBWixFQUFpQjtBQUNmOFcsYUFBTyxDQUFDMVgsQ0FBUixDQUFVckQsSUFBVixDQUFlLENBQUMsSUFBSXlZLE9BQUwsSUFBZ0JvQyxJQUFJLENBQUN4WCxDQUFMLENBQU9ZLENBQVAsQ0FBaEIsR0FBNEJ3VSxPQUFPLEdBQUdxQyxJQUFJLENBQUN6WCxDQUFMLENBQU9ZLENBQVAsQ0FBckQ7QUFDQThXLGFBQU8sQ0FBQ3pYLENBQVIsQ0FBVXRELElBQVYsQ0FBZSxDQUFDLElBQUl5WSxPQUFMLElBQWdCb0MsSUFBSSxDQUFDdlgsQ0FBTCxDQUFPVyxDQUFQLENBQWhCLEdBQTRCd1UsT0FBTyxHQUFHcUMsSUFBSSxDQUFDeFgsQ0FBTCxDQUFPVyxDQUFQLENBQXJEO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPOFcsT0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7QUFRQSxTQUFTVCw0QkFBVCxDQUFzQ0osR0FBdEMsRUFBMkNFLEdBQTNDLEVBQWdEO0FBQzlDLE1BQU1oQyxRQUFRLEdBQUc7QUFDZi9VLEtBQUMsRUFBRSxFQURZO0FBRWZDLEtBQUMsRUFBRSxFQUZZO0FBR2YwWCxLQUFDLEVBQUU7QUFIWSxHQUFqQjtBQUtBLE1BQU0zQyxRQUFRLEdBQUc7QUFDZmhWLEtBQUMsRUFBRSxFQURZO0FBRWZDLEtBQUMsRUFBRSxFQUZZO0FBR2YwWCxLQUFDLEVBQUU7QUFIWSxHQUFqQjs7QUFNQSxPQUFLLElBQUkvVyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHaVcsR0FBRyxDQUFDN1csQ0FBSixDQUFNMUMsTUFBMUIsRUFBa0NzRCxDQUFDLEVBQW5DLEVBQXVDO0FBQ3JDLFFBQUlpVyxHQUFHLENBQUNjLENBQUosQ0FBTS9XLENBQU4sS0FBWW1XLEdBQUcsQ0FBQ1ksQ0FBSixDQUFNL1csQ0FBTixDQUFoQixFQUEwQjtBQUN4Qm1VLGNBQVEsQ0FBQy9VLENBQVQsQ0FBV3JELElBQVgsQ0FBZ0JrYSxHQUFHLENBQUM3VyxDQUFKLENBQU1ZLENBQU4sQ0FBaEI7QUFDQW1VLGNBQVEsQ0FBQzlVLENBQVQsQ0FBV3RELElBQVgsQ0FBZ0JrYSxHQUFHLENBQUM1VyxDQUFKLENBQU1XLENBQU4sQ0FBaEI7QUFDQW1VLGNBQVEsQ0FBQzRDLENBQVQsQ0FBV2hiLElBQVgsQ0FBZ0JrYSxHQUFHLENBQUNjLENBQUosQ0FBTS9XLENBQU4sQ0FBaEI7QUFFQW9VLGNBQVEsQ0FBQ2hWLENBQVQsQ0FBV3JELElBQVgsQ0FBZ0JvYSxHQUFHLENBQUMvVyxDQUFKLENBQU1ZLENBQU4sQ0FBaEI7QUFDQW9VLGNBQVEsQ0FBQy9VLENBQVQsQ0FBV3RELElBQVgsQ0FBZ0JvYSxHQUFHLENBQUM5VyxDQUFKLENBQU1XLENBQU4sQ0FBaEI7QUFDQW9VLGNBQVEsQ0FBQzJDLENBQVQsQ0FBV2hiLElBQVgsQ0FBZ0JvYSxHQUFHLENBQUNZLENBQUosQ0FBTS9XLENBQU4sQ0FBaEI7QUFDRDtBQUNGOztBQUVELFNBQU87QUFDTG1VLFlBQVEsRUFBUkEsUUFESztBQUVMQyxZQUFRLEVBQVJBO0FBRkssR0FBUDtBQUlEO0FBRUQ7Ozs7Ozs7Ozs7QUFRQSxTQUFTZ0MsZ0NBQVQsQ0FBMENILEdBQTFDLEVBQStDRSxHQUEvQyxFQUFvRDtBQUNsRCxNQUFNYSxTQUFTLEdBQUdmLEdBQUcsQ0FBQzdXLENBQUosQ0FBTTFDLE1BQXhCO0FBRUEsTUFBSXVhLE9BQU8sR0FBRztBQUNaQyxnQkFBWSxFQUFFLENBREY7QUFFWkMseUJBQXFCLEVBQUVDO0FBRlgsR0FBZDs7QUFLQSxPQUFLLElBQUlGLFlBQVksR0FBRyxDQUF4QixFQUEyQkEsWUFBWSxHQUFHRixTQUExQyxFQUFxREUsWUFBWSxFQUFqRSxFQUFxRTtBQUNuRSxRQUFJckksS0FBSSxHQUFHcUksWUFBWCxDQURtRSxDQUduRTtBQUNBOztBQUNBLFFBQUlDLHFCQUFxQixHQUFHLENBQTVCOztBQUVBLFNBQUssSUFBSUUsVUFBVSxHQUFHLENBQXRCLEVBQXlCQSxVQUFVLEdBQUdMLFNBQXRDLEVBQWlESyxVQUFVLEVBQTNELEVBQStEO0FBQzdERiwyQkFBcUIsSUFBSSxTQUFDbEIsR0FBRyxDQUFDN1csQ0FBSixDQUFNeVAsS0FBTixJQUFjc0gsR0FBRyxDQUFDL1csQ0FBSixDQUFNaVksVUFBTixDQUFmLEVBQXFDLENBQXJDLGFBQTBDcEIsR0FBRyxDQUFDNVcsQ0FBSixDQUFNd1AsS0FBTixJQUFjc0gsR0FBRyxDQUFDOVcsQ0FBSixDQUFNZ1ksVUFBTixDQUF4RCxFQUE4RSxDQUE5RSxDQUF6QjtBQUVBeEksV0FBSTtBQUVKLFVBQUlBLEtBQUksS0FBS21JLFNBQWIsRUFBd0JuSSxLQUFJLEdBQUcsQ0FBUDtBQUN6Qjs7QUFFRCxRQUFJc0kscUJBQXFCLEdBQUdGLE9BQU8sQ0FBQ0UscUJBQXBDLEVBQTJEO0FBQ3pERixhQUFPLENBQUNFLHFCQUFSLEdBQWdDQSxxQkFBaEM7QUFDQUYsYUFBTyxDQUFDQyxZQUFSLEdBQXVCQSxZQUF2QjtBQUNEO0FBQ0Y7O0FBRUQsTUFBSXJJLElBQUksR0FBR29JLE9BQU8sQ0FBQ0MsWUFBbkI7O0FBRUFJLHFCQUFtQixDQUFDckIsR0FBRyxDQUFDN1csQ0FBTCxFQUFReVAsSUFBUixDQUFuQjs7QUFDQXlJLHFCQUFtQixDQUFDckIsR0FBRyxDQUFDNVcsQ0FBTCxFQUFRd1AsSUFBUixDQUFuQjs7QUFDQXlJLHFCQUFtQixDQUFDckIsR0FBRyxDQUFDYyxDQUFMLEVBQVFsSSxJQUFSLENBQW5CO0FBQ0Q7QUFFRDs7Ozs7Ozs7O0FBT0EsU0FBU3lJLG1CQUFULENBQTZCQyxHQUE3QixFQUFrQzlILEtBQWxDLEVBQXlDO0FBQ3ZDQSxPQUFLLElBQUk4SCxHQUFHLENBQUM3YSxNQUFKLEdBQWFvTyxJQUFJLENBQUMwTSxLQUFMLENBQVcvSCxLQUFLLEdBQUc4SCxHQUFHLENBQUM3YSxNQUF2QixDQUF0QjtBQUNBNmEsS0FBRyxDQUFDeGIsSUFBSixDQUFTZ1QsS0FBVCxDQUFld0ksR0FBZixFQUFvQkEsR0FBRyxDQUFDMWEsTUFBSixDQUFXLENBQVgsRUFBYzRTLEtBQWQsQ0FBcEI7QUFDQSxTQUFPOEgsR0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7O0FBU0EsU0FBU3JCLHVCQUFULENBQWlDbEcsQ0FBakMsRUFBb0N5SCxlQUFwQyxFQUFxRDtBQUNuRCxNQUFNQyxFQUFFLEdBQUc7QUFDVHRZLEtBQUMsRUFBRSxFQURNO0FBRVRDLEtBQUMsRUFBRSxFQUZNO0FBR1QwWCxLQUFDLEVBQUU7QUFITSxHQUFYLENBRG1ELENBT25EOztBQUNBLE9BQUssSUFBSVksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzNILENBQUMsQ0FBQzVRLENBQUYsQ0FBSTFDLE1BQUosR0FBYSxDQUFqQyxFQUFvQ2liLENBQUMsRUFBckMsRUFBeUM7QUFDdkM7QUFDQUQsTUFBRSxDQUFDdFksQ0FBSCxDQUFLckQsSUFBTCxDQUFVaVUsQ0FBQyxDQUFDNVEsQ0FBRixDQUFJdVksQ0FBSixDQUFWO0FBQ0FELE1BQUUsQ0FBQ3JZLENBQUgsQ0FBS3RELElBQUwsQ0FBVWlVLENBQUMsQ0FBQzNRLENBQUYsQ0FBSXNZLENBQUosQ0FBVjtBQUNBRCxNQUFFLENBQUNYLENBQUgsQ0FBS2hiLElBQUwsQ0FBVSxJQUFWLEVBSnVDLENBTXZDOztBQUNBLFFBQU02YixRQUFRLEdBQUcsQ0FBQzVILENBQUMsQ0FBQzVRLENBQUYsQ0FBSXVZLENBQUMsR0FBRyxDQUFSLElBQWEzSCxDQUFDLENBQUM1USxDQUFGLENBQUl1WSxDQUFKLENBQWQsS0FBeUJGLGVBQWUsQ0FBQ0UsQ0FBRCxDQUFmLEdBQXFCLENBQTlDLENBQWpCO0FBQ0EsUUFBTUUsUUFBUSxHQUFHLENBQUM3SCxDQUFDLENBQUMzUSxDQUFGLENBQUlzWSxDQUFDLEdBQUcsQ0FBUixJQUFhM0gsQ0FBQyxDQUFDM1EsQ0FBRixDQUFJc1ksQ0FBSixDQUFkLEtBQXlCRixlQUFlLENBQUNFLENBQUQsQ0FBZixHQUFxQixDQUE5QyxDQUFqQixDQVJ1QyxDQVV2Qzs7QUFDQSxTQUFLLElBQUkzWCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHeVgsZUFBZSxDQUFDRSxDQUFELENBQWYsR0FBcUIsQ0FBekMsRUFBNEMzWCxDQUFDLEVBQTdDLEVBQWlEO0FBQy9DMFgsUUFBRSxDQUFDdFksQ0FBSCxDQUFLckQsSUFBTCxDQUFVMmIsRUFBRSxDQUFDdFksQ0FBSCxDQUFLc1ksRUFBRSxDQUFDdFksQ0FBSCxDQUFLMUMsTUFBTCxHQUFjLENBQW5CLElBQXdCa2IsUUFBbEM7QUFDQUYsUUFBRSxDQUFDclksQ0FBSCxDQUFLdEQsSUFBTCxDQUFVMmIsRUFBRSxDQUFDclksQ0FBSCxDQUFLcVksRUFBRSxDQUFDclksQ0FBSCxDQUFLM0MsTUFBTCxHQUFjLENBQW5CLElBQXdCbWIsUUFBbEM7QUFDQUgsUUFBRSxDQUFDWCxDQUFILENBQUtoYixJQUFMLENBQVUsS0FBVjtBQUNEO0FBQ0Y7O0FBRUQsU0FBTzJiLEVBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7QUFVQSxTQUFTM0IsbUJBQVQsQ0FBNkIrQixXQUE3QixFQUEwQ0MsUUFBMUMsRUFBb0Q7QUFDbEQsTUFBTUMsR0FBRyxHQUFHLEVBQVo7O0FBRUEsT0FBSyxJQUFJaFksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzhYLFdBQVcsQ0FBQ3BiLE1BQWhDLEVBQXdDLEVBQUVzRCxDQUExQztBQUE2Q2dZLE9BQUcsQ0FBQ2hZLENBQUQsQ0FBSCxHQUFTQSxDQUFUO0FBQTdDOztBQUNBZ1ksS0FBRyxDQUFDQyxJQUFKLENBQVMsVUFBVTVJLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUN2QixXQUFPd0ksV0FBVyxDQUFDekksQ0FBRCxDQUFYLEdBQWlCeUksV0FBVyxDQUFDeEksQ0FBRCxDQUE1QixHQUFrQyxDQUFDLENBQW5DLEdBQXVDd0ksV0FBVyxDQUFDekksQ0FBRCxDQUFYLEdBQWlCeUksV0FBVyxDQUFDeEksQ0FBRCxDQUExRTtBQUNELEdBRkQ7QUFJQSxNQUFNNEksY0FBYyxHQUFHLEVBQXZCOztBQUVBLE9BQUssSUFBSWxZLEdBQUMsR0FBRyxDQUFiLEVBQWdCQSxHQUFDLEdBQUcrWCxRQUFRLENBQUNyYixNQUE3QixFQUFxQ3NELEdBQUMsRUFBdEMsRUFBMEM7QUFDeENrWSxrQkFBYyxDQUFDbmMsSUFBZixDQUFvQmdjLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDaFksR0FBRCxDQUFKLENBQTVCO0FBQ0Q7O0FBRUQsTUFBTW1ZLHFCQUFxQixHQUFHRCxjQUFjLENBQUNFLE1BQWYsQ0FBc0IsVUFBVWIsR0FBVixFQUFlYyxZQUFmLEVBQTZCclksQ0FBN0IsRUFBZ0M7QUFDbEYsUUFBSXFZLFlBQUosRUFBa0JkLEdBQUcsQ0FBQ3hiLElBQUosQ0FBU2lFLENBQVQ7QUFDbEIsV0FBT3VYLEdBQVA7QUFDRCxHQUg2QixFQUczQixFQUgyQixDQUE5QjtBQUtBLE1BQU1FLGVBQWUsR0FBRyxFQUF4Qjs7QUFFQSxPQUFLLElBQUl6WCxHQUFDLEdBQUcsQ0FBYixFQUFnQkEsR0FBQyxHQUFHbVkscUJBQXFCLENBQUN6YixNQUF0QixHQUErQixDQUFuRCxFQUFzRHNELEdBQUMsRUFBdkQsRUFBMkQ7QUFDekR5WCxtQkFBZSxDQUFDMWIsSUFBaEIsQ0FBcUJvYyxxQkFBcUIsQ0FBQ25ZLEdBQUMsR0FBRyxDQUFMLENBQXJCLEdBQStCbVkscUJBQXFCLENBQUNuWSxHQUFELENBQXpFO0FBQ0Q7O0FBRUQsU0FBT3lYLGVBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7O0FBUUEsU0FBUzdCLGtCQUFULENBQTRCdEMsT0FBNUIsRUFBcUNnRixRQUFyQyxFQUErQztBQUM3QyxNQUFNUCxRQUFRLEdBQUcsRUFBakI7O0FBRUEsT0FBSyxJQUFJL1gsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3NZLFFBQVEsR0FBRyxDQUEvQixFQUFrQ3RZLENBQUMsRUFBbkMsRUFBdUM7QUFDckMrWCxZQUFRLENBQUNoYyxJQUFULENBQWMsS0FBZDtBQUNEOztBQUVELE9BQUssSUFBSWlFLEdBQUMsR0FBRyxDQUFiLEVBQWdCQSxHQUFDLEdBQUdzVCxPQUFPLENBQUNsVSxDQUFSLENBQVUxQyxNQUE5QixFQUFzQ3NELEdBQUMsRUFBdkMsRUFBMkM7QUFDekMrWCxZQUFRLENBQUNoYyxJQUFULENBQWMsSUFBZDtBQUNEOztBQUVELFNBQU9nYyxRQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7OztBQVFBLFNBQVN0QyxxQkFBVCxDQUErQjZDLFFBQS9CLEVBQXlDQyxZQUF6QyxFQUF1RDtBQUNyRCxNQUFNQyxJQUFJLEdBQUcsS0FBS0YsUUFBUSxHQUFHLENBQWhCLENBQWI7QUFDQSxNQUFNRyxRQUFRLEdBQUcsQ0FBQ0QsSUFBRCxDQUFqQixDQUZxRCxDQUlyRDs7QUFDQSxPQUFLLElBQUl4WSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHc1ksUUFBUSxHQUFHLENBQS9CLEVBQWtDdFksQ0FBQyxFQUFuQyxFQUF1QztBQUNyQ3lZLFlBQVEsQ0FBQzFjLElBQVQsQ0FBYzBjLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDL2IsTUFBVCxHQUFrQixDQUFuQixDQUFSLEdBQWdDOGIsSUFBOUM7QUFDRDs7QUFFRCxTQUFPQyxRQUFRLENBQUNDLE1BQVQsQ0FBZ0JILFlBQWhCLENBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7QUFPQSxTQUFTeEQsdUJBQVQsQ0FBaUN6QixPQUFqQyxFQUEwQztBQUN4QyxNQUFJcUYsbUJBQW1CLEdBQUcsQ0FBQyxDQUFELENBQTFCOztBQUVBLE9BQUssSUFBSTNZLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdzVCxPQUFPLENBQUNsVSxDQUFSLENBQVUxQyxNQUE5QixFQUFzQ3NELENBQUMsRUFBdkMsRUFBMkM7QUFDekMsUUFBTTRZLGVBQWUsR0FBRzlOLElBQUksQ0FBQytOLElBQUwsQ0FBVSxTQUFDdkYsT0FBTyxDQUFDbFUsQ0FBUixDQUFVWSxDQUFWLElBQWVzVCxPQUFPLENBQUNsVSxDQUFSLENBQVVZLENBQUMsR0FBRyxDQUFkLENBQWhCLEVBQXFDLENBQXJDLGFBQTBDc1QsT0FBTyxDQUFDalUsQ0FBUixDQUFVVyxDQUFWLElBQWVzVCxPQUFPLENBQUNqVSxDQUFSLENBQVVXLENBQUMsR0FBRyxDQUFkLENBQXpELEVBQThFLENBQTlFLENBQVYsQ0FBeEI7QUFFQTJZLHVCQUFtQixDQUFDNWMsSUFBcEIsQ0FBeUI0YyxtQkFBbUIsQ0FBQzNZLENBQUMsR0FBRyxDQUFMLENBQW5CLEdBQTZCNFksZUFBdEQ7QUFDRDs7QUFFRCxTQUFPRCxtQkFBUDtBQUNEO0FBRUQ7Ozs7Ozs7OztBQU9BLFNBQVN2RCw4QkFBVCxDQUF3QzBELFFBQXhDLEVBQWtEO0FBQ2hELE1BQU1QLFlBQVksR0FBRyxFQUFyQjs7QUFFQSxPQUFLLElBQUl2WSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHOFksUUFBUSxDQUFDcGMsTUFBN0IsRUFBcUNzRCxDQUFDLEVBQXRDLEVBQTBDO0FBQ3hDdVksZ0JBQVksQ0FBQ3hjLElBQWIsQ0FBa0IrYyxRQUFRLENBQUM5WSxDQUFELENBQVIsR0FBYzhZLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDcGMsTUFBVCxHQUFrQixDQUFuQixDQUF4QztBQUNEOztBQUVELFNBQU82YixZQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7O0FBT0EsU0FBU3ZFLHNCQUFULENBQWdDaE4sTUFBaEMsRUFBd0M7QUFDdEMsTUFBTWdKLENBQUMsR0FBRztBQUNSNVEsS0FBQyxFQUFFLEVBREs7QUFFUkMsS0FBQyxFQUFFO0FBRkssR0FBVixDQURzQyxDQU10Qzs7QUFDQSxPQUFLLElBQUlXLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdnSCxNQUFNLENBQUN0SyxNQUEzQixFQUFtQ3NELENBQUMsRUFBcEMsRUFBd0M7QUFDdENnUSxLQUFDLENBQUM1USxDQUFGLENBQUlZLENBQUosSUFBU2dILE1BQU0sQ0FBQ2hILENBQUQsQ0FBTixDQUFVWixDQUFuQjtBQUNBNFEsS0FBQyxDQUFDM1EsQ0FBRixDQUFJVyxDQUFKLElBQVNnSCxNQUFNLENBQUNoSCxDQUFELENBQU4sQ0FBVVgsQ0FBbkI7QUFDRCxHQVZxQyxDQVl0Qzs7O0FBQ0EyUSxHQUFDLENBQUM1USxDQUFGLENBQUlyRCxJQUFKLENBQVNpVSxDQUFDLENBQUM1USxDQUFGLENBQUksQ0FBSixDQUFUO0FBQ0E0USxHQUFDLENBQUMzUSxDQUFGLENBQUl0RCxJQUFKLENBQVNpVSxDQUFDLENBQUMzUSxDQUFGLENBQUksQ0FBSixDQUFUOztBQUVBMFoseUJBQXVCLENBQUMvSSxDQUFELENBQXZCOztBQUVBLFNBQU9BLENBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7QUFPQSxTQUFTK0ksdUJBQVQsQ0FBaUN6RixPQUFqQyxFQUEwQztBQUN4QyxNQUFNNVcsTUFBTSxHQUFHNFcsT0FBTyxDQUFDbFUsQ0FBUixDQUFVMUMsTUFBekI7QUFDQSxNQUFNc2MsWUFBWSxHQUFHMUYsT0FBTyxDQUFDbFUsQ0FBUixDQUFVZ1osTUFBVixDQUFpQmEsYUFBakIsSUFBa0N2YyxNQUF2RDtBQUNBLE1BQUl3YyxRQUFRLEdBQUcsQ0FBZjs7QUFFQSxPQUFLLElBQUl2VyxDQUFDLEdBQUcsQ0FBUixFQUFXM0MsQ0FBQyxHQUFHLENBQWYsRUFBa0J1QixDQUFDLEdBQUcsQ0FBM0IsRUFBOEJvQixDQUFDLEdBQUdqRyxNQUFsQyxFQUEwQ2lHLENBQUMsRUFBM0MsRUFBK0M7QUFDN0N1VyxZQUFRLElBQUksQ0FBQzVGLE9BQU8sQ0FBQ2xVLENBQVIsQ0FBVVksQ0FBVixJQUFlZ1osWUFBaEIsS0FBaUMxRixPQUFPLENBQUNqVSxDQUFSLENBQVVrQyxDQUFWLElBQWUrUixPQUFPLENBQUNqVSxDQUFSLENBQVVzRCxDQUFWLENBQWhELENBQVo7QUFDQTNDLEtBQUM7QUFDRHVCLEtBQUM7QUFDRCxRQUFJdkIsQ0FBQyxJQUFJdEQsTUFBVCxFQUFpQnNELENBQUMsR0FBRyxDQUFKO0FBQ2pCLFFBQUl1QixDQUFDLElBQUk3RSxNQUFULEVBQWlCNkUsQ0FBQyxHQUFHLENBQUo7QUFDbEI7O0FBRUQsTUFBSTJYLFFBQVEsR0FBRyxDQUFmLEVBQWtCO0FBQ2hCNUYsV0FBTyxDQUFDbFUsQ0FBUixDQUFVK1osT0FBVjtBQUNBN0YsV0FBTyxDQUFDalUsQ0FBUixDQUFVOFosT0FBVjtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozs7O0FBT0EsU0FBU0YsYUFBVCxDQUF1QkcsS0FBdkIsRUFBOEJDLEdBQTlCLEVBQW1DO0FBQ2pDLFNBQU9ELEtBQUssR0FBR0MsR0FBZjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4akJEOzs7O0FBRUEsSUFBTUMsVUFBVSxHQUFHLDRCQUFtQkMsaUJBQW5CLENBQXFDQyxRQUF4RDs7QUFFZSxTQUFTQyxnQkFBVCxDQUEwQnRpQixLQUExQixFQUE0RjtBQUFBLE1BQTNEdWlCLFdBQTJELHVFQUE3QyxTQUE2QztBQUFBLE1BQWxDQyxPQUFrQyx1RUFBeEIsU0FBd0I7QUFBQSxNQUFiQyxXQUFhO0FBQ3pHLE1BQU1DLFFBQVEsR0FBR1AsVUFBVSxDQUFDMWUsSUFBWCxDQUFnQixVQUFBa2YsV0FBVztBQUFBLFdBQUlBLFdBQVcsQ0FBQ0MsU0FBWixLQUEwQkwsV0FBOUI7QUFBQSxHQUEzQixDQUFqQjtBQUNBLE1BQU1waUIsSUFBSSxHQUFHdWlCLFFBQVEsQ0FBQ0csSUFBVCxDQUFjcGYsSUFBZCxDQUFtQixVQUFBcWYsTUFBTTtBQUFBLFdBQUlBLE1BQU0sQ0FBQ0YsU0FBUCxLQUFxQkosT0FBekI7QUFBQSxHQUF6QixDQUFiO0FBRUEsTUFBTXZmLFFBQVEsR0FBRztBQUNmOGYseUNBQXFDLEVBQUU7QUFDckNILGVBQVMsRUFBRUYsUUFBUSxDQUFDRSxTQURpQjtBQUVyQ0ksNEJBQXNCLEVBQUVOLFFBQVEsQ0FBQ00sc0JBRkk7QUFHckNDLGlCQUFXLEVBQUVQLFFBQVEsQ0FBQ087QUFIZSxLQUR4QjtBQU1mQyxnQkFBWSxFQUFFbGpCLEtBTkM7QUFPZm1qQix3QkFBb0IsRUFBRSxRQVBQO0FBU2ZDLHFDQUFpQyxFQUFFO0FBQ2pDUixlQUFTLEVBQUV6aUIsSUFBSSxDQUFDeWlCLFNBRGlCO0FBRWpDSSw0QkFBc0IsRUFBRTdpQixJQUFJLENBQUM2aUIsc0JBRkk7QUFHakNDLGlCQUFXLEVBQUU5aUIsSUFBSSxDQUFDOGlCO0FBSGU7QUFUcEIsR0FBakI7O0FBZ0JBLE1BQUlSLFdBQUosRUFBaUI7QUFDZixRQUFNWSxPQUFPLEdBQUdsakIsSUFBSSxDQUFDbWpCLFFBQUwsQ0FBYzdmLElBQWQsQ0FBbUIsVUFBQThmLFNBQVM7QUFBQSxhQUFJQSxTQUFTLENBQUNYLFNBQVYsS0FBd0JILFdBQTVCO0FBQUEsS0FBNUIsQ0FBaEI7QUFFQXhmLFlBQVEsQ0FBQ21nQixpQ0FBVCxDQUEyQ0kseUNBQTNDLEdBQXVGO0FBQ3JGWixlQUFTLEVBQUVTLE9BQU8sQ0FBQ1QsU0FEa0U7QUFFckZJLDRCQUFzQixFQUFFSyxPQUFPLENBQUNMLHNCQUZxRDtBQUdyRkMsaUJBQVcsRUFBRUksT0FBTyxDQUFDSjtBQUhnRSxLQUF2RjtBQU1BaGdCLFlBQVEsQ0FBQ3dnQiw2QkFBVCxHQUF5Q0osT0FBTyxDQUFDSywwQkFBakQ7QUFDRCxHQVZELE1BVU87QUFDTHpnQixZQUFRLENBQUN3Z0IsNkJBQVQsR0FBeUN0akIsSUFBSSxDQUFDdWpCLDBCQUE5QztBQUNEOztBQUVELFNBQU96Z0IsUUFBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0Q7Ozs7Ozs7QUFPZSxvQkFBWTtBQUN6Qjs7QUFDQTtBQUNBLE1BQUkwZ0IsQ0FBQyxHQUFHLElBQUlDLElBQUosR0FBV0MsT0FBWCxFQUFSOztBQUVBLE1BQUksT0FBT0MsV0FBUCxLQUF1QixXQUF2QixJQUFzQyxPQUFPQSxXQUFXLENBQUNDLEdBQW5CLEtBQTJCLFVBQXJFLEVBQWlGO0FBQy9FSixLQUFDLElBQUlHLFdBQVcsQ0FBQ0MsR0FBWixFQUFMLENBRCtFLENBQ3ZEO0FBQ3pCOztBQUNELFNBQU8sbUVBQW1FQyxPQUFuRSxDQUEyRSxPQUEzRSxFQUFvRixVQUFVbkwsQ0FBVixFQUFhO0FBQ3RHLFFBQU0vTixDQUFDLEdBQUcsQ0FBQzZZLENBQUMsR0FBR2hRLElBQUksQ0FBQ3NRLE1BQUwsS0FBZ0IsRUFBckIsSUFBMkIsRUFBM0IsR0FBZ0MsQ0FBMUM7QUFFQU4sS0FBQyxHQUFHaFEsSUFBSSxDQUFDME0sS0FBTCxDQUFXc0QsQ0FBQyxHQUFHLEVBQWYsQ0FBSjtBQUNBLFdBQU8sQ0FBQzlLLENBQUMsS0FBSyxHQUFOLEdBQVkvTixDQUFaLEdBQWlCQSxDQUFDLEdBQUcsR0FBTCxHQUFZLEdBQTdCLEVBQWtDbU8sUUFBbEMsQ0FBMkMsRUFBM0MsQ0FBUDtBQUNELEdBTE0sQ0FBUDtBQU1EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkQ7Ozs7QUFFZSxTQUFTaUwsc0NBQVQsQ0FBZ0RuZCxjQUFoRCxFQUFnRTtBQUM3RSxNQUFJLENBQUNBLGNBQUwsRUFBcUI7QUFDbkI7QUFDRDs7QUFFRCxNQUFNNkssT0FBTyxHQUFHN0ssY0FBYyxDQUFDRSxLQUFmLENBQXFCMkssT0FBckM7O0FBQ0EsTUFBTXVTLG1CQUFtQixHQUFHLDBCQUFZQyxRQUFaLENBQXFCelMsR0FBckIsQ0FBeUIscUJBQXpCLEVBQWdEQyxPQUFoRCxDQUE1Qjs7QUFFQSxTQUFPdVMsbUJBQW1CLENBQUNFLGlCQUEzQjtBQUNEOzs7Ozs7Ozs7Ozs7O0FDWEQsOEQ7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsK0QiLCJmaWxlIjoib2hpZi1zZWdtZW50YXRpb24tcGx1Z2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY29ybmVyc3RvbmUtY29yZVwiKSwgcmVxdWlyZShcImNvcm5lcnN0b25lLW1hdGhcIiksIHJlcXVpcmUoXCJjb3JuZXJzdG9uZS10b29sc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIm9oaWYtc2VnbWVudGF0aW9uLXBsdWdpblwiLCBbXCJjb3JuZXJzdG9uZS1jb3JlXCIsIFwiY29ybmVyc3RvbmUtbWF0aFwiLCBcImNvcm5lcnN0b25lLXRvb2xzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm9oaWYtc2VnbWVudGF0aW9uLXBsdWdpblwiXSA9IGZhY3RvcnkocmVxdWlyZShcImNvcm5lcnN0b25lLWNvcmVcIiksIHJlcXVpcmUoXCJjb3JuZXJzdG9uZS1tYXRoXCIpLCByZXF1aXJlKFwiY29ybmVyc3RvbmUtdG9vbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm9oaWYtc2VnbWVudGF0aW9uLXBsdWdpblwiXSA9IGZhY3Rvcnkocm9vdFtcImNvcm5lcnN0b25lLWNvcmVcIl0sIHJvb3RbXCJjb3JuZXJzdG9uZS1tYXRoXCJdLCByb290W1wiY29ybmVyc3RvbmUtdG9vbHNcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY29ybmVyc3RvbmVfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Nvcm5lcnN0b25lX21hdGhfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jb3JuZXJzdG9uZV90b29sc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBqc29uID0gYHtcclxuICBcIlNlZ21lbnRhdGlvbkNhdGVnb3J5VHlwZUNvbnRleHROYW1lXCI6IFwiU2VnbWVudGF0aW9uIGNhdGVnb3J5IGFuZCB0eXBlIC0gM0QgU2xpY2VyIEdlbmVyYWwgQW5hdG9teSBsaXN0XCIsXHJcbiAgXCJAc2NoZW1hXCI6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3FpaWNyL2RjbXFpL21hc3Rlci9kb2Mvc2NoZW1hcy9zZWdtZW50LWNvbnRleHQtc2NoZW1hLmpzb24jXCIsXHJcbiAgXCJTZWdtZW50YXRpb25Db2Rlc1wiOiB7XHJcbiAgICBcIkNhdGVnb3J5XCI6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJUaXNzdWVcIixcclxuICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiODU3NTYwMDdcIixcclxuICAgICAgICBcImNpZFwiOiBcIjcwNTFcIixcclxuICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwNDAzMDBcIixcclxuICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDAwNTBcIixcclxuICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJTZWdtZW50YXRpb24gUHJvcGVydHkgQ2F0ZWdvcmllc1wiLFxyXG4gICAgICAgIFwiVHlwZVwiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDEyOCxcclxuICAgICAgICAgICAgICAxNzQsXHJcbiAgICAgICAgICAgICAgMTI4XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJUaXNzdWVcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInRpc3N1ZVwiLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDQwMzAwXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EMDA1MFwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiODU3NTYwMDdcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgMjE2LFxyXG4gICAgICAgICAgICAgIDEwMSxcclxuICAgICAgICAgICAgICA3OVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQXJ0ZXJ5XCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJhcnRlcnlcIixcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTY2XCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDU1NTgwNlwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNDEwNjZcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI3NTk4OTAwNlwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAyMzAsXHJcbiAgICAgICAgICAgICAgMjIwLFxyXG4gICAgICAgICAgICAgIDcwXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJCb2R5IGZhdFwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiZmF0XCIsXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2NlwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAzNDQzMzVcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJGLTAzRDM4XCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDgzMDAwMDlcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgMjQxLFxyXG4gICAgICAgICAgICAgIDIxNCxcclxuICAgICAgICAgICAgICAxNDVcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkJvbmVcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImJvbmVcIixcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTY2XCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDI2Mjk1MFwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDAxNkVcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI3MjY3MzAwMFwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAxODMsXHJcbiAgICAgICAgICAgICAgMTU2LFxyXG4gICAgICAgICAgICAgIDIyMFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQ2FwaWxsYXJ5XCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJjYXBpbGxhcnlcIixcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTY2XCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwNjkwMVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNDAwNTBcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjIwOTgyMDAwXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDExMSxcclxuICAgICAgICAgICAgICAxODQsXHJcbiAgICAgICAgICAgICAgMjEwXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJDYXJ0aWxhZ2VcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImNhcnRpbGFnZVwiLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDA3MzAxXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EMDIxQlwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzA5MzEyMDA0XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDExMSxcclxuICAgICAgICAgICAgICAxODQsXHJcbiAgICAgICAgICAgICAgMjEwXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJDb25uZWN0aXZlIHRpc3N1ZVwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiY29ubmVjdGl2ZSB0aXNzdWVcIixcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTY2XCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwOTc4MFwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMUEyMDBcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjIxNzkzMDA0XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDE4MyxcclxuICAgICAgICAgICAgICAyMTQsXHJcbiAgICAgICAgICAgICAgMjExXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMaWdhbWVudFwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGlnYW1lbnRcIixcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTY2XCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyMzY4NVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMTgwMTBcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjUyMDgyMDA1XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDY4LFxyXG4gICAgICAgICAgICAgIDE3MixcclxuICAgICAgICAgICAgICAxMDBcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkx5bXBoIG5vZGVcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImx5bXBoIG5vZGVcIixcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTY2XCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyNDIwNFwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQzQwMDBcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjU5NDQxMDAxXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDExMSxcclxuICAgICAgICAgICAgICAxOTcsXHJcbiAgICAgICAgICAgICAgMTMxXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMeW1waGF0aWMgdmVzc2VsXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJseW1waGF0aWMgdmVzc2VsXCIsXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2NlwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjk4ODlcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUM2MDEwXCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI4MzU1NTAwNlwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAxNzgsXHJcbiAgICAgICAgICAgICAgMjEyLFxyXG4gICAgICAgICAgICAgIDI0MlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTWVuaXNjdXNcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIm1lbmlzY3VzXCIsXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2NlwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjQ0OThcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTE1MDA5XCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NDEzNTAwNFwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAxOTIsXHJcbiAgICAgICAgICAgICAgMTA0LFxyXG4gICAgICAgICAgICAgIDg4XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJNdXNjbGVcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIm11c2NsZVwiLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDI2ODQ1XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0xMzAwMVwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzE2MTYwMDRcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgMjQ0LFxyXG4gICAgICAgICAgICAgIDIxNCxcclxuICAgICAgICAgICAgICA0OVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTmVydmVcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIm5lcnZlXCIsXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2NlwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzEyNjgxNjlcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQwNTk4XCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxMTk0MTAwMDJcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgMjIxLFxyXG4gICAgICAgICAgICAgIDEzMCxcclxuICAgICAgICAgICAgICAxMDFcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk9yZ2FuXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJvcmdhblwiLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMxMjg1MDkyXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0xQTMxMFwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjg2MTAwMVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAxNzcsXHJcbiAgICAgICAgICAgICAgMTIyLFxyXG4gICAgICAgICAgICAgIDEwMVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiU2tpblwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwic2tpblwiLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMxMTIzMDIzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0wMTAwMFwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzk5MzcwMDFcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgMTUyLFxyXG4gICAgICAgICAgICAgIDE4OSxcclxuICAgICAgICAgICAgICAyMDdcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlRlbmRvblwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwidGVuZG9uXCIsXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2NlwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzk1MDhcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTE3MDEwXCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxMzAyNDAwMlwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgIDE1MSxcclxuICAgICAgICAgICAgICAyMDZcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlZlaW5cIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInZlaW5cIixcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTY2XCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDQ0NzE0NlwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNDgwNkVcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjE4MTM3ODAwOVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInNob3dBbmF0b215XCI6IHRydWVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJBbmF0b21pY2FsIFN0cnVjdHVyZVwiLFxyXG4gICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxMjMwMzcwMDRcIixcclxuICAgICAgICBcImNpZFwiOiBcIjcwNTFcIixcclxuICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzEyNjgwODZcIixcclxuICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDAwMEFcIixcclxuICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJTZWdtZW50YXRpb24gUHJvcGVydHkgQ2F0ZWdvcmllc1wiLFxyXG4gICAgICAgIFwiVHlwZVwiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDE3NyxcclxuICAgICAgICAgICAgICAxMjIsXHJcbiAgICAgICAgICAgICAgMTAxXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NFwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiYWJkb21lblwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDQwMDBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDAwNzI2XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJBYmRvbWVuXCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkFiZG9taW5hbCBPcmdhbiBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjExMzM0NTAwMVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAxODYsXHJcbiAgICAgICAgICAgICAgMTI0LFxyXG4gICAgICAgICAgICAgIDE2MVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTRcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImFiZG9taW5hbCBjYXZpdHlcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQ0MDEwXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIzMDE2OFwiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQWJkb21pbmFsIGNhdml0eVwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJBYmRvbWluYWwgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1MjczMTAwNFwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAxNzEsXHJcbiAgICAgICAgICAgICAgODUsXHJcbiAgICAgICAgICAgICAgNjhcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU0XCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJtdXNjbGVzIG9mIGFiZG9taW5hbCB3YWxsXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0xNDAwMVwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzEyNzkzODVcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkFiZG9taW5hbCB3YWxsIG11c2NsZVwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJBYmRvbWluYWwgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxOTU4NzkwMDBcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgNjAsXHJcbiAgICAgICAgICAgICAgMTQzLFxyXG4gICAgICAgICAgICAgIDgzXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiYWRlbm9oeXBvcGh5c2lzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1CMTEwMFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzIwMDhcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkFkZW5vaHlwb3BoeXNpc1wiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNjI4MTgwMDFcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQWJkb21pbmFsIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTRcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkFkcmVuYWwgZ2xhbmRcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwMTYyNVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQjMwMDBcIixcclxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDI0OSxcclxuICAgICAgICAgICAgICAgICAgMTg2LFxyXG4gICAgICAgICAgICAgICAgICAxNTBcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBhZHJlbmFsIGdsYW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgMjQ5LFxyXG4gICAgICAgICAgICAgICAgICAxODYsXHJcbiAgICAgICAgICAgICAgICAgIDE1MFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgYWRyZW5hbCBnbGFuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyMzQ1MTAwN1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkFteWdkYWxhXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMDI3MDhcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEzMjMwXCIsXHJcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICA5OCxcclxuICAgICAgICAgICAgICAgICAgMTUzLFxyXG4gICAgICAgICAgICAgICAgICAxMTJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBhbXlnZGFsb2lkIGNvbXBsZXhcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICA5OCxcclxuICAgICAgICAgICAgICAgICAgMTUzLFxyXG4gICAgICAgICAgICAgICAgICAxMTJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGFteWdkYWxvaWQgY29tcGxleFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI0OTU4MDAyXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDI1NSxcclxuICAgICAgICAgICAgICAyMjQsXHJcbiAgICAgICAgICAgICAgMTk5XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiYW51c1wiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNTk5MDBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDAzNDYxXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJBbnVzXCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBBbmF0b21pYyBSZWdpb25zXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1MzUwNTAwNlwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAyMjQsXHJcbiAgICAgICAgICAgICAgOTcsXHJcbiAgICAgICAgICAgICAgNzZcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUyXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJhb3J0YVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNDIwMDBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDAzNDgzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJBb3J0YVwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDYXJkaWFjIFN0cnVjdHVyZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjE1ODI1MDAzXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDIxOCxcclxuICAgICAgICAgICAgICAxMjMsXHJcbiAgICAgICAgICAgICAgOTdcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI2MTEzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJhb3J0aWMgdmFsdmVcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTM1NDAwXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwMzUwMVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQW9ydGljIFZhbHZlXCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIk1lZGlhc3RpbnVtIEFuYXRvbXkgRmluZGluZyBvciBGZWF0dXJlXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzNDIwMjAwN1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAyNTUsXHJcbiAgICAgICAgICAgICAgMjQ0LFxyXG4gICAgICAgICAgICAgIDIwOVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImFyYWNobm9pZFwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTEyMjBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDAzNzA3XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJBcmFjaG5vaWRcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc1MDQyMDA4XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQXJjdWF0ZSBGYXNjaWN1bHVzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIkZNQVwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzIzMjk2MzNcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCIyNzY2NTBcIixcclxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDEyNSxcclxuICAgICAgICAgICAgICAgICAgMTAyLFxyXG4gICAgICAgICAgICAgICAgICAxNTRcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBhcmN1YXRlIGZhc2NpY3VsdXNcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAxMjUsXHJcbiAgICAgICAgICAgICAgICAgIDEwMixcclxuICAgICAgICAgICAgICAgICAgMTU0XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBhcmN1YXRlIGZhc2NpY3VsdXNcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDI1NSxcclxuICAgICAgICAgICAgICAyMjYsXHJcbiAgICAgICAgICAgICAgNzdcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTY3XCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJhdXRvbm9taWMgbmVydmVcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUE5NjA1XCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNjI1MFwiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQXV0b25vbWljIG5lcnZlXCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlBlcmlwaGVyYWwgTmVydm91cyBTeXN0ZW0gU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1MzUyMDAwMFwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgIDE0NSxcclxuICAgICAgICAgICAgICAzMFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTRcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImJpbGlhcnkgdHJlZVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNjA2MTBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDA1NDAwXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJCaWxlIER1Y3RcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQWJkb21pbmFsIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjgyNzMwMDBcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgMjIyLFxyXG4gICAgICAgICAgICAgIDE1NCxcclxuICAgICAgICAgICAgICAxMzJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTYwXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJ1cmluYXJ5IGJsYWRkZXJcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTc0MDAwXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwNTY4MlwiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQmxhZGRlclwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJQZWx2aWMgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI4OTgzNzAwMVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAyNTUsXHJcbiAgICAgICAgICAgICAgMjM5LFxyXG4gICAgICAgICAgICAgIDE3MlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTVcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInNrZWxldG9uIG9mIHRob3JheFwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDAxNzBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwNDQ4MTU3XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJCb25lIG9mIHRob3JheFwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJUaG9yYWNpYyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNzI3MTAwMDRcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgMjQyLFxyXG4gICAgICAgICAgICAgIDIwNixcclxuICAgICAgICAgICAgICAxNDJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDI4XCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJza2VsZXRvbiBvZiBuZWNrXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EMDA2RFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzA3MzAxMzBcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkJvbmUgc3RydWN0dXJlIG9mIGhlYWQgYW5kL29yIG5lY2tcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ3JhbmlvZmFjaWFsIEFuYXRvbWljIFJlZ2lvbnNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjMxMjc3OTAwOVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAyNTAsXHJcbiAgICAgICAgICAgICAgMjUwLFxyXG4gICAgICAgICAgICAgIDIyNVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImJyYWluXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMDEwMFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMDYxMDRcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkJyYWluXCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxMjczODAwNlwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICA4NSxcclxuICAgICAgICAgICAgICAxODgsXHJcbiAgICAgICAgICAgICAgMjU1XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiQ1NGIHNwYWNlXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMDEwOVwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzA0NTkzODdcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkJyYWluIGNlcmVicm9zcGluYWwgZmx1aWQgcGF0aHdheVwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjgwMzcxMDA5XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDg4LFxyXG4gICAgICAgICAgICAgIDEwNixcclxuICAgICAgICAgICAgICAyMTVcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJ2ZW50cmljbGVzIG9mIGJyYWluXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMTYwMFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMDc3OTlcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkJyYWluIHZlbnRyaWNsZVwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzU3NjQwMDJcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJDYXVkYXRlIG51Y2xldXNcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwNzQ2MVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTMyMDBcIixcclxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDMwLFxyXG4gICAgICAgICAgICAgICAgICAxMTEsXHJcbiAgICAgICAgICAgICAgICAgIDg1XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgY2F1ZGF0ZSBudWNsZXVzXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgMzAsXHJcbiAgICAgICAgICAgICAgICAgIDExMSxcclxuICAgICAgICAgICAgICAgICAgODVcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGNhdWRhdGUgbnVjbGV1c1wiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxMTAwMDAwNFwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAyNDQsXHJcbiAgICAgICAgICAgICAgMjE0LFxyXG4gICAgICAgICAgICAgIDQ5XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiY2VudHJhbCBuZXJ2b3VzIHN5c3RlbVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTAwOTBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwOTI3MjMyXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJDZW50cmFsIG5lcnZvdXMgc3lzdGVtXCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyMTQ4MzAwNVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAxOTQsXHJcbiAgICAgICAgICAgICAgMTk1LFxyXG4gICAgICAgICAgICAgIDE2NFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImNlcmViZWxsYXIgd2hpdGUgbWF0dGVyXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BNjA4MFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAxNTIzODFcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkNlcmViZWxsYXIgd2hpdGUgbWF0dGVyXCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzMzA2MDAwNFwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICA4OCxcclxuICAgICAgICAgICAgICAxMDYsXHJcbiAgICAgICAgICAgICAgMjE1XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiY2VyZWJyYWwgYXF1ZWR1Y3RcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUExODAwXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwNzc2OVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQ2VyZWJyYWwgYXF1ZWR1Y3RcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjgwNDQ3MDAwXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQ2VyZWJyYWwgZm9ybml4XCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAxNTIzMzRcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEyOTcwXCIsXHJcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICA2NCxcclxuICAgICAgICAgICAgICAgICAgMTIzLFxyXG4gICAgICAgICAgICAgICAgICAxNDdcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBmb3JuaXhcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICA2NCxcclxuICAgICAgICAgICAgICAgICAgMTIzLFxyXG4gICAgICAgICAgICAgICAgICAxNDdcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGZvcm5peFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI4NzQ2MzAwNVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAxMjgsXHJcbiAgICAgICAgICAgICAgMTc0LFxyXG4gICAgICAgICAgICAgIDEyOFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImNlcmVicmFsIGNvcnRleFwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTIwMjBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDA3Nzc2XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJDZXJlYnJhbCBHcmV5IE1hdHRlclwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNDAxNDYwMDFcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgMjUwLFxyXG4gICAgICAgICAgICAgIDI1MCxcclxuICAgICAgICAgICAgICAyMjVcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJjZXJlYnJhbCB3aGl0ZSBtYXR0ZXJcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEyMDMwXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDE1MjI5NVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQ2VyZWJyYWwgV2hpdGUgTWF0dGVyXCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI2ODUyMzAwM1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAyNTUsXHJcbiAgICAgICAgICAgICAgMjU1LFxyXG4gICAgICAgICAgICAgIDIwN1xyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMzFcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImNlcnZpY2FsIHZlcnRlYnJhbCBjb2x1bW5cIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTExNTAxXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDcyODk4NVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQ2VydmljYWwgc3BpbmVcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIEFuYXRvbWljIFJlZ2lvbnNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjEyMjQ5NDAwNVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAxODgsXHJcbiAgICAgICAgICAgICAgOTUsXHJcbiAgICAgICAgICAgICAgNzZcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU1XCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJtdXNjbGVzIG9mIHRob3JhY2ljIHdhbGxcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTE0MTIyXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMTI2OTgyNVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQ2hlc3Qgd2FsbCBtdXNjbGVcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiVGhvcmFjaWMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzcyMDc0MDA2XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQ2luZ3VsdW1cIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIyODI3MlwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTI4NDBcIixcclxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDE1NCxcclxuICAgICAgICAgICAgICAgICAgMTQ2LFxyXG4gICAgICAgICAgICAgICAgICA4M1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGNpbmd1bHVtIGJ1bmRsZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDE1NCxcclxuICAgICAgICAgICAgICAgICAgMTQ2LFxyXG4gICAgICAgICAgICAgICAgICA4M1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgY2luZ3VsdW0gYnVuZGxlXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjM3MDM1MDAwXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlRob3JhY2ljIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU1XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJDbGF2aWNsZVwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDA4OTEzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0xMjMxMFwiLFxyXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgMjA1LFxyXG4gICAgICAgICAgICAgICAgICAxNzksXHJcbiAgICAgICAgICAgICAgICAgIDEwOFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGNsYXZpY2xlXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgMjA1LFxyXG4gICAgICAgICAgICAgICAgICAxNzksXHJcbiAgICAgICAgICAgICAgICAgIDEwOFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgY2xhdmljbGVcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNTEyOTkwMDRcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgMjA0LFxyXG4gICAgICAgICAgICAgIDE2OCxcclxuICAgICAgICAgICAgICAxNDNcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDMxXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJjb2xvblwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNTkzMDBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDA5MzY4XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJDb2xvblwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gQW5hdG9taWMgUmVnaW9uc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzE4NTQwMDFcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgOTcsXHJcbiAgICAgICAgICAgICAgMTEzLFxyXG4gICAgICAgICAgICAgIDE1OFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImNvcnB1cyBjYWxsb3N1bVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTI3MDBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDEwMDkwXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJDb3JwdXMgY2FsbG9zdW1cIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjg4NDQyMDA1XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQ29ycHVzIHN0cmlhdHVtXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTAwOTdcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEzMTAwXCIsXHJcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAxNzcsXHJcbiAgICAgICAgICAgICAgICAgIDE0MCxcclxuICAgICAgICAgICAgICAgICAgMTkwXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgc3RyaWF0dW1cIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAxNzcsXHJcbiAgICAgICAgICAgICAgICAgIDE0MCxcclxuICAgICAgICAgICAgICAgICAgMTkwXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBzdHJpYXR1bVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzMTQyODAwOFwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAyNTUsXHJcbiAgICAgICAgICAgICAgMjM0LFxyXG4gICAgICAgICAgICAgIDkyXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2N1wiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiY3JhbmlhbCBuZXJ2ZXNcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUE4MDAwXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAxMDI2OFwiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQ3JhbmlhbCBuZXJ2ZVwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJQZXJpcGhlcmFsIE5lcnZvdXMgU3lzdGVtIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjUyMzgwMDNcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJEaWVuY2VwaGFsb25cIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAxMjE0NFwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTAxMDJcIixcclxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDY5LFxyXG4gICAgICAgICAgICAgICAgICAxMTAsXHJcbiAgICAgICAgICAgICAgICAgIDUzXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiZGllbmNlcGhhbG9uXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiODc1NjMwMDhcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgMjU1LFxyXG4gICAgICAgICAgICAgIDI1MyxcclxuICAgICAgICAgICAgICAyMjlcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDMxXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJkdW9kZW51bVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNTgyMDBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDEzMzAzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJEdW9kZW51bVwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gQW5hdG9taWMgUmVnaW9uc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzg4NDgwMDRcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgMjU1LFxyXG4gICAgICAgICAgICAgIDI0NCxcclxuICAgICAgICAgICAgICAyMDlcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJkdXJhIG1hdGVyXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMTEyMFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTMzMTNcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkR1cmEgbWF0ZXJcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjE4NTQ1MDAwXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDIxMSxcclxuICAgICAgICAgICAgICAxNzEsXHJcbiAgICAgICAgICAgICAgMTQzXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NVwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiZXNvcGhhZ3VzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC01NjAwMFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTQ4NzZcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkVzb3BoYWd1c1wiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJUaG9yYWNpYyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzMjg0OTAwMlwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDcmFuaW9mYWNpYWwgQW5hdG9taWMgUmVnaW9uc1wiLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMjhcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkV4dGVybmFsIGVhclwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDEzNDUzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BQjEwMFwiLFxyXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgMTc0LFxyXG4gICAgICAgICAgICAgICAgICAxMjIsXHJcbiAgICAgICAgICAgICAgICAgIDkwXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgZXh0ZXJuYWwgZWFyXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgMTc0LFxyXG4gICAgICAgICAgICAgICAgICAxMjIsXHJcbiAgICAgICAgICAgICAgICAgIDkwXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBleHRlcm5hbCBlYXJcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjgzNDcwMDhcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ3JhbmlvZmFjaWFsIEFuYXRvbWljIFJlZ2lvbnNcIixcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDI4XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJFeWViYWxsXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjkyNDJcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUFBNzcwXCIsXHJcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAxOTQsXHJcbiAgICAgICAgICAgICAgICAgIDE0MixcclxuICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGV5ZWJhbGxcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAxOTQsXHJcbiAgICAgICAgICAgICAgICAgIDE0MixcclxuICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgZXllYmFsbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3OTY1MjAwM1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAxODUsXHJcbiAgICAgICAgICAgICAgMTM1LFxyXG4gICAgICAgICAgICAgIDEzNFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjBcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImZlbWFsZSBleHRlcm5hbCBnZW5pdGFsaWFcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTgwMDEwXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIyNzc0N1wiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiRmVtYWxlIGV4dGVybmFsIGdlbml0YWxpYVwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJQZWx2aWMgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI4Njk2OTAwOFwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAyNDQsXHJcbiAgICAgICAgICAgICAgMTcwLFxyXG4gICAgICAgICAgICAgIDE0N1xyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjBcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImZlbWFsZSBpbnRlcm5hbCBnZW5pdGFsaWFcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTgwMDIwXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIyNzc0OFwiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiRmVtYWxlIGludGVybmFsIGdlbml0YWxpYVwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJQZWx2aWMgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI4Nzc1OTAwNFwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gQW5hdG9taWMgUmVnaW9uc1wiLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMzFcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkZvb3RcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAxNjUwNFwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDk3MDBcIixcclxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDE3NyxcclxuICAgICAgICAgICAgICAgICAgMTIyLFxyXG4gICAgICAgICAgICAgICAgICAxMDFcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBmb290XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgMTc3LFxyXG4gICAgICAgICAgICAgICAgICAxMjIsXHJcbiAgICAgICAgICAgICAgICAgIDEwMVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgZm9vdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1NjQ1OTAwNFwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gQW5hdG9taWMgUmVnaW9uc1wiLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMzFcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkZvcmVhcm1cIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAxNjUzNlwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDg1MDBcIixcclxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDE3NyxcclxuICAgICAgICAgICAgICAgICAgMTIyLFxyXG4gICAgICAgICAgICAgICAgICAxMDFcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBmb3JlYXJtXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgMTc3LFxyXG4gICAgICAgICAgICAgICAgICAxMjIsXHJcbiAgICAgICAgICAgICAgICAgIDEwMVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgZm9yZWFybVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxNDk3NTAwOFwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICA4OCxcclxuICAgICAgICAgICAgICAxMDYsXHJcbiAgICAgICAgICAgICAgMjE1XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiZm91cnRoIHZlbnRyaWNsZVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTE4MjBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMTQ5NTU2XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJGb3VydGggdmVudHJpY2xlXCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzNTkxODAwMlwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDcmFuaW9mYWNpYWwgQW5hdG9taWMgUmVnaW9uc1wiLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMjhcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkZyb250YWwgYm9uZVwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDE2NzMyXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0xMTExMFwiLFxyXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgMjAzLFxyXG4gICAgICAgICAgICAgICAgICAxNzksXHJcbiAgICAgICAgICAgICAgICAgIDc3XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgZnJvbnRhbCBib25lXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgMjAzLFxyXG4gICAgICAgICAgICAgICAgICAxNzksXHJcbiAgICAgICAgICAgICAgICAgIDc3XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBmcm9udGFsIGJvbmVcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzQ4NzIwMDhcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJGcm9udGFsIGxvYmVcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAxNjczM1wiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTIyMDBcIixcclxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDgzLFxyXG4gICAgICAgICAgICAgICAgICAxNDYsXHJcbiAgICAgICAgICAgICAgICAgIDE2NFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGZyb250YWwgbG9iZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDgzLFxyXG4gICAgICAgICAgICAgICAgICAxNDYsXHJcbiAgICAgICAgICAgICAgICAgIDE2NFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgZnJvbnRhbCBsb2JlXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjgzMjUxMDAxXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDEzOSxcclxuICAgICAgICAgICAgICAxNTAsXHJcbiAgICAgICAgICAgICAgOThcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDQwXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJnYWxsYmxhZGRlclwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNjMwMDBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDE2OTc2XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJHYWxsYmxhZGRlclwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJFbmRvc2NvcHkgQW5hdG9taWMgUmVnaW9uc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjgyMzEwMDhcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJHbG9idXMgcGFsbGlkdXNcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAxNzY1MVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTM1MDBcIixcclxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDQ4LFxyXG4gICAgICAgICAgICAgICAgICAxMjksXHJcbiAgICAgICAgICAgICAgICAgIDEyNlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IHBhbGxpZHVtXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgNDgsXHJcbiAgICAgICAgICAgICAgICAgIDEyOSxcclxuICAgICAgICAgICAgICAgICAgMTI2XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBwYWxsaWR1bVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxNDczODAwNVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gQW5hdG9taWMgUmVnaW9uc1wiLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMzFcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkhhbmRcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAxODU2M1wiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDg3MDBcIixcclxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDE3NyxcclxuICAgICAgICAgICAgICAgICAgMTIyLFxyXG4gICAgICAgICAgICAgICAgICAxMDFcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBoYW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgMTc3LFxyXG4gICAgICAgICAgICAgICAgICAxMjIsXHJcbiAgICAgICAgICAgICAgICAgIDEwMVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgaGFuZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI4NTU2MjAwNFwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAxNzcsXHJcbiAgICAgICAgICAgICAgMTIyLFxyXG4gICAgICAgICAgICAgIDEwMVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMzFcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImhlYWRcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQxMTAwXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAxODY3MFwiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiSGVhZFwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gQW5hdG9taWMgUmVnaW9uc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNjk1MzYwMDVcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgMjA2LFxyXG4gICAgICAgICAgICAgIDExMCxcclxuICAgICAgICAgICAgICA4NFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTJcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImhlYXJ0XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0zMjAwMFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTg3ODdcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkhlYXJ0XCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNhcmRpYWMgU3RydWN0dXJlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiODA4OTEwMDlcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgMjUwLFxyXG4gICAgICAgICAgICAgIDIxMCxcclxuICAgICAgICAgICAgICAxMzlcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDI4XCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJoeW9pZCBib25lXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0xMTE5MFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMjA0MTdcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkh5b2lkIGJvbmVcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ3JhbmlvZmFjaWFsIEFuYXRvbWljIFJlZ2lvbnNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjIxMzg3MDA1XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiSW5mZXJpb3IgY2VyZWJlbGxhciBwZWR1bmNsZVwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMTUyMzkzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BNjY0MFwiLFxyXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgMTg2LFxyXG4gICAgICAgICAgICAgICAgICAxMzUsXHJcbiAgICAgICAgICAgICAgICAgIDEzNVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGluZmVyaW9yIGNlcmViZWxsYXIgcGVkdW5jbGVcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAxODYsXHJcbiAgICAgICAgICAgICAgICAgIDEzNSxcclxuICAgICAgICAgICAgICAgICAgMTM1XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBpbmZlcmlvciBjZXJlYmVsbGFyIHBlZHVuY2xlXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjY3NzAxMDAxXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiSW5mZXJpb3IgbG9uZ2l0dWRpbmFsIGZhc2NpY3VsdXNcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIyODI3M1wiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTI4NTBcIixcclxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDE1OSxcclxuICAgICAgICAgICAgICAgICAgMTE2LFxyXG4gICAgICAgICAgICAgICAgICAxNjNcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBpbmZlcmlvciBsb25naXR1ZGluYWwgZmFzY2ljdWx1c1wiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDE1OSxcclxuICAgICAgICAgICAgICAgICAgMTE2LFxyXG4gICAgICAgICAgICAgICAgICAxNjNcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGluZmVyaW9yIGxvbmdpdHVkaW5hbCBmYXNjaWN1bHVzXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjU1MjMzMDA1XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNyYW5pb2ZhY2lhbCBBbmF0b21pYyBSZWdpb25zXCIsXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAyOFwiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiSW5uZXIgZWFyXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMjI4ODlcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUFCNzAwXCIsXHJcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAyMjksXHJcbiAgICAgICAgICAgICAgICAgIDE0NyxcclxuICAgICAgICAgICAgICAgICAgMTE4XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgaW5uZXIgZWFyXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgMjI5LFxyXG4gICAgICAgICAgICAgICAgICAxNDcsXHJcbiAgICAgICAgICAgICAgICAgIDExOFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgaW5uZXIgZWFyXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjIyOTQ1MDAwXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiSW5zdWxhXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMjE2NDBcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEyNjEwXCIsXHJcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAxODgsXHJcbiAgICAgICAgICAgICAgICAgIDEzNSxcclxuICAgICAgICAgICAgICAgICAgMTY2XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgaW5zdWxhciBsb2JlXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgMTg4LFxyXG4gICAgICAgICAgICAgICAgICAxMzUsXHJcbiAgICAgICAgICAgICAgICAgIDE2NlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgaW5zdWxhciBsb2JlXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjM2MTY5MDA4XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDIzMyxcclxuICAgICAgICAgICAgICAxMzgsXHJcbiAgICAgICAgICAgICAgMTEyXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNjExNlwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiYXRyaWFsIHNlcHR1bVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMzIxNTBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjI1ODM2XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJJbnRlcmF0cmlhbCBzZXB0dW1cIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTXVzY3VsYXIgQW5hdG9teVwiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNTgwOTUwMDZcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgMTk1LFxyXG4gICAgICAgICAgICAgIDEwMCxcclxuICAgICAgICAgICAgICA3M1xyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjYxMTZcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInZlbnRyaWN1bGFyIHNlcHR1bVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMzI0MTBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjI1ODcwXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJJbnRlcnZlbnRyaWN1bGFyIHNlcHR1bVwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJNdXNjdWxhciBBbmF0b215XCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1ODkwMDFcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQWJkb21pbmFsIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTRcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIktpZG5leVwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDIyNjQ2XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC03MTAwMFwiLFxyXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgMTg1LFxyXG4gICAgICAgICAgICAgICAgICAxMDIsXHJcbiAgICAgICAgICAgICAgICAgIDgzXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQga2lkbmV5XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgMTg1LFxyXG4gICAgICAgICAgICAgICAgICAxMDIsXHJcbiAgICAgICAgICAgICAgICAgIDgzXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBraWRuZXlcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNjQwMzMwMDdcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiRW5kb3Njb3B5IEFuYXRvbWljIFJlZ2lvbnNcIixcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDQwXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJLbmVlXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzE0NTY3OThcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQ5MjAwXCIsXHJcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAxNzcsXHJcbiAgICAgICAgICAgICAgICAgIDEyMixcclxuICAgICAgICAgICAgICAgICAgMTAxXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQga25lZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDE3NyxcclxuICAgICAgICAgICAgICAgICAgMTIyLFxyXG4gICAgICAgICAgICAgICAgICAxMDFcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGtuZWVcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzI2OTYwMDJcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ3JhbmlvZmFjaWFsIEFuYXRvbWljIFJlZ2lvbnNcIixcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDI4XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMYWNyaW1hbCBib25lXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjI3MzNcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTExMTVBXCIsXHJcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAyNTUsXHJcbiAgICAgICAgICAgICAgICAgIDI1MCxcclxuICAgICAgICAgICAgICAgICAgMTYwXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgbGFjcmltYWwgYm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjYyMjkwMDdcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgMTUwLFxyXG4gICAgICAgICAgICAgIDIwOCxcclxuICAgICAgICAgICAgICAyNDNcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDQwXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsYXJ5bnhcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTI0MTAwXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyMzA3OFwiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGFyeW54XCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkVuZG9zY29weSBBbmF0b21pYyBSZWdpb25zXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI0NTk2MDA5XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGF0ZXJhbCBjb3J0aWNvc3BpbmFsIHRyYWN0XCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAxNTI0MDJcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUE3MDkzXCIsXHJcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAyMDEsXHJcbiAgICAgICAgICAgICAgICAgIDE2MCxcclxuICAgICAgICAgICAgICAgICAgMTMzXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgY29ydGljb3NwaW5hbCB0cmFjdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDIwMSxcclxuICAgICAgICAgICAgICAgICAgMTYwLFxyXG4gICAgICAgICAgICAgICAgICAxMzNcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGNvcnRpY29zcGluYWwgdHJhY3RcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNDYxMDAyXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGF0ZXJhbCB2ZW50cmljbGVcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDE1MjI3OVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTE2NTBcIixcclxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDg4LFxyXG4gICAgICAgICAgICAgICAgICAxMDYsXHJcbiAgICAgICAgICAgICAgICAgIDIxNVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGxhdGVyYWwgdmVudHJpY2xlXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgODgsXHJcbiAgICAgICAgICAgICAgICAgIDEwNixcclxuICAgICAgICAgICAgICAgICAgMjE1XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBsYXRlcmFsIHZlbnRyaWNsZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI2NjcyMDAwN1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAxNTIsXHJcbiAgICAgICAgICAgICAgNTUsXHJcbiAgICAgICAgICAgICAgMTNcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUyXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IHZlbnRyaWNsZSBvZiBoZWFydFwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMzI2MDBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjI1ODk3XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0IFZlbnRyaWNsZVwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDYXJkaWFjIFN0cnVjdHVyZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjg3ODc4MDA1XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGltYmljIGxvYmVcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDQ1ODMzN1wiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTAwMzZcIixcclxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDE1NCxcclxuICAgICAgICAgICAgICAgICAgMTUwLFxyXG4gICAgICAgICAgICAgICAgICAyMDFcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBsaW1iaWMgbG9iZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDE1NCxcclxuICAgICAgICAgICAgICAgICAgMTUwLFxyXG4gICAgICAgICAgICAgICAgICAyMDFcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGxpbWJpYyBsb2JlXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI3OTIxNTAwNlwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAxODgsXHJcbiAgICAgICAgICAgICAgOTEsXHJcbiAgICAgICAgICAgICAgOTVcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDI4XCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsaXBzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC01MjAwMFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMjM3NTlcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxpcFwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDcmFuaW9mYWNpYWwgQW5hdG9taWMgUmVnaW9uc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNDg0NzcwMDlcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIEFuYXRvbWljIFJlZ2lvbnNcIixcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDMxXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMb3dlciBsZWdcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMTE0MDYyMVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDk0MDBcIixcclxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDE3NyxcclxuICAgICAgICAgICAgICAgICAgMTIyLFxyXG4gICAgICAgICAgICAgICAgICAxMDFcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBsZWdcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAxNzcsXHJcbiAgICAgICAgICAgICAgICAgIDEyMixcclxuICAgICAgICAgICAgICAgICAgMTAxXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBsZWdcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzAwMjEwMDBcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIEFuYXRvbWljIFJlZ2lvbnNcIixcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDMxXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMb3dlciBsaW1iXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMjMyMTZcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQ5MDAwXCIsXHJcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAxNzcsXHJcbiAgICAgICAgICAgICAgICAgIDEyMixcclxuICAgICAgICAgICAgICAgICAgMTAxXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgbG93ZXIgbGltYlwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDE3NyxcclxuICAgICAgICAgICAgICAgICAgMTIyLFxyXG4gICAgICAgICAgICAgICAgICAxMDFcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGxvd2VyIGxpbWJcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNjE2ODUwMDdcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiVGhvcmFjaWMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTVcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxvd2VyIGxvYmUgb2YgbHVuZ1wiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjI1NzU4XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0yODgzMFwiLFxyXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgMjI0LFxyXG4gICAgICAgICAgICAgICAgICAxODYsXHJcbiAgICAgICAgICAgICAgICAgIDE2MlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImluZmVyaW9yIGxvYmUgb2YgcmlnaHQgbHVuZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDIyNCxcclxuICAgICAgICAgICAgICAgICAgMTg2LFxyXG4gICAgICAgICAgICAgICAgICAxNjJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJpbmZlcmlvciBsb2JlIG9mIGxlZnQgbHVuZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI5MDU3MjAwMVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAyMTIsXHJcbiAgICAgICAgICAgICAgMTg4LFxyXG4gICAgICAgICAgICAgIDEwMlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMzFcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImx1bWJhciB2ZXJ0ZWJyYWwgY29sdW1uXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0xMTUwM1wiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMjQwOTFcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkx1bWJhciBzcGluZVwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gQW5hdG9taWMgUmVnaW9uc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTIyNDk2MDA3XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlRob3JhY2ljIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU1XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMdW5nXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMjQxMDlcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTI4MDAwXCIsXHJcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAxOTcsXHJcbiAgICAgICAgICAgICAgICAgIDE2NSxcclxuICAgICAgICAgICAgICAgICAgMTQ1XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgbHVuZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDE5NyxcclxuICAgICAgICAgICAgICAgICAgMTY1LFxyXG4gICAgICAgICAgICAgICAgICAxNDVcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGx1bmdcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzk2MDcwMDhcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgMTg1LFxyXG4gICAgICAgICAgICAgIDEzNSxcclxuICAgICAgICAgICAgICAxMzRcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTYwXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJtYWxlIGV4dGVybmFsIGdlbml0YWxpYVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtOTAwMTBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjI3OTIyXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJNYWxlIGV4dGVybmFsIGdlbml0YWxpYVwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJQZWx2aWMgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI5MDQxODAwNVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAyMTYsXHJcbiAgICAgICAgICAgICAgMTQ2LFxyXG4gICAgICAgICAgICAgIDEyN1xyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjBcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIm1hbGUgaW50ZXJuYWwgZ2VuaXRhbGlhXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC05MDAyMFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjc5MjNcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk1hbGUgaW50ZXJuYWwgZ2VuaXRhbGlhXCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlBlbHZpYyBPcmdhbiBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjM4MjQyMDA4XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDIyMixcclxuICAgICAgICAgICAgICAxOTgsXHJcbiAgICAgICAgICAgICAgMTAxXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibWFuZGlibGVcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTExMTgwXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyNDY4N1wiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTWFuZGlibGVcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIEFuYXRvbWljIFJlZ2lvbnNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjkxNjA5MDA2XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTWVkaWFsIExlbW5pc2N1c1wiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjI4NDIwXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BNTI3MVwiLFxyXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgMTc0LFxyXG4gICAgICAgICAgICAgICAgICAxNDAsXHJcbiAgICAgICAgICAgICAgICAgIDEwM1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IG1lZGlhbCBsZW1uaXNjdXNcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAxNzQsXHJcbiAgICAgICAgICAgICAgICAgIDE0MCxcclxuICAgICAgICAgICAgICAgICAgMTAzXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBtZWRpYWwgbGVtbmlzY3VzXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjMwMTE0MDAzXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDI1NSxcclxuICAgICAgICAgICAgICAyNDQsXHJcbiAgICAgICAgICAgICAgMjA5XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NVwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibWVkaWFzdGludW1cIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQzMzAwXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyNTA2NlwiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTWVkaWFzdGludW1cIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiVGhvcmFjaWMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzI0MTAwMDBcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgMjU1LFxyXG4gICAgICAgICAgICAgIDI0NCxcclxuICAgICAgICAgICAgICAyMDlcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJtZW5pbmdlc1wiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTExMTBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDI1Mjg1XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJNZW5pbmdlc1wiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTIzMTAwNFwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk1pZGRsZSBjZXJlYmVsbGFyIHBlZHVuY2xlXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAxNTIzOTJcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUE2NjMwXCIsXHJcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAxNDgsXHJcbiAgICAgICAgICAgICAgICAgIDEyMCxcclxuICAgICAgICAgICAgICAgICAgNzJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBtaWRkbGUgY2VyZWJlbGxhciBwZWR1bmNsZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDE0OCxcclxuICAgICAgICAgICAgICAgICAgMTIwLFxyXG4gICAgICAgICAgICAgICAgICA3MlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgbWlkZGxlIGNlcmViZWxsYXIgcGVkdW5jbGVcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzM3MjMwMDVcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ3JhbmlvZmFjaWFsIEFuYXRvbWljIFJlZ2lvbnNcIixcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDI4XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJNaWRkbGUgZWFyXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTM0NTVcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUFCMzAwXCIsXHJcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAyMDEsXHJcbiAgICAgICAgICAgICAgICAgIDExMixcclxuICAgICAgICAgICAgICAgICAgNzNcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBtaWRkbGUgZWFyXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgMjAxLFxyXG4gICAgICAgICAgICAgICAgICAxMTIsXHJcbiAgICAgICAgICAgICAgICAgIDczXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBtaWRkbGUgZWFyXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI1MzQyMDAzXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDIwMixcclxuICAgICAgICAgICAgICAxNjQsXHJcbiAgICAgICAgICAgICAgMTQwXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NVwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibWlkZGxlIGxvYmUgb2YgcmlnaHQgbHVuZ1wiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMjgzMDBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjI1NzU3XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJNaWRkbGUgbG9iZSBvZiByaWdodCBsdW5nXCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlRob3JhY2ljIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjcyNDgxMDA2XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDE1OSxcclxuICAgICAgICAgICAgICA2MyxcclxuICAgICAgICAgICAgICAyN1xyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjYxMTNcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIm1pdHJhbCB2YWx2ZVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMzUzMDBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDI2MjY0XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJNaXRyYWwgVmFsdmVcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTWVkaWFzdGludW0gQW5hdG9teSBGaW5kaW5nIG9yIEZlYXR1cmVcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjkxMTM0MDA3XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDIwMSxcclxuICAgICAgICAgICAgICAxMjEsXHJcbiAgICAgICAgICAgICAgNzdcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDI4XCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJtdXNjbGVzIG9mIGhlYWRcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTEzMTAwXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIyNDA5N1wiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTXVzY2xlIG9mIGhlYWRcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ3JhbmlvZmFjaWFsIEFuYXRvbWljIFJlZ2lvbnNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjIyNjg4MDA1XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDIxMyxcclxuICAgICAgICAgICAgICAxMjQsXHJcbiAgICAgICAgICAgICAgMTA5XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAyOFwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibXVzY2xlcyBvZiBuZWNrXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0xMzMwMFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMjc1MzJcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk11c2NsZSBvZiBuZWNrXCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNyYW5pb2ZhY2lhbCBBbmF0b21pYyBSZWdpb25zXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI4MTcyNzAwMVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAxNzcsXHJcbiAgICAgICAgICAgICAgMTIyLFxyXG4gICAgICAgICAgICAgIDEwMVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMzFcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIm5lY2tcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQxNjAwXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyNzUzMFwiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTmVja1wiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gQW5hdG9taWMgUmVnaW9uc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNDUwNDgwMDBcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgOTIsXHJcbiAgICAgICAgICAgICAgMTYyLFxyXG4gICAgICAgICAgICAgIDEwOVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIm5ldXJvaHlwb3BoeXNpc1wiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQjEyMDBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDMyMDA5XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJOZXVyb2h5cG9waHlzaXNcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjM3NTEyMDA5XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiT2NjaXBpdGFsIGxvYmVcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyODc4NVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTI0MDBcIixcclxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDE4MixcclxuICAgICAgICAgICAgICAgICAgMTY2LFxyXG4gICAgICAgICAgICAgICAgICAxMTBcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBvY2NpcGl0YWwgbG9iZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDE4MixcclxuICAgICAgICAgICAgICAgICAgMTY2LFxyXG4gICAgICAgICAgICAgICAgICAxMTBcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IG9jY2lwaXRhbCBsb2JlXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjMxMDY1MDA0XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDIzNCxcclxuICAgICAgICAgICAgICAyMzQsXHJcbiAgICAgICAgICAgICAgMTk0XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NFwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwib21lbnR1bVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDQ2MDBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDI4OTc3XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJPbWVudHVtXCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkFiZG9taW5hbCBPcmdhbiBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI3Mzk4MDA0XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDk5LFxyXG4gICAgICAgICAgICAgIDEwNixcclxuICAgICAgICAgICAgICAyNFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIm9wdGljIGNoaWFzbVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTgwMEJcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDI5MTI2XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJPcHRpYyBjaGlhc21cIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0NDQ1MzAwNlwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk9wdGljIHJhZGlhdGlvblwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjI4Mjc3XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMjg4MFwiLFxyXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgNzgsXHJcbiAgICAgICAgICAgICAgICAgIDE1MixcclxuICAgICAgICAgICAgICAgICAgMTQxXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgb3B0aWMgcmFkaWF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgNzgsXHJcbiAgICAgICAgICAgICAgICAgIDE1MixcclxuICAgICAgICAgICAgICAgICAgMTQxXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBvcHRpYyByYWRpYXRpb25cIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzAxMDUwMDFcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJPcHRpYyB0cmFjdFwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMTUyNDA1XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BODA2MFwiLFxyXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgMTU2LFxyXG4gICAgICAgICAgICAgICAgICAxNzEsXHJcbiAgICAgICAgICAgICAgICAgIDEwOFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IG9wdGljIHRyYWN0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgMTU2LFxyXG4gICAgICAgICAgICAgICAgICAxNzEsXHJcbiAgICAgICAgICAgICAgICAgIDEwOFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgb3B0aWMgdHJhY3RcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNTMyMzgwMDNcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiUGVsdmljIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjBcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk92YXJ5XCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMjk5MzlcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTg3MDAwXCIsXHJcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAyMTMsXHJcbiAgICAgICAgICAgICAgICAgIDE0MSxcclxuICAgICAgICAgICAgICAgICAgMTEzXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgb3ZhcnlcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAyMTMsXHJcbiAgICAgICAgICAgICAgICAgIDE0MSxcclxuICAgICAgICAgICAgICAgICAgMTEzXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBvdmFyeVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxNTQ5NzAwNlwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDcmFuaW9mYWNpYWwgQW5hdG9taWMgUmVnaW9uc1wiLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMjhcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlBhbGF0aW5lIGJvbmVcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIyMjczNFwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMTExNjBcIixcclxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDI0MixcclxuICAgICAgICAgICAgICAgICAgMjE3LFxyXG4gICAgICAgICAgICAgICAgICAxMjNcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBwYWxhdGluZSBib25lXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgMjQyLFxyXG4gICAgICAgICAgICAgICAgICAyMTcsXHJcbiAgICAgICAgICAgICAgICAgIDEyM1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgcGFsYXRpbmUgYm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1MTI4MzAwNVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAyNDksXHJcbiAgICAgICAgICAgICAgMTgwLFxyXG4gICAgICAgICAgICAgIDExMVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMzBcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInBhbmNyZWFzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC02NTAwMFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzAyNzRcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlBhbmNyZWFzXCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNULCBNUiBhbmQgUEVUIEFuYXRvbXkgSW1hZ2VkXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxNTc3NjAwOVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDcmFuaW9mYWNpYWwgQW5hdG9taWMgUmVnaW9uc1wiLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMjhcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlBhcmlldGFsIGJvbmVcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzMDU1OFwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMTExMjBcIixcclxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDIyOSxcclxuICAgICAgICAgICAgICAgICAgMjA0LFxyXG4gICAgICAgICAgICAgICAgICAxMDlcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBwYXJpZXRhbCBib25lXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgMjI5LFxyXG4gICAgICAgICAgICAgICAgICAyMDQsXHJcbiAgICAgICAgICAgICAgICAgIDEwOVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgcGFyaWV0YWwgYm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDkyNDAwNlwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlBhcmlldGFsIGxvYmVcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzMDU2MFwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTIzMDBcIixcclxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDE0MSxcclxuICAgICAgICAgICAgICAgICAgOTMsXHJcbiAgICAgICAgICAgICAgICAgIDEzN1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IHBhcmlldGFsIGxvYmVcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAxNDEsXHJcbiAgICAgICAgICAgICAgICAgIDkzLFxyXG4gICAgICAgICAgICAgICAgICAxMzdcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IHBhcmlldGFsIGxvYmVcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTY2MzAwMDVcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgMTg0LFxyXG4gICAgICAgICAgICAgIDEyMixcclxuICAgICAgICAgICAgICAxNTRcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUyXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJwZXJpY2FyZGlhbCBjYXZpdHlcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTM5MDUwXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIyNTk3MlwiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUGVyaWNhcmRpYWwgY2F2aXR5XCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNhcmRpYWMgU3RydWN0dXJlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjU0ODkwMDBcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgMjU1LFxyXG4gICAgICAgICAgICAgIDI0NCxcclxuICAgICAgICAgICAgICAyMDlcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUyXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJwZXJpY2FyZGl1bVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMzkwMDBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDMxMDUwXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJQZXJpY2FyZGl1bVwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDYXJkaWFjIFN0cnVjdHVyZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc2ODQ4MDAxXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDIyNCxcclxuICAgICAgICAgICAgICAxOTQsXHJcbiAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjdcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInBlcmlwaGVyYWwgbmVydmVcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEwNTAwXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzMTExOVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUGVyaXBoZXJhbCBuZXJ2ZVwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJQZXJpcGhlcmFsIE5lcnZvdXMgU3lzdGVtIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiODQ3ODIwMDlcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgMjE2LFxyXG4gICAgICAgICAgICAgIDE4NixcclxuICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2N1wiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicGVyaXBoZXJhbCBuZXJ2b3VzIHN5c3RlbVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTAxNDBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA2NDE3XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJQZXJpcGhlcmFsIG5lcnZvdXMgc3lzdGVtXCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlBlcmlwaGVyYWwgTmVydm91cyBTeXN0ZW0gU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzMDU4MDA1XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDI1NSxcclxuICAgICAgICAgICAgICAyNTUsXHJcbiAgICAgICAgICAgICAgMjIwXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NFwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicGVyaXRvbmV1bVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDQ0MDBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDMxMTUzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJQZXJpdGlvbmV1bVwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJBYmRvbWluYWwgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxNTQyNTAwN1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAyMDQsXHJcbiAgICAgICAgICAgICAgMTQyLFxyXG4gICAgICAgICAgICAgIDE3OFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTRcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInBlcml0b25lYWwgY2F2aXR5XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1ENDQyNVwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzE3MDQyNDdcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlBlcml0b25lYWwgY2F2aXR5XCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkFiZG9taW5hbCBPcmdhbiBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjgzNjcwMDAwXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDE4NCxcclxuICAgICAgICAgICAgICAxMDUsXHJcbiAgICAgICAgICAgICAgMTA4XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDA0MFwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicGhhcnlueFwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNTUwMDBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDMxMzU0XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJQaGFyeW54XCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkVuZG9zY29weSBBbmF0b21pYyBSZWdpb25zXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1NDA2NjAwOFwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAyNTUsXHJcbiAgICAgICAgICAgICAgMjQ0LFxyXG4gICAgICAgICAgICAgIDIwOVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInBpYSBtYXRlclwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTEyODBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDMxODY5XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJQaWEgbWF0ZXJcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjIzMTgwMDA2XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDI1MyxcclxuICAgICAgICAgICAgICAxMzUsXHJcbiAgICAgICAgICAgICAgMTkyXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicGluZWFsIGdsYW5kXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1CMjAwMFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzE5MzlcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlBpbmVhbCBHbGFuZFwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNDU3OTMwMDBcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgNTcsXHJcbiAgICAgICAgICAgICAgMTU3LFxyXG4gICAgICAgICAgICAgIDExMFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInBpdHVpdGFyeSBnbGFuZFwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQjEwMDBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDMyMDA1XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJQaXR1aXRhcnlcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjU2MzI5MDA4XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDEyNixcclxuICAgICAgICAgICAgICAxNjEsXHJcbiAgICAgICAgICAgICAgMTk3XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicG9zdGVyaW9yIGNvbW1pc3N1cmVcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUE0OTA0XCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDE1MjMyN1wiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUG9zdGVyaW9yIGNlcmVicmFsIGNvbW1pc3N1cmVcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI3OTMzNjAwNVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAyMzAsXHJcbiAgICAgICAgICAgICAgMTU4LFxyXG4gICAgICAgICAgICAgIDE0MFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjBcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInByb3N0YXRlXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC05MjAwMFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzM1NzJcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlByb3N0YXRlXCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlBlbHZpYyBPcmdhbiBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjQxMjE2MDAxXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDIyNSxcclxuICAgICAgICAgICAgICAxMzAsXHJcbiAgICAgICAgICAgICAgMTA0XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNjExM1wiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicHVsbW9uYXJ5IHZhbHZlXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0zNTIwMFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzQwODZcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlB1bG1vbmFyeSB2YWx2ZVwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJNZWRpYXN0aW51bSBBbmF0b215IEZpbmRpbmcgb3IgRmVhdHVyZVwiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzkwNTcwMDRcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJQdXRhbWVuXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzQxNjlcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEzNDAwXCIsXHJcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAyMTAsXHJcbiAgICAgICAgICAgICAgICAgIDE1NyxcclxuICAgICAgICAgICAgICAgICAgMTY2XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgcHV0YW1lblwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDIxMCxcclxuICAgICAgICAgICAgICAgICAgMTU3LFxyXG4gICAgICAgICAgICAgICAgICAxNjZcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IHB1dGFtZW5cIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiODkyNzgwMDlcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgMTgwLFxyXG4gICAgICAgICAgICAgIDExOSxcclxuICAgICAgICAgICAgICAxNTNcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU0XCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyZXRyb3Blcml0b25lYWwgc3BhY2VcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQ0OTAwXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzNTM1OVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmV0cm9wZXJpdG9uZWFsIHNwYWNlXCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkFiZG9taW5hbCBPcmdhbiBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjgyODQ5MDAxXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDE4MSxcclxuICAgICAgICAgICAgICA4NSxcclxuICAgICAgICAgICAgICA1N1xyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTJcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IHZlbnRyaWNsZSBvZiBoZWFydFwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMzI1MDBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjI1ODgzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodCBWZW50cmljbGVcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ2FyZGlhYyBTdHJ1Y3R1cmUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1MzA4NTAwMlwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICA3MCxcclxuICAgICAgICAgICAgICAxNjMsXHJcbiAgICAgICAgICAgICAgMTE3XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAyOFwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwic2FsaXZhcnkgZ2xhbmRzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC02MTAwN1wiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzYwOThcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlNhbGl2YXJ5IGdsYW5kXCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNyYW5pb2ZhY2lhbCBBbmF0b21pYyBSZWdpb25zXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzODUyOTQwMDVcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiUGVsdmljIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjBcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlNlbWluYWwgVmVzaWNsZVwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDM2NjI4XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC05MzAwMFwiLFxyXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgMjQ1LFxyXG4gICAgICAgICAgICAgICAgICAxNzIsXHJcbiAgICAgICAgICAgICAgICAgIDE0N1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IHNlbWluYWwgdmVzaWNsZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDI0NSxcclxuICAgICAgICAgICAgICAgICAgMTcyLFxyXG4gICAgICAgICAgICAgICAgICAxNDdcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IHNlbWluYWwgdmVzaWNsZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI2NDczOTAwNFwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJFbmRvc2NvcHkgQW5hdG9taWMgUmVnaW9uc1wiLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwNDBcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlNob3VsZGVyXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzcwMDRcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQyMjIwXCIsXHJcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAxNzcsXHJcbiAgICAgICAgICAgICAgICAgIDEyMixcclxuICAgICAgICAgICAgICAgICAgMTAxXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgc2hvdWxkZXJcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAxNzcsXHJcbiAgICAgICAgICAgICAgICAgIDEyMixcclxuICAgICAgICAgICAgICAgICAgMTAxXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBzaG91bGRlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxNjk4MjAwNVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAxNzcsXHJcbiAgICAgICAgICAgICAgMTI0LFxyXG4gICAgICAgICAgICAgIDkyXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NFwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwic2tpbiBvZiBhYmRvbWluYWwgd2FsbFwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMDI0ODBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjIyMTY2XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJTa2luIG9mIGFiZG9tZW5cIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQWJkb21pbmFsIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzUwOTMwMDRcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgMTczLFxyXG4gICAgICAgICAgICAgIDEyMSxcclxuICAgICAgICAgICAgICA4OFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTVcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInNraW4gb2YgdGhvcmFjaWMgd2FsbFwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMDI0MjRcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjIyMTQ5XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJTa2luIG9mIGNoZXN0XCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlRob3JhY2ljIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc0MTYwMDA0XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDI0MSxcclxuICAgICAgICAgICAgICAyMTMsXHJcbiAgICAgICAgICAgICAgMTQ0XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwic2t1bGxcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTExMTAwXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzNzMwM1wiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiU2t1bGxcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIEFuYXRvbWljIFJlZ2lvbnNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjg5NTQ2MDAwXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDIwNSxcclxuICAgICAgICAgICAgICAxNjcsXHJcbiAgICAgICAgICAgICAgMTQyXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NFwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwic21hbGwgYm93ZWxcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTU4MDAwXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyMTg1MlwiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiU21hbGwgSW50ZXN0aW5lXCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkFiZG9taW5hbCBPcmdhbiBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjMwMzE1MDA1XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDE4MixcclxuICAgICAgICAgICAgICAxMDUsXHJcbiAgICAgICAgICAgICAgMTA3XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAyOFwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwic29mdCBwYWxhdGVcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTUxMTIwXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzMDIxOVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiU29mdCBwYWxhdGVcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ3JhbmlvZmFjaWFsIEFuYXRvbWljIFJlZ2lvbnNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjQ5NDYwMDAwXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDI0NCxcclxuICAgICAgICAgICAgICAyMTQsXHJcbiAgICAgICAgICAgICAgNDlcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJzcGluYWwgY29yZFwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTcwMTBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDM3OTI1XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJTcGluYWwgY29yZFwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjc0ODAwOFwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAyMDAsXHJcbiAgICAgICAgICAgICAgMjAwLFxyXG4gICAgICAgICAgICAgIDIxNVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImdyYXkgbWF0dGVyIG9mIHNwaW5hbCBjb3JkXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BNzAyMFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzA0NzU4NTNcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlNwaW5hbCBjb3JkIGdyYXkgbWF0dGVyXCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxMjk1ODAwM1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAyNTAsXHJcbiAgICAgICAgICAgICAgMjUwLFxyXG4gICAgICAgICAgICAgIDIyNVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIndoaXRlIG1hdHRlciBvZiBzcGluYWwgY29yZFwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTcwNzBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwNDU4NDU3XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJTcGluYWwgY29yZCB3aGl0ZSBtYXR0ZXJcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI3MDg4MDAxXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDI0NCxcclxuICAgICAgICAgICAgICAyMTcsXHJcbiAgICAgICAgICAgICAgMTU0XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NVwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwic3Rlcm51bVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMTEyMTBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDM4MjkzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJTdGVybnVtXCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlRob3JhY2ljIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjU2ODczMDAyXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDIxNixcclxuICAgICAgICAgICAgICAxMzIsXHJcbiAgICAgICAgICAgICAgMTA1XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwic3RvbWFjaFwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNTcwMDBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDM4MzUxXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJTdG9tYWNoXCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBBbmF0b21pYyBSZWdpb25zXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI2OTY5NTAwM1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICA4OCxcclxuICAgICAgICAgICAgICAxMDYsXHJcbiAgICAgICAgICAgICAgMjE1XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwic3ViYXJhY2hub2lkIHNwYWNlXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMTUwMFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzg1MjdcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlN1YmFyYWNobm9pZCBzcGFjZVwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzU5NTEwMDZcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJTdWJzdGFudGlhIG5pZ3JhXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzg1OTBcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUE1MTYwXCIsXHJcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAxMDgsXHJcbiAgICAgICAgICAgICAgICAgIDExMlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IHN1YnN0YW50aWEgbmlncmFcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAxMDgsXHJcbiAgICAgICAgICAgICAgICAgIDExMlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgc3Vic3RhbnRpYSBuaWdyYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3MDAwNzAwN1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlN1cGVyaW9yIGxvbmdpdHVkaW5hbCBmYXNjaWN1bHVzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjgyNzBcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEyODIwXCIsXHJcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAxMjcsXHJcbiAgICAgICAgICAgICAgICAgIDE1MCxcclxuICAgICAgICAgICAgICAgICAgODhcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBzdXBlcmlvciBsb25naXR1ZGluYWwgZmFzY2ljdWx1c1wiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDEyNyxcclxuICAgICAgICAgICAgICAgICAgMTUwLFxyXG4gICAgICAgICAgICAgICAgICA4OFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgc3VwZXJpb3IgbG9uZ2l0dWRpbmFsIGZhc2NpY3VsdXNcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiODkyMDIwMDlcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ3JhbmlvZmFjaWFsIEFuYXRvbWljIFJlZ2lvbnNcIixcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDI4XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJUZW1wb3JhbCBib25lXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzk0ODRcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTExMTMwXCIsXHJcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAyNTUsXHJcbiAgICAgICAgICAgICAgICAgIDI0MyxcclxuICAgICAgICAgICAgICAgICAgMTUyXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgdGVtcG9yYWwgYm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDI1NSxcclxuICAgICAgICAgICAgICAgICAgMjQzLFxyXG4gICAgICAgICAgICAgICAgICAxNTJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IHRlbXBvcmFsIGJvbmVcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNjA5MTEwMDNcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJUZW1wb3JhbCBsb2JlXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzk0ODVcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEyNTAwXCIsXHJcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAxNjIsXHJcbiAgICAgICAgICAgICAgICAgIDExNSxcclxuICAgICAgICAgICAgICAgICAgMTA1XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgdGVtcG9yYWwgbG9iZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDE2MixcclxuICAgICAgICAgICAgICAgICAgMTE1LFxyXG4gICAgICAgICAgICAgICAgICAxMDVcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IHRlbXBvcmFsIGxvYmVcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzgyNzcwMDFcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJUaGFsYW11c1wiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwNDU4MjcxXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EMDU5M1wiLFxyXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgMTIyLFxyXG4gICAgICAgICAgICAgICAgICAxMDEsXHJcbiAgICAgICAgICAgICAgICAgIDM4XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgdGhhbGFtdXNcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAxMjIsXHJcbiAgICAgICAgICAgICAgICAgIDEwMSxcclxuICAgICAgICAgICAgICAgICAgMzhcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IHRoYWxhbXVzXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjExOTQwNjAwMFwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gQW5hdG9taWMgUmVnaW9uc1wiLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMzFcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlRoaWdoXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzk4NjZcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQ5MTAwXCIsXHJcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAxNzcsXHJcbiAgICAgICAgICAgICAgICAgIDEyMixcclxuICAgICAgICAgICAgICAgICAgMTAxXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgdGhpZ2hcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAxNzcsXHJcbiAgICAgICAgICAgICAgICAgIDEyMixcclxuICAgICAgICAgICAgICAgICAgMTAxXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCB0aGlnaFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcclxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI2ODM2NzAwMFwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAyMjYsXHJcbiAgICAgICAgICAgICAgMjAyLFxyXG4gICAgICAgICAgICAgIDEzNFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTVcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInRob3JhY2ljIHZlcnRlYnJhbCBjb2x1bW5cIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTExNTAyXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDU4MTI2OVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVGhvcmFjaWMgc3BpbmVcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiVGhvcmFjaWMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTIyNDk1MDA2XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDE3NyxcclxuICAgICAgICAgICAgICAxMjIsXHJcbiAgICAgICAgICAgICAgMTAxXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NVwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwidGhvcmF4XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EMzAwMFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzA4MTcwOTZcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlRob3JheFwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJUaG9yYWNpYyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1MTE4NTAwOFwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICA0NyxcclxuICAgICAgICAgICAgICAxNTAsXHJcbiAgICAgICAgICAgICAgMTAzXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NVwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwidGh5bXVzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1DODAwMFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwNDAxMTNcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlRoeW11c1wiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJUaG9yYWNpYyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI5ODc1MDA5XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDYyLFxyXG4gICAgICAgICAgICAgIDE2MixcclxuICAgICAgICAgICAgICAxMTRcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI2MTEzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJ0aHlyb2lkIGdsYW5kXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1CNjAwMFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwNDAxMzJcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlRoeXJvaWRcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTWVkaWFzdGludW0gQW5hdG9teSBGaW5kaW5nIG9yIEZlYXR1cmVcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjY5NzQ4MDA2XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDE2NixcclxuICAgICAgICAgICAgICA4NCxcclxuICAgICAgICAgICAgICA5NFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMjhcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInRvbmd1ZVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNTMwMDBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDQwNDA4XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJUb25ndWVcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ3JhbmlvZmFjaWFsIEFuYXRvbWljIFJlZ2lvbnNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjIxOTc0MDA3XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDI1NSxcclxuICAgICAgICAgICAgICAyNTAsXHJcbiAgICAgICAgICAgICAgMjIwXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAyOFwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwidGVldGhcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTU0MDEwXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDA0MDQyNlwiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVG9vdGhcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ3JhbmlvZmFjaWFsIEFuYXRvbWljIFJlZ2lvbnNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjM4MTk5MDA4XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDE4MixcclxuICAgICAgICAgICAgICAyMjgsXHJcbiAgICAgICAgICAgICAgMjU1XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NVwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwidHJhY2hlYVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMjUwMDBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDQwNTc4XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJUcmFjaGVhXCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlRob3JhY2ljIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjQ0NTY3MDAxXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDE2NixcclxuICAgICAgICAgICAgICA3MCxcclxuICAgICAgICAgICAgICAzOFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjYxMTNcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInRyaWN1c3BpZCB2YWx2ZVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMzUxMDBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDQwOTYwXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJUcmljdXNwaWQgVmFsdmVcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTWVkaWFzdGludW0gQW5hdG9teSBGaW5kaW5nIG9yIEZlYXR1cmVcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjQ2MDMwMDAzXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVW5jaW5hdGUgZmFzY2ljdWx1c1wiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjI4MjcxXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMjgzMFwiLFxyXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgMTA2LFxyXG4gICAgICAgICAgICAgICAgICAxNzQsXHJcbiAgICAgICAgICAgICAgICAgIDE1NVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IHVuY2luYXRlIGZhc2NpY3VsdXNcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAxMDYsXHJcbiAgICAgICAgICAgICAgICAgIDE3NCxcclxuICAgICAgICAgICAgICAgICAgMTU1XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCB1bmNpbmF0ZSBmYXNjaWN1bHVzXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI2MjMwMDAzXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBBbmF0b21pYyBSZWdpb25zXCIsXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVXBwZXIgYXJtXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzA0NDY1MTZcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQ4MjAwXCIsXHJcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAxNzcsXHJcbiAgICAgICAgICAgICAgICAgIDEyMixcclxuICAgICAgICAgICAgICAgICAgMTAxXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgYXJtXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcclxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgMTc3LFxyXG4gICAgICAgICAgICAgICAgICAxMjIsXHJcbiAgICAgICAgICAgICAgICAgIDEwMVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgYXJtXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjQwOTgzMDAwXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBBbmF0b21pYyBSZWdpb25zXCIsXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVXBwZXIgbGltYlwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDE2NTU1XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EODAwMFwiLFxyXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgMTc3LFxyXG4gICAgICAgICAgICAgICAgICAxMjIsXHJcbiAgICAgICAgICAgICAgICAgIDEwMVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IHVwcGVyIGxpbWJcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAxNzcsXHJcbiAgICAgICAgICAgICAgICAgIDEyMixcclxuICAgICAgICAgICAgICAgICAgMTAxXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCB1cHBlciBsaW1iXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjUzMTIwMDA3XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlRob3JhY2ljIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU1XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJVcHBlciBsb2JlIG9mIGx1bmdcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIyNTc1NlwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMjg4MjBcIixcclxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgIDE3MixcclxuICAgICAgICAgICAgICAgICAgMTM4LFxyXG4gICAgICAgICAgICAgICAgICAxMTVcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJzdXBlcmlvciBsb2JlIG9mIHJpZ2h0IGx1bmdcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAxNzIsXHJcbiAgICAgICAgICAgICAgICAgIDEzOCxcclxuICAgICAgICAgICAgICAgICAgMTE1XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwic3VwZXJpb3IgbG9iZSBvZiBsZWZ0IGx1bmdcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNDU2NTMwMDlcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgMTI0LFxyXG4gICAgICAgICAgICAgIDE4NixcclxuICAgICAgICAgICAgICAyMjNcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDMxXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJ1cmV0aHJhXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC03NTAwMFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwNDE5NjdcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlVyZXRocmFcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIEFuYXRvbWljIFJlZ2lvbnNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjEzNjQ4MDA3XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDIwMyxcclxuICAgICAgICAgICAgICAxMzYsXHJcbiAgICAgICAgICAgICAgMTE2XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NFwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwidXJpbmFyeSBzeXN0ZW1cIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTcwMDAxXCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMTUwODc1M1wiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVXJpbmFyeSBzeXN0ZW1cIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQWJkb21pbmFsIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTIyNDg5MDA1XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDI1NSxcclxuICAgICAgICAgICAgICAxODEsXHJcbiAgICAgICAgICAgICAgMTU4XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2MFwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwidXRlcnVzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC04MzAwMFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwNDIxNDlcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlV0ZXJ1c1wiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJQZWx2aWMgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzNTAzOTAwN1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAxOTMsXHJcbiAgICAgICAgICAgICAgMTIzLFxyXG4gICAgICAgICAgICAgIDEwM1xyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjBcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInZhZ2luYVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtODIwMDBcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDQyMjMyXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJWYWdpbmFcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiUGVsdmljIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzY3ODQwMDFcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiUGVsdmljIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjBcIixcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlZhcyBkZWZlcmVuc1wiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDQyMzYwXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC05NjAwMFwiLFxyXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgMjQxLFxyXG4gICAgICAgICAgICAgICAgICAxNzIsXHJcbiAgICAgICAgICAgICAgICAgIDE1MVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGRlZmVyZW50IGR1Y3RcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAyNDEsXHJcbiAgICAgICAgICAgICAgICAgIDE3MixcclxuICAgICAgICAgICAgICAgICAgMTUxXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBkZWZlcmVudCBkdWN0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjU3NjcxMDA3XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBBbmF0b21pYyBSZWdpb25zXCIsXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiWnlnb21hXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwNDM1MzlcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTExMTY2XCIsXHJcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgICAgICAyNTUsXHJcbiAgICAgICAgICAgICAgICAgIDI1NSxcclxuICAgICAgICAgICAgICAgICAgMTY3XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgenlnb21hdGljIGJvbmVcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXHJcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcclxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxMzg4MTAwNlwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInNob3dBbmF0b215XCI6IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTW9ycGhvbG9naWNhbGx5IEFsdGVyZWQgU3RydWN0dXJlXCIsXHJcbiAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjQ5NzU1MDAzXCIsXHJcbiAgICAgICAgXCJjaWRcIjogXCI3MDUxXCIsXHJcbiAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjIxMTk4XCIsXHJcbiAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJNLTAxMDAwXCIsXHJcbiAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiU2VnbWVudGF0aW9uIFByb3BlcnR5IENhdGVnb3JpZXNcIixcclxuICAgICAgICBcIlR5cGVcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAxNDUsXHJcbiAgICAgICAgICAgICAgNjAsXHJcbiAgICAgICAgICAgICAgNjZcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkJsb29kIGNsb3RcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImNsb3RcIixcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU5XCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDMwMjE0OFwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIk0tMzUwMDBcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGVzaW9uIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzU3NTMwMDlcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgMjA1LFxyXG4gICAgICAgICAgICAgIDIwNSxcclxuICAgICAgICAgICAgICAxMDBcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkN5c3RcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImN5c3RcIixcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU5XCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAxMDcwOVwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIk0tMzM0MEFcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGVzaW9uIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzY3NjQzMDAxXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDE0MCxcclxuICAgICAgICAgICAgICAyMjQsXHJcbiAgICAgICAgICAgICAgMjI4XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJFZGVtYVwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiZWRlbWFcIixcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU5XCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAxMzYwNFwiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIk0tMzYzMDBcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGVzaW9uIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzk2NTQwMDJcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgMTUwLFxyXG4gICAgICAgICAgICAgIDk4LFxyXG4gICAgICAgICAgICAgIDgzXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJFbWJvbHVzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJlbWJvbGlzbVwiLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTlcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMxNzA0MjEyXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiTS0zNTMwMFwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMZXNpb24gU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1NTU4NDAwNVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAxODgsXHJcbiAgICAgICAgICAgICAgNjUsXHJcbiAgICAgICAgICAgICAgMjhcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkhlbW9ycmhhZ2VcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImJsZWVkaW5nXCIsXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1OVwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTkwODBcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJNLTM3MDAwXCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxlc2lvbiBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjUwOTYwMDA1XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDE0NCxcclxuICAgICAgICAgICAgICAyMzgsXHJcbiAgICAgICAgICAgICAgMTQ0XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJNYXNzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJtYXNzXCIsXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1OVwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzA1Nzc1NTlcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJNLTAzMDAwXCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxlc2lvbiBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjQxNDcwMDdcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgMjE2LFxyXG4gICAgICAgICAgICAgIDE5MSxcclxuICAgICAgICAgICAgICAyMTZcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk5lY3Jvc2lzXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJuZWNyb3Npc1wiLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTlcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDI3NTQwXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiTS01NDAwMFwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMZXNpb24gU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI2NTc0MDAxXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwic2hvd0FuYXRvbXlcIjogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkJvZHkgU3Vic3RhbmNlXCIsXHJcbiAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjkxNzIwMDAyXCIsXHJcbiAgICAgICAgXCJjaWRcIjogXCJcIixcclxuICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzA1MDQwODJcIixcclxuICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDAwODBcIixcclxuICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJcIixcclxuICAgICAgICBcIlR5cGVcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgIDE0NSxcclxuICAgICAgICAgICAgICAzMFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQmlsZVwiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiYmlsZVwiLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDA1Mzg4XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC02MDY1MFwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzAxNTAwMDRcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgMTcwLFxyXG4gICAgICAgICAgICAgIDI1MCxcclxuICAgICAgICAgICAgICAyNTBcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkJvZHkgZmx1aWRcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImZsdWlkXCIsXHJcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2NlwiLFxyXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMDU4ODlcIixcclxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQwMDcwXCIsXHJcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXHJcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzMjQ1NzAwNVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcclxuICAgICAgICAgICAgICA3OCxcclxuICAgICAgICAgICAgICA2MyxcclxuICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJGZWNlc1wiLFxyXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcclxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiZmVjZXNcIixcclxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTY2XCIsXHJcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAxNTczM1wiLFxyXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNTk2NjZcIixcclxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcclxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjM5NDc3MDAyXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xyXG4gICAgICAgICAgICAgIDIxOCxcclxuICAgICAgICAgICAgICAyNTUsXHJcbiAgICAgICAgICAgICAgMjU1XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJHYXNcIixcclxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXHJcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImdhc1wiLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDE3MTEwXCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiQy0xMDA4MFwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzQ5NDcwMDlcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXHJcbiAgICAgICAgICAgICAgMjE0LFxyXG4gICAgICAgICAgICAgIDIzMCxcclxuICAgICAgICAgICAgICAxMzBcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlVyaW5lXCIsXHJcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxyXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJ1cmluZVwiLFxyXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcclxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDQyMDM2XCIsXHJcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC03MDA2MFwiLFxyXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxyXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzgwMTQwMDVcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJzaG93QW5hdG9teVwiOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG59YDtcclxuXHJcbmNvbnN0IHBhcnNlZEpzb24gPSBKU09OLnBhcnNlKGpzb24pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFyc2VkSnNvbjtcclxuIiwiaW1wb3J0IGluaXQgZnJvbSAnLi9pbml0LmpzJztcclxuXHJcbmNvbnN0IFRPT0xCQVJfQlVUVE9OX1RZUEVTID0ge1xyXG4gIENPTU1BTkQ6ICdjb21tYW5kJyxcclxuICBTRVRfVE9PTF9BQ1RJVkU6ICdzZXRUb29sQWN0aXZlJ1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIC8qKlxyXG4gICAqIE9ubHkgcmVxdWlyZWQgcHJvcGVydHkuIFNob3VsZCBiZSBhIHVuaXF1ZSB2YWx1ZSBhY3Jvc3MgYWxsIGV4dGVuc2lvbnMuXHJcbiAgICovXHJcbiAgaWQ6ICdvaGlmLXNlZ21lbnRhdGlvbi1leHRlbnNpb24nLFxyXG5cclxuICBwcmVSZWdpc3RyYXRpb24oY29uZmlndXJhdGlvbiA9IHt9KSB7XHJcbiAgICBpbml0KGNvbmZpZ3VyYXRpb24pO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVycyBvbmUgb3IgbW9yZSBuYW1lZCBjb21tYW5kcyBzY29wZWQgdG8gYSBjb250ZXh0LiBDb21tYW5kcyBhcmVcclxuICAgKiB0aGUgcHJpbWFyeSBtZWFucyBmb3IuLi5cclxuICAgKi9cclxuICBnZXRDb21tYW5kc01vZHVsZSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRlZmF1bHRDb250ZXh0OiAnVklFV0VSJyxcclxuICAgICAgYWN0aW9uczoge30sXHJcbiAgICAgIGRlZmluaXRpb25zOiBbXVxyXG4gICAgfTtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBBbGxvd3MgeW91IHRvIHByb3ZpZGUgdG9vbGJhciBkZWZpbml0aW9ucyB0aGF0IHdpbGwgYmUgbWVyZ2VkIHdpdGggYW55XHJcbiAgICogZXhpc3RpbmcgYXBwbGljYXRpb24gdG9vbGJhciBjb25maWd1cmF0aW9uLiBVc2VkIHRvIGRldGVybWluZSB3aGljaFxyXG4gICAqIGJ1dHRvbnMgc2hvdWxkIGJlIHZpc2libGUgd2hlbiwgdGhlaXIgb3JkZXIsIHdoYXQgaGFwcGVucyB3aGVuIHRoZXkncmVcclxuICAgKiBjbGlja2VkLCBldGMuXHJcbiAgICovXHJcbiAgZ2V0VG9vbGJhck1vZHVsZSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRlZmluaXRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICdmcmVlaGFuZFJvaVRvb2xzJyxcclxuICAgICAgICAgIGxhYmVsOiAnUk9JJyxcclxuICAgICAgICAgIGljb246ICdsZXZlbCcsXHJcbiAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBpZDogJ0ZyZWVoYW5kUm9pJyxcclxuICAgICAgICAgICAgICBsYWJlbDogJ0RyYXcnLFxyXG4gICAgICAgICAgICAgIGljb246ICdsZXZlbCcsXHJcbiAgICAgICAgICAgICAgdHlwZTogVE9PTEJBUl9CVVRUT05fVFlQRVMuU0VUX1RPT0xfQUNUSVZFLFxyXG4gICAgICAgICAgICAgIGNvbW1hbmROYW1lOiAnZW5hYmxlRnJlZWhhbmRSb2knXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBpZDogJ0ZyZWVoYW5kUm9pU2N1bHB0b3InLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiAnU2N1bHB0JyxcclxuICAgICAgICAgICAgICBpY29uOiAnbGV2ZWwnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFRPT0xCQVJfQlVUVE9OX1RZUEVTLlNFVF9UT09MX0FDVElWRSxcclxuICAgICAgICAgICAgICBjb21tYW5kTmFtZTogJ2VuYWJsZUZyZWVoYW5kUm9pU2N1bHB0b3InXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnYnJ1c2hUb29scycsXHJcbiAgICAgICAgICBsYWJlbDogJ1NlZ21lbnQnLFxyXG4gICAgICAgICAgaWNvbjogJ2xldmVsJyxcclxuICAgICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGlkOiAnQnJ1c2gnLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiAnTWFudWFsJyxcclxuICAgICAgICAgICAgICBpY29uOiAnbGV2ZWwnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFRPT0xCQVJfQlVUVE9OX1RZUEVTLlNFVF9UT09MX0FDVElWRSxcclxuICAgICAgICAgICAgICBjb21tYW5kTmFtZTogJ2VuYWJsZWRCcnVzaCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGlkOiAnQnJ1c2gzREhVR2F0ZWRUb29sJyxcclxuICAgICAgICAgICAgICBsYWJlbDogJ1NtYXJ0IENUJyxcclxuICAgICAgICAgICAgICBpY29uOiAnbGV2ZWwnLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFRPT0xCQVJfQlVUVE9OX1RZUEVTLlNFVF9UT09MX0FDVElWRSxcclxuICAgICAgICAgICAgICBjb21tYW5kTmFtZTogJ2VuYWJsZWRCcnVzaDNESFVHYXRlZFRvb2wnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBpZDogJ0JydXNoM0RBdXRvR2F0ZWRUb29sJyxcclxuICAgICAgICAgICAgICBsYWJlbDogJ0F1dG8nLFxyXG4gICAgICAgICAgICAgIGljb246ICdsZXZlbCcsXHJcbiAgICAgICAgICAgICAgdHlwZTogVE9PTEJBUl9CVVRUT05fVFlQRVMuU0VUX1RPT0xfQUNUSVZFLFxyXG4gICAgICAgICAgICAgIGNvbW1hbmROYW1lOiAnZW5hYmxlZEJydXNoM0RBdXRvR2F0ZWRUb29sJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBkZWZhdWx0Q29udGV4dDogJ0FDVElWRV9WSUVXUE9SVDo6Q09STkVSU1RPTkUnXHJcbiAgICB9O1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIE5vdCB5ZXQgaW1wbGVtZW50ZWRcclxuICAgKi9cclxuICBnZXRQYW5lbE1vZHVsZTogKCkgPT4gbnVsbFxyXG59O1xyXG4iLCJpbXBvcnQgeyBzdG9yZSwgcmVnaXN0ZXIsIGFkZFRvb2wgfSBmcm9tICdjb3JuZXJzdG9uZS10b29scyc7XHJcbmltcG9ydCBmcmVlaGFuZDNETW9kdWxlIGZyb20gJy4vbW9kdWxlcy9mcmVlaGFuZDNETW9kdWxlLmpzJztcclxuaW1wb3J0IGV4dGVuZEJydXNoTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9leHRlbmRCcnVzaE1vZHVsZS5qcyc7XHJcblxyXG5pbXBvcnQgQnJ1c2gzRFRvb2wgZnJvbSAnLi90b29scy9CcnVzaDNEVG9vbC5qcyc7XHJcbmltcG9ydCBCcnVzaDNESFVHYXRlZFRvb2wgZnJvbSAnLi90b29scy9CcnVzaDNESFVHYXRlZFRvb2wuanMnO1xyXG5pbXBvcnQgQnJ1c2gzREF1dG9HYXRlZFRvb2wgZnJvbSAnLi90b29scy9CcnVzaDNEQXV0b0dhdGVkVG9vbC5qcyc7XHJcbmltcG9ydCBGcmVlaGFuZFJvaTNEVG9vbCBmcm9tICcuL3Rvb2xzL0ZyZWVoYW5kUm9pM0RUb29sLmpzJztcclxuaW1wb3J0IEZyZWVoYW5kUm9pM0RTY3VscHRvclRvb2wgZnJvbSAnLi90b29scy9GcmVlaGFuZFJvaTNEU2N1bHB0b3JUb29sLmpzJztcclxuXHJcbmNvbnN0IG1vZHVsZXMgPSBzdG9yZS5tb2R1bGVzO1xyXG5cclxuY29uc3QgZGVmYXVsdENvbmZpZyA9IHtcclxuICBtYXhSYWRpdXM6IDY0LFxyXG4gIGhvbGVGaWxsOiAyLFxyXG4gIGhvbGVGaWxsUmFuZ2U6IFswLCAyMF0sXHJcbiAgc3RyYXlSZW1vdmU6IDUsXHJcbiAgc3RyYXlSZW1vdmVSYW5nZTogWzAsIDk5XSxcclxuICBpbnRlcnBvbGF0ZTogZmFsc2UsXHJcbiAgc2hvd0ZyZWVoYW5kU3RhdHM6IGZhbHNlLFxyXG4gIGJydXNoM2RUb29sTmFtZTogJ0JydXNoM0RUb29sJyxcclxuICBicnVzaDNESFVHYXRlZFRvb2xOYW1lOiAnQnJ1c2gzREhVR2F0ZWRUb29sJyxcclxuICBicnVzaDNEQXV0b0dhdGVkVG9vbDogJ0JydXNoM0RBdXRvR2F0ZWRUb29sJyxcclxuICBmcmVlaGFuZFJvaTNEVG9vbDogJ0ZyZWVoYW5kUm9pM0RUb29sJyxcclxuICBmcmVlaGFuZFJvaTNEU2N1bHB0b3JUb29sOiAnRnJlZWhhbmRSb2kzRFNjdWxwdG9yVG9vbCcsXHJcbiAgZ2F0ZXM6IFtcclxuICAgIHtcclxuICAgICAgLy8gaHR0cHM6Ly93d3cubmNiaS5ubG0ubmloLmdvdi9wbWMvYXJ0aWNsZXMvUE1DNDMwOTUyMi9cclxuICAgICAgbmFtZTogJ2FkaXBvc2UnLFxyXG4gICAgICByYW5nZTogWy0xOTAsIC0zMF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIC8vIGh0dHBzOi8vd3d3Lm5jYmkubmxtLm5paC5nb3YvcG1jL2FydGljbGVzL1BNQzQzMDk1MjIvXHJcbiAgICAgIG5hbWU6ICdtdXNjbGUnLFxyXG4gICAgICByYW5nZTogWy0yOSwgMTUwXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2N1c3RvbScsXHJcbiAgICAgIHJhbmdlOiBbMCwgMTAwXVxyXG4gICAgfVxyXG4gIF1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoY29uZmlndXJhdGlvbiA9IHt9KSB7XHJcbiAgY29uc3QgYnJ1c2hNb2R1bGUgPSBtb2R1bGVzLmJydXNoO1xyXG4gIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRDb25maWcsIGNvbmZpZ3VyYXRpb24pO1xyXG5cclxuICBleHRlbmRCcnVzaE1vZHVsZShicnVzaE1vZHVsZSwgY29uZmlnKTtcclxuXHJcbiAgcmVnaXN0ZXIoJ21vZHVsZScsICdmcmVlaGFuZDNEJywgZnJlZWhhbmQzRE1vZHVsZSk7XHJcbiAgY29uc3QgZnJlZWhhbmQzRFN0b3JlID0gbW9kdWxlcy5mcmVlaGFuZDNEO1xyXG5cclxuICBmcmVlaGFuZDNEU3RvcmUuc3RhdGUuaW50ZXJwb2xhdGUgPSBjb25maWcuaW50ZXJwb2xhdGU7XHJcbiAgZnJlZWhhbmQzRFN0b3JlLnN0YXRlLmRpc3BsYXlTdGF0cyA9IGNvbmZpZy5zaG93RnJlZWhhbmRTdGF0cztcclxuXHJcbiAgYWRkVG9vbChCcnVzaDNEVG9vbCwgeyBuYW1lOiBjb25maWcuYnJ1c2gzZFRvb2xOYW1lIH0pO1xyXG4gIGFkZFRvb2woQnJ1c2gzREhVR2F0ZWRUb29sLCB7IG5hbWU6IGNvbmZpZy5icnVzaDNESFVHYXRlZFRvb2xOYW1lIH0pO1xyXG4gIGFkZFRvb2woQnJ1c2gzREF1dG9HYXRlZFRvb2wsIHsgbmFtZTogY29uZmlnLmJydXNoM0RBdXRvR2F0ZWRUb29sIH0pO1xyXG4gIGFkZFRvb2woRnJlZWhhbmRSb2kzRFRvb2wsIHsgbmFtZTogY29uZmlnLmZyZWVoYW5kUm9pM0RUb29sIH0pO1xyXG4gIGFkZFRvb2woRnJlZWhhbmRSb2kzRFNjdWxwdG9yVG9vbCwge1xyXG4gICAgbmFtZTogY29uZmlnLmZyZWVoYW5kUm9pM0RTY3VscHRvclRvb2wsXHJcbiAgICByZWZlcmVuY2VkVG9vbE5hbWU6IGNvbmZpZy5mcmVlaGFuZFJvaTNEVG9vbFxyXG4gIH0pO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4dGVuZEJydXNoTW9kdWxlKGJydXNoTW9kdWxlLCBjb25maWcpIHtcclxuICBjb25zdCBicnVzaFN0YXRlID0gYnJ1c2hNb2R1bGUuc3RhdGU7XHJcbiAgY29uc3QgZ2V0dGVycyA9IGJydXNoTW9kdWxlLmdldHRlcnM7XHJcbiAgY29uc3Qgc2V0dGVycyA9IGJydXNoTW9kdWxlLnNldHRlcnM7XHJcblxyXG4gIGJydXNoU3RhdGUuaG9sZUZpbGwgPSBjb25maWcuaG9sZUZpbGw7XHJcbiAgYnJ1c2hTdGF0ZS5ob2xlRmlsbFJhbmdlID0gY29uZmlnLmhvbGVGaWxsUmFuZ2U7XHJcbiAgYnJ1c2hTdGF0ZS5zdHJheVJlbW92ZSA9IGNvbmZpZy5zdHJheVJlbW92ZTtcclxuICBicnVzaFN0YXRlLnN0cmF5UmVtb3ZlUmFuZ2UgPSBjb25maWcuc3RyYXlSZW1vdmVSYW5nZTtcclxuICBicnVzaFN0YXRlLmdhdGVzID0gY29uZmlnLmdhdGVzO1xyXG4gIGJydXNoU3RhdGUuYWN0aXZlR2F0ZSA9IGJydXNoU3RhdGUuZ2F0ZXNbMF0ubmFtZTtcclxuICBicnVzaFN0YXRlLm1heFJhZGl1cyA9IGNvbmZpZy5tYXhSYWRpdXM7XHJcblxyXG4gIGdldHRlcnMuYWN0aXZlR2F0ZVJhbmdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYWN0aXZlR2F0ZSA9IGJydXNoU3RhdGUuYWN0aXZlR2F0ZTtcclxuICAgIGNvbnN0IGdhdGVzID0gYnJ1c2hTdGF0ZS5nYXRlcztcclxuXHJcbiAgICBjb25zdCBnYXRlSW5kZXggPSBnYXRlcy5maW5kSW5kZXgoZWxlbWVudCA9PiB7XHJcbiAgICAgIHJldHVybiBlbGVtZW50Lm5hbWUgPT09IGFjdGl2ZUdhdGU7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYnJ1c2hTdGF0ZS5nYXRlc1tnYXRlSW5kZXhdLnJhbmdlO1xyXG4gIH07XHJcblxyXG4gIGdldHRlcnMuY3VzdG9tR2F0ZVJhbmdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZ2F0ZXMgPSBicnVzaFN0YXRlLmdhdGVzO1xyXG5cclxuICAgIGNvbnN0IGdhdGVJbmRleCA9IGdhdGVzLmZpbmRJbmRleChlbGVtZW50ID0+IHtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQubmFtZSA9PT0gJ2N1c3RvbSc7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYnJ1c2hTdGF0ZS5nYXRlc1tnYXRlSW5kZXhdLnJhbmdlO1xyXG4gIH07XHJcblxyXG4gIHNldHRlcnMuY3VzdG9tR2F0ZVJhbmdlID0gKG1pbiwgbWF4KSA9PiB7XHJcbiAgICBjb25zdCBnYXRlcyA9IGJydXNoU3RhdGUuZ2F0ZXM7XHJcblxyXG4gICAgY29uc3QgZ2F0ZUluZGV4ID0gZ2F0ZXMuZmluZEluZGV4KGVsZW1lbnQgPT4ge1xyXG4gICAgICByZXR1cm4gZWxlbWVudC5uYW1lID09PSAnY3VzdG9tJztcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGN1c3RvbUdhdGVSYW5nZSA9IGJydXNoU3RhdGUuZ2F0ZXNbZ2F0ZUluZGV4XS5yYW5nZTtcclxuXHJcbiAgICBpZiAobWluICE9PSBudWxsKSB7XHJcbiAgICAgIGN1c3RvbUdhdGVSYW5nZVswXSA9IG1pbjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWF4ICE9PSBudWxsKSB7XHJcbiAgICAgIGN1c3RvbUdhdGVSYW5nZVsxXSA9IG1heDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBnZXR0ZXJzLmltcG9ydE1ldGFkYXRhID0gc2VyaWVzSW5zdGFuY2VVaWQgPT4ge1xyXG4gICAgaWYgKGJydXNoTW9kdWxlLnN0YXRlLmltcG9ydCAmJiBicnVzaE1vZHVsZS5zdGF0ZS5pbXBvcnRbc2VyaWVzSW5zdGFuY2VVaWRdKSB7XHJcbiAgICAgIHJldHVybiBicnVzaE1vZHVsZS5zdGF0ZS5pbXBvcnRbc2VyaWVzSW5zdGFuY2VVaWRdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybjtcclxuICB9O1xyXG5cclxuICBzZXR0ZXJzLmltcG9ydE1ldGFkYXRhID0gKHNlcmllc0luc3RhbmNlVWlkLCBtZXRhZGF0YSkgPT4ge1xyXG4gICAgLy8gU3RvcmUgdGhhdCB3ZSd2ZSBpbXBvcnRlZCBhIGNvbGxlY3Rpb24gZm9yIHRoaXMgc2VyaWVzLlxyXG4gICAgaWYgKCFicnVzaE1vZHVsZS5zdGF0ZS5pbXBvcnQpIHtcclxuICAgICAgYnJ1c2hNb2R1bGUuc3RhdGUuaW1wb3J0ID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgYnJ1c2hNb2R1bGUuc3RhdGUuaW1wb3J0W3Nlcmllc0luc3RhbmNlVWlkXSA9IG1ldGFkYXRhO1xyXG4gIH07XHJcblxyXG4gIHNldHRlcnMuaW1wb3J0TW9kaWZpZWQgPSBzZXJpZXNJbnN0YW5jZVVpZCA9PiB7XHJcbiAgICBjb25zdCBpbXBvcnRNZXRhZGF0YSA9IGJydXNoTW9kdWxlLnN0YXRlLmltcG9ydFtzZXJpZXNJbnN0YW5jZVVpZF07XHJcblxyXG4gICAgaWYgKGltcG9ydE1ldGFkYXRhLm1vZGlmaWVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpbXBvcnRNZXRhZGF0YS5tb2RpZmllZCA9IHRydWU7XHJcblxyXG4gICAgLy8gSmFtZXNBUGV0dHNcclxuICAgIC8vIFRPRE86IEZvcmNlIHVwZGF0ZSBvZiBjb21wb25lbnQuXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgY29ybmVyc3RvbmUgZnJvbSAnY29ybmVyc3RvbmUtY29yZSc7XHJcbmltcG9ydCBnZW5lcmF0ZVVJRCBmcm9tICcuLi91dGlsL2dlbmVyYXRlVUlELmpzJztcclxuaW1wb3J0IGdldFNlcmllc0luc3RhbmNlVWlkRnJvbUVuYWJsZWRFbGVtZW50IGZyb20gJy4uL3V0aWwvZ2V0U2VyaWVzSW5zdGFuY2VVaWRGcm9tRW5hYmxlZEVsZW1lbnQuanMnO1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtzZXJpZXNbXX0gc2VyaWVzQ29sbGVjdGlvblxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBbXHJcbiAqICAgc2VyaWVzMSxcclxuICogICBzZXJpZXMyXHJcbiAqIF07XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtvYmplY3R9IHNlcmllc1xyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdWlkIFRoZSBzZXJpZXNJbnN0YW5jZVVpZFxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gYWN0aXZlU3RydWN0dXJlU2V0SW5kZXggVGhlIGFjdGl2ZVN0cnVjdHVyZVNldCB3aXRoaW4gdGhlIHNlcmllcy5cclxuICogQHByb3BlcnR5IHtzdHJ1Y3R1cmVTZXRbXX0gc3RydWN0dXJlU2V0Q29sbGVjdGlvbiBBbiBhcnJheSBvZiBzdHJ1Y3R1cmVTZXRzLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiB7XHJcbiAqICB1aWQ6ICdteVNlcmllc0luc3RhbmNlVWlkJyxcclxuICogIGFjdGl2ZVN0cnVjdHVyZVNldEluZGV4OiAwLFxyXG4gKiAgc3RydWN0dXJlU2V0Q29sbGVjdGlvbixcclxuICogfTtcclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge29iamVjdH0gc3RydWN0dXJlU2V0XHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB1aWQgVGhlIHN0cnVjdHVyZVNldFVpZFxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbmFtZSBBIGh1bWFuIHJlYWRhYmxlIGRlc2NyaXB0b3Igb2YgdGhlIHN0cnVjdHVyZVNldC5cclxuICogQHByb3BlcnR5IHtib29sZWFufSBpc0xvY2tlZCBXaGV0aGVyIHRoZSBzdHJ1Y3R1cmVTZXQgaXMgaW1tdXRhYmxlLlxyXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHZpc2libGUgV2hldGhlciB0aGUgc3RydWN0dXJlU2V0IHNob3VsZCBiZSByZW5kZXJlZC5cclxuICogQHByb3BlcnR5IHtudW1iZXJ9IGFjdGl2ZVJPSUNvbnRvdXJJbmRleCBUaGUgaW5kZXggb2YgdGhlIGFjdGl2ZSBST0lDb250b3VyLlxyXG4gKiBAcHJvcGVydHkge1JPSUNvbnRvdXJbXX0gUk9JQ29udG91ckNvbGxlY3Rpb24gQW4gYXJyYXkgb2YgUk9JQ29udG91cnMuXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIHtcclxuICogICB1aWQ6ICdteVN0cnVjdHVyZVNldFVpZCcsXHJcbiAqICAgbmFtZTogYG15TG92ZWx5U3RydWN0dXJlU2V0YCxcclxuICogICBpc0xvY2tlZDogZmFsc2UsXHJcbiAqICAgdmlzaWJsZTogdHJ1ZSxcclxuICogICBhY3RpdmVST0lDb250b3VySW5kZXg6IDcsXHJcbiAqICAgUk9JQ29udG91ckNvbGxlY3Rpb25cclxuICogfTtcclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge29iamVjdH0gUk9JQ29udG91clxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdWlkIFRoZSBST0lDb250b3VyVWlkLlxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbmFtZSBBIGh1bWFuIHJlYWRhYmxlIGRlc2NyaXB0b3Igb2YgdGhlIGJpb2xvZ2ljYWwgb2JqZWN0IHRoZSBjb250b3VyIGVuY2xvc2VzLlxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gY29sb3IgQSBjc3MgY29sb3IgdG8gcmVuZGVyIHRoZSB2b2x1bWUgd2l0aC5cclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHBvbHlnb25Db3VudCBUaGUgbnVtYmVyIG9mIHBvbHlnb25zIHRoYXQgY29tcHJpc2UgdGhlIFJPSUNvbnRvdXIuXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIHtcclxuICogIHVpZDogJ215Uk9JQ29udG91clVpZCcsXHJcbiAqICBuYW1lOiAnbXlMb3ZlbHlST0lDb250b3VyJyxcclxuICogIGNvbG9yOiAnY29ybmZsb3dlcmJsdWUnLFxyXG4gKiAgcG9seWdvbkNvdW50OiAnMzQnXHJcbiAqIH07XHJcbiAqL1xyXG5cclxuLy8gRWFjaCBjb250b3VyIHJlZmVyZW5jZXMgYSBzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkLCBST0lDb250b3VyVWlkLlxyXG5cclxuY29uc3Qgc3RhdGUgPSB7XHJcbiAgc2VyaWVzQ29sbGVjdGlvbjogW10sXHJcbiAgaW50ZXJwb2xhdGU6IGZhbHNlLFxyXG4gIGRpc3BsYXlTdGF0czogZmFsc2VcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrKG9iamVjdCwgbmFtZSkge1xyXG4gIGlmICghb2JqZWN0KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEluc3VmZmljaWVudCBpbmZvcm1hdGlvbiBwcm92aWRlZCwgbXVzdCBwcm92aWRlICR7bmFtZX0uYCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTZXJpZXMoc2VyaWVzSW5zdGFuY2VVaWQpIHtcclxuICBjaGVjayhzZXJpZXNJbnN0YW5jZVVpZCwgJ3Nlcmllc0luc3RhbmNlVWlkJyk7XHJcblxyXG4gIHJldHVybiBzdGF0ZS5zZXJpZXNDb2xsZWN0aW9uLmZpbmQoc2VyaWVzID0+IHtcclxuICAgIHJldHVybiBzZXJpZXMudWlkID09PSBzZXJpZXNJbnN0YW5jZVVpZDtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U3RydWN0dXJlU2V0KHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQgPSAnREVGQVVMVCcpIHtcclxuICBjaGVjayhzdHJ1Y3R1cmVTZXRVaWQsICdzdHJ1Y3R1cmVTZXRVaWQnKTtcclxuXHJcbiAgY29uc3Qgc2VyaWVzID0gZ2V0U2VyaWVzKHNlcmllc0luc3RhbmNlVWlkKTtcclxuXHJcbiAgaWYgKCFzZXJpZXMpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHJldHVybiBzZXJpZXMuc3RydWN0dXJlU2V0Q29sbGVjdGlvbi5maW5kKHN0cnVjdHVyZVNldCA9PiB7XHJcbiAgICByZXR1cm4gc3RydWN0dXJlU2V0LnVpZCA9PT0gc3RydWN0dXJlU2V0VWlkO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRST0lDb250b3VyKHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQsIFJPSUNvbnRvdXJVaWQpIHtcclxuICBjaGVjayhST0lDb250b3VyVWlkLCAnUk9JQ29udG91clVpZCcpO1xyXG5cclxuICBjb25zdCBzdHJ1Y3R1cmVTZXQgPSBnZXRTdHJ1Y3R1cmVTZXQoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCk7XHJcblxyXG4gIGlmICghc3RydWN0dXJlU2V0KSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3RydWN0dXJlU2V0LlJPSUNvbnRvdXJDb2xsZWN0aW9uLmZpbmQoUk9JQ29udG91ciA9PiB7XHJcbiAgICByZXR1cm4gUk9JQ29udG91ciAmJiBST0lDb250b3VyLnVpZCA9PT0gUk9JQ29udG91clVpZDtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Uk9JQ29udG91ckluZGV4KHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQsIFJPSUNvbnRvdXJVaWQpIHtcclxuICBjaGVjayhST0lDb250b3VyVWlkLCAnUk9JQ29udG91clVpZCcpO1xyXG5cclxuICBjb25zdCBzdHJ1Y3R1cmVTZXQgPSBnZXRTdHJ1Y3R1cmVTZXQoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCk7XHJcblxyXG4gIGlmICghc3RydWN0dXJlU2V0KSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3RydWN0dXJlU2V0LlJPSUNvbnRvdXJDb2xsZWN0aW9uLmZpbmRJbmRleChST0lDb250b3VyID0+IHtcclxuICAgIHJldHVybiBST0lDb250b3VyLnVpZCA9PT0gUk9JQ29udG91clVpZDtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QWN0aXZlU3RydWN0dXJlU2V0SW5kZXgoc2VyaWVzSW5zdGFuY2VVaWQpIHtcclxuICBjb25zdCBzZXJpZXMgPSBnZXRTZXJpZXMoc2VyaWVzSW5zdGFuY2VVaWQpO1xyXG5cclxuICByZXR1cm4gc2VyaWVzLmFjdGl2ZVN0cnVjdHVyZVNldEluZGV4O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBY3RpdmVST0lDb250b3VySW5kZXgoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCA9ICdERUZBVUxUJykge1xyXG4gIGNvbnN0IHN0cnVjdHVyZVNldCA9IGdldFN0cnVjdHVyZVNldChzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkKTtcclxuXHJcbiAgcmV0dXJuIHN0cnVjdHVyZVNldC5hY3RpdmVST0lDb250b3VySW5kZXg7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFjdGl2ZVJPSUNvbnRvdXIoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCA9ICdERUZBVUxUJykge1xyXG4gIGNvbnN0IHN0cnVjdHVyZVNldCA9IGdldFN0cnVjdHVyZVNldChzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkKTtcclxuXHJcbiAgY29uc3QgYWN0aXZlUk9JQ29udG91ckluZGV4ID0gc3RydWN0dXJlU2V0LmFjdGl2ZVJPSUNvbnRvdXJJbmRleDtcclxuXHJcbiAgaWYgKGFjdGl2ZVJPSUNvbnRvdXJJbmRleCA9PT0gbnVsbCB8fCBhY3RpdmVST0lDb250b3VySW5kZXggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHN0cnVjdHVyZVNldC5ST0lDb250b3VyQ29sbGVjdGlvblthY3RpdmVST0lDb250b3VySW5kZXhdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTZXJpZXMoc2VyaWVzSW5zdGFuY2VVaWQpIHtcclxuICBjaGVjayhzZXJpZXNJbnN0YW5jZVVpZCk7XHJcblxyXG4gIGNvbnN0IHNlcmllcyA9IHtcclxuICAgIHVpZDogc2VyaWVzSW5zdGFuY2VVaWQsXHJcbiAgICBhY3RpdmVTdHJ1Y3R1cmVTZXRJbmRleDogbnVsbCxcclxuICAgIHN0cnVjdHVyZVNldENvbGxlY3Rpb246IFtdXHJcbiAgfTtcclxuXHJcbiAgc3RhdGUuc2VyaWVzQ29sbGVjdGlvbi5wdXNoKHNlcmllcyk7XHJcblxyXG4gIC8vIEFkZCBhIGRlZmF1bHQgc3RydWN0dXJlU2V0IGZvciB0aGUgc2VyaWVzLlxyXG4gIHNldFN0cnVjdHVyZVNldChzZXJpZXNJbnN0YW5jZVVpZCwgJ2RlZmF1bHQnLCB7XHJcbiAgICB1aWQ6ICdERUZBVUxUJ1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTdHJ1Y3R1cmVTZXQoc2VyaWVzSW5zdGFuY2VVaWQsIG5hbWUsIG9wdGlvbnMgPSB7fSkge1xyXG4gIGNoZWNrKG5hbWUsICduYW1lJyk7XHJcblxyXG4gIGxldCBzZXJpZXMgPSBnZXRTZXJpZXMoc2VyaWVzSW5zdGFuY2VVaWQpO1xyXG5cclxuICBpZiAoIXNlcmllcykge1xyXG4gICAgLy8gR2VuZXJhdGUgdGhlIHNlcmllcy5cclxuICAgIHNldFNlcmllcyhzZXJpZXNJbnN0YW5jZVVpZCk7XHJcbiAgICBzZXJpZXMgPSBnZXRTZXJpZXMoc2VyaWVzSW5zdGFuY2VVaWQpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3RydWN0dXJlU2V0ID0ge1xyXG4gICAgdWlkOiBvcHRpb25zLnVpZCA/IG9wdGlvbnMudWlkIDogZ2VuZXJhdGVVSUQoKSxcclxuICAgIG5hbWUsXHJcbiAgICBpc0xvY2tlZDogb3B0aW9ucy5pc0xvY2tlZCA/IG9wdGlvbnMuaXNMb2NrZWQgOiBmYWxzZSxcclxuICAgIHZpc2libGU6IG9wdGlvbnMudmlzaWJsZSA/IG9wdGlvbnMudmlzaWJsZSA6IHRydWUsXHJcbiAgICBhY3RpdmVST0lDb250b3VySW5kZXg6IG9wdGlvbnMuYWN0aXZlUk9JQ29udG91ckluZGV4ICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmFjdGl2ZVJPSUNvbnRvdXJJbmRleCA6IG51bGwsXHJcbiAgICBST0lDb250b3VyQ29sbGVjdGlvbjogW11cclxuICB9O1xyXG5cclxuICBzZXJpZXMuc3RydWN0dXJlU2V0Q29sbGVjdGlvbi5wdXNoKHN0cnVjdHVyZVNldCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFJPSUNvbnRvdXIoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCwgbmFtZSwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgY2hlY2sobmFtZSwgJ25hbWUnKTtcclxuXHJcbiAgY29uc3Qgc3RydWN0dXJlU2V0ID0gZ2V0U3RydWN0dXJlU2V0KHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQpO1xyXG5cclxuICBpZiAoIXN0cnVjdHVyZVNldCkge1xyXG4gICAgLy8gQ2FuJ3QgZ2VuZXJhdGUgdGhlIHN0cnVjdHVyZVNldCBhcyBub3QgZW5vdWdoIGluZm8gKG5vIG5hbWUpLlxyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZ2VuZXJhdGUgUk9JQ29udG91ciwgYXMgdGhlIHN0cnVjdHVyZVNldCB3aXRoICR7c3RydWN0dXJlU2V0VWlkfSBkb2VzIG5vdCBleGlzdC5gKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IFJPSUNvbnRvdXIgPSB7XHJcbiAgICB1aWQ6IG9wdGlvbnMudWlkID8gb3B0aW9ucy51aWQgOiBnZW5lcmF0ZVVJRCgpLFxyXG4gICAgbmFtZSxcclxuICAgIGNvbG9yOiBvcHRpb25zLmNvbG9yID8gb3B0aW9ucy5jb2xvciA6IGdldE5leHRDb2xvcigpLFxyXG4gICAgcG9seWdvbkNvdW50OiBvcHRpb25zLnBvbHlnb25Db3VudCA/IG9wdGlvbnMucG9seWdvbkNvdW50IDogMFxyXG4gIH07XHJcblxyXG4gIHN0cnVjdHVyZVNldC5ST0lDb250b3VyQ29sbGVjdGlvbi5wdXNoKFJPSUNvbnRvdXIpO1xyXG5cclxuICByZXR1cm4gUk9JQ29udG91ci51aWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFJPSUNvbnRvdXJBbmRTZXRJbmRleEFjdGl2ZShzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkLCBuYW1lLCBvcHRpb25zID0ge30pIHtcclxuICBzZXRST0lDb250b3VyKHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQsIG5hbWUsIG9wdGlvbnMpO1xyXG5cclxuICBjb25zdCBzdHJ1Y3R1cmVTZXQgPSBnZXRTdHJ1Y3R1cmVTZXQoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCk7XHJcblxyXG4gIGNvbnN0IGluZGV4ID0gc3RydWN0dXJlU2V0LlJPSUNvbnRvdXJDb2xsZWN0aW9uLmxlbmd0aCAtIDE7XHJcblxyXG4gIHN0cnVjdHVyZVNldC5hY3RpdmVST0lDb250b3VySW5kZXggPSBpbmRleDtcclxuXHJcbiAgcmV0dXJuIGluZGV4O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREZWxldGVST0lGcm9tU3RydWN0dXJlU2V0KHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQsIFJPSUNvbnRvdXJVaWQpIHtcclxuICBjb25zdCBzdHJ1Y3R1cmVTZXQgPSBnZXRTdHJ1Y3R1cmVTZXQoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCk7XHJcbiAgY29uc3QgUk9JQ29udG91ckNvbGxlY3Rpb24gPSBzdHJ1Y3R1cmVTZXQuUk9JQ29udG91ckNvbGxlY3Rpb247XHJcblxyXG4gIGNvbnN0IFJPSUNvbnRvdXJJbmRleCA9IFJPSUNvbnRvdXJDb2xsZWN0aW9uLmZpbmRJbmRleChST0lDb250b3VyID0+IHtcclxuICAgIHJldHVybiBST0lDb250b3VyLnVpZCA9PT0gUk9JQ29udG91clVpZDtcclxuICB9KTtcclxuXHJcbiAgUk9JQ29udG91ckNvbGxlY3Rpb24uc3BsaWNlKFJPSUNvbnRvdXJJbmRleCwgMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFN0cnVjdHVyZVNldE5hbWUobmFtZSwgc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCkge1xyXG4gIGNoZWNrKG5hbWUsICduYW1lJyk7XHJcblxyXG4gIGNvbnN0IHN0cnVjdHVyZVNldCA9IGdldFN0cnVjdHVyZVNldChzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkKTtcclxuXHJcbiAgc3RydWN0dXJlU2V0Lm5hbWUgPSBuYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREZWxldGVTdHJ1Y3R1cmVTZXQoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCkge1xyXG4gIGNvbnN0IHNlcmllcyA9IGdldFNlcmllcyhzZXJpZXNJbnN0YW5jZVVpZCk7XHJcblxyXG4gIGNvbnN0IHN0cnVjdHVyZVNldENvbGxlY3Rpb24gPSBzZXJpZXMuc3RydWN0dXJlU2V0Q29sbGVjdGlvbjtcclxuXHJcbiAgY29uc3Qgc3RydWN0dXJlU2V0SW5kZXggPSBzdHJ1Y3R1cmVTZXRDb2xsZWN0aW9uLmZpbmRJbmRleChzdHJ1Y3R1cmVTZXQgPT4ge1xyXG4gICAgcmV0dXJuIHN0cnVjdHVyZVNldC51aWQgPT09IHN0cnVjdHVyZVNldFVpZDtcclxuICB9KTtcclxuXHJcbiAgc3RydWN0dXJlU2V0Q29sbGVjdGlvbi5zcGxpY2Uoc3RydWN0dXJlU2V0SW5kZXgsIDEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRST0lDb250b3VyTmFtZShuYW1lLCBzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkLCBST0lDb250b3VyVWlkKSB7XHJcbiAgY2hlY2sobmFtZSwgJ25hbWUnKTtcclxuXHJcbiAgY29uc3QgUk9JQ29udG91ciA9IGdldFJPSUNvbnRvdXIoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCwgUk9JQ29udG91clVpZCk7XHJcblxyXG4gIFJPSUNvbnRvdXIubmFtZSA9IG5hbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEFjdGl2ZVN0cnVjdHVyZVNldEluZGV4KGluZGV4LCBzZXJpZXNJbnN0YW5jZVVpZCkge1xyXG4gIGNoZWNrKGluZGV4LCAnaW5kZXgnKTtcclxuXHJcbiAgY29uc3Qgc2VyaWVzID0gZ2V0U2VyaWVzKHNlcmllc0luc3RhbmNlVWlkKTtcclxuXHJcbiAgc2VyaWVzLmFjdGl2ZVN0cnVjdHVyZVNldEluZGV4ID0gaW5kZXg7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEFjdGl2ZVN0cnVjdHVyZVNldChzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkKSB7XHJcbiAgY2hlY2soc3RydWN0dXJlU2V0VWlkLCAnc3RydWN0dXJlU2V0VWlkJyk7XHJcblxyXG4gIGNvbnN0IHNlcmllcyA9IGdldFNlcmllcyhzZXJpZXNJbnN0YW5jZVVpZCk7XHJcbiAgY29uc3Qgc3RydWN0dXJlU2V0Q29sbGVjdGlvbiA9IHNlcmllcy5zdHJ1Y3R1cmVTZXRDb2xsZWN0aW9uO1xyXG5cclxuICBjb25zdCBzdHJ1Y3R1cmVTZXRJbmRleCA9IHN0cnVjdHVyZVNldENvbGxlY3Rpb24uZmluZEluZGV4KHN0cnVjdHVyZVNldCA9PiB7XHJcbiAgICByZXR1cm4gc3RydWN0dXJlU2V0LnVpZCA9PT0gc3RydWN0dXJlU2V0VWlkO1xyXG4gIH0pO1xyXG5cclxuICBzZXJpZXMuYWN0aXZlU3RydWN0dXJlU2V0SW5kZXggPSBzdHJ1Y3R1cmVTZXRJbmRleDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0QWN0aXZlUk9JQ29udG91ckluZGV4KGluZGV4LCBzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkID0gJ0RFRkFVTFQnKSB7XHJcbiAgY29uc3Qgc3RydWN0dXJlU2V0ID0gZ2V0U3RydWN0dXJlU2V0KHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQpO1xyXG5cclxuICBzdHJ1Y3R1cmVTZXQuYWN0aXZlUk9JQ29udG91ckluZGV4ID0gaW5kZXg7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEFjdGl2ZVJPSUNvbnRvdXIoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCA9ICdERUZBVUxUJywgUk9JQ29udG91clVpZCkge1xyXG4gIGNoZWNrKFJPSUNvbnRvdXJVaWQsICdST0lDb250b3VyVWlkJyk7XHJcblxyXG4gIGNvbnN0IHN0cnVjdHVyZVNldCA9IGdldFN0cnVjdHVyZVNldChzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkKTtcclxuICBjb25zdCBST0lDb250b3VyQ29sbGVjdGlvbiA9IHN0cnVjdHVyZVNldC5ST0lDb250b3VyQ29sbGVjdGlvbjtcclxuXHJcbiAgY29uc3QgUk9JQ29udG91ckluZGV4ID0gUk9JQ29udG91ckNvbGxlY3Rpb24uZmluZEluZGV4KFJPSUNvbnRvdXIgPT4ge1xyXG4gICAgcmV0dXJuIFJPSUNvbnRvdXIudWlkID09PSBST0lDb250b3VyVWlkO1xyXG4gIH0pO1xyXG5cclxuICBzdHJ1Y3R1cmVTZXQuYWN0aXZlUk9JQ29udG91ckluZGV4ID0gUk9JQ29udG91ckluZGV4O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbmNyZW1lbnRQb2x5Z29uQ291bnQoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCwgUk9JQ29udG91clVpZCkge1xyXG4gIGNvbnN0IFJPSUNvbnRvdXIgPSBnZXRST0lDb250b3VyKHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQsIFJPSUNvbnRvdXJVaWQpO1xyXG5cclxuICBST0lDb250b3VyLnBvbHlnb25Db3VudCsrO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWNyZW1lbnRQb2x5Z29uQ291bnQoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCwgUk9JQ29udG91clVpZCkge1xyXG4gIGNvbnN0IFJPSUNvbnRvdXIgPSBnZXRST0lDb250b3VyKHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQsIFJPSUNvbnRvdXJVaWQpO1xyXG5cclxuICBST0lDb250b3VyLnBvbHlnb25Db3VudC0tO1xyXG59XHJcblxyXG5jb25zdCBnZXR0ZXJzID0ge1xyXG4gIHNlcmllczogZ2V0U2VyaWVzLFxyXG4gIHN0cnVjdHVyZVNldDogZ2V0U3RydWN0dXJlU2V0LFxyXG4gIFJPSUNvbnRvdXI6IGdldFJPSUNvbnRvdXIsXHJcbiAgUk9JQ29udG91ckluZGV4OiBnZXRST0lDb250b3VySW5kZXgsXHJcbiAgYWN0aXZlU3RydWN0dXJlU2V0SW5kZXg6IGdldEFjdGl2ZVN0cnVjdHVyZVNldEluZGV4LFxyXG4gIGFjdGl2ZVJPSUNvbnRvdXJJbmRleDogZ2V0QWN0aXZlUk9JQ29udG91ckluZGV4LFxyXG4gIGFjdGl2ZVJPSUNvbnRvdXI6IGdldEFjdGl2ZVJPSUNvbnRvdXJcclxufTtcclxuXHJcbmNvbnN0IHNldHRlcnMgPSB7XHJcbiAgc2VyaWVzOiBzZXRTZXJpZXMsXHJcbiAgc3RydWN0dXJlU2V0OiBzZXRTdHJ1Y3R1cmVTZXQsXHJcbiAgUk9JQ29udG91cjogc2V0Uk9JQ29udG91cixcclxuICBST0lDb250b3VyQW5kU2V0SW5kZXhBY3RpdmU6IHNldFJPSUNvbnRvdXJBbmRTZXRJbmRleEFjdGl2ZSxcclxuICBkZWxldGVST0lGcm9tU3RydWN0dXJlU2V0OiBzZXREZWxldGVST0lGcm9tU3RydWN0dXJlU2V0LFxyXG4gIGRlbGV0ZVN0cnVjdHVyZVNldDogc2V0RGVsZXRlU3RydWN0dXJlU2V0LFxyXG4gIHN0cnVjdHVyZVNldE5hbWU6IHNldFN0cnVjdHVyZVNldE5hbWUsXHJcbiAgUk9JQ29udG91ck5hbWU6IHNldFJPSUNvbnRvdXJOYW1lLFxyXG4gIGFjdGl2ZVN0cnVjdHVyZVNldEluZGV4OiBzZXRBY3RpdmVTdHJ1Y3R1cmVTZXRJbmRleCxcclxuICBhY3RpdmVTdHJ1Y3R1cmVTZXQ6IHNldEFjdGl2ZVN0cnVjdHVyZVNldCxcclxuICBhY3RpdmVST0lDb250b3VySW5kZXg6IHNldEFjdGl2ZVJPSUNvbnRvdXJJbmRleCxcclxuICBhY3RpdmVST0lDb250b3VyOiBzZXRBY3RpdmVST0lDb250b3VyLFxyXG4gIGluY3JlbWVudFBvbHlnb25Db3VudCxcclxuICBkZWNyZW1lbnRQb2x5Z29uQ291bnQsXHJcbiAgdG9nZ2xlSW50ZXJwb2xhdGU6ICgpID0+IHtcclxuICAgIHN0YXRlLmludGVycG9sYXRlID0gIXN0YXRlLmludGVycG9sYXRlO1xyXG4gIH0sXHJcbiAgdG9nZ2xlRGlzcGxheVN0YXRzOiAoKSA9PiB7XHJcbiAgICBzdGF0ZS5kaXNwbGF5U3RhdHMgPSAhc3RhdGUuZGlzcGxheVN0YXRzO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBlbmFibGVkRWxlbWVudENhbGxiYWNrIC0gRWxlbWVudCBzcGVjaWZpYyBpbml0aWxpc2F0aW9uLlxyXG4gKiBAcHVibGljXHJcbiAqIEBwYXJhbSAge09iamVjdH0gZW5hYmxlZEVsZW1lbnQgIFRoZSBlbGVtZW50IG9uIHdoaWNoIHRoZSBtb2R1bGUgaXNcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVpbmcgaW5pdGlhbGlzZWQuXHJcbiAqL1xyXG5mdW5jdGlvbiBlbmFibGVkRWxlbWVudENhbGxiYWNrKGVsZW1lbnQpIHtcclxuICBjb25zdCBlbmFibGVkRWxlbWVudCA9IGNvcm5lcnN0b25lLmdldEVuYWJsZWRFbGVtZW50KGVsZW1lbnQpO1xyXG5cclxuICBpZiAoIWVuYWJsZWRFbGVtZW50LmltYWdlKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBzZXJpZXNJbnN0YW5jZVVpZCA9IGdldFNlcmllc0luc3RhbmNlVWlkRnJvbUVuYWJsZWRFbGVtZW50KGVuYWJsZWRFbGVtZW50KTtcclxuXHJcbiAgaWYgKCFnZXRTZXJpZXMoc2VyaWVzSW5zdGFuY2VVaWQpKSB7XHJcbiAgICAvLyBHZW5lcmF0ZSBzZXJpZXMgc3RvcmUuXHJcbiAgICBzZXRTZXJpZXMoc2VyaWVzSW5zdGFuY2VVaWQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHN0YXRlLFxyXG4gIGVuYWJsZWRFbGVtZW50Q2FsbGJhY2ssXHJcbiAgZ2V0dGVycyxcclxuICBzZXR0ZXJzXHJcbn07XHJcblxyXG5jb25zdCBpbXBvcnRDb2xvcnMgPSBbXHJcbiAgJ2Nvcm5mbG93ZXJibHVlJyxcclxuICAnZmlyZWJyaWNrJyxcclxuICAnZ29sZGVucm9kJyxcclxuICAnYmx1ZXZpb2xldCcsXHJcbiAgJ2luZGlhbnJlZCcsXHJcbiAgJ29yYW5nZScsXHJcbiAgJ21lZGl1bXR1cnF1b2lzZScsXHJcbiAgJ2xpZ2h0Y29yYWwnLFxyXG4gICdraGFraScsXHJcbiAgJ2RhcmttYWdlbnRhJyxcclxuICAnbGlnaHRzZWFncmVlbicsXHJcbiAgJ3RvbWF0bycsXHJcbiAgJ2FxdWFtYXJpbmUnLFxyXG4gICdkYXJrc2FsbW9uJyxcclxuICAnbW9jY2FzaW4nLFxyXG4gICdvcmNoaWQnLFxyXG4gICdza3libHVlJyxcclxuICAncGVydSdcclxuXTtcclxuXHJcbi8vIFN1Y2ggdGhhdCBmaXJzdCBjb2xvciB3aWxsIGJlIHRoZSBmaXJzdCBpbiByb2lDb2xvcnNcclxubGV0IGN1cnJlbnRDb2xvckluZGV4ID0gaW1wb3J0Q29sb3JzLmxlbmd0aDtcclxuXHJcbi8qKlxyXG4gKiBnZXROZXh0Q29sb3JcclxuICpcclxuICogQHJldHVybiB7c3RyaW5nfSBBIENTUyByZWNvZ25pc2VkIGNvbG9yIHdpdGggd2hpY2ggdG8gcmVuZGVyIHRoZSBST0kgY29udG91ci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0Q29sb3IoKSB7XHJcbiAgY3VycmVudENvbG9ySW5kZXgrKztcclxuICBpZiAoY3VycmVudENvbG9ySW5kZXggPj0gaW1wb3J0Q29sb3JzLmxlbmd0aCkge1xyXG4gICAgY3VycmVudENvbG9ySW5kZXggPSAwO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGltcG9ydENvbG9yc1tjdXJyZW50Q29sb3JJbmRleF07XHJcbn1cclxuIiwiaW1wb3J0IGNvcm5lcnN0b25lVG9vbHMgZnJvbSAnY29ybmVyc3RvbmUtY29yZSc7XHJcbmltcG9ydCBCcnVzaDNESFVHYXRlZFRvb2wgZnJvbSAnLi9CcnVzaDNESFVHYXRlZFRvb2wuanMnO1xyXG5cclxuY29uc3QgeyBnZXRDaXJjbGUgfSA9IGNvcm5lcnN0b25lVG9vbHMuaW1wb3J0SW50ZXJuYWxNb2R1bGUoJ3V0aWwvYnJ1c2hVdGlscycpO1xyXG5cclxuY29uc3QgYnJ1c2hNb2R1bGUgPSBjb3JuZXJzdG9uZVRvb2xzLnN0b3JlLm1vZHVsZXMuYnJ1c2g7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcnVzaDNEQXV0b0dhdGVkVG9vbCBleHRlbmRzIEJydXNoM0RIVUdhdGVkVG9vbCB7XHJcbiAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbiA9IHt9KSB7XHJcbiAgICBjb25zdCBkZWZhdWx0Q29uZmlnID0ge307XHJcbiAgICBjb25zdCBpbml0aWFsQ29uZmlndXJhdGlvbiA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdENvbmZpZywgY29uZmlndXJhdGlvbik7XHJcblxyXG4gICAgc3VwZXIoaW5pdGlhbENvbmZpZ3VyYXRpb24pO1xyXG5cclxuICAgIHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb24gPSBpbml0aWFsQ29uZmlndXJhdGlvbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50IGhhbmRsZXIgZm9yIE1PVVNFX0RPV04gZXZlbnQuXHJcbiAgICpcclxuICAgKiBAb3ZlcnJpZGVcclxuICAgKiBAZXZlbnRcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZ0IC0gVGhlIGV2ZW50LlxyXG4gICAqL1xyXG4gIHByZU1vdXNlRG93bkNhbGxiYWNrKGV2dCkge1xyXG4gICAgdGhpcy5fc2V0Q3VzdG9tR2F0ZShldnQpO1xyXG4gICAgdGhpcy5fc3RhcnRQYWludGluZyhldnQpO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogX3NldEN1c3RvbUdhdGUgLSBHZXRzIHRoZSBtaW5pbXVtIGFuZCBtYXhpbXVtIGJydXNoIHZhbHVlcyB3aXRoaW4gdGhlIGltYWdlXHJcbiAgICogYW5kIHNldHMgdGhlIGdhdGUgbW9kZSB0byBcImN1c3RvbVwiIHdpdGggdGhlc2UgdmFsdWVzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtICB7b2JqZWN0fSBldnQgVGhlIGNvcm5lcnN0b25lIGV2ZW50LlxyXG4gICAqIEByZXR1cm5zIHtudWxsfVxyXG4gICAqL1xyXG4gIF9zZXRDdXN0b21HYXRlKGV2dCkge1xyXG4gICAgY29uc3QgZXZlbnREYXRhID0gZXZ0LmRldGFpbDtcclxuICAgIGNvbnN0IGltYWdlID0gZXZlbnREYXRhLmltYWdlO1xyXG4gICAgY29uc3QgeyByb3dzLCBjb2x1bW5zIH0gPSBpbWFnZTtcclxuICAgIGNvbnN0IHsgeCwgeSB9ID0gZXZlbnREYXRhLmN1cnJlbnRQb2ludHMuaW1hZ2U7XHJcbiAgICBjb25zdCByYWRpdXMgPSBicnVzaE1vZHVsZS5zdGF0ZS5yYWRpdXM7XHJcbiAgICBjb25zdCBpbWFnZVBpeGVsRGF0YSA9IGltYWdlLmdldFBpeGVsRGF0YSgpO1xyXG4gICAgY29uc3QgcmVzY2FsZVNsb3BlID0gaW1hZ2Uuc2xvcGUgfHwgMTtcclxuICAgIGNvbnN0IHJlc2NhbGVJbnRlcmNlcHQgPSBpbWFnZS5pbnRlcmNlcHQgfHwgMDtcclxuXHJcbiAgICBjb25zdCBjaXJjbGUgPSBnZXRDaXJjbGUocmFkaXVzLCByb3dzLCBjb2x1bW5zLCB4LCB5KTtcclxuXHJcbiAgICAvLyBJbml0aWFsaXNlIGhpIGFuZCBsbyBhcyB0aGUgZmlyc3QgcGl4ZWxWYWx1ZSBpbiB0aGUgY2lyY2xlLlxyXG4gICAgbGV0IGxvID0gaW1hZ2VQaXhlbERhdGFbY2lyY2xlWzBdWzBdICsgY2lyY2xlWzBdWzFdICogcm93c107XHJcbiAgICBsZXQgaGkgPSBsbztcclxuXHJcbiAgICAvLyBGaW5kIHRoZSBoaWdoZXN0IGFuZCBsb3dlc3QgdmFsdWUuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNpcmNsZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgcGl4ZWxWYWx1ZSA9IGltYWdlUGl4ZWxEYXRhW2NpcmNsZVtpXVswXSArIGNpcmNsZVtpXVsxXSAqIHJvd3NdO1xyXG5cclxuICAgICAgaWYgKHBpeGVsVmFsdWUgPCBsbykge1xyXG4gICAgICAgIGxvID0gcGl4ZWxWYWx1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHBpeGVsVmFsdWUgPiBoaSkge1xyXG4gICAgICAgIGhpID0gcGl4ZWxWYWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvID0gbG8gKiByZXNjYWxlU2xvcGUgKyByZXNjYWxlSW50ZXJjZXB0O1xyXG4gICAgaGkgPSBoaSAqIHJlc2NhbGVTbG9wZSArIHJlc2NhbGVJbnRlcmNlcHQ7XHJcblxyXG4gICAgdGhpcy5nYXRlID0gW2xvLCBoaV07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBfZ2F0ZUNpcmNsZSAtIEdpdmVuIGFuIGltYWdlIGFuZCBhIGJydXNoIGNpcmNsZSwgZ2F0ZSB0aGUgY2lyY2xlIGJldHdlZW5cclxuICAgKiB0aGUgc2V0IGdhdGUgdmFsdWVzLCBhbmQgdGhlbiBjbGVhbnVwIHRoZSByZXN1bHRpbmcgbWFzayB1c2luZyB0aGVcclxuICAgKiBob2xlRmlsbCBhbmQgc3RyYXlSZW1vdmUgcHJvcGVydGllcyBvZiB0aGUgYnJ1c2ggbW9kdWxlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtICB7b2JqZWN0fSBpbWFnZSAgIFRoZSBjb3JuZXJzdG9uZSBpbWFnZS5cclxuICAgKiBAcGFyYW0gIHtOdW1iZXJbXVtdfSBjaXJjbGUgIEFuIGFycmF5IG9mIGltYWdlIHBpeGVscyBjb250YWluZWQgd2l0aGluIHRoZSBicnVzaFxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgY2lyY2xlLlxyXG4gICAqIEByZXR1cm5zIHtOdW1iZXJbXVtdfSAgQW4gYXJyYXkgY29udGFpbmluZyB0aGUgZ2F0ZWQvY2xlYW5lZCBwaXhlbHMgdG8gZmlsbC5cclxuICAgKi9cclxuICBfZ2F0ZUNpcmNsZShpbWFnZSwgY2lyY2xlKSB7XHJcbiAgICBjb25zdCByb3dzID0gaW1hZ2UuaW1hZ2U7XHJcbiAgICBjb25zdCBpbWFnZVBpeGVsRGF0YSA9IGltYWdlLmdldFBpeGVsRGF0YSgpO1xyXG4gICAgY29uc3QgZ2F0ZVZhbHVlcyA9IHRoaXMuZ2F0ZTtcclxuICAgIGNvbnN0IHJlc2NhbGVTbG9wZSA9IGltYWdlLnNsb3BlIHx8IDE7XHJcbiAgICBjb25zdCByZXNjYWxlSW50ZXJjZXB0ID0gaW1hZ2UuaW50ZXJjZXB0IHx8IDA7XHJcblxyXG4gICAgY29uc3QgZ2F0ZWRDaXJjbGVBcnJheSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2lyY2xlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBwaXhlbFZhbHVlID0gaW1hZ2VQaXhlbERhdGFbY2lyY2xlW2ldWzBdICsgY2lyY2xlW2ldWzFdICogcm93c107XHJcblxyXG4gICAgICBwaXhlbFZhbHVlID0gcGl4ZWxWYWx1ZSAqIHJlc2NhbGVTbG9wZSArIHJlc2NhbGVJbnRlcmNlcHQ7XHJcblxyXG4gICAgICBpZiAocGl4ZWxWYWx1ZSA+PSBnYXRlVmFsdWVzWzBdICYmIHBpeGVsVmFsdWUgPD0gZ2F0ZVZhbHVlc1sxXSkge1xyXG4gICAgICAgIGdhdGVkQ2lyY2xlQXJyYXkucHVzaChjaXJjbGVbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2NsZWFuR2F0ZWRDaXJjbGUoY2lyY2xlLCBnYXRlZENpcmNsZUFycmF5KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgc3RvcmUsIEVWRU5UUywgaW1wb3J0SW50ZXJuYWxNb2R1bGUgfSBmcm9tICdjb3JuZXJzdG9uZS10b29scyc7XHJcbmltcG9ydCBjb3JuZXJzdG9uZSBmcm9tICdjb3JuZXJzdG9uZS1jb3JlJztcclxuXHJcbmltcG9ydCBCcnVzaDNEVG9vbCBmcm9tICcuL0JydXNoM0RUb29sLmpzJztcclxuXHJcbmNvbnN0IGJydXNoTW9kdWxlID0gc3RvcmUubW9kdWxlcy5icnVzaDtcclxuY29uc3QgeyBnZXRDaXJjbGUsIGRyYXdCcnVzaFBpeGVscyB9ID0gaW1wb3J0SW50ZXJuYWxNb2R1bGUoJ3V0aWwvYnJ1c2hVdGlscycpO1xyXG5cclxuaW1wb3J0IGZsb29kRmlsbCBmcm9tICcuL24tZGltZW5zaW9uYWwtZmxvb2QtZmlsbC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcnVzaDNESFVHYXRlZFRvb2wgZXh0ZW5kcyBCcnVzaDNEVG9vbCB7XHJcbiAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbiA9IHt9KSB7XHJcbiAgICBjb25zdCBkZWZhdWx0Q29uZmlnID0ge307XHJcbiAgICBjb25zdCBpbml0aWFsQ29uZmlndXJhdGlvbiA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdENvbmZpZywgY29uZmlndXJhdGlvbik7XHJcblxyXG4gICAgc3VwZXIoaW5pdGlhbENvbmZpZ3VyYXRpb24pO1xyXG5cclxuICAgIHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb24gPSBpbml0aWFsQ29uZmlndXJhdGlvbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50IGhhbmRsZXIgZm9yIE1PVVNFX0RPV04gZXZlbnQuXHJcbiAgICpcclxuICAgKiBAb3ZlcnJpZGVcclxuICAgKiBAZXZlbnRcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZ0IC0gVGhlIGV2ZW50LlxyXG4gICAqL1xyXG4gIHByZU1vdXNlRG93bkNhbGxiYWNrKGV2dCkge1xyXG4gICAgdGhpcy5hY3RpdmVHYXRlUmFuZ2UgPSBicnVzaE1vZHVsZS5nZXR0ZXJzLmFjdGl2ZUdhdGVSYW5nZSgpO1xyXG5cclxuICAgIHRoaXMuX3N0YXJ0UGFpbnRpbmcoZXZ0KTtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhaW50cyB0aGUgZGF0YSB0byB0aGUgY2FudmFzLlxyXG4gICAqXHJcbiAgICogQHByb3RlY3RlZFxyXG4gICAqIEBwYXJhbSAge09iamVjdH0gZXZ0IFRoZSBkYXRhIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggdGhlIGV2ZW50LlxyXG4gICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAqL1xyXG4gIF9wYWludChldnQpIHtcclxuICAgIGNvbnN0IGV2ZW50RGF0YSA9IGV2dC5kZXRhaWw7XHJcbiAgICBjb25zdCB7IGVsZW1lbnQsIGltYWdlIH0gPSBldmVudERhdGE7XHJcbiAgICBjb25zdCB7IHJvd3MsIGNvbHVtbnMgfSA9IGltYWdlO1xyXG4gICAgY29uc3QgeyB4LCB5IH0gPSBldmVudERhdGEuY3VycmVudFBvaW50cy5pbWFnZTtcclxuXHJcbiAgICBpZiAoeCA8IDAgfHwgeCA+IGNvbHVtbnMgfHwgeSA8IDAgfHwgeSA+IHJvd3MpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJhZGl1cyA9IGJydXNoTW9kdWxlLnN0YXRlLnJhZGl1cztcclxuICAgIGNvbnN0IHBvaW50ZXJBcnJheSA9IHRoaXMuX2dhdGVDaXJjbGUoaW1hZ2UsIGdldENpcmNsZShyYWRpdXMsIHJvd3MsIGNvbHVtbnMsIHgsIHkpKTtcclxuXHJcbiAgICBjb25zdCB7IGxhYmVsbWFwM0QsIGN1cnJlbnRJbWFnZUlkSW5kZXgsIGFjdGl2ZUxhYmVsbWFwSW5kZXgsIHNob3VsZEVyYXNlIH0gPSB0aGlzLnBhaW50RXZlbnREYXRhO1xyXG5cclxuICAgIC8vIERyYXcgLyBFcmFzZSB0aGUgYWN0aXZlIGNvbG9yLlxyXG4gICAgZHJhd0JydXNoUGl4ZWxzKHBvaW50ZXJBcnJheSwgbGFiZWxtYXAzRCwgY3VycmVudEltYWdlSWRJbmRleCwgY29sdW1ucywgc2hvdWxkRXJhc2UpO1xyXG5cclxuICAgIGNvcm5lcnN0b25lLnRyaWdnZXJFdmVudChlbGVtZW50LCBFVkVOVFMuTEFCRUxNQVBfTU9ESUZJRUQsIHtcclxuICAgICAgYWN0aXZlTGFiZWxtYXBJbmRleFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29ybmVyc3RvbmUudXBkYXRlSW1hZ2UoZXZ0LmRldGFpbC5lbGVtZW50KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIF9nYXRlQ2lyY2xlIC0gR2l2ZW4gYW4gaW1hZ2UgYW5kIGEgYnJ1c2ggY2lyY2xlLCBnYXRlIHRoZSBjaXJjbGUgYmV0d2VlblxyXG4gICAqIHRoZSBzZXQgZ2F0ZSB2YWx1ZXMsIGFuZCB0aGVuIGNsZWFudXAgdGhlIHJlc3VsdGluZyBtYXNrIHVzaW5nIHRoZVxyXG4gICAqIGhvbGVGaWxsIGFuZCBzdHJheVJlbW92ZSBwcm9wZXJ0aWVzIG9mIHRoZSBicnVzaCBtb2R1bGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gIHtvYmplY3R9IGltYWdlICAgVGhlIGNvcm5lcnN0b25lIGltYWdlLlxyXG4gICAqIEBwYXJhbSAge051bWJlcltdW119IGNpcmNsZSAgQW4gYXJyYXkgb2YgaW1hZ2UgcGl4ZWxzIGNvbnRhaW5lZCB3aXRoaW4gdGhlIGJydXNoXHJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGUuXHJcbiAgICogQHJldHVybnMge051bWJlcltdW119ICBBbiBhcnJheSBjb250YWluaW5nIHRoZSBnYXRlZC9jbGVhbmVkIHBpeGVscyB0byBmaWxsLlxyXG4gICAqL1xyXG4gIF9nYXRlQ2lyY2xlKGltYWdlLCBjaXJjbGUpIHtcclxuICAgIGNvbnN0IHJvd3MgPSBpbWFnZS5yb3dzO1xyXG4gICAgY29uc3QgaW1hZ2VQaXhlbERhdGEgPSBpbWFnZS5nZXRQaXhlbERhdGEoKTtcclxuICAgIGNvbnN0IGdhdGVSYW5nZSA9IHRoaXMuYWN0aXZlR2F0ZVJhbmdlO1xyXG4gICAgY29uc3QgcmVzY2FsZVNsb3BlID0gaW1hZ2Uuc2xvcGUgfHwgMTtcclxuICAgIGNvbnN0IHJlc2NhbGVJbnRlcmNlcHQgPSBpbWFnZS5pbnRlcmNlcHQgfHwgMDtcclxuXHJcbiAgICBjb25zdCBnYXRlZENpcmNsZUFycmF5ID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaXJjbGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IHBpeGVsVmFsdWUgPSBpbWFnZVBpeGVsRGF0YVtjaXJjbGVbaV1bMF0gKyBjaXJjbGVbaV1bMV0gKiByb3dzXTtcclxuXHJcbiAgICAgIHBpeGVsVmFsdWUgPSBwaXhlbFZhbHVlICogcmVzY2FsZVNsb3BlICsgcmVzY2FsZUludGVyY2VwdDtcclxuXHJcbiAgICAgIGlmIChwaXhlbFZhbHVlID49IGdhdGVSYW5nZVswXSAmJiBwaXhlbFZhbHVlIDw9IGdhdGVSYW5nZVsxXSkge1xyXG4gICAgICAgIGdhdGVkQ2lyY2xlQXJyYXkucHVzaChjaXJjbGVbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2NsZWFuR2F0ZWRDaXJjbGUoY2lyY2xlLCBnYXRlZENpcmNsZUFycmF5KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIF9nZXRFZGdlUGl4ZWxzIC0gUmV0dXJucyB0aGUgaW5kaWNpZXMgb2YgdGhlIGVkZ2UgcGl4ZWxzIGZvciB0aGUgY2lyY3VsYXJcclxuICAgKiBicnVzaCBkYXRhLlxyXG4gICAqXHJcbiAgICogQHBhcmFtICB7TnVtYmVyW11bXX0gZGF0YSBUaGUgc3F1YXJlZC1jaXJjbGUgZGF0YSB3aGVyZSBhbGwgY2lyY2xlIG1lbWJlcnMgYXJlXHJcbiAgICogICAgICAgICAgICAgICAgICAgICAwLCBhbmQgdmFsdWVzIG91dHNpZGUgdGhlIGNpcmNsZSBhcmUgLTFcclxuICAgKiBAcmV0dXJucyB7TnVtYmVyW11bXX0gQW4gYXJyYXkgb2YgcG9zaXRpb25zIG9mIHRoZSBjaXJjbGUgZWRnZSBwaXhlbHMuXHJcbiAgICovXHJcbiAgX2dldEVkZ2VQaXhlbHMoZGF0YSkge1xyXG4gICAgY29uc3QgZWRnZVBpeGVscyA9IFtdO1xyXG4gICAgY29uc3QgeFNpemUgPSBkYXRhLmxlbmd0aDtcclxuICAgIGNvbnN0IHlTaXplID0gZGF0YVswXS5sZW5ndGg7XHJcblxyXG4gICAgLy8gZmlyc3QgYW5kIGxhc3Qgcm93IGFkZCBhbGwgb2YgdG9wIGFuZCBib3R0b20gd2hpY2ggYXJlIGNpcmNsZSBtZW1iZXJzLlxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChkYXRhW2ldWzBdKSB7XHJcbiAgICAgICAgZWRnZVBpeGVscy5wdXNoKFtpLCAwXSk7XHJcbiAgICAgICAgZWRnZVBpeGVscy5wdXNoKFtpLCB5U2l6ZSAtIDFdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGFsbCBvdGhlciByb3dzIC0gRmluZCBmaXJzdCBjaXJjbGUgbWVtYmVyLCBhbmQgdXNlIGl0cyBwb3NpdGlvbiB0byBhZGRcclxuICAgIC8vIFRoZSBmaXJzdCBhbmQgbGFzdCBjaXJjbGUgbWVtYmVyIG9mIHRoYXQgcm93LlxyXG4gICAgZm9yIChsZXQgaiA9IDE7IGogPCB5U2l6ZSAtIDE7IGorKykge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoZGF0YVtpXVtqXSkge1xyXG4gICAgICAgICAgZWRnZVBpeGVscy5wdXNoKFtpLCBqXSk7XHJcbiAgICAgICAgICBlZGdlUGl4ZWxzLnB1c2goW3hTaXplIC0gMSAtIGksIGpdKTtcclxuXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZWRnZVBpeGVscztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIF9jbGVhbkdhdGVkQ2lyY2xlIC0gQ2xlYW4gdGhlIEhVIGdhdGVkIGNpcmNsZSB1c2luZyB0aGUgaG9sZUZpbGwgYW5kXHJcbiAgICogc3RyYXlSZW1vdmUgcHJvcGVydGllcyBvZiB0aGUgYnJ1c2ggbW9kdWxlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtICB7TnVtYmVyW11bXX0gY2lyY2xlICAgICBBbiBhcnJheSBvZiB0aGUgcGl4ZWwgaW5kaWNpZXMgd2l0aGluIHRoZVxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJ1c2ggY2lyY2xlLlxyXG4gICAqIEBwYXJhbSAge051bWJlcltdW119IGdhdGVkQ2lyY2xlQXJyYXkgQW4gYXJyYXkgb2YgdGhlIHBpeGVsIGluZGljaWVzIHdpdGhpblxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGdhdGUgcmFuZ2UuXHJcbiAgICogQHJldHVybnMge051bWJlcltdW119ICAgICAgICAgICAgICAgICAgVGhlIGNsZWFuZWQgYXJyYXkgb2YgcGl4ZWwgaW5kaWNpZXMuXHJcbiAgICovXHJcbiAgX2NsZWFuR2F0ZWRDaXJjbGUoY2lyY2xlLCBnYXRlZENpcmNsZUFycmF5KSB7XHJcbiAgICBjb25zdCB7IG1heCwgbWluIH0gPSB0aGlzLl9nZXRCb3VuZGluZ0JveE9mQ2lyY2xlKGNpcmNsZSk7XHJcblxyXG4gICAgY29uc3QgeFNpemUgPSBtYXhbMF0gLSBtaW5bMF0gKyAxO1xyXG4gICAgY29uc3QgeVNpemUgPSBtYXhbMV0gLSBtaW5bMV0gKyAxO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9ib3hHYXRlZENpcmNsZShjaXJjbGUsIGdhdGVkQ2lyY2xlQXJyYXksIG1pbiwgeFNpemUsIHlTaXplKTtcclxuXHJcbiAgICAvLyBEZWZpbmUgb3VyIGdldHRlciBmb3IgYWNjZXNzaW5nIHRoZSBkYXRhIHN0cnVjdHVyZS5cclxuICAgIGZ1bmN0aW9uIGdldHRlcih4LCB5KSB7XHJcbiAgICAgIHJldHVybiBkYXRhW3hdW3ldO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2Zsb29kRmlsbEVtcHR5UmVnaW9uc0Zyb21FZGdlcyhkYXRhLCBnZXR0ZXIpO1xyXG5cclxuICAgIGNvbnN0IHsgaG9sZXMsIHJlZ2lvbnMgfSA9IHRoaXMuX2ZpbmRIb2xlc0FuZFJlZ2lvbnMoY2lyY2xlLCBkYXRhLCBnZXR0ZXIsIG1pbik7XHJcblxyXG4gICAgY29uc3QgbGFyZ2VzdFJlZ2lvbkFyZWEgPSB0aGlzLl9nZXRBcmVhT2ZMYXJnZXN0UmVnaW9uKHJlZ2lvbnMpO1xyXG5cclxuICAgIC8vIERlbGV0ZSBhbnkgcmVnaW9uIG91dHNpZGUgdGhlIGBzdHJheVJlbW92ZWAgdGhyZXNob2xkLlxyXG4gICAgZm9yIChsZXQgciA9IDA7IHIgPCByZWdpb25zLmxlbmd0aDsgcisrKSB7XHJcbiAgICAgIGNvbnN0IHJlZ2lvbiA9IHJlZ2lvbnNbcl07XHJcblxyXG4gICAgICBpZiAocmVnaW9uLmxlbmd0aCA8PSAoYnJ1c2hNb2R1bGUuc3RhdGUuc3RyYXlSZW1vdmUgLyAxMDAuMCkgKiBsYXJnZXN0UmVnaW9uQXJlYSkge1xyXG4gICAgICAgIGZvciAobGV0IHAgPSAwOyBwIDwgcmVnaW9uLmxlbmd0aDsgcCsrKSB7XHJcbiAgICAgICAgICBkYXRhW3JlZ2lvbltwXVswXV1bcmVnaW9uW3BdWzFdXSA9IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmlsbCBpbiBhbnkgaG9sZXMgc21hbGxlciB0aGFuIHRoZSBgaG9sZUZpbGxgIHRocmVzaG9sZC5cclxuICAgIGZvciAobGV0IHIgPSAwOyByIDwgaG9sZXMubGVuZ3RoOyByKyspIHtcclxuICAgICAgY29uc3QgaG9sZSA9IGhvbGVzW3JdO1xyXG5cclxuICAgICAgaWYgKGhvbGUubGVuZ3RoIDw9IChicnVzaE1vZHVsZS5zdGF0ZS5ob2xlRmlsbCAvIDEwMC4wKSAqIGxhcmdlc3RSZWdpb25BcmVhKSB7XHJcbiAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCBob2xlLmxlbmd0aDsgcCsrKSB7XHJcbiAgICAgICAgICBkYXRhW2hvbGVbcF1bMF1dW2hvbGVbcF1bMV1dID0gNTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaWxsZWRHYXRlZENpcmNsZUFycmF5ID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB4U2l6ZTsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgeVNpemU7IGorKykge1xyXG4gICAgICAgIGlmIChkYXRhW2ldW2pdID09PSA1KSB7XHJcbiAgICAgICAgICBmaWxsZWRHYXRlZENpcmNsZUFycmF5LnB1c2goW2kgKyBtaW5bMF0sIGogKyBtaW5bMV1dKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmlsbGVkR2F0ZWRDaXJjbGVBcnJheTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIF9nZXRCb3VuZGluZ0JveE9mQ2lyY2xlIC0gUmV0dXJucyB0d28gcG9pbnRzIGRlZmluaW5nIHRoZSBleHRlbnQgb2YgdGhlIGNpcmNsZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSAge251bWJlcltdW119IGNpcmNsZSAgQW4gYXJyYXkgb2YgdGhlIHBpeGVsIGluZGljaWVzIHdpdGhpbiB0aGUgYnJ1c2ggY2lyY2xlLlxyXG4gICAqIEByZXR1cm5zIHtvYmplY3R9ICAgICAgICBUaGUgbWluaW11bSBhbmQgbWF4aW11bSBvZiB0aGUgZXh0ZW50LlxyXG4gICAqL1xyXG4gIF9nZXRCb3VuZGluZ0JveE9mQ2lyY2xlKGNpcmNsZSkge1xyXG4gICAgY29uc3QgbWF4ID0gW2NpcmNsZVswXVswXSwgY2lyY2xlWzBdWzFdXTtcclxuICAgIGNvbnN0IG1pbiA9IFtjaXJjbGVbMF1bMF0sIGNpcmNsZVswXVsxXV07XHJcblxyXG4gICAgZm9yIChsZXQgcCA9IDA7IHAgPCBjaXJjbGUubGVuZ3RoOyBwKyspIHtcclxuICAgICAgY29uc3QgW2ksIGpdID0gY2lyY2xlW3BdO1xyXG5cclxuICAgICAgaWYgKGkgPiBtYXhbMF0pIHtcclxuICAgICAgICBtYXhbMF0gPSBpO1xyXG4gICAgICB9IGVsc2UgaWYgKGkgPCBtaW5bMF0pIHtcclxuICAgICAgICBtaW5bMF0gPSBpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaiA+IG1heFsxXSkge1xyXG4gICAgICAgIG1heFsxXSA9IGo7XHJcbiAgICAgIH0gZWxzZSBpZiAoaiA8IG1pblsxXSkge1xyXG4gICAgICAgIG1pblsxXSA9IGo7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBtYXgsIG1pbiB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogX2JveEdhdGVkQ2lyY2xlIC0gR2VuZXJhdGVzIGEgcmVjdGFuZ3VsYXIgZGF0YXNldCBmcm9tIHRoZSBicnVzaCBjaXJjbGVcclxuICAgKiAgICAgICAgICAgICAgICAgICBmb3IgZWZmaWNpZW50IGZsb29kIGZpbGwvY2xlYW5pbmcuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gIHt0eXBlfSBjaXJjbGUgICAgICAgICAgIEFuIGFycmF5IG9mIHRoZSBwaXhlbCBpbmRpY2llcyB3aXRoaW4gdGhlIGJydXNoIGNpcmNsZS5cclxuICAgKiBAcGFyYW0gIHt0eXBlfSBnYXRlZENpcmNsZUFycmF5IFRoZSBjaXJjbGUgYXJyYXkgd2l0aCB0aGUgZ2F0ZSBhcHBsaWVkLlxyXG4gICAqIEBwYXJhbSAge3R5cGV9IG1pbiAgICAgICAgICAgICAgVGhlIGxvY2F0aW9uIG9mIHRoZSB0b3AgbGVmdCBwaXhlbCBvZiB0aGVcclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlZCBkYXRhc2V0IHdpdGggcmVzcGVjdCB0byB0aGVcclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybHlpbmcgaW1hZ2UgZGF0YS5cclxuICAgKiBAcGFyYW0gIHt0eXBlfSB4U2l6ZSAgICAgICAgICAgIFRoZSB4IHNpemUgb2YgdGhlIGdlbmVyYXRlZCBib3guXHJcbiAgICogQHBhcmFtICB7dHlwZX0geVNpemUgICAgICAgICAgICBUaGUgeSBzaXplIG9mIHRoZSBnZW5lcmF0ZWQgYm94LlxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJbXVtdfSAgICAgICAgICAgVGhlIGRhdGEgd2l0aCBwaXhlbCBbMCwwXSBjZW50ZXJlZCBvbiBtaW4sXHJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgY2lyY2xlIG1hcmtlZCB3aXRoIDEgZm9yIHVub2NjdXBpZWQsIDJcclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciBvY2N1cGllZCBhbmQgMCBmb3Igb3V0c2lkZSBvZiB0aGUgY2lyY2xlIGJvdW5kcy5cclxuICAgKi9cclxuICBfYm94R2F0ZWRDaXJjbGUoY2lyY2xlLCBnYXRlZENpcmNsZUFycmF5LCBtaW4sIHhTaXplLCB5U2l6ZSkge1xyXG4gICAgY29uc3QgZGF0YSA9IFtdO1xyXG5cclxuICAgIC8vIEZpbGwgaW4gc3F1YXJlIGFzIDAgKG91dCBvZiBib3VuZHMvaWdub3JlKS5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeFNpemU7IGkrKykge1xyXG4gICAgICBkYXRhW2ldID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KHlTaXplKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBmaWxsIGNpcmNsZSBpbiBhcyAxLlxyXG4gICAgZm9yIChsZXQgcCA9IDA7IHAgPCBjaXJjbGUubGVuZ3RoOyBwKyspIHtcclxuICAgICAgY29uc3QgaSA9IGNpcmNsZVtwXVswXSAtIG1pblswXTtcclxuICAgICAgY29uc3QgaiA9IGNpcmNsZVtwXVsxXSAtIG1pblsxXTtcclxuXHJcbiAgICAgIGRhdGFbaV1bal0gPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZpbGwgZ2F0ZWQgcmVnaW9uIGFzIDIuXHJcbiAgICBmb3IgKGxldCBwID0gMDsgcCA8IGdhdGVkQ2lyY2xlQXJyYXkubGVuZ3RoOyBwKyspIHtcclxuICAgICAgY29uc3QgaSA9IGdhdGVkQ2lyY2xlQXJyYXlbcF1bMF0gLSBtaW5bMF07XHJcbiAgICAgIGNvbnN0IGogPSBnYXRlZENpcmNsZUFycmF5W3BdWzFdIC0gbWluWzFdO1xyXG5cclxuICAgICAgZGF0YVtpXVtqXSA9IDI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBfZmxvb2RGaWxsRW1wdHlSZWdpb25zRnJvbUVkZ2VzIC0gRmxvb2QgZmlsbHMgZW1wdHkgcmVnaW9ucyB3aGljaCB0b3VjaCB0aGVcclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZSBvZiB0aGUgY2lyY2xlIHdpdGggdGhlIHZhbHVlIDMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gIHtudW1iZXJbXVtdfSBkYXRhIFRoZSBkYXRhIHRvIGZsb29kIGZpbGwuXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZ2V0dGVyIFRoZSBnZXR0ZXIgZnVuY3Rpb24gZmxvb2RGaWxsIHVzZXMgdG8gYWNjZXNzIGFycmF5XHJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzLlxyXG4gICAqIEBtb2RpZmllcyBkYXRhXHJcbiAgICogQHJldHVybnMge251bGx9XHJcbiAgICovXHJcbiAgX2Zsb29kRmlsbEVtcHR5UmVnaW9uc0Zyb21FZGdlcyhkYXRhLCBnZXR0ZXIpIHtcclxuICAgIGNvbnN0IGVkZ2VQaXhlbHMgPSB0aGlzLl9nZXRFZGdlUGl4ZWxzKGRhdGEpO1xyXG5cclxuICAgIGZvciAobGV0IHAgPSAwOyBwIDwgZWRnZVBpeGVscy5sZW5ndGg7IHArKykge1xyXG4gICAgICBjb25zdCBpID0gZWRnZVBpeGVsc1twXVswXTtcclxuICAgICAgY29uc3QgaiA9IGVkZ2VQaXhlbHNbcF1bMV07XHJcblxyXG4gICAgICBpZiAoZGF0YVtpXVtqXSA9PT0gMSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGZsb29kRmlsbCh7XHJcbiAgICAgICAgICBnZXR0ZXI6IGdldHRlcixcclxuICAgICAgICAgIHNlZWQ6IFtpLCBqXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBmbG9vZGVkID0gcmVzdWx0LmZsb29kZWQ7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZmxvb2RlZC5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgZGF0YVtmbG9vZGVkW2tdWzBdXVtmbG9vZGVkW2tdWzFdXSA9IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBfZmluZEhvbGVzQW5kUmVnaW9ucyAtIEZpbmRzIGFsbCB0aGUgaG9sZXMgYW5kIHJlZ2lvbnMgYW5kIHJldHVybnMgdGhlaXJcclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9ucyB3aXRoaW4gdGhlIDJEIGRhdGEgc2V0LiBTZXRzIHRoZSB2YWx1ZSBvZlxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgaG9sZXMgYW5kIHJlZ2lvbnMgdG8gNCBhbmQgNSwgcmVzcGVjdGl2ZWx5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtICB7bnVtYmVyW11bXX0gY2lyY2xlIEFuIGFycmF5IG9mIHRoZSBwaXhlbCBpbmRpY2llcyB3aXRoaW4gdGhlIGJydXNoIGNpcmNsZS5cclxuICAgKiBAcGFyYW0gIHtudW1iZXJbXVtdfSBkYXRhICAgVGhlIGRhdGEgc2V0LlxyXG4gICAqIEBwYXJhbSAge2Z1bmN0aW9ufSAgIGdldHRlciBUaGUgZ2V0dGVyIGZ1bmN0aW9uIGZsb29kRmlsbCB1c2VzIHRvIGFjY2VzcyBhcnJheVxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5cclxuICAgKiBAcGFyYW0gIHtudW1iZXJbXX0gICBtaW4gICAgVGhlIGxvY2F0aW9uIG9mIHRoZSB0b3AgbGVmdCBwaXhlbCBvZiB0aGUgZGF0YXNldFxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICB3aXRoIHJlc3BlY3QgdG8gdGhlIHVuZGVybHlpbmcgaW1hZ2UgZGF0YS5cclxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSAgICBBbiBvYmplY3QgY29udGFpbmluZyBhcnJheXMgb2YgdGhlIG9jY3VwYXRpb24gb2YgYWxsXHJcbiAgICogICAgICAgICAgICAgICAgICAgICAgcmVnaW9ucyBhbmQgaG9sZXMgaW4gdGhlIGRhdGFzZXQuXHJcbiAgICovXHJcbiAgX2ZpbmRIb2xlc0FuZFJlZ2lvbnMoY2lyY2xlLCBkYXRhLCBnZXR0ZXIsIG1pbikge1xyXG4gICAgY29uc3QgaG9sZXMgPSBbXTtcclxuICAgIGNvbnN0IHJlZ2lvbnMgPSBbXTtcclxuXHJcbiAgICAvLyBGaW5kIGVhY2ggaG9sZSBhbmQgcGFpbnQgdGhlbSAzLlxyXG4gICAgLy8gRmluZCBjb250aWd1b3VzIHJlZ2lvbnMgYW5kIHBhaW50IHRoZW0gNC5cclxuICAgIGZvciAobGV0IHAgPSAwOyBwIDwgY2lyY2xlLmxlbmd0aDsgcCsrKSB7XHJcbiAgICAgIGNvbnN0IGkgPSBjaXJjbGVbcF1bMF0gLSBtaW5bMF07XHJcbiAgICAgIGNvbnN0IGogPSBjaXJjbGVbcF1bMV0gLSBtaW5bMV07XHJcblxyXG4gICAgICBpZiAoZGF0YVtpXVtqXSA9PT0gMSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGZsb29kRmlsbCh7XHJcbiAgICAgICAgICBnZXR0ZXI6IGdldHRlcixcclxuICAgICAgICAgIHNlZWQ6IFtpLCBqXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBmbG9vZGVkID0gcmVzdWx0LmZsb29kZWQ7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZmxvb2RlZC5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgZGF0YVtmbG9vZGVkW2tdWzBdXVtmbG9vZGVkW2tdWzFdXSA9IDQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBob2xlcy5wdXNoKGZsb29kZWQpO1xyXG4gICAgICB9IGVsc2UgaWYgKGRhdGFbaV1bal0gPT09IDIpIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBmbG9vZEZpbGwoe1xyXG4gICAgICAgICAgZ2V0dGVyOiBnZXR0ZXIsXHJcbiAgICAgICAgICBzZWVkOiBbaSwgal1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgZmxvb2RlZCA9IHJlc3VsdC5mbG9vZGVkO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGZsb29kZWQubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgIGRhdGFbZmxvb2RlZFtrXVswXV1bZmxvb2RlZFtrXVsxXV0gPSA1O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVnaW9ucy5wdXNoKGZsb29kZWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgaG9sZXMsIHJlZ2lvbnMgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIF9nZXRBcmVhT2ZMYXJnZXN0UmVnaW9uIC0gUmV0dXJucyB0aGUgbnVtYmVyIG9mIHBpeGVscyBpbiB0aGUgbGFyZ2VzdFxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaW9uIG9mIGEgbGlzdCBvZiByZWdpb25zLlxyXG4gICAqXHJcbiAgICogQHBhcmFtICB7bnVtYmVyW11bXVtdfSByZWdpb25zIEFuIGFycmF5IG9mIHJlZ2lvbnMgb2YgMkQgcG9pbnRzLlxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9ICAgICAgICBUaGUgYXJlYSBvZiB0aGUgbGFyZ2VzdCByZWdpb24gaW4gcGl4ZWxzLlxyXG4gICAqL1xyXG4gIF9nZXRBcmVhT2ZMYXJnZXN0UmVnaW9uKHJlZ2lvbnMpIHtcclxuICAgIGxldCBsYXJnZXN0UmVnaW9uQXJlYSA9IDA7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWdpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChyZWdpb25zW2ldLmxlbmd0aCA+IGxhcmdlc3RSZWdpb25BcmVhKSB7XHJcbiAgICAgICAgbGFyZ2VzdFJlZ2lvbkFyZWEgPSByZWdpb25zW2ldLmxlbmd0aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsYXJnZXN0UmVnaW9uQXJlYTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQnJ1c2hUb29sLCBzdG9yZSB9IGZyb20gJ2Nvcm5lcnN0b25lLXRvb2xzJztcclxuaW1wb3J0IGdlbmVyYXRlQnJ1c2hNZXRhZGF0YSBmcm9tICcuLi91dGlsL2dlbmVyYXRlQnJ1c2hNZXRhZGF0YS5qcyc7XHJcblxyXG5jb25zdCBicnVzaE1vZHVsZSA9IHN0b3JlLm1vZHVsZXMuYnJ1c2g7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcnVzaDNEVG9vbCBleHRlbmRzIEJydXNoVG9vbCB7XHJcbiAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbiA9IHt9KSB7XHJcbiAgICBjb25zdCBkZWZhdWx0Q29uZmlnID0ge307XHJcbiAgICBjb25zdCBpbml0aWFsQ29uZmlndXJhdGlvbiA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdENvbmZpZywgY29uZmlndXJhdGlvbik7XHJcblxyXG4gICAgc3VwZXIoaW5pdGlhbENvbmZpZ3VyYXRpb24pO1xyXG5cclxuICAgIHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb24gPSBpbml0aWFsQ29uZmlndXJhdGlvbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpc2UgcGFpbnRpbmcgd2l0aCBiYXNlQnJ1c2hUb29sXHJcbiAgICpcclxuICAgKiBAb3ZlcnJpZGUgQHByb3RlY3RlZFxyXG4gICAqIEBldmVudFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldnQgLSBUaGUgZXZlbnQuXHJcbiAgICovXHJcbiAgX3N0YXJ0UGFpbnRpbmcoZXZ0KSB7XHJcbiAgICBjb25zdCBldmVudERhdGEgPSBldnQuZGV0YWlsO1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGV2ZW50RGF0YS5lbGVtZW50O1xyXG5cclxuICAgIGNvbnN0IHsgbGFiZWxtYXAzRCwgY3VycmVudEltYWdlSWRJbmRleCwgYWN0aXZlTGFiZWxtYXBJbmRleCB9ID0gYnJ1c2hNb2R1bGUuZ2V0dGVycy5nZXRBbmRDYWNoZUxhYmVsbWFwMkQoZWxlbWVudCk7XHJcblxyXG4gICAgY29uc3Qgc2hvdWxkRXJhc2UgPSB0aGlzLl9pc0N0cmxEb3duKGV2ZW50RGF0YSkgfHwgdGhpcy5jb25maWd1cmF0aW9uLmFsd2F5c0VyYXNlT25DbGljaztcclxuXHJcbiAgICB0aGlzLnBhaW50RXZlbnREYXRhID0ge1xyXG4gICAgICBsYWJlbG1hcDNELFxyXG4gICAgICBjdXJyZW50SW1hZ2VJZEluZGV4LFxyXG4gICAgICBhY3RpdmVMYWJlbG1hcEluZGV4LFxyXG4gICAgICBzaG91bGRFcmFzZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZWdtZW50SW5kZXggPSBsYWJlbG1hcDNELmFjdGl2ZVNlZ21lbnRJbmRleDtcclxuICAgIGxldCBtZXRhZGF0YSA9IGxhYmVsbWFwM0QubWV0YWRhdGFbc2VnbWVudEluZGV4XTtcclxuXHJcbiAgICBpZiAoIW1ldGFkYXRhKSB7XHJcbiAgICAgIG1ldGFkYXRhID0gZ2VuZXJhdGVCcnVzaE1ldGFkYXRhKCdVbm5hbWVkIFNlZ21lbnQnKTtcclxuXHJcbiAgICAgIGJydXNoTW9kdWxlLnNldHRlcnMubWV0YWRhdGEoZWxlbWVudCwgYWN0aXZlTGFiZWxtYXBJbmRleCwgc2VnbWVudEluZGV4LCBtZXRhZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0YWRhdGEgYXNzaWduZWQsIHN0YXJ0IGRyYXdpbmcuXHJcbiAgICBpZiAoZXZlbnREYXRhLmN1cnJlbnRQb2ludHMpIHtcclxuICAgICAgdGhpcy5fcGFpbnQoZXZ0KTtcclxuICAgIH1cclxuICAgIHRoaXMuX2RyYXdpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5fc3RhcnRMaXN0ZW5pbmdGb3JNb3VzZVVwKGVsZW1lbnQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBGcmVlaGFuZFJvaVNjdWxwdG9yVG9vbCwgdG9vbENvbG9ycywgc3RvcmUsIGdldFRvb2xTdGF0ZSB9IGZyb20gJ2Nvcm5lcnN0b25lLXRvb2xzJztcclxuaW1wb3J0IHsgdXBkYXRlSW1hZ2UgfSBmcm9tICdjb3JuZXJzdG9uZS1jb3JlJztcclxuaW1wb3J0IGludGVycG9sYXRlIGZyb20gJy4uL3V0aWwvZnJlZWhhbmRJbnRlcnBvbGF0ZS9pbnRlcnBvbGF0ZS5qcyc7XHJcblxyXG5jb25zdCB7IG1vZHVsZXMsIHN0YXRlIH0gPSBzdG9yZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyZWVoYW5kUm9pM0RTY3VscHRvclRvb2wgZXh0ZW5kcyBGcmVlaGFuZFJvaVNjdWxwdG9yVG9vbCB7XHJcbiAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbiA9IHt9KSB7XHJcbiAgICBjb25zdCBkZWZhdWx0Q29uZmlnID0ge1xyXG4gICAgICBjb25maWd1cmF0aW9uOiBnZXREZWZhdWx0RnJlZWhhbmRTY3VscHRlck1vdXNlVG9vbENvbmZpZ3VyYXRpb24oKVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGluaXRpYWxDb25maWd1cmF0aW9uID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q29uZmlnLCBjb25maWd1cmF0aW9uKTtcclxuXHJcbiAgICBzdXBlcihpbml0aWFsQ29uZmlndXJhdGlvbik7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGJvdW5kIGZ1bmN0aW9ucyBmb3IgcHJpdmF0ZSBldmVudCBsb29wLlxyXG4gICAgdGhpcy5hY3RpdmVNb3VzZVVwQ2FsbGJhY2sgPSB0aGlzLmFjdGl2ZU1vdXNlVXBDYWxsYmFjay5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2VsZWN0IHRoZSBmcmVlaGFuZCB0b29sIHRvIGJlIGVkaXRlZC4gRG9uJ3QgYWxsb3cgc2VsZWN0aW5nIG9mIGxvY2tlZFxyXG4gICAqIFJPSUNvbnRvdXJzLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnREYXRhIC0gRGF0YSBvYmplY3QgYXNzb2NpYXRlZCB3aXRoIHRoZSBldmVudC5cclxuICAgKi9cclxuICBfc2VsZWN0RnJlZWhhbmRUb29sKGV2ZW50RGF0YSkge1xyXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uO1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGV2ZW50RGF0YS5lbGVtZW50O1xyXG4gICAgY29uc3QgY2xvc2VzdFRvb2xJbmRleCA9IHRoaXMuX2dldENsb3Nlc3RGcmVlaGFuZFRvb2xPbkVsZW1lbnQoZWxlbWVudCwgZXZlbnREYXRhKTtcclxuXHJcbiAgICBpZiAoY2xvc2VzdFRvb2xJbmRleCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b29sU3RhdGUgPSBnZXRUb29sU3RhdGUoZWxlbWVudCwgdGhpcy5yZWZlcmVuY2VkVG9vbE5hbWUpO1xyXG5cclxuICAgIGNvbnN0IHRvb2xEYXRhID0gdG9vbFN0YXRlLmRhdGFbY2xvc2VzdFRvb2xJbmRleF07XHJcblxyXG4gICAgY29uc3QgaXNMb2NrZWQgPSB0b29sRGF0YS5yZWZlcmVuY2VkU3RydWN0dXJlU2V0LmlzTG9ja2VkO1xyXG5cclxuICAgIGlmIChpc0xvY2tlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlnLmhvdmVyQ29sb3IgPSB0b29sRGF0YS5yZWZlcmVuY2VkUk9JQ29udG91ci5jb2xvcjtcclxuXHJcbiAgICBjb25maWcuY3VycmVudFRvb2wgPSBjbG9zZXN0VG9vbEluZGV4O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnQgaGFuZGxlciBmb3IgTU9VU0VfVVAgZHVyaW5nIHRoZSBhY3RpdmUgbG9vcC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldnQgLSBUaGUgZXZlbnQuXHJcbiAgICovXHJcbiAgX2FjdGl2ZUVuZChldnQpIHtcclxuICAgIGNvbnN0IGV2ZW50RGF0YSA9IGV2dC5kZXRhaWw7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZXZlbnREYXRhLmVsZW1lbnQ7XHJcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb247XHJcblxyXG4gICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgc3RhdGUuaXNNdWx0aVBhcnRUb29sQWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5fZ2V0TW91c2VMb2NhdGlvbihldmVudERhdGEpO1xyXG4gICAgdGhpcy5faW52YWxpZGF0ZVRvb2xEYXRhKGV2ZW50RGF0YSk7XHJcblxyXG4gICAgY29uZmlnLm1vdXNlVXBSZW5kZXIgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuX2RlYWN0aXZhdGVTY3VscHQoZWxlbWVudCk7XHJcblxyXG4gICAgY29uc3QgdG9vbERhdGEgPSBnZXRUb29sU3RhdGUoZWxlbWVudCwgdGhpcy5yZWZlcmVuY2VkVG9vbE5hbWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHRvb2xEYXRhLmRhdGFbY29uZmlnLmN1cnJlbnRUb29sXTtcclxuXHJcbiAgICBpZiAobW9kdWxlcy5mcmVlaGFuZDNELmdldHRlcnMuaW50ZXJwb2xhdGUoKSkge1xyXG4gICAgICBpbnRlcnBvbGF0ZShkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIGltYWdlXHJcbiAgICB1cGRhdGVJbWFnZShldmVudERhdGEuZWxlbWVudCk7XHJcblxyXG4gICAgcHJldmVudFByb3BhZ2F0aW9uKGV2dCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbnZhbGlkYXRlIHRoZSBmcmVlaGFuZCB0b29sIGRhdGEsIHRpcmdnZXJpbmcgcmUtY2FsY3VsYXRpb24gb2Ygc3RhdGlzdGljcy5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlIEBvdmVycmlkZVxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudERhdGEgLSBEYXRhIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggdGhlIGV2ZW50LlxyXG4gICAqL1xyXG4gIF9pbnZhbGlkYXRlVG9vbERhdGEoZXZlbnREYXRhKSB7XHJcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb247XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZXZlbnREYXRhLmVsZW1lbnQ7XHJcbiAgICBjb25zdCB0b29sRGF0YSA9IGdldFRvb2xTdGF0ZShlbGVtZW50LCB0aGlzLnJlZmVyZW5jZWRUb29sTmFtZSk7XHJcbiAgICBjb25zdCBkYXRhID0gdG9vbERhdGEuZGF0YVtjb25maWcuY3VycmVudFRvb2xdO1xyXG5cclxuICAgIGRhdGEuaW52YWxpZGF0ZWQgPSB0cnVlO1xyXG4gICAgZGF0YS5pbnRlcnBvbGF0ZWQgPSBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBkZWZhdWx0IGZyZWVoYW5kU2N1bHB0ZXJNb3VzZVRvb2wgY29uZmlndXJhdGlvbi5cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgZGVmYXVsdCBjb25maWd1cmF0aW9uIG9iamVjdC5cclxuICovXHJcbmZ1bmN0aW9uIGdldERlZmF1bHRGcmVlaGFuZFNjdWxwdGVyTW91c2VUb29sQ29uZmlndXJhdGlvbigpIHtcclxuICByZXR1cm4ge1xyXG4gICAgbW91c2VMb2NhdGlvbjoge1xyXG4gICAgICBoYW5kbGVzOiB7XHJcbiAgICAgICAgc3RhcnQ6IHtcclxuICAgICAgICAgIGhpZ2hsaWdodDogdHJ1ZSxcclxuICAgICAgICAgIGFjdGl2ZTogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1pblNwYWNpbmc6IDEsXHJcbiAgICBjdXJyZW50VG9vbDogbnVsbCxcclxuICAgIGRyYWdDb2xvcjogdG9vbENvbG9ycy5nZXRBY3RpdmVDb2xvcigpLFxyXG4gICAgaG92ZXJDb2xvcjogdG9vbENvbG9ycy5nZXRUb29sQ29sb3IoKSxcclxuXHJcbiAgICAvKiAtLS0gSG92ZXIgb3B0aW9ucyAtLS1cclxuICAgIHNob3dDdXJzb3JPbkhvdmVyOiAgICAgICAgU2hvd3MgYSBwcmV2aWV3IG9mIHRoZSBzY3VscHRpbmcgcmFkaXVzIG9uIGhvdmVyLlxyXG4gICAgbGltaXRSYWRpdXNPdXRzaWRlUmVnaW9uOiBMaW1pdCBtYXggdG9vbHNpemUgb3V0c2lkZSB0aGUgc3ViamVjdCBST0kgYmFzZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb24gc3ViamVjdCBST0kgYXJlYS5cclxuICAgIGhvdmVyQ3Vyc29yRmFkZUFscGhhOiAgICAgQWxwaGEgdG8gZmFkZSB0byB3aGVuIHRvb2wgdmVyeSBkaXN0YW50IGZyb21cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdCBST0kuXHJcbiAgICBob3ZlckN1cnNvckZhZGVEaXN0YW5jZTogIERpc3RhbmNlIGZyb20gUk9JIGluIHdoaWNoIHRvIGZhZGUgdGhlIGhvdmVyQ3Vyc29yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbiB1bml0cyBvZiByYWRpaSkuXHJcbiAgICAqL1xyXG4gICAgc2hvd0N1cnNvck9uSG92ZXI6IHRydWUsXHJcbiAgICBsaW1pdFJhZGl1c091dHNpZGVSZWdpb246IHRydWUsXHJcbiAgICBob3ZlckN1cnNvckZhZGVBbHBoYTogMC41LFxyXG4gICAgaG92ZXJDdXJzb3JGYWRlRGlzdGFuY2U6IDEuMlxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXZlbnRQcm9wYWdhdGlvbihldnQpIHtcclxuICBldnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG59XHJcbiIsImltcG9ydCB7IG1ldGFEYXRhLCB1cGRhdGVJbWFnZSwgcGl4ZWxUb0NhbnZhcywgZ2V0RW5hYmxlZEVsZW1lbnQsIGdldFBpeGVscyB9IGZyb20gJ2Nvcm5lcnN0b25lLWNvcmUnO1xyXG5pbXBvcnQgeyBwb2ludCB9IGZyb20gJ2Nvcm5lcnN0b25lLW1hdGgnO1xyXG5pbXBvcnQge1xyXG4gIGltcG9ydEludGVybmFsTW9kdWxlLFxyXG4gIEZyZWVoYW5kUm9pVG9vbCxcclxuICBnZXRUb29sU3RhdGUsXHJcbiAgc3RvcmUsXHJcbiAgdG9vbFN0eWxlLFxyXG4gIHRvb2xDb2xvcnMsXHJcbiAgRVZFTlRTXHJcbn0gZnJvbSAnY29ybmVyc3RvbmUtdG9vbHMnO1xyXG5cclxuaW1wb3J0IGdlbmVyYXRlVUlEIGZyb20gJy4uL3V0aWwvZ2VuZXJhdGVVSUQuanMnO1xyXG5pbXBvcnQgaW50ZXJwb2xhdGUgZnJvbSAnLi4vdXRpbC9mcmVlaGFuZEludGVycG9sYXRlL2ludGVycG9sYXRlLmpzJztcclxuaW1wb3J0IGdldFNlcmllc0luc3RhbmNlVWlkRnJvbUVuYWJsZWRFbGVtZW50IGZyb20gJy4uL3V0aWwvZ2V0U2VyaWVzSW5zdGFuY2VVaWRGcm9tRW5hYmxlZEVsZW1lbnQuanMnO1xyXG5cclxuLy8gQ29ybmVyc3RvbmUgM3JkIHBhcnR5IGRldiBraXQgaW1wb3J0c1xyXG5jb25zdCB7IGluc2VydE9yRGVsZXRlLCBmcmVlaGFuZEFyZWEsIGNhbGN1bGF0ZUZyZWVoYW5kU3RhdGlzdGljcyB9ID0gaW1wb3J0SW50ZXJuYWxNb2R1bGUoJ3V0aWwvZnJlZWhhbmRVdGlscycpO1xyXG5jb25zdCBkcmF3ID0gaW1wb3J0SW50ZXJuYWxNb2R1bGUoJ2RyYXdpbmcvZHJhdycpO1xyXG5jb25zdCBkcmF3Sm9pbmVkTGluZXMgPSBpbXBvcnRJbnRlcm5hbE1vZHVsZSgnZHJhd2luZy9kcmF3Sm9pbmVkTGluZXMnKTtcclxuY29uc3QgZHJhd0hhbmRsZXMgPSBpbXBvcnRJbnRlcm5hbE1vZHVsZSgnZHJhd2luZy9kcmF3SGFuZGxlcycpO1xyXG5jb25zdCBkcmF3TGlua2VkVGV4dEJveCA9IGltcG9ydEludGVybmFsTW9kdWxlKCdkcmF3aW5nL2RyYXdMaW5rZWRUZXh0Qm94Jyk7XHJcbmNvbnN0IG1vdmVIYW5kbGVOZWFySW1hZ2VQb2ludCA9IGltcG9ydEludGVybmFsTW9kdWxlKCdtYW5pcHVsYXRvcnMvbW92ZUhhbmRsZU5lYXJJbWFnZVBvaW50Jyk7XHJcbmNvbnN0IGdldE5ld0NvbnRleHQgPSBpbXBvcnRJbnRlcm5hbE1vZHVsZSgnZHJhd2luZy9nZXROZXdDb250ZXh0Jyk7XHJcbmNvbnN0IG1vZHVsZXMgPSBzdG9yZS5tb2R1bGVzO1xyXG5jb25zdCBudW1iZXJzV2l0aENvbW1hcyA9IGltcG9ydEludGVybmFsTW9kdWxlKCd1dGlsL251bWJlcnNXaXRoQ29tbWFzJyk7XHJcbmNvbnN0IHBvaW50SW5zaWRlQm91bmRpbmdCb3ggPSBpbXBvcnRJbnRlcm5hbE1vZHVsZSgndXRpbC9wb2ludEluc2lkZUJvdW5kaW5nQm94Jyk7XHJcbmNvbnN0IGNhbGN1bGF0ZVNVViA9IGltcG9ydEludGVybmFsTW9kdWxlKCd1dGlsL2NhbGN1bGF0ZVNVVicpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJlZWhhbmRSb2kzRFRvb2wgZXh0ZW5kcyBGcmVlaGFuZFJvaVRvb2wge1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb24gPSB7fSkge1xyXG4gICAgY29uc3QgZGVmYXVsdENvbmZpZyA9IHtcclxuICAgICAgY29uZmlndXJhdGlvbjogZGVmYXVsdEZyZWVoYW5kQ29uZmlndXJhdGlvbigpXHJcbiAgICB9O1xyXG4gICAgY29uc3QgaW5pdGlhbENvbmZpZ3VyYXRpb24gPSBPYmplY3QuYXNzaWduKGRlZmF1bHRDb25maWcsIGNvbmZpZ3VyYXRpb24pO1xyXG5cclxuICAgIHN1cGVyKGluaXRpYWxDb25maWd1cmF0aW9uKTtcclxuXHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24uYWx3YXlzU2hvd0hhbmRsZXMgPSBmYWxzZTtcclxuICAgIHRoaXMuX2ZyZWVoYW5kM0RTdG9yZSA9IG1vZHVsZXMuZnJlZWhhbmQzRDtcclxuXHJcbiAgICB0aGlzLl9vbk1lYXN1cmVtZW50UmVtb3ZlZCA9IHRoaXMuX29uTWVhc3VyZW1lbnRSZW1vdmVkLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLl9kcmF3aW5nTW91c2VVcENhbGxiYWNrID0gdGhpcy5fZHJhd2luZ01vdXNlVXBDYWxsYmFjay5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIHRoZSBtZWFzdXJlbWVudCBkYXRhIGZvciB0aGlzIHRvb2wuXHJcbiAgICogQG92ZXJyaWRlIEBwdWJsaWMgQG1ldGhvZFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50RGF0YVxyXG4gICAqIEByZXR1cm5zIHtvYmplY3R9IG1lYXN1cmVtZW50RGF0YVxyXG4gICAqL1xyXG4gIGNyZWF0ZU5ld01lYXN1cmVtZW50KGV2ZW50RGF0YSkge1xyXG4gICAgY29uc3QgZnJlZWhhbmQzRFN0b3JlID0gdGhpcy5fZnJlZWhhbmQzRFN0b3JlO1xyXG4gICAgY29uc3QgZ29vZEV2ZW50RGF0YSA9IGV2ZW50RGF0YSAmJiBldmVudERhdGEuY3VycmVudFBvaW50cyAmJiBldmVudERhdGEuY3VycmVudFBvaW50cy5pbWFnZTtcclxuXHJcbiAgICBpZiAoIWdvb2RFdmVudERhdGEpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihgcmVxdWlyZWQgZXZlbnREYXRhIG5vdCBzdXBwbGllZCB0byB0b29sICR7dGhpcy5uYW1lfSdzIGNyZWF0ZU5ld01lYXN1cmVtZW50YCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZW5hYmxlZEVsZW1lbnQgPSBnZXRFbmFibGVkRWxlbWVudCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgY29uc3Qgc2VyaWVzSW5zdGFuY2VVaWQgPSBnZXRTZXJpZXNJbnN0YW5jZVVpZEZyb21FbmFibGVkRWxlbWVudChlbmFibGVkRWxlbWVudCk7XHJcbiAgICBjb25zdCByZWZlcmVuY2VkU3RydWN0dXJlU2V0ID0gZnJlZWhhbmQzRFN0b3JlLmdldHRlcnMuc3RydWN0dXJlU2V0KHNlcmllc0luc3RhbmNlVWlkLCAnREVGQVVMVCcpO1xyXG4gICAgY29uc3QgcmVmZXJlbmNlZFJPSUNvbnRvdXIgPSBmcmVlaGFuZDNEU3RvcmUuZ2V0dGVycy5hY3RpdmVST0lDb250b3VyKHNlcmllc0luc3RhbmNlVWlkKTtcclxuXHJcbiAgICBjb25zdCBtZWFzdXJlbWVudERhdGEgPSB7XHJcbiAgICAgIHVpZDogZ2VuZXJhdGVVSUQoKSxcclxuICAgICAgc2VyaWVzSW5zdGFuY2VVaWQsXHJcbiAgICAgIHN0cnVjdHVyZVNldFVpZDogJ0RFRkFVTFQnLFxyXG4gICAgICBST0lDb250b3VyVWlkOiByZWZlcmVuY2VkUk9JQ29udG91ci51aWQsXHJcbiAgICAgIHJlZmVyZW5jZWRST0lDb250b3VyLFxyXG4gICAgICByZWZlcmVuY2VkU3RydWN0dXJlU2V0LFxyXG4gICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgIGludmFsaWRhdGVkOiB0cnVlLFxyXG4gICAgICBoYW5kbGVzOiB7XHJcbiAgICAgICAgcG9pbnRzOiBbXVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIG1lYXN1cmVtZW50RGF0YS5oYW5kbGVzLnRleHRCb3ggPSB7XHJcbiAgICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICAgIGhhc01vdmVkOiBmYWxzZSxcclxuICAgICAgbW92ZXNJbmRlcGVuZGVudGx5OiBmYWxzZSxcclxuICAgICAgZHJhd25JbmRlcGVuZGVudGx5OiB0cnVlLFxyXG4gICAgICBhbGxvd2VkT3V0c2lkZUltYWdlOiB0cnVlLFxyXG4gICAgICBoYXNCb3VuZGluZ0JveDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBmcmVlaGFuZDNEU3RvcmUuc2V0dGVycy5pbmNyZW1lbnRQb2x5Z29uQ291bnQoc2VyaWVzSW5zdGFuY2VVaWQsICdERUZBVUxUJywgcmVmZXJlbmNlZFJPSUNvbnRvdXIudWlkKTtcclxuXHJcbiAgICByZXR1cm4gbWVhc3VyZW1lbnREYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnQgaGFuZGxlciBmb3IgY2FsbGVkIGJ5IHRoZSBtb3VzZURvd25BY3RpdmF0ZSBldmVudCwgaWYgdG9vbCBpcyBhY3RpdmUgYW5kXHJcbiAgICogdGhlIGV2ZW50IGlzIG5vdCBjYXVnaHQgYnkgbW91c2VEb3duQ2FsbGJhY2suXHJcbiAgICogQG92ZXJyaWRlXHJcbiAgICpcclxuICAgKiBAZXZlbnRcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZ0IC0gVGhlIGV2ZW50LlxyXG4gICAqL1xyXG4gIGFkZE5ld01lYXN1cmVtZW50KGV2dCwgaW50ZXJhY3Rpb25UeXBlKSB7XHJcbiAgICBjb25zdCBldmVudERhdGEgPSBldnQuZGV0YWlsO1xyXG5cclxuICAgIC8vIENyZWF0ZSBtZXRhZGF0YSBpZiBpdCBkb2Vzbid0IGV4aXN0LlxyXG4gICAgdGhpcy5fYWRkQW5kU2V0Vm9sdW1lSWZOb1ZvbHVtZXMoKTtcclxuICAgIHRoaXMuX2RyYXdpbmcgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuX3N0YXJ0RHJhd2luZyhldnQpO1xyXG4gICAgdGhpcy5fYWRkUG9pbnQoZXZlbnREYXRhKTtcclxuICAgIHByZXZlbnRQcm9wYWdhdGlvbihldnQpO1xyXG4gIH1cclxuXHJcbiAgX2FkZEFuZFNldFZvbHVtZUlmTm9Wb2x1bWVzKCkge1xyXG4gICAgY29uc3QgZW5hYmxlZEVsZW1lbnQgPSBnZXRFbmFibGVkRWxlbWVudCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgY29uc3Qgc2VyaWVzSW5zdGFuY2VVaWQgPSBnZXRTZXJpZXNJbnN0YW5jZVVpZEZyb21FbmFibGVkRWxlbWVudChlbmFibGVkRWxlbWVudCk7XHJcbiAgICBjb25zdCBmcmVlaGFuZDNEU3RvcmUgPSBtb2R1bGVzLmZyZWVoYW5kM0Q7XHJcbiAgICBsZXQgc2VyaWVzID0gZnJlZWhhbmQzRFN0b3JlLmdldHRlcnMuc2VyaWVzKHNlcmllc0luc3RhbmNlVWlkKTtcclxuXHJcbiAgICBpZiAoIXNlcmllcykge1xyXG4gICAgICBmcmVlaGFuZDNEU3RvcmUuc2V0dGVycy5zZXJpZXMoc2VyaWVzSW5zdGFuY2VVaWQpO1xyXG4gICAgICBzZXJpZXMgPSBmcmVlaGFuZDNEU3RvcmUuZ2V0dGVycy5zZXJpZXMoc2VyaWVzSW5zdGFuY2VVaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjdGl2ZVJPSUNvbnRvdXIgPSBmcmVlaGFuZDNEU3RvcmUuZ2V0dGVycy5hY3RpdmVST0lDb250b3VyKHNlcmllc0luc3RhbmNlVWlkKTtcclxuXHJcbiAgICBpZiAoIWFjdGl2ZVJPSUNvbnRvdXIpIHtcclxuICAgICAgZnJlZWhhbmQzRFN0b3JlLnNldHRlcnMuUk9JQ29udG91cihzZXJpZXNJbnN0YW5jZVVpZCwgJ0RFRkFVTFQnLCAnVW5uYW1lZCBMZXNpb24nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYSBoYW5kbGUgb2YgYSBwYXJ0aWN1bGFyIHRvb2wgaWYgaXQgaXMgY2xvc2UgdG8gdGhlIG1vdXNlIGN1cnNvclxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCAtIFRoZSBlbGVtZW50IG9uIHdoaWNoIHRoZSByb2kgaXMgYmVpbmcgZHJhd24uXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgICAgICBEYXRhIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggdGhlIHRvb2wuXHJcbiAgICogQHBhcmFtIHsqfSBjb29yZHNcclxuICAgKiBAcmV0dXJucyB7TnVtYmVyfE9iamVjdHxCb29sZWFufVxyXG4gICAqL1xyXG4gIF9wb2ludE5lYXJIYW5kbGUoZWxlbWVudCwgZGF0YSwgY29vcmRzKSB7XHJcbiAgICBjb25zdCBmcmVlaGFuZDNEU3RvcmUgPSB0aGlzLl9mcmVlaGFuZDNEU3RvcmU7XHJcblxyXG4gICAgaWYgKCFkYXRhLmhhbmRsZXMgfHwgZGF0YS5oYW5kbGVzLnBvaW50cyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YS52aXNpYmxlID09PSBmYWxzZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcG9pbnRzID0gZGF0YS5oYW5kbGVzLnBvaW50cztcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBoYW5kbGVDYW52YXMgPSBwaXhlbFRvQ2FudmFzKGVsZW1lbnQsIHBvaW50c1tpXSk7XHJcblxyXG4gICAgICBpZiAocG9pbnQuZGlzdGFuY2UoaGFuZGxlQ2FudmFzLCBjb29yZHMpIDwgNikge1xyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgdG8gc2VlIGlmIG1vdXNlIGluIGJvdW5kaW5nIGJveCBvZiB0ZXh0Ym94XHJcbiAgICBpZiAoZnJlZWhhbmQzRFN0b3JlLnN0YXRlLmRpc3BsYXlTdGF0cyAmJiBkYXRhLmhhbmRsZXMudGV4dEJveCkge1xyXG4gICAgICBpZiAocG9pbnRJbnNpZGVCb3VuZGluZ0JveChkYXRhLmhhbmRsZXMudGV4dEJveCwgY29vcmRzKSkge1xyXG4gICAgICAgIHJldHVybiBkYXRhLmhhbmRsZXMudGV4dEJveDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWN0aXZlIG1vdXNlIGRvd24gY2FsbGJhY2sgdGhhdCB0YWtlcyBwcmlvcml0eSBpZiB0aGUgdXNlciBpcyBhdHRlbXB0aW5nXHJcbiAgICogdG8gaW5zZXJ0IG9yIGRlbGV0ZSBhIGhhbmRsZSB3aXRoIGN0cmwgKyBjbGljay5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldnQgLSBUaGUgZXZlbnQuXHJcbiAgICovXHJcbiAgcHJlTW91c2VEb3duQ2FsbGJhY2soZXZ0KSB7XHJcbiAgICBjb25zdCBldmVudERhdGEgPSBldnQuZGV0YWlsO1xyXG5cclxuICAgIGNvbnN0IHRvb2xEYXRhID0gZ2V0VG9vbFN0YXRlKGV2dC5jdXJyZW50VGFyZ2V0LCB0aGlzLm5hbWUpO1xyXG5cclxuICAgIGlmICghdG9vbERhdGEpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5lYXJieSA9IHRoaXMuX3BvaW50TmVhckhhbmRsZUFsbFRvb2xzKGV2ZW50RGF0YSk7XHJcbiAgICBjb25zdCBmcmVlaGFuZDNEU3RvcmUgPSB0aGlzLl9mcmVlaGFuZDNEU3RvcmU7XHJcblxyXG4gICAgaWYgKGV2ZW50RGF0YS5ldmVudC5jdHJsS2V5KSB7XHJcbiAgICAgIGlmIChuZWFyYnkgIT09IHVuZGVmaW5lZCAmJiBuZWFyYnkuaGFuZGxlTmVhcmJ5Lmhhc0JvdW5kaW5nQm94KSB7XHJcbiAgICAgICAgLy8gQ3RybCArIGNsaWNrZWQgdGV4dEJveCwgZG8gbm90aGluZyBidXQgc3RpbGwgY29uc3VtZSBldmVudC5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpbnNlcnRPckRlbGV0ZS5jYWxsKHRoaXMsIGV2dCwgbmVhcmJ5KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHJldmVudFByb3BhZ2F0aW9uKGV2dCk7XHJcblxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIW5lYXJieSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHRvb2xEYXRhLmRhdGFbbmVhcmJ5LnRvb2xJbmRleF07XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgbG9ja2VkIGFuZCByZXR1cm5cclxuICAgIGNvbnN0IHN0cnVjdHVyZVNldCA9IGZyZWVoYW5kM0RTdG9yZS5nZXR0ZXJzLnN0cnVjdHVyZVNldChkYXRhLnNlcmllc0luc3RhbmNlVWlkLCBkYXRhLnN0cnVjdHVyZVNldFVpZCk7XHJcblxyXG4gICAgaWYgKHN0cnVjdHVyZVNldC5pc0xvY2tlZCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3VzdG9tIGNhbGxiYWNrIGZvciB3aGVuIGEgaGFuZGxlIGlzIHNlbGVjdGVkLlxyXG4gICAqXHJcbiAgICogQHBhcmFtICB7T2JqZWN0fSBldnRcclxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGhhbmRsZSBUaGUgc2VsZWN0ZWQgaGFuZGxlLlxyXG4gICAqL1xyXG4gIGhhbmRsZVNlbGVjdGVkQ2FsbGJhY2soZXZ0LCBkYXRhLCBoYW5kbGUsIGludGVyYWN0aW9uVHlwZSA9ICdtb3VzZScpIHtcclxuICAgIGNvbnN0IGZyZWVoYW5kM0RTdG9yZSA9IHRoaXMuX2ZyZWVoYW5kM0RTdG9yZTtcclxuICAgIGNvbnN0IGV2ZW50RGF0YSA9IGV2dC5kZXRhaWw7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZXZlbnREYXRhLmVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKGV2ZW50RGF0YS5ldmVudC5tZXRhS2V5KSB7XHJcbiAgICAgIHRoaXMuX3N3aXRjaFJPSUNvbnRvdXIoZXZ0LCBkYXRhKTtcclxuICAgICAgcHJldmVudFByb3BhZ2F0aW9uKGV2dCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhhbmRsZS5oYXNCb3VuZGluZ0JveCAmJiBmcmVlaGFuZDNEU3RvcmUuc3RhdGUuZGlzcGxheVN0YXRzKSB7XHJcbiAgICAgIC8vIFVzZSBkZWZhdWx0IG1vdmUgaGFuZGxlciAtIENhbiBtb3ZlIHRleHRib3ggb2YgbG9ja2VkIFJPSUNvbnRvdXJzLlxyXG4gICAgICBtb3ZlSGFuZGxlTmVhckltYWdlUG9pbnQoZXZ0LCB0aGlzLCBkYXRhLCBoYW5kbGUsIGludGVyYWN0aW9uVHlwZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBpZiBsb2NrZWQgYW5kIHJldHVyblxyXG4gICAgY29uc3Qgc3RydWN0dXJlU2V0ID0gZnJlZWhhbmQzRFN0b3JlLmdldHRlcnMuc3RydWN0dXJlU2V0KGRhdGEuc2VyaWVzSW5zdGFuY2VVaWQsIGRhdGEuc3RydWN0dXJlU2V0VWlkKTtcclxuXHJcbiAgICBpZiAoc3RydWN0dXJlU2V0LmlzTG9ja2VkKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb247XHJcblxyXG4gICAgY29uZmlnLmRyYWdPcmlnaW4gPSB7XHJcbiAgICAgIHg6IGhhbmRsZS54LFxyXG4gICAgICB5OiBoYW5kbGUueVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBIYXZlIHRvIGRvIHRoaXMgdG8gZ2V0IHRvb2wgaW5kZXguXHJcbiAgICBjb25zdCBuZWFyYnkgPSB0aGlzLl9wb2ludE5lYXJIYW5kbGVBbGxUb29scyhldmVudERhdGEpO1xyXG5cclxuICAgIGlmICghbmVhcmJ5KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVOZWFyYnkgPSBuZWFyYnkuaGFuZGxlTmVhcmJ5O1xyXG4gICAgY29uc3QgdG9vbEluZGV4ID0gbmVhcmJ5LnRvb2xJbmRleDtcclxuXHJcbiAgICB0aGlzLl9tb2RpZnlpbmcgPSB0cnVlO1xyXG4gICAgY29uZmlnLmN1cnJlbnRIYW5kbGUgPSBoYW5kbGVOZWFyYnk7XHJcbiAgICBjb25maWcuY3VycmVudFRvb2wgPSB0b29sSW5kZXg7XHJcblxyXG4gICAgdGhpcy5fYWN0aXZhdGVNb2RpZnkoZWxlbWVudCk7XHJcbiAgICBwcmV2ZW50UHJvcGFnYXRpb24oZXZ0KTtcclxuICB9XHJcblxyXG4gIF9zd2l0Y2hST0lDb250b3VyKGV2dCwgZGF0YSkge1xyXG4gICAgY29uc3QgZnJlZWhhbmQzRFN0b3JlID0gdGhpcy5fZnJlZWhhbmQzRFN0b3JlO1xyXG5cclxuICAgIGZyZWVoYW5kM0RTdG9yZS5zZXR0ZXJzLmFjdGl2ZVJPSUNvbnRvdXIoZGF0YS5zZXJpZXNJbnN0YW5jZVVpZCwgZGF0YS5zdHJ1Y3R1cmVTZXRVaWQsIGRhdGEuUk9JQ29udG91clVpZCk7XHJcblxyXG4gICAgdXBkYXRlSW1hZ2UoZXZ0LmRldGFpbC5lbGVtZW50KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICpcclxuICAgKiBAcGFyYW0geyp9IGV2dFxyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgcmVuZGVyVG9vbERhdGEoZXZ0KSB7XHJcbiAgICBjb25zdCBldmVudERhdGEgPSBldnQuZGV0YWlsO1xyXG4gICAgY29uc3QgZnJlZWhhbmQzRFN0b3JlID0gdGhpcy5fZnJlZWhhbmQzRFN0b3JlO1xyXG5cclxuICAgIC8vIElmIHdlIGhhdmUgbm8gdG9vbFN0YXRlIGZvciB0aGlzIGVsZW1lbnQsIHJldHVybiBpbW1lZGlhdGVseSBhcyB0aGVyZSBpcyBub3RoaW5nIHRvIGRvXHJcbiAgICBjb25zdCB0b29sU3RhdGUgPSBnZXRUb29sU3RhdGUoZXZ0LmN1cnJlbnRUYXJnZXQsIHRoaXMubmFtZSk7XHJcblxyXG4gICAgaWYgKCF0b29sU3RhdGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlID0gZXZlbnREYXRhLmltYWdlO1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGV2ZW50RGF0YS5lbGVtZW50O1xyXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uO1xyXG4gICAgY29uc3Qgc2VyaWVzTW9kdWxlID0gbWV0YURhdGEuZ2V0KCdnZW5lcmFsU2VyaWVzTW9kdWxlJywgaW1hZ2UuaW1hZ2VJZCk7XHJcblxyXG4gICAgbGV0IG1vZGFsaXR5O1xyXG5cclxuICAgIGlmIChzZXJpZXNNb2R1bGUpIHtcclxuICAgICAgbW9kYWxpdHkgPSBzZXJpZXNNb2R1bGUubW9kYWxpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2UgaGF2ZSB0b29sIGRhdGEgZm9yIHRoaXMgZWxlbWVudCAtIGl0ZXJhdGUgb3ZlciBlYWNoIG9uZSBhbmQgZHJhdyBpdFxyXG4gICAgY29uc3QgY29udGV4dCA9IGdldE5ld0NvbnRleHQoZXZlbnREYXRhLmNhbnZhc0NvbnRleHQuY2FudmFzKTtcclxuXHJcbiAgICBjb25zdCBsaW5lV2lkdGggPSB0b29sU3R5bGUuZ2V0VG9vbFdpZHRoKCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b29sU3RhdGUuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBkYXRhID0gdG9vbFN0YXRlLmRhdGFbaV07XHJcbiAgICAgIGNvbnN0IHN0cnVjdHVyZVNldCA9IGRhdGEucmVmZXJlbmNlZFN0cnVjdHVyZVNldDtcclxuICAgICAgY29uc3QgUk9JQ29udG91ciA9IGRhdGEucmVmZXJlbmNlZFJPSUNvbnRvdXI7XHJcblxyXG4gICAgICBpZiAoZGF0YS52aXNpYmxlID09PSBmYWxzZSB8fCAhc3RydWN0dXJlU2V0LnZpc2libGUpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgaXNST0lBY3RpdmUgPVxyXG4gICAgICAgIGZyZWVoYW5kM0RTdG9yZS5nZXR0ZXJzLlJPSUNvbnRvdXJJbmRleChkYXRhLnNlcmllc0luc3RhbmNlVWlkLCBkYXRhLnN0cnVjdHVyZVNldFVpZCwgZGF0YS5ST0lDb250b3VyVWlkKSA9PT1cclxuICAgICAgICBmcmVlaGFuZDNEU3RvcmUuZ2V0dGVycy5hY3RpdmVST0lDb250b3VySW5kZXgoZGF0YS5zZXJpZXNJbnN0YW5jZVVpZCk7XHJcblxyXG4gICAgICBkcmF3KGNvbnRleHQsIGNvbnRleHQgPT4ge1xyXG4gICAgICAgIGxldCBjb2xvciA9IHRvb2xDb2xvcnMuZ2V0Q29sb3JJZkFjdGl2ZShkYXRhKTtcclxuICAgICAgICBsZXQgZmlsbENvbG9yO1xyXG5cclxuICAgICAgICBjb25zdCBwb2ludHMgPSBkYXRhLmhhbmRsZXMucG9pbnRzO1xyXG5cclxuICAgICAgICBpZiAoZGF0YS5hY3RpdmUgJiYgIXN0cnVjdHVyZVNldC5pc0xvY2tlZCkge1xyXG4gICAgICAgICAgaWYgKGRhdGEuaGFuZGxlcy5pbnZhbGlkSGFuZGxlUGxhY2VtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gY29uZmlnLmludmFsaWRDb2xvcjtcclxuICAgICAgICAgICAgZmlsbENvbG9yID0gY29uZmlnLmludmFsaWRDb2xvcjtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gdG9vbENvbG9ycy5nZXRDb2xvcklmQWN0aXZlKGRhdGEpO1xyXG4gICAgICAgICAgICBmaWxsQ29sb3IgPSB0b29sQ29sb3JzLmdldEZpbGxDb2xvcigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb2xvciA9IFJPSUNvbnRvdXIuY29sb3I7XHJcbiAgICAgICAgICBmaWxsQ29sb3IgPSBST0lDb250b3VyLmNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzUk9JQWN0aXZlICYmIGRhdGEuaW50ZXJwb2xhdGVkKSB7XHJcbiAgICAgICAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gY29uZmlnLmludGVycG9sYXRlZEFscGhhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRhdGEuaGFuZGxlcy5wb2ludHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBvaW50cy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBjb25zdCBsaW5lcyA9IFsuLi5wb2ludHNbal0ubGluZXNdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGogPT09IHBvaW50cy5sZW5ndGggLSAxICYmICFkYXRhLnBvbHlCb3VuZGluZ0JveCkge1xyXG4gICAgICAgICAgICAgIC8vIElmIGl0J3Mgc3RpbGwgYmVpbmcgYWN0aXZlbHkgZHJhd24sIGtlZXAgdGhlIGxhc3QgbGluZSB0b1xyXG4gICAgICAgICAgICAgIC8vIFRoZSBtb3VzZSBsb2NhdGlvblxyXG4gICAgICAgICAgICAgIGxpbmVzLnB1c2goY29uZmlnLm1vdXNlTG9jYXRpb24uaGFuZGxlcy5zdGFydCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZHJhd0pvaW5lZExpbmVzKGNvbnRleHQsIGV2ZW50RGF0YS5lbGVtZW50LCBkYXRhLmhhbmRsZXMucG9pbnRzW2pdLCBsaW5lcywgeyBjb2xvciB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSAxLjA7XHJcblxyXG4gICAgICAgIC8vIERyYXcgaGFuZGxlc1xyXG5cclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgY29sb3IsXHJcbiAgICAgICAgICBmaWxsOiBmaWxsQ29sb3JcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoaXNST0lBY3RpdmUgJiYgZGF0YS5pbnRlcnBvbGF0ZWQpIHtcclxuICAgICAgICAgIC8vIFJlbmRlciBkb3R0ZWQgbGluZVxyXG4gICAgICAgICAgb3B0aW9ucy5oYW5kbGVSYWRpdXMgPSBjb25maWcuaW50ZXJwb2xhdGVkSGFuZGxlUmFkaXVzO1xyXG4gICAgICAgICAgZHJhd0hhbmRsZXMoY29udGV4dCwgZXZlbnREYXRhLCBwb2ludHMsIG9wdGlvbnMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY29uZmlnLmFsd2F5c1Nob3dIYW5kbGVzIHx8IChkYXRhLmFjdGl2ZSAmJiBkYXRhLnBvbHlCb3VuZGluZ0JveCkpIHtcclxuICAgICAgICAgIC8vIFJlbmRlciBhbGwgaGFuZGxlc1xyXG4gICAgICAgICAgb3B0aW9ucy5oYW5kbGVSYWRpdXMgPSBjb25maWcuYWN0aXZlSGFuZGxlUmFkaXVzO1xyXG4gICAgICAgICAgZHJhd0hhbmRsZXMoY29udGV4dCwgZXZlbnREYXRhLCBwb2ludHMsIG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRhdGEuY2FuQ29tcGxldGUpIHtcclxuICAgICAgICAgIC8vIERyYXcgbGFyZ2UgaGFuZGxlIGF0IHRoZSBvcmlnaW4gaWYgY2FuIGNvbXBsZXRlIGRyYXdpbmdcclxuICAgICAgICAgIG9wdGlvbnMuaGFuZGxlUmFkaXVzID0gY29uZmlnLmNvbXBsZXRlSGFuZGxlUmFkaXVzO1xyXG4gICAgICAgICAgZHJhd0hhbmRsZXMoY29udGV4dCwgZXZlbnREYXRhLCBbcG9pbnRzWzBdXSwgb3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGF0YS5hY3RpdmUgJiYgIWRhdGEucG9seUJvdW5kaW5nQm94KSB7XHJcbiAgICAgICAgICAvLyBEcmF3IGhhbmRsZSBhdCBvcmlnaW4gYW5kIGF0IG1vdXNlIGlmIGFjdGl2ZWx5IGRyYXdpbmdcclxuICAgICAgICAgIG9wdGlvbnMuaGFuZGxlUmFkaXVzID0gY29uZmlnLmFjdGl2ZUhhbmRsZVJhZGl1cztcclxuICAgICAgICAgIGRyYXdIYW5kbGVzKGNvbnRleHQsIGV2ZW50RGF0YSwgY29uZmlnLm1vdXNlTG9jYXRpb24uaGFuZGxlcywgb3B0aW9ucyk7XHJcbiAgICAgICAgICBkcmF3SGFuZGxlcyhjb250ZXh0LCBldmVudERhdGEsIFtwb2ludHNbMF1dLCBvcHRpb25zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERlZmluZSB2YXJpYWJsZXMgZm9yIHRoZSBhcmVhIGFuZCBtZWFuL3N0YW5kYXJkIGRldmlhdGlvblxyXG4gICAgICAgIGxldCBhcmVhLCBtZWFuU3RkRGV2LCBtZWFuU3RkRGV2U1VWO1xyXG5cclxuICAgICAgICAvLyBQZXJmb3JtIGEgY2hlY2sgdG8gc2VlIGlmIHRoZSB0b29sIGhhcyBiZWVuIGludmFsaWRhdGVkLiBUaGlzIGlzIHRvIHByZXZlbnRcclxuICAgICAgICAvLyBVbm5lY2Vzc2FyeSByZS1jYWxjdWxhdGlvbiBvZiB0aGUgYXJlYSwgbWVhbiwgYW5kIHN0YW5kYXJkIGRldmlhdGlvbiBpZiB0aGVcclxuICAgICAgICAvLyBJbWFnZSBpcyByZS1yZW5kZXJlZCBidXQgdGhlIHRvb2wgaGFzIG5vdCBtb3ZlZCAoZS5nLiBkdXJpbmcgYSB6b29tKVxyXG4gICAgICAgIGlmIChkYXRhLmludmFsaWRhdGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgLy8gSWYgdGhlIGRhdGEgaXMgbm90IGludmFsaWRhdGVkLCByZXRyaWV2ZSBpdCBmcm9tIHRoZSB0b29sU3RhdGVcclxuICAgICAgICAgIG1lYW5TdGREZXYgPSBkYXRhLm1lYW5TdGREZXY7XHJcbiAgICAgICAgICBtZWFuU3RkRGV2U1VWID0gZGF0YS5tZWFuU3RkRGV2U1VWO1xyXG4gICAgICAgICAgYXJlYSA9IGRhdGEuYXJlYTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFkYXRhLmFjdGl2ZSkge1xyXG4gICAgICAgICAgLy8gSWYgdGhlIGRhdGEgaGFzIGJlZW4gaW52YWxpZGF0ZWQsIGFuZCB0aGUgdG9vbCBpcyBub3QgY3VycmVudGx5IGFjdGl2ZSxcclxuICAgICAgICAgIC8vIFdlIG5lZWQgdG8gY2FsY3VsYXRlIGl0IGFnYWluLlxyXG5cclxuICAgICAgICAgIC8vIFJldHJpZXZlIHRoZSBib3VuZHMgb2YgdGhlIFJPSSBpbiBpbWFnZSBjb29yZGluYXRlc1xyXG4gICAgICAgICAgY29uc3QgYm91bmRzID0ge1xyXG4gICAgICAgICAgICBsZWZ0OiBwb2ludHNbMF0ueCxcclxuICAgICAgICAgICAgcmlnaHQ6IHBvaW50c1swXS54LFxyXG4gICAgICAgICAgICBib3R0b206IHBvaW50c1swXS55LFxyXG4gICAgICAgICAgICB0b3A6IHBvaW50c1swXS54XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGJvdW5kcy5sZWZ0ID0gTWF0aC5taW4oYm91bmRzLmxlZnQsIHBvaW50c1tpXS54KTtcclxuICAgICAgICAgICAgYm91bmRzLnJpZ2h0ID0gTWF0aC5tYXgoYm91bmRzLnJpZ2h0LCBwb2ludHNbaV0ueCk7XHJcbiAgICAgICAgICAgIGJvdW5kcy5ib3R0b20gPSBNYXRoLm1pbihib3VuZHMuYm90dG9tLCBwb2ludHNbaV0ueSk7XHJcbiAgICAgICAgICAgIGJvdW5kcy50b3AgPSBNYXRoLm1heChib3VuZHMudG9wLCBwb2ludHNbaV0ueSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY29uc3QgcG9seUJvdW5kaW5nQm94ID0ge1xyXG4gICAgICAgICAgICBsZWZ0OiBib3VuZHMubGVmdCxcclxuICAgICAgICAgICAgdG9wOiBib3VuZHMuYm90dG9tLFxyXG4gICAgICAgICAgICB3aWR0aDogTWF0aC5hYnMoYm91bmRzLnJpZ2h0IC0gYm91bmRzLmxlZnQpLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IE1hdGguYWJzKGJvdW5kcy50b3AgLSBib3VuZHMuYm90dG9tKVxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAvLyBTdG9yZSB0aGUgYm91bmRpbmcgYm94IGluZm9ybWF0aW9uIGZvciB0aGUgdGV4dCBib3hcclxuICAgICAgICAgIGRhdGEucG9seUJvdW5kaW5nQm94ID0gcG9seUJvdW5kaW5nQm94O1xyXG5cclxuICAgICAgICAgIC8vIEZpcnN0LCBtYWtlIHN1cmUgdGhpcyBpcyBub3QgYSBjb2xvciBpbWFnZSwgc2luY2Ugbm8gbWVhbiAvIHN0YW5kYXJkXHJcbiAgICAgICAgICAvLyBEZXZpYXRpb24gd2lsbCBiZSBjYWxjdWxhdGVkIGZvciBjb2xvciBpbWFnZXMuXHJcbiAgICAgICAgICBpZiAoIWltYWdlLmNvbG9yKSB7XHJcbiAgICAgICAgICAgIC8vIFJldHJpZXZlIHRoZSBhcnJheSBvZiBwaXhlbHMgdGhhdCB0aGUgUk9JIGJvdW5kcyBjb3ZlclxyXG4gICAgICAgICAgICBjb25zdCBwaXhlbHMgPSBnZXRQaXhlbHMoXHJcbiAgICAgICAgICAgICAgZWxlbWVudCxcclxuICAgICAgICAgICAgICBwb2x5Qm91bmRpbmdCb3gubGVmdCxcclxuICAgICAgICAgICAgICBwb2x5Qm91bmRpbmdCb3gudG9wLFxyXG4gICAgICAgICAgICAgIHBvbHlCb3VuZGluZ0JveC53aWR0aCxcclxuICAgICAgICAgICAgICBwb2x5Qm91bmRpbmdCb3guaGVpZ2h0XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIG1lYW4gJiBzdGFuZGFyZCBkZXZpYXRpb24gZnJvbSB0aGUgcGl4ZWxzIGFuZCB0aGUgb2JqZWN0IHNoYXBlXHJcbiAgICAgICAgICAgIG1lYW5TdGREZXYgPSBjYWxjdWxhdGVGcmVlaGFuZFN0YXRpc3RpY3MuY2FsbCh0aGlzLCBwaXhlbHMsIHBvbHlCb3VuZGluZ0JveCwgcG9pbnRzKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtb2RhbGl0eSA9PT0gJ1BUJykge1xyXG4gICAgICAgICAgICAgIC8vIElmIHRoZSBpbWFnZSBpcyBmcm9tIGEgUEVUIHNjYW4sIHVzZSB0aGUgRElDT00gdGFncyB0b1xyXG4gICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgU1VWIGZyb20gdGhlIG1lYW4gYW5kIHN0YW5kYXJkIGRldmlhdGlvbi5cclxuXHJcbiAgICAgICAgICAgICAgLy8gTm90ZSB0aGF0IGJlY2F1c2Ugd2UgYXJlIHVzaW5nIG1vZGFsaXR5IHBpeGVsIHZhbHVlcyBmcm9tIGdldFBpeGVscywgYW5kXHJcbiAgICAgICAgICAgICAgLy8gVGhlIGNhbGN1bGF0ZVNVViByb3V0aW5lIGFsc28gcmVzY2FsZXMgdG8gbW9kYWxpdHkgcGl4ZWwgdmFsdWVzLCB3ZSBhcmUgZmlyc3RcclxuICAgICAgICAgICAgICAvLyBSZXR1cm5pbmcgdGhlIHZhbHVlcyB0byBzdG9yZWRQaXhlbCB2YWx1ZXMgYmVmb3JlIGNhbGN1YXRpbmcgU1VWIHdpdGggdGhlbS5cclxuICAgICAgICAgICAgICAvLyBUT0RPOiBDbGVhbiB0aGlzIHVwPyBTaG91bGQgd2UgYWRkIGFuIG9wdGlvbiB0byBub3Qgc2NhbGUgaW4gY2FsY3VsYXRlU1VWP1xyXG4gICAgICAgICAgICAgIG1lYW5TdGREZXZTVVYgPSB7XHJcbiAgICAgICAgICAgICAgICBtZWFuOiBjYWxjdWxhdGVTVVYoaW1hZ2UsIChtZWFuU3RkRGV2Lm1lYW4gLSBpbWFnZS5pbnRlcmNlcHQpIC8gaW1hZ2Uuc2xvcGUpLFxyXG4gICAgICAgICAgICAgICAgc3RkRGV2OiBjYWxjdWxhdGVTVVYoaW1hZ2UsIChtZWFuU3RkRGV2LnN0ZERldiAtIGltYWdlLmludGVyY2VwdCkgLyBpbWFnZS5zbG9wZSlcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGUgbWVhbiBhbmQgc3RhbmRhcmQgZGV2aWF0aW9uIHZhbHVlcyBhcmUgc2FuZSwgc3RvcmUgdGhlbSBmb3IgbGF0ZXIgcmV0cmlldmFsXHJcbiAgICAgICAgICAgIGlmIChtZWFuU3RkRGV2ICYmICFpc05hTihtZWFuU3RkRGV2Lm1lYW4pKSB7XHJcbiAgICAgICAgICAgICAgZGF0YS5tZWFuU3RkRGV2ID0gbWVhblN0ZERldjtcclxuICAgICAgICAgICAgICBkYXRhLm1lYW5TdGREZXZTVVYgPSBtZWFuU3RkRGV2U1VWO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gUmV0cmlldmUgdGhlIHBpeGVsIHNwYWNpbmcgdmFsdWVzLCBhbmQgaWYgdGhleSBhcmUgbm90XHJcbiAgICAgICAgICAvLyBSZWFsIG5vbi16ZXJvIHZhbHVlcywgc2V0IHRoZW0gdG8gMVxyXG4gICAgICAgICAgY29uc3QgY29sdW1uUGl4ZWxTcGFjaW5nID0gaW1hZ2UuY29sdW1uUGl4ZWxTcGFjaW5nIHx8IDE7XHJcbiAgICAgICAgICBjb25zdCByb3dQaXhlbFNwYWNpbmcgPSBpbWFnZS5yb3dQaXhlbFNwYWNpbmcgfHwgMTtcclxuICAgICAgICAgIGNvbnN0IHNjYWxpbmcgPSBjb2x1bW5QaXhlbFNwYWNpbmcgKiByb3dQaXhlbFNwYWNpbmc7XHJcblxyXG4gICAgICAgICAgYXJlYSA9IGZyZWVoYW5kQXJlYShwb2ludHMsIHNjYWxpbmcpO1xyXG5cclxuICAgICAgICAgIC8vIElmIHRoZSBhcmVhIHZhbHVlIGlzIHNhbmUsIHN0b3JlIGl0IGZvciBsYXRlciByZXRyaWV2YWxcclxuICAgICAgICAgIGlmICghaXNOYU4oYXJlYSkpIHtcclxuICAgICAgICAgICAgZGF0YS5hcmVhID0gYXJlYTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBTZXQgdGhlIGludmFsaWRhdGVkIGZsYWcgdG8gZmFsc2Ugc28gdGhhdCB0aGlzIGRhdGEgd29uJ3QgYXV0b21hdGljYWxseSBiZSByZWNhbGN1bGF0ZWRcclxuICAgICAgICAgIGRhdGEuaW52YWxpZGF0ZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE9ubHkgcmVuZGVyIHRleHQgaWYgcG9seWdvbiBST0kgaGFzIGJlZW4gY29tcGxldGVkLCBhbmQgaXMgYWN0aXZlLFxyXG4gICAgICAgIC8vIE9yIGNvbmZpZyBpcyBzZXQgdG8gc2hvdyB0aGUgdGV4dEJveCBhbGwgdGhlIHRpbWVcclxuICAgICAgICBpZiAoZGF0YS5wb2x5Qm91bmRpbmdCb3ggJiYgKGZyZWVoYW5kM0RTdG9yZS5zdGF0ZS5kaXNwbGF5U3RhdHMgfHwgZGF0YS5hY3RpdmUpKSB7XHJcbiAgICAgICAgICAvLyBJZiB0aGUgdGV4dGJveCBoYXMgbm90IGJlZW4gbW92ZWQgYnkgdGhlIHVzZXIsIGl0IHNob3VsZCBiZSBkaXNwbGF5ZWQgb24gdGhlIHJpZ2h0LW1vc3RcclxuICAgICAgICAgIC8vIFNpZGUgb2YgdGhlIHRvb2wuXHJcblxyXG4gICAgICAgICAgaWYgKCFkYXRhLmhhbmRsZXMudGV4dEJveC5oYXNNb3ZlZCkge1xyXG4gICAgICAgICAgICAvLyBGaW5kIHRoZSByaWdodG1vc3Qgc2lkZSBvZiB0aGUgcG9seUJvdW5kaW5nQm94IGF0IGl0cyB2ZXJ0aWNhbCBjZW50ZXIsIGFuZCBwbGFjZSB0aGUgdGV4dGJveCBoZXJlXHJcbiAgICAgICAgICAgIC8vIE5vdGUgdGhhdCB0aGlzIGNhbGN1bGF0ZXMgaXQgaW4gaW1hZ2UgY29vcmRpbmF0ZXNcclxuICAgICAgICAgICAgZGF0YS5oYW5kbGVzLnRleHRCb3gueCA9IGRhdGEucG9seUJvdW5kaW5nQm94LmxlZnQgKyBkYXRhLnBvbHlCb3VuZGluZ0JveC53aWR0aDtcclxuICAgICAgICAgICAgZGF0YS5oYW5kbGVzLnRleHRCb3gueSA9IGRhdGEucG9seUJvdW5kaW5nQm94LnRvcCArIGRhdGEucG9seUJvdW5kaW5nQm94LmhlaWdodCAvIDI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY29uc3QgdGV4dCA9IHRleHRCb3hUZXh0LmNhbGwodGhpcywgZGF0YSk7XHJcblxyXG4gICAgICAgICAgZHJhd0xpbmtlZFRleHRCb3goXHJcbiAgICAgICAgICAgIGNvbnRleHQsXHJcbiAgICAgICAgICAgIGVsZW1lbnQsXHJcbiAgICAgICAgICAgIGRhdGEuaGFuZGxlcy50ZXh0Qm94LFxyXG4gICAgICAgICAgICB0ZXh0LFxyXG4gICAgICAgICAgICBwb2ludHMsXHJcbiAgICAgICAgICAgIHRleHRCb3hBbmNob3JQb2ludHMsXHJcbiAgICAgICAgICAgIGNvbG9yLFxyXG4gICAgICAgICAgICBsaW5lV2lkdGgsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0ZXh0Qm94VGV4dChkYXRhKSB7XHJcbiAgICAgIGNvbnN0IFJPSUNvbnRvdXIgPSBkYXRhLnJlZmVyZW5jZWRST0lDb250b3VyO1xyXG4gICAgICBjb25zdCBzdHJ1Y3R1cmVTZXQgPSBkYXRhLnJlZmVyZW5jZWRTdHJ1Y3R1cmVTZXQ7XHJcblxyXG4gICAgICBjb25zdCB7IG1lYW5TdGREZXYsIG1lYW5TdGREZXZTVVYsIGFyZWEgfSA9IGRhdGE7XHJcbiAgICAgIC8vIERlZmluZSBhbiBhcnJheSB0byBzdG9yZSB0aGUgcm93cyBvZiB0ZXh0IGZvciB0aGUgdGV4dGJveFxyXG4gICAgICBjb25zdCB0ZXh0TGluZXMgPSBbXTtcclxuXHJcbiAgICAgIHRleHRMaW5lcy5wdXNoKFJPSUNvbnRvdXIubmFtZSk7XHJcblxyXG4gICAgICBpZiAoc3RydWN0dXJlU2V0Lm5hbWUgPT09ICdERUZBVUxUJykge1xyXG4gICAgICAgIHRleHRMaW5lcy5wdXNoKCdXb3JraW5nIFJPSSBDb2xsZWN0aW9uJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGV4dExpbmVzLnB1c2goc3RydWN0dXJlU2V0Lm5hbWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBJZiB0aGUgbWVhbiBhbmQgc3RhbmRhcmQgZGV2aWF0aW9uIHZhbHVlcyBhcmUgcHJlc2VudCwgZGlzcGxheSB0aGVtXHJcbiAgICAgIGlmIChtZWFuU3RkRGV2ICYmIG1lYW5TdGREZXYubWVhbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgLy8gSWYgdGhlIG1vZGFsaXR5IGlzIENULCBhZGQgSFUgdG8gZGVub3RlIEhvdW5zZmllbGQgVW5pdHNcclxuICAgICAgICBsZXQgbW9TdWZmaXggPSAnJztcclxuXHJcbiAgICAgICAgaWYgKG1vZGFsaXR5ID09PSAnQ1QnKSB7XHJcbiAgICAgICAgICBtb1N1ZmZpeCA9ICcgSFUnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgbGluZSBvZiB0ZXh0IHRvIGRpc3BsYXkgdGhlIG1lYW4gYW5kIGFueSB1bml0cyB0aGF0IHdlcmUgc3BlY2lmaWVkIChpLmUuIEhVKVxyXG4gICAgICAgIGxldCBtZWFuVGV4dCA9IGBNZWFuOiAke251bWJlcnNXaXRoQ29tbWFzKG1lYW5TdGREZXYubWVhbi50b0ZpeGVkKDIpKX0ke21vU3VmZml4fWA7XHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgbGluZSBvZiB0ZXh0IHRvIGRpc3BsYXkgdGhlIHN0YW5kYXJkIGRldmlhdGlvbiBhbmQgYW55IHVuaXRzIHRoYXQgd2VyZSBzcGVjaWZpZWQgKGkuZS4gSFUpXHJcbiAgICAgICAgbGV0IHN0ZERldlRleHQgPSBgU3RkRGV2OiAke251bWJlcnNXaXRoQ29tbWFzKG1lYW5TdGREZXYuc3RkRGV2LnRvRml4ZWQoMikpfSR7bW9TdWZmaXh9YDtcclxuXHJcbiAgICAgICAgLy8gSWYgdGhpcyBpbWFnZSBoYXMgU1VWIHZhbHVlcyB0byBkaXNwbGF5LCBjb25jYXRlbmF0ZSB0aGVtIHRvIHRoZSB0ZXh0IGxpbmVcclxuICAgICAgICBpZiAobWVhblN0ZERldlNVViAmJiBtZWFuU3RkRGV2U1VWLm1lYW4gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgY29uc3QgU1VWdGV4dCA9ICcgU1VWOiAnO1xyXG5cclxuICAgICAgICAgIG1lYW5UZXh0ICs9IFNVVnRleHQgKyBudW1iZXJzV2l0aENvbW1hcyhtZWFuU3RkRGV2U1VWLm1lYW4udG9GaXhlZCgyKSk7XHJcbiAgICAgICAgICBzdGREZXZUZXh0ICs9IFNVVnRleHQgKyBudW1iZXJzV2l0aENvbW1hcyhtZWFuU3RkRGV2U1VWLnN0ZERldi50b0ZpeGVkKDIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFkZCB0aGVzZSB0ZXh0IGxpbmVzIHRvIHRoZSBhcnJheSB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIHRleHRib3hcclxuICAgICAgICB0ZXh0TGluZXMucHVzaChtZWFuVGV4dCk7XHJcbiAgICAgICAgdGV4dExpbmVzLnB1c2goc3RkRGV2VGV4dCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIElmIHRoZSBhcmVhIGlzIGEgc2FuZSB2YWx1ZSwgZGlzcGxheSBpdFxyXG4gICAgICBpZiAoYXJlYSkge1xyXG4gICAgICAgIC8vIERldGVybWluZSB0aGUgYXJlYSBzdWZmaXggYmFzZWQgb24gdGhlIHBpeGVsIHNwYWNpbmcgaW4gdGhlIGltYWdlLlxyXG4gICAgICAgIC8vIElmIHBpeGVsIHNwYWNpbmcgaXMgcHJlc2VudCwgdXNlIG1pbGxpbWV0ZXJzLiBPdGhlcndpc2UsIHVzZSBwaXhlbHMuXHJcbiAgICAgICAgLy8gVGhpcyB1c2VzIENoYXIgY29kZSAxNzggZm9yIGEgc3VwZXJzY3JpcHQgMlxyXG4gICAgICAgIGxldCBzdWZmaXggPSBgIG1tJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDE3OCl9YDtcclxuXHJcbiAgICAgICAgaWYgKCFpbWFnZS5yb3dQaXhlbFNwYWNpbmcgfHwgIWltYWdlLmNvbHVtblBpeGVsU3BhY2luZykge1xyXG4gICAgICAgICAgc3VmZml4ID0gYCBwaXhlbHMke1N0cmluZy5mcm9tQ2hhckNvZGUoMTc4KX1gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgbGluZSBvZiB0ZXh0IHRvIGRpc3BsYXkgdGhlIGFyZWEgYW5kIGl0cyB1bml0c1xyXG4gICAgICAgIGNvbnN0IGFyZWFUZXh0ID0gYEFyZWE6ICR7bnVtYmVyc1dpdGhDb21tYXMoYXJlYS50b0ZpeGVkKDIpKX0ke3N1ZmZpeH1gO1xyXG5cclxuICAgICAgICAvLyBBZGQgdGhpcyB0ZXh0IGxpbmUgdG8gdGhlIGFycmF5IHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgdGV4dGJveFxyXG4gICAgICAgIHRleHRMaW5lcy5wdXNoKGFyZWFUZXh0KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGV4dExpbmVzLnB1c2goYCR7Uk9JQ29udG91ci5wb2x5Z29uQ291bnR9IGNvbnRvdXJzYCk7XHJcblxyXG4gICAgICByZXR1cm4gdGV4dExpbmVzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRleHRCb3hBbmNob3JQb2ludHMocG9pbnRzKSB7XHJcbiAgICAgIHJldHVybiBwb2ludHM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbmRzIHRoZSBhY3RpdmUgZHJhd2luZyBsb29wIGFuZCBjb21wbGV0ZXMgdGhlIHBvbHlnb24uXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgb24gd2hpY2ggdGhlIHJvaSBpcyBiZWluZyBkcmF3bi5cclxuICAgKiBAcGFyYW0ge09iamVjdH0gaGFuZGxlTmVhcmJ5IC0gdGhlIGhhbmRsZSBuZWFyZXN0IHRvIHRoZSBtb3VzZSBjdXJzb3IuXHJcbiAgICovXHJcbiAgX2VuZERyYXdpbmcoZWxlbWVudCwgaGFuZGxlTmVhcmJ5KSB7XHJcbiAgICBjb25zdCB0b29sU3RhdGUgPSBnZXRUb29sU3RhdGUoZWxlbWVudCwgdGhpcy5uYW1lKTtcclxuXHJcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb247XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHRvb2xTdGF0ZS5kYXRhW2NvbmZpZy5jdXJyZW50VG9vbF07XHJcblxyXG4gICAgY29uc3QgcG9pbnRzID0gZGF0YS5oYW5kbGVzLnBvaW50cztcclxuXHJcbiAgICBkYXRhLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgZGF0YS5oaWdobGlnaHQgPSBmYWxzZTtcclxuICAgIGRhdGEuaGFuZGxlcy5pbnZhbGlkSGFuZGxlUGxhY2VtZW50ID0gZmFsc2U7XHJcblxyXG4gICAgLy8gQ29ubmVjdCB0aGUgZW5kIGhhbmRsZSB0byB0aGUgb3JpZ2luIGhhbmRsZVxyXG4gICAgaWYgKGhhbmRsZU5lYXJieSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHBvaW50c1tjb25maWcuY3VycmVudEhhbmRsZSAtIDFdLmxpbmVzLnB1c2gocG9pbnRzWzBdKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fbW9kaWZ5aW5nKSB7XHJcbiAgICAgIHRoaXMuX21vZGlmeWluZyA9IGZhbHNlO1xyXG4gICAgICBkYXRhLmludmFsaWRhdGVkID0gdHJ1ZTtcclxuICAgICAgZGF0YS5pbnRlcnBvbGF0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXNldCB0aGUgY3VycmVudCBoYW5kbGVcclxuICAgIGNvbmZpZy5jdXJyZW50SGFuZGxlID0gMDtcclxuICAgIGNvbmZpZy5jdXJyZW50VG9vbCA9IC0xO1xyXG4gICAgZGF0YS5jYW5Db21wbGV0ZSA9IGZhbHNlO1xyXG5cclxuICAgIGlmICh0aGlzLl9kcmF3aW5nKSB7XHJcbiAgICAgIHRoaXMuX2RyYXdpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5fZGVhY3RpdmF0ZURyYXcoZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1vZHVsZXMuZnJlZWhhbmQzRC5zdGF0ZS5pbnRlcnBvbGF0ZSkge1xyXG4gICAgICBpbnRlcnBvbGF0ZShkYXRhLCBlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVJbWFnZShlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEN1c3RvbSBjYWxsYmFjayBmb3Igd2hlbiB0b29sRGF0YSBpcyBkZWxldGVkLlxyXG4gICAqXHJcbiAgICogQHBhcmFtICB7T2JqZWN0fSBldnRcclxuICAgKi9cclxuICBfb25NZWFzdXJlbWVudFJlbW92ZWQoZXZ0KSB7XHJcbiAgICBjb25zdCBldmVudERhdGEgPSBldnQuZGV0YWlsO1xyXG5cclxuICAgIGlmIChldmVudERhdGEudG9vbFR5cGUgIT09IHRoaXMubmFtZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWVhc3VyZW1lbnREYXRhID0gZXZlbnREYXRhLm1lYXN1cmVtZW50RGF0YTtcclxuXHJcbiAgICB0aGlzLl9mcmVlaGFuZDNEU3RvcmUuc2V0dGVycy5kZWNyZW1lbnRQb2x5Z29uQ291bnQoXHJcbiAgICAgIG1lYXN1cmVtZW50RGF0YS5zZXJpZXNJbnN0YW5jZVVpZCxcclxuICAgICAgbWVhc3VyZW1lbnREYXRhLnN0cnVjdHVyZVNldFVpZCxcclxuICAgICAgbWVhc3VyZW1lbnREYXRhLlJPSUNvbnRvdXJVaWRcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwYXNzaXZlQ2FsbGJhY2soZWxlbWVudCkge1xyXG4gICAgdGhpcy5fY2xvc2VUb29sSWZEcmF3aW5nKGVsZW1lbnQpO1xyXG4gICAgdGhpcy5fYWRkTWVhc3VyZW1lbnRSZW1vdmVkTGlzdGVuZXIoZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBlbmFibGVkQ2FsbGJhY2soZWxlbWVudCkge1xyXG4gICAgdGhpcy5fY2xvc2VUb29sSWZEcmF3aW5nKGVsZW1lbnQpO1xyXG4gICAgdGhpcy5fYWRkTWVhc3VyZW1lbnRSZW1vdmVkTGlzdGVuZXIoZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBhY3RpdmVDYWxsYmFjayhlbGVtZW50KSB7XHJcbiAgICB0aGlzLl9hZGRNZWFzdXJlbWVudFJlbW92ZWRMaXN0ZW5lcihlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGRpc2FibGVkQ2FsbGJhY2soZWxlbWVudCkge1xyXG4gICAgdGhpcy5fY2xvc2VUb29sSWZEcmF3aW5nKGVsZW1lbnQpO1xyXG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKEVWRU5UUy5NRUFTVVJFTUVOVF9SRU1PVkVELCB0aGlzLl9vbk1lYXN1cmVtZW50UmVtb3ZlZCk7XHJcbiAgfVxyXG5cclxuICBfYWRkTWVhc3VyZW1lbnRSZW1vdmVkTGlzdGVuZXIoZWxlbWVudCkge1xyXG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKEVWRU5UUy5NRUFTVVJFTUVOVF9SRU1PVkVELCB0aGlzLl9vbk1lYXN1cmVtZW50UmVtb3ZlZCk7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoRVZFTlRTLk1FQVNVUkVNRU5UX1JFTU9WRUQsIHRoaXMuX29uTWVhc3VyZW1lbnRSZW1vdmVkKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlZmF1bHRGcmVlaGFuZENvbmZpZ3VyYXRpb24oKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG1vdXNlTG9jYXRpb246IHtcclxuICAgICAgaGFuZGxlczoge1xyXG4gICAgICAgIHN0YXJ0OiB7XHJcbiAgICAgICAgICBoaWdobGlnaHQ6IHRydWUsXHJcbiAgICAgICAgICBhY3RpdmU6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzcGFjaW5nOiAxLFxyXG4gICAgaW50ZXJwb2xhdGVkSGFuZGxlUmFkaXVzOiAwLjUsXHJcbiAgICBpbnRlcnBvbGF0ZWRBbHBoYTogMC41LFxyXG4gICAgYWN0aXZlSGFuZGxlUmFkaXVzOiAzLFxyXG4gICAgY29tcGxldGVIYW5kbGVSYWRpdXM6IDYsXHJcbiAgICBjb21wbGV0ZUhhbmRsZVJhZGl1c1RvdWNoOiAyOCxcclxuICAgIGFsd2F5c1Nob3dIYW5kbGVzOiBmYWxzZSxcclxuICAgIGludmFsaWRDb2xvcjogJ2NyaW1zb24nLFxyXG4gICAgY3VycmVudEhhbmRsZTogMCxcclxuICAgIGN1cnJlbnRUb29sOiAtMVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXZlbnRQcm9wYWdhdGlvbihldnQpIHtcclxuICBldnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90dXp6L24tZGltZW5zaW9uYWwtZmxvb2QtZmlsbFxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gIGxldCBnZXR0ZXIsIHNlZWQsIG9uRmxvb2QsIG9uQm91bmRhcnksIGVxdWFscywgZGlhZ29uYWxzLCBzdGFydE5vZGUsIHBlcm11dGF0aW9ucywgc3RhY2ssIGZsb29kZWQsIHZpc2l0cywgYm91bmRzO1xyXG5cclxuICBsZXQgaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGdldHRlciA9IG9wdGlvbnMuZ2V0dGVyO1xyXG4gICAgc2VlZCA9IG9wdGlvbnMuc2VlZDtcclxuICAgIG9uRmxvb2QgPSBvcHRpb25zLm9uRmxvb2QgfHwgbm9vcDtcclxuICAgIG9uQm91bmRhcnkgPSBvcHRpb25zLm9uQm91bmRhcnkgfHwgbm9vcDtcclxuICAgIGVxdWFscyA9IG9wdGlvbnMuZXF1YWxzIHx8IGRlZmF1bHRFcXVhbHM7XHJcbiAgICBkaWFnb25hbHMgPSBvcHRpb25zLmRpYWdvbmFscyB8fCBmYWxzZTtcclxuICAgIHN0YXJ0Tm9kZSA9IGdldChzZWVkKTtcclxuICAgIHBlcm11dGF0aW9ucyA9IHBydW5lZFBlcm11dGF0aW9ucygpO1xyXG4gICAgc3RhY2sgPSBbXTtcclxuICAgIGZsb29kZWQgPSBbXTtcclxuICAgIHZpc2l0cyA9IHt9O1xyXG4gICAgYm91bmRzID0ge307XHJcbiAgfTtcclxuXHJcbiAgbGV0IG1haW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBzdGFjay5wdXNoKHsgY3VycmVudEFyZ3M6IHNlZWQgfSk7XHJcblxyXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+IDApIHtcclxuICAgICAgZmxvb2Qoc3RhY2sucG9wKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGZsb29kZWQ6IGZsb29kZWQsXHJcbiAgICAgIGJvdW5kYXJpZXM6IGJvdW5kYXJpZXMoKVxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBsZXQgZmxvb2QgPSBmdW5jdGlvbiAoam9iKSB7XHJcbiAgICBsZXQgZ2V0QXJncyA9IGpvYi5jdXJyZW50QXJncztcclxuICAgIGxldCBwcmVsZXRncyA9IGpvYi5wcmV2aW91c0FyZ3M7XHJcblxyXG4gICAgaWYgKHZpc2l0ZWQoZ2V0QXJncykpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbWFya0FzVmlzaXRlZChnZXRBcmdzKTtcclxuXHJcbiAgICBpZiAobWVtYmVyKGdldEFyZ3MpKSB7XHJcbiAgICAgIG1hcmtBc0Zsb29kZWQoZ2V0QXJncyk7XHJcbiAgICAgIHB1c2hBZGphY2VudChnZXRBcmdzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1hcmtBc0JvdW5kYXJ5KHByZWxldGdzKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBsZXQgdmlzaXRlZCA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgIHJldHVybiB2aXNpdHNba2V5XSA9PT0gdHJ1ZTtcclxuICB9O1xyXG5cclxuICBsZXQgbWFya0FzVmlzaXRlZCA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgIHZpc2l0c1trZXldID0gdHJ1ZTtcclxuICB9O1xyXG5cclxuICBsZXQgbWVtYmVyID0gZnVuY3Rpb24gKGdldEFyZ3MpIHtcclxuICAgIGxldCBub2RlID0gc2FmZWx5KGdldCwgW2dldEFyZ3NdKTtcclxuXHJcbiAgICByZXR1cm4gc2FmZWx5KGVxdWFscywgW25vZGUsIHN0YXJ0Tm9kZV0pO1xyXG4gIH07XHJcblxyXG4gIGxldCBtYXJrQXNGbG9vZGVkID0gZnVuY3Rpb24gKGdldEFyZ3MpIHtcclxuICAgIGZsb29kZWQucHVzaChnZXRBcmdzKTtcclxuICAgIG9uRmxvb2QuYXBwbHkodW5kZWZpbmVkLCBnZXRBcmdzKTtcclxuICB9O1xyXG5cclxuICBsZXQgbWFya0FzQm91bmRhcnkgPSBmdW5jdGlvbiAocHJlbGV0Z3MpIHtcclxuICAgIGJvdW5kc1twcmVsZXRnc10gPSBwcmVsZXRncztcclxuICAgIG9uQm91bmRhcnkuYXBwbHkodW5kZWZpbmVkLCBwcmVsZXRncyk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IHB1c2hBZGphY2VudCA9IGZ1bmN0aW9uIChnZXRBcmdzKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBlcm11dGF0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBsZXQgcGVybSA9IHBlcm11dGF0aW9uc1tpXTtcclxuICAgICAgbGV0IG5leHRBcmdzID0gZ2V0QXJncy5zbGljZSgwKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2V0QXJncy5sZW5ndGg7IGogKz0gMSkge1xyXG4gICAgICAgIG5leHRBcmdzW2pdICs9IHBlcm1bal07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN0YWNrLnB1c2goe1xyXG4gICAgICAgIGN1cnJlbnRBcmdzOiBuZXh0QXJncyxcclxuICAgICAgICBwcmV2aW91c0FyZ3M6IGdldEFyZ3NcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbGV0IGdldCA9IGZ1bmN0aW9uIChnZXRBcmdzKSB7XHJcbiAgICByZXR1cm4gZ2V0dGVyLmFwcGx5KHVuZGVmaW5lZCwgZ2V0QXJncyk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IHNhZmVseSA9IGZ1bmN0aW9uIChmLCBhcmdzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gZi5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XHJcbiAgfTtcclxuXHJcbiAgbGV0IG5vb3AgPSBmdW5jdGlvbiAoKSB7fTtcclxuXHJcbiAgbGV0IGRlZmF1bHRFcXVhbHMgPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgcmV0dXJuIGEgPT09IGI7XHJcbiAgfTtcclxuXHJcbiAgbGV0IHBydW5lZFBlcm11dGF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBwZXJtdXRhdGlvbnMgPSBwZXJtdXRlKHNlZWQubGVuZ3RoKTtcclxuXHJcbiAgICByZXR1cm4gcGVybXV0YXRpb25zLmZpbHRlcihmdW5jdGlvbiAocGVybSkge1xyXG4gICAgICBsZXQgY291bnQgPSBjb3VudE5vblplcm9lcyhwZXJtKTtcclxuXHJcbiAgICAgIHJldHVybiBjb3VudCAhPT0gMCAmJiAoY291bnQgPT09IDEgfHwgZGlhZ29uYWxzKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGxldCBwZXJtdXRlID0gZnVuY3Rpb24gKGxlbmd0aCkge1xyXG4gICAgbGV0IHBlcm1zID0gW107XHJcblxyXG4gICAgbGV0IHBlcm11dGF0aW9uID0gZnVuY3Rpb24gKHN0cmluZykge1xyXG4gICAgICByZXR1cm4gc3RyaW5nLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQoYywgMTApIC0gMTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5wb3coMywgbGVuZ3RoKTsgaSArPSAxKSB7XHJcbiAgICAgIGxldCBzdHJpbmcgPSBscGFkKGkudG9TdHJpbmcoMyksICcwJywgbGVuZ3RoKTtcclxuXHJcbiAgICAgIHBlcm1zLnB1c2gocGVybXV0YXRpb24oc3RyaW5nKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBlcm1zO1xyXG4gIH07XHJcblxyXG4gIGxldCBscGFkID0gZnVuY3Rpb24gKHN0cmluZywgY2hhcmFjdGVyLCBsZW5ndGgpIHtcclxuICAgIGxldCBhcnJheSA9IG5ldyBBcnJheShsZW5ndGggKyAxKTtcclxuICAgIGxldCBwYWQgPSBhcnJheS5qb2luKGNoYXJhY3Rlcik7XHJcblxyXG4gICAgcmV0dXJuIChwYWQgKyBzdHJpbmcpLnNsaWNlKC1sZW5ndGgpO1xyXG4gIH07XHJcblxyXG4gIGxldCBjb3VudE5vblplcm9lcyA9IGZ1bmN0aW9uIChhcnJheSkge1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGlmIChhcnJheVtpXSAhPT0gMCkge1xyXG4gICAgICAgIGNvdW50ICs9IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY291bnQ7XHJcbiAgfTtcclxuXHJcbiAgbGV0IGJvdW5kYXJpZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgYXJyYXkgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBrZXkgaW4gYm91bmRzKSB7XHJcbiAgICAgIGlmIChib3VuZHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIGFycmF5LnVuc2hpZnQoYm91bmRzW2tleV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH07XHJcblxyXG4gIGluaXRpYWxpemUoKTtcclxuICByZXR1cm4gbWFpbigpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBzdG9yZSB9IGZyb20gJ2Nvcm5lcnN0b25lLXRvb2xzJztcclxuXHJcbmNvbnN0IG1vZHVsZXMgPSBzdG9yZS5tb2R1bGVzO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvbHlnb24ge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcG9pbnRzLFxyXG4gICAgc29wSW5zdGFuY2VVaWQsXHJcbiAgICBzZXJpZXNJbnN0YW5jZVVpZCxcclxuICAgIHN0cnVjdHVyZVNldFVpZCxcclxuICAgIFJPSUNvbnRvdXJVaWQsXHJcbiAgICBwb2x5Z29uVWlkLFxyXG4gICAgZnJhbWVOdW1iZXIsXHJcbiAgICBpbnRlcnBvbGF0ZWRcclxuICApIHtcclxuICAgIHRoaXMuX3BvbHlQb2ludHMgPSB0aGlzLl9kZWVwQ29weVBvaW50cyhwb2ludHMpO1xyXG4gICAgdGhpcy5fc29wSW5zdGFuY2VVaWQgPSBzb3BJbnN0YW5jZVVpZDtcclxuICAgIHRoaXMuX3Nlcmllc0luc3RhbmNlVWlkID0gc2VyaWVzSW5zdGFuY2VVaWQ7XHJcbiAgICB0aGlzLl9zdHJ1Y3R1cmVTZXRVaWQgPSBzdHJ1Y3R1cmVTZXRVaWQ7XHJcbiAgICB0aGlzLl9ST0lDb250b3VyVWlkID0gUk9JQ29udG91clVpZDtcclxuICAgIHRoaXMuX3BvbHlnb25VaWQgPSBwb2x5Z29uVWlkO1xyXG4gICAgdGhpcy5fZnJhbWVOdW1iZXIgPSBmcmFtZU51bWJlcjtcclxuICAgIHRoaXMuX2ludGVycG9sYXRlZCA9IGludGVycG9sYXRlZDtcclxuICB9XHJcblxyXG4gIF9kZWVwQ29weVBvaW50cyhwb2ludHMpIHtcclxuICAgIC8vIENyZWF0ZXMgYSBkZWVwIGNvcHkgb2YgdGhlIHBvaW50cyBhcnJheVxyXG4gICAgY29uc3QgcG9seVBvaW50cyA9IFtdO1xyXG4gICAgY29uc3QgaXNaID0gcG9pbnRzWzBdLnogIT09IHVuZGVmaW5lZDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBwb2x5UG9pbnRzLnB1c2goe1xyXG4gICAgICAgIHg6IHBvaW50c1tpXS54LFxyXG4gICAgICAgIHk6IHBvaW50c1tpXS55XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKGlzWikge1xyXG4gICAgICAgIHBvbHlQb2ludHNbaV0ueiA9IHBvaW50c1tpXS56O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBvbHlQb2ludHM7XHJcbiAgfVxyXG5cclxuICBnZXRGcmVlaGFuZFRvb2xEYXRhKGltcG9ydFR5cGUpIHtcclxuICAgIGNvbnN0IHNlcmllc0luc3RhbmNlVWlkID0gdGhpcy5fc2VyaWVzSW5zdGFuY2VVaWQ7XHJcbiAgICBjb25zdCBzdHJ1Y3R1cmVTZXRVaWQgPSB0aGlzLl9zdHJ1Y3R1cmVTZXRVaWQ7XHJcbiAgICBjb25zdCBST0lDb250b3VyVWlkID0gdGhpcy5fUk9JQ29udG91clVpZDtcclxuXHJcbiAgICBjb25zdCBmcmVlaGFuZDNEU3RvcmUgPSBtb2R1bGVzLmZyZWVoYW5kM0Q7XHJcblxyXG4gICAgY29uc3QgcmVmZXJlbmNlZFJPSUNvbnRvdXIgPSBmcmVlaGFuZDNEU3RvcmUuZ2V0dGVycy5ST0lDb250b3VyKHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQsIFJPSUNvbnRvdXJVaWQpO1xyXG4gICAgY29uc3QgcmVmZXJlbmNlZFN0cnVjdHVyZVNldCA9IGZyZWVoYW5kM0RTdG9yZS5nZXR0ZXJzLnN0cnVjdHVyZVNldChzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICB1aWQ6IHRoaXMuX3BvbHlnb25VaWQsXHJcbiAgICAgIHNlcmllc0luc3RhbmNlVWlkLFxyXG4gICAgICBzdHJ1Y3R1cmVTZXRVaWQsXHJcbiAgICAgIFJPSUNvbnRvdXJVaWQsXHJcbiAgICAgIHJlZmVyZW5jZWRST0lDb250b3VyLFxyXG4gICAgICByZWZlcmVuY2VkU3RydWN0dXJlU2V0LFxyXG4gICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgICBpbnZhbGlkYXRlZDogdHJ1ZSxcclxuICAgICAgaGFuZGxlczoge1xyXG4gICAgICAgIHBvaW50czogW11cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5fc29wSW5zdGFuY2VVaWQpIHtcclxuICAgICAgZGF0YS5zb3BJbnN0YW5jZVVJRCA9IHRoaXMuX3NvcEluc3RhbmNlVWlkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9pbnRlcnBvbGF0ZWQpIHtcclxuICAgICAgZGF0YS5pbnRlcnBvbGF0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2dlbmVyYXRlUG9pbnRzKGRhdGEuaGFuZGxlcy5wb2ludHMpO1xyXG5cclxuICAgIGRhdGEuaGFuZGxlcy50ZXh0Qm94ID0ge1xyXG4gICAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgICBoYXNNb3ZlZDogZmFsc2UsXHJcbiAgICAgIG1vdmVzSW5kZXBlbmRlbnRseTogZmFsc2UsXHJcbiAgICAgIGRyYXduSW5kZXBlbmRlbnRseTogdHJ1ZSxcclxuICAgICAgYWxsb3dlZE91dHNpZGVJbWFnZTogdHJ1ZSxcclxuICAgICAgaGFzQm91bmRpbmdCb3g6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgZGF0YS5wb2x5Qm91bmRpbmdCb3ggPSB7fTtcclxuXHJcbiAgICBkYXRhLnRvQmVTY2FsZWQgPSBpbXBvcnRUeXBlO1xyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgX2dlbmVyYXRlUG9pbnRzKHBvaW50cykge1xyXG4gICAgLy8gQ29uc3RydWN0IGRhdGEuaGFuZGxlcy5wb2ludHMgYXJyYXlcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fcG9seVBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBwb2ludHMucHVzaCh0aGlzLl9kZWVwQ29weU9uZVBvaW50KGkpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZW5lcmF0ZSBsaW5lcyB0byBiZSBkcmF3blxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGkgPT09IHBvaW50cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgcG9pbnRzW2ldLmxpbmVzLnB1c2gocG9pbnRzWzBdKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwb2ludHNbaV0ubGluZXMucHVzaChwb2ludHNbaSArIDFdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2RlZXBDb3B5T25lUG9pbnQoaSkge1xyXG4gICAgbGV0IHBvaW50ID0ge1xyXG4gICAgICB4OiB0aGlzLl9wb2x5UG9pbnRzW2ldLngsXHJcbiAgICAgIHk6IHRoaXMuX3BvbHlQb2ludHNbaV0ueSxcclxuICAgICAgbGluZXM6IFtdXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLl9wb2x5UG9pbnRzW2ldLnogIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBwb2ludC56ID0gdGhpcy5fcG9seVBvaW50c1tpXS56O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwb2ludDtcclxuICB9XHJcblxyXG4gIGdldCBwb2x5UG9pbnRzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BvbHlQb2ludHM7XHJcbiAgfVxyXG4gIGdldCBzb3BJbnN0YW5jZVVpZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zb3BJbnN0YW5jZVVpZDtcclxuICB9XHJcblxyXG4gIGdldCB1aWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcG9seWdvblVpZDtcclxuICB9XHJcblxyXG4gIGdldCBmcmFtZU51bWJlcigpIHtcclxuICAgIHJldHVybiB0aGlzLl9mcmFtZU51bWJlcjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2xvYmFsSW1hZ2VJZFNwZWNpZmljVG9vbFN0YXRlTWFuYWdlciwgZ2V0VG9vbFN0YXRlIH0gZnJvbSAnY29ybmVyc3RvbmUtdG9vbHMnO1xyXG5cclxuY29uc3QgZ2xvYmFsVG9vbFN0YXRlTWFuYWdlciA9IGdsb2JhbEltYWdlSWRTcGVjaWZpY1Rvb2xTdGF0ZU1hbmFnZXI7XHJcblxyXG4vKipcclxuICogZ2VuZXJhdGVJbnRlcnBvbGF0aW9uTGlzdCAtIEdlbmVyYXRlIHRoZSBsaXN0IG9mIGNvbnRvdXJzIHRvIGludGVycG9sYXRlLFxyXG4gKiBpbmNsdWRpbmcgd2hldGhlciB0aGV5IGFyZSBuZXcgY29udG91cnMsIG9yIGludGVycG9sYXRlZCBjb250b3VycyB0aGF0IG5lZWRcclxuICogdG8gYmUgdXBkYXRlZC5cclxuICpcclxuICogQHBhcmFtICB7b2JqZWN0fSB0b29sRGF0YSBUaGUgdG9vbCBkYXRhIG9mIHRoZSBmcmVlaGFuZDNEIGNvbnRvdXIuXHJcbiAqIEByZXR1cm4ge29iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIFJPSUNvbnRvdXJEYXRhIGFuZCB0aGVcclxuICogaW50ZXJwb2xhdGlvbkxpc3QuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodG9vbERhdGEsIGVsZW1lbnQpIHtcclxuICBjb25zdCBST0lDb250b3VyVWlkID0gdG9vbERhdGEuUk9JQ29udG91clVpZDtcclxuICBjb25zdCBpbWFnZUlkcyA9IF9nZXRJbWFnZUlkc09mQWN0aXZlU2VyaWVzKGVsZW1lbnQpO1xyXG4gIGNvbnN0IFJPSUNvbnRvdXJEYXRhID0gX2dldFJPSUNvbnRvdXJEYXRhKGltYWdlSWRzLCBST0lDb250b3VyVWlkKTtcclxuICBjb25zdCBleHRlbnQgPSBfZ2V0RXh0ZW50T2ZSZWdpb24oUk9JQ29udG91ckRhdGEpO1xyXG4gIGNvbnN0IHNsaWNlRWRpdGVkID0gX2dldFNsaWNlUG9zaXRpb25PZlRvb2xEYXRhKFJPSUNvbnRvdXJEYXRhLCB0b29sRGF0YS51aWQpO1xyXG5cclxuICBjb25zdCBpbnRlcnBvbGF0aW9uTGlzdCA9IFtdO1xyXG5cclxuICAvLyBDaGVjayBpZiBjb250b3VycyBiZXR3ZWVuIHRoZSBleHRlbnQgY2FuIGJlIGludGVycG9sYXRlZC5cclxuICBmb3IgKGxldCBpID0gZXh0ZW50WzBdICsgMTsgaSA8PSBleHRlbnRbMV0gLSAxOyBpKyspIHtcclxuICAgIGlmIChfc2xpY2VOZWVkc0ludGVycG9sYXRpbmcoUk9JQ29udG91ckRhdGEsIGkpKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRvdXJQYWlyID0gX2dldEJvdW5kaW5nUGFpcihpLCBleHRlbnQsIFJPSUNvbnRvdXJEYXRhKTtcclxuXHJcbiAgICAgIGlmIChjb250b3VyUGFpciAmJiAoY29udG91clBhaXJbMF0gPT09IHNsaWNlRWRpdGVkIHx8IGNvbnRvdXJQYWlyWzFdID09PSBzbGljZUVkaXRlZCkpIHtcclxuICAgICAgICBfYXBwZW5kaW50ZXJwb2xhdGlvbkxpc3QoY29udG91clBhaXIsIGludGVycG9sYXRpb25MaXN0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIFJPSUNvbnRvdXJEYXRhLFxyXG4gICAgaW50ZXJwb2xhdGlvbkxpc3RcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogX2dldFNsaWNlUG9zaXRpb25PZlRvb2xEYXRhIC0gRmluZHMgdGhlIHNsaWNlIHRoYXQgd2FzIGVkaXRlZC5cclxuICpcclxuICogQHBhcmFtICB7dHlwZX0gUk9JQ29udG91ckRhdGEgZGVzY3JpcHRpb25cclxuICogQHBhcmFtICB7dHlwZX0gcG9seWdvblVpZCAgICAgZGVzY3JpcHRpb25cclxuICogQHJldHVybiB7dHlwZX0gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cclxuICovXHJcbmZ1bmN0aW9uIF9nZXRTbGljZVBvc2l0aW9uT2ZUb29sRGF0YShST0lDb250b3VyRGF0YSwgcG9seWdvblVpZCkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgUk9JQ29udG91ckRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChST0lDb250b3VyRGF0YVtpXS5jb250b3Vycykge1xyXG4gICAgICBjb25zdCBjb250b3VycyA9IFJPSUNvbnRvdXJEYXRhW2ldLmNvbnRvdXJzO1xyXG5cclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb250b3Vycy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIGlmIChjb250b3Vyc1tqXS51aWQgPT09IHBvbHlnb25VaWQpIHtcclxuICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuO1xyXG59XHJcblxyXG4vKipcclxuICogX2dldEltYWdlSWRzT2ZBY3RpdmVTZXJpZXMgLSByZXR1cm5zIGFuIGFycmF5IG9mIHRoZSBpbWFnZUlkcyBmb3IgdGhlIGN1cnJlbnRcclxuICogYWN0aXZlIHNlcmllcy5cclxuICpcclxuICogQHJldHVybiB7U3RyaW5nW119IEFuIGFycmF5IG9mIGltYWdlSWRzLlxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIF9nZXRJbWFnZUlkc09mQWN0aXZlU2VyaWVzKGVsZW1lbnQpIHtcclxuICBjb25zdCBzdGFja1Rvb2xTdGF0ZSA9IGdldFRvb2xTdGF0ZShlbGVtZW50LCAnc3RhY2snKTtcclxuXHJcbiAgcmV0dXJuIHN0YWNrVG9vbFN0YXRlLmRhdGFbMF0uaW1hZ2VJZHM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBfZ2V0Uk9JQ29udG91ckRhdGEgLSBHZW5lcmF0ZXMgYSBsaXN0IG9mIHRoZSBzbGljZSBsb2NhdGlvbnMgb2YgdGhlIDJEXHJcbiAqIHBvbHlnb25zIHRoYXQgbWFrZSB1cCB0aGUgUk9JQ29udG91ci5cclxuICpcclxuICogQHBhcmFtICB7U3RyaW5nW119IGltYWdlSWRzICBBbiBhcnJheSBvZiBJbWFnZSBJZHMuXHJcbiAqIEBwYXJhbSAge3R5cGV9IFJPSUNvbnRvdXJVaWQgVGhlIFVJRCBvZiB0aGUgUk9JQ29udG91ci5cclxuICogQHJldHVybiB7b2JqZWN0W119ICAgICAgICAgICBUaGUgbGlzdCBvZiBjb250b3VyIGxvY2F0aW9ucyBpbiB0aGUgc3RhY2suXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gX2dldFJPSUNvbnRvdXJEYXRhKGltYWdlSWRzLCBST0lDb250b3VyVWlkKSB7XHJcbiAgY29uc3QgUk9JQ29udG91ckRhdGEgPSBbXTtcclxuICBjb25zdCB0b29sU3RhdGVNYW5hZ2VyID0gZ2xvYmFsVG9vbFN0YXRlTWFuYWdlci5zYXZlVG9vbFN0YXRlKCk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VJZHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGltYWdlSWQgPSBpbWFnZUlkc1tpXTtcclxuICAgIGNvbnN0IGltYWdlVG9vbFN0YXRlID0gdG9vbFN0YXRlTWFuYWdlcltpbWFnZUlkXTtcclxuXHJcbiAgICBpZiAoIWltYWdlVG9vbFN0YXRlIHx8ICFpbWFnZVRvb2xTdGF0ZS5mcmVlaGFuZFJvaSkge1xyXG4gICAgICBST0lDb250b3VyRGF0YS5wdXNoKHtcclxuICAgICAgICBpbWFnZUlkXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgY29udG91cnMgPSBpbWFnZVRvb2xTdGF0ZS5mcmVlaGFuZFJvaS5kYXRhLmZpbHRlcihjb250b3VyID0+IHtcclxuICAgICAgICByZXR1cm4gY29udG91ci5ST0lDb250b3VyVWlkID09PSBST0lDb250b3VyVWlkO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGNvbnRvdXJzT25TbGljZSA9IHtcclxuICAgICAgICBpbWFnZUlkXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAoY29udG91cnMubGVuZ3RoKSB7XHJcbiAgICAgICAgY29udG91cnNPblNsaWNlLmNvbnRvdXJzID0gY29udG91cnM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFJPSUNvbnRvdXJEYXRhLnB1c2goY29udG91cnNPblNsaWNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBST0lDb250b3VyRGF0YTtcclxufVxyXG5cclxuLyoqXHJcbiAqIF9nZXRFeHRlbnRPZlJlZ2lvbiAtIFJldHVybnMgYSAyIGVsZW1lbnQgYXJyYXkgd2l0aCB0aGUgc2xpY2UgbG9jYXRpb25zIG9mXHJcbiAqIHRvcCBhbmQgYm90dG9tIHBvbHlnb24gb2YgdGhlIFJPSUNvbnRvdXIuXHJcbiAqXHJcbiAqIEBwYXJhbSAge29iamVjdH0gUk9JQ29udG91ckRhdGEgIERhdGEgb24gdGhlIHNsaWNlIGxvY2F0aW9uIG9mIGNvbnRvdXJzXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgUk9JQ29udG91ci5cclxuICogQHJldHVybiB7TnVtYmVyW119ICAgICAgICAgICAgICAgVGhlIHNsaWNlIGxvY2F0aW9ucyBvZiB0aGUgdG9wIGFuZCBib3R0b21cclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9seWdvbiBvZiB0aGUgUk9JQ29udG91ci5cclxuICovXHJcblxyXG5mdW5jdGlvbiBfZ2V0RXh0ZW50T2ZSZWdpb24oUk9JQ29udG91ckRhdGEpIHtcclxuICBjb25zdCBleHRlbnQgPSBbXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBST0lDb250b3VyRGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKFJPSUNvbnRvdXJEYXRhW2ldLmNvbnRvdXJzKSB7XHJcbiAgICAgIGV4dGVudC5wdXNoKGkpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAobGV0IGkgPSBST0lDb250b3VyRGF0YS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgaWYgKFJPSUNvbnRvdXJEYXRhW2ldLmNvbnRvdXJzKSB7XHJcbiAgICAgIGV4dGVudC5wdXNoKGkpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBleHRlbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBfc2xpY2VOZWVkc0ludGVycG9sYXRpbmcgLSBDaGVjayB3aGV0aGVyIHRoZXJlIGFyZSBubyBjb250b3VycyBvbiB0aGlzXHJcbiAqIHNsaWNlLCBvciBvbmUgd2hpY2ggaXMgYW4gaW50ZXJwb2xhdGVkIGNvbnRvdXIuXHJcbiAqXHJcbiAqIEBwYXJhbSAge29iamVjdH0gUk9JQ29udG91ckRhdGEgIERhdGEgb24gdGhlIHNsaWNlIGxvY2F0aW9uIG9mIGNvbnRvdXJzXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgUk9JQ29udG91ci5cclxuICogQHBhcmFtICB7TnVtYmVyfSBzbGljZUluZGV4ICAgICAgVGhlIHNsaWNlIGluZGV4LlxyXG4gKiBAcmV0dXJuIHtib29sZWFufSAgICAgICAgICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgc2xpY2UgbmVlZHMgaW50ZXJwb2xhdGluZy5cclxuICovXHJcbmZ1bmN0aW9uIF9zbGljZU5lZWRzSW50ZXJwb2xhdGluZyhST0lDb250b3VyRGF0YSwgc2xpY2VJbmRleCkge1xyXG4gIHJldHVybiAoXHJcbiAgICAhUk9JQ29udG91ckRhdGFbc2xpY2VJbmRleF0uY29udG91cnMgfHxcclxuICAgIChST0lDb250b3VyRGF0YVtzbGljZUluZGV4XS5jb250b3Vycy5sZW5ndGggPT09IDEgJiYgUk9JQ29udG91ckRhdGFbc2xpY2VJbmRleF0uY29udG91cnNbMF0uaW50ZXJwb2xhdGVkKVxyXG4gICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBfYXBwZW5kaW50ZXJwb2xhdGlvbkxpc3QgLSBJZiB0aGUgY29udG91ciBvbiBzbGljZSBpIGNhbiBiZSB1cGRhdGVkLCBhZGQgaXQgdG8gdGhlXHJcbiAqIGludGVycG9sYXRpb25MaXN0LlxyXG4gKlxyXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHNsaWNlSW5kZXggICAgICBUaGUgc2xpY2UgaW5kZXguXHJcbiAqIEBwYXJhbSAge051bWJlcltdfSBleHRlbnQgICAgICAgIFRoZSBleHRlbnQgb2Ygc2xpY2Ugb2NjdXBhbmN5IG9mIHRoZVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBST0lDb250b3VyLlxyXG4gKiBAcGFyYW0gIHtvYmplY3RbXX0gUk9JQ29udG91ckRhdGEgIERhdGEgZm9yIHRoZSBzbGljZSBsb2NhdGlvbiBvZiBjb250b3Vyc1xyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIFJPSUNvbnRvdXIuXHJcbiAqIEBwYXJhbSAge29iamVjdFtdfSBpbnRlcnBvbGF0aW9uTGlzdCBUaGUgbGlzdCBvZiBjb250b3VycyB0byBiZSBpbnRlcnBvbGF0ZWQuXHJcbiAqIEByZXR1cm4ge251bGx9XHJcbiAqL1xyXG5mdW5jdGlvbiBfYXBwZW5kaW50ZXJwb2xhdGlvbkxpc3QoY29udG91clBhaXIsIGludGVycG9sYXRpb25MaXN0KSB7XHJcbiAgaWYgKCFpbnRlcnBvbGF0aW9uTGlzdFtjb250b3VyUGFpclswXV0pIHtcclxuICAgIGludGVycG9sYXRpb25MaXN0W2NvbnRvdXJQYWlyWzBdXSA9IHtcclxuICAgICAgcGFpcjogY29udG91clBhaXIsXHJcbiAgICAgIGxpc3Q6IFtdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIF9nZXRCb3VuZGluZ1BhaXIgLSBHaXZlbiB0aGUgc2xpY2UgaW5kZXggYW5kIGV4dGVudCBvZiB0aGUgUk9JQ29udG91cixcclxuICogZ2V0IHRoZSBwYWlyIG9mIHBvbHlnb25zIHRvIHVzZSBmb3IgaW50ZXJwb2xhdGlvbiBvZiB0aGUgc2xpY2UuIFJldHVybnNcclxuICogdW5kZWZpbmVkIGlmIHRoZXJlIGlzIGFuIGFtYmlndWl0eSBhbmQgaW50ZXJwb2xhdGlvbiBjYW4ndCB0YWtlIHBsYWNlLlxyXG4gKlxyXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHNsaWNlSW5kZXggICBUaGUgc2xpY2UgaW5kZXguXHJcbiAqIEBwYXJhbSAge051bWJlcltdfSBleHRlbnQgICAgICAgIFRoZSBleHRlbnQgb2Ygc2xpY2Ugb2NjdXBhbmN5IG9mIHRoZVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBST0lDb250b3VyLlxyXG4gKiBAcGFyYW0gIHtvYmplY3RbXX0gUk9JQ29udG91ckRhdGEgIERhdGEgZm9yIHRoZSBzbGljZSBsb2NhdGlvbiBvZiBjb250b3Vyc1xyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIFJPSUNvbnRvdXIuXHJcbiAqIEByZXR1cm4ge051bWJlcltdIHx8IHVuZGVmaW5lZH0gIFRoZSBwYWlyIG9mIHNsaWNlIGluZGljaWVzLCBvciB1bmRlZmluZWQgaWZcclxuICogdGhlIGNvbnRvdXJzIHRvIHVzZSBmb3IgaW50ZXJwb2xhdGlvbiBpcyBhbWJpZ3VvdXMuXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gX2dldEJvdW5kaW5nUGFpcihzbGljZUluZGV4LCBleHRlbnQsIFJPSUNvbnRvdXJEYXRhKSB7XHJcbiAgbGV0IGNvbnRvdXJQYWlyID0gW107XHJcbiAgbGV0IGNhbkludGVycG9sYXRlID0gdHJ1ZTtcclxuXHJcbiAgLy8gQ2hlY2sgZm9yIG5lYXJlc3QgbG93ZXN0IHNsaWNlSW5kZXggY29udGFpbmluZyBjb250b3Vycy5cclxuICBmb3IgKGxldCBpID0gc2xpY2VJbmRleCAtIDE7IGkgPj0gZXh0ZW50WzBdOyBpLS0pIHtcclxuICAgIGlmIChST0lDb250b3VyRGF0YVtpXS5jb250b3Vycykge1xyXG4gICAgICBjb25zdCBjb250b3VycyA9IFJPSUNvbnRvdXJEYXRhW2ldLmNvbnRvdXJzO1xyXG5cclxuICAgICAgaWYgKGNvbnRvdXJzWzBdLmludGVycG9sYXRlZCkge1xyXG4gICAgICAgIC8vIFRoaXMgY29udG91ciBpcyBpbnRlcnBvbGF0ZWQuIFdlIG5lZWQgdG9cclxuICAgICAgICAvLyBGaW5kIGEgc29saWQgY29udG91ciB0byBpbnRlcnBvbGF0ZSBmcm9tLlxyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY29udG91cnMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGNhbkludGVycG9sYXRlID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEZvdW5kIHNpbmdsZSwgbm9uIGludGVycG9sYXRlZCBjb250b3VyIHRvIGludGVycG9sYXRlIGZyb20uXHJcbiAgICAgIGNvbnRvdXJQYWlyLnB1c2goaSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKCFjYW5JbnRlcnBvbGF0ZSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2hlY2sgZm9yIG5lYXJlc3QgdXBwZXIgc2xpY2VJbmRleCBjb250YWluaW5nIGNvbnRvdXJzLlxyXG4gIGZvciAobGV0IGkgPSBzbGljZUluZGV4ICsgMTsgaSA8PSBleHRlbnRbMV07IGkrKykge1xyXG4gICAgaWYgKFJPSUNvbnRvdXJEYXRhW2ldLmNvbnRvdXJzKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRvdXJzID0gUk9JQ29udG91ckRhdGFbaV0uY29udG91cnM7XHJcblxyXG4gICAgICBpZiAoY29udG91cnNbMF0uaW50ZXJwb2xhdGVkKSB7XHJcbiAgICAgICAgLy8gVGhpcyBjb250b3VyIGlzIGludGVycG9sYXRlZC4gV2UgbmVlZCB0b1xyXG4gICAgICAgIC8vIEZpbmQgYSBzb2xpZCBjb250b3VyIHRvIGludGVycG9sYXRlIGZyb20uXHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjb250b3Vycy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgY2FuSW50ZXJwb2xhdGUgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29udG91clBhaXIucHVzaChpKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoIWNhbkludGVycG9sYXRlKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29udG91clBhaXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2xvYmFsSW1hZ2VJZFNwZWNpZmljVG9vbFN0YXRlTWFuYWdlciwgc3RvcmUgfSBmcm9tICdjb3JuZXJzdG9uZS10b29scyc7XHJcblxyXG5pbXBvcnQgeyBQb2x5Z29uIH0gZnJvbSAnLi4vY2xhc3Nlcy9Qb2x5Z29uLmpzJztcclxuaW1wb3J0IGdlbmVyYXRlVUlEIGZyb20gJy4uL2dlbmVyYXRlVUlELmpzJztcclxuaW1wb3J0IGdlbmVyYXRlSW50ZXJwb2xhdGlvbkRhdGEgZnJvbSAnLi9nZW5lcmF0ZUludGVycG9sYXRpb25EYXRhLmpzJztcclxuXHJcbmNvbnN0IGdsb2JhbFRvb2xTdGF0ZU1hbmFnZXIgPSBnbG9iYWxJbWFnZUlkU3BlY2lmaWNUb29sU3RhdGVNYW5hZ2VyO1xyXG5jb25zdCBkUCA9IDAuMjsgLy8gQWltIGZvciA8IDAuMm1tIGJldHdlZW4gaW50ZXJwb2xhdGVkIG5vZGVzIHdoZW4gc3VwZXItc2FtcGxpbmcuXHJcbmNvbnN0IG1vZHVsZXMgPSBzdG9yZS5tb2R1bGVzO1xyXG5cclxuLyoqXHJcbiAqIGludGVycG9sYXRlIC0gSW50ZXJwb2xhdGUgbWlzc2luZyBjb250b3VycyBpbiB0aGUgUk9JQ29udG91ci5cclxuICpcclxuICogQHBhcmFtICB7b2JqZWN0fSB0b29sRGF0YSBUaGUgdG9vbCBkYXRhIG9mIHRoZSBmcmVlaGFuZDNEIGNvbnRvdXIuXHJcbiAqIEByZXR1cm4ge251bGx9XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodG9vbERhdGEsIGVsZW1lbnQpIHtcclxuICBjb25zdCB7IFJPSUNvbnRvdXJEYXRhLCBpbnRlcnBvbGF0aW9uTGlzdCB9ID0gZ2VuZXJhdGVJbnRlcnBvbGF0aW9uRGF0YSh0b29sRGF0YSwgZWxlbWVudCk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW50ZXJwb2xhdGlvbkxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChpbnRlcnBvbGF0aW9uTGlzdFtpXSkge1xyXG4gICAgICBfbGluZWFybHlJbnRlcnBvbGF0ZUJldHdlZW4oaW50ZXJwb2xhdGlvbkxpc3RbaV0ubGlzdCwgaW50ZXJwb2xhdGlvbkxpc3RbaV0ucGFpciwgUk9JQ29udG91ckRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIF9saW5lYXJseUludGVycG9sYXRlQmV0d2VlbiAtIExpbmVhcmx5IGludGVycG9sYXRlIGFsbCB0aGUgc2xpY2VzIGluIHRoZVxyXG4gKiBpbmRpY2llcyBhcnJheSBiZXR3ZWVuIHRoZSBjb250b3VyUGFpci5cclxuICpcclxuICogQHBhcmFtICB7TnVtYmVyW119IGluZGljaWVzICAgICBBbiBhcnJheSBvZiBzbGljZSBpbmRpY2llcyB0byBpbnRlcnBvbGF0ZS5cclxuICogQHBhcmFtICB7TnVtYmVyW119IGNvbnRvdXJQYWlyICBUaGUgcGFpciBvZiBjb250b3VycyB0byBpbnRlcnBvbGF0ZSBiZXR3ZWVuLlxyXG4gKiBAcGFyYW0gIHtvYmplY3RbXX0gUk9JQ29udG91ckRhdGEgIERhdGEgZm9yIHRoZSBzbGljZSBsb2NhdGlvbiBvZiBjb250b3Vyc1xyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgUk9JQ29udG91ci5cclxuICogQHJldHVybiB7bnVsbH1cclxuICovXHJcblxyXG5mdW5jdGlvbiBfbGluZWFybHlJbnRlcnBvbGF0ZUJldHdlZW4oaW5kaWNpZXMsIGNvbnRvdXJQYWlyLCBST0lDb250b3VyRGF0YSkge1xyXG4gIGNvbnN0IGMxID0gX2dlbmVyYXRlQ2xvc2VkQ29udG91cihST0lDb250b3VyRGF0YVtjb250b3VyUGFpclswXV0uY29udG91cnNbMF0uaGFuZGxlcy5wb2ludHMpO1xyXG4gIGNvbnN0IGMyID0gX2dlbmVyYXRlQ2xvc2VkQ29udG91cihST0lDb250b3VyRGF0YVtjb250b3VyUGFpclsxXV0uY29udG91cnNbMF0uaGFuZGxlcy5wb2ludHMpO1xyXG5cclxuICBjb25zdCB7IGMxSW50ZXJwLCBjMkludGVycCB9ID0gX2dlbmVyYXRlSW50ZXJwb2xhdGlvbkNvbnRvdXJQYWlyKGMxLCBjMik7XHJcblxyXG4gIC8vIFVzaW5nIHRoZSBuZXdseSBjb25zdHJ1Y3RlZCBjb250b3VycywgaW50ZXJwb2xhdGUgZWFjaCBST0kuXHJcbiAgaW5kaWNpZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgIF9saW5lYXJseUludGVycG9sYXRlQ29udG91cihjMUludGVycCwgYzJJbnRlcnAsIGluZGV4LCBjb250b3VyUGFpciwgUk9JQ29udG91ckRhdGEsIGMxLngubGVuZ3RoID4gYzIueC5sZW5ndGgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogX2xpbmVhcmx5SW50ZXJwb2xhdGVDb250b3VyIC0gSW5zZXJ0cyBhIGxpbmVhcmx5IGludGVycG9sYXRlZCBjb250b3VyIGF0XHJcbiAqIHNwZWNpZmllZCBzbGljZSBpbmRleC5cclxuICpcclxuICogQHBhcmFtICB7b2JqZWN0fSBjMUludGVycCAgICAgICBUaGUgZmlyc3QgcmVmZXJlbmNlIGNvbnRvdXIuXHJcbiAqIEBwYXJhbSAge29iamVjdH0gYzJJbnRlcnAgICAgICAgVGhlIHNlY29uZCByZWZlcmVuY2UgY29udG91ci5cclxuICogQHBhcmFtICB7TnVtYmVyfSBzbGljZUluZGV4ICAgICAgIFRoZSBzbGljZSBpbmRleCB0byBpbnRlcnBvbGF0ZS5cclxuICogQHBhcmFtICB7TnVtYmVye319IGNvbnRvdXJQYWlyICAgIFRoZSBzbGljZSBpbmRpY2llcyBvZiB0aGUgcmVmZXJlbmNlIGNvbnRvdXJzLlxyXG4gKiBAcGFyYW0gIHtvYmplY3RbXX0gUk9JQ29udG91ckRhdGEgIERhdGEgZm9yIHRoZSBzbGljZSBsb2NhdGlvbiBvZiBjb250b3Vyc1xyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIFJPSUNvbnRvdXIuXHJcbiAqIEBwYXJhbSAge2Jvb2xlYW59IGMxSGFzTW9yZU5vZGVzIFRydWUgaWYgYzEgaGFzIG1vcmUgbm9kZXMgdGhhbiBjMi5cclxuICogQHJldHVybiB7bnVsbH1cclxuICovXHJcbmZ1bmN0aW9uIF9saW5lYXJseUludGVycG9sYXRlQ29udG91cihjMUludGVycCwgYzJJbnRlcnAsIHNsaWNlSW5kZXgsIGNvbnRvdXJQYWlyLCBST0lDb250b3VyRGF0YSwgYzFIYXNNb3JlTm9kZXMpIHtcclxuICBjb25zdCB6SW50ZXJwID0gKHNsaWNlSW5kZXggLSBjb250b3VyUGFpclswXSkgLyAoY29udG91clBhaXJbMV0gLSBjb250b3VyUGFpclswXSk7XHJcbiAgY29uc3QgaW50ZXJwb2xhdGVkMkRDb250b3VyID0gX2dlbmVyYXRlSW50ZXJwb2xhdGVkT3BlbkNvbnRvdXIoYzFJbnRlcnAsIGMySW50ZXJwLCB6SW50ZXJwLCBjMUhhc01vcmVOb2Rlcyk7XHJcblxyXG4gIGNvbnN0IGMxTWV0YWRhdGEgPSBST0lDb250b3VyRGF0YVtjb250b3VyUGFpclswXV0uY29udG91cnNbMF07XHJcblxyXG4gIGlmIChST0lDb250b3VyRGF0YVtzbGljZUluZGV4XS5jb250b3Vycykge1xyXG4gICAgX2VkaXRJbnRlcnBvbGF0ZWRDb250b3VyKGludGVycG9sYXRlZDJEQ29udG91ciwgUk9JQ29udG91ckRhdGFbc2xpY2VJbmRleF0uaW1hZ2VJZCwgYzFNZXRhZGF0YSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIF9hZGRJbnRlcnBvbGF0ZWRDb250b3VyKGludGVycG9sYXRlZDJEQ29udG91ciwgUk9JQ29udG91ckRhdGFbc2xpY2VJbmRleF0uaW1hZ2VJZCwgYzFNZXRhZGF0YSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogX2dlbmVyYXRlSW50ZXJwb2xhdGlvbkNvbnRvdXJQYWlyIC0gZ2VuZXJhdGVzIHR3byBhbGlnbmVkIGNvbnRvdXJzIHdpdGggYW5cclxuICogZXF1YWwgbnVtYmVyIG9mIG5vZGVzIGZyb20gd2hpY2ggYW4gaW50ZXJtZWRpYXRlIGNvbnRvdXIgbWF5IGJlIGludGVycG9sYXRlZC5cclxuICpcclxuICogQHBhcmFtICB7b2JqZWN0fSBjMSBUaGUgZmlyc3QgY29udG91ci5cclxuICogQHBhcmFtICB7b2JqZWN0fSBjMiBUaGUgc2Vjb25kIGNvbnRvdXIuXHJcbiAqIEByZXR1cm4ge29iamVjdH0gIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSB0d28gY29udG91cnMuXHJcbiAqL1xyXG5mdW5jdGlvbiBfZ2VuZXJhdGVJbnRlcnBvbGF0aW9uQ29udG91clBhaXIoYzEsIGMyKSB7XHJcbiAgY29uc3QgY3VtUGVyaW0xID0gX2dldEN1bXVsYXRpdmVQZXJpbWV0ZXIoYzEpO1xyXG4gIGNvbnN0IGN1bVBlcmltMiA9IF9nZXRDdW11bGF0aXZlUGVyaW1ldGVyKGMyKTtcclxuXHJcbiAgY29uc3QgaW50ZXJwTm9kZXMgPSBNYXRoLm1heChcclxuICAgIE1hdGguY2VpbChjdW1QZXJpbTFbY3VtUGVyaW0xLmxlbmd0aCAtIDFdIC8gZFApLFxyXG4gICAgTWF0aC5jZWlsKGN1bVBlcmltMltjdW1QZXJpbTIubGVuZ3RoIC0gMV0gLyBkUClcclxuICApO1xyXG5cclxuICBjb25zdCBjdW1QZXJpbTFOb3JtID0gX25vcm1hbGlzZWRDdW11bGF0aXZlUGVyaW1ldGVyKGN1bVBlcmltMSk7XHJcbiAgY29uc3QgY3VtUGVyaW0yTm9ybSA9IF9ub3JtYWxpc2VkQ3VtdWxhdGl2ZVBlcmltZXRlcihjdW1QZXJpbTIpO1xyXG5cclxuICBjb25zdCBudW1Ob2RlczEgPSBpbnRlcnBOb2RlcyArIGMyLngubGVuZ3RoO1xyXG4gIGNvbnN0IG51bU5vZGVzMiA9IGludGVycE5vZGVzICsgYzEueC5sZW5ndGg7XHJcblxyXG4gIC8vIGNvbmNhdGluYXRlIHAgJiYgY3VtUGVyaW1Ob3JtXHJcbiAgY29uc3QgcGVyaW0xSW50ZXJwID0gX2dldEludGVycG9sYXRlZFBlcmltKG51bU5vZGVzMSwgY3VtUGVyaW0xTm9ybSk7XHJcbiAgY29uc3QgcGVyaW0ySW50ZXJwID0gX2dldEludGVycG9sYXRlZFBlcmltKG51bU5vZGVzMiwgY3VtUGVyaW0yTm9ybSk7XHJcblxyXG4gIGNvbnN0IHBlcmltMUluZCA9IF9nZXRJbmRpY2F0b3JBcnJheShjMSwgbnVtTm9kZXMxKTtcclxuICBjb25zdCBwZXJpbTJJbmQgPSBfZ2V0SW5kaWNhdG9yQXJyYXkoYzIsIG51bU5vZGVzMik7XHJcblxyXG4gIGNvbnN0IG5vZGVzUGVyU2VnbWVudDEgPSBfZ2V0Tm9kZXNQZXJTZWdtZW50KHBlcmltMUludGVycCwgcGVyaW0xSW5kKTtcclxuICBjb25zdCBub2Rlc1BlclNlZ21lbnQyID0gX2dldE5vZGVzUGVyU2VnbWVudChwZXJpbTJJbnRlcnAsIHBlcmltMkluZCk7XHJcblxyXG4gIGNvbnN0IGMxaSA9IF9nZXRTdXBlclNhbXBsZWRDb250b3VyKGMxLCBub2Rlc1BlclNlZ21lbnQxKTtcclxuICBjb25zdCBjMmkgPSBfZ2V0U3VwZXJTYW1wbGVkQ29udG91cihjMiwgbm9kZXNQZXJTZWdtZW50Mik7XHJcblxyXG4gIC8vIEtlZXAgYzJpIGZpeGVkIGFuZCBzaGlmdCB0aGUgc3RhcnRpbmcgbm9kZSBvZiBjMWkgdG8gbWluaW1pc2UgdGhlIHRvdGFsIGxlbmd0aCBvZiBzZWdtZW50cy5cclxuICBfc2hpZnRTdXBlclNhbXBsZWRDb250b3VySW5QbGFjZShjMWksIGMyaSk7XHJcblxyXG4gIHJldHVybiBfcmVkdWNlQ29udG91cnNUb09yaWdpbk5vZGVzKGMxaSwgYzJpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIF9hZGRJbnRlcnBvbGF0ZWRDb250b3VyIC0gQWRkcyBhIG5ldyBjb250b3VyIHRvIHRoZSBpbWFnZUlkLlxyXG4gKlxyXG4gKiBAcGFyYW0gIHtvYmplY3R9IGludGVycG9sYXRlZDJEQ29udG91ciBUaGUgcG9seWdvbiB0byBhZGQgdG8gdGhlIFJPSUNvbnRvdXIuXHJcbiAqIEBwYXJhbSAge1N0cmluZ30gaW1hZ2VJZCAgICAgICAgICAgICAgIFRoZSBpbWFnZUlkIHRvIGFkZCB0aGUgcG9seWdvbiB0by5cclxuICogQHBhcmFtICB7dHlwZX0gcmVmZXJlbmNlZFRvb2xEYXRhICAgIFRoZSB0b29sRGF0YSBvZiBhbm90aGVyIHBvbHlnb24gaW4gdGhlXHJcbiAqIFJPSUNvbnRvdXIsIHRvIGFzc2lnbiBhcHByb3ByaWF0ZSBtZXRhZGF0YSB0byB0aGUgbmV3IHBvbHlnb24uXHJcbiAqIEByZXR1cm4ge251bGx9XHJcbiAqL1xyXG5mdW5jdGlvbiBfYWRkSW50ZXJwb2xhdGVkQ29udG91cihpbnRlcnBvbGF0ZWQyRENvbnRvdXIsIGltYWdlSWQsIHJlZmVyZW5jZWRUb29sRGF0YSkge1xyXG4gIGNvbnN0IHBvaW50cyA9IFtdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGludGVycG9sYXRlZDJEQ29udG91ci54Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBwb2ludHMucHVzaCh7XHJcbiAgICAgIHg6IGludGVycG9sYXRlZDJEQ29udG91ci54W2ldLFxyXG4gICAgICB5OiBpbnRlcnBvbGF0ZWQyRENvbnRvdXIueVtpXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwb2x5Z29uID0gbmV3IFBvbHlnb24oXHJcbiAgICBwb2ludHMsXHJcbiAgICBudWxsLFxyXG4gICAgcmVmZXJlbmNlZFRvb2xEYXRhLnNlcmllc0luc3RhbmNlVWlkLFxyXG4gICAgcmVmZXJlbmNlZFRvb2xEYXRhLnN0cnVjdHVyZVNldFVpZCxcclxuICAgIHJlZmVyZW5jZWRUb29sRGF0YS5ST0lDb250b3VyVWlkLFxyXG4gICAgZ2VuZXJhdGVVSUQoKSxcclxuICAgIG51bGwsXHJcbiAgICB0cnVlXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgdG9vbFN0YXRlTWFuYWdlciA9IGdsb2JhbFRvb2xTdGF0ZU1hbmFnZXIuc2F2ZVRvb2xTdGF0ZSgpO1xyXG5cclxuICBpZiAoIXRvb2xTdGF0ZU1hbmFnZXJbaW1hZ2VJZF0pIHtcclxuICAgIHRvb2xTdGF0ZU1hbmFnZXJbaW1hZ2VJZF0gPSB7fTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGltYWdlVG9vbFN0YXRlID0gdG9vbFN0YXRlTWFuYWdlcltpbWFnZUlkXTtcclxuXHJcbiAgaWYgKCFpbWFnZVRvb2xTdGF0ZS5mcmVlaGFuZFJvaSkge1xyXG4gICAgaW1hZ2VUb29sU3RhdGUuZnJlZWhhbmRSb2kgPSB7fTtcclxuICAgIGltYWdlVG9vbFN0YXRlLmZyZWVoYW5kUm9pLmRhdGEgPSBbXTtcclxuICB9IGVsc2UgaWYgKCFpbWFnZVRvb2xTdGF0ZS5mcmVlaGFuZFJvaS5kYXRhKSB7XHJcbiAgICBpbWFnZVRvb2xTdGF0ZS5mcmVlaGFuZFJvaS5kYXRhID0gW107XHJcbiAgfVxyXG5cclxuICBpbWFnZVRvb2xTdGF0ZS5mcmVlaGFuZFJvaS5kYXRhLnB1c2gocG9seWdvbi5nZXRGcmVlaGFuZFRvb2xEYXRhKGZhbHNlKSk7XHJcblxyXG4gIG1vZHVsZXMuZnJlZWhhbmQzRC5zZXR0ZXJzLmluY3JlbWVudFBvbHlnb25Db3VudChcclxuICAgIHJlZmVyZW5jZWRUb29sRGF0YS5zZXJpZXNJbnN0YW5jZVVpZCxcclxuICAgIHJlZmVyZW5jZWRUb29sRGF0YS5zdHJ1Y3R1cmVTZXRVaWQsXHJcbiAgICByZWZlcmVuY2VkVG9vbERhdGEuUk9JQ29udG91clVpZFxyXG4gICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBfZWRpdEludGVycG9sYXRlZENvbnRvdXIgLSBFZGl0cyBhbiBpbnRlcnBvbGF0ZWQgcG9seWdvbiBvbiB0aGUgaW1hZ2VJZFxyXG4gKiB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBzcGVjaWZpZWQgUk9JQ29udG91ci5cclxuICpcclxuICogQHBhcmFtICB7b2JqZWN0fSBpbnRlcnBvbGF0ZWQyRENvbnRvdXIgVGhlIHBvbHlnb24gdG8gYWRkIHRvIHRoZSBST0lDb250b3VyLlxyXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGltYWdlSWQgICAgICAgICAgICAgICBUaGUgaW1hZ2VJZCB0byBhZGQgdGhlIHBvbHlnb24gdG8uXHJcbiAqIEBwYXJhbSAge3R5cGV9IHJlZmVyZW5jZWRUb29sRGF0YSAgICBUaGUgdG9vbERhdGEgb2YgYW5vdGhlciBwb2x5Z29uIGluIHRoZVxyXG4gKiBST0lDb250b3VyLCB0byBhc3NpZ24gYXBwcm9wcmlhdGUgbWV0YWRhdGEgdG8gdGhlIG5ldyBwb2x5Z29uLlxyXG4gKiBAcmV0dXJuIHtudWxsfVxyXG4gKi9cclxuZnVuY3Rpb24gX2VkaXRJbnRlcnBvbGF0ZWRDb250b3VyKGludGVycG9sYXRlZDJEQ29udG91ciwgaW1hZ2VJZCwgcmVmZXJlbmNlZFRvb2xEYXRhKSB7XHJcbiAgY29uc3QgdG9vbFN0YXRlTWFuYWdlciA9IGdsb2JhbFRvb2xTdGF0ZU1hbmFnZXIuc2F2ZVRvb2xTdGF0ZSgpO1xyXG4gIGNvbnN0IGltYWdlVG9vbFN0YXRlID0gdG9vbFN0YXRlTWFuYWdlcltpbWFnZUlkXTtcclxuXHJcbiAgaWYgKCFpbWFnZVRvb2xTdGF0ZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbWFnZSB0b29sc3RhdGUgZG9lcyBub3QgZXhpc3QuIFRoaXMgc2hvdWxkIG5vdCBiZSByZWFjaGVkIGluIHRoaXMgY2FzZSEnKTtcclxuICB9XHJcblxyXG4gIC8vIEZpbmQgdGhlIGluZGV4IG9mIHRoZSBwb2x5Z29uIG9uIHRoaXMgc2xpY2UgY29ycmVzcG9uZGluZyB0b1xyXG4gIC8vIFRoZSBST0lDb250b3VyLlxyXG4gIGxldCB0b29sRGF0YUluZGV4O1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlVG9vbFN0YXRlLmZyZWVoYW5kUm9pLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChpbWFnZVRvb2xTdGF0ZS5mcmVlaGFuZFJvaS5kYXRhW2ldLlJPSUNvbnRvdXJVaWQgPT09IHJlZmVyZW5jZWRUb29sRGF0YS5ST0lDb250b3VyVWlkKSB7XHJcbiAgICAgIHRvb2xEYXRhSW5kZXggPSBpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IG9sZFBvbHlnb24gPSBpbWFnZVRvb2xTdGF0ZS5mcmVlaGFuZFJvaS5kYXRhW3Rvb2xEYXRhSW5kZXhdO1xyXG4gIGNvbnN0IHBvaW50cyA9IFtdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGludGVycG9sYXRlZDJEQ29udG91ci54Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBwb2ludHMucHVzaCh7XHJcbiAgICAgIHg6IGludGVycG9sYXRlZDJEQ29udG91ci54W2ldLFxyXG4gICAgICB5OiBpbnRlcnBvbGF0ZWQyRENvbnRvdXIueVtpXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB1cGRhdGVkUG9seWdvbiA9IG5ldyBQb2x5Z29uKFxyXG4gICAgcG9pbnRzLFxyXG4gICAgbnVsbCxcclxuICAgIG9sZFBvbHlnb24uc2VyaWVzSW5zdGFuY2VVaWQsXHJcbiAgICBvbGRQb2x5Z29uLnN0cnVjdHVyZVNldFVpZCxcclxuICAgIG9sZFBvbHlnb24uUk9JQ29udG91clVpZCxcclxuICAgIG9sZFBvbHlnb24udWlkLFxyXG4gICAgbnVsbCxcclxuICAgIHRydWVcclxuICApO1xyXG5cclxuICBpbWFnZVRvb2xTdGF0ZS5mcmVlaGFuZFJvaS5kYXRhW3Rvb2xEYXRhSW5kZXhdID0gdXBkYXRlZFBvbHlnb24uZ2V0RnJlZWhhbmRUb29sRGF0YShmYWxzZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBfZ2VuZXJhdGVJbnRlcnBvbGF0ZWRPcGVuQ29udG91ciAtIEludGVycG9sYXRlIGFuIG9wZW4gY29udG91ciBiZXR3ZWVuIGMxaXJcclxuICogYW5kIGMyaXIgYXQgdGhlIHpJbnRlcnAgcG9zaXRpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSAge29iamVjdH0gYzFpciAgICAgICAgICAgIFRoZSBpbnRlcnBvbGF0ZWQgYzEgY29udG91ciB3aXRoXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cGVyZmx1b3VzIG5vZGVzIHJlbW92ZWQuXHJcbiAqIEBwYXJhbSAge29iamVjdH0gYzJpciAgICAgICAgICAgIFRoZSBpbnRlcnBvbGF0ZWQgYzIgY29udG91ciB3aXRoXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cGVyZmx1b3VzIG5vZGVzIHJlbW92ZWQuXHJcbiAqIEBwYXJhbSAge051bWJlcn0gekludGVycCAgICAgICAgIFRoZSB6LSBjb29yZGluYXRlIG9mIHRoZSBkZXNpcmVkXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycG9sYXRpb24uXHJcbiAqIEBwYXJhbSAge2Jvb2xlYW59IGMxSGFzTW9yZU5vZGVzIFRydWUgaWYgYzEgaGFzIG1vcmUgb3JpZ2luYWwgbm9kZXNcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhbiBjMi5cclxuICogQHJldHVybiB7b2JqZWN0fSAgICAgICAgICAgICAgICAgVGhlIGludGVycG9sYXRlZCBjb250b3VyIGF0IHo9ekludGVycC5cclxuICovXHJcbmZ1bmN0aW9uIF9nZW5lcmF0ZUludGVycG9sYXRlZE9wZW5Db250b3VyKGMxaXIsIGMyaXIsIHpJbnRlcnAsIGMxSGFzTW9yZU5vZGVzKSB7XHJcbiAgY29uc3QgY0ludGVycCA9IHtcclxuICAgIHg6IFtdLFxyXG4gICAgeTogW11cclxuICB9O1xyXG5cclxuICBjb25zdCBpbmRpY2llcyA9IGMxSGFzTW9yZU5vZGVzID8gYzFpci5JIDogYzJpci5JO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGMxaXIueC5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGluZGljaWVzW2ldKSB7XHJcbiAgICAgIGNJbnRlcnAueC5wdXNoKCgxIC0gekludGVycCkgKiBjMWlyLnhbaV0gKyB6SW50ZXJwICogYzJpci54W2ldKTtcclxuICAgICAgY0ludGVycC55LnB1c2goKDEgLSB6SW50ZXJwKSAqIGMxaXIueVtpXSArIHpJbnRlcnAgKiBjMmlyLnlbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNJbnRlcnA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBfcmVkdWNlQ29udG91cnNUb09yaWdpbk5vZGVzIC0gUmVtb3ZlcyBhbnkgbm9kZXMgZnJvbSB0aGUgY29udG91cnMgdGhhdCBkb24ndFxyXG4gKiBjb3JyZXNwb25kIHRvIGFuIG9yaWdpbmFsIGNvbnRvdXIgbm9kZS5cclxuICpcclxuICogQHBhcmFtICB7b2JqZWN0fSBjMWkgVGhlIGZpcnN0IHN1cGVyLXNhbXBsZWQgY29udG91ci5cclxuICogQHBhcmFtICB7b2JqZWN0fSBjMmkgVGhlIHNlY29uZCBzdXBlci1zYW1wbGVkIGNvbnRvdXIuXHJcbiAqIEByZXR1cm4ge29iamVjdH0gICAgIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSB0d28gcmVkdWNlZCBjb250b3Vycy5cclxuICovXHJcbmZ1bmN0aW9uIF9yZWR1Y2VDb250b3Vyc1RvT3JpZ2luTm9kZXMoYzFpLCBjMmkpIHtcclxuICBjb25zdCBjMUludGVycCA9IHtcclxuICAgIHg6IFtdLFxyXG4gICAgeTogW10sXHJcbiAgICBJOiBbXVxyXG4gIH07XHJcbiAgY29uc3QgYzJJbnRlcnAgPSB7XHJcbiAgICB4OiBbXSxcclxuICAgIHk6IFtdLFxyXG4gICAgSTogW11cclxuICB9O1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGMxaS54Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoYzFpLklbaV0gfHwgYzJpLklbaV0pIHtcclxuICAgICAgYzFJbnRlcnAueC5wdXNoKGMxaS54W2ldKTtcclxuICAgICAgYzFJbnRlcnAueS5wdXNoKGMxaS55W2ldKTtcclxuICAgICAgYzFJbnRlcnAuSS5wdXNoKGMxaS5JW2ldKTtcclxuXHJcbiAgICAgIGMySW50ZXJwLngucHVzaChjMmkueFtpXSk7XHJcbiAgICAgIGMySW50ZXJwLnkucHVzaChjMmkueVtpXSk7XHJcbiAgICAgIGMySW50ZXJwLkkucHVzaChjMmkuSVtpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYzFJbnRlcnAsXHJcbiAgICBjMkludGVycFxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBfc2hpZnRTdXBlclNhbXBsZWRDb250b3VySW5QbGFjZSAtIFNoaWZ0cyB0aGUgaW5kaWNpZXMgb2YgYzFpIGFyb3VuZCB0b1xyXG4gKiBtaW5pbWlzZTogU1VNICh8YzFpW2ldLWMyaVtpXXwpIGZyb20gMCB0byBOLlxyXG4gKlxyXG4gKiBAcGFyYW0gIHtvYmplY3R9IGMxaSBUaGUgY29udG91ciB0byBzaGlmdC5cclxuICogQHBhcmFtICB7b2JqZWN0fSBjMmkgVGhlIHJlZmVyZW5jZSBjb250b3VyLlxyXG4gKiBAbW9kaWZpZXMgYzFpXHJcbiAqL1xyXG5mdW5jdGlvbiBfc2hpZnRTdXBlclNhbXBsZWRDb250b3VySW5QbGFjZShjMWksIGMyaSkge1xyXG4gIGNvbnN0IGMxaUxlbmd0aCA9IGMxaS54Lmxlbmd0aDtcclxuXHJcbiAgbGV0IG9wdGltYWwgPSB7XHJcbiAgICBzdGFydGluZ05vZGU6IDAsXHJcbiAgICB0b3RhbFNxdWFyZWRYWUxlbmd0aHM6IEluZmluaXR5XHJcbiAgfTtcclxuXHJcbiAgZm9yIChsZXQgc3RhcnRpbmdOb2RlID0gMDsgc3RhcnRpbmdOb2RlIDwgYzFpTGVuZ3RoOyBzdGFydGluZ05vZGUrKykge1xyXG4gICAgbGV0IG5vZGUgPSBzdGFydGluZ05vZGU7XHJcblxyXG4gICAgLy8gTk9URTogMSkgSWdub3JlIGNhbGN1bGF0aW5nIFosIGFzIHRoZSBzdW0gb2YgYWxsIHNxdWFyZWQgWiBkaXN0YW5jZXMgd2lsbCBhbHdheXMgYmUgYSBjb25zdGFudC5cclxuICAgIC8vIE5PVEU6IDIpIERvbid0IG5lZWQgYWN0dWFsIGxlbmd0aCwgc28gZG9uJ3Qgd29ycnkgYWJvdXQgc3F1YXJlIHJvb3RpbmcuXHJcbiAgICBsZXQgdG90YWxTcXVhcmVkWFlMZW5ndGhzID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBpdHRlcmF0aW9uID0gMDsgaXR0ZXJhdGlvbiA8IGMxaUxlbmd0aDsgaXR0ZXJhdGlvbisrKSB7XHJcbiAgICAgIHRvdGFsU3F1YXJlZFhZTGVuZ3RocyArPSAoYzFpLnhbbm9kZV0gLSBjMmkueFtpdHRlcmF0aW9uXSkgKiogMiArIChjMWkueVtub2RlXSAtIGMyaS55W2l0dGVyYXRpb25dKSAqKiAyO1xyXG5cclxuICAgICAgbm9kZSsrO1xyXG5cclxuICAgICAgaWYgKG5vZGUgPT09IGMxaUxlbmd0aCkgbm9kZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRvdGFsU3F1YXJlZFhZTGVuZ3RocyA8IG9wdGltYWwudG90YWxTcXVhcmVkWFlMZW5ndGhzKSB7XHJcbiAgICAgIG9wdGltYWwudG90YWxTcXVhcmVkWFlMZW5ndGhzID0gdG90YWxTcXVhcmVkWFlMZW5ndGhzO1xyXG4gICAgICBvcHRpbWFsLnN0YXJ0aW5nTm9kZSA9IHN0YXJ0aW5nTm9kZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCBub2RlID0gb3B0aW1hbC5zdGFydGluZ05vZGU7XHJcblxyXG4gIF9zaGlmdENpcmN1bGFyQXJyYXkoYzFpLngsIG5vZGUpO1xyXG4gIF9zaGlmdENpcmN1bGFyQXJyYXkoYzFpLnksIG5vZGUpO1xyXG4gIF9zaGlmdENpcmN1bGFyQXJyYXkoYzFpLkksIG5vZGUpO1xyXG59XHJcblxyXG4vKipcclxuICogX3NoaWZ0Q2lyY3VsYXJBcnJheSAtIFNoaWZ0IHRoZSBjaXJjdWxhciBhcnJheSBieSB0aGUgY291bnQuXHJcbiAqXHJcbiAqIEBwYXJhbSAgeypbXX0gYXJyICAgVGhlIGFycmF5LlxyXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGNvdW50IFRoZSBzaGlmdC5cclxuICogQHJldHVybiB7KltdfSAgICAgICBUaGUgc2hpZnRlZCBhcnJheS5cclxuICovXHJcbmZ1bmN0aW9uIF9zaGlmdENpcmN1bGFyQXJyYXkoYXJyLCBjb3VudCkge1xyXG4gIGNvdW50IC09IGFyci5sZW5ndGggKiBNYXRoLmZsb29yKGNvdW50IC8gYXJyLmxlbmd0aCk7XHJcbiAgYXJyLnB1c2guYXBwbHkoYXJyLCBhcnIuc3BsaWNlKDAsIGNvdW50KSk7XHJcbiAgcmV0dXJuIGFycjtcclxufVxyXG5cclxuLyoqXHJcbiAqIF9nZXRTdXBlclNhbXBsZWRDb250b3VyIC0gR2VuZXJhdGVzIGEgc3VwZXIgc2FtcGxlZCBjb250b3VyIHdpdGggYWRkaXRpb25hbFxyXG4gKiBub2RlcyBhZGRlZCBwZXIgc2VnbWVudC5cclxuICpcclxuICogQHBhcmFtICB7b2JqZWN0fSBjICAgICAgICAgICAgICAgICBUaGUgb3JpZ2luYWwgY29udG91ci5cclxuICogQHBhcmFtICB7TnVtYmVyW119IG5vZGVzUGVyU2VnbWVudCBBbiBhcnJheSBvZiB0aGUgbnVtYmVyIG9mIG5vZGVzIHRvIGFkZFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlciBsaW5lIHNlZ21lbnQuXHJcbiAqIEByZXR1cm4ge29iamVjdH0gICAgICAgICAgICAgICAgICAgVGhlIHN1cGVyIHNhbXBsZWQgY29udG91ci5cclxuICovXHJcbmZ1bmN0aW9uIF9nZXRTdXBlclNhbXBsZWRDb250b3VyKGMsIG5vZGVzUGVyU2VnbWVudCkge1xyXG4gIGNvbnN0IGNpID0ge1xyXG4gICAgeDogW10sXHJcbiAgICB5OiBbXSxcclxuICAgIEk6IFtdXHJcbiAgfTtcclxuXHJcbiAgLy8gTGVuZ3RoIC0gMSwgcHJvZHVjZXMgJ29wZW4nIHBvbHlnb24uXHJcbiAgZm9yIChsZXQgbiA9IDA7IG4gPCBjLngubGVuZ3RoIC0gMTsgbisrKSB7XHJcbiAgICAvLyBBZGQgb3JpZ2luYWwgbm9kZS5cclxuICAgIGNpLngucHVzaChjLnhbbl0pO1xyXG4gICAgY2kueS5wdXNoKGMueVtuXSk7XHJcbiAgICBjaS5JLnB1c2godHJ1ZSk7XHJcblxyXG4gICAgLy8gQWRkIGxpbmVyYWxseSBpbnRlcnBvbGF0ZWQgbm9kZXMuXHJcbiAgICBjb25zdCB4U3BhY2luZyA9IChjLnhbbiArIDFdIC0gYy54W25dKSAvIChub2Rlc1BlclNlZ21lbnRbbl0gKyAxKTtcclxuICAgIGNvbnN0IHlTcGFjaW5nID0gKGMueVtuICsgMV0gLSBjLnlbbl0pIC8gKG5vZGVzUGVyU2VnbWVudFtuXSArIDEpO1xyXG5cclxuICAgIC8vIEFkZCBvdGhlciBub2Rlc1BlclNlZ21lbnQgLSAxIG90aGVyIG5vZGVzIChhcyBhbHJlYWR5IHB1dCBpbiBvcmlnaW5hbCBub2RlKS5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXNQZXJTZWdtZW50W25dIC0gMTsgaSsrKSB7XHJcbiAgICAgIGNpLngucHVzaChjaS54W2NpLngubGVuZ3RoIC0gMV0gKyB4U3BhY2luZyk7XHJcbiAgICAgIGNpLnkucHVzaChjaS55W2NpLnkubGVuZ3RoIC0gMV0gKyB5U3BhY2luZyk7XHJcbiAgICAgIGNpLkkucHVzaChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY2k7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBfZ2V0Tm9kZXNQZXJTZWdtZW50IC0gUmV0dXJucyBhbiBhcnJheSBvZiB0aGUgbnVtYmVyIG9mIGludGVycG9sYXRlZCBub2Rlc1xyXG4gKiB0byBiZSBhZGRlZCBhbG9uZyBlYWNoIGxpbmUgc2VnbWVudCBvZiBhIHBvbHlnb24uXHJcbiAqXHJcbiAqIEBwYXJhbSAge051bWJlcltdfSBwZXJpbUludGVycCBOb3JtYWxpc2VkIGFycmF5IG9mIG9yaWdpbmFsIGFuZCBhZGRlZCBub2Rlcy5cclxuICogQHBhcmFtICB7Ym9vbGVhbltdfSBwZXJpbUluZCAgICBUaGUgaW5kaWNhdG9yIGFycmF5IGRlc2NyaWJpbmcgdGhlIGxvY2F0aW9uIG9mXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBvcmlnaW5hbCBjb250b3VyJ3Mgbm9kZXMuXHJcbiAqIEByZXR1cm4ge051bWJlcltdfSAgICAgICAgIEFuIGFycmF5IGNvbnRhaW5naW5nIHRoZSBudW1iZXIgb2Ygbm9kZXMgdG8gYmVcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkZWQgcGVyIG9yaWdpbmFsIGxpbmUgc2VnbWVudC5cclxuICovXHJcbmZ1bmN0aW9uIF9nZXROb2Rlc1BlclNlZ21lbnQocGVyaW1JbnRlcnAsIHBlcmltSW5kKSB7XHJcbiAgY29uc3QgaWR4ID0gW107XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGVyaW1JbnRlcnAubGVuZ3RoOyArK2kpIGlkeFtpXSA9IGk7XHJcbiAgaWR4LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgIHJldHVybiBwZXJpbUludGVycFthXSA8IHBlcmltSW50ZXJwW2JdID8gLTEgOiBwZXJpbUludGVycFthXSA+IHBlcmltSW50ZXJwW2JdO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBwZXJpbUluZFNvcnRlZCA9IFtdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBlcmltSW5kLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBwZXJpbUluZFNvcnRlZC5wdXNoKHBlcmltSW5kW2lkeFtpXV0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaW5kaWNpZXNPZk9yaWdpbk5vZGVzID0gcGVyaW1JbmRTb3J0ZWQucmVkdWNlKGZ1bmN0aW9uIChhcnIsIGVsZW1lbnRWYWx1ZSwgaSkge1xyXG4gICAgaWYgKGVsZW1lbnRWYWx1ZSkgYXJyLnB1c2goaSk7XHJcbiAgICByZXR1cm4gYXJyO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgbm9kZXNQZXJTZWdtZW50ID0gW107XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kaWNpZXNPZk9yaWdpbk5vZGVzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgbm9kZXNQZXJTZWdtZW50LnB1c2goaW5kaWNpZXNPZk9yaWdpbk5vZGVzW2kgKyAxXSAtIGluZGljaWVzT2ZPcmlnaW5Ob2Rlc1tpXSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbm9kZXNQZXJTZWdtZW50O1xyXG59XHJcblxyXG4vKipcclxuICogX2dldEluZGljYXRvckFycmF5IC0gUHJvZHVjZXMgYW4gYXJyYXkgb2YgdGhlIGxvY2F0aW9uIG9mIHRoZSBvcmlnaW5hbCBub2Rlc1xyXG4gKiBpbiBhIHN1cGVyIHNhbXBsZWQgY29udG91ci5cclxuICpcclxuICogQHBhcmFtICB7b2JqZWN0fSBjb250b3VyICAgVGhlIG9yaWdpbmFsIGNvbnRvdXIuXHJcbiAqIEBwYXJhbSAge051bWJlcn0gbnVtTm9kZXMgVGhlIG51bWJlciBvZiBub2RlcyBhZGRlZC5cclxuICogQHJldHVybiB7Ym9vbGVhbltdfSAgICAgICAgICAgVGhlIGluZGljYXRvciBhcnJheSBvZiBvcmlnaW5hbCBub2RlIGxvY2F0aW9ucy5cclxuICovXHJcbmZ1bmN0aW9uIF9nZXRJbmRpY2F0b3JBcnJheShjb250b3VyLCBudW1Ob2Rlcykge1xyXG4gIGNvbnN0IHBlcmltSW5kID0gW107XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtTm9kZXMgLSAyOyBpKyspIHtcclxuICAgIHBlcmltSW5kLnB1c2goZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250b3VyLngubGVuZ3RoOyBpKyspIHtcclxuICAgIHBlcmltSW5kLnB1c2godHJ1ZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcGVyaW1JbmQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBfZ2V0SW50ZXJwb2xhdGVkUGVyaW0gLSBBZGRzIGFkZGl0aW9uYWwgaW50ZXJwb2xhdGVkIG5vZGVzIHRvIHRoZVxyXG4gKiBub3JtYWxpc2VkIHBlcmltZXRlciBhcnJheS5cclxuICpcclxuICogQHBhcmFtICB7TnVtYmVyfSBudW1Ob2RlcyAgICBUaGUgbnVtYmVyIG9mIG5vZGVzIHRvIGFkZC5cclxuICogQHBhcmFtICB7TnVtYmVyW119IGN1bVBlcmltTm9ybSBUaGUgY3VtdWxhdGl2ZSBwZXJpbWV0ZXIgYXJyYXkuXHJcbiAqIEByZXR1cm4ge051bWJlcltdfSAgICAgICAgICAgICAgVGhlIGFycmF5IG9mIG5vZGVzLlxyXG4gKi9cclxuZnVuY3Rpb24gX2dldEludGVycG9sYXRlZFBlcmltKG51bU5vZGVzLCBjdW1QZXJpbU5vcm0pIHtcclxuICBjb25zdCBkaWZmID0gMSAvIChudW1Ob2RlcyAtIDEpO1xyXG4gIGNvbnN0IGxpbnNwYWNlID0gW2RpZmZdO1xyXG5cclxuICAvLyBMZW5ndGggLSAyIGFzIHdlIGFyZSBkaXNjYXJkaW5nIDAgYW4gMSBmb3IgZWZmaWNpZW5jeSAobm8gbmVlZCB0byBjYWxjdWxhdGUgdGhlbSkuXHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1Ob2RlcyAtIDI7IGkrKykge1xyXG4gICAgbGluc3BhY2UucHVzaChsaW5zcGFjZVtsaW5zcGFjZS5sZW5ndGggLSAxXSArIGRpZmYpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGxpbnNwYWNlLmNvbmNhdChjdW1QZXJpbU5vcm0pO1xyXG59XHJcblxyXG4vKipcclxuICogX2dldEN1bXVsYXRpdmVQZXJpbWV0ZXIgLSBSZXR1cm5zIGFuIGFycmF5IG9mIHRoZSB0aGUgY3VtdWxhdGl2ZSBwZXJpbWV0ZXIgYXRcclxuICogZWFjaCBub2RlIG9mIHRoZSBjb250b3VyLlxyXG4gKlxyXG4gKiBAcGFyYW0gIHtvYmplY3R9IGNvbnRvdXIgVGhlIGNvbnRvdXIuXHJcbiAqIEByZXR1cm4ge051bWJlcltdfSAgICAgICAgIEFuIGFycmF5IG9mIHRoZSBjdW11bGF0aXZlIHBlcmltZXRlciBhdCBlYWNoIG5vZGUuXHJcbiAqL1xyXG5mdW5jdGlvbiBfZ2V0Q3VtdWxhdGl2ZVBlcmltZXRlcihjb250b3VyKSB7XHJcbiAgbGV0IGN1bXVsYXRpdmVQZXJpbWV0ZXIgPSBbMF07XHJcblxyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgY29udG91ci54Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBsZW5ndGhPZlNlZ21lbnQgPSBNYXRoLnNxcnQoKGNvbnRvdXIueFtpXSAtIGNvbnRvdXIueFtpIC0gMV0pICoqIDIgKyAoY29udG91ci55W2ldIC0gY29udG91ci55W2kgLSAxXSkgKiogMik7XHJcblxyXG4gICAgY3VtdWxhdGl2ZVBlcmltZXRlci5wdXNoKGN1bXVsYXRpdmVQZXJpbWV0ZXJbaSAtIDFdICsgbGVuZ3RoT2ZTZWdtZW50KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjdW11bGF0aXZlUGVyaW1ldGVyO1xyXG59XHJcblxyXG4vKipcclxuICogX25vcm1hbGlzZWRDdW11bGF0aXZlUGVyaW1ldGVyIC0gTm9ybWFsaXNlcyB0aGUgY3VtdWxhdGl2ZSBwZXJpbWV0ZXIgYXJyYXkuXHJcbiAqXHJcbiAqIEBwYXJhbSAge3R5cGV9IGN1bVBlcmltIEFuIGFycmF5IG9mIHRoZSBjdW11bGF0aXZlIHBlcmltZXRlciBhdCBlYWNoIG9mIGFcclxuICogY29udG91ci5cclxuICogQHJldHVybiB7dHlwZX0gICAgICAgICAgVGhlIG5vcm1hbGlzZWQgYXJyYXkuXHJcbiAqL1xyXG5mdW5jdGlvbiBfbm9ybWFsaXNlZEN1bXVsYXRpdmVQZXJpbWV0ZXIoY3VtUGVyaW0pIHtcclxuICBjb25zdCBjdW1QZXJpbU5vcm0gPSBbXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdW1QZXJpbS5sZW5ndGg7IGkrKykge1xyXG4gICAgY3VtUGVyaW1Ob3JtLnB1c2goY3VtUGVyaW1baV0gLyBjdW1QZXJpbVtjdW1QZXJpbS5sZW5ndGggLSAxXSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY3VtUGVyaW1Ob3JtO1xyXG59XHJcblxyXG4vKipcclxuICogX2dlbmVyYXRlQ2xvc2VkQ29udG91ciAtIEdlbmVyYXRlIGEgY2xvY2t3aXNlIGNvbnRvdXIgb2JqZWN0IGZyb20gdGhlIHBvaW50c1xyXG4gKiBvZiBhIGNsb2Nrd2lzZSBvciBhbnRpLWNsb2Nrd2lzZSBwb2x5Z29uLlxyXG4gKlxyXG4gKiBAcGFyYW0gIHtvYmplY3RbXX0gcG9pbnRzIFRoZSBwb2ludHMgdG8gZ2VuZXJhdGUgdGhlIGNvbnRvdXIgZnJvbS5cclxuICogQHJldHVybiB7b2JqZWN0fSAgICAgICAgICAgVGhlIGdlbmVyYXRlZCBjb250b3VyIG9iamVjdC5cclxuICovXHJcbmZ1bmN0aW9uIF9nZW5lcmF0ZUNsb3NlZENvbnRvdXIocG9pbnRzKSB7XHJcbiAgY29uc3QgYyA9IHtcclxuICAgIHg6IFtdLFxyXG4gICAgeTogW11cclxuICB9O1xyXG5cclxuICAvLyBOT1RFOiBGb3IgeiBwb3NpdGlvbnMgd2Ugb25seSBuZWVkIHRoZSByZWxhdGl2ZSBkaWZmZXJlbmNlIGZvciBpbnRlcnBvbGF0aW9uLCB0aHVzIHVzZSBmcmFtZSBpbmRleCBhcyBaLlxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjLnhbaV0gPSBwb2ludHNbaV0ueDtcclxuICAgIGMueVtpXSA9IHBvaW50c1tpXS55O1xyXG4gIH1cclxuXHJcbiAgLy8gUHVzaCBsYXN0IG5vZGUgdG8gY3JlYXRlIGNsb3NlZCBjb250b3VyLlxyXG4gIGMueC5wdXNoKGMueFswXSk7XHJcbiAgYy55LnB1c2goYy55WzBdKTtcclxuXHJcbiAgX3JldmVyc2VJZkFudGlDbG9ja3dpc2UoYyk7XHJcblxyXG4gIHJldHVybiBjO1xyXG59XHJcblxyXG4vKipcclxuICogX3JldmVyc2VJZkFudGlDbG9ja3dpc2UgLSBJZiB0aGUgY29udG91cidzIG5vZGVzIHJ1biBhbnRpLWNsb2Nrd2lzZSxcclxuICogcmV2ZXJzZSB0aGVtLlxyXG4gKlxyXG4gKiBAcGFyYW0gIHtvYmplY3R9IGNvbnRvdXIgVGhlIGNvbnRvdXIuXHJcbiAqIEByZXR1cm4ge29iamVjdH0gICAgICAgICBUaGUgY29udG91ciwgY29ycmVjdGVkIHRvIGJlIGNsb2Nrd2lzZSBpZiBhcHByb3ByaWF0ZS5cclxuICovXHJcbmZ1bmN0aW9uIF9yZXZlcnNlSWZBbnRpQ2xvY2t3aXNlKGNvbnRvdXIpIHtcclxuICBjb25zdCBsZW5ndGggPSBjb250b3VyLngubGVuZ3RoO1xyXG4gIGNvbnN0IGNvbnRvdXJYTWVhbiA9IGNvbnRvdXIueC5yZWR1Y2UoZ2V0U3VtUmVkdWNlcikgLyBsZW5ndGg7XHJcbiAgbGV0IGNoZWNrU3VtID0gMDtcclxuXHJcbiAgZm9yIChsZXQgayA9IDAsIGkgPSAxLCBqID0gMjsgayA8IGxlbmd0aDsgaysrKSB7XHJcbiAgICBjaGVja1N1bSArPSAoY29udG91ci54W2ldIC0gY29udG91clhNZWFuKSAqIChjb250b3VyLnlbal0gLSBjb250b3VyLnlba10pO1xyXG4gICAgaSsrO1xyXG4gICAgaisrO1xyXG4gICAgaWYgKGkgPj0gbGVuZ3RoKSBpID0gMDtcclxuICAgIGlmIChqID49IGxlbmd0aCkgaiA9IDA7XHJcbiAgfVxyXG5cclxuICBpZiAoY2hlY2tTdW0gPiAwKSB7XHJcbiAgICBjb250b3VyLngucmV2ZXJzZSgpO1xyXG4gICAgY29udG91ci55LnJldmVyc2UoKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBnZXRTdW1SZWR1Y2VyIC0gQSByZWR1Y2VyIGZ1bmN0aW9uIHRoYXQgY2FsY3VsYXRlcyB0aGUgc3VtIG9mIGFuIGFycmF5LlxyXG4gKlxyXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHRvdGFsIFRoZSBydW5uaW5nIHRvdGFsLlxyXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG51bSAgIFRoZSBudW1lcmljYWwgdmFsdWUgb2YgdGhlIGFycmF5IGVsZW1lbnQuXHJcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgVGhlIHVwZGF0ZWQgcnVubmluZyB0b3RhbC5cclxuICovXHJcbmZ1bmN0aW9uIGdldFN1bVJlZHVjZXIodG90YWwsIG51bSkge1xyXG4gIHJldHVybiB0b3RhbCArIG51bTtcclxufVxyXG4iLCJpbXBvcnQgR2VuZXJhbEFuYXRvbXlMaXN0IGZyb20gJy4uL0dlbmVyYWxBbmF0b215bGlzdC5qcyc7XHJcblxyXG5jb25zdCBjYXRlZ29yaWVzID0gR2VuZXJhbEFuYXRvbXlMaXN0LlNlZ21lbnRhdGlvbkNvZGVzLkNhdGVnb3J5O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVNZXRhZGF0YShsYWJlbCwgY2F0ZWdvcnlVSUQgPSAnVC1EMDA1MCcsIHR5cGVVSUQgPSAnVC1EMDA1MCcsIG1vZGlmaWVyVUlEKSB7XHJcbiAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcmllc0kgPT4gY2F0ZWdvcmllc0kuQ29kZVZhbHVlID09PSBjYXRlZ29yeVVJRCk7XHJcbiAgY29uc3QgdHlwZSA9IGNhdGVnb3J5LlR5cGUuZmluZCh0eXBlc0kgPT4gdHlwZXNJLkNvZGVWYWx1ZSA9PT0gdHlwZVVJRCk7XHJcblxyXG4gIGNvbnN0IG1ldGFkYXRhID0ge1xyXG4gICAgU2VnbWVudGVkUHJvcGVydHlDYXRlZ29yeUNvZGVTZXF1ZW5jZToge1xyXG4gICAgICBDb2RlVmFsdWU6IGNhdGVnb3J5LkNvZGVWYWx1ZSxcclxuICAgICAgQ29kaW5nU2NoZW1lRGVzaWduYXRvcjogY2F0ZWdvcnkuQ29kaW5nU2NoZW1lRGVzaWduYXRvcixcclxuICAgICAgQ29kZU1lYW5pbmc6IGNhdGVnb3J5LkNvZGVNZWFuaW5nXHJcbiAgICB9LFxyXG4gICAgU2VnbWVudExhYmVsOiBsYWJlbCxcclxuICAgIFNlZ21lbnRBbGdvcml0aG1UeXBlOiAnTUFOVUFMJyxcclxuXHJcbiAgICBTZWdtZW50ZWRQcm9wZXJ0eVR5cGVDb2RlU2VxdWVuY2U6IHtcclxuICAgICAgQ29kZVZhbHVlOiB0eXBlLkNvZGVWYWx1ZSxcclxuICAgICAgQ29kaW5nU2NoZW1lRGVzaWduYXRvcjogdHlwZS5Db2RpbmdTY2hlbWVEZXNpZ25hdG9yLFxyXG4gICAgICBDb2RlTWVhbmluZzogdHlwZS5Db2RlTWVhbmluZ1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGlmIChtb2RpZmllclVJRCkge1xyXG4gICAgY29uc3QgbW9kZmllciA9IHR5cGUuTW9kaWZpZXIuZmluZChtb2RpZmllckkgPT4gbW9kaWZpZXJJLkNvZGVWYWx1ZSA9PT0gbW9kaWZpZXJVSUQpO1xyXG5cclxuICAgIG1ldGFkYXRhLlNlZ21lbnRlZFByb3BlcnR5VHlwZUNvZGVTZXF1ZW5jZS5TZWdtZW50ZWRQcm9wZXJ0eVR5cGVNb2RpZmllckNvZGVTZXF1ZW5jZSA9IHtcclxuICAgICAgQ29kZVZhbHVlOiBtb2RmaWVyLkNvZGVWYWx1ZSxcclxuICAgICAgQ29kaW5nU2NoZW1lRGVzaWduYXRvcjogbW9kZmllci5Db2RpbmdTY2hlbWVEZXNpZ25hdG9yLFxyXG4gICAgICBDb2RlTWVhbmluZzogbW9kZmllci5Db2RlTWVhbmluZ1xyXG4gICAgfTtcclxuXHJcbiAgICBtZXRhZGF0YS5SZWNvbW1lbmRlZERpc3BsYXlDSUVMYWJWYWx1ZSA9IG1vZGZpZXIucmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIG1ldGFkYXRhLlJlY29tbWVuZGVkRGlzcGxheUNJRUxhYlZhbHVlID0gdHlwZS5yZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBtZXRhZGF0YTtcclxufVxyXG4iLCIvKipcclxuICogR2VuZXJhdGVzIGEgVVVJRCBmb3IgdGhlIGVuYWJsZWRFbGVtZW50LlxyXG4gKiBAZXhwb3J0IEBwdWJsaWMgQG1ldGhvZFxyXG4gKiBAbmFtZSBnZW5lcmF0ZVVJRFxyXG4gKlxyXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSBVVUlELlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS84ODA5NDcyLzkyMDgzMjAgUHVibGljIERvbWFpbi9NSVRcclxuICAvKiBlc2xpbnQgbm8tYml0d2lzZTogW1wiZXJyb3JcIiwgeyBcImFsbG93XCI6IFtcIiZcIixcInxcIl0gfV0gKi9cclxuICBsZXQgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cclxuICBpZiAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcGVyZm9ybWFuY2Uubm93ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBkICs9IHBlcmZvcm1hbmNlLm5vdygpOyAvLyBVc2UgaGlnaC1wcmVjaXNpb24gdGltZXIgaWYgYXZhaWxhYmxlXHJcbiAgfVxyXG4gIHJldHVybiAneC54LngueC54LngueHh4eC54eHgueC54Lnh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xyXG4gICAgY29uc3QgciA9IChkICsgTWF0aC5yYW5kb20oKSAqIDE2KSAlIDE2IHwgMDtcclxuXHJcbiAgICBkID0gTWF0aC5mbG9vcihkIC8gMTYpO1xyXG4gICAgcmV0dXJuIChjID09PSAneCcgPyByIDogKHIgJiAweDMpIHwgMHg4KS50b1N0cmluZygxNik7XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IGNvcm5lcnN0b25lIGZyb20gJ2Nvcm5lcnN0b25lLXRvb2xzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFNlcmllc0luc3RhbmNlVWlkRnJvbUVuYWJsZWRFbGVtZW50KGVuYWJsZWRFbGVtZW50KSB7XHJcbiAgaWYgKCFlbmFibGVkRWxlbWVudCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaW1hZ2VJZCA9IGVuYWJsZWRFbGVtZW50LmltYWdlLmltYWdlSWQ7XHJcbiAgY29uc3QgZ2VuZXJhbFNlcmllc01vZHVsZSA9IGNvcm5lcnN0b25lLm1ldGFEYXRhLmdldCgnZ2VuZXJhbFNlcmllc01vZHVsZScsIGltYWdlSWQpO1xyXG5cclxuICByZXR1cm4gZ2VuZXJhbFNlcmllc01vZHVsZS5zZXJpZXNJbnN0YW5jZVVJRDtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY29ybmVyc3RvbmVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jb3JuZXJzdG9uZV9tYXRoX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Nvcm5lcnN0b25lX3Rvb2xzX187Il0sInNvdXJjZVJvb3QiOiIifQ==