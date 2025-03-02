import React, { memo } from 'react'
import SmallCalculator from '../smallCalculator/SmallCalculator'


function Popular({cryptoAllData, currencyFlag, selectedCurrency, setSelectedCrypto1, setSelectedCrypto2}) {
  
  const getStaticPair = () => {
    // 1, 1027, 5426, 5994, 74, 52, 6636, 1839, 2
  }

  console.log(currencyFlag);
  
  if (!cryptoAllData) {
    return (
      <p className='text-white'>loading....</p>
    )
  }

  return (
    <div className='flex flex-col relative max-w-[1400px] mx-auto items-center px-3 mt-[200px] text-center'>
        <p className='text-3xl sm:text-5xl font-semibold'>Most Popular Crypto</p>
        <p className='text-brandOrange text-3xl sm:text-5xl font-semibold mt-1 sm:mt-3'>Market Cap Calculation</p>

        <div className='grid sm:grid-cols-2 w-full gap-5 max-w-[840px] mt-10'>
            <SmallCalculator 
              selectedCurrency={selectedCurrency}
              leftCrypto={cryptoAllData[0]}
              rightCrypto={cryptoAllData[1]}
              currencyFlag={currencyFlag}
              setSelectedCrypto1={setSelectedCrypto1}
              setSelectedCrypto2={setSelectedCrypto2}
            />
            <SmallCalculator
              selectedCurrency={selectedCurrency}
              leftCrypto={cryptoAllData[1]}
              rightCrypto={cryptoAllData[2]}
              currencyFlag={currencyFlag}
              setSelectedCrypto1={setSelectedCrypto1}
              setSelectedCrypto2={setSelectedCrypto2}
            />
            <SmallCalculator
              selectedCurrency={selectedCurrency}
              leftCrypto={cryptoAllData[2]}
              rightCrypto={cryptoAllData[3]}
              currencyFlag={currencyFlag}
              setSelectedCrypto1={setSelectedCrypto1}
              setSelectedCrypto2={setSelectedCrypto2}
            />
            <SmallCalculator
              selectedCurrency={selectedCurrency}
              leftCrypto={cryptoAllData[4]}
              rightCrypto={cryptoAllData[5]}
              currencyFlag={currencyFlag}
              setSelectedCrypto1={setSelectedCrypto1}
              setSelectedCrypto2={setSelectedCrypto2}
            />
            <SmallCalculator
              selectedCurrency={selectedCurrency}
              leftCrypto={cryptoAllData[6]}
              rightCrypto={cryptoAllData[7]}
              currencyFlag={currencyFlag}
              setSelectedCrypto1={setSelectedCrypto1}
              setSelectedCrypto2={setSelectedCrypto2}
            />
            <SmallCalculator
              selectedCurrency={selectedCurrency}
              leftCrypto={cryptoAllData[8]}
              rightCrypto={cryptoAllData[9]}
              currencyFlag={currencyFlag}
              setSelectedCrypto1={setSelectedCrypto1}
              setSelectedCrypto2={setSelectedCrypto2}
            />
            <SmallCalculator
              selectedCurrency={selectedCurrency}
              leftCrypto={cryptoAllData[10]}
              rightCrypto={cryptoAllData[11]}
              currencyFlag={currencyFlag}
              setSelectedCrypto1={setSelectedCrypto1}
              setSelectedCrypto2={setSelectedCrypto2}
            />
            <SmallCalculator
              selectedCurrency={selectedCurrency}
              leftCrypto={cryptoAllData[12]}
              rightCrypto={cryptoAllData[13]}
              currencyFlag={currencyFlag}
              setSelectedCrypto1={setSelectedCrypto1}
              setSelectedCrypto2={setSelectedCrypto2}
            />
        </div>
    </div>
  )
}

export default memo(Popular)