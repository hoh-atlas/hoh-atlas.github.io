import React, { useState } from "react";
import Select, { components } from "react-select";

const dot = (color = 'transparent') => ({
    alignItems: 'center',
    display: 'flex',

    ':before': {
        backgroundColor: color,
        borderRadius: 10,
        content: '" "',
        display: 'block',
        marginRight: 8,
        height: 10,
        width: 10,
    },
});

const Option = (props) => (
  <components.Option {...props} className="country-option">
    {props.data.image && <img src={props.data.image} alt="logo" className="option-icon" style={{ maxWidth: '20px', maxHeight: '20px', marginRight: '5px' }} /> }
    <span className="option-label">{props.data.label}</span>
  </components.Option>
);

const SingleValue = ({ children, ...props }) => (
  <components.SingleValue {...props} style={{ maxWidth: '30px' }}>
    {props.data.image && <img src={props.data.image} alt="s-logo" className="selected-icon" style={{ maxWidth: '20px', maxHeight: '24px', marginRight: '5px' }} /> }
    <span className="selected-label">{children}</span>
  </components.SingleValue>
);

const SelectBox = ({ options, width, height, color, selectedOption, onOptionChange, style }) => {

  const handleChange = (value) => {
    onOptionChange(value);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: width,
      margin: "0 auto",
      backgroundColor: color,
      minHeight: height,
      height: height,
    }),
    valueContainer: (provided) => ({
      ...provided,
      height: height,
      padding: '0 6px',
    }),
    input: (provided, state) => ({
      ...provided,
      margin: '0px',
    }),
    /*indicatorSeparator: state => ({
      display: 'none',
    }),*/
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: height,
    }),
    menu: (provided) => ({
      ...provided,
      width: width,
      margin: "auto",
      left: 0,
      right: 0,
      backgroundColor: color,
    }),
    option: (provided, { data }) => ({
      ...provided,
      padding: "5px",
      fontSize: "14px",
      ...(data.dotColor ? dot(data.dotColor) : {}),
    })
  };

  return (
    <div id="select-container" style={style}>
      <Select
        value={selectedOption}
        options={options}
        onChange={handleChange}
        styles={customStyles}
        components={{
          Option,
          SingleValue
        }}
      />
    </div>
  );
};

export default SelectBox;