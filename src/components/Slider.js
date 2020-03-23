import React, { Component } from "react";
const Slider = props => {
  const { min, max, value, onSliderChange, title, name } = props;
  return (
    <div className="slider_container">
      <div className="slider_title">
        {title} {value}
      </div>
      <div className="slider_control_group">
        <span className="slider_range">{min}</span>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          className="slider"
          name={name}
          onChange={onSliderChange}
        />
        <span className="slider_range">{max}</span>
      </div>
    </div>
  );
};

export default Slider;
