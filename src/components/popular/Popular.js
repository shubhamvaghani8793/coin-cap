import React from 'react'
import SmallCalculator from '../smallCalculator/SmallCalculator'


function Popular() {
  return (
    <div className='flex flex-col relative max-w-[1400px] mx-auto items-center px-3 text-center'>
        <p className='text-3xl sm:text-5xl font-semibold'>Most Popular Crypto</p>
        <p className='text-brandOrange text-3xl sm:text-5xl font-semibold mt-1 sm:mt-3'>Market Cap Calculation</p>

        <div className='grid sm:grid-cols-2 w-full gap-5 max-w-[840px] mt-10'>
            <SmallCalculator />
            <SmallCalculator/>
            <SmallCalculator/>
            <SmallCalculator/>
            <SmallCalculator/>
            <SmallCalculator/>
            <SmallCalculator/>
            <SmallCalculator/>
        </div>
    </div>
  )
}

export default Popular