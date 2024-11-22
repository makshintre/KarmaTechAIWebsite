import React from 'react';

export const PartnerProgram = () => {
    return (
        <div className="min-h-screen bg-[#1a1f2e] text-white p-8">
            <div className="max-w-6xl mx-auto text-center">
                {/* Main Title */}
                <h1 className="text-6xl font-bold mb-12">
                    <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Partner Programs
                    </span>
                </h1>

                {/* Main Description */}
                <div className="bg-[#1e2538]/50 backdrop-blur rounded-xl p-8 mb-16 max-w-4xl mx-auto">
                    <p className="text-xl text-gray-300 leading-relaxed">
                        Our capability to develop complex solutions, such as ERP customizations, allows us to deliver rapid, reliable results for clients using platforms like Zoho and Odoo.
                    </p>
                </div>

                {/* Partners Grid */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-blue-400">We actively partner with:</h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="bg-[#1e2538]/50 backdrop-blur rounded-xl p-6 flex items-center justify-center">
                            <p className="text-xl text-blue-300 font-semibold">Channel Partners</p>
                        </div>
                        <div className="bg-[#1e2538]/50 backdrop-blur rounded-xl p-6 flex items-center justify-center">
                            <p className="text-xl text-blue-300 font-semibold">System Integrators</p>
                        </div>
                        <div className="bg-[#1e2538]/50 backdrop-blur rounded-xl p-6 flex items-center justify-center">
                            <p className="text-xl text-blue-300 font-semibold">Resellers</p>
                        </div>
                        <div className="bg-[#1e2538]/50 backdrop-blur rounded-xl p-6 flex items-center justify-center">
                            <p className="text-xl text-blue-300 font-semibold">Hardware and Networking Vendors</p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-[#1e2538]/50 backdrop-blur rounded-xl p-8 max-w-4xl mx-auto">
                    <p className="text-2xl text-blue-300 leading-relaxed">
                        We invite inquiries for customized application development that guarantees complete flexibility for users.
                    </p>
                </div>
            </div>
        </div>
    );
};
