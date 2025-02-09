import React from 'react'
import { Link } from 'react-router-dom'

const ContactUs = () => {
    return (
        <div className='relative mt-40'>

            <img src='contactusbg.svg' alt='' className='absolute right-0 bottom-[-350px] h-[900px] w-[300px] z-[-10] sm:h-auto sm:w-auto ' />
            <div className='flex flex-col justify-between items-center px-4 mb-16 z-100 xl:px-32 gap-10 md:gap-5 md:flex-row sm:px-16'>
                <div className='max-w-[350px] place-items-center'>
                    <p className='text-3xl text-white text-left font-semibold max-w-[800px] w-full lg:mx-w-[800px] lg:text-[50px] lg:leading-[50px]'>Get It On The <span className='bg-gradient-to-r from-[#F3510D] to-[#F67611] bg-clip-text text-transparent'>Crypto Action</span></p>

                    <div className="flex justify-between mt-5 lg:mt-10 w-72 sm:w-full">
                        <Link to="https://x.com/Coincapconvert"><img src='x.svg' alt='' className='h-[35px] w-[35px] lg:h-[46px] lg:w-[46px]' /></Link>
                        <Link to=""><img src='tiktok.svg' alt='' className='h-[35px] w-[35px] lg:h-[46px] lg:w-[46px]' /></Link>
                        <Link to="https://www.instagram.com/coincapconvert/"><img src='instagram.svg' alt='' className='h-[35px] w-[35px] lg:h-[46px] lg:w-[46px]' /></Link>
                        <Link to="www.youtube.com/@Coincapconvert"><img src='youtube.png' alt='' className='h-[35px] w-[35px] lg:h-[46px] lg:w-[46px]' /></Link>
                    </div>
                </div>
                <div className="bg-transparent border border-[#676767] p-6 rounded-2xl w-full max-w-md shadow-lg">
                    <form className="space-y-4">
                        <div>
                            <label className="text-white text-lg font-semibold">Your Name</label>
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                className="w-full mt-2 p-3 rounded-lg bg-[#23232E] text-white border border-[#676767] focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        <div>
                            <label className="text-white text-lg font-semibold">Your Email</label>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="w-full mt-2 p-3 rounded-lg bg-[#23232E] text-white border border-[#676767] focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        <div>
                            <label className="text-white text-lg font-semibold">Your Message</label>
                            <textarea
                                rows="4"
                                placeholder="Enter Your Message"
                                className="w-full resize-none mt-2 p-3 rounded-lg bg-[#23232E] text-white border border-[#676767] focus:outline-none focus:ring-2 focus:ring-orange-500 h-32"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-2 bg-gradient-to-r from-[#F3510D] to-[#F67611] px-5 py-3 text-white rounded-lg"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs