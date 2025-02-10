import React from 'react'

function ProjectedGrowth() {
  return (
    <div className='flex flex-col relative max-w-[1400px] mx-auto mt-20 items-center px-3 h-[90vh]'>
        
        <div className='blurryDot-md absolute -left-[200px] top-[100px] -z-50'></div>

        <h1 className='text-3xl sm:text-5xl font-semibold capitalize text-center'>
            ETH projected  
            <span className='text-brandOrange'> growth Calculator </span>
        </h1>

        <p className='mt-6 text-sm text-center sm:text-[18px]'>
            What will my current investment of ETH be at a 
            <span className='text-brandOrange'> $2T </span>  
            Market Cap?
        </p>
    
        <div className='mt-6 w-full max-w-[600px]'>
            <label htmlFor="" className=''>I Have Invested</label>
            <div className='flex gap-2 mt-1 items-center'>
                <input 
                    type="number" 
                    placeholder='Enter Invested Amount'
                    className='py-1 sm:py-3 px-2 rounded-md text-black outline-none w-full text-xl focus:outline-brandOrange'
                />
                <button className='linearBtn px-4 py-[6px] h-full sm:py-[14px] rounded-md'>
                    3.15X
                </button>
            </div>

            <div className='bg-[#67676733] mt-6 border border-[#676767] rounded-md py-3 px-4 flex justify-center items-center gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f57310" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-combined"><path d="M12 16v5"/><path d="M16 14v7"/><path d="M20 10v11"/><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"/><path d="M4 18v3"/><path d="M8 14v7"/></svg>
                <span className='text-sm sm:text-lg'> <span className='text-brandOrange font-medium'> 3.15x </span> my current investment of $1,000  =  3,150 </span>
            </div>
        </div>
        <div className='flex mt-12 w-full max-w-[800px]'>       
            <div className='text-center w-1/3'>   
                <p className='sm:text-6xl text-3xl font-semibold mb-2 text-brandOrange'>$2,150</p>
                <p className='font-semibold'>Expected Profit</p>
            </div>
            <div className='border-l-2 border-r-2 border-[#a0a0a0] text-center w-1/3'>   
                <p className='sm:text-6xl text-3xl font-semibold mb-2 text-brandOrange'>234%</p>
                <p className='font-semibold'>Expected Profit</p>
            </div>
            <div className='text-center w-1/3'>   
                <p className='sm:text-6xl text-3xl font-semibold mb-2 text-brandOrange'>$2,150</p>
                <p className='font-semibold'>Expected Profit</p>
            </div>
        </div>

        <button className='linearBtn mt-16 px-7 py-1 sm:py-2'>Add to goal tracker</button>
    </div>
  )
}

export default ProjectedGrowth