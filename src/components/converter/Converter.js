import React, { useState, useEffect } from 'react';
import ContactUs from '../contactus/ContactUs';
import Navbar from '../navbar/Navbar';
import { FaAngleDown } from "react-icons/fa6";
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';
import { DummyCryptoData } from '../home/db';
import { DummyCurrencyData } from './converterDb';
import DropDown2 from '../../ui/DropDown2';

const cryptoData = DummyCryptoData?.data.map(item => ({
    label: item.symbol,
    value: item
}));
const currencyOptions = Object.keys(DummyCurrencyData.conversion_rates).map(key => ({
    label: key,
    value: DummyCurrencyData.conversion_rates[key]
}));

const Converter = () => {
    const [convertType, setConvertType] = useState("1");
    const [selectedCrypto1, setSelectedCrypto1] = useState(cryptoData[0]);
    const [selectedCrypto2, setSelectedCrypto2] = useState(cryptoData[1]);
    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState("");

    // Reset dropdowns when conversion type changes
    useEffect(() => {
        if (convertType === "1") {
            setSelectedCrypto1(cryptoData[0]);
            setSelectedCrypto2(cryptoData[1]);
        } else if (convertType === "2") {
            setSelectedCrypto1(cryptoData[0]);
            setSelectedCrypto2(currencyOptions[0]);
        } else {
            setSelectedCrypto1(currencyOptions[0]);
            setSelectedCrypto2(currencyOptions[1]);
        }
        setInputValue1("");
        setInputValue2("");
    }, [convertType]);

    // Function to swap values
    const swapValues = () => {
        const tempCrypto1 = selectedCrypto1;
        setSelectedCrypto1(selectedCrypto2);
        setSelectedCrypto2(tempCrypto1);
        const tempValue1 = inputValue1;
        setInputValue1(inputValue2);
        setInputValue2(tempValue1);
    };

    // Get dropdown options based on convertType
    const getOptions1 = () => (convertType === "3" ? currencyOptions : cryptoData);
    const getOptions2 = () => (convertType === "1" ? cryptoData : currencyOptions);

    // Function to handle conversion
    const handleConversion = (value, isInput1) => {
        if (!selectedCrypto1 || !selectedCrypto2) return;
    
        const valueNum = parseFloat(value);
        if (isNaN(valueNum)) return; // Prevent NaN issues
    
        let convertedValue = 0;
    
        if (convertType === "1") { // Crypto to Crypto
            if (isInput1) {
                convertedValue = (valueNum * selectedCrypto1.value.quote.USD.price) / selectedCrypto2.value.quote.USD.price;
            } else {
                convertedValue = (valueNum * selectedCrypto2.value.quote.USD.price) / selectedCrypto1.value.quote.USD.price;
            }
        } else if (convertType === "2") { // Crypto to Currency
            if (isInput1) {
                convertedValue = valueNum * selectedCrypto1.value.quote.USD.price * selectedCrypto2.value;
            } else {
                convertedValue = valueNum / (selectedCrypto1.value.quote.USD.price * selectedCrypto2.value);
            }
        } else { // Currency to Currency
            if (isInput1) {
                convertedValue = (valueNum * selectedCrypto2.value) / selectedCrypto1.value;
            } else {
                convertedValue = (valueNum * selectedCrypto1.value) / selectedCrypto2.value;
            }
        }
    
        if (isInput1) {
            setInputValue1(value);
            setInputValue2(convertedValue.toFixed(6)); // Show result in second input
        } else {
            setInputValue2(value);
            setInputValue1(convertedValue.toFixed(6)); // Show result in first input
        }
    };
    
    
    
    

    // Function to handle dropdown selection
    const handleSelect1 = (selected) => {
        setSelectedCrypto1(selected);
        if (inputValue1) {
            handleConversion(inputValue1, true);
        }
    };

    const handleSelect2 = (selected) => {
        setSelectedCrypto2(selected);
        if (inputValue2) {
            handleConversion(inputValue2, false);
        }
    };

    return (
        <>
            <Navbar />
            <Sidebar />
            
          <img src='converterbg1.png' alt='' className='absolute top-0 left-0 h-80 -z-50 md:h-auto' />
          <img src='converterbg2.png' alt='' className='absolute top-0 right-0 h-80 -z-50 md:h-auto w-[300px]' />
            <div className='place-items-center pt-5 mx-5 md:mx-0 md:mt-20'>
                <div className='max-w-4xl w-full place-items-center'>
                    <p className='text-3xl text-white text-center font-semibold max-w-[300px] w-full sm:max-w-[500px] sm:text-5xl md:text-7xl md:max-w-[800px]'>
                        Crypto & <span className='bg-gradient-to-r from-[#F3510D] to-[#F67611] bg-clip-text text-transparent'>Currency</span> Converter
                    </p>
                    <div className="border border-[#676767] w-full md:w-auto rounded-xl mx-2 py-6 px-4 mt-10 bg-transparent sm:px-6">
                        <div className='place-items-center'>
                            {/* Conversion Type Selector */}
                            <div className="relative mb-4 flex justify-center w-full md:w-auto">
                                <select
                                    value={convertType}
                                    onChange={(e) => setConvertType(e.target.value)}
                                    className="bg-[#23232E] outline-none appearance-none text-white p-3 rounded-md w-full md:w-72"
                                >
                                    <option value="1">Crypto to Crypto</option>
                                    <option value="2">Crypto to Currency</option>
                                    <option value="3">Currency to Currency</option>
                                </select>
                                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                    <FaAngleDown />
                                </div>
                            </div>

                            {/* Dropdown and Input Fields */}
                            <div className="mt-16 flex flex-col items-center md:flex-row gap-3 md:gap-0">
                                {/* First Dropdown */}
                                <div className="flex items-center bg-[#23232E] w-full justify-between h-11 rounded-md gap-2">
                                    <div className='flex gap-2 items-center w-[165px] md:w-[225px] sm:w-[225px]'>
                                        <DropDown2
                                            displayLabel={true}
                                            options={getOptions1()}
                                            selectedValue={selectedCrypto1}
                                            onSelect={handleSelect1}
                                        />
                                    </div>
                                    <input
                                        className='text-white outline-none h-full bg-[#383848] rounded-lg w-20 pl-2 sm:w-28'
                                        placeholder={selectedCrypto1?.label ? `1 ${selectedCrypto1.label}` : "Enter Amount"}
                                        value={inputValue1}
                                        onChange={(e) => handleConversion(e.target.value, true)}
                                    />
                                </div>

                                {/* Swap Icon */}
                                <img
                                    src="leftright.svg"
                                    alt="Swap"
                                    className="h-5 w-5 mx-5 rotate-90 md:rotate-0 cursor-pointer"
                                    onClick={swapValues} // Call swap function on click
                                />

                                {/* Second Dropdown */}
                                <div className="flex items-center bg-[#23232E] w-full justify-between h-11 rounded-md gap-2">
                                <div className='flex gap-2 items-center w-[165px] md:w-[225px] sm:w-[225px]'>
                                <DropDown2
                                            displayLabel={true}
                                            options={getOptions2()}
                                            selectedValue={selectedCrypto2}
                                            onSelect={handleSelect2}
                                        />
                                    </div>
                                    <input
                                        className='text-white bg-[#383848] rounded-lg w-20 h-full pl-2 sm:w-28 outline-none'
                                        placeholder={selectedCrypto2?.label ? `1 ${selectedCrypto2.label}` : "Enter Amount"}
                                        value={inputValue2}
                                        onChange={(e) => handleConversion(e.target.value, false)}
                                    />
                                </div>
                            </div>
                        </div>
                        <hr className='border-px border-[#676767] mt-10' />
                        <p className="text-gray-400 text-sm mt-4 mb-20">{inputValue1} {selectedCrypto1.label} = {inputValue2} {selectedCrypto2.label}</p>
                    </div>
                </div>
            </div>
            <ContactUs />
            <Footer />
        </>
    );
};

export default Converter;