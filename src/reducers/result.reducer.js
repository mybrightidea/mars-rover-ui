import { resultConstants } from "../constants/result.constants";
import { parametersConstants } from "../constants/parameters.constants";
const resultReducerDefaultState = { isAvailable: false };

export default (state = resultReducerDefaultState, action) => {
  switch (action.type) {
    case resultConstants.RESULT_CALCULATED:
      return { isAvailable: true, ...action.result };
    case parametersConstants.SET_PARAMETERS:
      return resultReducerDefaultState;
    default:
      return state;
  }
};
