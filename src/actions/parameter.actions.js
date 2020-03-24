import { parameterConstants } from "../constants/parameter.constants";

export const setName = name => ({
  type: parameterConstants.SET_NAME,
  name
});
export const setOrientation = orientation => ({
  type: parameterConstants.SET_ORIENTATION,
  orientation
});
export const setInstructions = instructions => ({
  type: parameterConstants.SET_INSTRUCTIONS,
  instructions
});
export const setStartX = startX => ({
  type: parameterConstants.SET_START_X,
  startX
});
export const setStartY = startY => ({
  type: parameterConstants.SET_START_Y,
  startY
});
export const setMaxX = maxX => ({
  type: parameterConstants.SET_MAX_X,
  maxX
});
export const setMaxY = maxY => ({
  type: parameterConstants.SET_MAX_Y,
  maxY
});
