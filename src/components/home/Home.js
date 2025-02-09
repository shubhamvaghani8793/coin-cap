import React from 'react'
import Navbar from '../navbar/Navbar'
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
import swapIcon from '../../assets/changeIcon.svg'
import bitcoin_sm from '../../assets/bitcoin-sm.svg'
import ProjectedGrowth from '../projectedGrowth/ProjectedGrowth'
import Popular from '../popular/Popular'

function Home() {
  return (
    <>
      <Navbar/>

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
          <img className='absolute w-20 -right-[30px] top-[60vh]' src={etheriumIcon} alt="etheriumIcon" />
          <img className='absolute w-20 right-[100px] top-[100px]' src={coin_4} alt="coin-4" />
          <img className='absolute w-10 right-[190px] top-[50px]' src={star_2} alt="star_2" />
          <img className='absolute right-[200px] top-[60vh]' src={star_3} alt="star_3" />
          <img className='absolute w-16 right-[240px] top-[10px]' src={star_1} alt="star_3" />
        </div>

        <section className='flex flex-col max-w-[1400px] mx-auto items-center px-3'>
          <h1 className='text-7xl font-semibold max-w-2xl text-center mt-8 transition'>
            Crypto <span className='text-brandOrange'>Market cap</span> Calculator
          </h1>

          <div className='w-full py-8 px-2 bg-[#67676733] flex flex-col items-center border border-[#676767] rounded-md max-w-[800px] mt-9 backdrop-blur-[2px]'>   
           
            <select className='outline-none option-color w-24 py-2 px-4 rounded-md appearance-none'
              name="currency"
            >
                <option value="usd">USD</option>
                <option value="inr">INR</option>
                <option value="eur">EUR</option>
            </select>

            <div className='flex gap-3 justify-center gap-7  w-full mt-6'>
              <div className='flex w-full px-2 items-center gap-6 max-w-[250px] rounded-md lightGary'>
                <select className='outline-none w-2/3 lightGary flex-1 py-2 px-1 rounded-md'
                  name="currency"
                >
                    <option value="eth">Ethereum</option>
                    <option value="btc">Bitcoin</option>
                    <option value="xrp">XRP</option>
                    <option value="usdt">Tether USDT</option>
                </select>
                <p className='w-1/3 text-center '>$ 4.43</p>
              </div>

              <button>
                <img src={swapIcon} alt="swapIcon" className='min-w-5'  />
              </button>
              
              <div className='flex w-full px-2 items-center gap-6 max-w-[250px] rounded-md lightGary'>
                <select className='outline-none w-2/3 lightGary flex-1 py-2 px-1 rounded-md'
                  name="currency"
                >
                    <option value="eth">Ethereum</option>
                    <option value="btc">Bitcoin</option>
                    <option value="xrp">XRP</option>
                    <option value="usdt">Tether USDT</option>
                </select>
                <p className='w-1/3 text-center '>$ 4.43</p>
              </div>
            </div>

            <hr className='border border-[#ffffff50] my-6 w-[95%]'/>
            
            <section className='text-center'>   
              <p className='text-4xl font-semibold '>
                <span className='uppercase'> eth </span> 
                  with the market cap of 
                <span className='uppercase'> btc </span>
              </p>

              <div className='flex justify-center items-center gap-4 mt-3'>
                <img src={bitcoin_sm} alt="icon" />
                <p className='text-2xl'>400 B <span className='text-[#0dc71c] font-bold'> {`(5.15x)`} </span></p>
              </div>

              <p className='mt-2'>
                <span> ETH  </span>
                is 
                <span> 0.32x </span>
                under
                <span> BTC </span>
              </p>

              <hr className='border border-[#ffffff50] my-6'/>

              {/* range input */}
              <div className='flex items-center gap-8'>
                <input type="range" className='w-1/2 h-[6px] accent-[#F30606] cursor-pointer'/>

                <div className='flex justify-end w-1/2 items-center gap-2'>
                  <img src={bitcoin_sm} alt="icon" />
                    <p className='text-lg'>$ 23,434234.00 
                      <span className='text-[#F67611]'> {`(5.15x)`} </span>
                    </p>
                </div>
              </div>

              {/* range input */}
              <div className='flex mt-3 items-center gap-8'>
                <input type="range" className='w-1/2 h-[6px] accent-[#00C410] cursor-pointer'/>

                <div className='flex justify-end w-1/2 items-center gap-2'>
                  <img src={bitcoin_sm} alt="icon" />
                    <p className='text-lg'>$ 23,434234.00 
                      <span className='text-[#0dc71c]'> {`(5.15x)`} </span>
                    </p>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* Projected Growth component */}
        <ProjectedGrowth />

        {/* Popular Crypto Component */}
        <Popular />
        
      </div>
    </>
  )
}

export default Home