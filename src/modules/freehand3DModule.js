import cornerstone from 'cornerstone-core';
import generateUID from '../util/generateUID.js';
import getSeriesInstanceUidFromEnabledElement from '../util/getSeriesInstanceUidFromEnabledElement.js';

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

const state = {
  seriesCollection: [],
  interpolate: false,
  displayStats: false
};

function check(object, name) {
  if (!object) {
    throw new Error(`Insufficient information provided, must provide ${name}.`);
  }
}

function getSeries(seriesInstanceUid) {
  check(seriesInstanceUid, 'seriesInstanceUid');

  return state.seriesCollection.find(series => {
    return series.uid === seriesInstanceUid;
  });
}

function getStructureSet(seriesInstanceUid, structureSetUid = 'DEFAULT') {
  check(structureSetUid, 'structureSetUid');

  const series = getSeries(seriesInstanceUid);

  if (!series) {
    return;
  }

  return series.structureSetCollection.find(structureSet => {
    return structureSet.uid === structureSetUid;
  });
}

function getROIContour(seriesInstanceUid, structureSetUid, ROIContourUid) {
  check(ROIContourUid, 'ROIContourUid');

  const structureSet = getStructureSet(seriesInstanceUid, structureSetUid);

  if (!structureSet) {
    return;
  }

  return structureSet.ROIContourCollection.find(ROIContour => {
    return ROIContour && ROIContour.uid === ROIContourUid;
  });
}

function getROIContourIndex(seriesInstanceUid, structureSetUid, ROIContourUid) {
  check(ROIContourUid, 'ROIContourUid');

  const structureSet = getStructureSet(seriesInstanceUid, structureSetUid);

  if (!structureSet) {
    return;
  }

  return structureSet.ROIContourCollection.findIndex(ROIContour => {
    return ROIContour.uid === ROIContourUid;
  });
}

function getActiveStructureSetIndex(seriesInstanceUid) {
  const series = getSeries(seriesInstanceUid);

  return series.activeStructureSetIndex;
}

function getActiveROIContourIndex(seriesInstanceUid, structureSetUid = 'DEFAULT') {
  const structureSet = getStructureSet(seriesInstanceUid, structureSetUid);

  return structureSet.activeROIContourIndex;
}

function getActiveROIContour(seriesInstanceUid, structureSetUid = 'DEFAULT') {
  const structureSet = getStructureSet(seriesInstanceUid, structureSetUid);

  const activeROIContourIndex = structureSet.activeROIContourIndex;

  if (activeROIContourIndex === null || activeROIContourIndex === undefined) {
    return;
  }

  return structureSet.ROIContourCollection[activeROIContourIndex];
}

function setSeries(seriesInstanceUid) {
  check(seriesInstanceUid);

  const series = {
    uid: seriesInstanceUid,
    activeStructureSetIndex: null,
    structureSetCollection: []
  };

  state.seriesCollection.push(series);

  // Add a default structureSet for the series.
  setStructureSet(seriesInstanceUid, 'default', {
    uid: 'DEFAULT'
  });
}

function setStructureSet(seriesInstanceUid, name, options = {}) {
  check(name, 'name');

  let series = getSeries(seriesInstanceUid);

  if (!series) {
    // Generate the series.
    setSeries(seriesInstanceUid);
    series = getSeries(seriesInstanceUid);
  }

  const structureSet = {
    uid: options.uid ? options.uid : generateUID(),
    name,
    isLocked: options.isLocked ? options.isLocked : false,
    visible: options.visible ? options.visible : true,
    activeROIContourIndex: options.activeROIContourIndex !== undefined ? options.activeROIContourIndex : null,
    ROIContourCollection: []
  };

  series.structureSetCollection.push(structureSet);
}

function setROIContour(seriesInstanceUid, structureSetUid, name, options = {}) {
  check(name, 'name');

  const structureSet = getStructureSet(seriesInstanceUid, structureSetUid);

  if (!structureSet) {
    // Can't generate the structureSet as not enough info (no name).
    throw new Error(`Cannot generate ROIContour, as the structureSet with ${structureSetUid} does not exist.`);
  }

  const ROIContour = {
    uid: options.uid ? options.uid : generateUID(),
    name,
    color: options.color ? options.color : getNextColor(),
    polygonCount: options.polygonCount ? options.polygonCount : 0
  };

  structureSet.ROIContourCollection.push(ROIContour);

  return ROIContour.uid;
}

function setROIContourAndSetIndexActive(seriesInstanceUid, structureSetUid, name, options = {}) {
  setROIContour(seriesInstanceUid, structureSetUid, name, options);

  const structureSet = getStructureSet(seriesInstanceUid, structureSetUid);

  const index = structureSet.ROIContourCollection.length - 1;

  structureSet.activeROIContourIndex = index;

  return index;
}

function setDeleteROIFromStructureSet(seriesInstanceUid, structureSetUid, ROIContourUid) {
  const structureSet = getStructureSet(seriesInstanceUid, structureSetUid);
  const ROIContourCollection = structureSet.ROIContourCollection;

  const ROIContourIndex = ROIContourCollection.findIndex(ROIContour => {
    return ROIContour.uid === ROIContourUid;
  });

  ROIContourCollection.splice(ROIContourIndex, 1);
}

function setStructureSetName(name, seriesInstanceUid, structureSetUid) {
  check(name, 'name');

  const structureSet = getStructureSet(seriesInstanceUid, structureSetUid);

  structureSet.name = name;
}

function setDeleteStructureSet(seriesInstanceUid, structureSetUid) {
  const series = getSeries(seriesInstanceUid);

  const structureSetCollection = series.structureSetCollection;

  const structureSetIndex = structureSetCollection.findIndex(structureSet => {
    return structureSet.uid === structureSetUid;
  });

  structureSetCollection.splice(structureSetIndex, 1);
}

function setROIContourName(name, seriesInstanceUid, structureSetUid, ROIContourUid) {
  check(name, 'name');

  const ROIContour = getROIContour(seriesInstanceUid, structureSetUid, ROIContourUid);

  ROIContour.name = name;
}

function setActiveStructureSetIndex(index, seriesInstanceUid) {
  check(index, 'index');

  const series = getSeries(seriesInstanceUid);

  series.activeStructureSetIndex = index;
}

function setActiveStructureSet(seriesInstanceUid, structureSetUid) {
  check(structureSetUid, 'structureSetUid');

  const series = getSeries(seriesInstanceUid);
  const structureSetCollection = series.structureSetCollection;

  const structureSetIndex = structureSetCollection.findIndex(structureSet => {
    return structureSet.uid === structureSetUid;
  });

  series.activeStructureSetIndex = structureSetIndex;
}

function setActiveROIContourIndex(index, seriesInstanceUid, structureSetUid = 'DEFAULT') {
  const structureSet = getStructureSet(seriesInstanceUid, structureSetUid);

  structureSet.activeROIContourIndex = index;
}

function setActiveROIContour(seriesInstanceUid, structureSetUid = 'DEFAULT', ROIContourUid) {
  check(ROIContourUid, 'ROIContourUid');

  const structureSet = getStructureSet(seriesInstanceUid, structureSetUid);
  const ROIContourCollection = structureSet.ROIContourCollection;

  const ROIContourIndex = ROIContourCollection.findIndex(ROIContour => {
    return ROIContour.uid === ROIContourUid;
  });

  structureSet.activeROIContourIndex = ROIContourIndex;
}

function incrementPolygonCount(seriesInstanceUid, structureSetUid, ROIContourUid) {
  const ROIContour = getROIContour(seriesInstanceUid, structureSetUid, ROIContourUid);

  ROIContour.polygonCount++;
}

function decrementPolygonCount(seriesInstanceUid, structureSetUid, ROIContourUid) {
  const ROIContour = getROIContour(seriesInstanceUid, structureSetUid, ROIContourUid);

  ROIContour.polygonCount--;
}

const getters = {
  series: getSeries,
  structureSet: getStructureSet,
  ROIContour: getROIContour,
  ROIContourIndex: getROIContourIndex,
  activeStructureSetIndex: getActiveStructureSetIndex,
  activeROIContourIndex: getActiveROIContourIndex,
  activeROIContour: getActiveROIContour
};

const setters = {
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
  incrementPolygonCount,
  decrementPolygonCount,
  toggleInterpolate: () => {
    state.interpolate = !state.interpolate;
  },
  toggleDisplayStats: () => {
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
  const enabledElement = cornerstone.getEnabledElement(element);

  if (!enabledElement.image) {
    return;
  }

  const seriesInstanceUid = getSeriesInstanceUidFromEnabledElement(enabledElement);

  if (!getSeries(seriesInstanceUid)) {
    // Generate series store.
    setSeries(seriesInstanceUid);
  }
}

export default {
  state,
  enabledElementCallback,
  getters,
  setters
};

const importColors = [
  'cornflowerblue',
  'firebrick',
  'goldenrod',
  'blueviolet',
  'indianred',
  'orange',
  'mediumturquoise',
  'lightcoral',
  'khaki',
  'darkmagenta',
  'lightseagreen',
  'tomato',
  'aquamarine',
  'darksalmon',
  'moccasin',
  'orchid',
  'skyblue',
  'peru'
];

// Such that first color will be the first in roiColors
let currentColorIndex = importColors.length;

/**
 * getNextColor
 *
 * @return {string} A CSS recognised color with which to render the ROI contour.
 */
export function getNextColor() {
  currentColorIndex++;
  if (currentColorIndex >= importColors.length) {
    currentColorIndex = 0;
  }

  return importColors[currentColorIndex];
}
