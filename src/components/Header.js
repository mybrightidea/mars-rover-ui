import React, { Component } from "react";
import { connect } from "react-redux";
import { setMaxX, setMaxY } from "../actions/parameter.actions";
import Slider from "./Slider";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxX: this.props.parameters.maxX,
      maxY: this.props.parameters.maxY
    };
  }
  onSliderChange = event => {
    const target = event.target;
    const value = parseInt(target.value);
    const name = target.name;

    this.setState(
      () => ({ [name]: value }),
      () => {
        switch (name) {
          case "maxX":
            this.props.dispatch(setMaxX(value));
            break;
          case "maxY":
            this.props.dispatch(setMaxY(value));
            break;
          default:
        }
      }
    );
  };

  render() {
    const { maxX, maxY } = this.state;
    const min = 3;
    const max = 7;

    return (
      <div className="box-layout__title-box">
        <h1 className="box-layout__title">Mars Rover</h1>
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
    );
  }
}

const mapStateToProps = state => ({ parameters: state.parameters });

export default connect(mapStateToProps)(Header);
