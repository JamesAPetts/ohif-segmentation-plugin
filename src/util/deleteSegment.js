import { store, globalImageIdSpecificToolStateManager, getToolState } from 'cornerstone-tools';
import { updateImage } from 'cornerstone';

// TODO OHIF.viewerbase.viewportUtils.getEnabledElementForActiveElement();
import { OHIF } from 'meteor/ohif:core';

const brushModule = store.modules.brush;
const globalToolStateManager = globalImageIdSpecificToolStateManager;

export default function deleteSegment(seriesInstanceUid, segmentIndex) {
  const toolStateManager = globalToolStateManager.saveToolState();

  // Delete metadata
  brushModule.setters.metadata(seriesInstanceUid, segmentIndex, undefined);

  // Delete pixeldata
  const activeEnabledElement = OHIF.viewerbase.viewportUtils.getEnabledElementForActiveElement();
  const element = activeEnabledElement.element;
  const stackToolState = getToolState(element, 'stack');
  const imageIds = stackToolState.data[0].imageIds;

  for (let i = 0; i < imageIds.length; i++) {
    const imageToolState = toolStateManager[imageIds[i]];

    if (
      imageToolState &&
      imageToolState.brush &&
      imageToolState.brush.data[segmentIndex] &&
      imageToolState.brush.data[segmentIndex].pixelData
    ) {
      const brushData = imageToolState.brush.data[segmentIndex];

      const length = brushData.pixelData.length;

      brushData.pixelData = new Uint8ClampedArray(length);
      brushData.invalidated = true;
    }
  }

  cornerstone.updateImage(activeEnabledElement.element);
}
