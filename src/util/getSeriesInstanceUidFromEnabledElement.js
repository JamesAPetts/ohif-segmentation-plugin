import cornerstone from 'cornerstone-tools';

export default function getSeriesInstanceUidFromEnabledElement(enabledElement) {
  if (!enabledElement) {
    return;
  }

  const imageId = enabledElement.image.imageId;
  const generalSeriesModule = cornerstone.metaData.get('generalSeriesModule', imageId);

  return generalSeriesModule.seriesInstanceUID;
}
