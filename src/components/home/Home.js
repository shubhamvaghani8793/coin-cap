import React from 'react'
import bitcoinIcon from '../../assets/Bitcoin-1.svg'
import etheriumIcon from '../../assets/Etherium.svg'
import star_1 from '../../assets/star-img.svg'
import star_2 from '../../assets/star-img-2.svg'
import star_3 from '../../assets/star-img-3.svg'
import coin_1 from '../../assets/coin-1.svg'
import coin_2 from '../../assets/coin-2.svg'
import coin_3 from '../../assets/coin-3.svg'
import coin_4 from '../../assets/coin-5.svg'
import usa_flag from '../../assets/usa-flag.svg'

function Home() {
  return (
    <>
      {/* blurry Element */}
      
      <div className='h-screen max-w-[1500px] mx-auto'>
        <div className='blurryDot-sm absolute top-[-100px] -z-50'></div>

        {/* icons image */}
        <div className='relative -z-50'>
        <div className='blurryDot-md absolute -right-36 top-10 -z-50'></div>
          <img className='free-coin left-[70px]' src={bitcoinIcon} alt="bitcoin" />
          <img className='absolute w-10 left-[170px] top-28' src={star_3} alt="bitcoin" />
          <img className='absolute w-14 -left-[20px] top-[40vh]' src={coin_1} alt="coin-1" />
          <img className='absolute w-20 left-[60px] top-[60vh]' src={coin_2} alt="coin-2" />
          <img className='absolute w-16 -right-[30px] top-[30vh]' src={coin_3} alt="coin-3" />
          <img className='absolute w-20 -right-[10px] top-[60vh]' src={etheriumIcon} alt="etheriumIcon" />
          <img className='absolute w-20 right-[100px] top-[100px]' src={coin_4} alt="coin-4" />
          <img className='absolute w-10 right-[190px] top-[50px]' src={star_2} alt="star_2" />
          <img className='absolute right-[200px] top-[60vh]' src={star_3} alt="star_3" />
          <img className='absolute w-16 right-[240px] top-[10px]' src={star_1} alt="star_3" />
        </div>

        <section className='flex flex-col max-w-[1400px] mx-auto items-center px-3'>
          <h1 className='text-7xl font-semibold max-w-2xl text-center mt-8 transition'>
            Crypto <span className='text-brandOrange'>Market cap</span> Calculator
          </h1>

          <div className='w-full py-4 px-2 bg-[#6767670c] flex flex-col items-center border border-[#676767] rounded-md max-w-[800px] mt-9'>   
            <select className='outline-none option-color w-24 py-2 px-4 rounded-md appearance-none'
              name="currency"
            >
                <option value="usd">USD</option>
                <option value="inr">INR</option>
                <option value="eur">EUR</option>
            </select>


          </div>
        </section>

      </div>
    </>
  )
}

export default Home