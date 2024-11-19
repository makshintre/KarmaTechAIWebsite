import React from 'react';

export const AboutUs = () => {
    return (
        <div className="p-6">
            <div className="max-w-xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About Karma Tech</h2>
                <p className="text-md text-gray-700 mb-4">
                    We provide custom software development solutions that transform your business workflow. Our AI-powered approach creates tailored systems that drive efficiency, automation, and growth across all business functions.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <p className="text-sm text-gray-800">
                        Our unique value proposition: Become the owner of your software, eliminating dependencies on external vendors and gaining unmatched control and adaptability.
                    </p>
                </div>

                <div className="flex justify-center space-x-4">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">40%</div>
                        <div className="text-sm text-gray-600">Cost Reduction</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">65%</div>
                        <div className="text-sm text-gray-600">Efficiency Increase</div>
                    </div>
                </div>

                <p className="italic text-sm text-gray-600 mt-4">
                    "Your Application. Your Control. Made Possible with Karma Tech."
                </p>
            </div>
        </div>
    );
};
