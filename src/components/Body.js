import React from "react";
import { connect } from "react-redux";

const Body = props => {
  const { maxX, maxY } = props.parameters;

  //array of table rows
  const tableRows = [];

  for (let row = maxY; row >= 0; row--) {
    const cells = [];

    //first column is label
    cells.push(<td key={`labelRow${row}`}>{row}</td>);

    for (let col = 0; col <= maxX; col++) {
      cells.push(<td key={`row${row}col${col}`}></td>);
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

  return (
    <div className="box-layout__body-content">
      <div className="box-layout__content--table">
        <table>
          <tbody id="plateau">{tableRows}</tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  parameters: state.parameters
});

export default connect(mapStateToProps)(Body);
