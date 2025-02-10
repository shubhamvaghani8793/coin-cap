import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';

const PrivacyPolicy = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <img src='converterbg1.png' alt='' className='absolute top-0 left-0 h-80 -z-50 md:h-auto' />
            <img src='converterbg2.png' alt='' className='absolute top-52 right-0 w-[350px] h-[700px] -z-50 md:top-0 md:h-[800px] md:w-auto' />
            <div className="text-white min-h-screen pt-10 md:pt-20 p-6">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-[30px] md:text-[75px] font-bold bg-gradient-to-r from-[#F3510D] to-[#F67611] bg-clip-text text-transparent">Privacy Policy</h1>
                    <div className="mt-16">
                        <p className="text-lg md:text-2xl">Effective Date: February 7, 2025</p>
                        <p className="text-lg md:text-2xl">Coin Cap Convert ("Company," "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application and services.</p>
                    </div>
                    
                    <section className="mt-6 md:mt-12">
                        <h2 className="text-[30px] md:text-[50px] font-semibold text-white">1. Information We Collect</h2>
                        <ul className="list-disc list-inside mt-3 space-y-1 md:text-xl">
                            <li><strong>Personal Information:</strong> We may collect your name, email, phone number, payment details (if applicable), and other information you provide when you create an account, subscribe to services, or make a purchase.</li>
                            <li><strong>Usage Data:</strong> We collect non-personal information such as device type, operating system, IP address, app usage statistics, browsing behavior, and interaction logs.</li>
                            <li><strong>Cookies and Tracking Technologies:</strong> We may use cookies, web beacons, and similar tracking tools to enhance user experience, analyze trends, and improve our services.</li>
                        </ul>
                    </section>
                    
                    <section className="mt-3 md:mt-6">
                        <h2 className="text-[30px] md:text-[50px] font-semibold text-white">2. How We Use Your Information</h2>
                        <ul className="list-disc list-inside mt-3 space-y-1 md:text-xl">
                            <li>To provide, maintain, and improve our services.</li>
                            <li>To personalize user experience and offer tailored content.</li>
                            <li>To enhance security, prevent fraud, and enforce legal policies.</li>
                            <li>To comply with applicable laws and respond to legal inquiries.</li>
                            <li>To communicate with users regarding updates, security notices, and customer support.</li>
                            <li>To analyze app performance and improve features.</li>
                        </ul>
                    </section>
                    
                    <section className="mt-3 md:mt-6">
                        <h2 className="text-[30px] md:text-[50px] font-semibold text-white">3. Information Sharing and Disclosure</h2>
                        <ul className="list-disc list-inside mt-3 space-y-1 md:text-xl">
                            <li><strong>With Third-Party Service Providers:</strong> We may share data with payment processors, analytics providers, and cloud storage partners.</li>
                            <li><strong>Legal Compliance:</strong> We may disclose information if required by law, subpoena, or to protect our legal rights.</li>
                            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, user data may be transferred.</li>
                        </ul>
                    </section>
                    
                    <section className="mt-3 md:mt-6">
                        <h2 className="text-[30px] md:text-[50px] font-semibold text-white">4. Data Retention</h2>
                        <p className="mt-3 md:text-xl">We retain personal information as long as necessary to fulfill the purposes outlined in this policy. Users may request data deletion, subject to our legal obligations.</p>
                    </section>
                    
                    <section className="mt-3 md:mt-6">
                        <h2 className="text-[30px] md:text-[50px] font-semibold text-white">5. Security Measures</h2>
                        <p className="mt-3 md:text-xl">We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
                    </section>
                    
                    <section className="mt-3 md:mt-6">
                        <h2 className="text-[30px] md:text-[50px] font-semibold text-white">6. Your Rights and Choices</h2>
                        <ul className="list-disc list-inside mt-3 space-y-1 md:text-xl">
                            <li>You may request access, correction, or deletion of your personal data.</li>
                            <li>You may opt out of marketing communications at any time.</li>
                            <li>You may disable cookies in your browser settings, though some features may be affected.</li>
                        </ul>
                    </section>
                    
                    <section className="mt-3 md:mt-6">
                        <h2 className="text-[30px] md:text-[50px] font-semibold text-white">7. Changes to This Policy</h2>
                        <p className="mt-3 md:text-xl">We reserve the right to update this Privacy Policy at any time. Continued use of our services after changes means you accept the revised policy.</p>
                    </section>
                    
                    <section className="mt-3 md:mt-6 mb-6">
                        <h2 className="text-[30px] md:text-[50px] font-semibold text-white">8. Contact Us</h2>
                        <p className="mt-3 md:text-xl">If you have any questions about this Privacy Policy, contact us at Support@coincapconvert.com.</p>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;
