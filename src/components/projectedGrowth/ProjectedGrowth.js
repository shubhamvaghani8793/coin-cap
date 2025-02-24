import React, { useMemo, useState } from 'react'

function ProjectedGrowth({selectedCrypto1, selectedCrypto2, getXreturn2, selectedCurrency, currencyFlag}) {

  const getXValue = getXreturn2() || 0;
  const [inputField, setInputField] = useState(0);
  const [profit, setProfit] = useState(0);
  
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

  const getProfit = useMemo(() => {

    const value = (getXValue * inputField)
    const valueStr = value.toString()
    const [integerPart] = valueStr?.split(".");
    setProfit(value)
    if (integerPart?.length >= 2) {
      return `${value?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }else{
      return `${value?.toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3})}`
    }
  },[inputField])
      
  return (
    <div className='flex flex-col relative max-w-[1400px] mx-auto mt-[200px] items-center px-3'>
        
        <div className='blurryDot-md absolute -left-[200px] top-[100px] -z-50'></div>

        <h1 className='text-3xl sm:text-5xl font-semibold capitalize text-center'>
            ETH projected  
            <span className='text-brandOrange'> growth Calculator </span>
        </h1>

        <p className='mt-6 text-sm text-center sm:text-[18px]'>
            What will my current investment of
            <span> {selectedCrypto1 && selectedCrypto1?.code} </span>
            be at a 
            <span className='text-brandOrange font-semibold'> ${selectedCrypto2 && getMarketCap(selectedCrypto2?.quote?.USD?.market_cap)} </span>  
            Market Cap?
        </p>
    
        <div className='mt-6 w-full max-w-[600px]'>
            <label htmlFor="" className=''>I Have Invested</label>
            <div className='flex gap-2 mt-1 items-center'>
                <input 
                    type="number"
                    value={inputField}
                    onChange={(e) => setInputField(e.target.value)}
                    placeholder='Enter Invested Amount'
                    className='py-1 sm:py-3 px-4 rounded-md text-black outline-none w-full text-xl focus:outline-brandOrange'
                />
                <button className='linearBtn px-4 py-[6px] h-full sm:py-[14px] rounded-md'>
                    {`${getXreturn2().toFixed(2)}x`}
                </button>
            </div>

            <div className='bg-[#67676733] mt-6 border border-[#676767] rounded-md py-3 px-4 flex justify-center items-center gap-3 overflow-x-auto'>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f57310" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-combined"><path d="M12 16v5"/><path d="M16 14v7"/><path d="M20 10v11"/><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"/><path d="M4 18v3"/><path d="M8 14v7"/></svg>

                <span className='text-sm sm:text-lg'> <span className='text-brandOrange font-medium'> {`${getXreturn2().toFixed(2)}x`} </span> my current investment of {selectedCurrency?.code || '$'}     {Number(inputField).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || 0.0} = {getProfit} </span>
            </div>
        </div>
        <div className='flex flex-col sm:flex-row items-center sm:align-items-unset justify-center mt-12 w-full sm:justify-around max-w-[800px]'>       
            <div className='flex flex-col items-center justify-center text-center w-fit flex-1'>   
                <p className='sm:text-5xl text-3xl font-semibold mb-2 text-brandOrange px-4 max-w-[450px] break-all'>{`${selectedCurrency?.code || '$'} `}{`${((parseInt(profit) - Number(inputField).toFixed(4)).toLocaleString('en-US'))}`}</p>
                <p className='font-semibold'>Expected Profit</p>
            </div>

            <div className='flex flex-col items-center my-7 py-7 justify-center border-t-2 sm:border-t-0 sm:border-b-0 border-b-2 sm:border-l-2 sm:border-r-2 border-[#a0a0a0] text-center w-[95%] sm:w-fit flex-1'>   
                <p className='sm:text-5xl text-3xl font-semibold mb-2 text-brandOrange px-4 '>{`${parseInt(((parseInt(profit) - Number(inputField).toFixed(4)) / inputField) * 100) || 0}`}%</p>
                <p className='font-semibold'>Rate of Return</p>
            </div>

            <div className='flex flex-col items-center justify-center text-center w-fit flex-1'>   
                <p className='sm:text-5xl text-3xl font-semibold mb-2 text-brandOrange px-4 max-w-[450px] break-all'>{`${selectedCurrency?.code || '$'} `}{`${parseInt(Number(getXValue) * Number(inputField)).toLocaleString('en-US')}`}</p>
                <p className='font-semibold'>Total Return</p>
            </div>
        </div>

        <button className='linearBtn mt-16 px-7 py-1 sm:py-2'>Add to goal tracker</button>
    </div>
  )
}

export default ProjectedGrowth