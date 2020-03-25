import React from "react";
import { connect } from "react-redux";

const Result = props => {
  let jsx = null;
  if (props.result.isAvailable) {
    const { maxX, maxY, roverEndStates } = props.result;
    const { x, y, orientation } = roverEndStates[0];
    jsx = (
      <div className="result">{`Results: end point ${x},${y} facing ${orientation}`}</div>
    );
  }

  return <div className="result__container">{jsx}</div>;
};

const mapStateToProps = state => ({
  result: state.result
});

export default connect(mapStateToProps)(Result);
