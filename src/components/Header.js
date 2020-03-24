import React, { Component } from "react";
import { connect } from "react-redux";
import { setMaxXY } from "../actions/parameters.actions";
import Slider from "./Slider";

class Header extends Component {
  onSliderChange = event => {
    const target = event.target;
    const value = parseInt(target.value);
    const name = target.name;

    switch (name) {
      case "maxX":
        this.props.dispatch(setMaxXY(value, this.props.parameters.maxY));
        break;
      case "maxY":
        this.props.dispatch(setMaxXY(this.props.parameters.maxX, value));
        break;
      default:
    }
  };

  render() {
    const { maxX, maxY } = this.props.parameters;
    const min = 3;
    const max = 7;

    return (
      <div className="box-layout__title-box">
        <h1 className="box-layout__title">Mars Rover</h1>
        <div className="box-layout__header-content">
          <Slider
            title="max X:"
            min={min}
            max={max}
            value={maxX}
            name={"maxX"}
            onSliderChange={this.onSliderChange}
          />
          <Slider
            title="max Y:"
            min={min}
            max={max}
            value={maxY}
            name={"maxY"}
            onSliderChange={this.onSliderChange}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ parameters: state.parameters });

export default connect(mapStateToProps)(Header);
