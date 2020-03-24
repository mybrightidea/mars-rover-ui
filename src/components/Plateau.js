import React, { Component } from "react";
import { connect } from "react-redux";

class Plateau extends Component {
  render() {
    const plateau = this.props.plateau;
    //array of table rows
    const tableRows = [];
    const maxY = plateau.length - 1;
    const maxX = plateau[0].length - 1;

    for (let row = maxY; row >= 0; row--) {
      const cells = [];

      //first column is label
      cells.push(<td key={`labelRow${row}`}>{row}</td>);

      for (let col = 0; col <= maxX; col++) {
        cells.push(
          <td
            key={`row${row}col${col}`}
            className={
              (plateau[row][col].startCell ? "start-cell" : "") +
              (plateau[row][col].endCell ? "end-cell" : "") +
              (plateau[row][col].rover ? "rover" : "")
            }
          ></td>
        );
      }
      tableRows.push(<tr key={`row${row}`}>{cells}</tr>);
    }
    // last row as "header"
    const th = [];
    th.push(<td key={`originCorner`}></td>);
    for (let col = 0; col <= maxX; col++) {
      th.push(<td key={`labelColcol${col}`}>{col}</td>);
    }
    tableRows.push(<tr key={`xLabels`}>{th}</tr>);

    return tableRows;
  }
}

const mapStateToProps = state => ({
  parameters: state.parameters,
  plateau: state.plateau
});

export default connect(mapStateToProps)(Plateau);
