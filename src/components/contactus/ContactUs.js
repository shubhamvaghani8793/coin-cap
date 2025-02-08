import React from 'react'
import { Link } from 'react-router-dom'

const ContactUs = () => {
    return (
        <div className='relative'>
            <div className='flex justify-between'>
                <div></div>
                <img src='contactusbg.svg' alt='' className='flex items-end' />
            </div>
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full flex justify-between max-w-[90%]'>
                <div className='max-w-[350px]'>
                    <p className='text-[50px] text-white text-center font-semibold max-w-[800px] w-full'>Get It On The <span className='bg-gradient-to-r from-[#F3510D] to-[#F67611] bg-clip-text text-transparent'>Crypto Action</span></p>
                    <div className="flex justify-between mt-10">
                        <Link to="https://x.com/Coincapconvert"><img src='x.svg' alt='' className='h-[46px] w-[46px]' /></Link>
                        <Link to=""><img src='tiktok.svg' alt='' className='h-[46px] w-[46px]' /></Link>
                        <Link to="https://www.instagram.com/coincapconvert/"><img src='instagram.svg' alt='' className='h-[46px] w-[46px]' /></Link>
                        <Link to="www.youtube.com/@Coincapconvert"><img src='youtube.png' alt='' className='h-[46px] w-[46px]' /></Link>
                    </div>
                </div>
                <div className="bg-[#10101A] p-6 rounded-2xl w-full max-w-md shadow-lg">
                    <form className="space-y-4">
                        <div>
                            <label className="text-white text-lg font-semibold">Your Name</label>
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                className="w-full mt-2 p-3 rounded-lg bg-[#1B1B29] text-white border border-[#29293A] focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        <div>
                            <label className="text-white text-lg font-semibold">Your Email</label>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="w-full mt-2 p-3 rounded-lg bg-[#1B1B29] text-white border border-[#29293A] focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        <div>
                            <label className="text-white text-lg font-semibold">Your Message</label>
                            <textarea
                                placeholder="Enter Your Message"
                                className="w-full mt-2 p-3 rounded-lg bg-[#1B1B29] text-white border border-[#29293A] focus:outline-none focus:ring-2 focus:ring-orange-500 h-32"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition"
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