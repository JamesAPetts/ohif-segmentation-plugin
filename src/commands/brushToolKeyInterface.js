import { importInternalModule, store } from 'cornerstone-tools';
import { updateImage } from 'cornerstone';

import isDialogOpen from '../util/isDialogOpen.js';
import getActiveBrushToolsForElement from '../util/getActiveBrushToolsForElement.js';
import getActiveViewportEnabledElement from './getActiveViewportEnabledElement.js';

import { newSegment } from '../util/brushMetadataIO.js';

const brushModule = store.modules.brush;

// ]
export function nextSegmentForActiveViewport({ viewports }) {
  const activeBrushTools = getActiveBrushToolsForElement(viewports);

  if (!activeBrushTools.length) {
    return;
  }

  const brushTool = activeBrushTools[0];

  brushTool.nextSegment();
}

// [
export function previousSegmentForActiveViewport({ viewports }) {
  const activeBrushTools = getActiveBrushToolsForElement(viewports);

  if (!activeBrushTools.length) {
    return;
  }

  const brushTool = activeBrushTools[0];

  brushTool.previousSegment();
}

export function setBrushSize(radius) {
  brushModule.setters.radius(radius);
}

export function increaseBrushSize() {
  const oldRadius = brushModule.state.radius;
  let newRadius = Math.floor(oldRadius * 1.2);

  // If e.g. only 2 pixels big. Math.floor(2*1.2) = 2.
  // Hence, have minimum increment of 1 pixel.
  if (newRadius === oldRadius) {
    newRadius += 1;
  }

  brushModule.setters.radius(newRadius);
}

export function decreaseBrushSize() {
  const oldRadius = brushModule.state.radius;
  const newRadius = Math.floor(oldRadius * 0.8);

  setters.radius(newRadius);
}

export function addNewSegment({ viewports }) {
  const enabledElement = getActiveViewportEnabledElement(viewports.viewportSpecificData, viewports.activeViewportIndex);

  newSegment(enabledElement);
}
