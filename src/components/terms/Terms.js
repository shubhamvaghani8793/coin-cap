import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';

const Terms = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <img src='converterbg1.png' alt='' className='absolute top-0 left-0 h-80 -z-50 md:h-auto' />
            <img src='converterbg2.png' alt='' className='absolute top-52 right-0 w-[350px] h-[700px] -z-50 md:top-0 md:h-[800px] md:w-auto' />
            <div className="text-white min-h-screen pt-10 md:pt-20 p-6">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-[30px] md:text-[75px] font-bold bg-gradient-to-r from-[#F3510D] to-[#F67611] bg-clip-text text-transparent">Terms & Conditions</h1>

                    <div className="mt-16">
                        <p className="text-lg md:text-2xl">Effective Date : February 7, 2025</p>
                        <p className="text-lg md:text-2xl"> These Terms & Conditions ("Terms") govern your use of Coin Cap Convert
                            ("Service"), provided by Coin Cap Convert ("Company"). By accessing or using
                            the Service, you agree to be bound by these Terms.</p>
                    </div>
                    <section className="mt-6 md:mt-12">
                        <h2 className="text-[30px] md:text-[50px] font-semibold text-white">1. Use of Service</h2>
                        <ul className="list-disc list-inside mt-3 space-y-1 md:text-xl">
                            <li>You must be at least 18 years old or of legal age in your jurisdiction to use the Service.</li>
                            <li>You agree to use the Service only for lawful purposes and in compliance with applicable laws.</li>
                            <li>We reserve the right to suspend, restrict, or terminate your access if you violate these Terms.</li>
                            <li>You acknowledge that cryptocurrency markets are volatile and that our Service does not provide financial advice.</li>
                        </ul>
                    </section>
                    <section className="mt-3 md:mt-6">
                        <h2 className="text-[30px] md:text-[50px] font-semibold text-white">2. Disclaimers</h2>
                        <ul className="list-disc list-inside mt-3 space-y-1 md:text-xl">
                            <li>The Service provides cryptocurrency conversion tools for informational purposes only.</li>
                            <li>We do not provide financial, investment, or legal advice. You acknowledge that all transactions are at your own risk.</li>
                            <li>We do not guarantee the accuracy, completeness, or timeliness of market data as API data across different platforms may vary.</li>
                            <li>The Service is provided "as is" and "as available," without warranties of any kind, either express or implied.</li>
                        </ul>
                    </section>
                    <section className="mt-3 md:mt-6">
                        <h2 className="text-[30px] md:text-[50px] font-semibold text-white">3. Limitation of Liability</h2>
                        <ul className="list-disc list-inside mt-3 space-y-1 md:text-xl">
                            <li>To the maximum extent permitted by law, we are not liable for any direct, indirect, incidental, or consequential damages arising from your use of the Service.</li>
                            <li>We do not guarantee uninterrupted or error-free operation of the Service.</li>
                            <li>We are not responsible for any financial losses, missed investment opportunities, or incorrect conversion rates displayed.</li>
                            <li>We are not responsible for unauthorized access to user accounts due to weak passwords or negligence.</li>
                        </ul>
                    </section>
                    <section className="mt-3 md:mt-6">
                        <h2 className="text-[30px] md:text-[50px] font-semibold text-white">4. Indemnification</h2>
                        <p className="mt-3 md:text-xl">You agree to indemnify and hold Coin Cap Convert, its affiliates, employees, and partners harmless from any claims, damages, or expenses arising from:</p>
                        <ul className="list-disc list-inside mt-3 space-y-1 md:text-xl">
                            <li>Your use of the Service.</li>
                            <li>Your violation of these Terms.</li>
                            <li>Your infringement of any third-party rights, including intellectual property rights.</li>
                        </ul>
                    </section>
                    <section className="mt-3 md:mt-6">
                        <h2 className="text-[30px] md:text-[50px] font-semibold text-white">5. Intellectual Property</h2>
                        <ul className="list-disc list-inside mt-3 space-y-1 md:text-xl">
                            <li>All content, trademarks, logos, and software related to the Service remain our exclusive property.</li>
                            <li>You may not copy, modify, distribute, or sell any part of the Service without our written permission.</li>
                        </ul>
                    </section>
                    <section className="mt-3 md:mt-6">
                        <h2 className="text-[30px] md:text-[50px] font-semibold text-white">6. Third-Party Services</h2>
                        <ul className="list-disc list-inside mt-3 space-y-1 md:text-xl">
                            <li>The Service may contain links to third-party websites. We are not responsible for their content, policies, or practices.</li>
                            <li>Any third-party transactions conducted through our Service are solely between you and the respective third party.</li>
                        </ul>
                    </section>
                    <section className="mt-3 md:mt-6">
                        <h2 className="text-[30px] md:text-[50px] font-semibold text-white">7. Account Termination</h2>
                        <p className="mt-3 md:text-xl">We reserve the right to terminate or suspend accounts without prior notice if we suspect fraudulent activities, security threats, or violations of these Terms.</p>
                    </section>
                    <section className="mt-3 md:mt-6">
                        <h2 className="text-[30px] md:text-[50px] font-semibold text-white">8. Governing Law & Dispute Resolution</h2>
                        <ul className="list-disc list-inside mt-3 space-y-1 md:text-xl">
                            <li>These Terms shall be governed by the laws of the State of Delaware, USA.</li>
                            <li>Any disputes shall be resolved through binding arbitration in Delaware, in accordance with the rules of the American Arbitration Association.</li>
                            <li>Users waive their right to participate in class-action lawsuits against the Company.</li>
                        </ul>
                    </section>
                    <section className="mt-3 md:mt-6">
                        <h2 className="text-[30px] md:text-[50px] font-semibold text-white">9. Changes to Terms</h2>
                        <p className="mt-3 md:text-xl">We may update these Terms at any time. Continued use of the Service after updates means you accept the revised Terms.</p>
                    </section>
                    <section className="mt-3 md:mt-6 mb-6">
                        <h2 className="text-[30px] md:text-[50px] font-semibold text-white">10. Contact Us</h2>
                        <p className="mt-3 md:text-xl">For questions about these Terms, contact us at Support@coincapconvert.com</p>
                    </section>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default Terms;
