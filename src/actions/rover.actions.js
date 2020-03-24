import { roverConstants } from "../constants/rover.constants";

export const rotateRight = (x, y) => ({
  type: roverConstants.ROTATE_RIGHT,
  x,
  y
});
export const rotateLeft = (x, y) => ({
  type: roverConstants.ROTATE_LEFT,
  x,
  y
});
