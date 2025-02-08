import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="bg-[#10101A] text-white py-8 pl-6 pr-20 flex items-start">
      <img src='logo.svg' alt='' />
      <div className='w-full'>
        <div className="mt-2 mx-auto flex justify-between">
          <div className='max-w-60'>
            <h2 className="text-orange-500 text-2xl font-bold flex items-center gap-2">
              Coin Cap Converter
            </h2>
            <p className="text-lg mt-6">
              Convert Crypto, Calculate Market Caps, and Track Projections.
            </p>
          </div>

          <div>
            <h3 className="text-white text-2xl font-bold">Quick Link</h3>
            <ul className="mt-6 text-sm ">
              <li><a href="/" className="hover:text-orange-500 text-[18px]">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-2xl font-bold">Help</h3>
            <ul className="mt-6 text-sm flex flex-col gap-4">
              <li><a href="/" className=" hover:text-orange-500 text-[18px]">Cookies Policy</a></li>
              <li><a href="/" className="hover:text-orange-500 text-[18px]">Terms & Conditions</a></li>
              <li><a href="/" className="hover:text-orange-500 text-[18px]">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-2xl font-bold">Download App</h3>
            <div className='mt-6 flex flex-col gap-2'>

              <div className='w-[181px] p-3 rounded-xl flex items-center gap-5 bg-white'>
                <img src="playstore.svg" alt="Google Play" className='h-9 w-9' />
                <div className=''>
                  <p className='text-black text-[10px] font-semibold'>Get it On</p>
                  <p className='text-black text-lg font-semibold'>Google Play</p>
                </div>
              </div>
              <div className=' p-3 rounded-xl flex items-center gap-5 bg-white'>
                <img src="appstore.svg" alt="Google Play" className='h-9 w-9' />
                <div className=''>
                  <p className='text-black text-[10px] font-semibold'>Download On The</p>
                  <p className='text-black text-xl font-semibold'>App Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='mt-10' />
        <div className='flex items-center justify-between mt-4'>
          <p className="text-center text-gray-500 text-sm">
            © Copyright 2025, all right reserve by
          </p>

          <div className="flex justify-center gap-4">
            <Link to="https://x.com/Coincapconvert"><img src='x.svg' alt='' /></Link>
            <Link to=""><img src='tiktok.svg' alt='' /></Link>
            <Link to="https://www.instagram.com/coincapconvert/"><img src='instagram.svg' alt='' /></Link>
            <Link to="www.youtube.com/@Coincapconvert"><img src='youtube.png' alt='' /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer