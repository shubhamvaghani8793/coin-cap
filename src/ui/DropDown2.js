import React from "react";
import Select from "react-select";

export default function DropDown2({ options, selectedValue, onSelect, displayLabel }) {
  return (
    <div className="max-w-40 w-full">
      <Select
        options={options}
        value={selectedValue}
        onChange={onSelect}
        isSearchable={true}
        getOptionLabel={(e) => e.label}  // Ensure correct label display
        getOptionValue={(e) => e.label}  // Ensure search works properly
        styles={{
          control: (provided) => ({
            ...provided,
            borderRadius: "8px",
            boxShadow: "none",
            border: "none",
            background: "#23232E",
            outline: "none",
            color: "white",
          }),
          singleValue: (provided) => ({
            ...provided,
            color: "white",  // Selected text color
          }),
          input: (provided) => ({
            ...provided,
            color: "white", // Typed text color
          }),
          placeholder: (provided) => ({
            ...provided,
            color: "gray", // Placeholder text color
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? "#373740" : "#23232E",
            color: "white",
            cursor: "pointer",
          }),
          dropdownIndicator: (provided) => ({
            ...provided,
            color: "white",
          }),
          indicatorSeparator: () => ({
            display: "none",
          }),
          menu: (provided) => ({
            ...provided,
            overflowX: 'hidden',  // Hide horizontal overflow
          }),
          menuList: (provided) => ({
            overflowY: 'auto', 
            maxHeight: '200px',  
            scrollbarWidth: 'thin',
            overflowX: 'hidden',  
            msOverflowStyle: 'auto', 
            WebkitOverflowScrolling: 'touch', 
          })
        }}
      />
    </div>
  );
}