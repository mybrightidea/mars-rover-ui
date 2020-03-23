import React, { Component } from "react";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="box-layout__footer">
        <form className="form" onsubmit="">
          <label for="orientation">
            Orientation:
            <select id="orientation" onchange="onParametersChange()">
              <option value="N">N</option>
              <option value="E" selected>
                E
              </option>
              <option value="S">S</option>
              <option value="W">W</option>
            </select>{" "}
          </label>
          <br />

          <label for="startX">
            Start X (between 0 and 5):
            <input
              onchange="onParametersChange()"
              type="number"
              id="startX"
              name="startX"
              min="0"
              max="5"
              value="0"
            />
          </label>
          <br />

          <label for="startY">
            Start Y (between 0 and 5):
            <input
              onchange="onParametersChange()"
              type="number"
              id="startY"
              name="startY"
              min="0"
              max="5"
              value="0"
            />
          </label>
          <br />

          <input
            type="text"
            id="instructions"
            placeholder="Instructions"
            onchange="onInstructionsChange(this)"
            className="text-input"
            value="RRMMLM"
          />
          <br />
        </form>
        <button onclick="onPlayClick()">Play</button>
      </div>
    );
  }
}

export default Footer;
