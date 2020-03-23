import { appConstants } from "../constants/app.constants";

export const startRender = () => dispatch =>
  dispatch({ type: appConstants.START_RENDER });
