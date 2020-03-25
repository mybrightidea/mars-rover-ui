import React, { Component } from "react";
import validator from "validator";
import { connect } from "react-redux";
import { jRover } from "../rover";
import { setCellVisited, setEndCell } from "../actions/plateau.actions";
import { setResult } from "../actions/result.actions";
import Result from "./Result";

class Footer extends Component {
  onOrientationChange = event =>
    this.props.updateParameters({ orientation: event.target.value });

  onStartPositionChange = (event, maxVal) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (validator.isInt(value, { min: 0, max: maxVal })) {
      switch (name) {
        case "startX":
          this.props.updateParameters({ startX: parseInt(value) });
          break;

        case "startY":
          this.props.updateParameters({ startY: parseInt(value) });
          break;

        default:
      }
    }
  };

  onInstructionsChange = event => {
    const value = event.target.value.toUpperCase();

    if (!value || value.match(/^[LRMlrm]*$/)) {
      this.props.updateParameters({ instructions: value });
    }
  };

  onPlayClick = e => {
    const {
      maxX,
      maxY,
      startX,
      startY,
      orientation,
      instructions
    } = this.props.parameters;

    e.preventDefault();

    const result = jRover.solveProblem([
      [maxX, maxY],
      [startX, startY, orientation],
      instructions
    ]);

    const { x, y, path } = result.roverEndStates[0];

    this.props.dispatch(setEndCell(x, y));
    this.props.dispatch(setResult(result));

    this.outputPath(path);
  };

  outputPath = path => {
    const [step] = path.slice(0, 1);
    this.props.dispatch(setCellVisited(step.x, step.y, step.orientation));

    if (path.length > 1) {
      setTimeout(() => {
        this.outputPath(path.slice(1));
      }, 750);
    }
  };

  render() {
    const {
      startX,
      startY,
      orientation,
      instructions,
      maxX,
      maxY
    } = this.props.parameters;
    return (
      <div className="box-layout__footer">
        <div className="box-layout__footer-content">
          <form className="form">
            <br />
            <table className="footer-form">
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="orientation">Orientation:</label>
                  </td>
                  <td>
                    <select
                      className="select"
                      name="orientation"
                      onChange={this.onOrientationChange}
                      value={orientation}
                    >
                      <option value="N">N</option>
                      <option value="E">E </option>
                      <option value="S">S</option>
                      <option value="W">W</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="startX">{`Start X (0 - ${maxX}):`}</label>
                  </td>
                  <td>
                    <input
                      className="text-input"
                      onChange={e => this.onStartPositionChange(e, maxX)}
                      type="number"
                      name="startX"
                      min="0"
                      max={maxX}
                      value={startX}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="startY">{`Start Y (0 - ${maxY}):`}</label>
                  </td>
                  <td>
                    <input
                      className="text-input"
                      onChange={e => this.onStartPositionChange(e, maxY)}
                      type="number"
                      name="startY"
                      min="0"
                      max={maxY}
                      value={startY}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="instructions"></label>Instructions:
                  </td>
                  <td>
                    <input
                      className="text-input"
                      type="text"
                      name="instructions"
                      placeholder="Instructions"
                      onChange={this.onInstructionsChange}
                      value={instructions}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
          <button className="button" onClick={this.onPlayClick}>
            Calculate
          </button>
          <Result />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  parameters: state.parameters,
  result: state.result
});

export default connect(mapStateToProps)(Footer);
