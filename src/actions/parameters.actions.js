import { parametersConstants } from "../constants/parameters.constants";

export const setName = name => ({
  type: parametersConstants.SET_NAME,
  name
});
export const setStartOrientation = orientation => ({
  type: parametersConstants.SET_START_ORIENTATION,
  orientation
});
export const setInstructions = instructions => ({
  type: parametersConstants.SET_INSTRUCTIONS,
  instructions
});
export const setStartXY = (startX, startY) => ({
  type: parametersConstants.SET_START_XY,
  startX,
  startY
});
export const setMaxXY = (maxX, maxY) => {
  return {
    type: parametersConstants.PLATEAU_RESIZE,
    maxX,
    maxY
  };
};
