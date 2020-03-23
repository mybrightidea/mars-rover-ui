import React, { Component } from "react";
import { connect } from "react-redux";
import { setMaxX, setMaxY } from "../actions/process.actions";
import Slider from "./Slider";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.config };
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

const mapStateToProps = state => ({ config: state.config });

export default connect(mapStateToProps)(Header);
