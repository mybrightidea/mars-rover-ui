import { plateauConstants } from "../constants/plateau.constants";

export const setEndCell = (x, y) => ({
  type: plateauConstants.SET_END_CELL,
  x,
  y
});
export const setCellVisited = (x, y) => ({
  type: plateauConstants.SET_CELL_VISITED,
  x,
  y
});
export const clearAllCells = (x, y) => ({
  type: plateauConstants.CLEAR_ALL_CELLS,
  x,
  y
});
export const intitlialisePlateau = (x, y) => ({
  type: plateauConstants.INITIALISE_PLATEAU,
  x,
  y
});
