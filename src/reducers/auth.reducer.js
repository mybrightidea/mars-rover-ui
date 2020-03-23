import { appConstants } from "../constants/app.constants";
const appReducerDefaultState = {
  title: "Mars Rover"
};

export default (state = appReducerDefaultState, action) => {
  switch (action.type) {
    case appConstants.START_RENDER:
      return { title: "Mars Rover - Rendering" };
    default:
      return state;
  }
};
