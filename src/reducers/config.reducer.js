import { processConstants } from "../constants/process.constants";
const configReducerDefaultState = {
  maxX: 4,
  maxY: 4
};
export default (state = configReducerDefaultState, action) => {
  switch (action.type) {
    case processConstants.SET_MAX_X:
      return { ...state, maxX: action.maxX };
    case processConstants.SET_MAX_Y:
      return { ...state, maxY: action.maxY };
    default:
      return state;
  }
};
