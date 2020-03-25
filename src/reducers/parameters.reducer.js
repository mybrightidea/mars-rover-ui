import { parametersConstants } from "../constants/parameters.constants";
const parametersReducerDefaultState = {
  name: "Rover",
  startX: 2,
  startY: 2,
  orientation: "E",
  instructions: "",
  maxX: 5,
  maxY: 5
};

export default (state = parametersReducerDefaultState, action) => {
  switch (action.type) {
    case parametersConstants.SET_PARAMETERS:
      return {
        ...state,
        ...action.parameters,
        startX: Math.min(action.parameters.startX, action.parameters.maxX),
        startY: Math.min(action.parameters.startY, action.parameters.maxY)
      };
    default:
      return state;
  }
};
