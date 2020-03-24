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
      this.props.dispatch(setInstructionss(value));
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
        <form className="form">
          <label htmlFor="orientation">
            Orientation:
            <select
              name="orientation"
              onChange={this.onOrientationChange}
              value={orientation}
            >
              <option value="N">N</option>
              <option value="E">E </option>
              <option value="S">S</option>
              <option value="W">W</option>
            </select>
          </label>
          <br />

          <label htmlFor="startX">
            {`Start X (between 0 and ${maxX}):`}
            <input
              onChange={e => this.onStartPositionChange(e, maxX)}
              type="number"
              name="startX"
              min="0"
              max={maxX}
              value={startX}
            />
          </label>
          <br />

          <label htmlFor="startY">
            {`Start Y (between 0 and ${maxY}):`}
            <input
              onChange={e => this.onStartPositionChange(e, maxY)}
              type="number"
              name="startY"
              min="0"
              max={maxY}
              value={startY}
            />
          </label>
          <br />

          <input
            type="text"
            name="instructions"
            placeholder="Instructions"
            onChange={this.onInstructionsChange}
            className="text-input"
            value={instructions}
          />
          <br />
        </form>
        <button onClick={this.onPlayClick}>Play</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  parameters: state.parameters
});

export default connect(mapStateToProps)(Footer);
