import { plateauConstants } from "../constants/plateau.constants";
import { parametersConstants } from "../constants/parameters.constants";
import { clearAllCells } from "../actions/plateau.actions";
const plateauReducerDefaultState = {
  plateau: []
};

export default (state = plateauReducerDefaultState, action) => {
  switch (action.type) {
    case plateauConstants.INITIALISE_PLATEAU:
    case plateauConstants.CLEAR_ALL_CELLS:
      return new Array(action.y + 1).fill(0).map(() =>
        new Array(action.x + 1).fill({
          startCell: false,
          endCell: false
        })
      );
    case parametersConstants.SET_PARAMETERS:
      const newPlateau = new Array(action.parameters.maxY + 1).fill(0).map(() =>
        new Array(action.parameters.maxX + 1).fill({
          startCell: false,
          endCell: false
        })
      );
      return newPlateau.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          if (
            rowIndex === action.parameters.startY &&
            colIndex === action.parameters.startX
          ) {
            return { ...cell, startCell: true };
          } else {
            return { ...cell, startCell: false };
          }
        })
      );
    case plateauConstants.SET_END_CELL:
      return state.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          if (rowIndex === action.y && colIndex === action.x) {
            return { ...cell, endCell: true };
          } else {
            return { ...cell, endCell: false };
          }
        })
      );
      break;
    case plateauConstants.SET_CELL_VISITED:
      return state.plateau.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          if (rowIndex === action.y && colIndex === action.x) {
            return { ...cell, visited: true };
          }
        })
      );
      break;
    case plateauConstants.ROTATE_RIGHT:
      return state;
      break;
    case plateauConstants.ROTATE_LEFT:
      return state;
      break;
    default:
      return state;
  }
};
