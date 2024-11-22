import React from 'react';

export const Products = () => {
    return (
        <div className="min-h-screen bg-[#1a1f2e] text-white p-8">
            <div className="max-w-6xl mx-auto text-center">
                {/* Main Title */}
                <h1 className="text-6xl font-bold mb-12">
                    <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Products & Services
                    </span>
                </h1>

                {/* Main Description */}
                <div className="mb-16 text-xl text-center max-w-4xl mx-auto leading-relaxed text-gray-300">
                    We specialize in AI-augmented custom software development, where clients not only receive cutting-edge solutions but also the ownership of their source code. This guarantees full control, flexibility, and independence to adapt the software as your needs evolve.
                </div>

                {/* Tagline Box */}
                <div className="bg-[#1e2538]/50 backdrop-blur rounded-xl p-8 mb-16 max-w-4xl mx-auto">
                    <p className="text-2xl text-blue-300 mb-4">Our tagline says it all:</p>
                    <p className="text-3xl font-bold text-blue-400">
                        "Your Application. Your Control."
                    </p>
                </div>

                {/* Value Proposition Section */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold mb-12 text-blue-400">How We Deliver Value to Customers</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-[#1e2538]/50 backdrop-blur rounded-xl p-6">
                            <h3 className="text-xl font-semibold mb-4 text-blue-300">Complete Ownership</h3>
                            <p className="text-gray-300">
                                We provide you with the source code, empowering your organization to make future adjustments or enhancements independently.
                            </p>
                        </div>
                        <div className="bg-[#1e2538]/50 backdrop-blur rounded-xl p-6">
                            <h3 className="text-xl font-semibold mb-4 text-blue-300">Tailored Solutions</h3>
                            <p className="text-gray-300">
                                Each application is built with your unique needs and business processes in mind, ensuring precise alignment with your goals.
                            </p>
                        </div>
                        <div className="bg-[#1e2538]/50 backdrop-blur rounded-xl p-6">
                            <h3 className="text-xl font-semibold mb-4 text-blue-300">Future-Ready</h3>
                            <p className="text-gray-300">
                                Leveraging AI, we ensure your software evolves with technological advancements.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Trust Section */}
                <div>
                    <h2 className="text-4xl font-bold mb-12 text-blue-400">How We Generate Trust</h2>
                    <div className="bg-[#1e2538]/50 backdrop-blur rounded-xl p-8 max-w-4xl mx-auto">
                        <p className="text-xl text-blue-300 mb-8">We believe trust begins with transparency and empowerment:</p>
                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            <div>
                                <h3 className="text-lg font-semibold mb-3 text-blue-300">Source Code Ownership</h3>
                                <p className="text-gray-300">You have full control over your software, unlike traditional SaaS models.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-3 text-blue-300">Proven Expertise</h3>
                                <p className="text-gray-300">Our successful track record in delivering complex, personalized solutions is a testament to our capabilities.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-3 text-blue-300">Commitment to Quality</h3>
                                <p className="text-gray-300">With agile practices and domain-specific expertise, we deliver solutions that exceed expectations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
