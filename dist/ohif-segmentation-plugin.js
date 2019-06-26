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

var _init = _interopRequireWildcard(__webpack_require__(/*! ./init.js */ "./src/init.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// import SegmentationMenu from './components/segmentationMenu/SegmentationMenu.js';
// import RoiContourMenu from './components/roiContourMenu/RoiContourMenu.js';
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
      actions: [],
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
    console.log('in getToolbarModule:');
    console.log(_init.TOOL_NAMES);
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
          commandName: 'setToolActive',
          commandOptions: {
            toolName: _init.TOOL_NAMES.FREEHAND_ROI_3D_TOOL
          }
        }, {
          id: 'FreehandRoiSculptor',
          label: 'Sculpt',
          icon: 'level',
          type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
          commandName: 'setToolActive',
          commandOptions: {
            toolName: _init.TOOL_NAMES.FREEHAND_ROI_3D_SCULPTOR_TOOL
          }
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
          commandName: 'setToolActive',
          commandOptions: {
            toolName: _init.TOOL_NAMES.BRUSH_3D_TOOL
          }
        }, {
          id: 'Brush3DHUGatedTool',
          label: 'Smart CT',
          icon: 'level',
          type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
          commandName: 'setToolActive',
          commandOptions: {
            toolName: _init.TOOL_NAMES.BRUSH_3D_HU_GATED_TOOL
          }
        }, {
          id: 'Brush3DAutoGatedTool',
          label: 'Auto',
          icon: 'level',
          type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
          commandName: 'setToolActive',
          commandOptions: {
            toolName: _init.TOOL_NAMES.BRUSH_3D_AUTO_GATED_TOOL
          }
        }]
      }],
      defaultContext: 'ACTIVE_VIEWPORT::CORNERSTONE'
    };
  },

  /**
   * Not yet implemented
   */
  getPanelModule: function getPanelModule() {
    /*
    return {
      menuOptions: [
        {
          icon: 'th-list',
          label: 'Segments',
          target: 'segment-panel'
        }
      ],
      components: [
        {
          id: 'segment-panel',
          component:
        }
      ],
      defaultContext: ['VIEWER']
    };
    */
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
exports.TOOL_NAMES = void 0;

var _cornerstoneTools = __webpack_require__(/*! cornerstone-tools */ "cornerstone-tools");

var _freehand3DModule = _interopRequireDefault(__webpack_require__(/*! ./modules/freehand3DModule.js */ "./src/modules/freehand3DModule.js"));

var _extendBrushModule = _interopRequireDefault(__webpack_require__(/*! ./modules/extendBrushModule.js */ "./src/modules/extendBrushModule.js"));

var _Brush3DTool = _interopRequireDefault(__webpack_require__(/*! ./tools/Brush3DTool.js */ "./src/tools/Brush3DTool.js"));

var _Brush3DHUGatedTool = _interopRequireDefault(__webpack_require__(/*! ./tools/Brush3DHUGatedTool.js */ "./src/tools/Brush3DHUGatedTool.js"));

var _Brush3DAutoGatedTool = _interopRequireDefault(__webpack_require__(/*! ./tools/Brush3DAutoGatedTool.js */ "./src/tools/Brush3DAutoGatedTool.js"));

var _FreehandRoi3DTool = _interopRequireDefault(__webpack_require__(/*! ./tools/FreehandRoi3DTool.js */ "./src/tools/FreehandRoi3DTool.js"));

var _FreehandRoi3DSculptorTool = _interopRequireDefault(__webpack_require__(/*! ./tools/FreehandRoi3DSculptorTool.js */ "./src/tools/FreehandRoi3DSculptorTool.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TOOL_NAMES = {};
exports.TOOL_NAMES = TOOL_NAMES;
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
  }); // TODO -> Clean this up a bit after PW.

  TOOL_NAMES.FREEHAND_ROI_3D_TOOL = config.freehandRoi3DTool;
  TOOL_NAMES.FREEHAND_ROI_3D_SCULPTOR_TOOL = config.freehandRoi3DSculptorTool;
  TOOL_NAMES.BRUSH_3D_TOOL = config.brush3dToolName;
  TOOL_NAMES.BRUSH_3D_AUTO_GATED_TOOL = config.brush3DAutoGatedTool;
  TOOL_NAMES.BRUSH_3D_HU_GATED_TOOL = config.brush3DHUGatedToolName;
  console.log(config);
  console.log(TOOL_NAMES);
}

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

var _cornerstoneTools = _interopRequireDefault(__webpack_require__(/*! cornerstone-tools */ "cornerstone-tools"));

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

var _cornerstoneTools$imp = _cornerstoneTools.default.importInternalModule('util/brushUtils'),
    getCircle = _cornerstoneTools$imp.getCircle;

var brushModule = _cornerstoneTools.default.store.modules.brush;

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
        freehand3DStore.setters.ROIContourAndSetIndexActive(seriesInstanceUid, 'DEFAULT', 'Unnamed Lesion');
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

var _cornerstoneCore = _interopRequireDefault(__webpack_require__(/*! cornerstone-core */ "cornerstone-core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSeriesInstanceUidFromEnabledElement(enabledElement) {
  if (!enabledElement) {
    return;
  }

  var imageId = enabledElement.image.imageId;

  var generalSeriesModule = _cornerstoneCore.default.metaData.get('generalSeriesModule', imageId);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vLi9zcmMvR2VuZXJhbEFuYXRvbXlsaXN0LmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vLi9zcmMvaW5pdC5qcyIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vLi9zcmMvbW9kdWxlcy9leHRlbmRCcnVzaE1vZHVsZS5qcyIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vLi9zcmMvbW9kdWxlcy9mcmVlaGFuZDNETW9kdWxlLmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy90b29scy9CcnVzaDNEQXV0b0dhdGVkVG9vbC5qcyIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vLi9zcmMvdG9vbHMvQnJ1c2gzREhVR2F0ZWRUb29sLmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy90b29scy9CcnVzaDNEVG9vbC5qcyIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vLi9zcmMvdG9vbHMvRnJlZWhhbmRSb2kzRFNjdWxwdG9yVG9vbC5qcyIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vLi9zcmMvdG9vbHMvRnJlZWhhbmRSb2kzRFRvb2wuanMiLCJ3ZWJwYWNrOi8vb2hpZi1zZWdtZW50YXRpb24tcGx1Z2luLy4vc3JjL3Rvb2xzL24tZGltZW5zaW9uYWwtZmxvb2QtZmlsbC5qcyIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vLi9zcmMvdXRpbC9jbGFzc2VzL1BvbHlnb24uanMiLCJ3ZWJwYWNrOi8vb2hpZi1zZWdtZW50YXRpb24tcGx1Z2luLy4vc3JjL3V0aWwvZnJlZWhhbmRJbnRlcnBvbGF0ZS9nZW5lcmF0ZUludGVycG9sYXRpb25EYXRhLmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy91dGlsL2ZyZWVoYW5kSW50ZXJwb2xhdGUvaW50ZXJwb2xhdGUuanMiLCJ3ZWJwYWNrOi8vb2hpZi1zZWdtZW50YXRpb24tcGx1Z2luLy4vc3JjL3V0aWwvZ2VuZXJhdGVCcnVzaE1ldGFkYXRhLmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy91dGlsL2dlbmVyYXRlVUlELmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy91dGlsL2dldFNlcmllc0luc3RhbmNlVWlkRnJvbUVuYWJsZWRFbGVtZW50LmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi9leHRlcm5hbCBcImNvcm5lcnN0b25lLWNvcmVcIiIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vZXh0ZXJuYWwgXCJjb3JuZXJzdG9uZS1tYXRoXCIiLCJ3ZWJwYWNrOi8vb2hpZi1zZWdtZW50YXRpb24tcGx1Z2luL2V4dGVybmFsIFwiY29ybmVyc3RvbmUtdG9vbHNcIiJdLCJuYW1lcyI6WyJqc29uIiwicGFyc2VkSnNvbiIsIkpTT04iLCJwYXJzZSIsIlRPT0xCQVJfQlVUVE9OX1RZUEVTIiwiQ09NTUFORCIsIlNFVF9UT09MX0FDVElWRSIsImlkIiwicHJlUmVnaXN0cmF0aW9uIiwiY29uZmlndXJhdGlvbiIsImdldENvbW1hbmRzTW9kdWxlIiwiZGVmYXVsdENvbnRleHQiLCJhY3Rpb25zIiwiZGVmaW5pdGlvbnMiLCJnZXRUb29sYmFyTW9kdWxlIiwiY29uc29sZSIsImxvZyIsImxhYmVsIiwiaWNvbiIsImJ1dHRvbnMiLCJ0eXBlIiwiY29tbWFuZE5hbWUiLCJjb21tYW5kT3B0aW9ucyIsInRvb2xOYW1lIiwiRlJFRUhBTkRfUk9JXzNEX1RPT0wiLCJGUkVFSEFORF9ST0lfM0RfU0NVTFBUT1JfVE9PTCIsIkJSVVNIXzNEX1RPT0wiLCJCUlVTSF8zRF9IVV9HQVRFRF9UT09MIiwiQlJVU0hfM0RfQVVUT19HQVRFRF9UT09MIiwiZ2V0UGFuZWxNb2R1bGUiLCJUT09MX05BTUVTIiwibW9kdWxlcyIsImRlZmF1bHRDb25maWciLCJtYXhSYWRpdXMiLCJob2xlRmlsbCIsImhvbGVGaWxsUmFuZ2UiLCJzdHJheVJlbW92ZSIsInN0cmF5UmVtb3ZlUmFuZ2UiLCJpbnRlcnBvbGF0ZSIsInNob3dGcmVlaGFuZFN0YXRzIiwiYnJ1c2gzZFRvb2xOYW1lIiwiYnJ1c2gzREhVR2F0ZWRUb29sTmFtZSIsImJydXNoM0RBdXRvR2F0ZWRUb29sIiwiZnJlZWhhbmRSb2kzRFRvb2wiLCJmcmVlaGFuZFJvaTNEU2N1bHB0b3JUb29sIiwiZ2F0ZXMiLCJuYW1lIiwicmFuZ2UiLCJpbml0IiwiYnJ1c2hNb2R1bGUiLCJicnVzaCIsImNvbmZpZyIsIk9iamVjdCIsImFzc2lnbiIsImZyZWVoYW5kM0RTdG9yZSIsImZyZWVoYW5kM0QiLCJzdGF0ZSIsImRpc3BsYXlTdGF0cyIsInJlZmVyZW5jZWRUb29sTmFtZSIsImV4dGVuZEJydXNoTW9kdWxlIiwiYnJ1c2hTdGF0ZSIsImdldHRlcnMiLCJzZXR0ZXJzIiwiYWN0aXZlR2F0ZSIsImFjdGl2ZUdhdGVSYW5nZSIsImdhdGVJbmRleCIsImZpbmRJbmRleCIsImVsZW1lbnQiLCJjdXN0b21HYXRlUmFuZ2UiLCJtaW4iLCJtYXgiLCJpbXBvcnRNZXRhZGF0YSIsInNlcmllc0luc3RhbmNlVWlkIiwiaW1wb3J0IiwibWV0YWRhdGEiLCJpbXBvcnRNb2RpZmllZCIsIm1vZGlmaWVkIiwic2VyaWVzQ29sbGVjdGlvbiIsImNoZWNrIiwib2JqZWN0IiwiRXJyb3IiLCJnZXRTZXJpZXMiLCJmaW5kIiwic2VyaWVzIiwidWlkIiwiZ2V0U3RydWN0dXJlU2V0Iiwic3RydWN0dXJlU2V0VWlkIiwic3RydWN0dXJlU2V0Q29sbGVjdGlvbiIsInN0cnVjdHVyZVNldCIsImdldFJPSUNvbnRvdXIiLCJST0lDb250b3VyVWlkIiwiUk9JQ29udG91ckNvbGxlY3Rpb24iLCJST0lDb250b3VyIiwiZ2V0Uk9JQ29udG91ckluZGV4IiwiZ2V0QWN0aXZlU3RydWN0dXJlU2V0SW5kZXgiLCJhY3RpdmVTdHJ1Y3R1cmVTZXRJbmRleCIsImdldEFjdGl2ZVJPSUNvbnRvdXJJbmRleCIsImFjdGl2ZVJPSUNvbnRvdXJJbmRleCIsImdldEFjdGl2ZVJPSUNvbnRvdXIiLCJ1bmRlZmluZWQiLCJzZXRTZXJpZXMiLCJwdXNoIiwic2V0U3RydWN0dXJlU2V0Iiwib3B0aW9ucyIsImlzTG9ja2VkIiwidmlzaWJsZSIsInNldFJPSUNvbnRvdXIiLCJjb2xvciIsImdldE5leHRDb2xvciIsInBvbHlnb25Db3VudCIsInNldFJPSUNvbnRvdXJBbmRTZXRJbmRleEFjdGl2ZSIsImluZGV4IiwibGVuZ3RoIiwic2V0RGVsZXRlUk9JRnJvbVN0cnVjdHVyZVNldCIsIlJPSUNvbnRvdXJJbmRleCIsInNwbGljZSIsInNldFN0cnVjdHVyZVNldE5hbWUiLCJzZXREZWxldGVTdHJ1Y3R1cmVTZXQiLCJzdHJ1Y3R1cmVTZXRJbmRleCIsInNldFJPSUNvbnRvdXJOYW1lIiwic2V0QWN0aXZlU3RydWN0dXJlU2V0SW5kZXgiLCJzZXRBY3RpdmVTdHJ1Y3R1cmVTZXQiLCJzZXRBY3RpdmVST0lDb250b3VySW5kZXgiLCJzZXRBY3RpdmVST0lDb250b3VyIiwiaW5jcmVtZW50UG9seWdvbkNvdW50IiwiZGVjcmVtZW50UG9seWdvbkNvdW50IiwiYWN0aXZlUk9JQ29udG91ciIsIlJPSUNvbnRvdXJBbmRTZXRJbmRleEFjdGl2ZSIsImRlbGV0ZVJPSUZyb21TdHJ1Y3R1cmVTZXQiLCJkZWxldGVTdHJ1Y3R1cmVTZXQiLCJzdHJ1Y3R1cmVTZXROYW1lIiwiUk9JQ29udG91ck5hbWUiLCJhY3RpdmVTdHJ1Y3R1cmVTZXQiLCJ0b2dnbGVJbnRlcnBvbGF0ZSIsInRvZ2dsZURpc3BsYXlTdGF0cyIsImVuYWJsZWRFbGVtZW50Q2FsbGJhY2siLCJlbmFibGVkRWxlbWVudCIsImdldEVuYWJsZWRFbGVtZW50IiwiaW1hZ2UiLCJpbXBvcnRDb2xvcnMiLCJjdXJyZW50Q29sb3JJbmRleCIsImltcG9ydEludGVybmFsTW9kdWxlIiwiZ2V0Q2lyY2xlIiwic3RvcmUiLCJCcnVzaDNEQXV0b0dhdGVkVG9vbCIsImluaXRpYWxDb25maWd1cmF0aW9uIiwiZXZ0IiwiX3NldEN1c3RvbUdhdGUiLCJfc3RhcnRQYWludGluZyIsImV2ZW50RGF0YSIsImRldGFpbCIsInJvd3MiLCJjb2x1bW5zIiwiY3VycmVudFBvaW50cyIsIngiLCJ5IiwicmFkaXVzIiwiaW1hZ2VQaXhlbERhdGEiLCJnZXRQaXhlbERhdGEiLCJyZXNjYWxlU2xvcGUiLCJzbG9wZSIsInJlc2NhbGVJbnRlcmNlcHQiLCJpbnRlcmNlcHQiLCJjaXJjbGUiLCJsbyIsImhpIiwiaSIsInBpeGVsVmFsdWUiLCJnYXRlIiwiZ2F0ZVZhbHVlcyIsImdhdGVkQ2lyY2xlQXJyYXkiLCJfY2xlYW5HYXRlZENpcmNsZSIsImRyYXdCcnVzaFBpeGVscyIsIkJydXNoM0RIVUdhdGVkVG9vbCIsInBvaW50ZXJBcnJheSIsIl9nYXRlQ2lyY2xlIiwicGFpbnRFdmVudERhdGEiLCJsYWJlbG1hcDNEIiwiY3VycmVudEltYWdlSWRJbmRleCIsImFjdGl2ZUxhYmVsbWFwSW5kZXgiLCJzaG91bGRFcmFzZSIsInRyaWdnZXJFdmVudCIsIkxBQkVMTUFQX01PRElGSUVEIiwidXBkYXRlSW1hZ2UiLCJnYXRlUmFuZ2UiLCJkYXRhIiwiZWRnZVBpeGVscyIsInhTaXplIiwieVNpemUiLCJqIiwiX2dldEJvdW5kaW5nQm94T2ZDaXJjbGUiLCJfYm94R2F0ZWRDaXJjbGUiLCJnZXR0ZXIiLCJfZmxvb2RGaWxsRW1wdHlSZWdpb25zRnJvbUVkZ2VzIiwiX2ZpbmRIb2xlc0FuZFJlZ2lvbnMiLCJob2xlcyIsInJlZ2lvbnMiLCJsYXJnZXN0UmVnaW9uQXJlYSIsIl9nZXRBcmVhT2ZMYXJnZXN0UmVnaW9uIiwiciIsInJlZ2lvbiIsInAiLCJob2xlIiwiZmlsbGVkR2F0ZWRDaXJjbGVBcnJheSIsIlVpbnQ4Q2xhbXBlZEFycmF5IiwiX2dldEVkZ2VQaXhlbHMiLCJyZXN1bHQiLCJzZWVkIiwiZmxvb2RlZCIsImsiLCJCcnVzaDNEVG9vbCIsImdldEFuZENhY2hlTGFiZWxtYXAyRCIsIl9pc0N0cmxEb3duIiwiYWx3YXlzRXJhc2VPbkNsaWNrIiwic2VnbWVudEluZGV4IiwiYWN0aXZlU2VnbWVudEluZGV4IiwiX3BhaW50IiwiX2RyYXdpbmciLCJfc3RhcnRMaXN0ZW5pbmdGb3JNb3VzZVVwIiwiRnJlZWhhbmRSb2kzRFNjdWxwdG9yVG9vbCIsImdldERlZmF1bHRGcmVlaGFuZFNjdWxwdGVyTW91c2VUb29sQ29uZmlndXJhdGlvbiIsImFjdGl2ZU1vdXNlVXBDYWxsYmFjayIsImJpbmQiLCJjbG9zZXN0VG9vbEluZGV4IiwiX2dldENsb3Nlc3RGcmVlaGFuZFRvb2xPbkVsZW1lbnQiLCJ0b29sU3RhdGUiLCJ0b29sRGF0YSIsInJlZmVyZW5jZWRTdHJ1Y3R1cmVTZXQiLCJob3ZlckNvbG9yIiwicmVmZXJlbmNlZFJPSUNvbnRvdXIiLCJjdXJyZW50VG9vbCIsIl9hY3RpdmUiLCJpc011bHRpUGFydFRvb2xBY3RpdmUiLCJfZ2V0TW91c2VMb2NhdGlvbiIsIl9pbnZhbGlkYXRlVG9vbERhdGEiLCJtb3VzZVVwUmVuZGVyIiwiX2RlYWN0aXZhdGVTY3VscHQiLCJwcmV2ZW50UHJvcGFnYXRpb24iLCJpbnZhbGlkYXRlZCIsImludGVycG9sYXRlZCIsIm1vdXNlTG9jYXRpb24iLCJoYW5kbGVzIiwic3RhcnQiLCJoaWdobGlnaHQiLCJhY3RpdmUiLCJtaW5TcGFjaW5nIiwiZHJhZ0NvbG9yIiwiZ2V0QWN0aXZlQ29sb3IiLCJnZXRUb29sQ29sb3IiLCJzaG93Q3Vyc29yT25Ib3ZlciIsImxpbWl0UmFkaXVzT3V0c2lkZVJlZ2lvbiIsImhvdmVyQ3Vyc29yRmFkZUFscGhhIiwiaG92ZXJDdXJzb3JGYWRlRGlzdGFuY2UiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImluc2VydE9yRGVsZXRlIiwiZnJlZWhhbmRBcmVhIiwiY2FsY3VsYXRlRnJlZWhhbmRTdGF0aXN0aWNzIiwiZHJhdyIsImRyYXdKb2luZWRMaW5lcyIsImRyYXdIYW5kbGVzIiwiZHJhd0xpbmtlZFRleHRCb3giLCJtb3ZlSGFuZGxlTmVhckltYWdlUG9pbnQiLCJnZXROZXdDb250ZXh0IiwibnVtYmVyc1dpdGhDb21tYXMiLCJwb2ludEluc2lkZUJvdW5kaW5nQm94IiwiY2FsY3VsYXRlU1VWIiwiRnJlZWhhbmRSb2kzRFRvb2wiLCJkZWZhdWx0RnJlZWhhbmRDb25maWd1cmF0aW9uIiwiYWx3YXlzU2hvd0hhbmRsZXMiLCJfZnJlZWhhbmQzRFN0b3JlIiwiX29uTWVhc3VyZW1lbnRSZW1vdmVkIiwiX2RyYXdpbmdNb3VzZVVwQ2FsbGJhY2siLCJnb29kRXZlbnREYXRhIiwiZXJyb3IiLCJtZWFzdXJlbWVudERhdGEiLCJwb2ludHMiLCJ0ZXh0Qm94IiwiaGFzTW92ZWQiLCJtb3Zlc0luZGVwZW5kZW50bHkiLCJkcmF3bkluZGVwZW5kZW50bHkiLCJhbGxvd2VkT3V0c2lkZUltYWdlIiwiaGFzQm91bmRpbmdCb3giLCJpbnRlcmFjdGlvblR5cGUiLCJfYWRkQW5kU2V0Vm9sdW1lSWZOb1ZvbHVtZXMiLCJfc3RhcnREcmF3aW5nIiwiX2FkZFBvaW50IiwiY29vcmRzIiwiaGFuZGxlQ2FudmFzIiwiZGlzdGFuY2UiLCJjdXJyZW50VGFyZ2V0IiwibmVhcmJ5IiwiX3BvaW50TmVhckhhbmRsZUFsbFRvb2xzIiwiZXZlbnQiLCJjdHJsS2V5IiwiaGFuZGxlTmVhcmJ5IiwiY2FsbCIsInRvb2xJbmRleCIsImhhbmRsZSIsIm1ldGFLZXkiLCJfc3dpdGNoUk9JQ29udG91ciIsImRyYWdPcmlnaW4iLCJfbW9kaWZ5aW5nIiwiY3VycmVudEhhbmRsZSIsIl9hY3RpdmF0ZU1vZGlmeSIsInNlcmllc01vZHVsZSIsImdldCIsImltYWdlSWQiLCJtb2RhbGl0eSIsImNvbnRleHQiLCJjYW52YXNDb250ZXh0IiwiY2FudmFzIiwibGluZVdpZHRoIiwiZ2V0VG9vbFdpZHRoIiwiaXNST0lBY3RpdmUiLCJnZXRDb2xvcklmQWN0aXZlIiwiZmlsbENvbG9yIiwiaW52YWxpZEhhbmRsZVBsYWNlbWVudCIsImludmFsaWRDb2xvciIsImdldEZpbGxDb2xvciIsImdsb2JhbEFscGhhIiwiaW50ZXJwb2xhdGVkQWxwaGEiLCJsaW5lcyIsInBvbHlCb3VuZGluZ0JveCIsImZpbGwiLCJoYW5kbGVSYWRpdXMiLCJpbnRlcnBvbGF0ZWRIYW5kbGVSYWRpdXMiLCJhY3RpdmVIYW5kbGVSYWRpdXMiLCJjYW5Db21wbGV0ZSIsImNvbXBsZXRlSGFuZGxlUmFkaXVzIiwiYXJlYSIsIm1lYW5TdGREZXYiLCJtZWFuU3RkRGV2U1VWIiwiYm91bmRzIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwidG9wIiwiTWF0aCIsIndpZHRoIiwiYWJzIiwiaGVpZ2h0IiwicGl4ZWxzIiwibWVhbiIsInN0ZERldiIsImlzTmFOIiwiY29sdW1uUGl4ZWxTcGFjaW5nIiwicm93UGl4ZWxTcGFjaW5nIiwic2NhbGluZyIsInRleHQiLCJ0ZXh0Qm94VGV4dCIsInRleHRCb3hBbmNob3JQb2ludHMiLCJ0ZXh0TGluZXMiLCJtb1N1ZmZpeCIsIm1lYW5UZXh0IiwidG9GaXhlZCIsInN0ZERldlRleHQiLCJTVVZ0ZXh0Iiwic3VmZml4IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYXJlYVRleHQiLCJfZGVhY3RpdmF0ZURyYXciLCJ0b29sVHlwZSIsIl9jbG9zZVRvb2xJZkRyYXdpbmciLCJfYWRkTWVhc3VyZW1lbnRSZW1vdmVkTGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiTUVBU1VSRU1FTlRfUkVNT1ZFRCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzcGFjaW5nIiwiY29tcGxldGVIYW5kbGVSYWRpdXNUb3VjaCIsIm1vZHVsZSIsImV4cG9ydHMiLCJvbkZsb29kIiwib25Cb3VuZGFyeSIsImVxdWFscyIsImRpYWdvbmFscyIsInN0YXJ0Tm9kZSIsInBlcm11dGF0aW9ucyIsInN0YWNrIiwidmlzaXRzIiwiaW5pdGlhbGl6ZSIsIm5vb3AiLCJkZWZhdWx0RXF1YWxzIiwicHJ1bmVkUGVybXV0YXRpb25zIiwibWFpbiIsImN1cnJlbnRBcmdzIiwiZmxvb2QiLCJwb3AiLCJib3VuZGFyaWVzIiwiam9iIiwiZ2V0QXJncyIsInByZWxldGdzIiwicHJldmlvdXNBcmdzIiwidmlzaXRlZCIsIm1hcmtBc1Zpc2l0ZWQiLCJtZW1iZXIiLCJtYXJrQXNGbG9vZGVkIiwicHVzaEFkamFjZW50IiwibWFya0FzQm91bmRhcnkiLCJrZXkiLCJub2RlIiwic2FmZWx5IiwiYXBwbHkiLCJwZXJtIiwibmV4dEFyZ3MiLCJzbGljZSIsImYiLCJhcmdzIiwiYSIsImIiLCJwZXJtdXRlIiwiZmlsdGVyIiwiY291bnQiLCJjb3VudE5vblplcm9lcyIsInBlcm1zIiwicGVybXV0YXRpb24iLCJzdHJpbmciLCJzcGxpdCIsIm1hcCIsImMiLCJwYXJzZUludCIsInBvdyIsImxwYWQiLCJ0b1N0cmluZyIsImNoYXJhY3RlciIsImFycmF5IiwiQXJyYXkiLCJwYWQiLCJqb2luIiwiaGFzT3duUHJvcGVydHkiLCJ1bnNoaWZ0IiwiUG9seWdvbiIsInNvcEluc3RhbmNlVWlkIiwicG9seWdvblVpZCIsImZyYW1lTnVtYmVyIiwiX3BvbHlQb2ludHMiLCJfZGVlcENvcHlQb2ludHMiLCJfc29wSW5zdGFuY2VVaWQiLCJfc2VyaWVzSW5zdGFuY2VVaWQiLCJfc3RydWN0dXJlU2V0VWlkIiwiX1JPSUNvbnRvdXJVaWQiLCJfcG9seWdvblVpZCIsIl9mcmFtZU51bWJlciIsIl9pbnRlcnBvbGF0ZWQiLCJwb2x5UG9pbnRzIiwiaXNaIiwieiIsImltcG9ydFR5cGUiLCJzb3BJbnN0YW5jZVVJRCIsIl9nZW5lcmF0ZVBvaW50cyIsInRvQmVTY2FsZWQiLCJfZGVlcENvcHlPbmVQb2ludCIsInBvaW50IiwiZ2xvYmFsVG9vbFN0YXRlTWFuYWdlciIsImltYWdlSWRzIiwiX2dldEltYWdlSWRzT2ZBY3RpdmVTZXJpZXMiLCJST0lDb250b3VyRGF0YSIsIl9nZXRST0lDb250b3VyRGF0YSIsImV4dGVudCIsIl9nZXRFeHRlbnRPZlJlZ2lvbiIsInNsaWNlRWRpdGVkIiwiX2dldFNsaWNlUG9zaXRpb25PZlRvb2xEYXRhIiwiaW50ZXJwb2xhdGlvbkxpc3QiLCJfc2xpY2VOZWVkc0ludGVycG9sYXRpbmciLCJjb250b3VyUGFpciIsIl9nZXRCb3VuZGluZ1BhaXIiLCJfYXBwZW5kaW50ZXJwb2xhdGlvbkxpc3QiLCJjb250b3VycyIsInN0YWNrVG9vbFN0YXRlIiwidG9vbFN0YXRlTWFuYWdlciIsInNhdmVUb29sU3RhdGUiLCJpbWFnZVRvb2xTdGF0ZSIsImZyZWVoYW5kUm9pIiwiY29udG91ciIsImNvbnRvdXJzT25TbGljZSIsInNsaWNlSW5kZXgiLCJwYWlyIiwibGlzdCIsImNhbkludGVycG9sYXRlIiwiZFAiLCJfbGluZWFybHlJbnRlcnBvbGF0ZUJldHdlZW4iLCJpbmRpY2llcyIsImMxIiwiX2dlbmVyYXRlQ2xvc2VkQ29udG91ciIsImMyIiwiX2dlbmVyYXRlSW50ZXJwb2xhdGlvbkNvbnRvdXJQYWlyIiwiYzFJbnRlcnAiLCJjMkludGVycCIsImZvckVhY2giLCJfbGluZWFybHlJbnRlcnBvbGF0ZUNvbnRvdXIiLCJjMUhhc01vcmVOb2RlcyIsInpJbnRlcnAiLCJpbnRlcnBvbGF0ZWQyRENvbnRvdXIiLCJfZ2VuZXJhdGVJbnRlcnBvbGF0ZWRPcGVuQ29udG91ciIsImMxTWV0YWRhdGEiLCJfZWRpdEludGVycG9sYXRlZENvbnRvdXIiLCJfYWRkSW50ZXJwb2xhdGVkQ29udG91ciIsImN1bVBlcmltMSIsIl9nZXRDdW11bGF0aXZlUGVyaW1ldGVyIiwiY3VtUGVyaW0yIiwiaW50ZXJwTm9kZXMiLCJjZWlsIiwiY3VtUGVyaW0xTm9ybSIsIl9ub3JtYWxpc2VkQ3VtdWxhdGl2ZVBlcmltZXRlciIsImN1bVBlcmltMk5vcm0iLCJudW1Ob2RlczEiLCJudW1Ob2RlczIiLCJwZXJpbTFJbnRlcnAiLCJfZ2V0SW50ZXJwb2xhdGVkUGVyaW0iLCJwZXJpbTJJbnRlcnAiLCJwZXJpbTFJbmQiLCJfZ2V0SW5kaWNhdG9yQXJyYXkiLCJwZXJpbTJJbmQiLCJub2Rlc1BlclNlZ21lbnQxIiwiX2dldE5vZGVzUGVyU2VnbWVudCIsIm5vZGVzUGVyU2VnbWVudDIiLCJjMWkiLCJfZ2V0U3VwZXJTYW1wbGVkQ29udG91ciIsImMyaSIsIl9zaGlmdFN1cGVyU2FtcGxlZENvbnRvdXJJblBsYWNlIiwiX3JlZHVjZUNvbnRvdXJzVG9PcmlnaW5Ob2RlcyIsInJlZmVyZW5jZWRUb29sRGF0YSIsInBvbHlnb24iLCJnZXRGcmVlaGFuZFRvb2xEYXRhIiwidG9vbERhdGFJbmRleCIsIm9sZFBvbHlnb24iLCJ1cGRhdGVkUG9seWdvbiIsImMxaXIiLCJjMmlyIiwiY0ludGVycCIsIkkiLCJjMWlMZW5ndGgiLCJvcHRpbWFsIiwic3RhcnRpbmdOb2RlIiwidG90YWxTcXVhcmVkWFlMZW5ndGhzIiwiSW5maW5pdHkiLCJpdHRlcmF0aW9uIiwiX3NoaWZ0Q2lyY3VsYXJBcnJheSIsImFyciIsImZsb29yIiwibm9kZXNQZXJTZWdtZW50IiwiY2kiLCJuIiwieFNwYWNpbmciLCJ5U3BhY2luZyIsInBlcmltSW50ZXJwIiwicGVyaW1JbmQiLCJpZHgiLCJzb3J0IiwicGVyaW1JbmRTb3J0ZWQiLCJpbmRpY2llc09mT3JpZ2luTm9kZXMiLCJyZWR1Y2UiLCJlbGVtZW50VmFsdWUiLCJudW1Ob2RlcyIsImN1bVBlcmltTm9ybSIsImRpZmYiLCJsaW5zcGFjZSIsImNvbmNhdCIsImN1bXVsYXRpdmVQZXJpbWV0ZXIiLCJsZW5ndGhPZlNlZ21lbnQiLCJzcXJ0IiwiY3VtUGVyaW0iLCJfcmV2ZXJzZUlmQW50aUNsb2Nrd2lzZSIsImNvbnRvdXJYTWVhbiIsImdldFN1bVJlZHVjZXIiLCJjaGVja1N1bSIsInJldmVyc2UiLCJ0b3RhbCIsIm51bSIsImNhdGVnb3JpZXMiLCJTZWdtZW50YXRpb25Db2RlcyIsIkNhdGVnb3J5IiwiZ2VuZXJhdGVNZXRhZGF0YSIsImNhdGVnb3J5VUlEIiwidHlwZVVJRCIsIm1vZGlmaWVyVUlEIiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzSSIsIkNvZGVWYWx1ZSIsIlR5cGUiLCJ0eXBlc0kiLCJTZWdtZW50ZWRQcm9wZXJ0eUNhdGVnb3J5Q29kZVNlcXVlbmNlIiwiQ29kaW5nU2NoZW1lRGVzaWduYXRvciIsIkNvZGVNZWFuaW5nIiwiU2VnbWVudExhYmVsIiwiU2VnbWVudEFsZ29yaXRobVR5cGUiLCJTZWdtZW50ZWRQcm9wZXJ0eVR5cGVDb2RlU2VxdWVuY2UiLCJtb2RmaWVyIiwiTW9kaWZpZXIiLCJtb2RpZmllckkiLCJTZWdtZW50ZWRQcm9wZXJ0eVR5cGVNb2RpZmllckNvZGVTZXF1ZW5jZSIsIlJlY29tbWVuZGVkRGlzcGxheUNJRUxhYlZhbHVlIiwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWUiLCJkIiwiRGF0ZSIsImdldFRpbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInJlcGxhY2UiLCJyYW5kb20iLCJnZXRTZXJpZXNJbnN0YW5jZVVpZEZyb21FbmFibGVkRWxlbWVudCIsImdlbmVyYWxTZXJpZXNNb2R1bGUiLCJtZXRhRGF0YSIsInNlcmllc0luc3RhbmNlVUlEIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSwrRCIsImZpbGUiOiJvaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjb3JuZXJzdG9uZS1jb3JlXCIpLCByZXF1aXJlKFwiY29ybmVyc3RvbmUtbWF0aFwiKSwgcmVxdWlyZShcImNvcm5lcnN0b25lLXRvb2xzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwib2hpZi1zZWdtZW50YXRpb24tcGx1Z2luXCIsIFtcImNvcm5lcnN0b25lLWNvcmVcIiwgXCJjb3JuZXJzdG9uZS1tYXRoXCIsIFwiY29ybmVyc3RvbmUtdG9vbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wib2hpZi1zZWdtZW50YXRpb24tcGx1Z2luXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY29ybmVyc3RvbmUtY29yZVwiKSwgcmVxdWlyZShcImNvcm5lcnN0b25lLW1hdGhcIiksIHJlcXVpcmUoXCJjb3JuZXJzdG9uZS10b29sc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wib2hpZi1zZWdtZW50YXRpb24tcGx1Z2luXCJdID0gZmFjdG9yeShyb290W1wiY29ybmVyc3RvbmUtY29yZVwiXSwgcm9vdFtcImNvcm5lcnN0b25lLW1hdGhcIl0sIHJvb3RbXCJjb3JuZXJzdG9uZS10b29sc1wiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jb3JuZXJzdG9uZV9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY29ybmVyc3RvbmVfbWF0aF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Nvcm5lcnN0b25lX3Rvb2xzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IGpzb24gPSBge1xuICBcIlNlZ21lbnRhdGlvbkNhdGVnb3J5VHlwZUNvbnRleHROYW1lXCI6IFwiU2VnbWVudGF0aW9uIGNhdGVnb3J5IGFuZCB0eXBlIC0gM0QgU2xpY2VyIEdlbmVyYWwgQW5hdG9teSBsaXN0XCIsXG4gIFwiQHNjaGVtYVwiOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9xaWljci9kY21xaS9tYXN0ZXIvZG9jL3NjaGVtYXMvc2VnbWVudC1jb250ZXh0LXNjaGVtYS5qc29uI1wiLFxuICBcIlNlZ21lbnRhdGlvbkNvZGVzXCI6IHtcbiAgICBcIkNhdGVnb3J5XCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlRpc3N1ZVwiLFxuICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjg1NzU2MDA3XCIsXG4gICAgICAgIFwiY2lkXCI6IFwiNzA1MVwiLFxuICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwNDAzMDBcIixcbiAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQwMDUwXCIsXG4gICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlNlZ21lbnRhdGlvbiBQcm9wZXJ0eSBDYXRlZ29yaWVzXCIsXG4gICAgICAgIFwiVHlwZVwiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDEyOCxcbiAgICAgICAgICAgICAgMTc0LFxuICAgICAgICAgICAgICAxMjhcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVGlzc3VlXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInRpc3N1ZVwiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTY2XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwNDAzMDBcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EMDA1MFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI4NTc1NjAwN1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjE2LFxuICAgICAgICAgICAgICAxMDEsXG4gICAgICAgICAgICAgIDc5XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkFydGVyeVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJhcnRlcnlcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2NlwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwNTU1ODA2XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNDEwNjZcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjc1OTg5MDA2XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyMzAsXG4gICAgICAgICAgICAgIDIyMCxcbiAgICAgICAgICAgICAgNzBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQm9keSBmYXRcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiZmF0XCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDM0NDMzNVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJGLTAzRDM4XCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0ODMwMDAwOVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjQxLFxuICAgICAgICAgICAgICAyMTQsXG4gICAgICAgICAgICAgIDE0NVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJCb25lXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImJvbmVcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2NlwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjYyOTUwXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDAxNkVcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjcyNjczMDAwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxODMsXG4gICAgICAgICAgICAgIDE1NixcbiAgICAgICAgICAgICAgMjIwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkNhcGlsbGFyeVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJjYXBpbGxhcnlcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2NlwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDA2OTAxXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNDAwNTBcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjA5ODIwMDBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDExMSxcbiAgICAgICAgICAgICAgMTg0LFxuICAgICAgICAgICAgICAyMTBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQ2FydGlsYWdlXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImNhcnRpbGFnZVwiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTY2XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMDczMDFcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EMDIxQlwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzMDkzMTIwMDRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDExMSxcbiAgICAgICAgICAgICAgMTg0LFxuICAgICAgICAgICAgICAyMTBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQ29ubmVjdGl2ZSB0aXNzdWVcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiY29ubmVjdGl2ZSB0aXNzdWVcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2NlwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDA5NzgwXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMUEyMDBcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjE3OTMwMDRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE4MyxcbiAgICAgICAgICAgICAgMjE0LFxuICAgICAgICAgICAgICAyMTFcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGlnYW1lbnRcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGlnYW1lbnRcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2NlwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDIzNjg1XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMTgwMTBcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNTIwODIwMDVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDY4LFxuICAgICAgICAgICAgICAxNzIsXG4gICAgICAgICAgICAgIDEwMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMeW1waCBub2RlXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImx5bXBoIG5vZGVcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2NlwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDI0MjA0XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQzQwMDBcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNTk0NDEwMDFcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDExMSxcbiAgICAgICAgICAgICAgMTk3LFxuICAgICAgICAgICAgICAxMzFcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTHltcGhhdGljIHZlc3NlbFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJseW1waGF0aWMgdmVzc2VsXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIyOTg4OVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUM2MDEwXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjgzNTU1MDA2XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxNzgsXG4gICAgICAgICAgICAgIDIxMixcbiAgICAgICAgICAgICAgMjQyXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk1lbmlzY3VzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIm1lbmlzY3VzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIyNDQ5OFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTE1MDA5XCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc0MTM1MDA0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxOTIsXG4gICAgICAgICAgICAgIDEwNCxcbiAgICAgICAgICAgICAgODhcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTXVzY2xlXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIm11c2NsZVwiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTY2XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMjY4NDVcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0xMzAwMVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3MTYxNjAwNFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjQ0LFxuICAgICAgICAgICAgICAyMTQsXG4gICAgICAgICAgICAgIDQ5XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk5lcnZlXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIm5lcnZlXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMTI2ODE2OVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQwNTk4XCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjExOTQxMDAwMlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjIxLFxuICAgICAgICAgICAgICAxMzAsXG4gICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJPcmdhblwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJvcmdhblwiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTY2XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzEyODUwOTJcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0xQTMxMFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyODYxMDAxXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxNzcsXG4gICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgMTAxXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlNraW5cIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwic2tpblwiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTY2XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzExMjMwMjNcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0wMTAwMFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzOTkzNzAwMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTUyLFxuICAgICAgICAgICAgICAxODksXG4gICAgICAgICAgICAgIDIwN1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJUZW5kb25cIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwidGVuZG9uXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzOTUwOFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTE3MDEwXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjEzMDI0MDAyXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAxNTEsXG4gICAgICAgICAgICAgIDIwNlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJWZWluXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInZlaW5cIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2NlwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwNDQ3MTQ2XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNDgwNkVcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTgxMzc4MDA5XCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwic2hvd0FuYXRvbXlcIjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkFuYXRvbWljYWwgU3RydWN0dXJlXCIsXG4gICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTIzMDM3MDA0XCIsXG4gICAgICAgIFwiY2lkXCI6IFwiNzA1MVwiLFxuICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzEyNjgwODZcIixcbiAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQwMDBBXCIsXG4gICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlNlZ21lbnRhdGlvbiBQcm9wZXJ0eSBDYXRlZ29yaWVzXCIsXG4gICAgICAgIFwiVHlwZVwiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgICAxMDFcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTRcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiYWJkb21lblwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQ0MDAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMDA3MjZcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJBYmRvbWVuXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJBYmRvbWluYWwgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTEzMzQ1MDAxXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxODYsXG4gICAgICAgICAgICAgIDEyNCxcbiAgICAgICAgICAgICAgMTYxXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU0XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImFiZG9taW5hbCBjYXZpdHlcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1ENDAxMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjMwMTY4XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQWJkb21pbmFsIGNhdml0eVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQWJkb21pbmFsIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjUyNzMxMDA0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxNzEsXG4gICAgICAgICAgICAgIDg1LFxuICAgICAgICAgICAgICA2OFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJtdXNjbGVzIG9mIGFiZG9taW5hbCB3YWxsXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMTQwMDFcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMTI3OTM4NVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkFiZG9taW5hbCB3YWxsIG11c2NsZVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQWJkb21pbmFsIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjE5NTg3OTAwMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgNjAsXG4gICAgICAgICAgICAgIDE0MyxcbiAgICAgICAgICAgICAgODNcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiYWRlbm9oeXBvcGh5c2lzXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQjExMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzMjAwOFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkFkZW5vaHlwb3BoeXNpc1wiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI2MjgxODAwMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJBYmRvbWluYWwgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTRcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJBZHJlbmFsIGdsYW5kXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwMTYyNVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUIzMDAwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMjQ5LFxuICAgICAgICAgICAgICAgICAgMTg2LFxuICAgICAgICAgICAgICAgICAgMTUwXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGFkcmVuYWwgZ2xhbmRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAyNDksXG4gICAgICAgICAgICAgICAgICAxODYsXG4gICAgICAgICAgICAgICAgICAxNTBcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBhZHJlbmFsIGdsYW5kXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjM0NTEwMDdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkFteWdkYWxhXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwMjcwOFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEzMjMwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgOTgsXG4gICAgICAgICAgICAgICAgICAxNTMsXG4gICAgICAgICAgICAgICAgICAxMTJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgYW15Z2RhbG9pZCBjb21wbGV4XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgOTgsXG4gICAgICAgICAgICAgICAgICAxNTMsXG4gICAgICAgICAgICAgICAgICAxMTJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBhbXlnZGFsb2lkIGNvbXBsZXhcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI0OTU4MDAyXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAgIDIyNCxcbiAgICAgICAgICAgICAgMTk5XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDMxXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImFudXNcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC01OTkwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDAzNDYxXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQW51c1wiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1MzUwNTAwNlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjI0LFxuICAgICAgICAgICAgICA5NyxcbiAgICAgICAgICAgICAgNzZcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTJcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiYW9ydGFcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC00MjAwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDAzNDgzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQW9ydGFcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNhcmRpYWMgU3RydWN0dXJlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjE1ODI1MDAzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyMTgsXG4gICAgICAgICAgICAgIDEyMyxcbiAgICAgICAgICAgICAgOTdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjYxMTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiYW9ydGljIHZhbHZlXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMzU0MDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwMzUwMVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkFvcnRpYyBWYWx2ZVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTWVkaWFzdGludW0gQW5hdG9teSBGaW5kaW5nIG9yIEZlYXR1cmVcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzNDIwMjAwN1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgICAyNDQsXG4gICAgICAgICAgICAgIDIwOVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJhcmFjaG5vaWRcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMTIyMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDAzNzA3XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQXJhY2hub2lkXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc1MDQyMDA4XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJBcmN1YXRlIEZhc2NpY3VsdXNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIkZNQVwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMyMzI5NjMzXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIjI3NjY1MFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDEyNSxcbiAgICAgICAgICAgICAgICAgIDEwMixcbiAgICAgICAgICAgICAgICAgIDE1NFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBhcmN1YXRlIGZhc2NpY3VsdXNcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxMjUsXG4gICAgICAgICAgICAgICAgICAxMDIsXG4gICAgICAgICAgICAgICAgICAxNTRcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBhcmN1YXRlIGZhc2NpY3VsdXNcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgICAgMjI2LFxuICAgICAgICAgICAgICA3N1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2N1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJhdXRvbm9taWMgbmVydmVcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BOTYwNVwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA2MjUwXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQXV0b25vbWljIG5lcnZlXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJQZXJpcGhlcmFsIE5lcnZvdXMgU3lzdGVtIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjUzNTIwMDAwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAxNDUsXG4gICAgICAgICAgICAgIDMwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU0XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImJpbGlhcnkgdHJlZVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTYwNjEwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMDU0MDBcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJCaWxlIER1Y3RcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkFiZG9taW5hbCBPcmdhbiBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyODI3MzAwMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjIyLFxuICAgICAgICAgICAgICAxNTQsXG4gICAgICAgICAgICAgIDEzMlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2MFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJ1cmluYXJ5IGJsYWRkZXJcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC03NDAwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDA1NjgyXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQmxhZGRlclwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiUGVsdmljIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjg5ODM3MDAxXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAgIDIzOSxcbiAgICAgICAgICAgICAgMTcyXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU1XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInNrZWxldG9uIG9mIHRob3JheFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQwMTcwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzA0NDgxNTdcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJCb25lIG9mIHRob3JheFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiVGhvcmFjaWMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI3MjcxMDAwNFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjQyLFxuICAgICAgICAgICAgICAyMDYsXG4gICAgICAgICAgICAgIDE0MlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAyOFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJza2VsZXRvbiBvZiBuZWNrXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDAwNkRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDczMDEzMFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkJvbmUgc3RydWN0dXJlIG9mIGhlYWQgYW5kL29yIG5lY2tcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNyYW5pb2ZhY2lhbCBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzEyNzc5MDA5XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyNTAsXG4gICAgICAgICAgICAgIDI1MCxcbiAgICAgICAgICAgICAgMjI1XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImJyYWluXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTAxMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwNjEwNFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkJyYWluXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjEyNzM4MDA2XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICA4NSxcbiAgICAgICAgICAgICAgMTg4LFxuICAgICAgICAgICAgICAyNTVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiQ1NGIHNwYWNlXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTAxMDlcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDQ1OTM4N1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkJyYWluIGNlcmVicm9zcGluYWwgZmx1aWQgcGF0aHdheVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyODAzNzEwMDlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDg4LFxuICAgICAgICAgICAgICAxMDYsXG4gICAgICAgICAgICAgIDIxNVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJ2ZW50cmljbGVzIG9mIGJyYWluXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTE2MDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwNzc5OVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkJyYWluIHZlbnRyaWNsZVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzNTc2NDAwMlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQ2F1ZGF0ZSBudWNsZXVzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwNzQ2MVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEzMjAwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMzAsXG4gICAgICAgICAgICAgICAgICAxMTEsXG4gICAgICAgICAgICAgICAgICA4NVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBjYXVkYXRlIG51Y2xldXNcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAzMCxcbiAgICAgICAgICAgICAgICAgIDExMSxcbiAgICAgICAgICAgICAgICAgIDg1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgY2F1ZGF0ZSBudWNsZXVzXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTEwMDAwMDRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDI0NCxcbiAgICAgICAgICAgICAgMjE0LFxuICAgICAgICAgICAgICA0OVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJjZW50cmFsIG5lcnZvdXMgc3lzdGVtXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTAwOTBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDkyNzIzMlwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkNlbnRyYWwgbmVydm91cyBzeXN0ZW1cIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjE0ODMwMDVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE5NCxcbiAgICAgICAgICAgICAgMTk1LFxuICAgICAgICAgICAgICAxNjRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiY2VyZWJlbGxhciB3aGl0ZSBtYXR0ZXJcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BNjA4MFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMTUyMzgxXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQ2VyZWJlbGxhciB3aGl0ZSBtYXR0ZXJcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzMwNjAwMDRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDg4LFxuICAgICAgICAgICAgICAxMDYsXG4gICAgICAgICAgICAgIDIxNVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJjZXJlYnJhbCBhcXVlZHVjdFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUExODAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMDc3NjlcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJDZXJlYnJhbCBhcXVlZHVjdFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI4MDQ0NzAwMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQ2VyZWJyYWwgZm9ybml4XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDE1MjMzNFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEyOTcwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgNjQsXG4gICAgICAgICAgICAgICAgICAxMjMsXG4gICAgICAgICAgICAgICAgICAxNDdcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgZm9ybml4XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgNjQsXG4gICAgICAgICAgICAgICAgICAxMjMsXG4gICAgICAgICAgICAgICAgICAxNDdcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBmb3JuaXhcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI4NzQ2MzAwNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTI4LFxuICAgICAgICAgICAgICAxNzQsXG4gICAgICAgICAgICAgIDEyOFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJjZXJlYnJhbCBjb3J0ZXhcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMjAyMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDA3Nzc2XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQ2VyZWJyYWwgR3JleSBNYXR0ZXJcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNDAxNDYwMDFcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDI1MCxcbiAgICAgICAgICAgICAgMjUwLFxuICAgICAgICAgICAgICAyMjVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiY2VyZWJyYWwgd2hpdGUgbWF0dGVyXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTIwMzBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDE1MjI5NVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkNlcmVicmFsIFdoaXRlIE1hdHRlclwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI2ODUyMzAwM1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAgIDIwN1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJjZXJ2aWNhbCB2ZXJ0ZWJyYWwgY29sdW1uXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMTE1MDFcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDcyODk4NVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkNlcnZpY2FsIHNwaW5lXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjEyMjQ5NDAwNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTg4LFxuICAgICAgICAgICAgICA5NSxcbiAgICAgICAgICAgICAgNzZcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTVcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibXVzY2xlcyBvZiB0aG9yYWNpYyB3YWxsXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMTQxMjJcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMTI2OTgyNVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkNoZXN0IHdhbGwgbXVzY2xlXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJUaG9yYWNpYyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzcyMDc0MDA2XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJDaW5ndWx1bVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjgyNzJcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMjg0MFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE1NCxcbiAgICAgICAgICAgICAgICAgIDE0NixcbiAgICAgICAgICAgICAgICAgIDgzXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGNpbmd1bHVtIGJ1bmRsZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE1NCxcbiAgICAgICAgICAgICAgICAgIDE0NixcbiAgICAgICAgICAgICAgICAgIDgzXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgY2luZ3VsdW0gYnVuZGxlXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzcwMzUwMDBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiVGhvcmFjaWMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU1XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQ2xhdmljbGVcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDA4OTEzXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMTIzMTBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAyMDUsXG4gICAgICAgICAgICAgICAgICAxNzksXG4gICAgICAgICAgICAgICAgICAxMDhcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgY2xhdmljbGVcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAyMDUsXG4gICAgICAgICAgICAgICAgICAxNzksXG4gICAgICAgICAgICAgICAgICAxMDhcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBjbGF2aWNsZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjUxMjk5MDA0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyMDQsXG4gICAgICAgICAgICAgIDE2OCxcbiAgICAgICAgICAgICAgMTQzXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDMxXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImNvbG9uXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNTkzMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwOTM2OFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkNvbG9uXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjcxODU0MDAxXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICA5NyxcbiAgICAgICAgICAgICAgMTEzLFxuICAgICAgICAgICAgICAxNThcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiY29ycHVzIGNhbGxvc3VtXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTI3MDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAxMDA5MFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkNvcnB1cyBjYWxsb3N1bVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI4ODQ0MjAwNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQ29ycHVzIHN0cmlhdHVtXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAxMDA5N1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEzMTAwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTc3LFxuICAgICAgICAgICAgICAgICAgMTQwLFxuICAgICAgICAgICAgICAgICAgMTkwXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IHN0cmlhdHVtXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTc3LFxuICAgICAgICAgICAgICAgICAgMTQwLFxuICAgICAgICAgICAgICAgICAgMTkwXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgc3RyaWF0dW1cIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzMTQyODAwOFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgICAyMzQsXG4gICAgICAgICAgICAgIDkyXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTY3XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImNyYW5pYWwgbmVydmVzXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTgwMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAxMDI2OFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkNyYW5pYWwgbmVydmVcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlBlcmlwaGVyYWwgTmVydm91cyBTeXN0ZW0gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjUyMzgwMDNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkRpZW5jZXBoYWxvblwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTIxNDRcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMDEwMlwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDY5LFxuICAgICAgICAgICAgICAgICAgMTEwLFxuICAgICAgICAgICAgICAgICAgNTNcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiZGllbmNlcGhhbG9uXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI4NzU2MzAwOFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgICAyNTMsXG4gICAgICAgICAgICAgIDIyOVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJkdW9kZW51bVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTU4MjAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTMzMDNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJEdW9kZW51bVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzODg0ODAwNFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgICAyNDQsXG4gICAgICAgICAgICAgIDIwOVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJkdXJhIG1hdGVyXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTExMjBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAxMzMxM1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkR1cmEgbWF0ZXJcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTg1NDUwMDBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIxMSxcbiAgICAgICAgICAgICAgMTcxLFxuICAgICAgICAgICAgICAxNDNcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTVcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiZXNvcGhhZ3VzXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNTYwMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAxNDg3NlwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkVzb3BoYWd1c1wiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiVGhvcmFjaWMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjMyODQ5MDAyXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNyYW5pb2ZhY2lhbCBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMjhcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJFeHRlcm5hbCBlYXJcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDEzNDUzXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQUIxMDBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNzQsXG4gICAgICAgICAgICAgICAgICAxMjIsXG4gICAgICAgICAgICAgICAgICA5MFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBleHRlcm5hbCBlYXJcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNzQsXG4gICAgICAgICAgICAgICAgICAxMjIsXG4gICAgICAgICAgICAgICAgICA5MFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGV4dGVybmFsIGVhclwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI4MzQ3MDA4XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNyYW5pb2ZhY2lhbCBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMjhcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJFeWViYWxsXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIyOTI0MlwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUFBNzcwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTk0LFxuICAgICAgICAgICAgICAgICAgMTQyLFxuICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBleWViYWxsXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTk0LFxuICAgICAgICAgICAgICAgICAgMTQyLFxuICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGV5ZWJhbGxcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3OTY1MjAwM1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTg1LFxuICAgICAgICAgICAgICAxMzUsXG4gICAgICAgICAgICAgIDEzNFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2MFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJmZW1hbGUgZXh0ZXJuYWwgZ2VuaXRhbGlhXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtODAwMTBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIyNzc0N1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkZlbWFsZSBleHRlcm5hbCBnZW5pdGFsaWFcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlBlbHZpYyBPcmdhbiBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI4Njk2OTAwOFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjQ0LFxuICAgICAgICAgICAgICAxNzAsXG4gICAgICAgICAgICAgIDE0N1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2MFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJmZW1hbGUgaW50ZXJuYWwgZ2VuaXRhbGlhXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtODAwMjBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIyNzc0OFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkZlbWFsZSBpbnRlcm5hbCBnZW5pdGFsaWFcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlBlbHZpYyBPcmdhbiBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI4Nzc1OTAwNFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDMxXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiRm9vdFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTY1MDRcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EOTcwMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBmb290XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTc3LFxuICAgICAgICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgICAgICAgMTAxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgZm9vdFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjU2NDU5MDA0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMzFcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJGb3JlYXJtXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAxNjUzNlwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQ4NTAwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTc3LFxuICAgICAgICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgICAgICAgMTAxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGZvcmVhcm1cIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNzcsXG4gICAgICAgICAgICAgICAgICAxMjIsXG4gICAgICAgICAgICAgICAgICAxMDFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBmb3JlYXJtXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTQ5NzUwMDhcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDg4LFxuICAgICAgICAgICAgICAxMDYsXG4gICAgICAgICAgICAgIDIxNVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJmb3VydGggdmVudHJpY2xlXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTE4MjBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDE0OTU1NlwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkZvdXJ0aCB2ZW50cmljbGVcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzU5MTgwMDJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ3JhbmlvZmFjaWFsIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAyOFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkZyb250YWwgYm9uZVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTY3MzJcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0xMTExMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDIwMyxcbiAgICAgICAgICAgICAgICAgIDE3OSxcbiAgICAgICAgICAgICAgICAgIDc3XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGZyb250YWwgYm9uZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDIwMyxcbiAgICAgICAgICAgICAgICAgIDE3OSxcbiAgICAgICAgICAgICAgICAgIDc3XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgZnJvbnRhbCBib25lXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzQ4NzIwMDhcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkZyb250YWwgbG9iZVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTY3MzNcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMjIwMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDgzLFxuICAgICAgICAgICAgICAgICAgMTQ2LFxuICAgICAgICAgICAgICAgICAgMTY0XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGZyb250YWwgbG9iZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDgzLFxuICAgICAgICAgICAgICAgICAgMTQ2LFxuICAgICAgICAgICAgICAgICAgMTY0XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgZnJvbnRhbCBsb2JlXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiODMyNTEwMDFcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDEzOSxcbiAgICAgICAgICAgICAgMTUwLFxuICAgICAgICAgICAgICA5OFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDA0MFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJnYWxsYmxhZGRlclwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTYzMDAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTY5NzZcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJHYWxsYmxhZGRlclwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiRW5kb3Njb3B5IEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyODIzMTAwOFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiR2xvYnVzIHBhbGxpZHVzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAxNzY1MVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEzNTAwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgNDgsXG4gICAgICAgICAgICAgICAgICAxMjksXG4gICAgICAgICAgICAgICAgICAxMjZcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgcGFsbGlkdW1cIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICA0OCxcbiAgICAgICAgICAgICAgICAgIDEyOSxcbiAgICAgICAgICAgICAgICAgIDEyNlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IHBhbGxpZHVtXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTQ3MzgwMDVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkhhbmRcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDE4NTYzXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDg3MDBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNzcsXG4gICAgICAgICAgICAgICAgICAxMjIsXG4gICAgICAgICAgICAgICAgICAxMDFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgaGFuZFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGhhbmRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI4NTU2MjAwNFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTc3LFxuICAgICAgICAgICAgICAxMjIsXG4gICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJoZWFkXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDExMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAxODY3MFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkhlYWRcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNjk1MzYwMDVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIwNixcbiAgICAgICAgICAgICAgMTEwLFxuICAgICAgICAgICAgICA4NFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1MlwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJoZWFydFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTMyMDAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTg3ODdcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJIZWFydFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ2FyZGlhYyBTdHJ1Y3R1cmUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiODA4OTEwMDlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDI1MCxcbiAgICAgICAgICAgICAgMjEwLFxuICAgICAgICAgICAgICAxMzlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMjhcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiaHlvaWQgYm9uZVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTExMTkwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMjA0MTdcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJIeW9pZCBib25lXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDcmFuaW9mYWNpYWwgQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjIxMzg3MDA1XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJJbmZlcmlvciBjZXJlYmVsbGFyIHBlZHVuY2xlXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDE1MjM5M1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUE2NjQwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTg2LFxuICAgICAgICAgICAgICAgICAgMTM1LFxuICAgICAgICAgICAgICAgICAgMTM1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGluZmVyaW9yIGNlcmViZWxsYXIgcGVkdW5jbGVcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxODYsXG4gICAgICAgICAgICAgICAgICAxMzUsXG4gICAgICAgICAgICAgICAgICAxMzVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBpbmZlcmlvciBjZXJlYmVsbGFyIHBlZHVuY2xlXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNjc3MDEwMDFcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkluZmVyaW9yIGxvbmdpdHVkaW5hbCBmYXNjaWN1bHVzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIyODI3M1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEyODUwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTU5LFxuICAgICAgICAgICAgICAgICAgMTE2LFxuICAgICAgICAgICAgICAgICAgMTYzXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGluZmVyaW9yIGxvbmdpdHVkaW5hbCBmYXNjaWN1bHVzXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTU5LFxuICAgICAgICAgICAgICAgICAgMTE2LFxuICAgICAgICAgICAgICAgICAgMTYzXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgaW5mZXJpb3IgbG9uZ2l0dWRpbmFsIGZhc2NpY3VsdXNcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1NTIzMzAwNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDcmFuaW9mYWNpYWwgQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDI4XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiSW5uZXIgZWFyXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyMjg4OVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUFCNzAwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMjI5LFxuICAgICAgICAgICAgICAgICAgMTQ3LFxuICAgICAgICAgICAgICAgICAgMTE4XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGlubmVyIGVhclwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDIyOSxcbiAgICAgICAgICAgICAgICAgIDE0NyxcbiAgICAgICAgICAgICAgICAgIDExOFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGlubmVyIGVhclwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjIyOTQ1MDAwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJJbnN1bGFcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDIxNjQwXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTI2MTBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxODgsXG4gICAgICAgICAgICAgICAgICAxMzUsXG4gICAgICAgICAgICAgICAgICAxNjZcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgaW5zdWxhciBsb2JlXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTg4LFxuICAgICAgICAgICAgICAgICAgMTM1LFxuICAgICAgICAgICAgICAgICAgMTY2XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgaW5zdWxhciBsb2JlXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzYxNjkwMDhcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIzMyxcbiAgICAgICAgICAgICAgMTM4LFxuICAgICAgICAgICAgICAxMTJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjYxMTZcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiYXRyaWFsIHNlcHR1bVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTMyMTUwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjU4MzZcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJJbnRlcmF0cmlhbCBzZXB0dW1cIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIk11c2N1bGFyIEFuYXRvbXlcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1ODA5NTAwNlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTk1LFxuICAgICAgICAgICAgICAxMDAsXG4gICAgICAgICAgICAgIDczXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI2MTE2XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInZlbnRyaWN1bGFyIHNlcHR1bVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTMyNDEwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjU4NzBcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJJbnRlcnZlbnRyaWN1bGFyIHNlcHR1bVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTXVzY3VsYXIgQW5hdG9teVwiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjU4OTAwMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJBYmRvbWluYWwgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTRcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJLaWRuZXlcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDIyNjQ2XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNzEwMDBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxODUsXG4gICAgICAgICAgICAgICAgICAxMDIsXG4gICAgICAgICAgICAgICAgICA4M1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBraWRuZXlcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxODUsXG4gICAgICAgICAgICAgICAgICAxMDIsXG4gICAgICAgICAgICAgICAgICA4M1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGtpZG5leVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjY0MDMzMDA3XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkVuZG9zY29weSBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwNDBcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJLbmVlXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMTQ1Njc5OFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQ5MjAwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTc3LFxuICAgICAgICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgICAgICAgMTAxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGtuZWVcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNzcsXG4gICAgICAgICAgICAgICAgICAxMjIsXG4gICAgICAgICAgICAgICAgICAxMDFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBrbmVlXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzI2OTYwMDJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ3JhbmlvZmFjaWFsIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAyOFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxhY3JpbWFsIGJvbmVcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjIyNzMzXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMTExNUFcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAgICAgICAyNTAsXG4gICAgICAgICAgICAgICAgICAxNjBcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgbGFjcmltYWwgYm9uZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNjIyOTAwN1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTUwLFxuICAgICAgICAgICAgICAyMDgsXG4gICAgICAgICAgICAgIDI0M1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDA0MFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsYXJ5bnhcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0yNDEwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDIzMDc4XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGFyeW54XCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJFbmRvc2NvcHkgQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjQ1OTYwMDlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxhdGVyYWwgY29ydGljb3NwaW5hbCB0cmFjdFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAxNTI0MDJcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BNzA5M1wiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDIwMSxcbiAgICAgICAgICAgICAgICAgIDE2MCxcbiAgICAgICAgICAgICAgICAgIDEzM1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBjb3J0aWNvc3BpbmFsIHRyYWN0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMjAxLFxuICAgICAgICAgICAgICAgICAgMTYwLFxuICAgICAgICAgICAgICAgICAgMTMzXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgY29ydGljb3NwaW5hbCB0cmFjdFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjQ2MTAwMlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGF0ZXJhbCB2ZW50cmljbGVcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMTUyMjc5XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTE2NTBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICA4OCxcbiAgICAgICAgICAgICAgICAgIDEwNixcbiAgICAgICAgICAgICAgICAgIDIxNVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBsYXRlcmFsIHZlbnRyaWNsZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDg4LFxuICAgICAgICAgICAgICAgICAgMTA2LFxuICAgICAgICAgICAgICAgICAgMjE1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgbGF0ZXJhbCB2ZW50cmljbGVcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI2NjcyMDAwN1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTUyLFxuICAgICAgICAgICAgICA1NSxcbiAgICAgICAgICAgICAgMTNcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTJcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCB2ZW50cmljbGUgb2YgaGVhcnRcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0zMjYwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjI1ODk3XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdCBWZW50cmljbGVcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNhcmRpYWMgU3RydWN0dXJlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjg3ODc4MDA1XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMaW1iaWMgbG9iZVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzA0NTgzMzdcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMDAzNlwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE1NCxcbiAgICAgICAgICAgICAgICAgIDE1MCxcbiAgICAgICAgICAgICAgICAgIDIwMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBsaW1iaWMgbG9iZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE1NCxcbiAgICAgICAgICAgICAgICAgIDE1MCxcbiAgICAgICAgICAgICAgICAgIDIwMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGxpbWJpYyBsb2JlXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjc5MjE1MDA2XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxODgsXG4gICAgICAgICAgICAgIDkxLFxuICAgICAgICAgICAgICA5NVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAyOFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsaXBzXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNTIwMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyMzc1OVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxpcFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ3JhbmlvZmFjaWFsIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI0ODQ3NzAwOVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDMxXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTG93ZXIgbGVnXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMTE0MDYyMVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQ5NDAwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTc3LFxuICAgICAgICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgICAgICAgMTAxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGxlZ1wiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGxlZ1wiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjMwMDIxMDAwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMzFcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMb3dlciBsaW1iXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyMzIxNlwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQ5MDAwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTc3LFxuICAgICAgICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgICAgICAgMTAxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGxvd2VyIGxpbWJcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNzcsXG4gICAgICAgICAgICAgICAgICAxMjIsXG4gICAgICAgICAgICAgICAgICAxMDFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBsb3dlciBsaW1iXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNjE2ODUwMDdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiVGhvcmFjaWMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU1XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTG93ZXIgbG9iZSBvZiBsdW5nXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIyNTc1OFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTI4ODMwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMjI0LFxuICAgICAgICAgICAgICAgICAgMTg2LFxuICAgICAgICAgICAgICAgICAgMTYyXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImluZmVyaW9yIGxvYmUgb2YgcmlnaHQgbHVuZ1wiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDIyNCxcbiAgICAgICAgICAgICAgICAgIDE4NixcbiAgICAgICAgICAgICAgICAgIDE2MlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJpbmZlcmlvciBsb2JlIG9mIGxlZnQgbHVuZ1wiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjkwNTcyMDAxXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyMTIsXG4gICAgICAgICAgICAgIDE4OCxcbiAgICAgICAgICAgICAgMTAyXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDMxXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImx1bWJhciB2ZXJ0ZWJyYWwgY29sdW1uXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMTE1MDNcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyNDA5MVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkx1bWJhciBzcGluZVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxMjI0OTYwMDdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiVGhvcmFjaWMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU1XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTHVuZ1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMjQxMDlcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0yODAwMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE5NyxcbiAgICAgICAgICAgICAgICAgIDE2NSxcbiAgICAgICAgICAgICAgICAgIDE0NVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBsdW5nXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTk3LFxuICAgICAgICAgICAgICAgICAgMTY1LFxuICAgICAgICAgICAgICAgICAgMTQ1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgbHVuZ1wiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjM5NjA3MDA4XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxODUsXG4gICAgICAgICAgICAgIDEzNSxcbiAgICAgICAgICAgICAgMTM0XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTYwXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIm1hbGUgZXh0ZXJuYWwgZ2VuaXRhbGlhXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtOTAwMTBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIyNzkyMlwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk1hbGUgZXh0ZXJuYWwgZ2VuaXRhbGlhXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJQZWx2aWMgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiOTA0MTgwMDVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIxNixcbiAgICAgICAgICAgICAgMTQ2LFxuICAgICAgICAgICAgICAxMjdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjBcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibWFsZSBpbnRlcm5hbCBnZW5pdGFsaWFcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC05MDAyMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjI3OTIzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTWFsZSBpbnRlcm5hbCBnZW5pdGFsaWFcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlBlbHZpYyBPcmdhbiBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzODI0MjAwOFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjIyLFxuICAgICAgICAgICAgICAxOTgsXG4gICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJtYW5kaWJsZVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTExMTgwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMjQ2ODdcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJNYW5kaWJsZVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI5MTYwOTAwNlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTWVkaWFsIExlbW5pc2N1c1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjg0MjBcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BNTI3MVwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NCxcbiAgICAgICAgICAgICAgICAgIDE0MCxcbiAgICAgICAgICAgICAgICAgIDEwM1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBtZWRpYWwgbGVtbmlzY3VzXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTc0LFxuICAgICAgICAgICAgICAgICAgMTQwLFxuICAgICAgICAgICAgICAgICAgMTAzXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgbWVkaWFsIGxlbW5pc2N1c1wiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjMwMTE0MDAzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAgIDI0NCxcbiAgICAgICAgICAgICAgMjA5XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU1XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIm1lZGlhc3RpbnVtXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDMzMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyNTA2NlwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk1lZGlhc3RpbnVtXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJUaG9yYWNpYyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzI0MTAwMDBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgICAgMjQ0LFxuICAgICAgICAgICAgICAyMDlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibWVuaW5nZXNcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMTExMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDI1Mjg1XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTWVuaW5nZXNcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTIzMTAwNFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTWlkZGxlIGNlcmViZWxsYXIgcGVkdW5jbGVcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMTUyMzkyXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTY2MzBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNDgsXG4gICAgICAgICAgICAgICAgICAxMjAsXG4gICAgICAgICAgICAgICAgICA3MlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBtaWRkbGUgY2VyZWJlbGxhciBwZWR1bmNsZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE0OCxcbiAgICAgICAgICAgICAgICAgIDEyMCxcbiAgICAgICAgICAgICAgICAgIDcyXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgbWlkZGxlIGNlcmViZWxsYXIgcGVkdW5jbGVcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzMzcyMzAwNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDcmFuaW9mYWNpYWwgQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDI4XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTWlkZGxlIGVhclwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTM0NTVcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BQjMwMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDIwMSxcbiAgICAgICAgICAgICAgICAgIDExMixcbiAgICAgICAgICAgICAgICAgIDczXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IG1pZGRsZSBlYXJcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAyMDEsXG4gICAgICAgICAgICAgICAgICAxMTIsXG4gICAgICAgICAgICAgICAgICA3M1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IG1pZGRsZSBlYXJcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNTM0MjAwM1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjAyLFxuICAgICAgICAgICAgICAxNjQsXG4gICAgICAgICAgICAgIDE0MFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJtaWRkbGUgbG9iZSBvZiByaWdodCBsdW5nXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMjgzMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIyNTc1N1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk1pZGRsZSBsb2JlIG9mIHJpZ2h0IGx1bmdcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlRob3JhY2ljIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3MjQ4MTAwNlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTU5LFxuICAgICAgICAgICAgICA2MyxcbiAgICAgICAgICAgICAgMjdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjYxMTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibWl0cmFsIHZhbHZlXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMzUzMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyNjI2NFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk1pdHJhbCBWYWx2ZVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTWVkaWFzdGludW0gQW5hdG9teSBGaW5kaW5nIG9yIEZlYXR1cmVcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI5MTEzNDAwN1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjAxLFxuICAgICAgICAgICAgICAxMjEsXG4gICAgICAgICAgICAgIDc3XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDI4XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIm11c2NsZXMgb2YgaGVhZFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTEzMTAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjQwOTdcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJNdXNjbGUgb2YgaGVhZFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ3JhbmlvZmFjaWFsIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyMjY4ODAwNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjEzLFxuICAgICAgICAgICAgICAxMjQsXG4gICAgICAgICAgICAgIDEwOVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAyOFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJtdXNjbGVzIG9mIG5lY2tcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0xMzMwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDI3NTMyXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTXVzY2xlIG9mIG5lY2tcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNyYW5pb2ZhY2lhbCBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiODE3MjcwMDFcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgICAxMDFcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMzFcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibmVja1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQxNjAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMjc1MzBcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJOZWNrXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjQ1MDQ4MDAwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICA5MixcbiAgICAgICAgICAgICAgMTYyLFxuICAgICAgICAgICAgICAxMDlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibmV1cm9oeXBvcGh5c2lzXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQjEyMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzMjAwOVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk5ldXJvaHlwb3BoeXNpc1wiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzNzUxMjAwOVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiT2NjaXBpdGFsIGxvYmVcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDI4Nzg1XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTI0MDBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxODIsXG4gICAgICAgICAgICAgICAgICAxNjYsXG4gICAgICAgICAgICAgICAgICAxMTBcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgb2NjaXBpdGFsIGxvYmVcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxODIsXG4gICAgICAgICAgICAgICAgICAxNjYsXG4gICAgICAgICAgICAgICAgICAxMTBcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBvY2NpcGl0YWwgbG9iZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjMxMDY1MDA0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyMzQsXG4gICAgICAgICAgICAgIDIzNCxcbiAgICAgICAgICAgICAgMTk0XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU0XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIm9tZW50dW1cIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1ENDYwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDI4OTc3XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiT21lbnR1bVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQWJkb21pbmFsIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI3Mzk4MDA0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICA5OSxcbiAgICAgICAgICAgICAgMTA2LFxuICAgICAgICAgICAgICAyNFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJvcHRpYyBjaGlhc21cIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BODAwQlwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDI5MTI2XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiT3B0aWMgY2hpYXNtXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0NDQ1MzAwNlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiT3B0aWMgcmFkaWF0aW9uXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIyODI3N1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEyODgwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgNzgsXG4gICAgICAgICAgICAgICAgICAxNTIsXG4gICAgICAgICAgICAgICAgICAxNDFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgb3B0aWMgcmFkaWF0aW9uXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgNzgsXG4gICAgICAgICAgICAgICAgICAxNTIsXG4gICAgICAgICAgICAgICAgICAxNDFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBvcHRpYyByYWRpYXRpb25cIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3MDEwNTAwMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiT3B0aWMgdHJhY3RcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMTUyNDA1XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTgwNjBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNTYsXG4gICAgICAgICAgICAgICAgICAxNzEsXG4gICAgICAgICAgICAgICAgICAxMDhcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgb3B0aWMgdHJhY3RcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNTYsXG4gICAgICAgICAgICAgICAgICAxNzEsXG4gICAgICAgICAgICAgICAgICAxMDhcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBvcHRpYyB0cmFjdFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjUzMjM4MDAzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlBlbHZpYyBPcmdhbiBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2MFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk92YXJ5XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyOTkzOVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTg3MDAwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMjEzLFxuICAgICAgICAgICAgICAgICAgMTQxLFxuICAgICAgICAgICAgICAgICAgMTEzXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IG92YXJ5XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMjEzLFxuICAgICAgICAgICAgICAgICAgMTQxLFxuICAgICAgICAgICAgICAgICAgMTEzXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgb3ZhcnlcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxNTQ5NzAwNlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDcmFuaW9mYWNpYWwgQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDI4XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUGFsYXRpbmUgYm9uZVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjI3MzRcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0xMTE2MFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDI0MixcbiAgICAgICAgICAgICAgICAgIDIxNyxcbiAgICAgICAgICAgICAgICAgIDEyM1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBwYWxhdGluZSBib25lXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMjQyLFxuICAgICAgICAgICAgICAgICAgMjE3LFxuICAgICAgICAgICAgICAgICAgMTIzXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgcGFsYXRpbmUgYm9uZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjUxMjgzMDA1XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyNDksXG4gICAgICAgICAgICAgIDE4MCxcbiAgICAgICAgICAgICAgMTExXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDMwXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInBhbmNyZWFzXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNjUwMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzMDI3NFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlBhbmNyZWFzXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDVCwgTVIgYW5kIFBFVCBBbmF0b215IEltYWdlZFwiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjE1Nzc2MDA5XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNyYW5pb2ZhY2lhbCBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMjhcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJQYXJpZXRhbCBib25lXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzMDU1OFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTExMTIwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMjI5LFxuICAgICAgICAgICAgICAgICAgMjA0LFxuICAgICAgICAgICAgICAgICAgMTA5XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IHBhcmlldGFsIGJvbmVcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAyMjksXG4gICAgICAgICAgICAgICAgICAyMDQsXG4gICAgICAgICAgICAgICAgICAxMDlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBwYXJpZXRhbCBib25lXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQ5MjQwMDZcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlBhcmlldGFsIGxvYmVcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDMwNTYwXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTIzMDBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNDEsXG4gICAgICAgICAgICAgICAgICA5MyxcbiAgICAgICAgICAgICAgICAgIDEzN1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBwYXJpZXRhbCBsb2JlXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTQxLFxuICAgICAgICAgICAgICAgICAgOTMsXG4gICAgICAgICAgICAgICAgICAxMzdcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBwYXJpZXRhbCBsb2JlXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTY2MzAwMDVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE4NCxcbiAgICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgICAxNTRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTJcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicGVyaWNhcmRpYWwgY2F2aXR5XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMzkwNTBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIyNTk3MlwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlBlcmljYXJkaWFsIGNhdml0eVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ2FyZGlhYyBTdHJ1Y3R1cmUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjU0ODkwMDBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgICAgMjQ0LFxuICAgICAgICAgICAgICAyMDlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTJcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicGVyaWNhcmRpdW1cIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0zOTAwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDMxMDUwXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUGVyaWNhcmRpdW1cIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNhcmRpYWMgU3RydWN0dXJlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc2ODQ4MDAxXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyMjQsXG4gICAgICAgICAgICAgIDE5NCxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2N1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJwZXJpcGhlcmFsIG5lcnZlXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTA1MDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzMTExOVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlBlcmlwaGVyYWwgbmVydmVcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlBlcmlwaGVyYWwgTmVydm91cyBTeXN0ZW0gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiODQ3ODIwMDlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIxNixcbiAgICAgICAgICAgICAgMTg2LFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTY3XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInBlcmlwaGVyYWwgbmVydm91cyBzeXN0ZW1cIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMDE0MFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA2NDE3XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUGVyaXBoZXJhbCBuZXJ2b3VzIHN5c3RlbVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiUGVyaXBoZXJhbCBOZXJ2b3VzIFN5c3RlbSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzMDU4MDA1XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgICAgMjIwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU0XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInBlcml0b25ldW1cIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1ENDQwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDMxMTUzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUGVyaXRpb25ldW1cIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkFiZG9taW5hbCBPcmdhbiBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxNTQyNTAwN1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjA0LFxuICAgICAgICAgICAgICAxNDIsXG4gICAgICAgICAgICAgIDE3OFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJwZXJpdG9uZWFsIGNhdml0eVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQ0NDI1XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzE3MDQyNDdcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJQZXJpdG9uZWFsIGNhdml0eVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQWJkb21pbmFsIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjgzNjcwMDAwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxODQsXG4gICAgICAgICAgICAgIDEwNSxcbiAgICAgICAgICAgICAgMTA4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDQwXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInBoYXJ5bnhcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC01NTAwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDMxMzU0XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUGhhcnlueFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiRW5kb3Njb3B5IEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1NDA2NjAwOFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgICAyNDQsXG4gICAgICAgICAgICAgIDIwOVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJwaWEgbWF0ZXJcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMTI4MFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDMxODY5XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUGlhIG1hdGVyXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjIzMTgwMDA2XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyNTMsXG4gICAgICAgICAgICAgIDEzNSxcbiAgICAgICAgICAgICAgMTkyXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInBpbmVhbCBnbGFuZFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUIyMDAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzE5MzlcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJQaW5lYWwgR2xhbmRcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNDU3OTMwMDBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDU3LFxuICAgICAgICAgICAgICAxNTcsXG4gICAgICAgICAgICAgIDExMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJwaXR1aXRhcnkgZ2xhbmRcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1CMTAwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDMyMDA1XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUGl0dWl0YXJ5XCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjU2MzI5MDA4XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxMjYsXG4gICAgICAgICAgICAgIDE2MSxcbiAgICAgICAgICAgICAgMTk3XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInBvc3RlcmlvciBjb21taXNzdXJlXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTQ5MDRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDE1MjMyN1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlBvc3RlcmlvciBjZXJlYnJhbCBjb21taXNzdXJlXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI3OTMzNjAwNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjMwLFxuICAgICAgICAgICAgICAxNTgsXG4gICAgICAgICAgICAgIDE0MFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2MFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJwcm9zdGF0ZVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTkyMDAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzM1NzJcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJQcm9zdGF0ZVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiUGVsdmljIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjQxMjE2MDAxXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyMjUsXG4gICAgICAgICAgICAgIDEzMCxcbiAgICAgICAgICAgICAgMTA0XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI2MTEzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInB1bG1vbmFyeSB2YWx2ZVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTM1MjAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzQwODZcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJQdWxtb25hcnkgdmFsdmVcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIk1lZGlhc3RpbnVtIEFuYXRvbXkgRmluZGluZyBvciBGZWF0dXJlXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzkwNTcwMDRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlB1dGFtZW5cIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDM0MTY5XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTM0MDBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAyMTAsXG4gICAgICAgICAgICAgICAgICAxNTcsXG4gICAgICAgICAgICAgICAgICAxNjZcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgcHV0YW1lblwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDIxMCxcbiAgICAgICAgICAgICAgICAgIDE1NyxcbiAgICAgICAgICAgICAgICAgIDE2NlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IHB1dGFtZW5cIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI4OTI3ODAwOVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTgwLFxuICAgICAgICAgICAgICAxMTksXG4gICAgICAgICAgICAgIDE1M1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyZXRyb3Blcml0b25lYWwgc3BhY2VcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1ENDkwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDM1MzU5XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmV0cm9wZXJpdG9uZWFsIHNwYWNlXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJBYmRvbWluYWwgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiODI4NDkwMDFcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE4MSxcbiAgICAgICAgICAgICAgODUsXG4gICAgICAgICAgICAgIDU3XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUyXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IHZlbnRyaWNsZSBvZiBoZWFydFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTMyNTAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjU4ODNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodCBWZW50cmljbGVcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNhcmRpYWMgU3RydWN0dXJlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjUzMDg1MDAyXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICA3MCxcbiAgICAgICAgICAgICAgMTYzLFxuICAgICAgICAgICAgICAxMTdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMjhcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwic2FsaXZhcnkgZ2xhbmRzXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNjEwMDdcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzNjA5OFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlNhbGl2YXJ5IGdsYW5kXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDcmFuaW9mYWNpYWwgQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjM4NTI5NDAwNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJQZWx2aWMgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjBcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJTZW1pbmFsIFZlc2ljbGVcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDM2NjI4XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtOTMwMDBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAyNDUsXG4gICAgICAgICAgICAgICAgICAxNzIsXG4gICAgICAgICAgICAgICAgICAxNDdcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgc2VtaW5hbCB2ZXNpY2xlXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMjQ1LFxuICAgICAgICAgICAgICAgICAgMTcyLFxuICAgICAgICAgICAgICAgICAgMTQ3XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgc2VtaW5hbCB2ZXNpY2xlXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNjQ3MzkwMDRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiRW5kb3Njb3B5IEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDA0MFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlNob3VsZGVyXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzNzAwNFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQyMjIwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTc3LFxuICAgICAgICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgICAgICAgMTAxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IHNob3VsZGVyXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTc3LFxuICAgICAgICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgICAgICAgMTAxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgc2hvdWxkZXJcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxNjk4MjAwNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTc3LFxuICAgICAgICAgICAgICAxMjQsXG4gICAgICAgICAgICAgIDkyXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU0XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInNraW4gb2YgYWJkb21pbmFsIHdhbGxcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0wMjQ4MFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjIyMTY2XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiU2tpbiBvZiBhYmRvbWVuXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJBYmRvbWluYWwgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzUwOTMwMDRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE3MyxcbiAgICAgICAgICAgICAgMTIxLFxuICAgICAgICAgICAgICA4OFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJza2luIG9mIHRob3JhY2ljIHdhbGxcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0wMjQyNFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjIyMTQ5XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiU2tpbiBvZiBjaGVzdFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiVGhvcmFjaWMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc0MTYwMDA0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyNDEsXG4gICAgICAgICAgICAgIDIxMyxcbiAgICAgICAgICAgICAgMTQ0XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDMxXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInNrdWxsXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMTExMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzNzMwM1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlNrdWxsXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjg5NTQ2MDAwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyMDUsXG4gICAgICAgICAgICAgIDE2NyxcbiAgICAgICAgICAgICAgMTQyXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU0XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInNtYWxsIGJvd2VsXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNTgwMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyMTg1MlwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlNtYWxsIEludGVzdGluZVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQWJkb21pbmFsIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjMwMzE1MDA1XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxODIsXG4gICAgICAgICAgICAgIDEwNSxcbiAgICAgICAgICAgICAgMTA3XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDI4XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInNvZnQgcGFsYXRlXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNTExMjBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzMDIxOVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlNvZnQgcGFsYXRlXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDcmFuaW9mYWNpYWwgQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjQ5NDYwMDAwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyNDQsXG4gICAgICAgICAgICAgIDIxNCxcbiAgICAgICAgICAgICAgNDlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwic3BpbmFsIGNvcmRcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BNzAxMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDM3OTI1XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiU3BpbmFsIGNvcmRcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjc0ODAwOFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjAwLFxuICAgICAgICAgICAgICAyMDAsXG4gICAgICAgICAgICAgIDIxNVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJncmF5IG1hdHRlciBvZiBzcGluYWwgY29yZFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUE3MDIwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzA0NzU4NTNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJTcGluYWwgY29yZCBncmF5IG1hdHRlclwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxMjk1ODAwM1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjUwLFxuICAgICAgICAgICAgICAyNTAsXG4gICAgICAgICAgICAgIDIyNVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJ3aGl0ZSBtYXR0ZXIgb2Ygc3BpbmFsIGNvcmRcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BNzA3MFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwNDU4NDU3XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiU3BpbmFsIGNvcmQgd2hpdGUgbWF0dGVyXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI3MDg4MDAxXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyNDQsXG4gICAgICAgICAgICAgIDIxNyxcbiAgICAgICAgICAgICAgMTU0XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU1XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInN0ZXJudW1cIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0xMTIxMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDM4MjkzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiU3Rlcm51bVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiVGhvcmFjaWMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjU2ODczMDAyXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyMTYsXG4gICAgICAgICAgICAgIDEzMixcbiAgICAgICAgICAgICAgMTA1XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDMxXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInN0b21hY2hcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC01NzAwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDM4MzUxXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiU3RvbWFjaFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI2OTY5NTAwM1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgODgsXG4gICAgICAgICAgICAgIDEwNixcbiAgICAgICAgICAgICAgMjE1XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInN1YmFyYWNobm9pZCBzcGFjZVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUExNTAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzg1MjdcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJTdWJhcmFjaG5vaWQgc3BhY2VcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzU5NTEwMDZcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlN1YnN0YW50aWEgbmlncmFcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDM4NTkwXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTUxNjBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgMTA4LFxuICAgICAgICAgICAgICAgICAgMTEyXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IHN1YnN0YW50aWEgbmlncmFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgMTA4LFxuICAgICAgICAgICAgICAgICAgMTEyXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgc3Vic3RhbnRpYSBuaWdyYVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjcwMDA3MDA3XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJTdXBlcmlvciBsb25naXR1ZGluYWwgZmFzY2ljdWx1c1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjgyNzBcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMjgyMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDEyNyxcbiAgICAgICAgICAgICAgICAgIDE1MCxcbiAgICAgICAgICAgICAgICAgIDg4XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IHN1cGVyaW9yIGxvbmdpdHVkaW5hbCBmYXNjaWN1bHVzXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTI3LFxuICAgICAgICAgICAgICAgICAgMTUwLFxuICAgICAgICAgICAgICAgICAgODhcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBzdXBlcmlvciBsb25naXR1ZGluYWwgZmFzY2ljdWx1c1wiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjg5MjAyMDA5XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNyYW5pb2ZhY2lhbCBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMjhcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJUZW1wb3JhbCBib25lXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzOTQ4NFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTExMTMwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgICAgICAgMjQzLFxuICAgICAgICAgICAgICAgICAgMTUyXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IHRlbXBvcmFsIGJvbmVcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAgICAgICAyNDMsXG4gICAgICAgICAgICAgICAgICAxNTJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCB0ZW1wb3JhbCBib25lXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNjA5MTEwMDNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlRlbXBvcmFsIGxvYmVcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDM5NDg1XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTI1MDBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNjIsXG4gICAgICAgICAgICAgICAgICAxMTUsXG4gICAgICAgICAgICAgICAgICAxMDVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgdGVtcG9yYWwgbG9iZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE2MixcbiAgICAgICAgICAgICAgICAgIDExNSxcbiAgICAgICAgICAgICAgICAgIDEwNVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IHRlbXBvcmFsIGxvYmVcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3ODI3NzAwMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVGhhbGFtdXNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwNDU4MjcxXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDA1OTNcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxMjIsXG4gICAgICAgICAgICAgICAgICAxMDEsXG4gICAgICAgICAgICAgICAgICAzOFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCB0aGFsYW11c1wiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgICAgIDEwMSxcbiAgICAgICAgICAgICAgICAgIDM4XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgdGhhbGFtdXNcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxMTk0MDYwMDBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlRoaWdoXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzOTg2NlwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQ5MTAwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTc3LFxuICAgICAgICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgICAgICAgMTAxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IHRoaWdoXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTc3LFxuICAgICAgICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgICAgICAgMTAxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgdGhpZ2hcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI2ODM2NzAwMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjI2LFxuICAgICAgICAgICAgICAyMDIsXG4gICAgICAgICAgICAgIDEzNFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJ0aG9yYWNpYyB2ZXJ0ZWJyYWwgY29sdW1uXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMTE1MDJcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDU4MTI2OVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlRob3JhY2ljIHNwaW5lXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJUaG9yYWNpYyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTIyNDk1MDA2XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxNzcsXG4gICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgMTAxXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU1XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInRob3JheFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQzMDAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzA4MTcwOTZcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJUaG9yYXhcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlRob3JhY2ljIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1MTE4NTAwOFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgNDcsXG4gICAgICAgICAgICAgIDE1MCxcbiAgICAgICAgICAgICAgMTAzXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU1XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInRoeW11c1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUM4MDAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwNDAxMTNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJUaHltdXNcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlRob3JhY2ljIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI5ODc1MDA5XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICA2MixcbiAgICAgICAgICAgICAgMTYyLFxuICAgICAgICAgICAgICAxMTRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjYxMTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwidGh5cm9pZCBnbGFuZFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUI2MDAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwNDAxMzJcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJUaHlyb2lkXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJNZWRpYXN0aW51bSBBbmF0b215IEZpbmRpbmcgb3IgRmVhdHVyZVwiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjY5NzQ4MDA2XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxNjYsXG4gICAgICAgICAgICAgIDg0LFxuICAgICAgICAgICAgICA5NFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAyOFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJ0b25ndWVcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC01MzAwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDQwNDA4XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVG9uZ3VlXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDcmFuaW9mYWNpYWwgQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjIxOTc0MDA3XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAgIDI1MCxcbiAgICAgICAgICAgICAgMjIwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDI4XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInRlZXRoXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNTQwMTBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDA0MDQyNlwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlRvb3RoXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDcmFuaW9mYWNpYWwgQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjM4MTk5MDA4XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxODIsXG4gICAgICAgICAgICAgIDIyOCxcbiAgICAgICAgICAgICAgMjU1XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU1XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInRyYWNoZWFcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0yNTAwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDQwNTc4XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVHJhY2hlYVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiVGhvcmFjaWMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjQ0NTY3MDAxXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxNjYsXG4gICAgICAgICAgICAgIDcwLFxuICAgICAgICAgICAgICAzOFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNjExM1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJ0cmljdXNwaWQgdmFsdmVcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0zNTEwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDQwOTYwXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVHJpY3VzcGlkIFZhbHZlXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJNZWRpYXN0aW51bSBBbmF0b215IEZpbmRpbmcgb3IgRmVhdHVyZVwiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjQ2MDMwMDAzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJVbmNpbmF0ZSBmYXNjaWN1bHVzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIyODI3MVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEyODMwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTA2LFxuICAgICAgICAgICAgICAgICAgMTc0LFxuICAgICAgICAgICAgICAgICAgMTU1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IHVuY2luYXRlIGZhc2NpY3VsdXNcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxMDYsXG4gICAgICAgICAgICAgICAgICAxNzQsXG4gICAgICAgICAgICAgICAgICAxNTVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCB1bmNpbmF0ZSBmYXNjaWN1bHVzXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjYyMzAwMDNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlVwcGVyIGFybVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzA0NDY1MTZcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EODIwMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBhcm1cIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNzcsXG4gICAgICAgICAgICAgICAgICAxMjIsXG4gICAgICAgICAgICAgICAgICAxMDFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBhcm1cIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI0MDk4MzAwMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDMxXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVXBwZXIgbGltYlwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTY1NTVcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EODAwMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCB1cHBlciBsaW1iXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTc3LFxuICAgICAgICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgICAgICAgMTAxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgdXBwZXIgbGltYlwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjUzMTIwMDA3XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlRob3JhY2ljIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlVwcGVyIGxvYmUgb2YgbHVuZ1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjU3NTZcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0yODgyMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3MixcbiAgICAgICAgICAgICAgICAgIDEzOCxcbiAgICAgICAgICAgICAgICAgIDExNVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJzdXBlcmlvciBsb2JlIG9mIHJpZ2h0IGx1bmdcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNzIsXG4gICAgICAgICAgICAgICAgICAxMzgsXG4gICAgICAgICAgICAgICAgICAxMTVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwic3VwZXJpb3IgbG9iZSBvZiBsZWZ0IGx1bmdcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI0NTY1MzAwOVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTI0LFxuICAgICAgICAgICAgICAxODYsXG4gICAgICAgICAgICAgIDIyM1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJ1cmV0aHJhXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNzUwMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDA0MTk2N1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlVyZXRocmFcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTM2NDgwMDdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIwMyxcbiAgICAgICAgICAgICAgMTM2LFxuICAgICAgICAgICAgICAxMTZcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTRcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwidXJpbmFyeSBzeXN0ZW1cIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC03MDAwMVwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMxNTA4NzUzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVXJpbmFyeSBzeXN0ZW1cIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkFiZG9taW5hbCBPcmdhbiBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxMjI0ODkwMDVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgICAgMTgxLFxuICAgICAgICAgICAgICAxNThcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjBcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwidXRlcnVzXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtODMwMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDA0MjE0OVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlV0ZXJ1c1wiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiUGVsdmljIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjM1MDM5MDA3XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxOTMsXG4gICAgICAgICAgICAgIDEyMyxcbiAgICAgICAgICAgICAgMTAzXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTYwXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInZhZ2luYVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTgyMDAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwNDIyMzJcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJWYWdpbmFcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlBlbHZpYyBPcmdhbiBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3Njc4NDAwMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJQZWx2aWMgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjBcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJWYXMgZGVmZXJlbnNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDQyMzYwXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtOTYwMDBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAyNDEsXG4gICAgICAgICAgICAgICAgICAxNzIsXG4gICAgICAgICAgICAgICAgICAxNTFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgZGVmZXJlbnQgZHVjdFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDI0MSxcbiAgICAgICAgICAgICAgICAgIDE3MixcbiAgICAgICAgICAgICAgICAgIDE1MVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGRlZmVyZW50IGR1Y3RcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1NzY3MTAwN1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDMxXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiWnlnb21hXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDA0MzUzOVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTExMTY2XCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgICAgICAgMTY3XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IHp5Z29tYXRpYyBib25lXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxMzg4MTAwNlwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcInNob3dBbmF0b215XCI6IGZhbHNlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTW9ycGhvbG9naWNhbGx5IEFsdGVyZWQgU3RydWN0dXJlXCIsXG4gICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNDk3NTUwMDNcIixcbiAgICAgICAgXCJjaWRcIjogXCI3MDUxXCIsXG4gICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIyMTE5OFwiLFxuICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIk0tMDEwMDBcIixcbiAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiU2VnbWVudGF0aW9uIFByb3BlcnR5IENhdGVnb3JpZXNcIixcbiAgICAgICAgXCJUeXBlXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTQ1LFxuICAgICAgICAgICAgICA2MCxcbiAgICAgICAgICAgICAgNjZcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQmxvb2QgY2xvdFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJjbG90XCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTlcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDMwMjE0OFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJNLTM1MDAwXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMZXNpb24gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzU3NTMwMDlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIwNSxcbiAgICAgICAgICAgICAgMjA1LFxuICAgICAgICAgICAgICAxMDBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQ3lzdFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJjeXN0XCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTlcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAxMDcwOVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJNLTMzNDBBXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMZXNpb24gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzY3NjQzMDAxXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxNDAsXG4gICAgICAgICAgICAgIDIyNCxcbiAgICAgICAgICAgICAgMjI4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkVkZW1hXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImVkZW1hXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTlcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAxMzYwNFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJNLTM2MzAwXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMZXNpb24gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzk2NTQwMDJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE1MCxcbiAgICAgICAgICAgICAgOTgsXG4gICAgICAgICAgICAgIDgzXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkVtYm9sdXNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiZW1ib2xpc21cIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1OVwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMxNzA0MjEyXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIk0tMzUzMDBcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxlc2lvbiBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1NTU4NDAwNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTg4LFxuICAgICAgICAgICAgICA2NSxcbiAgICAgICAgICAgICAgMjhcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiSGVtb3JyaGFnZVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJibGVlZGluZ1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU5XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTkwODBcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiTS0zNzAwMFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGVzaW9uIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjUwOTYwMDA1XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxNDQsXG4gICAgICAgICAgICAgIDIzOCxcbiAgICAgICAgICAgICAgMTQ0XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk1hc3NcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibWFzc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU5XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzA1Nzc1NTlcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiTS0wMzAwMFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGVzaW9uIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjQxNDcwMDdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIxNixcbiAgICAgICAgICAgICAgMTkxLFxuICAgICAgICAgICAgICAyMTZcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTmVjcm9zaXNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibmVjcm9zaXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1OVwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDI3NTQwXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIk0tNTQwMDBcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxlc2lvbiBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI2NTc0MDAxXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwic2hvd0FuYXRvbXlcIjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkJvZHkgU3Vic3RhbmNlXCIsXG4gICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiOTE3MjAwMDJcIixcbiAgICAgICAgXCJjaWRcIjogXCJcIixcbiAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwNTA0MDgyXCIsXG4gICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EMDA4MFwiLFxuICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJcIixcbiAgICAgICAgXCJUeXBlXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMTQ1LFxuICAgICAgICAgICAgICAzMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJCaWxlXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImJpbGVcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2NlwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDA1Mzg4XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNjA2NTBcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzAxNTAwMDRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE3MCxcbiAgICAgICAgICAgICAgMjUwLFxuICAgICAgICAgICAgICAyNTBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQm9keSBmbHVpZFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJmbHVpZFwiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTY2XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMDU4ODlcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EMDA3MFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzMjQ1NzAwNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgNzgsXG4gICAgICAgICAgICAgIDYzLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkZlY2VzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImZlY2VzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAxNTczM1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTU5NjY2XCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjM5NDc3MDAyXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyMTgsXG4gICAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgICAgMjU1XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkdhc1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJnYXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2NlwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDE3MTEwXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkMtMTAwODBcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzQ5NDcwMDlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIxNCxcbiAgICAgICAgICAgICAgMjMwLFxuICAgICAgICAgICAgICAxMzBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVXJpbmVcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwidXJpbmVcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2NlwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDQyMDM2XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNzAwNjBcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzgwMTQwMDVcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJzaG93QW5hdG9teVwiOiBmYWxzZVxuICAgICAgfVxuICAgIF1cbiAgfVxufWA7XG5cbmNvbnN0IHBhcnNlZEpzb24gPSBKU09OLnBhcnNlKGpzb24pO1xuXG5leHBvcnQgZGVmYXVsdCBwYXJzZWRKc29uO1xuIiwiaW1wb3J0IGluaXQsIHsgVE9PTF9OQU1FUyB9IGZyb20gJy4vaW5pdC5qcyc7XG4vLyBpbXBvcnQgU2VnbWVudGF0aW9uTWVudSBmcm9tICcuL2NvbXBvbmVudHMvc2VnbWVudGF0aW9uTWVudS9TZWdtZW50YXRpb25NZW51LmpzJztcbi8vIGltcG9ydCBSb2lDb250b3VyTWVudSBmcm9tICcuL2NvbXBvbmVudHMvcm9pQ29udG91ck1lbnUvUm9pQ29udG91ck1lbnUuanMnO1xuXG5jb25zdCBUT09MQkFSX0JVVFRPTl9UWVBFUyA9IHtcbiAgQ09NTUFORDogJ2NvbW1hbmQnLFxuICBTRVRfVE9PTF9BQ1RJVkU6ICdzZXRUb29sQWN0aXZlJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvKipcbiAgICogT25seSByZXF1aXJlZCBwcm9wZXJ0eS4gU2hvdWxkIGJlIGEgdW5pcXVlIHZhbHVlIGFjcm9zcyBhbGwgZXh0ZW5zaW9ucy5cbiAgICovXG4gIGlkOiAnb2hpZi1zZWdtZW50YXRpb24tZXh0ZW5zaW9uJyxcblxuICBwcmVSZWdpc3RyYXRpb24oY29uZmlndXJhdGlvbiA9IHt9KSB7XG4gICAgaW5pdChjb25maWd1cmF0aW9uKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVnaXN0ZXJzIG9uZSBvciBtb3JlIG5hbWVkIGNvbW1hbmRzIHNjb3BlZCB0byBhIGNvbnRleHQuIENvbW1hbmRzIGFyZVxuICAgKiB0aGUgcHJpbWFyeSBtZWFucyBmb3IuLi5cbiAgICovXG4gIGdldENvbW1hbmRzTW9kdWxlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkZWZhdWx0Q29udGV4dDogJ1ZJRVdFUicsXG4gICAgICBhY3Rpb25zOiBbXSxcbiAgICAgIGRlZmluaXRpb25zOiBbXVxuICAgIH07XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFsbG93cyB5b3UgdG8gcHJvdmlkZSB0b29sYmFyIGRlZmluaXRpb25zIHRoYXQgd2lsbCBiZSBtZXJnZWQgd2l0aCBhbnlcbiAgICogZXhpc3RpbmcgYXBwbGljYXRpb24gdG9vbGJhciBjb25maWd1cmF0aW9uLiBVc2VkIHRvIGRldGVybWluZSB3aGljaFxuICAgKiBidXR0b25zIHNob3VsZCBiZSB2aXNpYmxlIHdoZW4sIHRoZWlyIG9yZGVyLCB3aGF0IGhhcHBlbnMgd2hlbiB0aGV5J3JlXG4gICAqIGNsaWNrZWQsIGV0Yy5cbiAgICovXG4gIGdldFRvb2xiYXJNb2R1bGUoKSB7XG4gICAgY29uc29sZS5sb2coJ2luIGdldFRvb2xiYXJNb2R1bGU6Jyk7XG4gICAgY29uc29sZS5sb2coVE9PTF9OQU1FUyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGVmaW5pdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnZnJlZWhhbmRSb2lUb29scycsXG4gICAgICAgICAgbGFiZWw6ICdST0knLFxuICAgICAgICAgIGljb246ICdsZXZlbCcsXG4gICAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ0ZyZWVoYW5kUm9pJyxcbiAgICAgICAgICAgICAgbGFiZWw6ICdEcmF3JyxcbiAgICAgICAgICAgICAgaWNvbjogJ2xldmVsJyxcbiAgICAgICAgICAgICAgdHlwZTogVE9PTEJBUl9CVVRUT05fVFlQRVMuU0VUX1RPT0xfQUNUSVZFLFxuICAgICAgICAgICAgICBjb21tYW5kTmFtZTogJ3NldFRvb2xBY3RpdmUnLFxuICAgICAgICAgICAgICBjb21tYW5kT3B0aW9uczogeyB0b29sTmFtZTogVE9PTF9OQU1FUy5GUkVFSEFORF9ST0lfM0RfVE9PTCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ0ZyZWVoYW5kUm9pU2N1bHB0b3InLFxuICAgICAgICAgICAgICBsYWJlbDogJ1NjdWxwdCcsXG4gICAgICAgICAgICAgIGljb246ICdsZXZlbCcsXG4gICAgICAgICAgICAgIHR5cGU6IFRPT0xCQVJfQlVUVE9OX1RZUEVTLlNFVF9UT09MX0FDVElWRSxcbiAgICAgICAgICAgICAgY29tbWFuZE5hbWU6ICdzZXRUb29sQWN0aXZlJyxcbiAgICAgICAgICAgICAgY29tbWFuZE9wdGlvbnM6IHsgdG9vbE5hbWU6IFRPT0xfTkFNRVMuRlJFRUhBTkRfUk9JXzNEX1NDVUxQVE9SX1RPT0wgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnYnJ1c2hUb29scycsXG4gICAgICAgICAgbGFiZWw6ICdTZWdtZW50JyxcbiAgICAgICAgICBpY29uOiAnbGV2ZWwnLFxuICAgICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdCcnVzaCcsXG4gICAgICAgICAgICAgIGxhYmVsOiAnTWFudWFsJyxcbiAgICAgICAgICAgICAgaWNvbjogJ2xldmVsJyxcbiAgICAgICAgICAgICAgdHlwZTogVE9PTEJBUl9CVVRUT05fVFlQRVMuU0VUX1RPT0xfQUNUSVZFLFxuICAgICAgICAgICAgICBjb21tYW5kTmFtZTogJ3NldFRvb2xBY3RpdmUnLFxuICAgICAgICAgICAgICBjb21tYW5kT3B0aW9uczogeyB0b29sTmFtZTogVE9PTF9OQU1FUy5CUlVTSF8zRF9UT09MIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnQnJ1c2gzREhVR2F0ZWRUb29sJyxcbiAgICAgICAgICAgICAgbGFiZWw6ICdTbWFydCBDVCcsXG4gICAgICAgICAgICAgIGljb246ICdsZXZlbCcsXG4gICAgICAgICAgICAgIHR5cGU6IFRPT0xCQVJfQlVUVE9OX1RZUEVTLlNFVF9UT09MX0FDVElWRSxcbiAgICAgICAgICAgICAgY29tbWFuZE5hbWU6ICdzZXRUb29sQWN0aXZlJyxcbiAgICAgICAgICAgICAgY29tbWFuZE9wdGlvbnM6IHsgdG9vbE5hbWU6IFRPT0xfTkFNRVMuQlJVU0hfM0RfSFVfR0FURURfVE9PTCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ0JydXNoM0RBdXRvR2F0ZWRUb29sJyxcbiAgICAgICAgICAgICAgbGFiZWw6ICdBdXRvJyxcbiAgICAgICAgICAgICAgaWNvbjogJ2xldmVsJyxcbiAgICAgICAgICAgICAgdHlwZTogVE9PTEJBUl9CVVRUT05fVFlQRVMuU0VUX1RPT0xfQUNUSVZFLFxuICAgICAgICAgICAgICBjb21tYW5kTmFtZTogJ3NldFRvb2xBY3RpdmUnLFxuICAgICAgICAgICAgICBjb21tYW5kT3B0aW9uczogeyB0b29sTmFtZTogVE9PTF9OQU1FUy5CUlVTSF8zRF9BVVRPX0dBVEVEX1RPT0wgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGRlZmF1bHRDb250ZXh0OiAnQUNUSVZFX1ZJRVdQT1JUOjpDT1JORVJTVE9ORSdcbiAgICB9O1xuICB9LFxuXG4gIC8qKlxuICAgKiBOb3QgeWV0IGltcGxlbWVudGVkXG4gICAqL1xuICBnZXRQYW5lbE1vZHVsZTogKCkgPT4ge1xuICAgIC8qXG4gICAgcmV0dXJuIHtcbiAgICAgIG1lbnVPcHRpb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiAndGgtbGlzdCcsXG4gICAgICAgICAgbGFiZWw6ICdTZWdtZW50cycsXG4gICAgICAgICAgdGFyZ2V0OiAnc2VnbWVudC1wYW5lbCdcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGNvbXBvbmVudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnc2VnbWVudC1wYW5lbCcsXG4gICAgICAgICAgY29tcG9uZW50OlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgZGVmYXVsdENvbnRleHQ6IFsnVklFV0VSJ11cbiAgICB9O1xuICAgICovXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBzdG9yZSwgcmVnaXN0ZXIsIGFkZFRvb2wgfSBmcm9tICdjb3JuZXJzdG9uZS10b29scyc7XG5pbXBvcnQgZnJlZWhhbmQzRE1vZHVsZSBmcm9tICcuL21vZHVsZXMvZnJlZWhhbmQzRE1vZHVsZS5qcyc7XG5pbXBvcnQgZXh0ZW5kQnJ1c2hNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL2V4dGVuZEJydXNoTW9kdWxlLmpzJztcblxuaW1wb3J0IEJydXNoM0RUb29sIGZyb20gJy4vdG9vbHMvQnJ1c2gzRFRvb2wuanMnO1xuaW1wb3J0IEJydXNoM0RIVUdhdGVkVG9vbCBmcm9tICcuL3Rvb2xzL0JydXNoM0RIVUdhdGVkVG9vbC5qcyc7XG5pbXBvcnQgQnJ1c2gzREF1dG9HYXRlZFRvb2wgZnJvbSAnLi90b29scy9CcnVzaDNEQXV0b0dhdGVkVG9vbC5qcyc7XG5pbXBvcnQgRnJlZWhhbmRSb2kzRFRvb2wgZnJvbSAnLi90b29scy9GcmVlaGFuZFJvaTNEVG9vbC5qcyc7XG5pbXBvcnQgRnJlZWhhbmRSb2kzRFNjdWxwdG9yVG9vbCBmcm9tICcuL3Rvb2xzL0ZyZWVoYW5kUm9pM0RTY3VscHRvclRvb2wuanMnO1xuXG5sZXQgVE9PTF9OQU1FUyA9IHt9O1xuXG5leHBvcnQgeyBUT09MX05BTUVTIH07XG5cbmNvbnN0IG1vZHVsZXMgPSBzdG9yZS5tb2R1bGVzO1xuXG5jb25zdCBkZWZhdWx0Q29uZmlnID0ge1xuICBtYXhSYWRpdXM6IDY0LFxuICBob2xlRmlsbDogMixcbiAgaG9sZUZpbGxSYW5nZTogWzAsIDIwXSxcbiAgc3RyYXlSZW1vdmU6IDUsXG4gIHN0cmF5UmVtb3ZlUmFuZ2U6IFswLCA5OV0sXG4gIGludGVycG9sYXRlOiBmYWxzZSxcbiAgc2hvd0ZyZWVoYW5kU3RhdHM6IGZhbHNlLFxuICBicnVzaDNkVG9vbE5hbWU6ICdCcnVzaDNEVG9vbCcsXG4gIGJydXNoM0RIVUdhdGVkVG9vbE5hbWU6ICdCcnVzaDNESFVHYXRlZFRvb2wnLFxuICBicnVzaDNEQXV0b0dhdGVkVG9vbDogJ0JydXNoM0RBdXRvR2F0ZWRUb29sJyxcbiAgZnJlZWhhbmRSb2kzRFRvb2w6ICdGcmVlaGFuZFJvaTNEVG9vbCcsXG4gIGZyZWVoYW5kUm9pM0RTY3VscHRvclRvb2w6ICdGcmVlaGFuZFJvaTNEU2N1bHB0b3JUb29sJyxcbiAgZ2F0ZXM6IFtcbiAgICB7XG4gICAgICAvLyBodHRwczovL3d3dy5uY2JpLm5sbS5uaWguZ292L3BtYy9hcnRpY2xlcy9QTUM0MzA5NTIyL1xuICAgICAgbmFtZTogJ2FkaXBvc2UnLFxuICAgICAgcmFuZ2U6IFstMTkwLCAtMzBdXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBodHRwczovL3d3dy5uY2JpLm5sbS5uaWguZ292L3BtYy9hcnRpY2xlcy9QTUM0MzA5NTIyL1xuICAgICAgbmFtZTogJ211c2NsZScsXG4gICAgICByYW5nZTogWy0yOSwgMTUwXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2N1c3RvbScsXG4gICAgICByYW5nZTogWzAsIDEwMF1cbiAgICB9XG4gIF1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoY29uZmlndXJhdGlvbiA9IHt9KSB7XG4gIGNvbnN0IGJydXNoTW9kdWxlID0gbW9kdWxlcy5icnVzaDtcbiAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdENvbmZpZywgY29uZmlndXJhdGlvbik7XG5cbiAgZXh0ZW5kQnJ1c2hNb2R1bGUoYnJ1c2hNb2R1bGUsIGNvbmZpZyk7XG5cbiAgcmVnaXN0ZXIoJ21vZHVsZScsICdmcmVlaGFuZDNEJywgZnJlZWhhbmQzRE1vZHVsZSk7XG4gIGNvbnN0IGZyZWVoYW5kM0RTdG9yZSA9IG1vZHVsZXMuZnJlZWhhbmQzRDtcblxuICBmcmVlaGFuZDNEU3RvcmUuc3RhdGUuaW50ZXJwb2xhdGUgPSBjb25maWcuaW50ZXJwb2xhdGU7XG4gIGZyZWVoYW5kM0RTdG9yZS5zdGF0ZS5kaXNwbGF5U3RhdHMgPSBjb25maWcuc2hvd0ZyZWVoYW5kU3RhdHM7XG5cbiAgYWRkVG9vbChCcnVzaDNEVG9vbCwgeyBuYW1lOiBjb25maWcuYnJ1c2gzZFRvb2xOYW1lIH0pO1xuICBhZGRUb29sKEJydXNoM0RIVUdhdGVkVG9vbCwgeyBuYW1lOiBjb25maWcuYnJ1c2gzREhVR2F0ZWRUb29sTmFtZSB9KTtcbiAgYWRkVG9vbChCcnVzaDNEQXV0b0dhdGVkVG9vbCwgeyBuYW1lOiBjb25maWcuYnJ1c2gzREF1dG9HYXRlZFRvb2wgfSk7XG4gIGFkZFRvb2woRnJlZWhhbmRSb2kzRFRvb2wsIHsgbmFtZTogY29uZmlnLmZyZWVoYW5kUm9pM0RUb29sIH0pO1xuICBhZGRUb29sKEZyZWVoYW5kUm9pM0RTY3VscHRvclRvb2wsIHtcbiAgICBuYW1lOiBjb25maWcuZnJlZWhhbmRSb2kzRFNjdWxwdG9yVG9vbCxcbiAgICByZWZlcmVuY2VkVG9vbE5hbWU6IGNvbmZpZy5mcmVlaGFuZFJvaTNEVG9vbFxuICB9KTtcblxuICAvLyBUT0RPIC0+IENsZWFuIHRoaXMgdXAgYSBiaXQgYWZ0ZXIgUFcuXG4gIFRPT0xfTkFNRVMuRlJFRUhBTkRfUk9JXzNEX1RPT0wgPSBjb25maWcuZnJlZWhhbmRSb2kzRFRvb2w7XG4gIFRPT0xfTkFNRVMuRlJFRUhBTkRfUk9JXzNEX1NDVUxQVE9SX1RPT0wgPSBjb25maWcuZnJlZWhhbmRSb2kzRFNjdWxwdG9yVG9vbDtcbiAgVE9PTF9OQU1FUy5CUlVTSF8zRF9UT09MID0gY29uZmlnLmJydXNoM2RUb29sTmFtZTtcbiAgVE9PTF9OQU1FUy5CUlVTSF8zRF9BVVRPX0dBVEVEX1RPT0wgPSBjb25maWcuYnJ1c2gzREF1dG9HYXRlZFRvb2w7XG4gIFRPT0xfTkFNRVMuQlJVU0hfM0RfSFVfR0FURURfVE9PTCA9IGNvbmZpZy5icnVzaDNESFVHYXRlZFRvb2xOYW1lO1xuXG4gIGNvbnNvbGUubG9nKGNvbmZpZyk7XG5cbiAgY29uc29sZS5sb2coVE9PTF9OQU1FUyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHRlbmRCcnVzaE1vZHVsZShicnVzaE1vZHVsZSwgY29uZmlnKSB7XG4gIGNvbnN0IGJydXNoU3RhdGUgPSBicnVzaE1vZHVsZS5zdGF0ZTtcbiAgY29uc3QgZ2V0dGVycyA9IGJydXNoTW9kdWxlLmdldHRlcnM7XG4gIGNvbnN0IHNldHRlcnMgPSBicnVzaE1vZHVsZS5zZXR0ZXJzO1xuXG4gIGJydXNoU3RhdGUuaG9sZUZpbGwgPSBjb25maWcuaG9sZUZpbGw7XG4gIGJydXNoU3RhdGUuaG9sZUZpbGxSYW5nZSA9IGNvbmZpZy5ob2xlRmlsbFJhbmdlO1xuICBicnVzaFN0YXRlLnN0cmF5UmVtb3ZlID0gY29uZmlnLnN0cmF5UmVtb3ZlO1xuICBicnVzaFN0YXRlLnN0cmF5UmVtb3ZlUmFuZ2UgPSBjb25maWcuc3RyYXlSZW1vdmVSYW5nZTtcbiAgYnJ1c2hTdGF0ZS5nYXRlcyA9IGNvbmZpZy5nYXRlcztcbiAgYnJ1c2hTdGF0ZS5hY3RpdmVHYXRlID0gYnJ1c2hTdGF0ZS5nYXRlc1swXS5uYW1lO1xuICBicnVzaFN0YXRlLm1heFJhZGl1cyA9IGNvbmZpZy5tYXhSYWRpdXM7XG5cbiAgZ2V0dGVycy5hY3RpdmVHYXRlUmFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlR2F0ZSA9IGJydXNoU3RhdGUuYWN0aXZlR2F0ZTtcbiAgICBjb25zdCBnYXRlcyA9IGJydXNoU3RhdGUuZ2F0ZXM7XG5cbiAgICBjb25zdCBnYXRlSW5kZXggPSBnYXRlcy5maW5kSW5kZXgoZWxlbWVudCA9PiB7XG4gICAgICByZXR1cm4gZWxlbWVudC5uYW1lID09PSBhY3RpdmVHYXRlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGJydXNoU3RhdGUuZ2F0ZXNbZ2F0ZUluZGV4XS5yYW5nZTtcbiAgfTtcblxuICBnZXR0ZXJzLmN1c3RvbUdhdGVSYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCBnYXRlcyA9IGJydXNoU3RhdGUuZ2F0ZXM7XG5cbiAgICBjb25zdCBnYXRlSW5kZXggPSBnYXRlcy5maW5kSW5kZXgoZWxlbWVudCA9PiB7XG4gICAgICByZXR1cm4gZWxlbWVudC5uYW1lID09PSAnY3VzdG9tJztcbiAgICB9KTtcblxuICAgIHJldHVybiBicnVzaFN0YXRlLmdhdGVzW2dhdGVJbmRleF0ucmFuZ2U7XG4gIH07XG5cbiAgc2V0dGVycy5jdXN0b21HYXRlUmFuZ2UgPSAobWluLCBtYXgpID0+IHtcbiAgICBjb25zdCBnYXRlcyA9IGJydXNoU3RhdGUuZ2F0ZXM7XG5cbiAgICBjb25zdCBnYXRlSW5kZXggPSBnYXRlcy5maW5kSW5kZXgoZWxlbWVudCA9PiB7XG4gICAgICByZXR1cm4gZWxlbWVudC5uYW1lID09PSAnY3VzdG9tJztcbiAgICB9KTtcblxuICAgIGNvbnN0IGN1c3RvbUdhdGVSYW5nZSA9IGJydXNoU3RhdGUuZ2F0ZXNbZ2F0ZUluZGV4XS5yYW5nZTtcblxuICAgIGlmIChtaW4gIT09IG51bGwpIHtcbiAgICAgIGN1c3RvbUdhdGVSYW5nZVswXSA9IG1pbjtcbiAgICB9XG5cbiAgICBpZiAobWF4ICE9PSBudWxsKSB7XG4gICAgICBjdXN0b21HYXRlUmFuZ2VbMV0gPSBtYXg7XG4gICAgfVxuICB9O1xuXG4gIGdldHRlcnMuaW1wb3J0TWV0YWRhdGEgPSBzZXJpZXNJbnN0YW5jZVVpZCA9PiB7XG4gICAgaWYgKGJydXNoTW9kdWxlLnN0YXRlLmltcG9ydCAmJiBicnVzaE1vZHVsZS5zdGF0ZS5pbXBvcnRbc2VyaWVzSW5zdGFuY2VVaWRdKSB7XG4gICAgICByZXR1cm4gYnJ1c2hNb2R1bGUuc3RhdGUuaW1wb3J0W3Nlcmllc0luc3RhbmNlVWlkXTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH07XG5cbiAgc2V0dGVycy5pbXBvcnRNZXRhZGF0YSA9IChzZXJpZXNJbnN0YW5jZVVpZCwgbWV0YWRhdGEpID0+IHtcbiAgICAvLyBTdG9yZSB0aGF0IHdlJ3ZlIGltcG9ydGVkIGEgY29sbGVjdGlvbiBmb3IgdGhpcyBzZXJpZXMuXG4gICAgaWYgKCFicnVzaE1vZHVsZS5zdGF0ZS5pbXBvcnQpIHtcbiAgICAgIGJydXNoTW9kdWxlLnN0YXRlLmltcG9ydCA9IHt9O1xuICAgIH1cblxuICAgIGJydXNoTW9kdWxlLnN0YXRlLmltcG9ydFtzZXJpZXNJbnN0YW5jZVVpZF0gPSBtZXRhZGF0YTtcbiAgfTtcblxuICBzZXR0ZXJzLmltcG9ydE1vZGlmaWVkID0gc2VyaWVzSW5zdGFuY2VVaWQgPT4ge1xuICAgIGNvbnN0IGltcG9ydE1ldGFkYXRhID0gYnJ1c2hNb2R1bGUuc3RhdGUuaW1wb3J0W3Nlcmllc0luc3RhbmNlVWlkXTtcblxuICAgIGlmIChpbXBvcnRNZXRhZGF0YS5tb2RpZmllZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGltcG9ydE1ldGFkYXRhLm1vZGlmaWVkID0gdHJ1ZTtcblxuICAgIC8vIEphbWVzQVBldHRzXG4gICAgLy8gVE9ETzogRm9yY2UgdXBkYXRlIG9mIGNvbXBvbmVudC5cbiAgfTtcbn1cbiIsImltcG9ydCBjb3JuZXJzdG9uZSBmcm9tICdjb3JuZXJzdG9uZS1jb3JlJztcbmltcG9ydCBnZW5lcmF0ZVVJRCBmcm9tICcuLi91dGlsL2dlbmVyYXRlVUlELmpzJztcbmltcG9ydCBnZXRTZXJpZXNJbnN0YW5jZVVpZEZyb21FbmFibGVkRWxlbWVudCBmcm9tICcuLi91dGlsL2dldFNlcmllc0luc3RhbmNlVWlkRnJvbUVuYWJsZWRFbGVtZW50LmpzJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7c2VyaWVzW119IHNlcmllc0NvbGxlY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogW1xuICogICBzZXJpZXMxLFxuICogICBzZXJpZXMyXG4gKiBdO1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYge29iamVjdH0gc2VyaWVzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdWlkIFRoZSBzZXJpZXNJbnN0YW5jZVVpZFxuICogQHByb3BlcnR5IHtudW1iZXJ9IGFjdGl2ZVN0cnVjdHVyZVNldEluZGV4IFRoZSBhY3RpdmVTdHJ1Y3R1cmVTZXQgd2l0aGluIHRoZSBzZXJpZXMuXG4gKiBAcHJvcGVydHkge3N0cnVjdHVyZVNldFtdfSBzdHJ1Y3R1cmVTZXRDb2xsZWN0aW9uIEFuIGFycmF5IG9mIHN0cnVjdHVyZVNldHMuXG4gKlxuICogQGV4YW1wbGVcbiAqIHtcbiAqICB1aWQ6ICdteVNlcmllc0luc3RhbmNlVWlkJyxcbiAqICBhY3RpdmVTdHJ1Y3R1cmVTZXRJbmRleDogMCxcbiAqICBzdHJ1Y3R1cmVTZXRDb2xsZWN0aW9uLFxuICogfTtcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtvYmplY3R9IHN0cnVjdHVyZVNldFxuICogQHByb3BlcnR5IHtzdHJpbmd9IHVpZCBUaGUgc3RydWN0dXJlU2V0VWlkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbmFtZSBBIGh1bWFuIHJlYWRhYmxlIGRlc2NyaXB0b3Igb2YgdGhlIHN0cnVjdHVyZVNldC5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaXNMb2NrZWQgV2hldGhlciB0aGUgc3RydWN0dXJlU2V0IGlzIGltbXV0YWJsZS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gdmlzaWJsZSBXaGV0aGVyIHRoZSBzdHJ1Y3R1cmVTZXQgc2hvdWxkIGJlIHJlbmRlcmVkLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGFjdGl2ZVJPSUNvbnRvdXJJbmRleCBUaGUgaW5kZXggb2YgdGhlIGFjdGl2ZSBST0lDb250b3VyLlxuICogQHByb3BlcnR5IHtST0lDb250b3VyW119IFJPSUNvbnRvdXJDb2xsZWN0aW9uIEFuIGFycmF5IG9mIFJPSUNvbnRvdXJzLlxuICpcbiAqIEBleGFtcGxlXG4gKiB7XG4gKiAgIHVpZDogJ215U3RydWN0dXJlU2V0VWlkJyxcbiAqICAgbmFtZTogYG15TG92ZWx5U3RydWN0dXJlU2V0YCxcbiAqICAgaXNMb2NrZWQ6IGZhbHNlLFxuICogICB2aXNpYmxlOiB0cnVlLFxuICogICBhY3RpdmVST0lDb250b3VySW5kZXg6IDcsXG4gKiAgIFJPSUNvbnRvdXJDb2xsZWN0aW9uXG4gKiB9O1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYge29iamVjdH0gUk9JQ29udG91clxuICogQHByb3BlcnR5IHtzdHJpbmd9IHVpZCBUaGUgUk9JQ29udG91clVpZC5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuYW1lIEEgaHVtYW4gcmVhZGFibGUgZGVzY3JpcHRvciBvZiB0aGUgYmlvbG9naWNhbCBvYmplY3QgdGhlIGNvbnRvdXIgZW5jbG9zZXMuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gY29sb3IgQSBjc3MgY29sb3IgdG8gcmVuZGVyIHRoZSB2b2x1bWUgd2l0aC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBwb2x5Z29uQ291bnQgVGhlIG51bWJlciBvZiBwb2x5Z29ucyB0aGF0IGNvbXByaXNlIHRoZSBST0lDb250b3VyLlxuICpcbiAqIEBleGFtcGxlXG4gKiB7XG4gKiAgdWlkOiAnbXlST0lDb250b3VyVWlkJyxcbiAqICBuYW1lOiAnbXlMb3ZlbHlST0lDb250b3VyJyxcbiAqICBjb2xvcjogJ2Nvcm5mbG93ZXJibHVlJyxcbiAqICBwb2x5Z29uQ291bnQ6ICczNCdcbiAqIH07XG4gKi9cblxuLy8gRWFjaCBjb250b3VyIHJlZmVyZW5jZXMgYSBzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkLCBST0lDb250b3VyVWlkLlxuXG5jb25zdCBzdGF0ZSA9IHtcbiAgc2VyaWVzQ29sbGVjdGlvbjogW10sXG4gIGludGVycG9sYXRlOiBmYWxzZSxcbiAgZGlzcGxheVN0YXRzOiBmYWxzZVxufTtcblxuZnVuY3Rpb24gY2hlY2sob2JqZWN0LCBuYW1lKSB7XG4gIGlmICghb2JqZWN0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnN1ZmZpY2llbnQgaW5mb3JtYXRpb24gcHJvdmlkZWQsIG11c3QgcHJvdmlkZSAke25hbWV9LmApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNlcmllcyhzZXJpZXNJbnN0YW5jZVVpZCkge1xuICBjaGVjayhzZXJpZXNJbnN0YW5jZVVpZCwgJ3Nlcmllc0luc3RhbmNlVWlkJyk7XG5cbiAgcmV0dXJuIHN0YXRlLnNlcmllc0NvbGxlY3Rpb24uZmluZChzZXJpZXMgPT4ge1xuICAgIHJldHVybiBzZXJpZXMudWlkID09PSBzZXJpZXNJbnN0YW5jZVVpZDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFN0cnVjdHVyZVNldChzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkID0gJ0RFRkFVTFQnKSB7XG4gIGNoZWNrKHN0cnVjdHVyZVNldFVpZCwgJ3N0cnVjdHVyZVNldFVpZCcpO1xuXG4gIGNvbnN0IHNlcmllcyA9IGdldFNlcmllcyhzZXJpZXNJbnN0YW5jZVVpZCk7XG5cbiAgaWYgKCFzZXJpZXMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gc2VyaWVzLnN0cnVjdHVyZVNldENvbGxlY3Rpb24uZmluZChzdHJ1Y3R1cmVTZXQgPT4ge1xuICAgIHJldHVybiBzdHJ1Y3R1cmVTZXQudWlkID09PSBzdHJ1Y3R1cmVTZXRVaWQ7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRST0lDb250b3VyKHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQsIFJPSUNvbnRvdXJVaWQpIHtcbiAgY2hlY2soUk9JQ29udG91clVpZCwgJ1JPSUNvbnRvdXJVaWQnKTtcblxuICBjb25zdCBzdHJ1Y3R1cmVTZXQgPSBnZXRTdHJ1Y3R1cmVTZXQoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCk7XG5cbiAgaWYgKCFzdHJ1Y3R1cmVTZXQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gc3RydWN0dXJlU2V0LlJPSUNvbnRvdXJDb2xsZWN0aW9uLmZpbmQoUk9JQ29udG91ciA9PiB7XG4gICAgcmV0dXJuIFJPSUNvbnRvdXIgJiYgUk9JQ29udG91ci51aWQgPT09IFJPSUNvbnRvdXJVaWQ7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRST0lDb250b3VySW5kZXgoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCwgUk9JQ29udG91clVpZCkge1xuICBjaGVjayhST0lDb250b3VyVWlkLCAnUk9JQ29udG91clVpZCcpO1xuXG4gIGNvbnN0IHN0cnVjdHVyZVNldCA9IGdldFN0cnVjdHVyZVNldChzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkKTtcblxuICBpZiAoIXN0cnVjdHVyZVNldCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiBzdHJ1Y3R1cmVTZXQuUk9JQ29udG91ckNvbGxlY3Rpb24uZmluZEluZGV4KFJPSUNvbnRvdXIgPT4ge1xuICAgIHJldHVybiBST0lDb250b3VyLnVpZCA9PT0gUk9JQ29udG91clVpZDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEFjdGl2ZVN0cnVjdHVyZVNldEluZGV4KHNlcmllc0luc3RhbmNlVWlkKSB7XG4gIGNvbnN0IHNlcmllcyA9IGdldFNlcmllcyhzZXJpZXNJbnN0YW5jZVVpZCk7XG5cbiAgcmV0dXJuIHNlcmllcy5hY3RpdmVTdHJ1Y3R1cmVTZXRJbmRleDtcbn1cblxuZnVuY3Rpb24gZ2V0QWN0aXZlUk9JQ29udG91ckluZGV4KHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQgPSAnREVGQVVMVCcpIHtcbiAgY29uc3Qgc3RydWN0dXJlU2V0ID0gZ2V0U3RydWN0dXJlU2V0KHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQpO1xuXG4gIHJldHVybiBzdHJ1Y3R1cmVTZXQuYWN0aXZlUk9JQ29udG91ckluZGV4O1xufVxuXG5mdW5jdGlvbiBnZXRBY3RpdmVST0lDb250b3VyKHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQgPSAnREVGQVVMVCcpIHtcbiAgY29uc3Qgc3RydWN0dXJlU2V0ID0gZ2V0U3RydWN0dXJlU2V0KHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQpO1xuXG4gIGNvbnN0IGFjdGl2ZVJPSUNvbnRvdXJJbmRleCA9IHN0cnVjdHVyZVNldC5hY3RpdmVST0lDb250b3VySW5kZXg7XG5cbiAgaWYgKGFjdGl2ZVJPSUNvbnRvdXJJbmRleCA9PT0gbnVsbCB8fCBhY3RpdmVST0lDb250b3VySW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiBzdHJ1Y3R1cmVTZXQuUk9JQ29udG91ckNvbGxlY3Rpb25bYWN0aXZlUk9JQ29udG91ckluZGV4XTtcbn1cblxuZnVuY3Rpb24gc2V0U2VyaWVzKHNlcmllc0luc3RhbmNlVWlkKSB7XG4gIGNoZWNrKHNlcmllc0luc3RhbmNlVWlkKTtcblxuICBjb25zdCBzZXJpZXMgPSB7XG4gICAgdWlkOiBzZXJpZXNJbnN0YW5jZVVpZCxcbiAgICBhY3RpdmVTdHJ1Y3R1cmVTZXRJbmRleDogbnVsbCxcbiAgICBzdHJ1Y3R1cmVTZXRDb2xsZWN0aW9uOiBbXVxuICB9O1xuXG4gIHN0YXRlLnNlcmllc0NvbGxlY3Rpb24ucHVzaChzZXJpZXMpO1xuXG4gIC8vIEFkZCBhIGRlZmF1bHQgc3RydWN0dXJlU2V0IGZvciB0aGUgc2VyaWVzLlxuICBzZXRTdHJ1Y3R1cmVTZXQoc2VyaWVzSW5zdGFuY2VVaWQsICdkZWZhdWx0Jywge1xuICAgIHVpZDogJ0RFRkFVTFQnXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRTdHJ1Y3R1cmVTZXQoc2VyaWVzSW5zdGFuY2VVaWQsIG5hbWUsIG9wdGlvbnMgPSB7fSkge1xuICBjaGVjayhuYW1lLCAnbmFtZScpO1xuXG4gIGxldCBzZXJpZXMgPSBnZXRTZXJpZXMoc2VyaWVzSW5zdGFuY2VVaWQpO1xuXG4gIGlmICghc2VyaWVzKSB7XG4gICAgLy8gR2VuZXJhdGUgdGhlIHNlcmllcy5cbiAgICBzZXRTZXJpZXMoc2VyaWVzSW5zdGFuY2VVaWQpO1xuICAgIHNlcmllcyA9IGdldFNlcmllcyhzZXJpZXNJbnN0YW5jZVVpZCk7XG4gIH1cblxuICBjb25zdCBzdHJ1Y3R1cmVTZXQgPSB7XG4gICAgdWlkOiBvcHRpb25zLnVpZCA/IG9wdGlvbnMudWlkIDogZ2VuZXJhdGVVSUQoKSxcbiAgICBuYW1lLFxuICAgIGlzTG9ja2VkOiBvcHRpb25zLmlzTG9ja2VkID8gb3B0aW9ucy5pc0xvY2tlZCA6IGZhbHNlLFxuICAgIHZpc2libGU6IG9wdGlvbnMudmlzaWJsZSA/IG9wdGlvbnMudmlzaWJsZSA6IHRydWUsXG4gICAgYWN0aXZlUk9JQ29udG91ckluZGV4OiBvcHRpb25zLmFjdGl2ZVJPSUNvbnRvdXJJbmRleCAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5hY3RpdmVST0lDb250b3VySW5kZXggOiBudWxsLFxuICAgIFJPSUNvbnRvdXJDb2xsZWN0aW9uOiBbXVxuICB9O1xuXG4gIHNlcmllcy5zdHJ1Y3R1cmVTZXRDb2xsZWN0aW9uLnB1c2goc3RydWN0dXJlU2V0KTtcbn1cblxuZnVuY3Rpb24gc2V0Uk9JQ29udG91cihzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkLCBuYW1lLCBvcHRpb25zID0ge30pIHtcbiAgY2hlY2sobmFtZSwgJ25hbWUnKTtcblxuICBjb25zdCBzdHJ1Y3R1cmVTZXQgPSBnZXRTdHJ1Y3R1cmVTZXQoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCk7XG5cbiAgaWYgKCFzdHJ1Y3R1cmVTZXQpIHtcbiAgICAvLyBDYW4ndCBnZW5lcmF0ZSB0aGUgc3RydWN0dXJlU2V0IGFzIG5vdCBlbm91Z2ggaW5mbyAobm8gbmFtZSkuXG4gICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZ2VuZXJhdGUgUk9JQ29udG91ciwgYXMgdGhlIHN0cnVjdHVyZVNldCB3aXRoICR7c3RydWN0dXJlU2V0VWlkfSBkb2VzIG5vdCBleGlzdC5gKTtcbiAgfVxuXG4gIGNvbnN0IFJPSUNvbnRvdXIgPSB7XG4gICAgdWlkOiBvcHRpb25zLnVpZCA/IG9wdGlvbnMudWlkIDogZ2VuZXJhdGVVSUQoKSxcbiAgICBuYW1lLFxuICAgIGNvbG9yOiBvcHRpb25zLmNvbG9yID8gb3B0aW9ucy5jb2xvciA6IGdldE5leHRDb2xvcigpLFxuICAgIHBvbHlnb25Db3VudDogb3B0aW9ucy5wb2x5Z29uQ291bnQgPyBvcHRpb25zLnBvbHlnb25Db3VudCA6IDBcbiAgfTtcblxuICBzdHJ1Y3R1cmVTZXQuUk9JQ29udG91ckNvbGxlY3Rpb24ucHVzaChST0lDb250b3VyKTtcblxuICByZXR1cm4gUk9JQ29udG91ci51aWQ7XG59XG5cbmZ1bmN0aW9uIHNldFJPSUNvbnRvdXJBbmRTZXRJbmRleEFjdGl2ZShzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkLCBuYW1lLCBvcHRpb25zID0ge30pIHtcbiAgc2V0Uk9JQ29udG91cihzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkLCBuYW1lLCBvcHRpb25zKTtcblxuICBjb25zdCBzdHJ1Y3R1cmVTZXQgPSBnZXRTdHJ1Y3R1cmVTZXQoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCk7XG5cbiAgY29uc3QgaW5kZXggPSBzdHJ1Y3R1cmVTZXQuUk9JQ29udG91ckNvbGxlY3Rpb24ubGVuZ3RoIC0gMTtcblxuICBzdHJ1Y3R1cmVTZXQuYWN0aXZlUk9JQ29udG91ckluZGV4ID0gaW5kZXg7XG5cbiAgcmV0dXJuIGluZGV4O1xufVxuXG5mdW5jdGlvbiBzZXREZWxldGVST0lGcm9tU3RydWN0dXJlU2V0KHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQsIFJPSUNvbnRvdXJVaWQpIHtcbiAgY29uc3Qgc3RydWN0dXJlU2V0ID0gZ2V0U3RydWN0dXJlU2V0KHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQpO1xuICBjb25zdCBST0lDb250b3VyQ29sbGVjdGlvbiA9IHN0cnVjdHVyZVNldC5ST0lDb250b3VyQ29sbGVjdGlvbjtcblxuICBjb25zdCBST0lDb250b3VySW5kZXggPSBST0lDb250b3VyQ29sbGVjdGlvbi5maW5kSW5kZXgoUk9JQ29udG91ciA9PiB7XG4gICAgcmV0dXJuIFJPSUNvbnRvdXIudWlkID09PSBST0lDb250b3VyVWlkO1xuICB9KTtcblxuICBST0lDb250b3VyQ29sbGVjdGlvbi5zcGxpY2UoUk9JQ29udG91ckluZGV4LCAxKTtcbn1cblxuZnVuY3Rpb24gc2V0U3RydWN0dXJlU2V0TmFtZShuYW1lLCBzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkKSB7XG4gIGNoZWNrKG5hbWUsICduYW1lJyk7XG5cbiAgY29uc3Qgc3RydWN0dXJlU2V0ID0gZ2V0U3RydWN0dXJlU2V0KHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQpO1xuXG4gIHN0cnVjdHVyZVNldC5uYW1lID0gbmFtZTtcbn1cblxuZnVuY3Rpb24gc2V0RGVsZXRlU3RydWN0dXJlU2V0KHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQpIHtcbiAgY29uc3Qgc2VyaWVzID0gZ2V0U2VyaWVzKHNlcmllc0luc3RhbmNlVWlkKTtcblxuICBjb25zdCBzdHJ1Y3R1cmVTZXRDb2xsZWN0aW9uID0gc2VyaWVzLnN0cnVjdHVyZVNldENvbGxlY3Rpb247XG5cbiAgY29uc3Qgc3RydWN0dXJlU2V0SW5kZXggPSBzdHJ1Y3R1cmVTZXRDb2xsZWN0aW9uLmZpbmRJbmRleChzdHJ1Y3R1cmVTZXQgPT4ge1xuICAgIHJldHVybiBzdHJ1Y3R1cmVTZXQudWlkID09PSBzdHJ1Y3R1cmVTZXRVaWQ7XG4gIH0pO1xuXG4gIHN0cnVjdHVyZVNldENvbGxlY3Rpb24uc3BsaWNlKHN0cnVjdHVyZVNldEluZGV4LCAxKTtcbn1cblxuZnVuY3Rpb24gc2V0Uk9JQ29udG91ck5hbWUobmFtZSwgc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCwgUk9JQ29udG91clVpZCkge1xuICBjaGVjayhuYW1lLCAnbmFtZScpO1xuXG4gIGNvbnN0IFJPSUNvbnRvdXIgPSBnZXRST0lDb250b3VyKHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQsIFJPSUNvbnRvdXJVaWQpO1xuXG4gIFJPSUNvbnRvdXIubmFtZSA9IG5hbWU7XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZVN0cnVjdHVyZVNldEluZGV4KGluZGV4LCBzZXJpZXNJbnN0YW5jZVVpZCkge1xuICBjaGVjayhpbmRleCwgJ2luZGV4Jyk7XG5cbiAgY29uc3Qgc2VyaWVzID0gZ2V0U2VyaWVzKHNlcmllc0luc3RhbmNlVWlkKTtcblxuICBzZXJpZXMuYWN0aXZlU3RydWN0dXJlU2V0SW5kZXggPSBpbmRleDtcbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlU3RydWN0dXJlU2V0KHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQpIHtcbiAgY2hlY2soc3RydWN0dXJlU2V0VWlkLCAnc3RydWN0dXJlU2V0VWlkJyk7XG5cbiAgY29uc3Qgc2VyaWVzID0gZ2V0U2VyaWVzKHNlcmllc0luc3RhbmNlVWlkKTtcbiAgY29uc3Qgc3RydWN0dXJlU2V0Q29sbGVjdGlvbiA9IHNlcmllcy5zdHJ1Y3R1cmVTZXRDb2xsZWN0aW9uO1xuXG4gIGNvbnN0IHN0cnVjdHVyZVNldEluZGV4ID0gc3RydWN0dXJlU2V0Q29sbGVjdGlvbi5maW5kSW5kZXgoc3RydWN0dXJlU2V0ID0+IHtcbiAgICByZXR1cm4gc3RydWN0dXJlU2V0LnVpZCA9PT0gc3RydWN0dXJlU2V0VWlkO1xuICB9KTtcblxuICBzZXJpZXMuYWN0aXZlU3RydWN0dXJlU2V0SW5kZXggPSBzdHJ1Y3R1cmVTZXRJbmRleDtcbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlUk9JQ29udG91ckluZGV4KGluZGV4LCBzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkID0gJ0RFRkFVTFQnKSB7XG4gIGNvbnN0IHN0cnVjdHVyZVNldCA9IGdldFN0cnVjdHVyZVNldChzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkKTtcblxuICBzdHJ1Y3R1cmVTZXQuYWN0aXZlUk9JQ29udG91ckluZGV4ID0gaW5kZXg7XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZVJPSUNvbnRvdXIoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCA9ICdERUZBVUxUJywgUk9JQ29udG91clVpZCkge1xuICBjaGVjayhST0lDb250b3VyVWlkLCAnUk9JQ29udG91clVpZCcpO1xuXG4gIGNvbnN0IHN0cnVjdHVyZVNldCA9IGdldFN0cnVjdHVyZVNldChzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkKTtcbiAgY29uc3QgUk9JQ29udG91ckNvbGxlY3Rpb24gPSBzdHJ1Y3R1cmVTZXQuUk9JQ29udG91ckNvbGxlY3Rpb247XG5cbiAgY29uc3QgUk9JQ29udG91ckluZGV4ID0gUk9JQ29udG91ckNvbGxlY3Rpb24uZmluZEluZGV4KFJPSUNvbnRvdXIgPT4ge1xuICAgIHJldHVybiBST0lDb250b3VyLnVpZCA9PT0gUk9JQ29udG91clVpZDtcbiAgfSk7XG5cbiAgc3RydWN0dXJlU2V0LmFjdGl2ZVJPSUNvbnRvdXJJbmRleCA9IFJPSUNvbnRvdXJJbmRleDtcbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50UG9seWdvbkNvdW50KHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQsIFJPSUNvbnRvdXJVaWQpIHtcbiAgY29uc3QgUk9JQ29udG91ciA9IGdldFJPSUNvbnRvdXIoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCwgUk9JQ29udG91clVpZCk7XG5cbiAgUk9JQ29udG91ci5wb2x5Z29uQ291bnQrKztcbn1cblxuZnVuY3Rpb24gZGVjcmVtZW50UG9seWdvbkNvdW50KHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQsIFJPSUNvbnRvdXJVaWQpIHtcbiAgY29uc3QgUk9JQ29udG91ciA9IGdldFJPSUNvbnRvdXIoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCwgUk9JQ29udG91clVpZCk7XG5cbiAgUk9JQ29udG91ci5wb2x5Z29uQ291bnQtLTtcbn1cblxuY29uc3QgZ2V0dGVycyA9IHtcbiAgc2VyaWVzOiBnZXRTZXJpZXMsXG4gIHN0cnVjdHVyZVNldDogZ2V0U3RydWN0dXJlU2V0LFxuICBST0lDb250b3VyOiBnZXRST0lDb250b3VyLFxuICBST0lDb250b3VySW5kZXg6IGdldFJPSUNvbnRvdXJJbmRleCxcbiAgYWN0aXZlU3RydWN0dXJlU2V0SW5kZXg6IGdldEFjdGl2ZVN0cnVjdHVyZVNldEluZGV4LFxuICBhY3RpdmVST0lDb250b3VySW5kZXg6IGdldEFjdGl2ZVJPSUNvbnRvdXJJbmRleCxcbiAgYWN0aXZlUk9JQ29udG91cjogZ2V0QWN0aXZlUk9JQ29udG91clxufTtcblxuY29uc3Qgc2V0dGVycyA9IHtcbiAgc2VyaWVzOiBzZXRTZXJpZXMsXG4gIHN0cnVjdHVyZVNldDogc2V0U3RydWN0dXJlU2V0LFxuICBST0lDb250b3VyOiBzZXRST0lDb250b3VyLFxuICBST0lDb250b3VyQW5kU2V0SW5kZXhBY3RpdmU6IHNldFJPSUNvbnRvdXJBbmRTZXRJbmRleEFjdGl2ZSxcbiAgZGVsZXRlUk9JRnJvbVN0cnVjdHVyZVNldDogc2V0RGVsZXRlUk9JRnJvbVN0cnVjdHVyZVNldCxcbiAgZGVsZXRlU3RydWN0dXJlU2V0OiBzZXREZWxldGVTdHJ1Y3R1cmVTZXQsXG4gIHN0cnVjdHVyZVNldE5hbWU6IHNldFN0cnVjdHVyZVNldE5hbWUsXG4gIFJPSUNvbnRvdXJOYW1lOiBzZXRST0lDb250b3VyTmFtZSxcbiAgYWN0aXZlU3RydWN0dXJlU2V0SW5kZXg6IHNldEFjdGl2ZVN0cnVjdHVyZVNldEluZGV4LFxuICBhY3RpdmVTdHJ1Y3R1cmVTZXQ6IHNldEFjdGl2ZVN0cnVjdHVyZVNldCxcbiAgYWN0aXZlUk9JQ29udG91ckluZGV4OiBzZXRBY3RpdmVST0lDb250b3VySW5kZXgsXG4gIGFjdGl2ZVJPSUNvbnRvdXI6IHNldEFjdGl2ZVJPSUNvbnRvdXIsXG4gIGluY3JlbWVudFBvbHlnb25Db3VudCxcbiAgZGVjcmVtZW50UG9seWdvbkNvdW50LFxuICB0b2dnbGVJbnRlcnBvbGF0ZTogKCkgPT4ge1xuICAgIHN0YXRlLmludGVycG9sYXRlID0gIXN0YXRlLmludGVycG9sYXRlO1xuICB9LFxuICB0b2dnbGVEaXNwbGF5U3RhdHM6ICgpID0+IHtcbiAgICBzdGF0ZS5kaXNwbGF5U3RhdHMgPSAhc3RhdGUuZGlzcGxheVN0YXRzO1xuICB9XG59O1xuXG4vKipcbiAqIGVuYWJsZWRFbGVtZW50Q2FsbGJhY2sgLSBFbGVtZW50IHNwZWNpZmljIGluaXRpbGlzYXRpb24uXG4gKiBAcHVibGljXG4gKiBAcGFyYW0gIHtPYmplY3R9IGVuYWJsZWRFbGVtZW50ICBUaGUgZWxlbWVudCBvbiB3aGljaCB0aGUgbW9kdWxlIGlzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWluZyBpbml0aWFsaXNlZC5cbiAqL1xuZnVuY3Rpb24gZW5hYmxlZEVsZW1lbnRDYWxsYmFjayhlbGVtZW50KSB7XG4gIGNvbnN0IGVuYWJsZWRFbGVtZW50ID0gY29ybmVyc3RvbmUuZ2V0RW5hYmxlZEVsZW1lbnQoZWxlbWVudCk7XG5cbiAgaWYgKCFlbmFibGVkRWxlbWVudC5pbWFnZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHNlcmllc0luc3RhbmNlVWlkID0gZ2V0U2VyaWVzSW5zdGFuY2VVaWRGcm9tRW5hYmxlZEVsZW1lbnQoZW5hYmxlZEVsZW1lbnQpO1xuXG4gIGlmICghZ2V0U2VyaWVzKHNlcmllc0luc3RhbmNlVWlkKSkge1xuICAgIC8vIEdlbmVyYXRlIHNlcmllcyBzdG9yZS5cbiAgICBzZXRTZXJpZXMoc2VyaWVzSW5zdGFuY2VVaWQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3RhdGUsXG4gIGVuYWJsZWRFbGVtZW50Q2FsbGJhY2ssXG4gIGdldHRlcnMsXG4gIHNldHRlcnNcbn07XG5cbmNvbnN0IGltcG9ydENvbG9ycyA9IFtcbiAgJ2Nvcm5mbG93ZXJibHVlJyxcbiAgJ2ZpcmVicmljaycsXG4gICdnb2xkZW5yb2QnLFxuICAnYmx1ZXZpb2xldCcsXG4gICdpbmRpYW5yZWQnLFxuICAnb3JhbmdlJyxcbiAgJ21lZGl1bXR1cnF1b2lzZScsXG4gICdsaWdodGNvcmFsJyxcbiAgJ2toYWtpJyxcbiAgJ2RhcmttYWdlbnRhJyxcbiAgJ2xpZ2h0c2VhZ3JlZW4nLFxuICAndG9tYXRvJyxcbiAgJ2FxdWFtYXJpbmUnLFxuICAnZGFya3NhbG1vbicsXG4gICdtb2NjYXNpbicsXG4gICdvcmNoaWQnLFxuICAnc2t5Ymx1ZScsXG4gICdwZXJ1J1xuXTtcblxuLy8gU3VjaCB0aGF0IGZpcnN0IGNvbG9yIHdpbGwgYmUgdGhlIGZpcnN0IGluIHJvaUNvbG9yc1xubGV0IGN1cnJlbnRDb2xvckluZGV4ID0gaW1wb3J0Q29sb3JzLmxlbmd0aDtcblxuLyoqXG4gKiBnZXROZXh0Q29sb3JcbiAqXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEEgQ1NTIHJlY29nbmlzZWQgY29sb3Igd2l0aCB3aGljaCB0byByZW5kZXIgdGhlIFJPSSBjb250b3VyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV4dENvbG9yKCkge1xuICBjdXJyZW50Q29sb3JJbmRleCsrO1xuICBpZiAoY3VycmVudENvbG9ySW5kZXggPj0gaW1wb3J0Q29sb3JzLmxlbmd0aCkge1xuICAgIGN1cnJlbnRDb2xvckluZGV4ID0gMDtcbiAgfVxuXG4gIHJldHVybiBpbXBvcnRDb2xvcnNbY3VycmVudENvbG9ySW5kZXhdO1xufVxuIiwiaW1wb3J0IGNvcm5lcnN0b25lVG9vbHMgZnJvbSAnY29ybmVyc3RvbmUtdG9vbHMnO1xuaW1wb3J0IEJydXNoM0RIVUdhdGVkVG9vbCBmcm9tICcuL0JydXNoM0RIVUdhdGVkVG9vbC5qcyc7XG5cbmNvbnN0IHsgZ2V0Q2lyY2xlIH0gPSBjb3JuZXJzdG9uZVRvb2xzLmltcG9ydEludGVybmFsTW9kdWxlKCd1dGlsL2JydXNoVXRpbHMnKTtcblxuY29uc3QgYnJ1c2hNb2R1bGUgPSBjb3JuZXJzdG9uZVRvb2xzLnN0b3JlLm1vZHVsZXMuYnJ1c2g7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJydXNoM0RBdXRvR2F0ZWRUb29sIGV4dGVuZHMgQnJ1c2gzREhVR2F0ZWRUb29sIHtcbiAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbiA9IHt9KSB7XG4gICAgY29uc3QgZGVmYXVsdENvbmZpZyA9IHt9O1xuICAgIGNvbnN0IGluaXRpYWxDb25maWd1cmF0aW9uID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q29uZmlnLCBjb25maWd1cmF0aW9uKTtcblxuICAgIHN1cGVyKGluaXRpYWxDb25maWd1cmF0aW9uKTtcblxuICAgIHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb24gPSBpbml0aWFsQ29uZmlndXJhdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBoYW5kbGVyIGZvciBNT1VTRV9ET1dOIGV2ZW50LlxuICAgKlxuICAgKiBAb3ZlcnJpZGVcbiAgICogQGV2ZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldnQgLSBUaGUgZXZlbnQuXG4gICAqL1xuICBwcmVNb3VzZURvd25DYWxsYmFjayhldnQpIHtcbiAgICB0aGlzLl9zZXRDdXN0b21HYXRlKGV2dCk7XG4gICAgdGhpcy5fc3RhcnRQYWludGluZyhldnQpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogX3NldEN1c3RvbUdhdGUgLSBHZXRzIHRoZSBtaW5pbXVtIGFuZCBtYXhpbXVtIGJydXNoIHZhbHVlcyB3aXRoaW4gdGhlIGltYWdlXG4gICAqIGFuZCBzZXRzIHRoZSBnYXRlIG1vZGUgdG8gXCJjdXN0b21cIiB3aXRoIHRoZXNlIHZhbHVlcy5cbiAgICpcbiAgICogQHBhcmFtICB7b2JqZWN0fSBldnQgVGhlIGNvcm5lcnN0b25lIGV2ZW50LlxuICAgKiBAcmV0dXJucyB7bnVsbH1cbiAgICovXG4gIF9zZXRDdXN0b21HYXRlKGV2dCkge1xuICAgIGNvbnN0IGV2ZW50RGF0YSA9IGV2dC5kZXRhaWw7XG4gICAgY29uc3QgaW1hZ2UgPSBldmVudERhdGEuaW1hZ2U7XG4gICAgY29uc3QgeyByb3dzLCBjb2x1bW5zIH0gPSBpbWFnZTtcbiAgICBjb25zdCB7IHgsIHkgfSA9IGV2ZW50RGF0YS5jdXJyZW50UG9pbnRzLmltYWdlO1xuICAgIGNvbnN0IHJhZGl1cyA9IGJydXNoTW9kdWxlLnN0YXRlLnJhZGl1cztcbiAgICBjb25zdCBpbWFnZVBpeGVsRGF0YSA9IGltYWdlLmdldFBpeGVsRGF0YSgpO1xuICAgIGNvbnN0IHJlc2NhbGVTbG9wZSA9IGltYWdlLnNsb3BlIHx8IDE7XG4gICAgY29uc3QgcmVzY2FsZUludGVyY2VwdCA9IGltYWdlLmludGVyY2VwdCB8fCAwO1xuXG4gICAgY29uc3QgY2lyY2xlID0gZ2V0Q2lyY2xlKHJhZGl1cywgcm93cywgY29sdW1ucywgeCwgeSk7XG5cbiAgICAvLyBJbml0aWFsaXNlIGhpIGFuZCBsbyBhcyB0aGUgZmlyc3QgcGl4ZWxWYWx1ZSBpbiB0aGUgY2lyY2xlLlxuICAgIGxldCBsbyA9IGltYWdlUGl4ZWxEYXRhW2NpcmNsZVswXVswXSArIGNpcmNsZVswXVsxXSAqIHJvd3NdO1xuICAgIGxldCBoaSA9IGxvO1xuXG4gICAgLy8gRmluZCB0aGUgaGlnaGVzdCBhbmQgbG93ZXN0IHZhbHVlLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2lyY2xlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcGl4ZWxWYWx1ZSA9IGltYWdlUGl4ZWxEYXRhW2NpcmNsZVtpXVswXSArIGNpcmNsZVtpXVsxXSAqIHJvd3NdO1xuXG4gICAgICBpZiAocGl4ZWxWYWx1ZSA8IGxvKSB7XG4gICAgICAgIGxvID0gcGl4ZWxWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBpeGVsVmFsdWUgPiBoaSkge1xuICAgICAgICBoaSA9IHBpeGVsVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbG8gPSBsbyAqIHJlc2NhbGVTbG9wZSArIHJlc2NhbGVJbnRlcmNlcHQ7XG4gICAgaGkgPSBoaSAqIHJlc2NhbGVTbG9wZSArIHJlc2NhbGVJbnRlcmNlcHQ7XG5cbiAgICB0aGlzLmdhdGUgPSBbbG8sIGhpXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBfZ2F0ZUNpcmNsZSAtIEdpdmVuIGFuIGltYWdlIGFuZCBhIGJydXNoIGNpcmNsZSwgZ2F0ZSB0aGUgY2lyY2xlIGJldHdlZW5cbiAgICogdGhlIHNldCBnYXRlIHZhbHVlcywgYW5kIHRoZW4gY2xlYW51cCB0aGUgcmVzdWx0aW5nIG1hc2sgdXNpbmcgdGhlXG4gICAqIGhvbGVGaWxsIGFuZCBzdHJheVJlbW92ZSBwcm9wZXJ0aWVzIG9mIHRoZSBicnVzaCBtb2R1bGUuXG4gICAqXG4gICAqIEBwYXJhbSAge29iamVjdH0gaW1hZ2UgICBUaGUgY29ybmVyc3RvbmUgaW1hZ2UuXG4gICAqIEBwYXJhbSAge051bWJlcltdW119IGNpcmNsZSAgQW4gYXJyYXkgb2YgaW1hZ2UgcGl4ZWxzIGNvbnRhaW5lZCB3aXRoaW4gdGhlIGJydXNoXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgY2lyY2xlLlxuICAgKiBAcmV0dXJucyB7TnVtYmVyW11bXX0gIEFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIGdhdGVkL2NsZWFuZWQgcGl4ZWxzIHRvIGZpbGwuXG4gICAqL1xuICBfZ2F0ZUNpcmNsZShpbWFnZSwgY2lyY2xlKSB7XG4gICAgY29uc3Qgcm93cyA9IGltYWdlLmltYWdlO1xuICAgIGNvbnN0IGltYWdlUGl4ZWxEYXRhID0gaW1hZ2UuZ2V0UGl4ZWxEYXRhKCk7XG4gICAgY29uc3QgZ2F0ZVZhbHVlcyA9IHRoaXMuZ2F0ZTtcbiAgICBjb25zdCByZXNjYWxlU2xvcGUgPSBpbWFnZS5zbG9wZSB8fCAxO1xuICAgIGNvbnN0IHJlc2NhbGVJbnRlcmNlcHQgPSBpbWFnZS5pbnRlcmNlcHQgfHwgMDtcblxuICAgIGNvbnN0IGdhdGVkQ2lyY2xlQXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2lyY2xlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcGl4ZWxWYWx1ZSA9IGltYWdlUGl4ZWxEYXRhW2NpcmNsZVtpXVswXSArIGNpcmNsZVtpXVsxXSAqIHJvd3NdO1xuXG4gICAgICBwaXhlbFZhbHVlID0gcGl4ZWxWYWx1ZSAqIHJlc2NhbGVTbG9wZSArIHJlc2NhbGVJbnRlcmNlcHQ7XG5cbiAgICAgIGlmIChwaXhlbFZhbHVlID49IGdhdGVWYWx1ZXNbMF0gJiYgcGl4ZWxWYWx1ZSA8PSBnYXRlVmFsdWVzWzFdKSB7XG4gICAgICAgIGdhdGVkQ2lyY2xlQXJyYXkucHVzaChjaXJjbGVbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9jbGVhbkdhdGVkQ2lyY2xlKGNpcmNsZSwgZ2F0ZWRDaXJjbGVBcnJheSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHN0b3JlLCBFVkVOVFMsIGltcG9ydEludGVybmFsTW9kdWxlIH0gZnJvbSAnY29ybmVyc3RvbmUtdG9vbHMnO1xuaW1wb3J0IGNvcm5lcnN0b25lIGZyb20gJ2Nvcm5lcnN0b25lLWNvcmUnO1xuXG5pbXBvcnQgQnJ1c2gzRFRvb2wgZnJvbSAnLi9CcnVzaDNEVG9vbC5qcyc7XG5cbmNvbnN0IGJydXNoTW9kdWxlID0gc3RvcmUubW9kdWxlcy5icnVzaDtcbmNvbnN0IHsgZ2V0Q2lyY2xlLCBkcmF3QnJ1c2hQaXhlbHMgfSA9IGltcG9ydEludGVybmFsTW9kdWxlKCd1dGlsL2JydXNoVXRpbHMnKTtcblxuaW1wb3J0IGZsb29kRmlsbCBmcm9tICcuL24tZGltZW5zaW9uYWwtZmxvb2QtZmlsbC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJydXNoM0RIVUdhdGVkVG9vbCBleHRlbmRzIEJydXNoM0RUb29sIHtcbiAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbiA9IHt9KSB7XG4gICAgY29uc3QgZGVmYXVsdENvbmZpZyA9IHt9O1xuICAgIGNvbnN0IGluaXRpYWxDb25maWd1cmF0aW9uID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q29uZmlnLCBjb25maWd1cmF0aW9uKTtcblxuICAgIHN1cGVyKGluaXRpYWxDb25maWd1cmF0aW9uKTtcblxuICAgIHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb24gPSBpbml0aWFsQ29uZmlndXJhdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBoYW5kbGVyIGZvciBNT1VTRV9ET1dOIGV2ZW50LlxuICAgKlxuICAgKiBAb3ZlcnJpZGVcbiAgICogQGV2ZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldnQgLSBUaGUgZXZlbnQuXG4gICAqL1xuICBwcmVNb3VzZURvd25DYWxsYmFjayhldnQpIHtcbiAgICB0aGlzLmFjdGl2ZUdhdGVSYW5nZSA9IGJydXNoTW9kdWxlLmdldHRlcnMuYWN0aXZlR2F0ZVJhbmdlKCk7XG5cbiAgICB0aGlzLl9zdGFydFBhaW50aW5nKGV2dCk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYWludHMgdGhlIGRhdGEgdG8gdGhlIGNhbnZhcy5cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGV2dCBUaGUgZGF0YSBvYmplY3QgYXNzb2NpYXRlZCB3aXRoIHRoZSBldmVudC5cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBfcGFpbnQoZXZ0KSB7XG4gICAgY29uc3QgZXZlbnREYXRhID0gZXZ0LmRldGFpbDtcbiAgICBjb25zdCB7IGVsZW1lbnQsIGltYWdlIH0gPSBldmVudERhdGE7XG4gICAgY29uc3QgeyByb3dzLCBjb2x1bW5zIH0gPSBpbWFnZTtcbiAgICBjb25zdCB7IHgsIHkgfSA9IGV2ZW50RGF0YS5jdXJyZW50UG9pbnRzLmltYWdlO1xuXG4gICAgaWYgKHggPCAwIHx8IHggPiBjb2x1bW5zIHx8IHkgPCAwIHx8IHkgPiByb3dzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmFkaXVzID0gYnJ1c2hNb2R1bGUuc3RhdGUucmFkaXVzO1xuICAgIGNvbnN0IHBvaW50ZXJBcnJheSA9IHRoaXMuX2dhdGVDaXJjbGUoaW1hZ2UsIGdldENpcmNsZShyYWRpdXMsIHJvd3MsIGNvbHVtbnMsIHgsIHkpKTtcblxuICAgIGNvbnN0IHsgbGFiZWxtYXAzRCwgY3VycmVudEltYWdlSWRJbmRleCwgYWN0aXZlTGFiZWxtYXBJbmRleCwgc2hvdWxkRXJhc2UgfSA9IHRoaXMucGFpbnRFdmVudERhdGE7XG5cbiAgICAvLyBEcmF3IC8gRXJhc2UgdGhlIGFjdGl2ZSBjb2xvci5cbiAgICBkcmF3QnJ1c2hQaXhlbHMocG9pbnRlckFycmF5LCBsYWJlbG1hcDNELCBjdXJyZW50SW1hZ2VJZEluZGV4LCBjb2x1bW5zLCBzaG91bGRFcmFzZSk7XG5cbiAgICBjb3JuZXJzdG9uZS50cmlnZ2VyRXZlbnQoZWxlbWVudCwgRVZFTlRTLkxBQkVMTUFQX01PRElGSUVELCB7XG4gICAgICBhY3RpdmVMYWJlbG1hcEluZGV4XG4gICAgfSk7XG5cbiAgICBjb3JuZXJzdG9uZS51cGRhdGVJbWFnZShldnQuZGV0YWlsLmVsZW1lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIF9nYXRlQ2lyY2xlIC0gR2l2ZW4gYW4gaW1hZ2UgYW5kIGEgYnJ1c2ggY2lyY2xlLCBnYXRlIHRoZSBjaXJjbGUgYmV0d2VlblxuICAgKiB0aGUgc2V0IGdhdGUgdmFsdWVzLCBhbmQgdGhlbiBjbGVhbnVwIHRoZSByZXN1bHRpbmcgbWFzayB1c2luZyB0aGVcbiAgICogaG9sZUZpbGwgYW5kIHN0cmF5UmVtb3ZlIHByb3BlcnRpZXMgb2YgdGhlIGJydXNoIG1vZHVsZS5cbiAgICpcbiAgICogQHBhcmFtICB7b2JqZWN0fSBpbWFnZSAgIFRoZSBjb3JuZXJzdG9uZSBpbWFnZS5cbiAgICogQHBhcmFtICB7TnVtYmVyW11bXX0gY2lyY2xlICBBbiBhcnJheSBvZiBpbWFnZSBwaXhlbHMgY29udGFpbmVkIHdpdGhpbiB0aGUgYnJ1c2hcbiAgICogICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGUuXG4gICAqIEByZXR1cm5zIHtOdW1iZXJbXVtdfSAgQW4gYXJyYXkgY29udGFpbmluZyB0aGUgZ2F0ZWQvY2xlYW5lZCBwaXhlbHMgdG8gZmlsbC5cbiAgICovXG4gIF9nYXRlQ2lyY2xlKGltYWdlLCBjaXJjbGUpIHtcbiAgICBjb25zdCByb3dzID0gaW1hZ2Uucm93cztcbiAgICBjb25zdCBpbWFnZVBpeGVsRGF0YSA9IGltYWdlLmdldFBpeGVsRGF0YSgpO1xuICAgIGNvbnN0IGdhdGVSYW5nZSA9IHRoaXMuYWN0aXZlR2F0ZVJhbmdlO1xuICAgIGNvbnN0IHJlc2NhbGVTbG9wZSA9IGltYWdlLnNsb3BlIHx8IDE7XG4gICAgY29uc3QgcmVzY2FsZUludGVyY2VwdCA9IGltYWdlLmludGVyY2VwdCB8fCAwO1xuXG4gICAgY29uc3QgZ2F0ZWRDaXJjbGVBcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaXJjbGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwaXhlbFZhbHVlID0gaW1hZ2VQaXhlbERhdGFbY2lyY2xlW2ldWzBdICsgY2lyY2xlW2ldWzFdICogcm93c107XG5cbiAgICAgIHBpeGVsVmFsdWUgPSBwaXhlbFZhbHVlICogcmVzY2FsZVNsb3BlICsgcmVzY2FsZUludGVyY2VwdDtcblxuICAgICAgaWYgKHBpeGVsVmFsdWUgPj0gZ2F0ZVJhbmdlWzBdICYmIHBpeGVsVmFsdWUgPD0gZ2F0ZVJhbmdlWzFdKSB7XG4gICAgICAgIGdhdGVkQ2lyY2xlQXJyYXkucHVzaChjaXJjbGVbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9jbGVhbkdhdGVkQ2lyY2xlKGNpcmNsZSwgZ2F0ZWRDaXJjbGVBcnJheSk7XG4gIH1cblxuICAvKipcbiAgICogX2dldEVkZ2VQaXhlbHMgLSBSZXR1cm5zIHRoZSBpbmRpY2llcyBvZiB0aGUgZWRnZSBwaXhlbHMgZm9yIHRoZSBjaXJjdWxhclxuICAgKiBicnVzaCBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0gIHtOdW1iZXJbXVtdfSBkYXRhIFRoZSBzcXVhcmVkLWNpcmNsZSBkYXRhIHdoZXJlIGFsbCBjaXJjbGUgbWVtYmVycyBhcmVcbiAgICogICAgICAgICAgICAgICAgICAgICAwLCBhbmQgdmFsdWVzIG91dHNpZGUgdGhlIGNpcmNsZSBhcmUgLTFcbiAgICogQHJldHVybnMge051bWJlcltdW119IEFuIGFycmF5IG9mIHBvc2l0aW9ucyBvZiB0aGUgY2lyY2xlIGVkZ2UgcGl4ZWxzLlxuICAgKi9cbiAgX2dldEVkZ2VQaXhlbHMoZGF0YSkge1xuICAgIGNvbnN0IGVkZ2VQaXhlbHMgPSBbXTtcbiAgICBjb25zdCB4U2l6ZSA9IGRhdGEubGVuZ3RoO1xuICAgIGNvbnN0IHlTaXplID0gZGF0YVswXS5sZW5ndGg7XG5cbiAgICAvLyBmaXJzdCBhbmQgbGFzdCByb3cgYWRkIGFsbCBvZiB0b3AgYW5kIGJvdHRvbSB3aGljaCBhcmUgY2lyY2xlIG1lbWJlcnMuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZGF0YVtpXVswXSkge1xuICAgICAgICBlZGdlUGl4ZWxzLnB1c2goW2ksIDBdKTtcbiAgICAgICAgZWRnZVBpeGVscy5wdXNoKFtpLCB5U2l6ZSAtIDFdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhbGwgb3RoZXIgcm93cyAtIEZpbmQgZmlyc3QgY2lyY2xlIG1lbWJlciwgYW5kIHVzZSBpdHMgcG9zaXRpb24gdG8gYWRkXG4gICAgLy8gVGhlIGZpcnN0IGFuZCBsYXN0IGNpcmNsZSBtZW1iZXIgb2YgdGhhdCByb3cuXG4gICAgZm9yIChsZXQgaiA9IDE7IGogPCB5U2l6ZSAtIDE7IGorKykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChkYXRhW2ldW2pdKSB7XG4gICAgICAgICAgZWRnZVBpeGVscy5wdXNoKFtpLCBqXSk7XG4gICAgICAgICAgZWRnZVBpeGVscy5wdXNoKFt4U2l6ZSAtIDEgLSBpLCBqXSk7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlZGdlUGl4ZWxzO1xuICB9XG5cbiAgLyoqXG4gICAqIF9jbGVhbkdhdGVkQ2lyY2xlIC0gQ2xlYW4gdGhlIEhVIGdhdGVkIGNpcmNsZSB1c2luZyB0aGUgaG9sZUZpbGwgYW5kXG4gICAqIHN0cmF5UmVtb3ZlIHByb3BlcnRpZXMgb2YgdGhlIGJydXNoIG1vZHVsZS5cbiAgICpcbiAgICogQHBhcmFtICB7TnVtYmVyW11bXX0gY2lyY2xlICAgICBBbiBhcnJheSBvZiB0aGUgcGl4ZWwgaW5kaWNpZXMgd2l0aGluIHRoZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJydXNoIGNpcmNsZS5cbiAgICogQHBhcmFtICB7TnVtYmVyW11bXX0gZ2F0ZWRDaXJjbGVBcnJheSBBbiBhcnJheSBvZiB0aGUgcGl4ZWwgaW5kaWNpZXMgd2l0aGluXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGdhdGUgcmFuZ2UuXG4gICAqIEByZXR1cm5zIHtOdW1iZXJbXVtdfSAgICAgICAgICAgICAgICAgIFRoZSBjbGVhbmVkIGFycmF5IG9mIHBpeGVsIGluZGljaWVzLlxuICAgKi9cbiAgX2NsZWFuR2F0ZWRDaXJjbGUoY2lyY2xlLCBnYXRlZENpcmNsZUFycmF5KSB7XG4gICAgY29uc3QgeyBtYXgsIG1pbiB9ID0gdGhpcy5fZ2V0Qm91bmRpbmdCb3hPZkNpcmNsZShjaXJjbGUpO1xuXG4gICAgY29uc3QgeFNpemUgPSBtYXhbMF0gLSBtaW5bMF0gKyAxO1xuICAgIGNvbnN0IHlTaXplID0gbWF4WzFdIC0gbWluWzFdICsgMTtcblxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9ib3hHYXRlZENpcmNsZShjaXJjbGUsIGdhdGVkQ2lyY2xlQXJyYXksIG1pbiwgeFNpemUsIHlTaXplKTtcblxuICAgIC8vIERlZmluZSBvdXIgZ2V0dGVyIGZvciBhY2Nlc3NpbmcgdGhlIGRhdGEgc3RydWN0dXJlLlxuICAgIGZ1bmN0aW9uIGdldHRlcih4LCB5KSB7XG4gICAgICByZXR1cm4gZGF0YVt4XVt5XTtcbiAgICB9XG5cbiAgICB0aGlzLl9mbG9vZEZpbGxFbXB0eVJlZ2lvbnNGcm9tRWRnZXMoZGF0YSwgZ2V0dGVyKTtcblxuICAgIGNvbnN0IHsgaG9sZXMsIHJlZ2lvbnMgfSA9IHRoaXMuX2ZpbmRIb2xlc0FuZFJlZ2lvbnMoY2lyY2xlLCBkYXRhLCBnZXR0ZXIsIG1pbik7XG5cbiAgICBjb25zdCBsYXJnZXN0UmVnaW9uQXJlYSA9IHRoaXMuX2dldEFyZWFPZkxhcmdlc3RSZWdpb24ocmVnaW9ucyk7XG5cbiAgICAvLyBEZWxldGUgYW55IHJlZ2lvbiBvdXRzaWRlIHRoZSBgc3RyYXlSZW1vdmVgIHRocmVzaG9sZC5cbiAgICBmb3IgKGxldCByID0gMDsgciA8IHJlZ2lvbnMubGVuZ3RoOyByKyspIHtcbiAgICAgIGNvbnN0IHJlZ2lvbiA9IHJlZ2lvbnNbcl07XG5cbiAgICAgIGlmIChyZWdpb24ubGVuZ3RoIDw9IChicnVzaE1vZHVsZS5zdGF0ZS5zdHJheVJlbW92ZSAvIDEwMC4wKSAqIGxhcmdlc3RSZWdpb25BcmVhKSB7XG4gICAgICAgIGZvciAobGV0IHAgPSAwOyBwIDwgcmVnaW9uLmxlbmd0aDsgcCsrKSB7XG4gICAgICAgICAgZGF0YVtyZWdpb25bcF1bMF1dW3JlZ2lvbltwXVsxXV0gPSAzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRmlsbCBpbiBhbnkgaG9sZXMgc21hbGxlciB0aGFuIHRoZSBgaG9sZUZpbGxgIHRocmVzaG9sZC5cbiAgICBmb3IgKGxldCByID0gMDsgciA8IGhvbGVzLmxlbmd0aDsgcisrKSB7XG4gICAgICBjb25zdCBob2xlID0gaG9sZXNbcl07XG5cbiAgICAgIGlmIChob2xlLmxlbmd0aCA8PSAoYnJ1c2hNb2R1bGUuc3RhdGUuaG9sZUZpbGwgLyAxMDAuMCkgKiBsYXJnZXN0UmVnaW9uQXJlYSkge1xuICAgICAgICBmb3IgKGxldCBwID0gMDsgcCA8IGhvbGUubGVuZ3RoOyBwKyspIHtcbiAgICAgICAgICBkYXRhW2hvbGVbcF1bMF1dW2hvbGVbcF1bMV1dID0gNTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGZpbGxlZEdhdGVkQ2lyY2xlQXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeFNpemU7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB5U2l6ZTsgaisrKSB7XG4gICAgICAgIGlmIChkYXRhW2ldW2pdID09PSA1KSB7XG4gICAgICAgICAgZmlsbGVkR2F0ZWRDaXJjbGVBcnJheS5wdXNoKFtpICsgbWluWzBdLCBqICsgbWluWzFdXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmlsbGVkR2F0ZWRDaXJjbGVBcnJheTtcbiAgfVxuXG4gIC8qKlxuICAgKiBfZ2V0Qm91bmRpbmdCb3hPZkNpcmNsZSAtIFJldHVybnMgdHdvIHBvaW50cyBkZWZpbmluZyB0aGUgZXh0ZW50IG9mIHRoZSBjaXJjbGUuXG4gICAqXG4gICAqIEBwYXJhbSAge251bWJlcltdW119IGNpcmNsZSAgQW4gYXJyYXkgb2YgdGhlIHBpeGVsIGluZGljaWVzIHdpdGhpbiB0aGUgYnJ1c2ggY2lyY2xlLlxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSAgICAgICAgVGhlIG1pbmltdW0gYW5kIG1heGltdW0gb2YgdGhlIGV4dGVudC5cbiAgICovXG4gIF9nZXRCb3VuZGluZ0JveE9mQ2lyY2xlKGNpcmNsZSkge1xuICAgIGNvbnN0IG1heCA9IFtjaXJjbGVbMF1bMF0sIGNpcmNsZVswXVsxXV07XG4gICAgY29uc3QgbWluID0gW2NpcmNsZVswXVswXSwgY2lyY2xlWzBdWzFdXTtcblxuICAgIGZvciAobGV0IHAgPSAwOyBwIDwgY2lyY2xlLmxlbmd0aDsgcCsrKSB7XG4gICAgICBjb25zdCBbaSwgal0gPSBjaXJjbGVbcF07XG5cbiAgICAgIGlmIChpID4gbWF4WzBdKSB7XG4gICAgICAgIG1heFswXSA9IGk7XG4gICAgICB9IGVsc2UgaWYgKGkgPCBtaW5bMF0pIHtcbiAgICAgICAgbWluWzBdID0gaTtcbiAgICAgIH1cblxuICAgICAgaWYgKGogPiBtYXhbMV0pIHtcbiAgICAgICAgbWF4WzFdID0gajtcbiAgICAgIH0gZWxzZSBpZiAoaiA8IG1pblsxXSkge1xuICAgICAgICBtaW5bMV0gPSBqO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IG1heCwgbWluIH07XG4gIH1cblxuICAvKipcbiAgICogX2JveEdhdGVkQ2lyY2xlIC0gR2VuZXJhdGVzIGEgcmVjdGFuZ3VsYXIgZGF0YXNldCBmcm9tIHRoZSBicnVzaCBjaXJjbGVcbiAgICogICAgICAgICAgICAgICAgICAgZm9yIGVmZmljaWVudCBmbG9vZCBmaWxsL2NsZWFuaW5nLlxuICAgKlxuICAgKiBAcGFyYW0gIHt0eXBlfSBjaXJjbGUgICAgICAgICAgIEFuIGFycmF5IG9mIHRoZSBwaXhlbCBpbmRpY2llcyB3aXRoaW4gdGhlIGJydXNoIGNpcmNsZS5cbiAgICogQHBhcmFtICB7dHlwZX0gZ2F0ZWRDaXJjbGVBcnJheSBUaGUgY2lyY2xlIGFycmF5IHdpdGggdGhlIGdhdGUgYXBwbGllZC5cbiAgICogQHBhcmFtICB7dHlwZX0gbWluICAgICAgICAgICAgICBUaGUgbG9jYXRpb24gb2YgdGhlIHRvcCBsZWZ0IHBpeGVsIG9mIHRoZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlZCBkYXRhc2V0IHdpdGggcmVzcGVjdCB0byB0aGVcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmx5aW5nIGltYWdlIGRhdGEuXG4gICAqIEBwYXJhbSAge3R5cGV9IHhTaXplICAgICAgICAgICAgVGhlIHggc2l6ZSBvZiB0aGUgZ2VuZXJhdGVkIGJveC5cbiAgICogQHBhcmFtICB7dHlwZX0geVNpemUgICAgICAgICAgICBUaGUgeSBzaXplIG9mIHRoZSBnZW5lcmF0ZWQgYm94LlxuICAgKiBAcmV0dXJucyB7bnVtYmVyW11bXX0gICAgICAgICAgIFRoZSBkYXRhIHdpdGggcGl4ZWwgWzAsMF0gY2VudGVyZWQgb24gbWluLFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBjaXJjbGUgbWFya2VkIHdpdGggMSBmb3IgdW5vY2N1cGllZCwgMlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciBvY2N1cGllZCBhbmQgMCBmb3Igb3V0c2lkZSBvZiB0aGUgY2lyY2xlIGJvdW5kcy5cbiAgICovXG4gIF9ib3hHYXRlZENpcmNsZShjaXJjbGUsIGdhdGVkQ2lyY2xlQXJyYXksIG1pbiwgeFNpemUsIHlTaXplKSB7XG4gICAgY29uc3QgZGF0YSA9IFtdO1xuXG4gICAgLy8gRmlsbCBpbiBzcXVhcmUgYXMgMCAob3V0IG9mIGJvdW5kcy9pZ25vcmUpLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeFNpemU7IGkrKykge1xuICAgICAgZGF0YVtpXSA9IG5ldyBVaW50OENsYW1wZWRBcnJheSh5U2l6ZSk7XG4gICAgfVxuXG4gICAgLy8gZmlsbCBjaXJjbGUgaW4gYXMgMS5cbiAgICBmb3IgKGxldCBwID0gMDsgcCA8IGNpcmNsZS5sZW5ndGg7IHArKykge1xuICAgICAgY29uc3QgaSA9IGNpcmNsZVtwXVswXSAtIG1pblswXTtcbiAgICAgIGNvbnN0IGogPSBjaXJjbGVbcF1bMV0gLSBtaW5bMV07XG5cbiAgICAgIGRhdGFbaV1bal0gPSAxO1xuICAgIH1cblxuICAgIC8vIGZpbGwgZ2F0ZWQgcmVnaW9uIGFzIDIuXG4gICAgZm9yIChsZXQgcCA9IDA7IHAgPCBnYXRlZENpcmNsZUFycmF5Lmxlbmd0aDsgcCsrKSB7XG4gICAgICBjb25zdCBpID0gZ2F0ZWRDaXJjbGVBcnJheVtwXVswXSAtIG1pblswXTtcbiAgICAgIGNvbnN0IGogPSBnYXRlZENpcmNsZUFycmF5W3BdWzFdIC0gbWluWzFdO1xuXG4gICAgICBkYXRhW2ldW2pdID0gMjtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBfZmxvb2RGaWxsRW1wdHlSZWdpb25zRnJvbUVkZ2VzIC0gRmxvb2QgZmlsbHMgZW1wdHkgcmVnaW9ucyB3aGljaCB0b3VjaCB0aGVcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2Ugb2YgdGhlIGNpcmNsZSB3aXRoIHRoZSB2YWx1ZSAzLlxuICAgKlxuICAgKiBAcGFyYW0gIHtudW1iZXJbXVtdfSBkYXRhIFRoZSBkYXRhIHRvIGZsb29kIGZpbGwuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGdldHRlciBUaGUgZ2V0dGVyIGZ1bmN0aW9uIGZsb29kRmlsbCB1c2VzIHRvIGFjY2VzcyBhcnJheVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMuXG4gICAqIEBtb2RpZmllcyBkYXRhXG4gICAqIEByZXR1cm5zIHtudWxsfVxuICAgKi9cbiAgX2Zsb29kRmlsbEVtcHR5UmVnaW9uc0Zyb21FZGdlcyhkYXRhLCBnZXR0ZXIpIHtcbiAgICBjb25zdCBlZGdlUGl4ZWxzID0gdGhpcy5fZ2V0RWRnZVBpeGVscyhkYXRhKTtcblxuICAgIGZvciAobGV0IHAgPSAwOyBwIDwgZWRnZVBpeGVscy5sZW5ndGg7IHArKykge1xuICAgICAgY29uc3QgaSA9IGVkZ2VQaXhlbHNbcF1bMF07XG4gICAgICBjb25zdCBqID0gZWRnZVBpeGVsc1twXVsxXTtcblxuICAgICAgaWYgKGRhdGFbaV1bal0gPT09IDEpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZmxvb2RGaWxsKHtcbiAgICAgICAgICBnZXR0ZXI6IGdldHRlcixcbiAgICAgICAgICBzZWVkOiBbaSwgal1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZmxvb2RlZCA9IHJlc3VsdC5mbG9vZGVkO1xuXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZmxvb2RlZC5sZW5ndGg7IGsrKykge1xuICAgICAgICAgIGRhdGFbZmxvb2RlZFtrXVswXV1bZmxvb2RlZFtrXVsxXV0gPSAzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIF9maW5kSG9sZXNBbmRSZWdpb25zIC0gRmluZHMgYWxsIHRoZSBob2xlcyBhbmQgcmVnaW9ucyBhbmQgcmV0dXJucyB0aGVpclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9ucyB3aXRoaW4gdGhlIDJEIGRhdGEgc2V0LiBTZXRzIHRoZSB2YWx1ZSBvZlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgIGhvbGVzIGFuZCByZWdpb25zIHRvIDQgYW5kIDUsIHJlc3BlY3RpdmVseS5cbiAgICpcbiAgICogQHBhcmFtICB7bnVtYmVyW11bXX0gY2lyY2xlIEFuIGFycmF5IG9mIHRoZSBwaXhlbCBpbmRpY2llcyB3aXRoaW4gdGhlIGJydXNoIGNpcmNsZS5cbiAgICogQHBhcmFtICB7bnVtYmVyW11bXX0gZGF0YSAgIFRoZSBkYXRhIHNldC5cbiAgICogQHBhcmFtICB7ZnVuY3Rpb259ICAgZ2V0dGVyIFRoZSBnZXR0ZXIgZnVuY3Rpb24gZmxvb2RGaWxsIHVzZXMgdG8gYWNjZXNzIGFycmF5XG4gICAqICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5cbiAgICogQHBhcmFtICB7bnVtYmVyW119ICAgbWluICAgIFRoZSBsb2NhdGlvbiBvZiB0aGUgdG9wIGxlZnQgcGl4ZWwgb2YgdGhlIGRhdGFzZXRcbiAgICogICAgICAgICAgICAgICAgICAgICAgIHdpdGggcmVzcGVjdCB0byB0aGUgdW5kZXJseWluZyBpbWFnZSBkYXRhLlxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSAgICBBbiBvYmplY3QgY29udGFpbmluZyBhcnJheXMgb2YgdGhlIG9jY3VwYXRpb24gb2YgYWxsXG4gICAqICAgICAgICAgICAgICAgICAgICAgIHJlZ2lvbnMgYW5kIGhvbGVzIGluIHRoZSBkYXRhc2V0LlxuICAgKi9cbiAgX2ZpbmRIb2xlc0FuZFJlZ2lvbnMoY2lyY2xlLCBkYXRhLCBnZXR0ZXIsIG1pbikge1xuICAgIGNvbnN0IGhvbGVzID0gW107XG4gICAgY29uc3QgcmVnaW9ucyA9IFtdO1xuXG4gICAgLy8gRmluZCBlYWNoIGhvbGUgYW5kIHBhaW50IHRoZW0gMy5cbiAgICAvLyBGaW5kIGNvbnRpZ3VvdXMgcmVnaW9ucyBhbmQgcGFpbnQgdGhlbSA0LlxuICAgIGZvciAobGV0IHAgPSAwOyBwIDwgY2lyY2xlLmxlbmd0aDsgcCsrKSB7XG4gICAgICBjb25zdCBpID0gY2lyY2xlW3BdWzBdIC0gbWluWzBdO1xuICAgICAgY29uc3QgaiA9IGNpcmNsZVtwXVsxXSAtIG1pblsxXTtcblxuICAgICAgaWYgKGRhdGFbaV1bal0gPT09IDEpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZmxvb2RGaWxsKHtcbiAgICAgICAgICBnZXR0ZXI6IGdldHRlcixcbiAgICAgICAgICBzZWVkOiBbaSwgal1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZmxvb2RlZCA9IHJlc3VsdC5mbG9vZGVkO1xuXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZmxvb2RlZC5sZW5ndGg7IGsrKykge1xuICAgICAgICAgIGRhdGFbZmxvb2RlZFtrXVswXV1bZmxvb2RlZFtrXVsxXV0gPSA0O1xuICAgICAgICB9XG5cbiAgICAgICAgaG9sZXMucHVzaChmbG9vZGVkKTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVtpXVtqXSA9PT0gMikge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBmbG9vZEZpbGwoe1xuICAgICAgICAgIGdldHRlcjogZ2V0dGVyLFxuICAgICAgICAgIHNlZWQ6IFtpLCBqXVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBmbG9vZGVkID0gcmVzdWx0LmZsb29kZWQ7XG5cbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBmbG9vZGVkLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgZGF0YVtmbG9vZGVkW2tdWzBdXVtmbG9vZGVkW2tdWzFdXSA9IDU7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpb25zLnB1c2goZmxvb2RlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaG9sZXMsIHJlZ2lvbnMgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBfZ2V0QXJlYU9mTGFyZ2VzdFJlZ2lvbiAtIFJldHVybnMgdGhlIG51bWJlciBvZiBwaXhlbHMgaW4gdGhlIGxhcmdlc3RcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpb24gb2YgYSBsaXN0IG9mIHJlZ2lvbnMuXG4gICAqXG4gICAqIEBwYXJhbSAge251bWJlcltdW11bXX0gcmVnaW9ucyBBbiBhcnJheSBvZiByZWdpb25zIG9mIDJEIHBvaW50cy5cbiAgICogQHJldHVybnMge251bWJlcn0gICAgICAgIFRoZSBhcmVhIG9mIHRoZSBsYXJnZXN0IHJlZ2lvbiBpbiBwaXhlbHMuXG4gICAqL1xuICBfZ2V0QXJlYU9mTGFyZ2VzdFJlZ2lvbihyZWdpb25zKSB7XG4gICAgbGV0IGxhcmdlc3RSZWdpb25BcmVhID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVnaW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHJlZ2lvbnNbaV0ubGVuZ3RoID4gbGFyZ2VzdFJlZ2lvbkFyZWEpIHtcbiAgICAgICAgbGFyZ2VzdFJlZ2lvbkFyZWEgPSByZWdpb25zW2ldLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGFyZ2VzdFJlZ2lvbkFyZWE7XG4gIH1cbn1cbiIsImltcG9ydCB7IEJydXNoVG9vbCwgc3RvcmUgfSBmcm9tICdjb3JuZXJzdG9uZS10b29scyc7XG5pbXBvcnQgZ2VuZXJhdGVCcnVzaE1ldGFkYXRhIGZyb20gJy4uL3V0aWwvZ2VuZXJhdGVCcnVzaE1ldGFkYXRhLmpzJztcblxuY29uc3QgYnJ1c2hNb2R1bGUgPSBzdG9yZS5tb2R1bGVzLmJydXNoO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcnVzaDNEVG9vbCBleHRlbmRzIEJydXNoVG9vbCB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb24gPSB7fSkge1xuICAgIGNvbnN0IGRlZmF1bHRDb25maWcgPSB7fTtcbiAgICBjb25zdCBpbml0aWFsQ29uZmlndXJhdGlvbiA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdENvbmZpZywgY29uZmlndXJhdGlvbik7XG5cbiAgICBzdXBlcihpbml0aWFsQ29uZmlndXJhdGlvbik7XG5cbiAgICB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uID0gaW5pdGlhbENvbmZpZ3VyYXRpb247XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGlzZSBwYWludGluZyB3aXRoIGJhc2VCcnVzaFRvb2xcbiAgICpcbiAgICogQG92ZXJyaWRlIEBwcm90ZWN0ZWRcbiAgICogQGV2ZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldnQgLSBUaGUgZXZlbnQuXG4gICAqL1xuICBfc3RhcnRQYWludGluZyhldnQpIHtcbiAgICBjb25zdCBldmVudERhdGEgPSBldnQuZGV0YWlsO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudERhdGEuZWxlbWVudDtcblxuICAgIGNvbnN0IHsgbGFiZWxtYXAzRCwgY3VycmVudEltYWdlSWRJbmRleCwgYWN0aXZlTGFiZWxtYXBJbmRleCB9ID0gYnJ1c2hNb2R1bGUuZ2V0dGVycy5nZXRBbmRDYWNoZUxhYmVsbWFwMkQoZWxlbWVudCk7XG5cbiAgICBjb25zdCBzaG91bGRFcmFzZSA9IHRoaXMuX2lzQ3RybERvd24oZXZlbnREYXRhKSB8fCB0aGlzLmNvbmZpZ3VyYXRpb24uYWx3YXlzRXJhc2VPbkNsaWNrO1xuXG4gICAgdGhpcy5wYWludEV2ZW50RGF0YSA9IHtcbiAgICAgIGxhYmVsbWFwM0QsXG4gICAgICBjdXJyZW50SW1hZ2VJZEluZGV4LFxuICAgICAgYWN0aXZlTGFiZWxtYXBJbmRleCxcbiAgICAgIHNob3VsZEVyYXNlXG4gICAgfTtcblxuICAgIGNvbnN0IHNlZ21lbnRJbmRleCA9IGxhYmVsbWFwM0QuYWN0aXZlU2VnbWVudEluZGV4O1xuICAgIGxldCBtZXRhZGF0YSA9IGxhYmVsbWFwM0QubWV0YWRhdGFbc2VnbWVudEluZGV4XTtcblxuICAgIGlmICghbWV0YWRhdGEpIHtcbiAgICAgIG1ldGFkYXRhID0gZ2VuZXJhdGVCcnVzaE1ldGFkYXRhKCdVbm5hbWVkIFNlZ21lbnQnKTtcblxuICAgICAgYnJ1c2hNb2R1bGUuc2V0dGVycy5tZXRhZGF0YShlbGVtZW50LCBhY3RpdmVMYWJlbG1hcEluZGV4LCBzZWdtZW50SW5kZXgsIG1ldGFkYXRhKTtcbiAgICB9XG5cbiAgICAvLyBNZXRhZGF0YSBhc3NpZ25lZCwgc3RhcnQgZHJhd2luZy5cbiAgICBpZiAoZXZlbnREYXRhLmN1cnJlbnRQb2ludHMpIHtcbiAgICAgIHRoaXMuX3BhaW50KGV2dCk7XG4gICAgfVxuICAgIHRoaXMuX2RyYXdpbmcgPSB0cnVlO1xuICAgIHRoaXMuX3N0YXJ0TGlzdGVuaW5nRm9yTW91c2VVcChlbGVtZW50KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRnJlZWhhbmRSb2lTY3VscHRvclRvb2wsIHRvb2xDb2xvcnMsIHN0b3JlLCBnZXRUb29sU3RhdGUgfSBmcm9tICdjb3JuZXJzdG9uZS10b29scyc7XG5pbXBvcnQgeyB1cGRhdGVJbWFnZSB9IGZyb20gJ2Nvcm5lcnN0b25lLWNvcmUnO1xuaW1wb3J0IGludGVycG9sYXRlIGZyb20gJy4uL3V0aWwvZnJlZWhhbmRJbnRlcnBvbGF0ZS9pbnRlcnBvbGF0ZS5qcyc7XG5cbmNvbnN0IHsgbW9kdWxlcywgc3RhdGUgfSA9IHN0b3JlO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmVlaGFuZFJvaTNEU2N1bHB0b3JUb29sIGV4dGVuZHMgRnJlZWhhbmRSb2lTY3VscHRvclRvb2wge1xuICBjb25zdHJ1Y3Rvcihjb25maWd1cmF0aW9uID0ge30pIHtcbiAgICBjb25zdCBkZWZhdWx0Q29uZmlnID0ge1xuICAgICAgY29uZmlndXJhdGlvbjogZ2V0RGVmYXVsdEZyZWVoYW5kU2N1bHB0ZXJNb3VzZVRvb2xDb25maWd1cmF0aW9uKClcbiAgICB9O1xuICAgIGNvbnN0IGluaXRpYWxDb25maWd1cmF0aW9uID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q29uZmlnLCBjb25maWd1cmF0aW9uKTtcblxuICAgIHN1cGVyKGluaXRpYWxDb25maWd1cmF0aW9uKTtcblxuICAgIC8vIENyZWF0ZSBib3VuZCBmdW5jdGlvbnMgZm9yIHByaXZhdGUgZXZlbnQgbG9vcC5cbiAgICB0aGlzLmFjdGl2ZU1vdXNlVXBDYWxsYmFjayA9IHRoaXMuYWN0aXZlTW91c2VVcENhbGxiYWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0IHRoZSBmcmVlaGFuZCB0b29sIHRvIGJlIGVkaXRlZC4gRG9uJ3QgYWxsb3cgc2VsZWN0aW5nIG9mIGxvY2tlZFxuICAgKiBST0lDb250b3Vycy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50RGF0YSAtIERhdGEgb2JqZWN0IGFzc29jaWF0ZWQgd2l0aCB0aGUgZXZlbnQuXG4gICAqL1xuICBfc2VsZWN0RnJlZWhhbmRUb29sKGV2ZW50RGF0YSkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbjtcbiAgICBjb25zdCBlbGVtZW50ID0gZXZlbnREYXRhLmVsZW1lbnQ7XG4gICAgY29uc3QgY2xvc2VzdFRvb2xJbmRleCA9IHRoaXMuX2dldENsb3Nlc3RGcmVlaGFuZFRvb2xPbkVsZW1lbnQoZWxlbWVudCwgZXZlbnREYXRhKTtcblxuICAgIGlmIChjbG9zZXN0VG9vbEluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0b29sU3RhdGUgPSBnZXRUb29sU3RhdGUoZWxlbWVudCwgdGhpcy5yZWZlcmVuY2VkVG9vbE5hbWUpO1xuXG4gICAgY29uc3QgdG9vbERhdGEgPSB0b29sU3RhdGUuZGF0YVtjbG9zZXN0VG9vbEluZGV4XTtcblxuICAgIGNvbnN0IGlzTG9ja2VkID0gdG9vbERhdGEucmVmZXJlbmNlZFN0cnVjdHVyZVNldC5pc0xvY2tlZDtcblxuICAgIGlmIChpc0xvY2tlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbmZpZy5ob3ZlckNvbG9yID0gdG9vbERhdGEucmVmZXJlbmNlZFJPSUNvbnRvdXIuY29sb3I7XG5cbiAgICBjb25maWcuY3VycmVudFRvb2wgPSBjbG9zZXN0VG9vbEluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IGhhbmRsZXIgZm9yIE1PVVNFX1VQIGR1cmluZyB0aGUgYWN0aXZlIGxvb3AuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldnQgLSBUaGUgZXZlbnQuXG4gICAqL1xuICBfYWN0aXZlRW5kKGV2dCkge1xuICAgIGNvbnN0IGV2ZW50RGF0YSA9IGV2dC5kZXRhaWw7XG4gICAgY29uc3QgZWxlbWVudCA9IGV2ZW50RGF0YS5lbGVtZW50O1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbjtcblxuICAgIHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgc3RhdGUuaXNNdWx0aVBhcnRUb29sQWN0aXZlID0gZmFsc2U7XG5cbiAgICB0aGlzLl9nZXRNb3VzZUxvY2F0aW9uKGV2ZW50RGF0YSk7XG4gICAgdGhpcy5faW52YWxpZGF0ZVRvb2xEYXRhKGV2ZW50RGF0YSk7XG5cbiAgICBjb25maWcubW91c2VVcFJlbmRlciA9IHRydWU7XG5cbiAgICB0aGlzLl9kZWFjdGl2YXRlU2N1bHB0KGVsZW1lbnQpO1xuXG4gICAgY29uc3QgdG9vbERhdGEgPSBnZXRUb29sU3RhdGUoZWxlbWVudCwgdGhpcy5yZWZlcmVuY2VkVG9vbE5hbWUpO1xuICAgIGNvbnN0IGRhdGEgPSB0b29sRGF0YS5kYXRhW2NvbmZpZy5jdXJyZW50VG9vbF07XG5cbiAgICBpZiAobW9kdWxlcy5mcmVlaGFuZDNELmdldHRlcnMuaW50ZXJwb2xhdGUoKSkge1xuICAgICAgaW50ZXJwb2xhdGUoZGF0YSk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHRoZSBpbWFnZVxuICAgIHVwZGF0ZUltYWdlKGV2ZW50RGF0YS5lbGVtZW50KTtcblxuICAgIHByZXZlbnRQcm9wYWdhdGlvbihldnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEludmFsaWRhdGUgdGhlIGZyZWVoYW5kIHRvb2wgZGF0YSwgdGlyZ2dlcmluZyByZS1jYWxjdWxhdGlvbiBvZiBzdGF0aXN0aWNzLlxuICAgKlxuICAgKiBAcHJpdmF0ZSBAb3ZlcnJpZGVcbiAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50RGF0YSAtIERhdGEgb2JqZWN0IGFzc29jaWF0ZWQgd2l0aCB0aGUgZXZlbnQuXG4gICAqL1xuICBfaW52YWxpZGF0ZVRvb2xEYXRhKGV2ZW50RGF0YSkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbjtcbiAgICBjb25zdCBlbGVtZW50ID0gZXZlbnREYXRhLmVsZW1lbnQ7XG4gICAgY29uc3QgdG9vbERhdGEgPSBnZXRUb29sU3RhdGUoZWxlbWVudCwgdGhpcy5yZWZlcmVuY2VkVG9vbE5hbWUpO1xuICAgIGNvbnN0IGRhdGEgPSB0b29sRGF0YS5kYXRhW2NvbmZpZy5jdXJyZW50VG9vbF07XG5cbiAgICBkYXRhLmludmFsaWRhdGVkID0gdHJ1ZTtcbiAgICBkYXRhLmludGVycG9sYXRlZCA9IGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZGVmYXVsdCBmcmVlaGFuZFNjdWxwdGVyTW91c2VUb29sIGNvbmZpZ3VyYXRpb24uXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgZGVmYXVsdCBjb25maWd1cmF0aW9uIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gZ2V0RGVmYXVsdEZyZWVoYW5kU2N1bHB0ZXJNb3VzZVRvb2xDb25maWd1cmF0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIG1vdXNlTG9jYXRpb246IHtcbiAgICAgIGhhbmRsZXM6IHtcbiAgICAgICAgc3RhcnQ6IHtcbiAgICAgICAgICBoaWdobGlnaHQ6IHRydWUsXG4gICAgICAgICAgYWN0aXZlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG1pblNwYWNpbmc6IDEsXG4gICAgY3VycmVudFRvb2w6IG51bGwsXG4gICAgZHJhZ0NvbG9yOiB0b29sQ29sb3JzLmdldEFjdGl2ZUNvbG9yKCksXG4gICAgaG92ZXJDb2xvcjogdG9vbENvbG9ycy5nZXRUb29sQ29sb3IoKSxcblxuICAgIC8qIC0tLSBIb3ZlciBvcHRpb25zIC0tLVxuICAgIHNob3dDdXJzb3JPbkhvdmVyOiAgICAgICAgU2hvd3MgYSBwcmV2aWV3IG9mIHRoZSBzY3VscHRpbmcgcmFkaXVzIG9uIGhvdmVyLlxuICAgIGxpbWl0UmFkaXVzT3V0c2lkZVJlZ2lvbjogTGltaXQgbWF4IHRvb2xzaXplIG91dHNpZGUgdGhlIHN1YmplY3QgUk9JIGJhc2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbiBzdWJqZWN0IFJPSSBhcmVhLlxuICAgIGhvdmVyQ3Vyc29yRmFkZUFscGhhOiAgICAgQWxwaGEgdG8gZmFkZSB0byB3aGVuIHRvb2wgdmVyeSBkaXN0YW50IGZyb21cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3QgUk9JLlxuICAgIGhvdmVyQ3Vyc29yRmFkZURpc3RhbmNlOiAgRGlzdGFuY2UgZnJvbSBST0kgaW4gd2hpY2ggdG8gZmFkZSB0aGUgaG92ZXJDdXJzb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbiB1bml0cyBvZiByYWRpaSkuXG4gICAgKi9cbiAgICBzaG93Q3Vyc29yT25Ib3ZlcjogdHJ1ZSxcbiAgICBsaW1pdFJhZGl1c091dHNpZGVSZWdpb246IHRydWUsXG4gICAgaG92ZXJDdXJzb3JGYWRlQWxwaGE6IDAuNSxcbiAgICBob3ZlckN1cnNvckZhZGVEaXN0YW5jZTogMS4yXG4gIH07XG59XG5cbmZ1bmN0aW9uIHByZXZlbnRQcm9wYWdhdGlvbihldnQpIHtcbiAgZXZ0LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuIiwiaW1wb3J0IHsgbWV0YURhdGEsIHVwZGF0ZUltYWdlLCBwaXhlbFRvQ2FudmFzLCBnZXRFbmFibGVkRWxlbWVudCwgZ2V0UGl4ZWxzIH0gZnJvbSAnY29ybmVyc3RvbmUtY29yZSc7XG5pbXBvcnQgeyBwb2ludCB9IGZyb20gJ2Nvcm5lcnN0b25lLW1hdGgnO1xuaW1wb3J0IHtcbiAgaW1wb3J0SW50ZXJuYWxNb2R1bGUsXG4gIEZyZWVoYW5kUm9pVG9vbCxcbiAgZ2V0VG9vbFN0YXRlLFxuICBzdG9yZSxcbiAgdG9vbFN0eWxlLFxuICB0b29sQ29sb3JzLFxuICBFVkVOVFNcbn0gZnJvbSAnY29ybmVyc3RvbmUtdG9vbHMnO1xuXG5pbXBvcnQgZ2VuZXJhdGVVSUQgZnJvbSAnLi4vdXRpbC9nZW5lcmF0ZVVJRC5qcyc7XG5pbXBvcnQgaW50ZXJwb2xhdGUgZnJvbSAnLi4vdXRpbC9mcmVlaGFuZEludGVycG9sYXRlL2ludGVycG9sYXRlLmpzJztcbmltcG9ydCBnZXRTZXJpZXNJbnN0YW5jZVVpZEZyb21FbmFibGVkRWxlbWVudCBmcm9tICcuLi91dGlsL2dldFNlcmllc0luc3RhbmNlVWlkRnJvbUVuYWJsZWRFbGVtZW50LmpzJztcblxuLy8gQ29ybmVyc3RvbmUgM3JkIHBhcnR5IGRldiBraXQgaW1wb3J0c1xuY29uc3QgeyBpbnNlcnRPckRlbGV0ZSwgZnJlZWhhbmRBcmVhLCBjYWxjdWxhdGVGcmVlaGFuZFN0YXRpc3RpY3MgfSA9IGltcG9ydEludGVybmFsTW9kdWxlKCd1dGlsL2ZyZWVoYW5kVXRpbHMnKTtcbmNvbnN0IGRyYXcgPSBpbXBvcnRJbnRlcm5hbE1vZHVsZSgnZHJhd2luZy9kcmF3Jyk7XG5jb25zdCBkcmF3Sm9pbmVkTGluZXMgPSBpbXBvcnRJbnRlcm5hbE1vZHVsZSgnZHJhd2luZy9kcmF3Sm9pbmVkTGluZXMnKTtcbmNvbnN0IGRyYXdIYW5kbGVzID0gaW1wb3J0SW50ZXJuYWxNb2R1bGUoJ2RyYXdpbmcvZHJhd0hhbmRsZXMnKTtcbmNvbnN0IGRyYXdMaW5rZWRUZXh0Qm94ID0gaW1wb3J0SW50ZXJuYWxNb2R1bGUoJ2RyYXdpbmcvZHJhd0xpbmtlZFRleHRCb3gnKTtcbmNvbnN0IG1vdmVIYW5kbGVOZWFySW1hZ2VQb2ludCA9IGltcG9ydEludGVybmFsTW9kdWxlKCdtYW5pcHVsYXRvcnMvbW92ZUhhbmRsZU5lYXJJbWFnZVBvaW50Jyk7XG5jb25zdCBnZXROZXdDb250ZXh0ID0gaW1wb3J0SW50ZXJuYWxNb2R1bGUoJ2RyYXdpbmcvZ2V0TmV3Q29udGV4dCcpO1xuY29uc3QgbW9kdWxlcyA9IHN0b3JlLm1vZHVsZXM7XG5jb25zdCBudW1iZXJzV2l0aENvbW1hcyA9IGltcG9ydEludGVybmFsTW9kdWxlKCd1dGlsL251bWJlcnNXaXRoQ29tbWFzJyk7XG5jb25zdCBwb2ludEluc2lkZUJvdW5kaW5nQm94ID0gaW1wb3J0SW50ZXJuYWxNb2R1bGUoJ3V0aWwvcG9pbnRJbnNpZGVCb3VuZGluZ0JveCcpO1xuY29uc3QgY2FsY3VsYXRlU1VWID0gaW1wb3J0SW50ZXJuYWxNb2R1bGUoJ3V0aWwvY2FsY3VsYXRlU1VWJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyZWVoYW5kUm9pM0RUb29sIGV4dGVuZHMgRnJlZWhhbmRSb2lUb29sIHtcbiAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbiA9IHt9KSB7XG4gICAgY29uc3QgZGVmYXVsdENvbmZpZyA9IHtcbiAgICAgIGNvbmZpZ3VyYXRpb246IGRlZmF1bHRGcmVlaGFuZENvbmZpZ3VyYXRpb24oKVxuICAgIH07XG4gICAgY29uc3QgaW5pdGlhbENvbmZpZ3VyYXRpb24gPSBPYmplY3QuYXNzaWduKGRlZmF1bHRDb25maWcsIGNvbmZpZ3VyYXRpb24pO1xuXG4gICAgc3VwZXIoaW5pdGlhbENvbmZpZ3VyYXRpb24pO1xuXG4gICAgdGhpcy5jb25maWd1cmF0aW9uLmFsd2F5c1Nob3dIYW5kbGVzID0gZmFsc2U7XG4gICAgdGhpcy5fZnJlZWhhbmQzRFN0b3JlID0gbW9kdWxlcy5mcmVlaGFuZDNEO1xuXG4gICAgdGhpcy5fb25NZWFzdXJlbWVudFJlbW92ZWQgPSB0aGlzLl9vbk1lYXN1cmVtZW50UmVtb3ZlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2RyYXdpbmdNb3VzZVVwQ2FsbGJhY2sgPSB0aGlzLl9kcmF3aW5nTW91c2VVcENhbGxiYWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBtZWFzdXJlbWVudCBkYXRhIGZvciB0aGlzIHRvb2wuXG4gICAqIEBvdmVycmlkZSBAcHVibGljIEBtZXRob2RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50RGF0YVxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSBtZWFzdXJlbWVudERhdGFcbiAgICovXG4gIGNyZWF0ZU5ld01lYXN1cmVtZW50KGV2ZW50RGF0YSkge1xuICAgIGNvbnN0IGZyZWVoYW5kM0RTdG9yZSA9IHRoaXMuX2ZyZWVoYW5kM0RTdG9yZTtcbiAgICBjb25zdCBnb29kRXZlbnREYXRhID0gZXZlbnREYXRhICYmIGV2ZW50RGF0YS5jdXJyZW50UG9pbnRzICYmIGV2ZW50RGF0YS5jdXJyZW50UG9pbnRzLmltYWdlO1xuXG4gICAgaWYgKCFnb29kRXZlbnREYXRhKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGByZXF1aXJlZCBldmVudERhdGEgbm90IHN1cHBsaWVkIHRvIHRvb2wgJHt0aGlzLm5hbWV9J3MgY3JlYXRlTmV3TWVhc3VyZW1lbnRgKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGVuYWJsZWRFbGVtZW50ID0gZ2V0RW5hYmxlZEVsZW1lbnQodGhpcy5lbGVtZW50KTtcbiAgICBjb25zdCBzZXJpZXNJbnN0YW5jZVVpZCA9IGdldFNlcmllc0luc3RhbmNlVWlkRnJvbUVuYWJsZWRFbGVtZW50KGVuYWJsZWRFbGVtZW50KTtcbiAgICBjb25zdCByZWZlcmVuY2VkU3RydWN0dXJlU2V0ID0gZnJlZWhhbmQzRFN0b3JlLmdldHRlcnMuc3RydWN0dXJlU2V0KHNlcmllc0luc3RhbmNlVWlkLCAnREVGQVVMVCcpO1xuICAgIGNvbnN0IHJlZmVyZW5jZWRST0lDb250b3VyID0gZnJlZWhhbmQzRFN0b3JlLmdldHRlcnMuYWN0aXZlUk9JQ29udG91cihzZXJpZXNJbnN0YW5jZVVpZCk7XG5cbiAgICBjb25zdCBtZWFzdXJlbWVudERhdGEgPSB7XG4gICAgICB1aWQ6IGdlbmVyYXRlVUlEKCksXG4gICAgICBzZXJpZXNJbnN0YW5jZVVpZCxcbiAgICAgIHN0cnVjdHVyZVNldFVpZDogJ0RFRkFVTFQnLFxuICAgICAgUk9JQ29udG91clVpZDogcmVmZXJlbmNlZFJPSUNvbnRvdXIudWlkLFxuICAgICAgcmVmZXJlbmNlZFJPSUNvbnRvdXIsXG4gICAgICByZWZlcmVuY2VkU3RydWN0dXJlU2V0LFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgIGludmFsaWRhdGVkOiB0cnVlLFxuICAgICAgaGFuZGxlczoge1xuICAgICAgICBwb2ludHM6IFtdXG4gICAgICB9XG4gICAgfTtcblxuICAgIG1lYXN1cmVtZW50RGF0YS5oYW5kbGVzLnRleHRCb3ggPSB7XG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgaGFzTW92ZWQ6IGZhbHNlLFxuICAgICAgbW92ZXNJbmRlcGVuZGVudGx5OiBmYWxzZSxcbiAgICAgIGRyYXduSW5kZXBlbmRlbnRseTogdHJ1ZSxcbiAgICAgIGFsbG93ZWRPdXRzaWRlSW1hZ2U6IHRydWUsXG4gICAgICBoYXNCb3VuZGluZ0JveDogdHJ1ZVxuICAgIH07XG5cbiAgICBmcmVlaGFuZDNEU3RvcmUuc2V0dGVycy5pbmNyZW1lbnRQb2x5Z29uQ291bnQoc2VyaWVzSW5zdGFuY2VVaWQsICdERUZBVUxUJywgcmVmZXJlbmNlZFJPSUNvbnRvdXIudWlkKTtcblxuICAgIHJldHVybiBtZWFzdXJlbWVudERhdGE7XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgaGFuZGxlciBmb3IgY2FsbGVkIGJ5IHRoZSBtb3VzZURvd25BY3RpdmF0ZSBldmVudCwgaWYgdG9vbCBpcyBhY3RpdmUgYW5kXG4gICAqIHRoZSBldmVudCBpcyBub3QgY2F1Z2h0IGJ5IG1vdXNlRG93bkNhbGxiYWNrLlxuICAgKiBAb3ZlcnJpZGVcbiAgICpcbiAgICogQGV2ZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldnQgLSBUaGUgZXZlbnQuXG4gICAqL1xuICBhZGROZXdNZWFzdXJlbWVudChldnQsIGludGVyYWN0aW9uVHlwZSkge1xuICAgIGNvbnN0IGV2ZW50RGF0YSA9IGV2dC5kZXRhaWw7XG5cbiAgICAvLyBDcmVhdGUgbWV0YWRhdGEgaWYgaXQgZG9lc24ndCBleGlzdC5cbiAgICB0aGlzLl9hZGRBbmRTZXRWb2x1bWVJZk5vVm9sdW1lcygpO1xuICAgIHRoaXMuX2RyYXdpbmcgPSB0cnVlO1xuXG4gICAgdGhpcy5fc3RhcnREcmF3aW5nKGV2dCk7XG4gICAgdGhpcy5fYWRkUG9pbnQoZXZlbnREYXRhKTtcbiAgICBwcmV2ZW50UHJvcGFnYXRpb24oZXZ0KTtcbiAgfVxuXG4gIF9hZGRBbmRTZXRWb2x1bWVJZk5vVm9sdW1lcygpIHtcbiAgICBjb25zdCBlbmFibGVkRWxlbWVudCA9IGdldEVuYWJsZWRFbGVtZW50KHRoaXMuZWxlbWVudCk7XG4gICAgY29uc3Qgc2VyaWVzSW5zdGFuY2VVaWQgPSBnZXRTZXJpZXNJbnN0YW5jZVVpZEZyb21FbmFibGVkRWxlbWVudChlbmFibGVkRWxlbWVudCk7XG4gICAgY29uc3QgZnJlZWhhbmQzRFN0b3JlID0gbW9kdWxlcy5mcmVlaGFuZDNEO1xuICAgIGxldCBzZXJpZXMgPSBmcmVlaGFuZDNEU3RvcmUuZ2V0dGVycy5zZXJpZXMoc2VyaWVzSW5zdGFuY2VVaWQpO1xuXG4gICAgaWYgKCFzZXJpZXMpIHtcbiAgICAgIGZyZWVoYW5kM0RTdG9yZS5zZXR0ZXJzLnNlcmllcyhzZXJpZXNJbnN0YW5jZVVpZCk7XG4gICAgICBzZXJpZXMgPSBmcmVlaGFuZDNEU3RvcmUuZ2V0dGVycy5zZXJpZXMoc2VyaWVzSW5zdGFuY2VVaWQpO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZVJPSUNvbnRvdXIgPSBmcmVlaGFuZDNEU3RvcmUuZ2V0dGVycy5hY3RpdmVST0lDb250b3VyKHNlcmllc0luc3RhbmNlVWlkKTtcblxuICAgIGlmICghYWN0aXZlUk9JQ29udG91cikge1xuICAgICAgZnJlZWhhbmQzRFN0b3JlLnNldHRlcnMuUk9JQ29udG91ckFuZFNldEluZGV4QWN0aXZlKHNlcmllc0luc3RhbmNlVWlkLCAnREVGQVVMVCcsICdVbm5hbWVkIExlc2lvbicpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgaGFuZGxlIG9mIGEgcGFydGljdWxhciB0b29sIGlmIGl0IGlzIGNsb3NlIHRvIHRoZSBtb3VzZSBjdXJzb3JcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCBvbiB3aGljaCB0aGUgcm9pIGlzIGJlaW5nIGRyYXduLlxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAgICAgIERhdGEgb2JqZWN0IGFzc29jaWF0ZWQgd2l0aCB0aGUgdG9vbC5cbiAgICogQHBhcmFtIHsqfSBjb29yZHNcbiAgICogQHJldHVybnMge051bWJlcnxPYmplY3R8Qm9vbGVhbn1cbiAgICovXG4gIF9wb2ludE5lYXJIYW5kbGUoZWxlbWVudCwgZGF0YSwgY29vcmRzKSB7XG4gICAgY29uc3QgZnJlZWhhbmQzRFN0b3JlID0gdGhpcy5fZnJlZWhhbmQzRFN0b3JlO1xuXG4gICAgaWYgKCFkYXRhLmhhbmRsZXMgfHwgZGF0YS5oYW5kbGVzLnBvaW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGRhdGEudmlzaWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwb2ludHMgPSBkYXRhLmhhbmRsZXMucG9pbnRzO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGhhbmRsZUNhbnZhcyA9IHBpeGVsVG9DYW52YXMoZWxlbWVudCwgcG9pbnRzW2ldKTtcblxuICAgICAgaWYgKHBvaW50LmRpc3RhbmNlKGhhbmRsZUNhbnZhcywgY29vcmRzKSA8IDYpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgdG8gc2VlIGlmIG1vdXNlIGluIGJvdW5kaW5nIGJveCBvZiB0ZXh0Ym94XG4gICAgaWYgKGZyZWVoYW5kM0RTdG9yZS5zdGF0ZS5kaXNwbGF5U3RhdHMgJiYgZGF0YS5oYW5kbGVzLnRleHRCb3gpIHtcbiAgICAgIGlmIChwb2ludEluc2lkZUJvdW5kaW5nQm94KGRhdGEuaGFuZGxlcy50ZXh0Qm94LCBjb29yZHMpKSB7XG4gICAgICAgIHJldHVybiBkYXRhLmhhbmRsZXMudGV4dEJveDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWN0aXZlIG1vdXNlIGRvd24gY2FsbGJhY2sgdGhhdCB0YWtlcyBwcmlvcml0eSBpZiB0aGUgdXNlciBpcyBhdHRlbXB0aW5nXG4gICAqIHRvIGluc2VydCBvciBkZWxldGUgYSBoYW5kbGUgd2l0aCBjdHJsICsgY2xpY2suXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldnQgLSBUaGUgZXZlbnQuXG4gICAqL1xuICBwcmVNb3VzZURvd25DYWxsYmFjayhldnQpIHtcbiAgICBjb25zdCBldmVudERhdGEgPSBldnQuZGV0YWlsO1xuXG4gICAgY29uc3QgdG9vbERhdGEgPSBnZXRUb29sU3RhdGUoZXZ0LmN1cnJlbnRUYXJnZXQsIHRoaXMubmFtZSk7XG5cbiAgICBpZiAoIXRvb2xEYXRhKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgbmVhcmJ5ID0gdGhpcy5fcG9pbnROZWFySGFuZGxlQWxsVG9vbHMoZXZlbnREYXRhKTtcbiAgICBjb25zdCBmcmVlaGFuZDNEU3RvcmUgPSB0aGlzLl9mcmVlaGFuZDNEU3RvcmU7XG5cbiAgICBpZiAoZXZlbnREYXRhLmV2ZW50LmN0cmxLZXkpIHtcbiAgICAgIGlmIChuZWFyYnkgIT09IHVuZGVmaW5lZCAmJiBuZWFyYnkuaGFuZGxlTmVhcmJ5Lmhhc0JvdW5kaW5nQm94KSB7XG4gICAgICAgIC8vIEN0cmwgKyBjbGlja2VkIHRleHRCb3gsIGRvIG5vdGhpbmcgYnV0IHN0aWxsIGNvbnN1bWUgZXZlbnQuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnNlcnRPckRlbGV0ZS5jYWxsKHRoaXMsIGV2dCwgbmVhcmJ5KTtcbiAgICAgIH1cblxuICAgICAgcHJldmVudFByb3BhZ2F0aW9uKGV2dCk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICghbmVhcmJ5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IHRvb2xEYXRhLmRhdGFbbmVhcmJ5LnRvb2xJbmRleF07XG5cbiAgICAvLyBDaGVjayBpZiBsb2NrZWQgYW5kIHJldHVyblxuICAgIGNvbnN0IHN0cnVjdHVyZVNldCA9IGZyZWVoYW5kM0RTdG9yZS5nZXR0ZXJzLnN0cnVjdHVyZVNldChkYXRhLnNlcmllc0luc3RhbmNlVWlkLCBkYXRhLnN0cnVjdHVyZVNldFVpZCk7XG5cbiAgICBpZiAoc3RydWN0dXJlU2V0LmlzTG9ja2VkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEN1c3RvbSBjYWxsYmFjayBmb3Igd2hlbiBhIGhhbmRsZSBpcyBzZWxlY3RlZC5cbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBldnRcbiAgICogQHBhcmFtICB7T2JqZWN0fSBoYW5kbGUgVGhlIHNlbGVjdGVkIGhhbmRsZS5cbiAgICovXG4gIGhhbmRsZVNlbGVjdGVkQ2FsbGJhY2soZXZ0LCBkYXRhLCBoYW5kbGUsIGludGVyYWN0aW9uVHlwZSA9ICdtb3VzZScpIHtcbiAgICBjb25zdCBmcmVlaGFuZDNEU3RvcmUgPSB0aGlzLl9mcmVlaGFuZDNEU3RvcmU7XG4gICAgY29uc3QgZXZlbnREYXRhID0gZXZ0LmRldGFpbDtcbiAgICBjb25zdCBlbGVtZW50ID0gZXZlbnREYXRhLmVsZW1lbnQ7XG5cbiAgICBpZiAoZXZlbnREYXRhLmV2ZW50Lm1ldGFLZXkpIHtcbiAgICAgIHRoaXMuX3N3aXRjaFJPSUNvbnRvdXIoZXZ0LCBkYXRhKTtcbiAgICAgIHByZXZlbnRQcm9wYWdhdGlvbihldnQpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGhhbmRsZS5oYXNCb3VuZGluZ0JveCAmJiBmcmVlaGFuZDNEU3RvcmUuc3RhdGUuZGlzcGxheVN0YXRzKSB7XG4gICAgICAvLyBVc2UgZGVmYXVsdCBtb3ZlIGhhbmRsZXIgLSBDYW4gbW92ZSB0ZXh0Ym94IG9mIGxvY2tlZCBST0lDb250b3Vycy5cbiAgICAgIG1vdmVIYW5kbGVOZWFySW1hZ2VQb2ludChldnQsIHRoaXMsIGRhdGEsIGhhbmRsZSwgaW50ZXJhY3Rpb25UeXBlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiBsb2NrZWQgYW5kIHJldHVyblxuICAgIGNvbnN0IHN0cnVjdHVyZVNldCA9IGZyZWVoYW5kM0RTdG9yZS5nZXR0ZXJzLnN0cnVjdHVyZVNldChkYXRhLnNlcmllc0luc3RhbmNlVWlkLCBkYXRhLnN0cnVjdHVyZVNldFVpZCk7XG5cbiAgICBpZiAoc3RydWN0dXJlU2V0LmlzTG9ja2VkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uO1xuXG4gICAgY29uZmlnLmRyYWdPcmlnaW4gPSB7XG4gICAgICB4OiBoYW5kbGUueCxcbiAgICAgIHk6IGhhbmRsZS55XG4gICAgfTtcblxuICAgIC8vIEhhdmUgdG8gZG8gdGhpcyB0byBnZXQgdG9vbCBpbmRleC5cbiAgICBjb25zdCBuZWFyYnkgPSB0aGlzLl9wb2ludE5lYXJIYW5kbGVBbGxUb29scyhldmVudERhdGEpO1xuXG4gICAgaWYgKCFuZWFyYnkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVOZWFyYnkgPSBuZWFyYnkuaGFuZGxlTmVhcmJ5O1xuICAgIGNvbnN0IHRvb2xJbmRleCA9IG5lYXJieS50b29sSW5kZXg7XG5cbiAgICB0aGlzLl9tb2RpZnlpbmcgPSB0cnVlO1xuICAgIGNvbmZpZy5jdXJyZW50SGFuZGxlID0gaGFuZGxlTmVhcmJ5O1xuICAgIGNvbmZpZy5jdXJyZW50VG9vbCA9IHRvb2xJbmRleDtcblxuICAgIHRoaXMuX2FjdGl2YXRlTW9kaWZ5KGVsZW1lbnQpO1xuICAgIHByZXZlbnRQcm9wYWdhdGlvbihldnQpO1xuICB9XG5cbiAgX3N3aXRjaFJPSUNvbnRvdXIoZXZ0LCBkYXRhKSB7XG4gICAgY29uc3QgZnJlZWhhbmQzRFN0b3JlID0gdGhpcy5fZnJlZWhhbmQzRFN0b3JlO1xuXG4gICAgZnJlZWhhbmQzRFN0b3JlLnNldHRlcnMuYWN0aXZlUk9JQ29udG91cihkYXRhLnNlcmllc0luc3RhbmNlVWlkLCBkYXRhLnN0cnVjdHVyZVNldFVpZCwgZGF0YS5ST0lDb250b3VyVWlkKTtcblxuICAgIHVwZGF0ZUltYWdlKGV2dC5kZXRhaWwuZWxlbWVudCk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICpcbiAgICogQHBhcmFtIHsqfSBldnRcbiAgICogQHJldHVybnNcbiAgICovXG4gIHJlbmRlclRvb2xEYXRhKGV2dCkge1xuICAgIGNvbnN0IGV2ZW50RGF0YSA9IGV2dC5kZXRhaWw7XG4gICAgY29uc3QgZnJlZWhhbmQzRFN0b3JlID0gdGhpcy5fZnJlZWhhbmQzRFN0b3JlO1xuXG4gICAgLy8gSWYgd2UgaGF2ZSBubyB0b29sU3RhdGUgZm9yIHRoaXMgZWxlbWVudCwgcmV0dXJuIGltbWVkaWF0ZWx5IGFzIHRoZXJlIGlzIG5vdGhpbmcgdG8gZG9cbiAgICBjb25zdCB0b29sU3RhdGUgPSBnZXRUb29sU3RhdGUoZXZ0LmN1cnJlbnRUYXJnZXQsIHRoaXMubmFtZSk7XG5cbiAgICBpZiAoIXRvb2xTdGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGltYWdlID0gZXZlbnREYXRhLmltYWdlO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudERhdGEuZWxlbWVudDtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb247XG4gICAgY29uc3Qgc2VyaWVzTW9kdWxlID0gbWV0YURhdGEuZ2V0KCdnZW5lcmFsU2VyaWVzTW9kdWxlJywgaW1hZ2UuaW1hZ2VJZCk7XG5cbiAgICBsZXQgbW9kYWxpdHk7XG5cbiAgICBpZiAoc2VyaWVzTW9kdWxlKSB7XG4gICAgICBtb2RhbGl0eSA9IHNlcmllc01vZHVsZS5tb2RhbGl0eTtcbiAgICB9XG5cbiAgICAvLyBXZSBoYXZlIHRvb2wgZGF0YSBmb3IgdGhpcyBlbGVtZW50IC0gaXRlcmF0ZSBvdmVyIGVhY2ggb25lIGFuZCBkcmF3IGl0XG4gICAgY29uc3QgY29udGV4dCA9IGdldE5ld0NvbnRleHQoZXZlbnREYXRhLmNhbnZhc0NvbnRleHQuY2FudmFzKTtcblxuICAgIGNvbnN0IGxpbmVXaWR0aCA9IHRvb2xTdHlsZS5nZXRUb29sV2lkdGgoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9vbFN0YXRlLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB0b29sU3RhdGUuZGF0YVtpXTtcbiAgICAgIGNvbnN0IHN0cnVjdHVyZVNldCA9IGRhdGEucmVmZXJlbmNlZFN0cnVjdHVyZVNldDtcbiAgICAgIGNvbnN0IFJPSUNvbnRvdXIgPSBkYXRhLnJlZmVyZW5jZWRST0lDb250b3VyO1xuXG4gICAgICBpZiAoZGF0YS52aXNpYmxlID09PSBmYWxzZSB8fCAhc3RydWN0dXJlU2V0LnZpc2libGUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzUk9JQWN0aXZlID1cbiAgICAgICAgZnJlZWhhbmQzRFN0b3JlLmdldHRlcnMuUk9JQ29udG91ckluZGV4KGRhdGEuc2VyaWVzSW5zdGFuY2VVaWQsIGRhdGEuc3RydWN0dXJlU2V0VWlkLCBkYXRhLlJPSUNvbnRvdXJVaWQpID09PVxuICAgICAgICBmcmVlaGFuZDNEU3RvcmUuZ2V0dGVycy5hY3RpdmVST0lDb250b3VySW5kZXgoZGF0YS5zZXJpZXNJbnN0YW5jZVVpZCk7XG5cbiAgICAgIGRyYXcoY29udGV4dCwgY29udGV4dCA9PiB7XG4gICAgICAgIGxldCBjb2xvciA9IHRvb2xDb2xvcnMuZ2V0Q29sb3JJZkFjdGl2ZShkYXRhKTtcbiAgICAgICAgbGV0IGZpbGxDb2xvcjtcblxuICAgICAgICBjb25zdCBwb2ludHMgPSBkYXRhLmhhbmRsZXMucG9pbnRzO1xuXG4gICAgICAgIGlmIChkYXRhLmFjdGl2ZSAmJiAhc3RydWN0dXJlU2V0LmlzTG9ja2VkKSB7XG4gICAgICAgICAgaWYgKGRhdGEuaGFuZGxlcy5pbnZhbGlkSGFuZGxlUGxhY2VtZW50KSB7XG4gICAgICAgICAgICBjb2xvciA9IGNvbmZpZy5pbnZhbGlkQ29sb3I7XG4gICAgICAgICAgICBmaWxsQ29sb3IgPSBjb25maWcuaW52YWxpZENvbG9yO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb2xvciA9IHRvb2xDb2xvcnMuZ2V0Q29sb3JJZkFjdGl2ZShkYXRhKTtcbiAgICAgICAgICAgIGZpbGxDb2xvciA9IHRvb2xDb2xvcnMuZ2V0RmlsbENvbG9yKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbG9yID0gUk9JQ29udG91ci5jb2xvcjtcbiAgICAgICAgICBmaWxsQ29sb3IgPSBST0lDb250b3VyLmNvbG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzUk9JQWN0aXZlICYmIGRhdGEuaW50ZXJwb2xhdGVkKSB7XG4gICAgICAgICAgY29udGV4dC5nbG9iYWxBbHBoYSA9IGNvbmZpZy5pbnRlcnBvbGF0ZWRBbHBoYTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhLmhhbmRsZXMucG9pbnRzLmxlbmd0aCkge1xuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcG9pbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5lcyA9IFsuLi5wb2ludHNbal0ubGluZXNdO1xuXG4gICAgICAgICAgICBpZiAoaiA9PT0gcG9pbnRzLmxlbmd0aCAtIDEgJiYgIWRhdGEucG9seUJvdW5kaW5nQm94KSB7XG4gICAgICAgICAgICAgIC8vIElmIGl0J3Mgc3RpbGwgYmVpbmcgYWN0aXZlbHkgZHJhd24sIGtlZXAgdGhlIGxhc3QgbGluZSB0b1xuICAgICAgICAgICAgICAvLyBUaGUgbW91c2UgbG9jYXRpb25cbiAgICAgICAgICAgICAgbGluZXMucHVzaChjb25maWcubW91c2VMb2NhdGlvbi5oYW5kbGVzLnN0YXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRyYXdKb2luZWRMaW5lcyhjb250ZXh0LCBldmVudERhdGEuZWxlbWVudCwgZGF0YS5oYW5kbGVzLnBvaW50c1tqXSwgbGluZXMsIHsgY29sb3IgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5nbG9iYWxBbHBoYSA9IDEuMDtcblxuICAgICAgICAvLyBEcmF3IGhhbmRsZXNcblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgIGZpbGw6IGZpbGxDb2xvclxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChpc1JPSUFjdGl2ZSAmJiBkYXRhLmludGVycG9sYXRlZCkge1xuICAgICAgICAgIC8vIFJlbmRlciBkb3R0ZWQgbGluZVxuICAgICAgICAgIG9wdGlvbnMuaGFuZGxlUmFkaXVzID0gY29uZmlnLmludGVycG9sYXRlZEhhbmRsZVJhZGl1cztcbiAgICAgICAgICBkcmF3SGFuZGxlcyhjb250ZXh0LCBldmVudERhdGEsIHBvaW50cywgb3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSBpZiAoY29uZmlnLmFsd2F5c1Nob3dIYW5kbGVzIHx8IChkYXRhLmFjdGl2ZSAmJiBkYXRhLnBvbHlCb3VuZGluZ0JveCkpIHtcbiAgICAgICAgICAvLyBSZW5kZXIgYWxsIGhhbmRsZXNcbiAgICAgICAgICBvcHRpb25zLmhhbmRsZVJhZGl1cyA9IGNvbmZpZy5hY3RpdmVIYW5kbGVSYWRpdXM7XG4gICAgICAgICAgZHJhd0hhbmRsZXMoY29udGV4dCwgZXZlbnREYXRhLCBwb2ludHMsIG9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEuY2FuQ29tcGxldGUpIHtcbiAgICAgICAgICAvLyBEcmF3IGxhcmdlIGhhbmRsZSBhdCB0aGUgb3JpZ2luIGlmIGNhbiBjb21wbGV0ZSBkcmF3aW5nXG4gICAgICAgICAgb3B0aW9ucy5oYW5kbGVSYWRpdXMgPSBjb25maWcuY29tcGxldGVIYW5kbGVSYWRpdXM7XG4gICAgICAgICAgZHJhd0hhbmRsZXMoY29udGV4dCwgZXZlbnREYXRhLCBbcG9pbnRzWzBdXSwgb3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS5hY3RpdmUgJiYgIWRhdGEucG9seUJvdW5kaW5nQm94KSB7XG4gICAgICAgICAgLy8gRHJhdyBoYW5kbGUgYXQgb3JpZ2luIGFuZCBhdCBtb3VzZSBpZiBhY3RpdmVseSBkcmF3aW5nXG4gICAgICAgICAgb3B0aW9ucy5oYW5kbGVSYWRpdXMgPSBjb25maWcuYWN0aXZlSGFuZGxlUmFkaXVzO1xuICAgICAgICAgIGRyYXdIYW5kbGVzKGNvbnRleHQsIGV2ZW50RGF0YSwgY29uZmlnLm1vdXNlTG9jYXRpb24uaGFuZGxlcywgb3B0aW9ucyk7XG4gICAgICAgICAgZHJhd0hhbmRsZXMoY29udGV4dCwgZXZlbnREYXRhLCBbcG9pbnRzWzBdXSwgb3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWZpbmUgdmFyaWFibGVzIGZvciB0aGUgYXJlYSBhbmQgbWVhbi9zdGFuZGFyZCBkZXZpYXRpb25cbiAgICAgICAgbGV0IGFyZWEsIG1lYW5TdGREZXYsIG1lYW5TdGREZXZTVVY7XG5cbiAgICAgICAgLy8gUGVyZm9ybSBhIGNoZWNrIHRvIHNlZSBpZiB0aGUgdG9vbCBoYXMgYmVlbiBpbnZhbGlkYXRlZC4gVGhpcyBpcyB0byBwcmV2ZW50XG4gICAgICAgIC8vIFVubmVjZXNzYXJ5IHJlLWNhbGN1bGF0aW9uIG9mIHRoZSBhcmVhLCBtZWFuLCBhbmQgc3RhbmRhcmQgZGV2aWF0aW9uIGlmIHRoZVxuICAgICAgICAvLyBJbWFnZSBpcyByZS1yZW5kZXJlZCBidXQgdGhlIHRvb2wgaGFzIG5vdCBtb3ZlZCAoZS5nLiBkdXJpbmcgYSB6b29tKVxuICAgICAgICBpZiAoZGF0YS5pbnZhbGlkYXRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGF0YSBpcyBub3QgaW52YWxpZGF0ZWQsIHJldHJpZXZlIGl0IGZyb20gdGhlIHRvb2xTdGF0ZVxuICAgICAgICAgIG1lYW5TdGREZXYgPSBkYXRhLm1lYW5TdGREZXY7XG4gICAgICAgICAgbWVhblN0ZERldlNVViA9IGRhdGEubWVhblN0ZERldlNVVjtcbiAgICAgICAgICBhcmVhID0gZGF0YS5hcmVhO1xuICAgICAgICB9IGVsc2UgaWYgKCFkYXRhLmFjdGl2ZSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkYXRhIGhhcyBiZWVuIGludmFsaWRhdGVkLCBhbmQgdGhlIHRvb2wgaXMgbm90IGN1cnJlbnRseSBhY3RpdmUsXG4gICAgICAgICAgLy8gV2UgbmVlZCB0byBjYWxjdWxhdGUgaXQgYWdhaW4uXG5cbiAgICAgICAgICAvLyBSZXRyaWV2ZSB0aGUgYm91bmRzIG9mIHRoZSBST0kgaW4gaW1hZ2UgY29vcmRpbmF0ZXNcbiAgICAgICAgICBjb25zdCBib3VuZHMgPSB7XG4gICAgICAgICAgICBsZWZ0OiBwb2ludHNbMF0ueCxcbiAgICAgICAgICAgIHJpZ2h0OiBwb2ludHNbMF0ueCxcbiAgICAgICAgICAgIGJvdHRvbTogcG9pbnRzWzBdLnksXG4gICAgICAgICAgICB0b3A6IHBvaW50c1swXS54XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBib3VuZHMubGVmdCA9IE1hdGgubWluKGJvdW5kcy5sZWZ0LCBwb2ludHNbaV0ueCk7XG4gICAgICAgICAgICBib3VuZHMucmlnaHQgPSBNYXRoLm1heChib3VuZHMucmlnaHQsIHBvaW50c1tpXS54KTtcbiAgICAgICAgICAgIGJvdW5kcy5ib3R0b20gPSBNYXRoLm1pbihib3VuZHMuYm90dG9tLCBwb2ludHNbaV0ueSk7XG4gICAgICAgICAgICBib3VuZHMudG9wID0gTWF0aC5tYXgoYm91bmRzLnRvcCwgcG9pbnRzW2ldLnkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHBvbHlCb3VuZGluZ0JveCA9IHtcbiAgICAgICAgICAgIGxlZnQ6IGJvdW5kcy5sZWZ0LFxuICAgICAgICAgICAgdG9wOiBib3VuZHMuYm90dG9tLFxuICAgICAgICAgICAgd2lkdGg6IE1hdGguYWJzKGJvdW5kcy5yaWdodCAtIGJvdW5kcy5sZWZ0KSxcbiAgICAgICAgICAgIGhlaWdodDogTWF0aC5hYnMoYm91bmRzLnRvcCAtIGJvdW5kcy5ib3R0b20pXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIFN0b3JlIHRoZSBib3VuZGluZyBib3ggaW5mb3JtYXRpb24gZm9yIHRoZSB0ZXh0IGJveFxuICAgICAgICAgIGRhdGEucG9seUJvdW5kaW5nQm94ID0gcG9seUJvdW5kaW5nQm94O1xuXG4gICAgICAgICAgLy8gRmlyc3QsIG1ha2Ugc3VyZSB0aGlzIGlzIG5vdCBhIGNvbG9yIGltYWdlLCBzaW5jZSBubyBtZWFuIC8gc3RhbmRhcmRcbiAgICAgICAgICAvLyBEZXZpYXRpb24gd2lsbCBiZSBjYWxjdWxhdGVkIGZvciBjb2xvciBpbWFnZXMuXG4gICAgICAgICAgaWYgKCFpbWFnZS5jb2xvcikge1xuICAgICAgICAgICAgLy8gUmV0cmlldmUgdGhlIGFycmF5IG9mIHBpeGVscyB0aGF0IHRoZSBST0kgYm91bmRzIGNvdmVyXG4gICAgICAgICAgICBjb25zdCBwaXhlbHMgPSBnZXRQaXhlbHMoXG4gICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgIHBvbHlCb3VuZGluZ0JveC5sZWZ0LFxuICAgICAgICAgICAgICBwb2x5Qm91bmRpbmdCb3gudG9wLFxuICAgICAgICAgICAgICBwb2x5Qm91bmRpbmdCb3gud2lkdGgsXG4gICAgICAgICAgICAgIHBvbHlCb3VuZGluZ0JveC5oZWlnaHRcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbWVhbiAmIHN0YW5kYXJkIGRldmlhdGlvbiBmcm9tIHRoZSBwaXhlbHMgYW5kIHRoZSBvYmplY3Qgc2hhcGVcbiAgICAgICAgICAgIG1lYW5TdGREZXYgPSBjYWxjdWxhdGVGcmVlaGFuZFN0YXRpc3RpY3MuY2FsbCh0aGlzLCBwaXhlbHMsIHBvbHlCb3VuZGluZ0JveCwgcG9pbnRzKTtcblxuICAgICAgICAgICAgaWYgKG1vZGFsaXR5ID09PSAnUFQnKSB7XG4gICAgICAgICAgICAgIC8vIElmIHRoZSBpbWFnZSBpcyBmcm9tIGEgUEVUIHNjYW4sIHVzZSB0aGUgRElDT00gdGFncyB0b1xuICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIFNVViBmcm9tIHRoZSBtZWFuIGFuZCBzdGFuZGFyZCBkZXZpYXRpb24uXG5cbiAgICAgICAgICAgICAgLy8gTm90ZSB0aGF0IGJlY2F1c2Ugd2UgYXJlIHVzaW5nIG1vZGFsaXR5IHBpeGVsIHZhbHVlcyBmcm9tIGdldFBpeGVscywgYW5kXG4gICAgICAgICAgICAgIC8vIFRoZSBjYWxjdWxhdGVTVVYgcm91dGluZSBhbHNvIHJlc2NhbGVzIHRvIG1vZGFsaXR5IHBpeGVsIHZhbHVlcywgd2UgYXJlIGZpcnN0XG4gICAgICAgICAgICAgIC8vIFJldHVybmluZyB0aGUgdmFsdWVzIHRvIHN0b3JlZFBpeGVsIHZhbHVlcyBiZWZvcmUgY2FsY3VhdGluZyBTVVYgd2l0aCB0aGVtLlxuICAgICAgICAgICAgICAvLyBUT0RPOiBDbGVhbiB0aGlzIHVwPyBTaG91bGQgd2UgYWRkIGFuIG9wdGlvbiB0byBub3Qgc2NhbGUgaW4gY2FsY3VsYXRlU1VWP1xuICAgICAgICAgICAgICBtZWFuU3RkRGV2U1VWID0ge1xuICAgICAgICAgICAgICAgIG1lYW46IGNhbGN1bGF0ZVNVVihpbWFnZSwgKG1lYW5TdGREZXYubWVhbiAtIGltYWdlLmludGVyY2VwdCkgLyBpbWFnZS5zbG9wZSksXG4gICAgICAgICAgICAgICAgc3RkRGV2OiBjYWxjdWxhdGVTVVYoaW1hZ2UsIChtZWFuU3RkRGV2LnN0ZERldiAtIGltYWdlLmludGVyY2VwdCkgLyBpbWFnZS5zbG9wZSlcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgdGhlIG1lYW4gYW5kIHN0YW5kYXJkIGRldmlhdGlvbiB2YWx1ZXMgYXJlIHNhbmUsIHN0b3JlIHRoZW0gZm9yIGxhdGVyIHJldHJpZXZhbFxuICAgICAgICAgICAgaWYgKG1lYW5TdGREZXYgJiYgIWlzTmFOKG1lYW5TdGREZXYubWVhbikpIHtcbiAgICAgICAgICAgICAgZGF0YS5tZWFuU3RkRGV2ID0gbWVhblN0ZERldjtcbiAgICAgICAgICAgICAgZGF0YS5tZWFuU3RkRGV2U1VWID0gbWVhblN0ZERldlNVVjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBSZXRyaWV2ZSB0aGUgcGl4ZWwgc3BhY2luZyB2YWx1ZXMsIGFuZCBpZiB0aGV5IGFyZSBub3RcbiAgICAgICAgICAvLyBSZWFsIG5vbi16ZXJvIHZhbHVlcywgc2V0IHRoZW0gdG8gMVxuICAgICAgICAgIGNvbnN0IGNvbHVtblBpeGVsU3BhY2luZyA9IGltYWdlLmNvbHVtblBpeGVsU3BhY2luZyB8fCAxO1xuICAgICAgICAgIGNvbnN0IHJvd1BpeGVsU3BhY2luZyA9IGltYWdlLnJvd1BpeGVsU3BhY2luZyB8fCAxO1xuICAgICAgICAgIGNvbnN0IHNjYWxpbmcgPSBjb2x1bW5QaXhlbFNwYWNpbmcgKiByb3dQaXhlbFNwYWNpbmc7XG5cbiAgICAgICAgICBhcmVhID0gZnJlZWhhbmRBcmVhKHBvaW50cywgc2NhbGluZyk7XG5cbiAgICAgICAgICAvLyBJZiB0aGUgYXJlYSB2YWx1ZSBpcyBzYW5lLCBzdG9yZSBpdCBmb3IgbGF0ZXIgcmV0cmlldmFsXG4gICAgICAgICAgaWYgKCFpc05hTihhcmVhKSkge1xuICAgICAgICAgICAgZGF0YS5hcmVhID0gYXJlYTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTZXQgdGhlIGludmFsaWRhdGVkIGZsYWcgdG8gZmFsc2Ugc28gdGhhdCB0aGlzIGRhdGEgd29uJ3QgYXV0b21hdGljYWxseSBiZSByZWNhbGN1bGF0ZWRcbiAgICAgICAgICBkYXRhLmludmFsaWRhdGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPbmx5IHJlbmRlciB0ZXh0IGlmIHBvbHlnb24gUk9JIGhhcyBiZWVuIGNvbXBsZXRlZCwgYW5kIGlzIGFjdGl2ZSxcbiAgICAgICAgLy8gT3IgY29uZmlnIGlzIHNldCB0byBzaG93IHRoZSB0ZXh0Qm94IGFsbCB0aGUgdGltZVxuICAgICAgICBpZiAoZGF0YS5wb2x5Qm91bmRpbmdCb3ggJiYgKGZyZWVoYW5kM0RTdG9yZS5zdGF0ZS5kaXNwbGF5U3RhdHMgfHwgZGF0YS5hY3RpdmUpKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIHRleHRib3ggaGFzIG5vdCBiZWVuIG1vdmVkIGJ5IHRoZSB1c2VyLCBpdCBzaG91bGQgYmUgZGlzcGxheWVkIG9uIHRoZSByaWdodC1tb3N0XG4gICAgICAgICAgLy8gU2lkZSBvZiB0aGUgdG9vbC5cblxuICAgICAgICAgIGlmICghZGF0YS5oYW5kbGVzLnRleHRCb3guaGFzTW92ZWQpIHtcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIHJpZ2h0bW9zdCBzaWRlIG9mIHRoZSBwb2x5Qm91bmRpbmdCb3ggYXQgaXRzIHZlcnRpY2FsIGNlbnRlciwgYW5kIHBsYWNlIHRoZSB0ZXh0Ym94IGhlcmVcbiAgICAgICAgICAgIC8vIE5vdGUgdGhhdCB0aGlzIGNhbGN1bGF0ZXMgaXQgaW4gaW1hZ2UgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgIGRhdGEuaGFuZGxlcy50ZXh0Qm94LnggPSBkYXRhLnBvbHlCb3VuZGluZ0JveC5sZWZ0ICsgZGF0YS5wb2x5Qm91bmRpbmdCb3gud2lkdGg7XG4gICAgICAgICAgICBkYXRhLmhhbmRsZXMudGV4dEJveC55ID0gZGF0YS5wb2x5Qm91bmRpbmdCb3gudG9wICsgZGF0YS5wb2x5Qm91bmRpbmdCb3guaGVpZ2h0IC8gMjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB0ZXh0ID0gdGV4dEJveFRleHQuY2FsbCh0aGlzLCBkYXRhKTtcblxuICAgICAgICAgIGRyYXdMaW5rZWRUZXh0Qm94KFxuICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICBkYXRhLmhhbmRsZXMudGV4dEJveCxcbiAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICBwb2ludHMsXG4gICAgICAgICAgICB0ZXh0Qm94QW5jaG9yUG9pbnRzLFxuICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICBsaW5lV2lkdGgsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRleHRCb3hUZXh0KGRhdGEpIHtcbiAgICAgIGNvbnN0IFJPSUNvbnRvdXIgPSBkYXRhLnJlZmVyZW5jZWRST0lDb250b3VyO1xuICAgICAgY29uc3Qgc3RydWN0dXJlU2V0ID0gZGF0YS5yZWZlcmVuY2VkU3RydWN0dXJlU2V0O1xuXG4gICAgICBjb25zdCB7IG1lYW5TdGREZXYsIG1lYW5TdGREZXZTVVYsIGFyZWEgfSA9IGRhdGE7XG4gICAgICAvLyBEZWZpbmUgYW4gYXJyYXkgdG8gc3RvcmUgdGhlIHJvd3Mgb2YgdGV4dCBmb3IgdGhlIHRleHRib3hcbiAgICAgIGNvbnN0IHRleHRMaW5lcyA9IFtdO1xuXG4gICAgICB0ZXh0TGluZXMucHVzaChST0lDb250b3VyLm5hbWUpO1xuXG4gICAgICBpZiAoc3RydWN0dXJlU2V0Lm5hbWUgPT09ICdERUZBVUxUJykge1xuICAgICAgICB0ZXh0TGluZXMucHVzaCgnV29ya2luZyBST0kgQ29sbGVjdGlvbicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dExpbmVzLnB1c2goc3RydWN0dXJlU2V0Lm5hbWUpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGUgbWVhbiBhbmQgc3RhbmRhcmQgZGV2aWF0aW9uIHZhbHVlcyBhcmUgcHJlc2VudCwgZGlzcGxheSB0aGVtXG4gICAgICBpZiAobWVhblN0ZERldiAmJiBtZWFuU3RkRGV2Lm1lYW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBJZiB0aGUgbW9kYWxpdHkgaXMgQ1QsIGFkZCBIVSB0byBkZW5vdGUgSG91bnNmaWVsZCBVbml0c1xuICAgICAgICBsZXQgbW9TdWZmaXggPSAnJztcblxuICAgICAgICBpZiAobW9kYWxpdHkgPT09ICdDVCcpIHtcbiAgICAgICAgICBtb1N1ZmZpeCA9ICcgSFUnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgbGluZSBvZiB0ZXh0IHRvIGRpc3BsYXkgdGhlIG1lYW4gYW5kIGFueSB1bml0cyB0aGF0IHdlcmUgc3BlY2lmaWVkIChpLmUuIEhVKVxuICAgICAgICBsZXQgbWVhblRleHQgPSBgTWVhbjogJHtudW1iZXJzV2l0aENvbW1hcyhtZWFuU3RkRGV2Lm1lYW4udG9GaXhlZCgyKSl9JHttb1N1ZmZpeH1gO1xuICAgICAgICAvLyBDcmVhdGUgYSBsaW5lIG9mIHRleHQgdG8gZGlzcGxheSB0aGUgc3RhbmRhcmQgZGV2aWF0aW9uIGFuZCBhbnkgdW5pdHMgdGhhdCB3ZXJlIHNwZWNpZmllZCAoaS5lLiBIVSlcbiAgICAgICAgbGV0IHN0ZERldlRleHQgPSBgU3RkRGV2OiAke251bWJlcnNXaXRoQ29tbWFzKG1lYW5TdGREZXYuc3RkRGV2LnRvRml4ZWQoMikpfSR7bW9TdWZmaXh9YDtcblxuICAgICAgICAvLyBJZiB0aGlzIGltYWdlIGhhcyBTVVYgdmFsdWVzIHRvIGRpc3BsYXksIGNvbmNhdGVuYXRlIHRoZW0gdG8gdGhlIHRleHQgbGluZVxuICAgICAgICBpZiAobWVhblN0ZERldlNVViAmJiBtZWFuU3RkRGV2U1VWLm1lYW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbnN0IFNVVnRleHQgPSAnIFNVVjogJztcblxuICAgICAgICAgIG1lYW5UZXh0ICs9IFNVVnRleHQgKyBudW1iZXJzV2l0aENvbW1hcyhtZWFuU3RkRGV2U1VWLm1lYW4udG9GaXhlZCgyKSk7XG4gICAgICAgICAgc3RkRGV2VGV4dCArPSBTVVZ0ZXh0ICsgbnVtYmVyc1dpdGhDb21tYXMobWVhblN0ZERldlNVVi5zdGREZXYudG9GaXhlZCgyKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgdGhlc2UgdGV4dCBsaW5lcyB0byB0aGUgYXJyYXkgdG8gYmUgZGlzcGxheWVkIGluIHRoZSB0ZXh0Ym94XG4gICAgICAgIHRleHRMaW5lcy5wdXNoKG1lYW5UZXh0KTtcbiAgICAgICAgdGV4dExpbmVzLnB1c2goc3RkRGV2VGV4dCk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSBhcmVhIGlzIGEgc2FuZSB2YWx1ZSwgZGlzcGxheSBpdFxuICAgICAgaWYgKGFyZWEpIHtcbiAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBhcmVhIHN1ZmZpeCBiYXNlZCBvbiB0aGUgcGl4ZWwgc3BhY2luZyBpbiB0aGUgaW1hZ2UuXG4gICAgICAgIC8vIElmIHBpeGVsIHNwYWNpbmcgaXMgcHJlc2VudCwgdXNlIG1pbGxpbWV0ZXJzLiBPdGhlcndpc2UsIHVzZSBwaXhlbHMuXG4gICAgICAgIC8vIFRoaXMgdXNlcyBDaGFyIGNvZGUgMTc4IGZvciBhIHN1cGVyc2NyaXB0IDJcbiAgICAgICAgbGV0IHN1ZmZpeCA9IGAgbW0ke1N0cmluZy5mcm9tQ2hhckNvZGUoMTc4KX1gO1xuXG4gICAgICAgIGlmICghaW1hZ2Uucm93UGl4ZWxTcGFjaW5nIHx8ICFpbWFnZS5jb2x1bW5QaXhlbFNwYWNpbmcpIHtcbiAgICAgICAgICBzdWZmaXggPSBgIHBpeGVscyR7U3RyaW5nLmZyb21DaGFyQ29kZSgxNzgpfWA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgYSBsaW5lIG9mIHRleHQgdG8gZGlzcGxheSB0aGUgYXJlYSBhbmQgaXRzIHVuaXRzXG4gICAgICAgIGNvbnN0IGFyZWFUZXh0ID0gYEFyZWE6ICR7bnVtYmVyc1dpdGhDb21tYXMoYXJlYS50b0ZpeGVkKDIpKX0ke3N1ZmZpeH1gO1xuXG4gICAgICAgIC8vIEFkZCB0aGlzIHRleHQgbGluZSB0byB0aGUgYXJyYXkgdG8gYmUgZGlzcGxheWVkIGluIHRoZSB0ZXh0Ym94XG4gICAgICAgIHRleHRMaW5lcy5wdXNoKGFyZWFUZXh0KTtcbiAgICAgIH1cblxuICAgICAgdGV4dExpbmVzLnB1c2goYCR7Uk9JQ29udG91ci5wb2x5Z29uQ291bnR9IGNvbnRvdXJzYCk7XG5cbiAgICAgIHJldHVybiB0ZXh0TGluZXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGV4dEJveEFuY2hvclBvaW50cyhwb2ludHMpIHtcbiAgICAgIHJldHVybiBwb2ludHM7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVuZHMgdGhlIGFjdGl2ZSBkcmF3aW5nIGxvb3AgYW5kIGNvbXBsZXRlcyB0aGUgcG9seWdvbi5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCBvbiB3aGljaCB0aGUgcm9pIGlzIGJlaW5nIGRyYXduLlxuICAgKiBAcGFyYW0ge09iamVjdH0gaGFuZGxlTmVhcmJ5IC0gdGhlIGhhbmRsZSBuZWFyZXN0IHRvIHRoZSBtb3VzZSBjdXJzb3IuXG4gICAqL1xuICBfZW5kRHJhd2luZyhlbGVtZW50LCBoYW5kbGVOZWFyYnkpIHtcbiAgICBjb25zdCB0b29sU3RhdGUgPSBnZXRUb29sU3RhdGUoZWxlbWVudCwgdGhpcy5uYW1lKTtcblxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbjtcblxuICAgIGNvbnN0IGRhdGEgPSB0b29sU3RhdGUuZGF0YVtjb25maWcuY3VycmVudFRvb2xdO1xuXG4gICAgY29uc3QgcG9pbnRzID0gZGF0YS5oYW5kbGVzLnBvaW50cztcblxuICAgIGRhdGEuYWN0aXZlID0gZmFsc2U7XG4gICAgZGF0YS5oaWdobGlnaHQgPSBmYWxzZTtcbiAgICBkYXRhLmhhbmRsZXMuaW52YWxpZEhhbmRsZVBsYWNlbWVudCA9IGZhbHNlO1xuXG4gICAgLy8gQ29ubmVjdCB0aGUgZW5kIGhhbmRsZSB0byB0aGUgb3JpZ2luIGhhbmRsZVxuICAgIGlmIChoYW5kbGVOZWFyYnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcG9pbnRzW2NvbmZpZy5jdXJyZW50SGFuZGxlIC0gMV0ubGluZXMucHVzaChwb2ludHNbMF0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9tb2RpZnlpbmcpIHtcbiAgICAgIHRoaXMuX21vZGlmeWluZyA9IGZhbHNlO1xuICAgICAgZGF0YS5pbnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICBkYXRhLmludGVycG9sYXRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFJlc2V0IHRoZSBjdXJyZW50IGhhbmRsZVxuICAgIGNvbmZpZy5jdXJyZW50SGFuZGxlID0gMDtcbiAgICBjb25maWcuY3VycmVudFRvb2wgPSAtMTtcbiAgICBkYXRhLmNhbkNvbXBsZXRlID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5fZHJhd2luZykge1xuICAgICAgdGhpcy5fZHJhd2luZyA9IGZhbHNlO1xuICAgICAgdGhpcy5fZGVhY3RpdmF0ZURyYXcoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKG1vZHVsZXMuZnJlZWhhbmQzRC5zdGF0ZS5pbnRlcnBvbGF0ZSkge1xuICAgICAgaW50ZXJwb2xhdGUoZGF0YSwgZWxlbWVudCk7XG4gICAgfVxuXG4gICAgdXBkYXRlSW1hZ2UoZWxlbWVudCk7XG4gIH1cblxuICAvKipcbiAgICogQ3VzdG9tIGNhbGxiYWNrIGZvciB3aGVuIHRvb2xEYXRhIGlzIGRlbGV0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gZXZ0XG4gICAqL1xuICBfb25NZWFzdXJlbWVudFJlbW92ZWQoZXZ0KSB7XG4gICAgY29uc3QgZXZlbnREYXRhID0gZXZ0LmRldGFpbDtcblxuICAgIGlmIChldmVudERhdGEudG9vbFR5cGUgIT09IHRoaXMubmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1lYXN1cmVtZW50RGF0YSA9IGV2ZW50RGF0YS5tZWFzdXJlbWVudERhdGE7XG5cbiAgICB0aGlzLl9mcmVlaGFuZDNEU3RvcmUuc2V0dGVycy5kZWNyZW1lbnRQb2x5Z29uQ291bnQoXG4gICAgICBtZWFzdXJlbWVudERhdGEuc2VyaWVzSW5zdGFuY2VVaWQsXG4gICAgICBtZWFzdXJlbWVudERhdGEuc3RydWN0dXJlU2V0VWlkLFxuICAgICAgbWVhc3VyZW1lbnREYXRhLlJPSUNvbnRvdXJVaWRcbiAgICApO1xuICB9XG5cbiAgcGFzc2l2ZUNhbGxiYWNrKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9jbG9zZVRvb2xJZkRyYXdpbmcoZWxlbWVudCk7XG4gICAgdGhpcy5fYWRkTWVhc3VyZW1lbnRSZW1vdmVkTGlzdGVuZXIoZWxlbWVudCk7XG4gIH1cblxuICBlbmFibGVkQ2FsbGJhY2soZWxlbWVudCkge1xuICAgIHRoaXMuX2Nsb3NlVG9vbElmRHJhd2luZyhlbGVtZW50KTtcbiAgICB0aGlzLl9hZGRNZWFzdXJlbWVudFJlbW92ZWRMaXN0ZW5lcihlbGVtZW50KTtcbiAgfVxuXG4gIGFjdGl2ZUNhbGxiYWNrKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9hZGRNZWFzdXJlbWVudFJlbW92ZWRMaXN0ZW5lcihlbGVtZW50KTtcbiAgfVxuXG4gIGRpc2FibGVkQ2FsbGJhY2soZWxlbWVudCkge1xuICAgIHRoaXMuX2Nsb3NlVG9vbElmRHJhd2luZyhlbGVtZW50KTtcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoRVZFTlRTLk1FQVNVUkVNRU5UX1JFTU9WRUQsIHRoaXMuX29uTWVhc3VyZW1lbnRSZW1vdmVkKTtcbiAgfVxuXG4gIF9hZGRNZWFzdXJlbWVudFJlbW92ZWRMaXN0ZW5lcihlbGVtZW50KSB7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKEVWRU5UUy5NRUFTVVJFTUVOVF9SRU1PVkVELCB0aGlzLl9vbk1lYXN1cmVtZW50UmVtb3ZlZCk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKEVWRU5UUy5NRUFTVVJFTUVOVF9SRU1PVkVELCB0aGlzLl9vbk1lYXN1cmVtZW50UmVtb3ZlZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmYXVsdEZyZWVoYW5kQ29uZmlndXJhdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICBtb3VzZUxvY2F0aW9uOiB7XG4gICAgICBoYW5kbGVzOiB7XG4gICAgICAgIHN0YXJ0OiB7XG4gICAgICAgICAgaGlnaGxpZ2h0OiB0cnVlLFxuICAgICAgICAgIGFjdGl2ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBzcGFjaW5nOiAxLFxuICAgIGludGVycG9sYXRlZEhhbmRsZVJhZGl1czogMC41LFxuICAgIGludGVycG9sYXRlZEFscGhhOiAwLjUsXG4gICAgYWN0aXZlSGFuZGxlUmFkaXVzOiAzLFxuICAgIGNvbXBsZXRlSGFuZGxlUmFkaXVzOiA2LFxuICAgIGNvbXBsZXRlSGFuZGxlUmFkaXVzVG91Y2g6IDI4LFxuICAgIGFsd2F5c1Nob3dIYW5kbGVzOiBmYWxzZSxcbiAgICBpbnZhbGlkQ29sb3I6ICdjcmltc29uJyxcbiAgICBjdXJyZW50SGFuZGxlOiAwLFxuICAgIGN1cnJlbnRUb29sOiAtMVxuICB9O1xufVxuXG5mdW5jdGlvbiBwcmV2ZW50UHJvcGFnYXRpb24oZXZ0KSB7XG4gIGV2dC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICBldnQucHJldmVudERlZmF1bHQoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3R1enovbi1kaW1lbnNpb25hbC1mbG9vZC1maWxsXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgbGV0IGdldHRlciwgc2VlZCwgb25GbG9vZCwgb25Cb3VuZGFyeSwgZXF1YWxzLCBkaWFnb25hbHMsIHN0YXJ0Tm9kZSwgcGVybXV0YXRpb25zLCBzdGFjaywgZmxvb2RlZCwgdmlzaXRzLCBib3VuZHM7XG5cbiAgbGV0IGluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZ2V0dGVyID0gb3B0aW9ucy5nZXR0ZXI7XG4gICAgc2VlZCA9IG9wdGlvbnMuc2VlZDtcbiAgICBvbkZsb29kID0gb3B0aW9ucy5vbkZsb29kIHx8IG5vb3A7XG4gICAgb25Cb3VuZGFyeSA9IG9wdGlvbnMub25Cb3VuZGFyeSB8fCBub29wO1xuICAgIGVxdWFscyA9IG9wdGlvbnMuZXF1YWxzIHx8IGRlZmF1bHRFcXVhbHM7XG4gICAgZGlhZ29uYWxzID0gb3B0aW9ucy5kaWFnb25hbHMgfHwgZmFsc2U7XG4gICAgc3RhcnROb2RlID0gZ2V0KHNlZWQpO1xuICAgIHBlcm11dGF0aW9ucyA9IHBydW5lZFBlcm11dGF0aW9ucygpO1xuICAgIHN0YWNrID0gW107XG4gICAgZmxvb2RlZCA9IFtdO1xuICAgIHZpc2l0cyA9IHt9O1xuICAgIGJvdW5kcyA9IHt9O1xuICB9O1xuXG4gIGxldCBtYWluID0gZnVuY3Rpb24gKCkge1xuICAgIHN0YWNrLnB1c2goeyBjdXJyZW50QXJnczogc2VlZCB9KTtcblxuICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICBmbG9vZChzdGFjay5wb3AoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGZsb29kZWQ6IGZsb29kZWQsXG4gICAgICBib3VuZGFyaWVzOiBib3VuZGFyaWVzKClcbiAgICB9O1xuICB9O1xuXG4gIGxldCBmbG9vZCA9IGZ1bmN0aW9uIChqb2IpIHtcbiAgICBsZXQgZ2V0QXJncyA9IGpvYi5jdXJyZW50QXJncztcbiAgICBsZXQgcHJlbGV0Z3MgPSBqb2IucHJldmlvdXNBcmdzO1xuXG4gICAgaWYgKHZpc2l0ZWQoZ2V0QXJncykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbWFya0FzVmlzaXRlZChnZXRBcmdzKTtcblxuICAgIGlmIChtZW1iZXIoZ2V0QXJncykpIHtcbiAgICAgIG1hcmtBc0Zsb29kZWQoZ2V0QXJncyk7XG4gICAgICBwdXNoQWRqYWNlbnQoZ2V0QXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hcmtBc0JvdW5kYXJ5KHByZWxldGdzKTtcbiAgICB9XG4gIH07XG5cbiAgbGV0IHZpc2l0ZWQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHZpc2l0c1trZXldID09PSB0cnVlO1xuICB9O1xuXG4gIGxldCBtYXJrQXNWaXNpdGVkID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHZpc2l0c1trZXldID0gdHJ1ZTtcbiAgfTtcblxuICBsZXQgbWVtYmVyID0gZnVuY3Rpb24gKGdldEFyZ3MpIHtcbiAgICBsZXQgbm9kZSA9IHNhZmVseShnZXQsIFtnZXRBcmdzXSk7XG5cbiAgICByZXR1cm4gc2FmZWx5KGVxdWFscywgW25vZGUsIHN0YXJ0Tm9kZV0pO1xuICB9O1xuXG4gIGxldCBtYXJrQXNGbG9vZGVkID0gZnVuY3Rpb24gKGdldEFyZ3MpIHtcbiAgICBmbG9vZGVkLnB1c2goZ2V0QXJncyk7XG4gICAgb25GbG9vZC5hcHBseSh1bmRlZmluZWQsIGdldEFyZ3MpO1xuICB9O1xuXG4gIGxldCBtYXJrQXNCb3VuZGFyeSA9IGZ1bmN0aW9uIChwcmVsZXRncykge1xuICAgIGJvdW5kc1twcmVsZXRnc10gPSBwcmVsZXRncztcbiAgICBvbkJvdW5kYXJ5LmFwcGx5KHVuZGVmaW5lZCwgcHJlbGV0Z3MpO1xuICB9O1xuXG4gIGxldCBwdXNoQWRqYWNlbnQgPSBmdW5jdGlvbiAoZ2V0QXJncykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGVybXV0YXRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBsZXQgcGVybSA9IHBlcm11dGF0aW9uc1tpXTtcbiAgICAgIGxldCBuZXh0QXJncyA9IGdldEFyZ3Muc2xpY2UoMCk7XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2V0QXJncy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBuZXh0QXJnc1tqXSArPSBwZXJtW2pdO1xuICAgICAgfVxuXG4gICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgY3VycmVudEFyZ3M6IG5leHRBcmdzLFxuICAgICAgICBwcmV2aW91c0FyZ3M6IGdldEFyZ3NcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBsZXQgZ2V0ID0gZnVuY3Rpb24gKGdldEFyZ3MpIHtcbiAgICByZXR1cm4gZ2V0dGVyLmFwcGx5KHVuZGVmaW5lZCwgZ2V0QXJncyk7XG4gIH07XG5cbiAgbGV0IHNhZmVseSA9IGZ1bmN0aW9uIChmLCBhcmdzKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gIH07XG5cbiAgbGV0IG5vb3AgPSBmdW5jdGlvbiAoKSB7fTtcblxuICBsZXQgZGVmYXVsdEVxdWFscyA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGEgPT09IGI7XG4gIH07XG5cbiAgbGV0IHBydW5lZFBlcm11dGF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgcGVybXV0YXRpb25zID0gcGVybXV0ZShzZWVkLmxlbmd0aCk7XG5cbiAgICByZXR1cm4gcGVybXV0YXRpb25zLmZpbHRlcihmdW5jdGlvbiAocGVybSkge1xuICAgICAgbGV0IGNvdW50ID0gY291bnROb25aZXJvZXMocGVybSk7XG5cbiAgICAgIHJldHVybiBjb3VudCAhPT0gMCAmJiAoY291bnQgPT09IDEgfHwgZGlhZ29uYWxzKTtcbiAgICB9KTtcbiAgfTtcblxuICBsZXQgcGVybXV0ZSA9IGZ1bmN0aW9uIChsZW5ndGgpIHtcbiAgICBsZXQgcGVybXMgPSBbXTtcblxuICAgIGxldCBwZXJtdXRhdGlvbiA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHJldHVybiBzdHJpbmcuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoYywgMTApIC0gMTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgucG93KDMsIGxlbmd0aCk7IGkgKz0gMSkge1xuICAgICAgbGV0IHN0cmluZyA9IGxwYWQoaS50b1N0cmluZygzKSwgJzAnLCBsZW5ndGgpO1xuXG4gICAgICBwZXJtcy5wdXNoKHBlcm11dGF0aW9uKHN0cmluZykpO1xuICAgIH1cblxuICAgIHJldHVybiBwZXJtcztcbiAgfTtcblxuICBsZXQgbHBhZCA9IGZ1bmN0aW9uIChzdHJpbmcsIGNoYXJhY3RlciwgbGVuZ3RoKSB7XG4gICAgbGV0IGFycmF5ID0gbmV3IEFycmF5KGxlbmd0aCArIDEpO1xuICAgIGxldCBwYWQgPSBhcnJheS5qb2luKGNoYXJhY3Rlcik7XG5cbiAgICByZXR1cm4gKHBhZCArIHN0cmluZykuc2xpY2UoLWxlbmd0aCk7XG4gIH07XG5cbiAgbGV0IGNvdW50Tm9uWmVyb2VzID0gZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChhcnJheVtpXSAhPT0gMCkge1xuICAgICAgICBjb3VudCArPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb3VudDtcbiAgfTtcblxuICBsZXQgYm91bmRhcmllcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IGtleSBpbiBib3VuZHMpIHtcbiAgICAgIGlmIChib3VuZHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBhcnJheS51bnNoaWZ0KGJvdW5kc1trZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXk7XG4gIH07XG5cbiAgaW5pdGlhbGl6ZSgpO1xuICByZXR1cm4gbWFpbigpO1xufTtcbiIsImltcG9ydCB7IHN0b3JlIH0gZnJvbSAnY29ybmVyc3RvbmUtdG9vbHMnO1xuXG5jb25zdCBtb2R1bGVzID0gc3RvcmUubW9kdWxlcztcblxuZXhwb3J0IGNsYXNzIFBvbHlnb24ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwb2ludHMsXG4gICAgc29wSW5zdGFuY2VVaWQsXG4gICAgc2VyaWVzSW5zdGFuY2VVaWQsXG4gICAgc3RydWN0dXJlU2V0VWlkLFxuICAgIFJPSUNvbnRvdXJVaWQsXG4gICAgcG9seWdvblVpZCxcbiAgICBmcmFtZU51bWJlcixcbiAgICBpbnRlcnBvbGF0ZWRcbiAgKSB7XG4gICAgdGhpcy5fcG9seVBvaW50cyA9IHRoaXMuX2RlZXBDb3B5UG9pbnRzKHBvaW50cyk7XG4gICAgdGhpcy5fc29wSW5zdGFuY2VVaWQgPSBzb3BJbnN0YW5jZVVpZDtcbiAgICB0aGlzLl9zZXJpZXNJbnN0YW5jZVVpZCA9IHNlcmllc0luc3RhbmNlVWlkO1xuICAgIHRoaXMuX3N0cnVjdHVyZVNldFVpZCA9IHN0cnVjdHVyZVNldFVpZDtcbiAgICB0aGlzLl9ST0lDb250b3VyVWlkID0gUk9JQ29udG91clVpZDtcbiAgICB0aGlzLl9wb2x5Z29uVWlkID0gcG9seWdvblVpZDtcbiAgICB0aGlzLl9mcmFtZU51bWJlciA9IGZyYW1lTnVtYmVyO1xuICAgIHRoaXMuX2ludGVycG9sYXRlZCA9IGludGVycG9sYXRlZDtcbiAgfVxuXG4gIF9kZWVwQ29weVBvaW50cyhwb2ludHMpIHtcbiAgICAvLyBDcmVhdGVzIGEgZGVlcCBjb3B5IG9mIHRoZSBwb2ludHMgYXJyYXlcbiAgICBjb25zdCBwb2x5UG9pbnRzID0gW107XG4gICAgY29uc3QgaXNaID0gcG9pbnRzWzBdLnogIT09IHVuZGVmaW5lZDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwb2x5UG9pbnRzLnB1c2goe1xuICAgICAgICB4OiBwb2ludHNbaV0ueCxcbiAgICAgICAgeTogcG9pbnRzW2ldLnlcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaXNaKSB7XG4gICAgICAgIHBvbHlQb2ludHNbaV0ueiA9IHBvaW50c1tpXS56O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwb2x5UG9pbnRzO1xuICB9XG5cbiAgZ2V0RnJlZWhhbmRUb29sRGF0YShpbXBvcnRUeXBlKSB7XG4gICAgY29uc3Qgc2VyaWVzSW5zdGFuY2VVaWQgPSB0aGlzLl9zZXJpZXNJbnN0YW5jZVVpZDtcbiAgICBjb25zdCBzdHJ1Y3R1cmVTZXRVaWQgPSB0aGlzLl9zdHJ1Y3R1cmVTZXRVaWQ7XG4gICAgY29uc3QgUk9JQ29udG91clVpZCA9IHRoaXMuX1JPSUNvbnRvdXJVaWQ7XG5cbiAgICBjb25zdCBmcmVlaGFuZDNEU3RvcmUgPSBtb2R1bGVzLmZyZWVoYW5kM0Q7XG5cbiAgICBjb25zdCByZWZlcmVuY2VkUk9JQ29udG91ciA9IGZyZWVoYW5kM0RTdG9yZS5nZXR0ZXJzLlJPSUNvbnRvdXIoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCwgUk9JQ29udG91clVpZCk7XG4gICAgY29uc3QgcmVmZXJlbmNlZFN0cnVjdHVyZVNldCA9IGZyZWVoYW5kM0RTdG9yZS5nZXR0ZXJzLnN0cnVjdHVyZVNldChzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkKTtcblxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICB1aWQ6IHRoaXMuX3BvbHlnb25VaWQsXG4gICAgICBzZXJpZXNJbnN0YW5jZVVpZCxcbiAgICAgIHN0cnVjdHVyZVNldFVpZCxcbiAgICAgIFJPSUNvbnRvdXJVaWQsXG4gICAgICByZWZlcmVuY2VkUk9JQ29udG91cixcbiAgICAgIHJlZmVyZW5jZWRTdHJ1Y3R1cmVTZXQsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgIGludmFsaWRhdGVkOiB0cnVlLFxuICAgICAgaGFuZGxlczoge1xuICAgICAgICBwb2ludHM6IFtdXG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh0aGlzLl9zb3BJbnN0YW5jZVVpZCkge1xuICAgICAgZGF0YS5zb3BJbnN0YW5jZVVJRCA9IHRoaXMuX3NvcEluc3RhbmNlVWlkO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbnRlcnBvbGF0ZWQpIHtcbiAgICAgIGRhdGEuaW50ZXJwb2xhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLl9nZW5lcmF0ZVBvaW50cyhkYXRhLmhhbmRsZXMucG9pbnRzKTtcblxuICAgIGRhdGEuaGFuZGxlcy50ZXh0Qm94ID0ge1xuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgIGhhc01vdmVkOiBmYWxzZSxcbiAgICAgIG1vdmVzSW5kZXBlbmRlbnRseTogZmFsc2UsXG4gICAgICBkcmF3bkluZGVwZW5kZW50bHk6IHRydWUsXG4gICAgICBhbGxvd2VkT3V0c2lkZUltYWdlOiB0cnVlLFxuICAgICAgaGFzQm91bmRpbmdCb3g6IHRydWVcbiAgICB9O1xuXG4gICAgZGF0YS5wb2x5Qm91bmRpbmdCb3ggPSB7fTtcblxuICAgIGRhdGEudG9CZVNjYWxlZCA9IGltcG9ydFR5cGU7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIF9nZW5lcmF0ZVBvaW50cyhwb2ludHMpIHtcbiAgICAvLyBDb25zdHJ1Y3QgZGF0YS5oYW5kbGVzLnBvaW50cyBhcnJheVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fcG9seVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgcG9pbnRzLnB1c2godGhpcy5fZGVlcENvcHlPbmVQb2ludChpKSk7XG4gICAgfVxuXG4gICAgLy8gR2VuZXJhdGUgbGluZXMgdG8gYmUgZHJhd25cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPT09IHBvaW50cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHBvaW50c1tpXS5saW5lcy5wdXNoKHBvaW50c1swXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb2ludHNbaV0ubGluZXMucHVzaChwb2ludHNbaSArIDFdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfZGVlcENvcHlPbmVQb2ludChpKSB7XG4gICAgbGV0IHBvaW50ID0ge1xuICAgICAgeDogdGhpcy5fcG9seVBvaW50c1tpXS54LFxuICAgICAgeTogdGhpcy5fcG9seVBvaW50c1tpXS55LFxuICAgICAgbGluZXM6IFtdXG4gICAgfTtcblxuICAgIGlmICh0aGlzLl9wb2x5UG9pbnRzW2ldLnogIT09IHVuZGVmaW5lZCkge1xuICAgICAgcG9pbnQueiA9IHRoaXMuX3BvbHlQb2ludHNbaV0uejtcbiAgICB9XG5cbiAgICByZXR1cm4gcG9pbnQ7XG4gIH1cblxuICBnZXQgcG9seVBvaW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9seVBvaW50cztcbiAgfVxuICBnZXQgc29wSW5zdGFuY2VVaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcEluc3RhbmNlVWlkO1xuICB9XG5cbiAgZ2V0IHVpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9seWdvblVpZDtcbiAgfVxuXG4gIGdldCBmcmFtZU51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZnJhbWVOdW1iZXI7XG4gIH1cbn1cbiIsImltcG9ydCB7IGdsb2JhbEltYWdlSWRTcGVjaWZpY1Rvb2xTdGF0ZU1hbmFnZXIsIGdldFRvb2xTdGF0ZSB9IGZyb20gJ2Nvcm5lcnN0b25lLXRvb2xzJztcblxuY29uc3QgZ2xvYmFsVG9vbFN0YXRlTWFuYWdlciA9IGdsb2JhbEltYWdlSWRTcGVjaWZpY1Rvb2xTdGF0ZU1hbmFnZXI7XG5cbi8qKlxuICogZ2VuZXJhdGVJbnRlcnBvbGF0aW9uTGlzdCAtIEdlbmVyYXRlIHRoZSBsaXN0IG9mIGNvbnRvdXJzIHRvIGludGVycG9sYXRlLFxuICogaW5jbHVkaW5nIHdoZXRoZXIgdGhleSBhcmUgbmV3IGNvbnRvdXJzLCBvciBpbnRlcnBvbGF0ZWQgY29udG91cnMgdGhhdCBuZWVkXG4gKiB0byBiZSB1cGRhdGVkLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gdG9vbERhdGEgVGhlIHRvb2wgZGF0YSBvZiB0aGUgZnJlZWhhbmQzRCBjb250b3VyLlxuICogQHJldHVybiB7b2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgUk9JQ29udG91ckRhdGEgYW5kIHRoZVxuICogaW50ZXJwb2xhdGlvbkxpc3QuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0b29sRGF0YSwgZWxlbWVudCkge1xuICBjb25zdCBST0lDb250b3VyVWlkID0gdG9vbERhdGEuUk9JQ29udG91clVpZDtcbiAgY29uc3QgaW1hZ2VJZHMgPSBfZ2V0SW1hZ2VJZHNPZkFjdGl2ZVNlcmllcyhlbGVtZW50KTtcbiAgY29uc3QgUk9JQ29udG91ckRhdGEgPSBfZ2V0Uk9JQ29udG91ckRhdGEoaW1hZ2VJZHMsIFJPSUNvbnRvdXJVaWQpO1xuICBjb25zdCBleHRlbnQgPSBfZ2V0RXh0ZW50T2ZSZWdpb24oUk9JQ29udG91ckRhdGEpO1xuICBjb25zdCBzbGljZUVkaXRlZCA9IF9nZXRTbGljZVBvc2l0aW9uT2ZUb29sRGF0YShST0lDb250b3VyRGF0YSwgdG9vbERhdGEudWlkKTtcblxuICBjb25zdCBpbnRlcnBvbGF0aW9uTGlzdCA9IFtdO1xuXG4gIC8vIENoZWNrIGlmIGNvbnRvdXJzIGJldHdlZW4gdGhlIGV4dGVudCBjYW4gYmUgaW50ZXJwb2xhdGVkLlxuICBmb3IgKGxldCBpID0gZXh0ZW50WzBdICsgMTsgaSA8PSBleHRlbnRbMV0gLSAxOyBpKyspIHtcbiAgICBpZiAoX3NsaWNlTmVlZHNJbnRlcnBvbGF0aW5nKFJPSUNvbnRvdXJEYXRhLCBpKSkge1xuICAgICAgY29uc3QgY29udG91clBhaXIgPSBfZ2V0Qm91bmRpbmdQYWlyKGksIGV4dGVudCwgUk9JQ29udG91ckRhdGEpO1xuXG4gICAgICBpZiAoY29udG91clBhaXIgJiYgKGNvbnRvdXJQYWlyWzBdID09PSBzbGljZUVkaXRlZCB8fCBjb250b3VyUGFpclsxXSA9PT0gc2xpY2VFZGl0ZWQpKSB7XG4gICAgICAgIF9hcHBlbmRpbnRlcnBvbGF0aW9uTGlzdChjb250b3VyUGFpciwgaW50ZXJwb2xhdGlvbkxpc3QpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgUk9JQ29udG91ckRhdGEsXG4gICAgaW50ZXJwb2xhdGlvbkxpc3RcbiAgfTtcbn1cblxuLyoqXG4gKiBfZ2V0U2xpY2VQb3NpdGlvbk9mVG9vbERhdGEgLSBGaW5kcyB0aGUgc2xpY2UgdGhhdCB3YXMgZWRpdGVkLlxuICpcbiAqIEBwYXJhbSAge3R5cGV9IFJPSUNvbnRvdXJEYXRhIGRlc2NyaXB0aW9uXG4gKiBAcGFyYW0gIHt0eXBlfSBwb2x5Z29uVWlkICAgICBkZXNjcmlwdGlvblxuICogQHJldHVybiB7dHlwZX0gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAqL1xuZnVuY3Rpb24gX2dldFNsaWNlUG9zaXRpb25PZlRvb2xEYXRhKFJPSUNvbnRvdXJEYXRhLCBwb2x5Z29uVWlkKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgUk9JQ29udG91ckRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoUk9JQ29udG91ckRhdGFbaV0uY29udG91cnMpIHtcbiAgICAgIGNvbnN0IGNvbnRvdXJzID0gUk9JQ29udG91ckRhdGFbaV0uY29udG91cnM7XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29udG91cnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKGNvbnRvdXJzW2pdLnVpZCA9PT0gcG9seWdvblVpZCkge1xuICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuO1xufVxuXG4vKipcbiAqIF9nZXRJbWFnZUlkc09mQWN0aXZlU2VyaWVzIC0gcmV0dXJucyBhbiBhcnJheSBvZiB0aGUgaW1hZ2VJZHMgZm9yIHRoZSBjdXJyZW50XG4gKiBhY3RpdmUgc2VyaWVzLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ1tdfSBBbiBhcnJheSBvZiBpbWFnZUlkcy5cbiAqL1xuXG5mdW5jdGlvbiBfZ2V0SW1hZ2VJZHNPZkFjdGl2ZVNlcmllcyhlbGVtZW50KSB7XG4gIGNvbnN0IHN0YWNrVG9vbFN0YXRlID0gZ2V0VG9vbFN0YXRlKGVsZW1lbnQsICdzdGFjaycpO1xuXG4gIHJldHVybiBzdGFja1Rvb2xTdGF0ZS5kYXRhWzBdLmltYWdlSWRzO1xufVxuXG4vKipcbiAqIF9nZXRST0lDb250b3VyRGF0YSAtIEdlbmVyYXRlcyBhIGxpc3Qgb2YgdGhlIHNsaWNlIGxvY2F0aW9ucyBvZiB0aGUgMkRcbiAqIHBvbHlnb25zIHRoYXQgbWFrZSB1cCB0aGUgUk9JQ29udG91ci5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmdbXX0gaW1hZ2VJZHMgIEFuIGFycmF5IG9mIEltYWdlIElkcy5cbiAqIEBwYXJhbSAge3R5cGV9IFJPSUNvbnRvdXJVaWQgVGhlIFVJRCBvZiB0aGUgUk9JQ29udG91ci5cbiAqIEByZXR1cm4ge29iamVjdFtdfSAgICAgICAgICAgVGhlIGxpc3Qgb2YgY29udG91ciBsb2NhdGlvbnMgaW4gdGhlIHN0YWNrLlxuICovXG5cbmZ1bmN0aW9uIF9nZXRST0lDb250b3VyRGF0YShpbWFnZUlkcywgUk9JQ29udG91clVpZCkge1xuICBjb25zdCBST0lDb250b3VyRGF0YSA9IFtdO1xuICBjb25zdCB0b29sU3RhdGVNYW5hZ2VyID0gZ2xvYmFsVG9vbFN0YXRlTWFuYWdlci5zYXZlVG9vbFN0YXRlKCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZUlkcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGltYWdlSWQgPSBpbWFnZUlkc1tpXTtcbiAgICBjb25zdCBpbWFnZVRvb2xTdGF0ZSA9IHRvb2xTdGF0ZU1hbmFnZXJbaW1hZ2VJZF07XG5cbiAgICBpZiAoIWltYWdlVG9vbFN0YXRlIHx8ICFpbWFnZVRvb2xTdGF0ZS5mcmVlaGFuZFJvaSkge1xuICAgICAgUk9JQ29udG91ckRhdGEucHVzaCh7XG4gICAgICAgIGltYWdlSWRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb250b3VycyA9IGltYWdlVG9vbFN0YXRlLmZyZWVoYW5kUm9pLmRhdGEuZmlsdGVyKGNvbnRvdXIgPT4ge1xuICAgICAgICByZXR1cm4gY29udG91ci5ST0lDb250b3VyVWlkID09PSBST0lDb250b3VyVWlkO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNvbnRvdXJzT25TbGljZSA9IHtcbiAgICAgICAgaW1hZ2VJZFxuICAgICAgfTtcblxuICAgICAgaWYgKGNvbnRvdXJzLmxlbmd0aCkge1xuICAgICAgICBjb250b3Vyc09uU2xpY2UuY29udG91cnMgPSBjb250b3VycztcbiAgICAgIH1cblxuICAgICAgUk9JQ29udG91ckRhdGEucHVzaChjb250b3Vyc09uU2xpY2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBST0lDb250b3VyRGF0YTtcbn1cblxuLyoqXG4gKiBfZ2V0RXh0ZW50T2ZSZWdpb24gLSBSZXR1cm5zIGEgMiBlbGVtZW50IGFycmF5IHdpdGggdGhlIHNsaWNlIGxvY2F0aW9ucyBvZlxuICogdG9wIGFuZCBib3R0b20gcG9seWdvbiBvZiB0aGUgUk9JQ29udG91ci5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IFJPSUNvbnRvdXJEYXRhICBEYXRhIG9uIHRoZSBzbGljZSBsb2NhdGlvbiBvZiBjb250b3Vyc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBST0lDb250b3VyLlxuICogQHJldHVybiB7TnVtYmVyW119ICAgICAgICAgICAgICAgVGhlIHNsaWNlIGxvY2F0aW9ucyBvZiB0aGUgdG9wIGFuZCBib3R0b21cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvbHlnb24gb2YgdGhlIFJPSUNvbnRvdXIuXG4gKi9cblxuZnVuY3Rpb24gX2dldEV4dGVudE9mUmVnaW9uKFJPSUNvbnRvdXJEYXRhKSB7XG4gIGNvbnN0IGV4dGVudCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgUk9JQ29udG91ckRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoUk9JQ29udG91ckRhdGFbaV0uY29udG91cnMpIHtcbiAgICAgIGV4dGVudC5wdXNoKGkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IFJPSUNvbnRvdXJEYXRhLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKFJPSUNvbnRvdXJEYXRhW2ldLmNvbnRvdXJzKSB7XG4gICAgICBleHRlbnQucHVzaChpKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBleHRlbnQ7XG59XG5cbi8qKlxuICogX3NsaWNlTmVlZHNJbnRlcnBvbGF0aW5nIC0gQ2hlY2sgd2hldGhlciB0aGVyZSBhcmUgbm8gY29udG91cnMgb24gdGhpc1xuICogc2xpY2UsIG9yIG9uZSB3aGljaCBpcyBhbiBpbnRlcnBvbGF0ZWQgY29udG91ci5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IFJPSUNvbnRvdXJEYXRhICBEYXRhIG9uIHRoZSBzbGljZSBsb2NhdGlvbiBvZiBjb250b3Vyc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBST0lDb250b3VyLlxuICogQHBhcmFtICB7TnVtYmVyfSBzbGljZUluZGV4ICAgICAgVGhlIHNsaWNlIGluZGV4LlxuICogQHJldHVybiB7Ym9vbGVhbn0gICAgICAgICAgICAgICAgV2hldGhlciBvciBub3QgdGhlIHNsaWNlIG5lZWRzIGludGVycG9sYXRpbmcuXG4gKi9cbmZ1bmN0aW9uIF9zbGljZU5lZWRzSW50ZXJwb2xhdGluZyhST0lDb250b3VyRGF0YSwgc2xpY2VJbmRleCkge1xuICByZXR1cm4gKFxuICAgICFST0lDb250b3VyRGF0YVtzbGljZUluZGV4XS5jb250b3VycyB8fFxuICAgIChST0lDb250b3VyRGF0YVtzbGljZUluZGV4XS5jb250b3Vycy5sZW5ndGggPT09IDEgJiYgUk9JQ29udG91ckRhdGFbc2xpY2VJbmRleF0uY29udG91cnNbMF0uaW50ZXJwb2xhdGVkKVxuICApO1xufVxuXG4vKipcbiAqIF9hcHBlbmRpbnRlcnBvbGF0aW9uTGlzdCAtIElmIHRoZSBjb250b3VyIG9uIHNsaWNlIGkgY2FuIGJlIHVwZGF0ZWQsIGFkZCBpdCB0byB0aGVcbiAqIGludGVycG9sYXRpb25MaXN0LlxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gc2xpY2VJbmRleCAgICAgIFRoZSBzbGljZSBpbmRleC5cbiAqIEBwYXJhbSAge051bWJlcltdfSBleHRlbnQgICAgICAgIFRoZSBleHRlbnQgb2Ygc2xpY2Ugb2NjdXBhbmN5IG9mIHRoZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUk9JQ29udG91ci5cbiAqIEBwYXJhbSAge29iamVjdFtdfSBST0lDb250b3VyRGF0YSAgRGF0YSBmb3IgdGhlIHNsaWNlIGxvY2F0aW9uIG9mIGNvbnRvdXJzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIFJPSUNvbnRvdXIuXG4gKiBAcGFyYW0gIHtvYmplY3RbXX0gaW50ZXJwb2xhdGlvbkxpc3QgVGhlIGxpc3Qgb2YgY29udG91cnMgdG8gYmUgaW50ZXJwb2xhdGVkLlxuICogQHJldHVybiB7bnVsbH1cbiAqL1xuZnVuY3Rpb24gX2FwcGVuZGludGVycG9sYXRpb25MaXN0KGNvbnRvdXJQYWlyLCBpbnRlcnBvbGF0aW9uTGlzdCkge1xuICBpZiAoIWludGVycG9sYXRpb25MaXN0W2NvbnRvdXJQYWlyWzBdXSkge1xuICAgIGludGVycG9sYXRpb25MaXN0W2NvbnRvdXJQYWlyWzBdXSA9IHtcbiAgICAgIHBhaXI6IGNvbnRvdXJQYWlyLFxuICAgICAgbGlzdDogW11cbiAgICB9O1xuICB9XG59XG5cbi8qKlxuICogX2dldEJvdW5kaW5nUGFpciAtIEdpdmVuIHRoZSBzbGljZSBpbmRleCBhbmQgZXh0ZW50IG9mIHRoZSBST0lDb250b3VyLFxuICogZ2V0IHRoZSBwYWlyIG9mIHBvbHlnb25zIHRvIHVzZSBmb3IgaW50ZXJwb2xhdGlvbiBvZiB0aGUgc2xpY2UuIFJldHVybnNcbiAqIHVuZGVmaW5lZCBpZiB0aGVyZSBpcyBhbiBhbWJpZ3VpdHkgYW5kIGludGVycG9sYXRpb24gY2FuJ3QgdGFrZSBwbGFjZS5cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHNsaWNlSW5kZXggICBUaGUgc2xpY2UgaW5kZXguXG4gKiBAcGFyYW0gIHtOdW1iZXJbXX0gZXh0ZW50ICAgICAgICBUaGUgZXh0ZW50IG9mIHNsaWNlIG9jY3VwYW5jeSBvZiB0aGVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJPSUNvbnRvdXIuXG4gKiBAcGFyYW0gIHtvYmplY3RbXX0gUk9JQ29udG91ckRhdGEgIERhdGEgZm9yIHRoZSBzbGljZSBsb2NhdGlvbiBvZiBjb250b3Vyc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBST0lDb250b3VyLlxuICogQHJldHVybiB7TnVtYmVyW10gfHwgdW5kZWZpbmVkfSAgVGhlIHBhaXIgb2Ygc2xpY2UgaW5kaWNpZXMsIG9yIHVuZGVmaW5lZCBpZlxuICogdGhlIGNvbnRvdXJzIHRvIHVzZSBmb3IgaW50ZXJwb2xhdGlvbiBpcyBhbWJpZ3VvdXMuXG4gKi9cblxuZnVuY3Rpb24gX2dldEJvdW5kaW5nUGFpcihzbGljZUluZGV4LCBleHRlbnQsIFJPSUNvbnRvdXJEYXRhKSB7XG4gIGxldCBjb250b3VyUGFpciA9IFtdO1xuICBsZXQgY2FuSW50ZXJwb2xhdGUgPSB0cnVlO1xuXG4gIC8vIENoZWNrIGZvciBuZWFyZXN0IGxvd2VzdCBzbGljZUluZGV4IGNvbnRhaW5pbmcgY29udG91cnMuXG4gIGZvciAobGV0IGkgPSBzbGljZUluZGV4IC0gMTsgaSA+PSBleHRlbnRbMF07IGktLSkge1xuICAgIGlmIChST0lDb250b3VyRGF0YVtpXS5jb250b3Vycykge1xuICAgICAgY29uc3QgY29udG91cnMgPSBST0lDb250b3VyRGF0YVtpXS5jb250b3VycztcblxuICAgICAgaWYgKGNvbnRvdXJzWzBdLmludGVycG9sYXRlZCkge1xuICAgICAgICAvLyBUaGlzIGNvbnRvdXIgaXMgaW50ZXJwb2xhdGVkLiBXZSBuZWVkIHRvXG4gICAgICAgIC8vIEZpbmQgYSBzb2xpZCBjb250b3VyIHRvIGludGVycG9sYXRlIGZyb20uXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29udG91cnMubGVuZ3RoID4gMSkge1xuICAgICAgICBjYW5JbnRlcnBvbGF0ZSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBGb3VuZCBzaW5nbGUsIG5vbiBpbnRlcnBvbGF0ZWQgY29udG91ciB0byBpbnRlcnBvbGF0ZSBmcm9tLlxuICAgICAgY29udG91clBhaXIucHVzaChpKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY2FuSW50ZXJwb2xhdGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBDaGVjayBmb3IgbmVhcmVzdCB1cHBlciBzbGljZUluZGV4IGNvbnRhaW5pbmcgY29udG91cnMuXG4gIGZvciAobGV0IGkgPSBzbGljZUluZGV4ICsgMTsgaSA8PSBleHRlbnRbMV07IGkrKykge1xuICAgIGlmIChST0lDb250b3VyRGF0YVtpXS5jb250b3Vycykge1xuICAgICAgY29uc3QgY29udG91cnMgPSBST0lDb250b3VyRGF0YVtpXS5jb250b3VycztcblxuICAgICAgaWYgKGNvbnRvdXJzWzBdLmludGVycG9sYXRlZCkge1xuICAgICAgICAvLyBUaGlzIGNvbnRvdXIgaXMgaW50ZXJwb2xhdGVkLiBXZSBuZWVkIHRvXG4gICAgICAgIC8vIEZpbmQgYSBzb2xpZCBjb250b3VyIHRvIGludGVycG9sYXRlIGZyb20uXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29udG91cnMubGVuZ3RoID4gMSkge1xuICAgICAgICBjYW5JbnRlcnBvbGF0ZSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBjb250b3VyUGFpci5wdXNoKGkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjYW5JbnRlcnBvbGF0ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiBjb250b3VyUGFpcjtcbn1cbiIsImltcG9ydCB7IGdsb2JhbEltYWdlSWRTcGVjaWZpY1Rvb2xTdGF0ZU1hbmFnZXIsIHN0b3JlIH0gZnJvbSAnY29ybmVyc3RvbmUtdG9vbHMnO1xuXG5pbXBvcnQgeyBQb2x5Z29uIH0gZnJvbSAnLi4vY2xhc3Nlcy9Qb2x5Z29uLmpzJztcbmltcG9ydCBnZW5lcmF0ZVVJRCBmcm9tICcuLi9nZW5lcmF0ZVVJRC5qcyc7XG5pbXBvcnQgZ2VuZXJhdGVJbnRlcnBvbGF0aW9uRGF0YSBmcm9tICcuL2dlbmVyYXRlSW50ZXJwb2xhdGlvbkRhdGEuanMnO1xuXG5jb25zdCBnbG9iYWxUb29sU3RhdGVNYW5hZ2VyID0gZ2xvYmFsSW1hZ2VJZFNwZWNpZmljVG9vbFN0YXRlTWFuYWdlcjtcbmNvbnN0IGRQID0gMC4yOyAvLyBBaW0gZm9yIDwgMC4ybW0gYmV0d2VlbiBpbnRlcnBvbGF0ZWQgbm9kZXMgd2hlbiBzdXBlci1zYW1wbGluZy5cbmNvbnN0IG1vZHVsZXMgPSBzdG9yZS5tb2R1bGVzO1xuXG4vKipcbiAqIGludGVycG9sYXRlIC0gSW50ZXJwb2xhdGUgbWlzc2luZyBjb250b3VycyBpbiB0aGUgUk9JQ29udG91ci5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRvb2xEYXRhIFRoZSB0b29sIGRhdGEgb2YgdGhlIGZyZWVoYW5kM0QgY29udG91ci5cbiAqIEByZXR1cm4ge251bGx9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0b29sRGF0YSwgZWxlbWVudCkge1xuICBjb25zdCB7IFJPSUNvbnRvdXJEYXRhLCBpbnRlcnBvbGF0aW9uTGlzdCB9ID0gZ2VuZXJhdGVJbnRlcnBvbGF0aW9uRGF0YSh0b29sRGF0YSwgZWxlbWVudCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnRlcnBvbGF0aW9uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChpbnRlcnBvbGF0aW9uTGlzdFtpXSkge1xuICAgICAgX2xpbmVhcmx5SW50ZXJwb2xhdGVCZXR3ZWVuKGludGVycG9sYXRpb25MaXN0W2ldLmxpc3QsIGludGVycG9sYXRpb25MaXN0W2ldLnBhaXIsIFJPSUNvbnRvdXJEYXRhKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBfbGluZWFybHlJbnRlcnBvbGF0ZUJldHdlZW4gLSBMaW5lYXJseSBpbnRlcnBvbGF0ZSBhbGwgdGhlIHNsaWNlcyBpbiB0aGVcbiAqIGluZGljaWVzIGFycmF5IGJldHdlZW4gdGhlIGNvbnRvdXJQYWlyLlxuICpcbiAqIEBwYXJhbSAge051bWJlcltdfSBpbmRpY2llcyAgICAgQW4gYXJyYXkgb2Ygc2xpY2UgaW5kaWNpZXMgdG8gaW50ZXJwb2xhdGUuXG4gKiBAcGFyYW0gIHtOdW1iZXJbXX0gY29udG91clBhaXIgIFRoZSBwYWlyIG9mIGNvbnRvdXJzIHRvIGludGVycG9sYXRlIGJldHdlZW4uXG4gKiBAcGFyYW0gIHtvYmplY3RbXX0gUk9JQ29udG91ckRhdGEgIERhdGEgZm9yIHRoZSBzbGljZSBsb2NhdGlvbiBvZiBjb250b3Vyc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIFJPSUNvbnRvdXIuXG4gKiBAcmV0dXJuIHtudWxsfVxuICovXG5cbmZ1bmN0aW9uIF9saW5lYXJseUludGVycG9sYXRlQmV0d2VlbihpbmRpY2llcywgY29udG91clBhaXIsIFJPSUNvbnRvdXJEYXRhKSB7XG4gIGNvbnN0IGMxID0gX2dlbmVyYXRlQ2xvc2VkQ29udG91cihST0lDb250b3VyRGF0YVtjb250b3VyUGFpclswXV0uY29udG91cnNbMF0uaGFuZGxlcy5wb2ludHMpO1xuICBjb25zdCBjMiA9IF9nZW5lcmF0ZUNsb3NlZENvbnRvdXIoUk9JQ29udG91ckRhdGFbY29udG91clBhaXJbMV1dLmNvbnRvdXJzWzBdLmhhbmRsZXMucG9pbnRzKTtcblxuICBjb25zdCB7IGMxSW50ZXJwLCBjMkludGVycCB9ID0gX2dlbmVyYXRlSW50ZXJwb2xhdGlvbkNvbnRvdXJQYWlyKGMxLCBjMik7XG5cbiAgLy8gVXNpbmcgdGhlIG5ld2x5IGNvbnN0cnVjdGVkIGNvbnRvdXJzLCBpbnRlcnBvbGF0ZSBlYWNoIFJPSS5cbiAgaW5kaWNpZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICBfbGluZWFybHlJbnRlcnBvbGF0ZUNvbnRvdXIoYzFJbnRlcnAsIGMySW50ZXJwLCBpbmRleCwgY29udG91clBhaXIsIFJPSUNvbnRvdXJEYXRhLCBjMS54Lmxlbmd0aCA+IGMyLngubGVuZ3RoKTtcbiAgfSk7XG59XG5cbi8qKlxuICogX2xpbmVhcmx5SW50ZXJwb2xhdGVDb250b3VyIC0gSW5zZXJ0cyBhIGxpbmVhcmx5IGludGVycG9sYXRlZCBjb250b3VyIGF0XG4gKiBzcGVjaWZpZWQgc2xpY2UgaW5kZXguXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSBjMUludGVycCAgICAgICBUaGUgZmlyc3QgcmVmZXJlbmNlIGNvbnRvdXIuXG4gKiBAcGFyYW0gIHtvYmplY3R9IGMySW50ZXJwICAgICAgIFRoZSBzZWNvbmQgcmVmZXJlbmNlIGNvbnRvdXIuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHNsaWNlSW5kZXggICAgICAgVGhlIHNsaWNlIGluZGV4IHRvIGludGVycG9sYXRlLlxuICogQHBhcmFtICB7TnVtYmVye319IGNvbnRvdXJQYWlyICAgIFRoZSBzbGljZSBpbmRpY2llcyBvZiB0aGUgcmVmZXJlbmNlIGNvbnRvdXJzLlxuICogQHBhcmFtICB7b2JqZWN0W119IFJPSUNvbnRvdXJEYXRhICBEYXRhIGZvciB0aGUgc2xpY2UgbG9jYXRpb24gb2YgY29udG91cnNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgUk9JQ29udG91ci5cbiAqIEBwYXJhbSAge2Jvb2xlYW59IGMxSGFzTW9yZU5vZGVzIFRydWUgaWYgYzEgaGFzIG1vcmUgbm9kZXMgdGhhbiBjMi5cbiAqIEByZXR1cm4ge251bGx9XG4gKi9cbmZ1bmN0aW9uIF9saW5lYXJseUludGVycG9sYXRlQ29udG91cihjMUludGVycCwgYzJJbnRlcnAsIHNsaWNlSW5kZXgsIGNvbnRvdXJQYWlyLCBST0lDb250b3VyRGF0YSwgYzFIYXNNb3JlTm9kZXMpIHtcbiAgY29uc3QgekludGVycCA9IChzbGljZUluZGV4IC0gY29udG91clBhaXJbMF0pIC8gKGNvbnRvdXJQYWlyWzFdIC0gY29udG91clBhaXJbMF0pO1xuICBjb25zdCBpbnRlcnBvbGF0ZWQyRENvbnRvdXIgPSBfZ2VuZXJhdGVJbnRlcnBvbGF0ZWRPcGVuQ29udG91cihjMUludGVycCwgYzJJbnRlcnAsIHpJbnRlcnAsIGMxSGFzTW9yZU5vZGVzKTtcblxuICBjb25zdCBjMU1ldGFkYXRhID0gUk9JQ29udG91ckRhdGFbY29udG91clBhaXJbMF1dLmNvbnRvdXJzWzBdO1xuXG4gIGlmIChST0lDb250b3VyRGF0YVtzbGljZUluZGV4XS5jb250b3Vycykge1xuICAgIF9lZGl0SW50ZXJwb2xhdGVkQ29udG91cihpbnRlcnBvbGF0ZWQyRENvbnRvdXIsIFJPSUNvbnRvdXJEYXRhW3NsaWNlSW5kZXhdLmltYWdlSWQsIGMxTWV0YWRhdGEpO1xuICB9IGVsc2Uge1xuICAgIF9hZGRJbnRlcnBvbGF0ZWRDb250b3VyKGludGVycG9sYXRlZDJEQ29udG91ciwgUk9JQ29udG91ckRhdGFbc2xpY2VJbmRleF0uaW1hZ2VJZCwgYzFNZXRhZGF0YSk7XG4gIH1cbn1cblxuLyoqXG4gKiBfZ2VuZXJhdGVJbnRlcnBvbGF0aW9uQ29udG91clBhaXIgLSBnZW5lcmF0ZXMgdHdvIGFsaWduZWQgY29udG91cnMgd2l0aCBhblxuICogZXF1YWwgbnVtYmVyIG9mIG5vZGVzIGZyb20gd2hpY2ggYW4gaW50ZXJtZWRpYXRlIGNvbnRvdXIgbWF5IGJlIGludGVycG9sYXRlZC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGMxIFRoZSBmaXJzdCBjb250b3VyLlxuICogQHBhcmFtICB7b2JqZWN0fSBjMiBUaGUgc2Vjb25kIGNvbnRvdXIuXG4gKiBAcmV0dXJuIHtvYmplY3R9ICBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgdHdvIGNvbnRvdXJzLlxuICovXG5mdW5jdGlvbiBfZ2VuZXJhdGVJbnRlcnBvbGF0aW9uQ29udG91clBhaXIoYzEsIGMyKSB7XG4gIGNvbnN0IGN1bVBlcmltMSA9IF9nZXRDdW11bGF0aXZlUGVyaW1ldGVyKGMxKTtcbiAgY29uc3QgY3VtUGVyaW0yID0gX2dldEN1bXVsYXRpdmVQZXJpbWV0ZXIoYzIpO1xuXG4gIGNvbnN0IGludGVycE5vZGVzID0gTWF0aC5tYXgoXG4gICAgTWF0aC5jZWlsKGN1bVBlcmltMVtjdW1QZXJpbTEubGVuZ3RoIC0gMV0gLyBkUCksXG4gICAgTWF0aC5jZWlsKGN1bVBlcmltMltjdW1QZXJpbTIubGVuZ3RoIC0gMV0gLyBkUClcbiAgKTtcblxuICBjb25zdCBjdW1QZXJpbTFOb3JtID0gX25vcm1hbGlzZWRDdW11bGF0aXZlUGVyaW1ldGVyKGN1bVBlcmltMSk7XG4gIGNvbnN0IGN1bVBlcmltMk5vcm0gPSBfbm9ybWFsaXNlZEN1bXVsYXRpdmVQZXJpbWV0ZXIoY3VtUGVyaW0yKTtcblxuICBjb25zdCBudW1Ob2RlczEgPSBpbnRlcnBOb2RlcyArIGMyLngubGVuZ3RoO1xuICBjb25zdCBudW1Ob2RlczIgPSBpbnRlcnBOb2RlcyArIGMxLngubGVuZ3RoO1xuXG4gIC8vIGNvbmNhdGluYXRlIHAgJiYgY3VtUGVyaW1Ob3JtXG4gIGNvbnN0IHBlcmltMUludGVycCA9IF9nZXRJbnRlcnBvbGF0ZWRQZXJpbShudW1Ob2RlczEsIGN1bVBlcmltMU5vcm0pO1xuICBjb25zdCBwZXJpbTJJbnRlcnAgPSBfZ2V0SW50ZXJwb2xhdGVkUGVyaW0obnVtTm9kZXMyLCBjdW1QZXJpbTJOb3JtKTtcblxuICBjb25zdCBwZXJpbTFJbmQgPSBfZ2V0SW5kaWNhdG9yQXJyYXkoYzEsIG51bU5vZGVzMSk7XG4gIGNvbnN0IHBlcmltMkluZCA9IF9nZXRJbmRpY2F0b3JBcnJheShjMiwgbnVtTm9kZXMyKTtcblxuICBjb25zdCBub2Rlc1BlclNlZ21lbnQxID0gX2dldE5vZGVzUGVyU2VnbWVudChwZXJpbTFJbnRlcnAsIHBlcmltMUluZCk7XG4gIGNvbnN0IG5vZGVzUGVyU2VnbWVudDIgPSBfZ2V0Tm9kZXNQZXJTZWdtZW50KHBlcmltMkludGVycCwgcGVyaW0ySW5kKTtcblxuICBjb25zdCBjMWkgPSBfZ2V0U3VwZXJTYW1wbGVkQ29udG91cihjMSwgbm9kZXNQZXJTZWdtZW50MSk7XG4gIGNvbnN0IGMyaSA9IF9nZXRTdXBlclNhbXBsZWRDb250b3VyKGMyLCBub2Rlc1BlclNlZ21lbnQyKTtcblxuICAvLyBLZWVwIGMyaSBmaXhlZCBhbmQgc2hpZnQgdGhlIHN0YXJ0aW5nIG5vZGUgb2YgYzFpIHRvIG1pbmltaXNlIHRoZSB0b3RhbCBsZW5ndGggb2Ygc2VnbWVudHMuXG4gIF9zaGlmdFN1cGVyU2FtcGxlZENvbnRvdXJJblBsYWNlKGMxaSwgYzJpKTtcblxuICByZXR1cm4gX3JlZHVjZUNvbnRvdXJzVG9PcmlnaW5Ob2RlcyhjMWksIGMyaSk7XG59XG5cbi8qKlxuICogX2FkZEludGVycG9sYXRlZENvbnRvdXIgLSBBZGRzIGEgbmV3IGNvbnRvdXIgdG8gdGhlIGltYWdlSWQuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSBpbnRlcnBvbGF0ZWQyRENvbnRvdXIgVGhlIHBvbHlnb24gdG8gYWRkIHRvIHRoZSBST0lDb250b3VyLlxuICogQHBhcmFtICB7U3RyaW5nfSBpbWFnZUlkICAgICAgICAgICAgICAgVGhlIGltYWdlSWQgdG8gYWRkIHRoZSBwb2x5Z29uIHRvLlxuICogQHBhcmFtICB7dHlwZX0gcmVmZXJlbmNlZFRvb2xEYXRhICAgIFRoZSB0b29sRGF0YSBvZiBhbm90aGVyIHBvbHlnb24gaW4gdGhlXG4gKiBST0lDb250b3VyLCB0byBhc3NpZ24gYXBwcm9wcmlhdGUgbWV0YWRhdGEgdG8gdGhlIG5ldyBwb2x5Z29uLlxuICogQHJldHVybiB7bnVsbH1cbiAqL1xuZnVuY3Rpb24gX2FkZEludGVycG9sYXRlZENvbnRvdXIoaW50ZXJwb2xhdGVkMkRDb250b3VyLCBpbWFnZUlkLCByZWZlcmVuY2VkVG9vbERhdGEpIHtcbiAgY29uc3QgcG9pbnRzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnRlcnBvbGF0ZWQyRENvbnRvdXIueC5sZW5ndGg7IGkrKykge1xuICAgIHBvaW50cy5wdXNoKHtcbiAgICAgIHg6IGludGVycG9sYXRlZDJEQ29udG91ci54W2ldLFxuICAgICAgeTogaW50ZXJwb2xhdGVkMkRDb250b3VyLnlbaV1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHBvbHlnb24gPSBuZXcgUG9seWdvbihcbiAgICBwb2ludHMsXG4gICAgbnVsbCxcbiAgICByZWZlcmVuY2VkVG9vbERhdGEuc2VyaWVzSW5zdGFuY2VVaWQsXG4gICAgcmVmZXJlbmNlZFRvb2xEYXRhLnN0cnVjdHVyZVNldFVpZCxcbiAgICByZWZlcmVuY2VkVG9vbERhdGEuUk9JQ29udG91clVpZCxcbiAgICBnZW5lcmF0ZVVJRCgpLFxuICAgIG51bGwsXG4gICAgdHJ1ZVxuICApO1xuXG4gIGNvbnN0IHRvb2xTdGF0ZU1hbmFnZXIgPSBnbG9iYWxUb29sU3RhdGVNYW5hZ2VyLnNhdmVUb29sU3RhdGUoKTtcblxuICBpZiAoIXRvb2xTdGF0ZU1hbmFnZXJbaW1hZ2VJZF0pIHtcbiAgICB0b29sU3RhdGVNYW5hZ2VyW2ltYWdlSWRdID0ge307XG4gIH1cblxuICBjb25zdCBpbWFnZVRvb2xTdGF0ZSA9IHRvb2xTdGF0ZU1hbmFnZXJbaW1hZ2VJZF07XG5cbiAgaWYgKCFpbWFnZVRvb2xTdGF0ZS5mcmVlaGFuZFJvaSkge1xuICAgIGltYWdlVG9vbFN0YXRlLmZyZWVoYW5kUm9pID0ge307XG4gICAgaW1hZ2VUb29sU3RhdGUuZnJlZWhhbmRSb2kuZGF0YSA9IFtdO1xuICB9IGVsc2UgaWYgKCFpbWFnZVRvb2xTdGF0ZS5mcmVlaGFuZFJvaS5kYXRhKSB7XG4gICAgaW1hZ2VUb29sU3RhdGUuZnJlZWhhbmRSb2kuZGF0YSA9IFtdO1xuICB9XG5cbiAgaW1hZ2VUb29sU3RhdGUuZnJlZWhhbmRSb2kuZGF0YS5wdXNoKHBvbHlnb24uZ2V0RnJlZWhhbmRUb29sRGF0YShmYWxzZSkpO1xuXG4gIG1vZHVsZXMuZnJlZWhhbmQzRC5zZXR0ZXJzLmluY3JlbWVudFBvbHlnb25Db3VudChcbiAgICByZWZlcmVuY2VkVG9vbERhdGEuc2VyaWVzSW5zdGFuY2VVaWQsXG4gICAgcmVmZXJlbmNlZFRvb2xEYXRhLnN0cnVjdHVyZVNldFVpZCxcbiAgICByZWZlcmVuY2VkVG9vbERhdGEuUk9JQ29udG91clVpZFxuICApO1xufVxuXG4vKipcbiAqIF9lZGl0SW50ZXJwb2xhdGVkQ29udG91ciAtIEVkaXRzIGFuIGludGVycG9sYXRlZCBwb2x5Z29uIG9uIHRoZSBpbWFnZUlkXG4gKiB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBzcGVjaWZpZWQgUk9JQ29udG91ci5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGludGVycG9sYXRlZDJEQ29udG91ciBUaGUgcG9seWdvbiB0byBhZGQgdG8gdGhlIFJPSUNvbnRvdXIuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGltYWdlSWQgICAgICAgICAgICAgICBUaGUgaW1hZ2VJZCB0byBhZGQgdGhlIHBvbHlnb24gdG8uXG4gKiBAcGFyYW0gIHt0eXBlfSByZWZlcmVuY2VkVG9vbERhdGEgICAgVGhlIHRvb2xEYXRhIG9mIGFub3RoZXIgcG9seWdvbiBpbiB0aGVcbiAqIFJPSUNvbnRvdXIsIHRvIGFzc2lnbiBhcHByb3ByaWF0ZSBtZXRhZGF0YSB0byB0aGUgbmV3IHBvbHlnb24uXG4gKiBAcmV0dXJuIHtudWxsfVxuICovXG5mdW5jdGlvbiBfZWRpdEludGVycG9sYXRlZENvbnRvdXIoaW50ZXJwb2xhdGVkMkRDb250b3VyLCBpbWFnZUlkLCByZWZlcmVuY2VkVG9vbERhdGEpIHtcbiAgY29uc3QgdG9vbFN0YXRlTWFuYWdlciA9IGdsb2JhbFRvb2xTdGF0ZU1hbmFnZXIuc2F2ZVRvb2xTdGF0ZSgpO1xuICBjb25zdCBpbWFnZVRvb2xTdGF0ZSA9IHRvb2xTdGF0ZU1hbmFnZXJbaW1hZ2VJZF07XG5cbiAgaWYgKCFpbWFnZVRvb2xTdGF0ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW1hZ2UgdG9vbHN0YXRlIGRvZXMgbm90IGV4aXN0LiBUaGlzIHNob3VsZCBub3QgYmUgcmVhY2hlZCBpbiB0aGlzIGNhc2UhJyk7XG4gIH1cblxuICAvLyBGaW5kIHRoZSBpbmRleCBvZiB0aGUgcG9seWdvbiBvbiB0aGlzIHNsaWNlIGNvcnJlc3BvbmRpbmcgdG9cbiAgLy8gVGhlIFJPSUNvbnRvdXIuXG4gIGxldCB0b29sRGF0YUluZGV4O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VUb29sU3RhdGUuZnJlZWhhbmRSb2kuZGF0YS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChpbWFnZVRvb2xTdGF0ZS5mcmVlaGFuZFJvaS5kYXRhW2ldLlJPSUNvbnRvdXJVaWQgPT09IHJlZmVyZW5jZWRUb29sRGF0YS5ST0lDb250b3VyVWlkKSB7XG4gICAgICB0b29sRGF0YUluZGV4ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG9sZFBvbHlnb24gPSBpbWFnZVRvb2xTdGF0ZS5mcmVlaGFuZFJvaS5kYXRhW3Rvb2xEYXRhSW5kZXhdO1xuICBjb25zdCBwb2ludHMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGludGVycG9sYXRlZDJEQ29udG91ci54Lmxlbmd0aDsgaSsrKSB7XG4gICAgcG9pbnRzLnB1c2goe1xuICAgICAgeDogaW50ZXJwb2xhdGVkMkRDb250b3VyLnhbaV0sXG4gICAgICB5OiBpbnRlcnBvbGF0ZWQyRENvbnRvdXIueVtpXVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgdXBkYXRlZFBvbHlnb24gPSBuZXcgUG9seWdvbihcbiAgICBwb2ludHMsXG4gICAgbnVsbCxcbiAgICBvbGRQb2x5Z29uLnNlcmllc0luc3RhbmNlVWlkLFxuICAgIG9sZFBvbHlnb24uc3RydWN0dXJlU2V0VWlkLFxuICAgIG9sZFBvbHlnb24uUk9JQ29udG91clVpZCxcbiAgICBvbGRQb2x5Z29uLnVpZCxcbiAgICBudWxsLFxuICAgIHRydWVcbiAgKTtcblxuICBpbWFnZVRvb2xTdGF0ZS5mcmVlaGFuZFJvaS5kYXRhW3Rvb2xEYXRhSW5kZXhdID0gdXBkYXRlZFBvbHlnb24uZ2V0RnJlZWhhbmRUb29sRGF0YShmYWxzZSk7XG59XG5cbi8qKlxuICogX2dlbmVyYXRlSW50ZXJwb2xhdGVkT3BlbkNvbnRvdXIgLSBJbnRlcnBvbGF0ZSBhbiBvcGVuIGNvbnRvdXIgYmV0d2VlbiBjMWlyXG4gKiBhbmQgYzJpciBhdCB0aGUgekludGVycCBwb3NpdGlvbi5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGMxaXIgICAgICAgICAgICBUaGUgaW50ZXJwb2xhdGVkIGMxIGNvbnRvdXIgd2l0aFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwZXJmbHVvdXMgbm9kZXMgcmVtb3ZlZC5cbiAqIEBwYXJhbSAge29iamVjdH0gYzJpciAgICAgICAgICAgIFRoZSBpbnRlcnBvbGF0ZWQgYzIgY29udG91ciB3aXRoXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBlcmZsdW91cyBub2RlcyByZW1vdmVkLlxuICogQHBhcmFtICB7TnVtYmVyfSB6SW50ZXJwICAgICAgICAgVGhlIHotIGNvb3JkaW5hdGUgb2YgdGhlIGRlc2lyZWRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycG9sYXRpb24uXG4gKiBAcGFyYW0gIHtib29sZWFufSBjMUhhc01vcmVOb2RlcyBUcnVlIGlmIGMxIGhhcyBtb3JlIG9yaWdpbmFsIG5vZGVzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGFuIGMyLlxuICogQHJldHVybiB7b2JqZWN0fSAgICAgICAgICAgICAgICAgVGhlIGludGVycG9sYXRlZCBjb250b3VyIGF0IHo9ekludGVycC5cbiAqL1xuZnVuY3Rpb24gX2dlbmVyYXRlSW50ZXJwb2xhdGVkT3BlbkNvbnRvdXIoYzFpciwgYzJpciwgekludGVycCwgYzFIYXNNb3JlTm9kZXMpIHtcbiAgY29uc3QgY0ludGVycCA9IHtcbiAgICB4OiBbXSxcbiAgICB5OiBbXVxuICB9O1xuXG4gIGNvbnN0IGluZGljaWVzID0gYzFIYXNNb3JlTm9kZXMgPyBjMWlyLkkgOiBjMmlyLkk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjMWlyLngubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaW5kaWNpZXNbaV0pIHtcbiAgICAgIGNJbnRlcnAueC5wdXNoKCgxIC0gekludGVycCkgKiBjMWlyLnhbaV0gKyB6SW50ZXJwICogYzJpci54W2ldKTtcbiAgICAgIGNJbnRlcnAueS5wdXNoKCgxIC0gekludGVycCkgKiBjMWlyLnlbaV0gKyB6SW50ZXJwICogYzJpci55W2ldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY0ludGVycDtcbn1cblxuLyoqXG4gKiBfcmVkdWNlQ29udG91cnNUb09yaWdpbk5vZGVzIC0gUmVtb3ZlcyBhbnkgbm9kZXMgZnJvbSB0aGUgY29udG91cnMgdGhhdCBkb24ndFxuICogY29ycmVzcG9uZCB0byBhbiBvcmlnaW5hbCBjb250b3VyIG5vZGUuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSBjMWkgVGhlIGZpcnN0IHN1cGVyLXNhbXBsZWQgY29udG91ci5cbiAqIEBwYXJhbSAge29iamVjdH0gYzJpIFRoZSBzZWNvbmQgc3VwZXItc2FtcGxlZCBjb250b3VyLlxuICogQHJldHVybiB7b2JqZWN0fSAgICAgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHR3byByZWR1Y2VkIGNvbnRvdXJzLlxuICovXG5mdW5jdGlvbiBfcmVkdWNlQ29udG91cnNUb09yaWdpbk5vZGVzKGMxaSwgYzJpKSB7XG4gIGNvbnN0IGMxSW50ZXJwID0ge1xuICAgIHg6IFtdLFxuICAgIHk6IFtdLFxuICAgIEk6IFtdXG4gIH07XG4gIGNvbnN0IGMySW50ZXJwID0ge1xuICAgIHg6IFtdLFxuICAgIHk6IFtdLFxuICAgIEk6IFtdXG4gIH07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjMWkueC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChjMWkuSVtpXSB8fCBjMmkuSVtpXSkge1xuICAgICAgYzFJbnRlcnAueC5wdXNoKGMxaS54W2ldKTtcbiAgICAgIGMxSW50ZXJwLnkucHVzaChjMWkueVtpXSk7XG4gICAgICBjMUludGVycC5JLnB1c2goYzFpLklbaV0pO1xuXG4gICAgICBjMkludGVycC54LnB1c2goYzJpLnhbaV0pO1xuICAgICAgYzJJbnRlcnAueS5wdXNoKGMyaS55W2ldKTtcbiAgICAgIGMySW50ZXJwLkkucHVzaChjMmkuSVtpXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjMUludGVycCxcbiAgICBjMkludGVycFxuICB9O1xufVxuXG4vKipcbiAqIF9zaGlmdFN1cGVyU2FtcGxlZENvbnRvdXJJblBsYWNlIC0gU2hpZnRzIHRoZSBpbmRpY2llcyBvZiBjMWkgYXJvdW5kIHRvXG4gKiBtaW5pbWlzZTogU1VNICh8YzFpW2ldLWMyaVtpXXwpIGZyb20gMCB0byBOLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gYzFpIFRoZSBjb250b3VyIHRvIHNoaWZ0LlxuICogQHBhcmFtICB7b2JqZWN0fSBjMmkgVGhlIHJlZmVyZW5jZSBjb250b3VyLlxuICogQG1vZGlmaWVzIGMxaVxuICovXG5mdW5jdGlvbiBfc2hpZnRTdXBlclNhbXBsZWRDb250b3VySW5QbGFjZShjMWksIGMyaSkge1xuICBjb25zdCBjMWlMZW5ndGggPSBjMWkueC5sZW5ndGg7XG5cbiAgbGV0IG9wdGltYWwgPSB7XG4gICAgc3RhcnRpbmdOb2RlOiAwLFxuICAgIHRvdGFsU3F1YXJlZFhZTGVuZ3RoczogSW5maW5pdHlcbiAgfTtcblxuICBmb3IgKGxldCBzdGFydGluZ05vZGUgPSAwOyBzdGFydGluZ05vZGUgPCBjMWlMZW5ndGg7IHN0YXJ0aW5nTm9kZSsrKSB7XG4gICAgbGV0IG5vZGUgPSBzdGFydGluZ05vZGU7XG5cbiAgICAvLyBOT1RFOiAxKSBJZ25vcmUgY2FsY3VsYXRpbmcgWiwgYXMgdGhlIHN1bSBvZiBhbGwgc3F1YXJlZCBaIGRpc3RhbmNlcyB3aWxsIGFsd2F5cyBiZSBhIGNvbnN0YW50LlxuICAgIC8vIE5PVEU6IDIpIERvbid0IG5lZWQgYWN0dWFsIGxlbmd0aCwgc28gZG9uJ3Qgd29ycnkgYWJvdXQgc3F1YXJlIHJvb3RpbmcuXG4gICAgbGV0IHRvdGFsU3F1YXJlZFhZTGVuZ3RocyA9IDA7XG5cbiAgICBmb3IgKGxldCBpdHRlcmF0aW9uID0gMDsgaXR0ZXJhdGlvbiA8IGMxaUxlbmd0aDsgaXR0ZXJhdGlvbisrKSB7XG4gICAgICB0b3RhbFNxdWFyZWRYWUxlbmd0aHMgKz0gKGMxaS54W25vZGVdIC0gYzJpLnhbaXR0ZXJhdGlvbl0pICoqIDIgKyAoYzFpLnlbbm9kZV0gLSBjMmkueVtpdHRlcmF0aW9uXSkgKiogMjtcblxuICAgICAgbm9kZSsrO1xuXG4gICAgICBpZiAobm9kZSA9PT0gYzFpTGVuZ3RoKSBub2RlID0gMDtcbiAgICB9XG5cbiAgICBpZiAodG90YWxTcXVhcmVkWFlMZW5ndGhzIDwgb3B0aW1hbC50b3RhbFNxdWFyZWRYWUxlbmd0aHMpIHtcbiAgICAgIG9wdGltYWwudG90YWxTcXVhcmVkWFlMZW5ndGhzID0gdG90YWxTcXVhcmVkWFlMZW5ndGhzO1xuICAgICAgb3B0aW1hbC5zdGFydGluZ05vZGUgPSBzdGFydGluZ05vZGU7XG4gICAgfVxuICB9XG5cbiAgbGV0IG5vZGUgPSBvcHRpbWFsLnN0YXJ0aW5nTm9kZTtcblxuICBfc2hpZnRDaXJjdWxhckFycmF5KGMxaS54LCBub2RlKTtcbiAgX3NoaWZ0Q2lyY3VsYXJBcnJheShjMWkueSwgbm9kZSk7XG4gIF9zaGlmdENpcmN1bGFyQXJyYXkoYzFpLkksIG5vZGUpO1xufVxuXG4vKipcbiAqIF9zaGlmdENpcmN1bGFyQXJyYXkgLSBTaGlmdCB0aGUgY2lyY3VsYXIgYXJyYXkgYnkgdGhlIGNvdW50LlxuICpcbiAqIEBwYXJhbSAgeypbXX0gYXJyICAgVGhlIGFycmF5LlxuICogQHBhcmFtICB7TnVtYmVyfSBjb3VudCBUaGUgc2hpZnQuXG4gKiBAcmV0dXJuIHsqW119ICAgICAgIFRoZSBzaGlmdGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBfc2hpZnRDaXJjdWxhckFycmF5KGFyciwgY291bnQpIHtcbiAgY291bnQgLT0gYXJyLmxlbmd0aCAqIE1hdGguZmxvb3IoY291bnQgLyBhcnIubGVuZ3RoKTtcbiAgYXJyLnB1c2guYXBwbHkoYXJyLCBhcnIuc3BsaWNlKDAsIGNvdW50KSk7XG4gIHJldHVybiBhcnI7XG59XG5cbi8qKlxuICogX2dldFN1cGVyU2FtcGxlZENvbnRvdXIgLSBHZW5lcmF0ZXMgYSBzdXBlciBzYW1wbGVkIGNvbnRvdXIgd2l0aCBhZGRpdGlvbmFsXG4gKiBub2RlcyBhZGRlZCBwZXIgc2VnbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGMgICAgICAgICAgICAgICAgIFRoZSBvcmlnaW5hbCBjb250b3VyLlxuICogQHBhcmFtICB7TnVtYmVyW119IG5vZGVzUGVyU2VnbWVudCBBbiBhcnJheSBvZiB0aGUgbnVtYmVyIG9mIG5vZGVzIHRvIGFkZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXIgbGluZSBzZWdtZW50LlxuICogQHJldHVybiB7b2JqZWN0fSAgICAgICAgICAgICAgICAgICBUaGUgc3VwZXIgc2FtcGxlZCBjb250b3VyLlxuICovXG5mdW5jdGlvbiBfZ2V0U3VwZXJTYW1wbGVkQ29udG91cihjLCBub2Rlc1BlclNlZ21lbnQpIHtcbiAgY29uc3QgY2kgPSB7XG4gICAgeDogW10sXG4gICAgeTogW10sXG4gICAgSTogW11cbiAgfTtcblxuICAvLyBMZW5ndGggLSAxLCBwcm9kdWNlcyAnb3BlbicgcG9seWdvbi5cbiAgZm9yIChsZXQgbiA9IDA7IG4gPCBjLngubGVuZ3RoIC0gMTsgbisrKSB7XG4gICAgLy8gQWRkIG9yaWdpbmFsIG5vZGUuXG4gICAgY2kueC5wdXNoKGMueFtuXSk7XG4gICAgY2kueS5wdXNoKGMueVtuXSk7XG4gICAgY2kuSS5wdXNoKHRydWUpO1xuXG4gICAgLy8gQWRkIGxpbmVyYWxseSBpbnRlcnBvbGF0ZWQgbm9kZXMuXG4gICAgY29uc3QgeFNwYWNpbmcgPSAoYy54W24gKyAxXSAtIGMueFtuXSkgLyAobm9kZXNQZXJTZWdtZW50W25dICsgMSk7XG4gICAgY29uc3QgeVNwYWNpbmcgPSAoYy55W24gKyAxXSAtIGMueVtuXSkgLyAobm9kZXNQZXJTZWdtZW50W25dICsgMSk7XG5cbiAgICAvLyBBZGQgb3RoZXIgbm9kZXNQZXJTZWdtZW50IC0gMSBvdGhlciBub2RlcyAoYXMgYWxyZWFkeSBwdXQgaW4gb3JpZ2luYWwgbm9kZSkuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlc1BlclNlZ21lbnRbbl0gLSAxOyBpKyspIHtcbiAgICAgIGNpLngucHVzaChjaS54W2NpLngubGVuZ3RoIC0gMV0gKyB4U3BhY2luZyk7XG4gICAgICBjaS55LnB1c2goY2kueVtjaS55Lmxlbmd0aCAtIDFdICsgeVNwYWNpbmcpO1xuICAgICAgY2kuSS5wdXNoKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2k7XG59XG5cbi8qKlxuICogX2dldE5vZGVzUGVyU2VnbWVudCAtIFJldHVybnMgYW4gYXJyYXkgb2YgdGhlIG51bWJlciBvZiBpbnRlcnBvbGF0ZWQgbm9kZXNcbiAqIHRvIGJlIGFkZGVkIGFsb25nIGVhY2ggbGluZSBzZWdtZW50IG9mIGEgcG9seWdvbi5cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJbXX0gcGVyaW1JbnRlcnAgTm9ybWFsaXNlZCBhcnJheSBvZiBvcmlnaW5hbCBhbmQgYWRkZWQgbm9kZXMuXG4gKiBAcGFyYW0gIHtib29sZWFuW119IHBlcmltSW5kICAgIFRoZSBpbmRpY2F0b3IgYXJyYXkgZGVzY3JpYmluZyB0aGUgbG9jYXRpb24gb2ZcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBvcmlnaW5hbCBjb250b3VyJ3Mgbm9kZXMuXG4gKiBAcmV0dXJuIHtOdW1iZXJbXX0gICAgICAgICBBbiBhcnJheSBjb250YWluZ2luZyB0aGUgbnVtYmVyIG9mIG5vZGVzIHRvIGJlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRlZCBwZXIgb3JpZ2luYWwgbGluZSBzZWdtZW50LlxuICovXG5mdW5jdGlvbiBfZ2V0Tm9kZXNQZXJTZWdtZW50KHBlcmltSW50ZXJwLCBwZXJpbUluZCkge1xuICBjb25zdCBpZHggPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBlcmltSW50ZXJwLmxlbmd0aDsgKytpKSBpZHhbaV0gPSBpO1xuICBpZHguc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBwZXJpbUludGVycFthXSA8IHBlcmltSW50ZXJwW2JdID8gLTEgOiBwZXJpbUludGVycFthXSA+IHBlcmltSW50ZXJwW2JdO1xuICB9KTtcblxuICBjb25zdCBwZXJpbUluZFNvcnRlZCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGVyaW1JbmQubGVuZ3RoOyBpKyspIHtcbiAgICBwZXJpbUluZFNvcnRlZC5wdXNoKHBlcmltSW5kW2lkeFtpXV0pO1xuICB9XG5cbiAgY29uc3QgaW5kaWNpZXNPZk9yaWdpbk5vZGVzID0gcGVyaW1JbmRTb3J0ZWQucmVkdWNlKGZ1bmN0aW9uIChhcnIsIGVsZW1lbnRWYWx1ZSwgaSkge1xuICAgIGlmIChlbGVtZW50VmFsdWUpIGFyci5wdXNoKGkpO1xuICAgIHJldHVybiBhcnI7XG4gIH0sIFtdKTtcblxuICBjb25zdCBub2Rlc1BlclNlZ21lbnQgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGljaWVzT2ZPcmlnaW5Ob2Rlcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBub2Rlc1BlclNlZ21lbnQucHVzaChpbmRpY2llc09mT3JpZ2luTm9kZXNbaSArIDFdIC0gaW5kaWNpZXNPZk9yaWdpbk5vZGVzW2ldKTtcbiAgfVxuXG4gIHJldHVybiBub2Rlc1BlclNlZ21lbnQ7XG59XG5cbi8qKlxuICogX2dldEluZGljYXRvckFycmF5IC0gUHJvZHVjZXMgYW4gYXJyYXkgb2YgdGhlIGxvY2F0aW9uIG9mIHRoZSBvcmlnaW5hbCBub2Rlc1xuICogaW4gYSBzdXBlciBzYW1wbGVkIGNvbnRvdXIuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSBjb250b3VyICAgVGhlIG9yaWdpbmFsIGNvbnRvdXIuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG51bU5vZGVzIFRoZSBudW1iZXIgb2Ygbm9kZXMgYWRkZWQuXG4gKiBAcmV0dXJuIHtib29sZWFuW119ICAgICAgICAgICBUaGUgaW5kaWNhdG9yIGFycmF5IG9mIG9yaWdpbmFsIG5vZGUgbG9jYXRpb25zLlxuICovXG5mdW5jdGlvbiBfZ2V0SW5kaWNhdG9yQXJyYXkoY29udG91ciwgbnVtTm9kZXMpIHtcbiAgY29uc3QgcGVyaW1JbmQgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bU5vZGVzIC0gMjsgaSsrKSB7XG4gICAgcGVyaW1JbmQucHVzaChmYWxzZSk7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRvdXIueC5sZW5ndGg7IGkrKykge1xuICAgIHBlcmltSW5kLnB1c2godHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gcGVyaW1JbmQ7XG59XG5cbi8qKlxuICogX2dldEludGVycG9sYXRlZFBlcmltIC0gQWRkcyBhZGRpdGlvbmFsIGludGVycG9sYXRlZCBub2RlcyB0byB0aGVcbiAqIG5vcm1hbGlzZWQgcGVyaW1ldGVyIGFycmF5LlxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gbnVtTm9kZXMgICAgVGhlIG51bWJlciBvZiBub2RlcyB0byBhZGQuXG4gKiBAcGFyYW0gIHtOdW1iZXJbXX0gY3VtUGVyaW1Ob3JtIFRoZSBjdW11bGF0aXZlIHBlcmltZXRlciBhcnJheS5cbiAqIEByZXR1cm4ge051bWJlcltdfSAgICAgICAgICAgICAgVGhlIGFycmF5IG9mIG5vZGVzLlxuICovXG5mdW5jdGlvbiBfZ2V0SW50ZXJwb2xhdGVkUGVyaW0obnVtTm9kZXMsIGN1bVBlcmltTm9ybSkge1xuICBjb25zdCBkaWZmID0gMSAvIChudW1Ob2RlcyAtIDEpO1xuICBjb25zdCBsaW5zcGFjZSA9IFtkaWZmXTtcblxuICAvLyBMZW5ndGggLSAyIGFzIHdlIGFyZSBkaXNjYXJkaW5nIDAgYW4gMSBmb3IgZWZmaWNpZW5jeSAobm8gbmVlZCB0byBjYWxjdWxhdGUgdGhlbSkuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtTm9kZXMgLSAyOyBpKyspIHtcbiAgICBsaW5zcGFjZS5wdXNoKGxpbnNwYWNlW2xpbnNwYWNlLmxlbmd0aCAtIDFdICsgZGlmZik7XG4gIH1cblxuICByZXR1cm4gbGluc3BhY2UuY29uY2F0KGN1bVBlcmltTm9ybSk7XG59XG5cbi8qKlxuICogX2dldEN1bXVsYXRpdmVQZXJpbWV0ZXIgLSBSZXR1cm5zIGFuIGFycmF5IG9mIHRoZSB0aGUgY3VtdWxhdGl2ZSBwZXJpbWV0ZXIgYXRcbiAqIGVhY2ggbm9kZSBvZiB0aGUgY29udG91ci5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGNvbnRvdXIgVGhlIGNvbnRvdXIuXG4gKiBAcmV0dXJuIHtOdW1iZXJbXX0gICAgICAgICBBbiBhcnJheSBvZiB0aGUgY3VtdWxhdGl2ZSBwZXJpbWV0ZXIgYXQgZWFjaCBub2RlLlxuICovXG5mdW5jdGlvbiBfZ2V0Q3VtdWxhdGl2ZVBlcmltZXRlcihjb250b3VyKSB7XG4gIGxldCBjdW11bGF0aXZlUGVyaW1ldGVyID0gWzBdO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgY29udG91ci54Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbGVuZ3RoT2ZTZWdtZW50ID0gTWF0aC5zcXJ0KChjb250b3VyLnhbaV0gLSBjb250b3VyLnhbaSAtIDFdKSAqKiAyICsgKGNvbnRvdXIueVtpXSAtIGNvbnRvdXIueVtpIC0gMV0pICoqIDIpO1xuXG4gICAgY3VtdWxhdGl2ZVBlcmltZXRlci5wdXNoKGN1bXVsYXRpdmVQZXJpbWV0ZXJbaSAtIDFdICsgbGVuZ3RoT2ZTZWdtZW50KTtcbiAgfVxuXG4gIHJldHVybiBjdW11bGF0aXZlUGVyaW1ldGVyO1xufVxuXG4vKipcbiAqIF9ub3JtYWxpc2VkQ3VtdWxhdGl2ZVBlcmltZXRlciAtIE5vcm1hbGlzZXMgdGhlIGN1bXVsYXRpdmUgcGVyaW1ldGVyIGFycmF5LlxuICpcbiAqIEBwYXJhbSAge3R5cGV9IGN1bVBlcmltIEFuIGFycmF5IG9mIHRoZSBjdW11bGF0aXZlIHBlcmltZXRlciBhdCBlYWNoIG9mIGFcbiAqIGNvbnRvdXIuXG4gKiBAcmV0dXJuIHt0eXBlfSAgICAgICAgICBUaGUgbm9ybWFsaXNlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gX25vcm1hbGlzZWRDdW11bGF0aXZlUGVyaW1ldGVyKGN1bVBlcmltKSB7XG4gIGNvbnN0IGN1bVBlcmltTm9ybSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY3VtUGVyaW0ubGVuZ3RoOyBpKyspIHtcbiAgICBjdW1QZXJpbU5vcm0ucHVzaChjdW1QZXJpbVtpXSAvIGN1bVBlcmltW2N1bVBlcmltLmxlbmd0aCAtIDFdKTtcbiAgfVxuXG4gIHJldHVybiBjdW1QZXJpbU5vcm07XG59XG5cbi8qKlxuICogX2dlbmVyYXRlQ2xvc2VkQ29udG91ciAtIEdlbmVyYXRlIGEgY2xvY2t3aXNlIGNvbnRvdXIgb2JqZWN0IGZyb20gdGhlIHBvaW50c1xuICogb2YgYSBjbG9ja3dpc2Ugb3IgYW50aS1jbG9ja3dpc2UgcG9seWdvbi5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3RbXX0gcG9pbnRzIFRoZSBwb2ludHMgdG8gZ2VuZXJhdGUgdGhlIGNvbnRvdXIgZnJvbS5cbiAqIEByZXR1cm4ge29iamVjdH0gICAgICAgICAgIFRoZSBnZW5lcmF0ZWQgY29udG91ciBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIF9nZW5lcmF0ZUNsb3NlZENvbnRvdXIocG9pbnRzKSB7XG4gIGNvbnN0IGMgPSB7XG4gICAgeDogW10sXG4gICAgeTogW11cbiAgfTtcblxuICAvLyBOT1RFOiBGb3IgeiBwb3NpdGlvbnMgd2Ugb25seSBuZWVkIHRoZSByZWxhdGl2ZSBkaWZmZXJlbmNlIGZvciBpbnRlcnBvbGF0aW9uLCB0aHVzIHVzZSBmcmFtZSBpbmRleCBhcyBaLlxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgIGMueFtpXSA9IHBvaW50c1tpXS54O1xuICAgIGMueVtpXSA9IHBvaW50c1tpXS55O1xuICB9XG5cbiAgLy8gUHVzaCBsYXN0IG5vZGUgdG8gY3JlYXRlIGNsb3NlZCBjb250b3VyLlxuICBjLngucHVzaChjLnhbMF0pO1xuICBjLnkucHVzaChjLnlbMF0pO1xuXG4gIF9yZXZlcnNlSWZBbnRpQ2xvY2t3aXNlKGMpO1xuXG4gIHJldHVybiBjO1xufVxuXG4vKipcbiAqIF9yZXZlcnNlSWZBbnRpQ2xvY2t3aXNlIC0gSWYgdGhlIGNvbnRvdXIncyBub2RlcyBydW4gYW50aS1jbG9ja3dpc2UsXG4gKiByZXZlcnNlIHRoZW0uXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSBjb250b3VyIFRoZSBjb250b3VyLlxuICogQHJldHVybiB7b2JqZWN0fSAgICAgICAgIFRoZSBjb250b3VyLCBjb3JyZWN0ZWQgdG8gYmUgY2xvY2t3aXNlIGlmIGFwcHJvcHJpYXRlLlxuICovXG5mdW5jdGlvbiBfcmV2ZXJzZUlmQW50aUNsb2Nrd2lzZShjb250b3VyKSB7XG4gIGNvbnN0IGxlbmd0aCA9IGNvbnRvdXIueC5sZW5ndGg7XG4gIGNvbnN0IGNvbnRvdXJYTWVhbiA9IGNvbnRvdXIueC5yZWR1Y2UoZ2V0U3VtUmVkdWNlcikgLyBsZW5ndGg7XG4gIGxldCBjaGVja1N1bSA9IDA7XG5cbiAgZm9yIChsZXQgayA9IDAsIGkgPSAxLCBqID0gMjsgayA8IGxlbmd0aDsgaysrKSB7XG4gICAgY2hlY2tTdW0gKz0gKGNvbnRvdXIueFtpXSAtIGNvbnRvdXJYTWVhbikgKiAoY29udG91ci55W2pdIC0gY29udG91ci55W2tdKTtcbiAgICBpKys7XG4gICAgaisrO1xuICAgIGlmIChpID49IGxlbmd0aCkgaSA9IDA7XG4gICAgaWYgKGogPj0gbGVuZ3RoKSBqID0gMDtcbiAgfVxuXG4gIGlmIChjaGVja1N1bSA+IDApIHtcbiAgICBjb250b3VyLngucmV2ZXJzZSgpO1xuICAgIGNvbnRvdXIueS5yZXZlcnNlKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBnZXRTdW1SZWR1Y2VyIC0gQSByZWR1Y2VyIGZ1bmN0aW9uIHRoYXQgY2FsY3VsYXRlcyB0aGUgc3VtIG9mIGFuIGFycmF5LlxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gdG90YWwgVGhlIHJ1bm5pbmcgdG90YWwuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG51bSAgIFRoZSBudW1lcmljYWwgdmFsdWUgb2YgdGhlIGFycmF5IGVsZW1lbnQuXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgIFRoZSB1cGRhdGVkIHJ1bm5pbmcgdG90YWwuXG4gKi9cbmZ1bmN0aW9uIGdldFN1bVJlZHVjZXIodG90YWwsIG51bSkge1xuICByZXR1cm4gdG90YWwgKyBudW07XG59XG4iLCJpbXBvcnQgR2VuZXJhbEFuYXRvbXlMaXN0IGZyb20gJy4uL0dlbmVyYWxBbmF0b215bGlzdC5qcyc7XG5cbmNvbnN0IGNhdGVnb3JpZXMgPSBHZW5lcmFsQW5hdG9teUxpc3QuU2VnbWVudGF0aW9uQ29kZXMuQ2F0ZWdvcnk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlTWV0YWRhdGEobGFiZWwsIGNhdGVnb3J5VUlEID0gJ1QtRDAwNTAnLCB0eXBlVUlEID0gJ1QtRDAwNTAnLCBtb2RpZmllclVJRCkge1xuICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3JpZXMuZmluZChjYXRlZ29yaWVzSSA9PiBjYXRlZ29yaWVzSS5Db2RlVmFsdWUgPT09IGNhdGVnb3J5VUlEKTtcbiAgY29uc3QgdHlwZSA9IGNhdGVnb3J5LlR5cGUuZmluZCh0eXBlc0kgPT4gdHlwZXNJLkNvZGVWYWx1ZSA9PT0gdHlwZVVJRCk7XG5cbiAgY29uc3QgbWV0YWRhdGEgPSB7XG4gICAgU2VnbWVudGVkUHJvcGVydHlDYXRlZ29yeUNvZGVTZXF1ZW5jZToge1xuICAgICAgQ29kZVZhbHVlOiBjYXRlZ29yeS5Db2RlVmFsdWUsXG4gICAgICBDb2RpbmdTY2hlbWVEZXNpZ25hdG9yOiBjYXRlZ29yeS5Db2RpbmdTY2hlbWVEZXNpZ25hdG9yLFxuICAgICAgQ29kZU1lYW5pbmc6IGNhdGVnb3J5LkNvZGVNZWFuaW5nXG4gICAgfSxcbiAgICBTZWdtZW50TGFiZWw6IGxhYmVsLFxuICAgIFNlZ21lbnRBbGdvcml0aG1UeXBlOiAnTUFOVUFMJyxcblxuICAgIFNlZ21lbnRlZFByb3BlcnR5VHlwZUNvZGVTZXF1ZW5jZToge1xuICAgICAgQ29kZVZhbHVlOiB0eXBlLkNvZGVWYWx1ZSxcbiAgICAgIENvZGluZ1NjaGVtZURlc2lnbmF0b3I6IHR5cGUuQ29kaW5nU2NoZW1lRGVzaWduYXRvcixcbiAgICAgIENvZGVNZWFuaW5nOiB0eXBlLkNvZGVNZWFuaW5nXG4gICAgfVxuICB9O1xuXG4gIGlmIChtb2RpZmllclVJRCkge1xuICAgIGNvbnN0IG1vZGZpZXIgPSB0eXBlLk1vZGlmaWVyLmZpbmQobW9kaWZpZXJJID0+IG1vZGlmaWVySS5Db2RlVmFsdWUgPT09IG1vZGlmaWVyVUlEKTtcblxuICAgIG1ldGFkYXRhLlNlZ21lbnRlZFByb3BlcnR5VHlwZUNvZGVTZXF1ZW5jZS5TZWdtZW50ZWRQcm9wZXJ0eVR5cGVNb2RpZmllckNvZGVTZXF1ZW5jZSA9IHtcbiAgICAgIENvZGVWYWx1ZTogbW9kZmllci5Db2RlVmFsdWUsXG4gICAgICBDb2RpbmdTY2hlbWVEZXNpZ25hdG9yOiBtb2RmaWVyLkNvZGluZ1NjaGVtZURlc2lnbmF0b3IsXG4gICAgICBDb2RlTWVhbmluZzogbW9kZmllci5Db2RlTWVhbmluZ1xuICAgIH07XG5cbiAgICBtZXRhZGF0YS5SZWNvbW1lbmRlZERpc3BsYXlDSUVMYWJWYWx1ZSA9IG1vZGZpZXIucmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgbWV0YWRhdGEuUmVjb21tZW5kZWREaXNwbGF5Q0lFTGFiVmFsdWUgPSB0eXBlLnJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG1ldGFkYXRhO1xufVxuIiwiLyoqXG4gKiBHZW5lcmF0ZXMgYSBVVUlEIGZvciB0aGUgZW5hYmxlZEVsZW1lbnQuXG4gKiBAZXhwb3J0IEBwdWJsaWMgQG1ldGhvZFxuICogQG5hbWUgZ2VuZXJhdGVVSURcbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSBVVUlELlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS84ODA5NDcyLzkyMDgzMjAgUHVibGljIERvbWFpbi9NSVRcbiAgLyogZXNsaW50IG5vLWJpdHdpc2U6IFtcImVycm9yXCIsIHsgXCJhbGxvd1wiOiBbXCImXCIsXCJ8XCJdIH1dICovXG4gIGxldCBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgaWYgKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHBlcmZvcm1hbmNlLm5vdyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGQgKz0gcGVyZm9ybWFuY2Uubm93KCk7IC8vIFVzZSBoaWdoLXByZWNpc2lvbiB0aW1lciBpZiBhdmFpbGFibGVcbiAgfVxuICByZXR1cm4gJ3gueC54LngueC54Lnh4eHgueHh4LngueC54eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICBjb25zdCByID0gKGQgKyBNYXRoLnJhbmRvbSgpICogMTYpICUgMTYgfCAwO1xuXG4gICAgZCA9IE1hdGguZmxvb3IoZCAvIDE2KTtcbiAgICByZXR1cm4gKGMgPT09ICd4JyA/IHIgOiAociAmIDB4MykgfCAweDgpLnRvU3RyaW5nKDE2KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgY29ybmVyc3RvbmUgZnJvbSAnY29ybmVyc3RvbmUtY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFNlcmllc0luc3RhbmNlVWlkRnJvbUVuYWJsZWRFbGVtZW50KGVuYWJsZWRFbGVtZW50KSB7XG4gIGlmICghZW5hYmxlZEVsZW1lbnQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBpbWFnZUlkID0gZW5hYmxlZEVsZW1lbnQuaW1hZ2UuaW1hZ2VJZDtcbiAgY29uc3QgZ2VuZXJhbFNlcmllc01vZHVsZSA9IGNvcm5lcnN0b25lLm1ldGFEYXRhLmdldCgnZ2VuZXJhbFNlcmllc01vZHVsZScsIGltYWdlSWQpO1xuXG4gIHJldHVybiBnZW5lcmFsU2VyaWVzTW9kdWxlLnNlcmllc0luc3RhbmNlVUlEO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Nvcm5lcnN0b25lX2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY29ybmVyc3RvbmVfbWF0aF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jb3JuZXJzdG9uZV90b29sc19fOyJdLCJzb3VyY2VSb290IjoiIn0=