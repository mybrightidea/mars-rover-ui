import { gridConstants } from "../constants/grid.constants";
const gridReducerDefaultState = {
  grid: []
};

export default (state = gridReducerDefaultState, action) => {
  switch (action.type) {
    case gridConstants.CLEAR_ALL_CELLS:
      return new Array(action.maxY)
        .fill(0)
        .map(() => new Array(action.maxX).fill({}));
      break;
    case gridConstants.SET_START_CELL:
      return state.grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          if (rowIndex === action.y && colIndex === action.x) {
            return { ...cell, startCell: true };
          } else {
            return { ...cell, startCell: false };
          }
        })
      );
      break;
    case gridConstants.SET_END_CELL:
      return state.grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          if (rowIndex === action.y && colIndex === action.x) {
            return { ...cell, endCell: true };
          } else {
            return { ...cell, endCell: false };
          }
        })
      );
      break;
    case gridConstants.SET_CELL_VISITED:
      return state.grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          if (rowIndex === action.y && colIndex === action.x) {
            return { ...cell, visited: true };
          }
        })
      );
      break;
    case gridConstants.ROTATE_RIGHT:
      return state;
      break;
    case gridConstants.ROTATE_LEFT:
      return state;
      break;
    default:
      return state;
  }
};
