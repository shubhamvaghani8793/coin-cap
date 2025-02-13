import React, { useEffect, useState } from 'react'
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
import Footer from '../footer/Footer'
import ContactUs from '../contactus/ContactUs'
import Sidebar from '../sidebar/Sidebar'
import DropDown from '../../ui/DropDown'
import { getCurrencyFlag } from '../../api/apiService'
import { DummyCryptoData } from './db'
 
// Currency options with flags
const currencyOptions = [
  { value: "USD", img: "usa-flag.svg", label: "USA", code: "USD" },
  { value: "INR", img: "bitcoin.svg", label: "India", code: "AED" },
  { value: "ARS", img: "bitcoin.svg", label: "Argentine", code: "ARS" },
  { value: "AUD", img: "bitcoin.svg", label: "Australian", code: "AUD" },
  { value: "BDT", img: "bitcoin.svg", label: "Bangladeshi", code: "BDT" },
];

// crypto option data
const cryptoOptions = [
  { value: "BTC", img: "usa-flag.svg", label: "Bitcoin", code: "BTC" },
  { value: "ETH", img: "bitcoin.svg", label: "Etherium", code: "ETH" },
  { value: "BNB", img: "bitcoin.svg", label: "Solana", code: "BNB" },
  { value: "XRP", img: "bitcoin.svg", label: "Tether", code: "XRP" },
];

function Home() {

  const [selectedCurrency, setSelectedCurrency] = useState(currencyOptions[0]);

  const [cryptoAllData, setCryptoAllData] = useState(null)

  const [selectedCrypto1, setSelectedCrypto1] = useState(cryptoOptions[0]);
  const [selectedCrypto2, setSelectedCrypto2] = useState(cryptoOptions[1]);

  // dummy data
  const data = {
    "result": "success",
    "documentation": "https://www.exchangerate-api.com/docs",
    "terms_of_use": "https://www.exchangerate-api.com/terms",
    "supported_codes": [
      [
        "AED",
        "UAE Dirham"
      ],
      [
        "AFN",
        "Afghan Afghani"
      ],
      [
        "ALL",
        "Albanian Lek"
      ],
      [
        "AMD",
        "Armenian Dram"
      ],
      [
        "ANG",
        "Netherlands Antillian Guilder"
      ],
      [
        "AOA",
        "Angolan Kwanza"
      ],
      [
        "ARS",
        "Argentine Peso"
      ],
      [
        "AUD",
        "Australian Dollar"
      ],
      [
        "AWG",
        "Aruban Florin"
      ],
    ]
  }

  const [currencyFlag, setCurrencyFlag] = useState();
  const [cryptoData, setCryptoData] = useState(null);

  // get country currency Flag
  const getCurrency = async () => {
    try {
      const data = await getCurrencyFlag();
      setCurrencyFlag(data.supported_codes)
      // console.log(data.supported_codes);
    } catch (error) {
      console.log(error); 
    }
  }

  const modifiedData = () => {
    const newArray = DummyCryptoData?.data?.map((item) => {
      const { id, name, quote, symbol } = item;
      return {id, value: name, label: name, quote, code: symbol}
    })

    setCryptoAllData(newArray)
  }
  
  useEffect(() => {
    // getCurrency()
    modifiedData()
  },[])
  // console.log(DummyCryptoData.data);
  // console.log(cryptoAllData);
  console.log(selectedCrypto1);

  const handleSwap = () => {
    setSelectedCrypto1(selectedCrypto2)
    setSelectedCrypto2(selectedCrypto1)
  }
  
  return (
    <>
      <Navbar/>
      <Sidebar />

      {/* blurry Element */}
      
      <div className='h-screen max-w-[1600px] mx-auto'>
        {/* icons image */}
          <img src='converterbg1.png' alt='' className='absolute top-0 left-0 h-80 -z-50 md:h-auto' />
          <img src='converterbg2.png' alt='' className='absolute top-0 right-0 h-80 -z-50 md:h-auto w-[300px]' />

        <div className='relative -z-50'>
          <img className='free-coin left-[70px] opacity-[0.3] sm:opacity-[0.8] lg:opacity-[1]' src={bitcoinIcon} alt="bitcoin" />
          <img className='absolute w-10 left-[170px] top-28 opacity-[0.8] lg:opacity-[1]' src={star_3} alt="bitcoin" />
          <img className='absolute w-14 -left-[20px] top-[40vh] opacity-[0.8] lg:opacity-[1]' src={coin_1} alt="coin-1" />
          <img className='absolute w-20 left-[60px] top-[60vh] opacity-[0.8] lg:opacity-[1]' src={coin_2} alt="coin-2" />
          <img className='absolute w-16 sm:-right-[30px] right-[0px] top-[30vh] opacity-[0.8] lg:opacity-[1]' src={coin_3} alt="coin-3" />
          <img className='absolute w-20 sm:-right-[2  0px] right-[0px] top-[60vh] opacity-[0.8] lg:opacity-[1]' src={etheriumIcon} alt="etheriumIcon" />
          <img className='absolute w-20 right-[100px] top-[100px] opacity-[0.8] lg:opacity-[1]' src={coin_4} alt="coin-4" />
          <img className='absolute w-10 right-[190px] top-[50px] opacity-[0.8] lg:opacity-[1]' src={star_2} alt="star_2" />
          <img className='absolute right-[200px] top-[60vh] opacity-[0.8] lg:opacity-[1]' src={star_3} alt="star_3" />
          <img className='absolute w-16 right-[240px] top-[10px] hidden sm:block opacity-[0.8] lg:opacity-[1]' src={star_1} alt="star_3" />
        </div>

        <section className='flex flex-col max-w-[1400px] mx-auto items-center px-3'>
          <h1 className='text-3xl sm:text-5xl md:text-7xl font-semibold max-w-2xl text-center mt-8 transition'>
            Crypto <span className='text-brandOrange'>Market cap</span> Calculator
          </h1>

          <div className='w-full py-8 px-2 bg-[#67676733] flex flex-col items-center border border-[#676767] rounded-md max-w-[800px] mt-9 backdrop-blur-[2px]'>   
           
            <DropDown
              displayLable={false}
              options={currencyOptions}
              selectedValue={selectedCurrency}
              onSelect={setSelectedCurrency} 
            />

            <div className='flex sm:flex-row flex-col items-center justify-center gap-7  w-full mt-6'>
              <div className='flex w-full items-center gap-6 sm:max-w-[250px] max-w-[350px] rounded-md bg-[#23232E]'>
                {/* <select className='outline-none w-2/3 lightGary flex-1 py-2 px-1 rounded-md'
                  name="currency"
                >
                    <option value="eth">Ethereum  </option>
                    <option value="btc">Bitcoin</option>
                    <option value="xrp">XRP</option>
                    <option value="usdt">Tether USDT</option>
                </select> */}
                
                <DropDown
                  displayLable={true}
                  options={cryptoAllData || cryptoOptions}
                  selectedValue={selectedCrypto1}
                  onSelect={setSelectedCrypto1} 
                />
                <p className='w-1/3 text-center px-2'>{selectedCrypto1?.quote?.USD?.price.toFixed(2) || '0.00'}</p>
              </div>

              <button className='rotate-90 md:rotate-0' onClick={handleSwap}>
                <img src={swapIcon} alt="swapIcon" className='min-w-5'  />
              </button>
              
              <div className='flex w-full items-center gap-6 sm:max-w-[250px] max-w-[350px] rounded-md bg-[#23232E]'>
                {/* <select className='outline-none w-2/3 lightGary flex-1 py-2 px-1 rounded-md'
                  name="currency"
                >
                    <option value="eth">Ethereum</option>
                    <option value="btc">Bitcoin</option>
                    <option value="xrp">XRP</option>
                    <option value="usdt">Tether USDT</option>
                </select> */}
                <DropDown
                  displayLable={true}
                  options={cryptoAllData || cryptoOptions}
                  selectedValue={selectedCrypto2}
                  onSelect={setSelectedCrypto2} 
                />
                <p className='w-1/3 text-center px-2'>{selectedCrypto2?.quote?.USD?.price.toFixed(2) || '0.00'}</p>
              </div>
            </div>

            <hr className='border border-[#ffffff50] my-6 w-[95%]'/>
            
            <section className='text-center'>   
              <p className='text-xl sm:text-4xl font-semibold '>
                <span className='uppercase'> eth </span> 
                  with the market cap of 
                <span className='uppercase'> btc </span>
              </p>

              <div className='flex justify-center items-center gap-4 mt-3'>
                <img src={bitcoin_sm} alt="icon" />
                <p className='text-md sm:text-2xl'>400 B <span className='text-[#0dc71c] font-bold'> {`(5.15x)`} </span></p>
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
                <input type="range" className='w-1/2 h-[6px] accent-[#F30606] cursor-pointer' />

                <div className='flex justify-end w-1/2 items-center gap-2'>
                  <img src={bitcoin_sm} alt="icon" />
                    <p className='text-sm sm:text-lg'>$ 23,434234.00 
                      <span className='text-[#F67611]'> {`(5.15x)`} </span>
                    </p>
                </div>
              </div>

              {/* range input */}
              <div className='flex mt-3 items-center gap-8'>
                <input type="range" className='w-1/2 h-[6px] accent-[#00C410] cursor-pointer'/>

                <div className='flex justify-end w-1/2 items-center gap-2'>
                  <img src={bitcoin_sm} alt="icon" />
                    <p className='text-sm sm:text-lg'>$ 23,434234.00 
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

        <ContactUs />

        <Footer />
      </div>
    </>
  )
}

export default Home