import React from 'react';

export const AboutUs = () => {
    return (
        <div className="p-6">
            <div className="max-w-xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    About Karma Tech
                </h2>
                <p className="text-lg text-white mb-6 leading-relaxed">
                    We provide custom software development solutions that transform your business workflow. Our AI-powered approach creates tailored systems that drive efficiency, automation, and growth across all business functions.
                </p>

                <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-6 rounded-lg mb-6 backdrop-blur-sm border border-blue-500/20">
                    <p className="text-lg text-blue-100">
                        Our unique value proposition: Become the owner of your software, eliminating dependencies on external vendors and gaining unmatched control and adaptability.
                    </p>
                </div>

                <div className="flex justify-center space-x-8 mb-6">
                    <div className="text-center bg-white/10 backdrop-blur rounded-xl p-4 shadow-lg">
                        <div className="text-3xl font-bold text-blue-400">40%</div>
                        <div className="text-sm text-blue-200">Cost Reduction</div>
                    </div>
                    <div className="text-center bg-white/10 backdrop-blur rounded-xl p-4 shadow-lg">
                        <div className="text-3xl font-bold text-blue-400">65%</div>
                        <div className="text-sm text-blue-200">Efficiency Increase</div>
                    </div>
                </div>

                <p className="italic text-lg text-blue-300 mt-6 font-medium">
                    "Your Application. Your Control. Made Possible with Karma Tech."
                </p>
            </div>
        </div>
    );
};
