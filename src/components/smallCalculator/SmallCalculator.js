import React from 'react'
import bitcon from '../../assets/p-bitcoin.svg'
import etherium from '../../assets/p-etherium.svg'
import swapIcon from '../../assets/swapIcon.svg'

function SmallCalculator() {
  return (
    <div className='bg-[#67676733] w-full rounded-md border px-4 py-4 border-[#676767] gap-3 flex justify-between'>
        {/* left coin */}
        <div className='flex items-center gap-3'>
            <img src={bitcon} alt="bitcoin" className='w-10' />

            <div className='leading-5 truncate'>
                <p>Bitcoin</p>
                <p className='text-brandOrange font-semibold truncate
                    bg-gradient-to-r from-[#F3510D] to-[#F67611] text-transparent bg-clip-text
                '>$45353545.35</p>
            </div>
        </div>

        {/* Swap Button */}
        <button className='hover:opacity-[0.7]'>
            <img src={swapIcon} alt="arrowIcon" className='max-w-7 min-w-7'/>
        </button>

        {/* right coin */}
        <div className='flex items-center gap-3 '>
            <img src={etherium} alt="bitcoin" className='w-10' />

            <div className='leading-5 truncate'>
                <p>Etherium</p>
                <p className='text-brandOrange truncate'>$34535353.34</p>
            </div>
        </div>
    </div>
  )
}

export default SmallCalculator