import { processConstants } from "../constants/process.constants";

export const setParameters = parameters => ({
  type: processConstants.SET_PARAMETERS,
  payload: parameters
});

export const setMaxX = maxX => ({
  type: processConstants.SET_MAX_X,
  maxX
});
export const setMaxY = maxY => ({
  type: processConstants.SET_MAX_Y,
  maxY
});
