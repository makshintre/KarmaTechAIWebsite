import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [stats, setStats] = useState({
    costReduction: 0,
    efficiency: 0,
    implementations: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        costReduction: prev.costReduction < 40 ? prev.costReduction + 1 : 40,
        efficiency: prev.efficiency < 65 ? prev.efficiency + 1 : 65,
        implementations: prev.implementations < 100 ? prev.implementations + 1 : 100
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          {/* Company Name and Headline */}
          <div className="mb-6">
            <h1 className="text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Karma Tech
              </span>
            </h1>
            <h2 className="text-4xl font-semibold text-white mb-4">
              Custom Software Solutions
            </h2>
          </div>
          
          {/* Main Value Proposition */}
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your Application. Your Control.
          </p>
          
          {/* Descriptive Subtext */}
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            We transform your business processes with AI-powered custom software solutions, 
            giving you complete ownership and control of your digital future.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex justify-center gap-6 mb-16">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-blue-400 text-blue-400 hover:border-blue-300 hover:text-blue-300 px-8 py-3 rounded-lg font-medium transition-all duration-200">
              Learn More
            </button>
          </div>

          {/* Stats Section (Kept as is) */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-blue-400 mb-2">{stats.costReduction}%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-blue-400 mb-2">{stats.efficiency}%</div>
              <div className="text-gray-300">Efficiency Increase</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-blue-400 mb-2">{stats.implementations}+</div>
              <div className="text-gray-300">Implementations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10"></div>
    </section>
  );
};

export default HeroSection;