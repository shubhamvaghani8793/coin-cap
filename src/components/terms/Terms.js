import React from 'react'
import Navbar from '../navbar/Navbar'

const Terms = () => {
    return (
        <>
            <Navbar />
            <img src='converterbg1.png' alt='' className='absolute top-0 left-0 h-80 md:h-auto' />
            <img src='converterbg2.png' alt='' className='absolute top-52 right-0  w-[350px] h-[700px] md:top-0 md:h-[800px] md:w-auto' />
            <div className="text-white min-h-screen p-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-[75px] font-bold bg-gradient-to-r from-[#F3510D] to-[#F67611] bg-clip-text text-transparent">Terms & Conditions</h1>
                    <nav className="flex space-x-4 text-sm text-gray-400 mt-2">
                        <a href="#" className="hover:text-white">Terms & Conditions</a>
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Cookies Policy</a>
                    </nav>

                    <div className="mt-6">
                        <p className="text-gray-300">Cookie Policy for CoinCapConvert</p>
                        <p className="text-gray-400">Effective Date: [Insert Date]</p>
                    </div>

                    <section className="mt-6">
                        <h2 className="text-xl font-semibold text-white">1. Introduction</h2>
                        <p className="text-gray-400 mt-2">
                            CoinCapConvert (“we,” “our,” “us”) uses cookies and similar technologies to enhance your
                            experience on our website. This Cookie Policy explains what cookies are, how we use
                            them, and your choices regarding their use.
                        </p>
                    </section>

                    <section className="mt-6">
                        <h2 className="text-xl font-semibold text-white">2. What are cookies</h2>
                        <p className="text-gray-400 mt-2">
                            Cookies are small text files stored on your device when you visit a website. They help
                            websites recognize your device, store preferences, and improve performance. Cookies can
                            be session cookies (deleted when you close your browser) or persistent cookies (which
                            remain on your device for a defined period).
                        </p>
                    </section>

                    <section className="mt-6">
                        <h2 className="text-xl font-semibold text-white">3. How we use cookies</h2>
                        <p className="text-gray-400 mt-2">We use cookies to:</p>
                        <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                            <li>Improve website functionality and user experience</li>
                            <li>Analyze user traffic patterns and preferences</li>
                            <li>Personalize content and advertisements</li>
                            <li>Enhance security and fraud prevention</li>
                        </ul>
                    </section>

                    <section className="mt-6">
                        <h2 className="text-xl font-semibold text-white">4. Third-party cookies</h2>
                        <p className="text-gray-400 mt-2">
                            We may use third-party services (e.g., Google Analytics, advertising networks) that
                            place cookies on our website to track usage and improve marketing performance, which we
                            encourage you to review.
                        </p>
                    </section>

                    <section className="mt-6">
                        <h2 className="text-xl font-semibold text-white">5. Managing cookies</h2>
                        <p className="text-gray-400 mt-2">
                            You can manage or disable cookies through your browser settings. Most browsers allow
                            you to:
                        </p>
                        <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                            <li>Delete existing cookies</li>
                            <li>Block cookies from specific websites</li>
                            <li>Set preferences for how cookies are used</li>
                        </ul>
                    </section>

                    <section className="mt-6">
                        <h2 className="text-xl font-semibold text-white">6. Updates to this policy</h2>
                        <p className="text-gray-400 mt-2">
                            We may update this Cookie Policy from time to time. Changes will be posted on this page
                            with an updated effective date.
                        </p>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Terms