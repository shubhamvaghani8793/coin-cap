import React, { useState, useEffect } from 'react';
import ContactUs from '../contactus/ContactUs';
import Navbar from '../navbar/Navbar';
import { FaAngleDown } from "react-icons/fa6";
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';
import DropDown2 from '../../ui/DropDown2';
import { getAllCryptoList, getCurrencyFlag } from '../../api/apiService';
import { Puff } from 'react-loader-spinner';

const Converter = () => {
    const [cryptoData, setCryptoData] = useState([]);
    const [currencyOptions, setCurrencyOptions] = useState([]);
    const [convertType, setConvertType] = useState("1");
    const [selectedCrypto1, setSelectedCrypto1] = useState(null);
    const [selectedCrypto2, setSelectedCrypto2] = useState(null);
    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState("");
    const [isSwapped, setIsSwapped] = useState(false);
    const [lastEditedInput, setLastEditedInput] = useState(null);
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        const fetchCryptoAndCurrencyData = async () => {
            try {
                const [cryptoResponse, currencyResponse] = await Promise.all([
                    getAllCryptoList(),
                    getCurrencyFlag()
                ]);

                if (cryptoResponse?.data) {
                    const cryptoList = cryptoResponse?.data?.data.map(item => ({
                        label: item.name,
                        value: item.symbol,
                        id: item.id,
                        price: item.quote.USD.price
                    }));
                    setCryptoData(cryptoList);
                    
                    // Set initial crypto selection immediately after data is available
                    if (cryptoList.length > 0) {
                        setSelectedCrypto1(cryptoList[0]);
                    }
                }

                if (currencyResponse?.supported_codes) {
                    const currencyList = currencyResponse?.supported_codes?.map(([symbol, name]) => ({
                        label: name,
                        value: symbol
                    }));
                    setCurrencyOptions(currencyList);
                    
                    // If we need to set a currency option for the second dropdown
                    if (convertType === "2" && currencyList.length > 0) {
                        setSelectedCrypto2(currencyList[0]);
                    }
                }

                // After both data types are loaded, set the second dropdown based on conversion type
                if (cryptoResponse?.data && currencyResponse?.supported_codes) {
                    const cryptoList = cryptoResponse?.data?.data.map(item => ({
                        label: item.name,
                        value: item.symbol,
                        id: item.id,
                        price: item.quote.USD.price
                    }));
                    
                    if (convertType === "1" && cryptoList.length > 1) {
                        setSelectedCrypto2(cryptoList[1]); // Set second crypto if available
                    } else if (convertType === "1" && cryptoList.length === 1) {
                        setSelectedCrypto2(cryptoList[0]); // Use first crypto if that's all we have
                    }
                }

            } catch (error) {
                console.error("Error fetching crypto or currency data:", error);
            }
        };

        fetchCryptoAndCurrencyData();
    }, []);

    // Dynamically set options based on conversion type
    let fromOptions = [];
    let toOptions = [];

    if (convertType === "1") {
        fromOptions = cryptoData;
        toOptions = cryptoData;
    } else if (convertType === "2") {
        fromOptions = cryptoData;
        toOptions = currencyOptions;
    } else if (convertType === "3") {
        fromOptions = currencyOptions;
        toOptions = currencyOptions;
    }

    // Set default selections when conversion type changes
    useEffect(() => {
        setIsSwapped(false);
        if (fromOptions.length > 0) {
            setSelectedCrypto1(fromOptions[0]);
            setInputValue1("");
        }
        if (toOptions.length > 0) {
            if (convertType === "1" || convertType === "3") {
                setSelectedCrypto2(toOptions[1] || toOptions[0]);
            } else {
                setSelectedCrypto2(toOptions[0]);
            }
            setInputValue2("");
        }
    }, [convertType]);

    // Recalculate conversion when convertType changes
    useEffect(() => {
        if (!inputValue1 || !selectedCrypto1 || !selectedCrypto2) return;

        if (timer) clearTimeout(timer);

        const newTimer = setTimeout(() => {
            if (convertType === "1") {
                const fromCrypto = cryptoData.find(c => c.value === selectedCrypto1.value);
                const toCrypto = cryptoData.find(c => c.value === selectedCrypto2.value);

                if (fromCrypto && toCrypto) {
                    const convertedValue = (parseFloat(inputValue1) * fromCrypto.price) / toCrypto.price;
                    setInputValue2(convertedValue.toFixed(2));
                }
            } else if (convertType === "2") {
                if (!isSwapped) {
                    const fromCrypto = cryptoData.find(c => c.value === selectedCrypto1.value);
                    if (fromCrypto) {
                        const amountInUsd = parseFloat(inputValue1) * fromCrypto.price;
                        fetchCurrencyRate(selectedCrypto2.value, amountInUsd);
                    }
                } else {
                    const fromCrypto = cryptoData.find(c => c.value === selectedCrypto2.value);
                    if (fromCrypto && inputValue1) {
                        reverseFetchCurrencyRate(selectedCrypto1.value, inputValue1, selectedCrypto2.value);
                    }
                }
            } else if (convertType === "3") {
                fetchExchangeRate(selectedCrypto1.value, selectedCrypto2.value, inputValue1);
            }
        }, 500);

        setTimer(newTimer);

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [convertType, selectedCrypto1, selectedCrypto2]);

    const handleInputChange = (value, isSecondInput) => {
        if (timer) clearTimeout(timer);

        if (isSecondInput) {
            setInputValue2(value);
            setLastEditedInput('input2');
        } else {
            setInputValue1(value);
            setLastEditedInput('input1');
        }

        const newTimer = setTimeout(() => {
            if (!value || !selectedCrypto1 || !selectedCrypto2) return;

            if (convertType === "1") {
                const fromCrypto = cryptoData.find(c => c.value === (isSecondInput ? selectedCrypto2.value : selectedCrypto1.value));
                const toCrypto = cryptoData.find(c => c.value === (isSecondInput ? selectedCrypto1.value : selectedCrypto2.value));

                if (fromCrypto && toCrypto) {
                    const convertedValue = (parseFloat(value) * fromCrypto.price) / toCrypto.price;
                    if (isSecondInput) {
                        setInputValue1(convertedValue.toFixed(2));
                    } else {
                        setInputValue2(convertedValue.toFixed(2));
                    }
                }
            } else if (convertType === "2") {
                if (!isSwapped) {
                    const fromCrypto = cryptoData.find(c => c.value === selectedCrypto1.value);
                    if (isSecondInput) {
                        reverseFetchCurrencyRate(selectedCrypto2.value, value, selectedCrypto1.value);
                    } else {
                        if (fromCrypto) {
                            const amountInUsd = parseFloat(value) * fromCrypto.price;
                            fetchCurrencyRate(selectedCrypto2.value, amountInUsd);
                        }
                    }
                } else {
                    const fromCrypto = cryptoData.find(c => c.value === selectedCrypto2.value);
                    if (isSecondInput) {
                        if (fromCrypto) {
                            const amountInUsd = parseFloat(value) * fromCrypto.price;
                            fetchCurrencyRate(selectedCrypto1.value, amountInUsd);
                        }
                    } else {
                        reverseFetchCurrencyRate(selectedCrypto1.value, value, selectedCrypto2.value);
                    }
                }
            } else if (convertType === "3") {
                handleCurrencyToCurrency(value, isSecondInput);
            }
        }, 500);

        setTimer(newTimer);
    };

    const fetchExchangeRate = async (from, to, amount) => {
        if (timer) clearTimeout(timer);

        const newTimer = setTimeout(async () => {
            try {
                const response = await fetch(`https://v6.exchangerate-api.com/v6/a89b68d4d19dcc0a50c3fd58/pair/${from}/${to}/${amount}`);
                const data = await response.json();

                if (data.conversion_result) {
                    setInputValue2(data.conversion_result.toFixed(2));
                }
            } catch (error) {
                console.error("Error fetching exchange rate:", error);
            }
        }, 500);

        setTimer(newTimer);
    };

    const fetchCurrencyRate = async (toCurrency, amountInUsd) => {
        if (timer) clearTimeout(timer);

        const newTimer = setTimeout(async () => {
            try {
                const response = await fetch(
                    `https://v6.exchangerate-api.com/v6/a89b68d4d19dcc0a50c3fd58/pair/USD/${toCurrency}/${amountInUsd}`
                );
                const data = await response.json();
                if (convertType === "2" && isSwapped) {
                    setInputValue1(data.conversion_result.toFixed(2));
                } else {
                    if (data.conversion_result) {
                        setInputValue2(data.conversion_result.toFixed(2));
                    }
                }
            } catch (error) {
                console.error("Error fetching currency rate:", error);
            }
        }, 500);

        setTimer(newTimer);
    };

    const handleCurrencyToCurrency = async (value, isSecondInput) => {
        if (timer) clearTimeout(timer);

        const newTimer = setTimeout(async () => {
            try {
                const amount = parseFloat(value);
                if (isSecondInput) {
                    const response = await fetch(
                        `https://v6.exchangerate-api.com/v6/a89b68d4d19dcc0a50c3fd58/pair/${selectedCrypto2.value}/${selectedCrypto1.value}/${amount}`
                    );
                    const data = await response.json();
                    if (data.conversion_result) {
                        setInputValue1(data.conversion_result.toFixed(2));
                    }
                } else {
                    const response = await fetch(
                        `https://v6.exchangerate-api.com/v6/a89b68d4d19dcc0a50c3fd58/pair/${selectedCrypto1.value}/${selectedCrypto2.value}/${amount}`
                    );
                    const data = await response.json();
                    if (data.conversion_result) {
                        setInputValue2(data.conversion_result.toFixed(2));
                    }
                }
            } catch (error) {
                console.error("Error in currency to currency conversion:", error);
            }
        }, 500);

        setTimer(newTimer);
    };

    const reverseFetchCurrencyRate = async (fromCurrency, amount, toCrypto) => {
        if (timer) clearTimeout(timer);

        const newTimer = setTimeout(async () => {
            try {
                const response = await fetch(`https://v6.exchangerate-api.com/v6/a89b68d4d19dcc0a50c3fd58/pair/${fromCurrency}/USD/${amount}`);
                const data = await response.json();

                if (convertType === "2" && isSwapped) {
                    const amountInUsd = data.conversion_result;
                    const cryptoPrice = cryptoData.find(c => c.value === toCrypto)?.price || 0;
                    if (cryptoPrice > 0) {
                        const cryptoAmount = amountInUsd / cryptoPrice;
                        setInputValue2(cryptoAmount.toFixed(2));
                    }
                } else {
                    if (data.conversion_result) {
                        const amountInUsd = data.conversion_result;
                        const cryptoPrice = cryptoData.find(c => c.value === toCrypto)?.price || 0;
                        if (cryptoPrice > 0) {
                            const cryptoAmount = amountInUsd / cryptoPrice;
                            setInputValue1(cryptoAmount.toFixed(2));
                        }
                    }
                }
            } catch (error) {
                console.error("Error in reverse currency conversion:", error);
            }
        }, 500);

        setTimer(newTimer);
    };

    const swapValues = () => {
        if (convertType !== "2") {
            const tempCrypto1 = selectedCrypto1;
            setSelectedCrypto1(selectedCrypto2);
            setSelectedCrypto2(tempCrypto1);
        } else {
            const tempCrypto1 = selectedCrypto1;
            const tempCrypto2 = selectedCrypto2;

            if (!isSwapped) {
                setSelectedCrypto1(currencyOptions.find(opt => opt.label === tempCrypto2.label) || currencyOptions[0]);
                setSelectedCrypto2(cryptoData.find(opt => opt.label === tempCrypto1.label) || cryptoData[0]);
            } else {
                setSelectedCrypto1(cryptoData.find(opt => opt.label === tempCrypto2.label) || cryptoData[0]);
                setSelectedCrypto2(currencyOptions.find(opt => opt.label === tempCrypto1.label) || currencyOptions[0]);
            }
        }

        const tempValue1 = inputValue1;
        setInputValue1(inputValue2);
        setInputValue2(tempValue1);
        setLastEditedInput(lastEditedInput === 'input1' ? 'input2' : 'input1');
        setIsSwapped(!isSwapped);
    };

    const getOptions1 = () => {
        if (convertType === "2") {
            return isSwapped ? currencyOptions : cryptoData;
        }
        return convertType === "3" ? currencyOptions : cryptoData;
    };

    const getOptions2 = () => {
        if (convertType === "2") {
            return isSwapped ? cryptoData : currencyOptions;
        }
        return convertType === "1" ? cryptoData : currencyOptions;
    };

    return (
        <>
            <Navbar />
            <Sidebar />

            <img src='converterbg1.png' alt='' className='absolute top-0 left-0 h-80 -z-50 md:h-auto' />
            <img src='converterbg2.png' alt='' className='absolute top-0 right-0 h-80 -z-50 md:h-auto w-[300px]' />
            <div className='flex justify-center pt-5 mx-5 md:mx-0 md:mt-20'>
                <div className='max-w-4xl w-full flex flex-col items-center'>
                    <p className='text-3xl text-white text-center font-semibold max-w-[300px] w-full sm:max-w-[500px] sm:text-5xl md:text-7xl md:max-w-[800px]'>
                        Crypto & <span className='bg-gradient-to-r from-[#F3510D] to-[#F67611] bg-clip-text text-transparent'>Currency</span> Converter
                    </p>
                    <div className="border border-[#676767] w-full md:w-auto rounded-xl mx-2 py-6 px-4 mt-10 bg-transparent sm:px-6">
                        <div className='flex flex-col items-center'>
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

                            <div className="mt-16 flex flex-col w-full items-center md:flex-row gap-3 md:gap-0">
                                <div className="flex items-center bg-[#23232E] w-full justify-between h-11 rounded-md gap-2">
                                    <div className='flex gap-2 items-center w-[165px] md:w-[225px] sm:w-[225px]'>
                                        <DropDown2
                                            options={getOptions1()}
                                            selectedValue={selectedCrypto1}
                                            onSelect={setSelectedCrypto1}
                                            displayLabel={true}
                                        />
                                    </div>
                                    <input
                                        type='number'
                                        className='text-white outline-none h-full bg-[#383848] rounded-lg w-20 pl-2 sm:w-32'
                                        placeholder={`1 ${selectedCrypto1?.value || ""}`}
                                        value={inputValue1}
                                        onChange={(e) => handleInputChange(e.target.value, false)}
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
                                            options={getOptions2()}
                                            selectedValue={selectedCrypto2}
                                            onSelect={setSelectedCrypto2}
                                            displayLabel={true}
                                        />
                                    </div>
                                    <input
                                        type='number'
                                        className='text-white bg-[#383848] rounded-lg w-20 h-full pl-2 sm:w-32 outline-none'
                                        placeholder={`1 ${selectedCrypto2?.value || ""}`}
                                        value={inputValue2}
                                        onChange={(e) => handleInputChange(e.target.value, true)}
                                    />
                                </div>
                            </div>
                        </div>
                        <hr className='border-px border-[#676767] mt-10' />
                        <p className="text-gray-400 text-sm mt-4 mb-20">
                            {inputValue1} {selectedCrypto1?.value} = {inputValue2} {selectedCrypto2?.value}
                        </p>
                    </div>
                </div>
            </div>
            <ContactUs />
            <Footer />
        </>
    );
}
export default Converter;