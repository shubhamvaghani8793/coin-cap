import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Sidebar from '../sidebar/Sidebar'

const Terms = () => {
    const [policy, setPolicy] = useState("terms")
    return (
        <>
            <Navbar />
            <Sidebar />
            <img src='converterbg1.png' alt='' className='absolute top-0 left-0 h-80 -z-50 md:h-auto' />
            <img src='converterbg2.png' alt='' className='absolute top-52 right-0  w-[350px] h-[700px] -z-50 md:top-0 md:h-[800px] md:w-auto' />
            <div className="text-white min-h-screen pt-20 p-6">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-[30px] md:text-[75px] font-bold bg-gradient-to-r from-[#F3510D] to-[#F67611] bg-clip-text text-transparent">Terms & Conditions</h1>
                    <nav className="flex gap-4 text-sm md:text-xl md:gap-12 mt-2">
                        <p
                            onClick={() => setPolicy("terms")}
                            className={`cursor-pointer ${policy === "terms"
                                ? "bg-gradient-to-r from-[#F3510D] to-[#F67611] bg-clip-text text-transparent"
                                : ""
                                }`}
                        >
                            Terms & Conditions
                        </p>
                        <p
                            onClick={() => setPolicy("privacy")}

                            className={`cursor-pointer ${policy === "privacy"
                                ? "bg-gradient-to-r from-[#F3510D] to-[#F67611] bg-clip-text text-transparent"
                                : ""
                                }`}
                        >
                            Privacy Policy

                        </p>
                        <p
                            onClick={() => setPolicy("cookie")}

                            className={`cursor-pointer ${policy === "cookie"
                                ? "bg-gradient-to-r from-[#F3510D] to-[#F67611] bg-clip-text text-transparent"
                                : ""
                                }`}
                        >
                            Cookies Policy

                        </p>
                    </nav>

                    <div className="mt-16">
                        <p className="text-lg md:text-2xl">Cookie Policy for CoinCapConvert</p>
                        <p className="text-lg md:text-2xl">Effective Date: [Insert Date]</p>
                    </div>

                    {
                        policy === "terms" &&
                        <>
                            <section className="mt-6 md:mt-12">
                                <h2 className="text-[30px] md:text-[50px] font-semibold text-white">1. Introduction</h2>
                                <p className="mt-3 md:text-xl ">
                                    CoinCapConvert (“we,” “our,” “us”) uses cookies and similar technologies to enhance your
                                    experience on our website. This Cookie Policy explains what cookies are, how we use
                                    them, and your choices regarding their use.
                                </p>
                            </section>

                            <section className="mt-3 md:mt-6">
                                <h2 className="text-[30px] md:text-[50px] font-semibold text-white">2. What are cookies</h2>
                                <p className="mt-3 md:text-xl">
                                    Cookies are small text files stored on your device when you visit a website. They help
                                    websites recognize your device, store preferences, and improve performance. Cookies can
                                    be session cookies (deleted when you close your browser) or persistent cookies (which
                                    remain on your device for a defined period).
                                </p>
                            </section>

                            <section className="mt-3 md:mt-6">
                                <h2 className="text-[30px] md:text-[50px] font-semibold text-white">3. How we use cookies</h2>
                                <p className="mt-3 md:text-xl">We use cookies to:</p>
                                <ul className="list-disc list-inside mt-3 space-y-1">
                                    <li className='md:text-xl'>Improve website functionality and user experience</li>
                                    <li className='md:text-xl'>Analyze user traffic patterns and preferences</li>
                                    <li className='md:text-xl'>Personalize content and advertisements</li>
                                    <li className='md:text-xl'>Provide personalized content and advertisements</li>
                                </ul>
                            </section>

                            <section className="mt-3 md:mt-6">
                                <h2 className="text-[30px] md:text-[50px] font-semibold text-white">4. Types of Cookies We Use</h2>
                                <ul className="mt-3 list-disc list-inside space-y-1">
                                    <li className='md:text-xl'>Essential Cookies: Required for website functionality and security.</li>
                                    <li className='md:text-xl'>Analytical Cookies: Help us understand website usage and improve performance.</li>
                                    <li className='md:text-xl'>Functional Cookies: Remember user preferences and enhance usability.</li>
                                    <li className='md:text-xl'>Advertising Cookies: Used to deliver relevant ads and track campaign effectiveness.</li>
                                </ul>
                            </section>

                            <section className="mt-3 md:mt-6">
                                <h2 className="text-[30px] md:text-[50px] font-semibold text-white">5. Third-party cookies</h2>
                                <p className="mt-3 md:text-xl">
                                    We may use third-party services (e.g., Google Analytics, advertising networks) that
                                    place cookies on our website to track usage and improve marketing performance, which we
                                    encourage you to review.
                                </p>
                            </section>

                            <section className="mt-3 md:mt-6">
                                <h2 className="text-[30px] md:text-[50px] font-semibold text-white">6. Managing cookies</h2>
                                <p className="mt-3 md:text-xl">
                                    You can manage or disable cookies through your browser settings. Most browsers allow
                                    you to:
                                </p>
                                <ul className="list-disc list-inside  mt-3 space-y-1">
                                    <li className='md:text-xl'>Delete existing cookies</li>
                                    <li className='md:text-xl'>Block cookies from specific websites</li>
                                    <li className='md:text-xl'>Set preferences for how cookies are used</li>
                                </ul>
                                <p className='md:text-xl'>Please note that disabling cookies may affect website functionality and user experience.</p>
                            </section>

                            <section className="mt-3 md:mt-6">
                                <h2 className="text-[30px] md:text-[50px] font-semibold text-white">7. Updates to this policy</h2>
                                <p className="mt-3 md:text-xl">
                                    We may update this Cookie Policy from time to time. Changes will be posted on this page
                                    with an updated effective date.
                                </p>
                            </section>
                        </>
                    }

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Terms