  import React, { useMemo, useState } from "react";
  import Select from "react-select";

  export default function DropDown({
      options, selectedValue, onSelect, displayLable, isForCrypto=false,
      selectedCurrency
    }) {  
    
    const [searchInput, setSearchInput] = useState("");

    const getMarketCap = (value) => {
      if (value >= 1_000_000_000_000) {
        return `${(value / 1_000_000_000_000).toFixed(2)}T`;  // Trillions
      } else if (value >= 1_000_000_000) {
        return `${Math.ceil(value / 1_000_000_000)}B`;  // Billions
      } else if (value >= 1_000_000) {
        return `${(value / 1_000_000).toFixed(2)}M`;  // Millions
      } else {
        return value.toString();  // For values smaller than a million
      }
    }

    const handleInputChage = (input) => {
      setSearchInput(input)
    }

    let filteredOptions = [];
    if (isForCrypto) {
      filteredOptions = options?.filter(option => 
            option?.label?.toLowerCase()?.includes(searchInput?.toLowerCase())
          ).slice(0, 10);
    }else{
      filteredOptions = options?.filter(option => 
            option?.label?.toLowerCase()?.includes(searchInput?.toLowerCase())
          ).slice(0, 10);
    }

    return (
      <div className={` ${isForCrypto ? 'min-w-40' : ''} max-w-fit w-full `}>
        <Select
          options={filteredOptions || options}
          value={selectedValue}
          onChange={onSelect}
          isSearchable={true}
          onInputChange={handleInputChage}
          getOptionLabel={(e) => (
            <div className="flex items-center justify-between">
              {/* <img src={e.img} alt="" className="w-5 h-5 mr-2" /> */}
              <span className="">{displayLable ? e.label : e.code}</span>
              {isForCrypto && (
                <>
                  {/* console.log(e.quote.USD.market_cap) */}
                  <span 
                    className="text-[12px] font-bold ml-2 bg-gradient-to-r mt-[2px] from-[#bd6742] to-[#F67611] bg-clip-text text-transparent">
                    {getMarketCap(e?.quote?.USD?.market_cap)}
                  </span>  
                </>
              )}
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
