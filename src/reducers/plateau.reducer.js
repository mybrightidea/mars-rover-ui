import { plateauConstants } from "../constants/plateau.constants";
import { parametersConstants } from "../constants/parameters.constants";
const plateauReducerDefaultState = {
  plateau: []
};

const setOrientation = orientation => {
  return {
    north: orientation === "N",
    east: orientation === "E",
    south: orientation === "S",
    west: orientation === "W"
  };
};

export default (state = plateauReducerDefaultState, action) => {
  switch (action.type) {
    case parametersConstants.SET_PARAMETERS:
      const newPlateau = new Array(action.parameters.maxY + 1).fill(0).map(() =>
        new Array(action.parameters.maxX + 1).fill({
          startCell: false,
          endCell: false,
          visited: false
        })
      );
      return newPlateau.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          if (
            rowIndex === action.parameters.startY &&
            colIndex === action.parameters.startX
          ) {
            return {
              ...cell,
              startCell: true,
              visited: true,
              ...setOrientation(action.parameters.orientation)
            };
          } else {
            return cell;
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
    case plateauConstants.SET_CELL_VISITED:
      return state.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          if (rowIndex === action.y && colIndex === action.x) {
            return {
              ...cell,
              visited: true,
              ...setOrientation(action.orientation)
            };
          } else {
            return cell;
          }
        })
      );
    default:
      return state;
  }
};
