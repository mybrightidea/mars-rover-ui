import React, { Component } from "react";
import { connect } from "react-redux";
import { setParameters } from "../actions/process.actions";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.parameters };
  }

  onParametersChange = event => {
    const target = event.target;
    const name = target.name;

    const value =
      name === "orientation"
        ? target.value
        : isNaN(target.value)
        ? 0
        : parseInt(target.value);
    this.setState(
      () => ({ [name]: value }),
      () => {
        this.props.dispatch(setParameters(this.state));
      }
    );
  };

  onInstructionsChange = event => {
    const target = event.target;
    const value = target.value.toUpperCase();
    const name = target.name;

    if (!value || value.match(/^[LRMlrm]*$/)) {
      this.setState(
        () => ({ [name]: value }),
        () => {
          this.props.dispatch(setParameters(...this.state));
        }
      );
    }
  };

  onPlayClick = e => {
    e.preventDefault();
  };

  render() {
    const { startX, startY, orientation, instructions } = this.state;

    return (
      <div className="box-layout__footer">
        <form className="form">
          <label htmlFor="orientation">
            Orientation:
            <select
              name="orientation"
              onChange={this.onParametersChange}
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
            Start X (between 0 and 5):
            <input
              onChange={this.onParametersChange}
              type="number"
              name="startX"
              min="0"
              max="5"
              value={startX}
            />
          </label>
          <br />

          <label htmlFor="startY">
            Start Y (between 0 and 5):
            <input
              onChange={this.onParametersChange}
              type="number"
              name="startY"
              min="0"
              max="5"
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

const mapStateToProps = state => ({ parameters: state.parameters });

export default connect(mapStateToProps)(Footer);
