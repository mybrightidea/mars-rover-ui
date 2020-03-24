import { parametersConstants } from "../constants/parameters.constants";

export const setName = name => ({
  type: parametersConstants.SET_NAME,
  name
});
export const setParameters = parameters => ({
  type: parametersConstants.SET_PARAMETERS,
  parameters
});
