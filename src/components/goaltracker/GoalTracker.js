import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Sidebar from '../sidebar/Sidebar'

const GoalTracker = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <img src='converterbg1.png' alt='' className='absolute top-0 left-0 h-80 -z-50 md:h-auto' />
      <img src='converterbg2.png' alt='' className='absolute top-52 right-0  w-[350px] h-[700px] -z-50 md:top-0 md:h-[800px] md:w-auto' />
      <img src='goaltrackerbg.svg' alt='' className='absolute bottom-0 left-0 -z-50' />

<div className='w-full flex justify-center'>

      <div className='max-w-[1440px] flex flex-col-reverse justify-between items-center gap-3 mt-0 md:mt-5 mx-4 mb-20 md:mb-96 md:flex-row xl:mx-12'>
        <div className='max-w-[500px] md:max-w-[700px] xl:max-w-[900px] place-items-center text-center md:place-items-start md:text-start'>
          <p className='text-2xl  font-semibold mt-5 md:mt-0 sm:text-5xl lg:text-7xl xl:text-8xl'>Track Your <span className='text-brandOrange '>Crypto Goals</span> in the App</p>
          <p className='text-[25px] font-semibold lg:text-[65px] my-12'>Download the App</p>
          <p className='text-lg lg:text-2xl xl:text-[26px]'>Want to save this projection and monitor your investment goals?
            The goal tracker feature is exclusively available in the Coin Cap Convert app. Download now to set targets, track your portfolio, and plan your next move with ease.</p>
          <div className='max-w-[350px] md:max-w-[550px] xl:max-w-[650px] w-full flex justify-between mt-12 gap-10 '>
            <img src='qr.svg' alt='qr' className='lg:ml-24' />
            <div className='flex flex-col gap-2'>
              <div className='w-[181px] p-3 rounded-xl flex items-center gap-5 bg-white py-2 md:py-3'>
                <img src="playstore.svg" alt="Google Play" className='h-7 w-7 md:h-9 md:w-9' />
                <div className='text-start'>
                  <p className='text-black text-[10px] font-semibold'>Get it On</p>
                  <p className='text-black text-lg font-semibold'>Google Play</p>
                </div>
              </div>
              <div className='w-[181px] p-3 rounded-xl flex items-center gap-5 bg-white py-2 md:py-3'>
                <img src="appstore.svg" alt="Google Play" className='h-7 w-7 md:h-9 md:w-9' />
                <div className='text-start'>
                  <p className='text-black text-[10px] font-semibold'>Download On The</p>
                  <p className='text-black text-xl font-semibold'>App Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-10 md:mt-0 md:h-[600px] md:min-w-[400px]'>
          <img src='mobile.png' alt='mobile' className='h-full' />
        </div>
      </div>
</div>
      <Footer />
    </>
  )
}

export default GoalTracker