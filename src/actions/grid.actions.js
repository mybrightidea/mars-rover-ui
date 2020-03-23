import { gridConstants } from "../constants/grid.constants";

export const setStartCell = (x, y) => ({
  type: gridConstants.SET_START_CELL,
  x,
  y
});
export const setEndCell = (x, y) => ({
  type: gridConstants.SET_END_CELL,
  x,
  y
});
export const rotateRight = (x, y) => ({
  type: gridConstants.ROTATE_RIGHT,
  x,
  y
});
export const rotateLeft = (x, y) => ({
  type: gridConstants.ROTATE_LEFT,
  x,
  y
});
export const setCellVisited = (x, y) => ({
  type: gridConstants.SET_CELL_VISITED,
  x,
  y
});
export const clearAllCells = (x, y) => ({
  type: gridConstants.CLEAR_ALL_CELLS,
  x,
  y
});
