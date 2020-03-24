import { plateauConstants } from "../constants/plateau.constants";

export const setEndCell = (x, y) => ({
  type: plateauConstants.SET_END_CELL,
  x,
  y
});
export const setCellVisited = (x, y, orientation) => ({
  type: plateauConstants.SET_CELL_VISITED,
  x,
  y,
  orientation
});
