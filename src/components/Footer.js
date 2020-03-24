import React, { Component } from "react";
import validator from "validator";
import { connect } from "react-redux";
import {
  setOrientation,
  setStartX,
  setStartY,
  setInstructions
} from "../actions/parameter.actions";

class Footer extends Component {
  onOrientationChange = event =>
    this.props.dispatch(setOrientation(event.target.value));

  onStartPositionChange = (event, maxVal) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (validator.isInt(value, { min: 0, max: maxVal })) {
      switch (name) {
        case "startX":
          this.props.dispatch(setStartX(parseInt(value)));
          break;
        case "startY":
          this.props.dispatch(setStartY(parseInt(value)));
          break;
        default:
      }
    }
  };

  onInstructionsChange = event => {
    const target = event.target;
    const value = target.value.toUpperCase();
    const name = target.name;

    if (!value || value.match(/^[LRMlrm]*$/)) {
      this.props.dispatch(setInstructions(value));
    }
  };

  onPlayClick = e => {
    e.preventDefault();
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
          <button onClick={this.onPlayClick}>Play</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  parameters: state.parameters
});

export default connect(mapStateToProps)(Footer);
