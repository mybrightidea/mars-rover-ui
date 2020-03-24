import { parametersConstants } from "../constants/parameters.constants";
const parametersReducerDefaultState = {
  name: "Rover",
  startX: 0,
  startY: 0,
  orientation: "E",
  instructions: "LRLRMRRMLL",
  maxX: 5,
  maxY: 5
};

export default (state = parametersReducerDefaultState, action) => {
  switch (action.type) {
    case parametersConstants.SET_NAME:
      return { ...state, name: action.name };
    case parametersConstants.SET_START_ORIENTATION:
      return { ...state, orientation: action.orientation };
    case parametersConstants.SET_INSTRUCTIONS:
      return { ...state, instructions: action.instructions };
    case parametersConstants.SET_START_XY:
      return {
        ...state,
        startX: action.startX,
        startY: action.startY
      };
    case parametersConstants.PLATEAU_RESIZE:
      return {
        ...state,
        maxX: action.maxX,
        maxY: action.maxY,
        startX: Math.min(state.startX, action.maxX),
        startY: Math.min(state.startY, action.maxY)
      };
    default:
      return state;
  }
};
