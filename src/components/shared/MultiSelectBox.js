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

const MultiValue = (props) => (
    <components.MultiValue {...props}>
      {props.data.image ? (
        <img src={props.data.image} alt="m-logo" className="multi-selected-icon" style={{ maxWidth: '20px', maxHeight: '20px', marginRight: '5px' }} />
      ) : (
        <span className="multi-selected-label">{props.children}</span>
      )}
    </components.MultiValue>
);  

const MultiSelectBox = ({ options, width, color, selectedOptions, onOptionsChange, placeholder, style }) => {
  const [selectHeight, setSelectHeight] = useState('auto');

  const handleChange = (value) => {
    onOptionsChange(value);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: width,
      margin: "0 auto",
      backgroundColor: color,
      height: selectHeight,
    }),
    valueContainer: (provided) => ({
      ...provided,
      height: '100%',
      padding: '0 6px',
    }),
    input: (provided, state) => ({
      ...provided,
      margin: '0px',
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: '100%',
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
    }),
    multiValueRemove: (provided, state) => ({
      ...provided,
      ':hover': {
        backgroundColor: '#558BB7',
        color: 'white',
      },
    }),
    clearIndicator: (provided, state) => ({
      ...provided,
      ':hover': {
        color: '#558BB7',
      },
    }),
  };

  return (
    <div id="multi-select-container" style={style}>
      <Select
        isMulti
        value={selectedOptions}
        options={options}
        onChange={handleChange}
        styles={customStyles}
        components={{
          Option,
          MultiValue
        }}
        placeholder={placeholder}
      />
    </div>
  );
};

export default MultiSelectBox;