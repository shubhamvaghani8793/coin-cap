import React, { useState } from 'react'
import ContactUs from '../contactus/ContactUs'
import Navbar from '../navbar/Navbar'
import { FaAngleDown } from "react-icons/fa6";
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';
import DropDown from '../../ui/DropDown';

const cryptoOptions = [
    { value: "BTC", img: "usa-flag.svg", label: "Bitcoin", code: "BTC" },
    { value: "ETH", img: "bitcoin.svg", label: "Etherium", code: "ETH" },
    { value: "BNB", img: "bitcoin.svg", label: "Solana", code: "BNB" },
    { value: "XRP", img: "bitcoin.svg", label: "Tether", code: "XRP" },
  ];

const Converter = () => {

    const [convertType, setConvertType] = useState(1);
    const [selectedCrypto1, setSelectedCrypto1] = useState(cryptoOptions[0]);
    const [selectedCrypto2, setSelectedCrypto2] = useState(cryptoOptions[1]);

    return (
        <>
            <Navbar />
            <Sidebar />
            <img src='converterbg1.png' alt='' className='absolute top-0 left-0 h-80 -z-50 md:h-auto' />
            <img src='converterbg2.png' alt='' className='absolute top-52 right-0  w-[350px] h-[700px] -z-50 md:top-0 md:h-[800px] md:w-auto' />
            <div className='place-items-center pt-5 mx-5 md:mx-0 md:mt-20'>
                <div className='max-w-4xl w-full place-items-center'>
                    <p className='text-3xl text-white text-center font-semibold max-w-[300px] w-full sm:max-w-[500px] sm:text-5xl md:text-7xl md:max-w-[800px]'>Crypto & <span className='bg-gradient-to-r from-[#F3510D] to-[#F67611] bg-clip-text text-transparent'>Currency</span> Converter</p>
                    <div className="border border-[#676767] w-full md:w-auto rounded-xl mx-2 py-6 px-4 mt-10 bg-transparent sm:px-6">
                        <div className='place-items-center'>
                            {/* Dropdown */}
                            <div className="relative mb-4 flex justify-center w-full md:w-auto">
                                <select 
                                    value={convertType}
                                    className="bg-[#23232E] outline-none appearance-none text-white p-3 rounded-md w-full md:w-72 ">
                                    <option value="1">Crypto to Crypto</option>
                                    <option value="2">Crypto to Currency</option>
                                    <option value="3">Currency to Currency</option>
                                </select>

                                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                    <FaAngleDown />
                                </div>
                            </div>

                            {/* Crypto Selection */}
                            <div className="mt-16 flex flex-col items-center md:flex-row gap-3 md:gap-0">
                                {/* Ethereum Box */}
                                <div className="flex items-center bg-[#23232E] w-full justify-between h-11 rounded-md gap-2">
                                    <div className='flex gap-2 items-center w-[125px] md:w-[225px] sm:w-auto'>

                                        <DropDown 
                                            displayLable={true}
                                            options={cryptoOptions}
                                            selectedValue={selectedCrypto1}
                                            onSelect={setSelectedCrypto1}
                                        />
                                    
                                    </div>
                                    <input 
                                        className='text-white outline-none h-full bg-[#383848] rounded-lg w-20 pl-4 sm:w-28' 
                                        placeholder='$3.600' 
                                    />
                                </div>

                                {/* Swap Icon */}
                                <img src="leftright.svg" alt="Ethereum" className="h-5 w-5 mx-5 rotate-90 md:rotate-0" />

                                {/* Bitcoin Box */}
                                <div className="flex items-center bg-[#23232E] w-full justify-between h-11 rounded-md gap-2">
                                    <div className='flex gap-2 items-center w-[125px] md:w-[225px] sm:w-auto'>
                                        

                                        <DropDown
                                            displayLable={true}
                                            options={cryptoOptions}
                                            selectedValue={selectedCrypto2}
                                            onSelect={setSelectedCrypto2}
                                        />

                                        {/* <img src="bitcoin.svg" alt="Ethereum" className="h-5 w-5" />
                                        <select className="bg-transparent outline-none w-24 text-white cursor-pointer sm:w-48">
                                            <option style={{ backgroundColor: "#23232E", color: "white" }} value="usd">
                                                Bitcoin
                                            </option>
                                            <option style={{ backgroundColor: "#23232E", color: "white" }} value="usd">
                                                Bitcoin
                                            </option>
                                        </select> */}
                                    </div>
                                    <input  
                                        className='text-white bg-[#383848] rounded-lg w-20 h-full pl-4 sm:w-28 outline-none' 
                                        placeholder='$3.600' 
                                    />
                                </div>
                            </div>
                        </div>
                        <hr className='border-px border-[#676767] mt-10' />

                        {/* Exchange Rate */}
                        <p className="text-gray-400 text-sm mt-4 mb-20">1 USD = 0.92 Euro</p>
                    </div>
                </div>
            </div>
            <ContactUs />
            <Footer />
        </>
    )
}

export default Converter