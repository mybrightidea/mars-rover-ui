import React from "react";
import { connect } from "react-redux";

const Body = props => {
  console.log(props);
  const { maxX, maxY } = props.config;

  const th = [];
  th.push(<td></td>);

  for (let c = 0; c <= maxX; c++) {
    th.push(<td key={c}>{c}</td>);
  }

  const tableRows = [];
  for (let row = maxY; row >= 0; row--) {
    const cells = [];
    cells.push(<td>{row}</td>);
    for (let c = 0; c <= maxX; c++) {
      cells.push(<td key={c}></td>);
    }
    tableRows.push(<tr key={row}>{cells}</tr>);
  }
  tableRows.push(th);

  return (
    <div className="box-layout__content">
      <div className="box-layout__content--table">
        <table>
          <tbody id="plateau">{tableRows}</tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  config: state.config
});

export default connect(mapStateToProps)(Body);
