import React from 'react'
import bitcon from '../../assets/p-bitcoin.svg'
import etherium from '../../assets/p-etherium.svg'
import swapIcon from '../../assets/swapIcon.svg'

function SmallCalculator({leftCrypto, rightCrypto, currencyFlag, selectedCurrency, setSelectedCrypto1, setSelectedCrypto2}) {

    const cryptoPrice = (price) => {
        let newCurrency = price * currencyFlag
        const valueStr = newCurrency?.toString();
        const [integerPart] = valueStr?.split(".");
        if (integerPart?.length >= 3) {
            return newCurrency?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        } else {
            return newCurrency?.toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 4 })
        }
    }

    console.log(leftCrypto);
    console.log(rightCrypto);
    
    const handleCrypto = () => {
        setSelectedCrypto1(leftCrypto)
        setSelectedCrypto2(rightCrypto)
        window.scrollTo(0, 0)
    }

  return (
    <div className='bg-[#67676733] w-full rounded-md border px-4 py-4 border-[#676767] gap-3 flex justify-between overflow-x-hidden'>
        {/* left coin */}
        <div className='flex items-center gap-3 w-full'>
            <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${leftCrypto?.id}.png`} alt="coin" className='max-w-5 max-h-5 sm:max-w-7 sm:max-h-7' />

            <div className='leading-5 truncate text-left'>
                <p className='text-left'>{leftCrypto?.label || '--'}</p>
                <p className='text-brandOrange font-semibold truncate
                    bg-gradient-to-r from-[#F3510D] to-[#F67611] text-transparent bg-clip-text
                '>
                    <span className='text-sm'>{selectedCurrency?.code} </span>
                   <span className='text-sm'>{leftCrypto?.quote?.USD?.price && cryptoPrice(leftCrypto?.quote?.USD?.price) || '0.00'}</span> 
                </p>
            </div>
        </div>

        {/* Swap Button */}
        <button className='hover:opacity-[0.7]' onClick={() => handleCrypto()}>
            <img src={swapIcon} alt="arrowIcon" className='max-w-7 min-w-7'/>
        </button>

        {/* right coin */}
        <div className='flex items-center gap-3 w-full justify-end'>

            <div className='leading-5 truncate'>
                <p className='text-right'>{rightCrypto?.label || '--'}</p>
                <p className='text-brandOrange truncate text-right'>
                    <span className='text-sm'>{selectedCurrency?.code} </span>
                    <span className='text-sm'>
                        {rightCrypto?.quote?.USD?.price && cryptoPrice(rightCrypto?.quote?.USD?.price) || '0.00'}
                    </span>
                </p>
            </div>
        <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${rightCrypto?.id}.png`} alt="coin" className='max-w-5 max-h-5 sm:max-w-7 sm:max-h-7' />
        </div>
    </div>
  )
}

export default SmallCalculator