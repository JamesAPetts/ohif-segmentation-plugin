(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cornerstone-core"), require("cornerstone-math"), require("cornerstone-tools"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define("ohif-segmentation-plugin", ["cornerstone-core", "cornerstone-math", "cornerstone-tools", "react"], factory);
	else if(typeof exports === 'object')
		exports["ohif-segmentation-plugin"] = factory(require("cornerstone-core"), require("cornerstone-math"), require("cornerstone-tools"), require("react"));
	else
		root["ohif-segmentation-plugin"] = factory(root["cornerstone-core"], root["cornerstone-math"], root["cornerstone-tools"], root["react"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_cornerstone_core__, __WEBPACK_EXTERNAL_MODULE_cornerstone_math__, __WEBPACK_EXTERNAL_MODULE_cornerstone_tools__, __WEBPACK_EXTERNAL_MODULE_react__) {
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var json = "{\n  \"SegmentationCategoryTypeContextName\": \"Segmentation category and type - 3D Slicer General Anatomy list\",\n  \"@schema\": \"https://raw.githubusercontent.com/qiicr/dcmqi/master/doc/schemas/segment-context-schema.json#\",\n  \"SegmentationCodes\": {\n    \"Category\": [\n      {\n        \"CodeMeaning\": \"Tissue\",\n        \"CodingSchemeDesignator\": \"SRT\",\n        \"SNOMEDCTConceptID\": \"85756007\",\n        \"cid\": \"7051\",\n        \"UMLSConceptUID\": \"C0040300\",\n        \"CodeValue\": \"T-D0050\",\n        \"contextGroupName\": \"Segmentation Property Categories\",\n        \"Type\": [\n          {\n            \"recommendedDisplayRGBValue\": [\n              128,\n              174,\n              128\n            ],\n            \"CodeMeaning\": \"Tissue\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"tissue\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0040300\",\n            \"CodeValue\": \"T-D0050\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"85756007\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              216,\n              101,\n              79\n            ],\n            \"CodeMeaning\": \"Artery\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"artery\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0555806\",\n            \"CodeValue\": \"T-41066\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"275989006\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              230,\n              220,\n              70\n            ],\n            \"CodeMeaning\": \"Body fat\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"fat\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0344335\",\n            \"CodeValue\": \"F-03D38\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"248300009\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              241,\n              214,\n              145\n            ],\n            \"CodeMeaning\": \"Bone\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"bone\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0262950\",\n            \"CodeValue\": \"T-D016E\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"272673000\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              183,\n              156,\n              220\n            ],\n            \"CodeMeaning\": \"Capillary\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"capillary\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0006901\",\n            \"CodeValue\": \"T-40050\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"20982000\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              111,\n              184,\n              210\n            ],\n            \"CodeMeaning\": \"Cartilage\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"cartilage\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0007301\",\n            \"CodeValue\": \"T-D021B\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"309312004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              111,\n              184,\n              210\n            ],\n            \"CodeMeaning\": \"Connective tissue\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"connective tissue\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0009780\",\n            \"CodeValue\": \"T-1A200\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"21793004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              183,\n              214,\n              211\n            ],\n            \"CodeMeaning\": \"Ligament\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"ligament\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0023685\",\n            \"CodeValue\": \"T-18010\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"52082005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              68,\n              172,\n              100\n            ],\n            \"CodeMeaning\": \"Lymph node\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"lymph node\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0024204\",\n            \"CodeValue\": \"T-C4000\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"59441001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              111,\n              197,\n              131\n            ],\n            \"CodeMeaning\": \"Lymphatic vessel\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"lymphatic vessel\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0229889\",\n            \"CodeValue\": \"T-C6010\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"83555006\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              178,\n              212,\n              242\n            ],\n            \"CodeMeaning\": \"Meniscus\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"meniscus\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0224498\",\n            \"CodeValue\": \"T-15009\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"74135004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              192,\n              104,\n              88\n            ],\n            \"CodeMeaning\": \"Muscle\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"muscle\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0026845\",\n            \"CodeValue\": \"T-13001\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"71616004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              244,\n              214,\n              49\n            ],\n            \"CodeMeaning\": \"Nerve\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"nerve\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C1268169\",\n            \"CodeValue\": \"T-D0598\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"119410002\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              221,\n              130,\n              101\n            ],\n            \"CodeMeaning\": \"Organ\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"organ\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C1285092\",\n            \"CodeValue\": \"T-1A310\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"2861001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              177,\n              122,\n              101\n            ],\n            \"CodeMeaning\": \"Skin\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"skin\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C1123023\",\n            \"CodeValue\": \"T-01000\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"39937001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              152,\n              189,\n              207\n            ],\n            \"CodeMeaning\": \"Tendon\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"tendon\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0039508\",\n            \"CodeValue\": \"T-17010\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"13024002\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              0,\n              151,\n              206\n            ],\n            \"CodeMeaning\": \"Vein\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"vein\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0447146\",\n            \"CodeValue\": \"T-4806E\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"181378009\"\n          }\n        ],\n        \"showAnatomy\": true\n      },\n      {\n        \"CodeMeaning\": \"Anatomical Structure\",\n        \"CodingSchemeDesignator\": \"SRT\",\n        \"SNOMEDCTConceptID\": \"123037004\",\n        \"cid\": \"7051\",\n        \"UMLSConceptUID\": \"C1268086\",\n        \"CodeValue\": \"T-D000A\",\n        \"contextGroupName\": \"Segmentation Property Categories\",\n        \"Type\": [\n          {\n            \"recommendedDisplayRGBValue\": [\n              177,\n              122,\n              101\n            ],\n            \"cid\": \"7154\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"abdomen\",\n            \"CodeValue\": \"T-D4000\",\n            \"UMLSConceptUID\": \"C0000726\",\n            \"CodeMeaning\": \"Abdomen\",\n            \"contextGroupName\": \"Abdominal Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"113345001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              186,\n              124,\n              161\n            ],\n            \"cid\": \"7154\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"abdominal cavity\",\n            \"CodeValue\": \"T-D4010\",\n            \"UMLSConceptUID\": \"C0230168\",\n            \"CodeMeaning\": \"Abdominal cavity\",\n            \"contextGroupName\": \"Abdominal Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"52731004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              171,\n              85,\n              68\n            ],\n            \"cid\": \"7154\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"muscles of abdominal wall\",\n            \"CodeValue\": \"T-14001\",\n            \"UMLSConceptUID\": \"C1279385\",\n            \"CodeMeaning\": \"Abdominal wall muscle\",\n            \"contextGroupName\": \"Abdominal Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"195879000\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              60,\n              143,\n              83\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"adenohypophysis\",\n            \"CodeValue\": \"T-B1100\",\n            \"UMLSConceptUID\": \"C0032008\",\n            \"CodeMeaning\": \"Adenohypophysis\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"62818001\"\n          },\n          {\n            \"contextGroupName\": \"Abdominal Organ Segmentation Types\",\n            \"cid\": \"7154\",\n            \"CodeMeaning\": \"Adrenal gland\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0001625\",\n            \"CodeValue\": \"T-B3000\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  249,\n                  186,\n                  150\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right adrenal gland\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  249,\n                  186,\n                  150\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left adrenal gland\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"23451007\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Amygdala\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0002708\",\n            \"CodeValue\": \"T-A3230\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  98,\n                  153,\n                  112\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right amygdaloid complex\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  98,\n                  153,\n                  112\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left amygdaloid complex\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"4958002\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              255,\n              224,\n              199\n            ],\n            \"cid\": \"4031\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"anus\",\n            \"CodeValue\": \"T-59900\",\n            \"UMLSConceptUID\": \"C0003461\",\n            \"CodeMeaning\": \"Anus\",\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"53505006\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              224,\n              97,\n              76\n            ],\n            \"cid\": \"7152\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"aorta\",\n            \"CodeValue\": \"T-42000\",\n            \"UMLSConceptUID\": \"C0003483\",\n            \"CodeMeaning\": \"Aorta\",\n            \"contextGroupName\": \"Cardiac Structure Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"15825003\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              218,\n              123,\n              97\n            ],\n            \"cid\": \"6113\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"aortic valve\",\n            \"CodeValue\": \"T-35400\",\n            \"UMLSConceptUID\": \"C0003501\",\n            \"CodeMeaning\": \"Aortic Valve\",\n            \"contextGroupName\": \"Mediastinum Anatomy Finding or Feature\",\n            \"SNOMEDCTConceptID\": \"34202007\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              255,\n              244,\n              209\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"arachnoid\",\n            \"CodeValue\": \"T-A1220\",\n            \"UMLSConceptUID\": \"C0003707\",\n            \"CodeMeaning\": \"Arachnoid\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"75042008\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Arcuate Fasciculus\",\n            \"CodingSchemeDesignator\": \"FMA\",\n            \"UMLSConceptUID\": \"C2329633\",\n            \"CodeValue\": \"276650\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  125,\n                  102,\n                  154\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right arcuate fasciculus\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  125,\n                  102,\n                  154\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left arcuate fasciculus\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              255,\n              226,\n              77\n            ],\n            \"cid\": \"7167\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"autonomic nerve\",\n            \"CodeValue\": \"T-A9605\",\n            \"UMLSConceptUID\": \"C0206250\",\n            \"CodeMeaning\": \"Autonomic nerve\",\n            \"contextGroupName\": \"Peripheral Nervous System Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"53520000\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              0,\n              145,\n              30\n            ],\n            \"cid\": \"7154\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"biliary tree\",\n            \"CodeValue\": \"T-60610\",\n            \"UMLSConceptUID\": \"C0005400\",\n            \"CodeMeaning\": \"Bile Duct\",\n            \"contextGroupName\": \"Abdominal Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"28273000\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              222,\n              154,\n              132\n            ],\n            \"cid\": \"7160\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"urinary bladder\",\n            \"CodeValue\": \"T-74000\",\n            \"UMLSConceptUID\": \"C0005682\",\n            \"CodeMeaning\": \"Bladder\",\n            \"contextGroupName\": \"Pelvic Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"89837001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              255,\n              239,\n              172\n            ],\n            \"cid\": \"7155\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"skeleton of thorax\",\n            \"CodeValue\": \"T-D0170\",\n            \"UMLSConceptUID\": \"C0448157\",\n            \"CodeMeaning\": \"Bone of thorax\",\n            \"contextGroupName\": \"Thoracic Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"272710004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              242,\n              206,\n              142\n            ],\n            \"cid\": \"4028\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"skeleton of neck\",\n            \"CodeValue\": \"T-D006D\",\n            \"UMLSConceptUID\": \"C0730130\",\n            \"CodeMeaning\": \"Bone structure of head and/or neck\",\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"312779009\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              250,\n              250,\n              225\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"brain\",\n            \"CodeValue\": \"T-A0100\",\n            \"UMLSConceptUID\": \"C0006104\",\n            \"CodeMeaning\": \"Brain\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"12738006\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              85,\n              188,\n              255\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"CSF space\",\n            \"CodeValue\": \"T-A0109\",\n            \"UMLSConceptUID\": \"C0459387\",\n            \"CodeMeaning\": \"Brain cerebrospinal fluid pathway\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"280371009\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              88,\n              106,\n              215\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"ventricles of brain\",\n            \"CodeValue\": \"T-A1600\",\n            \"UMLSConceptUID\": \"C0007799\",\n            \"CodeMeaning\": \"Brain ventricle\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"35764002\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Caudate nucleus\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0007461\",\n            \"CodeValue\": \"T-A3200\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  30,\n                  111,\n                  85\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right caudate nucleus\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  30,\n                  111,\n                  85\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left caudate nucleus\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"11000004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              244,\n              214,\n              49\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"central nervous system\",\n            \"CodeValue\": \"T-A0090\",\n            \"UMLSConceptUID\": \"C0927232\",\n            \"CodeMeaning\": \"Central nervous system\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"21483005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              194,\n              195,\n              164\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"cerebellar white matter\",\n            \"CodeValue\": \"T-A6080\",\n            \"UMLSConceptUID\": \"C0152381\",\n            \"CodeMeaning\": \"Cerebellar white matter\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"33060004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              88,\n              106,\n              215\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"cerebral aqueduct\",\n            \"CodeValue\": \"T-A1800\",\n            \"UMLSConceptUID\": \"C0007769\",\n            \"CodeMeaning\": \"Cerebral aqueduct\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"80447000\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Cerebral fornix\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0152334\",\n            \"CodeValue\": \"T-A2970\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  64,\n                  123,\n                  147\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right fornix\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  64,\n                  123,\n                  147\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left fornix\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"87463005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              128,\n              174,\n              128\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"cerebral cortex\",\n            \"CodeValue\": \"T-A2020\",\n            \"UMLSConceptUID\": \"C0007776\",\n            \"CodeMeaning\": \"Cerebral Grey Matter\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"40146001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              250,\n              250,\n              225\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"cerebral white matter\",\n            \"CodeValue\": \"T-A2030\",\n            \"UMLSConceptUID\": \"C0152295\",\n            \"CodeMeaning\": \"Cerebral White Matter\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"68523003\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              255,\n              255,\n              207\n            ],\n            \"cid\": \"4031\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"cervical vertebral column\",\n            \"CodeValue\": \"T-11501\",\n            \"UMLSConceptUID\": \"C0728985\",\n            \"CodeMeaning\": \"Cervical spine\",\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"122494005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              188,\n              95,\n              76\n            ],\n            \"cid\": \"7155\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"muscles of thoracic wall\",\n            \"CodeValue\": \"T-14122\",\n            \"UMLSConceptUID\": \"C1269825\",\n            \"CodeMeaning\": \"Chest wall muscle\",\n            \"contextGroupName\": \"Thoracic Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"372074006\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Cingulum\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0228272\",\n            \"CodeValue\": \"T-A2840\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  154,\n                  146,\n                  83\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right cingulum bundle\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  154,\n                  146,\n                  83\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left cingulum bundle\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"37035000\"\n          },\n          {\n            \"contextGroupName\": \"Thoracic Tissue Segmentation Types\",\n            \"cid\": \"7155\",\n            \"CodeMeaning\": \"Clavicle\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0008913\",\n            \"CodeValue\": \"T-12310\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  205,\n                  179,\n                  108\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right clavicle\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  205,\n                  179,\n                  108\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left clavicle\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"51299004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              204,\n              168,\n              143\n            ],\n            \"cid\": \"4031\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"colon\",\n            \"CodeValue\": \"T-59300\",\n            \"UMLSConceptUID\": \"C0009368\",\n            \"CodeMeaning\": \"Colon\",\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"71854001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              97,\n              113,\n              158\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"corpus callosum\",\n            \"CodeValue\": \"T-A2700\",\n            \"UMLSConceptUID\": \"C0010090\",\n            \"CodeMeaning\": \"Corpus callosum\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"88442005\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Corpus striatum\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0010097\",\n            \"CodeValue\": \"T-A3100\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  140,\n                  190\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right striatum\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  140,\n                  190\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left striatum\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"31428008\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              255,\n              234,\n              92\n            ],\n            \"cid\": \"7167\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"cranial nerves\",\n            \"CodeValue\": \"T-A8000\",\n            \"UMLSConceptUID\": \"C0010268\",\n            \"CodeMeaning\": \"Cranial nerve\",\n            \"contextGroupName\": \"Peripheral Nervous System Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"25238003\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Diencephalon\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0012144\",\n            \"CodeValue\": \"T-A0102\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  69,\n                  110,\n                  53\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"diencephalon\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"87563008\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              255,\n              253,\n              229\n            ],\n            \"cid\": \"4031\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"duodenum\",\n            \"CodeValue\": \"T-58200\",\n            \"UMLSConceptUID\": \"C0013303\",\n            \"CodeMeaning\": \"Duodenum\",\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"38848004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              255,\n              244,\n              209\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"dura mater\",\n            \"CodeValue\": \"T-A1120\",\n            \"UMLSConceptUID\": \"C0013313\",\n            \"CodeMeaning\": \"Dura mater\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"18545000\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              211,\n              171,\n              143\n            ],\n            \"cid\": \"7155\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"esophagus\",\n            \"CodeValue\": \"T-56000\",\n            \"UMLSConceptUID\": \"C0014876\",\n            \"CodeMeaning\": \"Esophagus\",\n            \"contextGroupName\": \"Thoracic Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"32849002\"\n          },\n          {\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"cid\": \"4028\",\n            \"CodeMeaning\": \"External ear\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0013453\",\n            \"CodeValue\": \"T-AB100\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  174,\n                  122,\n                  90\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right external ear\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  174,\n                  122,\n                  90\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left external ear\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"28347008\"\n          },\n          {\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"cid\": \"4028\",\n            \"CodeMeaning\": \"Eyeball\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0229242\",\n            \"CodeValue\": \"T-AA770\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  194,\n                  142,\n                  0\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right eyeball\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  194,\n                  142,\n                  0\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left eyeball\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"79652003\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              185,\n              135,\n              134\n            ],\n            \"cid\": \"7160\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"female external genitalia\",\n            \"CodeValue\": \"T-80010\",\n            \"UMLSConceptUID\": \"C0227747\",\n            \"CodeMeaning\": \"Female external genitalia\",\n            \"contextGroupName\": \"Pelvic Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"86969008\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              244,\n              170,\n              147\n            ],\n            \"cid\": \"7160\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"female internal genitalia\",\n            \"CodeValue\": \"T-80020\",\n            \"UMLSConceptUID\": \"C0227748\",\n            \"CodeMeaning\": \"Female internal genitalia\",\n            \"contextGroupName\": \"Pelvic Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"87759004\"\n          },\n          {\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"cid\": \"4031\",\n            \"CodeMeaning\": \"Foot\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0016504\",\n            \"CodeValue\": \"T-D9700\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right foot\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left foot\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"56459004\"\n          },\n          {\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"cid\": \"4031\",\n            \"CodeMeaning\": \"Forearm\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0016536\",\n            \"CodeValue\": \"T-D8500\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right forearm\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left forearm\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"14975008\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              88,\n              106,\n              215\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"fourth ventricle\",\n            \"CodeValue\": \"T-A1820\",\n            \"UMLSConceptUID\": \"C0149556\",\n            \"CodeMeaning\": \"Fourth ventricle\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"35918002\"\n          },\n          {\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"cid\": \"4028\",\n            \"CodeMeaning\": \"Frontal bone\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0016732\",\n            \"CodeValue\": \"T-11110\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  203,\n                  179,\n                  77\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right frontal bone\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  203,\n                  179,\n                  77\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left frontal bone\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"74872008\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Frontal lobe\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0016733\",\n            \"CodeValue\": \"T-A2200\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  83,\n                  146,\n                  164\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right frontal lobe\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  83,\n                  146,\n                  164\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left frontal lobe\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"83251001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              139,\n              150,\n              98\n            ],\n            \"cid\": \"4040\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"gallbladder\",\n            \"CodeValue\": \"T-63000\",\n            \"UMLSConceptUID\": \"C0016976\",\n            \"CodeMeaning\": \"Gallbladder\",\n            \"contextGroupName\": \"Endoscopy Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"28231008\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Globus pallidus\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0017651\",\n            \"CodeValue\": \"T-A3500\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  48,\n                  129,\n                  126\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right pallidum\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  48,\n                  129,\n                  126\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left pallidum\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"14738005\"\n          },\n          {\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"cid\": \"4031\",\n            \"CodeMeaning\": \"Hand\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0018563\",\n            \"CodeValue\": \"T-D8700\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right hand\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left hand\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"85562004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              177,\n              122,\n              101\n            ],\n            \"cid\": \"4031\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"head\",\n            \"CodeValue\": \"T-D1100\",\n            \"UMLSConceptUID\": \"C0018670\",\n            \"CodeMeaning\": \"Head\",\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"69536005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              206,\n              110,\n              84\n            ],\n            \"cid\": \"7152\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"heart\",\n            \"CodeValue\": \"T-32000\",\n            \"UMLSConceptUID\": \"C0018787\",\n            \"CodeMeaning\": \"Heart\",\n            \"contextGroupName\": \"Cardiac Structure Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"80891009\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              250,\n              210,\n              139\n            ],\n            \"cid\": \"4028\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"hyoid bone\",\n            \"CodeValue\": \"T-11190\",\n            \"UMLSConceptUID\": \"C0020417\",\n            \"CodeMeaning\": \"Hyoid bone\",\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"21387005\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Inferior cerebellar peduncle\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0152393\",\n            \"CodeValue\": \"T-A6640\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  186,\n                  135,\n                  135\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right inferior cerebellar peduncle\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  186,\n                  135,\n                  135\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left inferior cerebellar peduncle\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"67701001\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Inferior longitudinal fasciculus\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0228273\",\n            \"CodeValue\": \"T-A2850\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  159,\n                  116,\n                  163\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right inferior longitudinal fasciculus\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  159,\n                  116,\n                  163\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left inferior longitudinal fasciculus\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"55233005\"\n          },\n          {\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"cid\": \"4028\",\n            \"CodeMeaning\": \"Inner ear\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0022889\",\n            \"CodeValue\": \"T-AB700\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  229,\n                  147,\n                  118\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right inner ear\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  229,\n                  147,\n                  118\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left inner ear\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"22945000\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Insula\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0021640\",\n            \"CodeValue\": \"T-A2610\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  188,\n                  135,\n                  166\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right insular lobe\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  188,\n                  135,\n                  166\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left insular lobe\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"36169008\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              233,\n              138,\n              112\n            ],\n            \"cid\": \"6116\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"atrial septum\",\n            \"CodeValue\": \"T-32150\",\n            \"UMLSConceptUID\": \"C0225836\",\n            \"CodeMeaning\": \"Interatrial septum\",\n            \"contextGroupName\": \"Muscular Anatomy\",\n            \"SNOMEDCTConceptID\": \"58095006\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              195,\n              100,\n              73\n            ],\n            \"cid\": \"6116\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"ventricular septum\",\n            \"CodeValue\": \"T-32410\",\n            \"UMLSConceptUID\": \"C0225870\",\n            \"CodeMeaning\": \"Interventricular septum\",\n            \"contextGroupName\": \"Muscular Anatomy\",\n            \"SNOMEDCTConceptID\": \"589001\"\n          },\n          {\n            \"contextGroupName\": \"Abdominal Organ Segmentation Types\",\n            \"cid\": \"7154\",\n            \"CodeMeaning\": \"Kidney\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0022646\",\n            \"CodeValue\": \"T-71000\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  185,\n                  102,\n                  83\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right kidney\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  185,\n                  102,\n                  83\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left kidney\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"64033007\"\n          },\n          {\n            \"contextGroupName\": \"Endoscopy Anatomic Regions\",\n            \"cid\": \"4040\",\n            \"CodeMeaning\": \"Knee\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C1456798\",\n            \"CodeValue\": \"T-D9200\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right knee\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left knee\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"72696002\"\n          },\n          {\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"cid\": \"4028\",\n            \"CodeMeaning\": \"Lacrimal bone\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0222733\",\n            \"CodeValue\": \"T-1115A\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  255,\n                  250,\n                  160\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right lacrimal bone\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"6229007\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              150,\n              208,\n              243\n            ],\n            \"cid\": \"4040\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"larynx\",\n            \"CodeValue\": \"T-24100\",\n            \"UMLSConceptUID\": \"C0023078\",\n            \"CodeMeaning\": \"Larynx\",\n            \"contextGroupName\": \"Endoscopy Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"4596009\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Lateral corticospinal tract\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0152402\",\n            \"CodeValue\": \"T-A7093\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  201,\n                  160,\n                  133\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right corticospinal tract\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  201,\n                  160,\n                  133\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left corticospinal tract\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"461002\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Lateral ventricle\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0152279\",\n            \"CodeValue\": \"T-A1650\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  88,\n                  106,\n                  215\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right lateral ventricle\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  88,\n                  106,\n                  215\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left lateral ventricle\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"66720007\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              152,\n              55,\n              13\n            ],\n            \"cid\": \"7152\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"left ventricle of heart\",\n            \"CodeValue\": \"T-32600\",\n            \"UMLSConceptUID\": \"C0225897\",\n            \"CodeMeaning\": \"Left Ventricle\",\n            \"contextGroupName\": \"Cardiac Structure Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"87878005\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Limbic lobe\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0458337\",\n            \"CodeValue\": \"T-A0036\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  154,\n                  150,\n                  201\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right limbic lobe\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  154,\n                  150,\n                  201\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left limbic lobe\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"279215006\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              188,\n              91,\n              95\n            ],\n            \"cid\": \"4028\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"lips\",\n            \"CodeValue\": \"T-52000\",\n            \"UMLSConceptUID\": \"C0023759\",\n            \"CodeMeaning\": \"Lip\",\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"48477009\"\n          },\n          {\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"cid\": \"4031\",\n            \"CodeMeaning\": \"Lower leg\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C1140621\",\n            \"CodeValue\": \"T-D9400\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right leg\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left leg\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"30021000\"\n          },\n          {\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"cid\": \"4031\",\n            \"CodeMeaning\": \"Lower limb\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0023216\",\n            \"CodeValue\": \"T-D9000\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right lower limb\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left lower limb\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"61685007\"\n          },\n          {\n            \"contextGroupName\": \"Thoracic Tissue Segmentation Types\",\n            \"cid\": \"7155\",\n            \"CodeMeaning\": \"Lower lobe of lung\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0225758\",\n            \"CodeValue\": \"T-28830\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  224,\n                  186,\n                  162\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"inferior lobe of right lung\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  224,\n                  186,\n                  162\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"inferior lobe of left lung\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"90572001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              212,\n              188,\n              102\n            ],\n            \"cid\": \"4031\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"lumbar vertebral column\",\n            \"CodeValue\": \"T-11503\",\n            \"UMLSConceptUID\": \"C0024091\",\n            \"CodeMeaning\": \"Lumbar spine\",\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"122496007\"\n          },\n          {\n            \"contextGroupName\": \"Thoracic Tissue Segmentation Types\",\n            \"cid\": \"7155\",\n            \"CodeMeaning\": \"Lung\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0024109\",\n            \"CodeValue\": \"T-28000\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  197,\n                  165,\n                  145\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right lung\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  197,\n                  165,\n                  145\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left lung\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"39607008\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              185,\n              135,\n              134\n            ],\n            \"cid\": \"7160\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"male external genitalia\",\n            \"CodeValue\": \"T-90010\",\n            \"UMLSConceptUID\": \"C0227922\",\n            \"CodeMeaning\": \"Male external genitalia\",\n            \"contextGroupName\": \"Pelvic Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"90418005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              216,\n              146,\n              127\n            ],\n            \"cid\": \"7160\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"male internal genitalia\",\n            \"CodeValue\": \"T-90020\",\n            \"UMLSConceptUID\": \"C0227923\",\n            \"CodeMeaning\": \"Male internal genitalia\",\n            \"contextGroupName\": \"Pelvic Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"38242008\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              222,\n              198,\n              101\n            ],\n            \"cid\": \"4031\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"mandible\",\n            \"CodeValue\": \"T-11180\",\n            \"UMLSConceptUID\": \"C0024687\",\n            \"CodeMeaning\": \"Mandible\",\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"91609006\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Medial Lemniscus\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0228420\",\n            \"CodeValue\": \"T-A5271\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  174,\n                  140,\n                  103\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right medial lemniscus\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  174,\n                  140,\n                  103\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left medial lemniscus\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"30114003\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              255,\n              244,\n              209\n            ],\n            \"cid\": \"7155\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"mediastinum\",\n            \"CodeValue\": \"T-D3300\",\n            \"UMLSConceptUID\": \"C0025066\",\n            \"CodeMeaning\": \"Mediastinum\",\n            \"contextGroupName\": \"Thoracic Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"72410000\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              255,\n              244,\n              209\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"meninges\",\n            \"CodeValue\": \"T-A1110\",\n            \"UMLSConceptUID\": \"C0025285\",\n            \"CodeMeaning\": \"Meninges\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"1231004\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Middle cerebellar peduncle\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0152392\",\n            \"CodeValue\": \"T-A6630\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  148,\n                  120,\n                  72\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right middle cerebellar peduncle\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  148,\n                  120,\n                  72\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left middle cerebellar peduncle\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"33723005\"\n          },\n          {\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"cid\": \"4028\",\n            \"CodeMeaning\": \"Middle ear\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0013455\",\n            \"CodeValue\": \"T-AB300\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  201,\n                  112,\n                  73\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right middle ear\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  201,\n                  112,\n                  73\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left middle ear\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"25342003\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              202,\n              164,\n              140\n            ],\n            \"cid\": \"7155\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"middle lobe of right lung\",\n            \"CodeValue\": \"T-28300\",\n            \"UMLSConceptUID\": \"C0225757\",\n            \"CodeMeaning\": \"Middle lobe of right lung\",\n            \"contextGroupName\": \"Thoracic Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"72481006\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              159,\n              63,\n              27\n            ],\n            \"cid\": \"6113\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"mitral valve\",\n            \"CodeValue\": \"T-35300\",\n            \"UMLSConceptUID\": \"C0026264\",\n            \"CodeMeaning\": \"Mitral Valve\",\n            \"contextGroupName\": \"Mediastinum Anatomy Finding or Feature\",\n            \"SNOMEDCTConceptID\": \"91134007\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              201,\n              121,\n              77\n            ],\n            \"cid\": \"4028\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"muscles of head\",\n            \"CodeValue\": \"T-13100\",\n            \"UMLSConceptUID\": \"C0224097\",\n            \"CodeMeaning\": \"Muscle of head\",\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"22688005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              213,\n              124,\n              109\n            ],\n            \"cid\": \"4028\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"muscles of neck\",\n            \"CodeValue\": \"T-13300\",\n            \"UMLSConceptUID\": \"C0027532\",\n            \"CodeMeaning\": \"Muscle of neck\",\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"81727001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              177,\n              122,\n              101\n            ],\n            \"cid\": \"4031\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"neck\",\n            \"CodeValue\": \"T-D1600\",\n            \"UMLSConceptUID\": \"C0027530\",\n            \"CodeMeaning\": \"Neck\",\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"45048000\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              92,\n              162,\n              109\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"neurohypophysis\",\n            \"CodeValue\": \"T-B1200\",\n            \"UMLSConceptUID\": \"C0032009\",\n            \"CodeMeaning\": \"Neurohypophysis\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"37512009\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Occipital lobe\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0028785\",\n            \"CodeValue\": \"T-A2400\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  182,\n                  166,\n                  110\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right occipital lobe\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  182,\n                  166,\n                  110\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left occipital lobe\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"31065004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              234,\n              234,\n              194\n            ],\n            \"cid\": \"7154\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"omentum\",\n            \"CodeValue\": \"T-D4600\",\n            \"UMLSConceptUID\": \"C0028977\",\n            \"CodeMeaning\": \"Omentum\",\n            \"contextGroupName\": \"Abdominal Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"27398004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              99,\n              106,\n              24\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"optic chiasm\",\n            \"CodeValue\": \"T-A800B\",\n            \"UMLSConceptUID\": \"C0029126\",\n            \"CodeMeaning\": \"Optic chiasm\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"244453006\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Optic radiation\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0228277\",\n            \"CodeValue\": \"T-A2880\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  78,\n                  152,\n                  141\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right optic radiation\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  78,\n                  152,\n                  141\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left optic radiation\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"70105001\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Optic tract\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0152405\",\n            \"CodeValue\": \"T-A8060\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  156,\n                  171,\n                  108\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right optic tract\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  156,\n                  171,\n                  108\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left optic tract\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"53238003\"\n          },\n          {\n            \"contextGroupName\": \"Pelvic Organ Segmentation Types\",\n            \"cid\": \"7160\",\n            \"CodeMeaning\": \"Ovary\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0029939\",\n            \"CodeValue\": \"T-87000\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  213,\n                  141,\n                  113\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right ovary\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  213,\n                  141,\n                  113\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left ovary\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"15497006\"\n          },\n          {\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"cid\": \"4028\",\n            \"CodeMeaning\": \"Palatine bone\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0222734\",\n            \"CodeValue\": \"T-11160\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  242,\n                  217,\n                  123\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right palatine bone\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  242,\n                  217,\n                  123\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left palatine bone\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"51283005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              249,\n              180,\n              111\n            ],\n            \"cid\": \"4030\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"pancreas\",\n            \"CodeValue\": \"T-65000\",\n            \"UMLSConceptUID\": \"C0030274\",\n            \"CodeMeaning\": \"Pancreas\",\n            \"contextGroupName\": \"CT, MR and PET Anatomy Imaged\",\n            \"SNOMEDCTConceptID\": \"15776009\"\n          },\n          {\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"cid\": \"4028\",\n            \"CodeMeaning\": \"Parietal bone\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0030558\",\n            \"CodeValue\": \"T-11120\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  229,\n                  204,\n                  109\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right parietal bone\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  229,\n                  204,\n                  109\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left parietal bone\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"24924006\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Parietal lobe\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0030560\",\n            \"CodeValue\": \"T-A2300\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  141,\n                  93,\n                  137\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right parietal lobe\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  141,\n                  93,\n                  137\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left parietal lobe\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"16630005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              184,\n              122,\n              154\n            ],\n            \"cid\": \"7152\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"pericardial cavity\",\n            \"CodeValue\": \"T-39050\",\n            \"UMLSConceptUID\": \"C0225972\",\n            \"CodeMeaning\": \"Pericardial cavity\",\n            \"contextGroupName\": \"Cardiac Structure Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"25489000\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              255,\n              244,\n              209\n            ],\n            \"cid\": \"7152\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"pericardium\",\n            \"CodeValue\": \"T-39000\",\n            \"UMLSConceptUID\": \"C0031050\",\n            \"CodeMeaning\": \"Pericardium\",\n            \"contextGroupName\": \"Cardiac Structure Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"76848001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              224,\n              194,\n              0\n            ],\n            \"cid\": \"7167\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"peripheral nerve\",\n            \"CodeValue\": \"T-A0500\",\n            \"UMLSConceptUID\": \"C0031119\",\n            \"CodeMeaning\": \"Peripheral nerve\",\n            \"contextGroupName\": \"Peripheral Nervous System Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"84782009\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              216,\n              186,\n              0\n            ],\n            \"cid\": \"7167\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"peripheral nervous system\",\n            \"CodeValue\": \"T-A0140\",\n            \"UMLSConceptUID\": \"C0206417\",\n            \"CodeMeaning\": \"Peripheral nervous system\",\n            \"contextGroupName\": \"Peripheral Nervous System Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"3058005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              255,\n              255,\n              220\n            ],\n            \"cid\": \"7154\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"peritoneum\",\n            \"CodeValue\": \"T-D4400\",\n            \"UMLSConceptUID\": \"C0031153\",\n            \"CodeMeaning\": \"Peritioneum\",\n            \"contextGroupName\": \"Abdominal Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"15425007\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              204,\n              142,\n              178\n            ],\n            \"cid\": \"7154\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"peritoneal cavity\",\n            \"CodeValue\": \"T-D4425\",\n            \"UMLSConceptUID\": \"C1704247\",\n            \"CodeMeaning\": \"Peritoneal cavity\",\n            \"contextGroupName\": \"Abdominal Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"83670000\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              184,\n              105,\n              108\n            ],\n            \"cid\": \"4040\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"pharynx\",\n            \"CodeValue\": \"T-55000\",\n            \"UMLSConceptUID\": \"C0031354\",\n            \"CodeMeaning\": \"Pharynx\",\n            \"contextGroupName\": \"Endoscopy Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"54066008\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              255,\n              244,\n              209\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"pia mater\",\n            \"CodeValue\": \"T-A1280\",\n            \"UMLSConceptUID\": \"C0031869\",\n            \"CodeMeaning\": \"Pia mater\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"23180006\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              253,\n              135,\n              192\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"pineal gland\",\n            \"CodeValue\": \"T-B2000\",\n            \"UMLSConceptUID\": \"C0031939\",\n            \"CodeMeaning\": \"Pineal Gland\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"45793000\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              57,\n              157,\n              110\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"pituitary gland\",\n            \"CodeValue\": \"T-B1000\",\n            \"UMLSConceptUID\": \"C0032005\",\n            \"CodeMeaning\": \"Pituitary\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"56329008\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              126,\n              161,\n              197\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"posterior commissure\",\n            \"CodeValue\": \"T-A4904\",\n            \"UMLSConceptUID\": \"C0152327\",\n            \"CodeMeaning\": \"Posterior cerebral commissure\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"279336005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              230,\n              158,\n              140\n            ],\n            \"cid\": \"7160\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"prostate\",\n            \"CodeValue\": \"T-92000\",\n            \"UMLSConceptUID\": \"C0033572\",\n            \"CodeMeaning\": \"Prostate\",\n            \"contextGroupName\": \"Pelvic Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"41216001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              225,\n              130,\n              104\n            ],\n            \"cid\": \"6113\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"pulmonary valve\",\n            \"CodeValue\": \"T-35200\",\n            \"UMLSConceptUID\": \"C0034086\",\n            \"CodeMeaning\": \"Pulmonary valve\",\n            \"contextGroupName\": \"Mediastinum Anatomy Finding or Feature\",\n            \"SNOMEDCTConceptID\": \"39057004\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Putamen\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0034169\",\n            \"CodeValue\": \"T-A3400\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  210,\n                  157,\n                  166\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right putamen\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  210,\n                  157,\n                  166\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left putamen\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"89278009\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              180,\n              119,\n              153\n            ],\n            \"cid\": \"7154\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"retroperitoneal space\",\n            \"CodeValue\": \"T-D4900\",\n            \"UMLSConceptUID\": \"C0035359\",\n            \"CodeMeaning\": \"Retroperitoneal space\",\n            \"contextGroupName\": \"Abdominal Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"82849001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              181,\n              85,\n              57\n            ],\n            \"cid\": \"7152\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"right ventricle of heart\",\n            \"CodeValue\": \"T-32500\",\n            \"UMLSConceptUID\": \"C0225883\",\n            \"CodeMeaning\": \"Right Ventricle\",\n            \"contextGroupName\": \"Cardiac Structure Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"53085002\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              70,\n              163,\n              117\n            ],\n            \"cid\": \"4028\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"salivary glands\",\n            \"CodeValue\": \"T-61007\",\n            \"UMLSConceptUID\": \"C0036098\",\n            \"CodeMeaning\": \"Salivary gland\",\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"385294005\"\n          },\n          {\n            \"contextGroupName\": \"Pelvic Organ Segmentation Types\",\n            \"cid\": \"7160\",\n            \"CodeMeaning\": \"Seminal Vesicle\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0036628\",\n            \"CodeValue\": \"T-93000\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  245,\n                  172,\n                  147\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right seminal vesicle\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  245,\n                  172,\n                  147\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left seminal vesicle\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"64739004\"\n          },\n          {\n            \"contextGroupName\": \"Endoscopy Anatomic Regions\",\n            \"cid\": \"4040\",\n            \"CodeMeaning\": \"Shoulder\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0037004\",\n            \"CodeValue\": \"T-D2220\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right shoulder\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left shoulder\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"16982005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              177,\n              124,\n              92\n            ],\n            \"cid\": \"7154\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"skin of abdominal wall\",\n            \"CodeValue\": \"T-02480\",\n            \"UMLSConceptUID\": \"C0222166\",\n            \"CodeMeaning\": \"Skin of abdomen\",\n            \"contextGroupName\": \"Abdominal Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"75093004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              173,\n              121,\n              88\n            ],\n            \"cid\": \"7155\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"skin of thoracic wall\",\n            \"CodeValue\": \"T-02424\",\n            \"UMLSConceptUID\": \"C0222149\",\n            \"CodeMeaning\": \"Skin of chest\",\n            \"contextGroupName\": \"Thoracic Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"74160004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              241,\n              213,\n              144\n            ],\n            \"cid\": \"4031\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"skull\",\n            \"CodeValue\": \"T-11100\",\n            \"UMLSConceptUID\": \"C0037303\",\n            \"CodeMeaning\": \"Skull\",\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"89546000\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              205,\n              167,\n              142\n            ],\n            \"cid\": \"7154\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"small bowel\",\n            \"CodeValue\": \"T-58000\",\n            \"UMLSConceptUID\": \"C0021852\",\n            \"CodeMeaning\": \"Small Intestine\",\n            \"contextGroupName\": \"Abdominal Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"30315005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              182,\n              105,\n              107\n            ],\n            \"cid\": \"4028\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"soft palate\",\n            \"CodeValue\": \"T-51120\",\n            \"UMLSConceptUID\": \"C0030219\",\n            \"CodeMeaning\": \"Soft palate\",\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"49460000\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              244,\n              214,\n              49\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"spinal cord\",\n            \"CodeValue\": \"T-A7010\",\n            \"UMLSConceptUID\": \"C0037925\",\n            \"CodeMeaning\": \"Spinal cord\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"2748008\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              200,\n              200,\n              215\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"gray matter of spinal cord\",\n            \"CodeValue\": \"T-A7020\",\n            \"UMLSConceptUID\": \"C0475853\",\n            \"CodeMeaning\": \"Spinal cord gray matter\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"12958003\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              250,\n              250,\n              225\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"white matter of spinal cord\",\n            \"CodeValue\": \"T-A7070\",\n            \"UMLSConceptUID\": \"C0458457\",\n            \"CodeMeaning\": \"Spinal cord white matter\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"27088001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              244,\n              217,\n              154\n            ],\n            \"cid\": \"7155\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"sternum\",\n            \"CodeValue\": \"T-11210\",\n            \"UMLSConceptUID\": \"C0038293\",\n            \"CodeMeaning\": \"Sternum\",\n            \"contextGroupName\": \"Thoracic Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"56873002\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              216,\n              132,\n              105\n            ],\n            \"cid\": \"4031\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"stomach\",\n            \"CodeValue\": \"T-57000\",\n            \"UMLSConceptUID\": \"C0038351\",\n            \"CodeMeaning\": \"Stomach\",\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"69695003\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              88,\n              106,\n              215\n            ],\n            \"cid\": \"7153\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"subarachnoid space\",\n            \"CodeValue\": \"T-A1500\",\n            \"UMLSConceptUID\": \"C0038527\",\n            \"CodeMeaning\": \"Subarachnoid space\",\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"35951006\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Substantia nigra\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0038590\",\n            \"CodeValue\": \"T-A5160\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  0,\n                  108,\n                  112\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right substantia nigra\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  0,\n                  108,\n                  112\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left substantia nigra\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"70007007\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Superior longitudinal fasciculus\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0228270\",\n            \"CodeValue\": \"T-A2820\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  127,\n                  150,\n                  88\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right superior longitudinal fasciculus\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  127,\n                  150,\n                  88\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left superior longitudinal fasciculus\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"89202009\"\n          },\n          {\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"cid\": \"4028\",\n            \"CodeMeaning\": \"Temporal bone\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0039484\",\n            \"CodeValue\": \"T-11130\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  255,\n                  243,\n                  152\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right temporal bone\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  255,\n                  243,\n                  152\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left temporal bone\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"60911003\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Temporal lobe\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0039485\",\n            \"CodeValue\": \"T-A2500\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  162,\n                  115,\n                  105\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right temporal lobe\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  162,\n                  115,\n                  105\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left temporal lobe\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"78277001\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Thalamus\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0458271\",\n            \"CodeValue\": \"T-D0593\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  122,\n                  101,\n                  38\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right thalamus\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  122,\n                  101,\n                  38\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left thalamus\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"119406000\"\n          },\n          {\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"cid\": \"4031\",\n            \"CodeMeaning\": \"Thigh\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0039866\",\n            \"CodeValue\": \"T-D9100\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right thigh\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left thigh\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"68367000\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              226,\n              202,\n              134\n            ],\n            \"cid\": \"7155\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"thoracic vertebral column\",\n            \"CodeValue\": \"T-11502\",\n            \"UMLSConceptUID\": \"C0581269\",\n            \"CodeMeaning\": \"Thoracic spine\",\n            \"contextGroupName\": \"Thoracic Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"122495006\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              177,\n              122,\n              101\n            ],\n            \"cid\": \"7155\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"thorax\",\n            \"CodeValue\": \"T-D3000\",\n            \"UMLSConceptUID\": \"C0817096\",\n            \"CodeMeaning\": \"Thorax\",\n            \"contextGroupName\": \"Thoracic Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"51185008\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              47,\n              150,\n              103\n            ],\n            \"cid\": \"7155\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"thymus\",\n            \"CodeValue\": \"T-C8000\",\n            \"UMLSConceptUID\": \"C0040113\",\n            \"CodeMeaning\": \"Thymus\",\n            \"contextGroupName\": \"Thoracic Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"9875009\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              62,\n              162,\n              114\n            ],\n            \"cid\": \"6113\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"thyroid gland\",\n            \"CodeValue\": \"T-B6000\",\n            \"UMLSConceptUID\": \"C0040132\",\n            \"CodeMeaning\": \"Thyroid\",\n            \"contextGroupName\": \"Mediastinum Anatomy Finding or Feature\",\n            \"SNOMEDCTConceptID\": \"69748006\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              166,\n              84,\n              94\n            ],\n            \"cid\": \"4028\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"tongue\",\n            \"CodeValue\": \"T-53000\",\n            \"UMLSConceptUID\": \"C0040408\",\n            \"CodeMeaning\": \"Tongue\",\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"21974007\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              255,\n              250,\n              220\n            ],\n            \"cid\": \"4028\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"teeth\",\n            \"CodeValue\": \"T-54010\",\n            \"UMLSConceptUID\": \"C0040426\",\n            \"CodeMeaning\": \"Tooth\",\n            \"contextGroupName\": \"Craniofacial Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"38199008\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              182,\n              228,\n              255\n            ],\n            \"cid\": \"7155\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"trachea\",\n            \"CodeValue\": \"T-25000\",\n            \"UMLSConceptUID\": \"C0040578\",\n            \"CodeMeaning\": \"Trachea\",\n            \"contextGroupName\": \"Thoracic Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"44567001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              166,\n              70,\n              38\n            ],\n            \"cid\": \"6113\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"tricuspid valve\",\n            \"CodeValue\": \"T-35100\",\n            \"UMLSConceptUID\": \"C0040960\",\n            \"CodeMeaning\": \"Tricuspid Valve\",\n            \"contextGroupName\": \"Mediastinum Anatomy Finding or Feature\",\n            \"SNOMEDCTConceptID\": \"46030003\"\n          },\n          {\n            \"contextGroupName\": \"CNS Tissue Segmentation Types\",\n            \"cid\": \"7153\",\n            \"CodeMeaning\": \"Uncinate fasciculus\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0228271\",\n            \"CodeValue\": \"T-A2830\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  106,\n                  174,\n                  155\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right uncinate fasciculus\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  106,\n                  174,\n                  155\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left uncinate fasciculus\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"26230003\"\n          },\n          {\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"cid\": \"4031\",\n            \"CodeMeaning\": \"Upper arm\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0446516\",\n            \"CodeValue\": \"T-D8200\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right arm\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left arm\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"40983000\"\n          },\n          {\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"cid\": \"4031\",\n            \"CodeMeaning\": \"Upper limb\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0016555\",\n            \"CodeValue\": \"T-D8000\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right upper limb\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  177,\n                  122,\n                  101\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left upper limb\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"53120007\"\n          },\n          {\n            \"contextGroupName\": \"Thoracic Tissue Segmentation Types\",\n            \"cid\": \"7155\",\n            \"CodeMeaning\": \"Upper lobe of lung\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0225756\",\n            \"CodeValue\": \"T-28820\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  172,\n                  138,\n                  115\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"superior lobe of right lung\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  172,\n                  138,\n                  115\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"superior lobe of left lung\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"45653009\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              124,\n              186,\n              223\n            ],\n            \"cid\": \"4031\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"urethra\",\n            \"CodeValue\": \"T-75000\",\n            \"UMLSConceptUID\": \"C0041967\",\n            \"CodeMeaning\": \"Urethra\",\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"SNOMEDCTConceptID\": \"13648007\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              203,\n              136,\n              116\n            ],\n            \"cid\": \"7154\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"urinary system\",\n            \"CodeValue\": \"T-70001\",\n            \"UMLSConceptUID\": \"C1508753\",\n            \"CodeMeaning\": \"Urinary system\",\n            \"contextGroupName\": \"Abdominal Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"122489005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              255,\n              181,\n              158\n            ],\n            \"cid\": \"7160\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"uterus\",\n            \"CodeValue\": \"T-83000\",\n            \"UMLSConceptUID\": \"C0042149\",\n            \"CodeMeaning\": \"Uterus\",\n            \"contextGroupName\": \"Pelvic Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"35039007\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              193,\n              123,\n              103\n            ],\n            \"cid\": \"7160\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"vagina\",\n            \"CodeValue\": \"T-82000\",\n            \"UMLSConceptUID\": \"C0042232\",\n            \"CodeMeaning\": \"Vagina\",\n            \"contextGroupName\": \"Pelvic Organ Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"76784001\"\n          },\n          {\n            \"contextGroupName\": \"Pelvic Organ Segmentation Types\",\n            \"cid\": \"7160\",\n            \"CodeMeaning\": \"Vas deferens\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0042360\",\n            \"CodeValue\": \"T-96000\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  241,\n                  172,\n                  151\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right deferent duct\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              },\n              {\n                \"recommendedDisplayRGBValue\": [\n                  241,\n                  172,\n                  151\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"left deferent duct\",\n                \"CodeValue\": \"G-A101\",\n                \"UMLSConceptUID\": \"C0205091\",\n                \"CodeMeaning\": \"Left\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"7771000\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"57671007\"\n          },\n          {\n            \"contextGroupName\": \"Common Anatomic Regions\",\n            \"cid\": \"4031\",\n            \"CodeMeaning\": \"Zygoma\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"UMLSConceptUID\": \"C0043539\",\n            \"CodeValue\": \"T-11166\",\n            \"Modifier\": [\n              {\n                \"recommendedDisplayRGBValue\": [\n                  255,\n                  255,\n                  167\n                ],\n                \"cid\": \"244\",\n                \"CodingSchemeDesignator\": \"SRT\",\n                \"3dSlicerLabel\": \"right zygomatic bone\",\n                \"CodeValue\": \"G-A100\",\n                \"UMLSConceptUID\": \"C0205090\",\n                \"CodeMeaning\": \"Right\",\n                \"contextGroupName\": \"Laterality\",\n                \"SNOMEDCTConceptID\": \"24028007\"\n              }\n            ],\n            \"SNOMEDCTConceptID\": \"13881006\"\n          }\n        ],\n        \"showAnatomy\": false\n      },\n      {\n        \"CodeMeaning\": \"Morphologically Altered Structure\",\n        \"CodingSchemeDesignator\": \"SRT\",\n        \"SNOMEDCTConceptID\": \"49755003\",\n        \"cid\": \"7051\",\n        \"UMLSConceptUID\": \"C0221198\",\n        \"CodeValue\": \"M-01000\",\n        \"contextGroupName\": \"Segmentation Property Categories\",\n        \"Type\": [\n          {\n            \"recommendedDisplayRGBValue\": [\n              145,\n              60,\n              66\n            ],\n            \"CodeMeaning\": \"Blood clot\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"clot\",\n            \"cid\": \"7159\",\n            \"UMLSConceptUID\": \"C0302148\",\n            \"CodeValue\": \"M-35000\",\n            \"contextGroupName\": \"Lesion Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"75753009\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              205,\n              205,\n              100\n            ],\n            \"CodeMeaning\": \"Cyst\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"cyst\",\n            \"cid\": \"7159\",\n            \"UMLSConceptUID\": \"C0010709\",\n            \"CodeValue\": \"M-3340A\",\n            \"contextGroupName\": \"Lesion Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"367643001\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              140,\n              224,\n              228\n            ],\n            \"CodeMeaning\": \"Edema\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"edema\",\n            \"cid\": \"7159\",\n            \"UMLSConceptUID\": \"C0013604\",\n            \"CodeValue\": \"M-36300\",\n            \"contextGroupName\": \"Lesion Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"79654002\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              150,\n              98,\n              83\n            ],\n            \"CodeMeaning\": \"Embolus\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"embolism\",\n            \"cid\": \"7159\",\n            \"UMLSConceptUID\": \"C1704212\",\n            \"CodeValue\": \"M-35300\",\n            \"contextGroupName\": \"Lesion Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"55584005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              188,\n              65,\n              28\n            ],\n            \"CodeMeaning\": \"Hemorrhage\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"bleeding\",\n            \"cid\": \"7159\",\n            \"UMLSConceptUID\": \"C0019080\",\n            \"CodeValue\": \"M-37000\",\n            \"contextGroupName\": \"Lesion Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"50960005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              144,\n              238,\n              144\n            ],\n            \"CodeMeaning\": \"Mass\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"mass\",\n            \"cid\": \"7159\",\n            \"UMLSConceptUID\": \"C0577559\",\n            \"CodeValue\": \"M-03000\",\n            \"contextGroupName\": \"Lesion Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"4147007\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              216,\n              191,\n              216\n            ],\n            \"CodeMeaning\": \"Necrosis\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"necrosis\",\n            \"cid\": \"7159\",\n            \"UMLSConceptUID\": \"C0027540\",\n            \"CodeValue\": \"M-54000\",\n            \"contextGroupName\": \"Lesion Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"6574001\"\n          }\n        ],\n        \"showAnatomy\": true\n      },\n      {\n        \"CodeMeaning\": \"Body Substance\",\n        \"CodingSchemeDesignator\": \"SRT\",\n        \"SNOMEDCTConceptID\": \"91720002\",\n        \"cid\": \"\",\n        \"UMLSConceptUID\": \"C0504082\",\n        \"CodeValue\": \"T-D0080\",\n        \"contextGroupName\": \"\",\n        \"Type\": [\n          {\n            \"recommendedDisplayRGBValue\": [\n              0,\n              145,\n              30\n            ],\n            \"CodeMeaning\": \"Bile\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"bile\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0005388\",\n            \"CodeValue\": \"T-60650\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"70150004\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              170,\n              250,\n              250\n            ],\n            \"CodeMeaning\": \"Body fluid\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"fluid\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0005889\",\n            \"CodeValue\": \"T-D0070\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"32457005\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              78,\n              63,\n              0\n            ],\n            \"CodeMeaning\": \"Feces\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"feces\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0015733\",\n            \"CodeValue\": \"T-59666\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"39477002\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              218,\n              255,\n              255\n            ],\n            \"CodeMeaning\": \"Gas\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"gas\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0017110\",\n            \"CodeValue\": \"C-10080\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"74947009\"\n          },\n          {\n            \"recommendedDisplayRGBValue\": [\n              214,\n              230,\n              130\n            ],\n            \"CodeMeaning\": \"Urine\",\n            \"CodingSchemeDesignator\": \"SRT\",\n            \"3dSlicerLabel\": \"urine\",\n            \"cid\": \"7166\",\n            \"UMLSConceptUID\": \"C0042036\",\n            \"CodeValue\": \"T-70060\",\n            \"contextGroupName\": \"Common Tissue Segmentation Types\",\n            \"SNOMEDCTConceptID\": \"78014005\"\n          }\n        ],\n        \"showAnatomy\": false\n      }\n    ]\n  }\n}";
var parsedJson = JSON.parse(json);
/* harmony default export */ __webpack_exports__["default"] = (parsedJson);

/***/ }),

/***/ "./src/components/Dummy.js":
/*!*********************************!*\
  !*** ./src/components/Dummy.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dummy; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * @class SegmentationMenuListBody - Renders a list of SegmentationMenuListItems,
 * displaying the metadata of segments.
 */

var Dummy =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dummy, _React$Component);

  function Dummy() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Dummy);

    return _possibleConstructorReturn(this, _getPrototypeOf(Dummy).call(this, props));
  }

  _createClass(Dummy, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Hello Panel"));
    }
  }]);

  return Dummy;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/components/common/MenuIOButtons.js":
/*!************************************************!*\
  !*** ./src/components/common/MenuIOButtons.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuIOButtons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // import './menuIOButtons.styl';

/**
 * @class MenuIOButtons - Renders Import and/or Export buttons if
 * this.props.ImportCallbackOrComponent and/or
 * this.props.ExportCallbackOrComponent are defined.
 */

var MenuIOButtons =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MenuIOButtons, _React$Component);

  function MenuIOButtons() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MenuIOButtons);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuIOButtons).call(this, props));
  }

  _createClass(MenuIOButtons, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          ImportCallbackOrComponent = _this$props.ImportCallbackOrComponent,
          ExportCallbackOrComponent = _this$props.ExportCallbackOrComponent,
          onImportButtonClick = _this$props.onImportButtonClick,
          onExportButtonClick = _this$props.onExportButtonClick;

      if (!ImportCallbackOrComponent && !ExportCallbackOrComponent) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, ImportCallbackOrComponent && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-sm btn-primary",
        onClick: onImportButtonClick
      }, "Import"), ExportCallbackOrComponent && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-sm btn-primary",
        onClick: onExportButtonClick
      }, "Export"));
    }
  }]);

  return MenuIOButtons;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/components/common/helpers/onExportButtonClick.js":
/*!**************************************************************!*\
  !*** ./src/components/common/helpers/onExportButtonClick.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return onExportButtonClick; });
/**
 * onExportButtonClick - Helper function for annotation menu components.
 * Calls ExportCallbackOrComponent if it is a funciton, or sets
 * this.state.exporting to true if it is a component.
 *
 * @returns {null}
 */
function onExportButtonClick() {
  var ExportCallbackOrComponent = this.props.ExportCallbackOrComponent;

  if (ExportCallbackOrComponent.prototype.isReactComponent) {
    this.setState({
      exporting: true
    });
  } else {
    ExportCallbackOrComponent();
  }
}

/***/ }),

/***/ "./src/components/common/helpers/onIOCancel.js":
/*!*****************************************************!*\
  !*** ./src/components/common/helpers/onIOCancel.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return onIOCancel; });
/**
 * onIOCancel - Helper function for annotation menu components. Sets
 * this.state.importing and this.state.exporting to false.
 *
 * @returns {null}
 */
function onIOCancel() {
  this.setState({
    importing: false,
    exporting: false
  });
}

/***/ }),

/***/ "./src/components/common/helpers/onImportButtonClick.js":
/*!**************************************************************!*\
  !*** ./src/components/common/helpers/onImportButtonClick.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return onImportButtonClick; });
/**
 * onImportButtonClick - Helper function for annotation menu components.
 * Calls ImportCallbackOrComponent if it is a funciton, or sets
 * this.state.importing to true if it is a component.
 *
 * @returns {null}
 */
function onImportButtonClick() {
  console.log(this);
  var ImportCallbackOrComponent = this.props.ImportCallbackOrComponent;

  if (ImportCallbackOrComponent.prototype.isReactComponent) {
    this.setState({
      importing: true
    });
  } else {
    ImportCallbackOrComponent();
  }
}

/***/ }),

/***/ "./src/components/segmentationMenu/BrushSettings.js":
/*!**********************************************************!*\
  !*** ./src/components/segmentationMenu/BrushSettings.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BrushSettings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cornerstone_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cornerstone-tools */ "cornerstone-tools");
/* harmony import */ var cornerstone_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cornerstone_tools__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var brushModule = cornerstone_tools__WEBPACK_IMPORTED_MODULE_1___default.a.store.modules.brush;
var brushState = brushModule.state; // import './segmentationMenu.styl';

var minGateSeperation = 10;
/**
 * @class BrushSettings - A component that allows the user to change
 * configuration of the Brush tools.
 */

var BrushSettings =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BrushSettings, _React$Component);

  function BrushSettings() {
    var _this;

    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, BrushSettings);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BrushSettings).call(this, props));
    var customGateRange = brushModule.getters.customGateRange();
    _this.state = {
      holeFill: brushState.holeFill,
      strayRemove: brushState.strayRemove,
      activeGate: brushState.activeGate,
      customGateRangeMin: customGateRange[0],
      customGateRangeMax: customGateRange[1]
    };
    _this.onGateChange = _this.onGateChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onCustomGateMinChange = _this.onCustomGateMinChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onCustomGateMaxChange = _this.onCustomGateMaxChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onHoleFillChange = _this.onHoleFillChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onStrayRemoveChange = _this.onStrayRemoveChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }
  /**
   * onGateChange - Callback that changes the active gate of the Smart CT Brush.
   *
   * @param  {type} evt description
   * @returns {type}     description
   */


  _createClass(BrushSettings, [{
    key: "onGateChange",
    value: function onGateChange(evt) {
      var val = evt.target.value;
      this.setState({
        activeGate: val
      });
      brushState.activeGate = val;
    }
    /**
     * onCustomGateMinChange - Changes the minimum value of a
     * custom Smart CT Gate.
     *
     * @param  {object} evt The event.
     * @returns {null}
     */

  }, {
    key: "onCustomGateMinChange",
    value: function onCustomGateMinChange(evt) {
      var val = Number(evt.target.value);
      var customRangeMax = this.state.customGateRangeMax;

      if (val > customRangeMax - minGateSeperation) {
        val = customRangeMax - minGateSeperation;
        evt.target.value = val;
      }

      this.setState({
        customGateRangeMin: val
      });
      brushModule.setters.customGateRange(val, null);
    }
    /**
     * onCustomGateMaxChange - Changes the maximum value of a
     * custom Smart CT Gate.
     *
     * @param  {object} evt The event.
     * @returns {null}
     */

  }, {
    key: "onCustomGateMaxChange",
    value: function onCustomGateMaxChange(evt) {
      var val = Number(evt.target.value);
      var customRangeMin = this.state.customGateRangeMin;

      if (val < customRangeMin + minGateSeperation) {
        val = customRangeMin + minGateSeperation;
        evt.target.value = val;
      }

      this.setState({
        customGateRangeMax: val
      });
      brushModule.setters.customGateRange(null, val);
    }
    /**
     * onHoleFillChange - Changes the value of the hole fill parameter for the
     * Smart CT and Auto brushes.
     *
     * @param  {object} evt The event.
     * @returns {null}
     */

  }, {
    key: "onHoleFillChange",
    value: function onHoleFillChange(evt) {
      var val = Number(evt.target.value);
      this.setState({
        holeFill: val
      });
      brushState.holeFill = val;
    }
    /**
     * onStrayRemoveChange - Changes the balue of the stray remove parameter for
     * the Smart CT and Auto brushes.
     *
     * @param  {object} evt The event.
     * @returns {null}
     */

  }, {
    key: "onStrayRemoveChange",
    value: function onStrayRemoveChange(evt) {
      var val = Number(evt.target.value);
      this.setState({
        strayRemove: val
      });
      brushState.strayRemove = val;
    }
  }, {
    key: "render",
    value: function render() {
      var holeFillRange = brushState.holeFillRange;
      var strayRemoveRange = brushState.strayRemoveRange;
      var _this$state = this.state,
          holeFill = _this$state.holeFill,
          strayRemove = _this$state.strayRemove,
          activeGate = _this$state.activeGate;
      var gates = brushState.gates;
      var holeFillLabel = holeFill === 0 ? "Don't fill holes." : "Fill holes <".concat(holeFill, "% area of primary region.");
      var strayRemoveLabel = strayRemove === 0 ? 'Paint all non-primary regions.' : "Don't paint regions <".concat(strayRemove, "% area of primary region.");
      var customGates = null;

      if (activeGate === 'custom') {
        var customRange = brushModule.getters.customGateRange();
        customGates = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "brush-settings-horizontal-box"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          htmlFor: "customGateMin"
        }, "Min:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          className: "form-themed form-control",
          type: "range",
          id: "start",
          name: "customGateMin",
          min: -1024,
          max: 3072,
          defaultValue: customRange[0],
          onChange: this.onCustomGateMinChange
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "brush-settings-horizontal-box"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          htmlFor: "customGateMax"
        }, "Max:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          className: "form-themed form-control",
          type: "range",
          id: "start",
          name: "customGateMax",
          min: -1024,
          max: 3072,
          defaultValue: customRange[1],
          onChange: this.onCustomGateMaxChange
        })));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "segmentation-menu-footer"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, " Smart CT Gate Selection"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        className: "form-themed form-control",
        onChange: this.onGateChange,
        value: activeGate
      }, gates.map(function (gate) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: gate.name,
          value: gate.name
        }, "".concat(gate.name, " [").concat(gate.range[0], ", ").concat(gate.range[1], "]"));
      })), customGates, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, " Smart/Auto Gate Settings "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "holeFill"
      }, holeFillLabel), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "form-themed form-control",
        type: "range",
        id: "start",
        name: "holeFill",
        min: holeFillRange[0],
        defaultValue: holeFill,
        max: holeFillRange[1],
        onChange: this.onHoleFillChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "strayRemove"
      }, strayRemoveLabel), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "form-themed form-control",
        type: "range",
        id: "start",
        name: "strayRemove",
        min: strayRemoveRange[0],
        defaultValue: strayRemove,
        max: strayRemoveRange[1],
        onChange: this.onStrayRemoveChange
      }));
    }
  }]);

  return BrushSettings;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/components/segmentationMenu/SegmentationMenu.js":
/*!*************************************************************!*\
  !*** ./src/components/segmentationMenu/SegmentationMenu.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SegmentationMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_MenuIOButtons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/MenuIOButtons.js */ "./src/components/common/MenuIOButtons.js");
/* harmony import */ var _SegmentationMenuDeleteConfirmation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SegmentationMenuDeleteConfirmation.js */ "./src/components/segmentationMenu/SegmentationMenuDeleteConfirmation.js");
/* harmony import */ var _SegmentationMenuListBody_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SegmentationMenuListBody.js */ "./src/components/segmentationMenu/SegmentationMenuListBody.js");
/* harmony import */ var _SegmentationMenuListHeader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SegmentationMenuListHeader.js */ "./src/components/segmentationMenu/SegmentationMenuListHeader.js");
/* harmony import */ var _BrushSettings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BrushSettings.js */ "./src/components/segmentationMenu/BrushSettings.js");
/* harmony import */ var cornerstone_tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cornerstone-tools */ "cornerstone-tools");
/* harmony import */ var cornerstone_tools__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cornerstone_tools__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _util_brushMetadataIO_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/brushMetadataIO.js */ "./src/util/brushMetadataIO.js");
/* harmony import */ var _common_helpers_onIOCancel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/helpers/onIOCancel.js */ "./src/components/common/helpers/onIOCancel.js");
/* harmony import */ var _common_helpers_onImportButtonClick_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/helpers/onImportButtonClick.js */ "./src/components/common/helpers/onImportButtonClick.js");
/* harmony import */ var _common_helpers_onExportButtonClick_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/helpers/onExportButtonClick.js */ "./src/components/common/helpers/onExportButtonClick.js");
/* harmony import */ var _util_getActiveViewportEnabledElement_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../util/getActiveViewportEnabledElement.js */ "./src/util/getActiveViewportEnabledElement.js");
/* harmony import */ var _util_getSeriesInstanceUidFromEnabledElement_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../util/getSeriesInstanceUidFromEnabledElement.js */ "./src/util/getSeriesInstanceUidFromEnabledElement.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }











 // import './segmentationMenu.styl';



var brushModule = cornerstone_tools__WEBPACK_IMPORTED_MODULE_6___default.a.store.modules.brush;
/**
 * @class SegmentationMenu - Renders a menu for importing, exporting, creating
 * and renaming Segments. As well as setting configuration settings for
 * the Brush tools.
 */

var SegmentationMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SegmentationMenu, _React$Component);

  function SegmentationMenu() {
    var _this;

    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, SegmentationMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SegmentationMenu).call(this, props));
    _this.getSegmentList = _this.getSegmentList.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    var enabledElement = Object(_util_getActiveViewportEnabledElement_js__WEBPACK_IMPORTED_MODULE_11__["default"])(props.viewports, props.activeIndex);
    var seriesInstanceUid = Object(_util_getSeriesInstanceUidFromEnabledElement_js__WEBPACK_IMPORTED_MODULE_12__["default"])(enabledElement);
    var segments = [];
    var activeSegmentIndex = 1;

    var importMetadata = _this.constructor._importMetadata(seriesInstanceUid);

    if (enabledElement) {
      var segmentList = _this.getSegmentList(enabledElement, seriesInstanceUid);

      segments = segmentList.segments;
      activeSegmentIndex = segmentList.segments;
    }

    _this.state = {
      importMetadata: importMetadata,
      segments: segments,
      seriesInstanceUid: seriesInstanceUid,
      enabledElement: enabledElement,
      deleteConfirmationOpen: false,
      segmentToDelete: 1,
      activeSegmentIndex: activeSegmentIndex,
      importing: false,
      exporting: false
    };
    _this.onSegmentChange = _this.onSegmentChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onEditClick = _this.onEditClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.confirmDeleteOnDeleteClick = _this.confirmDeleteOnDeleteClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onDeleteCancelClick = _this.onDeleteCancelClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onDeleteConfirmClick = _this.onDeleteConfirmClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onImportButtonClick = _common_helpers_onImportButtonClick_js__WEBPACK_IMPORTED_MODULE_9__["default"].bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onExportButtonClick = _common_helpers_onExportButtonClick_js__WEBPACK_IMPORTED_MODULE_10__["default"].bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onIOComplete = _this.onIOComplete.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onIOCancel = _common_helpers_onIOCancel_js__WEBPACK_IMPORTED_MODULE_8__["default"].bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }
  /**
   * getSegmentList - Grabs the segments from the brushStore and
   * populates state.
   *
   * @returns {null}
   */


  _createClass(SegmentationMenu, [{
    key: "getSegmentList",
    value: function getSegmentList(enabledElement, seriesInstanceUid) {
      enabledElement = enabledElement || this.state.enabledElement;
      seriesInstanceUid = seriesInstanceUid || this.state.seriesInstanceUid;

      if (!enabledElement || !seriesInstanceUid) {
        return [];
      }

      var segments = this.constructor._segments(enabledElement);

      var activeSegmentIndex = brushModule.getters.activeSegmentIndex(enabledElement);
      return {
        segments: segments,
        activeSegmentIndex: activeSegmentIndex
      };
    }
    /**
     * onIOComplete - A callback executed on succesful completion of an
     * IO opperation. Recalculates the Segmentation state.
     *
     * @returns {type}  description
     */

  }, {
    key: "onIOComplete",
    value: function onIOComplete() {
      var _this$state$seriesIns = this.state.seriesInstanceUid,
          seriesInstanceUid = _this$state$seriesIns.seriesInstanceUid,
          enabledElement = _this$state$seriesIns.enabledElement;

      var importMetadata = this.constructor._importMetadata(seriesInstanceUid);

      var segments = this.constructor._segments(enabledElement);

      var activeSegmentIndex = brushModule.getters.activeSegmentIndex(enabledElement);
      this.setState({
        importMetadata: importMetadata,
        segments: segments,
        activeSegmentIndex: activeSegmentIndex,
        importing: false,
        exporting: false
      });
    }
    /**
     * onSegmentChange - Callback that changes the active segment being drawn.
     *
     * @param  {Number} segmentIndex The index of the segment to set active.
     * @returns {null}
     */

  }, {
    key: "onSegmentChange",
    value: function onSegmentChange(segmentIndex) {
      var enabledElement = this.state.element;
      brushModule.setters.activeSegmentIndex(enabledElement, segmentIndex);
      this.setState({
        activeSegmentIndex: segmentIndex
      });
    }
    /**
     * onEditClick - A callback that triggers metadata input for a segment.
     *
     * @param  {Number} segmentIndex The index of the segment metadata to edit.
     * @param  {object}   metadata     The current metadata of the segment.
     * @returns {null}
     */

  }, {
    key: "onEditClick",
    value: function onEditClick(segmentIndex, metadata) {
      Object(_util_brushMetadataIO_js__WEBPACK_IMPORTED_MODULE_7__["editSegmentInput"])(segmentIndex, metadata);
    }
    /**
     * confirmDeleteOnDeleteClick - A callback that triggers confirmation of segment deletion.
     *
     * @param  {Number} segmentIndex The index of the segment being deleted.
     * @returns {null}
     */

  }, {
    key: "confirmDeleteOnDeleteClick",
    value: function confirmDeleteOnDeleteClick(segmentIndex) {
      this.setState({
        deleteConfirmationOpen: true,
        segmentToDelete: segmentIndex
      });
    }
    /**
     * onDeleteConfirmClick - A callback that deletes a segment form the series.
     *
     * @returns {null}
     */

  }, {
    key: "onDeleteConfirmClick",
    value: function onDeleteConfirmClick() {
      var _this$state = this.state,
          segmentToDelete = _this$state.segmentToDelete,
          enabledElement = _this$state.enabledElement;
      brushModule.setters.deleteSegment(enabledElement, segmentToDelete);

      var segments = this.constructor._segments(enabledElement);

      this.setState({
        deleteConfirmationOpen: false,
        segments: segments
      });
    }
    /**
     * onDeleteCancelClick - A callback that closes the delete confirmation window
     * and aborts deletion.
     *
     * @returns {null}
     */

  }, {
    key: "onDeleteCancelClick",
    value: function onDeleteCancelClick() {
      this.setState({
        deleteConfirmationOpen: false
      });
    }
    /**
     * _importMetadata - Returns the import metadata for the active series.
     *
     * @returns {object} The importMetadata.
     */

  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          importMetadata = _this$state2.importMetadata,
          segments = _this$state2.segments,
          deleteConfirmationOpen = _this$state2.deleteConfirmationOpen,
          segmentToDelete = _this$state2.segmentToDelete,
          activeSegmentIndex = _this$state2.activeSegmentIndex,
          enabledElement = _this$state2.enabledElement,
          importing = _this$state2.importing,
          exporting = _this$state2.exporting;
      var _this$props = this.props,
          ImportCallbackOrComponent = _this$props.ImportCallbackOrComponent,
          ExportCallbackOrComponent = _this$props.ExportCallbackOrComponent;
      var component;

      if (importing) {
        component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImportCallbackOrComponent, {
          onImportComplete: this.onIOComplete,
          onImportCancel: this.onIOCancel
        });
      } else if (exporting) {
        component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ExportCallbackOrComponent, {
          onExportComplete: this.onIOComplete,
          onExportCancel: this.onIOCancel
        });
      } else if (deleteConfirmationOpen) {
        var segmentLabel = segments.find(function (segment) {
          return segment.index === segmentToDelete;
        }).metadata.SegmentLabel;
        component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SegmentationMenuDeleteConfirmation_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
          segmentLabel: segmentLabel,
          onDeleteConfirmClick: this.onDeleteConfirmClick,
          onDeleteCancelClick: this.onDeleteCancelClick
        });
      } else {
        component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "segmentation-menu-component"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "segmentation-menu-list"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "segmentation-menu-header"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Segments"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_MenuIOButtons_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
          ImportCallbackOrComponent: ImportCallbackOrComponent,
          ExportCallbackOrComponent: ExportCallbackOrComponent,
          onImportButtonClick: this.onImportButtonClick,
          onExportButtonClick: this.onExportButtonClick
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
          className: "peppermint-table"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SegmentationMenuListHeader_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
          importMetadata: importMetadata
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SegmentationMenuListBody_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
          segments: segments,
          activeSegmentIndex: activeSegmentIndex,
          onSegmentChange: this.onSegmentChange,
          onEditClick: this.onEditClick,
          onDeleteClick: this.confirmDeleteOnDeleteClick,
          enabledElement: enabledElement
        })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BrushSettings_js__WEBPACK_IMPORTED_MODULE_5__["default"], null));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, component);
    }
  }], [{
    key: "_importMetadata",
    value: function _importMetadata(seriesInstanceUid) {
      var importMetadata = brushModule.getters.importMetadata(seriesInstanceUid);

      if (importMetadata) {
        return {
          label: importMetadata.label,
          type: importMetadata.type,
          name: importMetadata.name,
          modified: importMetadata.modified ? 'true' : ' false'
        };
      }

      return {
        name: 'New Segmentation Collection',
        label: ''
      };
    }
    /**
     * _segments - Returns an array of segment metadata for the active series.
     *
     * @returns {object[]} An array of segment metadata.
     */

  }, {
    key: "_segments",
    value: function _segments(element) {
      // TODO -> support for multiple labelmaps.
      var segmentMetadata = brushModule.getters.metadata(element);

      if (!segmentMetadata) {
        return [];
      }

      var segments = [];

      for (var i = 0; i < segmentMetadata.length; i++) {
        if (segmentMetadata[i]) {
          segments.push({
            index: i,
            metadata: segmentMetadata[i]
          });
        }
      }

      return segments;
    }
  }]);

  return SegmentationMenu;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/components/segmentationMenu/SegmentationMenuDeleteConfirmation.js":
/*!*******************************************************************************!*\
  !*** ./src/components/segmentationMenu/SegmentationMenuDeleteConfirmation.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SegmentationMenuDeleteConfirmation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // import './segmentationMenu.styl';

/**
 * @class SegmentationMenuDeleteConfirmation - Renders a confirmation dialog for
 * confirmation of segment deletion.
 */

var SegmentationMenuDeleteConfirmation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SegmentationMenuDeleteConfirmation, _React$Component);

  function SegmentationMenuDeleteConfirmation() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, SegmentationMenuDeleteConfirmation);

    return _possibleConstructorReturn(this, _getPrototypeOf(SegmentationMenuDeleteConfirmation).call(this, props));
  }

  _createClass(SegmentationMenuDeleteConfirmation, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          segmentLabel = _this$props.segmentLabel,
          onDeleteConfirmClick = _this$props.onDeleteConfirmClick,
          onDeleteCancelClick = _this$props.onDeleteCancelClick;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Warning!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Are you sure you want to delete ", segmentLabel, "? This cannot be undone.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "seg-delete-horizontal-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-sm btn-primary",
        onClick: onDeleteConfirmClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa fa-check-circle fa-2x"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-sm btn-primary",
        onClick: onDeleteCancelClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa fa-times-circle fa-2x"
      }))));
    }
  }]);

  return SegmentationMenuDeleteConfirmation;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/components/segmentationMenu/SegmentationMenuListBody.js":
/*!*********************************************************************!*\
  !*** ./src/components/segmentationMenu/SegmentationMenuListBody.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SegmentationMenuListBody; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SegmentationMenuListItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SegmentationMenuListItem.js */ "./src/components/segmentationMenu/SegmentationMenuListItem.js");
/* harmony import */ var _util_brushMetadataIO_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/brushMetadataIO.js */ "./src/util/brushMetadataIO.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // import './segmentationMenu.styl';

/**
 * @class SegmentationMenuListBody - Renders a list of SegmentationMenuListItems,
 * displaying the metadata of segments.
 */

var SegmentationMenuListBody =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SegmentationMenuListBody, _React$Component);

  function SegmentationMenuListBody() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, SegmentationMenuListBody);

    return _possibleConstructorReturn(this, _getPrototypeOf(SegmentationMenuListBody).call(this, props));
  }

  _createClass(SegmentationMenuListBody, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          segments = _this$props.segments,
          activeSegmentIndex = _this$props.activeSegmentIndex,
          onSegmentChange = _this$props.onSegmentChange,
          onEditClick = _this$props.onEditClick,
          onDeleteClick = _this$props.onDeleteClick,
          enabledElement = _this$props.enabledElement;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, segments.map(function (segment) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SegmentationMenuListItem_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: "".concat(segment.metadata.SegmentLabel, "_").concat(segment.index),
          segmentIndex: segment.index,
          metadata: segment.metadata,
          onSegmentChange: onSegmentChange,
          onEditClick: onEditClick,
          onDeleteClick: onDeleteClick,
          checked: segment.index === activeSegmentIndex,
          enabledElement: enabledElement
        });
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "segmentation-menu-new-button btn btn-sm btn-primary",
        onClick: _util_brushMetadataIO_js__WEBPACK_IMPORTED_MODULE_2__["newSegment"]
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-plus-circle"
      }), " Segment"))));
    }
  }]);

  return SegmentationMenuListBody;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/components/segmentationMenu/SegmentationMenuListHeader.js":
/*!***********************************************************************!*\
  !*** ./src/components/segmentationMenu/SegmentationMenuListHeader.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SegmentationMenuListHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // import './segmentationMenu.styl';

/**
 * @class SegmentationMenuListHeader - Renders the header for the
 * SegmentationMenuList table.
 */

var SegmentationMenuListHeader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SegmentationMenuListHeader, _React$Component);

  function SegmentationMenuListHeader() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, SegmentationMenuListHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(SegmentationMenuListHeader).call(this, props));
  }

  _createClass(SegmentationMenuListHeader, [{
    key: "render",
    value: function render() {
      var importMetadata = this.props.importMetadata;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        colSpan: "2",
        className: "left-aligned-cell segmentation-menu-list-bordered"
      }, importMetadata.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        colSpan: "2",
        className: "right-aligned-cell segmentation-menu-list-bordered"
      }, importMetadata.label)), importMetadata.type && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        colSpan: "2",
        className: "left-aligned-cell segmentation-menu-list-bordered"
      }, "Type: ", importMetadata.type), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        colSpan: "2",
        className: "right-aligned-cell segmentation-menu-list-bordered"
      }, "Modified: ", importMetadata.modified)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        className: "segmentation-menu-list-bordered"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Paint"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Label"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "centered-cell"
      }, "Type"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "centered-cell"
      }, "Delete")));
    }
  }]);

  return SegmentationMenuListHeader;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/components/segmentationMenu/SegmentationMenuListItem.js":
/*!*********************************************************************!*\
  !*** ./src/components/segmentationMenu/SegmentationMenuListItem.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SegmentationMenuListItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cornerstone_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cornerstone-tools */ "cornerstone-tools");
/* harmony import */ var cornerstone_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cornerstone_tools__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // import './segmentationMenu.styl';

var brushModule = cornerstone_tools__WEBPACK_IMPORTED_MODULE_1___default.a.store.modules.brush;
/**
 * @class SegmentationMenuListItem - Renders metadata for a single segment.
 */

var SegmentationMenuListItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SegmentationMenuListItem, _React$Component);

  function SegmentationMenuListItem() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, SegmentationMenuListItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(SegmentationMenuListItem).call(this, props));
  }
  /**
   * _getTypeWithModifier - Returns the segment type with its modifier as a string.
   *
   * @returns {string}
   */


  _createClass(SegmentationMenuListItem, [{
    key: "_getTypeWithModifier",
    value: function _getTypeWithModifier() {
      var metadata = this.props.metadata;
      var typeWithModifier = metadata.SegmentedPropertyTypeCodeSequence.CodeMeaning;
      var modifier = metadata.SegmentedPropertyTypeCodeSequence.SegmentedPropertyTypeModifierCodeSequence;

      if (modifier) {
        typeWithModifier += " (".concat(modifier.CodeMeaning, ")");
      }

      return typeWithModifier;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          metadata = _this$props.metadata,
          segmentIndex = _this$props.segmentIndex,
          onSegmentChange = _this$props.onSegmentChange,
          onEditClick = _this$props.onEditClick,
          onDeleteClick = _this$props.onDeleteClick,
          checked = _this$props.checked,
          enabledElement = _this$props.enabledElement;
      var segmentLabel = metadata.SegmentLabel;
      var colormap = brushModule.getters.activeCornerstoneColorMap(enabledElement);
      var color = colormap.getColor(segmentIndex);
      var segmentColor = "rgba(".concat(color[0], ", ").concat(color[1], ", ").concat(color[2], ", 1.0 )");
      var segmentCategory = metadata.SegmentedPropertyCategoryCodeSequence.CodeMeaning;

      var typeWithModifier = this._getTypeWithModifier();

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "centered-cell"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-square",
        style: {
          color: segmentColor
        }
      }), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "radio",
        checked: checked,
        onChange: function onChange() {
          onSegmentChange(segmentIndex);
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "left-aligned-cell"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "segmentation-menu-name-link",
        onClick: function onClick() {
          onEditClick(segmentIndex, metadata);
        }
      }, segmentLabel)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "segmentation-menu-name-link",
        onClick: function onClick() {
          onEditClick(segmentIndex, metadata);
        }
      }, typeWithModifier, ' - ', segmentCategory)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "centered-cell"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-sm btn-secondary",
        onClick: function onClick() {
          onDeleteClick(segmentIndex);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-times"
      }))));
    }
  }]);

  return SegmentationMenuListItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.js */ "./src/init.js");
/* harmony import */ var _components_segmentationMenu_SegmentationMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/segmentationMenu/SegmentationMenu.js */ "./src/components/segmentationMenu/SegmentationMenu.js");
/* harmony import */ var _components_Dummy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Dummy.js */ "./src/components/Dummy.js");

 // import RoiContourMenu from './components/roiContourMenu/RoiContourMenu.js';


var TOOLBAR_BUTTON_TYPES = {
  COMMAND: 'command',
  SET_TOOL_ACTIVE: 'setToolActive'
};
/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * Only required property. Should be a unique value across all extensions.
   */
  id: 'ohif-segmentation-extension',
  preRegistration: function preRegistration() {
    var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    Object(_init_js__WEBPACK_IMPORTED_MODULE_0__["default"])(configuration);
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
            toolName: _init_js__WEBPACK_IMPORTED_MODULE_0__["TOOL_NAMES"].FREEHAND_ROI_3D_TOOL
          }
        }, {
          id: 'FreehandRoiSculptor',
          label: 'Sculpt',
          icon: 'level',
          type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
          commandName: 'setToolActive',
          commandOptions: {
            toolName: _init_js__WEBPACK_IMPORTED_MODULE_0__["TOOL_NAMES"].FREEHAND_ROI_3D_SCULPTOR_TOOL
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
            toolName: _init_js__WEBPACK_IMPORTED_MODULE_0__["TOOL_NAMES"].BRUSH_3D_TOOL
          }
        }, {
          id: 'Brush3DHUGatedTool',
          label: 'Smart CT',
          icon: 'level',
          type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
          commandName: 'setToolActive',
          commandOptions: {
            toolName: _init_js__WEBPACK_IMPORTED_MODULE_0__["TOOL_NAMES"].BRUSH_3D_HU_GATED_TOOL
          }
        }, {
          id: 'Brush3DAutoGatedTool',
          label: 'Auto',
          icon: 'level',
          type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
          commandName: 'setToolActive',
          commandOptions: {
            toolName: _init_js__WEBPACK_IMPORTED_MODULE_0__["TOOL_NAMES"].BRUSH_3D_AUTO_GATED_TOOL
          }
        }]
      }],
      defaultContext: 'ACTIVE_VIEWPORT::CORNERSTONE'
    };
  },

  /**
   * Totally implemented, for real now.
   */
  getPanelModule: function getPanelModule() {
    return {
      menuOptions: [{
        icon: 'th-list',
        label: 'Segments',
        target: 'segment-panel'
      }, {
        icon: 'th',
        label: 'Contours',
        target: 'contour-panel'
      }],
      components: [{
        id: 'segment-panel',
        component: _components_segmentationMenu_SegmentationMenu_js__WEBPACK_IMPORTED_MODULE_1__["default"]
      }, {
        id: 'contour-panel',
        component: _components_Dummy_js__WEBPACK_IMPORTED_MODULE_2__["default"]
      }],
      defaultContext: ['VIEWER']
    };
  }
});

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/*! exports provided: TOOL_NAMES, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOL_NAMES", function() { return TOOL_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
/* harmony import */ var cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cornerstone-tools */ "cornerstone-tools");
/* harmony import */ var cornerstone_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_freehand3DModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/freehand3DModule.js */ "./src/modules/freehand3DModule.js");
/* harmony import */ var _modules_extendBrushModule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/extendBrushModule.js */ "./src/modules/extendBrushModule.js");
/* harmony import */ var _tools_Brush3DTool_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tools/Brush3DTool.js */ "./src/tools/Brush3DTool.js");
/* harmony import */ var _tools_Brush3DHUGatedTool_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tools/Brush3DHUGatedTool.js */ "./src/tools/Brush3DHUGatedTool.js");
/* harmony import */ var _tools_Brush3DAutoGatedTool_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tools/Brush3DAutoGatedTool.js */ "./src/tools/Brush3DAutoGatedTool.js");
/* harmony import */ var _tools_FreehandRoi3DTool_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tools/FreehandRoi3DTool.js */ "./src/tools/FreehandRoi3DTool.js");
/* harmony import */ var _tools_FreehandRoi3DSculptorTool_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tools/FreehandRoi3DSculptorTool.js */ "./src/tools/FreehandRoi3DSculptorTool.js");








var TOOL_NAMES = {};

var modules = cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__["store"].modules;
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
  Object(_modules_extendBrushModule_js__WEBPACK_IMPORTED_MODULE_2__["default"])(brushModule, config);
  Object(cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__["register"])('module', 'freehand3D', _modules_freehand3DModule_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var freehand3DStore = modules.freehand3D;
  freehand3DStore.state.interpolate = config.interpolate;
  freehand3DStore.state.displayStats = config.showFreehandStats;
  Object(cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__["addTool"])(_tools_Brush3DTool_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: config.brush3dToolName
  });
  Object(cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__["addTool"])(_tools_Brush3DHUGatedTool_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: config.brush3DHUGatedToolName
  });
  Object(cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__["addTool"])(_tools_Brush3DAutoGatedTool_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: config.brush3DAutoGatedTool
  });
  Object(cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__["addTool"])(_tools_FreehandRoi3DTool_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: config.freehandRoi3DTool
  });
  Object(cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__["addTool"])(_tools_FreehandRoi3DSculptorTool_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return extendBrushModule; });
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

/***/ }),

/***/ "./src/modules/freehand3DModule.js":
/*!*****************************************!*\
  !*** ./src/modules/freehand3DModule.js ***!
  \*****************************************/
/*! exports provided: default, getNextColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextColor", function() { return getNextColor; });
/* harmony import */ var cornerstone_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cornerstone-core */ "cornerstone-core");
/* harmony import */ var cornerstone_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cornerstone_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_generateUID_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/generateUID.js */ "./src/util/generateUID.js");
/* harmony import */ var _util_getSeriesInstanceUidFromEnabledElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/getSeriesInstanceUidFromEnabledElement.js */ "./src/util/getSeriesInstanceUidFromEnabledElement.js");



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
    uid: options.uid ? options.uid : Object(_util_generateUID_js__WEBPACK_IMPORTED_MODULE_1__["default"])(),
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
    uid: options.uid ? options.uid : Object(_util_generateUID_js__WEBPACK_IMPORTED_MODULE_1__["default"])(),
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
  var ROIContourUid = arguments.length > 2 ? arguments[2] : undefined;
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
  var enabledElement = cornerstone_core__WEBPACK_IMPORTED_MODULE_0___default.a.getEnabledElement(element);

  if (!enabledElement.image) {
    return;
  }

  var seriesInstanceUid = Object(_util_getSeriesInstanceUidFromEnabledElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(enabledElement);

  if (!getSeries(seriesInstanceUid)) {
    // Generate series store.
    setSeries(seriesInstanceUid);
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  state: state,
  enabledElementCallback: enabledElementCallback,
  getters: getters,
  setters: setters
});
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Brush3DAutoGatedTool; });
/* harmony import */ var cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cornerstone-tools */ "cornerstone-tools");
/* harmony import */ var cornerstone_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Brush3DHUGatedTool_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Brush3DHUGatedTool.js */ "./src/tools/Brush3DHUGatedTool.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var _cornerstoneTools$imp = cornerstone_tools__WEBPACK_IMPORTED_MODULE_0___default.a.importInternalModule('util/brushUtils'),
    getCircle = _cornerstoneTools$imp.getCircle;

var brushModule = cornerstone_tools__WEBPACK_IMPORTED_MODULE_0___default.a.store.modules.brush;

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
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Brush3DAutoGatedTool).call(this, initialConfiguration));
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
}(_Brush3DHUGatedTool_js__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/tools/Brush3DHUGatedTool.js":
/*!*****************************************!*\
  !*** ./src/tools/Brush3DHUGatedTool.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Brush3DHUGatedTool; });
/* harmony import */ var cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cornerstone-tools */ "cornerstone-tools");
/* harmony import */ var cornerstone_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cornerstone_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cornerstone-core */ "cornerstone-core");
/* harmony import */ var cornerstone_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cornerstone_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Brush3DTool_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Brush3DTool.js */ "./src/tools/Brush3DTool.js");
/* harmony import */ var _n_dimensional_flood_fill_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./n-dimensional-flood-fill.js */ "./src/tools/n-dimensional-flood-fill.js");
/* harmony import */ var _n_dimensional_flood_fill_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_n_dimensional_flood_fill_js__WEBPACK_IMPORTED_MODULE_3__);
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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var brushModule = cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__["store"].modules.brush;

var _importInternalModule = Object(cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__["importInternalModule"])('util/brushUtils'),
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
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Brush3DHUGatedTool).call(this, initialConfiguration));
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
      cornerstone_core__WEBPACK_IMPORTED_MODULE_1___default.a.triggerEvent(element, cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__["EVENTS"].LABELMAP_MODIFIED, {
        activeLabelmapIndex: activeLabelmapIndex
      });
      cornerstone_core__WEBPACK_IMPORTED_MODULE_1___default.a.updateImage(evt.detail.element);
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
          var result = _n_dimensional_flood_fill_js__WEBPACK_IMPORTED_MODULE_3___default()({
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
          var result = _n_dimensional_flood_fill_js__WEBPACK_IMPORTED_MODULE_3___default()({
            getter: getter,
            seed: [i, j]
          });
          var flooded = result.flooded;

          for (var k = 0; k < flooded.length; k++) {
            data[flooded[k][0]][flooded[k][1]] = 4;
          }

          holes.push(flooded);
        } else if (data[i][j] === 2) {
          var _result = _n_dimensional_flood_fill_js__WEBPACK_IMPORTED_MODULE_3___default()({
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
}(_Brush3DTool_js__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./src/tools/Brush3DTool.js":
/*!**********************************!*\
  !*** ./src/tools/Brush3DTool.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Brush3DTool; });
/* harmony import */ var cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cornerstone-tools */ "cornerstone-tools");
/* harmony import */ var cornerstone_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_generateBrushMetadata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/generateBrushMetadata.js */ "./src/util/generateBrushMetadata.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var brushModule = cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__["store"].modules.brush;

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
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Brush3DTool).call(this, initialConfiguration));
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
        metadata = Object(_util_generateBrushMetadata_js__WEBPACK_IMPORTED_MODULE_1__["default"])('Unnamed Segment');
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
}(cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__["BrushTool"]);



/***/ }),

/***/ "./src/tools/FreehandRoi3DSculptorTool.js":
/*!************************************************!*\
  !*** ./src/tools/FreehandRoi3DSculptorTool.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FreehandRoi3DSculptorTool; });
/* harmony import */ var cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cornerstone-tools */ "cornerstone-tools");
/* harmony import */ var cornerstone_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cornerstone_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cornerstone-core */ "cornerstone-core");
/* harmony import */ var cornerstone_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cornerstone_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_freehandInterpolate_interpolate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/freehandInterpolate/interpolate.js */ "./src/util/freehandInterpolate/interpolate.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var modules = cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__["store"].modules,
    state = cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__["store"].state;

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
    _this = _possibleConstructorReturn(this, _getPrototypeOf(FreehandRoi3DSculptorTool).call(this, initialConfiguration)); // Create bound functions for private event loop.

    _this.activeMouseUpCallback = _this.activeMouseUpCallback.bind(_assertThisInitialized(_assertThisInitialized(_this)));
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

      var toolState = Object(cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__["getToolState"])(element, this.referencedToolName);
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

      var toolData = Object(cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__["getToolState"])(element, this.referencedToolName);
      var data = toolData.data[config.currentTool];

      if (modules.freehand3D.getters.interpolate()) {
        Object(_util_freehandInterpolate_interpolate_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data);
      } // Update the image


      Object(cornerstone_core__WEBPACK_IMPORTED_MODULE_1__["updateImage"])(eventData.element);
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
      var toolData = Object(cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__["getToolState"])(element, this.referencedToolName);
      var data = toolData.data[config.currentTool];
      data.invalidated = true;
      data.interpolated = false;
    }
  }]);

  return FreehandRoi3DSculptorTool;
}(cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__["FreehandRoiSculptorTool"]);
/**
 * Returns the default freehandSculpterMouseTool configuration.
 *
 * @return {Object} The default configuration object.
 */




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
    dragColor: cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__["toolColors"].getActiveColor(),
    hoverColor: cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__["toolColors"].getToolColor(),

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

/***/ }),

/***/ "./src/tools/FreehandRoi3DTool.js":
/*!****************************************!*\
  !*** ./src/tools/FreehandRoi3DTool.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FreehandRoi3DTool; });
/* harmony import */ var cornerstone_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cornerstone-core */ "cornerstone-core");
/* harmony import */ var cornerstone_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cornerstone_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cornerstone_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cornerstone-math */ "cornerstone-math");
/* harmony import */ var cornerstone_math__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cornerstone_math__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cornerstone_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cornerstone-tools */ "cornerstone-tools");
/* harmony import */ var cornerstone_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cornerstone_tools__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_generateUID_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/generateUID.js */ "./src/util/generateUID.js");
/* harmony import */ var _util_freehandInterpolate_interpolate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/freehandInterpolate/interpolate.js */ "./src/util/freehandInterpolate/interpolate.js");
/* harmony import */ var _util_getSeriesInstanceUidFromEnabledElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/getSeriesInstanceUidFromEnabledElement.js */ "./src/util/getSeriesInstanceUidFromEnabledElement.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






 // Cornerstone 3rd party dev kit imports

var _importInternalModule = Object(cornerstone_tools__WEBPACK_IMPORTED_MODULE_2__["importInternalModule"])('util/freehandUtils'),
    insertOrDelete = _importInternalModule.insertOrDelete,
    freehandArea = _importInternalModule.freehandArea,
    calculateFreehandStatistics = _importInternalModule.calculateFreehandStatistics;

var draw = Object(cornerstone_tools__WEBPACK_IMPORTED_MODULE_2__["importInternalModule"])('drawing/draw');
var drawJoinedLines = Object(cornerstone_tools__WEBPACK_IMPORTED_MODULE_2__["importInternalModule"])('drawing/drawJoinedLines');
var drawHandles = Object(cornerstone_tools__WEBPACK_IMPORTED_MODULE_2__["importInternalModule"])('drawing/drawHandles');
var drawLinkedTextBox = Object(cornerstone_tools__WEBPACK_IMPORTED_MODULE_2__["importInternalModule"])('drawing/drawLinkedTextBox');
var moveHandleNearImagePoint = Object(cornerstone_tools__WEBPACK_IMPORTED_MODULE_2__["importInternalModule"])('manipulators/moveHandleNearImagePoint');
var getNewContext = Object(cornerstone_tools__WEBPACK_IMPORTED_MODULE_2__["importInternalModule"])('drawing/getNewContext');
var modules = cornerstone_tools__WEBPACK_IMPORTED_MODULE_2__["store"].modules;
var numbersWithCommas = Object(cornerstone_tools__WEBPACK_IMPORTED_MODULE_2__["importInternalModule"])('util/numbersWithCommas');
var pointInsideBoundingBox = Object(cornerstone_tools__WEBPACK_IMPORTED_MODULE_2__["importInternalModule"])('util/pointInsideBoundingBox');
var calculateSUV = Object(cornerstone_tools__WEBPACK_IMPORTED_MODULE_2__["importInternalModule"])('util/calculateSUV');

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
    _this = _possibleConstructorReturn(this, _getPrototypeOf(FreehandRoi3DTool).call(this, initialConfiguration));
    _this.configuration.alwaysShowHandles = false;
    _this._freehand3DStore = modules.freehand3D;
    _this._onMeasurementRemoved = _this._onMeasurementRemoved.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this._drawingMouseUpCallback = _this._drawingMouseUpCallback.bind(_assertThisInitialized(_assertThisInitialized(_this)));
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

      var enabledElement = Object(cornerstone_core__WEBPACK_IMPORTED_MODULE_0__["getEnabledElement"])(this.element);
      var seriesInstanceUid = Object(_util_getSeriesInstanceUidFromEnabledElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(enabledElement);
      var referencedStructureSet = freehand3DStore.getters.structureSet(seriesInstanceUid, 'DEFAULT');
      var referencedROIContour = freehand3DStore.getters.activeROIContour(seriesInstanceUid);
      var measurementData = {
        uid: Object(_util_generateUID_js__WEBPACK_IMPORTED_MODULE_3__["default"])(),
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
      var enabledElement = Object(cornerstone_core__WEBPACK_IMPORTED_MODULE_0__["getEnabledElement"])(this.element);
      var seriesInstanceUid = Object(_util_getSeriesInstanceUidFromEnabledElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(enabledElement);
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
        var handleCanvas = Object(cornerstone_core__WEBPACK_IMPORTED_MODULE_0__["pixelToCanvas"])(element, points[i]);

        if (cornerstone_math__WEBPACK_IMPORTED_MODULE_1__["point"].distance(handleCanvas, coords) < 6) {
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
      var toolData = Object(cornerstone_tools__WEBPACK_IMPORTED_MODULE_2__["getToolState"])(evt.currentTarget, this.name);

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
      Object(cornerstone_core__WEBPACK_IMPORTED_MODULE_0__["updateImage"])(evt.detail.element);
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

      var toolState = Object(cornerstone_tools__WEBPACK_IMPORTED_MODULE_2__["getToolState"])(evt.currentTarget, this.name);

      if (!toolState) {
        return;
      }

      var image = eventData.image;
      var element = eventData.element;
      var config = this.configuration;
      var seriesModule = cornerstone_core__WEBPACK_IMPORTED_MODULE_0__["metaData"].get('generalSeriesModule', image.imageId);
      var modality;

      if (seriesModule) {
        modality = seriesModule.modality;
      } // We have tool data for this element - iterate over each one and draw it


      var context = getNewContext(eventData.canvasContext.canvas);
      var lineWidth = cornerstone_tools__WEBPACK_IMPORTED_MODULE_2__["toolStyle"].getToolWidth();

      var _loop = function _loop(i) {
        var data = toolState.data[i];
        var structureSet = data.referencedStructureSet;
        var ROIContour = data.referencedROIContour;

        if (data.visible === false || !structureSet.visible) {
          return "continue";
        }

        var isROIActive = freehand3DStore.getters.ROIContourIndex(data.seriesInstanceUid, data.structureSetUid, data.ROIContourUid) === freehand3DStore.getters.activeROIContourIndex(data.seriesInstanceUid);
        draw(context, function (context) {
          var color = cornerstone_tools__WEBPACK_IMPORTED_MODULE_2__["toolColors"].getColorIfActive(data);
          var fillColor;
          var points = data.handles.points;

          if (data.active && !structureSet.isLocked) {
            if (data.handles.invalidHandlePlacement) {
              color = config.invalidColor;
              fillColor = config.invalidColor;
            } else {
              color = cornerstone_tools__WEBPACK_IMPORTED_MODULE_2__["toolColors"].getColorIfActive(data);
              fillColor = cornerstone_tools__WEBPACK_IMPORTED_MODULE_2__["toolColors"].getFillColor();
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
              var lines = _toConsumableArray(points[j].lines);

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
              var pixels = Object(cornerstone_core__WEBPACK_IMPORTED_MODULE_0__["getPixels"])(element, polyBoundingBox.left, polyBoundingBox.top, polyBoundingBox.width, polyBoundingBox.height); // Calculate the mean & standard deviation from the pixels and the object shape

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
      var toolState = Object(cornerstone_tools__WEBPACK_IMPORTED_MODULE_2__["getToolState"])(element, this.name);
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
        Object(_util_freehandInterpolate_interpolate_js__WEBPACK_IMPORTED_MODULE_4__["default"])(data, element);
      }

      Object(cornerstone_core__WEBPACK_IMPORTED_MODULE_0__["updateImage"])(element);
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

      element.removeEventListener(cornerstone_tools__WEBPACK_IMPORTED_MODULE_2__["EVENTS"].MEASUREMENT_REMOVED, this._onMeasurementRemoved);
    }
  }, {
    key: "_addMeasurementRemovedListener",
    value: function _addMeasurementRemovedListener(element) {
      element.removeEventListener(cornerstone_tools__WEBPACK_IMPORTED_MODULE_2__["EVENTS"].MEASUREMENT_REMOVED, this._onMeasurementRemoved);
      element.addEventListener(cornerstone_tools__WEBPACK_IMPORTED_MODULE_2__["EVENTS"].MEASUREMENT_REMOVED, this._onMeasurementRemoved);
    }
  }]);

  return FreehandRoi3DTool;
}(cornerstone_tools__WEBPACK_IMPORTED_MODULE_2__["FreehandRoiTool"]);



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

/***/ "./src/util/brushMetadataIO.js":
/*!*************************************!*\
  !*** ./src/util/brushMetadataIO.js ***!
  \*************************************/
/*! exports provided: newSegmentInput, editSegmentInput, newSegment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newSegmentInput", function() { return newSegmentInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editSegmentInput", function() { return editSegmentInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newSegment", function() { return newSegment; });
/* harmony import */ var cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cornerstone-tools */ "cornerstone-tools");
/* harmony import */ var cornerstone_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _generateBrushMetadata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateBrushMetadata.js */ "./src/util/generateBrushMetadata.js");


var brushModule = cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__["store"].modules.brush;
function newSegmentInput(segIndex, metadata) {
  brushMetdataInput(segIndex, metadata, segmentInputCallback);
}
function editSegmentInput(segIndex, metadata) {
  brushMetdataInput(segIndex, metadata, segmentInputCallback);
}
function newSegment(enabledElement) {
  if (!enabledElement) {
    return [];
  }

  var activeElement = enabledElement.element;
  var segmentMetadata = brushModule.getters.metadata(activeElement);

  if (!Array.isArray(segmentMetadata)) {
    var _brushModule$getters$ = brushModule.getters.getAndCacheLabelmap2D(activeElement),
        labelmap3D = _brushModule$getters$.labelmap3D;

    segmentMetadata = labelmap3D.metadata;
  }

  var colormap = brushModule.getters.activeCornerstoneColorMap(activeElement);
  var numberOfColors = colormap.getNumberOfColors();

  for (var i = 1; i < numberOfColors; i++) {
    if (!segmentMetadata[i]) {
      newSegmentInput(i);
      break;
    }
  }
}

function segmentInputCallback(data) {
  if (!data) {
    return;
  }

  var label = data.label,
      categoryUID = data.categoryUID,
      typeUID = data.typeUID,
      modifierUID = data.modifierUID,
      segIndex = data.segIndex,
      element = data.element;
  var metadata = Object(_generateBrushMetadata_js__WEBPACK_IMPORTED_MODULE_1__["default"])(label, categoryUID, typeUID, modifierUID); // TODO -> support for multiple labelmaps.

  brushModule.setters.metadata(element, 0, segIndex, metadata);
  brushModule.setters.activeSegmentIndex(element, segIndex);
}
/**
 * Opens the brushMetadata dialog.
 *
 */
// TODO -> Need to make this into a react-modal?


function brushMetdataInput(segIndex, metadata, callback) {
  console.log('TODO: Remake brushMetadata input menu!');
  /*
  const brushMetadataDialog = document.getElementById('brushMetadataDialog');
  const dialogData = Blaze.getData(brushMetadataDialog);
   dialogData.brushMetadataDialogSegIndex.set(segIndex);
  dialogData.brushMetadataDialogMetadata.set(metadata);
  dialogData.brushMetadataDialogCallback.set(callback);
   brushMetadataDialog.showModal();
  */
}

/***/ }),

/***/ "./src/util/classes/Polygon.js":
/*!*************************************!*\
  !*** ./src/util/classes/Polygon.js ***!
  \*************************************/
/*! exports provided: Polygon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return Polygon; });
/* harmony import */ var cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cornerstone-tools */ "cornerstone-tools");
/* harmony import */ var cornerstone_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var modules = cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__["store"].modules;
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

/***/ }),

/***/ "./src/util/freehandInterpolate/generateInterpolationData.js":
/*!*******************************************************************!*\
  !*** ./src/util/freehandInterpolate/generateInterpolationData.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cornerstone-tools */ "cornerstone-tools");
/* harmony import */ var cornerstone_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__);

var globalToolStateManager = cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__["globalImageIdSpecificToolStateManager"];
/**
 * generateInterpolationList - Generate the list of contours to interpolate,
 * including whether they are new contours, or interpolated contours that need
 * to be updated.
 *
 * @param  {object} toolData The tool data of the freehand3D contour.
 * @return {object} An object containing the ROIContourData and the
 * interpolationList.
 */

/* harmony default export */ __webpack_exports__["default"] = (function (toolData, element) {
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
});
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
  var stackToolState = Object(cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__["getToolState"])(element, 'stack');
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

/***/ }),

/***/ "./src/util/freehandInterpolate/interpolate.js":
/*!*****************************************************!*\
  !*** ./src/util/freehandInterpolate/interpolate.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cornerstone-tools */ "cornerstone-tools");
/* harmony import */ var cornerstone_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes_Polygon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/Polygon.js */ "./src/util/classes/Polygon.js");
/* harmony import */ var _generateUID_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generateUID.js */ "./src/util/generateUID.js");
/* harmony import */ var _generateInterpolationData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generateInterpolationData.js */ "./src/util/freehandInterpolate/generateInterpolationData.js");




var globalToolStateManager = cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__["globalImageIdSpecificToolStateManager"];
var dP = 0.2; // Aim for < 0.2mm between interpolated nodes when super-sampling.

var modules = cornerstone_tools__WEBPACK_IMPORTED_MODULE_0__["store"].modules;
/**
 * interpolate - Interpolate missing contours in the ROIContour.
 *
 * @param  {object} toolData The tool data of the freehand3D contour.
 * @return {null}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (toolData, element) {
  var _generateInterpolatio = Object(_generateInterpolationData_js__WEBPACK_IMPORTED_MODULE_3__["default"])(toolData, element),
      ROIContourData = _generateInterpolatio.ROIContourData,
      interpolationList = _generateInterpolatio.interpolationList;

  for (var i = 0; i < interpolationList.length; i++) {
    if (interpolationList[i]) {
      _linearlyInterpolateBetween(interpolationList[i].list, interpolationList[i].pair, ROIContourData);
    }
  }
});
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

  var polygon = new _classes_Polygon_js__WEBPACK_IMPORTED_MODULE_1__["Polygon"](points, null, referencedToolData.seriesInstanceUid, referencedToolData.structureSetUid, referencedToolData.ROIContourUid, Object(_generateUID_js__WEBPACK_IMPORTED_MODULE_2__["default"])(), null, true);
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

  var updatedPolygon = new _classes_Polygon_js__WEBPACK_IMPORTED_MODULE_1__["Polygon"](points, null, oldPolygon.seriesInstanceUid, oldPolygon.structureSetUid, oldPolygon.ROIContourUid, oldPolygon.uid, null, true);
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

/***/ }),

/***/ "./src/util/generateBrushMetadata.js":
/*!*******************************************!*\
  !*** ./src/util/generateBrushMetadata.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return generateMetadata; });
/* harmony import */ var _GeneralAnatomylist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GeneralAnatomylist.js */ "./src/GeneralAnatomylist.js");

var categories = _GeneralAnatomylist_js__WEBPACK_IMPORTED_MODULE_0__["default"].SegmentationCodes.Category;
function generateMetadata(label) {
  var categoryUID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'T-D0050';
  var typeUID = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'T-D0050';
  var modifierUID = arguments.length > 3 ? arguments[3] : undefined;
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

/***/ }),

/***/ "./src/util/generateUID.js":
/*!*********************************!*\
  !*** ./src/util/generateUID.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Generates a UUID for the enabledElement.
 * @export @public @method
 * @name generateUID
 *
 * @return {String} the UUID.
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
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
});

/***/ }),

/***/ "./src/util/getActiveViewportEnabledElement.js":
/*!*****************************************************!*\
  !*** ./src/util/getActiveViewportEnabledElement.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getActiveViewportEnabledElement; });
/**
 * Grabs `dom` reference for the enabledElement of
 * the active viewport
 */
function getActiveViewportEnabledElement(viewports, activeIndex) {
  var activeViewport = viewports[activeIndex] || {};
  return activeViewport.dom;
}

/***/ }),

/***/ "./src/util/getSeriesInstanceUidFromEnabledElement.js":
/*!************************************************************!*\
  !*** ./src/util/getSeriesInstanceUidFromEnabledElement.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getSeriesInstanceUidFromEnabledElement; });
/* harmony import */ var cornerstone_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cornerstone-core */ "cornerstone-core");
/* harmony import */ var cornerstone_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cornerstone_core__WEBPACK_IMPORTED_MODULE_0__);

function getSeriesInstanceUidFromEnabledElement(enabledElement) {
  if (!enabledElement) {
    return;
  }

  var imageId = enabledElement.image.imageId;
  var generalSeriesModule = cornerstone_core__WEBPACK_IMPORTED_MODULE_0___default.a.metaData.get('generalSeriesModule', imageId);
  return generalSeriesModule.seriesInstanceUID;
}

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

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vLi9zcmMvR2VuZXJhbEFuYXRvbXlsaXN0LmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy9jb21wb25lbnRzL0R1bW15LmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9NZW51SU9CdXR0b25zLmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9oZWxwZXJzL29uRXhwb3J0QnV0dG9uQ2xpY2suanMiLCJ3ZWJwYWNrOi8vb2hpZi1zZWdtZW50YXRpb24tcGx1Z2luLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2hlbHBlcnMvb25JT0NhbmNlbC5qcyIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vLi9zcmMvY29tcG9uZW50cy9jb21tb24vaGVscGVycy9vbkltcG9ydEJ1dHRvbkNsaWNrLmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy9jb21wb25lbnRzL3NlZ21lbnRhdGlvbk1lbnUvQnJ1c2hTZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vLi9zcmMvY29tcG9uZW50cy9zZWdtZW50YXRpb25NZW51L1NlZ21lbnRhdGlvbk1lbnUuanMiLCJ3ZWJwYWNrOi8vb2hpZi1zZWdtZW50YXRpb24tcGx1Z2luLy4vc3JjL2NvbXBvbmVudHMvc2VnbWVudGF0aW9uTWVudS9TZWdtZW50YXRpb25NZW51RGVsZXRlQ29uZmlybWF0aW9uLmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy9jb21wb25lbnRzL3NlZ21lbnRhdGlvbk1lbnUvU2VnbWVudGF0aW9uTWVudUxpc3RCb2R5LmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy9jb21wb25lbnRzL3NlZ21lbnRhdGlvbk1lbnUvU2VnbWVudGF0aW9uTWVudUxpc3RIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vb2hpZi1zZWdtZW50YXRpb24tcGx1Z2luLy4vc3JjL2NvbXBvbmVudHMvc2VnbWVudGF0aW9uTWVudS9TZWdtZW50YXRpb25NZW51TGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vb2hpZi1zZWdtZW50YXRpb24tcGx1Z2luLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy9pbml0LmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy9tb2R1bGVzL2V4dGVuZEJydXNoTW9kdWxlLmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy9tb2R1bGVzL2ZyZWVoYW5kM0RNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vb2hpZi1zZWdtZW50YXRpb24tcGx1Z2luLy4vc3JjL3Rvb2xzL0JydXNoM0RBdXRvR2F0ZWRUb29sLmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy90b29scy9CcnVzaDNESFVHYXRlZFRvb2wuanMiLCJ3ZWJwYWNrOi8vb2hpZi1zZWdtZW50YXRpb24tcGx1Z2luLy4vc3JjL3Rvb2xzL0JydXNoM0RUb29sLmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy90b29scy9GcmVlaGFuZFJvaTNEU2N1bHB0b3JUb29sLmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy90b29scy9GcmVlaGFuZFJvaTNEVG9vbC5qcyIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vLi9zcmMvdG9vbHMvbi1kaW1lbnNpb25hbC1mbG9vZC1maWxsLmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy91dGlsL2JydXNoTWV0YWRhdGFJTy5qcyIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vLi9zcmMvdXRpbC9jbGFzc2VzL1BvbHlnb24uanMiLCJ3ZWJwYWNrOi8vb2hpZi1zZWdtZW50YXRpb24tcGx1Z2luLy4vc3JjL3V0aWwvZnJlZWhhbmRJbnRlcnBvbGF0ZS9nZW5lcmF0ZUludGVycG9sYXRpb25EYXRhLmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy91dGlsL2ZyZWVoYW5kSW50ZXJwb2xhdGUvaW50ZXJwb2xhdGUuanMiLCJ3ZWJwYWNrOi8vb2hpZi1zZWdtZW50YXRpb24tcGx1Z2luLy4vc3JjL3V0aWwvZ2VuZXJhdGVCcnVzaE1ldGFkYXRhLmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy91dGlsL2dlbmVyYXRlVUlELmpzIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi8uL3NyYy91dGlsL2dldEFjdGl2ZVZpZXdwb3J0RW5hYmxlZEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2hpZi1zZWdtZW50YXRpb24tcGx1Z2luLy4vc3JjL3V0aWwvZ2V0U2VyaWVzSW5zdGFuY2VVaWRGcm9tRW5hYmxlZEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2hpZi1zZWdtZW50YXRpb24tcGx1Z2luL2V4dGVybmFsIFwiY29ybmVyc3RvbmUtY29yZVwiIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi9leHRlcm5hbCBcImNvcm5lcnN0b25lLW1hdGhcIiIsIndlYnBhY2s6Ly9vaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4vZXh0ZXJuYWwgXCJjb3JuZXJzdG9uZS10b29sc1wiIiwid2VicGFjazovL29oaWYtc2VnbWVudGF0aW9uLXBsdWdpbi9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsianNvbiIsInBhcnNlZEpzb24iLCJKU09OIiwicGFyc2UiLCJEdW1teSIsInByb3BzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJNZW51SU9CdXR0b25zIiwiSW1wb3J0Q2FsbGJhY2tPckNvbXBvbmVudCIsIkV4cG9ydENhbGxiYWNrT3JDb21wb25lbnQiLCJvbkltcG9ydEJ1dHRvbkNsaWNrIiwib25FeHBvcnRCdXR0b25DbGljayIsInByb3RvdHlwZSIsImlzUmVhY3RDb21wb25lbnQiLCJzZXRTdGF0ZSIsImV4cG9ydGluZyIsIm9uSU9DYW5jZWwiLCJpbXBvcnRpbmciLCJjb25zb2xlIiwibG9nIiwiYnJ1c2hNb2R1bGUiLCJjb3JuZXJzdG9uZVRvb2xzIiwic3RvcmUiLCJtb2R1bGVzIiwiYnJ1c2giLCJicnVzaFN0YXRlIiwic3RhdGUiLCJtaW5HYXRlU2VwZXJhdGlvbiIsIkJydXNoU2V0dGluZ3MiLCJjdXN0b21HYXRlUmFuZ2UiLCJnZXR0ZXJzIiwiaG9sZUZpbGwiLCJzdHJheVJlbW92ZSIsImFjdGl2ZUdhdGUiLCJjdXN0b21HYXRlUmFuZ2VNaW4iLCJjdXN0b21HYXRlUmFuZ2VNYXgiLCJvbkdhdGVDaGFuZ2UiLCJiaW5kIiwib25DdXN0b21HYXRlTWluQ2hhbmdlIiwib25DdXN0b21HYXRlTWF4Q2hhbmdlIiwib25Ib2xlRmlsbENoYW5nZSIsIm9uU3RyYXlSZW1vdmVDaGFuZ2UiLCJldnQiLCJ2YWwiLCJ0YXJnZXQiLCJ2YWx1ZSIsIk51bWJlciIsImN1c3RvbVJhbmdlTWF4Iiwic2V0dGVycyIsImN1c3RvbVJhbmdlTWluIiwiaG9sZUZpbGxSYW5nZSIsInN0cmF5UmVtb3ZlUmFuZ2UiLCJnYXRlcyIsImhvbGVGaWxsTGFiZWwiLCJzdHJheVJlbW92ZUxhYmVsIiwiY3VzdG9tR2F0ZXMiLCJjdXN0b21SYW5nZSIsIm1hcCIsImdhdGUiLCJuYW1lIiwicmFuZ2UiLCJTZWdtZW50YXRpb25NZW51IiwiZ2V0U2VnbWVudExpc3QiLCJlbmFibGVkRWxlbWVudCIsImdldEFjdGl2ZVZpZXdwb3J0RW5hYmxlZEVsZW1lbnQiLCJ2aWV3cG9ydHMiLCJhY3RpdmVJbmRleCIsInNlcmllc0luc3RhbmNlVWlkIiwiZ2V0U2VyaWVzSW5zdGFuY2VVaWRGcm9tRW5hYmxlZEVsZW1lbnQiLCJzZWdtZW50cyIsImFjdGl2ZVNlZ21lbnRJbmRleCIsImltcG9ydE1ldGFkYXRhIiwiY29uc3RydWN0b3IiLCJfaW1wb3J0TWV0YWRhdGEiLCJzZWdtZW50TGlzdCIsImRlbGV0ZUNvbmZpcm1hdGlvbk9wZW4iLCJzZWdtZW50VG9EZWxldGUiLCJvblNlZ21lbnRDaGFuZ2UiLCJvbkVkaXRDbGljayIsImNvbmZpcm1EZWxldGVPbkRlbGV0ZUNsaWNrIiwib25EZWxldGVDYW5jZWxDbGljayIsIm9uRGVsZXRlQ29uZmlybUNsaWNrIiwib25JT0NvbXBsZXRlIiwiX3NlZ21lbnRzIiwic2VnbWVudEluZGV4IiwiZWxlbWVudCIsIm1ldGFkYXRhIiwiZWRpdFNlZ21lbnRJbnB1dCIsImRlbGV0ZVNlZ21lbnQiLCJjb21wb25lbnQiLCJzZWdtZW50TGFiZWwiLCJmaW5kIiwic2VnbWVudCIsImluZGV4IiwiU2VnbWVudExhYmVsIiwibGFiZWwiLCJ0eXBlIiwibW9kaWZpZWQiLCJzZWdtZW50TWV0YWRhdGEiLCJpIiwibGVuZ3RoIiwicHVzaCIsIlNlZ21lbnRhdGlvbk1lbnVEZWxldGVDb25maXJtYXRpb24iLCJTZWdtZW50YXRpb25NZW51TGlzdEJvZHkiLCJvbkRlbGV0ZUNsaWNrIiwibmV3U2VnbWVudCIsIlNlZ21lbnRhdGlvbk1lbnVMaXN0SGVhZGVyIiwiU2VnbWVudGF0aW9uTWVudUxpc3RJdGVtIiwidHlwZVdpdGhNb2RpZmllciIsIlNlZ21lbnRlZFByb3BlcnR5VHlwZUNvZGVTZXF1ZW5jZSIsIkNvZGVNZWFuaW5nIiwibW9kaWZpZXIiLCJTZWdtZW50ZWRQcm9wZXJ0eVR5cGVNb2RpZmllckNvZGVTZXF1ZW5jZSIsImNoZWNrZWQiLCJjb2xvcm1hcCIsImFjdGl2ZUNvcm5lcnN0b25lQ29sb3JNYXAiLCJjb2xvciIsImdldENvbG9yIiwic2VnbWVudENvbG9yIiwic2VnbWVudENhdGVnb3J5IiwiU2VnbWVudGVkUHJvcGVydHlDYXRlZ29yeUNvZGVTZXF1ZW5jZSIsIl9nZXRUeXBlV2l0aE1vZGlmaWVyIiwiVE9PTEJBUl9CVVRUT05fVFlQRVMiLCJDT01NQU5EIiwiU0VUX1RPT0xfQUNUSVZFIiwiaWQiLCJwcmVSZWdpc3RyYXRpb24iLCJjb25maWd1cmF0aW9uIiwiaW5pdCIsImdldENvbW1hbmRzTW9kdWxlIiwiZGVmYXVsdENvbnRleHQiLCJhY3Rpb25zIiwiZGVmaW5pdGlvbnMiLCJnZXRUb29sYmFyTW9kdWxlIiwiaWNvbiIsImJ1dHRvbnMiLCJjb21tYW5kTmFtZSIsImNvbW1hbmRPcHRpb25zIiwidG9vbE5hbWUiLCJUT09MX05BTUVTIiwiRlJFRUhBTkRfUk9JXzNEX1RPT0wiLCJGUkVFSEFORF9ST0lfM0RfU0NVTFBUT1JfVE9PTCIsIkJSVVNIXzNEX1RPT0wiLCJCUlVTSF8zRF9IVV9HQVRFRF9UT09MIiwiQlJVU0hfM0RfQVVUT19HQVRFRF9UT09MIiwiZ2V0UGFuZWxNb2R1bGUiLCJtZW51T3B0aW9ucyIsImNvbXBvbmVudHMiLCJkZWZhdWx0Q29uZmlnIiwibWF4UmFkaXVzIiwiaW50ZXJwb2xhdGUiLCJzaG93RnJlZWhhbmRTdGF0cyIsImJydXNoM2RUb29sTmFtZSIsImJydXNoM0RIVUdhdGVkVG9vbE5hbWUiLCJicnVzaDNEQXV0b0dhdGVkVG9vbCIsImZyZWVoYW5kUm9pM0RUb29sIiwiZnJlZWhhbmRSb2kzRFNjdWxwdG9yVG9vbCIsImNvbmZpZyIsIk9iamVjdCIsImFzc2lnbiIsImV4dGVuZEJydXNoTW9kdWxlIiwicmVnaXN0ZXIiLCJmcmVlaGFuZDNETW9kdWxlIiwiZnJlZWhhbmQzRFN0b3JlIiwiZnJlZWhhbmQzRCIsImRpc3BsYXlTdGF0cyIsImFkZFRvb2wiLCJCcnVzaDNEVG9vbCIsIkJydXNoM0RIVUdhdGVkVG9vbCIsIkJydXNoM0RBdXRvR2F0ZWRUb29sIiwiRnJlZWhhbmRSb2kzRFRvb2wiLCJGcmVlaGFuZFJvaTNEU2N1bHB0b3JUb29sIiwicmVmZXJlbmNlZFRvb2xOYW1lIiwiYWN0aXZlR2F0ZVJhbmdlIiwiZ2F0ZUluZGV4IiwiZmluZEluZGV4IiwibWluIiwibWF4IiwiaW1wb3J0IiwiaW1wb3J0TW9kaWZpZWQiLCJzZXJpZXNDb2xsZWN0aW9uIiwiY2hlY2siLCJvYmplY3QiLCJFcnJvciIsImdldFNlcmllcyIsInNlcmllcyIsInVpZCIsImdldFN0cnVjdHVyZVNldCIsInN0cnVjdHVyZVNldFVpZCIsInN0cnVjdHVyZVNldENvbGxlY3Rpb24iLCJzdHJ1Y3R1cmVTZXQiLCJnZXRST0lDb250b3VyIiwiUk9JQ29udG91clVpZCIsIlJPSUNvbnRvdXJDb2xsZWN0aW9uIiwiUk9JQ29udG91ciIsImdldFJPSUNvbnRvdXJJbmRleCIsImdldEFjdGl2ZVN0cnVjdHVyZVNldEluZGV4IiwiYWN0aXZlU3RydWN0dXJlU2V0SW5kZXgiLCJnZXRBY3RpdmVST0lDb250b3VySW5kZXgiLCJhY3RpdmVST0lDb250b3VySW5kZXgiLCJnZXRBY3RpdmVST0lDb250b3VyIiwidW5kZWZpbmVkIiwic2V0U2VyaWVzIiwic2V0U3RydWN0dXJlU2V0Iiwib3B0aW9ucyIsImdlbmVyYXRlVUlEIiwiaXNMb2NrZWQiLCJ2aXNpYmxlIiwic2V0Uk9JQ29udG91ciIsImdldE5leHRDb2xvciIsInBvbHlnb25Db3VudCIsInNldFJPSUNvbnRvdXJBbmRTZXRJbmRleEFjdGl2ZSIsInNldERlbGV0ZVJPSUZyb21TdHJ1Y3R1cmVTZXQiLCJST0lDb250b3VySW5kZXgiLCJzcGxpY2UiLCJzZXRTdHJ1Y3R1cmVTZXROYW1lIiwic2V0RGVsZXRlU3RydWN0dXJlU2V0Iiwic3RydWN0dXJlU2V0SW5kZXgiLCJzZXRST0lDb250b3VyTmFtZSIsInNldEFjdGl2ZVN0cnVjdHVyZVNldEluZGV4Iiwic2V0QWN0aXZlU3RydWN0dXJlU2V0Iiwic2V0QWN0aXZlUk9JQ29udG91ckluZGV4Iiwic2V0QWN0aXZlUk9JQ29udG91ciIsImluY3JlbWVudFBvbHlnb25Db3VudCIsImRlY3JlbWVudFBvbHlnb25Db3VudCIsImFjdGl2ZVJPSUNvbnRvdXIiLCJST0lDb250b3VyQW5kU2V0SW5kZXhBY3RpdmUiLCJkZWxldGVST0lGcm9tU3RydWN0dXJlU2V0IiwiZGVsZXRlU3RydWN0dXJlU2V0Iiwic3RydWN0dXJlU2V0TmFtZSIsIlJPSUNvbnRvdXJOYW1lIiwiYWN0aXZlU3RydWN0dXJlU2V0IiwidG9nZ2xlSW50ZXJwb2xhdGUiLCJ0b2dnbGVEaXNwbGF5U3RhdHMiLCJlbmFibGVkRWxlbWVudENhbGxiYWNrIiwiY29ybmVyc3RvbmUiLCJnZXRFbmFibGVkRWxlbWVudCIsImltYWdlIiwiaW1wb3J0Q29sb3JzIiwiY3VycmVudENvbG9ySW5kZXgiLCJpbXBvcnRJbnRlcm5hbE1vZHVsZSIsImdldENpcmNsZSIsImluaXRpYWxDb25maWd1cmF0aW9uIiwiX3NldEN1c3RvbUdhdGUiLCJfc3RhcnRQYWludGluZyIsImV2ZW50RGF0YSIsImRldGFpbCIsInJvd3MiLCJjb2x1bW5zIiwiY3VycmVudFBvaW50cyIsIngiLCJ5IiwicmFkaXVzIiwiaW1hZ2VQaXhlbERhdGEiLCJnZXRQaXhlbERhdGEiLCJyZXNjYWxlU2xvcGUiLCJzbG9wZSIsInJlc2NhbGVJbnRlcmNlcHQiLCJpbnRlcmNlcHQiLCJjaXJjbGUiLCJsbyIsImhpIiwicGl4ZWxWYWx1ZSIsImdhdGVWYWx1ZXMiLCJnYXRlZENpcmNsZUFycmF5IiwiX2NsZWFuR2F0ZWRDaXJjbGUiLCJkcmF3QnJ1c2hQaXhlbHMiLCJwb2ludGVyQXJyYXkiLCJfZ2F0ZUNpcmNsZSIsInBhaW50RXZlbnREYXRhIiwibGFiZWxtYXAzRCIsImN1cnJlbnRJbWFnZUlkSW5kZXgiLCJhY3RpdmVMYWJlbG1hcEluZGV4Iiwic2hvdWxkRXJhc2UiLCJ0cmlnZ2VyRXZlbnQiLCJFVkVOVFMiLCJMQUJFTE1BUF9NT0RJRklFRCIsInVwZGF0ZUltYWdlIiwiZ2F0ZVJhbmdlIiwiZGF0YSIsImVkZ2VQaXhlbHMiLCJ4U2l6ZSIsInlTaXplIiwiaiIsIl9nZXRCb3VuZGluZ0JveE9mQ2lyY2xlIiwiX2JveEdhdGVkQ2lyY2xlIiwiZ2V0dGVyIiwiX2Zsb29kRmlsbEVtcHR5UmVnaW9uc0Zyb21FZGdlcyIsIl9maW5kSG9sZXNBbmRSZWdpb25zIiwiaG9sZXMiLCJyZWdpb25zIiwibGFyZ2VzdFJlZ2lvbkFyZWEiLCJfZ2V0QXJlYU9mTGFyZ2VzdFJlZ2lvbiIsInIiLCJyZWdpb24iLCJwIiwiaG9sZSIsImZpbGxlZEdhdGVkQ2lyY2xlQXJyYXkiLCJVaW50OENsYW1wZWRBcnJheSIsIl9nZXRFZGdlUGl4ZWxzIiwicmVzdWx0IiwiZmxvb2RGaWxsIiwic2VlZCIsImZsb29kZWQiLCJrIiwiZ2V0QW5kQ2FjaGVMYWJlbG1hcDJEIiwiX2lzQ3RybERvd24iLCJhbHdheXNFcmFzZU9uQ2xpY2siLCJnZW5lcmF0ZUJydXNoTWV0YWRhdGEiLCJfcGFpbnQiLCJfZHJhd2luZyIsIl9zdGFydExpc3RlbmluZ0Zvck1vdXNlVXAiLCJCcnVzaFRvb2wiLCJnZXREZWZhdWx0RnJlZWhhbmRTY3VscHRlck1vdXNlVG9vbENvbmZpZ3VyYXRpb24iLCJhY3RpdmVNb3VzZVVwQ2FsbGJhY2siLCJjbG9zZXN0VG9vbEluZGV4IiwiX2dldENsb3Nlc3RGcmVlaGFuZFRvb2xPbkVsZW1lbnQiLCJ0b29sU3RhdGUiLCJnZXRUb29sU3RhdGUiLCJ0b29sRGF0YSIsInJlZmVyZW5jZWRTdHJ1Y3R1cmVTZXQiLCJob3ZlckNvbG9yIiwicmVmZXJlbmNlZFJPSUNvbnRvdXIiLCJjdXJyZW50VG9vbCIsIl9hY3RpdmUiLCJpc011bHRpUGFydFRvb2xBY3RpdmUiLCJfZ2V0TW91c2VMb2NhdGlvbiIsIl9pbnZhbGlkYXRlVG9vbERhdGEiLCJtb3VzZVVwUmVuZGVyIiwiX2RlYWN0aXZhdGVTY3VscHQiLCJwcmV2ZW50UHJvcGFnYXRpb24iLCJpbnZhbGlkYXRlZCIsImludGVycG9sYXRlZCIsIkZyZWVoYW5kUm9pU2N1bHB0b3JUb29sIiwibW91c2VMb2NhdGlvbiIsImhhbmRsZXMiLCJzdGFydCIsImhpZ2hsaWdodCIsImFjdGl2ZSIsIm1pblNwYWNpbmciLCJkcmFnQ29sb3IiLCJ0b29sQ29sb3JzIiwiZ2V0QWN0aXZlQ29sb3IiLCJnZXRUb29sQ29sb3IiLCJzaG93Q3Vyc29yT25Ib3ZlciIsImxpbWl0UmFkaXVzT3V0c2lkZVJlZ2lvbiIsImhvdmVyQ3Vyc29yRmFkZUFscGhhIiwiaG92ZXJDdXJzb3JGYWRlRGlzdGFuY2UiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImluc2VydE9yRGVsZXRlIiwiZnJlZWhhbmRBcmVhIiwiY2FsY3VsYXRlRnJlZWhhbmRTdGF0aXN0aWNzIiwiZHJhdyIsImRyYXdKb2luZWRMaW5lcyIsImRyYXdIYW5kbGVzIiwiZHJhd0xpbmtlZFRleHRCb3giLCJtb3ZlSGFuZGxlTmVhckltYWdlUG9pbnQiLCJnZXROZXdDb250ZXh0IiwibnVtYmVyc1dpdGhDb21tYXMiLCJwb2ludEluc2lkZUJvdW5kaW5nQm94IiwiY2FsY3VsYXRlU1VWIiwiZGVmYXVsdEZyZWVoYW5kQ29uZmlndXJhdGlvbiIsImFsd2F5c1Nob3dIYW5kbGVzIiwiX2ZyZWVoYW5kM0RTdG9yZSIsIl9vbk1lYXN1cmVtZW50UmVtb3ZlZCIsIl9kcmF3aW5nTW91c2VVcENhbGxiYWNrIiwiZ29vZEV2ZW50RGF0YSIsImVycm9yIiwibWVhc3VyZW1lbnREYXRhIiwicG9pbnRzIiwidGV4dEJveCIsImhhc01vdmVkIiwibW92ZXNJbmRlcGVuZGVudGx5IiwiZHJhd25JbmRlcGVuZGVudGx5IiwiYWxsb3dlZE91dHNpZGVJbWFnZSIsImhhc0JvdW5kaW5nQm94IiwiaW50ZXJhY3Rpb25UeXBlIiwiX2FkZEFuZFNldFZvbHVtZUlmTm9Wb2x1bWVzIiwiX3N0YXJ0RHJhd2luZyIsIl9hZGRQb2ludCIsImNvb3JkcyIsImhhbmRsZUNhbnZhcyIsInBpeGVsVG9DYW52YXMiLCJwb2ludCIsImRpc3RhbmNlIiwiY3VycmVudFRhcmdldCIsIm5lYXJieSIsIl9wb2ludE5lYXJIYW5kbGVBbGxUb29scyIsImV2ZW50IiwiY3RybEtleSIsImhhbmRsZU5lYXJieSIsImNhbGwiLCJ0b29sSW5kZXgiLCJoYW5kbGUiLCJtZXRhS2V5IiwiX3N3aXRjaFJPSUNvbnRvdXIiLCJkcmFnT3JpZ2luIiwiX21vZGlmeWluZyIsImN1cnJlbnRIYW5kbGUiLCJfYWN0aXZhdGVNb2RpZnkiLCJzZXJpZXNNb2R1bGUiLCJtZXRhRGF0YSIsImdldCIsImltYWdlSWQiLCJtb2RhbGl0eSIsImNvbnRleHQiLCJjYW52YXNDb250ZXh0IiwiY2FudmFzIiwibGluZVdpZHRoIiwidG9vbFN0eWxlIiwiZ2V0VG9vbFdpZHRoIiwiaXNST0lBY3RpdmUiLCJnZXRDb2xvcklmQWN0aXZlIiwiZmlsbENvbG9yIiwiaW52YWxpZEhhbmRsZVBsYWNlbWVudCIsImludmFsaWRDb2xvciIsImdldEZpbGxDb2xvciIsImdsb2JhbEFscGhhIiwiaW50ZXJwb2xhdGVkQWxwaGEiLCJsaW5lcyIsInBvbHlCb3VuZGluZ0JveCIsImZpbGwiLCJoYW5kbGVSYWRpdXMiLCJpbnRlcnBvbGF0ZWRIYW5kbGVSYWRpdXMiLCJhY3RpdmVIYW5kbGVSYWRpdXMiLCJjYW5Db21wbGV0ZSIsImNvbXBsZXRlSGFuZGxlUmFkaXVzIiwiYXJlYSIsIm1lYW5TdGREZXYiLCJtZWFuU3RkRGV2U1VWIiwiYm91bmRzIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwidG9wIiwiTWF0aCIsIndpZHRoIiwiYWJzIiwiaGVpZ2h0IiwicGl4ZWxzIiwiZ2V0UGl4ZWxzIiwibWVhbiIsInN0ZERldiIsImlzTmFOIiwiY29sdW1uUGl4ZWxTcGFjaW5nIiwicm93UGl4ZWxTcGFjaW5nIiwic2NhbGluZyIsInRleHQiLCJ0ZXh0Qm94VGV4dCIsInRleHRCb3hBbmNob3JQb2ludHMiLCJ0ZXh0TGluZXMiLCJtb1N1ZmZpeCIsIm1lYW5UZXh0IiwidG9GaXhlZCIsInN0ZERldlRleHQiLCJTVVZ0ZXh0Iiwic3VmZml4IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYXJlYVRleHQiLCJfZGVhY3RpdmF0ZURyYXciLCJ0b29sVHlwZSIsIl9jbG9zZVRvb2xJZkRyYXdpbmciLCJfYWRkTWVhc3VyZW1lbnRSZW1vdmVkTGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiTUVBU1VSRU1FTlRfUkVNT1ZFRCIsImFkZEV2ZW50TGlzdGVuZXIiLCJGcmVlaGFuZFJvaVRvb2wiLCJzcGFjaW5nIiwiY29tcGxldGVIYW5kbGVSYWRpdXNUb3VjaCIsIm1vZHVsZSIsImV4cG9ydHMiLCJvbkZsb29kIiwib25Cb3VuZGFyeSIsImVxdWFscyIsImRpYWdvbmFscyIsInN0YXJ0Tm9kZSIsInBlcm11dGF0aW9ucyIsInN0YWNrIiwidmlzaXRzIiwiaW5pdGlhbGl6ZSIsIm5vb3AiLCJkZWZhdWx0RXF1YWxzIiwicHJ1bmVkUGVybXV0YXRpb25zIiwibWFpbiIsImN1cnJlbnRBcmdzIiwiZmxvb2QiLCJwb3AiLCJib3VuZGFyaWVzIiwiam9iIiwiZ2V0QXJncyIsInByZWxldGdzIiwicHJldmlvdXNBcmdzIiwidmlzaXRlZCIsIm1hcmtBc1Zpc2l0ZWQiLCJtZW1iZXIiLCJtYXJrQXNGbG9vZGVkIiwicHVzaEFkamFjZW50IiwibWFya0FzQm91bmRhcnkiLCJrZXkiLCJub2RlIiwic2FmZWx5IiwiYXBwbHkiLCJwZXJtIiwibmV4dEFyZ3MiLCJzbGljZSIsImYiLCJhcmdzIiwiYSIsImIiLCJwZXJtdXRlIiwiZmlsdGVyIiwiY291bnQiLCJjb3VudE5vblplcm9lcyIsInBlcm1zIiwicGVybXV0YXRpb24iLCJzdHJpbmciLCJzcGxpdCIsImMiLCJwYXJzZUludCIsInBvdyIsImxwYWQiLCJ0b1N0cmluZyIsImNoYXJhY3RlciIsImFycmF5IiwiQXJyYXkiLCJwYWQiLCJqb2luIiwiaGFzT3duUHJvcGVydHkiLCJ1bnNoaWZ0IiwibmV3U2VnbWVudElucHV0Iiwic2VnSW5kZXgiLCJicnVzaE1ldGRhdGFJbnB1dCIsInNlZ21lbnRJbnB1dENhbGxiYWNrIiwiYWN0aXZlRWxlbWVudCIsImlzQXJyYXkiLCJudW1iZXJPZkNvbG9ycyIsImdldE51bWJlck9mQ29sb3JzIiwiY2F0ZWdvcnlVSUQiLCJ0eXBlVUlEIiwibW9kaWZpZXJVSUQiLCJjYWxsYmFjayIsIlBvbHlnb24iLCJzb3BJbnN0YW5jZVVpZCIsInBvbHlnb25VaWQiLCJmcmFtZU51bWJlciIsIl9wb2x5UG9pbnRzIiwiX2RlZXBDb3B5UG9pbnRzIiwiX3NvcEluc3RhbmNlVWlkIiwiX3Nlcmllc0luc3RhbmNlVWlkIiwiX3N0cnVjdHVyZVNldFVpZCIsIl9ST0lDb250b3VyVWlkIiwiX3BvbHlnb25VaWQiLCJfZnJhbWVOdW1iZXIiLCJfaW50ZXJwb2xhdGVkIiwicG9seVBvaW50cyIsImlzWiIsInoiLCJpbXBvcnRUeXBlIiwic29wSW5zdGFuY2VVSUQiLCJfZ2VuZXJhdGVQb2ludHMiLCJ0b0JlU2NhbGVkIiwiX2RlZXBDb3B5T25lUG9pbnQiLCJnbG9iYWxUb29sU3RhdGVNYW5hZ2VyIiwiZ2xvYmFsSW1hZ2VJZFNwZWNpZmljVG9vbFN0YXRlTWFuYWdlciIsImltYWdlSWRzIiwiX2dldEltYWdlSWRzT2ZBY3RpdmVTZXJpZXMiLCJST0lDb250b3VyRGF0YSIsIl9nZXRST0lDb250b3VyRGF0YSIsImV4dGVudCIsIl9nZXRFeHRlbnRPZlJlZ2lvbiIsInNsaWNlRWRpdGVkIiwiX2dldFNsaWNlUG9zaXRpb25PZlRvb2xEYXRhIiwiaW50ZXJwb2xhdGlvbkxpc3QiLCJfc2xpY2VOZWVkc0ludGVycG9sYXRpbmciLCJjb250b3VyUGFpciIsIl9nZXRCb3VuZGluZ1BhaXIiLCJfYXBwZW5kaW50ZXJwb2xhdGlvbkxpc3QiLCJjb250b3VycyIsInN0YWNrVG9vbFN0YXRlIiwidG9vbFN0YXRlTWFuYWdlciIsInNhdmVUb29sU3RhdGUiLCJpbWFnZVRvb2xTdGF0ZSIsImZyZWVoYW5kUm9pIiwiY29udG91ciIsImNvbnRvdXJzT25TbGljZSIsInNsaWNlSW5kZXgiLCJwYWlyIiwibGlzdCIsImNhbkludGVycG9sYXRlIiwiZFAiLCJnZW5lcmF0ZUludGVycG9sYXRpb25EYXRhIiwiX2xpbmVhcmx5SW50ZXJwb2xhdGVCZXR3ZWVuIiwiaW5kaWNpZXMiLCJjMSIsIl9nZW5lcmF0ZUNsb3NlZENvbnRvdXIiLCJjMiIsIl9nZW5lcmF0ZUludGVycG9sYXRpb25Db250b3VyUGFpciIsImMxSW50ZXJwIiwiYzJJbnRlcnAiLCJmb3JFYWNoIiwiX2xpbmVhcmx5SW50ZXJwb2xhdGVDb250b3VyIiwiYzFIYXNNb3JlTm9kZXMiLCJ6SW50ZXJwIiwiaW50ZXJwb2xhdGVkMkRDb250b3VyIiwiX2dlbmVyYXRlSW50ZXJwb2xhdGVkT3BlbkNvbnRvdXIiLCJjMU1ldGFkYXRhIiwiX2VkaXRJbnRlcnBvbGF0ZWRDb250b3VyIiwiX2FkZEludGVycG9sYXRlZENvbnRvdXIiLCJjdW1QZXJpbTEiLCJfZ2V0Q3VtdWxhdGl2ZVBlcmltZXRlciIsImN1bVBlcmltMiIsImludGVycE5vZGVzIiwiY2VpbCIsImN1bVBlcmltMU5vcm0iLCJfbm9ybWFsaXNlZEN1bXVsYXRpdmVQZXJpbWV0ZXIiLCJjdW1QZXJpbTJOb3JtIiwibnVtTm9kZXMxIiwibnVtTm9kZXMyIiwicGVyaW0xSW50ZXJwIiwiX2dldEludGVycG9sYXRlZFBlcmltIiwicGVyaW0ySW50ZXJwIiwicGVyaW0xSW5kIiwiX2dldEluZGljYXRvckFycmF5IiwicGVyaW0ySW5kIiwibm9kZXNQZXJTZWdtZW50MSIsIl9nZXROb2Rlc1BlclNlZ21lbnQiLCJub2Rlc1BlclNlZ21lbnQyIiwiYzFpIiwiX2dldFN1cGVyU2FtcGxlZENvbnRvdXIiLCJjMmkiLCJfc2hpZnRTdXBlclNhbXBsZWRDb250b3VySW5QbGFjZSIsIl9yZWR1Y2VDb250b3Vyc1RvT3JpZ2luTm9kZXMiLCJyZWZlcmVuY2VkVG9vbERhdGEiLCJwb2x5Z29uIiwiZ2V0RnJlZWhhbmRUb29sRGF0YSIsInRvb2xEYXRhSW5kZXgiLCJvbGRQb2x5Z29uIiwidXBkYXRlZFBvbHlnb24iLCJjMWlyIiwiYzJpciIsImNJbnRlcnAiLCJJIiwiYzFpTGVuZ3RoIiwib3B0aW1hbCIsInN0YXJ0aW5nTm9kZSIsInRvdGFsU3F1YXJlZFhZTGVuZ3RocyIsIkluZmluaXR5IiwiaXR0ZXJhdGlvbiIsIl9zaGlmdENpcmN1bGFyQXJyYXkiLCJhcnIiLCJmbG9vciIsIm5vZGVzUGVyU2VnbWVudCIsImNpIiwibiIsInhTcGFjaW5nIiwieVNwYWNpbmciLCJwZXJpbUludGVycCIsInBlcmltSW5kIiwiaWR4Iiwic29ydCIsInBlcmltSW5kU29ydGVkIiwiaW5kaWNpZXNPZk9yaWdpbk5vZGVzIiwicmVkdWNlIiwiZWxlbWVudFZhbHVlIiwibnVtTm9kZXMiLCJjdW1QZXJpbU5vcm0iLCJkaWZmIiwibGluc3BhY2UiLCJjb25jYXQiLCJjdW11bGF0aXZlUGVyaW1ldGVyIiwibGVuZ3RoT2ZTZWdtZW50Iiwic3FydCIsImN1bVBlcmltIiwiX3JldmVyc2VJZkFudGlDbG9ja3dpc2UiLCJjb250b3VyWE1lYW4iLCJnZXRTdW1SZWR1Y2VyIiwiY2hlY2tTdW0iLCJyZXZlcnNlIiwidG90YWwiLCJudW0iLCJjYXRlZ29yaWVzIiwiR2VuZXJhbEFuYXRvbXlMaXN0IiwiU2VnbWVudGF0aW9uQ29kZXMiLCJDYXRlZ29yeSIsImdlbmVyYXRlTWV0YWRhdGEiLCJjYXRlZ29yeSIsImNhdGVnb3JpZXNJIiwiQ29kZVZhbHVlIiwiVHlwZSIsInR5cGVzSSIsIkNvZGluZ1NjaGVtZURlc2lnbmF0b3IiLCJTZWdtZW50QWxnb3JpdGhtVHlwZSIsIm1vZGZpZXIiLCJNb2RpZmllciIsIm1vZGlmaWVySSIsIlJlY29tbWVuZGVkRGlzcGxheUNJRUxhYlZhbHVlIiwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWUiLCJkIiwiRGF0ZSIsImdldFRpbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInJlcGxhY2UiLCJyYW5kb20iLCJhY3RpdmVWaWV3cG9ydCIsImRvbSIsImdlbmVyYWxTZXJpZXNNb2R1bGUiLCJzZXJpZXNJbnN0YW5jZVVJRCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQSxJQUFNQSxJQUFJLHduc0pBQVY7QUF3a0lBLElBQU1DLFVBQVUsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILElBQVgsQ0FBbkI7QUFFZUMseUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFrSUE7QUFFQTs7Ozs7SUFJcUJHLEs7Ozs7O0FBQ25CLG1CQUF3QjtBQUFBLFFBQVpDLEtB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Qzs7Ozs7Ozs7Ozs7O0FDUkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVlLFNBQVNob0Isc0NBQVQsQ0FBZ0RMLGNBQWhELEVBQWdFO0FBQzdFLE1BQUksQ0FBQ0EsY0FBTCxFQUFxQjtBQUNuQjtBQUNEOztBQUVELE1BQU1zVixPQUFPLEdBQUd0VixjQUFjLENBQUM4SyxLQUFmLENBQXFCd0ssT0FBckM7QUFDQSxNQUFNZ1QsbUJBQW1CLEdBQUcxZCx1REFBVyxDQUFDd0ssUUFBWixDQUFxQkMsR0FBckIsQ0FBeUIscUJBQXpCLEVBQWdEQyxPQUFoRCxDQUE1QjtBQUVBLFNBQU9nVCxtQkFBbUIsQ0FBQ0MsaUJBQTNCO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUNYRCw4RDs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJvaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjb3JuZXJzdG9uZS1jb3JlXCIpLCByZXF1aXJlKFwiY29ybmVyc3RvbmUtbWF0aFwiKSwgcmVxdWlyZShcImNvcm5lcnN0b25lLXRvb2xzXCIpLCByZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJvaGlmLXNlZ21lbnRhdGlvbi1wbHVnaW5cIiwgW1wiY29ybmVyc3RvbmUtY29yZVwiLCBcImNvcm5lcnN0b25lLW1hdGhcIiwgXCJjb3JuZXJzdG9uZS10b29sc1wiLCBcInJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm9oaWYtc2VnbWVudGF0aW9uLXBsdWdpblwiXSA9IGZhY3RvcnkocmVxdWlyZShcImNvcm5lcnN0b25lLWNvcmVcIiksIHJlcXVpcmUoXCJjb3JuZXJzdG9uZS1tYXRoXCIpLCByZXF1aXJlKFwiY29ybmVyc3RvbmUtdG9vbHNcIiksIHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wib2hpZi1zZWdtZW50YXRpb24tcGx1Z2luXCJdID0gZmFjdG9yeShyb290W1wiY29ybmVyc3RvbmUtY29yZVwiXSwgcm9vdFtcImNvcm5lcnN0b25lLW1hdGhcIl0sIHJvb3RbXCJjb3JuZXJzdG9uZS10b29sc1wiXSwgcm9vdFtcInJlYWN0XCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Nvcm5lcnN0b25lX2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jb3JuZXJzdG9uZV9tYXRoX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY29ybmVyc3RvbmVfdG9vbHNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBqc29uID0gYHtcbiAgXCJTZWdtZW50YXRpb25DYXRlZ29yeVR5cGVDb250ZXh0TmFtZVwiOiBcIlNlZ21lbnRhdGlvbiBjYXRlZ29yeSBhbmQgdHlwZSAtIDNEIFNsaWNlciBHZW5lcmFsIEFuYXRvbXkgbGlzdFwiLFxuICBcIkBzY2hlbWFcIjogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vcWlpY3IvZGNtcWkvbWFzdGVyL2RvYy9zY2hlbWFzL3NlZ21lbnQtY29udGV4dC1zY2hlbWEuanNvbiNcIixcbiAgXCJTZWdtZW50YXRpb25Db2Rlc1wiOiB7XG4gICAgXCJDYXRlZ29yeVwiOiBbXG4gICAgICB7XG4gICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJUaXNzdWVcIixcbiAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI4NTc1NjAwN1wiLFxuICAgICAgICBcImNpZFwiOiBcIjcwNTFcIixcbiAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDQwMzAwXCIsXG4gICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EMDA1MFwiLFxuICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJTZWdtZW50YXRpb24gUHJvcGVydHkgQ2F0ZWdvcmllc1wiLFxuICAgICAgICBcIlR5cGVcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxMjgsXG4gICAgICAgICAgICAgIDE3NCxcbiAgICAgICAgICAgICAgMTI4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlRpc3N1ZVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJ0aXNzdWVcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2NlwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDQwMzAwXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDAwNTBcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiODU3NTYwMDdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIxNixcbiAgICAgICAgICAgICAgMTAxLFxuICAgICAgICAgICAgICA3OVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJBcnRlcnlcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiYXJ0ZXJ5XCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDU1NTgwNlwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTQxMDY2XCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI3NTk4OTAwNlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjMwLFxuICAgICAgICAgICAgICAyMjAsXG4gICAgICAgICAgICAgIDcwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkJvZHkgZmF0XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImZhdFwiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTY2XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAzNDQzMzVcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRi0wM0QzOFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDgzMDAwMDlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDI0MSxcbiAgICAgICAgICAgICAgMjE0LFxuICAgICAgICAgICAgICAxNDVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQm9uZVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJib25lXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDI2Mjk1MFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQwMTZFXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI3MjY3MzAwMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTgzLFxuICAgICAgICAgICAgICAxNTYsXG4gICAgICAgICAgICAgIDIyMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJDYXBpbGxhcnlcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiY2FwaWxsYXJ5XCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwNjkwMVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTQwMDUwXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjIwOTgyMDAwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxMTEsXG4gICAgICAgICAgICAgIDE4NCxcbiAgICAgICAgICAgICAgMjEwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkNhcnRpbGFnZVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJjYXJ0aWxhZ2VcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2NlwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDA3MzAxXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDAyMUJcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzA5MzEyMDA0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxMTEsXG4gICAgICAgICAgICAgIDE4NCxcbiAgICAgICAgICAgICAgMjEwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkNvbm5lY3RpdmUgdGlzc3VlXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImNvbm5lY3RpdmUgdGlzc3VlXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwOTc4MFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTFBMjAwXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjIxNzkzMDA0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxODMsXG4gICAgICAgICAgICAgIDIxNCxcbiAgICAgICAgICAgICAgMjExXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxpZ2FtZW50XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxpZ2FtZW50XCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyMzY4NVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTE4MDEwXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjUyMDgyMDA1XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICA2OCxcbiAgICAgICAgICAgICAgMTcyLFxuICAgICAgICAgICAgICAxMDBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTHltcGggbm9kZVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJseW1waCBub2RlXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyNDIwNFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUM0MDAwXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjU5NDQxMDAxXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxMTEsXG4gICAgICAgICAgICAgIDE5NyxcbiAgICAgICAgICAgICAgMTMxXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkx5bXBoYXRpYyB2ZXNzZWxcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibHltcGhhdGljIHZlc3NlbFwiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTY2XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjk4ODlcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1DNjAxMFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI4MzU1NTAwNlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTc4LFxuICAgICAgICAgICAgICAyMTIsXG4gICAgICAgICAgICAgIDI0MlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJNZW5pc2N1c1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJtZW5pc2N1c1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTY2XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjQ0OThcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0xNTAwOVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NDEzNTAwNFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTkyLFxuICAgICAgICAgICAgICAxMDQsXG4gICAgICAgICAgICAgIDg4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk11c2NsZVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJtdXNjbGVcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2NlwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDI2ODQ1XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMTMwMDFcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzE2MTYwMDRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDI0NCxcbiAgICAgICAgICAgICAgMjE0LFxuICAgICAgICAgICAgICA0OVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJOZXJ2ZVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJuZXJ2ZVwiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTY2XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzEyNjgxNjlcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EMDU5OFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxMTk0MTAwMDJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIyMSxcbiAgICAgICAgICAgICAgMTMwLFxuICAgICAgICAgICAgICAxMDFcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiT3JnYW5cIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwib3JnYW5cIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2NlwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMxMjg1MDkyXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMUEzMTBcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjg2MTAwMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTc3LFxuICAgICAgICAgICAgICAxMjIsXG4gICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJTa2luXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInNraW5cIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2NlwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMxMTIzMDIzXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMDEwMDBcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzk5MzcwMDFcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE1MixcbiAgICAgICAgICAgICAgMTg5LFxuICAgICAgICAgICAgICAyMDdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVGVuZG9uXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInRlbmRvblwiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTY2XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzk1MDhcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0xNzAxMFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxMzAyNDAwMlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMTUxLFxuICAgICAgICAgICAgICAyMDZcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVmVpblwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJ2ZWluXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDQ0NzE0NlwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTQ4MDZFXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjE4MTM3ODAwOVwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcInNob3dBbmF0b215XCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJBbmF0b21pY2FsIFN0cnVjdHVyZVwiLFxuICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjEyMzAzNzAwNFwiLFxuICAgICAgICBcImNpZFwiOiBcIjcwNTFcIixcbiAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMxMjY4MDg2XCIsXG4gICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EMDAwQVwiLFxuICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJTZWdtZW50YXRpb24gUHJvcGVydHkgQ2F0ZWdvcmllc1wiLFxuICAgICAgICBcIlR5cGVcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxNzcsXG4gICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgMTAxXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU0XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImFiZG9tZW5cIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1ENDAwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDAwNzI2XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQWJkb21lblwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQWJkb21pbmFsIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjExMzM0NTAwMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTg2LFxuICAgICAgICAgICAgICAxMjQsXG4gICAgICAgICAgICAgIDE2MVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJhYmRvbWluYWwgY2F2aXR5XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDQwMTBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIzMDE2OFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkFiZG9taW5hbCBjYXZpdHlcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkFiZG9taW5hbCBPcmdhbiBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1MjczMTAwNFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTcxLFxuICAgICAgICAgICAgICA4NSxcbiAgICAgICAgICAgICAgNjhcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTRcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibXVzY2xlcyBvZiBhYmRvbWluYWwgd2FsbFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTE0MDAxXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzEyNzkzODVcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJBYmRvbWluYWwgd2FsbCBtdXNjbGVcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkFiZG9taW5hbCBPcmdhbiBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxOTU4NzkwMDBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDYwLFxuICAgICAgICAgICAgICAxNDMsXG4gICAgICAgICAgICAgIDgzXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImFkZW5vaHlwb3BoeXNpc1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUIxMTAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzIwMDhcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJBZGVub2h5cG9waHlzaXNcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNjI4MTgwMDFcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQWJkb21pbmFsIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU0XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQWRyZW5hbCBnbGFuZFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMDE2MjVcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1CMzAwMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDI0OSxcbiAgICAgICAgICAgICAgICAgIDE4NixcbiAgICAgICAgICAgICAgICAgIDE1MFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBhZHJlbmFsIGdsYW5kXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMjQ5LFxuICAgICAgICAgICAgICAgICAgMTg2LFxuICAgICAgICAgICAgICAgICAgMTUwXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgYWRyZW5hbCBnbGFuZFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjIzNDUxMDA3XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJBbXlnZGFsYVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMDI3MDhcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMzIzMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDk4LFxuICAgICAgICAgICAgICAgICAgMTUzLFxuICAgICAgICAgICAgICAgICAgMTEyXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGFteWdkYWxvaWQgY29tcGxleFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDk4LFxuICAgICAgICAgICAgICAgICAgMTUzLFxuICAgICAgICAgICAgICAgICAgMTEyXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgYW15Z2RhbG9pZCBjb21wbGV4XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNDk1ODAwMlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgICAyMjQsXG4gICAgICAgICAgICAgIDE5OVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJhbnVzXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNTk5MDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwMzQ2MVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkFudXNcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNTM1MDUwMDZcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIyNCxcbiAgICAgICAgICAgICAgOTcsXG4gICAgICAgICAgICAgIDc2XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUyXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImFvcnRhXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNDIwMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwMzQ4M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkFvcnRhXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDYXJkaWFjIFN0cnVjdHVyZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxNTgyNTAwM1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjE4LFxuICAgICAgICAgICAgICAxMjMsXG4gICAgICAgICAgICAgIDk3XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI2MTEzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImFvcnRpYyB2YWx2ZVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTM1NDAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMDM1MDFcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJBb3J0aWMgVmFsdmVcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIk1lZGlhc3RpbnVtIEFuYXRvbXkgRmluZGluZyBvciBGZWF0dXJlXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzQyMDIwMDdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgICAgMjQ0LFxuICAgICAgICAgICAgICAyMDlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiYXJhY2hub2lkXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTEyMjBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwMzcwN1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkFyYWNobm9pZFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NTA0MjAwOFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQXJjdWF0ZSBGYXNjaWN1bHVzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJGTUFcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMjMyOTYzM1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCIyNzY2NTBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxMjUsXG4gICAgICAgICAgICAgICAgICAxMDIsXG4gICAgICAgICAgICAgICAgICAxNTRcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgYXJjdWF0ZSBmYXNjaWN1bHVzXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTI1LFxuICAgICAgICAgICAgICAgICAgMTAyLFxuICAgICAgICAgICAgICAgICAgMTU0XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgYXJjdWF0ZSBmYXNjaWN1bHVzXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAgIDIyNixcbiAgICAgICAgICAgICAgNzdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjdcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiYXV0b25vbWljIG5lcnZlXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTk2MDVcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNjI1MFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkF1dG9ub21pYyBuZXJ2ZVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiUGVyaXBoZXJhbCBOZXJ2b3VzIFN5c3RlbSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1MzUyMDAwMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMTQ1LFxuICAgICAgICAgICAgICAzMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJiaWxpYXJ5IHRyZWVcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC02MDYxMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDA1NDAwXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQmlsZSBEdWN0XCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJBYmRvbWluYWwgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjgyNzMwMDBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIyMixcbiAgICAgICAgICAgICAgMTU0LFxuICAgICAgICAgICAgICAxMzJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjBcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwidXJpbmFyeSBibGFkZGVyXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNzQwMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwNTY4MlwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkJsYWRkZXJcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlBlbHZpYyBPcmdhbiBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI4OTgzNzAwMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgICAyMzksXG4gICAgICAgICAgICAgIDE3MlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJza2VsZXRvbiBvZiB0aG9yYXhcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EMDE3MFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwNDQ4MTU3XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQm9uZSBvZiB0aG9yYXhcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlRob3JhY2ljIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNzI3MTAwMDRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDI0MixcbiAgICAgICAgICAgICAgMjA2LFxuICAgICAgICAgICAgICAxNDJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMjhcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwic2tlbGV0b24gb2YgbmVja1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQwMDZEXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzA3MzAxMzBcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJCb25lIHN0cnVjdHVyZSBvZiBoZWFkIGFuZC9vciBuZWNrXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDcmFuaW9mYWNpYWwgQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjMxMjc3OTAwOVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjUwLFxuICAgICAgICAgICAgICAyNTAsXG4gICAgICAgICAgICAgIDIyNVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJicmFpblwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEwMTAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMDYxMDRcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJCcmFpblwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxMjczODAwNlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgODUsXG4gICAgICAgICAgICAgIDE4OCxcbiAgICAgICAgICAgICAgMjU1XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIkNTRiBzcGFjZVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEwMTA5XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzA0NTkzODdcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJCcmFpbiBjZXJlYnJvc3BpbmFsIGZsdWlkIHBhdGh3YXlcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjgwMzcxMDA5XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICA4OCxcbiAgICAgICAgICAgICAgMTA2LFxuICAgICAgICAgICAgICAyMTVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwidmVudHJpY2xlcyBvZiBicmFpblwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUExNjAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMDc3OTlcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJCcmFpbiB2ZW50cmljbGVcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzU3NjQwMDJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkNhdWRhdGUgbnVjbGV1c1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMDc0NjFcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMzIwMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDMwLFxuICAgICAgICAgICAgICAgICAgMTExLFxuICAgICAgICAgICAgICAgICAgODVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgY2F1ZGF0ZSBudWNsZXVzXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMzAsXG4gICAgICAgICAgICAgICAgICAxMTEsXG4gICAgICAgICAgICAgICAgICA4NVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGNhdWRhdGUgbnVjbGV1c1wiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjExMDAwMDA0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyNDQsXG4gICAgICAgICAgICAgIDIxNCxcbiAgICAgICAgICAgICAgNDlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiY2VudHJhbCBuZXJ2b3VzIHN5c3RlbVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEwMDkwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzA5MjcyMzJcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJDZW50cmFsIG5lcnZvdXMgc3lzdGVtXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjIxNDgzMDA1XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxOTQsXG4gICAgICAgICAgICAgIDE5NSxcbiAgICAgICAgICAgICAgMTY0XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImNlcmViZWxsYXIgd2hpdGUgbWF0dGVyXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTYwODBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDE1MjM4MVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkNlcmViZWxsYXIgd2hpdGUgbWF0dGVyXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjMzMDYwMDA0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICA4OCxcbiAgICAgICAgICAgICAgMTA2LFxuICAgICAgICAgICAgICAyMTVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiY2VyZWJyYWwgYXF1ZWR1Y3RcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMTgwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDA3NzY5XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQ2VyZWJyYWwgYXF1ZWR1Y3RcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiODA0NDcwMDBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkNlcmVicmFsIGZvcm5peFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAxNTIzMzRcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMjk3MFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDY0LFxuICAgICAgICAgICAgICAgICAgMTIzLFxuICAgICAgICAgICAgICAgICAgMTQ3XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGZvcm5peFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDY0LFxuICAgICAgICAgICAgICAgICAgMTIzLFxuICAgICAgICAgICAgICAgICAgMTQ3XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgZm9ybml4XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiODc0NjMwMDVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDEyOCxcbiAgICAgICAgICAgICAgMTc0LFxuICAgICAgICAgICAgICAxMjhcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiY2VyZWJyYWwgY29ydGV4XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTIwMjBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwNzc3NlwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkNlcmVicmFsIEdyZXkgTWF0dGVyXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjQwMTQ2MDAxXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyNTAsXG4gICAgICAgICAgICAgIDI1MCxcbiAgICAgICAgICAgICAgMjI1XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImNlcmVicmFsIHdoaXRlIG1hdHRlclwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEyMDMwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAxNTIyOTVcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJDZXJlYnJhbCBXaGl0ZSBNYXR0ZXJcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNjg1MjMwMDNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgICAyMDdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMzFcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiY2VydmljYWwgdmVydGVicmFsIGNvbHVtblwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTExNTAxXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzA3Mjg5ODVcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJDZXJ2aWNhbCBzcGluZVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxMjI0OTQwMDVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE4OCxcbiAgICAgICAgICAgICAgOTUsXG4gICAgICAgICAgICAgIDc2XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU1XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIm11c2NsZXMgb2YgdGhvcmFjaWMgd2FsbFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTE0MTIyXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzEyNjk4MjVcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJDaGVzdCB3YWxsIG11c2NsZVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiVGhvcmFjaWMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjM3MjA3NDAwNlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQ2luZ3VsdW1cIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjI4MjcyXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTI4NDBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNTQsXG4gICAgICAgICAgICAgICAgICAxNDYsXG4gICAgICAgICAgICAgICAgICA4M1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBjaW5ndWx1bSBidW5kbGVcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNTQsXG4gICAgICAgICAgICAgICAgICAxNDYsXG4gICAgICAgICAgICAgICAgICA4M1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGNpbmd1bHVtIGJ1bmRsZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjM3MDM1MDAwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlRob3JhY2ljIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkNsYXZpY2xlXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwODkxM1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTEyMzEwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMjA1LFxuICAgICAgICAgICAgICAgICAgMTc5LFxuICAgICAgICAgICAgICAgICAgMTA4XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGNsYXZpY2xlXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMjA1LFxuICAgICAgICAgICAgICAgICAgMTc5LFxuICAgICAgICAgICAgICAgICAgMTA4XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgY2xhdmljbGVcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1MTI5OTAwNFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjA0LFxuICAgICAgICAgICAgICAxNjgsXG4gICAgICAgICAgICAgIDE0M1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJjb2xvblwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTU5MzAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMDkzNjhcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJDb2xvblwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3MTg1NDAwMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgOTcsXG4gICAgICAgICAgICAgIDExMyxcbiAgICAgICAgICAgICAgMTU4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImNvcnB1cyBjYWxsb3N1bVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEyNzAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTAwOTBcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJDb3JwdXMgY2FsbG9zdW1cIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiODg0NDIwMDVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkNvcnB1cyBzdHJpYXR1bVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTAwOTdcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMzEwMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgICAgIDE0MCxcbiAgICAgICAgICAgICAgICAgIDE5MFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBzdHJpYXR1bVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgICAgIDE0MCxcbiAgICAgICAgICAgICAgICAgIDE5MFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IHN0cmlhdHVtXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzE0MjgwMDhcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgICAgMjM0LFxuICAgICAgICAgICAgICA5MlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2N1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJjcmFuaWFsIG5lcnZlc1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUE4MDAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTAyNjhcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJDcmFuaWFsIG5lcnZlXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJQZXJpcGhlcmFsIE5lcnZvdXMgU3lzdGVtIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI1MjM4MDAzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJEaWVuY2VwaGFsb25cIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDEyMTQ0XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTAxMDJcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICA2OSxcbiAgICAgICAgICAgICAgICAgIDExMCxcbiAgICAgICAgICAgICAgICAgIDUzXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImRpZW5jZXBoYWxvblwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiODc1NjMwMDhcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgICAgMjUzLFxuICAgICAgICAgICAgICAyMjlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMzFcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiZHVvZGVudW1cIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC01ODIwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDEzMzAzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiRHVvZGVudW1cIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzg4NDgwMDRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgICAgMjQ0LFxuICAgICAgICAgICAgICAyMDlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiZHVyYSBtYXRlclwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUExMTIwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTMzMTNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJEdXJhIG1hdGVyXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjE4NTQ1MDAwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyMTEsXG4gICAgICAgICAgICAgIDE3MSxcbiAgICAgICAgICAgICAgMTQzXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU1XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImVzb3BoYWd1c1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTU2MDAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTQ4NzZcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJFc29waGFndXNcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlRob3JhY2ljIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzMjg0OTAwMlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDcmFuaW9mYWNpYWwgQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDI4XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiRXh0ZXJuYWwgZWFyXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAxMzQ1M1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUFCMTAwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTc0LFxuICAgICAgICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgICAgICAgOTBcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgZXh0ZXJuYWwgZWFyXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTc0LFxuICAgICAgICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgICAgICAgOTBcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBleHRlcm5hbCBlYXJcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyODM0NzAwOFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDcmFuaW9mYWNpYWwgQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDI4XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiRXllYmFsbFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjkyNDJcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BQTc3MFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE5NCxcbiAgICAgICAgICAgICAgICAgIDE0MixcbiAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgZXllYmFsbFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE5NCxcbiAgICAgICAgICAgICAgICAgIDE0MixcbiAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBleWViYWxsXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzk2NTIwMDNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE4NSxcbiAgICAgICAgICAgICAgMTM1LFxuICAgICAgICAgICAgICAxMzRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjBcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiZmVtYWxlIGV4dGVybmFsIGdlbml0YWxpYVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTgwMDEwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjc3NDdcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJGZW1hbGUgZXh0ZXJuYWwgZ2VuaXRhbGlhXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJQZWx2aWMgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiODY5NjkwMDhcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDI0NCxcbiAgICAgICAgICAgICAgMTcwLFxuICAgICAgICAgICAgICAxNDdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjBcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiZmVtYWxlIGludGVybmFsIGdlbml0YWxpYVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTgwMDIwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjc3NDhcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJGZW1hbGUgaW50ZXJuYWwgZ2VuaXRhbGlhXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJQZWx2aWMgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiODc3NTkwMDRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkZvb3RcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDE2NTA0XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDk3MDBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNzcsXG4gICAgICAgICAgICAgICAgICAxMjIsXG4gICAgICAgICAgICAgICAgICAxMDFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgZm9vdFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGZvb3RcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1NjQ1OTAwNFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDMxXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiRm9yZWFybVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTY1MzZcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EODUwMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBmb3JlYXJtXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTc3LFxuICAgICAgICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgICAgICAgMTAxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgZm9yZWFybVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjE0OTc1MDA4XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICA4OCxcbiAgICAgICAgICAgICAgMTA2LFxuICAgICAgICAgICAgICAyMTVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiZm91cnRoIHZlbnRyaWNsZVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUExODIwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAxNDk1NTZcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJGb3VydGggdmVudHJpY2xlXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjM1OTE4MDAyXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNyYW5pb2ZhY2lhbCBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMjhcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJGcm9udGFsIGJvbmVcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDE2NzMyXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMTExMTBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAyMDMsXG4gICAgICAgICAgICAgICAgICAxNzksXG4gICAgICAgICAgICAgICAgICA3N1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBmcm9udGFsIGJvbmVcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAyMDMsXG4gICAgICAgICAgICAgICAgICAxNzksXG4gICAgICAgICAgICAgICAgICA3N1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGZyb250YWwgYm9uZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc0ODcyMDA4XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJGcm9udGFsIGxvYmVcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDE2NzMzXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTIyMDBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICA4MyxcbiAgICAgICAgICAgICAgICAgIDE0NixcbiAgICAgICAgICAgICAgICAgIDE2NFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBmcm9udGFsIGxvYmVcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICA4MyxcbiAgICAgICAgICAgICAgICAgIDE0NixcbiAgICAgICAgICAgICAgICAgIDE2NFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGZyb250YWwgbG9iZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjgzMjUxMDAxXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxMzksXG4gICAgICAgICAgICAgIDE1MCxcbiAgICAgICAgICAgICAgOThcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwNDBcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiZ2FsbGJsYWRkZXJcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC02MzAwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDE2OTc2XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiR2FsbGJsYWRkZXJcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkVuZG9zY29weSBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjgyMzEwMDhcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkdsb2J1cyBwYWxsaWR1c1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTc2NTFcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMzUwMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDQ4LFxuICAgICAgICAgICAgICAgICAgMTI5LFxuICAgICAgICAgICAgICAgICAgMTI2XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IHBhbGxpZHVtXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgNDgsXG4gICAgICAgICAgICAgICAgICAxMjksXG4gICAgICAgICAgICAgICAgICAxMjZcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBwYWxsaWR1bVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjE0NzM4MDA1XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMzFcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJIYW5kXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAxODU2M1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQ4NzAwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTc3LFxuICAgICAgICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgICAgICAgMTAxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGhhbmRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNzcsXG4gICAgICAgICAgICAgICAgICAxMjIsXG4gICAgICAgICAgICAgICAgICAxMDFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBoYW5kXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiODU1NjIwMDRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgICAxMDFcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMzFcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiaGVhZFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQxMTAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTg2NzBcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJIZWFkXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjY5NTM2MDA1XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyMDYsXG4gICAgICAgICAgICAgIDExMCxcbiAgICAgICAgICAgICAgODRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTJcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiaGVhcnRcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0zMjAwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDE4Nzg3XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiSGVhcnRcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNhcmRpYWMgU3RydWN0dXJlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjgwODkxMDA5XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyNTAsXG4gICAgICAgICAgICAgIDIxMCxcbiAgICAgICAgICAgICAgMTM5XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDI4XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImh5b2lkIGJvbmVcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0xMTE5MFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDIwNDE3XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiSHlvaWQgYm9uZVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ3JhbmlvZmFjaWFsIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyMTM4NzAwNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiSW5mZXJpb3IgY2VyZWJlbGxhciBwZWR1bmNsZVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAxNTIzOTNcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BNjY0MFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE4NixcbiAgICAgICAgICAgICAgICAgIDEzNSxcbiAgICAgICAgICAgICAgICAgIDEzNVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBpbmZlcmlvciBjZXJlYmVsbGFyIHBlZHVuY2xlXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTg2LFxuICAgICAgICAgICAgICAgICAgMTM1LFxuICAgICAgICAgICAgICAgICAgMTM1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgaW5mZXJpb3IgY2VyZWJlbGxhciBwZWR1bmNsZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjY3NzAxMDAxXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJJbmZlcmlvciBsb25naXR1ZGluYWwgZmFzY2ljdWx1c1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjgyNzNcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMjg1MFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE1OSxcbiAgICAgICAgICAgICAgICAgIDExNixcbiAgICAgICAgICAgICAgICAgIDE2M1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBpbmZlcmlvciBsb25naXR1ZGluYWwgZmFzY2ljdWx1c1wiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE1OSxcbiAgICAgICAgICAgICAgICAgIDExNixcbiAgICAgICAgICAgICAgICAgIDE2M1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGluZmVyaW9yIGxvbmdpdHVkaW5hbCBmYXNjaWN1bHVzXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNTUyMzMwMDVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ3JhbmlvZmFjaWFsIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAyOFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIklubmVyIGVhclwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMjI4ODlcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BQjcwMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDIyOSxcbiAgICAgICAgICAgICAgICAgIDE0NyxcbiAgICAgICAgICAgICAgICAgIDExOFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBpbm5lciBlYXJcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAyMjksXG4gICAgICAgICAgICAgICAgICAxNDcsXG4gICAgICAgICAgICAgICAgICAxMThcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBpbm5lciBlYXJcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyMjk0NTAwMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiSW5zdWxhXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyMTY0MFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEyNjEwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTg4LFxuICAgICAgICAgICAgICAgICAgMTM1LFxuICAgICAgICAgICAgICAgICAgMTY2XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGluc3VsYXIgbG9iZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE4OCxcbiAgICAgICAgICAgICAgICAgIDEzNSxcbiAgICAgICAgICAgICAgICAgIDE2NlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGluc3VsYXIgbG9iZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjM2MTY5MDA4XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyMzMsXG4gICAgICAgICAgICAgIDEzOCxcbiAgICAgICAgICAgICAgMTEyXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI2MTE2XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImF0cmlhbCBzZXB0dW1cIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0zMjE1MFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjI1ODM2XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiSW50ZXJhdHJpYWwgc2VwdHVtXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJNdXNjdWxhciBBbmF0b215XCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNTgwOTUwMDZcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE5NSxcbiAgICAgICAgICAgICAgMTAwLFxuICAgICAgICAgICAgICA3M1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNjExNlwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJ2ZW50cmljdWxhciBzZXB0dW1cIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0zMjQxMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjI1ODcwXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiSW50ZXJ2ZW50cmljdWxhciBzZXB0dW1cIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIk11c2N1bGFyIEFuYXRvbXlcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1ODkwMDFcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQWJkb21pbmFsIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU0XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiS2lkbmV5XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyMjY0NlwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTcxMDAwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTg1LFxuICAgICAgICAgICAgICAgICAgMTAyLFxuICAgICAgICAgICAgICAgICAgODNcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQga2lkbmV5XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTg1LFxuICAgICAgICAgICAgICAgICAgMTAyLFxuICAgICAgICAgICAgICAgICAgODNcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBraWRuZXlcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI2NDAzMzAwN1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJFbmRvc2NvcHkgQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDQwXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiS25lZVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzE0NTY3OThcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EOTIwMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBrbmVlXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTc3LFxuICAgICAgICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgICAgICAgMTAxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQga25lZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjcyNjk2MDAyXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNyYW5pb2ZhY2lhbCBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMjhcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMYWNyaW1hbCBib25lXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIyMjczM1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTExMTVBXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgICAgICAgMjUwLFxuICAgICAgICAgICAgICAgICAgMTYwXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGxhY3JpbWFsIGJvbmVcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjYyMjkwMDdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE1MCxcbiAgICAgICAgICAgICAgMjA4LFxuICAgICAgICAgICAgICAyNDNcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwNDBcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGFyeW54XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMjQxMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyMzA3OFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxhcnlueFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiRW5kb3Njb3B5IEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI0NTk2MDA5XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMYXRlcmFsIGNvcnRpY29zcGluYWwgdHJhY3RcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMTUyNDAyXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTcwOTNcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAyMDEsXG4gICAgICAgICAgICAgICAgICAxNjAsXG4gICAgICAgICAgICAgICAgICAxMzNcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgY29ydGljb3NwaW5hbCB0cmFjdFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDIwMSxcbiAgICAgICAgICAgICAgICAgIDE2MCxcbiAgICAgICAgICAgICAgICAgIDEzM1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGNvcnRpY29zcGluYWwgdHJhY3RcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI0NjEwMDJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxhdGVyYWwgdmVudHJpY2xlXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDE1MjI3OVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUExNjUwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgODgsXG4gICAgICAgICAgICAgICAgICAxMDYsXG4gICAgICAgICAgICAgICAgICAyMTVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgbGF0ZXJhbCB2ZW50cmljbGVcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICA4OCxcbiAgICAgICAgICAgICAgICAgIDEwNixcbiAgICAgICAgICAgICAgICAgIDIxNVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGxhdGVyYWwgdmVudHJpY2xlXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNjY3MjAwMDdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE1MixcbiAgICAgICAgICAgICAgNTUsXG4gICAgICAgICAgICAgIDEzXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUyXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgdmVudHJpY2xlIG9mIGhlYXJ0XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMzI2MDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIyNTg5N1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnQgVmVudHJpY2xlXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDYXJkaWFjIFN0cnVjdHVyZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI4Nzg3ODAwNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGltYmljIGxvYmVcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwNDU4MzM3XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTAwMzZcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNTQsXG4gICAgICAgICAgICAgICAgICAxNTAsXG4gICAgICAgICAgICAgICAgICAyMDFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgbGltYmljIGxvYmVcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNTQsXG4gICAgICAgICAgICAgICAgICAxNTAsXG4gICAgICAgICAgICAgICAgICAyMDFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBsaW1iaWMgbG9iZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI3OTIxNTAwNlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTg4LFxuICAgICAgICAgICAgICA5MSxcbiAgICAgICAgICAgICAgOTVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMjhcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGlwc1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTUyMDAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMjM3NTlcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMaXBcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNyYW5pb2ZhY2lhbCBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNDg0NzcwMDlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxvd2VyIGxlZ1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzExNDA2MjFcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EOTQwMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBsZWdcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNzcsXG4gICAgICAgICAgICAgICAgICAxMjIsXG4gICAgICAgICAgICAgICAgICAxMDFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBsZWdcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzMDAyMTAwMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDMxXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTG93ZXIgbGltYlwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMjMyMTZcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EOTAwMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBsb3dlciBsaW1iXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTc3LFxuICAgICAgICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgICAgICAgMTAxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgbG93ZXIgbGltYlwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjYxNjg1MDA3XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlRob3JhY2ljIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxvd2VyIGxvYmUgb2YgbHVuZ1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjU3NThcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0yODgzMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDIyNCxcbiAgICAgICAgICAgICAgICAgIDE4NixcbiAgICAgICAgICAgICAgICAgIDE2MlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJpbmZlcmlvciBsb2JlIG9mIHJpZ2h0IGx1bmdcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAyMjQsXG4gICAgICAgICAgICAgICAgICAxODYsXG4gICAgICAgICAgICAgICAgICAxNjJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiaW5mZXJpb3IgbG9iZSBvZiBsZWZ0IGx1bmdcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI5MDU3MjAwMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjEyLFxuICAgICAgICAgICAgICAxODgsXG4gICAgICAgICAgICAgIDEwMlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsdW1iYXIgdmVydGVicmFsIGNvbHVtblwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTExNTAzXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMjQwOTFcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMdW1iYXIgc3BpbmVcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTIyNDk2MDA3XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlRob3JhY2ljIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkx1bmdcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDI0MTA5XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMjgwMDBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxOTcsXG4gICAgICAgICAgICAgICAgICAxNjUsXG4gICAgICAgICAgICAgICAgICAxNDVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgbHVuZ1wiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE5NyxcbiAgICAgICAgICAgICAgICAgIDE2NSxcbiAgICAgICAgICAgICAgICAgIDE0NVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IGx1bmdcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzOTYwNzAwOFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTg1LFxuICAgICAgICAgICAgICAxMzUsXG4gICAgICAgICAgICAgIDEzNFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2MFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJtYWxlIGV4dGVybmFsIGdlbml0YWxpYVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTkwMDEwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjc5MjJcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJNYWxlIGV4dGVybmFsIGdlbml0YWxpYVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiUGVsdmljIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjkwNDE4MDA1XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyMTYsXG4gICAgICAgICAgICAgIDE0NixcbiAgICAgICAgICAgICAgMTI3XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTYwXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIm1hbGUgaW50ZXJuYWwgZ2VuaXRhbGlhXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtOTAwMjBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIyNzkyM1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk1hbGUgaW50ZXJuYWwgZ2VuaXRhbGlhXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJQZWx2aWMgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzgyNDIwMDhcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIyMixcbiAgICAgICAgICAgICAgMTk4LFxuICAgICAgICAgICAgICAxMDFcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMzFcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibWFuZGlibGVcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0xMTE4MFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDI0Njg3XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTWFuZGlibGVcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiOTE2MDkwMDZcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk1lZGlhbCBMZW1uaXNjdXNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjI4NDIwXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTUyNzFcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNzQsXG4gICAgICAgICAgICAgICAgICAxNDAsXG4gICAgICAgICAgICAgICAgICAxMDNcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgbWVkaWFsIGxlbW5pc2N1c1wiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NCxcbiAgICAgICAgICAgICAgICAgIDE0MCxcbiAgICAgICAgICAgICAgICAgIDEwM1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IG1lZGlhbCBsZW1uaXNjdXNcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzMDExNDAwM1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgICAyNDQsXG4gICAgICAgICAgICAgIDIwOVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJtZWRpYXN0aW51bVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQzMzAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMjUwNjZcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJNZWRpYXN0aW51bVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiVGhvcmFjaWMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjcyNDEwMDAwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAgIDI0NCxcbiAgICAgICAgICAgICAgMjA5XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIm1lbmluZ2VzXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTExMTBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyNTI4NVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk1lbmluZ2VzXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjEyMzEwMDRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk1pZGRsZSBjZXJlYmVsbGFyIHBlZHVuY2xlXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDE1MjM5MlwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUE2NjMwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTQ4LFxuICAgICAgICAgICAgICAgICAgMTIwLFxuICAgICAgICAgICAgICAgICAgNzJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgbWlkZGxlIGNlcmViZWxsYXIgcGVkdW5jbGVcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNDgsXG4gICAgICAgICAgICAgICAgICAxMjAsXG4gICAgICAgICAgICAgICAgICA3MlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IG1pZGRsZSBjZXJlYmVsbGFyIHBlZHVuY2xlXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzM3MjMwMDVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ3JhbmlvZmFjaWFsIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAyOFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk1pZGRsZSBlYXJcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDEzNDU1XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQUIzMDBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAyMDEsXG4gICAgICAgICAgICAgICAgICAxMTIsXG4gICAgICAgICAgICAgICAgICA3M1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBtaWRkbGUgZWFyXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMjAxLFxuICAgICAgICAgICAgICAgICAgMTEyLFxuICAgICAgICAgICAgICAgICAgNzNcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBtaWRkbGUgZWFyXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjUzNDIwMDNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIwMixcbiAgICAgICAgICAgICAgMTY0LFxuICAgICAgICAgICAgICAxNDBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTVcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibWlkZGxlIGxvYmUgb2YgcmlnaHQgbHVuZ1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTI4MzAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjU3NTdcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJNaWRkbGUgbG9iZSBvZiByaWdodCBsdW5nXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJUaG9yYWNpYyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzI0ODEwMDZcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE1OSxcbiAgICAgICAgICAgICAgNjMsXG4gICAgICAgICAgICAgIDI3XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI2MTEzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIm1pdHJhbCB2YWx2ZVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTM1MzAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMjYyNjRcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJNaXRyYWwgVmFsdmVcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIk1lZGlhc3RpbnVtIEFuYXRvbXkgRmluZGluZyBvciBGZWF0dXJlXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiOTExMzQwMDdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIwMSxcbiAgICAgICAgICAgICAgMTIxLFxuICAgICAgICAgICAgICA3N1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAyOFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJtdXNjbGVzIG9mIGhlYWRcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0xMzEwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjI0MDk3XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTXVzY2xlIG9mIGhlYWRcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNyYW5pb2ZhY2lhbCBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjI2ODgwMDVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIxMyxcbiAgICAgICAgICAgICAgMTI0LFxuICAgICAgICAgICAgICAxMDlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMjhcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibXVzY2xlcyBvZiBuZWNrXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMTMzMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyNzUzMlwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk11c2NsZSBvZiBuZWNrXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDcmFuaW9mYWNpYWwgQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjgxNzI3MDAxXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxNzcsXG4gICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgMTAxXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDMxXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIm5lY2tcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EMTYwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDI3NTMwXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTmVja1wiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI0NTA0ODAwMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgOTIsXG4gICAgICAgICAgICAgIDE2MixcbiAgICAgICAgICAgICAgMTA5XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIm5ldXJvaHlwb3BoeXNpc1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUIxMjAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzIwMDlcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJOZXVyb2h5cG9waHlzaXNcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzc1MTIwMDlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk9jY2lwaXRhbCBsb2JlXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyODc4NVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEyNDAwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTgyLFxuICAgICAgICAgICAgICAgICAgMTY2LFxuICAgICAgICAgICAgICAgICAgMTEwXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IG9jY2lwaXRhbCBsb2JlXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTgyLFxuICAgICAgICAgICAgICAgICAgMTY2LFxuICAgICAgICAgICAgICAgICAgMTEwXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgb2NjaXBpdGFsIGxvYmVcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzMTA2NTAwNFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjM0LFxuICAgICAgICAgICAgICAyMzQsXG4gICAgICAgICAgICAgIDE5NFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJvbWVudHVtXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDQ2MDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyODk3N1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk9tZW50dW1cIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkFiZG9taW5hbCBPcmdhbiBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNzM5ODAwNFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgOTksXG4gICAgICAgICAgICAgIDEwNixcbiAgICAgICAgICAgICAgMjRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwib3B0aWMgY2hpYXNtXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTgwMEJcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyOTEyNlwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk9wdGljIGNoaWFzbVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDQ0NTMwMDZcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk9wdGljIHJhZGlhdGlvblwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjgyNzdcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMjg4MFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDc4LFxuICAgICAgICAgICAgICAgICAgMTUyLFxuICAgICAgICAgICAgICAgICAgMTQxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IG9wdGljIHJhZGlhdGlvblwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDc4LFxuICAgICAgICAgICAgICAgICAgMTUyLFxuICAgICAgICAgICAgICAgICAgMTQxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgb3B0aWMgcmFkaWF0aW9uXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzAxMDUwMDFcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk9wdGljIHRyYWN0XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDE1MjQwNVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUE4MDYwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTU2LFxuICAgICAgICAgICAgICAgICAgMTcxLFxuICAgICAgICAgICAgICAgICAgMTA4XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IG9wdGljIHRyYWN0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTU2LFxuICAgICAgICAgICAgICAgICAgMTcxLFxuICAgICAgICAgICAgICAgICAgMTA4XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgb3B0aWMgdHJhY3RcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1MzIzODAwM1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJQZWx2aWMgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjBcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJPdmFyeVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMjk5MzlcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC04NzAwMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDIxMyxcbiAgICAgICAgICAgICAgICAgIDE0MSxcbiAgICAgICAgICAgICAgICAgIDExM1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBvdmFyeVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDIxMyxcbiAgICAgICAgICAgICAgICAgIDE0MSxcbiAgICAgICAgICAgICAgICAgIDExM1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IG92YXJ5XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTU0OTcwMDZcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ3JhbmlvZmFjaWFsIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAyOFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlBhbGF0aW5lIGJvbmVcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjIyNzM0XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMTExNjBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAyNDIsXG4gICAgICAgICAgICAgICAgICAyMTcsXG4gICAgICAgICAgICAgICAgICAxMjNcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgcGFsYXRpbmUgYm9uZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDI0MixcbiAgICAgICAgICAgICAgICAgIDIxNyxcbiAgICAgICAgICAgICAgICAgIDEyM1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IHBhbGF0aW5lIGJvbmVcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1MTI4MzAwNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjQ5LFxuICAgICAgICAgICAgICAxODAsXG4gICAgICAgICAgICAgIDExMVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJwYW5jcmVhc1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTY1MDAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzAyNzRcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJQYW5jcmVhc1wiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ1QsIE1SIGFuZCBQRVQgQW5hdG9teSBJbWFnZWRcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIxNTc3NjAwOVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDcmFuaW9mYWNpYWwgQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDI4XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUGFyaWV0YWwgYm9uZVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzA1NThcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0xMTEyMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDIyOSxcbiAgICAgICAgICAgICAgICAgIDIwNCxcbiAgICAgICAgICAgICAgICAgIDEwOVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBwYXJpZXRhbCBib25lXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMjI5LFxuICAgICAgICAgICAgICAgICAgMjA0LFxuICAgICAgICAgICAgICAgICAgMTA5XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgcGFyaWV0YWwgYm9uZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0OTI0MDA2XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJQYXJpZXRhbCBsb2JlXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzMDU2MFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEyMzAwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTQxLFxuICAgICAgICAgICAgICAgICAgOTMsXG4gICAgICAgICAgICAgICAgICAxMzdcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgcGFyaWV0YWwgbG9iZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE0MSxcbiAgICAgICAgICAgICAgICAgIDkzLFxuICAgICAgICAgICAgICAgICAgMTM3XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgcGFyaWV0YWwgbG9iZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjE2NjMwMDA1XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxODQsXG4gICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgMTU0XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUyXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInBlcmljYXJkaWFsIGNhdml0eVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTM5MDUwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjU5NzJcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJQZXJpY2FyZGlhbCBjYXZpdHlcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNhcmRpYWMgU3RydWN0dXJlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI1NDg5MDAwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAgIDI0NCxcbiAgICAgICAgICAgICAgMjA5XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUyXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInBlcmljYXJkaXVtXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMzkwMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzMTA1MFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlBlcmljYXJkaXVtXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDYXJkaWFjIFN0cnVjdHVyZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3Njg0ODAwMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjI0LFxuICAgICAgICAgICAgICAxOTQsXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjdcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicGVyaXBoZXJhbCBuZXJ2ZVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEwNTAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzExMTlcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJQZXJpcGhlcmFsIG5lcnZlXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJQZXJpcGhlcmFsIE5lcnZvdXMgU3lzdGVtIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjg0NzgyMDA5XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyMTYsXG4gICAgICAgICAgICAgIDE4NixcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2N1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJwZXJpcGhlcmFsIG5lcnZvdXMgc3lzdGVtXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTAxNDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNjQxN1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlBlcmlwaGVyYWwgbmVydm91cyBzeXN0ZW1cIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlBlcmlwaGVyYWwgTmVydm91cyBTeXN0ZW0gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzA1ODAwNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAgIDIyMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJwZXJpdG9uZXVtXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDQ0MDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzMTE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlBlcml0aW9uZXVtXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJBYmRvbWluYWwgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTU0MjUwMDdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIwNCxcbiAgICAgICAgICAgICAgMTQyLFxuICAgICAgICAgICAgICAxNzhcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTRcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicGVyaXRvbmVhbCBjYXZpdHlcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1ENDQyNVwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMxNzA0MjQ3XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUGVyaXRvbmVhbCBjYXZpdHlcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkFiZG9taW5hbCBPcmdhbiBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI4MzY3MDAwMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTg0LFxuICAgICAgICAgICAgICAxMDUsXG4gICAgICAgICAgICAgIDEwOFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDA0MFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJwaGFyeW54XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNTUwMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzMTM1NFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlBoYXJ5bnhcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkVuZG9zY29weSBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNTQwNjYwMDhcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgICAgMjQ0LFxuICAgICAgICAgICAgICAyMDlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicGlhIG1hdGVyXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTEyODBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzMTg2OVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlBpYSBtYXRlclwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyMzE4MDAwNlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjUzLFxuICAgICAgICAgICAgICAxMzUsXG4gICAgICAgICAgICAgIDE5MlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJwaW5lYWwgZ2xhbmRcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1CMjAwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDMxOTM5XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUGluZWFsIEdsYW5kXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjQ1NzkzMDAwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICA1NyxcbiAgICAgICAgICAgICAgMTU3LFxuICAgICAgICAgICAgICAxMTBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicGl0dWl0YXJ5IGdsYW5kXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQjEwMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzMjAwNVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlBpdHVpdGFyeVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1NjMyOTAwOFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTI2LFxuICAgICAgICAgICAgICAxNjEsXG4gICAgICAgICAgICAgIDE5N1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJwb3N0ZXJpb3IgY29tbWlzc3VyZVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUE0OTA0XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAxNTIzMjdcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJQb3N0ZXJpb3IgY2VyZWJyYWwgY29tbWlzc3VyZVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNzkzMzYwMDVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIzMCxcbiAgICAgICAgICAgICAgMTU4LFxuICAgICAgICAgICAgICAxNDBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjBcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicHJvc3RhdGVcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC05MjAwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDMzNTcyXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUHJvc3RhdGVcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlBlbHZpYyBPcmdhbiBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI0MTIxNjAwMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjI1LFxuICAgICAgICAgICAgICAxMzAsXG4gICAgICAgICAgICAgIDEwNFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNjExM1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJwdWxtb25hcnkgdmFsdmVcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0zNTIwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDM0MDg2XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUHVsbW9uYXJ5IHZhbHZlXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJNZWRpYXN0aW51bSBBbmF0b215IEZpbmRpbmcgb3IgRmVhdHVyZVwiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjM5MDU3MDA0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJQdXRhbWVuXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzNDE2OVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEzNDAwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMjEwLFxuICAgICAgICAgICAgICAgICAgMTU3LFxuICAgICAgICAgICAgICAgICAgMTY2XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IHB1dGFtZW5cIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAyMTAsXG4gICAgICAgICAgICAgICAgICAxNTcsXG4gICAgICAgICAgICAgICAgICAxNjZcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBwdXRhbWVuXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiODkyNzgwMDlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE4MCxcbiAgICAgICAgICAgICAgMTE5LFxuICAgICAgICAgICAgICAxNTNcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTRcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmV0cm9wZXJpdG9uZWFsIHNwYWNlXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDQ5MDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzNTM1OVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJldHJvcGVyaXRvbmVhbCBzcGFjZVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQWJkb21pbmFsIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjgyODQ5MDAxXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxODEsXG4gICAgICAgICAgICAgIDg1LFxuICAgICAgICAgICAgICA1N1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1MlwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCB2ZW50cmljbGUgb2YgaGVhcnRcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0zMjUwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjI1ODgzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHQgVmVudHJpY2xlXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDYXJkaWFjIFN0cnVjdHVyZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1MzA4NTAwMlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgNzAsXG4gICAgICAgICAgICAgIDE2MyxcbiAgICAgICAgICAgICAgMTE3XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDI4XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInNhbGl2YXJ5IGdsYW5kc1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTYxMDA3XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzYwOThcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJTYWxpdmFyeSBnbGFuZFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ3JhbmlvZmFjaWFsIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzODUyOTQwMDVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiUGVsdmljIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTYwXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiU2VtaW5hbCBWZXNpY2xlXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzNjYyOFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTkzMDAwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMjQ1LFxuICAgICAgICAgICAgICAgICAgMTcyLFxuICAgICAgICAgICAgICAgICAgMTQ3XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IHNlbWluYWwgdmVzaWNsZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDI0NSxcbiAgICAgICAgICAgICAgICAgIDE3MixcbiAgICAgICAgICAgICAgICAgIDE0N1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IHNlbWluYWwgdmVzaWNsZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjY0NzM5MDA0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkVuZG9zY29weSBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwNDBcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJTaG91bGRlclwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzcwMDRcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EMjIyMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBzaG91bGRlclwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IHNob3VsZGVyXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTY5ODIwMDVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgMTI0LFxuICAgICAgICAgICAgICA5MlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJza2luIG9mIGFiZG9taW5hbCB3YWxsXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMDI0ODBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIyMjE2NlwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlNraW4gb2YgYWJkb21lblwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQWJkb21pbmFsIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc1MDkzMDA0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxNzMsXG4gICAgICAgICAgICAgIDEyMSxcbiAgICAgICAgICAgICAgODhcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTVcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwic2tpbiBvZiB0aG9yYWNpYyB3YWxsXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMDI0MjRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIyMjE0OVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlNraW4gb2YgY2hlc3RcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlRob3JhY2ljIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NDE2MDAwNFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjQxLFxuICAgICAgICAgICAgICAyMTMsXG4gICAgICAgICAgICAgIDE0NFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJza3VsbFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTExMTAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzczMDNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJTa3VsbFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI4OTU0NjAwMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjA1LFxuICAgICAgICAgICAgICAxNjcsXG4gICAgICAgICAgICAgIDE0MlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJzbWFsbCBib3dlbFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTU4MDAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMjE4NTJcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJTbWFsbCBJbnRlc3RpbmVcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkFiZG9taW5hbCBPcmdhbiBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzMDMxNTAwNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTgyLFxuICAgICAgICAgICAgICAxMDUsXG4gICAgICAgICAgICAgIDEwN1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAyOFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJzb2Z0IHBhbGF0ZVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTUxMTIwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzAyMTlcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJTb2Z0IHBhbGF0ZVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ3JhbmlvZmFjaWFsIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI0OTQ2MDAwMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjQ0LFxuICAgICAgICAgICAgICAyMTQsXG4gICAgICAgICAgICAgIDQ5XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInNwaW5hbCBjb3JkXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTcwMTBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzNzkyNVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlNwaW5hbCBjb3JkXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI3NDgwMDhcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIwMCxcbiAgICAgICAgICAgICAgMjAwLFxuICAgICAgICAgICAgICAyMTVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiZ3JheSBtYXR0ZXIgb2Ygc3BpbmFsIGNvcmRcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BNzAyMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwNDc1ODUzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiU3BpbmFsIGNvcmQgZ3JheSBtYXR0ZXJcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTI5NTgwMDNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDI1MCxcbiAgICAgICAgICAgICAgMjUwLFxuICAgICAgICAgICAgICAyMjVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwid2hpdGUgbWF0dGVyIG9mIHNwaW5hbCBjb3JkXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTcwNzBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDQ1ODQ1N1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlNwaW5hbCBjb3JkIHdoaXRlIG1hdHRlclwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNzA4ODAwMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjQ0LFxuICAgICAgICAgICAgICAyMTcsXG4gICAgICAgICAgICAgIDE1NFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJzdGVybnVtXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMTEyMTBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzODI5M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlN0ZXJudW1cIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlRob3JhY2ljIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1Njg3MzAwMlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjE2LFxuICAgICAgICAgICAgICAxMzIsXG4gICAgICAgICAgICAgIDEwNVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJzdG9tYWNoXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNTcwMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzODM1MVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlN0b21hY2hcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNjk2OTUwMDNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDg4LFxuICAgICAgICAgICAgICAxMDYsXG4gICAgICAgICAgICAgIDIxNVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJzdWJhcmFjaG5vaWQgc3BhY2VcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMTUwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDM4NTI3XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiU3ViYXJhY2hub2lkIHNwYWNlXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjM1OTUxMDA2XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJTdWJzdGFudGlhIG5pZ3JhXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzODU5MFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUE1MTYwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgIDEwOCxcbiAgICAgICAgICAgICAgICAgIDExMlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBzdWJzdGFudGlhIG5pZ3JhXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgIDEwOCxcbiAgICAgICAgICAgICAgICAgIDExMlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IHN1YnN0YW50aWEgbmlncmFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3MDAwNzAwN1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiU3VwZXJpb3IgbG9uZ2l0dWRpbmFsIGZhc2NpY3VsdXNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjI4MjcwXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtQTI4MjBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxMjcsXG4gICAgICAgICAgICAgICAgICAxNTAsXG4gICAgICAgICAgICAgICAgICA4OFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCBzdXBlcmlvciBsb25naXR1ZGluYWwgZmFzY2ljdWx1c1wiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDEyNyxcbiAgICAgICAgICAgICAgICAgIDE1MCxcbiAgICAgICAgICAgICAgICAgIDg4XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgc3VwZXJpb3IgbG9uZ2l0dWRpbmFsIGZhc2NpY3VsdXNcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI4OTIwMjAwOVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDcmFuaW9mYWNpYWwgQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI0MDI4XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVGVtcG9yYWwgYm9uZVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzk0ODRcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0xMTEzMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgICAgICAgIDI0MyxcbiAgICAgICAgICAgICAgICAgIDE1MlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCB0ZW1wb3JhbCBib25lXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgICAgICAgMjQzLFxuICAgICAgICAgICAgICAgICAgMTUyXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgdGVtcG9yYWwgYm9uZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjYwOTExMDAzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNOUyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTNcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJUZW1wb3JhbCBsb2JlXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAzOTQ4NVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUEyNTAwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTYyLFxuICAgICAgICAgICAgICAgICAgMTE1LFxuICAgICAgICAgICAgICAgICAgMTA1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IHRlbXBvcmFsIGxvYmVcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNjIsXG4gICAgICAgICAgICAgICAgICAxMTUsXG4gICAgICAgICAgICAgICAgICAxMDVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCB0ZW1wb3JhbCBsb2JlXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzgyNzcwMDFcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ05TIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlRoYWxhbXVzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDQ1ODI3MVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULUQwNTkzXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgICAgICAgMTAxLFxuICAgICAgICAgICAgICAgICAgMzhcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgdGhhbGFtdXNcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxMjIsXG4gICAgICAgICAgICAgICAgICAxMDEsXG4gICAgICAgICAgICAgICAgICAzOFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IHRoYWxhbXVzXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTE5NDA2MDAwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMzFcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJUaGlnaFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMzk4NjZcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EOTEwMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCB0aGlnaFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IHRoaWdoXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNjgzNjcwMDBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDIyNixcbiAgICAgICAgICAgICAgMjAyLFxuICAgICAgICAgICAgICAxMzRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTVcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwidGhvcmFjaWMgdmVydGVicmFsIGNvbHVtblwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTExNTAyXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzA1ODEyNjlcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJUaG9yYWNpYyBzcGluZVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiVGhvcmFjaWMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjEyMjQ5NTAwNlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTc3LFxuICAgICAgICAgICAgICAxMjIsXG4gICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJ0aG9yYXhcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1EMzAwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwODE3MDk2XCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVGhvcmF4XCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJUaG9yYWNpYyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNTExODUwMDhcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDQ3LFxuICAgICAgICAgICAgICAxNTAsXG4gICAgICAgICAgICAgIDEwM1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJ0aHltdXNcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1DODAwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDQwMTEzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVGh5bXVzXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJUaG9yYWNpYyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiOTg3NTAwOVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgNjIsXG4gICAgICAgICAgICAgIDE2MixcbiAgICAgICAgICAgICAgMTE0XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI2MTEzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInRoeXJvaWQgZ2xhbmRcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1CNjAwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDQwMTMyXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVGh5cm9pZFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTWVkaWFzdGludW0gQW5hdG9teSBGaW5kaW5nIG9yIEZlYXR1cmVcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI2OTc0ODAwNlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTY2LFxuICAgICAgICAgICAgICA4NCxcbiAgICAgICAgICAgICAgOTRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMjhcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwidG9uZ3VlXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNTMwMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDA0MDQwOFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlRvbmd1ZVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ3JhbmlvZmFjaWFsIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyMTk3NDAwN1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjU1LFxuICAgICAgICAgICAgICAyNTAsXG4gICAgICAgICAgICAgIDIyMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAyOFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJ0ZWV0aFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTU0MDEwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwNDA0MjZcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJUb290aFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ3JhbmlvZmFjaWFsIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzODE5OTAwOFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTgyLFxuICAgICAgICAgICAgICAyMjgsXG4gICAgICAgICAgICAgIDI1NVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1NVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJ0cmFjaGVhXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMjUwMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDA0MDU3OFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlRyYWNoZWFcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlRob3JhY2ljIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI0NDU2NzAwMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTY2LFxuICAgICAgICAgICAgICA3MCxcbiAgICAgICAgICAgICAgMzhcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjYxMTNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwidHJpY3VzcGlkIHZhbHZlXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMzUxMDBcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDA0MDk2MFwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlRyaWN1c3BpZCBWYWx2ZVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTWVkaWFzdGludW0gQW5hdG9teSBGaW5kaW5nIG9yIEZlYXR1cmVcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI0NjAzMDAwM1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDTlMgVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTUzXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVW5jaW5hdGUgZmFzY2ljdWx1c1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjgyNzFcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC1BMjgzMFwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDEwNixcbiAgICAgICAgICAgICAgICAgIDE3NCxcbiAgICAgICAgICAgICAgICAgIDE1NVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCB1bmNpbmF0ZSBmYXNjaWN1bHVzXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTA2LFxuICAgICAgICAgICAgICAgICAgMTc0LFxuICAgICAgICAgICAgICAgICAgMTU1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgdW5jaW5hdGUgZmFzY2ljdWx1c1wiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkxXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkxlZnRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc3NzEwMDBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI2MjMwMDAzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBBbmF0b21pYyBSZWdpb25zXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMzFcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJVcHBlciBhcm1cIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwNDQ2NTE2XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDgyMDBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNzcsXG4gICAgICAgICAgICAgICAgICAxMjIsXG4gICAgICAgICAgICAgICAgICAxMDFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgYXJtXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTc3LFxuICAgICAgICAgICAgICAgICAgMTIyLFxuICAgICAgICAgICAgICAgICAgMTAxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImxlZnQgYXJtXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNDA5ODMwMDBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlVwcGVyIGxpbWJcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDE2NTU1XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDgwMDBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNzcsXG4gICAgICAgICAgICAgICAgICAxMjIsXG4gICAgICAgICAgICAgICAgICAxMDFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwicmlnaHQgdXBwZXIgbGltYlwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDE3NyxcbiAgICAgICAgICAgICAgICAgIDEyMixcbiAgICAgICAgICAgICAgICAgIDEwMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJsZWZ0IHVwcGVyIGxpbWJcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMVwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI3NzcxMDAwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1MzEyMDAwN1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJUaG9yYWNpYyBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTVcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJVcHBlciBsb2JlIG9mIGx1bmdcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjI1NzU2XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtMjg4MjBcIixcbiAgICAgICAgICAgIFwiTW9kaWZpZXJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAxNzIsXG4gICAgICAgICAgICAgICAgICAxMzgsXG4gICAgICAgICAgICAgICAgICAxMTVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwic3VwZXJpb3IgbG9iZSBvZiByaWdodCBsdW5nXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDBcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTBcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMYXRlcmFsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjI0MDI4MDA3XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMTcyLFxuICAgICAgICAgICAgICAgICAgMTM4LFxuICAgICAgICAgICAgICAgICAgMTE1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInN1cGVyaW9yIGxvYmUgb2YgbGVmdCBsdW5nXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNDU2NTMwMDlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDEyNCxcbiAgICAgICAgICAgICAgMTg2LFxuICAgICAgICAgICAgICAyMjNcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNpZFwiOiBcIjQwMzFcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwidXJldGhyYVwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTc1MDAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwNDE5NjdcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJVcmV0aHJhXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gQW5hdG9taWMgUmVnaW9uc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjEzNjQ4MDA3XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyMDMsXG4gICAgICAgICAgICAgIDEzNixcbiAgICAgICAgICAgICAgMTE2XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU0XCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInVyaW5hcnkgc3lzdGVtXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtNzAwMDFcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMTUwODc1M1wiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlVyaW5hcnkgc3lzdGVtXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJBYmRvbWluYWwgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTIyNDg5MDA1XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAgIDE4MSxcbiAgICAgICAgICAgICAgMTU4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTYwXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInV0ZXJ1c1wiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTgzMDAwXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwNDIxNDlcIixcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJVdGVydXNcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlBlbHZpYyBPcmdhbiBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzNTAzOTAwN1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTkzLFxuICAgICAgICAgICAgICAxMjMsXG4gICAgICAgICAgICAgIDEwM1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2MFwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJ2YWdpbmFcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC04MjAwMFwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDQyMjMyXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVmFnaW5hXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJQZWx2aWMgT3JnYW4gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzY3ODQwMDFcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiUGVsdmljIE9yZ2FuIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTYwXCIsXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiVmFzIGRlZmVyZW5zXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDA0MjM2MFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTk2MDAwXCIsXG4gICAgICAgICAgICBcIk1vZGlmaWVyXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAgICAgMjQxLFxuICAgICAgICAgICAgICAgICAgMTcyLFxuICAgICAgICAgICAgICAgICAgMTUxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNpZFwiOiBcIjI0NFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInJpZ2h0IGRlZmVyZW50IGR1Y3RcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIkctQTEwMFwiLFxuICAgICAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDIwNTA5MFwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMjQwMjgwMDdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgICAyNDEsXG4gICAgICAgICAgICAgICAgICAxNzIsXG4gICAgICAgICAgICAgICAgICAxNTFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY2lkXCI6IFwiMjQ0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwibGVmdCBkZWZlcmVudCBkdWN0XCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJHLUExMDFcIixcbiAgICAgICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMDUwOTFcIixcbiAgICAgICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiTGVmdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxhdGVyYWxpdHlcIixcbiAgICAgICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNzc3MTAwMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNTc2NzEwMDdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIEFuYXRvbWljIFJlZ2lvbnNcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNDAzMVwiLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlp5Z29tYVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwNDM1MzlcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC0xMTE2NlwiLFxuICAgICAgICAgICAgXCJNb2RpZmllclwiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgICAgICAgIDI1NSxcbiAgICAgICAgICAgICAgICAgIDE2N1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjaWRcIjogXCIyNDRcIixcbiAgICAgICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJyaWdodCB6eWdvbWF0aWMgYm9uZVwiLFxuICAgICAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiRy1BMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMjA1MDkwXCIsXG4gICAgICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGF0ZXJhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIyNDAyODAwN1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMTM4ODEwMDZcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJzaG93QW5hdG9teVwiOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk1vcnBob2xvZ2ljYWxseSBBbHRlcmVkIFN0cnVjdHVyZVwiLFxuICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjQ5NzU1MDAzXCIsXG4gICAgICAgIFwiY2lkXCI6IFwiNzA1MVwiLFxuICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAyMjExOThcIixcbiAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJNLTAxMDAwXCIsXG4gICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIlNlZ21lbnRhdGlvbiBQcm9wZXJ0eSBDYXRlZ29yaWVzXCIsXG4gICAgICAgIFwiVHlwZVwiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE0NSxcbiAgICAgICAgICAgICAgNjAsXG4gICAgICAgICAgICAgIDY2XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkJsb29kIGNsb3RcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiY2xvdFwiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU5XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAzMDIxNDhcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiTS0zNTAwMFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGVzaW9uIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc1NzUzMDA5XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyMDUsXG4gICAgICAgICAgICAgIDIwNSxcbiAgICAgICAgICAgICAgMTAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkN5c3RcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiY3lzdFwiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU5XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTA3MDlcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiTS0zMzQwQVwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGVzaW9uIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjM2NzY0MzAwMVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTQwLFxuICAgICAgICAgICAgICAyMjQsXG4gICAgICAgICAgICAgIDIyOFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJFZGVtYVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJlZGVtYVwiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTU5XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTM2MDRcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiTS0zNjMwMFwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiTGVzaW9uIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc5NjU0MDAyXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxNTAsXG4gICAgICAgICAgICAgIDk4LFxuICAgICAgICAgICAgICA4M1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJFbWJvbHVzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcImVtYm9saXNtXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTlcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMTcwNDIxMlwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJNLTM1MzAwXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMZXNpb24gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNTU1ODQwMDVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDE4OCxcbiAgICAgICAgICAgICAgNjUsXG4gICAgICAgICAgICAgIDI4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkhlbW9ycmhhZ2VcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiYmxlZWRpbmdcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1OVwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDE5MDgwXCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIk0tMzcwMDBcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxlc2lvbiBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI1MDk2MDAwNVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMTQ0LFxuICAgICAgICAgICAgICAyMzgsXG4gICAgICAgICAgICAgIDE0NFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJNYXNzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIm1hc3NcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE1OVwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwNTc3NTU5XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIk0tMDMwMDBcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkxlc2lvbiBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCI0MTQ3MDA3XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyMTYsXG4gICAgICAgICAgICAgIDE5MSxcbiAgICAgICAgICAgICAgMjE2XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIk5lY3Jvc2lzXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcIm5lY3Jvc2lzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNTlcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAyNzU0MFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJNLTU0MDAwXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJMZXNpb24gU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiNjU3NDAwMVwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcInNob3dBbmF0b215XCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJCb2R5IFN1YnN0YW5jZVwiLFxuICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjkxNzIwMDAyXCIsXG4gICAgICAgIFwiY2lkXCI6IFwiXCIsXG4gICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDUwNDA4MlwiLFxuICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDAwODBcIixcbiAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiXCIsXG4gICAgICAgIFwiVHlwZVwiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDE0NSxcbiAgICAgICAgICAgICAgMzBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIkNvZGVNZWFuaW5nXCI6IFwiQmlsZVwiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJiaWxlXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAwNTM4OFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTYwNjUwXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjcwMTUwMDA0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAxNzAsXG4gICAgICAgICAgICAgIDI1MCxcbiAgICAgICAgICAgICAgMjUwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIkJvZHkgZmx1aWRcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiZmx1aWRcIixcbiAgICAgICAgICAgIFwiY2lkXCI6IFwiNzE2NlwiLFxuICAgICAgICAgICAgXCJVTUxTQ29uY2VwdFVJRFwiOiBcIkMwMDA1ODg5XCIsXG4gICAgICAgICAgICBcIkNvZGVWYWx1ZVwiOiBcIlQtRDAwNzBcIixcbiAgICAgICAgICAgIFwiY29udGV4dEdyb3VwTmFtZVwiOiBcIkNvbW1vbiBUaXNzdWUgU2VnbWVudGF0aW9uIFR5cGVzXCIsXG4gICAgICAgICAgICBcIlNOT01FRENUQ29uY2VwdElEXCI6IFwiMzI0NTcwMDVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJyZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZVwiOiBbXG4gICAgICAgICAgICAgIDc4LFxuICAgICAgICAgICAgICA2MyxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJGZWNlc1wiLFxuICAgICAgICAgICAgXCJDb2RpbmdTY2hlbWVEZXNpZ25hdG9yXCI6IFwiU1JUXCIsXG4gICAgICAgICAgICBcIjNkU2xpY2VyTGFiZWxcIjogXCJmZWNlc1wiLFxuICAgICAgICAgICAgXCJjaWRcIjogXCI3MTY2XCIsXG4gICAgICAgICAgICBcIlVNTFNDb25jZXB0VUlEXCI6IFwiQzAwMTU3MzNcIixcbiAgICAgICAgICAgIFwiQ29kZVZhbHVlXCI6IFwiVC01OTY2NlwiLFxuICAgICAgICAgICAgXCJjb250ZXh0R3JvdXBOYW1lXCI6IFwiQ29tbW9uIFRpc3N1ZSBTZWdtZW50YXRpb24gVHlwZXNcIixcbiAgICAgICAgICAgIFwiU05PTUVEQ1RDb25jZXB0SURcIjogXCIzOTQ3NzAwMlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInJlY29tbWVuZGVkRGlzcGxheVJHQlZhbHVlXCI6IFtcbiAgICAgICAgICAgICAgMjE4LFxuICAgICAgICAgICAgICAyNTUsXG4gICAgICAgICAgICAgIDI1NVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiQ29kZU1lYW5pbmdcIjogXCJHYXNcIixcbiAgICAgICAgICAgIFwiQ29kaW5nU2NoZW1lRGVzaWduYXRvclwiOiBcIlNSVFwiLFxuICAgICAgICAgICAgXCIzZFNsaWNlckxhYmVsXCI6IFwiZ2FzXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDAxNzExMFwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJDLTEwMDgwXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc0OTQ3MDA5XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWVcIjogW1xuICAgICAgICAgICAgICAyMTQsXG4gICAgICAgICAgICAgIDIzMCxcbiAgICAgICAgICAgICAgMTMwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJDb2RlTWVhbmluZ1wiOiBcIlVyaW5lXCIsXG4gICAgICAgICAgICBcIkNvZGluZ1NjaGVtZURlc2lnbmF0b3JcIjogXCJTUlRcIixcbiAgICAgICAgICAgIFwiM2RTbGljZXJMYWJlbFwiOiBcInVyaW5lXCIsXG4gICAgICAgICAgICBcImNpZFwiOiBcIjcxNjZcIixcbiAgICAgICAgICAgIFwiVU1MU0NvbmNlcHRVSURcIjogXCJDMDA0MjAzNlwiLFxuICAgICAgICAgICAgXCJDb2RlVmFsdWVcIjogXCJULTcwMDYwXCIsXG4gICAgICAgICAgICBcImNvbnRleHRHcm91cE5hbWVcIjogXCJDb21tb24gVGlzc3VlIFNlZ21lbnRhdGlvbiBUeXBlc1wiLFxuICAgICAgICAgICAgXCJTTk9NRURDVENvbmNlcHRJRFwiOiBcIjc4MDE0MDA1XCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwic2hvd0FuYXRvbXlcIjogZmFsc2VcbiAgICAgIH1cbiAgICBdXG4gIH1cbn1gO1xuXG5jb25zdCBwYXJzZWRKc29uID0gSlNPTi5wYXJzZShqc29uKTtcblxuZXhwb3J0IGRlZmF1bHQgcGFyc2VkSnNvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8qKlxuICogQGNsYXNzIFNlZ21lbnRhdGlvbk1lbnVMaXN0Qm9keSAtIFJlbmRlcnMgYSBsaXN0IG9mIFNlZ21lbnRhdGlvbk1lbnVMaXN0SXRlbXMsXG4gKiBkaXNwbGF5aW5nIHRoZSBtZXRhZGF0YSBvZiBzZWdtZW50cy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHVtbXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyA9IHt9KSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxkaXY+SGVsbG8gUGFuZWw8L2Rpdj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCAnLi9tZW51SU9CdXR0b25zLnN0eWwnO1xuXG4vKipcbiAqIEBjbGFzcyBNZW51SU9CdXR0b25zIC0gUmVuZGVycyBJbXBvcnQgYW5kL29yIEV4cG9ydCBidXR0b25zIGlmXG4gKiB0aGlzLnByb3BzLkltcG9ydENhbGxiYWNrT3JDb21wb25lbnQgYW5kL29yXG4gKiB0aGlzLnByb3BzLkV4cG9ydENhbGxiYWNrT3JDb21wb25lbnQgYXJlIGRlZmluZWQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVJT0J1dHRvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyA9IHt9KSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIEltcG9ydENhbGxiYWNrT3JDb21wb25lbnQsXG4gICAgICBFeHBvcnRDYWxsYmFja09yQ29tcG9uZW50LFxuICAgICAgb25JbXBvcnRCdXR0b25DbGljayxcbiAgICAgIG9uRXhwb3J0QnV0dG9uQ2xpY2tcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghSW1wb3J0Q2FsbGJhY2tPckNvbXBvbmVudCAmJiAhRXhwb3J0Q2FsbGJhY2tPckNvbXBvbmVudCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtJbXBvcnRDYWxsYmFja09yQ29tcG9uZW50ICYmIChcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17b25JbXBvcnRCdXR0b25DbGlja30+XG4gICAgICAgICAgICBJbXBvcnRcbiAgICAgICAgICA8L2E+XG4gICAgICAgICl9XG4gICAgICAgIHtFeHBvcnRDYWxsYmFja09yQ29tcG9uZW50ICYmIChcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17b25FeHBvcnRCdXR0b25DbGlja30+XG4gICAgICAgICAgICBFeHBvcnRcbiAgICAgICAgICA8L2E+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCIvKipcbiAqIG9uRXhwb3J0QnV0dG9uQ2xpY2sgLSBIZWxwZXIgZnVuY3Rpb24gZm9yIGFubm90YXRpb24gbWVudSBjb21wb25lbnRzLlxuICogQ2FsbHMgRXhwb3J0Q2FsbGJhY2tPckNvbXBvbmVudCBpZiBpdCBpcyBhIGZ1bmNpdG9uLCBvciBzZXRzXG4gKiB0aGlzLnN0YXRlLmV4cG9ydGluZyB0byB0cnVlIGlmIGl0IGlzIGEgY29tcG9uZW50LlxuICpcbiAqIEByZXR1cm5zIHtudWxsfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvbkV4cG9ydEJ1dHRvbkNsaWNrKCkge1xuICBjb25zdCB7IEV4cG9ydENhbGxiYWNrT3JDb21wb25lbnQgfSA9IHRoaXMucHJvcHM7XG5cbiAgaWYgKEV4cG9ydENhbGxiYWNrT3JDb21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXhwb3J0aW5nOiB0cnVlIH0pO1xuICB9IGVsc2Uge1xuICAgIEV4cG9ydENhbGxiYWNrT3JDb21wb25lbnQoKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBvbklPQ2FuY2VsIC0gSGVscGVyIGZ1bmN0aW9uIGZvciBhbm5vdGF0aW9uIG1lbnUgY29tcG9uZW50cy4gU2V0c1xuICogdGhpcy5zdGF0ZS5pbXBvcnRpbmcgYW5kIHRoaXMuc3RhdGUuZXhwb3J0aW5nIHRvIGZhbHNlLlxuICpcbiAqIEByZXR1cm5zIHtudWxsfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvbklPQ2FuY2VsKCkge1xuICB0aGlzLnNldFN0YXRlKHtcbiAgICBpbXBvcnRpbmc6IGZhbHNlLFxuICAgIGV4cG9ydGluZzogZmFsc2VcbiAgfSk7XG59XG4iLCIvKipcbiAqIG9uSW1wb3J0QnV0dG9uQ2xpY2sgLSBIZWxwZXIgZnVuY3Rpb24gZm9yIGFubm90YXRpb24gbWVudSBjb21wb25lbnRzLlxuICogQ2FsbHMgSW1wb3J0Q2FsbGJhY2tPckNvbXBvbmVudCBpZiBpdCBpcyBhIGZ1bmNpdG9uLCBvciBzZXRzXG4gKiB0aGlzLnN0YXRlLmltcG9ydGluZyB0byB0cnVlIGlmIGl0IGlzIGEgY29tcG9uZW50LlxuICpcbiAqIEByZXR1cm5zIHtudWxsfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvbkltcG9ydEJ1dHRvbkNsaWNrKCkge1xuICBjb25zb2xlLmxvZyh0aGlzKTtcblxuICBjb25zdCB7IEltcG9ydENhbGxiYWNrT3JDb21wb25lbnQgfSA9IHRoaXMucHJvcHM7XG5cbiAgaWYgKEltcG9ydENhbGxiYWNrT3JDb21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1wb3J0aW5nOiB0cnVlIH0pO1xuICB9IGVsc2Uge1xuICAgIEltcG9ydENhbGxiYWNrT3JDb21wb25lbnQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjb3JuZXJzdG9uZVRvb2xzIGZyb20gJ2Nvcm5lcnN0b25lLXRvb2xzJztcblxuY29uc3QgYnJ1c2hNb2R1bGUgPSBjb3JuZXJzdG9uZVRvb2xzLnN0b3JlLm1vZHVsZXMuYnJ1c2g7XG5jb25zdCBicnVzaFN0YXRlID0gYnJ1c2hNb2R1bGUuc3RhdGU7XG5cbi8vIGltcG9ydCAnLi9zZWdtZW50YXRpb25NZW51LnN0eWwnO1xuXG5jb25zdCBtaW5HYXRlU2VwZXJhdGlvbiA9IDEwO1xuXG4vKipcbiAqIEBjbGFzcyBCcnVzaFNldHRpbmdzIC0gQSBjb21wb25lbnQgdGhhdCBhbGxvd3MgdGhlIHVzZXIgdG8gY2hhbmdlXG4gKiBjb25maWd1cmF0aW9uIG9mIHRoZSBCcnVzaCB0b29scy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJ1c2hTZXR0aW5ncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzID0ge30pIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCBjdXN0b21HYXRlUmFuZ2UgPSBicnVzaE1vZHVsZS5nZXR0ZXJzLmN1c3RvbUdhdGVSYW5nZSgpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhvbGVGaWxsOiBicnVzaFN0YXRlLmhvbGVGaWxsLFxuICAgICAgc3RyYXlSZW1vdmU6IGJydXNoU3RhdGUuc3RyYXlSZW1vdmUsXG4gICAgICBhY3RpdmVHYXRlOiBicnVzaFN0YXRlLmFjdGl2ZUdhdGUsXG4gICAgICBjdXN0b21HYXRlUmFuZ2VNaW46IGN1c3RvbUdhdGVSYW5nZVswXSxcbiAgICAgIGN1c3RvbUdhdGVSYW5nZU1heDogY3VzdG9tR2F0ZVJhbmdlWzFdXG4gICAgfTtcblxuICAgIHRoaXMub25HYXRlQ2hhbmdlID0gdGhpcy5vbkdhdGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ3VzdG9tR2F0ZU1pbkNoYW5nZSA9IHRoaXMub25DdXN0b21HYXRlTWluQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkN1c3RvbUdhdGVNYXhDaGFuZ2UgPSB0aGlzLm9uQ3VzdG9tR2F0ZU1heENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Ib2xlRmlsbENoYW5nZSA9IHRoaXMub25Ib2xlRmlsbENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25TdHJheVJlbW92ZUNoYW5nZSA9IHRoaXMub25TdHJheVJlbW92ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uR2F0ZUNoYW5nZSAtIENhbGxiYWNrIHRoYXQgY2hhbmdlcyB0aGUgYWN0aXZlIGdhdGUgb2YgdGhlIFNtYXJ0IENUIEJydXNoLlxuICAgKlxuICAgKiBAcGFyYW0gIHt0eXBlfSBldnQgZGVzY3JpcHRpb25cbiAgICogQHJldHVybnMge3R5cGV9ICAgICBkZXNjcmlwdGlvblxuICAgKi9cbiAgb25HYXRlQ2hhbmdlKGV2dCkge1xuICAgIGNvbnN0IHZhbCA9IGV2dC50YXJnZXQudmFsdWU7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlR2F0ZTogdmFsIH0pO1xuICAgIGJydXNoU3RhdGUuYWN0aXZlR2F0ZSA9IHZhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBvbkN1c3RvbUdhdGVNaW5DaGFuZ2UgLSBDaGFuZ2VzIHRoZSBtaW5pbXVtIHZhbHVlIG9mIGFcbiAgICogY3VzdG9tIFNtYXJ0IENUIEdhdGUuXG4gICAqXG4gICAqIEBwYXJhbSAge29iamVjdH0gZXZ0IFRoZSBldmVudC5cbiAgICogQHJldHVybnMge251bGx9XG4gICAqL1xuICBvbkN1c3RvbUdhdGVNaW5DaGFuZ2UoZXZ0KSB7XG4gICAgbGV0IHZhbCA9IE51bWJlcihldnQudGFyZ2V0LnZhbHVlKTtcblxuICAgIGNvbnN0IGN1c3RvbVJhbmdlTWF4ID0gdGhpcy5zdGF0ZS5jdXN0b21HYXRlUmFuZ2VNYXg7XG5cbiAgICBpZiAodmFsID4gY3VzdG9tUmFuZ2VNYXggLSBtaW5HYXRlU2VwZXJhdGlvbikge1xuICAgICAgdmFsID0gY3VzdG9tUmFuZ2VNYXggLSBtaW5HYXRlU2VwZXJhdGlvbjtcbiAgICAgIGV2dC50YXJnZXQudmFsdWUgPSB2YWw7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGN1c3RvbUdhdGVSYW5nZU1pbjogdmFsIH0pO1xuICAgIGJydXNoTW9kdWxlLnNldHRlcnMuY3VzdG9tR2F0ZVJhbmdlKHZhbCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogb25DdXN0b21HYXRlTWF4Q2hhbmdlIC0gQ2hhbmdlcyB0aGUgbWF4aW11bSB2YWx1ZSBvZiBhXG4gICAqIGN1c3RvbSBTbWFydCBDVCBHYXRlLlxuICAgKlxuICAgKiBAcGFyYW0gIHtvYmplY3R9IGV2dCBUaGUgZXZlbnQuXG4gICAqIEByZXR1cm5zIHtudWxsfVxuICAgKi9cbiAgb25DdXN0b21HYXRlTWF4Q2hhbmdlKGV2dCkge1xuICAgIGxldCB2YWwgPSBOdW1iZXIoZXZ0LnRhcmdldC52YWx1ZSk7XG5cbiAgICBjb25zdCBjdXN0b21SYW5nZU1pbiA9IHRoaXMuc3RhdGUuY3VzdG9tR2F0ZVJhbmdlTWluO1xuXG4gICAgaWYgKHZhbCA8IGN1c3RvbVJhbmdlTWluICsgbWluR2F0ZVNlcGVyYXRpb24pIHtcbiAgICAgIHZhbCA9IGN1c3RvbVJhbmdlTWluICsgbWluR2F0ZVNlcGVyYXRpb247XG4gICAgICBldnQudGFyZ2V0LnZhbHVlID0gdmFsO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBjdXN0b21HYXRlUmFuZ2VNYXg6IHZhbCB9KTtcbiAgICBicnVzaE1vZHVsZS5zZXR0ZXJzLmN1c3RvbUdhdGVSYW5nZShudWxsLCB2YWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uSG9sZUZpbGxDaGFuZ2UgLSBDaGFuZ2VzIHRoZSB2YWx1ZSBvZiB0aGUgaG9sZSBmaWxsIHBhcmFtZXRlciBmb3IgdGhlXG4gICAqIFNtYXJ0IENUIGFuZCBBdXRvIGJydXNoZXMuXG4gICAqXG4gICAqIEBwYXJhbSAge29iamVjdH0gZXZ0IFRoZSBldmVudC5cbiAgICogQHJldHVybnMge251bGx9XG4gICAqL1xuICBvbkhvbGVGaWxsQ2hhbmdlKGV2dCkge1xuICAgIGNvbnN0IHZhbCA9IE51bWJlcihldnQudGFyZ2V0LnZhbHVlKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBob2xlRmlsbDogdmFsIH0pO1xuICAgIGJydXNoU3RhdGUuaG9sZUZpbGwgPSB2YWw7XG4gIH1cblxuICAvKipcbiAgICogb25TdHJheVJlbW92ZUNoYW5nZSAtIENoYW5nZXMgdGhlIGJhbHVlIG9mIHRoZSBzdHJheSByZW1vdmUgcGFyYW1ldGVyIGZvclxuICAgKiB0aGUgU21hcnQgQ1QgYW5kIEF1dG8gYnJ1c2hlcy5cbiAgICpcbiAgICogQHBhcmFtICB7b2JqZWN0fSBldnQgVGhlIGV2ZW50LlxuICAgKiBAcmV0dXJucyB7bnVsbH1cbiAgICovXG4gIG9uU3RyYXlSZW1vdmVDaGFuZ2UoZXZ0KSB7XG4gICAgY29uc3QgdmFsID0gTnVtYmVyKGV2dC50YXJnZXQudmFsdWUpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0cmF5UmVtb3ZlOiB2YWwgfSk7XG4gICAgYnJ1c2hTdGF0ZS5zdHJheVJlbW92ZSA9IHZhbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBob2xlRmlsbFJhbmdlID0gYnJ1c2hTdGF0ZS5ob2xlRmlsbFJhbmdlO1xuICAgIGNvbnN0IHN0cmF5UmVtb3ZlUmFuZ2UgPSBicnVzaFN0YXRlLnN0cmF5UmVtb3ZlUmFuZ2U7XG5cbiAgICBjb25zdCB7IGhvbGVGaWxsLCBzdHJheVJlbW92ZSwgYWN0aXZlR2F0ZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IGdhdGVzID0gYnJ1c2hTdGF0ZS5nYXRlcztcblxuICAgIGNvbnN0IGhvbGVGaWxsTGFiZWwgPSBob2xlRmlsbCA9PT0gMCA/IFwiRG9uJ3QgZmlsbCBob2xlcy5cIiA6IGBGaWxsIGhvbGVzIDwke2hvbGVGaWxsfSUgYXJlYSBvZiBwcmltYXJ5IHJlZ2lvbi5gO1xuXG4gICAgY29uc3Qgc3RyYXlSZW1vdmVMYWJlbCA9XG4gICAgICBzdHJheVJlbW92ZSA9PT0gMCA/XG4gICAgICAgICdQYWludCBhbGwgbm9uLXByaW1hcnkgcmVnaW9ucy4nIDpcbiAgICAgICAgYERvbid0IHBhaW50IHJlZ2lvbnMgPCR7c3RyYXlSZW1vdmV9JSBhcmVhIG9mIHByaW1hcnkgcmVnaW9uLmA7XG5cbiAgICBsZXQgY3VzdG9tR2F0ZXMgPSBudWxsO1xuXG4gICAgaWYgKGFjdGl2ZUdhdGUgPT09ICdjdXN0b20nKSB7XG4gICAgICBjb25zdCBjdXN0b21SYW5nZSA9IGJydXNoTW9kdWxlLmdldHRlcnMuY3VzdG9tR2F0ZVJhbmdlKCk7XG5cbiAgICAgIGN1c3RvbUdhdGVzID0gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJ1c2gtc2V0dGluZ3MtaG9yaXpvbnRhbC1ib3hcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY3VzdG9tR2F0ZU1pblwiPk1pbjo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tdGhlbWVkIGZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgIGlkPVwic3RhcnRcIlxuICAgICAgICAgICAgICBuYW1lPVwiY3VzdG9tR2F0ZU1pblwiXG4gICAgICAgICAgICAgIG1pbj17LTEwMjR9XG4gICAgICAgICAgICAgIG1heD17MzA3Mn1cbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtjdXN0b21SYW5nZVswXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DdXN0b21HYXRlTWluQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJydXNoLXNldHRpbmdzLWhvcml6b250YWwtYm94XCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImN1c3RvbUdhdGVNYXhcIj5NYXg6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXRoZW1lZCBmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICBpZD1cInN0YXJ0XCJcbiAgICAgICAgICAgICAgbmFtZT1cImN1c3RvbUdhdGVNYXhcIlxuICAgICAgICAgICAgICBtaW49ey0xMDI0fVxuICAgICAgICAgICAgICBtYXg9ezMwNzJ9XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Y3VzdG9tUmFuZ2VbMV19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ3VzdG9tR2F0ZU1heENoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWdtZW50YXRpb24tbWVudS1mb290ZXJcIj5cbiAgICAgICAgPGgzPiBTbWFydCBDVCBHYXRlIFNlbGVjdGlvbjwvaDM+XG4gICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS10aGVtZWQgZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMub25HYXRlQ2hhbmdlfSB2YWx1ZT17YWN0aXZlR2F0ZX0+XG4gICAgICAgICAge2dhdGVzLm1hcChnYXRlID0+IChcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtnYXRlLm5hbWV9IHZhbHVlPXtnYXRlLm5hbWV9PntgJHtnYXRlLm5hbWV9IFske2dhdGUucmFuZ2VbMF19LCAke2dhdGUucmFuZ2VbMV19XWB9PC9vcHRpb24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgIHtjdXN0b21HYXRlc31cblxuICAgICAgICA8aDM+IFNtYXJ0L0F1dG8gR2F0ZSBTZXR0aW5ncyA8L2gzPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImhvbGVGaWxsXCI+e2hvbGVGaWxsTGFiZWx9PC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS10aGVtZWQgZm9ybS1jb250cm9sXCJcbiAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgIGlkPVwic3RhcnRcIlxuICAgICAgICAgIG5hbWU9XCJob2xlRmlsbFwiXG4gICAgICAgICAgbWluPXtob2xlRmlsbFJhbmdlWzBdfVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aG9sZUZpbGx9XG4gICAgICAgICAgbWF4PXtob2xlRmlsbFJhbmdlWzFdfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uSG9sZUZpbGxDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3RyYXlSZW1vdmVcIj57c3RyYXlSZW1vdmVMYWJlbH08L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXRoZW1lZCBmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgaWQ9XCJzdGFydFwiXG4gICAgICAgICAgbmFtZT1cInN0cmF5UmVtb3ZlXCJcbiAgICAgICAgICBtaW49e3N0cmF5UmVtb3ZlUmFuZ2VbMF19XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtzdHJheVJlbW92ZX1cbiAgICAgICAgICBtYXg9e3N0cmF5UmVtb3ZlUmFuZ2VbMV19XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TdHJheVJlbW92ZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWVudUlPQnV0dG9ucyBmcm9tICcuLi9jb21tb24vTWVudUlPQnV0dG9ucy5qcyc7XG5pbXBvcnQgU2VnbWVudGF0aW9uTWVudURlbGV0ZUNvbmZpcm1hdGlvbiBmcm9tICcuL1NlZ21lbnRhdGlvbk1lbnVEZWxldGVDb25maXJtYXRpb24uanMnO1xuaW1wb3J0IFNlZ21lbnRhdGlvbk1lbnVMaXN0Qm9keSBmcm9tICcuL1NlZ21lbnRhdGlvbk1lbnVMaXN0Qm9keS5qcyc7XG5pbXBvcnQgU2VnbWVudGF0aW9uTWVudUxpc3RIZWFkZXIgZnJvbSAnLi9TZWdtZW50YXRpb25NZW51TGlzdEhlYWRlci5qcyc7XG5pbXBvcnQgQnJ1c2hTZXR0aW5ncyBmcm9tICcuL0JydXNoU2V0dGluZ3MuanMnO1xuaW1wb3J0IGNvcm5lcnN0b25lVG9vbHMgZnJvbSAnY29ybmVyc3RvbmUtdG9vbHMnO1xuaW1wb3J0IHsgZWRpdFNlZ21lbnRJbnB1dCB9IGZyb20gJy4uLy4uL3V0aWwvYnJ1c2hNZXRhZGF0YUlPLmpzJztcbmltcG9ydCBvbklPQ2FuY2VsIGZyb20gJy4uL2NvbW1vbi9oZWxwZXJzL29uSU9DYW5jZWwuanMnO1xuaW1wb3J0IG9uSW1wb3J0QnV0dG9uQ2xpY2sgZnJvbSAnLi4vY29tbW9uL2hlbHBlcnMvb25JbXBvcnRCdXR0b25DbGljay5qcyc7XG5pbXBvcnQgb25FeHBvcnRCdXR0b25DbGljayBmcm9tICcuLi9jb21tb24vaGVscGVycy9vbkV4cG9ydEJ1dHRvbkNsaWNrLmpzJztcbi8vIGltcG9ydCAnLi9zZWdtZW50YXRpb25NZW51LnN0eWwnO1xuXG5pbXBvcnQgZ2V0QWN0aXZlVmlld3BvcnRFbmFibGVkRWxlbWVudCBmcm9tICcuLi8uLi91dGlsL2dldEFjdGl2ZVZpZXdwb3J0RW5hYmxlZEVsZW1lbnQuanMnO1xuaW1wb3J0IGdldFNlcmllc0luc3RhbmNlVWlkRnJvbUVuYWJsZWRFbGVtZW50IGZyb20gJy4uLy4uL3V0aWwvZ2V0U2VyaWVzSW5zdGFuY2VVaWRGcm9tRW5hYmxlZEVsZW1lbnQuanMnO1xuXG5jb25zdCBicnVzaE1vZHVsZSA9IGNvcm5lcnN0b25lVG9vbHMuc3RvcmUubW9kdWxlcy5icnVzaDtcblxuLyoqXG4gKiBAY2xhc3MgU2VnbWVudGF0aW9uTWVudSAtIFJlbmRlcnMgYSBtZW51IGZvciBpbXBvcnRpbmcsIGV4cG9ydGluZywgY3JlYXRpbmdcbiAqIGFuZCByZW5hbWluZyBTZWdtZW50cy4gQXMgd2VsbCBhcyBzZXR0aW5nIGNvbmZpZ3VyYXRpb24gc2V0dGluZ3MgZm9yXG4gKiB0aGUgQnJ1c2ggdG9vbHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlZ21lbnRhdGlvbk1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyA9IHt9KSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5nZXRTZWdtZW50TGlzdCA9IHRoaXMuZ2V0U2VnbWVudExpc3QuYmluZCh0aGlzKTtcblxuICAgIGNvbnN0IGVuYWJsZWRFbGVtZW50ID0gZ2V0QWN0aXZlVmlld3BvcnRFbmFibGVkRWxlbWVudChwcm9wcy52aWV3cG9ydHMsIHByb3BzLmFjdGl2ZUluZGV4KTtcbiAgICBjb25zdCBzZXJpZXNJbnN0YW5jZVVpZCA9IGdldFNlcmllc0luc3RhbmNlVWlkRnJvbUVuYWJsZWRFbGVtZW50KGVuYWJsZWRFbGVtZW50KTtcblxuICAgIGxldCBzZWdtZW50cyA9IFtdO1xuICAgIGxldCBhY3RpdmVTZWdtZW50SW5kZXggPSAxO1xuICAgIGNvbnN0IGltcG9ydE1ldGFkYXRhID0gdGhpcy5jb25zdHJ1Y3Rvci5faW1wb3J0TWV0YWRhdGEoc2VyaWVzSW5zdGFuY2VVaWQpO1xuXG4gICAgaWYgKGVuYWJsZWRFbGVtZW50KSB7XG4gICAgICBjb25zdCBzZWdtZW50TGlzdCA9IHRoaXMuZ2V0U2VnbWVudExpc3QoZW5hYmxlZEVsZW1lbnQsIHNlcmllc0luc3RhbmNlVWlkKTtcblxuICAgICAgc2VnbWVudHMgPSBzZWdtZW50TGlzdC5zZWdtZW50cztcbiAgICAgIGFjdGl2ZVNlZ21lbnRJbmRleCA9IHNlZ21lbnRMaXN0LnNlZ21lbnRzO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbXBvcnRNZXRhZGF0YSxcbiAgICAgIHNlZ21lbnRzLFxuICAgICAgc2VyaWVzSW5zdGFuY2VVaWQsXG4gICAgICBlbmFibGVkRWxlbWVudCxcbiAgICAgIGRlbGV0ZUNvbmZpcm1hdGlvbk9wZW46IGZhbHNlLFxuICAgICAgc2VnbWVudFRvRGVsZXRlOiAxLFxuICAgICAgYWN0aXZlU2VnbWVudEluZGV4LFxuICAgICAgaW1wb3J0aW5nOiBmYWxzZSxcbiAgICAgIGV4cG9ydGluZzogZmFsc2VcbiAgICB9O1xuXG4gICAgdGhpcy5vblNlZ21lbnRDaGFuZ2UgPSB0aGlzLm9uU2VnbWVudENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25FZGl0Q2xpY2sgPSB0aGlzLm9uRWRpdENsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jb25maXJtRGVsZXRlT25EZWxldGVDbGljayA9IHRoaXMuY29uZmlybURlbGV0ZU9uRGVsZXRlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRGVsZXRlQ2FuY2VsQ2xpY2sgPSB0aGlzLm9uRGVsZXRlQ2FuY2VsQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRGVsZXRlQ29uZmlybUNsaWNrID0gdGhpcy5vbkRlbGV0ZUNvbmZpcm1DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25JbXBvcnRCdXR0b25DbGljayA9IG9uSW1wb3J0QnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRXhwb3J0QnV0dG9uQ2xpY2sgPSBvbkV4cG9ydEJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbklPQ29tcGxldGUgPSB0aGlzLm9uSU9Db21wbGV0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25JT0NhbmNlbCA9IG9uSU9DYW5jZWwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXRTZWdtZW50TGlzdCAtIEdyYWJzIHRoZSBzZWdtZW50cyBmcm9tIHRoZSBicnVzaFN0b3JlIGFuZFxuICAgKiBwb3B1bGF0ZXMgc3RhdGUuXG4gICAqXG4gICAqIEByZXR1cm5zIHtudWxsfVxuICAgKi9cbiAgZ2V0U2VnbWVudExpc3QoZW5hYmxlZEVsZW1lbnQsIHNlcmllc0luc3RhbmNlVWlkKSB7XG4gICAgZW5hYmxlZEVsZW1lbnQgPSBlbmFibGVkRWxlbWVudCB8fCB0aGlzLnN0YXRlLmVuYWJsZWRFbGVtZW50O1xuICAgIHNlcmllc0luc3RhbmNlVWlkID0gc2VyaWVzSW5zdGFuY2VVaWQgfHwgdGhpcy5zdGF0ZS5zZXJpZXNJbnN0YW5jZVVpZDtcblxuICAgIGlmICghZW5hYmxlZEVsZW1lbnQgfHwgIXNlcmllc0luc3RhbmNlVWlkKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3Qgc2VnbWVudHMgPSB0aGlzLmNvbnN0cnVjdG9yLl9zZWdtZW50cyhlbmFibGVkRWxlbWVudCk7XG4gICAgY29uc3QgYWN0aXZlU2VnbWVudEluZGV4ID0gYnJ1c2hNb2R1bGUuZ2V0dGVycy5hY3RpdmVTZWdtZW50SW5kZXgoZW5hYmxlZEVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNlZ21lbnRzLFxuICAgICAgYWN0aXZlU2VnbWVudEluZGV4XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvbklPQ29tcGxldGUgLSBBIGNhbGxiYWNrIGV4ZWN1dGVkIG9uIHN1Y2Nlc2Z1bCBjb21wbGV0aW9uIG9mIGFuXG4gICAqIElPIG9wcGVyYXRpb24uIFJlY2FsY3VsYXRlcyB0aGUgU2VnbWVudGF0aW9uIHN0YXRlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7dHlwZX0gIGRlc2NyaXB0aW9uXG4gICAqL1xuICBvbklPQ29tcGxldGUoKSB7XG4gICAgY29uc3QgeyBzZXJpZXNJbnN0YW5jZVVpZCwgZW5hYmxlZEVsZW1lbnQgfSA9IHRoaXMuc3RhdGUuc2VyaWVzSW5zdGFuY2VVaWQ7XG5cbiAgICBjb25zdCBpbXBvcnRNZXRhZGF0YSA9IHRoaXMuY29uc3RydWN0b3IuX2ltcG9ydE1ldGFkYXRhKHNlcmllc0luc3RhbmNlVWlkKTtcbiAgICBjb25zdCBzZWdtZW50cyA9IHRoaXMuY29uc3RydWN0b3IuX3NlZ21lbnRzKGVuYWJsZWRFbGVtZW50KTtcbiAgICBjb25zdCBhY3RpdmVTZWdtZW50SW5kZXggPSBicnVzaE1vZHVsZS5nZXR0ZXJzLmFjdGl2ZVNlZ21lbnRJbmRleChlbmFibGVkRWxlbWVudCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGltcG9ydE1ldGFkYXRhLFxuICAgICAgc2VnbWVudHMsXG4gICAgICBhY3RpdmVTZWdtZW50SW5kZXgsXG4gICAgICBpbXBvcnRpbmc6IGZhbHNlLFxuICAgICAgZXhwb3J0aW5nOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uU2VnbWVudENoYW5nZSAtIENhbGxiYWNrIHRoYXQgY2hhbmdlcyB0aGUgYWN0aXZlIHNlZ21lbnQgYmVpbmcgZHJhd24uXG4gICAqXG4gICAqIEBwYXJhbSAge051bWJlcn0gc2VnbWVudEluZGV4IFRoZSBpbmRleCBvZiB0aGUgc2VnbWVudCB0byBzZXQgYWN0aXZlLlxuICAgKiBAcmV0dXJucyB7bnVsbH1cbiAgICovXG4gIG9uU2VnbWVudENoYW5nZShzZWdtZW50SW5kZXgpIHtcbiAgICBjb25zdCBlbmFibGVkRWxlbWVudCA9IHRoaXMuc3RhdGUuZWxlbWVudDtcblxuICAgIGJydXNoTW9kdWxlLnNldHRlcnMuYWN0aXZlU2VnbWVudEluZGV4KGVuYWJsZWRFbGVtZW50LCBzZWdtZW50SW5kZXgpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZVNlZ21lbnRJbmRleDogc2VnbWVudEluZGV4IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uRWRpdENsaWNrIC0gQSBjYWxsYmFjayB0aGF0IHRyaWdnZXJzIG1ldGFkYXRhIGlucHV0IGZvciBhIHNlZ21lbnQuXG4gICAqXG4gICAqIEBwYXJhbSAge051bWJlcn0gc2VnbWVudEluZGV4IFRoZSBpbmRleCBvZiB0aGUgc2VnbWVudCBtZXRhZGF0YSB0byBlZGl0LlxuICAgKiBAcGFyYW0gIHtvYmplY3R9ICAgbWV0YWRhdGEgICAgIFRoZSBjdXJyZW50IG1ldGFkYXRhIG9mIHRoZSBzZWdtZW50LlxuICAgKiBAcmV0dXJucyB7bnVsbH1cbiAgICovXG4gIG9uRWRpdENsaWNrKHNlZ21lbnRJbmRleCwgbWV0YWRhdGEpIHtcbiAgICBlZGl0U2VnbWVudElucHV0KHNlZ21lbnRJbmRleCwgbWV0YWRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNvbmZpcm1EZWxldGVPbkRlbGV0ZUNsaWNrIC0gQSBjYWxsYmFjayB0aGF0IHRyaWdnZXJzIGNvbmZpcm1hdGlvbiBvZiBzZWdtZW50IGRlbGV0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHNlZ21lbnRJbmRleCBUaGUgaW5kZXggb2YgdGhlIHNlZ21lbnQgYmVpbmcgZGVsZXRlZC5cbiAgICogQHJldHVybnMge251bGx9XG4gICAqL1xuICBjb25maXJtRGVsZXRlT25EZWxldGVDbGljayhzZWdtZW50SW5kZXgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRlbGV0ZUNvbmZpcm1hdGlvbk9wZW46IHRydWUsXG4gICAgICBzZWdtZW50VG9EZWxldGU6IHNlZ21lbnRJbmRleFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uRGVsZXRlQ29uZmlybUNsaWNrIC0gQSBjYWxsYmFjayB0aGF0IGRlbGV0ZXMgYSBzZWdtZW50IGZvcm0gdGhlIHNlcmllcy5cbiAgICpcbiAgICogQHJldHVybnMge251bGx9XG4gICAqL1xuICBvbkRlbGV0ZUNvbmZpcm1DbGljaygpIHtcbiAgICBjb25zdCB7IHNlZ21lbnRUb0RlbGV0ZSwgZW5hYmxlZEVsZW1lbnQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBicnVzaE1vZHVsZS5zZXR0ZXJzLmRlbGV0ZVNlZ21lbnQoZW5hYmxlZEVsZW1lbnQsIHNlZ21lbnRUb0RlbGV0ZSk7XG5cbiAgICBjb25zdCBzZWdtZW50cyA9IHRoaXMuY29uc3RydWN0b3IuX3NlZ21lbnRzKGVuYWJsZWRFbGVtZW50KTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGVsZXRlQ29uZmlybWF0aW9uT3BlbjogZmFsc2UsXG4gICAgICBzZWdtZW50c1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uRGVsZXRlQ2FuY2VsQ2xpY2sgLSBBIGNhbGxiYWNrIHRoYXQgY2xvc2VzIHRoZSBkZWxldGUgY29uZmlybWF0aW9uIHdpbmRvd1xuICAgKiBhbmQgYWJvcnRzIGRlbGV0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyB7bnVsbH1cbiAgICovXG4gIG9uRGVsZXRlQ2FuY2VsQ2xpY2soKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkZWxldGVDb25maXJtYXRpb25PcGVuOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIF9pbXBvcnRNZXRhZGF0YSAtIFJldHVybnMgdGhlIGltcG9ydCBtZXRhZGF0YSBmb3IgdGhlIGFjdGl2ZSBzZXJpZXMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtvYmplY3R9IFRoZSBpbXBvcnRNZXRhZGF0YS5cbiAgICovXG4gIHN0YXRpYyBfaW1wb3J0TWV0YWRhdGEoc2VyaWVzSW5zdGFuY2VVaWQpIHtcbiAgICBjb25zdCBpbXBvcnRNZXRhZGF0YSA9IGJydXNoTW9kdWxlLmdldHRlcnMuaW1wb3J0TWV0YWRhdGEoc2VyaWVzSW5zdGFuY2VVaWQpO1xuXG4gICAgaWYgKGltcG9ydE1ldGFkYXRhKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsYWJlbDogaW1wb3J0TWV0YWRhdGEubGFiZWwsXG4gICAgICAgIHR5cGU6IGltcG9ydE1ldGFkYXRhLnR5cGUsXG4gICAgICAgIG5hbWU6IGltcG9ydE1ldGFkYXRhLm5hbWUsXG4gICAgICAgIG1vZGlmaWVkOiBpbXBvcnRNZXRhZGF0YS5tb2RpZmllZCA/ICd0cnVlJyA6ICcgZmFsc2UnXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiAnTmV3IFNlZ21lbnRhdGlvbiBDb2xsZWN0aW9uJyxcbiAgICAgIGxhYmVsOiAnJ1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogX3NlZ21lbnRzIC0gUmV0dXJucyBhbiBhcnJheSBvZiBzZWdtZW50IG1ldGFkYXRhIGZvciB0aGUgYWN0aXZlIHNlcmllcy5cbiAgICpcbiAgICogQHJldHVybnMge29iamVjdFtdfSBBbiBhcnJheSBvZiBzZWdtZW50IG1ldGFkYXRhLlxuICAgKi9cbiAgc3RhdGljIF9zZWdtZW50cyhlbGVtZW50KSB7XG4gICAgLy8gVE9ETyAtPiBzdXBwb3J0IGZvciBtdWx0aXBsZSBsYWJlbG1hcHMuXG4gICAgY29uc3Qgc2VnbWVudE1ldGFkYXRhID0gYnJ1c2hNb2R1bGUuZ2V0dGVycy5tZXRhZGF0YShlbGVtZW50KTtcblxuICAgIGlmICghc2VnbWVudE1ldGFkYXRhKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3Qgc2VnbWVudHMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VnbWVudE1ldGFkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoc2VnbWVudE1ldGFkYXRhW2ldKSB7XG4gICAgICAgIHNlZ21lbnRzLnB1c2goe1xuICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgIG1ldGFkYXRhOiBzZWdtZW50TWV0YWRhdGFbaV1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlZ21lbnRzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGltcG9ydE1ldGFkYXRhLFxuICAgICAgc2VnbWVudHMsXG4gICAgICBkZWxldGVDb25maXJtYXRpb25PcGVuLFxuICAgICAgc2VnbWVudFRvRGVsZXRlLFxuICAgICAgYWN0aXZlU2VnbWVudEluZGV4LFxuICAgICAgZW5hYmxlZEVsZW1lbnQsXG4gICAgICBpbXBvcnRpbmcsXG4gICAgICBleHBvcnRpbmdcbiAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHsgSW1wb3J0Q2FsbGJhY2tPckNvbXBvbmVudCwgRXhwb3J0Q2FsbGJhY2tPckNvbXBvbmVudCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBjb21wb25lbnQ7XG5cbiAgICBpZiAoaW1wb3J0aW5nKSB7XG4gICAgICBjb21wb25lbnQgPSA8SW1wb3J0Q2FsbGJhY2tPckNvbXBvbmVudCBvbkltcG9ydENvbXBsZXRlPXt0aGlzLm9uSU9Db21wbGV0ZX0gb25JbXBvcnRDYW5jZWw9e3RoaXMub25JT0NhbmNlbH0gLz47XG4gICAgfSBlbHNlIGlmIChleHBvcnRpbmcpIHtcbiAgICAgIGNvbXBvbmVudCA9IDxFeHBvcnRDYWxsYmFja09yQ29tcG9uZW50IG9uRXhwb3J0Q29tcGxldGU9e3RoaXMub25JT0NvbXBsZXRlfSBvbkV4cG9ydENhbmNlbD17dGhpcy5vbklPQ2FuY2VsfSAvPjtcbiAgICB9IGVsc2UgaWYgKGRlbGV0ZUNvbmZpcm1hdGlvbk9wZW4pIHtcbiAgICAgIGNvbnN0IHNlZ21lbnRMYWJlbCA9IHNlZ21lbnRzLmZpbmQoc2VnbWVudCA9PiBzZWdtZW50LmluZGV4ID09PSBzZWdtZW50VG9EZWxldGUpLm1ldGFkYXRhLlNlZ21lbnRMYWJlbDtcblxuICAgICAgY29tcG9uZW50ID0gKFxuICAgICAgICA8U2VnbWVudGF0aW9uTWVudURlbGV0ZUNvbmZpcm1hdGlvblxuICAgICAgICAgIHNlZ21lbnRMYWJlbD17c2VnbWVudExhYmVsfVxuICAgICAgICAgIG9uRGVsZXRlQ29uZmlybUNsaWNrPXt0aGlzLm9uRGVsZXRlQ29uZmlybUNsaWNrfVxuICAgICAgICAgIG9uRGVsZXRlQ2FuY2VsQ2xpY2s9e3RoaXMub25EZWxldGVDYW5jZWxDbGlja31cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBvbmVudCA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWdtZW50YXRpb24tbWVudS1jb21wb25lbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlZ21lbnRhdGlvbi1tZW51LWxpc3RcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VnbWVudGF0aW9uLW1lbnUtaGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxoMz5TZWdtZW50czwvaDM+XG4gICAgICAgICAgICAgIDxNZW51SU9CdXR0b25zXG4gICAgICAgICAgICAgICAgSW1wb3J0Q2FsbGJhY2tPckNvbXBvbmVudD17SW1wb3J0Q2FsbGJhY2tPckNvbXBvbmVudH1cbiAgICAgICAgICAgICAgICBFeHBvcnRDYWxsYmFja09yQ29tcG9uZW50PXtFeHBvcnRDYWxsYmFja09yQ29tcG9uZW50fVxuICAgICAgICAgICAgICAgIG9uSW1wb3J0QnV0dG9uQ2xpY2s9e3RoaXMub25JbXBvcnRCdXR0b25DbGlja31cbiAgICAgICAgICAgICAgICBvbkV4cG9ydEJ1dHRvbkNsaWNrPXt0aGlzLm9uRXhwb3J0QnV0dG9uQ2xpY2t9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJwZXBwZXJtaW50LXRhYmxlXCI+XG4gICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICA8U2VnbWVudGF0aW9uTWVudUxpc3RIZWFkZXIgaW1wb3J0TWV0YWRhdGE9e2ltcG9ydE1ldGFkYXRhfSAvPlxuICAgICAgICAgICAgICAgIDxTZWdtZW50YXRpb25NZW51TGlzdEJvZHlcbiAgICAgICAgICAgICAgICAgIHNlZ21lbnRzPXtzZWdtZW50c31cbiAgICAgICAgICAgICAgICAgIGFjdGl2ZVNlZ21lbnRJbmRleD17YWN0aXZlU2VnbWVudEluZGV4fVxuICAgICAgICAgICAgICAgICAgb25TZWdtZW50Q2hhbmdlPXt0aGlzLm9uU2VnbWVudENoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uRWRpdENsaWNrPXt0aGlzLm9uRWRpdENsaWNrfVxuICAgICAgICAgICAgICAgICAgb25EZWxldGVDbGljaz17dGhpcy5jb25maXJtRGVsZXRlT25EZWxldGVDbGlja31cbiAgICAgICAgICAgICAgICAgIGVuYWJsZWRFbGVtZW50PXtlbmFibGVkRWxlbWVudH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8QnJ1c2hTZXR0aW5ncyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD57Y29tcG9uZW50fTwvUmVhY3QuRnJhZ21lbnQ+O1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0ICcuL3NlZ21lbnRhdGlvbk1lbnUuc3R5bCc7XG5cbi8qKlxuICogQGNsYXNzIFNlZ21lbnRhdGlvbk1lbnVEZWxldGVDb25maXJtYXRpb24gLSBSZW5kZXJzIGEgY29uZmlybWF0aW9uIGRpYWxvZyBmb3JcbiAqIGNvbmZpcm1hdGlvbiBvZiBzZWdtZW50IGRlbGV0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWdtZW50YXRpb25NZW51RGVsZXRlQ29uZmlybWF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMgPSB7fSkge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNlZ21lbnRMYWJlbCwgb25EZWxldGVDb25maXJtQ2xpY2ssIG9uRGVsZXRlQ2FuY2VsQ2xpY2sgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDU+V2FybmluZyE8L2g1PlxuICAgICAgICAgIDxwPkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUge3NlZ21lbnRMYWJlbH0/IFRoaXMgY2Fubm90IGJlIHVuZG9uZS48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlZy1kZWxldGUtaG9yaXpvbnRhbC1ib3hcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17b25EZWxldGVDb25maXJtQ2xpY2t9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEgZmEtY2hlY2stY2lyY2xlIGZhLTJ4XCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e29uRGVsZXRlQ2FuY2VsQ2xpY2t9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEgZmEtdGltZXMtY2lyY2xlIGZhLTJ4XCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZWdtZW50YXRpb25NZW51TGlzdEl0ZW0gZnJvbSAnLi9TZWdtZW50YXRpb25NZW51TGlzdEl0ZW0uanMnO1xuaW1wb3J0IHsgbmV3U2VnbWVudCB9IGZyb20gJy4uLy4uL3V0aWwvYnJ1c2hNZXRhZGF0YUlPLmpzJztcblxuLy8gaW1wb3J0ICcuL3NlZ21lbnRhdGlvbk1lbnUuc3R5bCc7XG5cbi8qKlxuICogQGNsYXNzIFNlZ21lbnRhdGlvbk1lbnVMaXN0Qm9keSAtIFJlbmRlcnMgYSBsaXN0IG9mIFNlZ21lbnRhdGlvbk1lbnVMaXN0SXRlbXMsXG4gKiBkaXNwbGF5aW5nIHRoZSBtZXRhZGF0YSBvZiBzZWdtZW50cy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VnbWVudGF0aW9uTWVudUxpc3RCb2R5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMgPSB7fSkge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNlZ21lbnRzLCBhY3RpdmVTZWdtZW50SW5kZXgsIG9uU2VnbWVudENoYW5nZSwgb25FZGl0Q2xpY2ssIG9uRGVsZXRlQ2xpY2ssIGVuYWJsZWRFbGVtZW50IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAge3NlZ21lbnRzLm1hcChzZWdtZW50ID0+IChcbiAgICAgICAgICA8U2VnbWVudGF0aW9uTWVudUxpc3RJdGVtXG4gICAgICAgICAgICBrZXk9e2Ake3NlZ21lbnQubWV0YWRhdGEuU2VnbWVudExhYmVsfV8ke3NlZ21lbnQuaW5kZXh9YH1cbiAgICAgICAgICAgIHNlZ21lbnRJbmRleD17c2VnbWVudC5pbmRleH1cbiAgICAgICAgICAgIG1ldGFkYXRhPXtzZWdtZW50Lm1ldGFkYXRhfVxuICAgICAgICAgICAgb25TZWdtZW50Q2hhbmdlPXtvblNlZ21lbnRDaGFuZ2V9XG4gICAgICAgICAgICBvbkVkaXRDbGljaz17b25FZGl0Q2xpY2t9XG4gICAgICAgICAgICBvbkRlbGV0ZUNsaWNrPXtvbkRlbGV0ZUNsaWNrfVxuICAgICAgICAgICAgY2hlY2tlZD17c2VnbWVudC5pbmRleCA9PT0gYWN0aXZlU2VnbWVudEluZGV4fVxuICAgICAgICAgICAgZW5hYmxlZEVsZW1lbnQ9e2VuYWJsZWRFbGVtZW50fVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoIC8+XG4gICAgICAgICAgPHRoPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2VnbWVudGF0aW9uLW1lbnUtbmV3LWJ1dHRvbiBidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17bmV3U2VnbWVudH0+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBsdXMtY2lyY2xlXCIgLz4gU2VnbWVudFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgJy4vc2VnbWVudGF0aW9uTWVudS5zdHlsJztcblxuLyoqXG4gKiBAY2xhc3MgU2VnbWVudGF0aW9uTWVudUxpc3RIZWFkZXIgLSBSZW5kZXJzIHRoZSBoZWFkZXIgZm9yIHRoZVxuICogU2VnbWVudGF0aW9uTWVudUxpc3QgdGFibGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlZ21lbnRhdGlvbk1lbnVMaXN0SGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMgPSB7fSkge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGltcG9ydE1ldGFkYXRhIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMlwiIGNsYXNzTmFtZT1cImxlZnQtYWxpZ25lZC1jZWxsIHNlZ21lbnRhdGlvbi1tZW51LWxpc3QtYm9yZGVyZWRcIj5cbiAgICAgICAgICAgIHtpbXBvcnRNZXRhZGF0YS5uYW1lfVxuICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCIgY2xhc3NOYW1lPVwicmlnaHQtYWxpZ25lZC1jZWxsIHNlZ21lbnRhdGlvbi1tZW51LWxpc3QtYm9yZGVyZWRcIj5cbiAgICAgICAgICAgIHtpbXBvcnRNZXRhZGF0YS5sYWJlbH1cbiAgICAgICAgICA8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgICB7aW1wb3J0TWV0YWRhdGEudHlwZSAmJiAoXG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCIgY2xhc3NOYW1lPVwibGVmdC1hbGlnbmVkLWNlbGwgc2VnbWVudGF0aW9uLW1lbnUtbGlzdC1ib3JkZXJlZFwiPlxuICAgICAgICAgICAgICBUeXBlOiB7aW1wb3J0TWV0YWRhdGEudHlwZX1cbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIiBjbGFzc05hbWU9XCJyaWdodC1hbGlnbmVkLWNlbGwgc2VnbWVudGF0aW9uLW1lbnUtbGlzdC1ib3JkZXJlZFwiPlxuICAgICAgICAgICAgICBNb2RpZmllZDoge2ltcG9ydE1ldGFkYXRhLm1vZGlmaWVkfVxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICApfVxuICAgICAgICA8dHIgY2xhc3NOYW1lPVwic2VnbWVudGF0aW9uLW1lbnUtbGlzdC1ib3JkZXJlZFwiPlxuICAgICAgICAgIDx0aD5QYWludDwvdGg+XG4gICAgICAgICAgPHRoPkxhYmVsPC90aD5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiY2VudGVyZWQtY2VsbFwiPlR5cGU8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJjZW50ZXJlZC1jZWxsXCI+RGVsZXRlPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjb3JuZXJzdG9uZVRvb2xzIGZyb20gJ2Nvcm5lcnN0b25lLXRvb2xzJztcblxuLy8gaW1wb3J0ICcuL3NlZ21lbnRhdGlvbk1lbnUuc3R5bCc7XG5cbmNvbnN0IGJydXNoTW9kdWxlID0gY29ybmVyc3RvbmVUb29scy5zdG9yZS5tb2R1bGVzLmJydXNoO1xuXG4vKipcbiAqIEBjbGFzcyBTZWdtZW50YXRpb25NZW51TGlzdEl0ZW0gLSBSZW5kZXJzIG1ldGFkYXRhIGZvciBhIHNpbmdsZSBzZWdtZW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWdtZW50YXRpb25NZW51TGlzdEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyA9IHt9KSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIF9nZXRUeXBlV2l0aE1vZGlmaWVyIC0gUmV0dXJucyB0aGUgc2VnbWVudCB0eXBlIHdpdGggaXRzIG1vZGlmaWVyIGFzIGEgc3RyaW5nLlxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgX2dldFR5cGVXaXRoTW9kaWZpZXIoKSB7XG4gICAgY29uc3QgeyBtZXRhZGF0YSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCB0eXBlV2l0aE1vZGlmaWVyID0gbWV0YWRhdGEuU2VnbWVudGVkUHJvcGVydHlUeXBlQ29kZVNlcXVlbmNlLkNvZGVNZWFuaW5nO1xuXG4gICAgY29uc3QgbW9kaWZpZXIgPSBtZXRhZGF0YS5TZWdtZW50ZWRQcm9wZXJ0eVR5cGVDb2RlU2VxdWVuY2UuU2VnbWVudGVkUHJvcGVydHlUeXBlTW9kaWZpZXJDb2RlU2VxdWVuY2U7XG5cbiAgICBpZiAobW9kaWZpZXIpIHtcbiAgICAgIHR5cGVXaXRoTW9kaWZpZXIgKz0gYCAoJHttb2RpZmllci5Db2RlTWVhbmluZ30pYDtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVdpdGhNb2RpZmllcjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1ldGFkYXRhLCBzZWdtZW50SW5kZXgsIG9uU2VnbWVudENoYW5nZSwgb25FZGl0Q2xpY2ssIG9uRGVsZXRlQ2xpY2ssIGNoZWNrZWQsIGVuYWJsZWRFbGVtZW50IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3Qgc2VnbWVudExhYmVsID0gbWV0YWRhdGEuU2VnbWVudExhYmVsO1xuICAgIGNvbnN0IGNvbG9ybWFwID0gYnJ1c2hNb2R1bGUuZ2V0dGVycy5hY3RpdmVDb3JuZXJzdG9uZUNvbG9yTWFwKGVuYWJsZWRFbGVtZW50KTtcbiAgICBjb25zdCBjb2xvciA9IGNvbG9ybWFwLmdldENvbG9yKHNlZ21lbnRJbmRleCk7XG4gICAgY29uc3Qgc2VnbWVudENvbG9yID0gYHJnYmEoJHtjb2xvclswXX0sICR7Y29sb3JbMV19LCAke2NvbG9yWzJdfSwgMS4wIClgO1xuXG4gICAgY29uc3Qgc2VnbWVudENhdGVnb3J5ID0gbWV0YWRhdGEuU2VnbWVudGVkUHJvcGVydHlDYXRlZ29yeUNvZGVTZXF1ZW5jZS5Db2RlTWVhbmluZztcbiAgICBjb25zdCB0eXBlV2l0aE1vZGlmaWVyID0gdGhpcy5fZ2V0VHlwZVdpdGhNb2RpZmllcigpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0cj5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNlbnRlcmVkLWNlbGxcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zcXVhcmVcIiBzdHlsZT17eyBjb2xvcjogc2VnbWVudENvbG9yIH19IC8+eycgJ31cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcbiAgICAgICAgICAgICAgb25TZWdtZW50Q2hhbmdlKHNlZ21lbnRJbmRleCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsZWZ0LWFsaWduZWQtY2VsbFwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzZWdtZW50YXRpb24tbWVudS1uYW1lLWxpbmtcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBvbkVkaXRDbGljayhzZWdtZW50SW5kZXgsIG1ldGFkYXRhKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NlZ21lbnRMYWJlbH1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VnbWVudGF0aW9uLW1lbnUtbmFtZS1saW5rXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgb25FZGl0Q2xpY2soc2VnbWVudEluZGV4LCBtZXRhZGF0YSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0eXBlV2l0aE1vZGlmaWVyfVxuICAgICAgICAgICAgeycgLSAnfVxuICAgICAgICAgICAge3NlZ21lbnRDYXRlZ29yeX1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjZW50ZXJlZC1jZWxsXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXNlY29uZGFyeVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIG9uRGVsZXRlQ2xpY2soc2VnbWVudEluZGV4KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGltZXNcIiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IGluaXQsIHsgVE9PTF9OQU1FUyB9IGZyb20gJy4vaW5pdC5qcyc7XG5pbXBvcnQgU2VnbWVudGF0aW9uTWVudSBmcm9tICcuL2NvbXBvbmVudHMvc2VnbWVudGF0aW9uTWVudS9TZWdtZW50YXRpb25NZW51LmpzJztcbi8vIGltcG9ydCBSb2lDb250b3VyTWVudSBmcm9tICcuL2NvbXBvbmVudHMvcm9pQ29udG91ck1lbnUvUm9pQ29udG91ck1lbnUuanMnO1xuaW1wb3J0IER1bW15IGZyb20gJy4vY29tcG9uZW50cy9EdW1teS5qcyc7XG5cbmNvbnN0IFRPT0xCQVJfQlVUVE9OX1RZUEVTID0ge1xuICBDT01NQU5EOiAnY29tbWFuZCcsXG4gIFNFVF9UT09MX0FDVElWRTogJ3NldFRvb2xBY3RpdmUnXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8qKlxuICAgKiBPbmx5IHJlcXVpcmVkIHByb3BlcnR5LiBTaG91bGQgYmUgYSB1bmlxdWUgdmFsdWUgYWNyb3NzIGFsbCBleHRlbnNpb25zLlxuICAgKi9cbiAgaWQ6ICdvaGlmLXNlZ21lbnRhdGlvbi1leHRlbnNpb24nLFxuXG4gIHByZVJlZ2lzdHJhdGlvbihjb25maWd1cmF0aW9uID0ge30pIHtcbiAgICBpbml0KGNvbmZpZ3VyYXRpb24pO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgb25lIG9yIG1vcmUgbmFtZWQgY29tbWFuZHMgc2NvcGVkIHRvIGEgY29udGV4dC4gQ29tbWFuZHMgYXJlXG4gICAqIHRoZSBwcmltYXJ5IG1lYW5zIGZvci4uLlxuICAgKi9cbiAgZ2V0Q29tbWFuZHNNb2R1bGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlZmF1bHRDb250ZXh0OiAnVklFV0VSJyxcbiAgICAgIGFjdGlvbnM6IFtdLFxuICAgICAgZGVmaW5pdGlvbnM6IFtdXG4gICAgfTtcbiAgfSxcblxuICAvKipcbiAgICogQWxsb3dzIHlvdSB0byBwcm92aWRlIHRvb2xiYXIgZGVmaW5pdGlvbnMgdGhhdCB3aWxsIGJlIG1lcmdlZCB3aXRoIGFueVxuICAgKiBleGlzdGluZyBhcHBsaWNhdGlvbiB0b29sYmFyIGNvbmZpZ3VyYXRpb24uIFVzZWQgdG8gZGV0ZXJtaW5lIHdoaWNoXG4gICAqIGJ1dHRvbnMgc2hvdWxkIGJlIHZpc2libGUgd2hlbiwgdGhlaXIgb3JkZXIsIHdoYXQgaGFwcGVucyB3aGVuIHRoZXkncmVcbiAgICogY2xpY2tlZCwgZXRjLlxuICAgKi9cbiAgZ2V0VG9vbGJhck1vZHVsZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVmaW5pdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnZnJlZWhhbmRSb2lUb29scycsXG4gICAgICAgICAgbGFiZWw6ICdST0knLFxuICAgICAgICAgIGljb246ICdsZXZlbCcsXG4gICAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ0ZyZWVoYW5kUm9pJyxcbiAgICAgICAgICAgICAgbGFiZWw6ICdEcmF3JyxcbiAgICAgICAgICAgICAgaWNvbjogJ2xldmVsJyxcbiAgICAgICAgICAgICAgdHlwZTogVE9PTEJBUl9CVVRUT05fVFlQRVMuU0VUX1RPT0xfQUNUSVZFLFxuICAgICAgICAgICAgICBjb21tYW5kTmFtZTogJ3NldFRvb2xBY3RpdmUnLFxuICAgICAgICAgICAgICBjb21tYW5kT3B0aW9uczogeyB0b29sTmFtZTogVE9PTF9OQU1FUy5GUkVFSEFORF9ST0lfM0RfVE9PTCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ0ZyZWVoYW5kUm9pU2N1bHB0b3InLFxuICAgICAgICAgICAgICBsYWJlbDogJ1NjdWxwdCcsXG4gICAgICAgICAgICAgIGljb246ICdsZXZlbCcsXG4gICAgICAgICAgICAgIHR5cGU6IFRPT0xCQVJfQlVUVE9OX1RZUEVTLlNFVF9UT09MX0FDVElWRSxcbiAgICAgICAgICAgICAgY29tbWFuZE5hbWU6ICdzZXRUb29sQWN0aXZlJyxcbiAgICAgICAgICAgICAgY29tbWFuZE9wdGlvbnM6IHsgdG9vbE5hbWU6IFRPT0xfTkFNRVMuRlJFRUhBTkRfUk9JXzNEX1NDVUxQVE9SX1RPT0wgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnYnJ1c2hUb29scycsXG4gICAgICAgICAgbGFiZWw6ICdTZWdtZW50JyxcbiAgICAgICAgICBpY29uOiAnbGV2ZWwnLFxuICAgICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdCcnVzaCcsXG4gICAgICAgICAgICAgIGxhYmVsOiAnTWFudWFsJyxcbiAgICAgICAgICAgICAgaWNvbjogJ2xldmVsJyxcbiAgICAgICAgICAgICAgdHlwZTogVE9PTEJBUl9CVVRUT05fVFlQRVMuU0VUX1RPT0xfQUNUSVZFLFxuICAgICAgICAgICAgICBjb21tYW5kTmFtZTogJ3NldFRvb2xBY3RpdmUnLFxuICAgICAgICAgICAgICBjb21tYW5kT3B0aW9uczogeyB0b29sTmFtZTogVE9PTF9OQU1FUy5CUlVTSF8zRF9UT09MIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnQnJ1c2gzREhVR2F0ZWRUb29sJyxcbiAgICAgICAgICAgICAgbGFiZWw6ICdTbWFydCBDVCcsXG4gICAgICAgICAgICAgIGljb246ICdsZXZlbCcsXG4gICAgICAgICAgICAgIHR5cGU6IFRPT0xCQVJfQlVUVE9OX1RZUEVTLlNFVF9UT09MX0FDVElWRSxcbiAgICAgICAgICAgICAgY29tbWFuZE5hbWU6ICdzZXRUb29sQWN0aXZlJyxcbiAgICAgICAgICAgICAgY29tbWFuZE9wdGlvbnM6IHsgdG9vbE5hbWU6IFRPT0xfTkFNRVMuQlJVU0hfM0RfSFVfR0FURURfVE9PTCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ0JydXNoM0RBdXRvR2F0ZWRUb29sJyxcbiAgICAgICAgICAgICAgbGFiZWw6ICdBdXRvJyxcbiAgICAgICAgICAgICAgaWNvbjogJ2xldmVsJyxcbiAgICAgICAgICAgICAgdHlwZTogVE9PTEJBUl9CVVRUT05fVFlQRVMuU0VUX1RPT0xfQUNUSVZFLFxuICAgICAgICAgICAgICBjb21tYW5kTmFtZTogJ3NldFRvb2xBY3RpdmUnLFxuICAgICAgICAgICAgICBjb21tYW5kT3B0aW9uczogeyB0b29sTmFtZTogVE9PTF9OQU1FUy5CUlVTSF8zRF9BVVRPX0dBVEVEX1RPT0wgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGRlZmF1bHRDb250ZXh0OiAnQUNUSVZFX1ZJRVdQT1JUOjpDT1JORVJTVE9ORSdcbiAgICB9O1xuICB9LFxuXG4gIC8qKlxuICAgKiBUb3RhbGx5IGltcGxlbWVudGVkLCBmb3IgcmVhbCBub3cuXG4gICAqL1xuICBnZXRQYW5lbE1vZHVsZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVudU9wdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGljb246ICd0aC1saXN0JyxcbiAgICAgICAgICBsYWJlbDogJ1NlZ21lbnRzJyxcbiAgICAgICAgICB0YXJnZXQ6ICdzZWdtZW50LXBhbmVsJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWNvbjogJ3RoJyxcbiAgICAgICAgICBsYWJlbDogJ0NvbnRvdXJzJyxcbiAgICAgICAgICB0YXJnZXQ6ICdjb250b3VyLXBhbmVsJ1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgY29tcG9uZW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICdzZWdtZW50LXBhbmVsJyxcbiAgICAgICAgICBjb21wb25lbnQ6IFNlZ21lbnRhdGlvbk1lbnVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnY29udG91ci1wYW5lbCcsXG4gICAgICAgICAgY29tcG9uZW50OiBEdW1teVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgZGVmYXVsdENvbnRleHQ6IFsnVklFV0VSJ11cbiAgICB9O1xuICB9XG59O1xuIiwiaW1wb3J0IHsgc3RvcmUsIHJlZ2lzdGVyLCBhZGRUb29sIH0gZnJvbSAnY29ybmVyc3RvbmUtdG9vbHMnO1xuaW1wb3J0IGZyZWVoYW5kM0RNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL2ZyZWVoYW5kM0RNb2R1bGUuanMnO1xuaW1wb3J0IGV4dGVuZEJydXNoTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9leHRlbmRCcnVzaE1vZHVsZS5qcyc7XG5cbmltcG9ydCBCcnVzaDNEVG9vbCBmcm9tICcuL3Rvb2xzL0JydXNoM0RUb29sLmpzJztcbmltcG9ydCBCcnVzaDNESFVHYXRlZFRvb2wgZnJvbSAnLi90b29scy9CcnVzaDNESFVHYXRlZFRvb2wuanMnO1xuaW1wb3J0IEJydXNoM0RBdXRvR2F0ZWRUb29sIGZyb20gJy4vdG9vbHMvQnJ1c2gzREF1dG9HYXRlZFRvb2wuanMnO1xuaW1wb3J0IEZyZWVoYW5kUm9pM0RUb29sIGZyb20gJy4vdG9vbHMvRnJlZWhhbmRSb2kzRFRvb2wuanMnO1xuaW1wb3J0IEZyZWVoYW5kUm9pM0RTY3VscHRvclRvb2wgZnJvbSAnLi90b29scy9GcmVlaGFuZFJvaTNEU2N1bHB0b3JUb29sLmpzJztcblxubGV0IFRPT0xfTkFNRVMgPSB7fTtcblxuZXhwb3J0IHsgVE9PTF9OQU1FUyB9O1xuXG5jb25zdCBtb2R1bGVzID0gc3RvcmUubW9kdWxlcztcblxuY29uc3QgZGVmYXVsdENvbmZpZyA9IHtcbiAgbWF4UmFkaXVzOiA2NCxcbiAgaG9sZUZpbGw6IDIsXG4gIGhvbGVGaWxsUmFuZ2U6IFswLCAyMF0sXG4gIHN0cmF5UmVtb3ZlOiA1LFxuICBzdHJheVJlbW92ZVJhbmdlOiBbMCwgOTldLFxuICBpbnRlcnBvbGF0ZTogZmFsc2UsXG4gIHNob3dGcmVlaGFuZFN0YXRzOiBmYWxzZSxcbiAgYnJ1c2gzZFRvb2xOYW1lOiAnQnJ1c2gzRFRvb2wnLFxuICBicnVzaDNESFVHYXRlZFRvb2xOYW1lOiAnQnJ1c2gzREhVR2F0ZWRUb29sJyxcbiAgYnJ1c2gzREF1dG9HYXRlZFRvb2w6ICdCcnVzaDNEQXV0b0dhdGVkVG9vbCcsXG4gIGZyZWVoYW5kUm9pM0RUb29sOiAnRnJlZWhhbmRSb2kzRFRvb2wnLFxuICBmcmVlaGFuZFJvaTNEU2N1bHB0b3JUb29sOiAnRnJlZWhhbmRSb2kzRFNjdWxwdG9yVG9vbCcsXG4gIGdhdGVzOiBbXG4gICAge1xuICAgICAgLy8gaHR0cHM6Ly93d3cubmNiaS5ubG0ubmloLmdvdi9wbWMvYXJ0aWNsZXMvUE1DNDMwOTUyMi9cbiAgICAgIG5hbWU6ICdhZGlwb3NlJyxcbiAgICAgIHJhbmdlOiBbLTE5MCwgLTMwXVxuICAgIH0sXG4gICAge1xuICAgICAgLy8gaHR0cHM6Ly93d3cubmNiaS5ubG0ubmloLmdvdi9wbWMvYXJ0aWNsZXMvUE1DNDMwOTUyMi9cbiAgICAgIG5hbWU6ICdtdXNjbGUnLFxuICAgICAgcmFuZ2U6IFstMjksIDE1MF1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdjdXN0b20nLFxuICAgICAgcmFuZ2U6IFswLCAxMDBdXG4gICAgfVxuICBdXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KGNvbmZpZ3VyYXRpb24gPSB7fSkge1xuICBjb25zdCBicnVzaE1vZHVsZSA9IG1vZHVsZXMuYnJ1c2g7XG4gIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRDb25maWcsIGNvbmZpZ3VyYXRpb24pO1xuXG4gIGV4dGVuZEJydXNoTW9kdWxlKGJydXNoTW9kdWxlLCBjb25maWcpO1xuXG4gIHJlZ2lzdGVyKCdtb2R1bGUnLCAnZnJlZWhhbmQzRCcsIGZyZWVoYW5kM0RNb2R1bGUpO1xuICBjb25zdCBmcmVlaGFuZDNEU3RvcmUgPSBtb2R1bGVzLmZyZWVoYW5kM0Q7XG5cbiAgZnJlZWhhbmQzRFN0b3JlLnN0YXRlLmludGVycG9sYXRlID0gY29uZmlnLmludGVycG9sYXRlO1xuICBmcmVlaGFuZDNEU3RvcmUuc3RhdGUuZGlzcGxheVN0YXRzID0gY29uZmlnLnNob3dGcmVlaGFuZFN0YXRzO1xuXG4gIGFkZFRvb2woQnJ1c2gzRFRvb2wsIHsgbmFtZTogY29uZmlnLmJydXNoM2RUb29sTmFtZSB9KTtcbiAgYWRkVG9vbChCcnVzaDNESFVHYXRlZFRvb2wsIHsgbmFtZTogY29uZmlnLmJydXNoM0RIVUdhdGVkVG9vbE5hbWUgfSk7XG4gIGFkZFRvb2woQnJ1c2gzREF1dG9HYXRlZFRvb2wsIHsgbmFtZTogY29uZmlnLmJydXNoM0RBdXRvR2F0ZWRUb29sIH0pO1xuICBhZGRUb29sKEZyZWVoYW5kUm9pM0RUb29sLCB7IG5hbWU6IGNvbmZpZy5mcmVlaGFuZFJvaTNEVG9vbCB9KTtcbiAgYWRkVG9vbChGcmVlaGFuZFJvaTNEU2N1bHB0b3JUb29sLCB7XG4gICAgbmFtZTogY29uZmlnLmZyZWVoYW5kUm9pM0RTY3VscHRvclRvb2wsXG4gICAgcmVmZXJlbmNlZFRvb2xOYW1lOiBjb25maWcuZnJlZWhhbmRSb2kzRFRvb2xcbiAgfSk7XG5cbiAgLy8gVE9ETyAtPiBDbGVhbiB0aGlzIHVwIGEgYml0IGFmdGVyIFBXLlxuICBUT09MX05BTUVTLkZSRUVIQU5EX1JPSV8zRF9UT09MID0gY29uZmlnLmZyZWVoYW5kUm9pM0RUb29sO1xuICBUT09MX05BTUVTLkZSRUVIQU5EX1JPSV8zRF9TQ1VMUFRPUl9UT09MID0gY29uZmlnLmZyZWVoYW5kUm9pM0RTY3VscHRvclRvb2w7XG4gIFRPT0xfTkFNRVMuQlJVU0hfM0RfVE9PTCA9IGNvbmZpZy5icnVzaDNkVG9vbE5hbWU7XG4gIFRPT0xfTkFNRVMuQlJVU0hfM0RfQVVUT19HQVRFRF9UT09MID0gY29uZmlnLmJydXNoM0RBdXRvR2F0ZWRUb29sO1xuICBUT09MX05BTUVTLkJSVVNIXzNEX0hVX0dBVEVEX1RPT0wgPSBjb25maWcuYnJ1c2gzREhVR2F0ZWRUb29sTmFtZTtcblxuICBjb25zb2xlLmxvZyhjb25maWcpO1xuXG4gIGNvbnNvbGUubG9nKFRPT0xfTkFNRVMpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXh0ZW5kQnJ1c2hNb2R1bGUoYnJ1c2hNb2R1bGUsIGNvbmZpZykge1xuICBjb25zdCBicnVzaFN0YXRlID0gYnJ1c2hNb2R1bGUuc3RhdGU7XG4gIGNvbnN0IGdldHRlcnMgPSBicnVzaE1vZHVsZS5nZXR0ZXJzO1xuICBjb25zdCBzZXR0ZXJzID0gYnJ1c2hNb2R1bGUuc2V0dGVycztcblxuICBicnVzaFN0YXRlLmhvbGVGaWxsID0gY29uZmlnLmhvbGVGaWxsO1xuICBicnVzaFN0YXRlLmhvbGVGaWxsUmFuZ2UgPSBjb25maWcuaG9sZUZpbGxSYW5nZTtcbiAgYnJ1c2hTdGF0ZS5zdHJheVJlbW92ZSA9IGNvbmZpZy5zdHJheVJlbW92ZTtcbiAgYnJ1c2hTdGF0ZS5zdHJheVJlbW92ZVJhbmdlID0gY29uZmlnLnN0cmF5UmVtb3ZlUmFuZ2U7XG4gIGJydXNoU3RhdGUuZ2F0ZXMgPSBjb25maWcuZ2F0ZXM7XG4gIGJydXNoU3RhdGUuYWN0aXZlR2F0ZSA9IGJydXNoU3RhdGUuZ2F0ZXNbMF0ubmFtZTtcbiAgYnJ1c2hTdGF0ZS5tYXhSYWRpdXMgPSBjb25maWcubWF4UmFkaXVzO1xuXG4gIGdldHRlcnMuYWN0aXZlR2F0ZVJhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZUdhdGUgPSBicnVzaFN0YXRlLmFjdGl2ZUdhdGU7XG4gICAgY29uc3QgZ2F0ZXMgPSBicnVzaFN0YXRlLmdhdGVzO1xuXG4gICAgY29uc3QgZ2F0ZUluZGV4ID0gZ2F0ZXMuZmluZEluZGV4KGVsZW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIGVsZW1lbnQubmFtZSA9PT0gYWN0aXZlR2F0ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBicnVzaFN0YXRlLmdhdGVzW2dhdGVJbmRleF0ucmFuZ2U7XG4gIH07XG5cbiAgZ2V0dGVycy5jdXN0b21HYXRlUmFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2F0ZXMgPSBicnVzaFN0YXRlLmdhdGVzO1xuXG4gICAgY29uc3QgZ2F0ZUluZGV4ID0gZ2F0ZXMuZmluZEluZGV4KGVsZW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIGVsZW1lbnQubmFtZSA9PT0gJ2N1c3RvbSc7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYnJ1c2hTdGF0ZS5nYXRlc1tnYXRlSW5kZXhdLnJhbmdlO1xuICB9O1xuXG4gIHNldHRlcnMuY3VzdG9tR2F0ZVJhbmdlID0gKG1pbiwgbWF4KSA9PiB7XG4gICAgY29uc3QgZ2F0ZXMgPSBicnVzaFN0YXRlLmdhdGVzO1xuXG4gICAgY29uc3QgZ2F0ZUluZGV4ID0gZ2F0ZXMuZmluZEluZGV4KGVsZW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIGVsZW1lbnQubmFtZSA9PT0gJ2N1c3RvbSc7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjdXN0b21HYXRlUmFuZ2UgPSBicnVzaFN0YXRlLmdhdGVzW2dhdGVJbmRleF0ucmFuZ2U7XG5cbiAgICBpZiAobWluICE9PSBudWxsKSB7XG4gICAgICBjdXN0b21HYXRlUmFuZ2VbMF0gPSBtaW47XG4gICAgfVxuXG4gICAgaWYgKG1heCAhPT0gbnVsbCkge1xuICAgICAgY3VzdG9tR2F0ZVJhbmdlWzFdID0gbWF4O1xuICAgIH1cbiAgfTtcblxuICBnZXR0ZXJzLmltcG9ydE1ldGFkYXRhID0gc2VyaWVzSW5zdGFuY2VVaWQgPT4ge1xuICAgIGlmIChicnVzaE1vZHVsZS5zdGF0ZS5pbXBvcnQgJiYgYnJ1c2hNb2R1bGUuc3RhdGUuaW1wb3J0W3Nlcmllc0luc3RhbmNlVWlkXSkge1xuICAgICAgcmV0dXJuIGJydXNoTW9kdWxlLnN0YXRlLmltcG9ydFtzZXJpZXNJbnN0YW5jZVVpZF07XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9O1xuXG4gIHNldHRlcnMuaW1wb3J0TWV0YWRhdGEgPSAoc2VyaWVzSW5zdGFuY2VVaWQsIG1ldGFkYXRhKSA9PiB7XG4gICAgLy8gU3RvcmUgdGhhdCB3ZSd2ZSBpbXBvcnRlZCBhIGNvbGxlY3Rpb24gZm9yIHRoaXMgc2VyaWVzLlxuICAgIGlmICghYnJ1c2hNb2R1bGUuc3RhdGUuaW1wb3J0KSB7XG4gICAgICBicnVzaE1vZHVsZS5zdGF0ZS5pbXBvcnQgPSB7fTtcbiAgICB9XG5cbiAgICBicnVzaE1vZHVsZS5zdGF0ZS5pbXBvcnRbc2VyaWVzSW5zdGFuY2VVaWRdID0gbWV0YWRhdGE7XG4gIH07XG5cbiAgc2V0dGVycy5pbXBvcnRNb2RpZmllZCA9IHNlcmllc0luc3RhbmNlVWlkID0+IHtcbiAgICBjb25zdCBpbXBvcnRNZXRhZGF0YSA9IGJydXNoTW9kdWxlLnN0YXRlLmltcG9ydFtzZXJpZXNJbnN0YW5jZVVpZF07XG5cbiAgICBpZiAoaW1wb3J0TWV0YWRhdGEubW9kaWZpZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbXBvcnRNZXRhZGF0YS5tb2RpZmllZCA9IHRydWU7XG5cbiAgICAvLyBKYW1lc0FQZXR0c1xuICAgIC8vIFRPRE86IEZvcmNlIHVwZGF0ZSBvZiBjb21wb25lbnQuXG4gIH07XG59XG4iLCJpbXBvcnQgY29ybmVyc3RvbmUgZnJvbSAnY29ybmVyc3RvbmUtY29yZSc7XG5pbXBvcnQgZ2VuZXJhdGVVSUQgZnJvbSAnLi4vdXRpbC9nZW5lcmF0ZVVJRC5qcyc7XG5pbXBvcnQgZ2V0U2VyaWVzSW5zdGFuY2VVaWRGcm9tRW5hYmxlZEVsZW1lbnQgZnJvbSAnLi4vdXRpbC9nZXRTZXJpZXNJbnN0YW5jZVVpZEZyb21FbmFibGVkRWxlbWVudC5qcyc7XG5cbi8qKlxuICogQHR5cGVkZWYge3Nlcmllc1tdfSBzZXJpZXNDb2xsZWN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIFtcbiAqICAgc2VyaWVzMSxcbiAqICAgc2VyaWVzMlxuICogXTtcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtvYmplY3R9IHNlcmllc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IHVpZCBUaGUgc2VyaWVzSW5zdGFuY2VVaWRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBhY3RpdmVTdHJ1Y3R1cmVTZXRJbmRleCBUaGUgYWN0aXZlU3RydWN0dXJlU2V0IHdpdGhpbiB0aGUgc2VyaWVzLlxuICogQHByb3BlcnR5IHtzdHJ1Y3R1cmVTZXRbXX0gc3RydWN0dXJlU2V0Q29sbGVjdGlvbiBBbiBhcnJheSBvZiBzdHJ1Y3R1cmVTZXRzLlxuICpcbiAqIEBleGFtcGxlXG4gKiB7XG4gKiAgdWlkOiAnbXlTZXJpZXNJbnN0YW5jZVVpZCcsXG4gKiAgYWN0aXZlU3RydWN0dXJlU2V0SW5kZXg6IDAsXG4gKiAgc3RydWN0dXJlU2V0Q29sbGVjdGlvbixcbiAqIH07XG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBzdHJ1Y3R1cmVTZXRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB1aWQgVGhlIHN0cnVjdHVyZVNldFVpZFxuICogQHByb3BlcnR5IHtzdHJpbmd9IG5hbWUgQSBodW1hbiByZWFkYWJsZSBkZXNjcmlwdG9yIG9mIHRoZSBzdHJ1Y3R1cmVTZXQuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzTG9ja2VkIFdoZXRoZXIgdGhlIHN0cnVjdHVyZVNldCBpcyBpbW11dGFibGUuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHZpc2libGUgV2hldGhlciB0aGUgc3RydWN0dXJlU2V0IHNob3VsZCBiZSByZW5kZXJlZC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBhY3RpdmVST0lDb250b3VySW5kZXggVGhlIGluZGV4IG9mIHRoZSBhY3RpdmUgUk9JQ29udG91ci5cbiAqIEBwcm9wZXJ0eSB7Uk9JQ29udG91cltdfSBST0lDb250b3VyQ29sbGVjdGlvbiBBbiBhcnJheSBvZiBST0lDb250b3Vycy5cbiAqXG4gKiBAZXhhbXBsZVxuICoge1xuICogICB1aWQ6ICdteVN0cnVjdHVyZVNldFVpZCcsXG4gKiAgIG5hbWU6IGBteUxvdmVseVN0cnVjdHVyZVNldGAsXG4gKiAgIGlzTG9ja2VkOiBmYWxzZSxcbiAqICAgdmlzaWJsZTogdHJ1ZSxcbiAqICAgYWN0aXZlUk9JQ29udG91ckluZGV4OiA3LFxuICogICBST0lDb250b3VyQ29sbGVjdGlvblxuICogfTtcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFJPSUNvbnRvdXJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB1aWQgVGhlIFJPSUNvbnRvdXJVaWQuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbmFtZSBBIGh1bWFuIHJlYWRhYmxlIGRlc2NyaXB0b3Igb2YgdGhlIGJpb2xvZ2ljYWwgb2JqZWN0IHRoZSBjb250b3VyIGVuY2xvc2VzLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IGNvbG9yIEEgY3NzIGNvbG9yIHRvIHJlbmRlciB0aGUgdm9sdW1lIHdpdGguXG4gKiBAcHJvcGVydHkge251bWJlcn0gcG9seWdvbkNvdW50IFRoZSBudW1iZXIgb2YgcG9seWdvbnMgdGhhdCBjb21wcmlzZSB0aGUgUk9JQ29udG91ci5cbiAqXG4gKiBAZXhhbXBsZVxuICoge1xuICogIHVpZDogJ215Uk9JQ29udG91clVpZCcsXG4gKiAgbmFtZTogJ215TG92ZWx5Uk9JQ29udG91cicsXG4gKiAgY29sb3I6ICdjb3JuZmxvd2VyYmx1ZScsXG4gKiAgcG9seWdvbkNvdW50OiAnMzQnXG4gKiB9O1xuICovXG5cbi8vIEVhY2ggY29udG91ciByZWZlcmVuY2VzIGEgc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCwgUk9JQ29udG91clVpZC5cblxuY29uc3Qgc3RhdGUgPSB7XG4gIHNlcmllc0NvbGxlY3Rpb246IFtdLFxuICBpbnRlcnBvbGF0ZTogZmFsc2UsXG4gIGRpc3BsYXlTdGF0czogZmFsc2Vcbn07XG5cbmZ1bmN0aW9uIGNoZWNrKG9iamVjdCwgbmFtZSkge1xuICBpZiAoIW9iamVjdCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW5zdWZmaWNpZW50IGluZm9ybWF0aW9uIHByb3ZpZGVkLCBtdXN0IHByb3ZpZGUgJHtuYW1lfS5gKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTZXJpZXMoc2VyaWVzSW5zdGFuY2VVaWQpIHtcbiAgY2hlY2soc2VyaWVzSW5zdGFuY2VVaWQsICdzZXJpZXNJbnN0YW5jZVVpZCcpO1xuXG4gIHJldHVybiBzdGF0ZS5zZXJpZXNDb2xsZWN0aW9uLmZpbmQoc2VyaWVzID0+IHtcbiAgICByZXR1cm4gc2VyaWVzLnVpZCA9PT0gc2VyaWVzSW5zdGFuY2VVaWQ7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRTdHJ1Y3R1cmVTZXQoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCA9ICdERUZBVUxUJykge1xuICBjaGVjayhzdHJ1Y3R1cmVTZXRVaWQsICdzdHJ1Y3R1cmVTZXRVaWQnKTtcblxuICBjb25zdCBzZXJpZXMgPSBnZXRTZXJpZXMoc2VyaWVzSW5zdGFuY2VVaWQpO1xuXG4gIGlmICghc2VyaWVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIHNlcmllcy5zdHJ1Y3R1cmVTZXRDb2xsZWN0aW9uLmZpbmQoc3RydWN0dXJlU2V0ID0+IHtcbiAgICByZXR1cm4gc3RydWN0dXJlU2V0LnVpZCA9PT0gc3RydWN0dXJlU2V0VWlkO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Uk9JQ29udG91cihzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkLCBST0lDb250b3VyVWlkKSB7XG4gIGNoZWNrKFJPSUNvbnRvdXJVaWQsICdST0lDb250b3VyVWlkJyk7XG5cbiAgY29uc3Qgc3RydWN0dXJlU2V0ID0gZ2V0U3RydWN0dXJlU2V0KHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQpO1xuXG4gIGlmICghc3RydWN0dXJlU2V0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIHN0cnVjdHVyZVNldC5ST0lDb250b3VyQ29sbGVjdGlvbi5maW5kKFJPSUNvbnRvdXIgPT4ge1xuICAgIHJldHVybiBST0lDb250b3VyICYmIFJPSUNvbnRvdXIudWlkID09PSBST0lDb250b3VyVWlkO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Uk9JQ29udG91ckluZGV4KHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQsIFJPSUNvbnRvdXJVaWQpIHtcbiAgY2hlY2soUk9JQ29udG91clVpZCwgJ1JPSUNvbnRvdXJVaWQnKTtcblxuICBjb25zdCBzdHJ1Y3R1cmVTZXQgPSBnZXRTdHJ1Y3R1cmVTZXQoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCk7XG5cbiAgaWYgKCFzdHJ1Y3R1cmVTZXQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gc3RydWN0dXJlU2V0LlJPSUNvbnRvdXJDb2xsZWN0aW9uLmZpbmRJbmRleChST0lDb250b3VyID0+IHtcbiAgICByZXR1cm4gUk9JQ29udG91ci51aWQgPT09IFJPSUNvbnRvdXJVaWQ7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRBY3RpdmVTdHJ1Y3R1cmVTZXRJbmRleChzZXJpZXNJbnN0YW5jZVVpZCkge1xuICBjb25zdCBzZXJpZXMgPSBnZXRTZXJpZXMoc2VyaWVzSW5zdGFuY2VVaWQpO1xuXG4gIHJldHVybiBzZXJpZXMuYWN0aXZlU3RydWN0dXJlU2V0SW5kZXg7XG59XG5cbmZ1bmN0aW9uIGdldEFjdGl2ZVJPSUNvbnRvdXJJbmRleChzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkID0gJ0RFRkFVTFQnKSB7XG4gIGNvbnN0IHN0cnVjdHVyZVNldCA9IGdldFN0cnVjdHVyZVNldChzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkKTtcblxuICByZXR1cm4gc3RydWN0dXJlU2V0LmFjdGl2ZVJPSUNvbnRvdXJJbmRleDtcbn1cblxuZnVuY3Rpb24gZ2V0QWN0aXZlUk9JQ29udG91cihzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkID0gJ0RFRkFVTFQnKSB7XG4gIGNvbnN0IHN0cnVjdHVyZVNldCA9IGdldFN0cnVjdHVyZVNldChzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkKTtcblxuICBjb25zdCBhY3RpdmVST0lDb250b3VySW5kZXggPSBzdHJ1Y3R1cmVTZXQuYWN0aXZlUk9JQ29udG91ckluZGV4O1xuXG4gIGlmIChhY3RpdmVST0lDb250b3VySW5kZXggPT09IG51bGwgfHwgYWN0aXZlUk9JQ29udG91ckluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gc3RydWN0dXJlU2V0LlJPSUNvbnRvdXJDb2xsZWN0aW9uW2FjdGl2ZVJPSUNvbnRvdXJJbmRleF07XG59XG5cbmZ1bmN0aW9uIHNldFNlcmllcyhzZXJpZXNJbnN0YW5jZVVpZCkge1xuICBjaGVjayhzZXJpZXNJbnN0YW5jZVVpZCk7XG5cbiAgY29uc3Qgc2VyaWVzID0ge1xuICAgIHVpZDogc2VyaWVzSW5zdGFuY2VVaWQsXG4gICAgYWN0aXZlU3RydWN0dXJlU2V0SW5kZXg6IG51bGwsXG4gICAgc3RydWN0dXJlU2V0Q29sbGVjdGlvbjogW11cbiAgfTtcblxuICBzdGF0ZS5zZXJpZXNDb2xsZWN0aW9uLnB1c2goc2VyaWVzKTtcblxuICAvLyBBZGQgYSBkZWZhdWx0IHN0cnVjdHVyZVNldCBmb3IgdGhlIHNlcmllcy5cbiAgc2V0U3RydWN0dXJlU2V0KHNlcmllc0luc3RhbmNlVWlkLCAnZGVmYXVsdCcsIHtcbiAgICB1aWQ6ICdERUZBVUxUJ1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0U3RydWN0dXJlU2V0KHNlcmllc0luc3RhbmNlVWlkLCBuYW1lLCBvcHRpb25zID0ge30pIHtcbiAgY2hlY2sobmFtZSwgJ25hbWUnKTtcblxuICBsZXQgc2VyaWVzID0gZ2V0U2VyaWVzKHNlcmllc0luc3RhbmNlVWlkKTtcblxuICBpZiAoIXNlcmllcykge1xuICAgIC8vIEdlbmVyYXRlIHRoZSBzZXJpZXMuXG4gICAgc2V0U2VyaWVzKHNlcmllc0luc3RhbmNlVWlkKTtcbiAgICBzZXJpZXMgPSBnZXRTZXJpZXMoc2VyaWVzSW5zdGFuY2VVaWQpO1xuICB9XG5cbiAgY29uc3Qgc3RydWN0dXJlU2V0ID0ge1xuICAgIHVpZDogb3B0aW9ucy51aWQgPyBvcHRpb25zLnVpZCA6IGdlbmVyYXRlVUlEKCksXG4gICAgbmFtZSxcbiAgICBpc0xvY2tlZDogb3B0aW9ucy5pc0xvY2tlZCA/IG9wdGlvbnMuaXNMb2NrZWQgOiBmYWxzZSxcbiAgICB2aXNpYmxlOiBvcHRpb25zLnZpc2libGUgPyBvcHRpb25zLnZpc2libGUgOiB0cnVlLFxuICAgIGFjdGl2ZVJPSUNvbnRvdXJJbmRleDogb3B0aW9ucy5hY3RpdmVST0lDb250b3VySW5kZXggIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuYWN0aXZlUk9JQ29udG91ckluZGV4IDogbnVsbCxcbiAgICBST0lDb250b3VyQ29sbGVjdGlvbjogW11cbiAgfTtcblxuICBzZXJpZXMuc3RydWN0dXJlU2V0Q29sbGVjdGlvbi5wdXNoKHN0cnVjdHVyZVNldCk7XG59XG5cbmZ1bmN0aW9uIHNldFJPSUNvbnRvdXIoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCwgbmFtZSwgb3B0aW9ucyA9IHt9KSB7XG4gIGNoZWNrKG5hbWUsICduYW1lJyk7XG5cbiAgY29uc3Qgc3RydWN0dXJlU2V0ID0gZ2V0U3RydWN0dXJlU2V0KHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQpO1xuXG4gIGlmICghc3RydWN0dXJlU2V0KSB7XG4gICAgLy8gQ2FuJ3QgZ2VuZXJhdGUgdGhlIHN0cnVjdHVyZVNldCBhcyBub3QgZW5vdWdoIGluZm8gKG5vIG5hbWUpLlxuICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGdlbmVyYXRlIFJPSUNvbnRvdXIsIGFzIHRoZSBzdHJ1Y3R1cmVTZXQgd2l0aCAke3N0cnVjdHVyZVNldFVpZH0gZG9lcyBub3QgZXhpc3QuYCk7XG4gIH1cblxuICBjb25zdCBST0lDb250b3VyID0ge1xuICAgIHVpZDogb3B0aW9ucy51aWQgPyBvcHRpb25zLnVpZCA6IGdlbmVyYXRlVUlEKCksXG4gICAgbmFtZSxcbiAgICBjb2xvcjogb3B0aW9ucy5jb2xvciA/IG9wdGlvbnMuY29sb3IgOiBnZXROZXh0Q29sb3IoKSxcbiAgICBwb2x5Z29uQ291bnQ6IG9wdGlvbnMucG9seWdvbkNvdW50ID8gb3B0aW9ucy5wb2x5Z29uQ291bnQgOiAwXG4gIH07XG5cbiAgc3RydWN0dXJlU2V0LlJPSUNvbnRvdXJDb2xsZWN0aW9uLnB1c2goUk9JQ29udG91cik7XG5cbiAgcmV0dXJuIFJPSUNvbnRvdXIudWlkO1xufVxuXG5mdW5jdGlvbiBzZXRST0lDb250b3VyQW5kU2V0SW5kZXhBY3RpdmUoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCwgbmFtZSwgb3B0aW9ucyA9IHt9KSB7XG4gIHNldFJPSUNvbnRvdXIoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCwgbmFtZSwgb3B0aW9ucyk7XG5cbiAgY29uc3Qgc3RydWN0dXJlU2V0ID0gZ2V0U3RydWN0dXJlU2V0KHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQpO1xuXG4gIGNvbnN0IGluZGV4ID0gc3RydWN0dXJlU2V0LlJPSUNvbnRvdXJDb2xsZWN0aW9uLmxlbmd0aCAtIDE7XG5cbiAgc3RydWN0dXJlU2V0LmFjdGl2ZVJPSUNvbnRvdXJJbmRleCA9IGluZGV4O1xuXG4gIHJldHVybiBpbmRleDtcbn1cblxuZnVuY3Rpb24gc2V0RGVsZXRlUk9JRnJvbVN0cnVjdHVyZVNldChzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkLCBST0lDb250b3VyVWlkKSB7XG4gIGNvbnN0IHN0cnVjdHVyZVNldCA9IGdldFN0cnVjdHVyZVNldChzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkKTtcbiAgY29uc3QgUk9JQ29udG91ckNvbGxlY3Rpb24gPSBzdHJ1Y3R1cmVTZXQuUk9JQ29udG91ckNvbGxlY3Rpb247XG5cbiAgY29uc3QgUk9JQ29udG91ckluZGV4ID0gUk9JQ29udG91ckNvbGxlY3Rpb24uZmluZEluZGV4KFJPSUNvbnRvdXIgPT4ge1xuICAgIHJldHVybiBST0lDb250b3VyLnVpZCA9PT0gUk9JQ29udG91clVpZDtcbiAgfSk7XG5cbiAgUk9JQ29udG91ckNvbGxlY3Rpb24uc3BsaWNlKFJPSUNvbnRvdXJJbmRleCwgMSk7XG59XG5cbmZ1bmN0aW9uIHNldFN0cnVjdHVyZVNldE5hbWUobmFtZSwgc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCkge1xuICBjaGVjayhuYW1lLCAnbmFtZScpO1xuXG4gIGNvbnN0IHN0cnVjdHVyZVNldCA9IGdldFN0cnVjdHVyZVNldChzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkKTtcblxuICBzdHJ1Y3R1cmVTZXQubmFtZSA9IG5hbWU7XG59XG5cbmZ1bmN0aW9uIHNldERlbGV0ZVN0cnVjdHVyZVNldChzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkKSB7XG4gIGNvbnN0IHNlcmllcyA9IGdldFNlcmllcyhzZXJpZXNJbnN0YW5jZVVpZCk7XG5cbiAgY29uc3Qgc3RydWN0dXJlU2V0Q29sbGVjdGlvbiA9IHNlcmllcy5zdHJ1Y3R1cmVTZXRDb2xsZWN0aW9uO1xuXG4gIGNvbnN0IHN0cnVjdHVyZVNldEluZGV4ID0gc3RydWN0dXJlU2V0Q29sbGVjdGlvbi5maW5kSW5kZXgoc3RydWN0dXJlU2V0ID0+IHtcbiAgICByZXR1cm4gc3RydWN0dXJlU2V0LnVpZCA9PT0gc3RydWN0dXJlU2V0VWlkO1xuICB9KTtcblxuICBzdHJ1Y3R1cmVTZXRDb2xsZWN0aW9uLnNwbGljZShzdHJ1Y3R1cmVTZXRJbmRleCwgMSk7XG59XG5cbmZ1bmN0aW9uIHNldFJPSUNvbnRvdXJOYW1lKG5hbWUsIHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQsIFJPSUNvbnRvdXJVaWQpIHtcbiAgY2hlY2sobmFtZSwgJ25hbWUnKTtcblxuICBjb25zdCBST0lDb250b3VyID0gZ2V0Uk9JQ29udG91cihzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkLCBST0lDb250b3VyVWlkKTtcblxuICBST0lDb250b3VyLm5hbWUgPSBuYW1lO1xufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVTdHJ1Y3R1cmVTZXRJbmRleChpbmRleCwgc2VyaWVzSW5zdGFuY2VVaWQpIHtcbiAgY2hlY2soaW5kZXgsICdpbmRleCcpO1xuXG4gIGNvbnN0IHNlcmllcyA9IGdldFNlcmllcyhzZXJpZXNJbnN0YW5jZVVpZCk7XG5cbiAgc2VyaWVzLmFjdGl2ZVN0cnVjdHVyZVNldEluZGV4ID0gaW5kZXg7XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZVN0cnVjdHVyZVNldChzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkKSB7XG4gIGNoZWNrKHN0cnVjdHVyZVNldFVpZCwgJ3N0cnVjdHVyZVNldFVpZCcpO1xuXG4gIGNvbnN0IHNlcmllcyA9IGdldFNlcmllcyhzZXJpZXNJbnN0YW5jZVVpZCk7XG4gIGNvbnN0IHN0cnVjdHVyZVNldENvbGxlY3Rpb24gPSBzZXJpZXMuc3RydWN0dXJlU2V0Q29sbGVjdGlvbjtcblxuICBjb25zdCBzdHJ1Y3R1cmVTZXRJbmRleCA9IHN0cnVjdHVyZVNldENvbGxlY3Rpb24uZmluZEluZGV4KHN0cnVjdHVyZVNldCA9PiB7XG4gICAgcmV0dXJuIHN0cnVjdHVyZVNldC51aWQgPT09IHN0cnVjdHVyZVNldFVpZDtcbiAgfSk7XG5cbiAgc2VyaWVzLmFjdGl2ZVN0cnVjdHVyZVNldEluZGV4ID0gc3RydWN0dXJlU2V0SW5kZXg7XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZVJPSUNvbnRvdXJJbmRleChpbmRleCwgc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCA9ICdERUZBVUxUJykge1xuICBjb25zdCBzdHJ1Y3R1cmVTZXQgPSBnZXRTdHJ1Y3R1cmVTZXQoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCk7XG5cbiAgc3RydWN0dXJlU2V0LmFjdGl2ZVJPSUNvbnRvdXJJbmRleCA9IGluZGV4O1xufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVST0lDb250b3VyKHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQgPSAnREVGQVVMVCcsIFJPSUNvbnRvdXJVaWQpIHtcbiAgY2hlY2soUk9JQ29udG91clVpZCwgJ1JPSUNvbnRvdXJVaWQnKTtcblxuICBjb25zdCBzdHJ1Y3R1cmVTZXQgPSBnZXRTdHJ1Y3R1cmVTZXQoc2VyaWVzSW5zdGFuY2VVaWQsIHN0cnVjdHVyZVNldFVpZCk7XG4gIGNvbnN0IFJPSUNvbnRvdXJDb2xsZWN0aW9uID0gc3RydWN0dXJlU2V0LlJPSUNvbnRvdXJDb2xsZWN0aW9uO1xuXG4gIGNvbnN0IFJPSUNvbnRvdXJJbmRleCA9IFJPSUNvbnRvdXJDb2xsZWN0aW9uLmZpbmRJbmRleChST0lDb250b3VyID0+IHtcbiAgICByZXR1cm4gUk9JQ29udG91ci51aWQgPT09IFJPSUNvbnRvdXJVaWQ7XG4gIH0pO1xuXG4gIHN0cnVjdHVyZVNldC5hY3RpdmVST0lDb250b3VySW5kZXggPSBST0lDb250b3VySW5kZXg7XG59XG5cbmZ1bmN0aW9uIGluY3JlbWVudFBvbHlnb25Db3VudChzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkLCBST0lDb250b3VyVWlkKSB7XG4gIGNvbnN0IFJPSUNvbnRvdXIgPSBnZXRST0lDb250b3VyKHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQsIFJPSUNvbnRvdXJVaWQpO1xuXG4gIFJPSUNvbnRvdXIucG9seWdvbkNvdW50Kys7XG59XG5cbmZ1bmN0aW9uIGRlY3JlbWVudFBvbHlnb25Db3VudChzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkLCBST0lDb250b3VyVWlkKSB7XG4gIGNvbnN0IFJPSUNvbnRvdXIgPSBnZXRST0lDb250b3VyKHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQsIFJPSUNvbnRvdXJVaWQpO1xuXG4gIFJPSUNvbnRvdXIucG9seWdvbkNvdW50LS07XG59XG5cbmNvbnN0IGdldHRlcnMgPSB7XG4gIHNlcmllczogZ2V0U2VyaWVzLFxuICBzdHJ1Y3R1cmVTZXQ6IGdldFN0cnVjdHVyZVNldCxcbiAgUk9JQ29udG91cjogZ2V0Uk9JQ29udG91cixcbiAgUk9JQ29udG91ckluZGV4OiBnZXRST0lDb250b3VySW5kZXgsXG4gIGFjdGl2ZVN0cnVjdHVyZVNldEluZGV4OiBnZXRBY3RpdmVTdHJ1Y3R1cmVTZXRJbmRleCxcbiAgYWN0aXZlUk9JQ29udG91ckluZGV4OiBnZXRBY3RpdmVST0lDb250b3VySW5kZXgsXG4gIGFjdGl2ZVJPSUNvbnRvdXI6IGdldEFjdGl2ZVJPSUNvbnRvdXJcbn07XG5cbmNvbnN0IHNldHRlcnMgPSB7XG4gIHNlcmllczogc2V0U2VyaWVzLFxuICBzdHJ1Y3R1cmVTZXQ6IHNldFN0cnVjdHVyZVNldCxcbiAgUk9JQ29udG91cjogc2V0Uk9JQ29udG91cixcbiAgUk9JQ29udG91ckFuZFNldEluZGV4QWN0aXZlOiBzZXRST0lDb250b3VyQW5kU2V0SW5kZXhBY3RpdmUsXG4gIGRlbGV0ZVJPSUZyb21TdHJ1Y3R1cmVTZXQ6IHNldERlbGV0ZVJPSUZyb21TdHJ1Y3R1cmVTZXQsXG4gIGRlbGV0ZVN0cnVjdHVyZVNldDogc2V0RGVsZXRlU3RydWN0dXJlU2V0LFxuICBzdHJ1Y3R1cmVTZXROYW1lOiBzZXRTdHJ1Y3R1cmVTZXROYW1lLFxuICBST0lDb250b3VyTmFtZTogc2V0Uk9JQ29udG91ck5hbWUsXG4gIGFjdGl2ZVN0cnVjdHVyZVNldEluZGV4OiBzZXRBY3RpdmVTdHJ1Y3R1cmVTZXRJbmRleCxcbiAgYWN0aXZlU3RydWN0dXJlU2V0OiBzZXRBY3RpdmVTdHJ1Y3R1cmVTZXQsXG4gIGFjdGl2ZVJPSUNvbnRvdXJJbmRleDogc2V0QWN0aXZlUk9JQ29udG91ckluZGV4LFxuICBhY3RpdmVST0lDb250b3VyOiBzZXRBY3RpdmVST0lDb250b3VyLFxuICBpbmNyZW1lbnRQb2x5Z29uQ291bnQsXG4gIGRlY3JlbWVudFBvbHlnb25Db3VudCxcbiAgdG9nZ2xlSW50ZXJwb2xhdGU6ICgpID0+IHtcbiAgICBzdGF0ZS5pbnRlcnBvbGF0ZSA9ICFzdGF0ZS5pbnRlcnBvbGF0ZTtcbiAgfSxcbiAgdG9nZ2xlRGlzcGxheVN0YXRzOiAoKSA9PiB7XG4gICAgc3RhdGUuZGlzcGxheVN0YXRzID0gIXN0YXRlLmRpc3BsYXlTdGF0cztcbiAgfVxufTtcblxuLyoqXG4gKiBlbmFibGVkRWxlbWVudENhbGxiYWNrIC0gRWxlbWVudCBzcGVjaWZpYyBpbml0aWxpc2F0aW9uLlxuICogQHB1YmxpY1xuICogQHBhcmFtICB7T2JqZWN0fSBlbmFibGVkRWxlbWVudCAgVGhlIGVsZW1lbnQgb24gd2hpY2ggdGhlIG1vZHVsZSBpc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVpbmcgaW5pdGlhbGlzZWQuXG4gKi9cbmZ1bmN0aW9uIGVuYWJsZWRFbGVtZW50Q2FsbGJhY2soZWxlbWVudCkge1xuICBjb25zdCBlbmFibGVkRWxlbWVudCA9IGNvcm5lcnN0b25lLmdldEVuYWJsZWRFbGVtZW50KGVsZW1lbnQpO1xuXG4gIGlmICghZW5hYmxlZEVsZW1lbnQuaW1hZ2UpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBzZXJpZXNJbnN0YW5jZVVpZCA9IGdldFNlcmllc0luc3RhbmNlVWlkRnJvbUVuYWJsZWRFbGVtZW50KGVuYWJsZWRFbGVtZW50KTtcblxuICBpZiAoIWdldFNlcmllcyhzZXJpZXNJbnN0YW5jZVVpZCkpIHtcbiAgICAvLyBHZW5lcmF0ZSBzZXJpZXMgc3RvcmUuXG4gICAgc2V0U2VyaWVzKHNlcmllc0luc3RhbmNlVWlkKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0YXRlLFxuICBlbmFibGVkRWxlbWVudENhbGxiYWNrLFxuICBnZXR0ZXJzLFxuICBzZXR0ZXJzXG59O1xuXG5jb25zdCBpbXBvcnRDb2xvcnMgPSBbXG4gICdjb3JuZmxvd2VyYmx1ZScsXG4gICdmaXJlYnJpY2snLFxuICAnZ29sZGVucm9kJyxcbiAgJ2JsdWV2aW9sZXQnLFxuICAnaW5kaWFucmVkJyxcbiAgJ29yYW5nZScsXG4gICdtZWRpdW10dXJxdW9pc2UnLFxuICAnbGlnaHRjb3JhbCcsXG4gICdraGFraScsXG4gICdkYXJrbWFnZW50YScsXG4gICdsaWdodHNlYWdyZWVuJyxcbiAgJ3RvbWF0bycsXG4gICdhcXVhbWFyaW5lJyxcbiAgJ2RhcmtzYWxtb24nLFxuICAnbW9jY2FzaW4nLFxuICAnb3JjaGlkJyxcbiAgJ3NreWJsdWUnLFxuICAncGVydSdcbl07XG5cbi8vIFN1Y2ggdGhhdCBmaXJzdCBjb2xvciB3aWxsIGJlIHRoZSBmaXJzdCBpbiByb2lDb2xvcnNcbmxldCBjdXJyZW50Q29sb3JJbmRleCA9IGltcG9ydENvbG9ycy5sZW5ndGg7XG5cbi8qKlxuICogZ2V0TmV4dENvbG9yXG4gKlxuICogQHJldHVybiB7c3RyaW5nfSBBIENTUyByZWNvZ25pc2VkIGNvbG9yIHdpdGggd2hpY2ggdG8gcmVuZGVyIHRoZSBST0kgY29udG91ci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRDb2xvcigpIHtcbiAgY3VycmVudENvbG9ySW5kZXgrKztcbiAgaWYgKGN1cnJlbnRDb2xvckluZGV4ID49IGltcG9ydENvbG9ycy5sZW5ndGgpIHtcbiAgICBjdXJyZW50Q29sb3JJbmRleCA9IDA7XG4gIH1cblxuICByZXR1cm4gaW1wb3J0Q29sb3JzW2N1cnJlbnRDb2xvckluZGV4XTtcbn1cbiIsImltcG9ydCBjb3JuZXJzdG9uZVRvb2xzIGZyb20gJ2Nvcm5lcnN0b25lLXRvb2xzJztcbmltcG9ydCBCcnVzaDNESFVHYXRlZFRvb2wgZnJvbSAnLi9CcnVzaDNESFVHYXRlZFRvb2wuanMnO1xuXG5jb25zdCB7IGdldENpcmNsZSB9ID0gY29ybmVyc3RvbmVUb29scy5pbXBvcnRJbnRlcm5hbE1vZHVsZSgndXRpbC9icnVzaFV0aWxzJyk7XG5cbmNvbnN0IGJydXNoTW9kdWxlID0gY29ybmVyc3RvbmVUb29scy5zdG9yZS5tb2R1bGVzLmJydXNoO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcnVzaDNEQXV0b0dhdGVkVG9vbCBleHRlbmRzIEJydXNoM0RIVUdhdGVkVG9vbCB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb24gPSB7fSkge1xuICAgIGNvbnN0IGRlZmF1bHRDb25maWcgPSB7fTtcbiAgICBjb25zdCBpbml0aWFsQ29uZmlndXJhdGlvbiA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdENvbmZpZywgY29uZmlndXJhdGlvbik7XG5cbiAgICBzdXBlcihpbml0aWFsQ29uZmlndXJhdGlvbik7XG5cbiAgICB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uID0gaW5pdGlhbENvbmZpZ3VyYXRpb247XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgaGFuZGxlciBmb3IgTU9VU0VfRE9XTiBldmVudC5cbiAgICpcbiAgICogQG92ZXJyaWRlXG4gICAqIEBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZ0IC0gVGhlIGV2ZW50LlxuICAgKi9cbiAgcHJlTW91c2VEb3duQ2FsbGJhY2soZXZ0KSB7XG4gICAgdGhpcy5fc2V0Q3VzdG9tR2F0ZShldnQpO1xuICAgIHRoaXMuX3N0YXJ0UGFpbnRpbmcoZXZ0KTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIF9zZXRDdXN0b21HYXRlIC0gR2V0cyB0aGUgbWluaW11bSBhbmQgbWF4aW11bSBicnVzaCB2YWx1ZXMgd2l0aGluIHRoZSBpbWFnZVxuICAgKiBhbmQgc2V0cyB0aGUgZ2F0ZSBtb2RlIHRvIFwiY3VzdG9tXCIgd2l0aCB0aGVzZSB2YWx1ZXMuXG4gICAqXG4gICAqIEBwYXJhbSAge29iamVjdH0gZXZ0IFRoZSBjb3JuZXJzdG9uZSBldmVudC5cbiAgICogQHJldHVybnMge251bGx9XG4gICAqL1xuICBfc2V0Q3VzdG9tR2F0ZShldnQpIHtcbiAgICBjb25zdCBldmVudERhdGEgPSBldnQuZGV0YWlsO1xuICAgIGNvbnN0IGltYWdlID0gZXZlbnREYXRhLmltYWdlO1xuICAgIGNvbnN0IHsgcm93cywgY29sdW1ucyB9ID0gaW1hZ2U7XG4gICAgY29uc3QgeyB4LCB5IH0gPSBldmVudERhdGEuY3VycmVudFBvaW50cy5pbWFnZTtcbiAgICBjb25zdCByYWRpdXMgPSBicnVzaE1vZHVsZS5zdGF0ZS5yYWRpdXM7XG4gICAgY29uc3QgaW1hZ2VQaXhlbERhdGEgPSBpbWFnZS5nZXRQaXhlbERhdGEoKTtcbiAgICBjb25zdCByZXNjYWxlU2xvcGUgPSBpbWFnZS5zbG9wZSB8fCAxO1xuICAgIGNvbnN0IHJlc2NhbGVJbnRlcmNlcHQgPSBpbWFnZS5pbnRlcmNlcHQgfHwgMDtcblxuICAgIGNvbnN0IGNpcmNsZSA9IGdldENpcmNsZShyYWRpdXMsIHJvd3MsIGNvbHVtbnMsIHgsIHkpO1xuXG4gICAgLy8gSW5pdGlhbGlzZSBoaSBhbmQgbG8gYXMgdGhlIGZpcnN0IHBpeGVsVmFsdWUgaW4gdGhlIGNpcmNsZS5cbiAgICBsZXQgbG8gPSBpbWFnZVBpeGVsRGF0YVtjaXJjbGVbMF1bMF0gKyBjaXJjbGVbMF1bMV0gKiByb3dzXTtcbiAgICBsZXQgaGkgPSBsbztcblxuICAgIC8vIEZpbmQgdGhlIGhpZ2hlc3QgYW5kIGxvd2VzdCB2YWx1ZS5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNpcmNsZS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHBpeGVsVmFsdWUgPSBpbWFnZVBpeGVsRGF0YVtjaXJjbGVbaV1bMF0gKyBjaXJjbGVbaV1bMV0gKiByb3dzXTtcblxuICAgICAgaWYgKHBpeGVsVmFsdWUgPCBsbykge1xuICAgICAgICBsbyA9IHBpeGVsVmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChwaXhlbFZhbHVlID4gaGkpIHtcbiAgICAgICAgaGkgPSBwaXhlbFZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxvID0gbG8gKiByZXNjYWxlU2xvcGUgKyByZXNjYWxlSW50ZXJjZXB0O1xuICAgIGhpID0gaGkgKiByZXNjYWxlU2xvcGUgKyByZXNjYWxlSW50ZXJjZXB0O1xuXG4gICAgdGhpcy5nYXRlID0gW2xvLCBoaV07XG4gIH1cblxuICAvKipcbiAgICogX2dhdGVDaXJjbGUgLSBHaXZlbiBhbiBpbWFnZSBhbmQgYSBicnVzaCBjaXJjbGUsIGdhdGUgdGhlIGNpcmNsZSBiZXR3ZWVuXG4gICAqIHRoZSBzZXQgZ2F0ZSB2YWx1ZXMsIGFuZCB0aGVuIGNsZWFudXAgdGhlIHJlc3VsdGluZyBtYXNrIHVzaW5nIHRoZVxuICAgKiBob2xlRmlsbCBhbmQgc3RyYXlSZW1vdmUgcHJvcGVydGllcyBvZiB0aGUgYnJ1c2ggbW9kdWxlLlxuICAgKlxuICAgKiBAcGFyYW0gIHtvYmplY3R9IGltYWdlICAgVGhlIGNvcm5lcnN0b25lIGltYWdlLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJbXVtdfSBjaXJjbGUgIEFuIGFycmF5IG9mIGltYWdlIHBpeGVscyBjb250YWluZWQgd2l0aGluIHRoZSBicnVzaFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgIGNpcmNsZS5cbiAgICogQHJldHVybnMge051bWJlcltdW119ICBBbiBhcnJheSBjb250YWluaW5nIHRoZSBnYXRlZC9jbGVhbmVkIHBpeGVscyB0byBmaWxsLlxuICAgKi9cbiAgX2dhdGVDaXJjbGUoaW1hZ2UsIGNpcmNsZSkge1xuICAgIGNvbnN0IHJvd3MgPSBpbWFnZS5pbWFnZTtcbiAgICBjb25zdCBpbWFnZVBpeGVsRGF0YSA9IGltYWdlLmdldFBpeGVsRGF0YSgpO1xuICAgIGNvbnN0IGdhdGVWYWx1ZXMgPSB0aGlzLmdhdGU7XG4gICAgY29uc3QgcmVzY2FsZVNsb3BlID0gaW1hZ2Uuc2xvcGUgfHwgMTtcbiAgICBjb25zdCByZXNjYWxlSW50ZXJjZXB0ID0gaW1hZ2UuaW50ZXJjZXB0IHx8IDA7XG5cbiAgICBjb25zdCBnYXRlZENpcmNsZUFycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNpcmNsZS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHBpeGVsVmFsdWUgPSBpbWFnZVBpeGVsRGF0YVtjaXJjbGVbaV1bMF0gKyBjaXJjbGVbaV1bMV0gKiByb3dzXTtcblxuICAgICAgcGl4ZWxWYWx1ZSA9IHBpeGVsVmFsdWUgKiByZXNjYWxlU2xvcGUgKyByZXNjYWxlSW50ZXJjZXB0O1xuXG4gICAgICBpZiAocGl4ZWxWYWx1ZSA+PSBnYXRlVmFsdWVzWzBdICYmIHBpeGVsVmFsdWUgPD0gZ2F0ZVZhbHVlc1sxXSkge1xuICAgICAgICBnYXRlZENpcmNsZUFycmF5LnB1c2goY2lyY2xlW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fY2xlYW5HYXRlZENpcmNsZShjaXJjbGUsIGdhdGVkQ2lyY2xlQXJyYXkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBzdG9yZSwgRVZFTlRTLCBpbXBvcnRJbnRlcm5hbE1vZHVsZSB9IGZyb20gJ2Nvcm5lcnN0b25lLXRvb2xzJztcbmltcG9ydCBjb3JuZXJzdG9uZSBmcm9tICdjb3JuZXJzdG9uZS1jb3JlJztcblxuaW1wb3J0IEJydXNoM0RUb29sIGZyb20gJy4vQnJ1c2gzRFRvb2wuanMnO1xuXG5jb25zdCBicnVzaE1vZHVsZSA9IHN0b3JlLm1vZHVsZXMuYnJ1c2g7XG5jb25zdCB7IGdldENpcmNsZSwgZHJhd0JydXNoUGl4ZWxzIH0gPSBpbXBvcnRJbnRlcm5hbE1vZHVsZSgndXRpbC9icnVzaFV0aWxzJyk7XG5cbmltcG9ydCBmbG9vZEZpbGwgZnJvbSAnLi9uLWRpbWVuc2lvbmFsLWZsb29kLWZpbGwuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcnVzaDNESFVHYXRlZFRvb2wgZXh0ZW5kcyBCcnVzaDNEVG9vbCB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb24gPSB7fSkge1xuICAgIGNvbnN0IGRlZmF1bHRDb25maWcgPSB7fTtcbiAgICBjb25zdCBpbml0aWFsQ29uZmlndXJhdGlvbiA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdENvbmZpZywgY29uZmlndXJhdGlvbik7XG5cbiAgICBzdXBlcihpbml0aWFsQ29uZmlndXJhdGlvbik7XG5cbiAgICB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uID0gaW5pdGlhbENvbmZpZ3VyYXRpb247XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgaGFuZGxlciBmb3IgTU9VU0VfRE9XTiBldmVudC5cbiAgICpcbiAgICogQG92ZXJyaWRlXG4gICAqIEBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZ0IC0gVGhlIGV2ZW50LlxuICAgKi9cbiAgcHJlTW91c2VEb3duQ2FsbGJhY2soZXZ0KSB7XG4gICAgdGhpcy5hY3RpdmVHYXRlUmFuZ2UgPSBicnVzaE1vZHVsZS5nZXR0ZXJzLmFjdGl2ZUdhdGVSYW5nZSgpO1xuXG4gICAgdGhpcy5fc3RhcnRQYWludGluZyhldnQpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogUGFpbnRzIHRoZSBkYXRhIHRvIHRoZSBjYW52YXMuXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHBhcmFtICB7T2JqZWN0fSBldnQgVGhlIGRhdGEgb2JqZWN0IGFzc29jaWF0ZWQgd2l0aCB0aGUgZXZlbnQuXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgX3BhaW50KGV2dCkge1xuICAgIGNvbnN0IGV2ZW50RGF0YSA9IGV2dC5kZXRhaWw7XG4gICAgY29uc3QgeyBlbGVtZW50LCBpbWFnZSB9ID0gZXZlbnREYXRhO1xuICAgIGNvbnN0IHsgcm93cywgY29sdW1ucyB9ID0gaW1hZ2U7XG4gICAgY29uc3QgeyB4LCB5IH0gPSBldmVudERhdGEuY3VycmVudFBvaW50cy5pbWFnZTtcblxuICAgIGlmICh4IDwgMCB8fCB4ID4gY29sdW1ucyB8fCB5IDwgMCB8fCB5ID4gcm93cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJhZGl1cyA9IGJydXNoTW9kdWxlLnN0YXRlLnJhZGl1cztcbiAgICBjb25zdCBwb2ludGVyQXJyYXkgPSB0aGlzLl9nYXRlQ2lyY2xlKGltYWdlLCBnZXRDaXJjbGUocmFkaXVzLCByb3dzLCBjb2x1bW5zLCB4LCB5KSk7XG5cbiAgICBjb25zdCB7IGxhYmVsbWFwM0QsIGN1cnJlbnRJbWFnZUlkSW5kZXgsIGFjdGl2ZUxhYmVsbWFwSW5kZXgsIHNob3VsZEVyYXNlIH0gPSB0aGlzLnBhaW50RXZlbnREYXRhO1xuXG4gICAgLy8gRHJhdyAvIEVyYXNlIHRoZSBhY3RpdmUgY29sb3IuXG4gICAgZHJhd0JydXNoUGl4ZWxzKHBvaW50ZXJBcnJheSwgbGFiZWxtYXAzRCwgY3VycmVudEltYWdlSWRJbmRleCwgY29sdW1ucywgc2hvdWxkRXJhc2UpO1xuXG4gICAgY29ybmVyc3RvbmUudHJpZ2dlckV2ZW50KGVsZW1lbnQsIEVWRU5UUy5MQUJFTE1BUF9NT0RJRklFRCwge1xuICAgICAgYWN0aXZlTGFiZWxtYXBJbmRleFxuICAgIH0pO1xuXG4gICAgY29ybmVyc3RvbmUudXBkYXRlSW1hZ2UoZXZ0LmRldGFpbC5lbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBfZ2F0ZUNpcmNsZSAtIEdpdmVuIGFuIGltYWdlIGFuZCBhIGJydXNoIGNpcmNsZSwgZ2F0ZSB0aGUgY2lyY2xlIGJldHdlZW5cbiAgICogdGhlIHNldCBnYXRlIHZhbHVlcywgYW5kIHRoZW4gY2xlYW51cCB0aGUgcmVzdWx0aW5nIG1hc2sgdXNpbmcgdGhlXG4gICAqIGhvbGVGaWxsIGFuZCBzdHJheVJlbW92ZSBwcm9wZXJ0aWVzIG9mIHRoZSBicnVzaCBtb2R1bGUuXG4gICAqXG4gICAqIEBwYXJhbSAge29iamVjdH0gaW1hZ2UgICBUaGUgY29ybmVyc3RvbmUgaW1hZ2UuXG4gICAqIEBwYXJhbSAge051bWJlcltdW119IGNpcmNsZSAgQW4gYXJyYXkgb2YgaW1hZ2UgcGl4ZWxzIGNvbnRhaW5lZCB3aXRoaW4gdGhlIGJydXNoXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgY2lyY2xlLlxuICAgKiBAcmV0dXJucyB7TnVtYmVyW11bXX0gIEFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIGdhdGVkL2NsZWFuZWQgcGl4ZWxzIHRvIGZpbGwuXG4gICAqL1xuICBfZ2F0ZUNpcmNsZShpbWFnZSwgY2lyY2xlKSB7XG4gICAgY29uc3Qgcm93cyA9IGltYWdlLnJvd3M7XG4gICAgY29uc3QgaW1hZ2VQaXhlbERhdGEgPSBpbWFnZS5nZXRQaXhlbERhdGEoKTtcbiAgICBjb25zdCBnYXRlUmFuZ2UgPSB0aGlzLmFjdGl2ZUdhdGVSYW5nZTtcbiAgICBjb25zdCByZXNjYWxlU2xvcGUgPSBpbWFnZS5zbG9wZSB8fCAxO1xuICAgIGNvbnN0IHJlc2NhbGVJbnRlcmNlcHQgPSBpbWFnZS5pbnRlcmNlcHQgfHwgMDtcblxuICAgIGNvbnN0IGdhdGVkQ2lyY2xlQXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2lyY2xlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcGl4ZWxWYWx1ZSA9IGltYWdlUGl4ZWxEYXRhW2NpcmNsZVtpXVswXSArIGNpcmNsZVtpXVsxXSAqIHJvd3NdO1xuXG4gICAgICBwaXhlbFZhbHVlID0gcGl4ZWxWYWx1ZSAqIHJlc2NhbGVTbG9wZSArIHJlc2NhbGVJbnRlcmNlcHQ7XG5cbiAgICAgIGlmIChwaXhlbFZhbHVlID49IGdhdGVSYW5nZVswXSAmJiBwaXhlbFZhbHVlIDw9IGdhdGVSYW5nZVsxXSkge1xuICAgICAgICBnYXRlZENpcmNsZUFycmF5LnB1c2goY2lyY2xlW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fY2xlYW5HYXRlZENpcmNsZShjaXJjbGUsIGdhdGVkQ2lyY2xlQXJyYXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIF9nZXRFZGdlUGl4ZWxzIC0gUmV0dXJucyB0aGUgaW5kaWNpZXMgb2YgdGhlIGVkZ2UgcGl4ZWxzIGZvciB0aGUgY2lyY3VsYXJcbiAgICogYnJ1c2ggZGF0YS5cbiAgICpcbiAgICogQHBhcmFtICB7TnVtYmVyW11bXX0gZGF0YSBUaGUgc3F1YXJlZC1jaXJjbGUgZGF0YSB3aGVyZSBhbGwgY2lyY2xlIG1lbWJlcnMgYXJlXG4gICAqICAgICAgICAgICAgICAgICAgICAgMCwgYW5kIHZhbHVlcyBvdXRzaWRlIHRoZSBjaXJjbGUgYXJlIC0xXG4gICAqIEByZXR1cm5zIHtOdW1iZXJbXVtdfSBBbiBhcnJheSBvZiBwb3NpdGlvbnMgb2YgdGhlIGNpcmNsZSBlZGdlIHBpeGVscy5cbiAgICovXG4gIF9nZXRFZGdlUGl4ZWxzKGRhdGEpIHtcbiAgICBjb25zdCBlZGdlUGl4ZWxzID0gW107XG4gICAgY29uc3QgeFNpemUgPSBkYXRhLmxlbmd0aDtcbiAgICBjb25zdCB5U2l6ZSA9IGRhdGFbMF0ubGVuZ3RoO1xuXG4gICAgLy8gZmlyc3QgYW5kIGxhc3Qgcm93IGFkZCBhbGwgb2YgdG9wIGFuZCBib3R0b20gd2hpY2ggYXJlIGNpcmNsZSBtZW1iZXJzLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGRhdGFbaV1bMF0pIHtcbiAgICAgICAgZWRnZVBpeGVscy5wdXNoKFtpLCAwXSk7XG4gICAgICAgIGVkZ2VQaXhlbHMucHVzaChbaSwgeVNpemUgLSAxXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWxsIG90aGVyIHJvd3MgLSBGaW5kIGZpcnN0IGNpcmNsZSBtZW1iZXIsIGFuZCB1c2UgaXRzIHBvc2l0aW9uIHRvIGFkZFxuICAgIC8vIFRoZSBmaXJzdCBhbmQgbGFzdCBjaXJjbGUgbWVtYmVyIG9mIHRoYXQgcm93LlxuICAgIGZvciAobGV0IGogPSAxOyBqIDwgeVNpemUgLSAxOyBqKyspIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZGF0YVtpXVtqXSkge1xuICAgICAgICAgIGVkZ2VQaXhlbHMucHVzaChbaSwgal0pO1xuICAgICAgICAgIGVkZ2VQaXhlbHMucHVzaChbeFNpemUgLSAxIC0gaSwgal0pO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWRnZVBpeGVscztcbiAgfVxuXG4gIC8qKlxuICAgKiBfY2xlYW5HYXRlZENpcmNsZSAtIENsZWFuIHRoZSBIVSBnYXRlZCBjaXJjbGUgdXNpbmcgdGhlIGhvbGVGaWxsIGFuZFxuICAgKiBzdHJheVJlbW92ZSBwcm9wZXJ0aWVzIG9mIHRoZSBicnVzaCBtb2R1bGUuXG4gICAqXG4gICAqIEBwYXJhbSAge051bWJlcltdW119IGNpcmNsZSAgICAgQW4gYXJyYXkgb2YgdGhlIHBpeGVsIGluZGljaWVzIHdpdGhpbiB0aGVcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicnVzaCBjaXJjbGUuXG4gICAqIEBwYXJhbSAge051bWJlcltdW119IGdhdGVkQ2lyY2xlQXJyYXkgQW4gYXJyYXkgb2YgdGhlIHBpeGVsIGluZGljaWVzIHdpdGhpblxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBnYXRlIHJhbmdlLlxuICAgKiBAcmV0dXJucyB7TnVtYmVyW11bXX0gICAgICAgICAgICAgICAgICBUaGUgY2xlYW5lZCBhcnJheSBvZiBwaXhlbCBpbmRpY2llcy5cbiAgICovXG4gIF9jbGVhbkdhdGVkQ2lyY2xlKGNpcmNsZSwgZ2F0ZWRDaXJjbGVBcnJheSkge1xuICAgIGNvbnN0IHsgbWF4LCBtaW4gfSA9IHRoaXMuX2dldEJvdW5kaW5nQm94T2ZDaXJjbGUoY2lyY2xlKTtcblxuICAgIGNvbnN0IHhTaXplID0gbWF4WzBdIC0gbWluWzBdICsgMTtcbiAgICBjb25zdCB5U2l6ZSA9IG1heFsxXSAtIG1pblsxXSArIDE7XG5cbiAgICBjb25zdCBkYXRhID0gdGhpcy5fYm94R2F0ZWRDaXJjbGUoY2lyY2xlLCBnYXRlZENpcmNsZUFycmF5LCBtaW4sIHhTaXplLCB5U2l6ZSk7XG5cbiAgICAvLyBEZWZpbmUgb3VyIGdldHRlciBmb3IgYWNjZXNzaW5nIHRoZSBkYXRhIHN0cnVjdHVyZS5cbiAgICBmdW5jdGlvbiBnZXR0ZXIoeCwgeSkge1xuICAgICAgcmV0dXJuIGRhdGFbeF1beV07XG4gICAgfVxuXG4gICAgdGhpcy5fZmxvb2RGaWxsRW1wdHlSZWdpb25zRnJvbUVkZ2VzKGRhdGEsIGdldHRlcik7XG5cbiAgICBjb25zdCB7IGhvbGVzLCByZWdpb25zIH0gPSB0aGlzLl9maW5kSG9sZXNBbmRSZWdpb25zKGNpcmNsZSwgZGF0YSwgZ2V0dGVyLCBtaW4pO1xuXG4gICAgY29uc3QgbGFyZ2VzdFJlZ2lvbkFyZWEgPSB0aGlzLl9nZXRBcmVhT2ZMYXJnZXN0UmVnaW9uKHJlZ2lvbnMpO1xuXG4gICAgLy8gRGVsZXRlIGFueSByZWdpb24gb3V0c2lkZSB0aGUgYHN0cmF5UmVtb3ZlYCB0aHJlc2hvbGQuXG4gICAgZm9yIChsZXQgciA9IDA7IHIgPCByZWdpb25zLmxlbmd0aDsgcisrKSB7XG4gICAgICBjb25zdCByZWdpb24gPSByZWdpb25zW3JdO1xuXG4gICAgICBpZiAocmVnaW9uLmxlbmd0aCA8PSAoYnJ1c2hNb2R1bGUuc3RhdGUuc3RyYXlSZW1vdmUgLyAxMDAuMCkgKiBsYXJnZXN0UmVnaW9uQXJlYSkge1xuICAgICAgICBmb3IgKGxldCBwID0gMDsgcCA8IHJlZ2lvbi5sZW5ndGg7IHArKykge1xuICAgICAgICAgIGRhdGFbcmVnaW9uW3BdWzBdXVtyZWdpb25bcF1bMV1dID0gMztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZpbGwgaW4gYW55IGhvbGVzIHNtYWxsZXIgdGhhbiB0aGUgYGhvbGVGaWxsYCB0aHJlc2hvbGQuXG4gICAgZm9yIChsZXQgciA9IDA7IHIgPCBob2xlcy5sZW5ndGg7IHIrKykge1xuICAgICAgY29uc3QgaG9sZSA9IGhvbGVzW3JdO1xuXG4gICAgICBpZiAoaG9sZS5sZW5ndGggPD0gKGJydXNoTW9kdWxlLnN0YXRlLmhvbGVGaWxsIC8gMTAwLjApICogbGFyZ2VzdFJlZ2lvbkFyZWEpIHtcbiAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCBob2xlLmxlbmd0aDsgcCsrKSB7XG4gICAgICAgICAgZGF0YVtob2xlW3BdWzBdXVtob2xlW3BdWzFdXSA9IDU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBmaWxsZWRHYXRlZENpcmNsZUFycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHhTaXplOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgeVNpemU7IGorKykge1xuICAgICAgICBpZiAoZGF0YVtpXVtqXSA9PT0gNSkge1xuICAgICAgICAgIGZpbGxlZEdhdGVkQ2lyY2xlQXJyYXkucHVzaChbaSArIG1pblswXSwgaiArIG1pblsxXV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbGxlZEdhdGVkQ2lyY2xlQXJyYXk7XG4gIH1cblxuICAvKipcbiAgICogX2dldEJvdW5kaW5nQm94T2ZDaXJjbGUgLSBSZXR1cm5zIHR3byBwb2ludHMgZGVmaW5pbmcgdGhlIGV4dGVudCBvZiB0aGUgY2lyY2xlLlxuICAgKlxuICAgKiBAcGFyYW0gIHtudW1iZXJbXVtdfSBjaXJjbGUgIEFuIGFycmF5IG9mIHRoZSBwaXhlbCBpbmRpY2llcyB3aXRoaW4gdGhlIGJydXNoIGNpcmNsZS5cbiAgICogQHJldHVybnMge29iamVjdH0gICAgICAgIFRoZSBtaW5pbXVtIGFuZCBtYXhpbXVtIG9mIHRoZSBleHRlbnQuXG4gICAqL1xuICBfZ2V0Qm91bmRpbmdCb3hPZkNpcmNsZShjaXJjbGUpIHtcbiAgICBjb25zdCBtYXggPSBbY2lyY2xlWzBdWzBdLCBjaXJjbGVbMF1bMV1dO1xuICAgIGNvbnN0IG1pbiA9IFtjaXJjbGVbMF1bMF0sIGNpcmNsZVswXVsxXV07XG5cbiAgICBmb3IgKGxldCBwID0gMDsgcCA8IGNpcmNsZS5sZW5ndGg7IHArKykge1xuICAgICAgY29uc3QgW2ksIGpdID0gY2lyY2xlW3BdO1xuXG4gICAgICBpZiAoaSA+IG1heFswXSkge1xuICAgICAgICBtYXhbMF0gPSBpO1xuICAgICAgfSBlbHNlIGlmIChpIDwgbWluWzBdKSB7XG4gICAgICAgIG1pblswXSA9IGk7XG4gICAgICB9XG5cbiAgICAgIGlmIChqID4gbWF4WzFdKSB7XG4gICAgICAgIG1heFsxXSA9IGo7XG4gICAgICB9IGVsc2UgaWYgKGogPCBtaW5bMV0pIHtcbiAgICAgICAgbWluWzFdID0gajtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBtYXgsIG1pbiB9O1xuICB9XG5cbiAgLyoqXG4gICAqIF9ib3hHYXRlZENpcmNsZSAtIEdlbmVyYXRlcyBhIHJlY3Rhbmd1bGFyIGRhdGFzZXQgZnJvbSB0aGUgYnJ1c2ggY2lyY2xlXG4gICAqICAgICAgICAgICAgICAgICAgIGZvciBlZmZpY2llbnQgZmxvb2QgZmlsbC9jbGVhbmluZy5cbiAgICpcbiAgICogQHBhcmFtICB7dHlwZX0gY2lyY2xlICAgICAgICAgICBBbiBhcnJheSBvZiB0aGUgcGl4ZWwgaW5kaWNpZXMgd2l0aGluIHRoZSBicnVzaCBjaXJjbGUuXG4gICAqIEBwYXJhbSAge3R5cGV9IGdhdGVkQ2lyY2xlQXJyYXkgVGhlIGNpcmNsZSBhcnJheSB3aXRoIHRoZSBnYXRlIGFwcGxpZWQuXG4gICAqIEBwYXJhbSAge3R5cGV9IG1pbiAgICAgICAgICAgICAgVGhlIGxvY2F0aW9uIG9mIHRoZSB0b3AgbGVmdCBwaXhlbCBvZiB0aGVcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZWQgZGF0YXNldCB3aXRoIHJlc3BlY3QgdG8gdGhlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJseWluZyBpbWFnZSBkYXRhLlxuICAgKiBAcGFyYW0gIHt0eXBlfSB4U2l6ZSAgICAgICAgICAgIFRoZSB4IHNpemUgb2YgdGhlIGdlbmVyYXRlZCBib3guXG4gICAqIEBwYXJhbSAge3R5cGV9IHlTaXplICAgICAgICAgICAgVGhlIHkgc2l6ZSBvZiB0aGUgZ2VuZXJhdGVkIGJveC5cbiAgICogQHJldHVybnMge251bWJlcltdW119ICAgICAgICAgICBUaGUgZGF0YSB3aXRoIHBpeGVsIFswLDBdIGNlbnRlcmVkIG9uIG1pbixcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgY2lyY2xlIG1hcmtlZCB3aXRoIDEgZm9yIHVub2NjdXBpZWQsIDJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3Igb2NjdXBpZWQgYW5kIDAgZm9yIG91dHNpZGUgb2YgdGhlIGNpcmNsZSBib3VuZHMuXG4gICAqL1xuICBfYm94R2F0ZWRDaXJjbGUoY2lyY2xlLCBnYXRlZENpcmNsZUFycmF5LCBtaW4sIHhTaXplLCB5U2l6ZSkge1xuICAgIGNvbnN0IGRhdGEgPSBbXTtcblxuICAgIC8vIEZpbGwgaW4gc3F1YXJlIGFzIDAgKG91dCBvZiBib3VuZHMvaWdub3JlKS5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHhTaXplOyBpKyspIHtcbiAgICAgIGRhdGFbaV0gPSBuZXcgVWludDhDbGFtcGVkQXJyYXkoeVNpemUpO1xuICAgIH1cblxuICAgIC8vIGZpbGwgY2lyY2xlIGluIGFzIDEuXG4gICAgZm9yIChsZXQgcCA9IDA7IHAgPCBjaXJjbGUubGVuZ3RoOyBwKyspIHtcbiAgICAgIGNvbnN0IGkgPSBjaXJjbGVbcF1bMF0gLSBtaW5bMF07XG4gICAgICBjb25zdCBqID0gY2lyY2xlW3BdWzFdIC0gbWluWzFdO1xuXG4gICAgICBkYXRhW2ldW2pdID0gMTtcbiAgICB9XG5cbiAgICAvLyBmaWxsIGdhdGVkIHJlZ2lvbiBhcyAyLlxuICAgIGZvciAobGV0IHAgPSAwOyBwIDwgZ2F0ZWRDaXJjbGVBcnJheS5sZW5ndGg7IHArKykge1xuICAgICAgY29uc3QgaSA9IGdhdGVkQ2lyY2xlQXJyYXlbcF1bMF0gLSBtaW5bMF07XG4gICAgICBjb25zdCBqID0gZ2F0ZWRDaXJjbGVBcnJheVtwXVsxXSAtIG1pblsxXTtcblxuICAgICAgZGF0YVtpXVtqXSA9IDI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgICogX2Zsb29kRmlsbEVtcHR5UmVnaW9uc0Zyb21FZGdlcyAtIEZsb29kIGZpbGxzIGVtcHR5IHJlZ2lvbnMgd2hpY2ggdG91Y2ggdGhlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlIG9mIHRoZSBjaXJjbGUgd2l0aCB0aGUgdmFsdWUgMy5cbiAgICpcbiAgICogQHBhcmFtICB7bnVtYmVyW11bXX0gZGF0YSBUaGUgZGF0YSB0byBmbG9vZCBmaWxsLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBnZXR0ZXIgVGhlIGdldHRlciBmdW5jdGlvbiBmbG9vZEZpbGwgdXNlcyB0byBhY2Nlc3MgYXJyYXlcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzLlxuICAgKiBAbW9kaWZpZXMgZGF0YVxuICAgKiBAcmV0dXJucyB7bnVsbH1cbiAgICovXG4gIF9mbG9vZEZpbGxFbXB0eVJlZ2lvbnNGcm9tRWRnZXMoZGF0YSwgZ2V0dGVyKSB7XG4gICAgY29uc3QgZWRnZVBpeGVscyA9IHRoaXMuX2dldEVkZ2VQaXhlbHMoZGF0YSk7XG5cbiAgICBmb3IgKGxldCBwID0gMDsgcCA8IGVkZ2VQaXhlbHMubGVuZ3RoOyBwKyspIHtcbiAgICAgIGNvbnN0IGkgPSBlZGdlUGl4ZWxzW3BdWzBdO1xuICAgICAgY29uc3QgaiA9IGVkZ2VQaXhlbHNbcF1bMV07XG5cbiAgICAgIGlmIChkYXRhW2ldW2pdID09PSAxKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGZsb29kRmlsbCh7XG4gICAgICAgICAgZ2V0dGVyOiBnZXR0ZXIsXG4gICAgICAgICAgc2VlZDogW2ksIGpdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGZsb29kZWQgPSByZXN1bHQuZmxvb2RlZDtcblxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGZsb29kZWQubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICBkYXRhW2Zsb29kZWRba11bMF1dW2Zsb29kZWRba11bMV1dID0gMztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBfZmluZEhvbGVzQW5kUmVnaW9ucyAtIEZpbmRzIGFsbCB0aGUgaG9sZXMgYW5kIHJlZ2lvbnMgYW5kIHJldHVybnMgdGhlaXJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnMgd2l0aGluIHRoZSAyRCBkYXRhIHNldC4gU2V0cyB0aGUgdmFsdWUgb2ZcbiAgICogICAgICAgICAgICAgICAgICAgICAgICBob2xlcyBhbmQgcmVnaW9ucyB0byA0IGFuZCA1LCByZXNwZWN0aXZlbHkuXG4gICAqXG4gICAqIEBwYXJhbSAge251bWJlcltdW119IGNpcmNsZSBBbiBhcnJheSBvZiB0aGUgcGl4ZWwgaW5kaWNpZXMgd2l0aGluIHRoZSBicnVzaCBjaXJjbGUuXG4gICAqIEBwYXJhbSAge251bWJlcltdW119IGRhdGEgICBUaGUgZGF0YSBzZXQuXG4gICAqIEBwYXJhbSAge2Z1bmN0aW9ufSAgIGdldHRlciBUaGUgZ2V0dGVyIGZ1bmN0aW9uIGZsb29kRmlsbCB1c2VzIHRvIGFjY2VzcyBhcnJheVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMuXG4gICAqIEBwYXJhbSAge251bWJlcltdfSAgIG1pbiAgICBUaGUgbG9jYXRpb24gb2YgdGhlIHRvcCBsZWZ0IHBpeGVsIG9mIHRoZSBkYXRhc2V0XG4gICAqICAgICAgICAgICAgICAgICAgICAgICB3aXRoIHJlc3BlY3QgdG8gdGhlIHVuZGVybHlpbmcgaW1hZ2UgZGF0YS5cbiAgICogQHJldHVybnMge29iamVjdH0gICAgQW4gb2JqZWN0IGNvbnRhaW5pbmcgYXJyYXlzIG9mIHRoZSBvY2N1cGF0aW9uIG9mIGFsbFxuICAgKiAgICAgICAgICAgICAgICAgICAgICByZWdpb25zIGFuZCBob2xlcyBpbiB0aGUgZGF0YXNldC5cbiAgICovXG4gIF9maW5kSG9sZXNBbmRSZWdpb25zKGNpcmNsZSwgZGF0YSwgZ2V0dGVyLCBtaW4pIHtcbiAgICBjb25zdCBob2xlcyA9IFtdO1xuICAgIGNvbnN0IHJlZ2lvbnMgPSBbXTtcblxuICAgIC8vIEZpbmQgZWFjaCBob2xlIGFuZCBwYWludCB0aGVtIDMuXG4gICAgLy8gRmluZCBjb250aWd1b3VzIHJlZ2lvbnMgYW5kIHBhaW50IHRoZW0gNC5cbiAgICBmb3IgKGxldCBwID0gMDsgcCA8IGNpcmNsZS5sZW5ndGg7IHArKykge1xuICAgICAgY29uc3QgaSA9IGNpcmNsZVtwXVswXSAtIG1pblswXTtcbiAgICAgIGNvbnN0IGogPSBjaXJjbGVbcF1bMV0gLSBtaW5bMV07XG5cbiAgICAgIGlmIChkYXRhW2ldW2pdID09PSAxKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGZsb29kRmlsbCh7XG4gICAgICAgICAgZ2V0dGVyOiBnZXR0ZXIsXG4gICAgICAgICAgc2VlZDogW2ksIGpdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGZsb29kZWQgPSByZXN1bHQuZmxvb2RlZDtcblxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGZsb29kZWQubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICBkYXRhW2Zsb29kZWRba11bMF1dW2Zsb29kZWRba11bMV1dID0gNDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhvbGVzLnB1c2goZmxvb2RlZCk7XG4gICAgICB9IGVsc2UgaWYgKGRhdGFbaV1bal0gPT09IDIpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZmxvb2RGaWxsKHtcbiAgICAgICAgICBnZXR0ZXI6IGdldHRlcixcbiAgICAgICAgICBzZWVkOiBbaSwgal1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZmxvb2RlZCA9IHJlc3VsdC5mbG9vZGVkO1xuXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZmxvb2RlZC5sZW5ndGg7IGsrKykge1xuICAgICAgICAgIGRhdGFbZmxvb2RlZFtrXVswXV1bZmxvb2RlZFtrXVsxXV0gPSA1O1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaW9ucy5wdXNoKGZsb29kZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IGhvbGVzLCByZWdpb25zIH07XG4gIH1cblxuICAvKipcbiAgICogX2dldEFyZWFPZkxhcmdlc3RSZWdpb24gLSBSZXR1cm5zIHRoZSBudW1iZXIgb2YgcGl4ZWxzIGluIHRoZSBsYXJnZXN0XG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaW9uIG9mIGEgbGlzdCBvZiByZWdpb25zLlxuICAgKlxuICAgKiBAcGFyYW0gIHtudW1iZXJbXVtdW119IHJlZ2lvbnMgQW4gYXJyYXkgb2YgcmVnaW9ucyBvZiAyRCBwb2ludHMuXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9ICAgICAgICBUaGUgYXJlYSBvZiB0aGUgbGFyZ2VzdCByZWdpb24gaW4gcGl4ZWxzLlxuICAgKi9cbiAgX2dldEFyZWFPZkxhcmdlc3RSZWdpb24ocmVnaW9ucykge1xuICAgIGxldCBsYXJnZXN0UmVnaW9uQXJlYSA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlZ2lvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWdpb25zW2ldLmxlbmd0aCA+IGxhcmdlc3RSZWdpb25BcmVhKSB7XG4gICAgICAgIGxhcmdlc3RSZWdpb25BcmVhID0gcmVnaW9uc1tpXS5sZW5ndGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhcmdlc3RSZWdpb25BcmVhO1xuICB9XG59XG4iLCJpbXBvcnQgeyBCcnVzaFRvb2wsIHN0b3JlIH0gZnJvbSAnY29ybmVyc3RvbmUtdG9vbHMnO1xuaW1wb3J0IGdlbmVyYXRlQnJ1c2hNZXRhZGF0YSBmcm9tICcuLi91dGlsL2dlbmVyYXRlQnJ1c2hNZXRhZGF0YS5qcyc7XG5cbmNvbnN0IGJydXNoTW9kdWxlID0gc3RvcmUubW9kdWxlcy5icnVzaDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJ1c2gzRFRvb2wgZXh0ZW5kcyBCcnVzaFRvb2wge1xuICBjb25zdHJ1Y3Rvcihjb25maWd1cmF0aW9uID0ge30pIHtcbiAgICBjb25zdCBkZWZhdWx0Q29uZmlnID0ge307XG4gICAgY29uc3QgaW5pdGlhbENvbmZpZ3VyYXRpb24gPSBPYmplY3QuYXNzaWduKGRlZmF1bHRDb25maWcsIGNvbmZpZ3VyYXRpb24pO1xuXG4gICAgc3VwZXIoaW5pdGlhbENvbmZpZ3VyYXRpb24pO1xuXG4gICAgdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbiA9IGluaXRpYWxDb25maWd1cmF0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpc2UgcGFpbnRpbmcgd2l0aCBiYXNlQnJ1c2hUb29sXG4gICAqXG4gICAqIEBvdmVycmlkZSBAcHJvdGVjdGVkXG4gICAqIEBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZ0IC0gVGhlIGV2ZW50LlxuICAgKi9cbiAgX3N0YXJ0UGFpbnRpbmcoZXZ0KSB7XG4gICAgY29uc3QgZXZlbnREYXRhID0gZXZ0LmRldGFpbDtcbiAgICBjb25zdCBlbGVtZW50ID0gZXZlbnREYXRhLmVsZW1lbnQ7XG5cbiAgICBjb25zdCB7IGxhYmVsbWFwM0QsIGN1cnJlbnRJbWFnZUlkSW5kZXgsIGFjdGl2ZUxhYmVsbWFwSW5kZXggfSA9IGJydXNoTW9kdWxlLmdldHRlcnMuZ2V0QW5kQ2FjaGVMYWJlbG1hcDJEKGVsZW1lbnQpO1xuXG4gICAgY29uc3Qgc2hvdWxkRXJhc2UgPSB0aGlzLl9pc0N0cmxEb3duKGV2ZW50RGF0YSkgfHwgdGhpcy5jb25maWd1cmF0aW9uLmFsd2F5c0VyYXNlT25DbGljaztcblxuICAgIHRoaXMucGFpbnRFdmVudERhdGEgPSB7XG4gICAgICBsYWJlbG1hcDNELFxuICAgICAgY3VycmVudEltYWdlSWRJbmRleCxcbiAgICAgIGFjdGl2ZUxhYmVsbWFwSW5kZXgsXG4gICAgICBzaG91bGRFcmFzZVxuICAgIH07XG5cbiAgICBjb25zdCBzZWdtZW50SW5kZXggPSBsYWJlbG1hcDNELmFjdGl2ZVNlZ21lbnRJbmRleDtcbiAgICBsZXQgbWV0YWRhdGEgPSBsYWJlbG1hcDNELm1ldGFkYXRhW3NlZ21lbnRJbmRleF07XG5cbiAgICBpZiAoIW1ldGFkYXRhKSB7XG4gICAgICBtZXRhZGF0YSA9IGdlbmVyYXRlQnJ1c2hNZXRhZGF0YSgnVW5uYW1lZCBTZWdtZW50Jyk7XG5cbiAgICAgIGJydXNoTW9kdWxlLnNldHRlcnMubWV0YWRhdGEoZWxlbWVudCwgYWN0aXZlTGFiZWxtYXBJbmRleCwgc2VnbWVudEluZGV4LCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgLy8gTWV0YWRhdGEgYXNzaWduZWQsIHN0YXJ0IGRyYXdpbmcuXG4gICAgaWYgKGV2ZW50RGF0YS5jdXJyZW50UG9pbnRzKSB7XG4gICAgICB0aGlzLl9wYWludChldnQpO1xuICAgIH1cbiAgICB0aGlzLl9kcmF3aW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9zdGFydExpc3RlbmluZ0Zvck1vdXNlVXAoZWxlbWVudCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEZyZWVoYW5kUm9pU2N1bHB0b3JUb29sLCB0b29sQ29sb3JzLCBzdG9yZSwgZ2V0VG9vbFN0YXRlIH0gZnJvbSAnY29ybmVyc3RvbmUtdG9vbHMnO1xuaW1wb3J0IHsgdXBkYXRlSW1hZ2UgfSBmcm9tICdjb3JuZXJzdG9uZS1jb3JlJztcbmltcG9ydCBpbnRlcnBvbGF0ZSBmcm9tICcuLi91dGlsL2ZyZWVoYW5kSW50ZXJwb2xhdGUvaW50ZXJwb2xhdGUuanMnO1xuXG5jb25zdCB7IG1vZHVsZXMsIHN0YXRlIH0gPSBzdG9yZTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJlZWhhbmRSb2kzRFNjdWxwdG9yVG9vbCBleHRlbmRzIEZyZWVoYW5kUm9pU2N1bHB0b3JUb29sIHtcbiAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbiA9IHt9KSB7XG4gICAgY29uc3QgZGVmYXVsdENvbmZpZyA9IHtcbiAgICAgIGNvbmZpZ3VyYXRpb246IGdldERlZmF1bHRGcmVlaGFuZFNjdWxwdGVyTW91c2VUb29sQ29uZmlndXJhdGlvbigpXG4gICAgfTtcbiAgICBjb25zdCBpbml0aWFsQ29uZmlndXJhdGlvbiA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdENvbmZpZywgY29uZmlndXJhdGlvbik7XG5cbiAgICBzdXBlcihpbml0aWFsQ29uZmlndXJhdGlvbik7XG5cbiAgICAvLyBDcmVhdGUgYm91bmQgZnVuY3Rpb25zIGZvciBwcml2YXRlIGV2ZW50IGxvb3AuXG4gICAgdGhpcy5hY3RpdmVNb3VzZVVwQ2FsbGJhY2sgPSB0aGlzLmFjdGl2ZU1vdXNlVXBDYWxsYmFjay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdCB0aGUgZnJlZWhhbmQgdG9vbCB0byBiZSBlZGl0ZWQuIERvbid0IGFsbG93IHNlbGVjdGluZyBvZiBsb2NrZWRcbiAgICogUk9JQ29udG91cnMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudERhdGEgLSBEYXRhIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggdGhlIGV2ZW50LlxuICAgKi9cbiAgX3NlbGVjdEZyZWVoYW5kVG9vbChldmVudERhdGEpIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb247XG4gICAgY29uc3QgZWxlbWVudCA9IGV2ZW50RGF0YS5lbGVtZW50O1xuICAgIGNvbnN0IGNsb3Nlc3RUb29sSW5kZXggPSB0aGlzLl9nZXRDbG9zZXN0RnJlZWhhbmRUb29sT25FbGVtZW50KGVsZW1lbnQsIGV2ZW50RGF0YSk7XG5cbiAgICBpZiAoY2xvc2VzdFRvb2xJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdG9vbFN0YXRlID0gZ2V0VG9vbFN0YXRlKGVsZW1lbnQsIHRoaXMucmVmZXJlbmNlZFRvb2xOYW1lKTtcblxuICAgIGNvbnN0IHRvb2xEYXRhID0gdG9vbFN0YXRlLmRhdGFbY2xvc2VzdFRvb2xJbmRleF07XG5cbiAgICBjb25zdCBpc0xvY2tlZCA9IHRvb2xEYXRhLnJlZmVyZW5jZWRTdHJ1Y3R1cmVTZXQuaXNMb2NrZWQ7XG5cbiAgICBpZiAoaXNMb2NrZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25maWcuaG92ZXJDb2xvciA9IHRvb2xEYXRhLnJlZmVyZW5jZWRST0lDb250b3VyLmNvbG9yO1xuXG4gICAgY29uZmlnLmN1cnJlbnRUb29sID0gY2xvc2VzdFRvb2xJbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBoYW5kbGVyIGZvciBNT1VTRV9VUCBkdXJpbmcgdGhlIGFjdGl2ZSBsb29wLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZ0IC0gVGhlIGV2ZW50LlxuICAgKi9cbiAgX2FjdGl2ZUVuZChldnQpIHtcbiAgICBjb25zdCBldmVudERhdGEgPSBldnQuZGV0YWlsO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudERhdGEuZWxlbWVudDtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb247XG5cbiAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZTtcblxuICAgIHN0YXRlLmlzTXVsdGlQYXJ0VG9vbEFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5fZ2V0TW91c2VMb2NhdGlvbihldmVudERhdGEpO1xuICAgIHRoaXMuX2ludmFsaWRhdGVUb29sRGF0YShldmVudERhdGEpO1xuXG4gICAgY29uZmlnLm1vdXNlVXBSZW5kZXIgPSB0cnVlO1xuXG4gICAgdGhpcy5fZGVhY3RpdmF0ZVNjdWxwdChlbGVtZW50KTtcblxuICAgIGNvbnN0IHRvb2xEYXRhID0gZ2V0VG9vbFN0YXRlKGVsZW1lbnQsIHRoaXMucmVmZXJlbmNlZFRvb2xOYW1lKTtcbiAgICBjb25zdCBkYXRhID0gdG9vbERhdGEuZGF0YVtjb25maWcuY3VycmVudFRvb2xdO1xuXG4gICAgaWYgKG1vZHVsZXMuZnJlZWhhbmQzRC5nZXR0ZXJzLmludGVycG9sYXRlKCkpIHtcbiAgICAgIGludGVycG9sYXRlKGRhdGEpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgaW1hZ2VcbiAgICB1cGRhdGVJbWFnZShldmVudERhdGEuZWxlbWVudCk7XG5cbiAgICBwcmV2ZW50UHJvcGFnYXRpb24oZXZ0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZhbGlkYXRlIHRoZSBmcmVlaGFuZCB0b29sIGRhdGEsIHRpcmdnZXJpbmcgcmUtY2FsY3VsYXRpb24gb2Ygc3RhdGlzdGljcy5cbiAgICpcbiAgICogQHByaXZhdGUgQG92ZXJyaWRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudERhdGEgLSBEYXRhIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggdGhlIGV2ZW50LlxuICAgKi9cbiAgX2ludmFsaWRhdGVUb29sRGF0YShldmVudERhdGEpIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb247XG4gICAgY29uc3QgZWxlbWVudCA9IGV2ZW50RGF0YS5lbGVtZW50O1xuICAgIGNvbnN0IHRvb2xEYXRhID0gZ2V0VG9vbFN0YXRlKGVsZW1lbnQsIHRoaXMucmVmZXJlbmNlZFRvb2xOYW1lKTtcbiAgICBjb25zdCBkYXRhID0gdG9vbERhdGEuZGF0YVtjb25maWcuY3VycmVudFRvb2xdO1xuXG4gICAgZGF0YS5pbnZhbGlkYXRlZCA9IHRydWU7XG4gICAgZGF0YS5pbnRlcnBvbGF0ZWQgPSBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGRlZmF1bHQgZnJlZWhhbmRTY3VscHRlck1vdXNlVG9vbCBjb25maWd1cmF0aW9uLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIGRlZmF1bHQgY29uZmlndXJhdGlvbiBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGdldERlZmF1bHRGcmVlaGFuZFNjdWxwdGVyTW91c2VUb29sQ29uZmlndXJhdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICBtb3VzZUxvY2F0aW9uOiB7XG4gICAgICBoYW5kbGVzOiB7XG4gICAgICAgIHN0YXJ0OiB7XG4gICAgICAgICAgaGlnaGxpZ2h0OiB0cnVlLFxuICAgICAgICAgIGFjdGl2ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBtaW5TcGFjaW5nOiAxLFxuICAgIGN1cnJlbnRUb29sOiBudWxsLFxuICAgIGRyYWdDb2xvcjogdG9vbENvbG9ycy5nZXRBY3RpdmVDb2xvcigpLFxuICAgIGhvdmVyQ29sb3I6IHRvb2xDb2xvcnMuZ2V0VG9vbENvbG9yKCksXG5cbiAgICAvKiAtLS0gSG92ZXIgb3B0aW9ucyAtLS1cbiAgICBzaG93Q3Vyc29yT25Ib3ZlcjogICAgICAgIFNob3dzIGEgcHJldmlldyBvZiB0aGUgc2N1bHB0aW5nIHJhZGl1cyBvbiBob3Zlci5cbiAgICBsaW1pdFJhZGl1c091dHNpZGVSZWdpb246IExpbWl0IG1heCB0b29sc2l6ZSBvdXRzaWRlIHRoZSBzdWJqZWN0IFJPSSBiYXNlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb24gc3ViamVjdCBST0kgYXJlYS5cbiAgICBob3ZlckN1cnNvckZhZGVBbHBoYTogICAgIEFscGhhIHRvIGZhZGUgdG8gd2hlbiB0b29sIHZlcnkgZGlzdGFudCBmcm9tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0IFJPSS5cbiAgICBob3ZlckN1cnNvckZhZGVEaXN0YW5jZTogIERpc3RhbmNlIGZyb20gUk9JIGluIHdoaWNoIHRvIGZhZGUgdGhlIGhvdmVyQ3Vyc29yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaW4gdW5pdHMgb2YgcmFkaWkpLlxuICAgICovXG4gICAgc2hvd0N1cnNvck9uSG92ZXI6IHRydWUsXG4gICAgbGltaXRSYWRpdXNPdXRzaWRlUmVnaW9uOiB0cnVlLFxuICAgIGhvdmVyQ3Vyc29yRmFkZUFscGhhOiAwLjUsXG4gICAgaG92ZXJDdXJzb3JGYWRlRGlzdGFuY2U6IDEuMlxuICB9O1xufVxuXG5mdW5jdGlvbiBwcmV2ZW50UHJvcGFnYXRpb24oZXZ0KSB7XG4gIGV2dC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICBldnQucHJldmVudERlZmF1bHQoKTtcbn1cbiIsImltcG9ydCB7IG1ldGFEYXRhLCB1cGRhdGVJbWFnZSwgcGl4ZWxUb0NhbnZhcywgZ2V0RW5hYmxlZEVsZW1lbnQsIGdldFBpeGVscyB9IGZyb20gJ2Nvcm5lcnN0b25lLWNvcmUnO1xuaW1wb3J0IHsgcG9pbnQgfSBmcm9tICdjb3JuZXJzdG9uZS1tYXRoJztcbmltcG9ydCB7XG4gIGltcG9ydEludGVybmFsTW9kdWxlLFxuICBGcmVlaGFuZFJvaVRvb2wsXG4gIGdldFRvb2xTdGF0ZSxcbiAgc3RvcmUsXG4gIHRvb2xTdHlsZSxcbiAgdG9vbENvbG9ycyxcbiAgRVZFTlRTXG59IGZyb20gJ2Nvcm5lcnN0b25lLXRvb2xzJztcblxuaW1wb3J0IGdlbmVyYXRlVUlEIGZyb20gJy4uL3V0aWwvZ2VuZXJhdGVVSUQuanMnO1xuaW1wb3J0IGludGVycG9sYXRlIGZyb20gJy4uL3V0aWwvZnJlZWhhbmRJbnRlcnBvbGF0ZS9pbnRlcnBvbGF0ZS5qcyc7XG5pbXBvcnQgZ2V0U2VyaWVzSW5zdGFuY2VVaWRGcm9tRW5hYmxlZEVsZW1lbnQgZnJvbSAnLi4vdXRpbC9nZXRTZXJpZXNJbnN0YW5jZVVpZEZyb21FbmFibGVkRWxlbWVudC5qcyc7XG5cbi8vIENvcm5lcnN0b25lIDNyZCBwYXJ0eSBkZXYga2l0IGltcG9ydHNcbmNvbnN0IHsgaW5zZXJ0T3JEZWxldGUsIGZyZWVoYW5kQXJlYSwgY2FsY3VsYXRlRnJlZWhhbmRTdGF0aXN0aWNzIH0gPSBpbXBvcnRJbnRlcm5hbE1vZHVsZSgndXRpbC9mcmVlaGFuZFV0aWxzJyk7XG5jb25zdCBkcmF3ID0gaW1wb3J0SW50ZXJuYWxNb2R1bGUoJ2RyYXdpbmcvZHJhdycpO1xuY29uc3QgZHJhd0pvaW5lZExpbmVzID0gaW1wb3J0SW50ZXJuYWxNb2R1bGUoJ2RyYXdpbmcvZHJhd0pvaW5lZExpbmVzJyk7XG5jb25zdCBkcmF3SGFuZGxlcyA9IGltcG9ydEludGVybmFsTW9kdWxlKCdkcmF3aW5nL2RyYXdIYW5kbGVzJyk7XG5jb25zdCBkcmF3TGlua2VkVGV4dEJveCA9IGltcG9ydEludGVybmFsTW9kdWxlKCdkcmF3aW5nL2RyYXdMaW5rZWRUZXh0Qm94Jyk7XG5jb25zdCBtb3ZlSGFuZGxlTmVhckltYWdlUG9pbnQgPSBpbXBvcnRJbnRlcm5hbE1vZHVsZSgnbWFuaXB1bGF0b3JzL21vdmVIYW5kbGVOZWFySW1hZ2VQb2ludCcpO1xuY29uc3QgZ2V0TmV3Q29udGV4dCA9IGltcG9ydEludGVybmFsTW9kdWxlKCdkcmF3aW5nL2dldE5ld0NvbnRleHQnKTtcbmNvbnN0IG1vZHVsZXMgPSBzdG9yZS5tb2R1bGVzO1xuY29uc3QgbnVtYmVyc1dpdGhDb21tYXMgPSBpbXBvcnRJbnRlcm5hbE1vZHVsZSgndXRpbC9udW1iZXJzV2l0aENvbW1hcycpO1xuY29uc3QgcG9pbnRJbnNpZGVCb3VuZGluZ0JveCA9IGltcG9ydEludGVybmFsTW9kdWxlKCd1dGlsL3BvaW50SW5zaWRlQm91bmRpbmdCb3gnKTtcbmNvbnN0IGNhbGN1bGF0ZVNVViA9IGltcG9ydEludGVybmFsTW9kdWxlKCd1dGlsL2NhbGN1bGF0ZVNVVicpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmVlaGFuZFJvaTNEVG9vbCBleHRlbmRzIEZyZWVoYW5kUm9pVG9vbCB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb24gPSB7fSkge1xuICAgIGNvbnN0IGRlZmF1bHRDb25maWcgPSB7XG4gICAgICBjb25maWd1cmF0aW9uOiBkZWZhdWx0RnJlZWhhbmRDb25maWd1cmF0aW9uKClcbiAgICB9O1xuICAgIGNvbnN0IGluaXRpYWxDb25maWd1cmF0aW9uID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q29uZmlnLCBjb25maWd1cmF0aW9uKTtcblxuICAgIHN1cGVyKGluaXRpYWxDb25maWd1cmF0aW9uKTtcblxuICAgIHRoaXMuY29uZmlndXJhdGlvbi5hbHdheXNTaG93SGFuZGxlcyA9IGZhbHNlO1xuICAgIHRoaXMuX2ZyZWVoYW5kM0RTdG9yZSA9IG1vZHVsZXMuZnJlZWhhbmQzRDtcblxuICAgIHRoaXMuX29uTWVhc3VyZW1lbnRSZW1vdmVkID0gdGhpcy5fb25NZWFzdXJlbWVudFJlbW92ZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9kcmF3aW5nTW91c2VVcENhbGxiYWNrID0gdGhpcy5fZHJhd2luZ01vdXNlVXBDYWxsYmFjay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgbWVhc3VyZW1lbnQgZGF0YSBmb3IgdGhpcyB0b29sLlxuICAgKiBAb3ZlcnJpZGUgQHB1YmxpYyBAbWV0aG9kXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudERhdGFcbiAgICogQHJldHVybnMge29iamVjdH0gbWVhc3VyZW1lbnREYXRhXG4gICAqL1xuICBjcmVhdGVOZXdNZWFzdXJlbWVudChldmVudERhdGEpIHtcbiAgICBjb25zdCBmcmVlaGFuZDNEU3RvcmUgPSB0aGlzLl9mcmVlaGFuZDNEU3RvcmU7XG4gICAgY29uc3QgZ29vZEV2ZW50RGF0YSA9IGV2ZW50RGF0YSAmJiBldmVudERhdGEuY3VycmVudFBvaW50cyAmJiBldmVudERhdGEuY3VycmVudFBvaW50cy5pbWFnZTtcblxuICAgIGlmICghZ29vZEV2ZW50RGF0YSkge1xuICAgICAgY29uc29sZS5lcnJvcihgcmVxdWlyZWQgZXZlbnREYXRhIG5vdCBzdXBwbGllZCB0byB0b29sICR7dGhpcy5uYW1lfSdzIGNyZWF0ZU5ld01lYXN1cmVtZW50YCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBlbmFibGVkRWxlbWVudCA9IGdldEVuYWJsZWRFbGVtZW50KHRoaXMuZWxlbWVudCk7XG4gICAgY29uc3Qgc2VyaWVzSW5zdGFuY2VVaWQgPSBnZXRTZXJpZXNJbnN0YW5jZVVpZEZyb21FbmFibGVkRWxlbWVudChlbmFibGVkRWxlbWVudCk7XG4gICAgY29uc3QgcmVmZXJlbmNlZFN0cnVjdHVyZVNldCA9IGZyZWVoYW5kM0RTdG9yZS5nZXR0ZXJzLnN0cnVjdHVyZVNldChzZXJpZXNJbnN0YW5jZVVpZCwgJ0RFRkFVTFQnKTtcbiAgICBjb25zdCByZWZlcmVuY2VkUk9JQ29udG91ciA9IGZyZWVoYW5kM0RTdG9yZS5nZXR0ZXJzLmFjdGl2ZVJPSUNvbnRvdXIoc2VyaWVzSW5zdGFuY2VVaWQpO1xuXG4gICAgY29uc3QgbWVhc3VyZW1lbnREYXRhID0ge1xuICAgICAgdWlkOiBnZW5lcmF0ZVVJRCgpLFxuICAgICAgc2VyaWVzSW5zdGFuY2VVaWQsXG4gICAgICBzdHJ1Y3R1cmVTZXRVaWQ6ICdERUZBVUxUJyxcbiAgICAgIFJPSUNvbnRvdXJVaWQ6IHJlZmVyZW5jZWRST0lDb250b3VyLnVpZCxcbiAgICAgIHJlZmVyZW5jZWRST0lDb250b3VyLFxuICAgICAgcmVmZXJlbmNlZFN0cnVjdHVyZVNldCxcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBhY3RpdmU6IHRydWUsXG4gICAgICBpbnZhbGlkYXRlZDogdHJ1ZSxcbiAgICAgIGhhbmRsZXM6IHtcbiAgICAgICAgcG9pbnRzOiBbXVxuICAgICAgfVxuICAgIH07XG5cbiAgICBtZWFzdXJlbWVudERhdGEuaGFuZGxlcy50ZXh0Qm94ID0ge1xuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgIGhhc01vdmVkOiBmYWxzZSxcbiAgICAgIG1vdmVzSW5kZXBlbmRlbnRseTogZmFsc2UsXG4gICAgICBkcmF3bkluZGVwZW5kZW50bHk6IHRydWUsXG4gICAgICBhbGxvd2VkT3V0c2lkZUltYWdlOiB0cnVlLFxuICAgICAgaGFzQm91bmRpbmdCb3g6IHRydWVcbiAgICB9O1xuXG4gICAgZnJlZWhhbmQzRFN0b3JlLnNldHRlcnMuaW5jcmVtZW50UG9seWdvbkNvdW50KHNlcmllc0luc3RhbmNlVWlkLCAnREVGQVVMVCcsIHJlZmVyZW5jZWRST0lDb250b3VyLnVpZCk7XG5cbiAgICByZXR1cm4gbWVhc3VyZW1lbnREYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IGhhbmRsZXIgZm9yIGNhbGxlZCBieSB0aGUgbW91c2VEb3duQWN0aXZhdGUgZXZlbnQsIGlmIHRvb2wgaXMgYWN0aXZlIGFuZFxuICAgKiB0aGUgZXZlbnQgaXMgbm90IGNhdWdodCBieSBtb3VzZURvd25DYWxsYmFjay5cbiAgICogQG92ZXJyaWRlXG4gICAqXG4gICAqIEBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZ0IC0gVGhlIGV2ZW50LlxuICAgKi9cbiAgYWRkTmV3TWVhc3VyZW1lbnQoZXZ0LCBpbnRlcmFjdGlvblR5cGUpIHtcbiAgICBjb25zdCBldmVudERhdGEgPSBldnQuZGV0YWlsO1xuXG4gICAgLy8gQ3JlYXRlIG1ldGFkYXRhIGlmIGl0IGRvZXNuJ3QgZXhpc3QuXG4gICAgdGhpcy5fYWRkQW5kU2V0Vm9sdW1lSWZOb1ZvbHVtZXMoKTtcbiAgICB0aGlzLl9kcmF3aW5nID0gdHJ1ZTtcblxuICAgIHRoaXMuX3N0YXJ0RHJhd2luZyhldnQpO1xuICAgIHRoaXMuX2FkZFBvaW50KGV2ZW50RGF0YSk7XG4gICAgcHJldmVudFByb3BhZ2F0aW9uKGV2dCk7XG4gIH1cblxuICBfYWRkQW5kU2V0Vm9sdW1lSWZOb1ZvbHVtZXMoKSB7XG4gICAgY29uc3QgZW5hYmxlZEVsZW1lbnQgPSBnZXRFbmFibGVkRWxlbWVudCh0aGlzLmVsZW1lbnQpO1xuICAgIGNvbnN0IHNlcmllc0luc3RhbmNlVWlkID0gZ2V0U2VyaWVzSW5zdGFuY2VVaWRGcm9tRW5hYmxlZEVsZW1lbnQoZW5hYmxlZEVsZW1lbnQpO1xuICAgIGNvbnN0IGZyZWVoYW5kM0RTdG9yZSA9IG1vZHVsZXMuZnJlZWhhbmQzRDtcbiAgICBsZXQgc2VyaWVzID0gZnJlZWhhbmQzRFN0b3JlLmdldHRlcnMuc2VyaWVzKHNlcmllc0luc3RhbmNlVWlkKTtcblxuICAgIGlmICghc2VyaWVzKSB7XG4gICAgICBmcmVlaGFuZDNEU3RvcmUuc2V0dGVycy5zZXJpZXMoc2VyaWVzSW5zdGFuY2VVaWQpO1xuICAgICAgc2VyaWVzID0gZnJlZWhhbmQzRFN0b3JlLmdldHRlcnMuc2VyaWVzKHNlcmllc0luc3RhbmNlVWlkKTtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmVST0lDb250b3VyID0gZnJlZWhhbmQzRFN0b3JlLmdldHRlcnMuYWN0aXZlUk9JQ29udG91cihzZXJpZXNJbnN0YW5jZVVpZCk7XG5cbiAgICBpZiAoIWFjdGl2ZVJPSUNvbnRvdXIpIHtcbiAgICAgIGZyZWVoYW5kM0RTdG9yZS5zZXR0ZXJzLlJPSUNvbnRvdXJBbmRTZXRJbmRleEFjdGl2ZShzZXJpZXNJbnN0YW5jZVVpZCwgJ0RFRkFVTFQnLCAnVW5uYW1lZCBMZXNpb24nKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGhhbmRsZSBvZiBhIHBhcnRpY3VsYXIgdG9vbCBpZiBpdCBpcyBjbG9zZSB0byB0aGUgbW91c2UgY3Vyc29yXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgb24gd2hpY2ggdGhlIHJvaSBpcyBiZWluZyBkcmF3bi5cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgICAgICBEYXRhIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggdGhlIHRvb2wuXG4gICAqIEBwYXJhbSB7Kn0gY29vcmRzXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ8T2JqZWN0fEJvb2xlYW59XG4gICAqL1xuICBfcG9pbnROZWFySGFuZGxlKGVsZW1lbnQsIGRhdGEsIGNvb3Jkcykge1xuICAgIGNvbnN0IGZyZWVoYW5kM0RTdG9yZSA9IHRoaXMuX2ZyZWVoYW5kM0RTdG9yZTtcblxuICAgIGlmICghZGF0YS5oYW5kbGVzIHx8IGRhdGEuaGFuZGxlcy5wb2ludHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnZpc2libGUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcG9pbnRzID0gZGF0YS5oYW5kbGVzLnBvaW50cztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBoYW5kbGVDYW52YXMgPSBwaXhlbFRvQ2FudmFzKGVsZW1lbnQsIHBvaW50c1tpXSk7XG5cbiAgICAgIGlmIChwb2ludC5kaXN0YW5jZShoYW5kbGVDYW52YXMsIGNvb3JkcykgPCA2KSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoZWNrIHRvIHNlZSBpZiBtb3VzZSBpbiBib3VuZGluZyBib3ggb2YgdGV4dGJveFxuICAgIGlmIChmcmVlaGFuZDNEU3RvcmUuc3RhdGUuZGlzcGxheVN0YXRzICYmIGRhdGEuaGFuZGxlcy50ZXh0Qm94KSB7XG4gICAgICBpZiAocG9pbnRJbnNpZGVCb3VuZGluZ0JveChkYXRhLmhhbmRsZXMudGV4dEJveCwgY29vcmRzKSkge1xuICAgICAgICByZXR1cm4gZGF0YS5oYW5kbGVzLnRleHRCb3g7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFjdGl2ZSBtb3VzZSBkb3duIGNhbGxiYWNrIHRoYXQgdGFrZXMgcHJpb3JpdHkgaWYgdGhlIHVzZXIgaXMgYXR0ZW1wdGluZ1xuICAgKiB0byBpbnNlcnQgb3IgZGVsZXRlIGEgaGFuZGxlIHdpdGggY3RybCArIGNsaWNrLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZ0IC0gVGhlIGV2ZW50LlxuICAgKi9cbiAgcHJlTW91c2VEb3duQ2FsbGJhY2soZXZ0KSB7XG4gICAgY29uc3QgZXZlbnREYXRhID0gZXZ0LmRldGFpbDtcblxuICAgIGNvbnN0IHRvb2xEYXRhID0gZ2V0VG9vbFN0YXRlKGV2dC5jdXJyZW50VGFyZ2V0LCB0aGlzLm5hbWUpO1xuXG4gICAgaWYgKCF0b29sRGF0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IG5lYXJieSA9IHRoaXMuX3BvaW50TmVhckhhbmRsZUFsbFRvb2xzKGV2ZW50RGF0YSk7XG4gICAgY29uc3QgZnJlZWhhbmQzRFN0b3JlID0gdGhpcy5fZnJlZWhhbmQzRFN0b3JlO1xuXG4gICAgaWYgKGV2ZW50RGF0YS5ldmVudC5jdHJsS2V5KSB7XG4gICAgICBpZiAobmVhcmJ5ICE9PSB1bmRlZmluZWQgJiYgbmVhcmJ5LmhhbmRsZU5lYXJieS5oYXNCb3VuZGluZ0JveCkge1xuICAgICAgICAvLyBDdHJsICsgY2xpY2tlZCB0ZXh0Qm94LCBkbyBub3RoaW5nIGJ1dCBzdGlsbCBjb25zdW1lIGV2ZW50LlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5zZXJ0T3JEZWxldGUuY2FsbCh0aGlzLCBldnQsIG5lYXJieSk7XG4gICAgICB9XG5cbiAgICAgIHByZXZlbnRQcm9wYWdhdGlvbihldnQpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIW5lYXJieSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSB0b29sRGF0YS5kYXRhW25lYXJieS50b29sSW5kZXhdO1xuXG4gICAgLy8gQ2hlY2sgaWYgbG9ja2VkIGFuZCByZXR1cm5cbiAgICBjb25zdCBzdHJ1Y3R1cmVTZXQgPSBmcmVlaGFuZDNEU3RvcmUuZ2V0dGVycy5zdHJ1Y3R1cmVTZXQoZGF0YS5zZXJpZXNJbnN0YW5jZVVpZCwgZGF0YS5zdHJ1Y3R1cmVTZXRVaWQpO1xuXG4gICAgaWYgKHN0cnVjdHVyZVNldC5pc0xvY2tlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDdXN0b20gY2FsbGJhY2sgZm9yIHdoZW4gYSBoYW5kbGUgaXMgc2VsZWN0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gZXZ0XG4gICAqIEBwYXJhbSAge09iamVjdH0gaGFuZGxlIFRoZSBzZWxlY3RlZCBoYW5kbGUuXG4gICAqL1xuICBoYW5kbGVTZWxlY3RlZENhbGxiYWNrKGV2dCwgZGF0YSwgaGFuZGxlLCBpbnRlcmFjdGlvblR5cGUgPSAnbW91c2UnKSB7XG4gICAgY29uc3QgZnJlZWhhbmQzRFN0b3JlID0gdGhpcy5fZnJlZWhhbmQzRFN0b3JlO1xuICAgIGNvbnN0IGV2ZW50RGF0YSA9IGV2dC5kZXRhaWw7XG4gICAgY29uc3QgZWxlbWVudCA9IGV2ZW50RGF0YS5lbGVtZW50O1xuXG4gICAgaWYgKGV2ZW50RGF0YS5ldmVudC5tZXRhS2V5KSB7XG4gICAgICB0aGlzLl9zd2l0Y2hST0lDb250b3VyKGV2dCwgZGF0YSk7XG4gICAgICBwcmV2ZW50UHJvcGFnYXRpb24oZXZ0KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChoYW5kbGUuaGFzQm91bmRpbmdCb3ggJiYgZnJlZWhhbmQzRFN0b3JlLnN0YXRlLmRpc3BsYXlTdGF0cykge1xuICAgICAgLy8gVXNlIGRlZmF1bHQgbW92ZSBoYW5kbGVyIC0gQ2FuIG1vdmUgdGV4dGJveCBvZiBsb2NrZWQgUk9JQ29udG91cnMuXG4gICAgICBtb3ZlSGFuZGxlTmVhckltYWdlUG9pbnQoZXZ0LCB0aGlzLCBkYXRhLCBoYW5kbGUsIGludGVyYWN0aW9uVHlwZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgbG9ja2VkIGFuZCByZXR1cm5cbiAgICBjb25zdCBzdHJ1Y3R1cmVTZXQgPSBmcmVlaGFuZDNEU3RvcmUuZ2V0dGVycy5zdHJ1Y3R1cmVTZXQoZGF0YS5zZXJpZXNJbnN0YW5jZVVpZCwgZGF0YS5zdHJ1Y3R1cmVTZXRVaWQpO1xuXG4gICAgaWYgKHN0cnVjdHVyZVNldC5pc0xvY2tlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbjtcblxuICAgIGNvbmZpZy5kcmFnT3JpZ2luID0ge1xuICAgICAgeDogaGFuZGxlLngsXG4gICAgICB5OiBoYW5kbGUueVxuICAgIH07XG5cbiAgICAvLyBIYXZlIHRvIGRvIHRoaXMgdG8gZ2V0IHRvb2wgaW5kZXguXG4gICAgY29uc3QgbmVhcmJ5ID0gdGhpcy5fcG9pbnROZWFySGFuZGxlQWxsVG9vbHMoZXZlbnREYXRhKTtcblxuICAgIGlmICghbmVhcmJ5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlTmVhcmJ5ID0gbmVhcmJ5LmhhbmRsZU5lYXJieTtcbiAgICBjb25zdCB0b29sSW5kZXggPSBuZWFyYnkudG9vbEluZGV4O1xuXG4gICAgdGhpcy5fbW9kaWZ5aW5nID0gdHJ1ZTtcbiAgICBjb25maWcuY3VycmVudEhhbmRsZSA9IGhhbmRsZU5lYXJieTtcbiAgICBjb25maWcuY3VycmVudFRvb2wgPSB0b29sSW5kZXg7XG5cbiAgICB0aGlzLl9hY3RpdmF0ZU1vZGlmeShlbGVtZW50KTtcbiAgICBwcmV2ZW50UHJvcGFnYXRpb24oZXZ0KTtcbiAgfVxuXG4gIF9zd2l0Y2hST0lDb250b3VyKGV2dCwgZGF0YSkge1xuICAgIGNvbnN0IGZyZWVoYW5kM0RTdG9yZSA9IHRoaXMuX2ZyZWVoYW5kM0RTdG9yZTtcblxuICAgIGZyZWVoYW5kM0RTdG9yZS5zZXR0ZXJzLmFjdGl2ZVJPSUNvbnRvdXIoZGF0YS5zZXJpZXNJbnN0YW5jZVVpZCwgZGF0YS5zdHJ1Y3R1cmVTZXRVaWQsIGRhdGEuUk9JQ29udG91clVpZCk7XG5cbiAgICB1cGRhdGVJbWFnZShldnQuZGV0YWlsLmVsZW1lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gZXZ0XG4gICAqIEByZXR1cm5zXG4gICAqL1xuICByZW5kZXJUb29sRGF0YShldnQpIHtcbiAgICBjb25zdCBldmVudERhdGEgPSBldnQuZGV0YWlsO1xuICAgIGNvbnN0IGZyZWVoYW5kM0RTdG9yZSA9IHRoaXMuX2ZyZWVoYW5kM0RTdG9yZTtcblxuICAgIC8vIElmIHdlIGhhdmUgbm8gdG9vbFN0YXRlIGZvciB0aGlzIGVsZW1lbnQsIHJldHVybiBpbW1lZGlhdGVseSBhcyB0aGVyZSBpcyBub3RoaW5nIHRvIGRvXG4gICAgY29uc3QgdG9vbFN0YXRlID0gZ2V0VG9vbFN0YXRlKGV2dC5jdXJyZW50VGFyZ2V0LCB0aGlzLm5hbWUpO1xuXG4gICAgaWYgKCF0b29sU3RhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpbWFnZSA9IGV2ZW50RGF0YS5pbWFnZTtcbiAgICBjb25zdCBlbGVtZW50ID0gZXZlbnREYXRhLmVsZW1lbnQ7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uO1xuICAgIGNvbnN0IHNlcmllc01vZHVsZSA9IG1ldGFEYXRhLmdldCgnZ2VuZXJhbFNlcmllc01vZHVsZScsIGltYWdlLmltYWdlSWQpO1xuXG4gICAgbGV0IG1vZGFsaXR5O1xuXG4gICAgaWYgKHNlcmllc01vZHVsZSkge1xuICAgICAgbW9kYWxpdHkgPSBzZXJpZXNNb2R1bGUubW9kYWxpdHk7XG4gICAgfVxuXG4gICAgLy8gV2UgaGF2ZSB0b29sIGRhdGEgZm9yIHRoaXMgZWxlbWVudCAtIGl0ZXJhdGUgb3ZlciBlYWNoIG9uZSBhbmQgZHJhdyBpdFxuICAgIGNvbnN0IGNvbnRleHQgPSBnZXROZXdDb250ZXh0KGV2ZW50RGF0YS5jYW52YXNDb250ZXh0LmNhbnZhcyk7XG5cbiAgICBjb25zdCBsaW5lV2lkdGggPSB0b29sU3R5bGUuZ2V0VG9vbFdpZHRoKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvb2xTdGF0ZS5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBkYXRhID0gdG9vbFN0YXRlLmRhdGFbaV07XG4gICAgICBjb25zdCBzdHJ1Y3R1cmVTZXQgPSBkYXRhLnJlZmVyZW5jZWRTdHJ1Y3R1cmVTZXQ7XG4gICAgICBjb25zdCBST0lDb250b3VyID0gZGF0YS5yZWZlcmVuY2VkUk9JQ29udG91cjtcblxuICAgICAgaWYgKGRhdGEudmlzaWJsZSA9PT0gZmFsc2UgfHwgIXN0cnVjdHVyZVNldC52aXNpYmxlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpc1JPSUFjdGl2ZSA9XG4gICAgICAgIGZyZWVoYW5kM0RTdG9yZS5nZXR0ZXJzLlJPSUNvbnRvdXJJbmRleChkYXRhLnNlcmllc0luc3RhbmNlVWlkLCBkYXRhLnN0cnVjdHVyZVNldFVpZCwgZGF0YS5ST0lDb250b3VyVWlkKSA9PT1cbiAgICAgICAgZnJlZWhhbmQzRFN0b3JlLmdldHRlcnMuYWN0aXZlUk9JQ29udG91ckluZGV4KGRhdGEuc2VyaWVzSW5zdGFuY2VVaWQpO1xuXG4gICAgICBkcmF3KGNvbnRleHQsIGNvbnRleHQgPT4ge1xuICAgICAgICBsZXQgY29sb3IgPSB0b29sQ29sb3JzLmdldENvbG9ySWZBY3RpdmUoZGF0YSk7XG4gICAgICAgIGxldCBmaWxsQ29sb3I7XG5cbiAgICAgICAgY29uc3QgcG9pbnRzID0gZGF0YS5oYW5kbGVzLnBvaW50cztcblxuICAgICAgICBpZiAoZGF0YS5hY3RpdmUgJiYgIXN0cnVjdHVyZVNldC5pc0xvY2tlZCkge1xuICAgICAgICAgIGlmIChkYXRhLmhhbmRsZXMuaW52YWxpZEhhbmRsZVBsYWNlbWVudCkge1xuICAgICAgICAgICAgY29sb3IgPSBjb25maWcuaW52YWxpZENvbG9yO1xuICAgICAgICAgICAgZmlsbENvbG9yID0gY29uZmlnLmludmFsaWRDb2xvcjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29sb3IgPSB0b29sQ29sb3JzLmdldENvbG9ySWZBY3RpdmUoZGF0YSk7XG4gICAgICAgICAgICBmaWxsQ29sb3IgPSB0b29sQ29sb3JzLmdldEZpbGxDb2xvcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2xvciA9IFJPSUNvbnRvdXIuY29sb3I7XG4gICAgICAgICAgZmlsbENvbG9yID0gUk9JQ29udG91ci5jb2xvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1JPSUFjdGl2ZSAmJiBkYXRhLmludGVycG9sYXRlZCkge1xuICAgICAgICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSBjb25maWcuaW50ZXJwb2xhdGVkQWxwaGE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS5oYW5kbGVzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBvaW50cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgbGluZXMgPSBbLi4ucG9pbnRzW2pdLmxpbmVzXTtcblxuICAgICAgICAgICAgaWYgKGogPT09IHBvaW50cy5sZW5ndGggLSAxICYmICFkYXRhLnBvbHlCb3VuZGluZ0JveCkge1xuICAgICAgICAgICAgICAvLyBJZiBpdCdzIHN0aWxsIGJlaW5nIGFjdGl2ZWx5IGRyYXduLCBrZWVwIHRoZSBsYXN0IGxpbmUgdG9cbiAgICAgICAgICAgICAgLy8gVGhlIG1vdXNlIGxvY2F0aW9uXG4gICAgICAgICAgICAgIGxpbmVzLnB1c2goY29uZmlnLm1vdXNlTG9jYXRpb24uaGFuZGxlcy5zdGFydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkcmF3Sm9pbmVkTGluZXMoY29udGV4dCwgZXZlbnREYXRhLmVsZW1lbnQsIGRhdGEuaGFuZGxlcy5wb2ludHNbal0sIGxpbmVzLCB7IGNvbG9yIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSAxLjA7XG5cbiAgICAgICAgLy8gRHJhdyBoYW5kbGVzXG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICBjb2xvcixcbiAgICAgICAgICBmaWxsOiBmaWxsQ29sb3JcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoaXNST0lBY3RpdmUgJiYgZGF0YS5pbnRlcnBvbGF0ZWQpIHtcbiAgICAgICAgICAvLyBSZW5kZXIgZG90dGVkIGxpbmVcbiAgICAgICAgICBvcHRpb25zLmhhbmRsZVJhZGl1cyA9IGNvbmZpZy5pbnRlcnBvbGF0ZWRIYW5kbGVSYWRpdXM7XG4gICAgICAgICAgZHJhd0hhbmRsZXMoY29udGV4dCwgZXZlbnREYXRhLCBwb2ludHMsIG9wdGlvbnMpO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZy5hbHdheXNTaG93SGFuZGxlcyB8fCAoZGF0YS5hY3RpdmUgJiYgZGF0YS5wb2x5Qm91bmRpbmdCb3gpKSB7XG4gICAgICAgICAgLy8gUmVuZGVyIGFsbCBoYW5kbGVzXG4gICAgICAgICAgb3B0aW9ucy5oYW5kbGVSYWRpdXMgPSBjb25maWcuYWN0aXZlSGFuZGxlUmFkaXVzO1xuICAgICAgICAgIGRyYXdIYW5kbGVzKGNvbnRleHQsIGV2ZW50RGF0YSwgcG9pbnRzLCBvcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhLmNhbkNvbXBsZXRlKSB7XG4gICAgICAgICAgLy8gRHJhdyBsYXJnZSBoYW5kbGUgYXQgdGhlIG9yaWdpbiBpZiBjYW4gY29tcGxldGUgZHJhd2luZ1xuICAgICAgICAgIG9wdGlvbnMuaGFuZGxlUmFkaXVzID0gY29uZmlnLmNvbXBsZXRlSGFuZGxlUmFkaXVzO1xuICAgICAgICAgIGRyYXdIYW5kbGVzKGNvbnRleHQsIGV2ZW50RGF0YSwgW3BvaW50c1swXV0sIG9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEuYWN0aXZlICYmICFkYXRhLnBvbHlCb3VuZGluZ0JveCkge1xuICAgICAgICAgIC8vIERyYXcgaGFuZGxlIGF0IG9yaWdpbiBhbmQgYXQgbW91c2UgaWYgYWN0aXZlbHkgZHJhd2luZ1xuICAgICAgICAgIG9wdGlvbnMuaGFuZGxlUmFkaXVzID0gY29uZmlnLmFjdGl2ZUhhbmRsZVJhZGl1cztcbiAgICAgICAgICBkcmF3SGFuZGxlcyhjb250ZXh0LCBldmVudERhdGEsIGNvbmZpZy5tb3VzZUxvY2F0aW9uLmhhbmRsZXMsIG9wdGlvbnMpO1xuICAgICAgICAgIGRyYXdIYW5kbGVzKGNvbnRleHQsIGV2ZW50RGF0YSwgW3BvaW50c1swXV0sIG9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVmaW5lIHZhcmlhYmxlcyBmb3IgdGhlIGFyZWEgYW5kIG1lYW4vc3RhbmRhcmQgZGV2aWF0aW9uXG4gICAgICAgIGxldCBhcmVhLCBtZWFuU3RkRGV2LCBtZWFuU3RkRGV2U1VWO1xuXG4gICAgICAgIC8vIFBlcmZvcm0gYSBjaGVjayB0byBzZWUgaWYgdGhlIHRvb2wgaGFzIGJlZW4gaW52YWxpZGF0ZWQuIFRoaXMgaXMgdG8gcHJldmVudFxuICAgICAgICAvLyBVbm5lY2Vzc2FyeSByZS1jYWxjdWxhdGlvbiBvZiB0aGUgYXJlYSwgbWVhbiwgYW5kIHN0YW5kYXJkIGRldmlhdGlvbiBpZiB0aGVcbiAgICAgICAgLy8gSW1hZ2UgaXMgcmUtcmVuZGVyZWQgYnV0IHRoZSB0b29sIGhhcyBub3QgbW92ZWQgKGUuZy4gZHVyaW5nIGEgem9vbSlcbiAgICAgICAgaWYgKGRhdGEuaW52YWxpZGF0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRhdGEgaXMgbm90IGludmFsaWRhdGVkLCByZXRyaWV2ZSBpdCBmcm9tIHRoZSB0b29sU3RhdGVcbiAgICAgICAgICBtZWFuU3RkRGV2ID0gZGF0YS5tZWFuU3RkRGV2O1xuICAgICAgICAgIG1lYW5TdGREZXZTVVYgPSBkYXRhLm1lYW5TdGREZXZTVVY7XG4gICAgICAgICAgYXJlYSA9IGRhdGEuYXJlYTtcbiAgICAgICAgfSBlbHNlIGlmICghZGF0YS5hY3RpdmUpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGF0YSBoYXMgYmVlbiBpbnZhbGlkYXRlZCwgYW5kIHRoZSB0b29sIGlzIG5vdCBjdXJyZW50bHkgYWN0aXZlLFxuICAgICAgICAgIC8vIFdlIG5lZWQgdG8gY2FsY3VsYXRlIGl0IGFnYWluLlxuXG4gICAgICAgICAgLy8gUmV0cmlldmUgdGhlIGJvdW5kcyBvZiB0aGUgUk9JIGluIGltYWdlIGNvb3JkaW5hdGVzXG4gICAgICAgICAgY29uc3QgYm91bmRzID0ge1xuICAgICAgICAgICAgbGVmdDogcG9pbnRzWzBdLngsXG4gICAgICAgICAgICByaWdodDogcG9pbnRzWzBdLngsXG4gICAgICAgICAgICBib3R0b206IHBvaW50c1swXS55LFxuICAgICAgICAgICAgdG9wOiBwb2ludHNbMF0ueFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYm91bmRzLmxlZnQgPSBNYXRoLm1pbihib3VuZHMubGVmdCwgcG9pbnRzW2ldLngpO1xuICAgICAgICAgICAgYm91bmRzLnJpZ2h0ID0gTWF0aC5tYXgoYm91bmRzLnJpZ2h0LCBwb2ludHNbaV0ueCk7XG4gICAgICAgICAgICBib3VuZHMuYm90dG9tID0gTWF0aC5taW4oYm91bmRzLmJvdHRvbSwgcG9pbnRzW2ldLnkpO1xuICAgICAgICAgICAgYm91bmRzLnRvcCA9IE1hdGgubWF4KGJvdW5kcy50b3AsIHBvaW50c1tpXS55KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBwb2x5Qm91bmRpbmdCb3ggPSB7XG4gICAgICAgICAgICBsZWZ0OiBib3VuZHMubGVmdCxcbiAgICAgICAgICAgIHRvcDogYm91bmRzLmJvdHRvbSxcbiAgICAgICAgICAgIHdpZHRoOiBNYXRoLmFicyhib3VuZHMucmlnaHQgLSBib3VuZHMubGVmdCksXG4gICAgICAgICAgICBoZWlnaHQ6IE1hdGguYWJzKGJvdW5kcy50b3AgLSBib3VuZHMuYm90dG9tKVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyBTdG9yZSB0aGUgYm91bmRpbmcgYm94IGluZm9ybWF0aW9uIGZvciB0aGUgdGV4dCBib3hcbiAgICAgICAgICBkYXRhLnBvbHlCb3VuZGluZ0JveCA9IHBvbHlCb3VuZGluZ0JveDtcblxuICAgICAgICAgIC8vIEZpcnN0LCBtYWtlIHN1cmUgdGhpcyBpcyBub3QgYSBjb2xvciBpbWFnZSwgc2luY2Ugbm8gbWVhbiAvIHN0YW5kYXJkXG4gICAgICAgICAgLy8gRGV2aWF0aW9uIHdpbGwgYmUgY2FsY3VsYXRlZCBmb3IgY29sb3IgaW1hZ2VzLlxuICAgICAgICAgIGlmICghaW1hZ2UuY29sb3IpIHtcbiAgICAgICAgICAgIC8vIFJldHJpZXZlIHRoZSBhcnJheSBvZiBwaXhlbHMgdGhhdCB0aGUgUk9JIGJvdW5kcyBjb3ZlclxuICAgICAgICAgICAgY29uc3QgcGl4ZWxzID0gZ2V0UGl4ZWxzKFxuICAgICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgICBwb2x5Qm91bmRpbmdCb3gubGVmdCxcbiAgICAgICAgICAgICAgcG9seUJvdW5kaW5nQm94LnRvcCxcbiAgICAgICAgICAgICAgcG9seUJvdW5kaW5nQm94LndpZHRoLFxuICAgICAgICAgICAgICBwb2x5Qm91bmRpbmdCb3guaGVpZ2h0XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIG1lYW4gJiBzdGFuZGFyZCBkZXZpYXRpb24gZnJvbSB0aGUgcGl4ZWxzIGFuZCB0aGUgb2JqZWN0IHNoYXBlXG4gICAgICAgICAgICBtZWFuU3RkRGV2ID0gY2FsY3VsYXRlRnJlZWhhbmRTdGF0aXN0aWNzLmNhbGwodGhpcywgcGl4ZWxzLCBwb2x5Qm91bmRpbmdCb3gsIHBvaW50cyk7XG5cbiAgICAgICAgICAgIGlmIChtb2RhbGl0eSA9PT0gJ1BUJykge1xuICAgICAgICAgICAgICAvLyBJZiB0aGUgaW1hZ2UgaXMgZnJvbSBhIFBFVCBzY2FuLCB1c2UgdGhlIERJQ09NIHRhZ3MgdG9cbiAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBTVVYgZnJvbSB0aGUgbWVhbiBhbmQgc3RhbmRhcmQgZGV2aWF0aW9uLlxuXG4gICAgICAgICAgICAgIC8vIE5vdGUgdGhhdCBiZWNhdXNlIHdlIGFyZSB1c2luZyBtb2RhbGl0eSBwaXhlbCB2YWx1ZXMgZnJvbSBnZXRQaXhlbHMsIGFuZFxuICAgICAgICAgICAgICAvLyBUaGUgY2FsY3VsYXRlU1VWIHJvdXRpbmUgYWxzbyByZXNjYWxlcyB0byBtb2RhbGl0eSBwaXhlbCB2YWx1ZXMsIHdlIGFyZSBmaXJzdFxuICAgICAgICAgICAgICAvLyBSZXR1cm5pbmcgdGhlIHZhbHVlcyB0byBzdG9yZWRQaXhlbCB2YWx1ZXMgYmVmb3JlIGNhbGN1YXRpbmcgU1VWIHdpdGggdGhlbS5cbiAgICAgICAgICAgICAgLy8gVE9ETzogQ2xlYW4gdGhpcyB1cD8gU2hvdWxkIHdlIGFkZCBhbiBvcHRpb24gdG8gbm90IHNjYWxlIGluIGNhbGN1bGF0ZVNVVj9cbiAgICAgICAgICAgICAgbWVhblN0ZERldlNVViA9IHtcbiAgICAgICAgICAgICAgICBtZWFuOiBjYWxjdWxhdGVTVVYoaW1hZ2UsIChtZWFuU3RkRGV2Lm1lYW4gLSBpbWFnZS5pbnRlcmNlcHQpIC8gaW1hZ2Uuc2xvcGUpLFxuICAgICAgICAgICAgICAgIHN0ZERldjogY2FsY3VsYXRlU1VWKGltYWdlLCAobWVhblN0ZERldi5zdGREZXYgLSBpbWFnZS5pbnRlcmNlcHQpIC8gaW1hZ2Uuc2xvcGUpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBtZWFuIGFuZCBzdGFuZGFyZCBkZXZpYXRpb24gdmFsdWVzIGFyZSBzYW5lLCBzdG9yZSB0aGVtIGZvciBsYXRlciByZXRyaWV2YWxcbiAgICAgICAgICAgIGlmIChtZWFuU3RkRGV2ICYmICFpc05hTihtZWFuU3RkRGV2Lm1lYW4pKSB7XG4gICAgICAgICAgICAgIGRhdGEubWVhblN0ZERldiA9IG1lYW5TdGREZXY7XG4gICAgICAgICAgICAgIGRhdGEubWVhblN0ZERldlNVViA9IG1lYW5TdGREZXZTVVY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUmV0cmlldmUgdGhlIHBpeGVsIHNwYWNpbmcgdmFsdWVzLCBhbmQgaWYgdGhleSBhcmUgbm90XG4gICAgICAgICAgLy8gUmVhbCBub24temVybyB2YWx1ZXMsIHNldCB0aGVtIHRvIDFcbiAgICAgICAgICBjb25zdCBjb2x1bW5QaXhlbFNwYWNpbmcgPSBpbWFnZS5jb2x1bW5QaXhlbFNwYWNpbmcgfHwgMTtcbiAgICAgICAgICBjb25zdCByb3dQaXhlbFNwYWNpbmcgPSBpbWFnZS5yb3dQaXhlbFNwYWNpbmcgfHwgMTtcbiAgICAgICAgICBjb25zdCBzY2FsaW5nID0gY29sdW1uUGl4ZWxTcGFjaW5nICogcm93UGl4ZWxTcGFjaW5nO1xuXG4gICAgICAgICAgYXJlYSA9IGZyZWVoYW5kQXJlYShwb2ludHMsIHNjYWxpbmcpO1xuXG4gICAgICAgICAgLy8gSWYgdGhlIGFyZWEgdmFsdWUgaXMgc2FuZSwgc3RvcmUgaXQgZm9yIGxhdGVyIHJldHJpZXZhbFxuICAgICAgICAgIGlmICghaXNOYU4oYXJlYSkpIHtcbiAgICAgICAgICAgIGRhdGEuYXJlYSA9IGFyZWE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU2V0IHRoZSBpbnZhbGlkYXRlZCBmbGFnIHRvIGZhbHNlIHNvIHRoYXQgdGhpcyBkYXRhIHdvbid0IGF1dG9tYXRpY2FsbHkgYmUgcmVjYWxjdWxhdGVkXG4gICAgICAgICAgZGF0YS5pbnZhbGlkYXRlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gT25seSByZW5kZXIgdGV4dCBpZiBwb2x5Z29uIFJPSSBoYXMgYmVlbiBjb21wbGV0ZWQsIGFuZCBpcyBhY3RpdmUsXG4gICAgICAgIC8vIE9yIGNvbmZpZyBpcyBzZXQgdG8gc2hvdyB0aGUgdGV4dEJveCBhbGwgdGhlIHRpbWVcbiAgICAgICAgaWYgKGRhdGEucG9seUJvdW5kaW5nQm94ICYmIChmcmVlaGFuZDNEU3RvcmUuc3RhdGUuZGlzcGxheVN0YXRzIHx8IGRhdGEuYWN0aXZlKSkge1xuICAgICAgICAgIC8vIElmIHRoZSB0ZXh0Ym94IGhhcyBub3QgYmVlbiBtb3ZlZCBieSB0aGUgdXNlciwgaXQgc2hvdWxkIGJlIGRpc3BsYXllZCBvbiB0aGUgcmlnaHQtbW9zdFxuICAgICAgICAgIC8vIFNpZGUgb2YgdGhlIHRvb2wuXG5cbiAgICAgICAgICBpZiAoIWRhdGEuaGFuZGxlcy50ZXh0Qm94Lmhhc01vdmVkKSB7XG4gICAgICAgICAgICAvLyBGaW5kIHRoZSByaWdodG1vc3Qgc2lkZSBvZiB0aGUgcG9seUJvdW5kaW5nQm94IGF0IGl0cyB2ZXJ0aWNhbCBjZW50ZXIsIGFuZCBwbGFjZSB0aGUgdGV4dGJveCBoZXJlXG4gICAgICAgICAgICAvLyBOb3RlIHRoYXQgdGhpcyBjYWxjdWxhdGVzIGl0IGluIGltYWdlIGNvb3JkaW5hdGVzXG4gICAgICAgICAgICBkYXRhLmhhbmRsZXMudGV4dEJveC54ID0gZGF0YS5wb2x5Qm91bmRpbmdCb3gubGVmdCArIGRhdGEucG9seUJvdW5kaW5nQm94LndpZHRoO1xuICAgICAgICAgICAgZGF0YS5oYW5kbGVzLnRleHRCb3gueSA9IGRhdGEucG9seUJvdW5kaW5nQm94LnRvcCArIGRhdGEucG9seUJvdW5kaW5nQm94LmhlaWdodCAvIDI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgdGV4dCA9IHRleHRCb3hUZXh0LmNhbGwodGhpcywgZGF0YSk7XG5cbiAgICAgICAgICBkcmF3TGlua2VkVGV4dEJveChcbiAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgZGF0YS5oYW5kbGVzLnRleHRCb3gsXG4gICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgcG9pbnRzLFxuICAgICAgICAgICAgdGV4dEJveEFuY2hvclBvaW50cyxcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgbGluZVdpZHRoLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIHRydWVcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0ZXh0Qm94VGV4dChkYXRhKSB7XG4gICAgICBjb25zdCBST0lDb250b3VyID0gZGF0YS5yZWZlcmVuY2VkUk9JQ29udG91cjtcbiAgICAgIGNvbnN0IHN0cnVjdHVyZVNldCA9IGRhdGEucmVmZXJlbmNlZFN0cnVjdHVyZVNldDtcblxuICAgICAgY29uc3QgeyBtZWFuU3RkRGV2LCBtZWFuU3RkRGV2U1VWLCBhcmVhIH0gPSBkYXRhO1xuICAgICAgLy8gRGVmaW5lIGFuIGFycmF5IHRvIHN0b3JlIHRoZSByb3dzIG9mIHRleHQgZm9yIHRoZSB0ZXh0Ym94XG4gICAgICBjb25zdCB0ZXh0TGluZXMgPSBbXTtcblxuICAgICAgdGV4dExpbmVzLnB1c2goUk9JQ29udG91ci5uYW1lKTtcblxuICAgICAgaWYgKHN0cnVjdHVyZVNldC5uYW1lID09PSAnREVGQVVMVCcpIHtcbiAgICAgICAgdGV4dExpbmVzLnB1c2goJ1dvcmtpbmcgUk9JIENvbGxlY3Rpb24nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHRMaW5lcy5wdXNoKHN0cnVjdHVyZVNldC5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlIG1lYW4gYW5kIHN0YW5kYXJkIGRldmlhdGlvbiB2YWx1ZXMgYXJlIHByZXNlbnQsIGRpc3BsYXkgdGhlbVxuICAgICAgaWYgKG1lYW5TdGREZXYgJiYgbWVhblN0ZERldi5tZWFuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gSWYgdGhlIG1vZGFsaXR5IGlzIENULCBhZGQgSFUgdG8gZGVub3RlIEhvdW5zZmllbGQgVW5pdHNcbiAgICAgICAgbGV0IG1vU3VmZml4ID0gJyc7XG5cbiAgICAgICAgaWYgKG1vZGFsaXR5ID09PSAnQ1QnKSB7XG4gICAgICAgICAgbW9TdWZmaXggPSAnIEhVJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBhIGxpbmUgb2YgdGV4dCB0byBkaXNwbGF5IHRoZSBtZWFuIGFuZCBhbnkgdW5pdHMgdGhhdCB3ZXJlIHNwZWNpZmllZCAoaS5lLiBIVSlcbiAgICAgICAgbGV0IG1lYW5UZXh0ID0gYE1lYW46ICR7bnVtYmVyc1dpdGhDb21tYXMobWVhblN0ZERldi5tZWFuLnRvRml4ZWQoMikpfSR7bW9TdWZmaXh9YDtcbiAgICAgICAgLy8gQ3JlYXRlIGEgbGluZSBvZiB0ZXh0IHRvIGRpc3BsYXkgdGhlIHN0YW5kYXJkIGRldmlhdGlvbiBhbmQgYW55IHVuaXRzIHRoYXQgd2VyZSBzcGVjaWZpZWQgKGkuZS4gSFUpXG4gICAgICAgIGxldCBzdGREZXZUZXh0ID0gYFN0ZERldjogJHtudW1iZXJzV2l0aENvbW1hcyhtZWFuU3RkRGV2LnN0ZERldi50b0ZpeGVkKDIpKX0ke21vU3VmZml4fWA7XG5cbiAgICAgICAgLy8gSWYgdGhpcyBpbWFnZSBoYXMgU1VWIHZhbHVlcyB0byBkaXNwbGF5LCBjb25jYXRlbmF0ZSB0aGVtIHRvIHRoZSB0ZXh0IGxpbmVcbiAgICAgICAgaWYgKG1lYW5TdGREZXZTVVYgJiYgbWVhblN0ZERldlNVVi5tZWFuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb25zdCBTVVZ0ZXh0ID0gJyBTVVY6ICc7XG5cbiAgICAgICAgICBtZWFuVGV4dCArPSBTVVZ0ZXh0ICsgbnVtYmVyc1dpdGhDb21tYXMobWVhblN0ZERldlNVVi5tZWFuLnRvRml4ZWQoMikpO1xuICAgICAgICAgIHN0ZERldlRleHQgKz0gU1VWdGV4dCArIG51bWJlcnNXaXRoQ29tbWFzKG1lYW5TdGREZXZTVVYuc3RkRGV2LnRvRml4ZWQoMikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIHRoZXNlIHRleHQgbGluZXMgdG8gdGhlIGFycmF5IHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgdGV4dGJveFxuICAgICAgICB0ZXh0TGluZXMucHVzaChtZWFuVGV4dCk7XG4gICAgICAgIHRleHRMaW5lcy5wdXNoKHN0ZERldlRleHQpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGUgYXJlYSBpcyBhIHNhbmUgdmFsdWUsIGRpc3BsYXkgaXRcbiAgICAgIGlmIChhcmVhKSB7XG4gICAgICAgIC8vIERldGVybWluZSB0aGUgYXJlYSBzdWZmaXggYmFzZWQgb24gdGhlIHBpeGVsIHNwYWNpbmcgaW4gdGhlIGltYWdlLlxuICAgICAgICAvLyBJZiBwaXhlbCBzcGFjaW5nIGlzIHByZXNlbnQsIHVzZSBtaWxsaW1ldGVycy4gT3RoZXJ3aXNlLCB1c2UgcGl4ZWxzLlxuICAgICAgICAvLyBUaGlzIHVzZXMgQ2hhciBjb2RlIDE3OCBmb3IgYSBzdXBlcnNjcmlwdCAyXG4gICAgICAgIGxldCBzdWZmaXggPSBgIG1tJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDE3OCl9YDtcblxuICAgICAgICBpZiAoIWltYWdlLnJvd1BpeGVsU3BhY2luZyB8fCAhaW1hZ2UuY29sdW1uUGl4ZWxTcGFjaW5nKSB7XG4gICAgICAgICAgc3VmZml4ID0gYCBwaXhlbHMke1N0cmluZy5mcm9tQ2hhckNvZGUoMTc4KX1gO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgbGluZSBvZiB0ZXh0IHRvIGRpc3BsYXkgdGhlIGFyZWEgYW5kIGl0cyB1bml0c1xuICAgICAgICBjb25zdCBhcmVhVGV4dCA9IGBBcmVhOiAke251bWJlcnNXaXRoQ29tbWFzKGFyZWEudG9GaXhlZCgyKSl9JHtzdWZmaXh9YDtcblxuICAgICAgICAvLyBBZGQgdGhpcyB0ZXh0IGxpbmUgdG8gdGhlIGFycmF5IHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgdGV4dGJveFxuICAgICAgICB0ZXh0TGluZXMucHVzaChhcmVhVGV4dCk7XG4gICAgICB9XG5cbiAgICAgIHRleHRMaW5lcy5wdXNoKGAke1JPSUNvbnRvdXIucG9seWdvbkNvdW50fSBjb250b3Vyc2ApO1xuXG4gICAgICByZXR1cm4gdGV4dExpbmVzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRleHRCb3hBbmNob3JQb2ludHMocG9pbnRzKSB7XG4gICAgICByZXR1cm4gcG9pbnRzO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbmRzIHRoZSBhY3RpdmUgZHJhd2luZyBsb29wIGFuZCBjb21wbGV0ZXMgdGhlIHBvbHlnb24uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgb24gd2hpY2ggdGhlIHJvaSBpcyBiZWluZyBkcmF3bi5cbiAgICogQHBhcmFtIHtPYmplY3R9IGhhbmRsZU5lYXJieSAtIHRoZSBoYW5kbGUgbmVhcmVzdCB0byB0aGUgbW91c2UgY3Vyc29yLlxuICAgKi9cbiAgX2VuZERyYXdpbmcoZWxlbWVudCwgaGFuZGxlTmVhcmJ5KSB7XG4gICAgY29uc3QgdG9vbFN0YXRlID0gZ2V0VG9vbFN0YXRlKGVsZW1lbnQsIHRoaXMubmFtZSk7XG5cbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb247XG5cbiAgICBjb25zdCBkYXRhID0gdG9vbFN0YXRlLmRhdGFbY29uZmlnLmN1cnJlbnRUb29sXTtcblxuICAgIGNvbnN0IHBvaW50cyA9IGRhdGEuaGFuZGxlcy5wb2ludHM7XG5cbiAgICBkYXRhLmFjdGl2ZSA9IGZhbHNlO1xuICAgIGRhdGEuaGlnaGxpZ2h0ID0gZmFsc2U7XG4gICAgZGF0YS5oYW5kbGVzLmludmFsaWRIYW5kbGVQbGFjZW1lbnQgPSBmYWxzZTtcblxuICAgIC8vIENvbm5lY3QgdGhlIGVuZCBoYW5kbGUgdG8gdGhlIG9yaWdpbiBoYW5kbGVcbiAgICBpZiAoaGFuZGxlTmVhcmJ5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBvaW50c1tjb25maWcuY3VycmVudEhhbmRsZSAtIDFdLmxpbmVzLnB1c2gocG9pbnRzWzBdKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbW9kaWZ5aW5nKSB7XG4gICAgICB0aGlzLl9tb2RpZnlpbmcgPSBmYWxzZTtcbiAgICAgIGRhdGEuaW52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgZGF0YS5pbnRlcnBvbGF0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBSZXNldCB0aGUgY3VycmVudCBoYW5kbGVcbiAgICBjb25maWcuY3VycmVudEhhbmRsZSA9IDA7XG4gICAgY29uZmlnLmN1cnJlbnRUb29sID0gLTE7XG4gICAgZGF0YS5jYW5Db21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuX2RyYXdpbmcpIHtcbiAgICAgIHRoaXMuX2RyYXdpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2RlYWN0aXZhdGVEcmF3KGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmIChtb2R1bGVzLmZyZWVoYW5kM0Quc3RhdGUuaW50ZXJwb2xhdGUpIHtcbiAgICAgIGludGVycG9sYXRlKGRhdGEsIGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHVwZGF0ZUltYWdlKGVsZW1lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEN1c3RvbSBjYWxsYmFjayBmb3Igd2hlbiB0b29sRGF0YSBpcyBkZWxldGVkLlxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGV2dFxuICAgKi9cbiAgX29uTWVhc3VyZW1lbnRSZW1vdmVkKGV2dCkge1xuICAgIGNvbnN0IGV2ZW50RGF0YSA9IGV2dC5kZXRhaWw7XG5cbiAgICBpZiAoZXZlbnREYXRhLnRvb2xUeXBlICE9PSB0aGlzLm5hbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtZWFzdXJlbWVudERhdGEgPSBldmVudERhdGEubWVhc3VyZW1lbnREYXRhO1xuXG4gICAgdGhpcy5fZnJlZWhhbmQzRFN0b3JlLnNldHRlcnMuZGVjcmVtZW50UG9seWdvbkNvdW50KFxuICAgICAgbWVhc3VyZW1lbnREYXRhLnNlcmllc0luc3RhbmNlVWlkLFxuICAgICAgbWVhc3VyZW1lbnREYXRhLnN0cnVjdHVyZVNldFVpZCxcbiAgICAgIG1lYXN1cmVtZW50RGF0YS5ST0lDb250b3VyVWlkXG4gICAgKTtcbiAgfVxuXG4gIHBhc3NpdmVDYWxsYmFjayhlbGVtZW50KSB7XG4gICAgdGhpcy5fY2xvc2VUb29sSWZEcmF3aW5nKGVsZW1lbnQpO1xuICAgIHRoaXMuX2FkZE1lYXN1cmVtZW50UmVtb3ZlZExpc3RlbmVyKGVsZW1lbnQpO1xuICB9XG5cbiAgZW5hYmxlZENhbGxiYWNrKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9jbG9zZVRvb2xJZkRyYXdpbmcoZWxlbWVudCk7XG4gICAgdGhpcy5fYWRkTWVhc3VyZW1lbnRSZW1vdmVkTGlzdGVuZXIoZWxlbWVudCk7XG4gIH1cblxuICBhY3RpdmVDYWxsYmFjayhlbGVtZW50KSB7XG4gICAgdGhpcy5fYWRkTWVhc3VyZW1lbnRSZW1vdmVkTGlzdGVuZXIoZWxlbWVudCk7XG4gIH1cblxuICBkaXNhYmxlZENhbGxiYWNrKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9jbG9zZVRvb2xJZkRyYXdpbmcoZWxlbWVudCk7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKEVWRU5UUy5NRUFTVVJFTUVOVF9SRU1PVkVELCB0aGlzLl9vbk1lYXN1cmVtZW50UmVtb3ZlZCk7XG4gIH1cblxuICBfYWRkTWVhc3VyZW1lbnRSZW1vdmVkTGlzdGVuZXIoZWxlbWVudCkge1xuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihFVkVOVFMuTUVBU1VSRU1FTlRfUkVNT1ZFRCwgdGhpcy5fb25NZWFzdXJlbWVudFJlbW92ZWQpO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihFVkVOVFMuTUVBU1VSRU1FTlRfUkVNT1ZFRCwgdGhpcy5fb25NZWFzdXJlbWVudFJlbW92ZWQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRGcmVlaGFuZENvbmZpZ3VyYXRpb24oKSB7XG4gIHJldHVybiB7XG4gICAgbW91c2VMb2NhdGlvbjoge1xuICAgICAgaGFuZGxlczoge1xuICAgICAgICBzdGFydDoge1xuICAgICAgICAgIGhpZ2hsaWdodDogdHJ1ZSxcbiAgICAgICAgICBhY3RpdmU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgc3BhY2luZzogMSxcbiAgICBpbnRlcnBvbGF0ZWRIYW5kbGVSYWRpdXM6IDAuNSxcbiAgICBpbnRlcnBvbGF0ZWRBbHBoYTogMC41LFxuICAgIGFjdGl2ZUhhbmRsZVJhZGl1czogMyxcbiAgICBjb21wbGV0ZUhhbmRsZVJhZGl1czogNixcbiAgICBjb21wbGV0ZUhhbmRsZVJhZGl1c1RvdWNoOiAyOCxcbiAgICBhbHdheXNTaG93SGFuZGxlczogZmFsc2UsXG4gICAgaW52YWxpZENvbG9yOiAnY3JpbXNvbicsXG4gICAgY3VycmVudEhhbmRsZTogMCxcbiAgICBjdXJyZW50VG9vbDogLTFcbiAgfTtcbn1cblxuZnVuY3Rpb24gcHJldmVudFByb3BhZ2F0aW9uKGV2dCkge1xuICBldnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90dXp6L24tZGltZW5zaW9uYWwtZmxvb2QtZmlsbFxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIGxldCBnZXR0ZXIsIHNlZWQsIG9uRmxvb2QsIG9uQm91bmRhcnksIGVxdWFscywgZGlhZ29uYWxzLCBzdGFydE5vZGUsIHBlcm11dGF0aW9ucywgc3RhY2ssIGZsb29kZWQsIHZpc2l0cywgYm91bmRzO1xuXG4gIGxldCBpbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgIGdldHRlciA9IG9wdGlvbnMuZ2V0dGVyO1xuICAgIHNlZWQgPSBvcHRpb25zLnNlZWQ7XG4gICAgb25GbG9vZCA9IG9wdGlvbnMub25GbG9vZCB8fCBub29wO1xuICAgIG9uQm91bmRhcnkgPSBvcHRpb25zLm9uQm91bmRhcnkgfHwgbm9vcDtcbiAgICBlcXVhbHMgPSBvcHRpb25zLmVxdWFscyB8fCBkZWZhdWx0RXF1YWxzO1xuICAgIGRpYWdvbmFscyA9IG9wdGlvbnMuZGlhZ29uYWxzIHx8IGZhbHNlO1xuICAgIHN0YXJ0Tm9kZSA9IGdldChzZWVkKTtcbiAgICBwZXJtdXRhdGlvbnMgPSBwcnVuZWRQZXJtdXRhdGlvbnMoKTtcbiAgICBzdGFjayA9IFtdO1xuICAgIGZsb29kZWQgPSBbXTtcbiAgICB2aXNpdHMgPSB7fTtcbiAgICBib3VuZHMgPSB7fTtcbiAgfTtcblxuICBsZXQgbWFpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBzdGFjay5wdXNoKHsgY3VycmVudEFyZ3M6IHNlZWQgfSk7XG5cbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgZmxvb2Qoc3RhY2sucG9wKCkpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBmbG9vZGVkOiBmbG9vZGVkLFxuICAgICAgYm91bmRhcmllczogYm91bmRhcmllcygpXG4gICAgfTtcbiAgfTtcblxuICBsZXQgZmxvb2QgPSBmdW5jdGlvbiAoam9iKSB7XG4gICAgbGV0IGdldEFyZ3MgPSBqb2IuY3VycmVudEFyZ3M7XG4gICAgbGV0IHByZWxldGdzID0gam9iLnByZXZpb3VzQXJncztcblxuICAgIGlmICh2aXNpdGVkKGdldEFyZ3MpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG1hcmtBc1Zpc2l0ZWQoZ2V0QXJncyk7XG5cbiAgICBpZiAobWVtYmVyKGdldEFyZ3MpKSB7XG4gICAgICBtYXJrQXNGbG9vZGVkKGdldEFyZ3MpO1xuICAgICAgcHVzaEFkamFjZW50KGdldEFyZ3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYXJrQXNCb3VuZGFyeShwcmVsZXRncyk7XG4gICAgfVxuICB9O1xuXG4gIGxldCB2aXNpdGVkID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiB2aXNpdHNba2V5XSA9PT0gdHJ1ZTtcbiAgfTtcblxuICBsZXQgbWFya0FzVmlzaXRlZCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2aXNpdHNba2V5XSA9IHRydWU7XG4gIH07XG5cbiAgbGV0IG1lbWJlciA9IGZ1bmN0aW9uIChnZXRBcmdzKSB7XG4gICAgbGV0IG5vZGUgPSBzYWZlbHkoZ2V0LCBbZ2V0QXJnc10pO1xuXG4gICAgcmV0dXJuIHNhZmVseShlcXVhbHMsIFtub2RlLCBzdGFydE5vZGVdKTtcbiAgfTtcblxuICBsZXQgbWFya0FzRmxvb2RlZCA9IGZ1bmN0aW9uIChnZXRBcmdzKSB7XG4gICAgZmxvb2RlZC5wdXNoKGdldEFyZ3MpO1xuICAgIG9uRmxvb2QuYXBwbHkodW5kZWZpbmVkLCBnZXRBcmdzKTtcbiAgfTtcblxuICBsZXQgbWFya0FzQm91bmRhcnkgPSBmdW5jdGlvbiAocHJlbGV0Z3MpIHtcbiAgICBib3VuZHNbcHJlbGV0Z3NdID0gcHJlbGV0Z3M7XG4gICAgb25Cb3VuZGFyeS5hcHBseSh1bmRlZmluZWQsIHByZWxldGdzKTtcbiAgfTtcblxuICBsZXQgcHVzaEFkamFjZW50ID0gZnVuY3Rpb24gKGdldEFyZ3MpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBlcm11dGF0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgbGV0IHBlcm0gPSBwZXJtdXRhdGlvbnNbaV07XG4gICAgICBsZXQgbmV4dEFyZ3MgPSBnZXRBcmdzLnNsaWNlKDApO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdldEFyZ3MubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgbmV4dEFyZ3Nbal0gKz0gcGVybVtqXTtcbiAgICAgIH1cblxuICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgIGN1cnJlbnRBcmdzOiBuZXh0QXJncyxcbiAgICAgICAgcHJldmlvdXNBcmdzOiBnZXRBcmdzXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgbGV0IGdldCA9IGZ1bmN0aW9uIChnZXRBcmdzKSB7XG4gICAgcmV0dXJuIGdldHRlci5hcHBseSh1bmRlZmluZWQsIGdldEFyZ3MpO1xuICB9O1xuXG4gIGxldCBzYWZlbHkgPSBmdW5jdGlvbiAoZiwgYXJncykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZi5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICB9O1xuXG4gIGxldCBub29wID0gZnVuY3Rpb24gKCkge307XG5cbiAgbGV0IGRlZmF1bHRFcXVhbHMgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBhID09PSBiO1xuICB9O1xuXG4gIGxldCBwcnVuZWRQZXJtdXRhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHBlcm11dGF0aW9ucyA9IHBlcm11dGUoc2VlZC5sZW5ndGgpO1xuXG4gICAgcmV0dXJuIHBlcm11dGF0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKHBlcm0pIHtcbiAgICAgIGxldCBjb3VudCA9IGNvdW50Tm9uWmVyb2VzKHBlcm0pO1xuXG4gICAgICByZXR1cm4gY291bnQgIT09IDAgJiYgKGNvdW50ID09PSAxIHx8IGRpYWdvbmFscyk7XG4gICAgfSk7XG4gIH07XG5cbiAgbGV0IHBlcm11dGUgPSBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gICAgbGV0IHBlcm1zID0gW107XG5cbiAgICBsZXQgcGVybXV0YXRpb24gPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGMsIDEwKSAtIDE7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLnBvdygzLCBsZW5ndGgpOyBpICs9IDEpIHtcbiAgICAgIGxldCBzdHJpbmcgPSBscGFkKGkudG9TdHJpbmcoMyksICcwJywgbGVuZ3RoKTtcblxuICAgICAgcGVybXMucHVzaChwZXJtdXRhdGlvbihzdHJpbmcpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGVybXM7XG4gIH07XG5cbiAgbGV0IGxwYWQgPSBmdW5jdGlvbiAoc3RyaW5nLCBjaGFyYWN0ZXIsIGxlbmd0aCkge1xuICAgIGxldCBhcnJheSA9IG5ldyBBcnJheShsZW5ndGggKyAxKTtcbiAgICBsZXQgcGFkID0gYXJyYXkuam9pbihjaGFyYWN0ZXIpO1xuXG4gICAgcmV0dXJuIChwYWQgKyBzdHJpbmcpLnNsaWNlKC1sZW5ndGgpO1xuICB9O1xuXG4gIGxldCBjb3VudE5vblplcm9lcyA9IGZ1bmN0aW9uIChhcnJheSkge1xuICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoYXJyYXlbaV0gIT09IDApIHtcbiAgICAgICAgY291bnQgKz0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY291bnQ7XG4gIH07XG5cbiAgbGV0IGJvdW5kYXJpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGFycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gYm91bmRzKSB7XG4gICAgICBpZiAoYm91bmRzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgYXJyYXkudW5zaGlmdChib3VuZHNba2V5XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5O1xuICB9O1xuXG4gIGluaXRpYWxpemUoKTtcbiAgcmV0dXJuIG1haW4oKTtcbn07XG4iLCJpbXBvcnQgeyBzdG9yZSB9IGZyb20gJ2Nvcm5lcnN0b25lLXRvb2xzJztcblxuaW1wb3J0IGdlbmVyYXRlQnJ1c2hNZXRhZGF0YSBmcm9tICcuL2dlbmVyYXRlQnJ1c2hNZXRhZGF0YS5qcyc7XG5cbmNvbnN0IGJydXNoTW9kdWxlID0gc3RvcmUubW9kdWxlcy5icnVzaDtcblxuZXhwb3J0IGZ1bmN0aW9uIG5ld1NlZ21lbnRJbnB1dChzZWdJbmRleCwgbWV0YWRhdGEpIHtcbiAgYnJ1c2hNZXRkYXRhSW5wdXQoc2VnSW5kZXgsIG1ldGFkYXRhLCBzZWdtZW50SW5wdXRDYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0U2VnbWVudElucHV0KHNlZ0luZGV4LCBtZXRhZGF0YSkge1xuICBicnVzaE1ldGRhdGFJbnB1dChzZWdJbmRleCwgbWV0YWRhdGEsIHNlZ21lbnRJbnB1dENhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld1NlZ21lbnQoZW5hYmxlZEVsZW1lbnQpIHtcbiAgaWYgKCFlbmFibGVkRWxlbWVudCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSBlbmFibGVkRWxlbWVudC5lbGVtZW50O1xuXG4gIGxldCBzZWdtZW50TWV0YWRhdGEgPSBicnVzaE1vZHVsZS5nZXR0ZXJzLm1ldGFkYXRhKGFjdGl2ZUVsZW1lbnQpO1xuXG4gIGlmICghQXJyYXkuaXNBcnJheShzZWdtZW50TWV0YWRhdGEpKSB7XG4gICAgY29uc3QgeyBsYWJlbG1hcDNEIH0gPSBicnVzaE1vZHVsZS5nZXR0ZXJzLmdldEFuZENhY2hlTGFiZWxtYXAyRChhY3RpdmVFbGVtZW50KTtcblxuICAgIHNlZ21lbnRNZXRhZGF0YSA9IGxhYmVsbWFwM0QubWV0YWRhdGE7XG4gIH1cblxuICBjb25zdCBjb2xvcm1hcCA9IGJydXNoTW9kdWxlLmdldHRlcnMuYWN0aXZlQ29ybmVyc3RvbmVDb2xvck1hcChhY3RpdmVFbGVtZW50KTtcblxuICBjb25zdCBudW1iZXJPZkNvbG9ycyA9IGNvbG9ybWFwLmdldE51bWJlck9mQ29sb3JzKCk7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1iZXJPZkNvbG9yczsgaSsrKSB7XG4gICAgaWYgKCFzZWdtZW50TWV0YWRhdGFbaV0pIHtcbiAgICAgIG5ld1NlZ21lbnRJbnB1dChpKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZWdtZW50SW5wdXRDYWxsYmFjayhkYXRhKSB7XG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgbGFiZWwsIGNhdGVnb3J5VUlELCB0eXBlVUlELCBtb2RpZmllclVJRCwgc2VnSW5kZXgsIGVsZW1lbnQgfSA9IGRhdGE7XG5cbiAgY29uc3QgbWV0YWRhdGEgPSBnZW5lcmF0ZUJydXNoTWV0YWRhdGEobGFiZWwsIGNhdGVnb3J5VUlELCB0eXBlVUlELCBtb2RpZmllclVJRCk7XG5cbiAgLy8gVE9ETyAtPiBzdXBwb3J0IGZvciBtdWx0aXBsZSBsYWJlbG1hcHMuXG4gIGJydXNoTW9kdWxlLnNldHRlcnMubWV0YWRhdGEoZWxlbWVudCwgMCwgc2VnSW5kZXgsIG1ldGFkYXRhKTtcbiAgYnJ1c2hNb2R1bGUuc2V0dGVycy5hY3RpdmVTZWdtZW50SW5kZXgoZWxlbWVudCwgc2VnSW5kZXgpO1xufVxuXG4vKipcbiAqIE9wZW5zIHRoZSBicnVzaE1ldGFkYXRhIGRpYWxvZy5cbiAqXG4gKi9cblxuLy8gVE9ETyAtPiBOZWVkIHRvIG1ha2UgdGhpcyBpbnRvIGEgcmVhY3QtbW9kYWw/XG5mdW5jdGlvbiBicnVzaE1ldGRhdGFJbnB1dChzZWdJbmRleCwgbWV0YWRhdGEsIGNhbGxiYWNrKSB7XG4gIGNvbnNvbGUubG9nKCdUT0RPOiBSZW1ha2UgYnJ1c2hNZXRhZGF0YSBpbnB1dCBtZW51IScpO1xuICAvKlxuICBjb25zdCBicnVzaE1ldGFkYXRhRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JydXNoTWV0YWRhdGFEaWFsb2cnKTtcbiAgY29uc3QgZGlhbG9nRGF0YSA9IEJsYXplLmdldERhdGEoYnJ1c2hNZXRhZGF0YURpYWxvZyk7XG5cbiAgZGlhbG9nRGF0YS5icnVzaE1ldGFkYXRhRGlhbG9nU2VnSW5kZXguc2V0KHNlZ0luZGV4KTtcbiAgZGlhbG9nRGF0YS5icnVzaE1ldGFkYXRhRGlhbG9nTWV0YWRhdGEuc2V0KG1ldGFkYXRhKTtcbiAgZGlhbG9nRGF0YS5icnVzaE1ldGFkYXRhRGlhbG9nQ2FsbGJhY2suc2V0KGNhbGxiYWNrKTtcblxuICBicnVzaE1ldGFkYXRhRGlhbG9nLnNob3dNb2RhbCgpO1xuICAqL1xufVxuIiwiaW1wb3J0IHsgc3RvcmUgfSBmcm9tICdjb3JuZXJzdG9uZS10b29scyc7XG5cbmNvbnN0IG1vZHVsZXMgPSBzdG9yZS5tb2R1bGVzO1xuXG5leHBvcnQgY2xhc3MgUG9seWdvbiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHBvaW50cyxcbiAgICBzb3BJbnN0YW5jZVVpZCxcbiAgICBzZXJpZXNJbnN0YW5jZVVpZCxcbiAgICBzdHJ1Y3R1cmVTZXRVaWQsXG4gICAgUk9JQ29udG91clVpZCxcbiAgICBwb2x5Z29uVWlkLFxuICAgIGZyYW1lTnVtYmVyLFxuICAgIGludGVycG9sYXRlZFxuICApIHtcbiAgICB0aGlzLl9wb2x5UG9pbnRzID0gdGhpcy5fZGVlcENvcHlQb2ludHMocG9pbnRzKTtcbiAgICB0aGlzLl9zb3BJbnN0YW5jZVVpZCA9IHNvcEluc3RhbmNlVWlkO1xuICAgIHRoaXMuX3Nlcmllc0luc3RhbmNlVWlkID0gc2VyaWVzSW5zdGFuY2VVaWQ7XG4gICAgdGhpcy5fc3RydWN0dXJlU2V0VWlkID0gc3RydWN0dXJlU2V0VWlkO1xuICAgIHRoaXMuX1JPSUNvbnRvdXJVaWQgPSBST0lDb250b3VyVWlkO1xuICAgIHRoaXMuX3BvbHlnb25VaWQgPSBwb2x5Z29uVWlkO1xuICAgIHRoaXMuX2ZyYW1lTnVtYmVyID0gZnJhbWVOdW1iZXI7XG4gICAgdGhpcy5faW50ZXJwb2xhdGVkID0gaW50ZXJwb2xhdGVkO1xuICB9XG5cbiAgX2RlZXBDb3B5UG9pbnRzKHBvaW50cykge1xuICAgIC8vIENyZWF0ZXMgYSBkZWVwIGNvcHkgb2YgdGhlIHBvaW50cyBhcnJheVxuICAgIGNvbnN0IHBvbHlQb2ludHMgPSBbXTtcbiAgICBjb25zdCBpc1ogPSBwb2ludHNbMF0ueiAhPT0gdW5kZWZpbmVkO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHBvbHlQb2ludHMucHVzaCh7XG4gICAgICAgIHg6IHBvaW50c1tpXS54LFxuICAgICAgICB5OiBwb2ludHNbaV0ueVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChpc1opIHtcbiAgICAgICAgcG9seVBvaW50c1tpXS56ID0gcG9pbnRzW2ldLno7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvbHlQb2ludHM7XG4gIH1cblxuICBnZXRGcmVlaGFuZFRvb2xEYXRhKGltcG9ydFR5cGUpIHtcbiAgICBjb25zdCBzZXJpZXNJbnN0YW5jZVVpZCA9IHRoaXMuX3Nlcmllc0luc3RhbmNlVWlkO1xuICAgIGNvbnN0IHN0cnVjdHVyZVNldFVpZCA9IHRoaXMuX3N0cnVjdHVyZVNldFVpZDtcbiAgICBjb25zdCBST0lDb250b3VyVWlkID0gdGhpcy5fUk9JQ29udG91clVpZDtcblxuICAgIGNvbnN0IGZyZWVoYW5kM0RTdG9yZSA9IG1vZHVsZXMuZnJlZWhhbmQzRDtcblxuICAgIGNvbnN0IHJlZmVyZW5jZWRST0lDb250b3VyID0gZnJlZWhhbmQzRFN0b3JlLmdldHRlcnMuUk9JQ29udG91cihzZXJpZXNJbnN0YW5jZVVpZCwgc3RydWN0dXJlU2V0VWlkLCBST0lDb250b3VyVWlkKTtcbiAgICBjb25zdCByZWZlcmVuY2VkU3RydWN0dXJlU2V0ID0gZnJlZWhhbmQzRFN0b3JlLmdldHRlcnMuc3RydWN0dXJlU2V0KHNlcmllc0luc3RhbmNlVWlkLCBzdHJ1Y3R1cmVTZXRVaWQpO1xuXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHVpZDogdGhpcy5fcG9seWdvblVpZCxcbiAgICAgIHNlcmllc0luc3RhbmNlVWlkLFxuICAgICAgc3RydWN0dXJlU2V0VWlkLFxuICAgICAgUk9JQ29udG91clVpZCxcbiAgICAgIHJlZmVyZW5jZWRST0lDb250b3VyLFxuICAgICAgcmVmZXJlbmNlZFN0cnVjdHVyZVNldCxcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgaW52YWxpZGF0ZWQ6IHRydWUsXG4gICAgICBoYW5kbGVzOiB7XG4gICAgICAgIHBvaW50czogW11cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuX3NvcEluc3RhbmNlVWlkKSB7XG4gICAgICBkYXRhLnNvcEluc3RhbmNlVUlEID0gdGhpcy5fc29wSW5zdGFuY2VVaWQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2ludGVycG9sYXRlZCkge1xuICAgICAgZGF0YS5pbnRlcnBvbGF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuX2dlbmVyYXRlUG9pbnRzKGRhdGEuaGFuZGxlcy5wb2ludHMpO1xuXG4gICAgZGF0YS5oYW5kbGVzLnRleHRCb3ggPSB7XG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgaGFzTW92ZWQ6IGZhbHNlLFxuICAgICAgbW92ZXNJbmRlcGVuZGVudGx5OiBmYWxzZSxcbiAgICAgIGRyYXduSW5kZXBlbmRlbnRseTogdHJ1ZSxcbiAgICAgIGFsbG93ZWRPdXRzaWRlSW1hZ2U6IHRydWUsXG4gICAgICBoYXNCb3VuZGluZ0JveDogdHJ1ZVxuICAgIH07XG5cbiAgICBkYXRhLnBvbHlCb3VuZGluZ0JveCA9IHt9O1xuXG4gICAgZGF0YS50b0JlU2NhbGVkID0gaW1wb3J0VHlwZTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgX2dlbmVyYXRlUG9pbnRzKHBvaW50cykge1xuICAgIC8vIENvbnN0cnVjdCBkYXRhLmhhbmRsZXMucG9pbnRzIGFycmF5XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wb2x5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwb2ludHMucHVzaCh0aGlzLl9kZWVwQ29weU9uZVBvaW50KGkpKTtcbiAgICB9XG5cbiAgICAvLyBHZW5lcmF0ZSBsaW5lcyB0byBiZSBkcmF3blxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA9PT0gcG9pbnRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgcG9pbnRzW2ldLmxpbmVzLnB1c2gocG9pbnRzWzBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvaW50c1tpXS5saW5lcy5wdXNoKHBvaW50c1tpICsgMV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9kZWVwQ29weU9uZVBvaW50KGkpIHtcbiAgICBsZXQgcG9pbnQgPSB7XG4gICAgICB4OiB0aGlzLl9wb2x5UG9pbnRzW2ldLngsXG4gICAgICB5OiB0aGlzLl9wb2x5UG9pbnRzW2ldLnksXG4gICAgICBsaW5lczogW11cbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuX3BvbHlQb2ludHNbaV0ueiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwb2ludC56ID0gdGhpcy5fcG9seVBvaW50c1tpXS56O1xuICAgIH1cblxuICAgIHJldHVybiBwb2ludDtcbiAgfVxuXG4gIGdldCBwb2x5UG9pbnRzKCkge1xuICAgIHJldHVybiB0aGlzLl9wb2x5UG9pbnRzO1xuICB9XG4gIGdldCBzb3BJbnN0YW5jZVVpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc29wSW5zdGFuY2VVaWQ7XG4gIH1cblxuICBnZXQgdWlkKCkge1xuICAgIHJldHVybiB0aGlzLl9wb2x5Z29uVWlkO1xuICB9XG5cbiAgZ2V0IGZyYW1lTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLl9mcmFtZU51bWJlcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2xvYmFsSW1hZ2VJZFNwZWNpZmljVG9vbFN0YXRlTWFuYWdlciwgZ2V0VG9vbFN0YXRlIH0gZnJvbSAnY29ybmVyc3RvbmUtdG9vbHMnO1xuXG5jb25zdCBnbG9iYWxUb29sU3RhdGVNYW5hZ2VyID0gZ2xvYmFsSW1hZ2VJZFNwZWNpZmljVG9vbFN0YXRlTWFuYWdlcjtcblxuLyoqXG4gKiBnZW5lcmF0ZUludGVycG9sYXRpb25MaXN0IC0gR2VuZXJhdGUgdGhlIGxpc3Qgb2YgY29udG91cnMgdG8gaW50ZXJwb2xhdGUsXG4gKiBpbmNsdWRpbmcgd2hldGhlciB0aGV5IGFyZSBuZXcgY29udG91cnMsIG9yIGludGVycG9sYXRlZCBjb250b3VycyB0aGF0IG5lZWRcbiAqIHRvIGJlIHVwZGF0ZWQuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSB0b29sRGF0YSBUaGUgdG9vbCBkYXRhIG9mIHRoZSBmcmVlaGFuZDNEIGNvbnRvdXIuXG4gKiBAcmV0dXJuIHtvYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBST0lDb250b3VyRGF0YSBhbmQgdGhlXG4gKiBpbnRlcnBvbGF0aW9uTGlzdC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHRvb2xEYXRhLCBlbGVtZW50KSB7XG4gIGNvbnN0IFJPSUNvbnRvdXJVaWQgPSB0b29sRGF0YS5ST0lDb250b3VyVWlkO1xuICBjb25zdCBpbWFnZUlkcyA9IF9nZXRJbWFnZUlkc09mQWN0aXZlU2VyaWVzKGVsZW1lbnQpO1xuICBjb25zdCBST0lDb250b3VyRGF0YSA9IF9nZXRST0lDb250b3VyRGF0YShpbWFnZUlkcywgUk9JQ29udG91clVpZCk7XG4gIGNvbnN0IGV4dGVudCA9IF9nZXRFeHRlbnRPZlJlZ2lvbihST0lDb250b3VyRGF0YSk7XG4gIGNvbnN0IHNsaWNlRWRpdGVkID0gX2dldFNsaWNlUG9zaXRpb25PZlRvb2xEYXRhKFJPSUNvbnRvdXJEYXRhLCB0b29sRGF0YS51aWQpO1xuXG4gIGNvbnN0IGludGVycG9sYXRpb25MaXN0ID0gW107XG5cbiAgLy8gQ2hlY2sgaWYgY29udG91cnMgYmV0d2VlbiB0aGUgZXh0ZW50IGNhbiBiZSBpbnRlcnBvbGF0ZWQuXG4gIGZvciAobGV0IGkgPSBleHRlbnRbMF0gKyAxOyBpIDw9IGV4dGVudFsxXSAtIDE7IGkrKykge1xuICAgIGlmIChfc2xpY2VOZWVkc0ludGVycG9sYXRpbmcoUk9JQ29udG91ckRhdGEsIGkpKSB7XG4gICAgICBjb25zdCBjb250b3VyUGFpciA9IF9nZXRCb3VuZGluZ1BhaXIoaSwgZXh0ZW50LCBST0lDb250b3VyRGF0YSk7XG5cbiAgICAgIGlmIChjb250b3VyUGFpciAmJiAoY29udG91clBhaXJbMF0gPT09IHNsaWNlRWRpdGVkIHx8IGNvbnRvdXJQYWlyWzFdID09PSBzbGljZUVkaXRlZCkpIHtcbiAgICAgICAgX2FwcGVuZGludGVycG9sYXRpb25MaXN0KGNvbnRvdXJQYWlyLCBpbnRlcnBvbGF0aW9uTGlzdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBST0lDb250b3VyRGF0YSxcbiAgICBpbnRlcnBvbGF0aW9uTGlzdFxuICB9O1xufVxuXG4vKipcbiAqIF9nZXRTbGljZVBvc2l0aW9uT2ZUb29sRGF0YSAtIEZpbmRzIHRoZSBzbGljZSB0aGF0IHdhcyBlZGl0ZWQuXG4gKlxuICogQHBhcmFtICB7dHlwZX0gUk9JQ29udG91ckRhdGEgZGVzY3JpcHRpb25cbiAqIEBwYXJhbSAge3R5cGV9IHBvbHlnb25VaWQgICAgIGRlc2NyaXB0aW9uXG4gKiBAcmV0dXJuIHt0eXBlfSAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxuICovXG5mdW5jdGlvbiBfZ2V0U2xpY2VQb3NpdGlvbk9mVG9vbERhdGEoUk9JQ29udG91ckRhdGEsIHBvbHlnb25VaWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBST0lDb250b3VyRGF0YS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChST0lDb250b3VyRGF0YVtpXS5jb250b3Vycykge1xuICAgICAgY29uc3QgY29udG91cnMgPSBST0lDb250b3VyRGF0YVtpXS5jb250b3VycztcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb250b3Vycy5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoY29udG91cnNbal0udWlkID09PSBwb2x5Z29uVWlkKSB7XG4gICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm47XG59XG5cbi8qKlxuICogX2dldEltYWdlSWRzT2ZBY3RpdmVTZXJpZXMgLSByZXR1cm5zIGFuIGFycmF5IG9mIHRoZSBpbWFnZUlkcyBmb3IgdGhlIGN1cnJlbnRcbiAqIGFjdGl2ZSBzZXJpZXMuXG4gKlxuICogQHJldHVybiB7U3RyaW5nW119IEFuIGFycmF5IG9mIGltYWdlSWRzLlxuICovXG5cbmZ1bmN0aW9uIF9nZXRJbWFnZUlkc09mQWN0aXZlU2VyaWVzKGVsZW1lbnQpIHtcbiAgY29uc3Qgc3RhY2tUb29sU3RhdGUgPSBnZXRUb29sU3RhdGUoZWxlbWVudCwgJ3N0YWNrJyk7XG5cbiAgcmV0dXJuIHN0YWNrVG9vbFN0YXRlLmRhdGFbMF0uaW1hZ2VJZHM7XG59XG5cbi8qKlxuICogX2dldFJPSUNvbnRvdXJEYXRhIC0gR2VuZXJhdGVzIGEgbGlzdCBvZiB0aGUgc2xpY2UgbG9jYXRpb25zIG9mIHRoZSAyRFxuICogcG9seWdvbnMgdGhhdCBtYWtlIHVwIHRoZSBST0lDb250b3VyLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ1tdfSBpbWFnZUlkcyAgQW4gYXJyYXkgb2YgSW1hZ2UgSWRzLlxuICogQHBhcmFtICB7dHlwZX0gUk9JQ29udG91clVpZCBUaGUgVUlEIG9mIHRoZSBST0lDb250b3VyLlxuICogQHJldHVybiB7b2JqZWN0W119ICAgICAgICAgICBUaGUgbGlzdCBvZiBjb250b3VyIGxvY2F0aW9ucyBpbiB0aGUgc3RhY2suXG4gKi9cblxuZnVuY3Rpb24gX2dldFJPSUNvbnRvdXJEYXRhKGltYWdlSWRzLCBST0lDb250b3VyVWlkKSB7XG4gIGNvbnN0IFJPSUNvbnRvdXJEYXRhID0gW107XG4gIGNvbnN0IHRvb2xTdGF0ZU1hbmFnZXIgPSBnbG9iYWxUb29sU3RhdGVNYW5hZ2VyLnNhdmVUb29sU3RhdGUoKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlSWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgaW1hZ2VJZCA9IGltYWdlSWRzW2ldO1xuICAgIGNvbnN0IGltYWdlVG9vbFN0YXRlID0gdG9vbFN0YXRlTWFuYWdlcltpbWFnZUlkXTtcblxuICAgIGlmICghaW1hZ2VUb29sU3RhdGUgfHwgIWltYWdlVG9vbFN0YXRlLmZyZWVoYW5kUm9pKSB7XG4gICAgICBST0lDb250b3VyRGF0YS5wdXNoKHtcbiAgICAgICAgaW1hZ2VJZFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbnRvdXJzID0gaW1hZ2VUb29sU3RhdGUuZnJlZWhhbmRSb2kuZGF0YS5maWx0ZXIoY29udG91ciA9PiB7XG4gICAgICAgIHJldHVybiBjb250b3VyLlJPSUNvbnRvdXJVaWQgPT09IFJPSUNvbnRvdXJVaWQ7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgY29udG91cnNPblNsaWNlID0ge1xuICAgICAgICBpbWFnZUlkXG4gICAgICB9O1xuXG4gICAgICBpZiAoY29udG91cnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnRvdXJzT25TbGljZS5jb250b3VycyA9IGNvbnRvdXJzO1xuICAgICAgfVxuXG4gICAgICBST0lDb250b3VyRGF0YS5wdXNoKGNvbnRvdXJzT25TbGljZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFJPSUNvbnRvdXJEYXRhO1xufVxuXG4vKipcbiAqIF9nZXRFeHRlbnRPZlJlZ2lvbiAtIFJldHVybnMgYSAyIGVsZW1lbnQgYXJyYXkgd2l0aCB0aGUgc2xpY2UgbG9jYXRpb25zIG9mXG4gKiB0b3AgYW5kIGJvdHRvbSBwb2x5Z29uIG9mIHRoZSBST0lDb250b3VyLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gUk9JQ29udG91ckRhdGEgIERhdGEgb24gdGhlIHNsaWNlIGxvY2F0aW9uIG9mIGNvbnRvdXJzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIFJPSUNvbnRvdXIuXG4gKiBAcmV0dXJuIHtOdW1iZXJbXX0gICAgICAgICAgICAgICBUaGUgc2xpY2UgbG9jYXRpb25zIG9mIHRoZSB0b3AgYW5kIGJvdHRvbVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9seWdvbiBvZiB0aGUgUk9JQ29udG91ci5cbiAqL1xuXG5mdW5jdGlvbiBfZ2V0RXh0ZW50T2ZSZWdpb24oUk9JQ29udG91ckRhdGEpIHtcbiAgY29uc3QgZXh0ZW50ID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBST0lDb250b3VyRGF0YS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChST0lDb250b3VyRGF0YVtpXS5jb250b3Vycykge1xuICAgICAgZXh0ZW50LnB1c2goaSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpID0gUk9JQ29udG91ckRhdGEubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAoUk9JQ29udG91ckRhdGFbaV0uY29udG91cnMpIHtcbiAgICAgIGV4dGVudC5wdXNoKGkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGV4dGVudDtcbn1cblxuLyoqXG4gKiBfc2xpY2VOZWVkc0ludGVycG9sYXRpbmcgLSBDaGVjayB3aGV0aGVyIHRoZXJlIGFyZSBubyBjb250b3VycyBvbiB0aGlzXG4gKiBzbGljZSwgb3Igb25lIHdoaWNoIGlzIGFuIGludGVycG9sYXRlZCBjb250b3VyLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gUk9JQ29udG91ckRhdGEgIERhdGEgb24gdGhlIHNsaWNlIGxvY2F0aW9uIG9mIGNvbnRvdXJzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIFJPSUNvbnRvdXIuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHNsaWNlSW5kZXggICAgICBUaGUgc2xpY2UgaW5kZXguXG4gKiBAcmV0dXJuIHtib29sZWFufSAgICAgICAgICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgc2xpY2UgbmVlZHMgaW50ZXJwb2xhdGluZy5cbiAqL1xuZnVuY3Rpb24gX3NsaWNlTmVlZHNJbnRlcnBvbGF0aW5nKFJPSUNvbnRvdXJEYXRhLCBzbGljZUluZGV4KSB7XG4gIHJldHVybiAoXG4gICAgIVJPSUNvbnRvdXJEYXRhW3NsaWNlSW5kZXhdLmNvbnRvdXJzIHx8XG4gICAgKFJPSUNvbnRvdXJEYXRhW3NsaWNlSW5kZXhdLmNvbnRvdXJzLmxlbmd0aCA9PT0gMSAmJiBST0lDb250b3VyRGF0YVtzbGljZUluZGV4XS5jb250b3Vyc1swXS5pbnRlcnBvbGF0ZWQpXG4gICk7XG59XG5cbi8qKlxuICogX2FwcGVuZGludGVycG9sYXRpb25MaXN0IC0gSWYgdGhlIGNvbnRvdXIgb24gc2xpY2UgaSBjYW4gYmUgdXBkYXRlZCwgYWRkIGl0IHRvIHRoZVxuICogaW50ZXJwb2xhdGlvbkxpc3QuXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSBzbGljZUluZGV4ICAgICAgVGhlIHNsaWNlIGluZGV4LlxuICogQHBhcmFtICB7TnVtYmVyW119IGV4dGVudCAgICAgICAgVGhlIGV4dGVudCBvZiBzbGljZSBvY2N1cGFuY3kgb2YgdGhlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBST0lDb250b3VyLlxuICogQHBhcmFtICB7b2JqZWN0W119IFJPSUNvbnRvdXJEYXRhICBEYXRhIGZvciB0aGUgc2xpY2UgbG9jYXRpb24gb2YgY29udG91cnNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgUk9JQ29udG91ci5cbiAqIEBwYXJhbSAge29iamVjdFtdfSBpbnRlcnBvbGF0aW9uTGlzdCBUaGUgbGlzdCBvZiBjb250b3VycyB0byBiZSBpbnRlcnBvbGF0ZWQuXG4gKiBAcmV0dXJuIHtudWxsfVxuICovXG5mdW5jdGlvbiBfYXBwZW5kaW50ZXJwb2xhdGlvbkxpc3QoY29udG91clBhaXIsIGludGVycG9sYXRpb25MaXN0KSB7XG4gIGlmICghaW50ZXJwb2xhdGlvbkxpc3RbY29udG91clBhaXJbMF1dKSB7XG4gICAgaW50ZXJwb2xhdGlvbkxpc3RbY29udG91clBhaXJbMF1dID0ge1xuICAgICAgcGFpcjogY29udG91clBhaXIsXG4gICAgICBsaXN0OiBbXVxuICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBfZ2V0Qm91bmRpbmdQYWlyIC0gR2l2ZW4gdGhlIHNsaWNlIGluZGV4IGFuZCBleHRlbnQgb2YgdGhlIFJPSUNvbnRvdXIsXG4gKiBnZXQgdGhlIHBhaXIgb2YgcG9seWdvbnMgdG8gdXNlIGZvciBpbnRlcnBvbGF0aW9uIG9mIHRoZSBzbGljZS4gUmV0dXJuc1xuICogdW5kZWZpbmVkIGlmIHRoZXJlIGlzIGFuIGFtYmlndWl0eSBhbmQgaW50ZXJwb2xhdGlvbiBjYW4ndCB0YWtlIHBsYWNlLlxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gc2xpY2VJbmRleCAgIFRoZSBzbGljZSBpbmRleC5cbiAqIEBwYXJhbSAge051bWJlcltdfSBleHRlbnQgICAgICAgIFRoZSBleHRlbnQgb2Ygc2xpY2Ugb2NjdXBhbmN5IG9mIHRoZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUk9JQ29udG91ci5cbiAqIEBwYXJhbSAge29iamVjdFtdfSBST0lDb250b3VyRGF0YSAgRGF0YSBmb3IgdGhlIHNsaWNlIGxvY2F0aW9uIG9mIGNvbnRvdXJzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIFJPSUNvbnRvdXIuXG4gKiBAcmV0dXJuIHtOdW1iZXJbXSB8fCB1bmRlZmluZWR9ICBUaGUgcGFpciBvZiBzbGljZSBpbmRpY2llcywgb3IgdW5kZWZpbmVkIGlmXG4gKiB0aGUgY29udG91cnMgdG8gdXNlIGZvciBpbnRlcnBvbGF0aW9uIGlzIGFtYmlndW91cy5cbiAqL1xuXG5mdW5jdGlvbiBfZ2V0Qm91bmRpbmdQYWlyKHNsaWNlSW5kZXgsIGV4dGVudCwgUk9JQ29udG91ckRhdGEpIHtcbiAgbGV0IGNvbnRvdXJQYWlyID0gW107XG4gIGxldCBjYW5JbnRlcnBvbGF0ZSA9IHRydWU7XG5cbiAgLy8gQ2hlY2sgZm9yIG5lYXJlc3QgbG93ZXN0IHNsaWNlSW5kZXggY29udGFpbmluZyBjb250b3Vycy5cbiAgZm9yIChsZXQgaSA9IHNsaWNlSW5kZXggLSAxOyBpID49IGV4dGVudFswXTsgaS0tKSB7XG4gICAgaWYgKFJPSUNvbnRvdXJEYXRhW2ldLmNvbnRvdXJzKSB7XG4gICAgICBjb25zdCBjb250b3VycyA9IFJPSUNvbnRvdXJEYXRhW2ldLmNvbnRvdXJzO1xuXG4gICAgICBpZiAoY29udG91cnNbMF0uaW50ZXJwb2xhdGVkKSB7XG4gICAgICAgIC8vIFRoaXMgY29udG91ciBpcyBpbnRlcnBvbGF0ZWQuIFdlIG5lZWQgdG9cbiAgICAgICAgLy8gRmluZCBhIHNvbGlkIGNvbnRvdXIgdG8gaW50ZXJwb2xhdGUgZnJvbS5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb250b3Vycy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNhbkludGVycG9sYXRlID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIEZvdW5kIHNpbmdsZSwgbm9uIGludGVycG9sYXRlZCBjb250b3VyIHRvIGludGVycG9sYXRlIGZyb20uXG4gICAgICBjb250b3VyUGFpci5wdXNoKGkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjYW5JbnRlcnBvbGF0ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIENoZWNrIGZvciBuZWFyZXN0IHVwcGVyIHNsaWNlSW5kZXggY29udGFpbmluZyBjb250b3Vycy5cbiAgZm9yIChsZXQgaSA9IHNsaWNlSW5kZXggKyAxOyBpIDw9IGV4dGVudFsxXTsgaSsrKSB7XG4gICAgaWYgKFJPSUNvbnRvdXJEYXRhW2ldLmNvbnRvdXJzKSB7XG4gICAgICBjb25zdCBjb250b3VycyA9IFJPSUNvbnRvdXJEYXRhW2ldLmNvbnRvdXJzO1xuXG4gICAgICBpZiAoY29udG91cnNbMF0uaW50ZXJwb2xhdGVkKSB7XG4gICAgICAgIC8vIFRoaXMgY29udG91ciBpcyBpbnRlcnBvbGF0ZWQuIFdlIG5lZWQgdG9cbiAgICAgICAgLy8gRmluZCBhIHNvbGlkIGNvbnRvdXIgdG8gaW50ZXJwb2xhdGUgZnJvbS5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb250b3Vycy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNhbkludGVycG9sYXRlID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGNvbnRvdXJQYWlyLnB1c2goaSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoIWNhbkludGVycG9sYXRlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRvdXJQYWlyO1xufVxuIiwiaW1wb3J0IHsgZ2xvYmFsSW1hZ2VJZFNwZWNpZmljVG9vbFN0YXRlTWFuYWdlciwgc3RvcmUgfSBmcm9tICdjb3JuZXJzdG9uZS10b29scyc7XG5cbmltcG9ydCB7IFBvbHlnb24gfSBmcm9tICcuLi9jbGFzc2VzL1BvbHlnb24uanMnO1xuaW1wb3J0IGdlbmVyYXRlVUlEIGZyb20gJy4uL2dlbmVyYXRlVUlELmpzJztcbmltcG9ydCBnZW5lcmF0ZUludGVycG9sYXRpb25EYXRhIGZyb20gJy4vZ2VuZXJhdGVJbnRlcnBvbGF0aW9uRGF0YS5qcyc7XG5cbmNvbnN0IGdsb2JhbFRvb2xTdGF0ZU1hbmFnZXIgPSBnbG9iYWxJbWFnZUlkU3BlY2lmaWNUb29sU3RhdGVNYW5hZ2VyO1xuY29uc3QgZFAgPSAwLjI7IC8vIEFpbSBmb3IgPCAwLjJtbSBiZXR3ZWVuIGludGVycG9sYXRlZCBub2RlcyB3aGVuIHN1cGVyLXNhbXBsaW5nLlxuY29uc3QgbW9kdWxlcyA9IHN0b3JlLm1vZHVsZXM7XG5cbi8qKlxuICogaW50ZXJwb2xhdGUgLSBJbnRlcnBvbGF0ZSBtaXNzaW5nIGNvbnRvdXJzIGluIHRoZSBST0lDb250b3VyLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gdG9vbERhdGEgVGhlIHRvb2wgZGF0YSBvZiB0aGUgZnJlZWhhbmQzRCBjb250b3VyLlxuICogQHJldHVybiB7bnVsbH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHRvb2xEYXRhLCBlbGVtZW50KSB7XG4gIGNvbnN0IHsgUk9JQ29udG91ckRhdGEsIGludGVycG9sYXRpb25MaXN0IH0gPSBnZW5lcmF0ZUludGVycG9sYXRpb25EYXRhKHRvb2xEYXRhLCBlbGVtZW50KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGludGVycG9sYXRpb25MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGludGVycG9sYXRpb25MaXN0W2ldKSB7XG4gICAgICBfbGluZWFybHlJbnRlcnBvbGF0ZUJldHdlZW4oaW50ZXJwb2xhdGlvbkxpc3RbaV0ubGlzdCwgaW50ZXJwb2xhdGlvbkxpc3RbaV0ucGFpciwgUk9JQ29udG91ckRhdGEpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIF9saW5lYXJseUludGVycG9sYXRlQmV0d2VlbiAtIExpbmVhcmx5IGludGVycG9sYXRlIGFsbCB0aGUgc2xpY2VzIGluIHRoZVxuICogaW5kaWNpZXMgYXJyYXkgYmV0d2VlbiB0aGUgY29udG91clBhaXIuXG4gKlxuICogQHBhcmFtICB7TnVtYmVyW119IGluZGljaWVzICAgICBBbiBhcnJheSBvZiBzbGljZSBpbmRpY2llcyB0byBpbnRlcnBvbGF0ZS5cbiAqIEBwYXJhbSAge051bWJlcltdfSBjb250b3VyUGFpciAgVGhlIHBhaXIgb2YgY29udG91cnMgdG8gaW50ZXJwb2xhdGUgYmV0d2Vlbi5cbiAqIEBwYXJhbSAge29iamVjdFtdfSBST0lDb250b3VyRGF0YSAgRGF0YSBmb3IgdGhlIHNsaWNlIGxvY2F0aW9uIG9mIGNvbnRvdXJzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgUk9JQ29udG91ci5cbiAqIEByZXR1cm4ge251bGx9XG4gKi9cblxuZnVuY3Rpb24gX2xpbmVhcmx5SW50ZXJwb2xhdGVCZXR3ZWVuKGluZGljaWVzLCBjb250b3VyUGFpciwgUk9JQ29udG91ckRhdGEpIHtcbiAgY29uc3QgYzEgPSBfZ2VuZXJhdGVDbG9zZWRDb250b3VyKFJPSUNvbnRvdXJEYXRhW2NvbnRvdXJQYWlyWzBdXS5jb250b3Vyc1swXS5oYW5kbGVzLnBvaW50cyk7XG4gIGNvbnN0IGMyID0gX2dlbmVyYXRlQ2xvc2VkQ29udG91cihST0lDb250b3VyRGF0YVtjb250b3VyUGFpclsxXV0uY29udG91cnNbMF0uaGFuZGxlcy5wb2ludHMpO1xuXG4gIGNvbnN0IHsgYzFJbnRlcnAsIGMySW50ZXJwIH0gPSBfZ2VuZXJhdGVJbnRlcnBvbGF0aW9uQ29udG91clBhaXIoYzEsIGMyKTtcblxuICAvLyBVc2luZyB0aGUgbmV3bHkgY29uc3RydWN0ZWQgY29udG91cnMsIGludGVycG9sYXRlIGVhY2ggUk9JLlxuICBpbmRpY2llcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgIF9saW5lYXJseUludGVycG9sYXRlQ29udG91cihjMUludGVycCwgYzJJbnRlcnAsIGluZGV4LCBjb250b3VyUGFpciwgUk9JQ29udG91ckRhdGEsIGMxLngubGVuZ3RoID4gYzIueC5sZW5ndGgpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBfbGluZWFybHlJbnRlcnBvbGF0ZUNvbnRvdXIgLSBJbnNlcnRzIGEgbGluZWFybHkgaW50ZXJwb2xhdGVkIGNvbnRvdXIgYXRcbiAqIHNwZWNpZmllZCBzbGljZSBpbmRleC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGMxSW50ZXJwICAgICAgIFRoZSBmaXJzdCByZWZlcmVuY2UgY29udG91ci5cbiAqIEBwYXJhbSAge29iamVjdH0gYzJJbnRlcnAgICAgICAgVGhlIHNlY29uZCByZWZlcmVuY2UgY29udG91ci5cbiAqIEBwYXJhbSAge051bWJlcn0gc2xpY2VJbmRleCAgICAgICBUaGUgc2xpY2UgaW5kZXggdG8gaW50ZXJwb2xhdGUuXG4gKiBAcGFyYW0gIHtOdW1iZXJ7fX0gY29udG91clBhaXIgICAgVGhlIHNsaWNlIGluZGljaWVzIG9mIHRoZSByZWZlcmVuY2UgY29udG91cnMuXG4gKiBAcGFyYW0gIHtvYmplY3RbXX0gUk9JQ29udG91ckRhdGEgIERhdGEgZm9yIHRoZSBzbGljZSBsb2NhdGlvbiBvZiBjb250b3Vyc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBST0lDb250b3VyLlxuICogQHBhcmFtICB7Ym9vbGVhbn0gYzFIYXNNb3JlTm9kZXMgVHJ1ZSBpZiBjMSBoYXMgbW9yZSBub2RlcyB0aGFuIGMyLlxuICogQHJldHVybiB7bnVsbH1cbiAqL1xuZnVuY3Rpb24gX2xpbmVhcmx5SW50ZXJwb2xhdGVDb250b3VyKGMxSW50ZXJwLCBjMkludGVycCwgc2xpY2VJbmRleCwgY29udG91clBhaXIsIFJPSUNvbnRvdXJEYXRhLCBjMUhhc01vcmVOb2Rlcykge1xuICBjb25zdCB6SW50ZXJwID0gKHNsaWNlSW5kZXggLSBjb250b3VyUGFpclswXSkgLyAoY29udG91clBhaXJbMV0gLSBjb250b3VyUGFpclswXSk7XG4gIGNvbnN0IGludGVycG9sYXRlZDJEQ29udG91ciA9IF9nZW5lcmF0ZUludGVycG9sYXRlZE9wZW5Db250b3VyKGMxSW50ZXJwLCBjMkludGVycCwgekludGVycCwgYzFIYXNNb3JlTm9kZXMpO1xuXG4gIGNvbnN0IGMxTWV0YWRhdGEgPSBST0lDb250b3VyRGF0YVtjb250b3VyUGFpclswXV0uY29udG91cnNbMF07XG5cbiAgaWYgKFJPSUNvbnRvdXJEYXRhW3NsaWNlSW5kZXhdLmNvbnRvdXJzKSB7XG4gICAgX2VkaXRJbnRlcnBvbGF0ZWRDb250b3VyKGludGVycG9sYXRlZDJEQ29udG91ciwgUk9JQ29udG91ckRhdGFbc2xpY2VJbmRleF0uaW1hZ2VJZCwgYzFNZXRhZGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgX2FkZEludGVycG9sYXRlZENvbnRvdXIoaW50ZXJwb2xhdGVkMkRDb250b3VyLCBST0lDb250b3VyRGF0YVtzbGljZUluZGV4XS5pbWFnZUlkLCBjMU1ldGFkYXRhKTtcbiAgfVxufVxuXG4vKipcbiAqIF9nZW5lcmF0ZUludGVycG9sYXRpb25Db250b3VyUGFpciAtIGdlbmVyYXRlcyB0d28gYWxpZ25lZCBjb250b3VycyB3aXRoIGFuXG4gKiBlcXVhbCBudW1iZXIgb2Ygbm9kZXMgZnJvbSB3aGljaCBhbiBpbnRlcm1lZGlhdGUgY29udG91ciBtYXkgYmUgaW50ZXJwb2xhdGVkLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gYzEgVGhlIGZpcnN0IGNvbnRvdXIuXG4gKiBAcGFyYW0gIHtvYmplY3R9IGMyIFRoZSBzZWNvbmQgY29udG91ci5cbiAqIEByZXR1cm4ge29iamVjdH0gIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSB0d28gY29udG91cnMuXG4gKi9cbmZ1bmN0aW9uIF9nZW5lcmF0ZUludGVycG9sYXRpb25Db250b3VyUGFpcihjMSwgYzIpIHtcbiAgY29uc3QgY3VtUGVyaW0xID0gX2dldEN1bXVsYXRpdmVQZXJpbWV0ZXIoYzEpO1xuICBjb25zdCBjdW1QZXJpbTIgPSBfZ2V0Q3VtdWxhdGl2ZVBlcmltZXRlcihjMik7XG5cbiAgY29uc3QgaW50ZXJwTm9kZXMgPSBNYXRoLm1heChcbiAgICBNYXRoLmNlaWwoY3VtUGVyaW0xW2N1bVBlcmltMS5sZW5ndGggLSAxXSAvIGRQKSxcbiAgICBNYXRoLmNlaWwoY3VtUGVyaW0yW2N1bVBlcmltMi5sZW5ndGggLSAxXSAvIGRQKVxuICApO1xuXG4gIGNvbnN0IGN1bVBlcmltMU5vcm0gPSBfbm9ybWFsaXNlZEN1bXVsYXRpdmVQZXJpbWV0ZXIoY3VtUGVyaW0xKTtcbiAgY29uc3QgY3VtUGVyaW0yTm9ybSA9IF9ub3JtYWxpc2VkQ3VtdWxhdGl2ZVBlcmltZXRlcihjdW1QZXJpbTIpO1xuXG4gIGNvbnN0IG51bU5vZGVzMSA9IGludGVycE5vZGVzICsgYzIueC5sZW5ndGg7XG4gIGNvbnN0IG51bU5vZGVzMiA9IGludGVycE5vZGVzICsgYzEueC5sZW5ndGg7XG5cbiAgLy8gY29uY2F0aW5hdGUgcCAmJiBjdW1QZXJpbU5vcm1cbiAgY29uc3QgcGVyaW0xSW50ZXJwID0gX2dldEludGVycG9sYXRlZFBlcmltKG51bU5vZGVzMSwgY3VtUGVyaW0xTm9ybSk7XG4gIGNvbnN0IHBlcmltMkludGVycCA9IF9nZXRJbnRlcnBvbGF0ZWRQZXJpbShudW1Ob2RlczIsIGN1bVBlcmltMk5vcm0pO1xuXG4gIGNvbnN0IHBlcmltMUluZCA9IF9nZXRJbmRpY2F0b3JBcnJheShjMSwgbnVtTm9kZXMxKTtcbiAgY29uc3QgcGVyaW0ySW5kID0gX2dldEluZGljYXRvckFycmF5KGMyLCBudW1Ob2RlczIpO1xuXG4gIGNvbnN0IG5vZGVzUGVyU2VnbWVudDEgPSBfZ2V0Tm9kZXNQZXJTZWdtZW50KHBlcmltMUludGVycCwgcGVyaW0xSW5kKTtcbiAgY29uc3Qgbm9kZXNQZXJTZWdtZW50MiA9IF9nZXROb2Rlc1BlclNlZ21lbnQocGVyaW0ySW50ZXJwLCBwZXJpbTJJbmQpO1xuXG4gIGNvbnN0IGMxaSA9IF9nZXRTdXBlclNhbXBsZWRDb250b3VyKGMxLCBub2Rlc1BlclNlZ21lbnQxKTtcbiAgY29uc3QgYzJpID0gX2dldFN1cGVyU2FtcGxlZENvbnRvdXIoYzIsIG5vZGVzUGVyU2VnbWVudDIpO1xuXG4gIC8vIEtlZXAgYzJpIGZpeGVkIGFuZCBzaGlmdCB0aGUgc3RhcnRpbmcgbm9kZSBvZiBjMWkgdG8gbWluaW1pc2UgdGhlIHRvdGFsIGxlbmd0aCBvZiBzZWdtZW50cy5cbiAgX3NoaWZ0U3VwZXJTYW1wbGVkQ29udG91ckluUGxhY2UoYzFpLCBjMmkpO1xuXG4gIHJldHVybiBfcmVkdWNlQ29udG91cnNUb09yaWdpbk5vZGVzKGMxaSwgYzJpKTtcbn1cblxuLyoqXG4gKiBfYWRkSW50ZXJwb2xhdGVkQ29udG91ciAtIEFkZHMgYSBuZXcgY29udG91ciB0byB0aGUgaW1hZ2VJZC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGludGVycG9sYXRlZDJEQ29udG91ciBUaGUgcG9seWdvbiB0byBhZGQgdG8gdGhlIFJPSUNvbnRvdXIuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGltYWdlSWQgICAgICAgICAgICAgICBUaGUgaW1hZ2VJZCB0byBhZGQgdGhlIHBvbHlnb24gdG8uXG4gKiBAcGFyYW0gIHt0eXBlfSByZWZlcmVuY2VkVG9vbERhdGEgICAgVGhlIHRvb2xEYXRhIG9mIGFub3RoZXIgcG9seWdvbiBpbiB0aGVcbiAqIFJPSUNvbnRvdXIsIHRvIGFzc2lnbiBhcHByb3ByaWF0ZSBtZXRhZGF0YSB0byB0aGUgbmV3IHBvbHlnb24uXG4gKiBAcmV0dXJuIHtudWxsfVxuICovXG5mdW5jdGlvbiBfYWRkSW50ZXJwb2xhdGVkQ29udG91cihpbnRlcnBvbGF0ZWQyRENvbnRvdXIsIGltYWdlSWQsIHJlZmVyZW5jZWRUb29sRGF0YSkge1xuICBjb25zdCBwb2ludHMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGludGVycG9sYXRlZDJEQ29udG91ci54Lmxlbmd0aDsgaSsrKSB7XG4gICAgcG9pbnRzLnB1c2goe1xuICAgICAgeDogaW50ZXJwb2xhdGVkMkRDb250b3VyLnhbaV0sXG4gICAgICB5OiBpbnRlcnBvbGF0ZWQyRENvbnRvdXIueVtpXVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgcG9seWdvbiA9IG5ldyBQb2x5Z29uKFxuICAgIHBvaW50cyxcbiAgICBudWxsLFxuICAgIHJlZmVyZW5jZWRUb29sRGF0YS5zZXJpZXNJbnN0YW5jZVVpZCxcbiAgICByZWZlcmVuY2VkVG9vbERhdGEuc3RydWN0dXJlU2V0VWlkLFxuICAgIHJlZmVyZW5jZWRUb29sRGF0YS5ST0lDb250b3VyVWlkLFxuICAgIGdlbmVyYXRlVUlEKCksXG4gICAgbnVsbCxcbiAgICB0cnVlXG4gICk7XG5cbiAgY29uc3QgdG9vbFN0YXRlTWFuYWdlciA9IGdsb2JhbFRvb2xTdGF0ZU1hbmFnZXIuc2F2ZVRvb2xTdGF0ZSgpO1xuXG4gIGlmICghdG9vbFN0YXRlTWFuYWdlcltpbWFnZUlkXSkge1xuICAgIHRvb2xTdGF0ZU1hbmFnZXJbaW1hZ2VJZF0gPSB7fTtcbiAgfVxuXG4gIGNvbnN0IGltYWdlVG9vbFN0YXRlID0gdG9vbFN0YXRlTWFuYWdlcltpbWFnZUlkXTtcblxuICBpZiAoIWltYWdlVG9vbFN0YXRlLmZyZWVoYW5kUm9pKSB7XG4gICAgaW1hZ2VUb29sU3RhdGUuZnJlZWhhbmRSb2kgPSB7fTtcbiAgICBpbWFnZVRvb2xTdGF0ZS5mcmVlaGFuZFJvaS5kYXRhID0gW107XG4gIH0gZWxzZSBpZiAoIWltYWdlVG9vbFN0YXRlLmZyZWVoYW5kUm9pLmRhdGEpIHtcbiAgICBpbWFnZVRvb2xTdGF0ZS5mcmVlaGFuZFJvaS5kYXRhID0gW107XG4gIH1cblxuICBpbWFnZVRvb2xTdGF0ZS5mcmVlaGFuZFJvaS5kYXRhLnB1c2gocG9seWdvbi5nZXRGcmVlaGFuZFRvb2xEYXRhKGZhbHNlKSk7XG5cbiAgbW9kdWxlcy5mcmVlaGFuZDNELnNldHRlcnMuaW5jcmVtZW50UG9seWdvbkNvdW50KFxuICAgIHJlZmVyZW5jZWRUb29sRGF0YS5zZXJpZXNJbnN0YW5jZVVpZCxcbiAgICByZWZlcmVuY2VkVG9vbERhdGEuc3RydWN0dXJlU2V0VWlkLFxuICAgIHJlZmVyZW5jZWRUb29sRGF0YS5ST0lDb250b3VyVWlkXG4gICk7XG59XG5cbi8qKlxuICogX2VkaXRJbnRlcnBvbGF0ZWRDb250b3VyIC0gRWRpdHMgYW4gaW50ZXJwb2xhdGVkIHBvbHlnb24gb24gdGhlIGltYWdlSWRcbiAqIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIHNwZWNpZmllZCBST0lDb250b3VyLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gaW50ZXJwb2xhdGVkMkRDb250b3VyIFRoZSBwb2x5Z29uIHRvIGFkZCB0byB0aGUgUk9JQ29udG91ci5cbiAqIEBwYXJhbSAge1N0cmluZ30gaW1hZ2VJZCAgICAgICAgICAgICAgIFRoZSBpbWFnZUlkIHRvIGFkZCB0aGUgcG9seWdvbiB0by5cbiAqIEBwYXJhbSAge3R5cGV9IHJlZmVyZW5jZWRUb29sRGF0YSAgICBUaGUgdG9vbERhdGEgb2YgYW5vdGhlciBwb2x5Z29uIGluIHRoZVxuICogUk9JQ29udG91ciwgdG8gYXNzaWduIGFwcHJvcHJpYXRlIG1ldGFkYXRhIHRvIHRoZSBuZXcgcG9seWdvbi5cbiAqIEByZXR1cm4ge251bGx9XG4gKi9cbmZ1bmN0aW9uIF9lZGl0SW50ZXJwb2xhdGVkQ29udG91cihpbnRlcnBvbGF0ZWQyRENvbnRvdXIsIGltYWdlSWQsIHJlZmVyZW5jZWRUb29sRGF0YSkge1xuICBjb25zdCB0b29sU3RhdGVNYW5hZ2VyID0gZ2xvYmFsVG9vbFN0YXRlTWFuYWdlci5zYXZlVG9vbFN0YXRlKCk7XG4gIGNvbnN0IGltYWdlVG9vbFN0YXRlID0gdG9vbFN0YXRlTWFuYWdlcltpbWFnZUlkXTtcblxuICBpZiAoIWltYWdlVG9vbFN0YXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbWFnZSB0b29sc3RhdGUgZG9lcyBub3QgZXhpc3QuIFRoaXMgc2hvdWxkIG5vdCBiZSByZWFjaGVkIGluIHRoaXMgY2FzZSEnKTtcbiAgfVxuXG4gIC8vIEZpbmQgdGhlIGluZGV4IG9mIHRoZSBwb2x5Z29uIG9uIHRoaXMgc2xpY2UgY29ycmVzcG9uZGluZyB0b1xuICAvLyBUaGUgUk9JQ29udG91ci5cbiAgbGV0IHRvb2xEYXRhSW5kZXg7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZVRvb2xTdGF0ZS5mcmVlaGFuZFJvaS5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGltYWdlVG9vbFN0YXRlLmZyZWVoYW5kUm9pLmRhdGFbaV0uUk9JQ29udG91clVpZCA9PT0gcmVmZXJlbmNlZFRvb2xEYXRhLlJPSUNvbnRvdXJVaWQpIHtcbiAgICAgIHRvb2xEYXRhSW5kZXggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb2xkUG9seWdvbiA9IGltYWdlVG9vbFN0YXRlLmZyZWVoYW5kUm9pLmRhdGFbdG9vbERhdGFJbmRleF07XG4gIGNvbnN0IHBvaW50cyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW50ZXJwb2xhdGVkMkRDb250b3VyLngubGVuZ3RoOyBpKyspIHtcbiAgICBwb2ludHMucHVzaCh7XG4gICAgICB4OiBpbnRlcnBvbGF0ZWQyRENvbnRvdXIueFtpXSxcbiAgICAgIHk6IGludGVycG9sYXRlZDJEQ29udG91ci55W2ldXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCB1cGRhdGVkUG9seWdvbiA9IG5ldyBQb2x5Z29uKFxuICAgIHBvaW50cyxcbiAgICBudWxsLFxuICAgIG9sZFBvbHlnb24uc2VyaWVzSW5zdGFuY2VVaWQsXG4gICAgb2xkUG9seWdvbi5zdHJ1Y3R1cmVTZXRVaWQsXG4gICAgb2xkUG9seWdvbi5ST0lDb250b3VyVWlkLFxuICAgIG9sZFBvbHlnb24udWlkLFxuICAgIG51bGwsXG4gICAgdHJ1ZVxuICApO1xuXG4gIGltYWdlVG9vbFN0YXRlLmZyZWVoYW5kUm9pLmRhdGFbdG9vbERhdGFJbmRleF0gPSB1cGRhdGVkUG9seWdvbi5nZXRGcmVlaGFuZFRvb2xEYXRhKGZhbHNlKTtcbn1cblxuLyoqXG4gKiBfZ2VuZXJhdGVJbnRlcnBvbGF0ZWRPcGVuQ29udG91ciAtIEludGVycG9sYXRlIGFuIG9wZW4gY29udG91ciBiZXR3ZWVuIGMxaXJcbiAqIGFuZCBjMmlyIGF0IHRoZSB6SW50ZXJwIHBvc2l0aW9uLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gYzFpciAgICAgICAgICAgIFRoZSBpbnRlcnBvbGF0ZWQgYzEgY29udG91ciB3aXRoXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBlcmZsdW91cyBub2RlcyByZW1vdmVkLlxuICogQHBhcmFtICB7b2JqZWN0fSBjMmlyICAgICAgICAgICAgVGhlIGludGVycG9sYXRlZCBjMiBjb250b3VyIHdpdGhcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cGVyZmx1b3VzIG5vZGVzIHJlbW92ZWQuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHpJbnRlcnAgICAgICAgICBUaGUgei0gY29vcmRpbmF0ZSBvZiB0aGUgZGVzaXJlZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwb2xhdGlvbi5cbiAqIEBwYXJhbSAge2Jvb2xlYW59IGMxSGFzTW9yZU5vZGVzIFRydWUgaWYgYzEgaGFzIG1vcmUgb3JpZ2luYWwgbm9kZXNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYW4gYzIuXG4gKiBAcmV0dXJuIHtvYmplY3R9ICAgICAgICAgICAgICAgICBUaGUgaW50ZXJwb2xhdGVkIGNvbnRvdXIgYXQgej16SW50ZXJwLlxuICovXG5mdW5jdGlvbiBfZ2VuZXJhdGVJbnRlcnBvbGF0ZWRPcGVuQ29udG91cihjMWlyLCBjMmlyLCB6SW50ZXJwLCBjMUhhc01vcmVOb2Rlcykge1xuICBjb25zdCBjSW50ZXJwID0ge1xuICAgIHg6IFtdLFxuICAgIHk6IFtdXG4gIH07XG5cbiAgY29uc3QgaW5kaWNpZXMgPSBjMUhhc01vcmVOb2RlcyA/IGMxaXIuSSA6IGMyaXIuSTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGMxaXIueC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChpbmRpY2llc1tpXSkge1xuICAgICAgY0ludGVycC54LnB1c2goKDEgLSB6SW50ZXJwKSAqIGMxaXIueFtpXSArIHpJbnRlcnAgKiBjMmlyLnhbaV0pO1xuICAgICAgY0ludGVycC55LnB1c2goKDEgLSB6SW50ZXJwKSAqIGMxaXIueVtpXSArIHpJbnRlcnAgKiBjMmlyLnlbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjSW50ZXJwO1xufVxuXG4vKipcbiAqIF9yZWR1Y2VDb250b3Vyc1RvT3JpZ2luTm9kZXMgLSBSZW1vdmVzIGFueSBub2RlcyBmcm9tIHRoZSBjb250b3VycyB0aGF0IGRvbid0XG4gKiBjb3JyZXNwb25kIHRvIGFuIG9yaWdpbmFsIGNvbnRvdXIgbm9kZS5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGMxaSBUaGUgZmlyc3Qgc3VwZXItc2FtcGxlZCBjb250b3VyLlxuICogQHBhcmFtICB7b2JqZWN0fSBjMmkgVGhlIHNlY29uZCBzdXBlci1zYW1wbGVkIGNvbnRvdXIuXG4gKiBAcmV0dXJuIHtvYmplY3R9ICAgICBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgdHdvIHJlZHVjZWQgY29udG91cnMuXG4gKi9cbmZ1bmN0aW9uIF9yZWR1Y2VDb250b3Vyc1RvT3JpZ2luTm9kZXMoYzFpLCBjMmkpIHtcbiAgY29uc3QgYzFJbnRlcnAgPSB7XG4gICAgeDogW10sXG4gICAgeTogW10sXG4gICAgSTogW11cbiAgfTtcbiAgY29uc3QgYzJJbnRlcnAgPSB7XG4gICAgeDogW10sXG4gICAgeTogW10sXG4gICAgSTogW11cbiAgfTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGMxaS54Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGMxaS5JW2ldIHx8IGMyaS5JW2ldKSB7XG4gICAgICBjMUludGVycC54LnB1c2goYzFpLnhbaV0pO1xuICAgICAgYzFJbnRlcnAueS5wdXNoKGMxaS55W2ldKTtcbiAgICAgIGMxSW50ZXJwLkkucHVzaChjMWkuSVtpXSk7XG5cbiAgICAgIGMySW50ZXJwLngucHVzaChjMmkueFtpXSk7XG4gICAgICBjMkludGVycC55LnB1c2goYzJpLnlbaV0pO1xuICAgICAgYzJJbnRlcnAuSS5wdXNoKGMyaS5JW2ldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGMxSW50ZXJwLFxuICAgIGMySW50ZXJwXG4gIH07XG59XG5cbi8qKlxuICogX3NoaWZ0U3VwZXJTYW1wbGVkQ29udG91ckluUGxhY2UgLSBTaGlmdHMgdGhlIGluZGljaWVzIG9mIGMxaSBhcm91bmQgdG9cbiAqIG1pbmltaXNlOiBTVU0gKHxjMWlbaV0tYzJpW2ldfCkgZnJvbSAwIHRvIE4uXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSBjMWkgVGhlIGNvbnRvdXIgdG8gc2hpZnQuXG4gKiBAcGFyYW0gIHtvYmplY3R9IGMyaSBUaGUgcmVmZXJlbmNlIGNvbnRvdXIuXG4gKiBAbW9kaWZpZXMgYzFpXG4gKi9cbmZ1bmN0aW9uIF9zaGlmdFN1cGVyU2FtcGxlZENvbnRvdXJJblBsYWNlKGMxaSwgYzJpKSB7XG4gIGNvbnN0IGMxaUxlbmd0aCA9IGMxaS54Lmxlbmd0aDtcblxuICBsZXQgb3B0aW1hbCA9IHtcbiAgICBzdGFydGluZ05vZGU6IDAsXG4gICAgdG90YWxTcXVhcmVkWFlMZW5ndGhzOiBJbmZpbml0eVxuICB9O1xuXG4gIGZvciAobGV0IHN0YXJ0aW5nTm9kZSA9IDA7IHN0YXJ0aW5nTm9kZSA8IGMxaUxlbmd0aDsgc3RhcnRpbmdOb2RlKyspIHtcbiAgICBsZXQgbm9kZSA9IHN0YXJ0aW5nTm9kZTtcblxuICAgIC8vIE5PVEU6IDEpIElnbm9yZSBjYWxjdWxhdGluZyBaLCBhcyB0aGUgc3VtIG9mIGFsbCBzcXVhcmVkIFogZGlzdGFuY2VzIHdpbGwgYWx3YXlzIGJlIGEgY29uc3RhbnQuXG4gICAgLy8gTk9URTogMikgRG9uJ3QgbmVlZCBhY3R1YWwgbGVuZ3RoLCBzbyBkb24ndCB3b3JyeSBhYm91dCBzcXVhcmUgcm9vdGluZy5cbiAgICBsZXQgdG90YWxTcXVhcmVkWFlMZW5ndGhzID0gMDtcblxuICAgIGZvciAobGV0IGl0dGVyYXRpb24gPSAwOyBpdHRlcmF0aW9uIDwgYzFpTGVuZ3RoOyBpdHRlcmF0aW9uKyspIHtcbiAgICAgIHRvdGFsU3F1YXJlZFhZTGVuZ3RocyArPSAoYzFpLnhbbm9kZV0gLSBjMmkueFtpdHRlcmF0aW9uXSkgKiogMiArIChjMWkueVtub2RlXSAtIGMyaS55W2l0dGVyYXRpb25dKSAqKiAyO1xuXG4gICAgICBub2RlKys7XG5cbiAgICAgIGlmIChub2RlID09PSBjMWlMZW5ndGgpIG5vZGUgPSAwO1xuICAgIH1cblxuICAgIGlmICh0b3RhbFNxdWFyZWRYWUxlbmd0aHMgPCBvcHRpbWFsLnRvdGFsU3F1YXJlZFhZTGVuZ3Rocykge1xuICAgICAgb3B0aW1hbC50b3RhbFNxdWFyZWRYWUxlbmd0aHMgPSB0b3RhbFNxdWFyZWRYWUxlbmd0aHM7XG4gICAgICBvcHRpbWFsLnN0YXJ0aW5nTm9kZSA9IHN0YXJ0aW5nTm9kZTtcbiAgICB9XG4gIH1cblxuICBsZXQgbm9kZSA9IG9wdGltYWwuc3RhcnRpbmdOb2RlO1xuXG4gIF9zaGlmdENpcmN1bGFyQXJyYXkoYzFpLngsIG5vZGUpO1xuICBfc2hpZnRDaXJjdWxhckFycmF5KGMxaS55LCBub2RlKTtcbiAgX3NoaWZ0Q2lyY3VsYXJBcnJheShjMWkuSSwgbm9kZSk7XG59XG5cbi8qKlxuICogX3NoaWZ0Q2lyY3VsYXJBcnJheSAtIFNoaWZ0IHRoZSBjaXJjdWxhciBhcnJheSBieSB0aGUgY291bnQuXG4gKlxuICogQHBhcmFtICB7KltdfSBhcnIgICBUaGUgYXJyYXkuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGNvdW50IFRoZSBzaGlmdC5cbiAqIEByZXR1cm4geypbXX0gICAgICAgVGhlIHNoaWZ0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIF9zaGlmdENpcmN1bGFyQXJyYXkoYXJyLCBjb3VudCkge1xuICBjb3VudCAtPSBhcnIubGVuZ3RoICogTWF0aC5mbG9vcihjb3VudCAvIGFyci5sZW5ndGgpO1xuICBhcnIucHVzaC5hcHBseShhcnIsIGFyci5zcGxpY2UoMCwgY291bnQpKTtcbiAgcmV0dXJuIGFycjtcbn1cblxuLyoqXG4gKiBfZ2V0U3VwZXJTYW1wbGVkQ29udG91ciAtIEdlbmVyYXRlcyBhIHN1cGVyIHNhbXBsZWQgY29udG91ciB3aXRoIGFkZGl0aW9uYWxcbiAqIG5vZGVzIGFkZGVkIHBlciBzZWdtZW50LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gYyAgICAgICAgICAgICAgICAgVGhlIG9yaWdpbmFsIGNvbnRvdXIuXG4gKiBAcGFyYW0gIHtOdW1iZXJbXX0gbm9kZXNQZXJTZWdtZW50IEFuIGFycmF5IG9mIHRoZSBudW1iZXIgb2Ygbm9kZXMgdG8gYWRkXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlciBsaW5lIHNlZ21lbnQuXG4gKiBAcmV0dXJuIHtvYmplY3R9ICAgICAgICAgICAgICAgICAgIFRoZSBzdXBlciBzYW1wbGVkIGNvbnRvdXIuXG4gKi9cbmZ1bmN0aW9uIF9nZXRTdXBlclNhbXBsZWRDb250b3VyKGMsIG5vZGVzUGVyU2VnbWVudCkge1xuICBjb25zdCBjaSA9IHtcbiAgICB4OiBbXSxcbiAgICB5OiBbXSxcbiAgICBJOiBbXVxuICB9O1xuXG4gIC8vIExlbmd0aCAtIDEsIHByb2R1Y2VzICdvcGVuJyBwb2x5Z29uLlxuICBmb3IgKGxldCBuID0gMDsgbiA8IGMueC5sZW5ndGggLSAxOyBuKyspIHtcbiAgICAvLyBBZGQgb3JpZ2luYWwgbm9kZS5cbiAgICBjaS54LnB1c2goYy54W25dKTtcbiAgICBjaS55LnB1c2goYy55W25dKTtcbiAgICBjaS5JLnB1c2godHJ1ZSk7XG5cbiAgICAvLyBBZGQgbGluZXJhbGx5IGludGVycG9sYXRlZCBub2Rlcy5cbiAgICBjb25zdCB4U3BhY2luZyA9IChjLnhbbiArIDFdIC0gYy54W25dKSAvIChub2Rlc1BlclNlZ21lbnRbbl0gKyAxKTtcbiAgICBjb25zdCB5U3BhY2luZyA9IChjLnlbbiArIDFdIC0gYy55W25dKSAvIChub2Rlc1BlclNlZ21lbnRbbl0gKyAxKTtcblxuICAgIC8vIEFkZCBvdGhlciBub2Rlc1BlclNlZ21lbnQgLSAxIG90aGVyIG5vZGVzIChhcyBhbHJlYWR5IHB1dCBpbiBvcmlnaW5hbCBub2RlKS5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzUGVyU2VnbWVudFtuXSAtIDE7IGkrKykge1xuICAgICAgY2kueC5wdXNoKGNpLnhbY2kueC5sZW5ndGggLSAxXSArIHhTcGFjaW5nKTtcbiAgICAgIGNpLnkucHVzaChjaS55W2NpLnkubGVuZ3RoIC0gMV0gKyB5U3BhY2luZyk7XG4gICAgICBjaS5JLnB1c2goZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjaTtcbn1cblxuLyoqXG4gKiBfZ2V0Tm9kZXNQZXJTZWdtZW50IC0gUmV0dXJucyBhbiBhcnJheSBvZiB0aGUgbnVtYmVyIG9mIGludGVycG9sYXRlZCBub2Rlc1xuICogdG8gYmUgYWRkZWQgYWxvbmcgZWFjaCBsaW5lIHNlZ21lbnQgb2YgYSBwb2x5Z29uLlxuICpcbiAqIEBwYXJhbSAge051bWJlcltdfSBwZXJpbUludGVycCBOb3JtYWxpc2VkIGFycmF5IG9mIG9yaWdpbmFsIGFuZCBhZGRlZCBub2Rlcy5cbiAqIEBwYXJhbSAge2Jvb2xlYW5bXX0gcGVyaW1JbmQgICAgVGhlIGluZGljYXRvciBhcnJheSBkZXNjcmliaW5nIHRoZSBsb2NhdGlvbiBvZlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIG9yaWdpbmFsIGNvbnRvdXIncyBub2Rlcy5cbiAqIEByZXR1cm4ge051bWJlcltdfSAgICAgICAgIEFuIGFycmF5IGNvbnRhaW5naW5nIHRoZSBudW1iZXIgb2Ygbm9kZXMgdG8gYmVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZGVkIHBlciBvcmlnaW5hbCBsaW5lIHNlZ21lbnQuXG4gKi9cbmZ1bmN0aW9uIF9nZXROb2Rlc1BlclNlZ21lbnQocGVyaW1JbnRlcnAsIHBlcmltSW5kKSB7XG4gIGNvbnN0IGlkeCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGVyaW1JbnRlcnAubGVuZ3RoOyArK2kpIGlkeFtpXSA9IGk7XG4gIGlkeC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIHBlcmltSW50ZXJwW2FdIDwgcGVyaW1JbnRlcnBbYl0gPyAtMSA6IHBlcmltSW50ZXJwW2FdID4gcGVyaW1JbnRlcnBbYl07XG4gIH0pO1xuXG4gIGNvbnN0IHBlcmltSW5kU29ydGVkID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwZXJpbUluZC5sZW5ndGg7IGkrKykge1xuICAgIHBlcmltSW5kU29ydGVkLnB1c2gocGVyaW1JbmRbaWR4W2ldXSk7XG4gIH1cblxuICBjb25zdCBpbmRpY2llc09mT3JpZ2luTm9kZXMgPSBwZXJpbUluZFNvcnRlZC5yZWR1Y2UoZnVuY3Rpb24gKGFyciwgZWxlbWVudFZhbHVlLCBpKSB7XG4gICAgaWYgKGVsZW1lbnRWYWx1ZSkgYXJyLnB1c2goaSk7XG4gICAgcmV0dXJuIGFycjtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG5vZGVzUGVyU2VnbWVudCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kaWNpZXNPZk9yaWdpbk5vZGVzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIG5vZGVzUGVyU2VnbWVudC5wdXNoKGluZGljaWVzT2ZPcmlnaW5Ob2Rlc1tpICsgMV0gLSBpbmRpY2llc09mT3JpZ2luTm9kZXNbaV0pO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVzUGVyU2VnbWVudDtcbn1cblxuLyoqXG4gKiBfZ2V0SW5kaWNhdG9yQXJyYXkgLSBQcm9kdWNlcyBhbiBhcnJheSBvZiB0aGUgbG9jYXRpb24gb2YgdGhlIG9yaWdpbmFsIG5vZGVzXG4gKiBpbiBhIHN1cGVyIHNhbXBsZWQgY29udG91ci5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGNvbnRvdXIgICBUaGUgb3JpZ2luYWwgY29udG91ci5cbiAqIEBwYXJhbSAge051bWJlcn0gbnVtTm9kZXMgVGhlIG51bWJlciBvZiBub2RlcyBhZGRlZC5cbiAqIEByZXR1cm4ge2Jvb2xlYW5bXX0gICAgICAgICAgIFRoZSBpbmRpY2F0b3IgYXJyYXkgb2Ygb3JpZ2luYWwgbm9kZSBsb2NhdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIF9nZXRJbmRpY2F0b3JBcnJheShjb250b3VyLCBudW1Ob2Rlcykge1xuICBjb25zdCBwZXJpbUluZCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtTm9kZXMgLSAyOyBpKyspIHtcbiAgICBwZXJpbUluZC5wdXNoKGZhbHNlKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29udG91ci54Lmxlbmd0aDsgaSsrKSB7XG4gICAgcGVyaW1JbmQucHVzaCh0cnVlKTtcbiAgfVxuXG4gIHJldHVybiBwZXJpbUluZDtcbn1cblxuLyoqXG4gKiBfZ2V0SW50ZXJwb2xhdGVkUGVyaW0gLSBBZGRzIGFkZGl0aW9uYWwgaW50ZXJwb2xhdGVkIG5vZGVzIHRvIHRoZVxuICogbm9ybWFsaXNlZCBwZXJpbWV0ZXIgYXJyYXkuXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSBudW1Ob2RlcyAgICBUaGUgbnVtYmVyIG9mIG5vZGVzIHRvIGFkZC5cbiAqIEBwYXJhbSAge051bWJlcltdfSBjdW1QZXJpbU5vcm0gVGhlIGN1bXVsYXRpdmUgcGVyaW1ldGVyIGFycmF5LlxuICogQHJldHVybiB7TnVtYmVyW119ICAgICAgICAgICAgICBUaGUgYXJyYXkgb2Ygbm9kZXMuXG4gKi9cbmZ1bmN0aW9uIF9nZXRJbnRlcnBvbGF0ZWRQZXJpbShudW1Ob2RlcywgY3VtUGVyaW1Ob3JtKSB7XG4gIGNvbnN0IGRpZmYgPSAxIC8gKG51bU5vZGVzIC0gMSk7XG4gIGNvbnN0IGxpbnNwYWNlID0gW2RpZmZdO1xuXG4gIC8vIExlbmd0aCAtIDIgYXMgd2UgYXJlIGRpc2NhcmRpbmcgMCBhbiAxIGZvciBlZmZpY2llbmN5IChubyBuZWVkIHRvIGNhbGN1bGF0ZSB0aGVtKS5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1Ob2RlcyAtIDI7IGkrKykge1xuICAgIGxpbnNwYWNlLnB1c2gobGluc3BhY2VbbGluc3BhY2UubGVuZ3RoIC0gMV0gKyBkaWZmKTtcbiAgfVxuXG4gIHJldHVybiBsaW5zcGFjZS5jb25jYXQoY3VtUGVyaW1Ob3JtKTtcbn1cblxuLyoqXG4gKiBfZ2V0Q3VtdWxhdGl2ZVBlcmltZXRlciAtIFJldHVybnMgYW4gYXJyYXkgb2YgdGhlIHRoZSBjdW11bGF0aXZlIHBlcmltZXRlciBhdFxuICogZWFjaCBub2RlIG9mIHRoZSBjb250b3VyLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gY29udG91ciBUaGUgY29udG91ci5cbiAqIEByZXR1cm4ge051bWJlcltdfSAgICAgICAgIEFuIGFycmF5IG9mIHRoZSBjdW11bGF0aXZlIHBlcmltZXRlciBhdCBlYWNoIG5vZGUuXG4gKi9cbmZ1bmN0aW9uIF9nZXRDdW11bGF0aXZlUGVyaW1ldGVyKGNvbnRvdXIpIHtcbiAgbGV0IGN1bXVsYXRpdmVQZXJpbWV0ZXIgPSBbMF07XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBjb250b3VyLngubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBsZW5ndGhPZlNlZ21lbnQgPSBNYXRoLnNxcnQoKGNvbnRvdXIueFtpXSAtIGNvbnRvdXIueFtpIC0gMV0pICoqIDIgKyAoY29udG91ci55W2ldIC0gY29udG91ci55W2kgLSAxXSkgKiogMik7XG5cbiAgICBjdW11bGF0aXZlUGVyaW1ldGVyLnB1c2goY3VtdWxhdGl2ZVBlcmltZXRlcltpIC0gMV0gKyBsZW5ndGhPZlNlZ21lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGN1bXVsYXRpdmVQZXJpbWV0ZXI7XG59XG5cbi8qKlxuICogX25vcm1hbGlzZWRDdW11bGF0aXZlUGVyaW1ldGVyIC0gTm9ybWFsaXNlcyB0aGUgY3VtdWxhdGl2ZSBwZXJpbWV0ZXIgYXJyYXkuXG4gKlxuICogQHBhcmFtICB7dHlwZX0gY3VtUGVyaW0gQW4gYXJyYXkgb2YgdGhlIGN1bXVsYXRpdmUgcGVyaW1ldGVyIGF0IGVhY2ggb2YgYVxuICogY29udG91ci5cbiAqIEByZXR1cm4ge3R5cGV9ICAgICAgICAgIFRoZSBub3JtYWxpc2VkIGFycmF5LlxuICovXG5mdW5jdGlvbiBfbm9ybWFsaXNlZEN1bXVsYXRpdmVQZXJpbWV0ZXIoY3VtUGVyaW0pIHtcbiAgY29uc3QgY3VtUGVyaW1Ob3JtID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdW1QZXJpbS5sZW5ndGg7IGkrKykge1xuICAgIGN1bVBlcmltTm9ybS5wdXNoKGN1bVBlcmltW2ldIC8gY3VtUGVyaW1bY3VtUGVyaW0ubGVuZ3RoIC0gMV0pO1xuICB9XG5cbiAgcmV0dXJuIGN1bVBlcmltTm9ybTtcbn1cblxuLyoqXG4gKiBfZ2VuZXJhdGVDbG9zZWRDb250b3VyIC0gR2VuZXJhdGUgYSBjbG9ja3dpc2UgY29udG91ciBvYmplY3QgZnJvbSB0aGUgcG9pbnRzXG4gKiBvZiBhIGNsb2Nrd2lzZSBvciBhbnRpLWNsb2Nrd2lzZSBwb2x5Z29uLlxuICpcbiAqIEBwYXJhbSAge29iamVjdFtdfSBwb2ludHMgVGhlIHBvaW50cyB0byBnZW5lcmF0ZSB0aGUgY29udG91ciBmcm9tLlxuICogQHJldHVybiB7b2JqZWN0fSAgICAgICAgICAgVGhlIGdlbmVyYXRlZCBjb250b3VyIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gX2dlbmVyYXRlQ2xvc2VkQ29udG91cihwb2ludHMpIHtcbiAgY29uc3QgYyA9IHtcbiAgICB4OiBbXSxcbiAgICB5OiBbXVxuICB9O1xuXG4gIC8vIE5PVEU6IEZvciB6IHBvc2l0aW9ucyB3ZSBvbmx5IG5lZWQgdGhlIHJlbGF0aXZlIGRpZmZlcmVuY2UgZm9yIGludGVycG9sYXRpb24sIHRodXMgdXNlIGZyYW1lIGluZGV4IGFzIFouXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgYy54W2ldID0gcG9pbnRzW2ldLng7XG4gICAgYy55W2ldID0gcG9pbnRzW2ldLnk7XG4gIH1cblxuICAvLyBQdXNoIGxhc3Qgbm9kZSB0byBjcmVhdGUgY2xvc2VkIGNvbnRvdXIuXG4gIGMueC5wdXNoKGMueFswXSk7XG4gIGMueS5wdXNoKGMueVswXSk7XG5cbiAgX3JldmVyc2VJZkFudGlDbG9ja3dpc2UoYyk7XG5cbiAgcmV0dXJuIGM7XG59XG5cbi8qKlxuICogX3JldmVyc2VJZkFudGlDbG9ja3dpc2UgLSBJZiB0aGUgY29udG91cidzIG5vZGVzIHJ1biBhbnRpLWNsb2Nrd2lzZSxcbiAqIHJldmVyc2UgdGhlbS5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGNvbnRvdXIgVGhlIGNvbnRvdXIuXG4gKiBAcmV0dXJuIHtvYmplY3R9ICAgICAgICAgVGhlIGNvbnRvdXIsIGNvcnJlY3RlZCB0byBiZSBjbG9ja3dpc2UgaWYgYXBwcm9wcmlhdGUuXG4gKi9cbmZ1bmN0aW9uIF9yZXZlcnNlSWZBbnRpQ2xvY2t3aXNlKGNvbnRvdXIpIHtcbiAgY29uc3QgbGVuZ3RoID0gY29udG91ci54Lmxlbmd0aDtcbiAgY29uc3QgY29udG91clhNZWFuID0gY29udG91ci54LnJlZHVjZShnZXRTdW1SZWR1Y2VyKSAvIGxlbmd0aDtcbiAgbGV0IGNoZWNrU3VtID0gMDtcblxuICBmb3IgKGxldCBrID0gMCwgaSA9IDEsIGogPSAyOyBrIDwgbGVuZ3RoOyBrKyspIHtcbiAgICBjaGVja1N1bSArPSAoY29udG91ci54W2ldIC0gY29udG91clhNZWFuKSAqIChjb250b3VyLnlbal0gLSBjb250b3VyLnlba10pO1xuICAgIGkrKztcbiAgICBqKys7XG4gICAgaWYgKGkgPj0gbGVuZ3RoKSBpID0gMDtcbiAgICBpZiAoaiA+PSBsZW5ndGgpIGogPSAwO1xuICB9XG5cbiAgaWYgKGNoZWNrU3VtID4gMCkge1xuICAgIGNvbnRvdXIueC5yZXZlcnNlKCk7XG4gICAgY29udG91ci55LnJldmVyc2UoKTtcbiAgfVxufVxuXG4vKipcbiAqIGdldFN1bVJlZHVjZXIgLSBBIHJlZHVjZXIgZnVuY3Rpb24gdGhhdCBjYWxjdWxhdGVzIHRoZSBzdW0gb2YgYW4gYXJyYXkuXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSB0b3RhbCBUaGUgcnVubmluZyB0b3RhbC5cbiAqIEBwYXJhbSAge051bWJlcn0gbnVtICAgVGhlIG51bWVyaWNhbCB2YWx1ZSBvZiB0aGUgYXJyYXkgZWxlbWVudC5cbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgVGhlIHVwZGF0ZWQgcnVubmluZyB0b3RhbC5cbiAqL1xuZnVuY3Rpb24gZ2V0U3VtUmVkdWNlcih0b3RhbCwgbnVtKSB7XG4gIHJldHVybiB0b3RhbCArIG51bTtcbn1cbiIsImltcG9ydCBHZW5lcmFsQW5hdG9teUxpc3QgZnJvbSAnLi4vR2VuZXJhbEFuYXRvbXlsaXN0LmpzJztcblxuY29uc3QgY2F0ZWdvcmllcyA9IEdlbmVyYWxBbmF0b215TGlzdC5TZWdtZW50YXRpb25Db2Rlcy5DYXRlZ29yeTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVNZXRhZGF0YShsYWJlbCwgY2F0ZWdvcnlVSUQgPSAnVC1EMDA1MCcsIHR5cGVVSUQgPSAnVC1EMDA1MCcsIG1vZGlmaWVyVUlEKSB7XG4gIGNvbnN0IGNhdGVnb3J5ID0gY2F0ZWdvcmllcy5maW5kKGNhdGVnb3JpZXNJID0+IGNhdGVnb3JpZXNJLkNvZGVWYWx1ZSA9PT0gY2F0ZWdvcnlVSUQpO1xuICBjb25zdCB0eXBlID0gY2F0ZWdvcnkuVHlwZS5maW5kKHR5cGVzSSA9PiB0eXBlc0kuQ29kZVZhbHVlID09PSB0eXBlVUlEKTtcblxuICBjb25zdCBtZXRhZGF0YSA9IHtcbiAgICBTZWdtZW50ZWRQcm9wZXJ0eUNhdGVnb3J5Q29kZVNlcXVlbmNlOiB7XG4gICAgICBDb2RlVmFsdWU6IGNhdGVnb3J5LkNvZGVWYWx1ZSxcbiAgICAgIENvZGluZ1NjaGVtZURlc2lnbmF0b3I6IGNhdGVnb3J5LkNvZGluZ1NjaGVtZURlc2lnbmF0b3IsXG4gICAgICBDb2RlTWVhbmluZzogY2F0ZWdvcnkuQ29kZU1lYW5pbmdcbiAgICB9LFxuICAgIFNlZ21lbnRMYWJlbDogbGFiZWwsXG4gICAgU2VnbWVudEFsZ29yaXRobVR5cGU6ICdNQU5VQUwnLFxuXG4gICAgU2VnbWVudGVkUHJvcGVydHlUeXBlQ29kZVNlcXVlbmNlOiB7XG4gICAgICBDb2RlVmFsdWU6IHR5cGUuQ29kZVZhbHVlLFxuICAgICAgQ29kaW5nU2NoZW1lRGVzaWduYXRvcjogdHlwZS5Db2RpbmdTY2hlbWVEZXNpZ25hdG9yLFxuICAgICAgQ29kZU1lYW5pbmc6IHR5cGUuQ29kZU1lYW5pbmdcbiAgICB9XG4gIH07XG5cbiAgaWYgKG1vZGlmaWVyVUlEKSB7XG4gICAgY29uc3QgbW9kZmllciA9IHR5cGUuTW9kaWZpZXIuZmluZChtb2RpZmllckkgPT4gbW9kaWZpZXJJLkNvZGVWYWx1ZSA9PT0gbW9kaWZpZXJVSUQpO1xuXG4gICAgbWV0YWRhdGEuU2VnbWVudGVkUHJvcGVydHlUeXBlQ29kZVNlcXVlbmNlLlNlZ21lbnRlZFByb3BlcnR5VHlwZU1vZGlmaWVyQ29kZVNlcXVlbmNlID0ge1xuICAgICAgQ29kZVZhbHVlOiBtb2RmaWVyLkNvZGVWYWx1ZSxcbiAgICAgIENvZGluZ1NjaGVtZURlc2lnbmF0b3I6IG1vZGZpZXIuQ29kaW5nU2NoZW1lRGVzaWduYXRvcixcbiAgICAgIENvZGVNZWFuaW5nOiBtb2RmaWVyLkNvZGVNZWFuaW5nXG4gICAgfTtcblxuICAgIG1ldGFkYXRhLlJlY29tbWVuZGVkRGlzcGxheUNJRUxhYlZhbHVlID0gbW9kZmllci5yZWNvbW1lbmRlZERpc3BsYXlSR0JWYWx1ZTtcbiAgfSBlbHNlIHtcbiAgICBtZXRhZGF0YS5SZWNvbW1lbmRlZERpc3BsYXlDSUVMYWJWYWx1ZSA9IHR5cGUucmVjb21tZW5kZWREaXNwbGF5UkdCVmFsdWU7XG4gIH1cblxuICByZXR1cm4gbWV0YWRhdGE7XG59XG4iLCIvKipcbiAqIEdlbmVyYXRlcyBhIFVVSUQgZm9yIHRoZSBlbmFibGVkRWxlbWVudC5cbiAqIEBleHBvcnQgQHB1YmxpYyBAbWV0aG9kXG4gKiBAbmFtZSBnZW5lcmF0ZVVJRFxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIFVVSUQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzg4MDk0NzIvOTIwODMyMCBQdWJsaWMgRG9tYWluL01JVFxuICAvKiBlc2xpbnQgbm8tYml0d2lzZTogW1wiZXJyb3JcIiwgeyBcImFsbG93XCI6IFtcIiZcIixcInxcIl0gfV0gKi9cbiAgbGV0IGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICBpZiAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcGVyZm9ybWFuY2Uubm93ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZCArPSBwZXJmb3JtYW5jZS5ub3coKTsgLy8gVXNlIGhpZ2gtcHJlY2lzaW9uIHRpbWVyIGlmIGF2YWlsYWJsZVxuICB9XG4gIHJldHVybiAneC54LngueC54LngueHh4eC54eHgueC54Lnh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xuICAgIGNvbnN0IHIgPSAoZCArIE1hdGgucmFuZG9tKCkgKiAxNikgJSAxNiB8IDA7XG5cbiAgICBkID0gTWF0aC5mbG9vcihkIC8gMTYpO1xuICAgIHJldHVybiAoYyA9PT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4OCkudG9TdHJpbmcoMTYpO1xuICB9KTtcbn1cbiIsIi8qKlxuICogR3JhYnMgYGRvbWAgcmVmZXJlbmNlIGZvciB0aGUgZW5hYmxlZEVsZW1lbnQgb2ZcbiAqIHRoZSBhY3RpdmUgdmlld3BvcnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QWN0aXZlVmlld3BvcnRFbmFibGVkRWxlbWVudCh2aWV3cG9ydHMsIGFjdGl2ZUluZGV4KSB7XG4gIGNvbnN0IGFjdGl2ZVZpZXdwb3J0ID0gdmlld3BvcnRzW2FjdGl2ZUluZGV4XSB8fCB7fTtcblxuICByZXR1cm4gYWN0aXZlVmlld3BvcnQuZG9tO1xufVxuIiwiaW1wb3J0IGNvcm5lcnN0b25lIGZyb20gJ2Nvcm5lcnN0b25lLWNvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTZXJpZXNJbnN0YW5jZVVpZEZyb21FbmFibGVkRWxlbWVudChlbmFibGVkRWxlbWVudCkge1xuICBpZiAoIWVuYWJsZWRFbGVtZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgaW1hZ2VJZCA9IGVuYWJsZWRFbGVtZW50LmltYWdlLmltYWdlSWQ7XG4gIGNvbnN0IGdlbmVyYWxTZXJpZXNNb2R1bGUgPSBjb3JuZXJzdG9uZS5tZXRhRGF0YS5nZXQoJ2dlbmVyYWxTZXJpZXNNb2R1bGUnLCBpbWFnZUlkKTtcblxuICByZXR1cm4gZ2VuZXJhbFNlcmllc01vZHVsZS5zZXJpZXNJbnN0YW5jZVVJRDtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jb3JuZXJzdG9uZV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Nvcm5lcnN0b25lX21hdGhfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY29ybmVyc3RvbmVfdG9vbHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiXSwic291cmNlUm9vdCI6IiJ9