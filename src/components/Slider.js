import React from "react";
const Slider = props => {
  const { min, max, value, onSliderChange, title, name } = props;
  return (
    <div className="slider__container">
      <div className="slider__title">
        {title} {value}
      </div>
      <div className="slider__control-group">
        <span className="slider__range">{min}</span>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          className="slider"
          name={name}
          onChange={onSliderChange}
        />
        <span className="slider__range">{max}</span>
      </div>
    </div>
  );
};

export default Slider;
