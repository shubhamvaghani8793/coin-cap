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
import { getAllCryptoList, getCurrencyFlag, getCurrencyRateData } from '../../api/apiService'
import ProgressBar from '@ramonak/react-progress-bar'
import { Puff, RotatingLines } from 'react-loader-spinner'
 
function Home() {

  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [cryptoAllData, setCryptoAllData] = useState(null)
  const [currencyData,  setCurrencyData] = useState([])
  const [selectedCrypto1, setSelectedCrypto1] = useState(null);
  const [selectedCrypto2, setSelectedCrypto2] = useState(null);
  const [marketCap, setMarketCap] = useState(null)
  // currently selected currency value
  const [currencyFlag, setCurrencyFlag] = useState(1);
  const [currencyFlagCodes, setCurrencyFlagCodes] = useState(null);

// select currency based on flag
useEffect(() => {
    const CurrencyDataConverter = () => {
      const newArr = currencyFlagCodes?.supported_codes?.map((item) => {
        return {value: `${item[1]} ${item[0]}`, label: item[1], code: item[0]}
      })
      const findUSDIndex = newArr?.findIndex((item) => item.code === "USD")
      
      setCurrencyData(newArr)
      setSelectedCurrency(newArr[findUSDIndex])
    }

    if (currencyFlagCodes) {
        CurrencyDataConverter();
    }
},[currencyFlagCodes])

const handleSelectedCurrency = (value) => {
    setSelectedCurrency(value)
}
  
  const [cryptoData, setCryptoData] = useState(null);

  // get country currency Flag
  const getCurrency = async () => {
    setIsLoading(true)
    try {
      const data = await getCurrencyFlag();
      setCurrencyFlagCodes(data)
    } catch (error) {
        console.log(error); 
    } finally {
        setIsLoading(false)
    }
  }

  const modifiedData = async () => {

    setIsFetching(true)
    try {
        const response = await getAllCryptoList();
        const DummyCryptoData = response?.data?.data;
    
        const newArray = DummyCryptoData?.map((item) => {
          const { 
            id, 
            name, 
            quote, 
            circulating_supply,
            symbol, 
          } = item;
          
          return { 
            id, 
            value: name, 
            label: name, 
            circulating_supply,
            quote, 
            code: symbol
          }
        })
        
        setCryptoAllData(newArray || [])
        setSelectedCrypto1(newArray[0] || null)
        setSelectedCrypto2(newArray[1] || null)
    } catch (error) {
        console.log(error);
    } finally {
        setIsFetching(false)
    }
  }

  // currency rate
  const getCurrencyRate = async (flag) => {
    setIsLoading(true)
      try {
        const data = await getCurrencyRateData(flag);
        setCurrencyFlag(data?.conversion_result)
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false)
      }
  }
  
  /////////////////////////////////////////        Api Call         ///////////////////////////////////  

  useEffect(() => {
    if(selectedCurrency){
        getCurrencyRate(selectedCurrency?.code)
    }
  }, [selectedCurrency])
  
  useEffect(() => {
    getCurrency()
    modifiedData()
  },[])

  /////////////////////////////////////////        Api Call         ///////////////////////////////////  

  const handleSwap = () => {
    setSelectedCrypto1(selectedCrypto2)
    setSelectedCrypto2(selectedCrypto1)
  }

  useEffect(() => {
    // total market cap calulation
    const field1 = selectedCrypto2?.quote?.USD?.market_cap;
    const field2 = selectedCrypto1?.circulating_supply;
    let value = field1 / field2;

    const valueStr = value?.toString();
    const [integerPart] = valueStr?.split(".");

    value = value * currencyFlag;

    if (integerPart?.length >= 3) {
      value = value.toFixed(2)
    }else{
      value = value.toFixed(4)
    }
    
    setMarketCap(value)

    // under/above caluculation
    const cap1 = selectedCrypto1?.quote?.USD?.market_cap;  
    const cap2 = selectedCrypto2?.quote?.USD?.market_cap;  
    
  },[selectedCrypto1, selectedCrypto2])

  const getXreturn = () => {
      const field1 = selectedCrypto2?.quote?.USD?.market_cap;
      const field2 = selectedCrypto1?.circulating_supply;
      let value = field1 / field2;
      const answer = value / selectedCrypto1?.quote?.USD?.price;
      return answer.toFixed(2);
    }
  
  // get x return for ProjectGrowth
  const getXreturn2 = () => {
      const field1 = selectedCrypto2?.quote?.USD?.market_cap;
      const field2 = selectedCrypto1?.circulating_supply;
      let value = field1 / field2;
      const answer = value / selectedCrypto1?.quote?.USD?.price;
      return answer;
    }

  const cryptoPrice = (price) => {
    let newCurrency = price * currencyFlag
    
    const valueStr = newCurrency?.toString();
    const [integerPart] = valueStr?.split(".");

    // console.log(typeof newCurrency);
    // console.log(parseFloat(newCurrency?.toFixed(4))?.toLocaleString('en-US'));
    
    if (integerPart?.length >= 3) {
      return newCurrency?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }else{
      return newCurrency?.toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 4 })
    }

    // Number(selectedCrypto2?.quote?.USD?.price.toFixed(2)).toLocaleString('en-US')
  }

  const handleProgress1 = () => {
    const value = (selectedCrypto1?.quote?.USD?.market_cap 
      / selectedCrypto2?.quote?.USD?.market_cap
     ) * 100
     return value;
  }

  const handleProgress2 = () => {
    const value = (selectedCrypto2?.quote?.USD?.market_cap 
      / selectedCrypto1?.quote?.USD?.market_cap
     ) * 100
     return value;
  }

  const getBothMarket = () => {

    const field1 = selectedCrypto2?.quote?.USD?.market_cap;
    const field2 = selectedCrypto1?.circulating_supply;
    let value = field1 / field2;

    const valueStr = value?.toString();
    const [integerPart] = valueStr?.split(".");

    value = value * currencyFlag;   
    
    if (integerPart?.length >= 3) {
        return `${value?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      }else{
        return `${value?.toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 4 })}`
      }
  }

    if (isFetching) {
        return (
            <>
                <div className='flex justify-center items-center h-screen'>
                    <Puff
                        visible={true}
                        height="80"
                        width="80"
                        color="#F84F0D"
                        ariaLabel="puff-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            </>
        )
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
           
            <div className='relative'>
                <DropDown
                    displayLable={false}
                    options={currencyData}
                    selectedValue={selectedCurrency}
                    onSelect={(value) => handleSelectedCurrency(value)} 
                />

                {
                    isLoading && (
                        <span className='absolute top-2 -right-10'>
                            <RotatingLines
                                visible={true}
                                height="25"
                                width="25"
                                color="gray"
                                strokeWidth="5"
                                strokeColor="#f67611"
                                animationDuration="1"
                                ariaLabel="rotating-lines-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            />
                        </span>
                    )
                }
            </div>

            <div className='flex sm:flex-row flex-col items-center justify-center gap-7  w-full mt-6'>
              <div className='flex w-full justify-between items-center gap-1 sm:max-w-[40%] max-w-[350px] rounded-md bg-[#23232E]'>
                {/* <select className='outline-none w-2/3 lightGary flex-1 py-2 px-1 rounded-md'
                  name="currency"
                >
                    <option value="eth">Ethereum  </option>
                    <option value="btc">Bitcoin</option>
                    <option value="xrp">XRP</option>
                    <option value="usdt">Tether USDT</option>
                </select> */}
                
                <DropDown
                  isForCrypto={true}
                  displayLable={true}
                  options={cryptoAllData}
                  selectedValue={selectedCrypto1}
                  onSelect={setSelectedCrypto1} 
                />
                <p className='pl-2 pr-3 break-all'>
                    <span className=''>{selectedCurrency?.code} </span>
                    {selectedCrypto1?.quote?.USD?.price && cryptoPrice(selectedCrypto1?.quote?.USD?.price) || '0.00'}
                </p>
              </div>

              <button className='rotate-90 md:rotate-0' onClick={handleSwap}>
                <img src={swapIcon} alt="swapIcon" className='min-w-5'  />
              </button>
              
              <div className='flex w-full justify-between items-center gap-1 sm:max-w-[40%] max-w-[350px] rounded-md bg-[#23232E]'>
                {/* <select className='outline-none w-2/3 lightGary flex-1 py-2 px-1 rounded-md'
                  name="currency"
                >
                    <option value="eth">Ethereum</option>
                    <option value="btc">Bitcoin</option>
                    <option value="xrp">XRP</option>
                    <option value="usdt">Tether USDT</option>
                </select> */}
                  
                <DropDown
                  isForCrypto={true}
                  displayLable={true}
                  options={cryptoAllData}
                  selectedValue={selectedCrypto2}
                  onSelect={setSelectedCrypto2} 
                />
                <p className='pl-2 pr-3 break-all'>
                  <span className=''>{selectedCurrency?.code} </span> 
                  {selectedCrypto2?.quote?.USD?.price && cryptoPrice(selectedCrypto2?.quote?.USD?.price) || '0.00'}
                </p>
              </div>
            </div>

            <hr className='border border-[#ffffff50] my-6 w-[95%]'/>
            
            <section className='text-center w-[95%] sm:w-fit'>   
              <p className='text-xl sm:text-4xl font-semibold '>
                { selectedCrypto1 && selectedCrypto1 && (
                  <>
                    <span className='uppercase'> {selectedCrypto1?.code} </span> 
                      with the market cap of
                    <span className='uppercase'> {selectedCrypto2?.code} </span>
                  </>
                )}
              </p>
              <div className='flex justify-center items-center gap-2 mt-3'>
              <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${selectedCrypto1?.id}.png`} alt="coin" className="w-5 h-5" />
                { selectedCrypto1 && selectedCrypto1 && (
                    <>
                      <p className='text-md sm:text-2xl'>
                        {marketCap && (
                            <>
                                <span className=''>{selectedCurrency?.code} </span>
                                {getBothMarket() || '00.00'}
                            </>
                            )
                        } 
                        
                        { marketCap && (
                          <>
                            <span 
                                className={`
                                    ${
                                        (handleProgress1() > handleProgress2())
                                        ? "text-[#ea2e2e]" 
                                        : (handleProgress1() === handleProgress2())
                                        ? "text-white"
                                        : "text-[#0dc71c]"
                                    }
                                    font-bold
                                `}
                            >
                                {` (${getXreturn()}x)`}
                            </span>
                          </>
                        )}
                      </p>
                    </>
                  )
                }
              </div>

              { selectedCrypto1 && selectedCrypto1 && (
                <>
                  <p className='mt-2'>
                    <span> {selectedCrypto1?.code} </span>
                    is 
                    
                    <span className='text-base'> 
                      {` 
                        ${(selectedCrypto1?.quote?.USD?.market_cap / 
                          selectedCrypto2?.quote?.USD?.market_cap).toFixed(2)
                        }x
                      `}
                    </span>

                    { 
                      (selectedCrypto1?.quote?.USD?.market_cap > selectedCrypto2?.quote?.USD?.market_cap)
                      ? 'ABOVE' : 'UNDER'}
                    {/* {getUnderAbove()} */}
                    
                    <span> {selectedCrypto2?.code} </span>
                  </p>
                </>
              )}


              <hr className='border border-[#ffffff50] my-6'/>

              {/* range input */}
              <div className='flex items-center gap-2'>

                <ProgressBar 
                  completed={handleProgress1()} 
                  className='w-1/2'
                  height='6px'
                  isLabelVisible={false}
                  bgColor={handleProgress1() >= handleProgress2() ? "#00C410" : '#F30606'}
                />

                <div className='flex justify-end w-1/2 items-center gap-2'>
                  <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${selectedCrypto1?.id}.png`} alt="icon" className='max-w-5 max-h-5 sm:max-w-6 sm:max-h-6' />
                    <p className='text-sm sm:text-base'>
                        <span className=''>{selectedCurrency?.code} </span>
                      { 
                        Number((selectedCrypto1?.quote?.USD?.market_cap * currencyFlag ).toFixed(2)).toLocaleString('en-US')
                      }
                    </p>
                </div>
              </div>

              {/* range input */}
              <div className='flex mt-3 items-center gap-2'>

                <ProgressBar 
                  completed={handleProgress2()} 
                  className='w-1/2'
                  height='6px'
                  isLabelVisible={false}
                  bgColor={handleProgress2() >= handleProgress1() ? "#00C410" : '#F30606'}
                />

                {/* <input type="range" className='w-1/2 h-[6px] accent-[#00C410] cursor-pointer'/> */}

                <div className='flex justify-end w-1/2 items-center gap-2'>
                  <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${selectedCrypto2?.id}.png`} alt="icon" className='max-w-5 max-h-5 sm:max-w-6 sm:max-h-6' />
                    <p className='text-sm sm:text-base'>
                    <span className=''>{selectedCurrency?.code} </span>
                    {
                        Number(selectedCrypto2?.quote?.USD?.market_cap?.toFixed(2)).toLocaleString('en-US')
                      }
                    </p>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* Projected Growth component */}
        <ProjectedGrowth 
            selectedCrypto1={selectedCrypto1}
            selectedCrypto2={selectedCrypto2}
            getXreturn2={getXreturn2}
            selectedCurrency={selectedCurrency}
            currencyFlag={currencyFlag}
        />

        {/* Popular Crypto Component */}
        <Popular />

        <ContactUs />

        <Footer />
      </div>
    </>
  )
}

export default Home