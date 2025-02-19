import React, { useState, useEffect } from 'react';
import ContactUs from '../contactus/ContactUs';
import Navbar from '../navbar/Navbar';
import { FaAngleDown } from "react-icons/fa6";
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';
import { DummyCryptoData } from '../home/db';
import DropDown2 from '../../ui/DropDown2';
import { AllCurrencyData } from './currencyDB';

// Prepare Crypto Data for Dropdown with prices
const cryptoData = DummyCryptoData?.data.map(item => ({
    label: item.name,
    value: item.symbol,
    price: item.quote.USD.price // Store the price in USD
}));

// Prepare Currency Data for Dropdown
const currencyOptions = AllCurrencyData.supported_codes.map(([symbol, name]) => ({
    label: name,
    value: symbol
}));

const Converter = () => {
    const [convertType, setConvertType] = useState("1");
    const [selectedFrom, setSelectedFrom] = useState(null);
    const [selectedTo, setSelectedTo] = useState(null);
    const [inputFrom, setInputFrom] = useState("");
    const [inputTo, setInputTo] = useState("");

    // Dynamically set options based on conversion type
    let fromOptions = [];
    let toOptions = [];

    if (convertType === "1") {
        // Crypto to Crypto
        fromOptions = cryptoData;
        toOptions = cryptoData;
    } else if (convertType === "2") {
        // Crypto to Currency
        fromOptions = cryptoData;
        toOptions = currencyOptions;
    } else if (convertType === "3") {
        // Currency to Currency
        fromOptions = currencyOptions;
        toOptions = currencyOptions;
    }

    // Set default selections when conversion type changes
    useEffect(() => {
        if (fromOptions.length > 0) {
            setSelectedFrom(fromOptions[0]);
            setInputFrom("");
        }
        if (toOptions.length > 0) {
            if (convertType === "1" || convertType === "3") {
                setSelectedTo(toOptions[1] || toOptions[0]);
            } else {
                setSelectedTo(toOptions[0]);
            }
            setInputTo("");
        }
    }, [convertType]);

    // Call API When Dropdown Selection Changes
    useEffect(() => {
        if (convertType === "3" && inputFrom) {
            fetchExchangeRate(selectedFrom?.value, selectedTo?.value, inputFrom);
        }
    }, [selectedFrom, selectedTo]);

    // Automatically Convert When Currency Selection Changes
    useEffect(() => {
        if (convertType === "2" && inputFrom) {
            const fromCrypto = cryptoData.find(c => c.value === selectedFrom.value);
            if (fromCrypto) {
                const amountInUsd = parseFloat(inputFrom) * fromCrypto.price;
                fetchCurrencyRate(selectedTo.value, amountInUsd);
            }
        }
    }, [selectedTo, selectedFrom]);

    // Swap value of DroDown
    const swapValues = () => {
        setSelectedFrom(selectedTo);
        setSelectedTo(selectedFrom);
        setInputFrom(inputTo);
        setInputTo(inputFrom);
    };

    // Fetch Exchange Rate for Currency to Currency
    const fetchExchangeRate = async (from, to, amount) => {
        try {
            const response = await fetch(`https://v6.exchangerate-api.com/v6/2130ddb38e6fc933d9d75976/pair/${from}/${to}/${amount}`);
            const data = await response.json();

            if (data.conversion_result) {
                setInputTo(data.conversion_result.toFixed(2));
            } else {
                console.error("Exchange rate fetch failed:", data);
            }
        } catch (error) {
            console.error("Error fetching exchange rate:", error);
        }
    };

    // Fetch Exchange Rate for Crypto to Currency
    const fetchCurrencyRate = async (toCurrency, amountInUsd) => {
        try {
            const response = await fetch(`https://v6.exchangerate-api.com/v6/2130ddb38e6fc933d9d75976/pair/USD/${toCurrency}/${amountInUsd}`);
            const data = await response.json();

            if (data.conversion_result) {
                setInputTo(data.conversion_result.toFixed(2));
            } else {
                console.error("Currency exchange failed:", data);
            }
        } catch (error) {
            console.error("Error fetching currency rate:", error);
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputFrom(value);

        if (!value || !selectedFrom || !selectedTo) return;

        if (convertType === "1") { // Crypto to Crypto
            const fromCrypto = cryptoData.find(c => c.value === selectedFrom.value);
            const toCrypto = cryptoData.find(c => c.value === selectedTo.value);

            if (fromCrypto && toCrypto) {
                const convertedValue = (parseFloat(value) * fromCrypto.price) / toCrypto.price;
                setInputTo(convertedValue.toFixed(8));
            }
        } else if (convertType === "2") { // Crypto to Currency
            const fromCrypto = cryptoData.find(c => c.value === selectedFrom.value);

            if (fromCrypto) {
                const amountInUsd = parseFloat(value) * fromCrypto.price;
                fetchCurrencyRate(selectedTo.value, amountInUsd);
            }
        } else if (convertType === "3") { // Currency to Currency
            fetchExchangeRate(selectedFrom.value, selectedTo.value, value);
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

                            <div className="mt-16 flex flex-col items-center md:flex-row gap-3 md:gap-0">
                                <div className="flex items-center bg-[#23232E] w-full justify-between h-11 rounded-md gap-2">
                                    <div className='flex gap-2 items-center w-[165px] md:w-[225px] sm:w-[225px]'>
                                        <DropDown2
                                            options={fromOptions}
                                            selectedValue={selectedFrom}
                                            onSelect={setSelectedFrom}
                                            displayLabel={true}
                                        />
                                    </div>
                                    <input
                                        type='number'
                                        className='text-white outline-none h-full bg-[#383848] rounded-lg w-20 pl-2 sm:w-28'
                                        placeholder={`1 ${selectedFrom?.value || ""}`}
                                        value={inputFrom}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <img
                                    src="leftright.svg"
                                    alt="Swap"
                                    className="h-5 w-5 mx-5 rotate-90 md:rotate-0 cursor-pointer"
                                    onClick={swapValues}
                                />

                                <div className="flex items-center bg-[#23232E] w-full justify-between h-11 rounded-md gap-2">
                                    <div className='flex gap-2 items-center w-[165px] md:w-[225px] sm:w-[225px]'>
                                        <DropDown2
                                            options={toOptions}
                                            selectedValue={selectedTo}
                                            onSelect={setSelectedTo}
                                            displayLabel={true}
                                        />
                                    </div>
                                    <input
                                        type='number'
                                        className='text-white bg-[#383848] rounded-lg w-20 h-full pl-2 sm:w-28 outline-none'
                                        placeholder={`1 ${selectedTo?.value || ""}`}
                                        value={inputTo}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                        <hr className='border-px border-[#676767] mt-10' />
                        <p className="text-gray-400 text-sm mt-4 mb-20">
                            1 USD = 1
                        </p>
                    </div>
                </div>
            </div>
            <ContactUs />
            <Footer />
        </>
    );
};

export default Converter;