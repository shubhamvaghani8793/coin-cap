import React, { useState, useEffect } from 'react';
import ContactUs from '../contactus/ContactUs';
import Navbar from '../navbar/Navbar';
import { FaAngleDown } from "react-icons/fa6";
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';
import DropDown from '../../ui/DropDown';

const currencyOptions = [
    { value: "USD", img: "usa-flag.svg", label: "USA", code: "USD" },
    { value: "INR", img: "bitcoin.svg", label: "India", code: "INR" },
    { value: "ARS", img: "bitcoin.svg", label: "Argentine", code: "ARS" },
    { value: "AUD", img: "bitcoin.svg", label: "Australian", code: "AUD" },
    { value: "BDT", img: "bitcoin.svg", label: "Bangladeshi", code: "BDT" },
];

const cryptoOptions = [
    { value: "BTC", img: "usa-flag.svg", label: "Bitcoin", code: "BTC" },
    { value: "ETH", img: "bitcoin.svg", label: "Ethereum", code: "ETH" },
    { value: "BNB", img: "bitcoin.svg", label: "Binance Coin", code: "BNB" },
    { value: "XRP", img: "bitcoin.svg", label: "XRP", code: "XRP" },
];

const Converter = () => {
    const [convertType, setConvertType] = useState("1");
    const [selectedCrypto1, setSelectedCrypto1] = useState(cryptoOptions[0]);
    const [selectedCrypto2, setSelectedCrypto2] = useState(cryptoOptions[1]);
    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState("");

    // Reset dropdowns when conversion type changes
    useEffect(() => {
        if (convertType === "1") {
            setSelectedCrypto1(cryptoOptions[0]);
            setSelectedCrypto2(cryptoOptions[1]);
        } else if (convertType === "2") {
            setSelectedCrypto1(cryptoOptions[0]);
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
        setSelectedCrypto1(selectedCrypto2);
        setSelectedCrypto2(selectedCrypto1);
        setInputValue1(inputValue2);
        setInputValue2(inputValue1);
    };

    // Get dropdown options based on convertType
    const getOptions1 = () => (convertType === "3" ? currencyOptions : cryptoOptions);
    const getOptions2 = () => (convertType === "1" ? cryptoOptions : currencyOptions);

    return (
        <>
            <Navbar />
            <Sidebar />
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
                                        <DropDown
                                            displayLabel={true}
                                            options={getOptions1()}
                                            selectedValue={selectedCrypto1}
                                            onSelect={(selected) => {
                                                setSelectedCrypto1(selected);
                                                setInputValue1(""); 
                                            }}
                                        />
                                    </div>
                                    <input
                                        className='text-white outline-none h-full bg-[#383848] rounded-lg w-20 pl-4 sm:w-28'
                                        placeholder={selectedCrypto1?.code ? `1 ${selectedCrypto1.code}` : "Enter Amount"}
                                        value={inputValue1}
                                        onChange={(e) => setInputValue1(e.target.value)}
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
                                <DropDown
                                            displayLabel={true}
                                            options={getOptions2()}
                                            selectedValue={selectedCrypto2}
                                            onSelect={(selected) => {
                                                setSelectedCrypto2(selected);
                                                setInputValue2(""); 
                                            }}
                                        />
                                    </div>
                                    <input
                                        className='text-white bg-[#383848] rounded-lg w-20 h-full pl-4 sm:w-28 outline-none'
                                        placeholder={selectedCrypto2?.code ? `1 ${selectedCrypto2.code}` : "Enter Amount"}
                                        value={inputValue2}
                                        onChange={(e) => setInputValue2(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <hr className='border-px border-[#676767] mt-10' />
                        <p className="text-gray-400 text-sm mt-4 mb-20">1 USD = 0.92 Euro</p>
                    </div>
                </div>
            </div>
            <ContactUs />
            <Footer />
        </>
    );
};


export default Converter