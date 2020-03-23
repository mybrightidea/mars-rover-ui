import { processConstants } from "../constants/process.constants";
const parametersReducerDefaultState = {
  name: "Rover",
  startX: 0,
  startY: 0,
  orientation: "E",
  instructions: "LRLRMRRMLL"
};

export default (state = parametersReducerDefaultState, action) => {
  switch (action.type) {
    case processConstants.SET_PARAMETERS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
