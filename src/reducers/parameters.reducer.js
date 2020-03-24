import { parameterConstants } from "../constants/parameter.constants";
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
    case parameterConstants.SET_NAME:
      return { ...state, name: action.name };
    case parameterConstants.SET_ORIENTATION:
      return { ...state, orientation: action.orientation };
    case parameterConstants.SET_INSTRUCTIONS:
      return { ...state, instructions: action.instructions };
    case parameterConstants.SET_START_X:
      return {
        ...state,
        startX: action.startX
      };
    case parameterConstants.SET_START_Y:
      return {
        ...state,
        startY: action.startY
      };
    case parameterConstants.SET_MAX_X:
      return {
        ...state,
        maxX: action.maxX,
        startX: Math.min(state.startX, action.maxX)
      };
    case parameterConstants.SET_MAX_Y:
      return {
        ...state,
        maxY: action.maxY,
        startY: Math.min(state.startY, action.maxY)
      };
    default:
      return state;
  }
};
