import React from 'react'
import { NavLink } from 'react-router-dom';

function Footer() {

  return (
    <div className='w-full flex justify-center bg-[#10101A]'>
    <div className="max-w-[1400px] w-full text-white py-8 pl-2 pr-2 flex items-start lg:pl-6 lg:pr-20">
      <img src='logo.svg' alt='' className='hidden md:flex' />
      <div className='w-full '>
        <div className="mt-3 mx-auto flex flex-col gap-6 justify-between items-center text-center md:items-start md:gap-2 md:text-start md:flex-row">
          <div className='w-full md:w-60 place-items-center'>
            <h2 className="text-orange-500 text-2xl font-bold flex items-center gap-2">
              <img src='logo.svg' alt='' className='md:hidden' />

              Coin Cap Converter
            </h2>
            <p className="mt-3 max-w-[200px] pl-2 md:pl-0 md:w-auto md:mt-6 md:text-lg">
              Convert Crypto, Calculate Market Caps, and Track Projections.
            </p>
          </div>

          <div>
            <h3 className="text-white text-2xl font-bold">Quick NavLink</h3>
            <ul className="mt-3 text-xs md:mt-6 md:text-sm">
              <li><a href="/" className="hover:text-orange-500 md:text-[18px]">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-2xl font-bold">Help</h3>
            <ul className="mt-3 text-xs md:mt-6 md:text-sm md:gap-4 flex flex-col gap-2">
                <li><a href="/terms" className="hover:text-orange-500 md:text-[18px]">Terms & Conditions</a></li>
              <li><a href="/privacypolicy" className="hover:text-orange-500 md:text-[18px]">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-2xl font-bold">Download App</h3>
            <div className='mt-3 md:mt-6 flex flex-col gap-2'>

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
        <hr className='mt-10' />
        <div className='flex items-center justify-between mt-4 flex-col sm:flex-row'>
          <p className="text-center text-gray-500 text-sm">
            © Copyright 2025, all right reserve by
          </p>

          <div className="flex justify-center gap-4 mt-5 sm:mt-0">
            <NavLink to="https://x.com/Coincapconvert"><img src='x.svg' alt='' /></NavLink>
            <NavLink to=""><img src='tiktok.svg' alt='' /></NavLink>
            <NavLink to="https://www.instagram.com/coincapconvert/"><img src='instagram.svg' alt='' /></NavLink>
            <NavLink to="www.youtube.com/@Coincapconvert"><img src='youtube.png' alt='' /></NavLink>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
}

export default Footer