import React, { useState } from "react";
import Select from "react-select";


export default function DropDown({options, selectedValue, onSelect, displayLable}) {  

  return (
    <div className="max-w-40 w-full ">
      <Select
        options={options}
        value={selectedValue}
        onChange={onSelect}
        isSearchable={true}
        getOptionLabel={(e) => (
          <div className="flex items-center">
            {/* <img src={e.img} alt="" className="w-5 h-5 mr-2" /> */}
            <span className="text-lg">{displayLable ? e.label : e.code}</span>
          </div>
        )}
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
        }}
      />
    </div>
  );
}
