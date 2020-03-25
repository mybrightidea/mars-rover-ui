import { resultConstants } from "../constants/result.constants";

export const setResult = result => ({
  type: resultConstants.RESULT_CALCULATED,
  result
});
