import React from 'react'
import ContactUs from '../contactus/ContactUs'

const Converter = () => {
    return (
        <>
            <div className='relative place-items-center'>
                    <img src='converterbg1.png' alt='' className='absolute top-0 left-0 h' />
                    <img src='converterbg2.png' alt='' className='absolute top-0 right-0 h-[800px]' />
                <div className='max-w-4xl w-full '>
                    <p className='text-[75px] text-white text-center font-semibold max-w-[800px] w-full'>Crypto & <span className='bg-gradient-to-r from-[#F3510D] to-[#F67611] bg-clip-text text-transparent'>Currency</span> Converter</p>
                    <div className="border border-[#676767] rounded-xl py-6 px-6 mt-10 bg-transparent">
                        <div className='place-items-center'>
                            {/* Dropdown */}
                            <div className="mb-4 flex justify-center">
                                <select className="bg-[#23232E] text-white p-4 rounded-md w-72 ">
                                    <option>Crypto to Crypto</option>
                                </select>
                            </div>

                            {/* Crypto Selection */}
                            <div className="mt-16 flex items-center">
                                {/* Ethereum Box */}
                                <div className="flex items-center bg-[#23232E] px-4 py-2 rounded-md gap-2">
                                    <img src="ethereum.svg" alt="Ethereum" className="h-5 w-5" />
                                    <select className="bg-transparent outline-none w-48 text-white cursor-pointer">
                                        <option className='bg-[#23232e]'>Ethereum</option>
                                    </select>
                                    <p className='text-white bg-[#383848] rounded-lg px-4 py-2 ml-3'>$3.600</p>
                                </div>

                                {/* Swap Icon */}
                                <img src="leftright.svg" alt="Ethereum" className="h-5 w-5 mx-5" />

                                {/* Bitcoin Box */}
                                <div className="flex items-center bg-[#23232E] px-4 py-2 rounded-md gap-2">
                                    <img src="bitcoin.svg" alt="Ethereum" className="h-5 w-5" />
                                    <select className="bg-transparent outline-none w-48 text-white cursor-pointer">
                                        <option className='bg-transparent'>Bitcoin</option>

                                    </select>
                                    <p className='text-white bg-[#383848] rounded-lg px-4 py-2 ml-3'>$3.600</p>
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
        </>
    )
}

export default Converter