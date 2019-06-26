import { importInternalModule, getToolForElement } from 'cornerstone-tools';
import { createNewVolume } from '../util/freehandNameIO.js';
import isDialogOpen from '../util/isDialogOpen.js';
import getActiveViewportEnabledElement from './getActiveViewportEnabledElement.js';
import getActiveFreehandToolsForElement from './getActiveFreehandToolsForElement.js';

export function newROI({ viewports }) {
  const activeFreehandTools = getActiveFreehandToolsForElement(viewports);

  if (!activeFreehandTools.length) {
    return;
  }

  createNewVolume();
}

export function cancelDrawing({ viewports }) {
  const enabledElement = getActiveViewportEnabledElement(viewports.viewportSpecificData, viewports.activeViewportIndex);

  const activeFreehandTools = getActiveFreehandToolsForElement(viewports);

  if (!activeFreehandTools.length) {
    return;
  }

  activeFreehandTools[0].cancelDrawing(enabledElement.element);
}
